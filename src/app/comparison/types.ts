// ─── Comparison Types ────────────────────────────────────────────────────────
// UX mirrors YITH WooCommerce Compare (checkbox → sticky bar → dedicated Compare page).

/** Spec category group — maps to ordered WooCommerce attributes in YITH fields list */
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

/** Context state — cookie list + request to open the Compare page (YITH page mode) */
export type ComparisonState = {
  selectedIds: number[];
  /** Set when sticky “Compare” is clicked or 2nd product is added (auto-open) */
  openCompareRequested: boolean;
};

export type ComparisonAction =
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number }
  | { type: "CLEAR_ALL" }
  | { type: "OPEN_COMPARE" }
  | { type: "ACK_OPEN_COMPARE" }
  | { type: "HYDRATE"; ids: number[] };
