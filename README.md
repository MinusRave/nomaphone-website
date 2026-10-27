# nomaphone.com

Marketing site and blog for NomaPhone, the internet's public phone: call any landline or mobile from the browser,
no app, no account, no SIM. The calling app lives at https://app.nomaphone.com (repo `cabina`).

Astro 5 + Tailwind 4, deployed on Cloudflare Pages from `main`.

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview the build |
| `npm run rates:sync` | Regenerate `src/data/rates.json` from `../cabina/lib/rates.ts` (commit the result) |

## Where things are

- `src/pages/index.astro`: homepage. `src/pages/rates.astro`: rates table.
- `src/content/blog/`: posts (Markdown/MDX). Write NomaPhone prices as tokens: `[[rate:IN]]`, `[[rate:IN:landline]]`,
  `[[rate:IN:mobile]]`, `[[rate:MX:both]]`, `[[countries]]` (see `src/lib/remark-rates.mjs`). In Astro/MDX you can use
  `<RateFor country="IN" type="mobile" />`.
- `src/content/static/`: terms and privacy.
- `public/_redirects`: Cloudflare Pages 301s for retired URLs. Never remove an entry.
- `NOMAPHONE_DESIGN_SYSTEM.md`: palette, type, components.
- `docs/relaunch-changes.md`: per-post log of the October 2026 relaunch.

## Product facts (keep copy true)

Outgoing voice calls only. Prepaid $5/$10/$20 phone card code, never expires, refundable, billed per second, max 30
minutes per call. US/Canada toll-free callable. Countries: those in `src/data/rates.json`. No phone numbers, no SMS/2FA,
no emergency calls.
