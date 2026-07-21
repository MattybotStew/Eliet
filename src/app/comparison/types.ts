// ─── Comparison Types ────────────────────────────────────────────────────────
// UX mirrors Advanced Product Comparison for WooCommerce (Extify):
// https://woocommerce.com/products/advanced-product-comparison/
// Flow: Compare button → sticky bar → comparison popup widget.

/** Spec category group — maps to WooCommerce attributes shown in the comparison table */
export type ComparisonSpecCategory = {
  category: string;
  rows: { label: string; key: string; wcSlug: string }[];
};

/** Full comparison data for a single product */
export type ComparisonProductData = {
  id: number;
  name: string;
  sku: string;
  engine: string;
  image: string;
  specs: Record<string, string>;
};

/** Context state — cookie list + comparison popup open */
export type ComparisonState = {
  selectedIds: number[];
  isPopupOpen: boolean;
};

export type ComparisonAction =
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number }
  | { type: "CLEAR_ALL" }
  | { type: "OPEN_POPUP" }
  | { type: "CLOSE_POPUP" }
  | { type: "HYDRATE"; ids: number[] };
