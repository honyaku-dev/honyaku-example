import { defineRouting } from "next-intl/routing";
import localeLabels from "./locale.json";

export const locales = Object.keys(localeLabels);

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
});
