import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import { convertHonyakuMessages } from "@/lib/honyaku";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const raw =
    locale === routing.defaultLocale
      ? (await import(`../messages/${locale}.json`)).default
      : (await import(`../messages/generated/${locale}.json`)).default;
  const messages = convertHonyakuMessages(raw);

  return { locale, messages };
});
