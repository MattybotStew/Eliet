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

Single-page React app (Vite + Tailwind v4 + motion). Page views live in `src/app/App.tsx` (plus `src/app/comparison/` for Compare), organized by section comments:

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
| Compare | YITH Compare page (shortcode / Elementor) |

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

The compare UI in `src/app/comparison/` **follows the same UX as [YITH WooCommerce Compare](https://wordpress.org/plugins/yith-woocommerce-compare/)** in **dedicated page mode**:

| User action | Prototype (= YITH page mode) |
|---|---|
| Tick **Compare** checkbox on shop card or product page | Product added to compare list |
| First product selected | White sticky preview bar appears at bottom |
| Second product selected | Navigates to the **Compare** page automatically |
| Click **Compare** in the sticky bar | Opens the Compare page |
| On Compare page | Full-width `#yith-woocompare-table` + related products |
| Remove / Clear all | Updates list; empty state + browse CTA when none left |
| Differing attribute cells | Highlighted (`td.different`, `#fef3e8`) |

Production: install YITH Compare, create a WordPress/Elementor **Compare** page, set table display to **page** (not overlay). Spec rows map to WooCommerce attributes (`wcSlug` / `pa_*` in `comparisonSpecs.ts`). Theme with Eliet orange (`#ef7d00`) and Overpass — see CSS below.

### Attribute setup

Under **Products → Attributes**, create attributes matching `wcSlug` values in `comparisonSpecs.ts` (e.g. `pa_engine`, `pa_power`, `pa_weight`). Populate on each product, then enable/order them in **YITH → Compare**.

### Theme CSS (Astra / child theme / Customizer)

```css
.compare-button,
a.compare {
  font-family: 'Overpass', sans-serif;
}
#yith-woocompare-table {
  font-family: 'Overpass', sans-serif;
}
#yith-woocompare-table td.different {
  background: #fef3e8;
}
.yith-woocompare-preview-bar .button,
.yith-woocompare-preview-bar button {
  background: #ef7d00 !important;
  color: #fff !important;
  font-family: 'Overpass', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
}
```

### Timeline (production)

1. **Day 1** — Install YITH, max 3 products, checkbox on shop + product, sticky bar, **Compare page** (table display = page), auto-open on 2nd product.
2. **Day 1–2** — Create / populate attributes from the prototype field list.
3. **Day 2–3** — Theme CSS to match Eliet (orange, Overpass).
4. **Day 3** — Elementor layout for the Compare page + related products.
