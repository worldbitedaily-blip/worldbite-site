// WorldBite Recipe Database
// Starter set — structure supports scaling to thousands of entries.
// Each recipe: id, title, country, flag, category, cookTime, difficulty, servings,
// description, ingredients[], steps[], videoId (YouTube ID, add your real ones), color (accent)

const RECIPES = [
  // ---------------- BREAKFAST ----------------
  {
    id: "shakshuka-israel",
    title: "Shakshuka",
    country: "Israel",
    flag: "🇮🇱",
    category: "breakfast",
    cookTime: "30 min",
    difficulty: "Easy",
    servings: 4,
    description: "Eggs poached in a spiced tomato and pepper sauce, finished with fresh herbs and crumbled feta.",
    ingredients: [
      "2 tbsp olive oil","1 onion, diced","1 red bell pepper, diced","3 garlic cloves, minced",
      "1 tsp cumin","1 tsp paprika","1/2 tsp chili flakes","800g canned crushed tomatoes",
      "6 eggs","Salt and pepper","Fresh parsley","Crumbled feta (optional)"
    ],
    steps: [
      "Heat oil in a wide skillet, sauté onion and pepper until soft, about 8 minutes.",
      "Add garlic, cumin, paprika, and chili flakes; cook 1 minute until fragrant.",
      "Pour in crushed tomatoes, season with salt and pepper, simmer 12 minutes until thickened.",
      "Make 6 wells in the sauce and crack an egg into each.",
      "Cover and cook 6-8 minutes until whites are set but yolks are runny.",
      "Top with parsley and feta, serve with crusty bread."
    ],
    videoId: "",
    color: "#c1502e"
  },
  {
    id: "khachapuri-georgia",
    title: "Khachapuri",
    country: "Georgia",
    flag: "🇬🇪",
    category: "breakfast",
    cookTime: "1 hr 30 min",
    difficulty: "Medium",
    servings: 4,
    description: "Boat-shaped bread filled with molten cheese and topped with a raw egg and butter.",
    ingredients: [
      "500g bread flour","7g instant yeast","1 tsp sugar","1 tsp salt","300ml warm water",
      "2 tbsp olive oil","400g Imeruli or mozzarella cheese, shredded","200g feta, crumbled",
      "4 eggs","4 tbsp butter"
    ],
    steps: [
      "Mix flour, yeast, sugar, and salt. Add water and oil, knead 8-10 minutes until smooth.",
      "Let dough rise 1 hour until doubled.",
      "Divide into 4, roll each into an oval, fold edges up and twist ends to form a boat.",
      "Fill with mixed cheeses, leaving edges exposed.",
      "Bake at 220°C (430°F) for 15 minutes until crust is golden and cheese bubbling.",
      "Crack an egg into the center of each hot khachapuri, add a pat of butter, serve immediately."
    ],
    videoId: "CbRuWBP3k4Q",
    isShort: true,
    color: "#d9a44a"
  },
  {
    id: "congee-china",
    title: "Congee",
    country: "China",
    flag: "🇨🇳",
    category: "breakfast",
    cookTime: "1 hr",
    difficulty: "Easy",
    servings: 4,
    description: "Silky rice porridge simmered low and slow, topped with scallions, ginger, and crispy shallots.",
    ingredients: [
      "1 cup jasmine rice","8 cups chicken or vegetable stock","1 thumb ginger, sliced",
      "Salt to taste","2 scallions, sliced","Crispy fried shallots","Soy sauce","Sesame oil",
      "Optional: shredded chicken or century egg"
    ],
    steps: [
      "Rinse rice and combine with stock and ginger in a large pot.",
      "Bring to a boil, then reduce to a low simmer.",
      "Cook uncovered, stirring occasionally, 45-60 minutes until rice breaks down into a creamy porridge.",
      "Season with salt to taste.",
      "Ladle into bowls, top with scallions, crispy shallots, a drizzle of soy sauce and sesame oil."
    ],
    videoId: "",
    color: "#e0913f"
  },
  {
    id: "menemen-turkey",
    title: "Menemen",
    country: "Turkey",
    flag: "🇹🇷",
    category: "breakfast",
    cookTime: "20 min",
    difficulty: "Easy",
    servings: 2,
    description: "Turkish scrambled eggs cooked with tomatoes, green peppers, and warm spices.",
    ingredients: [
      "2 tbsp butter","1 green pepper, diced","2 tomatoes, diced","1 tsp paprika",
      "4 eggs, lightly beaten","Salt and pepper","Fresh parsley","Crusty bread"
    ],
    steps: [
      "Melt butter in a pan, sauté green pepper 3-4 minutes.",
      "Add tomatoes and paprika, cook until soft and jammy, about 8 minutes.",
      "Pour in eggs and stir gently, cooking until just set but still soft.",
      "Season, top with parsley, serve immediately with bread."
    ],
    videoId: "",
    color: "#c1502e"
  },
  {
    id: "arepas-venezuela",
    title: "Arepas",
    country: "Venezuela",
    flag: "🇻🇪",
    category: "breakfast",
    cookTime: "35 min",
    difficulty: "Easy",
    servings: 4,
    description: "Grilled corn cakes with a crisp crust and soft center, split and filled with cheese or beans.",
    ingredients: [
      "2 cups pre-cooked white cornmeal (masarepa)","2.5 cups warm water","1 tsp salt",
      "1 tbsp oil","Shredded cheese or black beans for filling"
    ],
    steps: [
      "Mix cornmeal, salt, and warm water, let sit 5 minutes until it forms a soft dough.",
      "Divide into 8 balls, flatten into 1cm-thick discs.",
      "Heat oil in a skillet, cook arepas 5-6 minutes per side until golden with a firm crust.",
      "Finish in a 180°C (350°F) oven for 10 minutes until they sound hollow when tapped.",
      "Slice open and stuff with cheese or beans."
    ],
    videoId: "",
    color: "#d9a44a"
  },
  {
    id: "dutch-baby-germany",
    title: "German Pancake (Dutch Baby)",
    country: "Germany",
    flag: "🇩🇪",
    category: "breakfast",
    cookTime: "30 min",
    difficulty: "Easy",
    servings: 4,
    description: "A puffed, oven-baked pancake with crisp edges, served with lemon and powdered sugar.",
    ingredients: [
      "3 eggs","3/4 cup milk","3/4 cup flour","1/4 tsp salt","2 tbsp sugar",
      "4 tbsp butter","Lemon wedges","Powdered sugar"
    ],
    steps: [
      "Preheat oven to 220°C (425°F) with a cast-iron skillet inside.",
      "Blend eggs, milk, flour, salt, and sugar until smooth.",
      "Melt butter in the hot skillet, swirl to coat, then pour in batter.",
      "Bake 18-20 minutes until puffed and golden.",
      "Dust with powdered sugar, serve immediately with lemon."
    ],
    videoId: "",
    color: "#e0913f"
  },

  // ---------------- LUNCH ----------------
  {
    id: "banh-xeo-vietnam",
    title: "Bánh Xèo",
    country: "Vietnam",
    flag: "🇻🇳",
    category: "lunch",
    cookTime: "45 min",
    difficulty: "Medium",
    servings: 4,
    description: "Crispy turmeric rice-flour crepes filled with pork, shrimp, and bean sprouts, wrapped in lettuce and herbs.",
    ingredients: [
      "1 cup rice flour","1/4 cup cornstarch","1 tsp turmeric","1 cup coconut milk","1 cup water",
      "200g pork belly, thinly sliced","200g shrimp, peeled","2 cups bean sprouts","4 scallions, sliced",
      "Lettuce and herb leaves for wrapping","Fish sauce, lime, sugar, chili for dipping sauce"
    ],
    steps: [
      "Whisk rice flour, cornstarch, turmeric, coconut milk, and water into a thin batter.",
      "Cook pork belly in a hot pan until browned, add shrimp, cook 2 minutes.",
      "Pour a thin layer of batter into the pan, swirl to coat.",
      "Add bean sprouts and scallions over half the crepe, cook until edges are crisp and lacy, about 4 minutes.",
      "Fold in half, cook 1 more minute until fully crisp.",
      "Serve wrapped in lettuce and herbs, dipped in nuoc cham sauce."
    ],
    videoId: "",
    color: "#c1502e"
  },
  {
    id: "banh-mi-vietnam",
    title: "Bánh Mì",
    country: "Vietnam",
    flag: "🇻🇳",
    category: "lunch",
    cookTime: "40 min",
    difficulty: "Medium",
    servings: 2,
    description: "A crusty baguette sandwich layered with pâté, pickled vegetables, herbs, and your choice of protein.",
    ingredients: [
      "2 baguettes","200g pork shoulder or chicken, marinated and grilled","4 tbsp pâté",
      "Mayonnaise","1 carrot and 1 daikon, julienned and quick-pickled","Cucumber slices",
      "Cilantro and jalapeño slices","Soy sauce"
    ],
    steps: [
      "Quick-pickle carrot and daikon in vinegar, sugar, and salt for at least 20 minutes.",
      "Grill or pan-sear the marinated meat until cooked through.",
      "Split baguettes, spread pâté and mayo inside.",
      "Layer meat, pickled vegetables, cucumber, cilantro, and jalapeño.",
      "Drizzle with soy sauce, close and serve."
    ],
    videoId: "",
    color: "#d9a44a"
  },
  {
    id: "tacos-al-pastor-mexico",
    title: "Tacos al Pastor",
    country: "Mexico",
    flag: "🇲🇽",
    category: "lunch",
    cookTime: "1 hr + marinating",
    difficulty: "Medium",
    servings: 4,
    description: "Marinated pork cooked with charred pineapple, served on small corn tortillas with onion and cilantro.",
    ingredients: [
      "800g pork shoulder, thinly sliced","3 dried guajillo chiles","2 dried ancho chiles",
      "1/4 cup pineapple juice","2 tbsp vinegar","3 garlic cloves","1 tsp cumin","1 tsp oregano",
      "Corn tortillas","Fresh pineapple, diced","White onion and cilantro, chopped","Lime wedges"
    ],
    steps: [
      "Toast and rehydrate dried chiles, blend with pineapple juice, vinegar, garlic, cumin, and oregano into a paste.",
      "Marinate pork in the paste at least 2 hours, ideally overnight.",
      "Sear pork in a hot pan or grill until charred and cooked through.",
      "Char pineapple pieces in the same pan.",
      "Warm tortillas, fill with pork and pineapple.",
      "Top with onion, cilantro, and a squeeze of lime."
    ],
    videoId: "",
    color: "#e0913f"
  },
  {
    id: "pad-thai-thailand",
    title: "Pad Thai",
    country: "Thailand",
    flag: "🇹🇭",
    category: "lunch",
    cookTime: "35 min",
    difficulty: "Medium",
    servings: 3,
    description: "Stir-fried rice noodles with shrimp, egg, tofu, and a tangy tamarind sauce, topped with crushed peanuts.",
    ingredients: [
      "200g flat rice noodles, soaked","2 tbsp tamarind paste","2 tbsp fish sauce","2 tbsp palm sugar",
      "2 tbsp oil","200g shrimp","100g firm tofu, cubed","2 eggs","2 cups bean sprouts",
      "3 scallions, cut into batons","Crushed peanuts","Lime wedges"
    ],
    steps: [
      "Mix tamarind paste, fish sauce, and palm sugar into a sauce.",
      "Heat oil in a wok, cook shrimp and tofu until shrimp is pink.",
      "Push aside, scramble eggs in the empty space.",
      "Add soaked noodles and sauce, toss until noodles are coated and tender.",
      "Add bean sprouts and scallions, toss 1 minute.",
      "Serve topped with crushed peanuts and lime."
    ],
    videoId: "",
    color: "#c1502e"
  },
  {
    id: "falafel-lebanon",
    title: "Falafel",
    country: "Lebanon",
    flag: "🇱🇧",
    category: "lunch",
    cookTime: "40 min + soaking",
    difficulty: "Medium",
    servings: 4,
    description: "Crispy fried chickpea fritters packed with herbs, served in pita with tahini sauce.",
    ingredients: [
      "2 cups dried chickpeas, soaked overnight (not canned)","1 onion, chopped","4 garlic cloves",
      "1 cup parsley","1/2 cup cilantro","1 tsp cumin","1 tsp coriander","1/2 tsp baking soda",
      "Salt and pepper","Oil for frying","Pita bread, tahini sauce, pickled vegetables"
    ],
    steps: [
      "Drain soaked chickpeas and pulse in a food processor with onion, garlic, and herbs until finely ground but not pureed.",
      "Mix in cumin, coriander, baking soda, salt, and pepper.",
      "Rest the mixture in the fridge 30 minutes.",
      "Shape into small balls or patties.",
      "Fry in 180°C (350°F) oil until deep golden and crisp, about 3-4 minutes.",
      "Serve in pita with tahini sauce and pickled vegetables."
    ],
    videoId: "",
    color: "#d9a44a"
  },
  {
    id: "khao-soi-thailand",
    title: "Khao Soi",
    country: "Thailand",
    flag: "🇹🇭",
    category: "lunch",
    cookTime: "50 min",
    difficulty: "Medium",
    servings: 4,
    description: "Northern Thai curry noodle soup with tender chicken, crispy noodles, and coconut broth.",
    ingredients: [
      "400g egg noodles (some reserved for frying)","3 tbsp red curry paste","2 cans coconut milk",
      "500g chicken thighs","2 tbsp fish sauce","1 tbsp palm sugar","Pickled mustard greens",
      "Shallots, lime wedges, chili oil, cilantro for garnish"
    ],
    steps: [
      "Fry a handful of noodles until crisp, set aside for garnish.",
      "Fry curry paste in a splash of coconut milk until fragrant.",
      "Add remaining coconut milk and chicken, simmer 20 minutes until chicken is cooked.",
      "Season with fish sauce and palm sugar.",
      "Boil remaining noodles, divide into bowls, ladle over curry broth and chicken.",
      "Top with crispy noodles, pickled greens, shallots, cilantro, and lime."
    ],
    videoId: "",
    color: "#e0913f"
  },
  {
    id: "jollof-rice-nigeria",
    title: "Jollof Rice",
    country: "Nigeria",
    flag: "🇳🇬",
    category: "lunch",
    cookTime: "1 hr",
    difficulty: "Medium",
    servings: 6,
    description: "Smoky, spiced tomato rice cooked low and slow, a West African staple with deep flavor.",
    ingredients: [
      "3 cups long-grain rice","4 tomatoes","2 red bell peppers","1 onion","2 scotch bonnet peppers",
      "1/4 cup tomato paste","3 tbsp oil","2 tsp curry powder","1 tsp thyme","2 bay leaves",
      "3 cups chicken stock","Salt to taste"
    ],
    steps: [
      "Blend tomatoes, bell peppers, one onion half, and scotch bonnet into a smooth puree.",
      "Sauté remaining diced onion in oil, add tomato paste, cook until darkened.",
      "Pour in the blended puree, simmer 15-20 minutes until reduced and deep red.",
      "Add curry powder, thyme, bay leaves, and stock, bring to a boil.",
      "Stir in rice, cover tightly, and cook on low heat 30-35 minutes until rice absorbs the liquid.",
      "Let rest 10 minutes covered, then fluff and serve."
    ],
    videoId: "",
    color: "#c1502e"
  },
  {
    id: "bibimbap-korea",
    title: "Bibimbap",
    country: "South Korea",
    flag: "🇰🇷",
    category: "lunch",
    cookTime: "45 min",
    difficulty: "Medium",
    servings: 2,
    description: "Warm rice bowl topped with seasoned vegetables, marinated beef, and a fried egg, finished with gochujang.",
    ingredients: [
      "2 cups cooked rice","150g beef bulgogi, sliced thin and marinated","1 carrot, julienned",
      "1 zucchini, julienned","2 cups spinach, blanched","1 cup bean sprouts, blanched",
      "2 eggs","Sesame oil, soy sauce, garlic for seasoning vegetables","Gochujang sauce"
    ],
    steps: [
      "Sauté carrot and zucchini separately until just tender, season lightly with salt and sesame oil.",
      "Season blanched spinach and bean sprouts with garlic, soy sauce, and sesame oil.",
      "Cook marinated beef in a hot pan until browned.",
      "Fry eggs sunny-side up.",
      "Divide rice into bowls, arrange vegetables and beef around the edges, top with a fried egg.",
      "Serve with gochujang to mix in at the table."
    ],
    videoId: "",
    color: "#d9a44a"
  },
  {
    id: "shawarma-lebanon",
    title: "Chicken Shawarma",
    country: "Lebanon",
    flag: "🇱🇧",
    category: "lunch",
    cookTime: "40 min + marinating",
    difficulty: "Easy",
    servings: 4,
    description: "Spiced, char-grilled chicken thighs wrapped in flatbread with garlic sauce and pickles.",
    ingredients: [
      "700g chicken thighs","3 tbsp yogurt","2 tbsp lemon juice","3 garlic cloves","1 tsp cumin",
      "1 tsp paprika","1/2 tsp cinnamon","1/2 tsp turmeric","Flatbread","Garlic toum sauce",
      "Pickles, tomato, lettuce"
    ],
    steps: [
      "Mix yogurt, lemon juice, garlic, and spices into a marinade.",
      "Coat chicken thighs and marinate at least 2 hours.",
      "Grill or pan-sear chicken until charred and cooked through, about 15 minutes.",
      "Slice thinly.",
      "Warm flatbread, fill with chicken, garlic sauce, pickles, tomato, and lettuce, roll and serve."
    ],
    videoId: "",
    color: "#e0913f"
  },

  // ---------------- DINNER ----------------
  {
    id: "biryani-india",
    title: "Chicken Biryani",
    country: "India",
    flag: "🇮🇳",
    category: "dinner",
    cookTime: "1 hr 30 min",
    difficulty: "Hard",
    servings: 6,
    description: "Fragrant layered rice dish with spiced chicken, saffron, and fried onions, cooked low and slow.",
    ingredients: [
      "3 cups basmati rice, soaked","1kg chicken thighs","1 cup yogurt","2 onions, thinly sliced and fried",
      "2 tbsp ginger-garlic paste","2 tsp garam masala","1 tsp turmeric","2 tsp chili powder",
      "Whole spices: cardamom, cinnamon, cloves, bay leaf","Saffron soaked in warm milk",
      "Fresh mint and cilantro","Ghee"
    ],
    steps: [
      "Marinate chicken in yogurt, ginger-garlic paste, and spices for at least 1 hour.",
      "Cook marinated chicken until 80% done, in a heavy pot.",
      "Parboil soaked rice with whole spices until 70% cooked, then drain.",
      "Layer rice over the chicken, top with fried onions, mint, cilantro, and saffron milk.",
      "Cover tightly and cook on very low heat 25-30 minutes to steam (dum).",
      "Rest 10 minutes, then gently fold layers together and serve."
    ],
    videoId: "",
    color: "#c1502e"
  },
  {
    id: "ragu-bolognese-italy",
    title: "Ragù alla Bolognese",
    country: "Italy",
    flag: "🇮🇹",
    category: "dinner",
    cookTime: "3 hr",
    difficulty: "Medium",
    servings: 6,
    description: "Slow-simmered meat sauce built on a soffritto base, finished with milk and served over tagliatelle.",
    ingredients: [
      "500g ground beef","250g ground pork","1 onion, 1 carrot, 1 celery stalk, finely diced",
      "150g pancetta, diced","1 cup white wine","2 cups whole milk","800g canned tomatoes",
      "2 tbsp tomato paste","Tagliatelle pasta","Parmesan"
    ],
    steps: [
      "Render pancetta in a heavy pot, add diced onion, carrot, and celery, cook until soft.",
      "Add ground meats, break up and brown thoroughly.",
      "Pour in wine, simmer until evaporated.",
      "Add milk, simmer until absorbed, about 15 minutes — this tenderizes the meat.",
      "Stir in tomatoes and tomato paste, simmer uncovered on very low heat 2-2.5 hours, stirring occasionally.",
      "Serve over tagliatelle with grated parmesan."
    ],
    videoId: "",
    color: "#d9a44a"
  },
  {
    id: "coq-au-vin-france",
    title: "Coq au Vin",
    country: "France",
    flag: "🇫🇷",
    category: "dinner",
    cookTime: "2 hr",
    difficulty: "Medium",
    servings: 4,
    description: "Chicken braised in red wine with mushrooms, pearl onions, and bacon lardons.",
    ingredients: [
      "1 whole chicken, cut into pieces","150g bacon lardons","1 bottle red wine (Burgundy style)",
      "2 cups chicken stock","200g pearl onions","250g mushrooms, quartered","3 garlic cloves",
      "2 tbsp tomato paste","2 tbsp flour","Fresh thyme and bay leaf","Butter"
    ],
    steps: [
      "Brown chicken pieces in a Dutch oven, set aside.",
      "Render bacon lardons in the same pot, add pearl onions and mushrooms, brown well.",
      "Add garlic and tomato paste, cook 1 minute, sprinkle in flour, stir.",
      "Pour in wine and stock, add thyme and bay leaf, return chicken to the pot.",
      "Cover and simmer 1-1.5 hours until chicken is very tender.",
      "Finish sauce with a knob of butter, adjust seasoning, serve with crusty bread or potatoes."
    ],
    videoId: "",
    color: "#e0913f"
  },
  {
    id: "moussaka-greece",
    title: "Moussaka",
    country: "Greece",
    flag: "🇬🇷",
    category: "dinner",
    cookTime: "1 hr 45 min",
    difficulty: "Medium",
    servings: 6,
    description: "Layered eggplant and spiced lamb bake topped with creamy béchamel.",
    ingredients: [
      "3 eggplants, sliced","500g ground lamb","1 onion, diced","2 garlic cloves","1 cinnamon stick",
      "400g canned tomatoes","2 tbsp tomato paste","4 tbsp butter","4 tbsp flour","2 cups milk",
      "2 egg yolks","1 cup grated parmesan or kefalotyri"
    ],
    steps: [
      "Salt eggplant slices, let sit 20 minutes to draw out moisture, then pat dry and roast or fry until golden.",
      "Brown lamb with onion and garlic, add cinnamon, tomatoes, and tomato paste, simmer 20 minutes.",
      "Make béchamel: melt butter, whisk in flour, gradually add milk, cook until thickened. Off heat, whisk in egg yolks and cheese.",
      "Layer eggplant and meat sauce in a baking dish, repeat, then top with béchamel.",
      "Bake at 180°C (350°F) for 40-45 minutes until golden on top.",
      "Rest 15 minutes before slicing and serving."
    ],
    videoId: "",
    color: "#c1502e"
  },
  {
    id: "pho-vietnam",
    title: "Phở Bò",
    country: "Vietnam",
    flag: "🇻🇳",
    category: "dinner",
    cookTime: "4 hr",
    difficulty: "Hard",
    servings: 6,
    description: "Deeply aromatic beef bone broth simmered with charred ginger and spices, served over rice noodles.",
    ingredients: [
      "2kg beef bones","500g beef brisket","1 onion, charred","1 thumb ginger, charred",
      "4 star anise","1 cinnamon stick","3 cloves","1 tbsp coriander seeds","Fish sauce",
      "Rice noodles","Thinly sliced raw beef","Bean sprouts, Thai basil, lime, chili"
    ],
    steps: [
      "Blanch beef bones, rinse well to remove impurities.",
      "Char onion and ginger over an open flame until blackened in spots, then peel.",
      "Toast star anise, cinnamon, cloves, and coriander seeds in a dry pan until fragrant.",
      "Combine bones, brisket, charred aromatics, and spices in a large pot with water, simmer uncovered 3-4 hours, skimming regularly.",
      "Strain broth, season with fish sauce and salt.",
      "Cook rice noodles, place in bowls with raw sliced beef, ladle over hot broth to cook the beef.",
      "Serve with bean sprouts, basil, lime, and chili on the side."
    ],
    videoId: "",
    color: "#d9a44a"
  },
  {
    id: "paella-spain",
    title: "Seafood Paella",
    country: "Spain",
    flag: "🇪🇸",
    category: "dinner",
    cookTime: "1 hr",
    difficulty: "Medium",
    servings: 6,
    description: "Saffron-infused rice cooked in a wide pan with shrimp, mussels, and squid, prized for its crispy socarrat base.",
    ingredients: [
      "2 cups bomba or short-grain rice","500g mixed seafood (shrimp, mussels, squid)","1 onion, diced",
      "1 red bell pepper, diced","3 garlic cloves","1 tomato, grated","Pinch of saffron",
      "5 cups seafood or fish stock","Olive oil","Lemon wedges","Fresh parsley"
    ],
    steps: [
      "Heat olive oil in a paella pan, sear seafood briefly and set aside.",
      "Sauté onion and pepper until soft, add garlic and grated tomato, cook until reduced.",
      "Stir in rice to coat with the sofrito.",
      "Add hot stock with saffron dissolved in it, spread rice evenly, do not stir again.",
      "Simmer 15-18 minutes, nestling seafood back on top for the last 5 minutes.",
      "Let rest 5 minutes to develop the crispy bottom (socarrat), serve with lemon and parsley."
    ],
    videoId: "",
    color: "#e0913f"
  },
  {
    id: "doro-wat-ethiopia",
    title: "Doro Wat",
    country: "Ethiopia",
    flag: "🇪🇹",
    category: "dinner",
    cookTime: "1 hr 30 min",
    difficulty: "Medium",
    servings: 4,
    description: "Ethiopia's national dish — chicken slow-cooked in a deeply spiced berbere sauce with hard-boiled eggs.",
    ingredients: [
      "1kg chicken pieces","3 red onions, finely chopped","4 tbsp berbere spice blend",
      "4 tbsp niter kibbeh (spiced butter) or regular butter","3 garlic cloves","1 tbsp ginger",
      "1 cup chicken stock","4 hard-boiled eggs","Injera bread for serving"
    ],
    steps: [
      "Dry-cook chopped onions in a pot over medium heat, stirring often, until deeply softened, about 20 minutes (no oil yet).",
      "Add niter kibbeh, garlic, and ginger, cook 5 minutes.",
      "Stir in berbere spice, cook 2 minutes until fragrant.",
      "Add chicken stock and chicken pieces, cover and simmer 40-45 minutes until chicken is tender.",
      "Add hard-boiled eggs in the last 10 minutes to absorb the sauce.",
      "Serve with injera bread."
    ],
    videoId: "",
    color: "#c1502e"
  },
  {
    id: "feijoada-brazil",
    title: "Feijoada",
    country: "Brazil",
    flag: "🇧🇷",
    category: "dinner",
    cookTime: "2 hr 30 min",
    difficulty: "Medium",
    servings: 6,
    description: "Brazil's hearty black bean and pork stew, simmered until rich and served with rice and orange slices.",
    ingredients: [
      "500g black beans, soaked overnight","300g pork shoulder, cubed","200g smoked sausage, sliced",
      "150g bacon, diced","1 onion, diced","4 garlic cloves","2 bay leaves","Orange slices",
      "White rice for serving","Sautéed collard greens for serving"
    ],
    steps: [
      "Drain soaked beans, combine with pork shoulder and bay leaves in a large pot, cover with water.",
      "Simmer 1.5 hours until beans are tender, topping up water as needed.",
      "In a separate pan, render bacon, add onion and garlic, cook until soft.",
      "Add sausage, brown lightly, then stir this mixture into the beans.",
      "Simmer another 30-45 minutes until thick and rich, mashing some beans against the pot to thicken.",
      "Serve with white rice, sautéed collard greens, and orange slices."
    ],
    videoId: "",
    color: "#d9a44a"
  },
  {
    id: "khachapuri-adjaruli-georgia",
    title: "Lobio",
    country: "Georgia",
    flag: "🇬🇪",
    category: "dinner",
    cookTime: "1 hr",
    difficulty: "Easy",
    servings: 4,
    description: "Georgian red bean stew simmered with walnuts, herbs, and warm spices, served with cornbread.",
    ingredients: [
      "500g red kidney beans, soaked overnight","1 onion, diced","1/2 cup walnuts, ground",
      "3 garlic cloves","1 tsp coriander seeds, ground","1/2 tsp fenugreek","Fresh cilantro and dill",
      "2 tbsp red wine vinegar","Pomegranate seeds for garnish"
    ],
    steps: [
      "Boil soaked beans until tender, about 40-50 minutes, reserving some cooking liquid.",
      "Sauté onion until soft, add garlic, coriander, and fenugreek, cook 2 minutes.",
      "Stir onion mixture and ground walnuts into the beans, add a splash of reserved liquid to loosen.",
      "Simmer 10 minutes, stir in vinegar and fresh herbs.",
      "Garnish with pomegranate seeds, serve with cornbread."
    ],
    videoId: "",
    color: "#e0913f"
  },

  // ---------------- DESSERT ----------------
  {
    id: "tiramisu-italy",
    title: "Tiramisu",
    country: "Italy",
    flag: "🇮🇹",
    category: "dessert",
    cookTime: "30 min + chilling",
    difficulty: "Medium",
    servings: 8,
    description: "Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa.",
    ingredients: [
      "6 egg yolks","3/4 cup sugar","500g mascarpone","2 cups strong espresso, cooled",
      "2 tbsp coffee liqueur (optional)","24 ladyfinger biscuits","Cocoa powder for dusting"
    ],
    steps: [
      "Whisk egg yolks and sugar over a double boiler until pale and thick.",
      "Fold in mascarpone until smooth.",
      "Mix espresso with liqueur, quickly dip each ladyfinger and layer in a dish.",
      "Spread half the mascarpone cream over the ladyfingers.",
      "Repeat with another layer of dipped ladyfingers and remaining cream.",
      "Chill at least 4 hours, dust generously with cocoa powder before serving."
    ],
    videoId: "",
    color: "#c1502e"
  },
  {
    id: "baklava-turkey",
    title: "Baklava",
    country: "Turkey",
    flag: "🇹🇷",
    category: "dessert",
    cookTime: "1 hr 15 min",
    difficulty: "Medium",
    servings: 12,
    description: "Crisp layered phyllo pastry filled with spiced walnuts, soaked in honey syrup.",
    ingredients: [
      "1 package phyllo dough","3 cups walnuts, finely chopped","1 tsp cinnamon","1 cup butter, melted",
      "1 cup sugar","1 cup water","1/2 cup honey","1 tbsp lemon juice"
    ],
    steps: [
      "Mix chopped walnuts with cinnamon.",
      "Layer 8 sheets of phyllo in a buttered baking dish, brushing each with melted butter.",
      "Spread a third of the walnut mixture over the phyllo, repeat layering two more times, finishing with 8 more buttered phyllo sheets on top.",
      "Cut into diamond shapes before baking.",
      "Bake at 160°C (325°F) for 45-50 minutes until golden.",
      "Simmer sugar, water, honey, and lemon juice into a syrup, pour hot syrup over the baklava right out of the oven, let soak several hours before serving."
    ],
    videoId: "",
    color: "#d9a44a"
  },
  {
    id: "creme-brulee-france",
    title: "Crème Brûlée",
    country: "France",
    flag: "🇫🇷",
    category: "dessert",
    cookTime: "50 min + chilling",
    difficulty: "Medium",
    servings: 4,
    description: "Silky vanilla custard with a shatteringly crisp caramelized sugar top.",
    ingredients: [
      "2 cups heavy cream","1 vanilla bean or 1 tsp vanilla extract","5 egg yolks",
      "1/3 cup sugar, plus extra for topping"
    ],
    steps: [
      "Heat cream with vanilla until just simmering, remove from heat.",
      "Whisk egg yolks with sugar until pale, slowly temper in the warm cream.",
      "Strain the mixture into ramekins.",
      "Bake in a water bath at 150°C (300°F) for 30-35 minutes until just set with a slight wobble.",
      "Chill at least 2 hours.",
      "Sprinkle sugar on top and caramelize with a kitchen torch until crisp before serving."
    ],
    videoId: "",
    color: "#e0913f"
  },
  {
    id: "mochi-japan",
    title: "Mochi",
    country: "Japan",
    flag: "🇯🇵",
    category: "dessert",
    cookTime: "40 min",
    difficulty: "Medium",
    servings: 12,
    description: "Chewy rice cakes filled with sweet red bean paste, a beloved Japanese confection.",
    ingredients: [
      "1 cup glutinous rice flour (mochiko)","1/4 cup sugar","1 cup water","Cornstarch for dusting",
      "1 cup sweet red bean paste (anko), divided into 12 balls"
    ],
    steps: [
      "Whisk rice flour, sugar, and water together until smooth.",
      "Microwave in 1-minute intervals, stirring between each, until the mixture turns translucent and sticky, about 3-4 minutes total.",
      "Turn out onto a cornstarch-dusted surface, let cool slightly.",
      "Divide into 12 pieces, flatten each into a disc.",
      "Place a ball of red bean paste in the center, wrap the mochi around it, pinching to seal.",
      "Dust with cornstarch and serve."
    ],
    videoId: "",
    color: "#c1502e"
  },
  {
    id: "churros-mexico",
    title: "Churros",
    country: "Mexico",
    flag: "🇲🇽",
    category: "dessert",
    cookTime: "35 min",
    difficulty: "Easy",
    servings: 6,
    description: "Crisp fried dough spirals rolled in cinnamon sugar, served with chocolate dipping sauce.",
    ingredients: [
      "1 cup water","2 tbsp sugar","1/2 tsp salt","2 tbsp butter","1 cup flour","2 eggs",
      "Oil for frying","1/2 cup sugar mixed with 1 tbsp cinnamon","Melted chocolate for dipping"
    ],
    steps: [
      "Bring water, sugar, salt, and butter to a boil.",
      "Remove from heat, stir in flour vigorously until a dough forms.",
      "Beat in eggs one at a time until smooth and glossy.",
      "Pipe strips of dough directly into 180°C (350°F) oil, fry until golden, about 3-4 minutes.",
      "Drain and roll immediately in cinnamon sugar.",
      "Serve warm with melted chocolate for dipping."
    ],
    videoId: "",
    color: "#d9a44a"
  },
  {
    id: "gulab-jamun-india",
    title: "Gulab Jamun",
    country: "India",
    flag: "🇮🇳",
    category: "dessert",
    cookTime: "45 min",
    difficulty: "Medium",
    servings: 8,
    description: "Soft milk-solid dumplings fried until golden and soaked in cardamom-rose syrup.",
    ingredients: [
      "1 cup milk powder","1/4 cup flour","1/4 tsp baking soda","2 tbsp ghee","2-3 tbsp milk",
      "Oil for frying","1.5 cups sugar","1.5 cups water","4 cardamom pods","1 tsp rose water"
    ],
    steps: [
      "Mix milk powder, flour, and baking soda, rub in ghee, then bring together with milk into a soft dough — do not overwork.",
      "Shape into smooth small balls with no cracks.",
      "Simmer sugar, water, and cardamom into a syrup, stir in rose water, keep warm.",
      "Fry dough balls in medium-low oil (150°C/300°F), stirring gently, until deep golden brown all over, about 8-10 minutes.",
      "Drop hot fried balls directly into warm syrup, soak at least 30 minutes before serving."
    ],
    videoId: "",
    color: "#e0913f"
  },
  {
    id: "pastel-de-nata-portugal",
    title: "Pastel de Nata",
    country: "Portugal",
    flag: "🇵🇹",
    category: "dessert",
    cookTime: "50 min",
    difficulty: "Medium",
    servings: 12,
    description: "Portuguese custard tarts with flaky, caramelized-top pastry shells.",
    ingredients: [
      "1 sheet puff pastry","1 cup milk","1 cinnamon stick","Strip of lemon zest",
      "5 egg yolks","1/2 cup sugar","2 tbsp flour","1/2 cup water"
    ],
    steps: [
      "Roll puff pastry into a log, slice into rounds, press into muffin tins to form cups.",
      "Infuse milk with cinnamon and lemon zest, warm gently, then strain.",
      "Whisk sugar, flour, and a little water into a syrup, simmer until slightly thickened.",
      "Whisk egg yolks into the warm milk, then combine with the sugar syrup.",
      "Fill pastry cups with the custard.",
      "Bake at 250°C (480°F) for 15-18 minutes until custard is spotted dark brown and pastry is golden."
    ],
    videoId: "",
    color: "#c1502e"
  },
  {
    id: "mango-sticky-rice-thailand",
    title: "Mango Sticky Rice",
    country: "Thailand",
    flag: "🇹🇭",
    category: "dessert",
    cookTime: "40 min + soaking",
    difficulty: "Easy",
    servings: 4,
    description: "Sweet coconut-soaked glutinous rice served with ripe mango slices.",
    ingredients: [
      "1.5 cups glutinous rice, soaked 4+ hours","1.5 cups coconut milk","1/2 cup sugar",
      "1/2 tsp salt","2 ripe mangoes, sliced","2 tbsp toasted sesame seeds"
    ],
    steps: [
      "Steam soaked rice in a lined steamer basket for 25 minutes until tender.",
      "Warm coconut milk with sugar and salt until dissolved, reserve 1/4 cup for topping.",
      "Pour most of the coconut mixture over the hot rice, stir gently, let absorb 15 minutes.",
      "Plate rice alongside sliced mango.",
      "Drizzle with reserved coconut sauce and sprinkle with sesame seeds."
    ],
    videoId: "",
    color: "#d9a44a"
  },

  // ---------------- DRINKS ----------------
  {
    id: "horchata-mexico",
    title: "Horchata",
    country: "Mexico",
    flag: "🇲🇽",
    category: "drinks",
    cookTime: "20 min + soaking",
    difficulty: "Easy",
    servings: 6,
    description: "Creamy, lightly sweet rice and cinnamon water, served ice cold.",
    ingredients: [
      "1 cup long-grain rice","1 cinnamon stick","4 cups hot water","1 can evaporated milk",
      "1/2 cup sugar","1 tsp vanilla extract","Ice"
    ],
    steps: [
      "Soak rice and cinnamon stick in hot water for at least 4 hours, or overnight.",
      "Blend the soaked mixture until smooth.",
      "Strain through a fine mesh or cheesecloth into a pitcher.",
      "Stir in evaporated milk, sugar, and vanilla.",
      "Chill and serve over ice."
    ],
    videoId: "",
    color: "#e0913f"
  },
  {
    id: "masala-chai-india",
    title: "Masala Chai",
    country: "India",
    flag: "🇮🇳",
    category: "drinks",
    cookTime: "15 min",
    difficulty: "Easy",
    servings: 2,
    description: "Spiced black tea simmered with milk, ginger, and warming spices.",
    ingredients: [
      "1.5 cups water","1.5 cups milk","2 tbsp black tea leaves","1 tsp grated ginger",
      "4 cardamom pods, crushed","1 clove","1 small cinnamon stick","2-3 tbsp sugar"
    ],
    steps: [
      "Bring water, ginger, cardamom, clove, and cinnamon to a boil, simmer 5 minutes.",
      "Add tea leaves, simmer 2 minutes.",
      "Pour in milk, bring back to a gentle boil, simmer 3-4 minutes until deeply colored.",
      "Stir in sugar to taste.",
      "Strain into cups and serve hot."
    ],
    videoId: "",
    color: "#c1502e"
  },
  {
    id: "mojito-cuba",
    title: "Mojito",
    country: "Cuba",
    flag: "🇨🇺",
    category: "drinks",
    cookTime: "10 min",
    difficulty: "Easy",
    servings: 1,
    description: "Classic Cuban cocktail of rum, lime, mint, and soda water.",
    ingredients: [
      "10 fresh mint leaves","2 tsp sugar","1/2 lime, cut into wedges","60ml white rum",
      "Soda water","Ice","Mint sprig for garnish"
    ],
    steps: [
      "Muddle mint leaves, sugar, and lime wedges gently in a glass to release oils — don't shred the mint.",
      "Fill the glass with ice.",
      "Pour in rum, top with soda water.",
      "Stir gently, garnish with a mint sprig."
    ],
    videoId: "",
    color: "#d9a44a"
  },
  {
    id: "bubble-tea-taiwan",
    title: "Bubble Tea",
    country: "Taiwan",
    flag: "🇹🇼",
    category: "drinks",
    cookTime: "30 min",
    difficulty: "Easy",
    servings: 2,
    description: "Sweet milk tea with chewy tapioca pearls, sipped through a wide straw.",
    ingredients: [
      "1/2 cup dried tapioca pearls","1/2 cup brown sugar","2 black tea bags","1 cup hot water",
      "1 cup milk","Ice"
    ],
    steps: [
      "Boil tapioca pearls according to package instructions, usually 20-25 minutes, until tender.",
      "Drain and toss hot pearls with brown sugar until glossy and coated.",
      "Steep tea bags in hot water 5 minutes, remove bags, let tea cool.",
      "Fill glasses with tapioca pearls and ice, pour in tea and milk.",
      "Stir and serve with a wide straw."
    ],
    videoId: "",
    color: "#e0913f"
  },
  {
    id: "turkish-coffee-turkey",
    title: "Turkish Coffee",
    country: "Turkey",
    flag: "🇹🇷",
    category: "drinks",
    cookTime: "10 min",
    difficulty: "Easy",
    servings: 2,
    description: "Unfiltered, finely ground coffee slowly brewed in a cezve for a thick, aromatic cup.",
    ingredients: [
      "2 cups cold water","2 heaping tsp finely ground Turkish coffee","Sugar to taste (optional)"
    ],
    steps: [
      "Combine cold water, coffee grounds, and sugar (if using) in a cezve or small pot.",
      "Stir once, then place over low heat — do not stir again.",
      "Watch closely as foam rises just before boiling, remove from heat right before it boils over.",
      "Spoon a little foam into each cup, then slowly pour in the coffee.",
      "Let grounds settle a minute before sipping."
    ],
    videoId: "",
    color: "#c1502e"
  },
  {
    id: "sangria-spain",
    title: "Sangria",
    country: "Spain",
    flag: "🇪🇸",
    category: "drinks",
    cookTime: "15 min + chilling",
    difficulty: "Easy",
    servings: 6,
    description: "Fruity red wine punch with brandy and fresh citrus, chilled overnight for best flavor.",
    ingredients: [
      "1 bottle red wine","1/4 cup brandy","1/4 cup orange juice","2 tbsp sugar","1 orange, sliced",
      "1 apple, diced","1 cup soda water","Ice"
    ],
    steps: [
      "Combine wine, brandy, orange juice, and sugar in a large pitcher, stir until sugar dissolves.",
      "Add sliced orange and diced apple.",
      "Chill at least 2 hours, ideally overnight, to let fruit macerate.",
      "Top with soda water and ice just before serving."
    ],
    videoId: "",
    color: "#d9a44a"
  },

  // ---------------- MORE LUNCH/DINNER (rounding out variety) ----------------
  {
    id: "ramen-japan",
    title: "Shoyu Ramen",
    country: "Japan",
    flag: "🇯🇵",
    category: "dinner",
    cookTime: "3 hr",
    difficulty: "Hard",
    servings: 4,
    description: "Soy-based broth ramen with tender chashu pork, soft egg, and springy noodles.",
    ingredients: [
      "2kg chicken and pork bones","1 onion","1 thumb ginger","4 garlic cloves","1/2 cup soy sauce",
      "2 tbsp mirin","2 tbsp sake","4 portions fresh ramen noodles","1 block chashu pork, sliced",
      "4 soft-boiled eggs, marinated","Scallions, nori, bamboo shoots for topping"
    ],
    steps: [
      "Simmer bones with onion, ginger, and garlic for at least 3 hours, skimming occasionally, to make a clear broth.",
      "Strain broth and season with soy sauce, mirin, and sake to taste.",
      "Cook ramen noodles according to package instructions.",
      "Divide noodles into bowls, ladle over hot broth.",
      "Top with sliced chashu, a halved marinated egg, scallions, nori, and bamboo shoots."
    ],
    videoId: "",
    color: "#e0913f"
  },
  {
    id: "butter-chicken-india",
    title: "Butter Chicken",
    country: "India",
    flag: "🇮🇳",
    category: "dinner",
    cookTime: "1 hr + marinating",
    difficulty: "Medium",
    servings: 4,
    description: "Tandoori-charred chicken simmered in a rich, buttery tomato-cashew gravy.",
    ingredients: [
      "700g chicken thighs","1 cup yogurt","2 tbsp ginger-garlic paste","2 tsp garam masala",
      "4 tbsp butter","1 onion, pureed","400g canned tomatoes, pureed","1/4 cup cashews, soaked and blended",
      "1/2 cup cream","1 tsp kasuri methi (dried fenugreek leaves)"
    ],
    steps: [
      "Marinate chicken in yogurt, ginger-garlic paste, and garam masala at least 1 hour.",
      "Grill, broil, or pan-sear chicken until charred at the edges, set aside.",
      "Melt butter, cook pureed onion until soft, add tomato puree, simmer 15 minutes.",
      "Stir in blended cashews for creaminess, simmer 5 minutes.",
      "Add cooked chicken and cream, simmer 10 minutes.",
      "Finish with kasuri methi, serve with naan or rice."
    ],
    videoId: "",
    color: "#c1502e"
  },
  {
    id: "rendang-indonesia",
    title: "Beef Rendang",
    country: "Indonesia",
    flag: "🇮🇩",
    category: "dinner",
    cookTime: "3 hr",
    difficulty: "Hard",
    servings: 6,
    description: "Slow-braised beef in coconut milk and spice paste until dark, tender, and deeply caramelized.",
    ingredients: [
      "1kg beef chuck, cubed","4 cups coconut milk","6 shallots","4 garlic cloves","4 red chiles",
      "1 thumb galangal","1 thumb ginger","2 lemongrass stalks","4 kaffir lime leaves",
      "1 cinnamon stick","2 star anise","Tamarind paste","Palm sugar"
    ],
    steps: [
      "Blend shallots, garlic, chiles, galangal, and ginger into a smooth paste.",
      "Fry the paste until fragrant, add lemongrass, lime leaves, cinnamon, and star anise.",
      "Add beef, stir to coat in the paste.",
      "Pour in coconut milk, tamarind, and palm sugar, bring to a simmer.",
      "Cook uncovered on low heat 2.5-3 hours, stirring occasionally, until liquid reduces and turns deep brown and thick.",
      "Continue cooking until oil separates and beef is fork-tender with a caramelized coating."
    ],
    videoId: "",
    color: "#d9a44a"
  },
  {
    id: "adobo-philippines",
    title: "Chicken Adobo",
    country: "Philippines",
    flag: "🇵🇭",
    category: "dinner",
    cookTime: "50 min",
    difficulty: "Easy",
    servings: 4,
    description: "Chicken braised in soy sauce, vinegar, garlic, and bay leaves until tender and glossy.",
    ingredients: [
      "1kg chicken thighs","1/2 cup soy sauce","1/3 cup white vinegar","6 garlic cloves, smashed",
      "3 bay leaves","1 tsp whole peppercorns","1 tbsp sugar","1 cup water","Oil"
    ],
    steps: [
      "Marinate chicken in soy sauce, vinegar, garlic, bay leaves, and peppercorns for 30 minutes.",
      "Sear chicken pieces in oil until browned.",
      "Add marinade, sugar, and water, bring to a boil.",
      "Reduce heat and simmer 30-35 minutes until chicken is tender and sauce has reduced and thickened.",
      "Serve over steamed rice."
    ],
    videoId: "",
    color: "#e0913f"
  },
  {
    id: "kimchi-jjigae-korea",
    title: "Kimchi Jjigae",
    country: "South Korea",
    flag: "🇰🇷",
    category: "dinner",
    cookTime: "30 min",
    difficulty: "Easy",
    servings: 3,
    description: "Spicy, tangy kimchi stew with pork belly and tofu, simmered until deeply flavorful.",
    ingredients: [
      "2 cups well-fermented kimchi, chopped","200g pork belly, sliced","1 tbsp gochugaru",
      "1 tbsp gochujang","3 cups anchovy or vegetable stock","1 block tofu, cubed",
      "1 scallion, sliced","1 tsp sesame oil"
    ],
    steps: [
      "Sear pork belly in a pot until lightly browned.",
      "Add kimchi, cook 3-4 minutes until fragrant.",
      "Stir in gochugaru and gochujang, cook 1 minute.",
      "Pour in stock, bring to a boil, simmer 15 minutes.",
      "Add tofu, simmer 5 more minutes.",
      "Finish with sesame oil and scallions, serve with rice."
    ],
    videoId: "",
    color: "#c1502e"
  },
  {
    id: "poutine-canada",
    title: "Poutine",
    country: "Canada",
    flag: "🇨🇦",
    category: "lunch",
    cookTime: "45 min",
    difficulty: "Medium",
    servings: 3,
    description: "Crispy fries topped with cheese curds and rich brown gravy — Quebec's iconic comfort food.",
    ingredients: [
      "1kg russet potatoes, cut into fries","Oil for frying","2 tbsp butter","2 tbsp flour",
      "2 cups beef stock","1 tbsp Worcestershire sauce","2 cups cheese curds","Salt"
    ],
    steps: [
      "Double-fry the potatoes: first at 150°C (300°F) until soft, then at 190°C (375°F) until golden and crisp.",
      "Melt butter, whisk in flour, cook 1 minute.",
      "Gradually whisk in stock and Worcestershire, simmer until thickened into a gravy.",
      "Season fries with salt, pile onto a plate.",
      "Scatter cheese curds over the fries, ladle hot gravy on top to slightly melt the curds.",
      "Serve immediately."
    ],
    videoId: "",
    color: "#d9a44a"
  },
  {
    id: "empanadas-argentina",
    title: "Beef Empanadas",
    country: "Argentina",
    flag: "🇦🇷",
    category: "lunch",
    cookTime: "1 hr",
    difficulty: "Medium",
    servings: 12,
    description: "Hand-folded pastries filled with spiced ground beef, olives, and hard-boiled egg.",
    ingredients: [
      "12 empanada dough discs","400g ground beef","1 onion, diced","1 red bell pepper, diced",
      "1 tsp cumin","1 tsp paprika","1/2 tsp chili flakes","1/4 cup green olives, chopped",
      "2 hard-boiled eggs, chopped","1 egg, beaten (for sealing/egg wash)"
    ],
    steps: [
      "Sauté onion and pepper until soft, add beef and spices, cook until browned.",
      "Stir in olives and chopped hard-boiled egg, cool completely.",
      "Place a spoonful of filling on each dough disc, fold over and crimp edges to seal (traditional repulgue fold optional).",
      "Brush with beaten egg.",
      "Bake at 200°C (400°F) for 20-25 minutes until golden brown."
    ],
    videoId: "",
    color: "#e0913f"
  },
  {
    id: "pierogi-poland",
    title: "Pierogi",
    country: "Poland",
    flag: "🇵🇱",
    category: "dinner",
    cookTime: "1 hr 30 min",
    difficulty: "Medium",
    servings: 6,
    description: "Tender dumplings filled with potato and cheese, boiled then pan-fried in butter with onions.",
    ingredients: [
      "3 cups flour","1 egg","1 cup warm water","1/2 tsp salt","4 potatoes, boiled and mashed",
      "1 cup farmer's cheese or cheddar","1 onion, finely diced and sautéed, plus more for topping",
      "Butter for frying","Sour cream for serving"
    ],
    steps: [
      "Mix flour, egg, water, and salt into a smooth dough, rest 20 minutes.",
      "Combine mashed potato, cheese, and sautéed onion for the filling.",
      "Roll dough thin, cut into circles, fill each with a spoonful of filling and fold into half-moons, pinching to seal.",
      "Boil pierogi in batches until they float, about 3-4 minutes.",
      "Pan-fry boiled pierogi in butter with sliced onion until golden.",
      "Serve with sour cream."
    ],
    videoId: "",
    color: "#c1502e"
  },
  {
    id: "ceviche-peru",
    title: "Ceviche",
    country: "Peru",
    flag: "🇵🇪",
    category: "lunch",
    cookTime: "25 min",
    difficulty: "Easy",
    servings: 4,
    description: "Fresh white fish 'cooked' in citrus juice with chile, red onion, and cilantro.",
    ingredients: [
      "500g fresh white fish (sea bass or similar), cubed","1 cup fresh lime juice","1/2 red onion, thinly sliced",
      "1 aji amarillo chile, minced","1/4 cup cilantro, chopped","Salt to taste","Sweet potato and corn, boiled, for serving"
    ],
    steps: [
      "Season fish cubes with salt.",
      "Pour lime juice over the fish, add chile, let marinate 10-15 minutes until fish turns opaque ('cooked' by the acid).",
      "Stir in red onion and cilantro just before serving.",
      "Serve immediately with boiled sweet potato and corn on the side."
    ],
    videoId: "",
    color: "#d9a44a"
  },
  {
    id: "jerk-chicken-jamaica",
    title: "Jerk Chicken",
    country: "Jamaica",
    flag: "🇯🇲",
    category: "dinner",
    cookTime: "1 hr + marinating",
    difficulty: "Medium",
    servings: 4,
    description: "Smoky, fiery grilled chicken marinated in scotch bonnet, allspice, and thyme.",
    ingredients: [
      "1kg chicken thighs and drumsticks","4 scallions","2 scotch bonnet peppers","4 garlic cloves",
      "2 tbsp allspice berries, ground","1 tbsp fresh thyme","2 tbsp soy sauce","2 tbsp brown sugar",
      "2 tbsp lime juice","2 tbsp oil"
    ],
    steps: [
      "Blend scallions, scotch bonnet, garlic, allspice, thyme, soy sauce, brown sugar, lime juice, and oil into a marinade.",
      "Coat chicken thoroughly and marinate at least 4 hours, ideally overnight.",
      "Grill over medium heat, turning occasionally, 35-40 minutes until charred outside and cooked through.",
      "Rest 5 minutes before serving, traditionally with rice and peas."
    ],
    videoId: "",
    color: "#e0913f"
  }
];

// Helpful lookup indexes (auto-derived — no need to maintain manually)
const COUNTRIES = [...new Set(RECIPES.map(r => r.country))].sort();
const CATEGORIES = ["breakfast", "lunch", "dinner", "dessert", "drinks"];

// ---------------- Auto dish photos (Wikimedia Commons, free & no API key) ----------------
async function fetchWikimediaImage(query){
  const cacheKey = 'wb_img_' + query;
  try {
    const cached = localStorage.getItem(cacheKey);
    if(cached) return cached === 'null' ? null : cached;
  } catch(e){}
  try {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=1&gsrnamespace=6&prop=imageinfo&iiprop=url&iiurlwidth=600&format=json&origin=*`;
    const res = await fetch(url);
    const data = await res.json();
    const pages = data.query && data.query.pages;
    if(pages){
      const page = Object.values(pages)[0];
      const info = page.imageinfo && page.imageinfo[0];
      const imgUrl = info && (info.thumburl || info.url);
      if(imgUrl){
        try { localStorage.setItem(cacheKey, imgUrl); } catch(e){}
        return imgUrl;
      }
    }
  } catch(e){ /* network unavailable or blocked — falls back to emoji thumbnail */ }
  try { localStorage.setItem(cacheKey, 'null'); } catch(e){}
  return null;
}

// Call after inserting recipe-card HTML into the DOM to hydrate real photos in place of emoji placeholders
function hydrateThumbnails(root){
  root = root || document;
  const thumbs = root.querySelectorAll('.recipe-thumb[data-dish]');
  thumbs.forEach(async (el) => {
    const query = el.getAttribute('data-dish');
    const imgUrl = await fetchWikimediaImage(query);
    if(imgUrl){
      const img = document.createElement('img');
      img.src = imgUrl;
      img.alt = query;
      img.loading = 'lazy';
      img.className = 'thumb-img';
      img.onload = () => { el.classList.add('has-img'); };
      img.onerror = () => { img.remove(); };
      el.appendChild(img);
    }
  });
}
