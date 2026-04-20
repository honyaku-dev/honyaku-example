import { defineRouting } from "next-intl/routing";
import localeLabels from "./locale.json";

export const localeEntries = Object.entries(localeLabels) as Array<
  [keyof typeof localeLabels, string]
>;
export const locales = localeEntries.map(([locale]) => locale);

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
});
