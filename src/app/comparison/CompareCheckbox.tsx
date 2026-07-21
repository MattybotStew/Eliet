import { useComparison } from "./ComparisonContext";

const ORANGE = "#ef7d00";

/**
 * Extify Advanced Product Comparison — checkbox + label pattern
 * (WooCommerce → Settings → Display Format: Checkbox).
 * Matches the plugin's default checkbox + "Compare" / "Added" label.
 */
export function CompareCheckbox({ productId }: { productId: number }) {
  const { isSelected, toggle, isMaxed } = useComparison();
  const selected = isSelected(productId);
  const disabled = !selected && isMaxed;

  return (
    <label
      className={`inline-flex items-center gap-1.5 cursor-pointer select-none transition-opacity duration-150 ${
        disabled ? "opacity-40 pointer-events-none" : ""
      }`}
      aria-disabled={disabled}
      onClick={(e) => e.stopPropagation()}
    >
      <span
        className="relative w-4 h-4 rounded-sm border transition-colors duration-150 flex items-center justify-center shrink-0"
        style={{
          backgroundColor: selected ? ORANGE : "#fff",
          borderColor: selected ? ORANGE : "#ccc",
        }}
      >
        {selected && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M2 5L4.5 7.5L8 2.5"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <input
        type="checkbox"
        checked={selected}
        disabled={disabled}
        onChange={() => {
          if (!disabled) toggle(productId);
        }}
        className="sr-only"
        aria-label={selected ? "Remove from comparison" : "Add to comparison"}
      />
      <span
        className="font-['Overpass',sans-serif] text-[11px] font-bold uppercase tracking-[1px]"
        style={{ color: selected ? ORANGE : "#555" }}
      >
        {selected ? "Added" : "Compare"}
      </span>
    </label>
  );
}
