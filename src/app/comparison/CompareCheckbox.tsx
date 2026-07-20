import { motion } from "motion/react";
import { useComparison } from "./ComparisonContext";

const ORANGE = "#ef7d00";

/**
 * YITH Compare button (checkbox layout).
 * Production: YITH → Compare → “Compare option as checkbox / button”.
 * Place on shop loop cards and single product (YITH supports both).
 */
export function CompareCheckbox({ productId }: { productId: number }) {
  const { isSelected, toggle, isMaxed } = useComparison();
  const selected = isSelected(productId);
  const disabled = !selected && isMaxed;

  return (
    <motion.button
      type="button"
      whileTap={disabled ? undefined : { scale: 0.94 }}
      animate={selected ? { scale: [1, 1.06, 1] } : { scale: 1 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      onClick={(e) => {
        e.stopPropagation();
        if (!disabled) toggle(productId);
      }}
      disabled={disabled}
      className="compare-button flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-colors duration-200 text-[11px] font-['Overpass',sans-serif] font-bold uppercase tracking-[1.2px] disabled:opacity-40 disabled:cursor-not-allowed"
      style={{
        backgroundColor: selected ? ORANGE : "#131316",
        color: "white",
        boxShadow: selected ? `0 4px 14px ${ORANGE}50` : "0 2px 8px rgba(0,0,0,0.12)",
      }}
      aria-pressed={selected}
      aria-label={selected ? "Remove from comparison" : "Add to comparison"}
    >
      <span
        className="w-[18px] h-[18px] rounded flex items-center justify-center shrink-0"
        style={{
          backgroundColor: selected ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.12)",
          border: "1.5px solid rgba(255,255,255,0.45)",
        }}
      >
        {selected && (
          <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden>
            <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span>{selected ? "Comparing" : "Compare"}</span>
    </motion.button>
  );
}
