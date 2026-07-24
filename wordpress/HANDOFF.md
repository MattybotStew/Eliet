# ELIET Website — WordPress Developer Handoff

This document is the complete design and implementation reference for building the production
ELIET website on **WordPress + WooCommerce + Elementor + Astra**.

Everything below is extracted directly from the working prototype at
**https://mattybotstew.github.io/Eliet/** (auto-deployed from this repo).

---

## Table of Contents

1. [Design Tokens](#design-tokens)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Color Palette](#color-palette)
5. [Component Specs](#component-specs)
6. [Responsive Breakpoints](#responsive-breakpoints)
7. [Animation & Interaction Specs](#animation--interaction-specs)
8. [Global CSS Rules](#global-css-rules)
9. [Navigation Structure](#navigation-structure)
10. [Page-by-Page Build Notes](#page-by-page-build-notes)
11. [Image Assets](#image-assets)

---

## Design Tokens

All values below are CSS custom properties used throughout the prototype. Copy them into
Astra's Customizer → Additional CSS, or your child theme's `style.css`.

### Core tokens

```css
:root {
  /* Brand */
  --eliet-orange: #ef7d00;
  --eliet-dark: #030213;
  --eliet-white: #ffffff;

  /* Surfaces */
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --card: #ffffff;
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);

  /* Text */
  --primary: #030213;
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.0058 264.53);
  --secondary-foreground: #030213;
  --muted: #ececf0;
  --muted-foreground: #717182;
  --accent: #e9ebef;
  --accent-foreground: #030213;
  --destructive: #d4183d;
  --destructive-foreground: #ffffff;

  /* Borders & inputs */
  --border: rgba(0, 0, 0, 0.1);
  --input: transparent;
  --input-background: #f3f3f5;
  --switch-background: #cbced4;
  --ring: oklch(0.708 0 0);

  /* Radius */
  --radius: 0.625rem;
  --radius-sm: calc(0.625rem - 4px);
  --radius-md: calc(0.625rem - 2px);
  --radius-lg: 0.625rem;
  --radius-xl: calc(0.625rem + 4px);

  /* Font base */
  --font-size: 16px;
}
```

### Dark mode tokens (if needed)

The prototype ships with a full dark-mode palette in `src/styles/theme.css`. The production
site is expected to be light-mode only; dark tokens are included here for completeness.

```css
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
}
```

---

## Typography

### Font family

**Overpass** — loaded from Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100..900;1,100..900&display=swap');
```

Apply globally:

```css
body, h1, h2, h3, h4, h5, h6, p, span, a, button, input, select, textarea {
  font-family: 'Overpass', sans-serif;
}
```

### Base font size

`--font-size: 16px` (set on `html`).

### Heading scale (Tailwind defaults used in the prototype)

| Element | Tailwind class | Computed size | Weight | Line height | Usage |
|---------|---------------|---------------|--------|-------------|-------|
| h1 | `text-2xl` | 1.5rem (24px) | 500 | 1.5 | Page titles on support pages |
| h2 | `text-xl` | 1.25rem (20px) | 500 | 1.5 | Section headings |
| h3 | `text-lg` | 1.125rem (18px) | 500 | 1.5 | Card titles, sub-sections |
| h4 | `text-base` | 1rem (16px) | 500 | 1.5 | Small labels, captions |
| p | `text-base` | 1rem (16px) | 400 | 1.5 | Body text |

> **Note:** The prototype also uses custom sizes in specific components (e.g. hero headings
> at `text-[42px] sm:text-[64px]`). These are documented per-component below.

---

## Spacing & Layout

### Tailwind spacing scale

The prototype uses standard Tailwind spacing. In Elementor, match these values:

| Tailwind | Value | Common usage |
|----------|-------|-------------|
| `p-2` | 0.5rem (8px) | Tight padding |
| `p-4` | 1rem (16px) | Card padding |
| `p-6` | 1.5rem (24px) | Section padding |
| `p-8` | 2rem (32px) | Large section padding |
| `gap-4` | 1rem (16px) | Grid gaps |
| `gap-6` | 1.5rem (24px) | Card grid gaps |
| `gap-8` | 2rem (32px) | Major layout gaps |
| `mt-4` | 1rem (16px) | Small top margin |
| `mt-8` | 2rem (32px) | Medium top margin |
| `mt-12` | 3rem (48px) | Large top margin |
| `mb-4` | 1rem (16px) | Small bottom margin |
| `mb-8` | 2rem (32px) | Medium bottom margin |
| `mb-12` | 3rem (48px) | Large bottom margin |

### Max-width container

The prototype uses Tailwind's default `max-w-*` scale. In Elementor, use the section
width setting with these values:

| Class | Value | Usage |
|-------|-------|-------|
| `max-w-7xl` | 80rem (1280px) | Main content container |
| `max-w-6xl` | 72rem (1152px) | Secondary content |
| `max-w-4xl` | 56rem (896px) | Narrow content |
| `max-w-2xl` | 42rem (672px) | Text blocks |
| `max-w-md` | 28rem (448px) | Small cards |

### Grid patterns

- **Products grid**: `grid grid-cols-2 lg:grid-cols-4` (2 columns mobile, 4 desktop)
- **Featured machines**: `grid grid-cols-2 lg:grid-cols-4`
- **Category grid**: 2 columns on mobile, 3 on desktop
- **Footer**: `grid grid-cols-2 md:grid-cols-4` (link columns)

---

## Color Palette

### Primary brand colors

| Name | Hex | Usage |
|------|-----|-------|
| ELIET Orange | `#ef7d00` | Primary CTA buttons, links, accents, focus rings |
| Dark Navy | `#030213` | Primary text, dark backgrounds |
| White | `#ffffff` | Backgrounds, text on dark |

### Semantic colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#ffffff` | Page background |
| Foreground | `oklch(0.145 0 0)` | Primary text |
| Muted | `#ececf0` | Muted backgrounds |
| Muted Foreground | `#717182` | Secondary text |
| Accent | `#e9ebef` | Hover states, subtle highlights |
| Border | `rgba(0, 0, 0, 0.1)` | Card borders, dividers |
| Input Background | `#f3f3f5` | Form field backgrounds |
| Destructive | `#d4183d` | Error states, delete actions |

### Compare table difference highlight

| Token | Value | Usage |
|-------|-------|-------|
| Different background | `#fef3e8` | Highlight cells with different values in compare table |

---

## Component Specs

### Header / Navigation

- **Desktop nav**: horizontal bar with dropdown menus on hover
- **Mobile nav**: hamburger menu with accordion-style expandable sections
- **Logo**: ELIET logo (SVG, in `src/imports/1Header/`)
- **Nav items**: Products (dropdown), Service (dropdown), Where to Find ELIET (dropdown),
  About (dropdown), Demo Tour, Contact
- **CTA**: Login button (orange, top right)
- **Sticky**: Header is sticky on scroll
- **Dropdown behavior**: pure CSS hover on desktop, click-to-expand on mobile

### Hero Sections (Home)

- **Background image**: full-bleed, dark gradient overlay (`bg-gradient-to-r from-black/80 via-black/40 to-transparent`)
- **Headline**: `text-[42px] sm:text-[64px]` (42px mobile, 64px desktop)
- **Subheadline**: `text-[16px] sm:text-[18px]`
- **CTA**: orange button (`#ef7d00`), uppercase, bold
- **Height**: `min-h-[600px] sm:min-h-[700px]`

### Page Hero (Support pages: Warranty, FAQ, Dealers, Finance, Contact)

- **Layout**: image left, text right (or stacked on mobile)
- **Headline**: `text-[36px] sm:text-[48px] md:text-[72px]`
- **Description**: `text-[16px] sm:text-[18px]`
- **Background**: light gray (`#ececf0`)

### Category Cards

- **Layout**: 2-column grid on mobile, 3-column on desktop
- **Image height**: `480px` (increased from original 440px)
- **Card style**: white background, rounded corners (`0.625rem`), subtle border
- **Hover**: slight scale transform on image

### Product Cards (Products page)

- **Layout**: 2-column on mobile, 4-column on desktop
- **Image height**: `260px` (increased from 200px)
- **Card content**: product image, name, SKU, engine, category badge
- **Compare button**: styled checkbox (see below)
- **Hover**: shadow lift, image scale

### Compare Button (Advanced Product Comparison / Extify)

The compare UX mirrors the **Advanced Product Comparison** plugin in popup mode:

- **Button style**: `bg-[#ef7d00] text-white uppercase font-bold`
- **States**: "Compare" (default) → "Added" (selected)
- **Max products**: 3
- **Popup**: auto-opens when product is added; sticky bar shows selected products
- **Table**: full-width spec table with difference highlighting (`#fef3e8`)
- **Related products**: shown above the compare table in popup

### Why ELIET Banner (3-column)

- **Layout**: 3 columns on desktop, stacked on mobile
- **Each column**: image + title + description
- **Images**: from `src/imports/Desk/` (WhyElietBanner section)
- **Reused on**: Home, Products, Detail, About, Demo Tour

### Why ELIET Compact (single column)

- **Layout**: single centered column
- **Used on**: Finance page only

### Trusted By Professionals

- **Layout**: label column (`lg:w-64`) + 3 image columns
- **Headline**: `text-[28px] lg:text-[36px]`
- **Images**: 380px height viewport
- **Mobile**: images stack above headline

### Featured Machines

- **Layout**: `grid grid-cols-2 lg:grid-cols-4`
- **Card images**: 200px height below `sm` breakpoint, 260px above
- **Content**: product image, name, category, engine

### Newsletter Section

- **Layout**: centered content with email input + subscribe button
- **Background**: dark navy
- **Text**: white

### Footer

- **Layout**: 4-column grid (2 columns on mobile)
- **Background**: dark navy (`#030213`)
- **Text**: white
- **Links**: organized by category (Products, Service, Where to Find, About)
- **Bottom bar**: copyright, legal links

### Pagination (Products page)

- **Style**: square buttons, `inline-flex items-center justify-center leading-none`
- **Active**: orange background (`#ef7d00`), white text
- **Inactive**: white background, border, dark text

### FAQ Accordion

- **Component**: `FaqItem` in `App.tsx`
- **Behavior**: click to expand/collapse
- **Style**: bordered items, plus/minus icon on right
- **Animation**: smooth height transition

### FadeUp Animation

- **Trigger**: scroll into viewport
- **Effect**: fade in + slight upward movement (12px)
- **Duration**: 250ms, eased
- **Delay**: configurable per element (`delay` prop)

---

## Responsive Breakpoints

Tailwind v4 default breakpoints used throughout:

| Prefix | Min width | Usage |
|--------|-----------|-------|
| `sm:` | 640px | Small tablets |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops |
| `xl:` | 1280px | Desktops |
| `2xl:` | 1536px | Large desktops |

### Key responsive patterns

- **Hero headings**: `text-[42px] sm:text-[64px]` (Home), `text-[36px] sm:text-[48px] md:text-[72px]` (PageHero)
- **Grids**: 2 columns mobile → 4 columns desktop (`grid-cols-2 lg:grid-cols-4`)
- **Navigation**: hamburger below `lg`, full nav at `lg` and above
- **Page hero**: stacked below `sm`, side-by-side at `sm` and above

---

## Animation & Interaction Specs

### Page transitions

- **Library**: `motion` (Framer Motion)
- **Pattern**: `AnimatePresence` wrapping the root `App` component
- **Effect**: cross-fade + slight vertical slide
  - Enter: `opacity: 0, y: 12` → `opacity: 1, y: 0`
  - Exit: `opacity: 1, y: 0` → `opacity: 0, y: -8`
  - Duration: 250ms, eased

### Scroll reveal (FadeUp)

- **Trigger**: Intersection Observer (element enters viewport)
- **Effect**: `opacity: 0` → `opacity: 1`, `translateY: 12px` → `0`
- **Duration**: 250ms
- **Stagger**: optional `delay` prop for cascading reveals

### Hover states

- **Buttons**: scale slightly, darken background
- **Cards**: shadow lift, image scale
- **Links**: color change to ELIET orange

### Back-to-top button

- **Trigger**: appears after scrolling 500px
- **Style**: dark pill with orange border
- **Behavior**: smooth-scrolls to top

---

## Global CSS Rules

These rules are in `src/styles/globals.css` and must be replicated in the production site.

```css
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Focus ring — ELIET orange */
*:focus-visible {
  outline: 2px solid #ef7d00;
  outline-offset: 2px;
}

/* Text selection */
::selection {
  background: #ef7d0028;
  color: #131316;
}

/* Scrollbar (WebKit) */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #f4f4f4;
}
::-webkit-scrollbar-thumb {
  background: #c0c0c0;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #a0a0a0;
}

/* Button centering — critical for square/icon buttons */
@layer base {
  button, [type="button"], [type="submit"], [type="reset"] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}
```

> **Important**: The button centering rule must live in a CSS layer (or equivalent specificity)
> so it doesn't override Tailwind utilities like `hidden` or `lg:hidden`. In Elementor/Astra,
> add this in the Customizer → Additional CSS section.

---

## Navigation Structure

The prototype uses a client-side router. The production site should map these to WordPress
pages with the same URL structure.

### Top-level nav items

| Label | Prototype page | Production equivalent | Children |
|-------|---------------|----------------------|----------|
| Products | `products` | WooCommerce Shop | Shredders, Dethatchers, Seeders, Overseeders, Lawn Edgers, Aerator/Topdresser, Leaf Blowers & Vacuums, Sod Cutters |
| Service | — | — | Downloads, Warranty Conditions, FAQ & Contact |
| Where to Find ELIET | `dealers` | Dealer Locator | Dealer Locator, Sales Reps Locator, Finance Options |
| About | `about` | About page | Brand Story / Innovation, USA Team, Testimonials, Request Brochure, Exhibitions & Events, FAQs |
| Demo Tour | `demo` | Demo/Booking page | — |
| Contact | `contact` | Contact page | — |
| Login | `login` | My Account (WooCommerce) | — |

### URL structure recommendation

```
/                          → Front page (Desk)
/products/                 → WooCommerce shop
/products/{category}/      → Category archive
/product/{slug}/           → Single product
/downloads/                → Resources page
/warranty/                 → Warranty page
/faq/                      → FAQ page
/dealers/                  → Dealer locator
/finance/                  → Finance options
/demo-tour/                → Demo tour / booking
/contact/                  → Contact page
/login/                    → My Account (WooCommerce)
```

---

## Page-by-Page Build Notes

### 1. Home (Desk)

**Elementor sections**: Header → Hero → Category Grid → Trusted By → Featured Machines →
Demo Tour CTA → Dealer Locator CTA → Why ELIET Banner → Newsletter → Footer

**Key notes**:
- Hero uses full-bleed background image with dark gradient overlay
- Category grid: 2-col mobile, 3-col desktop
- Trusted By: label column + 3 image columns
- Featured Machines: 2x2 grid below `lg`, 4-col at `lg`
- Why ELIET Banner: 3-column, reused across 5 pages
- Demo Tour CTA: gradient background, orange corner accent
- Dealer Locator CTA: dark background with map imagery

### 2. Products (Shop)

**Elementor sections**: Header → Page Hero → Category Filter Pills → Product Grid → Pagination → Newsletter → Footer

**Key notes**:
- Category pills: derived from product data (9 categories)
- Product grid: 2-col mobile, 4-col desktop
- Pagination: square buttons, centered labels
- Compare button on each card
- Product cards link to detail page

### 3. Product Detail

**Elementor sections**: Header → Product Hero (image + specs) → Tabs (Description / Specs / Features / Technology) → Engine Options → Accessories → Related Products → Newsletter → Footer

**Key notes**:
- Template renders any `ProductDetail` object — in production, WooCommerce product data
- Specs tab: table of label/value pairs
- Features tab: 6 feature cards with images
- Technology tab: heading, body text, 4 bullet points
- Engine options: list with HP and notes
- Accessories: table with code + name
- Related products: same category, exclude current

### 4. Downloads

**Elementor sections**: Header → Page Hero → Downloads Grid → Newsletter → Footer

### 5. About ELIET

**Elementor sections**: Header → ELIET Story → Values → USA Team → Testimonials → Brochure + FAQ → Have a Question CTA → Newsletter → Footer

### 6. Demo Tour

**Elementor sections**: Header → Page Hero → Demo Tour content → Newsletter → Footer

### 7. Warranty

**Elementor sections**: Header → Page Hero → Warranty Conditions → Newsletter → Footer

### 8. FAQ

**Elementor sections**: Header → Page Hero → FAQ Accordion → Newsletter → Footer

### 9. Dealer Locator

**Elementor sections**: Header → Page Hero → Search Bar → Map Placeholder → Dealer Cards Grid → Newsletter → Footer

### 10. Finance Options

**Elementor sections**: Header → Page Hero → Finance Program Cards → Why ELIET Compact → Newsletter → Footer

### 11. Contact

**Elementor sections**: Header → Page Hero → Contact Info Blocks → Office Hours → Map Placeholder → Contact Form → Resource Cards → Newsletter → Footer

### 12. Login / Machine Registration

**Elementor sections**: Header → Login Form Card → Machine Registration Form Card → Why Register Benefits Band → Newsletter → Footer

**Key notes**:
- Two white form cards side by side (stacked on mobile)
- Login form: email + password
- Machine registration: model dropdown (fed from CATALOG), serial number, purchase date
- Benefits band: 3 columns explaining why to register
- Visual only — no real auth (WooCommerce handles this in production)

---

## Image Assets

All images are in `src/imports/` organized by section. The `wordpress/assets/images/`
directory contains the same files organized for easy upload to the WordPress Media Library.

### Section → Directory mapping

| Section | Source directory | Files |
|---------|-----------------|-------|
| Header / Logo | `src/imports/1Header/` | SVG icons |
| Home (Desk) | `src/imports/Desk/` | Hero, categories, Why ELIET, Trusted By, Featured Machines |
| Products | `src/imports/Products/` | Product card images |
| Product Detail | `src/imports/Detail/` | Product detail images, feature thumbnails |
| About ELIET | `src/imports/AboutEliet/` | Story, values, team, testimonials |
| Demo Tour | `src/imports/DemoTour/` | Demo tour images |
| Downloads | `src/imports/Downloads/` | Download thumbnails |

### Image sizes (as used in the prototype)

| Component | Height | Notes |
|-----------|--------|-------|
| Category card | 480px | Was 440px, increased |
| Machine card | 260px | Was 200px, increased |
| Product card | 260px | Was 200px, increased |
| Trusted By | 380px | Was 340px, increased |
| Detail page hero | 520px | Was 460px, increased |
| Featured Machines (mobile) | 200px | Below `sm` breakpoint |

### Image optimization

Images were compressed on 2026-07-07 (palette PNG q85 / mozjpeg q80). If you re-export
from Figma Make, re-run compression — see `JOURNAL.md` for the recipe.

---

## File Reference

| File | Purpose |
|------|---------|
| `src/app/App.tsx` | Main shell — all page sections, navigation, shared components |
| `src/app/products.ts` | Product data — types, Maestro City detail, CATALOG (71 items) |
| `src/app/comparison/` | Compare UX — checkbox, bar, popup, context, specs |
| `src/styles/theme.css` | Design tokens (CSS custom properties) |
| `src/styles/globals.css` | Global CSS rules (focus ring, scrollbar, button centering) |
| `src/styles/fonts.css` | Overpass font import |
| `wordpress/HANDOFF.md` | This document |
| `wordpress/PAGE-MAPPING.md` | Detailed page → template mapping |
| `wordpress/data/products.json` | Product data export for WooCommerce |
| `wordpress/assets/css/eliet-tokens.css` | Design tokens as plain CSS |
| `wordpress/assets/css/eliet-components.css` | Component-level CSS |
| `wordpress/assets/images/` | Organized image assets |

---

*Last updated: 2026-07-24*