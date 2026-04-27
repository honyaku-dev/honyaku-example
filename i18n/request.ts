import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import { loadLocale, loadMessages } from "@/lib/honyaku";
import en from "@/messages/en.json"

const enMessages = loadMessages(en);

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = await loadLocale(locale);
  return {
    locale,
    messages: {
      ...enMessages,
      ...messages,
    }
  };
});
