export interface Recipe {
  id: string;
  nameKey: string;
  descriptionKey: string;
  cookingTime: number;
  difficulty: "easy" | "medium" | "hard";
  cuisine: string;
  image: string;
}

export const recipes: Recipe[] = [
  {
    id: "ramen",
    nameKey: "recipe_card_ramen_name",
    descriptionKey: "recipe_card_ramen_description",
    cookingTime: 180,
    difficulty: "hard",
    cuisine: "Japanese",
    image: "🍜",
  },
  {
    id: "margherita",
    nameKey: "recipe_card_margherita_name",
    descriptionKey: "recipe_card_margherita_description",
    cookingTime: 30,
    difficulty: "medium",
    cuisine: "Italian",
    image: "🍕",
  },
  {
    id: "tacos",
    nameKey: "recipe_card_tacos_name",
    descriptionKey: "recipe_card_tacos_description",
    cookingTime: 45,
    difficulty: "medium",
    cuisine: "Mexican",
    image: "🌮",
  },
  {
    id: "butter-chicken",
    nameKey: "recipe_card_butter_chicken_name",
    descriptionKey: "recipe_card_butter_chicken_description",
    cookingTime: 60,
    difficulty: "medium",
    cuisine: "Indian",
    image: "🍛",
  },
  {
    id: "pad-thai",
    nameKey: "recipe_card_pad_thai_name",
    descriptionKey: "recipe_card_pad_thai_description",
    cookingTime: 30,
    difficulty: "easy",
    cuisine: "Thai",
    image: "🥘",
  },
  {
    id: "crepes",
    nameKey: "recipe_card_crepes_name",
    descriptionKey: "recipe_card_crepes_description",
    cookingTime: 20,
    difficulty: "easy",
    cuisine: "French",
    image: "🥞",
  },
];
