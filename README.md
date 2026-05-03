# honyaku-example

An example Next.js app demonstrating automatic translation generation with [honyaku.dev](https://honyaku.dev).

## Overview

This is a small recipe-discovery app ("World Kitchen") built with Next.js 16 and `next-intl`. The English source strings live in `messages/en.json`, and translations for every locale supported by `@honyaku-dev/locales` are generated into `messages/generated/<locale>.json` by the honyaku.dev service.

## How translation works

- `messages/en.json` holds each string along with a description that gives the translator context.
- `.github/workflows/translate.yml` runs `honyaku-dev/honyaku-action@v1` on every push to `main` that modifies `messages/en.json` (and on manual dispatch). It reads the source file and writes one JSON file per target locale into `messages/generated/`, then commits the results back.
- `i18n/routing.ts` registers every locale from `@honyaku-dev/locales` with `next-intl`, so the `[locale]` route segment automatically supports all of them.
- `lib/honyaku.ts` flattens the `{ text, description }` shape into the plain `key → string` map that `next-intl` expects, dynamically importing the generated locale files at request time.
- `i18n/request.ts` falls back to English for any keys missing from a generated translation.

To add or change copy, edit `messages/en.json` and merge to `main`; the workflow regenerates the rest.

## Getting started

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.
