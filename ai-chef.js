/*
 * WorldBite AI Chef
 * Uses Pipecat Client JS + Small WebRTC from esm.sh so the current
 * static GitHub Pages site does not need a bundler.
 *
 * Set this to your deployed Pipecat backend, e.g.
 * https://worldbite-ai.example.com
 */
const WORLDBITE_PIPECAT_URL =
  window.WORLDBITE_PIPECAT_URL || "http://localhost:7860";

(function () {
  const cssAlreadyLoaded = [...document.styleSheets].some(s =>
    s.href && s.href.includes("ai-chef.css")
  );
  if (!cssAlreadyLoaded) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "ai-chef.css";
    document.head.appendChild(link);
  }

  const panel = document.createElement("section");
  panel.className = "ai-chef-panel";
  panel.id = "worldbiteAiChef";
  panel.setAttribute("aria-hidden", "true");
  panel.innerHTML = `
    <div class="ai-chef-head">
      <div>
        <h3>👨‍🍳 WorldBite Chef</h3>
        <p>Your real-time cooking companion</p>
      </div>
      <button class="ai-chef-close" type="button" aria-label="Close">×</button>
    </div>
    <div class="ai-chef-content">
      <div class="ai-chef-avatar">
        <img src="chef.png" alt="WorldBite Chef"
             onerror="this.style.display='none';this.nextElementSibling.style.display='block';">
        <span class="ai-chef-fallback" style="display:none">👨‍🍳</span>
      </div>
      <div class="ai-chef-status">Ready to cook?</div>
      <div class="ai-chef-transcript">Tap the microphone and say “Hello Chef”.</div>
      <button class="ai-chef-mic" type="button" aria-label="Start chef">🎙️</button>
      <div class="ai-chef-note">Your microphone is only used after you press the button.</div>
    </div>
  `;
  document.body.appendChild(panel);

  const launcher = document.createElement("button");
  launcher.className = "ai-chef-launcher";
  launcher.type = "button";
  launcher.innerHTML = "🎙️ Talk to Chef";
  document.body.appendChild(launcher);

  const status = panel.querySelector(".ai-chef-status");
  const transcript = panel.querySelector(".ai-chef-transcript");
  const mic = panel.querySelector(".ai-chef-mic");
  const close = panel.querySelector(".ai-chef-close");

  let client = null;
  let connected = false;
  let loading = false;

  function currentRecipeContext() {
    try {
      if (!window.RECIPES) return "";
      const id = new URLSearchParams(location.search).get("id");
      const recipe = window.RECIPES.find(r => r.id === id);
      if (!recipe) return "";
      return `The user is viewing the WorldBite recipe "${recipe.title}" from ${recipe.country}. Ingredients: ${recipe.ingredients.join(", ")}. Steps: ${recipe.steps.join(" | ")}`;
    } catch (_) { return ""; }
  }

  function openPanel() {
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
  }

  function closePanel() {
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
  }

  async function connectChef() {
    if (loading || connected) return;
    loading = true;
    status.textContent = "Connecting to WorldBite Chef...";
    transcript.textContent = "Please allow microphone access when your browser asks.";

    try {
      const [{ PipecatClient }, { SmallWebRTCTransport }] = await Promise.all([
        import("https://esm.sh/@pipecat-ai/client-js@1.11.0"),
        import("https://esm.sh/@pipecat-ai/small-webrtc-transport@1.10.4")
      ]);

      client = new PipecatClient({
        transport: new SmallWebRTCTransport(),
        enableMic: true,
        enableCam: false,
        callbacks: {
          onConnected: () => {
            connected = true;
            loading = false;
            mic.classList.add("active");
            status.textContent = "Listening...";
            transcript.textContent = "You're connected. Start speaking.";
          },
          onDisconnected: () => {
            connected = false;
            loading = false;
            mic.classList.remove("active");
            status.textContent = "Disconnected";
          },
          onError: (error) => {
            console.error("WorldBite Pipecat error:", error);
            loading = false;
            connected = false;
            mic.classList.remove("active");
            status.textContent = "Connection error";
            transcript.textContent = "Check that the Pipecat backend is running and the URL is correct.";
          },
        },
      });

      await client.startBotAndConnect({
        endpoint: `${WORLDBITE_PIPECAT_URL.replace(/\/$/, "")}/start`,
        requestData: {
          page: location.pathname,
          recipeContext: currentRecipeContext(),
        },
      });
    } catch (error) {
      console.error(error);
      loading = false;
      status.textContent = "Could not connect";
      transcript.textContent = error?.message || "Please check the Pipecat server.";
    }
  }

  async function disconnectChef() {
    if (!client) return;
    try { await client.disconnect(); } catch (_) {}
    client = null;
    connected = false;
    loading = false;
    mic.classList.remove("active");
    status.textContent = "Ready to cook?";
  }

  launcher.addEventListener("click", openPanel);
  close.addEventListener("click", disconnectChef);
  close.addEventListener("click", closePanel);

  mic.addEventListener("click", async () => {
    if (connected) {
      await disconnectChef();
    } else {
      await connectChef();
    }
  });

  window.addEventListener("beforeunload", disconnectChef);
})();
