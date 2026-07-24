# ELIET Prototype → WordPress Page Mapping

This document maps every view and component in the React prototype (`src/app/App.tsx`) to its WordPress equivalent: page template, Elementor section, and any relevant WooCommerce integration.

---

## Architecture Overview

The prototype is a single-page React app with client-side section routing between 12 `Page` views. Each view is a rendered section within `App.tsx`. The production site will use **WordPress pages** (one per view), **Elementor** for section layouts, and **Astra** as the theme.

```
Prototype (SPA)                    WordPress (Multi-page)

┌─ App.tsx ─────────────┐         ┌─ Page: Home (Desk view) ───────┐
│ Desk (home)             │         │  Header (Astra theme header)    │
│ Products                │  ──►    │  Hero slider                    │
│ Detail                  │         │  Category Grid                  │
│ About ELIET             │         │  Featured Machines              │
│ Downloads               │         │  Why ELIET                      │
│ Demo Tour               │         │  ...                            │
│ Warranty                │         ├────────────────────────────────┤
│ FAQ                     │         │  Page: Products                 │
│ Dealer Locator          │         ├────────────────────────────────┤
│ Finance Options         │         │  Page: Detail (per product)     │
│ Contact                 │         ├────────────────────────────────┤
│ Login                   │         │  ...and so on                   │
└─────────────────────────┘         └────────────────────────────────┘
```

---

## Shared Components (appear on multiple pages)

These are reusable React components that should be built as **Elementor Global Widgets** or **Elementor Template sections**.

### Header
| Prototype | WordPress |
|-----------|-----------|
| `Header` section (~5450 lines into App.tsx) | **Astra Theme Header** customised with Elementor Header Builder |
| ELIET logo (SVG: `src/imports/1Header/`) | Upload logo via Astra Customizer → Header → Logo |
| Navigation: Desk, Products, About, Downloads, Demo, Shop | WordPress menu (Appearance → Menus), assign to Primary location |
| Orange "Find a Dealer" CTA button | Menu item with button class or Elementor button widget in header |
| **Note:** Main nav links to page anchor hashes (`#desk`, `#about`, etc.) in prototype. Production: links to real page URLs. |

### Footer
| Prototype | WordPress |
|-----------|-----------|
| `Footer` section (near end of App.tsx) | **Astra Theme Footer** with Elementor Footer Builder |
| 4-column layout: About, Products, Support, Contact | Elementor inner sections (`elementor-section`) with 4 columns |
| Newsletter signup form | **Mailchimp for WordPress** or Elementor Form widget |
| Social icons, copyright | Elementor Icon List + Text Editor widgets |

### WhyElietBanner (3-column)
| Prototype | WordPress |
|-----------|-----------|
| Reusable 3-column orange banner with icons + text: "Built to Last", "The Chopping Principle™", "Low Noise" | Elementor Global Widget → saved as "Why ELIET Banner" template |
| Orange background (`#ef7d00`), Overpass font | See `wordpress/assets/css/eliet-tokens.css` for design tokens |
| **Used on:** Desk (home), Products, Detail, About ELIET, Demo Tour | Shortcode or Elementor template inserted on each page |

### WhyElietCompact (single-column)
| Prototype | WordPress |
|-----------|-----------|
| Compact variant of Why ELIET banner (single column, centered) | Elementor Global Widget variant |
| **Used on:** Downloads, Warranty, FAQ, Dealer Locator, Finance, Contact, Login | Shortcode or template |

### PageHero
| Prototype | WordPress |
|-----------|-----------|
| Page hero with title, subtitle, and breadcrumbs | Elementor section with heading + text + breadcrumb widget |
| **Used on:** About ELIET, Downloads, Demo Tour, Warranty, FAQ, Dealer Locator, Finance, Contact, Login | Template applied to all inner pages (not home) |

### FadeUp
| Prototype | WordPress |
|-----------|-----------|
| Scroll-reveal animation wrapper (uses `motion`) | Elementor entrance animation (Elementor Pro → Motion Effects) or custom CSS animation class (see `eliet-components.css` → `.fade-up`) |

### FaqItem
| Prototype | WordPress |
|-----------|-----------|
| Accordion item with expand/collapse | Elementor Accordion widget or custom HTML (see `eliet-components.css` → `.faq-item`) |
| **Used on:** FAQ page, product detail page | |

### CompareCheckbox / ComparisonBar / ComparisonPopup
| Prototype | WordPress |
|-----------|-----------|
| Product comparison widget (max 3 products) | **Advanced Product Comparison** plugin by Extify (WooCommerce Marketplace) |
| Sticky bar + popup overlay | Plugin handles all comparison UI; configure in WooCommerce → Settings → Advanced Product Comparison |
| Spec table with 3 category groups (PERFORMANCE, DESIGN, DIMENSIONS) | Configure comparison attributes in WooCommerce → Products → Attributes, then enable in APC → Comparison Table → Displayed Attributes |
| `localStorage` compare list (`exppc_compare_list`) | Plugin natively stores compare list in `localStorage` with the same key |
| Max 3 products enforced | Plugin setting: "Maximum products to compare" = 3 |

### Category Grid
| Prototype | WordPress |
|-----------|-----------|
| Product category grid on home page (Desk) showing: Shredders, Dethatchers, Overseeders, Top Dressers, Edgers, Sod Cutters, Seeders, Blowers, Leaf Vacs | Elementor section with grid of category images linking to WooCommerce category archives |
| Each card: icon image + category name | WooCommerce Product Category widget or Elementor Posts widget filtered by product category |

### Trusted By Professionals
| Prototype | WordPress |
|-----------|-----------|
| Client logo carousel | Elementor Logo Carousel widget or Image Carousel |

### Featured Machines
| Prototype | WordPress |
|-----------|-----------|
| Featured product cards on home page | WooCommerce "Featured Products" block or Elementor Products widget with featured filter |

### ComparisonPopup
| Prototype | WordPress |
|-----------|-----------|
| Full overlay product comparison table | **Advanced Product Comparison** plugin popup mode (configure in plugin settings → Popup Mode) |
| "Related products" strip (same category, excludes selected) | Plugin natively shows related products from same category |
| Max 8 related shown | Plugin configurable |

---

## Page-by-Page Mapping

### 1. Home (Desk)
**Prototype view:** `"home"` (renders when `page === "home"`)

| Prototype Section | WordPress Implementation |
|-------------------|--------------------------|
| Hero slider with video + CTA ("Book a Demo") | Elementor Slides widget or Smart Slider 3; CTA button linking to Demo Tour page |
| Category Grid (9 product categories) | Elementor section with WooCommerce product category links |
| Trusted By Professionals (logo carousel) | Elementor Logo Carousel |
| Featured Machines (product cards) | WooCommerce Featured Products block |
| Demo Tour CTA Banner | Elementor Call to Action widget (orange background, link to Demo Tour page) |
| Dealer Locator section (find a dealer form) | Elementor section with a form or link to Dealer Locator page |
| WhyElietBanner (3-column) | Global Widget "Why ELIET Banner" |
| Newsletter signup | Mailchimp for WordPress or Elementor Form |
| **Page template:** | **Astra: Front Page** or custom Elementor Full Width template |

### 2. Products
**Prototype view:** `"products"`

| Prototype Section | WordPress Implementation |
|-------------------|--------------------------|
| Product grid with pagination (71 products, 8 per page) | **WooCommerce Shop page** with products assigned to categories |
| Square page buttons with centered labels (`inline-flex items-center justify-center leading-none`) | Custom CSS for WooCommerce pagination (see `eliet-components.css`) |
| Product cards: image, name, engine, SKU | WooCommerce product loop template (Astra customiser → WooCommerce → Product Catalog) |
| "Compare" checkbox on each card | **Advanced Product Comparison** plugin adds compare buttons automatically |
| WhyElietBanner (3-column) | Global Widget (bottom of shop page) |
| **Page template:** | **WooCommerce: Shop** (default) |

### 3. Detail (Product Detail)
**Prototype view:** `"detail"`

| Prototype Section | WordPress Implementation |
|-------------------|--------------------------|
| Product detail template (reusable — renders any `ProductDetail` via `productDetailFrom()`) | **WooCommerce Single Product page** |
| Product image gallery | WooCommerce product gallery |
| Product name, SKU, engine, description | WooCommerce product title, SKU meta, short description |
| Spec table (8 specs) | **WooCommerce product attributes** (Products → Attributes → assign to product) + Additional Information tab |
| Feature cards (6 features with images) | ACF (Advanced Custom Fields) repeater field or Elementor Pro dynamic tags |
| Technology section (Chopping Principle™) | ACF rich text + repeater for points |
| Engine options table | ACF repeater or WooCommerce product variations |
| Accessories table (SKU + name) | WooCommerce cross-sells or ACF repeater |
| "Compare" button | Added automatically by Advanced Product Comparison plugin |
| WhyElietBanner (3-column) | Global Widget (bottom of product page) |
| **Note:** Only Maestro City has real detail content; all other products reuse Maestro City placeholders via `productDetailFrom()`. Real per-product data coming from "Product Import Smartsheet" (client pending). | |
| **Page template:** | **WooCommerce: Single Product** |

### 4. About ELIET
**Prototype view:** `"about"`

| Prototype Section | WordPress Implementation |
|-------------------|--------------------------|
| PageHero ("About ELIET") | Elementor section (hero) |
| The ELIET Story (text + image) | Elementor section: Text Editor + Image |
| ELIET Values (4 value cards) | Elementor Icon Box widgets in a grid |
| USA Team (team member cards) | Elementor section with Image + Text for each team member |
| Testimonials (quote cards) | Elementor Testimonial Carousel widget |
| Brochure + FAQ section | Elementor section: download button + FAQ accordion |
| Have a Question CTA (orange banner) | Elementor Call to Action widget |
| **Page template:** | **Astra: Default** or custom Elementor canvas |

### 5. Downloads
**Prototype view:** `"downloads"`

| Prototype Section | WordPress Implementation |
|-------------------|--------------------------|
| PageHero ("Downloads") | Elementor section (hero) |
| Download cards (brochures, manuals) | Elementor section with download buttons; files managed via WordPress Media Library |
| WhyElietCompact | Global Widget variant |
| **Page template:** | **Astra: Default** |
| **Note:** Real download files pending from client | |

### 6. Demo Tour
**Prototype view:** `"demo"`

| Prototype Section | WordPress Implementation |
|-------------------|--------------------------|
| PageHero ("Book a Demo") | Elementor section (hero) |
| Demo request form (name, email, phone, address, message) | **Elementor Form** or **Gravity Forms** → email to ELIET sales |
| WhyElietBanner (3-column) | Global Widget |
| **Page template:** | **Astra: Default** |

### 7. Warranty
**Prototype view:** `"warranty"`

| Prototype Section | WordPress Implementation |
|-------------------|--------------------------|
| PageHero ("Warranty") | Elementor section (hero) |
| Warranty conditions (placeholder text) | Elementor Text Editor |
| WhyElietCompact | Global Widget variant |
| **Page template:** | **Astra: Default** |
| **Note:** Real warranty terms pending from client | |

### 8. FAQ
**Prototype view:** `"faq"`

| Prototype Section | WordPress Implementation |
|-------------------|--------------------------|
| PageHero ("FAQ") | Elementor section (hero) |
| FAQ accordion list (placeholder items) | Elementor Accordion widget |
| WhyElietCompact | Global Widget variant |
| **Page template:** | **Astra: Default** |
| **Note:** Real FAQ answers pending from client | |

### 9. Dealer Locator
**Prototype view:** `"dealers"`

| Prototype Section | WordPress Implementation |
|-------------------|--------------------------|
| PageHero ("Find a Dealer") | Elementor section (hero) |
| Dealer search (placeholder UI) | **WooCommerce Dealer Locator** plugin or Google Maps embed |
| WhyElietCompact | Global Widget variant |
| **Page template:** | **Astra: Default** |
| **Note:** Real dealer list pending from client | |

### 10. Finance Options
**Prototype view:** `"finance"`

| Prototype Section | WordPress Implementation |
|-------------------|--------------------------|
| PageHero ("Finance Options") | Elementor section (hero) |
| Finance information (placeholder) | Elementor Text Editor |
| WhyElietCompact | Global Widget variant |
| **Page template:** | **Astra: Default** |

### 11. Contact
**Prototype view:** `"contact"`

| Prototype Section | WordPress Implementation |
|-------------------|--------------------------|
| PageHero ("Contact ELIET USA") | Elementor section (hero) |
| Contact form (name, email, subject, message) | **Elementor Form** or **Gravity Forms** → email to ELIET |
| Address + phone + email details | Elementor Icon List widget |
| WhyElietCompact | Global Widget variant |
| **Page template:** | **Astra: Default** |

### 12. Login / Machine Registration
**Prototype view:** `"login"`

| Prototype Section | WordPress Implementation |
|-------------------|--------------------------|
| PageHero ("Login") | Elementor section (hero) |
| Login form (visual mockup only) | **WooCommerce My Account page** (handles login, registration, order history) |
| WhyElietCompact | Global Widget variant |
| **Page template:** | **WooCommerce: My Account** |
| **Note:** Login maps to WooCommerce's `my-account` endpoint; machine registration can be added as a custom endpoint or ACF user fields | |

---

## Navigation Structure

Prototype navigation (hash-based) → WordPress menu (URL-based):

| Prototype Link | WordPress URL | Page |
|----------------|---------------|------|
| `#desk` | `/` | Home (Front Page) |
| `#products` | `/shop/` | WooCommerce Shop |
| `#about` | `/about-eliet/` | About ELIET |
| `#downloads` | `/downloads/` | Downloads |
| `#demo` | `/demo-tour/` | Demo Tour |
| Shop (button) | `/shop/` | WooCommerce Shop |
| `#warranty` | `/warranty/` | Warranty |
| `#faq` | `/faq/` | FAQ |
| `#dealers` | `/find-a-dealer/` | Dealer Locator |
| `#finance` | `/finance-options/` | Finance Options |
| `#contact` | `/contact/` | Contact |
| `#login` | `/my-account/` | WooCommerce My Account |

---

## Responsive Breakpoints

From `theme.css` and Tailwind v4 defaults:

| Breakpoint | Width | Use |
|------------|-------|-----|
| Mobile | < 768px | Single column, stacked sections, hamburger menu |
| Tablet | 768px – 1024px | 2-column grids, condensed header |
| Desktop | > 1024px | Full layout, 3+ columns, expanded navigation |

---

## Animation Spec

| Prototype | WordPress Equivalent |
|-----------|---------------------|
| `motion` fade-up on scroll | Elementor Motion Effects: "Fade In" + "Slide Up" entrance animation |
| Stagger children (WhyElietBanner columns) | Elementor Motion Effects with staggered delay per column |
| FAQ accordion expand | Elementor Accordion default animation |
| Comparison popup open/close | Plugin handles transition |
| Scroll-to-top on page change | WordPress: natural page load (no SPA routing) |
| Smooth scroll | CSS: `scroll-behavior: smooth` on `html` (see `eliet-components.css`) |

---

## CSS → Elementor

The CSS files in `wordpress/assets/css/` should be loaded in WordPress:

1. **eliet-tokens.css**: Add to Astra Customizer → Custom CSS/JS → Custom CSS, or enqueue via `functions.php`
2. **eliet-components.css**: Same approach; contains component CSS that isn't handled by Elementor's built-in styling

Key styles the dev team should replicate:
- Orange focus ring (`outline: 2px solid #ef7d00; outline-offset: 2px`)
- Custom scrollbar styling (thin orange thumb)
- ELIET orange selection color (`::selection { background: #ef7d00; color: #fff }`)
- Compare button styling (orange border, checkbox style, max-3 indicator)
- Pagination square buttons (centered text, `inline-flex items-center justify-center`)
- Fade-up animation keyframes

---

## WooCommerce Integration Summary

| Feature | Plugin/Integration |
|---------|-------------------|
| Product catalog (71 products) | WooCommerce core; import `wordpress/data/products.json` via WP All Import or CSV |
| Product attributes / specs | WooCommerce → Products → Attributes (create `pa_engine`, `pa_power`, etc. from `wcAttributeSlugs` in products.json) |
| Product comparison | **Advanced Product Comparison** by Extify (WooCommerce Marketplace) |
| Product categories | WooCommerce product categories: Shredders, Dethatchers, Overseeders, Top Dressers, Edgers, Sod Cutters, Seeders, Blowers, Leaf Vacs |
| Shopping cart / checkout | WooCommerce core (not prototyped — visual mockup only) |
| Login / my account | WooCommerce core (not prototyped — visual mockup only) |
| Finance options | Custom page or WooCommerce payment gateway plugin (e.g., Affirm, Klarna) |

---

## Known Gaps (Pending Client Content)

| Item | Status |
|------|--------|
| Per-product detail pages (features, technology, accessories) | Placeholder — only Maestro City has real content. Client "Product Import Smartsheet" pending. |
| FAQ answers | Placeholder — client pending |
| Warranty terms | Placeholder — client pending |
| Dealer list / locator data | Placeholder — client pending |
| Download files (brochures, manuals) | Placeholder — client pending |
| Product images (actual product photos) | Placeholder — all products use the same generic card image |
| Comparison specs for products 30–71 | Fallback data derived from category/engine; real specs pending |

---

*Generated 2026-07-24 from prototype source. Update this document as new client content arrives or WordPress build decisions change.*