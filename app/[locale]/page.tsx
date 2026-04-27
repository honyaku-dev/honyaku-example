import { useTranslations } from "next-intl";
import { recipes } from "@/lib/recipes";
import { RecipeCard } from "@/components/RecipeCard";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">{t("home_page_hero_title")}</h1>
        <p className="mt-3 text-lg text-zinc-500">{t("home_page_hero_subtitle")}</p>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">{t("home_page_featured_title")}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
}
