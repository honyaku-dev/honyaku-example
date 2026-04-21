import { defineRouting } from "next-intl/routing";
import locales from "@/locale.json";

export const routing = defineRouting({
  locales: Object.keys(locales) as [string, ...string[]],
  defaultLocale: "en",
});
