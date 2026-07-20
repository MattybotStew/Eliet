import { motion, AnimatePresence } from "motion/react";
import { useComparison } from "./ComparisonContext";
import { getComparisonData, PREVIEW_SPEC_KEYS } from "./comparisonSpecs";

const ORANGE = "#ef7d00";
const DARK = "#0f0f12";

const PREVIEW_LABELS: Record<(typeof PREVIEW_SPEC_KEYS)[number], string> = {
  engine: "Engine",
  power: "Power",
  weight: "Weight",
};

/**
 * YITH sticky preview bar (premium / free 3.0+).
 * Shows selected products + CTA to open the comparison table.
 * Eliet enhancement: optional inline headline-spec preview (engine / power / weight).
 */
export function ComparisonBar() {
  const { state, remove, clearAll, openModal, toggleBarExpanded, maxCompare } = useComparison();
  const products = getComparisonData(state.selectedIds);
  const canCompare = products.length >= 2;

  return (
    <AnimatePresence>
      {state.selectedIds.length > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="yith-woocompare-preview-bar fixed bottom-0 left-0 right-0 z-50 shadow-2xl"
          style={{ backgroundColor: DARK, borderTop: `3px solid ${ORANGE}` }}
          role="region"
          aria-label="Product comparison tray"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-3">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              {/* Product chips + empty slots (YITH-style capacity hint) */}
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <span className="font-['Overpass',sans-serif] text-[11px] sm:text-[12px] text-white/60 font-semibold uppercase tracking-[1px] whitespace-nowrap">
                  Compare ({state.selectedIds.length}/{maxCompare})
                </span>
                <div className="flex items-center gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
                  {products.map((p) => (
                    <div
                      key={p.id}
                      className="relative group flex items-center gap-2 bg-white/10 rounded-lg px-2 py-1.5 shrink-0"
                    >
                      <div className="w-8 h-8 rounded overflow-hidden bg-[#f8f8f8] shrink-0">
                        <img src={p.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <span className="font-['Overpass',sans-serif] text-[12px] text-white/80 max-w-[100px] truncate hidden sm:block">
                        {p.name}
                      </span>
                      <button
                        type="button"
                        onClick={() => remove(p.id)}
                        className="w-4 h-4 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/40 transition-colors shrink-0"
                        aria-label={`Remove ${p.name} from comparison`}
                      >
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1 1L7 7M7 1L1 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  ))}
                  {/* Empty slots */}
                  {Array.from({ length: maxCompare - products.length }).map((_, i) => (
                    <div
                      key={`slot-${i}`}
                      className="w-10 h-10 rounded-lg border border-dashed border-white/20 shrink-0 hidden sm:block"
                      aria-hidden
                    />
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                {products.length >= 2 && (
                  <button
                    type="button"
                    onClick={toggleBarExpanded}
                    className="font-['Overpass',sans-serif] text-[11px] text-white/50 hover:text-white/80 uppercase tracking-[1px] font-semibold transition-colors hidden md:inline"
                    aria-expanded={state.isBarExpanded}
                  >
                    {state.isBarExpanded ? "Hide specs" : "Quick specs"}
                  </button>
                )}
                <button
                  type="button"
                  onClick={clearAll}
                  className="font-['Overpass',sans-serif] text-[11px] text-white/50 hover:text-white/80 uppercase tracking-[1px] font-semibold transition-colors"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={openModal}
                  disabled={!canCompare}
                  className="px-4 sm:px-5 py-2.5 rounded-full font-['Overpass',sans-serif] font-bold text-[11px] sm:text-[12px] uppercase tracking-[1.5px] text-white transition-all duration-200 hover:brightness-110 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed"
                  style={{ backgroundColor: ORANGE, boxShadow: canCompare ? `0 4px 16px ${ORANGE}40` : "none" }}
                  title={canCompare ? "Open comparison table" : "Select at least 2 products"}
                >
                  Compare Now →
                </button>
              </div>
            </div>

            {/* Live headline-spec preview (Eliet theme on top of YITH bar) */}
            <AnimatePresence>
              {state.isBarExpanded && products.length >= 2 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 mt-3 border-t border-white/10 grid gap-3" style={{ gridTemplateColumns: `repeat(${products.length}, minmax(0, 1fr))` }}>
                    {products.map((p) => (
                      <div key={p.id} className="min-w-0">
                        <p className="font-['Overpass',sans-serif] text-[11px] font-bold text-white/90 uppercase tracking-[0.5px] truncate mb-1.5">
                          {p.name}
                        </p>
                        <dl className="space-y-1">
                          {PREVIEW_SPEC_KEYS.map((key) => {
                            const values = products.map((x) => x.specs[key] || "—");
                            const different = new Set(values).size > 1;
                            return (
                              <div key={key} className="flex gap-2 text-[11px] font-['Overpass',sans-serif]">
                                <dt className="text-white/40 uppercase tracking-[0.5px] shrink-0 w-14">
                                  {PREVIEW_LABELS[key]}
                                </dt>
                                <dd
                                  className="truncate"
                                  style={{ color: different ? ORANGE : "rgba(255,255,255,0.75)" }}
                                >
                                  {p.specs[key] || "—"}
                                </dd>
                              </div>
                            );
                          })}
                        </dl>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
