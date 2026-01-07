// creating object contain all meals recipe
var meals = [
  {
    recipeName: "Margherita Pizza",
    recipeDescription: "Classic Italian pizza with fresh mozzarella and basil",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Margherita-Pizza.jpeg",
    recipeLevel: "Intermediate",
    recipeOrigin: "Italian",
    recipePrepTime: 90,
    recipeCookTime: 12,
    recipeServingCount: 2,
    recipeRate: 4.9,
    recipeReviews: "(512 reviews)",
    recipeIngredients: [ "300g pizza dough", "200g crushed tomatoes", "250g fresh mozzarella", "Fresh basil leaves", "2 tablespoons olive oil", "2 cloves garlic, minced", "Salt and pepper to taste", "Parmesan cheese for topping", ],
    recipeInstructions: [ "Let pizza dough come to room temperature and rest for 1 hour.", "Preheat oven to maximum temperature (usually 250°C/480°F).", "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.", "Roll out dough on a floured surface to desired thickness.", "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.", "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.", ],
    recipeTips: [ "Use a pizza stone for crispier crust", "Don't overload with toppings - less is more", "Add basil after baking to keep it fresh", "Let dough rest properly for best texture", ],
    recipeNutrition: {
        recipeCalories: 580,
        recipeProtein: 24,
        recipeCarbs: 68,
        recipeFat: 22,
        recipeFiber: 4,
        recipeSodium: 920,
    },
  },
  {
    recipeName: "Spaghetti Carbonara",
    recipeDescription: "Creamy pasta with eggs, cheese, pancetta, and black pepper",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Creamy-Spaghetti-Carbonara.jpg",
    recipeLevel: "Intermediate",
    recipeOrigin: "Italian",
    recipePrepTime: 20,
    recipeCookTime: 15,
    recipeServingCount: 2,
    recipeRate: 4.7,
    recipeReviews: "(450 reviews)",
    recipeIngredients: [ "200g spaghetti", "100g pancetta or guanciale, diced", "2 large eggs", "50g Pecorino Romano cheese, grated", "50g Parmesan cheese, grated", "Freshly ground black pepper", "Salt to taste", "1 tablespoon olive oil (optional)", ],
    recipeInstructions: [ "Cook spaghetti according to package directions until al dente.", "While pasta cooks, crisp pancetta in a pan over medium heat. Remove pancetta, leaving rendered fat in the pan.", "In a bowl, whisk eggs, Pecorino Romano, Parmesan, and a generous amount of black pepper.", "Drain spaghetti, reserving some pasta water. Add hot spaghetti to the pan with pancetta fat. Toss to coat.", "Quickly pour egg mixture over spaghetti, tossing continuously to create a creamy sauce. Add a splash of pasta water if needed for consistency.", "Stir in crispy pancetta. Serve immediately with extra cheese and black pepper.", ],
    recipeTips: [ "Use guanciale for authentic flavor", "Don't overcook the eggs; the heat from the pasta cooks them gently", "Reserve plenty of pasta water to adjust sauce consistency", "Serve immediately as carbonara doesn't reheat well", ],
    recipeNutrition: {
        recipeCalories: 650,
        recipeProtein: 30,
        recipeCarbs: 70,
        recipeFat: 30,
        recipeFiber: 3,
        recipeSodium: 800,
    },
  },
  {
    recipeName: "Sushi Rolls (Maki)",
    recipeDescription: "Traditional Japanese seasoned rice rolled with fresh fish and vegetables",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Sushi-Rolls-(Maki).jpg",
    recipeLevel: "Intermediate",
    recipeOrigin: "Japanese",
    recipePrepTime: 45,
    recipeCookTime: 20,
    recipeServingCount: 4,
    recipeRate: 4.8,
    recipeReviews: "(1,240 reviews)",
    recipeIngredients: ["2 cups sushi rice", "3 cups water", "1/2 cup rice vinegar", "Nori sheets", "200g fresh salmon or tuna", "1 cucumber, julienned", "1 avocado, sliced", "Soy sauce and wasabi"],
    recipeInstructions: ["Rinse rice until water runs clear and cook in a rice cooker.", "Mix rice vinegar with sugar and salt; fold into hot rice.", "Place nori on a bamboo mat. Spread rice evenly.", "Add fish and vegetables in a line across the rice.", "Roll tightly using the mat, slice into bite-sized pieces."],
    recipeTips: ["Keep hands wet to prevent rice from sticking", "Use a very sharp knife for clean slices", "Don't overfill the roll"],
    recipeNutrition: {
      recipeCalories: 350,
      recipeProtein: 15,
      recipeCarbs: 65,
      recipeFat: 5,
      recipeFiber: 3,
      recipeSodium: 600
    }
  },
  {
    recipeName: "Pad Thai",
    recipeDescription: "Stir-fried rice noodle dish commonly served as street food in Thailand",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Pad-Thai.jpg",
    recipeLevel: "Intermediate",
    recipeOrigin: "Thai",
    recipePrepTime: 20,
    recipeCookTime: 15,
    recipeServingCount: 2,
    recipeRate: 4.7,
    recipeReviews: "(890 reviews)",
    recipeIngredients: ["200g rice noodles", "100g shrimp or tofu", "2 eggs", "1/2 cup bean sprouts", "2 tbsp tamarind paste", "2 tbsp fish sauce", "Crushed peanuts", "Lime wedges"],
    recipeInstructions: ["Soak noodles in warm water until pliable.", "Mix tamarind paste, fish sauce, and sugar for the sauce.", "Stir-fry shrimp/tofu, push to side, scramble eggs in the pan.", "Add noodles and sauce, toss until noodles are soft.", "Top with bean sprouts and crushed peanuts."],
    recipeTips: ["Don't boil the noodles; soak them", "Prep all ingredients before turning on the heat", "Adjust sweetness and sourness to taste"],
    recipeNutrition: {
      recipeCalories: 550,
      recipeProtein: 22,
      recipeCarbs: 70,
      recipeFat: 18,
      recipeFiber: 4,
      recipeSodium: 1100
    }
  },
  {
    recipeName: "Tacos al Pastor",
    recipeDescription: "Corn tortillas filled with spit-grilled pork, pineapple, and salsa",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Tacos-al-Pastor.jpg",
    recipeLevel: "Advanced",
    recipeOrigin: "Mexican",
    recipePrepTime: 120,
    recipeCookTime: 30,
    recipeServingCount: 6,
    recipeRate: 4.9,
    recipeReviews: "(2,100 reviews)",
    recipeIngredients: ["1kg pork shoulder", "Achiote paste", "Dried guajillo chilies", "Pineapple slices", "Corn tortillas", "Onion and cilantro", "Lime", "Salt and pepper"],
    recipeInstructions: ["Marinate pork in achiote and chili blend for at least 4 hours.", "Layer pork slices and pineapple; roast or grill until charred.", "Slice meat thinly off the block.", "Warm tortillas and fill with meat and pineapple.", "Top with onion, cilantro, and salsa."],
    recipeTips: ["Marinate overnight for best flavor", "Char the pineapple for extra sweetness", "Use double tortillas so they don't break"],
    recipeNutrition: {
      recipeCalories: 400,
      recipeProtein: 25,
      recipeCarbs: 35,
      recipeFat: 20,
      recipeFiber: 5,
      recipeSodium: 750
    }
  },
  {
    recipeName: "Butter Chicken",
    recipeDescription: "Chicken in a mildly spiced tomato sauce rich with butter and cream",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Butter-Chicken.jpg",
    recipeLevel: "Intermediate",
    recipeOrigin: "Indian",
    recipePrepTime: 60,
    recipeCookTime: 40,
    recipeServingCount: 4,
    recipeRate: 4.8,
    recipeReviews: "(1,500 reviews)",
    recipeIngredients: ["500g chicken breast", "1 cup yogurt", "2 tbsp garam masala", "1 cup tomato puree", "1/2 cup heavy cream", "50g butter", "Ginger garlic paste", "Kasuri methi (fenugreek)"],
    recipeInstructions: ["Marinate chicken in yogurt and spices for 1 hour.", "Grill or pan-fry chicken until cooked.", "Simmer tomato puree with butter and spices.", "Add cream and cooked chicken to the sauce.", "Garnish with fenugreek leaves."],
    recipeTips: ["Use cashew paste for thicker gravy", "Don't skip the fenugreek leaves", "Serve with Naan bread"],
    recipeNutrition: {
      recipeCalories: 600,
      recipeProtein: 30,
      recipeCarbs: 15,
      recipeFat: 45,
      recipeFiber: 2,
      recipeSodium: 900
    }
  },
  {
    recipeName: "Classic Beef Burger",
    recipeDescription: "Juicy beef patty with fresh toppings in a soft bun",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Classic-Beef-Burger.jpg",
    recipeLevel: "Beginner",
    recipeOrigin: "American",
    recipePrepTime: 15,
    recipeCookTime: 10,
    recipeServingCount: 4,
    recipeRate: 4.6,
    recipeReviews: "(3,200 reviews)",
    recipeIngredients: ["500g ground beef (20% fat)", "4 burger buns", "Cheddar cheese slices", "Lettuce", "Tomato slices", "Pickles", "Salt and pepper", "Ketchup/Mustard"],
    recipeInstructions: ["Form beef into 4 patties, indentation in center.", "Season generously with salt and pepper.", "Grill or fry on high heat for 3-4 mins per side.", "Add cheese in last minute to melt.", "Toast buns and assemble with toppings."],
    recipeTips: ["Don't press down on the patty while cooking", "Let the meat rest for 2 mins", "Toast the buns with butter"],
    recipeNutrition: {
      recipeCalories: 700,
      recipeProtein: 35,
      recipeCarbs: 50,
      recipeFat: 35,
      recipeFiber: 3,
      recipeSodium: 1100
    }
  },
  {
    recipeName: "Beef Bourguignon",
    recipeDescription: "Beef stew braised in red wine, often red Burgundy, and beef stock",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Beef-Bourguignon.jpg",
    recipeLevel: "Hard",
    recipeOrigin: "French",
    recipePrepTime: 40,
    recipeCookTime: 180,
    recipeServingCount: 6,
    recipeRate: 4.9,
    recipeReviews: "(650 reviews)",
    recipeIngredients: ["1kg beef chuck", "1 bottle red wine (Pinot Noir)", "Bacon lardons", "Pearl onions", "Mushrooms", "Carrots", "Beef stock", "Thyme and bay leaves"],
    recipeInstructions: ["Sear beef chunks in bacon fat; remove.", "Sauté vegetables, then deglaze with wine.", "Return beef, add stock and herbs.", "Simmer on low heat for 3 hours until tender.", "Sauté mushrooms and onions separately and add at the end."],
    recipeTips: ["Use a wine you would drink", "Pat beef dry before searing for better browning", "Even better the next day"],
    recipeNutrition: {
      recipeCalories: 650,
      recipeProtein: 45,
      recipeCarbs: 20,
      recipeFat: 35,
      recipeFiber: 5,
      recipeSodium: 850
    }
  },
  {
    recipeName: "Vietnamese Pho",
    recipeDescription: "Soup consisting of broth, rice noodles, herbs, and meat",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Vietnamese-Pho.jpg",
    recipeLevel: "Hard",
    recipeOrigin: "Vietnamese",
    recipePrepTime: 30,
    recipeCookTime: 360,
    recipeServingCount: 6,
    recipeRate: 4.8,
    recipeReviews: "(920 reviews)",
    recipeIngredients: ["2kg beef bones", "Rice noodles", "Thinly sliced raw beef", "Ginger and onion (charred)", "Star anise, cinnamon, cloves", "Fish sauce", "Fresh basil, mint, bean sprouts", "Lime"],
    recipeInstructions: ["Parboil bones to clean them.", "Simmer bones with charred aromatics and spices for 6+ hours.", "Strain broth and season with fish sauce.", "Place noodles and raw beef in a bowl.", "Pour boiling broth over to cook the beef instantly."],
    recipeTips: ["Char the onion and ginger for depth", "Skim the scum off the broth frequently", "Slice beef against the grain"],
    recipeNutrition: {
      recipeCalories: 450,
      recipeProtein: 30,
      recipeCarbs: 60,
      recipeFat: 12,
      recipeFiber: 3,
      recipeSodium: 1200
    }
  },
  {
    recipeName: "Traditional Fish and Chips",
    recipeDescription: "Battered fish served with deep-fried chips",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Traditional-Fish-and-Chips.jpg",
    recipeLevel: "Intermediate",
    recipeOrigin: "British",
    recipePrepTime: 30,
    recipeCookTime: 20,
    recipeServingCount: 4,
    recipeRate: 4.5,
    recipeReviews: "(800 reviews)",
    recipeIngredients: ["4 cod or haddock fillets", "2 cups flour", "1 cup beer (cold)", "1 tsp baking powder", "4 large potatoes", "Oil for frying", "Salt and vinegar", "Tartar sauce"],
    recipeInstructions: ["Cut potatoes into thick strips and soak in water.", "Mix flour, baking powder, and beer for batter.", "Fry potatoes at 140°C, drain, then fry again at 190°C.", "Dip fish in batter and fry until golden.", "Serve with malt vinegar and salt."],
    recipeTips: ["Use very cold beer for crispy batter", "Double fry the chips for fluffiness", "Don't overcrowd the fryer"],
    recipeNutrition: {
      recipeCalories: 850,
      recipeProtein: 40,
      recipeCarbs: 90,
      recipeFat: 45,
      recipeFiber: 6,
      recipeSodium: 900
    }
  },
  {
    recipeName: "Kung Pao Chicken",
    recipeDescription: "Spicy, stir-fried Chinese dish made with cubes of chicken, peanuts, and chili peppers",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Kung-Pao-Chicken.jpg",
    recipeLevel: "Intermediate",
    recipeOrigin: "Chinese",
    recipePrepTime: 25,
    recipeCookTime: 10,
    recipeServingCount: 4,
    recipeRate: 4.7,
    recipeReviews: "(1,100 reviews)",
    recipeIngredients: ["500g chicken thighs, diced", "1/2 cup roasted peanuts", "Dried red chilies", "Sichuan peppercorns", "Soy sauce", "Vinegar", "Sugar", "Scallions"],
    recipeInstructions: ["Marinate chicken in soy sauce and cornstarch.", "Mix sauce ingredients (soy, vinegar, sugar).", "Stir-fry chilies and peppercorns until fragrant.", "Add chicken and cook until no longer pink.", "Add sauce and peanuts, toss to coat."],
    recipeTips: ["Don't burn the chilies", "Have all ingredients ready before wok frying", "Use thigh meat for tenderness"],
    recipeNutrition: {
      recipeCalories: 480,
      recipeProtein: 28,
      recipeCarbs: 18,
      recipeFat: 32,
      recipeFiber: 3,
      recipeSodium: 950
    }
  },
  {
    recipeName: "Falafel",
    recipeDescription: "Deep-fried ball or patty-shaped fritter made from ground chickpeas",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Falafel.jpg",
    recipeLevel: "Intermediate",
    recipeOrigin: "Middle Eastern",
    recipePrepTime: 720,
    recipeCookTime: 15,
    recipeServingCount: 4,
    recipeRate: 4.8,
    recipeReviews: "(950 reviews)",
    recipeIngredients: ["2 cups dried chickpeas", "1 onion", "Fresh parsley and cilantro", "4 cloves garlic", "1 tbsp cumin", "1 tbsp coriander", "1 tsp baking powder", "Oil for frying"],
    recipeInstructions: ["Soak chickpeas overnight (do not boil).", "Blend chickpeas with herbs, onion, and spices to coarse texture.", "Refrigerate mix for 1 hour.", "Form into balls or patties.", "Deep fry until dark brown and crispy."],
    recipeTips: ["Never use canned chickpeas", "Ensure oil is hot enough so they don't break", "Serve with tahini sauce"],
    recipeNutrition: {
      recipeCalories: 330,
      recipeProtein: 13,
      recipeCarbs: 30,
      recipeFat: 18,
      recipeFiber: 8,
      recipeSodium: 400
    }
  },
  {
    recipeName: "Classic Lasagna",
    recipeDescription: "Stacked layers of pasta, meat sauce, and cheese",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Classic-Lasagna.jpg",
    recipeLevel: "Intermediate",
    recipeOrigin: "Italian",
    recipePrepTime: 45,
    recipeCookTime: 60,
    recipeServingCount: 8,
    recipeRate: 4.9,
    recipeReviews: "(2,300 reviews)",
    recipeIngredients: ["Lasagna noodles", "500g ground beef", "700ml marinara sauce", "400g ricotta cheese", "500g mozzarella cheese", "1 egg", "Parmesan cheese", "Italian herbs"],
    recipeInstructions: ["Cook meat with sauce and herbs.", "Mix ricotta with egg and seasoning.", "Spread sauce on baking dish bottom.", "Layer: noodles, ricotta mix, meat sauce, mozzarella.", "Repeat layers and bake at 190°C for 45 mins."],
    recipeTips: ["Let it rest 15 mins before cutting", "Use no-boil noodles to save time", "Freshly grated cheese melts better"],
    recipeNutrition: {
      recipeCalories: 680,
      recipeProtein: 40,
      recipeCarbs: 55,
      recipeFat: 32,
      recipeFiber: 4,
      recipeSodium: 1050
    }
  },
  {
    recipeName: "Tonkotsu Ramen",
    recipeDescription: "Japanese noodle soup with a rich pork bone broth",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Tonkotsu-Ramen.jpg",
    recipeLevel: "Expert",
    recipeOrigin: "Japanese",
    recipePrepTime: 60,
    recipeCookTime: 720,
    recipeServingCount: 6,
    recipeRate: 4.9,
    recipeReviews: "(780 reviews)",
    recipeIngredients: ["Pork trotters and neck bones", "Ramen noodles", "Chashu pork belly", "Soft-boiled egg", "Green onions", "Nori", "Soy sauce/Tare", "Bamboo shoots"],
    recipeInstructions: ["Boil bones, clean, then simmer for 12 hours for milky broth.", "Prepare Chashu pork by braising pork belly.", "Cook noodles for exactly 2 minutes.", "Place tare in bowl, add hot broth and noodles.", "Top with pork, egg, and garnishes."],
    recipeTips: ["The longer the boil, the richer the broth", "Marinate eggs in soy sauce overnight", "Serve very hot"],
    recipeNutrition: {
      recipeCalories: 750,
      recipeProtein: 35,
      recipeCarbs: 65,
      recipeFat: 40,
      recipeFiber: 2,
      recipeSodium: 1800
    }
  },
  {
    recipeName: "Hyderabadi Biryani",
    recipeDescription: "Aromatic rice dish made with basmati rice, spices, and marinated chicken",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Hyderabadi-Biryani.jpg",
    recipeLevel: "Hard",
    recipeOrigin: "Indian",
    recipePrepTime: 60,
    recipeCookTime: 45,
    recipeServingCount: 6,
    recipeRate: 4.8,
    recipeReviews: "(3,100 reviews)",
    recipeIngredients: ["500g basmati rice", "1kg chicken", "1 cup yogurt", "Fried onions (Barista)", "Saffron milk", "Mint and coriander", "Whole spices (cardamom, cloves)", "Ghee"],
    recipeInstructions: ["Marinate chicken with yogurt and spices overnight.", "Parboil rice with whole spices until 70% done.", "Layer chicken in heavy pot, top with rice, herbs, and saffron.", "Seal pot with dough.", "Cook on low flame (dum) for 40 mins."],
    recipeTips: ["Don't overcook the rice during parboiling", "Use high quality saffron", "Let it rest before opening the seal"],
    recipeNutrition: {
      recipeCalories: 700,
      recipeProtein: 35,
      recipeCarbs: 80,
      recipeFat: 25,
      recipeFiber: 3,
      recipeSodium: 950
    }
  },
  {
    recipeName: "Canadian Poutine",
    recipeDescription: "French fries topped with cheese curds and brown gravy",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Canadian-Poutine.jpg",
    recipeLevel: "Easy",
    recipeOrigin: "Canadian",
    recipePrepTime: 20,
    recipeCookTime: 20,
    recipeServingCount: 4,
    recipeRate: 4.6,
    recipeReviews: "(550 reviews)",
    recipeIngredients: ["1kg russet potatoes", "200g fresh cheese curds", "2 cups beef gravy", "Oil for frying", "Salt", "Pepper"],
    recipeInstructions: ["Cut potatoes and fry until crispy.", "Heat beef gravy until bubbling.", "Place hot fries in a bowl.", "Top immediately with room-temp cheese curds.", "Pour hot gravy over everything to melt curds slightly."],
    recipeTips: ["Must use fresh cheese curds for the 'squeak'", "Gravy must be very hot", "Eat immediately"],
    recipeNutrition: {
      recipeCalories: 800,
      recipeProtein: 20,
      recipeCarbs: 85,
      recipeFat: 45,
      recipeFiber: 6,
      recipeSodium: 1300
    }
  },
  {
    recipeName: "Wiener Schnitzel",
    recipeDescription: "Thin, breaded and pan-fried veal cutlet",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Wiener-Schnitzel.jpg",
    recipeLevel: "Intermediate",
    recipeOrigin: "Austrian",
    recipePrepTime: 20,
    recipeCookTime: 10,
    recipeServingCount: 2,
    recipeRate: 4.7,
    recipeReviews: "(600 reviews)",
    recipeIngredients: ["2 veal cutlets", "Flour", "2 eggs, beaten", "Breadcrumbs", "Butter and oil", "Lemon wedges", "Salt and pepper", "Parsley"],
    recipeInstructions: ["Pound veal until very thin (5mm).", "Dredge in flour, dip in egg, coat in breadcrumbs.", "Heat butter and oil in a pan.", "Fry cutlet, shaking pan to create ripples in coating.", "Serve with lemon and parsley."],
    recipeTips: ["Don't press breadcrumbs into meat", "The cutlet must float in the fat", "Souffléd breading is the goal"],
    recipeNutrition: {
      recipeCalories: 580,
      recipeProtein: 35,
      recipeCarbs: 40,
      recipeFat: 30,
      recipeFiber: 2,
      recipeSodium: 600
    }
  },
  {
    recipeName: "Brazilian Feijoada",
    recipeDescription: "Stew of black beans with beef and pork",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Brazilian-Feijoada.jpg",
    recipeLevel: "Hard",
    recipeOrigin: "Brazilian",
    recipePrepTime: 720,
    recipeCookTime: 180,
    recipeServingCount: 8,
    recipeRate: 4.8,
    recipeReviews: "(450 reviews)",
    recipeIngredients: ["500g black beans", "Pork ribs", "Smoked sausage (Chorizo)", "Bacon", "Dried beef", "Onion and garlic", "Bay leaves", "Orange slices"],
    recipeInstructions: ["Soak beans and salted meats overnight.", "Boil meats to remove excess salt.", "Cook beans with meats, onion, garlic, and bay leaves.", "Simmer until thick and creamy (2-3 hours).", "Serve with white rice, kale, and orange slices."],
    recipeTips: ["The stew tastes better the next day", "Orange slices help cut the richness", "Mash some beans to thicken broth"],
    recipeNutrition: {
      recipeCalories: 750,
      recipeProtein: 50,
      recipeCarbs: 60,
      recipeFat: 35,
      recipeFiber: 15,
      recipeSodium: 1200
    }
  },
  {
    recipeName: "Greek Moussaka",
    recipeDescription: "Eggplant and potato-based dish with ground meat and béchamel sauce",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Greek-Moussaka.jpg",
    recipeLevel: "Hard",
    recipeOrigin: "Greek",
    recipePrepTime: 60,
    recipeCookTime: 60,
    recipeServingCount: 8,
    recipeRate: 4.7,
    recipeReviews: "(720 reviews)",
    recipeIngredients: ["3 eggplants, sliced", "500g potatoes, sliced", "500g ground lamb", "Onion and garlic", "Tomato paste", "Cinnamon", "Milk, butter, flour (for Béchamel)", "Cheese"],
    recipeInstructions: ["Salt eggplant slices to remove moisture, then fry.", "Cook lamb with onions, tomato, and cinnamon.", "Make thick béchamel sauce.", "Layer potatoes, eggplant, and meat sauce.", "Top with béchamel and cheese; bake until golden."],
    recipeTips: ["Roast vegetables instead of frying for lighter version", "Allow to set for 20 mins before slicing", "A pinch of nutmeg in béchamel is key"],
    recipeNutrition: {
      recipeCalories: 620,
      recipeProtein: 28,
      recipeCarbs: 45,
      recipeFat: 38,
      recipeFiber: 7,
      recipeSodium: 800
    }
  },
  {
    recipeName: "Beef Stroganoff",
    recipeDescription: "Sautéed pieces of beef served in a sauce with smetana (sour cream)",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Beef-Stroganoff.jpg",
    recipeLevel: "Intermediate",
    recipeOrigin: "Russian",
    recipePrepTime: 20,
    recipeCookTime: 20,
    recipeServingCount: 4,
    recipeRate: 4.6,
    recipeReviews: "(1,050 reviews)",
    recipeIngredients: ["500g beef sirloin strips", "1 onion, chopped", "250g mushrooms, sliced", "1 cup sour cream", "1 tbsp mustard", "Beef stock", "Butter", "Egg noodles"],
    recipeInstructions: ["Sear beef strips quickly in butter; remove.", "Sauté onions and mushrooms in same pan.", "Add stock and mustard, reduce slightly.", "Stir in sour cream (don't boil).", "Return beef to warm through. Serve over noodles."],
    recipeTips: ["Do not overcook the beef", "Use room temperature sour cream to prevent curdling", "Add paprika for extra color"],
    recipeNutrition: {
      recipeCalories: 580,
      recipeProtein: 35,
      recipeCarbs: 45,
      recipeFat: 30,
      recipeFiber: 2,
      recipeSodium: 700
    }
  },
  {
    recipeName: "Korean Bibimbap",
    recipeDescription: "Mixed rice with meat and assorted vegetables",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Korean-Bibimbap.jpg",
    recipeLevel: "Intermediate",
    recipeOrigin: "Korean",
    recipePrepTime: 45,
    recipeCookTime: 15,
    recipeServingCount: 2,
    recipeRate: 4.9,
    recipeReviews: "(1,300 reviews)",
    recipeIngredients: ["2 cups cooked short-grain rice", "100g beef (bulgogi)", "Spinach", "Bean sprouts", "Carrots", "Shiitake mushrooms", "1 egg", "Gochujang paste"],
    recipeInstructions: ["Sauté each vegetable separately with sesame oil.", "Cook beef with soy sauce and sugar.", "Place hot rice in bowl.", "Arrange vegetables and meat nicely on top.", "Top with fried egg and dollop of Gochujang."],
    recipeTips: ["Use a stone bowl (Dolsot) for crispy rice bottom", "Customize veggies to what you have", "Sesame oil is essential"],
    recipeNutrition: {
      recipeCalories: 550,
      recipeProtein: 25,
      recipeCarbs: 80,
      recipeFat: 15,
      recipeFiber: 6,
      recipeSodium: 900
    }
  },
  {
    recipeName: "Tom Yum Goong",
    recipeDescription: "Hot and sour Thai soup with shrimp",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Tom-Yum-Goong.jpg",
    recipeLevel: "Intermediate",
    recipeOrigin: "Thai",
    recipePrepTime: 20,
    recipeCookTime: 15,
    recipeServingCount: 4,
    recipeRate: 4.7,
    recipeReviews: "(850 reviews)",
    recipeIngredients: ["1L chicken or shrimp stock", "300g shrimp", "Lemongrass stalks", "Galangal", "Kaffir lime leaves", "Thai chilies", "Mushrooms", "Fish sauce and lime juice"],
    recipeInstructions: ["Boil stock with lemongrass, galangal, and lime leaves.", "Add mushrooms and chilies.", "Add shrimp and cook for 2 minutes.", "Turn off heat, stir in fish sauce and lime juice.", "Garnish with cilantro."],
    recipeTips: ["Don't overcook the shrimp", "Add lime juice after heat is off to keep freshness", "Adjust chilies for spice tolerance"],
    recipeNutrition: {
      recipeCalories: 200,
      recipeProtein: 25,
      recipeCarbs: 10,
      recipeFat: 8,
      recipeFiber: 1,
      recipeSodium: 1100
    }
  },
  {
    recipeName: "Argentine Steak with Chimichurri",
    recipeDescription: "Grilled steak served with a vinegar-based herb sauce",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Argentine-Steak-with-Chimichurri.jpg",
    recipeLevel: "Easy",
    recipeOrigin: "Argentinian",
    recipePrepTime: 20,
    recipeCookTime: 15,
    recipeServingCount: 2,
    recipeRate: 4.8,
    recipeReviews: "(980 reviews)",
    recipeIngredients: ["2 Ribeye or Sirloin steaks", "Parsley", "Oregano", "Garlic", "Red pepper flakes", "Red wine vinegar", "Olive oil", "Salt"],
    recipeInstructions: ["Blend herbs, garlic, vinegar, and oil for Chimichurri.", "Let sauce sit for flavors to meld.", "Salt steaks generously.", "Grill steaks to desired doneness.", "Slice and top with Chimichurri."],
    recipeTips: ["Let steaks reach room temp before grilling", "Make sauce 2 hours ahead", "Don't skimp on the salt"],
    recipeNutrition: {
      recipeCalories: 650,
      recipeProtein: 50,
      recipeCarbs: 2,
      recipeFat: 48,
      recipeFiber: 1,
      recipeSodium: 600
    }
  },
  {
    recipeName: "Peking Duck",
    recipeDescription: "Famous duck dish from Beijing with thin, crisp skin",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Peking-Duck.jpg",
    recipeLevel: "Expert",
    recipeOrigin: "Chinese",
    recipePrepTime: 1440,
    recipeCookTime: 80,
    recipeServingCount: 4,
    recipeRate: 4.9,
    recipeReviews: "(600 reviews)",
    recipeIngredients: ["1 whole duck", "Maltose syrup", "Soy sauce", "Five-spice powder", "Cucumber", "Scallions", "Pancakes", "Hoisin sauce"],
    recipeInstructions: ["Pump air under duck skin to separate fat.", "Blanch duck in boiling water, then glaze with maltose syrup.", "Hang dry for 24 hours.", "Roast until skin is mahogany and crispy.", "Serve skin and meat with pancakes and hoisin."],
    recipeTips: ["Drying the skin is crucial for crispiness", "Use a meat pump for the air step", "Slice skin while hot"],
    recipeNutrition: {
      recipeCalories: 700,
      recipeProtein: 30,
      recipeCarbs: 40,
      recipeFat: 50,
      recipeFiber: 2,
      recipeSodium: 1100
    }
  },
  {
    recipeName: "Peruvian Ceviche",
    recipeDescription: "Fresh raw fish cured in fresh citrus juices",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Peruvian-Ceviche.jpg",
    recipeLevel: "Easy",
    recipeOrigin: "Peruvian",
    recipePrepTime: 30,
    recipeCookTime: 0,
    recipeServingCount: 4,
    recipeRate: 4.7,
    recipeReviews: "(820 reviews)",
    recipeIngredients: ["500g fresh white fish (sea bass)", "1 cup lime juice", "Red onion, sliced", "Aji limo (chili)", "Cilantro", "Sweet potato, cooked", "Corn", "Salt"],
    recipeInstructions: ["Cut fish into cubes and salt generously.", "Add sliced onions and chilies.", "Pour lime juice over fish and toss.", "Let sit for 5-10 minutes ('cooking' in acid).", "Add cilantro and serve with corn and sweet potato."],
    recipeTips: ["Use only the freshest fish", "Don't marinate too long or fish gets rubbery", "Keep everything cold"],
    recipeNutrition: {
      recipeCalories: 300,
      recipeProtein: 35,
      recipeCarbs: 25,
      recipeFat: 5,
      recipeFiber: 4,
      recipeSodium: 800
    }
  },
  {
    recipeName: "Southern Fried Chicken",
    recipeDescription: "Chicken pieces coated in seasoned batter and deep fried",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Southern-Fried-Chicken.jpg",
    recipeLevel: "Intermediate",
    recipeOrigin: "American",
    recipePrepTime: 240,
    recipeCookTime: 20,
    recipeServingCount: 4,
    recipeRate: 4.8,
    recipeReviews: "(2,500 reviews)",
    recipeIngredients: ["1 whole chicken, cut up", "2 cups buttermilk", "2 cups flour", "Paprika", "Garlic powder", "Cayenne pepper", "Salt and pepper", "Oil for frying"],
    recipeInstructions: ["Soak chicken in seasoned buttermilk for 4 hours.", "Mix flour with all dry spices.", "Dredge chicken in flour, dip back in buttermilk, then flour again.", "Let rest 15 mins.", "Fry at 175°C until golden brown."],
    recipeTips: ["Resting helps breading adhere", "Don't crowd the pan", "Use a cast iron skillet if possible"],
    recipeNutrition: {
      recipeCalories: 800,
      recipeProtein: 40,
      recipeCarbs: 30,
      recipeFat: 55,
      recipeFiber: 2,
      recipeSodium: 1100
    }
  },
  {
    recipeName: "Shakshuka",
    recipeDescription: "Eggs poached in a sauce of tomatoes, olive oil, peppers, onion, and garlic",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Shakshuka.jpg",
    recipeLevel: "Easy",
    recipeOrigin: "North African",
    recipePrepTime: 10,
    recipeCookTime: 20,
    recipeServingCount: 3,
    recipeRate: 4.6,
    recipeReviews: "(1,100 reviews)",
    recipeIngredients: ["4 eggs", "1 can diced tomatoes", "1 bell pepper", "1 onion", "2 cloves garlic", "Cumin", "Paprika", "Crusty bread"],
    recipeInstructions: ["Sauté onion and pepper until soft.", "Add garlic, spices, and tomatoes; simmer for 10 mins.", "Make wells in the sauce and crack eggs into them.", "Cover and cook until whites set but yolks runny.", "Garnish with parsley and serve with bread."],
    recipeTips: ["Don't overcook the yolks", "Add feta cheese for creaminess", "Use good quality olive oil"],
    recipeNutrition: {
      recipeCalories: 350,
      recipeProtein: 18,
      recipeCarbs: 20,
      recipeFat: 22,
      recipeFiber: 5,
      recipeSodium: 600
    }
  },
  {
    recipeName: "Hungarian Goulash",
    recipeDescription: "A hearty stew of meat and vegetables seasoned with paprika",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Hungarian-Goulash.jpg",
    recipeLevel: "Intermediate",
    recipeOrigin: "Hungarian",
    recipePrepTime: 30,
    recipeCookTime: 120,
    recipeServingCount: 6,
    recipeRate: 4.7,
    recipeReviews: "(670 reviews)",
    recipeIngredients: ["1kg beef chuck, cubed", "3 tbsp sweet paprika", "2 onions", "Garlic", "Carrots", "Potatoes", "Beef broth", "Caraway seeds"],
    recipeInstructions: ["Sauté onions in lard or oil.", "Remove from heat, stir in paprika (to prevent burning).", "Add beef and sear.", "Add broth, garlic, caraway; simmer 1.5 hours.", "Add potatoes and carrots; cook until tender."],
    recipeTips: ["Use high quality Hungarian paprika", "Don't fry the paprika, it turns bitter", "Serve with bread or dumplings"],
    recipeNutrition: {
      recipeCalories: 500,
      recipeProtein: 40,
      recipeCarbs: 25,
      recipeFat: 25,
      recipeFiber: 5,
      recipeSodium: 750
    }
  },
  {
    recipeName: "Koshary",
    recipeDescription: "Egyptian national dish mixing pasta, rice, lentils, and tomato sauce",
    recipeImage: "https://mohammed-al-masry.github.io/what-is-for-dinner/images/Koshary.jpg",
    recipeLevel: "Intermediate",
    recipeOrigin: "Egyptian",
    recipePrepTime: 45,
    recipeCookTime: 60,
    recipeServingCount: 4,
    recipeRate: 4.8,
    recipeReviews: "(500 reviews)",
    recipeIngredients: ["1 cup rice", "1 cup lentils", "1 cup macaroni", "Chickpeas", "Crispy fried onions", "Tomato sauce (spicy)", "Garlic vinegar (Dakka)", "Cumin"],
    recipeInstructions: ["Cook rice and lentils together with cumin.", "Boil macaroni separately.", "Prepare spicy tomato sauce with garlic.", "Make garlic vinegar sauce.", "Layer rice/lentils, macaroni, sauce, chickpeas, and top with fried onions."],
    recipeTips: ["The fried onions must be very crispy", "Dakka sauce is essential", "Mix everything before eating"],
    recipeNutrition: {
      recipeCalories: 600,
      recipeProtein: 20,
      recipeCarbs: 100,
      recipeFat: 15,
      recipeFiber: 10,
      recipeSodium: 500
    }
  }
];


// creating function to change the recipe details
function changeRecipeDetails() {
    var meal = meals[Math.floor(Math.random() * meals.length)];
    var ingredients = ``;
    var instructions = ``;
    var chefTips = ``;
    
    // creating function to change the recipe ingredients
    function changeRecipeIngredients() {
        
        for (i = 0; i < meal.recipeIngredients.length; i++) {
            ingredients += `<div class="d-flex align-items-center mb-2">
                                <div class="badge rounded-circle text-white list-items-bg-colour me-3">
                                    ${i + 1}
                                </div>
                                <p class="mb-0">${meal.recipeIngredients[i]}</p>
                            </div>
                            `;
        };
    };
    changeRecipeIngredients()

    // creating function to change the recipe instructions
    function changeRecipeInstructions() {
        for (i = 0; i < meal.recipeInstructions.length; i++) {
            instructions += `<div class="d-flex align-items-center mb-4">
                                <div class="py-2 px-3 rounded-4 text-white fw-bold fs-5 list-items-bg-colour me-3">
                                    ${i + 1}
                                </div>
                                <p class="mb-0">${meal.recipeInstructions[i]}</p>
                            </div>
                            `;
        };
    }
    changeRecipeInstructions();

    // creating function to change the recipe tips
    function changeRecipeTips() {
        for (i = 0; i < meal.recipeTips.length; i++) {
            chefTips += `<div class="d-flex align-items-center border-start border-4 border-warning rounded-4 chef-tip-bg-colour p-3 mb-3">
                        <div>
                            <i class="fa-solid fa-check-circle checked-icon-colour fa-lg me-2"></i>
                        </div>
                        <div>
                            <p class="mb-0">${meal.recipeTips[i]}</p>
                        </div>
                    </div>
                    `;
        };
    };
    changeRecipeTips();

    document.getElementById("meal").innerHTML = `<div class="container">
                                                    <div class="card rounded-4">
                                                        <div class="row">
                                                            <div class="col-lg-5">
                                                                <!-- recipe rate and preparation time -->
                                                                <div class="position-relative ">
                                                                    <!-- recipe image -->
                                                                    <img src="${meal.recipeImage}"
                                                                        class="img-fluid object-fit-cover rounded-start-4"
                                                                        alt="${meal.recipeName} meal picture">
                                                                    <!-- end of recipe image -->
                                                                    <!-- recipe rate-->
                                                                    <div class="bg-white rounded-5 py-2 px-3 position-absolute rate-position">
                                                                        <i class="fa-solid fa-star text-warning me-1"></i>
                                                                        <span class="fw-semibold me-1">${meal.recipeRate}</span>
                                                                        <span class="text-secondary">${meal.recipeReviews}</span>
                                                                    </div>
                                                                    <!-- end of recipe rate -->
                                                                    <!-- recipe preparation time -->
                                                                    <div
                                                                        class="bg-white preparation-recipe-width rounded-5 px-5 py-4 d-flex align-items-center justify-content-between position-absolute preparation-recipe-position start-50 translate-middle-x">
                                                                        <div class="text-center">
                                                                            <i class="fa-solid fa-clock fs-4 icon-prep-colour"></i>
                                                                            <p class="mb-0 text-secondary">Prep Time</p>
                                                                            <span class="fw-bold">${meal.recipePrepTime} min</span>
                                                                        </div>
                                                                        <div class="text-center">
                                                                            <i class="fa-solid fa-fire-burner text-danger fs-4"></i>
                                                                            <p class="mb-0 text-secondary">Cook Time</p>
                                                                            <span class="fw-bold">${meal.recipeCookTime} min</span>
                                                                        </div>
                                                                        <div class="text-center">
                                                                            <i class="fa-solid fa-users text-primary fs-4"></i>
                                                                            <p class="mb-0 text-secondary">Servings</p>
                                                                            <span class="fw-bold">${meal.recipeServingCount} people</span>
                                                                        </div>
                                                                    </div>
                                                                    <!-- end of recipe preparation time -->
                                                                </div>
                                                                <!-- end of recipe rate and preparation time -->
                                                            </div>
                                                            <div class="col-lg-7">
                                                                <div class="py-4 pe-4 card-height overflow-y-auto">
                                                                    <!-- recipe level and type tags -->
                                                                    <div class="card-header bg-transparent border-0">
                                                                        <span class="badge text-bg-success text-success bg-opacity-10 rounded-5 me-3">${meal.recipeLevel}</span>
                                                                        <span class="badge text-bg-primary text-primary bg-opacity-10 rounded-5">${meal.recipeOrigin}</span>
                                                                    </div>
                                                                    <!-- end of recipe level and type tags -->
                                                                    <div class="card-body">
                                                                        <!-- recipe name and brief -->
                                                                        <div class="recipe-name d-flex justify-content-between mb-4">
                                                                            <div>
                                                                                <h2 class="card-title h2 mb-0 fw-bold">${meal.recipeName}</h2>
                                                                                <p class="card-text text-secondary fs-6">${meal.recipeDescription}</p>
                                                                            </div>
                                                                            <div>
                                                                                <span class="fa-stack fa-2x fs-3">
                                                                                    <i class="fa-solid fa-square fa-stack-2x bg-icon-card-colour"></i>
                                                                                    <i class="fa-solid fa-bookmark fa-stack-1x fa-inverse fs-6 text-head-icon-card-colour"></i>
                                                                                </span>
                                                                                <span class="fa-stack fa-2x fs-3">
                                                                                    <i class="fa-solid fa-square fa-stack-2x bg-icon-card-colour"></i>
                                                                                    <i class="fa-solid fa-share-nodes fa-stack-1x fa-inverse fs-6 text-head-icon-card-colour"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <!-- end of recipe name and brief -->
                                                                        <!-- alert for long recipe more than 45 mins -->
                                                                        <div id="alert" class="d-none" role="alert">
                                                                            <div class="d-flex align-items-center border-start border-4 border-danger rounded-3 bg-alert-colour p-3 mb-4">
                                                                                <div>
                                                                                    <i class="fa-solid fa-triangle-exclamation text-danger fa-lg me-2"></i>
                                                                                </div>
                                                                                <div>
                                                                                    <p class="mb-0 text-danger-emphasis fw-bolder">Extended Preparation Time</p>
                                                                                    <p class="mb-0 text-danger ">This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <!-- end of alert for long recipe more than 45 mins -->
                                                                        <!-- recipe details -->
                                                                        <ul class="nav nav-underline justify-content-evenly fw-semibold" id="recipeDetails" role="tablist">
                                                                            <li class="nav-item" role="presentation">
                                                                                <button class="nav-link active px-3" id="ingredients-tab" data-bs-toggle="pill" data-bs-target="#ingredients" type="button" role="tab" aria-controls="ingredients" aria-selected="true">
                                                                                    <i class="fa-solid fa-list-check"></i> Ingredients
                                                                                </button>
                                                                            </li>
                                                                            <li class="nav-item" role="presentation">
                                                                                <button class="nav-link px-3" id="instructions-tab" data-bs-toggle="pill" data-bs-target="#instructions" type="button" role="tab" aria-controls="instructions" aria-selected="false">
                                                                                    <i class="fa-solid fa-book-open"></i> Instructions
                                                                                </button>
                                                                            </li>
                                                                            <li class="nav-item" role="presentation">
                                                                                <button class="nav-link px-3" id="nutrition-tab" data-bs-toggle="pill" data-bs-target="#nutrition" type="button" role="tab" aria-controls="nutrition" aria-selected="false">
                                                                                    <i class="fa-solid fa-pie-chart"></i> Nutrition
                                                                                </button>
                                                                            </li>
                                                                            <li class="nav-item" role="presentation">
                                                                                <button class="nav-link px-3" id="chefTips-tab" data-bs-toggle="pill" data-bs-target="#chefTips" type="button" role="tab" aria-controls="chefTips" aria-selected="false">
                                                                                    <i class="fa-solid fa-lightbulb"></i> Chef's Tips
                                                                                </button>
                                                                            </li>
                                                                        </ul>
                                                                        <div class="tab-content tap-height border-bottom border-top my-3" id="recipeDetailsContent">
                                                                            <!-- Ingredients tap -->
                                                                            <div class="tab-pane fade show active ingredients-bg-colour rounded-4 p-4 my-3" id="ingredients" role="tabpanel" aria-labelledby="ingredients-tab" tabindex="0">
                                                                                ${ingredients}
                                                                            </div>
                                                                            <!-- end of Ingredients tap -->
                                                                            <!-- Instruction tap -->
                                                                            <div class="tab-pane fade my-3" id="instructions" role="tabpanel" aria-labelledby="instructions-tab" tabindex="0">
                                                                                ${instructions}
                                                                            </div>
                                                                            <!-- end of Instruction tap -->
                                                                            <!-- Nutrition tap -->
                                                                            <div class="tab-pane fade mx-3 my-3" id="nutrition" role="tabpanel" aria-labelledby="nutrition-tab" tabindex="0">
                                                                                <div class="row gy-3">
                                                                                    <div class="col-md-6">
                                                                                        <div class="bg-light rounded-3 p-2 d-flex align-items-center justify-content-between">
                                                                                            <div class="d-flex align-items-center">
                                                                                                <span class="fa-stack fa-2x fs-4">
                                                                                                    <i class="fa-solid fa-square fa-stack-2x bg-icon-card-colour"></i>
                                                                                                    <i class="fa-solid fa-fire fa-stack-1x fa-inverse text-head-icon-card-colour fs-6"></i>
                                                                                                </span>
                                                                                                <p class="mb-0 text-secondary">Calories</p>
                                                                                            </div>
                                                                                            <div>
                                                                                                <span class="fw-bold fs-5">${meal.recipeNutrition.recipeCalories} kcal</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-6">
                                                                                        <div class="bg-light rounded-3 p-2 d-flex align-items-center justify-content-between">
                                                                                            <div class="d-flex align-items-center">
                                                                                                <span class="fa-stack fa-2x fs-4">
                                                                                                    <i class="fa-solid fa-square fa-stack-2x text-primary text-opacity-25"></i>
                                                                                                    <i class="fa-solid fa-dumbbell fa-stack-1x fa-inverse text-primary fs-6"></i>
                                                                                                </span>
                                                                                                <p class="mb-0 text-secondary">Protein</p>
                                                                                            </div>
                                                                                            <div>
                                                                                                <span class="fw-bold fs-5">${meal.recipeNutrition.recipeProtein}g</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-6">
                                                                                        <div class="bg-light rounded-3 p-2 d-flex align-items-center justify-content-between">
                                                                                            <div class="d-flex align-items-center">
                                                                                                <span class="fa-stack fa-2x fs-4">
                                                                                                    <i class="fa-solid fa-square fa-stack-2x text-warning text-opacity-25"></i>
                                                                                                    <i class="fa-solid fa-wheat-awn fa-stack-1x fa-inverse text-warning fs-6"></i>
                                                                                                </span>
                                                                                                <p class="mb-0 text-secondary">Carbohydrates</p>
                                                                                            </div>
                                                                                            <div>
                                                                                                <span class="fw-bold fs-5">${meal.recipeNutrition.recipeCarbs}g</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-6">
                                                                                        <div class="bg-light rounded-3 p-2 d-flex align-items-center justify-content-between">
                                                                                            <div class="d-flex align-items-center">
                                                                                                <span class="fa-stack fa-2x fs-4">
                                                                                                    <i class="fa-solid fa-square fa-stack-2x text-danger text-opacity-25"></i>
                                                                                                    <i class="fa-solid fa-droplet fa-stack-1x fa-inverse text-danger fs-6"></i>
                                                                                                </span>
                                                                                                <p class="mb-0 text-secondary">Fat</p>
                                                                                            </div>
                                                                                            <div>
                                                                                                <span class="fw-bold fs-5">${meal.recipeNutrition.recipeFat}g</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-6">
                                                                                        <div class="bg-light rounded-3 p-2 d-flex align-items-center justify-content-between">
                                                                                            <div class="d-flex align-items-center">
                                                                                                <span class="fa-stack fa-2x fs-4">
                                                                                                    <i class="fa-solid fa-square fa-stack-2x text-success text-opacity-25"></i>
                                                                                                    <i class="fa-solid fa-seedling fa-stack-1x fa-inverse text-success fs-6"></i>
                                                                                                </span>
                                                                                                <p class="mb-0 text-secondary">Fiber</p>
                                                                                            </div>
                                                                                            <div>
                                                                                                <span class="fw-bold fs-5">${meal.recipeNutrition.recipeFiber}g</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-6">
                                                                                        <div class="bg-light rounded-3 p-2 d-flex align-items-center justify-content-between">
                                                                                            <div class="d-flex align-items-center">
                                                                                                <span class="fa-stack fa-2x fs-4">
                                                                                                    <i class="fa-solid fa-square fa-stack-2x sodium-icon-bg-colour"></i>
                                                                                                    <i class="fa-solid fa-cube fa-stack-1x fa-inverse sodium-icon-colour fs-6"></i>
                                                                                                </span>
                                                                                                <p class="mb-0 text-secondary">Sodium</p>
                                                                                            </div>
                                                                                            <div>
                                                                                                <span class="fw-bold fs-5">${meal.recipeNutrition.recipeSodium}mg</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <!-- end of Nutrition tap -->
                                                                            <!-- chef's tips tap -->
                                                                            <div class="tab-pane fade my-3" id="chefTips" role="tabpanel" aria-labelledby="chefTips-tab" tabindex="0">
                                                                                ${chefTips}
                                                                            </div>
                                                                            <!-- end of chef's tips tap -->
                                                                        </div>
                                                                        <!-- end of recipe details -->
                                                                    </div>
                                                                    <!-- changing recipe button -->
                                                                    <div class="card-footer bg-transparent border-0">
                                                                        <button onclick="changeRecipeDetails()" type="button" class="btn button-colour text-white fw-semibold rounded-3 px-3 py-2"><i class="fa-solid fa-arrows-rotate me-1"></i> Try Another Recipe</button>
                                                                    </div>
                                                                    <!-- end of changing recipe button -->
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`;

    // alert visibility
    if (meal.recipeCookTime > 45 || meal.recipePrepTime > 45) {
        document.getElementById("alert").classList.replace("d-none", "d-block");
    };
};
changeRecipeDetails();
