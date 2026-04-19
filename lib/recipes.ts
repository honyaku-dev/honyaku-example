export interface Recipe {
  id: string;
  name: Record<string, string>;
  description: Record<string, string>;
  cookingTime: number;
  difficulty: "easy" | "medium" | "hard";
  cuisine: string;
  image: string;
}

export const recipes: Recipe[] = [
  {
    id: "ramen",
    name: {
      en: "Tonkotsu Ramen",
      ja: "豚骨ラーメン",
      es: "Ramen Tonkotsu",
    },
    description: {
      en: "Rich pork bone broth with tender chashu, soft-boiled egg, and fresh noodles.",
      ja: "濃厚な豚骨スープにチャーシュー、半熟卵、新鮮な麺を合わせた一杯。",
      es: "Caldo rico de hueso de cerdo con chashu tierno, huevo cocido y fideos frescos.",
    },
    cookingTime: 180,
    difficulty: "hard",
    cuisine: "Japanese",
    image: "🍜",
  },
  {
    id: "margherita",
    name: {
      en: "Margherita Pizza",
      ja: "マルゲリータピザ",
      es: "Pizza Margherita",
    },
    description: {
      en: "Classic Neapolitan pizza with San Marzano tomatoes, fresh mozzarella, and basil.",
      ja: "サンマルツァーノトマト、フレッシュモッツァレラ、バジルのクラシックなナポリピザ。",
      es: "Pizza napolitana clásica con tomates San Marzano, mozzarella fresca y albahaca.",
    },
    cookingTime: 30,
    difficulty: "medium",
    cuisine: "Italian",
    image: "🍕",
  },
  {
    id: "tacos",
    name: {
      en: "Tacos al Pastor",
      ja: "タコス・アル・パストール",
      es: "Tacos al Pastor",
    },
    description: {
      en: "Marinated pork tacos with pineapple, cilantro, and onion on corn tortillas.",
      ja: "パイナップル、コリアンダー、玉ねぎを添えたマリネポークのコーントルティーヤタコス。",
      es: "Tacos de cerdo marinado con piña, cilantro y cebolla en tortillas de maíz.",
    },
    cookingTime: 45,
    difficulty: "medium",
    cuisine: "Mexican",
    image: "🌮",
  },
  {
    id: "butter-chicken",
    name: {
      en: "Butter Chicken",
      ja: "バターチキン",
      es: "Pollo al Mantequilla",
    },
    description: {
      en: "Tender chicken in a creamy tomato and butter sauce with aromatic spices.",
      ja: "クリーミーなトマトバターソースにスパイスを効かせた柔らかチキン。",
      es: "Pollo tierno en salsa cremosa de tomate y mantequilla con especias aromáticas.",
    },
    cookingTime: 60,
    difficulty: "medium",
    cuisine: "Indian",
    image: "🍛",
  },
  {
    id: "pad-thai",
    name: {
      en: "Pad Thai",
      ja: "パッタイ",
      es: "Pad Thai",
    },
    description: {
      en: "Stir-fried rice noodles with shrimp, tofu, peanuts, and tamarind sauce.",
      ja: "エビ、豆腐、ピーナッツ、タマリンドソースで炒めたライスヌードル。",
      es: "Fideos de arroz salteados con camarones, tofu, cacahuates y salsa de tamarindo.",
    },
    cookingTime: 30,
    difficulty: "easy",
    cuisine: "Thai",
    image: "🥘",
  },
  {
    id: "crepes",
    name: {
      en: "French Crepes",
      ja: "フレンチクレープ",
      es: "Crepes Franceses",
    },
    description: {
      en: "Thin, delicate crepes filled with Nutella, fresh strawberries, and whipped cream.",
      ja: "ヌテラ、フレッシュいちご、ホイップクリームを包んだ薄くて繊細なクレープ。",
      es: "Crepes delgados y delicados rellenos de Nutella, fresas frescas y crema batida.",
    },
    cookingTime: 20,
    difficulty: "easy",
    cuisine: "French",
    image: "🥞",
  },
];
