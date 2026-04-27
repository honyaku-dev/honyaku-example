"use client";

import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "./LocaleSwitcher";
import Link from "next/link";

export function Header() {
  const t = useTranslations();

  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-bold">{t("header_title")}</h1>
          <p className="text-sm text-zinc-500">{t("header_subtitle")}</p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/honyaku-dev/honyaku-example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            GitHub
          </Link>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
