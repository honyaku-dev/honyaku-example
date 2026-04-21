"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import locales from "@/locale.json";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentInfo = locales[locale as keyof typeof locales];
  const currentLabel = currentInfo ? currentInfo.endonym : locale;

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return routing.locales.filter((loc) => {
      if (!q) return true;
      const info = locales[loc as keyof typeof locales];
      if (!info) return loc.includes(q);
      return (
        info.id.toLowerCase().includes(q) ||
        info.name.toLowerCase().includes(q) ||
        info.endonym.toLowerCase().includes(q)
      );
    });
  }, [query]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function select(loc: string) {
    setOpen(false);
    setQuery("");
    router.replace(pathname, { locale: loc });
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Select language"
        className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-sm dark:border-zinc-700 dark:bg-zinc-800"
      >
        {currentLabel}
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-1 w-64 rounded-lg border border-zinc-300 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-800">
          <div className="border-b border-zinc-200 p-2 dark:border-zinc-700">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search languages..."
              className="w-full rounded-md border border-zinc-300 bg-transparent px-2 py-1 text-sm outline-none focus:border-zinc-500 dark:border-zinc-600 dark:focus:border-zinc-400"
            />
          </div>
          <ul className="max-h-60 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <li className="px-3 py-2 text-sm text-zinc-500">
                No languages found
              </li>
            ) : (
              filtered.map((loc) => {
                const info = locales[loc as keyof typeof locales];
                const label = info ? info.endonym : loc;
                const name = info?.name;
                return (
                  <li key={loc}>
                    <button
                      type="button"
                      onClick={() => select(loc)}
                      className={`flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 ${loc === locale ? "font-semibold" : ""}`}
                    >
                      <span>{label}</span>
                      {name && name !== label && (
                        <span className="text-zinc-400">({name})</span>
                      )}
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
