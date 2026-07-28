import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CompareCheckbox } from "./comparison/CompareCheckbox";
import { CATALOG } from "./products";

const ORANGE = "#ef7d00";
const DARK = "#0f0f12";

type SetPage = (page: string) => void;

type NavChild = { label: string; page: string; category?: string; anchor?: string };
type NavItem = { label: string; page?: string; children?: NavChild[] };

function Section({
  id,
  title,
  note,
  children,
}: {
  id: string;
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-b border-[#eee] py-14 last:border-0">
      <div className="mb-8 max-w-3xl">
        <p className="font-['Overpass',sans-serif] font-bold text-[11px] uppercase tracking-[2px] mb-2" style={{ color: ORANGE }}>
          {id}
        </p>
        <h2 className="font-['Overpass',sans-serif] font-extrabold text-[28px] sm:text-[32px] md:text-[36px] min-[1201px]:text-[42px] uppercase tracking-[-0.5px] leading-tight">
          {title}
        </h2>
        {note && (
          <p className="mt-3 font-['Overpass',sans-serif] text-[15px] text-[#666] leading-relaxed">{note}</p>
        )}
      </div>
      {children}
    </section>
  );
}

function Swatch({ name, value, onDark }: { name: string; value: string; onDark?: boolean }) {
  return (
    <div className="flex flex-col gap-2 min-w-[140px]">
      <div
        className="h-20 rounded-xl border border-black/10"
        style={{ backgroundColor: value }}
      />
      <p className={`font-['Overpass',sans-serif] font-bold text-[12px] uppercase tracking-[1px] ${onDark ? "text-white" : "text-[#131316]"}`}>
        {name}
      </p>
      <p className={`font-['Overpass',sans-serif] text-[13px] ${onDark ? "text-white/50" : "text-[#888]"}`}>{value}</p>
    </div>
  );
}

function LabFaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e5e5e5]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
      >
        <span className="font-['Overpass',sans-serif] font-semibold text-[15px] text-[#131316]">{q}</span>
        <span className="font-['Overpass',sans-serif] text-[18px] shrink-0" style={{ color: ORANGE }}>
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="pb-4 font-['Overpass',sans-serif] text-[14px] text-[#666] leading-relaxed">{a}</p>
      )}
    </div>
  );
}

const DS_NAV = [
  { href: "#colors", label: "Colors" },
  { href: "#typography", label: "Typography" },
  { href: "#buttons", label: "Buttons" },
  { href: "#pills", label: "Pills" },
  { href: "#forms", label: "Forms" },
  { href: "#faq", label: "FAQ" },
  { href: "#compare", label: "Compare" },
  { href: "#spacing", label: "Spacing" },
];

/** Design system reference for WordPress / Elementor / Astra build team. */
export function DesignSystemPage({ setPage }: { setPage: SetPage }) {
  const [pill, setPill] = useState("ALL");
  const pills = ["ALL", "SHREDDERS", "DETHATCHERS", "OVERSEEDERS", "TOP DRESSERS"];

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#131316] text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <p className="font-['Overpass',sans-serif] font-bold text-[11px] uppercase tracking-[2px] mb-3" style={{ color: ORANGE }}>
            For the build team
          </p>
          <h1 className="font-['Overpass',sans-serif] font-extrabold text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] min-[1201px]:text-[64px] uppercase leading-none tracking-[-1.5px] mb-5">
            Design System
          </h1>
          <p className="font-['Overpass',sans-serif] text-[16px] sm:text-[18px] md:text-[20px] min-[1201px]:text-[22px] text-white/65 max-w-2xl leading-relaxed mb-8">
            Living reference for tokens, type, and UI controls used in the ELIET prototype.
            Pair with <code className="text-white/90">wordpress/HANDOFF.md</code>,{" "}
            <code className="text-white/90">eliet-tokens.css</code>, and{" "}
            <code className="text-white/90">eliet-components.css</code>.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => { setPage("nav-lab"); window.scrollTo({ top: 0 }); }}
              className="px-6 py-3 rounded-full bg-white font-['Overpass',sans-serif] font-bold text-[12px] uppercase tracking-[1.5px] text-[#131316] hover:opacity-90 transition-opacity"
            >
              Navigation lab →
            </button>
            <a
              href="https://mattybotstew.github.io/Eliet/"
              className="px-6 py-3 rounded-full border border-white/25 font-['Overpass',sans-serif] font-bold text-[12px] uppercase tracking-[1.5px] text-white hover:border-[#ef7d00] hover:text-[#ef7d00] transition-colors"
            >
              Live prototype
            </a>
          </div>
        </div>
      </div>

      <div className="sticky top-[70px] z-30 bg-white/95 backdrop-blur border-b border-[#eee]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex gap-2 overflow-x-auto py-3" style={{ scrollbarWidth: "none" }}>
          {DS_NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 min-h-10 inline-flex items-center px-3.5 py-2 rounded-full font-['Overpass',sans-serif] text-[11px] font-bold uppercase tracking-[1px] text-[#666] hover:text-[#131316] hover:bg-[#f3f3f5] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <Section id="colors" title="Color palette" note="Brand orange #ef7d00 is the only accent. Header / footer chrome uses near-black surfaces.">
          <div className="flex flex-wrap gap-6 mb-8">
            <Swatch name="Brand orange" value={ORANGE} />
            <Swatch name="Header dark" value="#131316" />
            <Swatch name="Page dark" value={DARK} />
            <Swatch name="Footer" value="#0a0a0d" />
            <Swatch name="White" value="#ffffff" />
            <Swatch name="Muted bg" value="#ececf0" />
            <Swatch name="Muted text" value="#717182" />
            <Swatch name="Compare diff" value="#fef3e8" />
          </div>
          <div className="rounded-2xl p-8" style={{ backgroundColor: "#131316" }}>
            <p className="font-['Overpass',sans-serif] text-[13px] text-white/40 mb-6 uppercase tracking-[2px]">On dark surfaces</p>
            <div className="flex flex-wrap gap-6">
              <Swatch name="Orange" value={ORANGE} onDark />
              <Swatch name="White" value="#ffffff" onDark />
              <Swatch name="White 65%" value="rgba(255,255,255,0.65)" onDark />
              <Swatch name="White 35%" value="rgba(255,255,255,0.35)" onDark />
            </div>
          </div>
        </Section>

        <Section id="typography" title="Typography" note="Font: Overpass (100–900). Headlines are uppercase extrabold; UI labels use bold + letter-spacing.">
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-['Overpass',sans-serif] text-[11px] text-[#999] uppercase tracking-[2px] mb-2">Display / hero</p>
              <p className="font-['Overpass',sans-serif] font-extrabold text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] min-[1201px]:text-[64px] xl:text-[72px] uppercase leading-none tracking-[-2px] text-[#131316]">
                Serious Support.
              </p>
            </div>
            <div>
              <p className="font-['Overpass',sans-serif] text-[11px] text-[#999] uppercase tracking-[2px] mb-2">Section H2</p>
              <p className="font-['Overpass',sans-serif] font-extrabold text-[28px] sm:text-[32px] min-[1201px]:text-[36px] uppercase tracking-[-0.5px] text-[#131316]">
                Why Professionals Choose ELIET
              </p>
            </div>
            <div>
              <p className="font-['Overpass',sans-serif] text-[11px] text-[#999] uppercase tracking-[2px] mb-2">Body</p>
              <p className="font-['Overpass',sans-serif] text-[16px] md:text-[18px] text-[#444] leading-relaxed max-w-xl">
                Engineered for professionals. Built to last. Family-owned since 1980.
              </p>
            </div>
            <div>
              <p className="font-['Overpass',sans-serif] text-[11px] text-[#999] uppercase tracking-[2px] mb-2">Nav / UI label</p>
              <p className="font-['Overpass',sans-serif] font-normal text-[13px] uppercase tracking-[0.5px] text-[#131316]">
                Products · Service · Where to Find ELIET
              </p>
            </div>
            <div>
              <p className="font-['Overpass',sans-serif] text-[11px] text-[#999] uppercase tracking-[2px] mb-2">Button label</p>
              <p className="font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-[#131316]">
                Book a Demo →
              </p>
            </div>
          </div>
        </Section>

        <Section id="buttons" title="Buttons" note="Primary CTAs on dark heroes are white pills; brand actions use orange. Radius is fully rounded (pill).">
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="px-7 py-4 bg-white rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-[#131316] border border-[#ddd] hover:scale-105 transition-transform"
            >
              Primary light
            </button>
            <button
              type="button"
              className="px-7 py-4 rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: ORANGE }}
            >
              Brand orange
            </button>
            <button
              type="button"
              className="px-7 py-4 rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-[#131316] border border-[#131316]/25 hover:border-[#ef7d00] hover:text-[#ef7d00] transition-colors"
            >
              Outline
            </button>
            <div className="rounded-2xl px-6 py-5 flex flex-wrap gap-3" style={{ backgroundColor: DARK }}>
              <button
                type="button"
                className="px-7 py-4 bg-white rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-[#131316]"
              >
                On dark · primary
              </button>
              <button
                type="button"
                className="px-7 py-4 rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-white border border-white/30 hover:border-[#ef7d00] hover:text-[#ef7d00] transition-colors"
              >
                On dark · ghost
              </button>
            </div>
          </div>
        </Section>

        <Section id="pills" title="Category pills" note="Products filter chips. Active = orange fill; inactive = light gray.">
          <div className="flex flex-wrap gap-2">
            {pills.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPill(p)}
                className="px-4 py-2 rounded-full font-['Overpass',sans-serif] font-bold text-[11px] uppercase tracking-[1px] transition-colors"
                style={
                  pill === p
                    ? { backgroundColor: ORANGE, color: "#fff" }
                    : { backgroundColor: "#ececf0", color: "#444" }
                }
              >
                {p}
              </button>
            ))}
          </div>
          <p className="mt-4 font-['Overpass',sans-serif] text-[13px] text-[#888]">Showing 8 of 71 products</p>
        </Section>

        <Section id="forms" title="Form fields" note='Use type="text" with placeholder mm/dd/yyyy for dates — native date inputs hide placeholders.'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            <input
              className="h-12 px-4 rounded-lg border border-[#ddd] bg-white font-['Overpass',sans-serif] text-[14px] text-[#131316] focus:outline-none focus:border-[#ef7d00] transition-colors w-full"
              placeholder="Your email address"
            />
            <input
              className="h-12 px-4 rounded-lg border border-[#ddd] bg-white font-['Overpass',sans-serif] text-[14px] text-[#131316] focus:outline-none focus:border-[#ef7d00] transition-colors w-full"
              placeholder="mm/dd/yyyy"
            />
            <textarea
              className="md:col-span-2 min-h-[120px] px-4 py-3 rounded-lg border border-[#ddd] bg-white font-['Overpass',sans-serif] text-[14px] text-[#131316] focus:outline-none focus:border-[#ef7d00] transition-colors w-full resize-y"
              placeholder="Message"
            />
          </div>
        </Section>

        <Section id="faq" title="FAQ accordion" note="Click to expand. Match Elementor Accordion behavior.">
          <div className="max-w-2xl">
            <LabFaqItem q="What warranty does ELIET offer?" a="Placeholder — real warranty terms pending from the client." />
            <LabFaqItem q="Where can I find a dealer?" a="Use the Dealer Locator page. Production will use a real dealer list." />
            <LabFaqItem q="How do I compare products?" a="Use Compare on shop cards or PDP (max 3). Maps to Advanced Product Comparison popup mode." />
          </div>
        </Section>

        <Section id="compare" title="Compare control" note="Extify Advanced Product Comparison — popup widget mode, max 3 products.">
          <div className="flex flex-wrap items-center gap-6 p-6 rounded-2xl border border-[#eee] bg-[#f8f8f8] max-w-xl">
            <CompareCheckbox productId={CATALOG[0]?.id ?? 1} />
            <p className="font-['Overpass',sans-serif] text-[13px] text-[#666] max-w-xs">
              Interactive — adds to the sticky compare tray / popup used site-wide.
            </p>
          </div>
        </Section>

        <Section id="spacing" title="Layout & breakpoints" note="Content max width 1440px. Header height 70px. Page content starts below with pt-[70px].">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-['Overpass',sans-serif] text-[14px]">
              <thead>
                <tr className="border-b border-[#ddd]">
                  <th className="py-3 pr-4 font-bold uppercase text-[11px] tracking-[1px] text-[#888]">Token</th>
                  <th className="py-3 pr-4 font-bold uppercase text-[11px] tracking-[1px] text-[#888]">Value</th>
                  <th className="py-3 font-bold uppercase text-[11px] tracking-[1px] text-[#888]">Use</th>
                </tr>
              </thead>
              <tbody className="text-[#333]">
                <tr className="border-b border-[#eee]"><td className="py-3 pr-4">Max width</td><td className="py-3 pr-4 font-mono text-[13px]">1440px</td><td className="py-3">Page content shell</td></tr>
                <tr className="border-b border-[#eee]"><td className="py-3 pr-4">Header</td><td className="py-3 pr-4 font-mono text-[13px]">70px</td><td className="py-3">Fixed top bar</td></tr>
                <tr className="border-b border-[#eee]"><td className="py-3 pr-4">Page gutters</td><td className="py-3 pr-4 font-mono text-[13px]">24 / 48 / 80px</td><td className="py-3">px-6 md:px-12 lg:px-20</td></tr>
                <tr className="border-b border-[#eee]"><td className="py-3 pr-4">Radius</td><td className="py-3 pr-4 font-mono text-[13px]">0.625rem</td><td className="py-3">Cards / inputs; buttons = pill</td></tr>
                <tr className="border-b border-[#eee]"><td className="py-3 pr-4">Mobile</td><td className="py-3 pr-4 font-mono text-[13px]">&lt; 768px</td><td className="py-3">Stacked layouts</td></tr>
                <tr className="border-b border-[#eee]"><td className="py-3 pr-4">Tablet</td><td className="py-3 pr-4 font-mono text-[13px]">768–1024px</td><td className="py-3">Condensed grids</td></tr>
                <tr><td className="py-3 pr-4">Desktop nav</td><td className="py-3 pr-4 font-mono text-[13px]">≥ 1024px (lg)</td><td className="py-3">Horizontal nav + hover dropdowns</td></tr>
              </tbody>
            </table>
          </div>
        </Section>

        <div className="py-16 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => { setPage("nav-lab"); window.scrollTo({ top: 0 }); }}
            className="px-7 py-4 rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-white"
            style={{ backgroundColor: ORANGE }}
          >
            Open navigation lab →
          </button>
          <button
            type="button"
            onClick={() => { setPage("home"); window.scrollTo({ top: 0 }); }}
            className="px-7 py-4 rounded-full border border-[#ddd] font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-[#131316]"
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
}

function DesktopDropdownDemo({ item }: { item: NavItem }) {
  return (
    <div className="rounded-xl border border-white/10 overflow-hidden min-w-[200px]" style={{ backgroundColor: "#1a1a20", boxShadow: "0 12px 40px rgba(0,0,0,0.45)" }}>
      <div className="flex flex-col py-2">
        {item.page && (
          <div className="flex items-center gap-2 px-5 py-2.5 font-['Overpass',sans-serif] font-bold text-[11px] uppercase tracking-[1.5px]" style={{ color: ORANGE }}>
            All {item.label} <span>→</span>
          </div>
        )}
        {item.children?.map((child) => (
          <div
            key={child.label}
            className="text-left px-5 py-2.5 font-['Overpass',sans-serif] text-[13px] text-white/70 whitespace-nowrap border-t border-white/5 first:border-0"
          >
            {child.label}
            {child.anchor ? (
              <span className="text-white/35"> → #{child.anchor}</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileNavDemo({ nav }: { nav: NavItem[] }) {
  const [open, setOpen] = useState(true);
  const [expanded, setExpanded] = useState<string | null>("Products");

  return (
    <div className="mx-auto w-full max-w-[390px] rounded-[28px] border border-[#333] overflow-hidden shadow-2xl" style={{ backgroundColor: "#131316" }}>
      <div className="h-[70px] flex items-center justify-between px-6 border-b border-white/10">
        <span className="font-['Overpass',sans-serif] font-extrabold text-[18px] text-white tracking-wide">ELIET</span>
        <button type="button" className="p-0 min-h-11 min-w-11 inline-flex items-center justify-center text-white/80" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="space-y-1.5 w-5">
            <div className={`h-0.5 bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`h-0.5 bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <div className={`h-0.5 bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#0f0f12]/98"
          >
            <div className="flex flex-col items-stretch py-3 px-6">
              {nav.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                        className="w-full flex items-center text-left text-white/65 text-[13px] uppercase tracking-[0.5px] font-['Overpass',sans-serif] py-3.5 border-b border-white/5"
                      >
                        <span className="flex-1 min-w-0 text-left">{item.label}</span>
                        <span
                          className="w-11 min-w-11 shrink-0 inline-flex items-center justify-center font-['Overpass',sans-serif] text-[18px] leading-none"
                          style={{ color: ORANGE }}
                          aria-hidden="true"
                        >
                          {expanded === item.label ? "−" : "+"}
                        </span>
                      </button>
                      <AnimatePresence>
                        {expanded === item.label && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="flex flex-col py-1 border-b border-white/5">
                              {item.children.map((child) => (
                                <span key={child.label} className="block w-full text-left text-white/50 text-[12px] font-['Overpass',sans-serif] py-2.5">
                                  — {child.label}
                                  {child.anchor ? ` (#${child.anchor})` : ""}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <button
                      type="button"
                      className="w-full justify-start text-left text-white/65 text-[13px] uppercase tracking-[0.5px] font-['Overpass',sans-serif] py-3.5 border-b border-white/5"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="w-full justify-start text-left text-white/65 text-[13px] uppercase tracking-[0.5px] font-['Overpass',sans-serif] py-3.5 border-b border-white/5"
              >
                Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-24 bg-[#1a1a20] flex items-center justify-center">
        <p className="font-['Overpass',sans-serif] text-[11px] text-white/30 uppercase tracking-[2px]">Page content</p>
      </div>
    </div>
  );
}

/** Navigation lab: desktop dropdowns + mobile accordion for Astra/Elementor handoff. */
export function NavigationLabPage({
  setPage,
  navStructure,
}: {
  setPage: SetPage;
  navStructure: NavItem[];
}) {
  const withChildren = navStructure.filter((n) => n.children?.length);

  return (
    <div className="bg-[#f4f4f5] min-h-screen">
      <div className="bg-[#131316] text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <p className="font-['Overpass',sans-serif] font-bold text-[11px] uppercase tracking-[2px] mb-3" style={{ color: ORANGE }}>
            For the build team
          </p>
          <h1 className="font-['Overpass',sans-serif] font-extrabold text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] min-[1201px]:text-[64px] uppercase leading-none tracking-[-1.5px] mb-5">
            Navigation
          </h1>
          <p className="font-['Overpass',sans-serif] text-[16px] sm:text-[18px] md:text-[20px] min-[1201px]:text-[22px] text-white/65 max-w-2xl leading-relaxed mb-6">
            Spec for the sticky header: desktop hover dropdowns, mobile hamburger + accordion,
            Login + search. The live site header above this page is the interactive source of truth —
            hover <strong className="text-white font-semibold">Products</strong> (desktop) or resize below{" "}
            <strong className="text-white font-semibold">1024px</strong> for mobile.
          </p>
          <button
            type="button"
            onClick={() => { setPage("design-system"); window.scrollTo({ top: 0 }); }}
            className="px-6 py-3 rounded-full bg-white font-['Overpass',sans-serif] font-bold text-[12px] uppercase tracking-[1.5px] text-[#131316]"
          >
            ← Design system
          </button>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-14 space-y-16">
        <section>
          <h2 className="font-['Overpass',sans-serif] font-extrabold text-[24px] md:text-[32px] uppercase tracking-[-0.5px] text-[#131316] mb-2">
            Desktop header anatomy
          </h2>
          <p className="font-['Overpass',sans-serif] text-[15px] text-[#666] mb-8 max-w-2xl">
            Fixed bar · 70px · bg <code className="text-[13px]">#131316</code> · no drop shadow.
            Desktop nav hidden below <code className="text-[13px]">lg</code> (1024px).
            Mobile header uses matching <code className="text-[13px]">px-6</code> inset — logo left, close/menu right (44px touch targets, <code className="text-[13px]">p-0</code> on icon buttons).
          </p>
          <div className="rounded-2xl overflow-hidden border border-[#222]" style={{ backgroundColor: "#131316" }}>
            <div className="h-[70px] flex items-center justify-between px-6 md:px-10">
              <div className="flex items-center gap-8">
                <span className="font-['Overpass',sans-serif] font-extrabold text-[18px] text-white">ELIET</span>
                <div className="hidden lg:flex items-center gap-5 font-['Overpass',sans-serif] text-[13px] uppercase tracking-[0.5px] text-white/65">
                  {navStructure.map((item) => (
                    <span key={item.label} className="flex items-center gap-0.5">
                      {item.label}
                      {item.children && <span className="text-[14px] ml-1 leading-none">+</span>}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-5 font-['Overpass',sans-serif] text-[13px] uppercase tracking-[0.5px] text-white/65">
                <span className="hidden md:inline">Login</span>
                <span aria-hidden>⌕</span>
                <span className="lg:hidden text-white">☰</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-['Overpass',sans-serif] font-extrabold text-[24px] md:text-[32px] uppercase tracking-[-0.5px] text-[#131316] mb-2">
            Desktop dropdowns (open state)
          </h2>
          <p className="font-['Overpass',sans-serif] text-[15px] text-[#666] mb-8 max-w-2xl">
            Hover opens panel centered under the parent. Panel: <code className="text-[13px]">#1a1a20</code>,
            12px radius, “All … →” in orange, children at 13px white/70.
          </p>
          <div className="rounded-2xl p-8 md:p-10" style={{ backgroundColor: "#131316" }}>
            <div className="flex flex-wrap gap-6 items-start justify-center lg:justify-start">
              {withChildren.map((item) => (
                <div key={item.label} className="flex flex-col gap-3">
                  <p className="font-['Overpass',sans-serif] text-[13px] uppercase tracking-[0.5px] text-white flex items-center gap-0.5">
                    {item.label}<span className="text-[14px] ml-1 leading-none">+</span>
                  </p>
                  <DesktopDropdownDemo item={item} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-['Overpass',sans-serif] font-extrabold text-[24px] md:text-[32px] uppercase tracking-[-0.5px] text-[#131316] mb-2">
            Mobile navigation
          </h2>
          <p className="font-['Overpass',sans-serif] text-[15px] text-[#666] mb-8 max-w-2xl">
            Hamburger below <code className="text-[13px]">lg</code>. Panel uses the same{" "}
            <code className="text-[13px]">max-w-[1440px] px-6 md:px-12</code> inset as the header —
            link labels align with the ELIET logo (left); accordion +/− sit in a{" "}
            <code className="text-[13px]">44px</code> column aligned with the close X (right).
            Login listed at the bottom (desktop places Login outside the main nav).
          </p>
          <MobileNavDemo nav={navStructure} />
        </section>

        <section>
          <h2 className="font-['Overpass',sans-serif] font-extrabold text-[24px] md:text-[32px] uppercase tracking-[-0.5px] text-[#131316] mb-6">
            Menu map → WordPress
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#e5e5e5] bg-white">
            <table className="w-full text-left font-['Overpass',sans-serif] text-[14px]">
              <thead>
                <tr className="border-b border-[#eee] bg-[#fafafa]">
                  <th className="py-3 px-4 font-bold uppercase text-[11px] tracking-[1px] text-[#888]">Parent</th>
                  <th className="py-3 px-4 font-bold uppercase text-[11px] tracking-[1px] text-[#888]">Children</th>
                  <th className="py-3 px-4 font-bold uppercase text-[11px] tracking-[1px] text-[#888]">Notes</th>
                </tr>
              </thead>
              <tbody>
                {navStructure.map((item) => (
                  <tr key={item.label} className="border-b border-[#f0f0f0] last:border-0">
                    <td className="py-3 px-4 font-semibold text-[#131316] align-top">{item.label}</td>
                    <td className="py-3 px-4 text-[#555] align-top">
                      {item.children
                        ?.map((c) =>
                          c.anchor ? `${c.label} (#${c.anchor})` : c.label,
                        )
                        .join(", ") || "—"}
                    </td>
                    <td className="py-3 px-4 text-[#888] align-top">
                      {item.label === "About"
                        ? "About children with #anchor smooth-scroll on About page"
                        : item.children
                          ? "Astra / Elementor mega or dropdown; Products children filter shop"
                          : "Top-level link"}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#131316]">Login</td>
                  <td className="py-3 px-4 text-[#555]">—</td>
                  <td className="py-3 px-4 text-[#888]">Header utility → WooCommerce My Account</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="pb-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => { setPage("design-system"); window.scrollTo({ top: 0 }); }}
            className="px-7 py-4 rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-white"
            style={{ backgroundColor: ORANGE }}
          >
            Design system →
          </button>
          <button
            type="button"
            onClick={() => { setPage("home"); window.scrollTo({ top: 0 }); }}
            className="px-7 py-4 rounded-full border border-[#ccc] bg-white font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-[#131316]"
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
}
