# ELIET Website Prototype

**This is a design/functionality prototype, not production code.** It exists so the dev team can see and interact with the intended design before building the real site. The production site will be built on **WordPress with WooCommerce, Elementor, and the Astra theme** — none of this React code ships.

**Live prototype: https://mattybotstew.github.io/Eliet/** (auto-deploys from `main`)

The original design is in Figma: https://www.figma.com/design/YRjrjX3xv6rOWEIMAj4X7x/Enhance-Design

## What this prototype is for

- **Design reference**: layout, typography (Overpass), color, spacing, and imagery for every page.
- **Functionality reference**: navigation flow, hover/scroll animations, and interactive behavior to reproduce (or approximate) in Elementor/Astra.
- **Not a backend**: there is no server, no real cart/checkout, no CMS. Anything that looks like commerce is visual only — WooCommerce provides all of that in production.

## Viewing it

```bash
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
```

## What's inside

Single-page React app (Vite + Tailwind v4 + motion). All 11 pages live in `src/app/App.tsx` (~2,800 lines), organized by section comments:

| Prototype view | Production equivalent |
|---|---|
| Desk (home) | Front page |
| Products | WooCommerce shop/category page |
| Detail | WooCommerce single product page |
| Downloads | Resources/downloads page |
| About ELIET | About page |
| Demo Tour | Demo/booking page |
| Warranty | Warranty/terms page |
| FAQ | FAQ page |
| Dealer Locator | Dealer/store locator |
| Finance Options | Financing information |
| Contact | Contact form page |

**Key shared components** (drawn from `App.tsx`):
- `WhyElietBanner` — 3-column "Why Professionals Choose ELIET" banner (reused across 5 pages)
- `WhyElietCompact` — single-column variant (Finance page)
- `PageHero` — consistent page hero with image, title, and description (Warranty, FAQ, Dealers, Finance, Contact)
- `FadeUp` — scroll-triggered fade-in animation wrapper
- `FaqItem` — expandable accordion item

**Style layers** (cascaded in `src/styles/index.css`):
- `fonts.css` — @font-face declarations (Overpass)
- `tailwind.css` — Tailwind v4 (`@tailwindcss/vite`) + `tw-animate-css`
- `theme.css` — Figma Make theme tokens
- `globals.css` — global resets (smooth scroll, custom scrollbar, focus ring, button centering, selection color)

Images are in `src/imports/<Section>/`. Interaction/animation patterns use the `motion` library — treat these as the spec for scroll and hover behavior.

## For the build team

- Match the design as closely as Elementor/Astra allows; where a 1:1 match isn't practical, match the intent (hierarchy, rhythm, imagery treatment).
- Product data, cart, checkout, and account flows come from WooCommerce — nothing in this repo defines them.
- `JOURNAL.md` logs the prototype's change history; `AGENTS.md` is instructions for AI coding agents working on the prototype itself.

## Product comparison → YITH WooCommerce Compare

The interactive compare UI in this prototype (`src/app/comparison/`) is a **design/functionality spec** for production. Do **not** port the React code — implement with **[YITH WooCommerce Compare](https://wordpress.org/plugins/yith-woocommerce-compare/)** (free covers button + table + preview bar in 3.0+; premium adds more sticky-bar / layout controls).

| Prototype behavior | YITH / WooCommerce equivalent |
|---|---|
| Compare checkbox/button on shop cards + product detail | YITH → Compare → show as checkbox/button on shop + product |
| Sticky bottom tray with selected products | YITH sticky / preview bar |
| “Compare Now” → overlay table | YITH full-overlay modal (or dedicated Compare page) |
| Spec rows grouped PERFORMANCE / DESIGN / DIMENSIONS | WooCommerce attributes (`pa_*`); order fields in YITH → Compare |
| Orange highlight on differing cells | YITH “highlight differences” + theme CSS on `td.different` |
| Max 3 products | YITH max-products setting |
| List persists across navigation | YITH cookie (prototype uses `localStorage` as the stand-in) |

### Attribute setup

Under **Products → Attributes**, create attributes matching the prototype keys in `src/app/comparison/comparisonSpecs.ts` (`wcSlug` on each row), e.g. `pa_engine`, `pa_power`, `pa_weight`, `pa_timber-diameter`, … Populate values on each catalog product, then enable/order those fields in **YITH → Compare**.

### Theme CSS (Astra / child theme / Customizer)

```css
:root {
  --yith-wccl-bg: #ef7d00;
  --yith-wccl-color: #fff;
}
.compare-button a,
a.compare {
  background: #ef7d00 !important;
  color: white !important;
  border-radius: 999px !important;
  font-family: 'Overpass', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 11px;
  padding: 8px 16px;
}
#yith-woocompare-table {
  font-family: 'Overpass', sans-serif;
}
#yith-woocompare-table th {
  background: #0f0f12;
  color: white;
}
#yith-woocompare-table td.different {
  background: #fef3e8;
}
```

### Timeline (production)

1. **Day 1** — Install YITH Compare, set max 3, button on shop + product, modal table.
2. **Day 1–2** — Create attributes + populate catalog products.
3. **Day 2–3** — Theme CSS (orange / dark / Overpass) to match this prototype.
4. **Day 3** — Elementor layout for a Compare page if not using modal-only.

Use the live prototype compare flow as the visual reference for sticky bar, difference highlighting, and table hierarchy.
