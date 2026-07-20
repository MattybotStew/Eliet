import { Fragment } from "react";
import { useComparison } from "./ComparisonContext";
import { CompareCheckbox } from "./CompareCheckbox";
import { COMPARISON_CATEGORIES, getComparisonData, getRelatedInCategory } from "./comparisonSpecs";

const ORANGE = "#ef7d00";
const DIFF_BG = "#fef3e8";

/**
 * YITH Compare — dedicated page mode (#yith-woocompare-table on a full page).
 * Related products sit above the table so they’re visible without scrolling past all attributes.
 */
export function ComparisonPage({ setPage }: { setPage: (p: "home" | "products") => void }) {
  const { state, remove, clearAll } = useComparison();
  const products = getComparisonData(state.selectedIds);
  const related = getRelatedInCategory(state.selectedIds, 8);
  const relatedCategory = related[0]?.category;

  const relatedStrip =
    related.length > 0 ? (
      <section
        className="mb-8 rounded-lg border border-[#eee] bg-[#fafafa] px-4 py-5 sm:px-5"
        aria-labelledby="yith-related-heading"
      >
        <div className="mb-4">
          <h2
            id="yith-related-heading"
            className="font-['Overpass',sans-serif] font-bold text-[16px] sm:text-[18px] text-[#333]"
          >
            Related products
          </h2>
          <p className="font-['Overpass',sans-serif] text-[13px] text-[#888] mt-1">
            More from {relatedCategory} — tick Compare to add (max 3)
          </p>
        </div>
        <div
          className="flex gap-3 overflow-x-auto pb-1 -mx-1 px-1"
          style={{ scrollbarWidth: "thin" }}
        >
          {related.map((p) => (
            <div
              key={p.id}
              className="shrink-0 w-[148px] bg-white border border-[#e5e5e5] p-2.5 flex flex-col gap-2"
            >
              <div className="relative w-full aspect-[4/3] bg-[#f5f5f5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <p className="font-['Overpass',sans-serif] font-bold text-[11px] text-[#222] uppercase tracking-[0.3px] leading-tight line-clamp-2 min-h-[2.4em]">
                {p.name}
              </p>
              <p className="font-['Overpass',sans-serif] text-[10px] text-[#999] truncate">{p.engine}</p>
              <CompareCheckbox productId={p.id} />
            </div>
          ))}
        </div>
      </section>
    ) : null;

  return (
    <div id="yith-woocompare" className="bg-white w-full min-h-[60vh]">
      {/* Breadcrumb */}
      <div className="border-b border-[#eee] w-full px-6 md:px-12 lg:px-20 py-4">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-['Overpass',sans-serif] text-[14px] text-[#777]">
            <button
              type="button"
              onClick={() => setPage("home")}
              className="hover:underline transition-colors"
              style={{ color: ORANGE }}
            >
              Home
            </button>
            <span> / </span>
            <button
              type="button"
              onClick={() => setPage("products")}
              className="hover:underline transition-colors"
              style={{ color: ORANGE }}
            >
              Products
            </button>
            <span> / Compare</span>
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 lg:px-8 py-8 md:py-10">
        {/* Page title bar — YITH table header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#e5e5e5]">
          <h1 className="font-['Overpass',sans-serif] font-bold text-[24px] md:text-[28px] text-[#333]">
            Compare products
          </h1>
          <div className="flex items-center gap-4">
            {products.length > 0 && (
              <button
                type="button"
                onClick={clearAll}
                className="font-['Overpass',sans-serif] text-[13px] text-[#888] hover:text-[#333] transition-colors"
              >
                Clear all
              </button>
            )}
            <button
              type="button"
              onClick={() => setPage("products")}
              className="font-['Overpass',sans-serif] text-[13px] font-semibold hover:opacity-70 transition-opacity"
              style={{ color: ORANGE }}
            >
              ← Continue shopping
            </button>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-['Overpass',sans-serif] text-[16px] text-[#999] mb-6">
              No products to compare.
            </p>
            <button
              type="button"
              onClick={() => setPage("products")}
              className="px-6 py-3 font-['Overpass',sans-serif] font-bold text-[12px] uppercase tracking-[1px] text-white"
              style={{ backgroundColor: ORANGE }}
            >
              Browse products
            </button>
          </div>
        ) : (
          <>
            {/* Related above table — visible without scrolling past all attribute rows */}
            {relatedStrip}

            <div className="overflow-x-auto border border-[#eee]" style={{ scrollbarWidth: "thin" }}>
              <table
                id="yith-woocompare-table"
                className="w-full border-collapse font-['Overpass',sans-serif] text-[13px]"
              >
                <tbody>
                  {/* Image row */}
                  <tr className="border-b border-[#eee]">
                    <th
                      scope="row"
                      className="sticky left-0 z-10 bg-white text-left font-semibold text-[#888] uppercase tracking-[0.5px] text-[11px] px-4 py-4 w-[140px] border-r border-[#eee]"
                    >
                      &nbsp;
                    </th>
                    {products.map((p) => (
                      <td key={p.id} className="px-4 py-4 text-center align-top min-w-[200px]">
                        <div className="relative inline-block w-[160px] aspect-[4/3] bg-[#f5f5f5] overflow-hidden mx-auto">
                          <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover" />
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

                  {/* Title */}
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

                  {/* SKU */}
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

                  <tr className="border-b border-[#eee]">
                    <th
                      scope="row"
                      className="sticky left-0 z-10 bg-white text-left font-semibold text-[#888] uppercase tracking-[0.5px] text-[11px] px-4 py-4 border-r border-[#eee]"
                    >
                      &nbsp;
                    </th>
                    {products.map((p) => (
                      <td key={p.id} className="px-4 py-4 text-center">
                        <button
                          type="button"
                          className="px-4 py-2 font-['Overpass',sans-serif] font-bold text-[11px] uppercase tracking-[1px] text-white"
                          style={{ backgroundColor: ORANGE }}
                        >
                          Request a Demo
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
    </div>
  );
}
