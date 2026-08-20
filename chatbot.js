// ============================================================
// WorldBite Cooking Assistant — powered by Groq (free, fast inference)
// ============================================================
// SETUP: paste your free Groq API key below (get one at console.groq.com/keys)
const GROQ_API_KEY = "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";
const GROQ_MODEL = "llama-3.3-70b-versatile"; // free tier, strong quality/speed balance
// ============================================================

(
function(){
  // ---------- Inject styles ----------
  const style = document.createElement('style');
  style.textContent = `
    .wb-chat-bubble{
      position:fixed; bottom:24px; right:24px; z-index:200;
      width:60px; height:60px; border-radius:50%;
      background: linear-gradient(135deg, #e0913f, #c1502e);
      display:flex; align-items:center; justify-content:center;
      font-size:1.6rem; cursor:pointer; border:none;
      box-shadow: 0 10px 30px rgba(193,80,46,0.4);
      transition: transform 0.2s ease;
    }
    .wb-chat-bubble:hover{ transform: scale(1.08); }
    .wb-chat-panel{
      position:fixed; bottom:96px; right:24px; z-index:200;
      width:360px; max-width:calc(100vw - 32px); height:500px; max-height:calc(100vh - 140px);
      background:#1c130d; border:1px solid rgba(244,234,217,0.14); border-radius:18px;
      display:none; flex-direction:column; overflow:hidden;
      box-shadow: 0 20px 60px rgba(0,0,0,0.5);
      font-family:'Sora', sans-serif;
    }
    .wb-chat-panel.open{ display:flex; }
    .wb-chat-header{
      padding:1rem 1.2rem; background:linear-gradient(135deg, rgba(224,145,63,0.15), rgba(193,80,46,0.1));
      border-bottom:1px solid rgba(244,234,217,0.14);
      display:flex; align-items:center; justify-content:space-between;
    }
    .wb-chat-header h4{ font-family:'Fraunces', serif; font-size:1rem; color:#f4ead9; font-weight:600; margin:0; }
    .wb-chat-header p{ font-size:0.72rem; color:rgba(244,234,217,0.55); margin:0.1rem 0 0; }
    .wb-chat-close{ background:none; border:none; color:rgba(244,234,217,0.6); font-size:1.3rem; cursor:pointer; line-height:1; }
    .wb-chat-close:hover{ color:#f4ead9; }
    .wb-chat-messages{
      flex:1; overflow-y:auto; padding:1rem 1.1rem; display:flex; flex-direction:column; gap:0.7rem;
    }
    .wb-msg{ max-width:85%; padding:0.65rem 0.9rem; border-radius:14px; font-size:0.86rem; line-height:1.5; }
    .wb-msg.bot{ background:#241a12; color:#f4ead9; align-self:flex-start; border-bottom-left-radius:4px; }
    .wb-msg.user{ background:#e0913f; color:#1c130d; align-self:flex-end; border-bottom-right-radius:4px; font-weight:500; }
    .wb-msg.typing{ color:rgba(244,234,217,0.5); font-style:italic; }
    .wb-chat-input-row{
      display:flex; gap:0.5rem; padding:0.8rem; border-top:1px solid rgba(244,234,217,0.14);
    }
    .wb-chat-input-row input{
      flex:1; background:#241a12; border:1px solid rgba(244,234,217,0.14); border-radius:999px;
      padding:0.6rem 1rem; color:#f4ead9; font-family:'Sora',sans-serif; font-size:0.85rem;
    }
    .wb-chat-input-row input:focus{ outline:none; border-color:#e0913f; }
    .wb-chat-input-row button{
      background:#e0913f; color:#1c130d; border:none; border-radius:999px; width:38px; height:38px;
      cursor:pointer; font-size:1rem; flex-shrink:0;
    }
    .wb-chat-input-row button:disabled{ opacity:0.5; cursor:not-allowed; }
    @media (max-width:480px){
      .wb-chat-panel{ right:16px; bottom:88px; width:calc(100vw - 32px); }
      .wb-chat-bubble{ right:16px; bottom:16px; }
    }
  `;
  document.head.appendChild(style);
 
  // ---------- Inject markup ----------
  const bubble = document.createElement('button');
  bubble.className = 'wb-chat-bubble';
  bubble.innerHTML = '🍳';
  bubble.setAttribute('aria-label', 'Open cooking assistant');
 
  const panel = document.createElement('div');
  panel.className = 'wb-chat-panel';
  panel.innerHTML = `
    <div class="wb-chat-header">
      <div>
        <h4>WorldBite Chef</h4>
        <p>Ask me anything about cooking</p>
      </div>
      <button class="wb-chat-close" aria-label="Close chat">✕</button>
    </div>
    <div class="wb-chat-messages" id="wbMessages"></div>
    <div class="wb-chat-input-row">
      <input type="text" id="wbInput" placeholder="e.g. substitute for buttermilk?">
      <button id="wbSend" aria-label="Send">➤</button>
    </div>
  `;
 
  document.body.appendChild(bubble);
  document.body.appendChild(panel);
 
  const messagesEl = panel.querySelector('#wbMessages');
  const inputEl = panel.querySelector('#wbInput');
  const sendBtn = panel.querySelector('#wbSend');
  const closeBtn = panel.querySelector('.wb-chat-close');
 
  let opened = false;
  let history = [];
 
  function addMessage(text, sender){
    const div = document.createElement('div');
    div.className = `wb-msg ${sender}`;
    div.textContent = text;
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return div;
  }
 
  bubble.addEventListener('click', () => {
    opened = !opened;
    panel.classList.toggle('open', opened);
    if(opened && messagesEl.children.length === 0){
      addMessage("Hey! I'm the WorldBite Chef 🍳 Ask me about substitutions, techniques, or which recipe to try tonight.", 'bot');
    }
  });
  closeBtn.addEventListener('click', () => { opened = false; panel.classList.remove('open'); });
 
  // Build a compact recipe list for context (title + country + category only, to keep prompt small)
  function recipeContext(){
    if(typeof RECIPES === 'undefined') return '';
    return RECIPES.map(r => `${r.title} (${r.country}, ${r.category})`).join(', ');
  }
 
  async function sendMessage(){
    const text = inputEl.value.trim();
    if(!text) return;
 
    if(!GROQ_API_KEY || GROQ_API_KEY.indexOf('PASTE_YOUR') === 0){
      addMessage("The site owner hasn't added a free Groq API key yet — add one in chatbot.js to activate me!", 'bot');
      return;
    }
 
    addMessage(text, 'user');
    inputEl.value = '';
    sendBtn.disabled = true;
    const typingEl = addMessage('Thinking...', 'bot typing');
 
    history.push({ role: 'user', content: text });
 
    try {
      const systemPrompt = `You are the WorldBite Chef, a warm, encouraging AI cooking assistant embedded on the WorldBite recipe website. Help users with cooking questions: ingredient substitutions, techniques, timing, troubleshooting a dish, or recommending a recipe. Keep answers concise (2-5 sentences) and friendly. When relevant, you may suggest a dish from this site's recipe collection: ${recipeContext()}. If asked something unrelated to cooking/food, gently redirect to cooking topics.`;
 
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: [{ role: 'system', content: systemPrompt }, ...history],
          max_tokens: 300,
          temperature: 0.7
        })
      });
 
      const data = await res.json();
      typingEl.remove();
 
      if(data.error){
        addMessage(`Error: ${data.error.message || 'something went wrong'}`, 'bot');
        return;
      }
 
      const reply = data.choices && data.choices[0] && data.choices[0].message
        ? data.choices[0].message.content
        : "Sorry, I couldn't come up with an answer just now — try again?";
 
      addMessage(reply, 'bot');
      history.push({ role: 'assistant', content: reply });
 
      // keep history from growing unbounded
      if(history.length > 20) history = history.slice(-20);
 
    } catch(err){
      typingEl.remove();
      addMessage("Couldn't reach the kitchen (network error) — try again in a moment.", 'bot');
    } finally {
      sendBtn.disabled = false;
    }
  }
 
  sendBtn.addEventListener('click', sendMessage);
  inputEl.addEventListener('keydown', (e) => { if(e.key === 'Enter') sendMessage(); });
})();
 
