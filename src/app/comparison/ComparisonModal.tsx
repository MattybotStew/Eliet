import { useEffect, useRef, Fragment } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useComparison } from "./ComparisonContext";
import { COMPARISON_CATEGORIES, getComparisonData } from "./comparisonSpecs";

const ORANGE = "#ef7d00";
const DARK = "#0f0f12";
const DIFF_BG = "#fef3e8"; // matches YITH “highlight differences” theming (#yith-woocompare-table td.different)

/**
 * Overlay comparison table — mirrors YITH “full-overlay modal” table mode
 * (#yith-woocompare / #yith-woocompare-table).
 * Spec rows = WooCommerce attributes enabled in YITH → Compare → Fields to show.
 */
export function ComparisonModal() {
  const { state, closeModal, remove, clearAll } = useComparison();
  const products = getComparisonData(state.selectedIds);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [state.isModalOpen]);

  // Escape to close (YITH popup also dismisses)
  useEffect(() => {
    if (!state.isModalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state.isModalOpen, closeModal]);

  const handleRemove = (id: number) => {
    remove(id);
    if (products.length <= 1) {
      closeModal();
    }
  };

  return (
    <AnimatePresence>
      {state.isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center" id="yith-woocompare">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => products.length > 0 && closeModal()}
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-[1440px] mx-4 md:mx-8 mt-12 md:mt-16 mb-8 max-h-[90vh] flex flex-col rounded-2xl overflow-hidden"
            style={{ backgroundColor: "white", boxShadow: "0 24px 80px rgba(0,0,0,0.5)" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="compare-modal-title"
          >
            {/* Header */}
            <div className="shrink-0 flex items-center justify-between px-6 md:px-8 py-4 border-b border-[#eee]">
              <div className="flex items-center gap-4">
                <h2
                  id="compare-modal-title"
                  className="font-['Overpass',sans-serif] font-extrabold text-[20px] md:text-[24px] text-[#131316] uppercase tracking-[-0.5px]"
                >
                  Compare Products
                </h2>
                <span className="font-['Overpass',sans-serif] text-[12px] text-[#999] bg-[#f4f4f4] px-3 py-1 rounded-full font-semibold">
                  {products.length} selected
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={clearAll}
                  className="font-['Overpass',sans-serif] text-[12px] text-[#888] hover:text-[#131316] uppercase tracking-[1px] font-semibold transition-colors"
                >
                  Clear all
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#f4f4f4] transition-colors"
                  aria-label="Close comparison"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 3L13 13M13 3L3 13" stroke="#666" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto" ref={scrollRef}>
              {products.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                  <p className="font-['Overpass',sans-serif] text-[16px] text-[#999]">No products to compare.</p>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-3 rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-white"
                    style={{ backgroundColor: ORANGE }}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="p-4 md:p-8 overflow-x-auto" style={{ scrollbarWidth: "thin" }}>
                  {/* Classic YITH attribute table: products as columns, attributes as rows */}
                  <table
                    id="yith-woocompare-table"
                    className="w-full border-collapse font-['Overpass',sans-serif]"
                  >
                    <thead>
                      <tr>
                        <th
                          className="sticky left-0 z-20 text-left px-4 py-3 font-bold text-[12px] uppercase tracking-[1px] text-white"
                          style={{ backgroundColor: DARK, minWidth: 160 }}
                        >
                          Spec
                        </th>
                        {products.map((p) => (
                          <th
                            key={p.id}
                            className="px-4 py-4 text-center align-top font-normal"
                            style={{ backgroundColor: DARK, minWidth: 200 }}
                          >
                            <div className="flex flex-col items-center gap-3">
                              <div className="w-full max-w-[180px] aspect-[4/3] rounded-lg overflow-hidden bg-white/10 relative">
                                <img
                                  src={p.image}
                                  alt={p.name}
                                  className="absolute inset-0 w-full h-full object-cover"
                                />
                              </div>
                              <span className="font-bold text-[14px] text-white uppercase tracking-[0.5px] leading-tight">
                                {p.name}
                              </span>
                              <span className="text-[11px] font-semibold tracking-[1px] uppercase" style={{ color: ORANGE }}>
                                {p.sku}
                              </span>
                              <button
                                type="button"
                                className="px-4 py-2 rounded-full font-bold text-[11px] uppercase tracking-[1.5px] text-white hover:brightness-110 transition-all"
                                style={{ backgroundColor: ORANGE }}
                              >
                                Request a Demo →
                              </button>
                              <button
                                type="button"
                                onClick={() => handleRemove(p.id)}
                                className="text-[11px] text-white/50 hover:text-white uppercase tracking-[1px] transition-colors"
                              >
                                Remove
                              </button>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {COMPARISON_CATEGORIES.map((category) => (
                        <Fragment key={category.category}>
                          <tr>
                            <td
                              colSpan={products.length + 1}
                              className="font-extrabold text-[12px] uppercase tracking-[2px] px-4 py-3.5"
                              style={{
                                color: ORANGE,
                                backgroundColor: `${ORANGE}08`,
                                borderBottom: `2px solid ${ORANGE}30`,
                              }}
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
                                  className="sticky left-0 z-10 text-left font-bold text-[12px] text-[#888] uppercase tracking-[0.5px] px-4 py-3.5 whitespace-nowrap bg-white"
                                  style={{ minWidth: 160 }}
                                  title={row.wcSlug}
                                >
                                  {row.label}
                                </th>
                                {products.map((p) => {
                                  const val = p.specs[row.key] || "—";
                                  return (
                                    <td
                                      key={p.id}
                                      className={`text-[13px] px-4 py-3.5 leading-relaxed text-center ${
                                        isDifferent ? "different font-semibold text-[#131316]" : "font-normal text-[#444]"
                                      }`}
                                      style={{
                                        backgroundColor: isDifferent ? DIFF_BG : "transparent",
                                        minWidth: 200,
                                      }}
                                    >
                                      {val}
                                    </td>
                                  );
                                })}
                              </tr>
                            );
                          })}
                        </Fragment>
                      ))}
                    </tbody>
                  </table>

                  <p className="font-['Overpass',sans-serif] text-[11px] text-[#bbb] mt-6 px-1">
                    Specifications subject to change without notice. Contact your dealer for current production
                    specifications. In production, this table is powered by{" "}
                    <span className="text-[#999]">YITH WooCommerce Compare</span> product attributes.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
