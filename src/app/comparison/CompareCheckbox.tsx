import { useComparison } from "./ComparisonContext";

/**
 * YITH Compare control — checkbox layout (YITH 3.0+ default option).
 * Shop loop + single product use the same control.
 */
export function CompareCheckbox({ productId }: { productId: number }) {
  const { isSelected, toggle, isMaxed } = useComparison();
  const selected = isSelected(productId);
  const disabled = !selected && isMaxed;

  return (
    <label
      className="compare-button inline-flex items-center gap-2 cursor-pointer select-none"
      onClick={(e) => e.stopPropagation()}
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={selected}
        disabled={disabled}
        onChange={() => {
          if (!disabled) toggle(productId);
        }}
        aria-label={selected ? "Remove from comparison" : "Compare"}
      />
      <span
        className="w-[16px] h-[16px] rounded-[3px] flex items-center justify-center shrink-0 transition-colors"
        style={{
          border: `1.5px solid ${selected ? "#ef7d00" : "#bbb"}`,
          backgroundColor: selected ? "#ef7d00" : "#fff",
          opacity: disabled ? 0.4 : 1,
        }}
        aria-hidden
      >
        {selected && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span
        className="font-['Overpass',sans-serif] text-[12px] font-semibold transition-colors"
        style={{ color: selected ? "#ef7d00" : disabled ? "#bbb" : "#555" }}
      >
        {selected ? "Added" : "Compare"}
      </span>
    </label>
  );
}
