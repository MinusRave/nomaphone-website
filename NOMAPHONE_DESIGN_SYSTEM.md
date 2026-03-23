# NomaPhone Design System

> **Purpose**: Single source of truth for any AI coding agent building NomaPhone interfaces.
> **Last updated**: 2026-03-23
> **Stack**: HTML/CSS/JS, React (Next.js), Tailwind CSS 4.x
> **Voice**: Confident, direct, nomad-native. We don't explain what a VoIP is. We solve the call.

---

## 1. Brand DNA

### Identity
NomaPhone is a browser-based international calling service for digital nomads and remote workers. The brand sits at the intersection of **telecom reliability** and **nomad simplicity**. We are not a consumer VoIP toy — we're the tool you reach for when your bank freezes your card in Bali.

### Design Principles

| Principle | Meaning | Anti-pattern |
|---|---|---|
| **Trust-first** | Every pixel should say "this works." Telecom-grade confidence. | Playful/bubbly UI, toy-like animations |
| **Zero friction** | Interfaces load fast, work on any connection, never ask unnecessary questions. | Wizards, modals-on-modals, loading spinners without progress |
| **Globally neutral** | No cultural assumptions. Works in LTR. Avoids US-centric idioms in UI. | American flag as default, "Call Mom" as example |
| **Honest pricing** | Rates, costs, balances always visible. No dark patterns. | Hidden fees, confusing credit math, auto-renewal buried in settings |
| **One screen, one job** | Each view does one thing well. | Dashboards crammed with widgets the user didn't ask for |

### Tone of Voice (for UI copy)
- **Do**: "Call any number from your browser." / "3¢/min to US landlines." / "Credits never expire."
- **Don't**: "Experience seamless global connectivity!" / "Unlock premium calling features!" / "Your journey starts here!"
- Headlines: short, factual, benefit-first. Max 8 words.
- Body: 1–2 sentences per block. No jargon. No filler.
- CTAs: verb + object. "Add credits" / "Start call" / "Get a number" — never "Submit" or "Continue."
- Error messages: say what happened + what to do. "Call failed — weak connection. Try again or switch to Wi-Fi."

---

## 2. Design Tokens

### 2.1 Colors

```css
:root {
  /* ── Core ── */
  --color-midnight:       #0B1120;    /* Primary background — deep navy-black */
  --color-surface:        #111827;    /* Cards, panels, elevated surfaces */
  --color-surface-raised: #1F2937;    /* Hover states, active cards, dropdowns */
  --color-border:         #374151;    /* Subtle borders, dividers */
  --color-border-focus:   #6B7280;    /* Focused input borders */

  /* ── Signal Green — Primary Action ── */
  --color-signal:         #10B981;    /* Primary buttons, active states, "call now" */
  --color-signal-hover:   #059669;    /* Hover on primary actions */
  --color-signal-subtle:  #10B98115;  /* Green tint backgrounds (status badges, etc.) */
  --color-signal-glow:    #10B98130;  /* Glow/ring on focused call button */

  /* ── Text ── */
  --color-text-primary:   #F9FAFB;   /* Headings, primary content */
  --color-text-secondary: #9CA3AF;   /* Descriptions, labels, meta */
  --color-text-muted:     #6B7280;   /* Placeholders, disabled, timestamps */
  --color-text-inverse:   #0B1120;   /* Text on signal-green backgrounds */

  /* ── Accents ── */
  --color-amber:          #F59E0B;   /* Warnings, low balance, attention */
  --color-amber-subtle:   #F59E0B15;
  --color-red:            #EF4444;   /* Errors, call failed, destructive actions */
  --color-red-subtle:     #EF444415;
  --color-blue:           #3B82F6;   /* Informational, links, SMS/OTP indicators */
  --color-blue-subtle:    #3B82F615;

  /* ── Rates/Pricing specific ── */
  --color-rate:           #10B981;   /* Per-minute rate display — same as signal */
  --color-credit-badge:   #F59E0B;   /* Credit balance pill */
}
```

**Rules**:
- Dark mode is the **only** mode. NomaPhone is always dark. No light theme.
- `--color-midnight` is the page background. Never use pure `#000`.
- `--color-signal` (green) is reserved for **primary actions and live/active states only**. Do not use green decoratively.
- Amber is for "attention needed" — low balance, expiring number, weak signal.
- Red is for errors and destructive confirmations only. Never decorative.

### 2.2 Typography

```css
:root {
  /* ── Font Families ── */
  --font-display:  'Satoshi', sans-serif;       /* Headings, hero text, nav brand */
  --font-body:     'General Sans', sans-serif;   /* Body text, descriptions, UI labels */
  --font-mono:     'JetBrains Mono', monospace;  /* Phone numbers, rates, credit amounts, code */

  /* ── Font Sizes (rem) ── */
  --text-xs:    0.75rem;    /* 12px — timestamps, fine print */
  --text-sm:    0.875rem;   /* 14px — labels, meta, secondary info */
  --text-base:  1rem;       /* 16px — body text */
  --text-lg:    1.125rem;   /* 18px — emphasized body, card titles */
  --text-xl:    1.25rem;    /* 20px — section subtitles */
  --text-2xl:   1.5rem;     /* 24px — section headings */
  --text-3xl:   1.875rem;   /* 30px — page titles */
  --text-4xl:   2.25rem;    /* 36px — hero subheading */
  --text-5xl:   3rem;       /* 48px — hero headline */
  --text-6xl:   3.75rem;    /* 60px — landing hero, max size */

  /* ── Font Weights ── */
  --weight-regular:  400;
  --weight-medium:   500;
  --weight-semibold: 600;
  --weight-bold:     700;
  --weight-black:    900;   /* Hero headlines only */

  /* ── Line Heights ── */
  --leading-tight:   1.15;  /* Headlines */
  --leading-snug:    1.3;   /* Subheadings */
  --leading-normal:  1.6;   /* Body text */
  --leading-relaxed: 1.75;  /* Long-form, legal */

  /* ── Letter Spacing ── */
  --tracking-tight:  -0.02em;  /* Headlines */
  --tracking-normal:  0;       /* Body */
  --tracking-wide:    0.05em;  /* Labels, badges, overlines */
  --tracking-mono:    0.02em;  /* Phone numbers, rates */
}
```

**Font loading** (add to `<head>`):
```html
<link rel="preconnect" href="https://api.fontshare.com" crossorigin>
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,900&f[]=general-sans@400,500,600&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

**Rules**:
- Phone numbers are **always** `--font-mono`. Format: `+1 (555) 123-4567`.
- Rates are **always** `--font-mono` + `--color-signal`. Format: `$0.03/min`.
- Credit balances use `--font-mono` + `--weight-semibold`. Format: `$12.40`.
- Country names in rate tables: `--font-body` + `--weight-medium`.
- Never use `--font-display` below `--text-xl`. It's for headings only.
- Max line length for body text: `65ch`.

### 2.3 Spacing

```css
:root {
  --space-0:   0;
  --space-1:   0.25rem;   /* 4px */
  --space-2:   0.5rem;    /* 8px */
  --space-3:   0.75rem;   /* 12px */
  --space-4:   1rem;       /* 16px */
  --space-5:   1.25rem;   /* 20px */
  --space-6:   1.5rem;    /* 24px */
  --space-8:   2rem;       /* 32px */
  --space-10:  2.5rem;    /* 40px */
  --space-12:  3rem;       /* 48px */
  --space-16:  4rem;       /* 64px */
  --space-20:  5rem;       /* 80px */
  --space-24:  6rem;       /* 96px */
  --space-32:  8rem;       /* 128px */
}
```

**Rules**:
- Section vertical padding: `--space-20` desktop, `--space-12` mobile.
- Card internal padding: `--space-6`.
- Between heading and body text: `--space-3`.
- Between stacked cards/items: `--space-4`.
- Page horizontal max-width: `1200px` with `--space-6` gutter.

### 2.4 Radii & Shadows

```css
:root {
  /* ── Border Radius ── */
  --radius-sm:   6px;     /* Small badges, tags */
  --radius-md:   10px;    /* Buttons, inputs */
  --radius-lg:   16px;    /* Cards, panels */
  --radius-xl:   24px;    /* Modal, hero cards */
  --radius-full: 9999px;  /* Pills, avatars, call button */

  /* ── Shadows ── */
  --shadow-sm:   0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md:   0 4px 12px rgba(0, 0, 0, 0.4);
  --shadow-lg:   0 8px 30px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 20px var(--color-signal-glow);  /* Call button active state */

  /* ── Borders ── */
  --border-default: 1px solid var(--color-border);
  --border-focus:   1px solid var(--color-signal);
}
```

**Rules**:
- Cards always use `--radius-lg` + `--border-default` + `--shadow-sm`.
- Buttons: `--radius-md` for rectangular, `--radius-full` for pill-shaped CTAs.
- The main "Call" button is always a circle with `--radius-full` + `--shadow-glow` on active.
- Inputs: `--radius-md`, `--border-default`, transition to `--border-focus` on focus.
- Never use `border-radius: 0` anywhere. Minimum is `--radius-sm`.

### 2.5 Motion

```css
:root {
  --ease-out:      cubic-bezier(0.16, 1, 0.3, 1);   /* Primary — exits, reveals */
  --ease-in-out:   cubic-bezier(0.65, 0, 0.35, 1);   /* State changes */
  --ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy — badges, notifications */

  --duration-fast:   120ms;   /* Hover color changes, opacity */
  --duration-normal: 200ms;   /* Button presses, toggles */
  --duration-slow:   350ms;   /* Panel slides, card reveals */
  --duration-reveal: 600ms;   /* Page section entrance */
}
```

**Rules**:
- All interactive elements must have hover/active transitions. No exceptions.
- Page load: sections fade-in with `translateY(12px)` → `translateY(0)`, staggered 80ms each.
- Call button: pulse animation when ringing, scale(1.02) on hover.
- Reduced motion: wrap all animations in `@media (prefers-reduced-motion: no-preference)`.
- Never animate layout properties (width, height, top, left). Use `transform` and `opacity` only.

---

## 3. Component Library

### 3.1 Buttons

```
┌─────────────────────────────────────────────────────────┐
│ Variant        │ Use Case                    │ Color     │
├─────────────────────────────────────────────────────────┤
│ primary        │ Main CTA per screen (1 max) │ signal bg │
│ secondary      │ Supporting actions           │ surface   │
│ ghost          │ Tertiary, navigation         │ transparent│
│ danger         │ Delete, cancel subscription  │ red bg    │
│ call           │ Initiate/end phone call      │ circle    │
└─────────────────────────────────────────────────────────┘
```

**Primary button**:
```css
.btn-primary {
  background: var(--color-signal);
  color: var(--color-text-inverse);
  font-family: var(--font-body);
  font-weight: var(--weight-semibold);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wide);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-in-out),
              transform var(--duration-fast) var(--ease-out);
}
.btn-primary:hover {
  background: var(--color-signal-hover);
  transform: translateY(-1px);
}
.btn-primary:active {
  transform: translateY(0);
}
.btn-primary:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}
```

**Rules**:
- Max ONE `primary` button per screen/view.
- Primary button label is always `verb + object`: "Add credits", "Start call", "Get number".
- Min touch target: 44×44px on all buttons.
- Buttons never contain icons alone — always include text (except the call button).

### 3.2 Call Button (special)

The call button is the single most important UI element. It deserves its own spec.

```css
.btn-call {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-full);
  background: var(--color-signal);
  color: var(--color-text-inverse);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-glow);
  transition: transform var(--duration-normal) var(--ease-spring),
              box-shadow var(--duration-normal) var(--ease-out);
}
.btn-call:hover {
  transform: scale(1.06);
  box-shadow: 0 0 30px var(--color-signal-glow);
}
.btn-call[data-state="ringing"] {
  animation: pulse-ring 1.5s var(--ease-in-out) infinite;
}
.btn-call[data-state="active"] {
  background: var(--color-red);
  box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
}
@keyframes pulse-ring {
  0%, 100% { box-shadow: 0 0 0 0 var(--color-signal-glow); }
  50% { box-shadow: 0 0 0 12px transparent; }
}
```

**States**: `idle` → `ringing` → `active` → `ended`
- Idle: green, static glow
- Ringing: green, pulsing ring animation
- Active: red (tap to hang up), no pulse
- Ended: grey out, fade back to idle after 2s

### 3.3 Inputs

```css
.input {
  background: var(--color-surface);
  border: var(--border-default);
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  font-family: var(--font-body);
  font-size: var(--text-base);
  padding: var(--space-3) var(--space-4);
  width: 100%;
  transition: border-color var(--duration-fast) var(--ease-in-out);
}
.input:focus {
  outline: none;
  border-color: var(--color-signal);
  box-shadow: 0 0 0 3px var(--color-signal-subtle);
}
.input::placeholder {
  color: var(--color-text-muted);
}
.input[data-variant="phone"] {
  font-family: var(--font-mono);
  font-size: var(--text-lg);
  letter-spacing: var(--tracking-mono);
  text-align: center;
  padding: var(--space-4) var(--space-6);
}
```

**Rules**:
- Phone number input uses `data-variant="phone"` — monospace, larger, centered.
- All inputs must have visible labels (no placeholder-only labels).
- Error state: `border-color: var(--color-red)` + error message below in `--text-sm` + `--color-red`.

### 3.4 Cards

```css
.card {
  background: var(--color-surface);
  border: var(--border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
}
.card-interactive {
  cursor: pointer;
  transition: border-color var(--duration-fast) var(--ease-in-out),
              box-shadow var(--duration-normal) var(--ease-out),
              transform var(--duration-normal) var(--ease-out);
}
.card-interactive:hover {
  border-color: var(--color-border-focus);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
```

**Variants**:
- `.card` — static content (pricing tier, feature block)
- `.card-interactive` — clickable (country selector, number picker)
- `.card-highlight` — adds `border-color: var(--color-signal)` + subtle green left-border accent for "recommended" or "selected" state

### 3.5 Rate Display

Rates are core UI. They must be instantly scannable.

```html
<!-- Rate row in a table or list -->
<div class="rate-row">
  <span class="rate-country">
    <span class="rate-flag">🇺🇸</span>
    <span class="rate-name">USA / Canada</span>
  </span>
  <span class="rate-price">$0.03<span class="rate-unit">/min</span></span>
</div>
```

```css
.rate-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--color-border);
}
.rate-flag { font-size: var(--text-xl); margin-right: var(--space-2); }
.rate-name {
  font-family: var(--font-body);
  font-weight: var(--weight-medium);
  color: var(--color-text-primary);
}
.rate-price {
  font-family: var(--font-mono);
  font-weight: var(--weight-semibold);
  font-size: var(--text-lg);
  color: var(--color-signal);
}
.rate-unit {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  font-weight: var(--weight-regular);
}
```

**Rules**:
- Rates always show `$X.XX/min` format — never "from $0.03" or "starting at".
- Flag emoji + country name on left, rate on right. Always.
- If a rate is a range (e.g., India mobile vs landline), show both: `$0.08–0.09/min`.

### 3.6 Credit Balance

```html
<div class="credit-balance">
  <span class="credit-label">Balance</span>
  <span class="credit-amount">$12.40</span>
</div>
```

```css
.credit-balance {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}
.credit-label {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}
.credit-amount {
  font-family: var(--font-mono);
  font-weight: var(--weight-semibold);
  font-size: var(--text-base);
  color: var(--color-text-primary);
}
.credit-amount[data-low="true"] {
  color: var(--color-amber);
}
```

**Rules**:
- Balance below $1.00 → amber color + "Low balance" tooltip.
- Balance at $0.00 → red color + inline "Add credits" link.
- Always show 2 decimal places: `$12.40`, never `$12.4`.

### 3.7 Status Badges

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}
.badge-active   { background: var(--color-signal-subtle); color: var(--color-signal); }
.badge-warning  { background: var(--color-amber-subtle);  color: var(--color-amber);  }
.badge-error    { background: var(--color-red-subtle);    color: var(--color-red);    }
.badge-info     { background: var(--color-blue-subtle);   color: var(--color-blue);   }
```

Use cases:
- `badge-active`: "Connected", "Active number", "Online"
- `badge-warning`: "Low balance", "Expiring soon"
- `badge-error`: "Call failed", "Number inactive"
- `badge-info`: "SMS", "OTP received", "New"

### 3.8 Navigation / Header

```
┌──────────────────────────────────────────────────────┐
│  [Logo]  Dialpad  Numbers  History  │  $12.40  [Avatar] │
└──────────────────────────────────────────────────────┘
```

- Logo: "NomaPhone" in `--font-display` + `--weight-bold`, white. No logomark needed initially.
- Nav items: `--font-body`, `--weight-medium`, `--text-sm`, `--color-text-secondary`. Active: `--color-text-primary` + 2px bottom border in `--color-signal`.
- Credit balance always visible in header on authenticated pages.
- Mobile: bottom tab bar with icons + labels. Same items.

### 3.9 Country/Number Selector

```
┌────────────────────────────────────────┐
│  🔍  Search countries...               │
├────────────────────────────────────────┤
│  🇺🇸  United States      $0.03/min    │
│  🇬🇧  United Kingdom     $0.03/min    │
│  🇮🇳  India              $0.08/min    │
│  🇲🇽  Mexico             $0.03/min    │
│  ── Recently called ──                 │
│  🇦🇷  Argentina          $0.12/min    │
└────────────────────────────────────────┘
```

- Searchable dropdown. Flags are emoji, not images.
- Show rate inline so user knows cost before selecting.
- "Recently called" section pinned at top after first use.
- Keyboard navigable (arrow keys + enter).

---

## 4. Layout Patterns

### 4.1 Page Types

**Landing / Marketing**:
- Full-width hero → constrained content sections (max `1200px`)
- Generous vertical spacing (`--space-20` to `--space-24`)
- No sidebar. Single column with occasional 2–3 col grids for features/pricing.

**App / Dashboard** (authenticated):
- Fixed header + optional bottom tab bar (mobile)
- Single-column main content, max `720px` centered
- No sidebar on any breakpoint — the app is intentionally simple

**Dialpad view**:
- Centered, max `400px` wide
- Phone input at top, numpad below, call button at bottom
- Fullscreen feel on mobile (no visible chrome except header)

### 4.2 Responsive Breakpoints

```css
/* Mobile-first */
--bp-sm:  640px;    /* Large phones, landscape */
--bp-md:  768px;    /* Tablets */
--bp-lg:  1024px;   /* Small laptops */
--bp-xl:  1280px;   /* Desktops */
```

**Rules**:
- Design mobile-first. Every component must work at 320px.
- The dialpad is the primary mobile experience — optimize it ruthlessly.
- Marketing pages: stack to single column below `--bp-md`.
- Never horizontal scroll. Ever.

### 4.3 Grid

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-6); }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-6); }

@media (max-width: 768px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
}
```

---

## 5. Iconography

Use **Lucide** icons exclusively (`lucide-react` or inline SVG from lucide.dev).

**Core icons by function**:
| Function | Icon | Context |
|---|---|---|
| Call / dial | `Phone` | Call button, nav |
| End call | `PhoneOff` | Active call, hang up |
| Add credits | `Plus` or `CreditCard` | Top-up flow |
| Numbers | `Hash` | Virtual numbers section |
| History | `Clock` | Call log |
| Settings | `Settings` | Account/preferences |
| SMS | `MessageSquare` | Message view |
| Signal quality | `Signal` | During call |
| Country | `Globe` | Country selector |
| Copy | `Copy` | Copy number |
| Search | `Search` | Country/contact search |
| Warning | `AlertTriangle` | Low balance, errors |
| Check | `Check` | Success, confirmed |
| Close | `X` | Dismiss, close modal |
| Menu | `Menu` | Mobile hamburger |

**Rules**:
- Icon size: 20px default, 16px in compact contexts, 24px in nav.
- Stroke width: 1.75 (Lucide default). Never change it.
- Color inherits from parent text color. Never apply standalone color to icons unless it's a status indicator.

---

## 6. Key Screens Reference

AI agents should produce these screens following the patterns above.

### 6.1 Dialpad (primary app screen)
```
┌───────────────────────┐
│  [Nav: Dialpad active] │
│                        │
│  🇺🇸 ▾  +1 (555) 123-4567  │
│          $0.03/min     │
│                        │
│    1     2     3       │
│   ABC   DEF            │
│    4     5     6       │
│   GHI   JKL   MNO     │
│    7     8     9       │
│   PQRS  TUV  WXYZ     │
│    *     0     #       │
│                        │
│       [  📞  ]         │  ← Big green call button
│                        │
│   Balance: $12.40      │
└───────────────────────┘
```

### 6.2 Active Call
```
┌───────────────────────┐
│                        │
│   +1 (555) 123-4567   │
│   United States        │
│                        │
│      03:24             │  ← Elapsed time, --font-mono
│      ● Connected       │  ← Green badge
│                        │
│   [Mute] [Keypad] [Speaker] │
│                        │
│       [  🔴  ]         │  ← Red hang-up button
│                        │
│   $0.03/min • $0.10    │  ← Rate + running cost
└───────────────────────┘
```

### 6.3 Credits / Top-up
```
┌───────────────────────┐
│  Current balance       │
│  $2.30                 │  ← Amber if low
│                        │
│  ┌──────┐ ┌──────┐    │
│  │ $10  │ │ $25  │    │  ← Card grid, selectable
│  └──────┘ └──────┘    │
│  ┌──────┐ ┌──────────┐│
│  │ $50  │ │ $100     ││  ← $100 shows "15% bonus"
│  │+10%  │ │ +15%     ││    badge
│  └──────┘ └──────────┘│
│                        │
│  [Add credits — $25]   │  ← Primary button
│  Powered by Stripe     │
└───────────────────────┘
```

### 6.4 Virtual Numbers
```
┌───────────────────────┐
│  My Numbers            │
│                        │
│  🇺🇸 +1 (415) 555-0199│
│  Active • $2.19/mo     │
│  [Copy] [Settings]     │
│                        │
│  ── Get a new number ──│
│  🇺🇸 USA    $2.19/mo   │
│  🇬🇧 UK     $1.90/mo   │
│  🇮🇳 India  Coming soon │
│  🇲🇽 Mexico Coming soon │
└───────────────────────┘
```

---

## 7. Accessibility

- **WCAG 2.1 AA** minimum. All color combinations must pass 4.5:1 contrast.
- Focus rings: `outline: 2px solid var(--color-signal); outline-offset: 2px;` on all interactive elements.
- All images/icons have `aria-label` or `alt` text.
- Dialpad is fully keyboard-operable (Tab, Enter, arrow keys).
- Screen reader: call status changes announced via `aria-live="polite"`.
- Touch targets: minimum 44×44px.
- `prefers-reduced-motion`: disable all animations, show static states.

---

## 8. AI Agent Instructions

When building any NomaPhone interface, follow this checklist:

### Before writing code:
1. Identify which **screen type** you're building (landing, app, dialpad, settings).
2. Confirm the **single primary action** on the screen.
3. Check if the component exists in Section 3 — reuse before creating.

### While writing code:
4. Use CSS custom properties from Section 2 — never hardcode colors/sizes.
5. Use `--font-mono` for all numbers (phone, rates, balances, times).
6. Use `--color-signal` only for the primary action element.
7. Every interactive element needs hover + focus + disabled states.
8. Mobile-first: start at 320px, add breakpoints up.

### Copy/content rules:
9. Headlines: max 8 words, factual, no marketing fluff.
10. CTAs: `verb + object` format only.
11. Error messages: `what happened + what to do`.
12. Rates: always `$X.XX/min`, monospace, green.
13. Phone numbers: always `+CC (XXX) XXX-XXXX`, monospace.
14. Balances: always 2 decimal places, monospace.

### Quality checks:
15. No `#000000` backgrounds — use `--color-midnight`.
16. No orphan text (single word on last line of heading).
17. No horizontal scroll at any breakpoint.
18. Contrast ratio ≥ 4.5:1 on all text.
19. Animations respect `prefers-reduced-motion`.
20. All forms have visible labels — no placeholder-only patterns.

---

## 9. File Structure (for reference)

```
nomaphone/
├── public/
│   └── fonts/            # Self-hosted fallbacks
├── src/
│   ├── styles/
│   │   ├── tokens.css    # All CSS custom properties from Section 2
│   │   ├── reset.css     # Minimal reset (box-sizing, margin, font-smoothing)
│   │   └── global.css    # Base element styles, imports tokens
│   ├── components/
│   │   ├── ui/           # Primitives: Button, Input, Card, Badge, etc.
│   │   ├── call/         # CallButton, Dialpad, ActiveCall, CallTimer
│   │   ├── credits/      # CreditBalance, TopUpCard, TopUpFlow
│   │   ├── numbers/      # NumberCard, NumberSelector, CountryPicker
│   │   ├── rates/        # RateRow, RateTable, RateSearch
│   │   └── layout/       # Header, BottomNav, Container, PageShell
│   ├── pages/            # Next.js pages or route components
│   └── lib/              # Utilities, formatters, API client
└── DESIGN_SYSTEM.md      # This file
```

---

## 10. Anti-Patterns (never do these)

| ❌ Anti-pattern | ✅ Correct approach |
|---|---|
| Light/white backgrounds | Dark only. `--color-midnight` base. |
| Multiple primary buttons on one screen | One `primary` max. Others are `secondary`/`ghost`. |
| Green used decoratively (borders, backgrounds, text) | Green = primary action or active/success state only |
| Phone numbers in body font | Always `--font-mono` |
| "Get Started" / "Submit" / "Continue" CTAs | Verb + object: "Add credits", "Start call" |
| Modal for simple confirmations | Inline confirmation or bottom sheet on mobile |
| Placeholder-only form labels | Visible label above every input |
| Loading spinner with no context | Skeleton screens or progress text ("Connecting...") |
| Emoji as functional icons | Emoji for flags only. Lucide icons for actions. |
| Sidebar navigation | Top nav (desktop) + bottom tabs (mobile). No sidebar. |
| Auto-playing sounds or animations | User-initiated only. Respect reduced-motion. |
| Hiding the rate until after dialing | Rate visible before AND during the call. |
| Credit balance hidden in settings | Always visible in header/nav. |
