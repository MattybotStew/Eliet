import { useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useComparison } from "./ComparisonContext";
import { CompareCheckbox } from "./CompareCheckbox";
import { COMPARISON_CATEGORIES, getComparisonData, getRelatedInCategory } from "./comparisonSpecs";

const ORANGE = "#ef7d00";
const DIFF_BG = "#fef3e8";

/**
 * Extify Advanced Product Comparison — comparison popup / widget.
 * Opens automatically when a product is added; sticky bar re-opens it.
 * Spec: https://woocommerce.com/products/advanced-product-comparison/
 */
export function ComparisonPopup() {
  const { state, closePopup, remove, clearAll } = useComparison();
  const products = getComparisonData(state.selectedIds);
  const related = getRelatedInCategory(state.selectedIds, 6);
  const relatedCategory = related[0]?.category;

  useEffect(() => {
    if (state.isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [state.isPopupOpen]);

  useEffect(() => {
    if (!state.isPopupOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state.isPopupOpen, closePopup]);

  return (
    <AnimatePresence>
      {state.isPopupOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          id="exppc-comparison-popup"
          role="dialog"
          aria-modal="true"
          aria-labelledby="exppc-popup-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60"
            onClick={closePopup}
          />

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-[1100px] max-h-[90vh] flex flex-col bg-white shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="shrink-0 flex items-center justify-between px-5 py-3.5 border-b border-[#e5e5e5] bg-[#f7f7f7]">
              <h2
                id="exppc-popup-title"
                className="font-['Overpass',sans-serif] font-bold text-[16px] sm:text-[18px] text-[#333]"
              >
                Compare products
                <span className="font-normal text-[#888] text-[13px] ml-2">
                  ({products.length}/3)
                </span>
              </h2>
              <div className="flex items-center gap-3">
                {products.length > 0 && (
                  <button
                    type="button"
                    onClick={clearAll}
                    className="font-['Overpass',sans-serif] text-[12px] text-[#888] hover:text-[#333] transition-colors"
                  >
                    Clear all
                  </button>
                )}
                <button
                  type="button"
                  onClick={closePopup}
                  className="w-8 h-8 flex items-center justify-center text-[#666] hover:text-[#111] transition-colors"
                  aria-label="Close comparison"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto">
              {products.length === 0 ? (
                <div className="py-16 text-center font-['Overpass',sans-serif] text-[14px] text-[#999]">
                  No products to compare. Add products from the shop.
                </div>
              ) : (
                <>
                  {/* Related products slider — Extify related products on widget */}
                  {related.length > 0 && (
                    <section className="border-b border-[#eee] bg-[#fafafa] px-4 sm:px-5 py-4">
                      <h3 className="font-['Overpass',sans-serif] font-bold text-[13px] text-[#333] mb-1">
                        Related products
                      </h3>
                      <p className="font-['Overpass',sans-serif] text-[12px] text-[#888] mb-3">
                        More from {relatedCategory}
                      </p>
                      <div className="flex gap-3 overflow-x-auto pb-1" style={{ scrollbarWidth: "thin" }}>
                        {related.map((p) => (
                          <div
                            key={p.id}
                            className="shrink-0 w-[132px] bg-white border border-[#e5e5e5] p-2 flex flex-col gap-1.5"
                          >
                            <div className="relative w-full aspect-[4/3] bg-[#f5f5f5] overflow-hidden">
                              <img
                                src={p.image}
                                alt={p.name}
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                            </div>
                            <p className="font-['Overpass',sans-serif] font-bold text-[10px] text-[#222] uppercase leading-tight line-clamp-2 min-h-[2.2em]">
                              {p.name}
                            </p>
                            <CompareCheckbox productId={p.id} />
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Scroll hint for narrow screens */}
                  <div className="flex items-center gap-2 px-5 py-2 text-[11px] text-[#aaa] font-['Overpass',sans-serif] border-b border-[#eee] sm:hidden">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M4 2L8 6L4 10" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Scroll sideways to see all products
                  </div>
                  <div className="overflow-x-auto" style={{ scrollbarWidth: "thin" }}>
                    <table
                      id="exppc-comparison-table"
                      className="w-full border-collapse font-['Overpass',sans-serif] text-[13px]"
                    >
                      <tbody>
                        <tr className="border-b border-[#eee]">
                          <th
                            scope="row"
                            className="sticky left-0 z-10 bg-white text-left font-semibold text-[#888] uppercase tracking-[0.5px] text-[11px] px-4 py-4 w-[120px] border-r border-[#eee]"
                          >
                            &nbsp;
                          </th>
                          {products.map((p) => (
                            <td key={p.id} className="px-4 py-4 text-center align-top min-w-[180px]">
                              <div className="relative inline-block w-[140px] aspect-[4/3] bg-[#f5f5f5] overflow-hidden mx-auto">
                                <img
                                  src={p.image}
                                  alt={p.name}
                                  className="absolute inset-0 w-full h-full object-cover"
                                />
                              </div>
                              <button
                                type="button"
                                onClick={() => remove(p.id)}
                                className="mt-2 text-[11px] text-[#999] hover:text-[#e74c3c] transition-colors"
                              >
                                Remove
                              </button>
                            </td>
                          ))}
                        </tr>

                        <tr className="border-b border-[#eee]">
                          <th
                            scope="row"
                            className="sticky left-0 z-10 bg-[#fafafa] text-left font-semibold text-[#888] uppercase tracking-[0.5px] text-[11px] px-4 py-3 border-r border-[#eee]"
                          >
                            Title
                          </th>
                          {products.map((p) => (
                            <td key={p.id} className="px-4 py-3 text-center font-bold text-[#222] bg-[#fafafa]">
                              {p.name}
                            </td>
                          ))}
                        </tr>

                        <tr className="border-b border-[#eee]">
                          <th
                            scope="row"
                            className="sticky left-0 z-10 bg-white text-left font-semibold text-[#888] uppercase tracking-[0.5px] text-[11px] px-4 py-3 border-r border-[#eee]"
                          >
                            SKU
                          </th>
                          {products.map((p) => (
                            <td key={p.id} className="px-4 py-3 text-center text-[#555]">
                              {p.sku}
                            </td>
                          ))}
                        </tr>

                        {COMPARISON_CATEGORIES.map((category) => (
                          <Fragment key={category.category}>
                            <tr>
                              <td
                                colSpan={products.length + 1}
                                className="px-4 py-2.5 font-bold text-[11px] uppercase tracking-[1.5px] text-white"
                                style={{ backgroundColor: "#333" }}
                              >
                                {category.category}
                              </td>
                            </tr>
                            {category.rows.map((row) => {
                              const values = products.map((p) => p.specs[row.key] || "—");
                              const isDifferent = values.length > 1 && new Set(values).size > 1;
                              return (
                                <tr key={row.key} className="border-b border-[#eee]">
                                  <th
                                    scope="row"
                                    className="sticky left-0 z-10 bg-white text-left font-semibold text-[#888] uppercase tracking-[0.5px] text-[11px] px-4 py-3 border-r border-[#eee] whitespace-nowrap"
                                    title={row.wcSlug}
                                  >
                                    {row.label}
                                  </th>
                                  {products.map((p) => (
                                    <td
                                      key={p.id}
                                      className={`px-4 py-3 text-center leading-relaxed ${
                                        isDifferent ? "different font-semibold text-[#222]" : "text-[#555]"
                                      }`}
                                      style={{ backgroundColor: isDifferent ? DIFF_BG : undefined }}
                                    >
                                      {p.specs[row.key] || "—"}
                                    </td>
                                  ))}
                                </tr>
                              );
                            })}
                          </Fragment>
                        ))}

                        <tr>
                          <th
                            scope="row"
                            className="sticky left-0 z-10 bg-white px-4 py-4 border-r border-[#eee]"
                          >
                            &nbsp;
                          </th>
                          {products.map((p) => (
                            <td key={p.id} className="px-4 py-4 text-center">
                              <button
                                type="button"
                                className="px-4 py-2 font-['Overpass',sans-serif] font-bold text-[11px] uppercase tracking-[1px] text-white transition-opacity hover:opacity-90"
                                style={{ backgroundColor: ORANGE }}
                                title={`View ${p.name}`}
                              >
                                View {p.name.split(" ")[0]} →
                              </button>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
