import { motion, AnimatePresence } from "motion/react";
import { useComparison } from "./ComparisonContext";
import { getComparisonData } from "./comparisonSpecs";

const ORANGE = "#ef7d00";

/**
 * YITH sticky / preview bar — products + button to open the Compare page.
 * Hidden while already on the Compare page.
 */
export function ComparisonBar({ hidden = false }: { hidden?: boolean }) {
  const { state, remove, clearAll, openCompare } = useComparison();
  const products = getComparisonData(state.selectedIds);
  const visible = !hidden && state.selectedIds.length > 0;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="yith-woocompare-preview-bar fixed bottom-0 left-0 right-0 z-50"
          style={{
            backgroundColor: "#fff",
            borderTop: "1px solid #e5e5e5",
            boxShadow: "0 -4px 24px rgba(0,0,0,0.08)",
          }}
          role="region"
          aria-label="Compare products"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
              <span className="font-['Overpass',sans-serif] text-[13px] font-bold text-[#333] whitespace-nowrap shrink-0">
                Compare products
                <span className="font-normal text-[#888] ml-1">({products.length})</span>
              </span>

              <div className="flex items-center gap-2">
                {products.map((p) => (
                  <div
                    key={p.id}
                    className="relative flex items-center gap-2 border border-[#eee] rounded bg-[#fafafa] pl-1.5 pr-2 py-1.5 shrink-0"
                  >
                    <div className="w-9 h-9 rounded overflow-hidden bg-white shrink-0">
                      <img src={p.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-['Overpass',sans-serif] text-[12px] text-[#444] max-w-[110px] truncate hidden sm:block">
                      {p.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => remove(p.id)}
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[#999] hover:text-[#333] hover:bg-[#eee] transition-colors shrink-0"
                      aria-label={`Remove ${p.name}`}
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 1L7 7M7 1L1 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={clearAll}
                className="font-['Overpass',sans-serif] text-[12px] text-[#888] hover:text-[#333] transition-colors hidden sm:inline"
              >
                Clear all
              </button>
              <button
                type="button"
                onClick={openCompare}
                className="px-5 py-2.5 font-['Overpass',sans-serif] font-bold text-[12px] uppercase tracking-[0.5px] text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: ORANGE }}
              >
                Compare
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
