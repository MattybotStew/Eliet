// ─── Comparison Types ────────────────────────────────────────────────────────
// Design-spec for production: YITH WooCommerce Compare
// (https://wordpress.org/plugins/yith-woocommerce-compare/)
// Spec rows map to WooCommerce product attributes (pa_*). See comparisonSpecs.ts.

/** A single spec row in the comparison table */
export type ComparisonSpecRow = {
  label: string;
  /** Values keyed by product id */
  values: Record<number, string>;
};

/** A spec category group (e.g. PERFORMANCE, DESIGN, DIMENSIONS).
 *  In WooCommerce these become attribute taxonomies / ordered fields in YITH → Compare. */
export type ComparisonSpecCategory = {
  category: string;
  rows: { label: string; key: string; /** WooCommerce attribute slug */ wcSlug: string }[];
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

/** Context state — mirrors YITH compare cookie list + modal open state */
export type ComparisonState = {
  selectedIds: number[];
  isModalOpen: boolean;
  /** Sticky preview bar expanded (shows key attributes inline) */
  isBarExpanded: boolean;
};

export type ComparisonAction =
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number }
  | { type: "CLEAR_ALL" }
  | { type: "OPEN_MODAL" }
  | { type: "CLOSE_MODAL" }
  | { type: "TOGGLE_BAR_EXPANDED" }
  | { type: "HYDRATE"; ids: number[] };
