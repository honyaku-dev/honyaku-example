"use client";

import { useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { localeEntries } from "@/i18n/routing";

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const languageEndonyms = useMemo(() => {
    return new Map(
      localeEntries.map(([localeCode]) => {
        try {
          return [
            localeCode,
            new Intl.DisplayNames([localeCode], { type: "language" }).of(
              localeCode
            ) ?? localeCode,
          ];
        } catch {
          return [localeCode, localeCode];
        }
      })
    );
  }, []);

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
      {localeEntries.map(([localeCode, localeLabel]) => (
        <option key={localeCode} value={localeCode}>
          {`${localeLabel} (${languageEndonyms.get(localeCode) ?? localeCode})`}
        </option>
      ))}
    </select>
  );
}
