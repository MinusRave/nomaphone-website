# NomaPhone Design System

> **Purpose**: single source of truth for anyone (human or AI agent) building NomaPhone interfaces: the marketing site (this repo, Astro) and the calling app (`cabina`, Next.js).
> **Last updated**: 2026-10-27 (relaunch: pixel-art public phone direction)
> **Stack**: Astro 5 + Tailwind CSS 4 (site), Next.js (app). Tokens live in `src/styles/global.css`.
> **Voice**: plain, direct, honest. We don't explain VoIP. We help you make the call.

---

## 1. Brand

### What NomaPhone is
**The internet's public phone.** Call any landline or mobile straight from the browser. No app, no account, no SIM.
You buy a prepaid phone card ($5, $10 or $20), get a code like `CAB-XXXX-XXXX-XXXX`, dial, and pay per second.

What it is **not** (never design UI or copy that implies it): no phone number for the user, no incoming calls, no SMS or 2FA codes, no virtual numbers, no number porting, no team accounts, no recording, no subscriptions, no emergency calls.

### The metaphor
A street payphone, rendered as pixel art: metal body, orange handset, dark-green LCD, chunky keys, a green call bar. It signals "public, simple, pay as you go" and it's friendly without being a toy.

### Design principles

| Principle | Meaning | Anti-pattern |
|---|---|---|
| **Honest** | Rates, balances and limits always visible. Say what we don't do. | Hidden fees, vague "affordable", implying features we don't have |
| **One job per screen** | A page or view does one thing. | Dashboards of widgets nobody asked for |
| **Zero friction** | Fast load, no sign-up, no install. | Wizards, modals on modals, email walls |
| **Tactile** | Things look pressable: hard borders, offset shadows, LCD readouts. | Soft glassmorphism, gradients on text |
| **Globally neutral** | Works for any caller in any country. | US-only idioms in UI chrome |

### Tone of voice
- **Do**: "Call any number from your browser." / "$0.03/min to the US, toll-free included." / "Credit never expires."
- **Don't**: "Experience seamless global connectivity!" / "Unlock premium features!"
- Headlines: short, factual, max ~8 words. Body: 1–2 sentences per block.
- CTAs: verb + object. "Make a call", "Buy credit", "See rates". Never "Submit", "Get started", "Join the waitlist".
- Errors: what happened + what to do. "Call failed — weak connection. Try again on Wi-Fi."

---

## 2. Tokens

### 2.1 Color

```css
:root {
  /* Surfaces */
  --color-paper:    #f4f0e5;  /* page background */
  --color-paper-2:  #fffdf7;  /* cards, bands, inputs */
  --color-surface-raised: #ebe5d6; /* hover, subtle fills */
  --color-border:   #cfc9b8;  /* dividers, table rules */

  /* Ink */
  --color-ink:      #122a31;  /* text, hard borders, offset shadows */
  --color-muted:    #536166;  /* secondary text (passes AA on paper) */

  /* Accents */
  --color-green:    #087b65;  /* primary action, rates, success */
  --color-green-dark: #064e40;/* hover on primary */
  --color-orange:   #ee7938;  /* handset orange: accents, art, large text only */
  --orange-text:    #b8531c;  /* orange for SMALL text on paper (AA contrast) */

  /* LCD */
  --color-lcd:      #082626;  /* LCD background */
  --color-lcd-ink:  #3ee2b5;  /* LCD text */
}
```

Rules:
- Light only. Paper is the background; never pure white pages, never pure black.
- Green = the primary action (one per view) and money/rate figures. Not decorative.
- Orange `#ee7938` fails contrast as small text on paper; use `#b8531c` for kickers/labels, keep `#ee7938` for art, large type, shadows on dark.
- Ink is used for 2px borders and 4px offset shadows (`box-shadow: 4px 4px 0 var(--color-ink)`) on cards and primary buttons.
- The legacy names in `global.css` (`--color-midnight`, `--color-signal`, `--color-text-primary`…) are mapped to this palette so older components and shadcn/ui keep working. New code should use the names above.

### 2.2 Typography

| Role | Font | Weight | Use |
|---|---|---|---|
| UI + headings | **Archivo** | 400 / 600 / 800 | Headings always 800, tight tracking (-0.02 to -0.03em) |
| Numbers | **JetBrains Mono** | 400 / 600 | Rates, balances, card codes, phone numbers, table headers |
| LCD accents | **VT323** | 400 | Short LCD readouts ("> READY_"), step numbers. Never body text |

Scale (rem): 0.75 · 0.875 · 1 · 1.125 · 1.25 · 1.5 · 1.875 · 2.25 · 3 · 3.75. Hero H1 uses `clamp(2.6rem, 6.5vw, 4.6rem)`, line-height ~1.02.
Body line-height 1.6. Kicker labels: mono, 0.8rem, uppercase, 0.08em tracking, orange-text.

### 2.3 Spacing, radii, shadows
- Spacing on a 4px grid (`--space-1` = 0.25rem … `--space-32` = 8rem). Sections: 4–4.5rem vertical.
- Radii: 4px (LCD chips), 8px (buttons, inputs), 12px (cards, CTA boxes). No pills except small badges.
- Shadows: hard offset only (`4px 4px 0 ink`; on dark backgrounds `4px 4px 0 orange`). No blur glows.

### 2.4 Motion
- Buttons nudge `translate(-1px,-1px)` and grow their offset shadow on hover, 120ms.
- No autoplay animation. Respect `prefers-reduced-motion` (disable transitions).

---

## 3. Components

### Buttons
- **Primary**: green fill, paper-2 text, 2px ink border, 4px ink offset shadow, 800 weight. One per view. Label: "Make a call".
- **Ghost**: transparent, ink text, 2px ink border; hover fills surface-raised. For "See rates".
- Header CTA: compact green button, no shadow.

### Cards
Paper or paper-2 fill, 2px ink border, 12px radius, 1.5rem padding. Links inside: green, 700, underline on hover.

### LCD chip
`--color-lcd` background, `--color-lcd-ink` text, VT323 ~1.4rem, 4px radius. For hero readouts and step numbers.

### Rate display
- Always `$X.XX/min` (three decimals only for half cents, e.g. `$0.025/min`), JetBrains Mono, green.
- Never hardcode a rate in a page or post: use `<RateFor country="IN" type="mobile" />` in Astro/MDX or `[[rate:IN:mobile]]` in Markdown. Data: `src/data/rates.json` (sync with `npm run rates:sync`).
- Tables: country name in ink, landline / mobile / from columns in mono; mono uppercase muted headers; 2px ink outer border.

### In-article CTA (`BlogAppCTA.astro`)
Paper-2 box, 2px ink border, 4px offset shadow, phone artwork on the left, orange-text kicker, one-line title, one honest sentence (outgoing calls only), primary link to https://app.nomaphone.com.

### Header / footer
- Header: paper, sticky, small phone icon + "NomaPhone" wordmark (Archivo 800), links Rates · How it works · FAQ · Blog, green "Make a call".
- Footer: four columns (brand + support email, Product, Guides, Legal); last line in mono: "Outgoing calls only. Not for emergency calls."

### FAQ
`<details>` rows separated by border lines; summary 800 weight with a mono orange "+ / −" marker. Every FAQ answer must be honest about limits (no number, no SMS, refunds).

### Blog prose
Ink text on paper, green underlined links, square green list markers, tables with border rules, hero image in a rounded bordered frame.

---

## 4. Artwork
- Main asset: `public/pixel/phone.webp` (980×900, transparent). Also in `src/assets/nomaphone-phone.webp` for OG images.
- Keep it crisp; don't recolor, crop the handset or add gradients. Optional hard-edged drop shadow (`8px 10px 0 rgba(18,42,49,.12)`).
- Blog hero images are illustrations per post; new ones should prefer the pixel style.

---

## 5. Layout
- Max content width 72rem (site), 48–52rem for reading pages and the rates table.
- Mobile first from 320px; 16px side gutter; no horizontal scroll (tables scroll inside their own wrapper).
- Homepage order: Hero → How it works (3 steps) → Rates (main corridors) → Use cases → FAQ → Final CTA (ink band).

---

## 6. Accessibility
- WCAG 2.1 AA: ink and muted on paper pass; green on paper passes; orange only as `#b8531c` for small text.
- Visible focus: `outline: 2px solid var(--color-green); outline-offset: 2px`.
- All images have alt text (decorative art uses `alt=""`).
- Touch targets ≥ 44×44px. Forms have visible labels.

---

## 7. Anti-patterns

| Don't | Do |
|---|---|
| Dark theme, neon glows | Paper background, ink borders, hard shadows |
| Gradient or transparent text | Solid ink headings |
| Multiple primary buttons | One green primary, the rest ghost |
| Hardcoded prices | `RateFor` / `[[rate:XX]]` from rates.json |
| "210+ countries", "virtual numbers", "receive SMS", "waitlist" | Real coverage from rates.json, outgoing calls only, app CTA |
| "Join the waitlist", "Get started" | "Make a call", "See rates" |
| Emoji as icons | Lucide icons; pixel art for illustration |
