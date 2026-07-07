# ELIET Website Prototype

**This is a design/functionality prototype, not production code.** It exists so the dev team can see and interact with the intended design before building the real site. The production site will be built on **WordPress with WooCommerce, Elementor, and the Astra theme** — none of this React code ships.

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

Single-page React app (Vite + Tailwind v4). All pages live in `src/app/App.tsx`, organized by section comments:

| Prototype view | Production equivalent |
|---|---|
| Desk (home) | Front page |
| Products | WooCommerce shop/category page |
| Detail | WooCommerce single product page |
| Downloads | Resources/downloads page |
| About ELIET | About page |
| Demo Tour | Demo/booking page |

Images are in `src/imports/<Section>/`. Interaction/animation patterns use the `motion` library — treat these as the spec for scroll and hover behavior.

## For the build team

- Match the design as closely as Elementor/Astra allows; where a 1:1 match isn't practical, match the intent (hierarchy, rhythm, imagery treatment).
- Product data, cart, checkout, and account flows come from WooCommerce — nothing in this repo defines them.
- `JOURNAL.md` logs the prototype's change history; `AGENTS.md` is instructions for AI coding agents working on the prototype itself.
