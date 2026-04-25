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
    nameKey: "ramenName",
    descriptionKey: "ramenDescription",
    cookingTime: 180,
    difficulty: "hard",
    cuisine: "Japanese",
    image: "🍜",
  },
  {
    id: "margherita",
    nameKey: "margheritaName",
    descriptionKey: "margheritaDescription",
    cookingTime: 30,
    difficulty: "medium",
    cuisine: "Italian",
    image: "🍕",
  },
  {
    id: "tacos",
    nameKey: "tacosName",
    descriptionKey: "tacosDescription",
    cookingTime: 45,
    difficulty: "medium",
    cuisine: "Mexican",
    image: "🌮",
  },
  {
    id: "butter-chicken",
    nameKey: "butterChickenName",
    descriptionKey: "butterChickenDescription",
    cookingTime: 60,
    difficulty: "medium",
    cuisine: "Indian",
    image: "🍛",
  },
  {
    id: "pad-thai",
    nameKey: "padThaiName",
    descriptionKey: "padThaiDescription",
    cookingTime: 30,
    difficulty: "easy",
    cuisine: "Thai",
    image: "🥘",
  },
  {
    id: "crepes",
    nameKey: "crepesName",
    descriptionKey: "crepesDescription",
    cookingTime: 20,
    difficulty: "easy",
    cuisine: "French",
    image: "🥞",
  },
];
