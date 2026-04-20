"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import localeLabels from "@/i18n/locale.json";

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    router.replace(pathname, { locale: e.target.value });
  }

  return (
    <select
      value={locale}
      onChange={onChange}
      aria-label={t("label")}
      className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-700 dark:bg-zinc-800"
    >
      {routing.locales.map((loc) => (
        <option key={loc} value={loc}>
          {localeLabels[loc as keyof typeof localeLabels] ?? loc}
        </option>
      ))}
    </select>
  );
}
