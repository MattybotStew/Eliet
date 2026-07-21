import { useComparison } from "./ComparisonContext";

const ORANGE = "#ef7d00";

/**
 * Extify Advanced Product Comparison — styled Compare button
 * (WooCommerce → Settings → Display Format: Styled Button).
 */
export function CompareCheckbox({ productId }: { productId: number }) {
  const { isSelected, toggle, isMaxed } = useComparison();
  const selected = isSelected(productId);
  const disabled = !selected && isMaxed;

  return (
    <button
      type="button"
      className="compare-button inline-flex items-center justify-center px-3.5 py-2 font-['Overpass',sans-serif] font-bold text-[11px] uppercase tracking-[1px] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
      style={{
        backgroundColor: selected ? ORANGE : "#131316",
        color: "#fff",
      }}
      disabled={disabled}
      aria-pressed={selected}
      aria-label={selected ? "Remove from comparison" : "Add to comparison"}
      onClick={(e) => {
        e.stopPropagation();
        if (!disabled) toggle(productId);
      }}
    >
      {selected ? "Added ✓" : "Compare"}
    </button>
  );
}
