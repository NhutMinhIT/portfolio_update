# nhutminhit.io.vn

Personal portfolio of Nguyễn Nhựt Minh — a bilingual (English / Vietnamese), fully static one-page site.

Live: <https://nhutminhit.io.vn> · Vietnamese: <https://nhutminhit.io.vn/vi>

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React 19 + TypeScript
- Tailwind CSS v4 (`@theme` tokens in `app/globals.css`, light/dark via `data-theme`)
- No database, no CMS — all content lives in typed TypeScript files
- Docker (standalone output) for self-hosting

## Getting started

```bash
yarn install
yarn dev      # http://localhost:3000
yarn lint     # eslint
yarn build    # production build (also type-checks)
yarn start    # serve the production build
```

## Project structure

```
app/
├── (en)/                 # English root layout + "/" page + OG image
├── (vi)/vi/              # Vietnamese root layout + "/vi" page + OG image
├── components/           # Section components (hero, about, experience, …)
├── data/
│   ├── content.ts        # Content types + { en, vi } registry
│   ├── content.en.ts     # All English copy
│   ├── content.vi.ts     # All Vietnamese copy
│   └── shared.ts         # Language-neutral data: profile, skills, certifications
├── lib/
│   ├── fonts.ts          # Geist / Geist Mono (next/font)
│   ├── theme.ts          # Brand colours for OG images / manifest
│   ├── site-metadata.ts  # <head> metadata builder (title, OG, hreflang, robots)
│   └── og-image.tsx      # Social card renderer (next/og)
├── global-not-found.tsx  # Styled 404 (experimental `globalNotFound`)
├── manifest.ts · robots.ts · sitemap.ts
└── globals.css
public/
├── avatar.png            # Nav avatar (128px)
├── nguyennhutminh.jpg    # Hero portrait (next/image) + JSON-LD image
├── nguyennhutminh-og.jpg # 512px portrait embedded in the OG image
├── CV_*.pdf              # "Download CV" target
└── logo-*.png            # Footer venture logos
```

Each language is its own route with its own root layout so the statically rendered HTML has the correct `<html lang>`. Because there are two root layouts, the 404 page uses `global-not-found.tsx` (enabled in `next.config.ts`).

## Editing content

| What | Where |
| --- | --- |
| Name, contact, socials, CV path, employer, city | `app/data/shared.ts` → `profile` |
| Skill groups, certifications (JSON-LD only) | `app/data/shared.ts` |
| Headline, summary, experience, projects, awards, UI labels | `app/data/content.en.ts` **and** `app/data/content.vi.ts` |
| SEO keywords | `app/lib/site-metadata.ts` |
| Colours, fonts | `app/globals.css` (`@theme`) — mirror colour changes in `app/lib/theme.ts` |

Both content files implement the same `Content` type from `app/data/content.ts`, so a missing field fails `yarn build`. Keep the two languages in sync: projects are matched to roles by `project.org === experience.company`.

After changing content, bump `contentUpdatedAt` in `app/data/shared.ts` (feeds the sitemap `<lastmod>` and JSON-LD `dateModified`).

To replace the portrait, overwrite `public/nguyennhutminh.jpg` (1280×1280) and regenerate the OG copy:

```bash
sips -s format jpeg -s formatOptions 85 -Z 512 public/nguyennhutminh.jpg --out public/nguyennhutminh-og.jpg
```

## SEO

- Per-language `<title>`, description, Open Graph, Twitter card, canonical + `hreflang` alternates
- OG images generated at build time (`opengraph-image.tsx` per language)
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`
- `ProfilePage` → `Person` JSON-LD in `app/components/root-shell.tsx`

## Docker

`next.config.ts` sets `output: "standalone"`, so the image ships only `server.js` and traced dependencies.

```bash
docker compose up --build -d   # http://localhost:5173
```

The container listens on port `5173` (see `docker-compose.yml`).
