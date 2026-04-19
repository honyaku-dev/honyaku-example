import { useTranslations } from "next-intl";
import { recipes } from "@/lib/recipes";
import { RecipeCard } from "@/components/RecipeCard";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">{t("heroTitle")}</h1>
        <p className="mt-3 text-lg text-zinc-500">{t("heroSubtitle")}</p>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">{t("featuredTitle")}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
}
