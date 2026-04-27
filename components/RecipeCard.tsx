"use client";

import { useTranslations } from "next-intl";
import type { Recipe } from "@/lib/recipes";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const t = useTranslations();

  return (
    <div className="rounded-xl border border-zinc-200 p-6 transition-shadow hover:shadow-lg dark:border-zinc-800">
      <div className="mb-3 text-5xl">{recipe.image}</div>
      <div className="mb-1 text-xs font-medium uppercase tracking-wide text-zinc-400">
        {recipe.cuisine}
      </div>
      <h3 className="text-lg font-semibold">{t(recipe.nameKey)}</h3>
      <p className="mt-1 text-sm text-zinc-500">{t(recipe.descriptionKey)}</p>
      <div className="mt-4 flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
        <span>⏱ {t("recipe_card_cooking_time", { minutes: recipe.cookingTime })}</span>
        <span className="text-zinc-300 dark:text-zinc-700">|</span>
        <span>
          {t("recipe_card_difficulty")}: {t(`recipe_card_${recipe.difficulty}`)}
        </span>
      </div>
    </div>
  );
}
