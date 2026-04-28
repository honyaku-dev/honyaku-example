import { defineRouting } from "next-intl/routing";
import locales from "@honyaku-dev/locales";

export const routing = defineRouting({
  locales: locales.map((locale) => locale.id),
  defaultLocale: "en",
});
