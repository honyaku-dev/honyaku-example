import enMessages from "@/messages/en.json"

export function loadMessages(messages: Record<string, { text: string }>): Record<string, string> {
  return Object.fromEntries(Object.entries(messages).map(([key, value]) => [key, value.text]))
}

export async function loadLocale(locale: string) {
  if (locale === "en") {
    return enMessages
  } else {
    return loadMessages((await import(`../messages/${locale}.json`)).default)
  }
}
