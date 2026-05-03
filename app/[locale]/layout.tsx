import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Header } from "@/components/Header";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "World Kitchen",
  description: "Discover recipes from around the world",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
    <head>
      <BetterStack token="iDFGaCBWY8gh8WJZG4RrBHUP" />
    </head>
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

function BetterStack({ token }: { token: string }) {
  const script = `
!function(b,e,t,r){
  b[t]=b[t]||function(...args){(b[t].q=b[t].q||[]).push(args)};
  b[t].l=+new Date;
  var s=e.createElement('script'); s.async=1; s.crossOrigin='anonymous';
  s.src='https://betterstack.net/b.js?t='+r;
  (e.head||e.getElementsByTagName('head')[0]).appendChild(s);
}(window,document,'betterstack','${token}');
window.betterstack('init', { environment: '${process.env.NEXT_PUBLIC_SENTRY_ENV}' });
          `
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
