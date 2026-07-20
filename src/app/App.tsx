import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Toaster } from "sonner";
import { ComparisonProvider, useComparison } from "./comparison/ComparisonContext";
import { CompareCheckbox } from "./comparison/CompareCheckbox";
import { ComparisonBar } from "./comparison/ComparisonBar";
import { ComparisonPage } from "./comparison/ComparisonPage";

// ─── Downloads assets ────────────────────────────────────────────────────────
import downloadsSvg from "@/imports/Downloads/svg-q0xqbfjtec";
import imgDownloadsHero from "@/imports/Downloads/abbc53ab6aad7b9899bebafa6de7dba793b1c7df.png";
import imgDownloadsWhyBg from "@/imports/Downloads/1f82331238f563e5b59fb3af78d5ffe2c314621b.png";
import imgDownloadsWhyP1 from "@/imports/Downloads/00653fe968cdffe052e9eeb52f31990f947b3900.png";
import imgDownloadsWhyP2 from "@/imports/Downloads/fdd6e374d528d07eceea4ad1a4b0646537fccb84.png";

// ─── Detail (Product Detail) assets ──────────────────────────────────────────
import detailSvg from "@/imports/Detail/svg-s5exn6twxb";
import imgDetailWhyBg from "@/imports/Detail/1f82331238f563e5b59fb3af78d5ffe2c314621b.png";
import imgDetailWhyP1 from "@/imports/Detail/00653fe968cdffe052e9eeb52f31990f947b3900.png";
import imgDetailWhyP2 from "@/imports/Detail/fdd6e374d528d07eceea4ad1a4b0646537fccb84.png";
import { type ProductDetail, MAESTRO_CITY, productDetailFrom, CATALOG } from "./products";

// ─── Products assets ─────────────────────────────────────────────────────────
import productsSvg from "@/imports/Products/svg-pctjnimoaf";
import imgProductsHero from "@/imports/Products/2fb07080584865f70c7dcdae3920be4e533eb1e3.png";
import imgProductCard from "@/imports/Products/c94192fe59684f294c0e23b040e9535e1b810b60.png";
import imgProductsWhyBg from "@/imports/Products/1f82331238f563e5b59fb3af78d5ffe2c314621b.png";
import imgProductsWhyPhoto1 from "@/imports/Products/00653fe968cdffe052e9eeb52f31990f947b3900.png";
import imgProductsWhyPhoto2 from "@/imports/Products/fdd6e374d528d07eceea4ad1a4b0646537fccb84.png";

// ─── About ELIET assets ───────────────────────────────────────────────────────
// aboutSvg imported but path shapes not needed for UI
import imgAboutHero from "@/imports/AboutEliet/11ad8bf46a3328fc0ee2f85536868fe966676ceb.png";
import imgAboutStory from "@/imports/AboutEliet/6e0ff4b6219e09581a4719005bace6b4968be30a.png";
import imgAwardGoudenBuxus from "@/imports/AboutEliet/0a2ef09cb6e120e132bc4f741a4fd764a60816a7.png";
import imgAwardGalabau from "@/imports/AboutEliet/979c7a67a0f7cad43010d57b45a675144ff1a31c.png";
import imgAwardAre from "@/imports/AboutEliet/6d4497285cef71dac60b543573edfe109856ebe3.png";
import imgAwardSiber from "@/imports/AboutEliet/aec15ec9c611943df408cd609e60958997ed9f9f.png";
import imgAwardOmnigreen from "@/imports/AboutEliet/4cb14bfdd2f5e20483a75e3f6715c003602bd6a0.png";
import imgAwardGalabau2 from "@/imports/AboutEliet/ba68bc1bb83b886576a98aad46937a2f0457498e.png";
import imgAwardDaw from "@/imports/AboutEliet/a72e07cf7bcb010d0c8da3a72816f9818f62d652.png";
import imgAwardDme from "@/imports/AboutEliet/06632b6a9d5275da0e2f7f4b34f1fa2593331b44.png";
import imgValueIcon from "@/imports/AboutEliet/14f6882065d85cf5e711b6a4221e9ef56bd5bffc.png";
import imgTeamAndrew from "@/imports/AboutEliet/c3f6d35359531f51e05f7683a024bcd9a020b103.png";
import imgTeamTbd1 from "@/imports/AboutEliet/cd85afd83515126bc91b481b498e23240638deb6.png";
import imgTeamTbd2 from "@/imports/AboutEliet/0f053d766e22a6dc04114fa8f27cf54add7caa6b.png";
import imgAboutDealer from "@/imports/AboutEliet/251a1cb33423b5471808f54174524ddaf2538a27.png";

// ─── Home page assets (Desk) ──────────────────────────────────────────────────
import deskSvg from "@/imports/Desk/svg-xmyqp4uzqj";
import imgShreddersPhoto from "@/imports/Desk/bf6a5b50273efc54cba363c8929e6dae2f05b115.png";
import imgDethatchersPhoto from "@/imports/Desk/ceccb6e602b01ae8559308ef980ebc224345f749.png";
import imgSeedersPhoto from "@/imports/Desk/297c5cbed5843cfa9b391c72ec41c10ddc8ea7aa.png";
import imgTopDressingPhoto from "@/imports/Desk/b536143adc4d5fa4d65374d1d14b185dc2d620fe.png";
import imgMenProductPhoto1 from "@/imports/Desk/91de80d286501f8d9a92ceabeb314b6717be9641.png";
import imgHomeHero from "@/imports/Desk/hero-shredder-action.jpg";
import imgMaestroCountry from "@/imports/Desk/c94192fe59684f294c0e23b040e9535e1b810b60.png";
import imgProf6 from "@/imports/Desk/b9ab746eb38a6b78fb7c5558a36c1e93157e5d4f.png";
import imgSuperProfMax from "@/imports/Desk/8515ad06bde1344d3cd23e38bb1bfa4ce8f7fd19.png";
import imgMegaProf from "@/imports/Desk/0b3eaf16e1992c6bc04d47e1f3209fb47e62344b.png";
import imgDealerBg from "@/imports/Desk/251a1cb33423b5471808f54174524ddaf2538a27.png";
import imgWhyBg from "@/imports/Desk/1f82331238f563e5b59fb3af78d5ffe2c314621b.png";
import imgWhyPhoto1 from "@/imports/Desk/00653fe968cdffe052e9eeb52f31990f947b3900.png";
import imgWhyPhoto2 from "@/imports/Desk/fdd6e374d528d07eceea4ad1a4b0646537fccb84.png";

// ─── Demo Tour page assets (DemoTour) ────────────────────────────────────────
import demoSvg from "@/imports/DemoTour/svg-w9v4mzv8qe";
import img2Hero from "@/imports/DemoTour/7c7c4e64ba9073e2d62482ad77ee8344ba3a7abe.png";
import imgMapPlaceholder from "@/imports/DemoTour/775f0ad568422bc32cdac14671967599f64cdeb4.png";

// ─── Brand ───────────────────────────────────────────────────────────────────
const ORANGE = "#ef7d00";
const DARK = "#0f0f12";

// ─── Navigation state ────────────────────────────────────────────────────────
type Page = "home" | "demo" | "about" | "products" | "detail" | "downloads" | "warranty" | "faq" | "dealers" | "finance" | "contact" | "login" | "compare";

type NavItem = {
  label: string;
  page?: Page;
  children?: { label: string; page: Page; category?: string }[];
};

const NAV_STRUCTURE: NavItem[] = [
  {
    label: "Products",
    page: "products",
    children: [
      { label: "Shredders", page: "products", category: "Shredders" },
      { label: "Dethatchers", page: "products", category: "Dethatchers" },
      { label: "Seeders", page: "products", category: "Seeders" },
      { label: "Overseeders", page: "products", category: "Overseeders" },
      { label: "Lawn Edgers", page: "products", category: "Edgers" },
      { label: "Aerator / Topdresser", page: "products", category: "Top Dressers" },
      { label: "Leaf Blowers & Vacuums", page: "products", category: "Blowers" },
      { label: "Sod Cutters", page: "products", category: "Sod Cutters" },
    ],
  },
  {
    label: "Service",
    children: [
      { label: "Downloads", page: "downloads" },
      { label: "Warranty Conditions", page: "warranty" },
      { label: "FAQ & Contact", page: "faq" },
    ],
  },
  {
    label: "Where to Find ELIET",
    page: "dealers",
    children: [
      { label: "Dealer Locator", page: "dealers" },
      { label: "Sales Reps Locator", page: "dealers" },
      { label: "Finance Options", page: "finance" },
    ],
  },
  {
    label: "About",
    page: "about",
    children: [
      { label: "Brand Story / Innovation", page: "about" },
      { label: "USA Team", page: "about" },
      { label: "Testimonials", page: "about" },
      { label: "Request Brochure", page: "about" },
      { label: "Exhibitions & Events", page: "demo" },
      { label: "FAQs", page: "faq" },
    ],
  },
  { label: "Demo Tour", page: "demo" },
  { label: "Contact", page: "contact" },
];

// ─── Shared helpers ───────────────────────────────────────────────────────────

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

function OrangeAccent() {
  return <div style={{ backgroundColor: ORANGE }} className="h-1 w-10 rounded-full" />;
}

// ─── Shared Logo ─────────────────────────────────────────────────────────────

function ElietLogo({ color = "white", barColor, svgData }: { color?: string; barColor?: string; svgData: typeof deskSvg }) {
  const bar = barColor ?? color;
  return (
    <div className="flex flex-col gap-[5px] items-start shrink-0">
      <div className="h-[27px] relative w-[88px]">
        <svg className="absolute inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 26.9948">
          <path d={svgData.p2709be70} fill={color} />
          <path d={svgData.p2504cc00} fill={color} />
          <path d={svgData.p1ce90ef0} fill={color} />
          <path d={svgData.p30d48000} fill={color} />
          <path d={svgData.pecc3180} fill={color} />
        </svg>
      </div>
      <div style={{ backgroundColor: bar }} className="h-[5px] w-[88px]" />
    </div>
  );
}

// ─── Shared Header ────────────────────────────────────────────────────────────

function NavItemDesktop({ item, page, onNavigate }: { item: NavItem; page: Page; onNavigate: (p: Page, cat?: string) => void }) {
  const [hovered, setHovered] = useState(false);
  const isActive = item.page ? page === item.page : (item.children ? item.children.some(c => c.page === page) : false);

  return (
    <div className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <button
        onClick={() => item.page && onNavigate(item.page)}
        className={`transition-colors duration-200 flex items-center gap-0.5 ${isActive ? "text-white" : "text-white/65 hover:text-white"}`}>
        {item.label}{item.children && <span className="text-[10px] ml-0.5">▼</span>}
      </button>
      {item.children && (
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-40"
              style={{ minWidth: 200 }}>
              <div className="rounded-xl border border-white/10 overflow-hidden"
                style={{ backgroundColor: "#1a1a20", boxShadow: "0 12px 40px rgba(0,0,0,0.45)" }}>
                <div className="flex flex-col py-2">
                  {item.page && (
                    <button
                      onClick={() => onNavigate(item.page!)}
                      className="flex items-center gap-2 px-5 py-2.5 font-['Overpass',sans-serif] font-bold text-[11px] uppercase tracking-[1.5px] transition-colors duration-150 hover:bg-white/6"
                      style={{ color: ORANGE }}>
                      All {item.label} <span>→</span>
                    </button>
                  )}
                  {item.children.map((child) => (
                    <button
                      key={child.label}
                      onClick={() => onNavigate(child.page, child.category)}
                      className="text-left px-5 py-2.5 font-['Overpass',sans-serif] text-[13px] text-white/70 hover:text-white hover:bg-white/6 transition-colors duration-150 whitespace-nowrap">
                      {child.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

function Header({ page, setPage, svgData }: { page: Page; setPage: (p: Page) => void; svgData: typeof deskSvg }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleNav = (p: Page, cat?: string) => {
    setPage(p);
    setOpen(false);
    setExpanded(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Store category filter intent for products page
    if (cat && p === "products" && (window as any).__navCategory) {
      (window as any).__navCategory = cat;
    }
  };

  const isNavPageActive = (item: NavItem): boolean => {
    if (item.page && page === item.page) return true;
    if (item.children) return item.children.some(c => c.page === page);
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "#131316", boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.45)" : "none" }}>
      <div className="max-w-[1440px] mx-auto h-[70px] flex items-center justify-between px-6 md:px-12 lg:px-20">
        {/* Left */}
        <div className="flex items-center gap-10">
          <button onClick={() => handleNav("home")} className="transition-opacity hover:opacity-80">
            <ElietLogo svgData={svgData} />
          </button>
          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 font-['Overpass',sans-serif] font-normal text-[13px] uppercase tracking-[0.5px] text-white whitespace-nowrap">
            {NAV_STRUCTURE.map((item) => (
              <NavItemDesktop key={item.label} item={item} page={page} onNavigate={handleNav} />
            ))}
          </nav>
        </div>
        {/* Right */}
        <div className="flex items-center gap-5">
          <button onClick={() => handleNav("login")}
            className={`hidden md:block text-[13px] tracking-[0.5px] font-['Overpass',sans-serif] font-normal uppercase transition-colors ${page === "login" ? "text-white" : "text-white/65 hover:text-white"}`}>Login</button>
          <div className="w-[18px] h-[18px] relative opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
            <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 15.6758 15.9999">
              <path d={svgData.p28358500} fill="white" />
            </svg>
          </div>
          <button className="lg:hidden text-white/80 p-1" onClick={() => setOpen(!open)}>
            <div className="space-y-1.5 w-5">
              <div className={`h-0.5 bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
              <div className={`h-0.5 bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`} />
              <div className={`h-0.5 bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>
      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#0f0f12]/98 backdrop-blur-xl">
          <div className="flex flex-col py-3 px-6">
            {NAV_STRUCTURE.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between text-white/65 hover:text-white text-[13px] uppercase tracking-[0.5px] font-['Overpass',sans-serif] font-normal py-3.5 border-b border-white/5 transition-colors">
                      {item.label}
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className={`shrink-0 transition-transform duration-200 ${expanded === item.label ? "rotate-180" : ""}`}>
                        <path d="M1 1L6 6L11 1" stroke={ORANGE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {expanded === item.label && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }} className="overflow-hidden">
                          <div className="flex flex-col py-1 pl-4 border-b border-white/5">
                            {item.children.map((child) => (
                              <button key={child.label}
                                onClick={() => handleNav(child.page, child.category)}
                                className="text-white/50 hover:text-white text-[12px] font-['Overpass',sans-serif] font-normal text-left py-2.5 transition-colors">
                                — {child.label}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <button onClick={() => handleNav(item.page!)}
                    className="w-full text-left text-white/65 hover:text-white text-[13px] uppercase tracking-[0.5px] font-['Overpass',sans-serif] font-normal py-3.5 border-b border-white/5 transition-colors">
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            {/* Login lives right of the desktop nav, so it needs its own mobile entry */}
            <button onClick={() => handleNav("login")}
              className="w-full text-left text-white/65 hover:text-white text-[13px] uppercase tracking-[0.5px] font-['Overpass',sans-serif] font-normal py-3.5 border-b border-white/5 transition-colors">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// HOME PAGE
// ══════════════════════════════════════════════════════════════════════════════

function HomeHero({ setPage }: { setPage: (p: Page) => void }) {
  const navigate = () => { setPage("demo"); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0f0f12]">
      {/* Background action photo */}
      <div className="absolute inset-0">
        <img src={imgHomeHero} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(15,15,18,0.75) 30%, rgba(15,15,18,0.45) 100%)" }} />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-20 pt-32 pb-24">
        <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="h-[10px] w-[133px] origin-left mb-12" style={{ backgroundColor: "white" }} />
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-['Overpass',sans-serif] font-extrabold text-[42px] sm:text-[64px] md:text-[90px] lg:text-[110px] text-white uppercase leading-none tracking-[-2px] mb-8">
          Serious Equipment.<br />
          Serious <span style={{ color: ORANGE }}>Support.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="font-['Overpass',sans-serif] text-xl md:text-2xl text-white/70 max-w-xl mb-10 leading-relaxed">
          Engineered for professionals. Built to last. Family-owned since 1980.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-wrap items-center gap-4">
          <button onClick={() => { setPage("products"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="px-7 py-4 bg-white rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-[#131316] hover:scale-105 hover:shadow-lg transition-all duration-200">
            All Products →
          </button>
          <button onClick={navigate}
            className="px-7 py-4 rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-white border border-white/30 hover:border-[#ef7d00] hover:text-[#ef7d00] transition-all duration-200">
            Book a Demo →
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-['Overpass',sans-serif] font-semibold text-[10px] text-white/30 uppercase tracking-[3px]">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}

// ─── Category Grid ────────────────────────────────────────────────────────────

const CATEGORIES = [
  { img: imgShreddersPhoto, label: "Shredders" },
  { img: imgDethatchersPhoto, label: "Dethatchers" },
  { img: imgSeedersPhoto, label: "Seeders" },
  { img: imgTopDressingPhoto, label: "Top Dressing" },
];

function CategoryCard({ img, label }: { img: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative overflow-hidden rounded-2xl cursor-pointer flex-1 min-w-[240px]"
      style={{ height: 480 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <img src={img} alt={label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }} />
      <div className="absolute inset-0 transition-all duration-300"
        style={{ background: hovered ? "linear-gradient(to top, rgba(15,15,18,0.85) 30%, rgba(15,15,18,0.15) 100%)" : "linear-gradient(to top, rgba(15,15,18,0.55) 0%, rgba(15,15,18,0.05) 60%)" }} />
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
        <p className="font-['Overpass',sans-serif] font-bold text-2xl text-white uppercase tracking-[0.5px]">{label}</p>
        <div className="flex items-center gap-2 transition-all duration-200" style={{ opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(8px)" }}>
          <div className="h-px flex-1 max-w-[40px]" style={{ backgroundColor: ORANGE }} />
          <span className="font-['Overpass',sans-serif] font-semibold text-[12px] uppercase tracking-[1.5px]" style={{ color: ORANGE }}>Explore →</span>
        </div>
      </div>
    </div>
  );
}

function ShopByCategory() {
  return (
    <section className="bg-[#f4f4f4] w-full px-6 md:px-12 lg:px-20 py-20">
      <FadeUp>
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="font-['Overpass',sans-serif] font-semibold text-[16px] text-[#131316] uppercase tracking-[2px]">Browse by Category</p>
            <button className="font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[1px] transition-colors hover:opacity-70" style={{ color: ORANGE }}>
              View all 8 categories →
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
            {CATEGORIES.map((c) => <CategoryCard key={c.label} {...c} />)}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

// ─── Trusted By Professionals ─────────────────────────────────────────────────

const PRODUCT_COLS = [
  { img: imgWhyPhoto2, title: "The Original", desc: "First battery-powered shredder. Over 30 years of engineering innovation.", offset: false },
  { img: imgWhyPhoto1, title: "The Innovator", desc: "First to market with E-Power technology. Built for the future.", offset: true },
  { img: imgMenProductPhoto1, title: "The Future", desc: "Zero-emission battery line. Sustainable without compromise.", offset: false },
];

function TrustedBy() {
  return (
    <section className="bg-[#131316] w-full px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Left label */}
        <FadeUp className="shrink-0 lg:w-64 lg:pt-16">
          <div className="h-[10px] w-[133px] bg-white mb-8" />
          <p className="font-['Overpass',sans-serif] font-bold text-[36px] lg:text-[28px] text-white uppercase leading-tight">
            Trusted by <span style={{ color: ORANGE }}>professionals</span>
          </p>
        </FadeUp>
        {/* Product columns */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {PRODUCT_COLS.map((col, i) => (
            <FadeUp key={col.title} delay={i * 0.1}>
              <div className={`flex flex-col gap-6 ${col.offset ? "sm:pt-14" : "sm:pb-10"}`}>
                {/* Image first in DOM so mobile always shows it above its headline; offset columns move it below the text on sm+ */}
                <div className={`relative overflow-hidden rounded-xl h-[380px] ${col.offset ? "sm:order-last" : ""}`}>
                  <img src={col.img} alt={col.title} className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="font-['Overpass',sans-serif] font-bold text-[28px] text-white uppercase">{col.title}</p>
                <p className="font-['Overpass',sans-serif] text-[15px] text-white/60 leading-relaxed">{col.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Featured Machines ────────────────────────────────────────────────────────

const MACHINES = [
  { img: imgMaestroCountry, name: "Maestro Country E-Power" },
  { img: imgProf6, name: "Prof 6 E-Power" },
  { img: imgSuperProfMax, name: "Super Prof MAX" },
  { img: imgMegaProf, name: "MEGA PROF OR" },
];

function MachineCard({ img, name }: { img: string; name: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-300 group"
      style={{ boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.12)" : "0 2px 8px rgba(0,0,0,0.06)", transform: hovered ? "translateY(-4px)" : "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div className="relative h-[200px] sm:h-[280px] overflow-hidden bg-[#f8f8f8]">
        <img src={img} alt={name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="px-5 py-4 flex items-center justify-between">
        <p className="font-['Overpass',sans-serif] font-semibold text-[14px] text-[#131316]">{name}</p>
        <span className="font-['Overpass',sans-serif] font-bold text-[12px] transition-colors duration-200" style={{ color: hovered ? ORANGE : "#bbb" }}>→</span>
      </div>
    </div>
  );
}

function FeaturedMachines() {
  return (
    <section className="bg-[#f4f4f4] w-full px-6 md:px-12 lg:px-20 py-20">
      <FadeUp>
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="font-['Overpass',sans-serif] font-semibold text-[16px] text-[#131316] uppercase tracking-[2px]">Featured Machines</p>
            <button className="font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[1px] hover:opacity-70 transition-opacity" style={{ color: ORANGE }}>
              View All →
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {MACHINES.map((m) => <MachineCard key={m.name} {...m} />)}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

// ─── Demo Tour CTA Banner ─────────────────────────────────────────────────────

function DemoTourBanner({ setPage }: { setPage: (p: Page) => void }) {
  const navigate = () => { setPage("demo"); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <FadeUp>
      <section className="w-full px-6 md:px-12 lg:px-20 py-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer" onClick={navigate} style={{ minHeight: 280 }}>
            <img src={img2Hero} alt="Demo Tour" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" style={{ objectPosition: "center 30%" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, rgba(15,15,18,0.92) 40%, rgba(15,15,18,0.3) 100%)" }} />
            {/* Orange corner accent */}
            <div className="absolute top-0 left-0 w-1 h-20" style={{ backgroundColor: ORANGE }} />
            <div className="absolute top-0 left-0 h-1 w-20" style={{ backgroundColor: ORANGE }} />
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 px-10 md:px-16 py-12">
              <div className="flex flex-col gap-3">
                <span className="font-['Overpass',sans-serif] font-semibold text-[11px] uppercase tracking-[3px]" style={{ color: ORANGE }}>Now Scheduling 2026</span>
                <h2 className="font-['Overpass',sans-serif] font-extrabold text-4xl md:text-5xl text-white uppercase leading-none tracking-[-1px]">
                  See ELIET In Action.<br />Book a Demo Tour.
                </h2>
                <p className="font-['Overpass',sans-serif] text-[15px] text-white/65 max-w-sm">
                  Find a live demo near you or request a private session with our specialists.
                </p>
              </div>
              <button
                className="shrink-0 px-8 py-4 rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-white transition-all duration-200 hover:scale-105 group-hover:brightness-110"
                style={{ backgroundColor: ORANGE, boxShadow: `0 4px 20px ${ORANGE}50` }}
              >
                Explore Demo Events →
              </button>
            </div>
          </div>
        </div>
      </section>
    </FadeUp>
  );
}

// ─── Dealer Locator ───────────────────────────────────────────────────────────

function HomeDealerLocator({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-6">
      <FadeUp>
        <div className="max-w-[1440px] mx-auto">
          <div className="relative rounded-2xl overflow-hidden group" style={{ minHeight: 420 }}>
            <img src={imgDealerBg} alt="Dealer Locator" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(15,15,18,0.92) 35%, rgba(15,15,18,0.2) 100%)" }} />
            {/* Orange corner accent */}
            <div className="absolute top-0 left-0 w-1 h-16" style={{ backgroundColor: ORANGE }} />
            <div className="absolute top-0 left-0 h-1 w-16" style={{ backgroundColor: ORANGE }} />
            <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between gap-8 px-10 md:px-16 py-14" style={{ minHeight: 420 }}>
              <div className="flex flex-col gap-4 max-w-lg">
                <h2 className="font-['Overpass',sans-serif] font-extrabold text-5xl md:text-[62px] text-white uppercase leading-none tracking-[-1px]">
                  Dealer Locator
                </h2>
                <p className="font-['Overpass',sans-serif] text-[16px] text-white/65 leading-relaxed">
                  Find parts, service, and new equipment at a certified ELIET dealer near you.
                </p>
              </div>
              <button onClick={() => { setPage("dealers"); window.scrollTo({ top: 0 }); }}
                className="shrink-0 px-8 py-4 bg-white rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] transition-all duration-200 hover:scale-105"
                style={{ color: DARK }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ORANGE; e.currentTarget.style.color = "white"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = DARK; }}>
                Find a Dealer →
              </button>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

// ─── Why ELIET ────────────────────────────────────────────────────────────────

const WHY_ITEMS = ["Same-day parts shipping", "Local reps across the US", "Service you can count on", "30+ years of engineering"];

function WhyElietBanner({ bg, photo1, photo2, buttonLabel, setPage, wrapperClass = "w-full px-6 md:px-12 lg:px-20 pb-20" }: {
  bg: string; photo1: string; photo2: string; buttonLabel: string;
  setPage: (p: Page) => void; wrapperClass?: string;
}) {
  return (
    <section className={wrapperClass}>
      <FadeUp>
        <div className="max-w-[1440px] mx-auto">
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 480 }}>
            <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/65" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 min-h-[480px]">
              <div className="col-span-1 flex flex-col justify-center gap-7 px-10 md:px-14 py-14">
                <ElietLogo svgData={deskSvg} />
                <div className="h-px bg-white/15 w-full" />
                <h2 className="font-['Overpass',sans-serif] font-extrabold text-[36px] text-white uppercase leading-tight tracking-[-0.5px]">
                  Why Professionals Choose ELIET
                </h2>
                <ul className="flex flex-col gap-4">
                  {WHY_ITEMS.map((item, i) => (
                    <motion.li key={item} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.09 }} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center" style={{ backgroundColor: ORANGE }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                      <span className="font-['Overpass',sans-serif] font-semibold text-[15px] text-white">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <button onClick={() => { setPage("products"); window.scrollTo({ top: 0 }); }}
                  className="self-start px-7 py-3.5 rounded-full bg-white font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] transition-all duration-200 hover:scale-105"
                  style={{ color: DARK }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ORANGE; e.currentTarget.style.color = "white"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = DARK; }}>
                  {buttonLabel}
                </button>
              </div>
              <div className="hidden md:block col-span-1 relative overflow-hidden">
                <img src={photo1} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" />
              </div>
              <div className="hidden md:block col-span-1 relative overflow-hidden">
                <img src={photo2} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

/* Minimal single-column variant — used on Finance page */
function WhyElietCompact({ bg, setPage }: { bg: string; setPage: (p: Page) => void }) {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 pb-20">
      <FadeUp>
        <div className="max-w-[1440px] mx-auto">
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 420 }}>
            <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/65" />
            <div className="relative z-10 flex flex-col justify-center gap-7 px-10 md:px-14 py-14 max-w-xl min-h-[420px]">
              <h2 className="font-['Overpass',sans-serif] font-extrabold text-[36px] text-white uppercase leading-tight tracking-[-0.5px]">Why Professionals Choose ELIET</h2>
              <ul className="flex flex-col gap-4">
                {WHY_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center" style={{ backgroundColor: ORANGE }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    <span className="font-['Overpass',sans-serif] font-semibold text-[15px] text-white">{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => { setPage("products"); window.scrollTo({ top: 0 }); }}
                className="self-start px-7 py-3.5 rounded-full bg-white font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] transition-all duration-200 hover:scale-105"
                style={{ color: DARK }}>
                Our Products
              </button>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

// ─── Newsletter ───────────────────────────────────────────────────────────────

function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [focused, setFocused] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setTimeout(() => { setDone(false); setEmail(""); }, 5000);
  };

  return (
    <section style={{ backgroundColor: DARK }} className="w-full py-24 px-6">
      <FadeUp>
        <div className="max-w-[600px] mx-auto flex flex-col items-center gap-7 text-center">
          <OrangeAccent />
          <h2 className="font-['Overpass',sans-serif] font-extrabold text-4xl md:text-5xl text-white uppercase tracking-[-0.5px]">
            Be the First to Know
          </h2>
          <p className="font-['Overpass',sans-serif] text-[16px] text-white/55 leading-relaxed">
            New machines, dealer events, and support news — straight to your inbox.
          </p>
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 w-full">
            <input type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
              className="flex-1 h-14 px-5 rounded-xl text-[14px] font-['Overpass',sans-serif] placeholder:text-white/30 bg-white/10 text-white focus:outline-none transition-all duration-200"
              style={{ border: `1.5px solid ${focused ? ORANGE : "rgba(255,255,255,0.12)"}` }} />
            <button type="submit" className="h-14 px-7 rounded-xl font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-white transition-all duration-300 hover:scale-[1.02] hover:brightness-110 shrink-0"
              style={{ backgroundColor: done ? "#16a34a" : ORANGE, boxShadow: `0 4px 20px ${done ? "rgba(22,163,74,0.4)" : `${ORANGE}45`}` }}>
              {done ? "✓ Subscribed" : "Subscribe"}
            </button>
          </form>
          <p className="font-['Overpass',sans-serif] text-[11px] text-white/25">No spam. Unsubscribe anytime.</p>
        </div>
      </FadeUp>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

const FOOTER_LINK_TARGETS: Record<string, Page> = {
  "All Products": "products", "Find a Dealer": "dealers", "Demo Tour": "demo",
  "Downloads": "downloads", "Finance Options": "finance", "About Us": "about",
  "Service": "faq", "Machine Registration": "login",
};

const FOOTER_COLS = [
  { heading: "AT ELIET", links: ["All Products", "Find a Dealer", "Demo Tour", "Downloads", "Finance Options"] },
  { heading: "ABOUT ELIET", links: ["About Us", "Service", "Machine Registration", "Press"] },
  { heading: "GET IN TOUCH", links: ["19 E Moreland Ave, Philadelphia PA 19118", "+1 412 367 5185", "info@elietusa.com"] },
];

function Footer({ setPage, svgData }: { setPage: (p: Page) => void; svgData: typeof deskSvg }) {
  return (
    <footer style={{ backgroundColor: "#0a0a0d" }} className="w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:justify-between">
          <div className="flex flex-col gap-5 max-w-[320px]">
            <ElietLogo svgData={svgData} color={ORANGE} barColor={ORANGE} />
            <p className="font-['Overpass',sans-serif] text-[14px] text-white/35 leading-relaxed">
              ELIET is a Belgian-engineered professional equipment company. Our patented Chopping Principle™ delivers superior performance in shredding, lawn renovation, seeding, and top dressing.
            </p>
          </div>
          <div className="flex flex-wrap gap-10 lg:gap-14">
            {FOOTER_COLS.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4 min-w-[140px]">
                <p className="font-['Overpass',sans-serif] font-bold text-[11px] text-white uppercase tracking-[2px]">{col.heading}</p>
                <div className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <button key={link} onClick={FOOTER_LINK_TARGETS[link] ? () => { setPage(FOOTER_LINK_TARGETS[link]); window.scrollTo({ top: 0 }); } : undefined}
                      className="font-['Overpass',sans-serif] text-[14px] text-white/35 hover:text-white/75 transition-colors duration-200 text-left leading-snug">
                      {link}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-['Overpass',sans-serif] text-[12px] text-white/25">Copyright © 2026 ELIET USA, Inc. All rights reserved.</p>
          <p className="font-['Overpass',sans-serif] text-[12px] text-white/15">Powered by ELIET USA</p>
        </div>
      </div>
    </footer>
  );
}

function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <>
      <HomeHero setPage={setPage} />
      <ShopByCategory />
      <TrustedBy />
      <FeaturedMachines />
      <HomeDealerLocator setPage={setPage} />
      <WhyElietBanner bg={imgWhyBg} photo1={imgWhyPhoto1} photo2={imgWhyPhoto2} buttonLabel="Our Products" setPage={setPage} wrapperClass="w-full px-6 md:px-12 lg:px-20 py-6 pb-16" />
      <Newsletter />
      <Footer setPage={setPage} svgData={deskSvg} />
    </>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// DEMO TOUR PAGE
// ══════════════════════════════════════════════════════════════════════════════

function OrangeBar2() {
  return <div style={{ backgroundColor: ORANGE }} className="h-1 w-12 rounded-full" />;
}

function DemoHero({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={img2Hero} alt="ELIET Demo Tour" className="w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(15,15,18,0.35) 0%, rgba(15,15,18,0.65) 60%, rgba(15,15,18,0.9) 100%)" }} />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl gap-6 mt-16">
        <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="h-[3px] w-24 origin-left" style={{ backgroundColor: ORANGE }} />
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
          className="font-['Overpass',sans-serif] font-bold text-xl md:text-2xl text-white/65 uppercase tracking-[5px]">
          About ELIET
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-['Overpass',sans-serif] font-extrabold text-[72px] md:text-[110px] lg:text-[132px] text-white uppercase leading-none tracking-[-2px]">
          Demo Tour
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
          className="font-['Overpass',sans-serif] text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
          Experience ELIET equipment in action — find a demo near you or request a private session.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <a href="#request-demo" className="px-8 py-4 rounded-full font-['Overpass',sans-serif] font-bold text-sm text-white uppercase tracking-[2px] transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: ORANGE }}>
            Request a Demo
          </a>
          <a href="#events" className="px-8 py-4 rounded-full font-['Overpass',sans-serif] font-bold text-sm text-white uppercase tracking-[2px] border border-white/30 hover:border-white/70 hover:bg-white/10 transition-all duration-200">
            View Events
          </a>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/35 text-[10px] tracking-[3px] uppercase font-['Overpass',sans-serif] font-semibold">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-white/45 to-transparent" />
      </motion.div>
    </section>
  );
}

function DemoFormField({ label, placeholder, type = "text", value, onChange }: { label: string; placeholder: string; type?: string; value: string; onChange: (v: string) => void }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <label className="font-['Overpass',sans-serif] font-semibold text-[11px] text-[#131316] uppercase tracking-[1px]">{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className="h-12 px-4 rounded-lg bg-[#f7f7f8] text-[14px] font-['Overpass',sans-serif] placeholder:text-[#bbb] focus:outline-none transition-all duration-200 w-full"
        style={{ border: `1.5px solid ${focused ? ORANGE : "transparent"}`, boxShadow: focused ? `0 0 0 3px ${ORANGE}15` : "none" }} />
    </div>
  );
}

function RequestDemoForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", company: "", location: "", date: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 5000); };

  return (
    <FadeUp>
      <div id="request-demo" className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <OrangeBar2 />
          <h2 className="font-['Overpass',sans-serif] font-bold text-4xl md:text-[48px] text-[#131316] uppercase tracking-[-0.5px]">
            Request a Private Demo
          </h2>
          <p className="font-['Overpass',sans-serif] text-[15px] text-[#777] leading-relaxed">
            A specialist will reach out within one business day to confirm your session.
          </p>
        </div>
        <form onSubmit={submit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <DemoFormField label="First Name *" placeholder="Enter first name" value={form.firstName} onChange={set("firstName")} />
            <DemoFormField label="Last Name *" placeholder="Enter last name" value={form.lastName} onChange={set("lastName")} />
            <DemoFormField label="Email Address *" placeholder="you@company.com" type="email" value={form.email} onChange={set("email")} />
            <DemoFormField label="Phone Number *" placeholder="+1 (000) 000-0000" type="tel" value={form.phone} onChange={set("phone")} />
            <DemoFormField label="Company / Organization" placeholder="Your company" value={form.company} onChange={set("company")} />
            <DemoFormField label="Location" placeholder="City, State" value={form.location} onChange={set("location")} />
            <DemoFormField label="Preferred Date" placeholder="mm/dd/yyyy" type="date" value={form.date} onChange={set("date")} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-['Overpass',sans-serif] font-semibold text-[11px] text-[#131316] uppercase tracking-[1px]">Message</label>
            <textarea placeholder="Tell us about your operation..." value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="h-28 px-4 py-3 rounded-lg bg-[#f7f7f8] text-[14px] font-['Overpass',sans-serif] placeholder:text-[#bbb] focus:outline-none transition-all duration-200 resize-none w-full"
              style={{ border: "1.5px solid transparent" }}
              onFocus={(e) => { e.currentTarget.style.border = `1.5px solid ${ORANGE}`; e.currentTarget.style.boxShadow = `0 0 0 3px ${ORANGE}15`; }}
              onBlur={(e) => { e.currentTarget.style.border = "1.5px solid transparent"; e.currentTarget.style.boxShadow = "none"; }} />
          </div>
          <button type="submit" className="self-start px-8 py-4 rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-white transition-all duration-300 hover:scale-[1.03]"
            style={{ backgroundColor: submitted ? "#16a34a" : ORANGE, boxShadow: `0 4px 20px ${submitted ? "rgba(22,163,74,0.35)" : `${ORANGE}40`}` }}>
            {submitted ? "✓ Request Sent" : "Submit Request →"}
          </button>
        </form>
      </div>
    </FadeUp>
  );
}

const EVENTS = [
  { num: "01", dates: "June 15–17, 2026", city: "Philadelphia, PA", venue: "Equip Exposition — Booth #2840", desc: "See the full ELIET lineup including the new E-Power series. Live demonstrations daily at 10am, 1pm, and 3pm." },
  { num: "02", dates: "July 8–10, 2026", city: "Columbus, OH", venue: "GIE+EXPO — Outdoor Demo Area", desc: "Hands-on demonstrations of shredders and dethatchers. Bring your toughest material to test." },
  { num: "03", dates: "August 5, 2026", city: "Atlanta, GA", venue: "Southeastern Turf Conference", desc: "Focus on golf course and sports turf equipment. Expert staff available for one-on-one consultations." },
];

function MapPin({ svgData }: { svgData: typeof demoSvg }) {
  return (
    <div className="w-4 h-4 shrink-0 relative mt-0.5">
      <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 16 16">
        <path d={svgData.p8b99100} stroke={ORANGE} strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function EventCard({ event, index }: { event: typeof EVENTS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeUp delay={index * 0.1}>
      <div className="relative rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        style={{ backgroundColor: hovered ? "#fff" : "#fafafa", border: `1.5px solid ${hovered ? ORANGE : "#e8e8e8"}`, boxShadow: hovered ? "0 12px 40px rgba(0,0,0,0.09)" : "0 2px 8px rgba(0,0,0,0.04)", transform: hovered ? "translateY(-2px)" : "none" }}>
        <div className="absolute left-0 top-0 bottom-0 w-1 transition-opacity duration-300" style={{ backgroundColor: ORANGE, opacity: hovered ? 1 : 0.35 }} />
        <div className="pl-6 pr-6 py-7 flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="shrink-0 font-['Overpass',sans-serif] font-extrabold text-[52px] leading-none transition-colors duration-300" style={{ color: hovered ? ORANGE : "#e2e2e2" }}>
            {event.num}
          </div>
          <div className="flex-1 flex flex-col gap-2.5 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px]" style={{ color: ORANGE }}>{event.dates}</span>
              <span className="text-[10px] font-['Overpass',sans-serif] font-bold uppercase tracking-[1.5px] px-2 py-0.5 rounded-full" style={{ backgroundColor: `${ORANGE}15`, color: ORANGE }}>Upcoming</span>
            </div>
            <p className="font-['Overpass',sans-serif] font-bold text-[22px] text-[#131316] uppercase tracking-[-0.3px]">{event.city}</p>
            <div className="flex items-start gap-2">
              <MapPin svgData={demoSvg} />
              <p className="font-['Overpass',sans-serif] text-[13px] text-[#777]">{event.venue}</p>
            </div>
            <p className="font-['Overpass',sans-serif] text-[13px] text-[#999] leading-relaxed max-w-sm">{event.desc}</p>
          </div>
          <button className="shrink-0 self-start sm:self-center px-5 py-3 rounded-lg font-['Overpass',sans-serif] font-bold text-[12px] uppercase tracking-[1.5px] text-white transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: ORANGE }}>
            Learn More
          </button>
        </div>
      </div>
    </FadeUp>
  );
}

function UpcomingEvents() {
  return (
    <div id="events" className="flex flex-col gap-8">
      <FadeUp>
        <div className="flex flex-col gap-3">
          <OrangeBar2 />
          <h2 className="font-['Overpass',sans-serif] font-bold text-4xl md:text-[48px] text-[#131316] uppercase tracking-[-0.5px]">
            Upcoming Demo Events
          </h2>
          <p className="font-['Overpass',sans-serif] text-[15px] text-[#777]">{EVENTS.length} events scheduled for 2026 — find one near you.</p>
        </div>
      </FadeUp>
      <div className="flex flex-col gap-4">
        {EVENTS.map((ev, i) => <EventCard key={i} event={ev} index={i} />)}
      </div>
    </div>
  );
}

function DemoPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <>
      <DemoHero setPage={setPage} />
      {/* Form + Events */}
      <section className="bg-white w-full py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <RequestDemoForm />
          <UpcomingEvents />
        </div>
      </section>
      {/* Map */}
      <section className="bg-white w-full pb-24 px-6 md:px-12 lg:px-20">
        <FadeUp>
          <div className="max-w-[1280px] mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group" style={{ height: 400 }}>
              <img src={imgMapPlaceholder} alt="Demo locations map" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 flex items-center pointer-events-none">
                <div className="pl-10 md:pl-16 flex flex-col gap-3">
                  <p className="font-['Overpass',sans-serif] font-bold text-3xl md:text-4xl text-white uppercase tracking-[-0.3px]">Find a Demo Near You</p>
                  <p className="font-['Overpass',sans-serif] text-[15px] text-white/70 max-w-xs">All confirmed 2026 demo locations across the US.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>
      <HomeDealerLocator setPage={setPage} />
      <WhyElietBanner bg={imgWhyBg} photo1={imgWhyPhoto1} photo2={imgWhyPhoto2} buttonLabel="Our Products" setPage={setPage} />
      <Newsletter />
      <Footer setPage={setPage} svgData={deskSvg} />
    </>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// DOWNLOADS PAGE
// ══════════════════════════════════════════════════════════════════════════════

const PRODUCT_GROUPS = ["Shredders", "Dethatchers", "Seeders", "Top Dressing", "E-Power Series"];
const MACHINES_BY_GROUP: Record<string, string[]> = {
  Shredders: ["Maestro City", "Maestro Country", "Prof 6", "Super Prof MAX", "MEGA PROF OR"],
  Dethatchers: ["Elite 30", "Elite 45", "Pro Dethatcher 60"],
  Seeders: ["Seeder Pro 1000", "Seeder Ultra"],
  "Top Dressing": ["TopDresser 600", "TopDresser 1200"],
  "E-Power Series": ["Maestro Country E-Power", "Prof 6 E-Power"],
};

const DOWNLOAD_CATEGORIES = [
  { icon: "wrench", label: "Lawn Equipment", count: 12, svgPath: "p12aeae00", viewBox: "0 0 22 22", clip: true },
  { icon: "leaf", label: "Leaf Blowers & Vacuums", count: 8, svgPath: "p3e8ee500", viewBox: "0 0 22 22", clip: true },
  { icon: "package", label: "Spreaders", count: 6, svgPath: "p5adfd80", viewBox: "0 0 22 22", clip: false },
  { icon: "grid", label: "Belt-Pit Systems", count: 5, svgPath: "p10635e00", viewBox: "0 0 22 22", clip: false },
  { icon: "book", label: "Manuals", count: 24, svgPath: "p36698480", viewBox: "0 0 22 22", clip: false },
  { icon: "ruler", label: "Dimensions", count: 18, svgPath: "p3b58e100", viewBox: "0 0 22 22", clip: true },
  { icon: "layers", label: "Top Additions", count: 9, svgPath: "p1646ec00", viewBox: "0 0 22 22", clip: true },
  { icon: "scissors", label: "Edge Cutting", count: 7, svgPath: "p28981e00", viewBox: "0 0 22 22", clip: false },
];

const FILTER_CARDS = [
  { title: "Find a Manual", desc: "Locate operator manuals by product and machine." },
  { title: "Maintenance Schedules", desc: "Download service intervals and care guides." },
  { title: "Primary Data", desc: "Access technical data sheets and specifications." },
];

function DownloadCategoryCard({ cat }: { cat: typeof DOWNLOAD_CATEGORIES[0] }) {
  const [hovered, setHovered] = useState(false);
  const clipId = `dl-clip-${cat.icon}`;
  return (
    <div
      className="bg-white rounded-xl cursor-pointer transition-all duration-300 flex-1 min-w-0"
      style={{
        border: `1.5px solid ${hovered ? ORANGE : "#e5e7eb"}`,
        boxShadow: hovered ? `0 8px 24px rgba(239,125,0,0.12)` : "0 4px 12px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-2px)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col gap-3 p-5">
        {/* Icon badge */}
        <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: hovered ? `${ORANGE}18` : "#fff7ed" }}>
          <div className="relative w-[22px] h-[22px]">
            <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox={cat.viewBox}>
              {cat.clip && (
                <defs>
                  <clipPath id={clipId}><rect fill="white" height="22" width="22" /></clipPath>
                </defs>
              )}
              <g clipPath={cat.clip ? `url(#${clipId})` : undefined}>
                <path
                  d={(downloadsSvg as Record<string, string>)[cat.svgPath]}
                  stroke={ORANGE}
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Label */}
        <p className="font-['Overpass',sans-serif] font-extrabold text-[20px] text-[#131316] uppercase tracking-[-0.5px] leading-tight">
          {cat.label}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between">
          <span className="font-['Overpass',sans-serif] text-[13px] text-[#6b7280]">{cat.count} files</span>
          <span className="font-['Overpass',sans-serif] font-bold text-[13px] flex items-center gap-1.5 transition-colors duration-200"
            style={{ color: ORANGE }}>
            View
            <div className="relative w-[10px] h-[10px]">
              <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 10.5 10.5">
                <path d={(downloadsSvg as Record<string, string>).pcf45680} fill={ORANGE} />
              </svg>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

function FilterToolCard({ title, desc }: { title: string; desc: string }) {
  const [group, setGroup] = useState("");
  const [machine, setMachine] = useState("");
  const [searched, setSearched] = useState(false);

  const machines = group ? (MACHINES_BY_GROUP[group] ?? []) : [];

  const handleFind = () => { setSearched(true); setTimeout(() => setSearched(false), 3000); };

  return (
    <div className="bg-white rounded-xl flex-1 min-w-0 flex flex-col"
      style={{ border: "1.5px solid #e5e7eb", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
      <div className="flex flex-col gap-4 p-6">
        <div className="h-1 rounded-full w-full" style={{ backgroundColor: ORANGE }} />
        <h3 className="font-['Overpass',sans-serif] font-extrabold text-[20px] text-[#131316] uppercase tracking-[-0.5px]">
          {title}
        </h3>
        <p className="font-['Overpass',sans-serif] text-[13px] text-[#6b7280] leading-relaxed -mt-1">{desc}</p>

        <div className="flex flex-col gap-2">
          <label className="font-['Overpass',sans-serif] font-bold text-[12px] text-[#374151] uppercase tracking-[0.5px]">
            Product Group
          </label>
          <select
            value={group}
            onChange={e => { setGroup(e.target.value); setMachine(""); }}
            className="h-12 px-4 rounded-lg border border-[#d1d1d1] bg-white font-['Overpass',sans-serif] text-[14px] focus:outline-none focus:border-[#ef7d00] transition-colors appearance-none cursor-pointer"
            style={{ color: group ? "#131316" : "#9ca3af" }}
          >
            <option value="">Select group</option>
            {PRODUCT_GROUPS.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-['Overpass',sans-serif] font-bold text-[12px] text-[#374151] uppercase tracking-[0.5px]">
            Machine
          </label>
          <select
            value={machine}
            onChange={e => setMachine(e.target.value)}
            disabled={!group}
            className="h-12 px-4 rounded-lg border border-[#d1d1d1] bg-white font-['Overpass',sans-serif] text-[14px] focus:outline-none focus:border-[#ef7d00] transition-colors appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ color: machine ? "#131316" : "#9ca3af" }}
          >
            <option value="">Select machine</option>
            {machines.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        <button
          onClick={handleFind}
          className="h-12 rounded-lg font-['Overpass',sans-serif] font-extrabold text-[14px] text-white uppercase tracking-[1px] transition-all duration-200 hover:brightness-110 hover:scale-[1.02]"
          style={{ backgroundColor: searched ? "#16a34a" : ORANGE }}
        >
          {searched ? "✓ Results Found" : "Find Results"}
        </button>
      </div>
    </div>
  );
}

function DownloadsPage({ setPage }: { setPage: (p: Page) => void }) {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    setTimeout(() => setSearched(false), 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative w-full flex items-center justify-center overflow-hidden" style={{ minHeight: 480 }}>
        <div className="absolute inset-0">
          <img src={imgDownloadsHero} alt="ELIET Downloads" className="w-full h-full object-cover" style={{ objectPosition: "center 40%" }} />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.78)" }} />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center gap-10 px-6 w-full max-w-3xl mt-8">
          <motion.div className="flex flex-col gap-5 items-center"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
            <h1 className="font-['Overpass',sans-serif] font-extrabold text-[72px] md:text-[90px] text-white uppercase leading-none tracking-[-2px]">
              Downloads
            </h1>
            <p className="font-['Overpass',sans-serif] text-[20px] text-white/70 leading-relaxed">
              Find product manuals, maintenance schedules, and technical data
            </p>
          </motion.div>

          {/* Search bar */}
          <motion.form
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSearch}
            className="flex gap-4 w-full max-w-[920px]"
          >
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5">
                <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
                  <path d={(downloadsSvg as Record<string, string>).p1615880} stroke="#9ca3af" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search manuals, schedules, or product data..."
                className="w-full h-14 pl-12 pr-5 rounded-lg bg-white font-['Overpass',sans-serif] text-[14px] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 transition-all duration-150"
                style={{ ["--tw-ring-color" as string]: ORANGE }}
              />
            </div>
            <button
              type="submit"
              className="h-14 px-8 rounded-lg font-['Overpass',sans-serif] font-extrabold text-[14px] text-white uppercase tracking-[1px] hover:brightness-110 hover:scale-[1.02] transition-all duration-200 shrink-0"
              style={{ backgroundColor: searched ? "#16a34a" : ORANGE }}
            >
              {searched ? "✓ Found" : "Search"}
            </button>
          </motion.form>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white w-full px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-14">

          {/* Browse by Category */}
          <FadeUp>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <OrangeAccent />
                <h2 className="font-['Overpass',sans-serif] font-extrabold text-[32px] md:text-[36px] text-[#131316] uppercase tracking-[-0.96px]">
                  Browse by Category
                </h2>
                <p className="font-['Overpass',sans-serif] text-[14px] text-[#6b7280]">
                  Explore the most requested resources for your fleet.
                </p>
              </div>
              {/* Row 1 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {DOWNLOAD_CATEGORIES.slice(0, 4).map((cat, i) => (
                  <FadeUp key={cat.label} delay={i * 0.07}>
                    <DownloadCategoryCard cat={cat} />
                  </FadeUp>
                ))}
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {DOWNLOAD_CATEGORIES.slice(4).map((cat, i) => (
                  <FadeUp key={cat.label} delay={i * 0.07}>
                    <DownloadCategoryCard cat={cat} />
                  </FadeUp>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Filter Tools */}
          <FadeUp>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <OrangeAccent />
                <h2 className="font-['Overpass',sans-serif] font-extrabold text-[32px] md:text-[36px] text-[#131316] uppercase tracking-[-0.96px]">
                  Filter Tools
                </h2>
                <p className="font-['Overpass',sans-serif] text-[14px] text-[#6b7280]">
                  Narrow down results by product group and machine.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {FILTER_CARDS.map(fc => (
                  <FilterToolCard key={fc.title} {...fc} />
                ))}
              </div>
            </div>
          </FadeUp>

        </div>
      </section>

      {/* Why ELIET */}
      <section className="w-full px-6 md:px-12 lg:px-20 pb-20">
        <FadeUp>
          <div className="max-w-[1440px] mx-auto">
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 480 }}>
              <img src={imgDownloadsWhyBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/65" />
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 min-h-[480px]">
                <div className="col-span-1 flex flex-col justify-center gap-7 px-10 md:px-14 py-14">
                  <ElietLogo svgData={deskSvg} />
                  <div className="h-px bg-white/15 w-full" />
                  <h2 className="font-['Overpass',sans-serif] font-extrabold text-[36px] text-white uppercase leading-tight tracking-[-0.5px]">
                    Why Professionals Choose ELIET
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {["Same-day parts shipping", "Local reps across the US", "Service you can count on", "30+ years of engineering"].map((item, i) => (
                      <motion.li key={item} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.09 }} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center" style={{ backgroundColor: ORANGE }}>
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                        <span className="font-['Overpass',sans-serif] font-semibold text-[15px] text-white">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <button onClick={() => { setPage("products"); window.scrollTo({ top: 0 }); }}
                    className="self-start px-7 py-3.5 rounded-full bg-white font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] transition-all duration-200 hover:scale-105"
                    style={{ color: DARK }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = ORANGE; e.currentTarget.style.color = "white"; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = DARK; }}>
                    All Products
                  </button>
                </div>
                <div className="hidden md:block col-span-1 relative overflow-hidden">
                  <img src={imgDownloadsWhyP1} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" />
                </div>
                <div className="hidden md:block col-span-1 relative overflow-hidden">
                  <img src={imgDownloadsWhyP2} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      <Newsletter />
      <Footer setPage={setPage} svgData={deskSvg} />
    </>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// DETAIL PAGE
// ══════════════════════════════════════════════════════════════════════════════

const DETAIL_TABS = ["Features", "Technology", "Specifications", "Accessories & Engine", "Video"] as const;
type DetailTab = typeof DETAIL_TABS[number];

/** Detail-page Compare control — same YITH checkbox/button as the shop loop */
function CompareButtonForDetail({ productId }: { productId: number }) {
  if (productId < 0) return null;
  return <CompareCheckbox productId={productId} />;
}

// Reusable product detail template: everything it renders comes from `product`
// (see products.ts — WooCommerce supplies this data in production).
function DetailPage({ product, setPage }: { product: ProductDetail; setPage: (p: Page) => void }) {
  const catalogMatch = CATALOG.find((c) => c.name === product.name || c.sku === product.sku);
  const detailProductId = catalogMatch?.id ?? -1;
  const [activeTab, setActiveTab] = useState<DetailTab>("Features");
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#eee] w-full px-6 md:px-12 lg:px-20 py-4">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-['Overpass',sans-serif] text-[14px] text-[#777]">
            <button onClick={() => setPage("home")} className="hover:underline transition-colors" style={{ color: ORANGE }}>Home</button>
            <span> / </span>
            <button onClick={() => setPage("products")} className="hover:underline transition-colors" style={{ color: ORANGE }}>Products</button>
            <span> / {product.name}</span>
          </p>
        </div>
      </div>

      {/* Hero product section */}
      <section className="bg-white w-full px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-[1440px] mx-auto">
          <FadeUp>
            <div className="bg-[#f5f5f5] rounded-2xl border border-[#e0e0e0] overflow-hidden flex flex-col lg:flex-row">
              {/* Image */}
              <div className="relative lg:w-[560px] shrink-0 bg-white overflow-hidden" style={{ minHeight: 520 }}>
                <img src={product.image} alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
                <button onClick={() => setLightbox(true)}
                  className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 z-10"
                  style={{ backgroundColor: ORANGE }}>
                  <svg width="14" height="14" viewBox="0 0 34 34" fill="none">
                    <path d={detailSvg.p1315c280} fill="white" />
                  </svg>
                </button>
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col gap-6 px-8 md:px-10 py-10">
                <h1 className="font-['Overpass',sans-serif] font-extrabold text-[38px] md:text-[46px] text-[#131316] uppercase tracking-[1px] leading-none">
                  {product.name}
                </h1>
                <div className="flex items-center gap-5 flex-wrap">
                  <span className="font-['Overpass',sans-serif] font-semibold text-[12px] uppercase tracking-[1px]" style={{ color: ORANGE }}>
                    {product.sku}
                  </span>
                  <span className="text-[#ccc]">|</span>
                  <span className="font-['Overpass',sans-serif] text-[13px] text-[#888]">{product.engine}</span>
                </div>
                <p className="font-['Overpass',sans-serif] text-[14px] text-[#444] leading-[1.8] max-w-lg">
                  {product.description}
                </p>

                {/* Quick specs grid */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-xs pt-2">
                  {product.specs.slice(0, 4).map((s) => (
                    <div key={s.label} className="flex flex-col gap-0.5">
                      <span className="font-['Overpass',sans-serif] text-[10px] font-bold uppercase tracking-[1.5px] text-[#b0b0b0]">{s.label}</span>
                      <span className="font-['Overpass',sans-serif] text-[14px] font-bold text-[#131316]">{s.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => { setPage("demo"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="px-7 py-3.5 rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-white hover:scale-105 hover:brightness-110 transition-all duration-200"
                    style={{ backgroundColor: ORANGE, boxShadow: `0 4px 20px ${ORANGE}40` }}>
                    Request a Demo →
                  </button>
                  <button
                    onClick={() => { setPage("downloads"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="font-['Overpass',sans-serif] font-bold text-[12px] uppercase tracking-[1px] hover:opacity-60 transition-opacity"
                    style={{ color: ORANGE }}>
                    ↓ Download the Manual
                  </button>
                  <CompareButtonForDetail productId={detailProductId} />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={() => setLightbox(false)}>
          <div className="relative max-w-3xl w-full mx-6" onClick={e => e.stopPropagation()}>
            <img src={product.image} alt={product.name} className="w-full rounded-2xl shadow-2xl" />
            <button onClick={() => setLightbox(false)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-[#f0f0f0] transition-colors font-bold text-[#131316] text-xl leading-none">
              ×
            </button>
          </div>
        </div>
      )}

      {/* Tabs + content */}
      <section className="bg-white w-full px-6 md:px-12 lg:px-20 pb-12">
        <div className="max-w-[1440px] mx-auto">
          {/* Tab bar */}
          <div className="border-b border-[#ddd] flex items-center overflow-x-auto mb-8">
            {DETAIL_TABS.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className="shrink-0 relative px-5 py-4 font-['Overpass',sans-serif] font-bold text-[12px] uppercase tracking-[1px] transition-colors duration-200 whitespace-nowrap"
                style={{ color: activeTab === tab ? "#1a1a1a" : "#999" }}>
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="detail-tab-indicator"
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ backgroundColor: ORANGE }}
                    transition={{ duration: 0.2 }} />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeTab}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}>

              {activeTab === "Features" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((f, i) => (
                    <FadeUp key={f.title} delay={i * 0.06}>
                      <div className="flex gap-5 p-5 rounded-xl bg-[#f8f8f8] border border-[#eee] hover:border-[#ef7d00] hover:shadow-md transition-all duration-300 group h-full">
                        <div className="shrink-0 w-[110px] h-[110px] rounded-xl overflow-hidden bg-[#e8e8e8]">
                          <img src={f.img} alt={f.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex flex-col gap-2 min-w-0">
                          <p className="font-['Overpass',sans-serif] font-bold text-[13px] text-[#131316] uppercase tracking-[0.8px]">{f.title}</p>
                          <p className="font-['Overpass',sans-serif] text-[13px] text-[#666] leading-relaxed">{f.desc}</p>
                        </div>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              )}

              {activeTab === "Technology" && (
                <div className="max-w-2xl flex flex-col gap-8">
                  <div className="flex flex-col gap-3">
                    <OrangeAccent />
                    <h3 className="font-['Overpass',sans-serif] font-extrabold text-[28px] text-[#131316] uppercase tracking-[-0.5px]">{product.technology.heading}</h3>
                  </div>
                  <p className="font-['Overpass',sans-serif] text-[14px] text-[#555] leading-[1.8]">
                    {product.technology.body}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.technology.points.map(item => (
                      <div key={item.title} className="p-5 rounded-xl bg-[#f8f8f8] border border-[#eee]">
                        <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: ORANGE }} />
                        <p className="font-['Overpass',sans-serif] font-bold text-[13px] text-[#131316] uppercase tracking-[0.5px] mb-1">{item.title}</p>
                        <p className="font-['Overpass',sans-serif] text-[13px] text-[#777] leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "Specifications" && (
                <div className="max-w-lg">
                  <div className="rounded-xl border border-[#eee] overflow-hidden">
                    {product.specs.map((s, i) => (
                      <div key={s.label}
                        className={`flex items-center justify-between px-6 py-4 border-b border-[#eee] last:border-0 ${i % 2 === 0 ? "bg-[#f8f8f8]" : "bg-white"}`}>
                        <span className="font-['Overpass',sans-serif] font-bold text-[12px] uppercase tracking-[1px] text-[#999]">{s.label}</span>
                        <span className="font-['Overpass',sans-serif] font-semibold text-[14px] text-[#131316]">{s.value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="font-['Overpass',sans-serif] text-[11px] text-[#bbb] mt-4">
                    Specifications subject to change without notice. Contact your dealer for current production specifications.
                  </p>
                </div>
              )}

              {activeTab === "Accessories & Engine" && (
                <div className="flex flex-col gap-10 max-w-2xl">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <OrangeAccent />
                      <h3 className="font-['Overpass',sans-serif] font-extrabold text-[22px] text-[#131316] uppercase">Engine Options</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.engineOptions.map(eng => (
                        <div key={eng.name} className="p-5 rounded-xl border border-[#eee] bg-[#f8f8f8] flex flex-col gap-2">
                          <p className="font-['Overpass',sans-serif] font-bold text-[14px] text-[#131316] uppercase tracking-[0.5px]">{eng.name}</p>
                          <p className="font-['Overpass',sans-serif] font-extrabold text-[22px]" style={{ color: ORANGE }}>{eng.hp}</p>
                          <p className="font-['Overpass',sans-serif] text-[12px] text-[#999]">{eng.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <OrangeAccent />
                      <h3 className="font-['Overpass',sans-serif] font-extrabold text-[22px] text-[#131316] uppercase">Accessories</h3>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      {product.accessories.map(acc => (
                        <div key={acc.code} className="flex items-center justify-between px-5 py-4 rounded-xl bg-[#f8f8f8] border border-[#eee] hover:border-[#ef7d00] transition-colors duration-200">
                          <div>
                            <p className="font-['Overpass',sans-serif] font-bold text-[13px] text-[#131316]">{acc.name}</p>
                            <p className="font-['Overpass',sans-serif] text-[11px] tracking-[1px] uppercase mt-0.5" style={{ color: ORANGE }}>{acc.code}</p>
                          </div>
                          <button className="font-['Overpass',sans-serif] font-bold text-[12px] uppercase tracking-[1px] hover:opacity-60 transition-opacity" style={{ color: ORANGE }}>
                            Enquire →
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Video" && (
                <div className="flex flex-col items-center py-16">
                  <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden bg-[#131316] flex items-center justify-center" style={{ height: 380 }}>
                    <div className="flex flex-col items-center gap-4">
                      <button className="w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                        style={{ backgroundColor: ORANGE }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
                      </button>
                      <p className="font-['Overpass',sans-serif] text-white/40 text-[14px]">Video coming soon</p>
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Why ELIET */}
      <section className="w-full px-6 md:px-12 lg:px-20 pb-20">
        <FadeUp>
          <div className="max-w-[1440px] mx-auto">
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 480 }}>
              <img src={imgDetailWhyBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/65" />
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 min-h-[480px]">
                <div className="col-span-1 flex flex-col justify-center gap-7 px-10 md:px-14 py-14">
                  <ElietLogo svgData={deskSvg} />
                  <div className="h-px bg-white/15 w-full" />
                  <h2 className="font-['Overpass',sans-serif] font-extrabold text-[36px] text-white uppercase leading-tight tracking-[-0.5px]">
                    Why Professionals Choose ELIET
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {["Same-day parts shipping", "Local reps across the US", "Service you can count on", "30+ years of engineering"].map((item, i) => (
                      <motion.li key={item} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.09 }} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center" style={{ backgroundColor: ORANGE }}>
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                        <span className="font-['Overpass',sans-serif] font-semibold text-[15px] text-white">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <button onClick={() => { setPage("products"); window.scrollTo({ top: 0 }); }}
                    className="self-start px-7 py-3.5 rounded-full bg-white font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] transition-all duration-200 hover:scale-105"
                    style={{ color: DARK }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = ORANGE; e.currentTarget.style.color = "white"; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = DARK; }}>
                    All Products
                  </button>
                </div>
                <div className="hidden md:block col-span-1 relative overflow-hidden">
                  <img src={imgDetailWhyP1} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" />
                </div>
                <div className="hidden md:block col-span-1 relative overflow-hidden">
                  <img src={imgDetailWhyP2} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      <Newsletter />
      <Footer setPage={setPage} svgData={deskSvg} />
    </>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PRODUCTS PAGE
// ══════════════════════════════════════════════════════════════════════════════

const PRODUCT_CATEGORIES = ["All", ...Array.from(new Set(CATALOG.map((p) => p.category)))];
const SORT_OPTIONS = ["Default sorting", "Name A–Z", "Name Z–A", "Newest first"];

// Real 2026 equipment catalog (see products.ts). In production this is the
// WooCommerce product list.
const PRODUCTS_DATA = CATALOG;

const ITEMS_PER_PAGE = 8;

function ProductCard({ product, onClick }: { product: typeof PRODUCTS_DATA[0]; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  const isCompareSelected = useComparison().isSelected(product.id);

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col"
      style={{
        border: `1.5px solid ${isCompareSelected ? ORANGE : hovered ? ORANGE : "#e2e2e2"}`,
        boxShadow: isCompareSelected
          ? `0 0 0 2px ${ORANGE}30, 0 12px 32px rgba(0,0,0,0.1)`
          : hovered
            ? "0 12px 32px rgba(0,0,0,0.1)"
            : "0 2px 8px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-3px)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-[#f8f8f8]" style={{ height: 260 }}>
        <img
          src={imgProductCard}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
        />
        <div
          className="absolute top-3 right-3 px-2 py-1 rounded-full text-[10px] font-['Overpass',sans-serif] font-bold uppercase tracking-[1px]"
          style={{ backgroundColor: `${ORANGE}18`, color: ORANGE }}
        >
          {product.category}
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2.5 p-5 flex-1">
        <p className="font-['Overpass',sans-serif] font-bold text-[15px] text-[#131316] uppercase tracking-[0.5px] leading-tight">
          {product.name}
        </p>
        <p className="font-['Overpass',sans-serif] text-[11px] font-semibold tracking-[1px] uppercase" style={{ color: ORANGE }}>
          {product.sku}
        </p>
        <p className="font-['Overpass',sans-serif] text-[12px] text-[#888]">{product.engine}</p>
        <p className="font-['Overpass',sans-serif] text-[13px] text-[#555] leading-relaxed flex-1">{product.desc}</p>
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          <CompareCheckbox productId={product.id} />
          <button
            className="px-4 py-2 rounded-lg font-['Overpass',sans-serif] font-bold text-[11px] uppercase tracking-[1.5px] text-white transition-all duration-200"
            style={{ backgroundColor: ORANGE }}
          >
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductsPage({ setPage, openProduct }: { setPage: (p: Page) => void; openProduct: (p: ProductDetail) => void }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState("Default sorting");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);

  const filtered = PRODUCTS_DATA.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "Name A–Z") return a.name.localeCompare(b.name);
    if (sort === "Name Z–A") return b.name.localeCompare(a.name);
    if (sort === "Newest first") return b.id - a.id;
    return a.id - b.id;
  });

  const totalPages = Math.ceil(sorted.length / ITEMS_PER_PAGE);
  const paginated = sorted.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const navigate = (p: number) => { setCurrentPage(p); window.scrollTo({ top: 400, behavior: "smooth" }); };

  return (
    <>
      {/* Hero */}
      <section className="relative w-full flex items-center justify-center overflow-hidden" style={{ minHeight: 480 }}>
        <div className="absolute inset-0">
          <img src={imgProductsHero} alt="All Products" className="w-full h-full object-cover" style={{ objectPosition: "center 40%" }} />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.78)" }} />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 mt-10">
          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-['Overpass',sans-serif] font-extrabold text-[64px] md:text-[90px] text-white uppercase leading-none tracking-[-2px]"
          >
            All Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-['Overpass',sans-serif] text-[18px] md:text-[22px] text-white/70 max-w-xl leading-relaxed"
          >
            Professional-grade equipment for green waste processing, lawn care, and beyond.
          </motion.p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-white w-full px-6 md:px-12 lg:px-20 py-5 border-b border-[#eee]">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-['Overpass',sans-serif] text-[14px] text-[#777]">
            <button onClick={() => setPage("home")} className="transition-colors hover:underline" style={{ color: ORANGE }}>Home</button>
            <span> / Products</span>
          </p>
        </div>
      </section>

      {/* Filter + Sort toolbar */}
      <section className="bg-white w-full px-6 md:px-12 lg:px-20 pt-8 pb-6 sticky top-[70px] z-30 border-b border-[#f0f0f0]" style={{ backdropFilter: "blur(10px)" }}>
        <div className="max-w-[1440px] mx-auto flex flex-col gap-4">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                className="px-4 py-2 rounded-full font-['Overpass',sans-serif] font-semibold text-[12px] uppercase tracking-[1px] transition-all duration-200"
                style={{
                  backgroundColor: activeCategory === cat ? ORANGE : "#f4f4f4",
                  color: activeCategory === cat ? "white" : "#555",
                  border: `1.5px solid ${activeCategory === cat ? ORANGE : "transparent"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort + count row */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <p className="font-['Overpass',sans-serif] text-[13px] text-[#888]">
              Showing {paginated.length} of {sorted.length} products
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilter(!showFilter)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f4f4f4] font-['Overpass',sans-serif] font-semibold text-[13px] text-[#444] hover:bg-[#eee] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d={productsSvg.p2259a030} fill="#52505E" />
                </svg>
                Filter
              </button>
              <select
                value={sort}
                onChange={(e) => { setSort(e.target.value); setCurrentPage(1); }}
                className="h-9 px-3 pr-8 rounded-lg border border-[#ddd] bg-white font-['Overpass',sans-serif] text-[13px] text-[#444] focus:outline-none focus:border-[#ef7d00] transition-colors appearance-none cursor-pointer"
              >
                {SORT_OPTIONS.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="bg-white w-full px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          {paginated.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {paginated.map((p) => (
                <ProductCard key={p.id} product={p}
                  onClick={() => { openProduct(productDetailFrom(p)); window.scrollTo({ top: 0, behavior: "smooth" }); }} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 py-20 text-center">
              <p className="font-['Overpass',sans-serif] font-bold text-xl text-[#ccc] uppercase tracking-[2px]">No products found</p>
              <button onClick={() => setActiveCategory("All")} style={{ color: ORANGE }} className="font-['Overpass',sans-serif] font-semibold text-[14px] underline">Clear filter</button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 pt-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => navigate(p)}
                  className="w-10 h-10 rounded-lg font-['Overpass',sans-serif] font-bold text-[15px] transition-all duration-200"
                  style={{
                    backgroundColor: currentPage === p ? ORANGE : "transparent",
                    color: currentPage === p ? "white" : "#1a1a1a",
                    border: `1.5px solid ${currentPage === p ? ORANGE : "#eee"}`,
                  }}
                >
                  {p}
                </button>
              ))}
              {currentPage < totalPages && (
                <button onClick={() => navigate(currentPage + 1)}
                  className="w-10 h-10 rounded-lg border border-[#eee] font-['Overpass',sans-serif] font-bold text-[15px] text-[#1a1a1a] hover:border-[#ef7d00] transition-colors">
                  →
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Why ELIET — shared banner */}
      <section className="w-full px-6 md:px-12 lg:px-20 pb-20">
        <FadeUp>
          <div className="max-w-[1440px] mx-auto">
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 480 }}>
              <img src={imgProductsWhyBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/65" />
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 min-h-[480px]">
                <div className="col-span-1 flex flex-col justify-center gap-7 px-10 md:px-14 py-14">
                  <ElietLogo svgData={deskSvg} />
                  <div className="h-px bg-white/15 w-full" />
                  <h2 className="font-['Overpass',sans-serif] font-extrabold text-[38px] text-white uppercase leading-tight tracking-[-0.5px]">
                    Why Professionals Choose ELIET
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {["Same-day parts shipping", "Local reps across the US", "Service you can count on", "30+ years of engineering"].map((item, i) => (
                      <motion.li key={item} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.09 }} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center" style={{ backgroundColor: ORANGE }}>
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                        <span className="font-['Overpass',sans-serif] font-semibold text-[15px] text-white">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <button className="self-start px-7 py-3.5 rounded-full bg-white font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] transition-all duration-200 hover:scale-105"
                    style={{ color: DARK }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = ORANGE; e.currentTarget.style.color = "white"; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = DARK; }}>
                    All Products
                  </button>
                </div>
                <div className="hidden md:block col-span-1 relative overflow-hidden">
                  <img src={imgProductsWhyPhoto1} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" />
                </div>
                <div className="hidden md:block col-span-1 relative overflow-hidden">
                  <img src={imgProductsWhyPhoto2} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      <Newsletter />
      <Footer setPage={setPage} svgData={deskSvg} />
    </>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// ABOUT ELIET PAGE
// ══════════════════════════════════════════════════════════════════════════════

const ABOUT_TABS = ["The ELIET Story", "ELIET Values", "USA Team", "Testimonials", "Video"] as const;
type AboutTab = typeof ABOUT_TABS[number];

function AboutHero() {
  return (
    <section className="relative w-full min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={imgAboutHero} alt="About ELIET" className="w-full h-full object-cover" style={{ objectPosition: "center 40%" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(15,15,18,0.25) 0%, rgba(15,15,18,0.65) 70%, rgba(15,15,18,0.9) 100%)" }} />
      </div>
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-20 pt-28 pb-20">
        <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="h-[10px] w-[133px] bg-white mb-10 origin-left" />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
          className="font-['Overpass',sans-serif] font-bold text-2xl md:text-[41px] text-white uppercase tracking-[-0.5px] leading-none mb-4">
          About ELIET
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-['Overpass',sans-serif] font-extrabold text-[64px] md:text-[90px] lg:text-[110px] text-white uppercase leading-none tracking-[-2px] mb-8">
          Serious.<br />Purposeful.<br /><span style={{ color: ORANGE }}>Belgian.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
          className="font-['Overpass',sans-serif] text-xl text-white/70 max-w-xl leading-relaxed">
          Engineered for professionals. Built to last. Family-owned since 1980.
        </motion.p>
      </div>
    </section>
  );
}

function AboutSubnav({ active, setActive }: { active: AboutTab; setActive: (t: AboutTab) => void }) {
  return (
    <div className="sticky top-[70px] z-40 bg-white border-b border-[#ddd] w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center gap-0 overflow-x-auto">
        {ABOUT_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className="shrink-0 relative px-5 py-4 font-['Overpass',sans-serif] font-bold text-[12px] uppercase tracking-[1px] transition-colors duration-200 whitespace-nowrap"
            style={{ color: active === tab ? "#1a1a1a" : "#888" }}
          >
            {tab}
            {active === tab && (
              <motion.div layoutId="about-tab-bar" className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ backgroundColor: ORANGE }} transition={{ duration: 0.2 }} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── The ELIET Story ──────────────────────────────────────────────────────────

function ElietStorySection() {
  return (
    <section id="story" className="bg-white w-full px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        {/* Intro copy + photo */}
        <FadeUp>
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1 min-w-0">
              <div className="flex flex-col gap-4 mb-6">
                <OrangeAccent />
                <h2 className="font-['Overpass',sans-serif] font-medium text-[42px] md:text-[52px] text-[#131316] uppercase tracking-[-0.96px] leading-tight">
                  The ELIET Story
                </h2>
              </div>
              <div className="font-['Overpass',sans-serif] text-[15px] text-[#444] leading-[1.75] space-y-4 max-w-xl">
                <p>Time does not stand still. Certainly not at ELIET. That's why our designers are already working on tomorrow's machines. New prototypes are created in our own research and development department, <strong className="text-[#131316]">ELIET Creative Lab™</strong>, that will determine the future of the market.</p>
                <p>Driven by enthusiasm and hands-on experience, ELIET continues its search for applications that will make garden work even easier. Quality, safety, and care for the environment are of paramount importance.</p>
                <p>Our engineers constantly work on the improvement of existing machines in addition to designing new machines.</p>
                <blockquote className="border-l-4 pl-5 italic text-[#666]" style={{ borderColor: ORANGE }}>
                  <p className="mb-2">"By listening to the customer, we identify certain problems in the garden world, for which we then seek a sustainable, timeless solution — every single day."</p>
                  <footer className="font-bold not-italic" style={{ color: ORANGE }}>— Emiel Lietaer, founder & head of ELIET Creative Lab™</footer>
                </blockquote>
              </div>
            </div>
            <div className="shrink-0 w-full lg:w-[500px] h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img src={imgAboutStory} alt="The ELIET story" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </FadeUp>

        {/* Two-column text */}
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              <h3 className="font-['Overpass',sans-serif] font-medium text-2xl text-[#131316] uppercase tracking-[-0.5px]">How It All Started</h3>
              <div className="font-['Overpass',sans-serif] text-[14px] text-[#555] leading-[1.75] space-y-3">
                <p>What started as a business run by a single person has now grown into a family-run company that influences markets around the world.</p>
                <p>The name ELIET is a contraction of founder <strong className="text-[#131316]">Emiel Lietaer</strong>'s first and last name. Born in 1947 into a family of 8 successive generations of blacksmiths, he built broad technical experience in French and German machinery factories.</p>
                <p>Faithful to his roots, Emiel set up a metal construction workshop. Due to the revival of garden culture in the 1970s, expansion into garden machinery followed quickly.</p>
                <p>The first ELIET machines were produced around 1980. The great breakthrough came in 1986 with the International Agricultural Week at the Heysel in Brussels.</p>
                <p className="font-bold text-[#131316]">ELIET, a worldwide player...</p>
                <p>ELIET machines are distributed across Europe and far beyond. <a href="http://www.elietmachines.com/en/pages/dealers" target="_blank" className="underline transition-colors" style={{ color: ORANGE }}>Find a dealer near you.</a></p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-['Overpass',sans-serif] font-medium text-2xl text-[#131316] uppercase tracking-[-0.5px]">Our Philosophy: Designing Better Machines</h3>
              <div className="font-['Overpass',sans-serif] text-[14px] text-[#555] leading-[1.75] space-y-3">
                {[
                  { n: "1", title: "Simplicity & User Comfort", text: "We believe simplicity is a virtue. Every machine offers maximum comfort, user-friendliness, and guaranteed operational safety." },
                  { n: "2", title: "Performance & Value", text: "We engineer machines that outperform their price tag. Investing in ELIET means higher productivity and superior multifunctionality." },
                  { n: "3", title: "Continuous Improvement", text: "An ELIET machine is never truly finished. We remain open to improvement from the first prototype through to production and beyond." },
                  { n: "4", title: "Customer-Driven Innovation", text: "The Eliet Creative Lab™ actively listens to feedback. This direct communication often leads to internationally award-winning systems." },
                  { n: "5", title: "Rigorous Safety Testing", text: "Every machine is tested under professional working conditions before production. We deliver a safe, reliable machine to every customer." },
                ].map((item) => (
                  <div key={item.n} className="flex gap-3">
                    <span className="font-bold shrink-0 mt-0.5" style={{ color: ORANGE }}>{item.n}.</span>
                    <div>
                      <strong className="text-[#131316] font-bold">{item.title}</strong>
                      <p className="mt-1">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Award logos */}
        <FadeUp>
          <div className="border-t border-[#eee] pt-14">
            <p className="font-['Overpass',sans-serif] font-bold text-[11px] uppercase tracking-[2px] text-[#aaa] mb-8 text-center">Innovation Awards</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {[imgAwardGoudenBuxus, imgAwardGalabau, imgAwardAre, imgAwardSiber, imgAwardOmnigreen, imgAwardGalabau2, imgAwardDaw, imgAwardDme].map((img, i) => (
                <img key={i} src={img} alt="Award" className="h-[72px] w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300" />
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── ELIET Values ─────────────────────────────────────────────────────────────

const VALUES = [
  { title: "Innovation", text: "The ELIET Creative Lab™ constantly develops new concepts. An ELIET machine is never truly finished — we listen to customers and evolve." },
  { title: "Performance", text: "The performance of every ELIET machine is worth more than its price. Higher productivity, dependability, and excellent ROI." },
  { title: "User-Friendliness", text: "We design for operator comfort and safety. Every machine is tested under professional working conditions." },
  { title: "Listen to the Customer", text: "Customer feedback drives our development. Suggested modifications can be implemented quickly thanks to our flexible structure." },
];

function ElietValuesSection() {
  return (
    <section id="values" className="bg-white w-full px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
        <FadeUp>
          <div className="flex flex-col gap-3">
            <OrangeAccent />
            <h2 className="font-['Overpass',sans-serif] font-medium text-[36px] md:text-[42px] text-[#131316] uppercase tracking-[-0.96px]">ELIET Values</h2>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {VALUES.map((v, i) => (
            <FadeUp key={v.title} delay={i * 0.08}>
              <div className="flex gap-5 items-start p-6 rounded-xl bg-[#f8f8f8] border border-[#eee] hover:border-[#ef7d00] hover:shadow-md transition-all duration-300 group">
                <div className="shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-[#eee]">
                  <img src={imgValueIcon} alt="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-['Overpass',sans-serif] font-bold text-[16px] text-[#131316] uppercase tracking-[1px]">{v.title}</p>
                  <p className="font-['Overpass',sans-serif] text-[14px] text-[#666] leading-relaxed">{v.text}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── USA Team ─────────────────────────────────────────────────────────────────

const TEAM = [
  { img: imgTeamAndrew, name: "Andrew Shields", title: "Country Manager — ELIET USA" },
  { img: imgTeamTbd1, name: "TBD", title: "Chief Financial Officer" },
  { img: imgTeamTbd2, name: "TBD", title: "Chief Sourcing Officer" },
];

function UsaTeamSection() {
  return (
    <section id="team" className="bg-[#f4f4f4] w-full px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
        <FadeUp>
          <div className="flex flex-col gap-3">
            <OrangeAccent />
            <h2 className="font-['Overpass',sans-serif] font-medium text-[36px] md:text-[42px] text-[#131316] uppercase tracking-[-0.96px]">USA Team</h2>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {TEAM.map((member, i) => (
            <FadeUp key={member.name + i} delay={i * 0.1}>
              <div className="flex flex-col gap-5 group">
                <div className="relative overflow-hidden rounded-2xl shadow-md" style={{ height: 420 }}>
                  <img src={member.img} alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-['Overpass',sans-serif] font-bold text-[26px] text-[#131316] uppercase tracking-[-0.3px]">{member.name}</p>
                  <p className="font-['Overpass',sans-serif] font-semibold text-[14px] text-[#888] uppercase tracking-[0.5px]">{member.title}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  { quote: "The ELIET shredder transformed how we handle brush on our golf course. Nothing else comes close for throughput and reliability.", name: "James R.", role: "Golf Course Superintendent" },
  { quote: "After 15 years of using other brands, switching to ELIET was a revelation. The E-Power series is genuinely game-changing.", name: "Maria S.", role: "Landscape Contractor" },
  { quote: "Same-day parts and a rep who actually knows the machines. That's how ELIET earns loyalty.", name: "David K.", role: "Sports Turf Manager" },
];

function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white w-full px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
        <FadeUp>
          <div className="flex flex-col gap-3">
            <OrangeAccent />
            <h2 className="font-['Overpass',sans-serif] font-medium text-[36px] md:text-[42px] text-[#131316] uppercase tracking-[-0.96px]">Testimonials</h2>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="flex flex-col gap-6 p-7 rounded-xl bg-[#f8f8f8] border border-[#eee] hover:border-[#ef7d00] hover:shadow-md transition-all duration-300 h-full">
                <div className="text-[36px] leading-none font-serif" style={{ color: ORANGE }}>"</div>
                <p className="font-['Overpass',sans-serif] italic text-[14px] text-[#555] leading-relaxed flex-1">{t.quote}</p>
                <div className="border-t border-[#e5e5e5] pt-4">
                  <p className="font-['Overpass',sans-serif] font-bold text-[15px] text-[#131316] uppercase tracking-[0.5px]">{t.name}</p>
                  <p className="font-['Overpass',sans-serif] text-[12px] text-[#999] uppercase tracking-[0.5px]">{t.role}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Brochure + FAQ ───────────────────────────────────────────────────────────

const FAQS = [
  { q: "General", a: "ELIET machines are engineered for professional landscaping, golf courses, sports turf management, and large-scale garden maintenance. Contact us to find the right machine for your application." },
  { q: "Lawn", a: "Our dethatchers and overseeding machines dramatically improve lawn health by removing thatch buildup and ensuring seed-to-soil contact. Ideal for sports turf and golf fairways." },
  { q: "Overseeding", a: "ELIET overseeding machines combine scarification and seeding in a single pass, reducing labor time and improving germination rates significantly." },
  { q: "Seeding Machine", a: "Our precision seeding machines distribute seed evenly at controlled depths, giving you consistent coverage across large areas." },
  { q: "Shredding", a: "The patented ELIET Chopping Principle™ reduces brush and green waste to fine mulch in a single pass. Far more efficient than conventional drum shredders." },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-[#eee] bg-white overflow-hidden transition-all duration-200 hover:border-[#ccc]">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left">
        <span className="font-['Overpass',sans-serif] font-medium text-[18px] text-[#131316] uppercase tracking-[-0.5px]">{q}</span>
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <path d="M1 1L7 7L13 1" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="px-6 pb-5 font-['Overpass',sans-serif] text-[14px] text-[#666] leading-relaxed border-t border-[#f0f0f0] pt-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function BrochureFaqSection() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", address: "", city: "", pref: "digital" });
  const [submitted, setSubmitted] = useState(false);
  const set = (k: keyof typeof form) => (v: string) => setForm(f => ({ ...f, [k]: v }));
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 5000); };

  return (
    <section className="bg-[#f4f4f4] w-full px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-[1440px] mx-auto">
        <FadeUp>
          <div className="flex flex-col gap-3 mb-14">
            <OrangeAccent />
            <h2 className="font-['Overpass',sans-serif] font-medium text-[36px] md:text-[42px] text-[#131316] uppercase tracking-[-0.96px]">Request a Brochure & FAQs</h2>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Brochure form */}
          <FadeUp>
            <div className="flex flex-col gap-6">
              <h3 className="font-['Overpass',sans-serif] font-medium text-[22px] text-[#131316] uppercase tracking-[-0.5px]">Request a Brochure</h3>
              <form onSubmit={submit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "First name *", k: "firstName", placeholder: "First name" },
                    { label: "Last name *", k: "lastName", placeholder: "Last name" },
                    { label: "Email address *", k: "email", placeholder: "you@company.com" },
                    { label: "Company name", k: "company", placeholder: "Your company" },
                    { label: "Mailing address", k: "address", placeholder: "Street address" },
                    { label: "City, State, ZIP", k: "city", placeholder: "City, State ZIP" },
                  ].map(({ label, k, placeholder }) => (
                    <div key={k} className="flex flex-col gap-2">
                      <label className="font-['Overpass',sans-serif] font-bold text-[13px] text-[#1a1a1a]">{label}</label>
                      <input placeholder={placeholder} value={form[k as keyof typeof form]}
                        onChange={e => set(k as keyof typeof form)(e.target.value)}
                        className="h-11 px-4 rounded-lg bg-white border border-[#ddd] text-[14px] font-['Overpass',sans-serif] placeholder:text-[#aaa] focus:outline-none focus:border-[#ef7d00] transition-colors duration-150" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-['Overpass',sans-serif] font-bold text-[13px] text-[#1a1a1a]">Brochure preference</label>
                  <select value={form.pref} onChange={e => set("pref")(e.target.value)}
                    className="h-11 px-4 rounded-lg bg-white border border-[#ddd] text-[14px] font-['Overpass',sans-serif] focus:outline-none focus:border-[#ef7d00] transition-colors duration-150">
                    <option value="digital">Digital (PDF via email)</option>
                    <option value="print">Printed (mailed to address)</option>
                  </select>
                </div>
                <button type="submit" className="self-start px-8 py-4 rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-white transition-all duration-300 hover:scale-[1.03]"
                  style={{ backgroundColor: submitted ? "#16a34a" : ORANGE, boxShadow: `0 4px 20px ${submitted ? "rgba(22,163,74,0.35)" : `${ORANGE}40`}` }}>
                  {submitted ? "✓ Request Sent" : "Send Brochure Request →"}
                </button>
              </form>
            </div>
          </FadeUp>

          {/* FAQ accordion */}
          <FadeUp delay={0.1}>
            <div className="flex flex-col gap-5">
              <h3 className="font-['Overpass',sans-serif] font-medium text-[22px] text-[#131316] uppercase tracking-[-0.5px]">Quick FAQs</h3>
              <div className="flex flex-col gap-2.5">
                {FAQS.map((faq) => <FaqItem key={faq.q} {...faq} />)}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ─── Have a Question CTA ──────────────────────────────────────────────────────

function HaveAQuestionCta() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-6 pb-20">
      <FadeUp>
        <div className="max-w-[1440px] mx-auto">
          <div className="relative rounded-2xl overflow-hidden group" style={{ minHeight: 360 }}>
            <img src={imgAboutDealer} alt="Have a question" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(15,15,18,0.9) 40%, rgba(15,15,18,0.3) 100%)" }} />
            <div className="absolute top-0 left-0 w-1 h-16" style={{ backgroundColor: ORANGE }} />
            <div className="absolute top-0 left-0 h-1 w-16" style={{ backgroundColor: ORANGE }} />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-10 md:px-16 py-14">
              <div className="flex flex-col gap-4 max-w-lg">
                <h2 className="font-['Overpass',sans-serif] font-extrabold text-5xl md:text-[62px] text-white uppercase leading-none tracking-[-1px]">
                  Have a question?
                </h2>
                <p className="font-['Overpass',sans-serif] text-[16px] text-white/65 leading-relaxed">
                  Our specialists are here to help. Reach out and we'll connect you with the right person.
                </p>
              </div>
              <button className="shrink-0 px-8 py-4 bg-white rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] transition-all duration-200 hover:scale-105"
                style={{ color: DARK }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = ORANGE; e.currentTarget.style.color = "white"; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = DARK; }}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

// ─── About page root ──────────────────────────────────────────────────────────

const TAB_SECTIONS: Record<AboutTab, React.ReactNode> = {
  "The ELIET Story": <ElietStorySection />,
  "ELIET Values": <ElietValuesSection />,
  "USA Team": <UsaTeamSection />,
  "Testimonials": <TestimonialsSection />,
  "Video": (
    <section className="bg-white w-full px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-[1440px] mx-auto">
        <FadeUp>
          <div className="flex flex-col gap-3 mb-10">
            <OrangeAccent />
            <h2 className="font-['Overpass',sans-serif] font-medium text-[36px] text-[#131316] uppercase tracking-[-0.96px]">Video</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden bg-[#131316] flex items-center justify-center" style={{ height: 420 }}>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: ORANGE }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <p className="font-['Overpass',sans-serif] text-white/50 text-[15px]">Video content coming soon</p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  ),
};

function AboutPage({ setPage }: { setPage: (p: Page) => void }) {
  const [activeTab, setActiveTab] = useState<AboutTab>("The ELIET Story");

  return (
    <>
      <AboutHero />
      <AboutSubnav active={activeTab} setActive={setActiveTab} />
      <AnimatePresence mode="wait">
        <motion.div key={activeTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
          {TAB_SECTIONS[activeTab]}
        </motion.div>
      </AnimatePresence>
      <BrochureFaqSection />
      <HaveAQuestionCta />
      <Newsletter />
      <Footer setPage={setPage} svgData={deskSvg} />
    </>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// ROOT
// ══════════════════════════════════════════════════════════════════════════════


// ══════════════════════════════════════════════════════════════════════════════
// SUPPORT PAGES (Warranty, FAQ, Dealer Locator, Finance, Contact)
// Copy source: "Eliet Website Content Document" (client-approved, 2026-06)
// ══════════════════════════════════════════════════════════════════════════════

function PageHero({ img, title, text }: { img: string; title: string; text: string }) {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden" style={{ minHeight: 420 }}>
      <div className="absolute inset-0">
        <img src={img} alt={title} className="w-full h-full object-cover" style={{ objectPosition: "center 40%" }} />
        <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.78)" }} />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 mt-10 max-w-3xl">
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-['Overpass',sans-serif] font-extrabold text-[36px] sm:text-[48px] md:text-[72px] text-white uppercase leading-none tracking-[-2px]">
          {title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="font-['Overpass',sans-serif] text-[17px] md:text-[20px] text-white/70 leading-relaxed">
          {text}
        </motion.p>
      </div>
    </section>
  );
}

// ─── Warranty Conditions ──────────────────────────────────────────────────────

const WARRANTY_TIERS = [
  { title: "Standard Warranty", duration: "24 months", note: "from date of purchase",
    policy: "ELIET warrants new machines against defects in materials and workmanship under normal use and service.",
    rules: ["Consumer / residential use: 24 months", "Commercial / professional use: 12 months", "Rental / fleet use: 6 months"], alert: null },
  { title: "E-Power & Battery Warranty", duration: "24 months or 1,000 cycles", note: "whichever comes first",
    policy: "ELIET E-Power battery packs are warranted against defects in materials and workmanship. Battery capacity degradation is normal and not covered.",
    rules: ["Charger: 12 months", "Motor / controller: 24 months"], alert: null },
  { title: "Parts & Attachments", duration: "90 days", note: "from date of purchase",
    policy: "Replacement parts, accessories, and attachments are warranted against manufacturing defects.",
    rules: [], alert: "Wear parts (blades, knives, belts, tires, filters) are not covered under warranty." },
];

const WARRANTY_EXCLUSIONS = [
  "Normal wear and tear (blades, knives, belts, tires, filters, spark plugs)",
  "Damage caused by misuse, abuse, neglect, or improper maintenance",
  "Damage from unauthorized modifications or repairs",
  "Damage from using incorrect fuel, oil, or lubricants",
  "Damage from improper storage or operation outside specified conditions",
  "Incidental or consequential damages (lost time, lost revenue, etc.)",
  "Machines with altered serial numbers or missing identification tags",
  "Freight costs for warranty service unless specified otherwise",
];

const WARRANTY_STEPS = [
  { title: "Contact your authorized ELIET dealer", text: "Provide your machine model, serial number, and description of the issue." },
  { title: "Provide proof of purchase", text: "Original sales receipt or invoice showing date of purchase." },
  { title: "Dealer inspection", text: "The dealer will inspect the machine to determine if the issue is covered under warranty." },
  { title: "Repair or replacement", text: "If approved, ELIET will repair or replace defective parts at no charge." },
];

function WarrantyPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <>
      <PageHero img={imgDetailWhyBg} title="Warranty Conditions"
        text="ELIET stands behind the quality of our equipment. Review warranty coverage, duration, and how to file a claim." />

      {/* Client-flagged disclaimer */}
      <section className="bg-white w-full px-6 md:px-12 lg:px-20 pt-8">
        <div className="max-w-[1440px] mx-auto rounded-xl border border-amber-300 bg-amber-50 px-6 py-4">
          <p className="font-['Overpass',sans-serif] text-[13px] text-amber-800 leading-relaxed">
            <strong>Note:</strong> Placeholder content — replace with actual ELIET USA warranty information. The content below is a template and may not reflect actual warranty terms. Please verify all details with the client.
          </p>
        </div>
      </section>

      {/* Coverage matrix */}
      <section className="bg-white w-full px-6 md:px-12 lg:px-20 py-14">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <FadeUp>
            <div className="flex flex-col gap-2">
              <OrangeAccent />
              <h2 className="font-['Overpass',sans-serif] font-extrabold text-[32px] md:text-[36px] text-[#131316] uppercase tracking-[-0.96px]">Warranty Coverage</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {WARRANTY_TIERS.map((t, i) => (
              <FadeUp key={t.title} delay={i * 0.08}>
                <div className="h-full flex flex-col gap-4 p-7 rounded-2xl bg-[#f8f8f8] border border-[#eee] hover:border-[#ef7d00] transition-colors duration-300">
                  <p className="font-['Overpass',sans-serif] font-bold text-[13px] text-[#131316] uppercase tracking-[1px]">{t.title}</p>
                  <div>
                    <p className="font-['Overpass',sans-serif] font-extrabold text-[26px] leading-tight" style={{ color: ORANGE }}>{t.duration}</p>
                    <p className="font-['Overpass',sans-serif] text-[12px] text-[#999]">{t.note}</p>
                  </div>
                  <p className="font-['Overpass',sans-serif] text-[13px] text-[#666] leading-relaxed">{t.policy}</p>
                  {t.rules.length > 0 && (
                    <ul className="flex flex-col gap-2 mt-auto">
                      {t.rules.map(r => (
                        <li key={r} className="flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: ORANGE }} />
                          <span className="font-['Overpass',sans-serif] text-[13px] text-[#444]">{r}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {t.alert && (
                    <p className="mt-auto font-['Overpass',sans-serif] text-[12px] text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 leading-relaxed">{t.alert}</p>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusions */}
      <section className="bg-[#f4f4f4] w-full px-6 md:px-12 lg:px-20 py-14">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <FadeUp>
            <div className="flex flex-col gap-2">
              <OrangeAccent />
              <h2 className="font-['Overpass',sans-serif] font-extrabold text-[32px] md:text-[36px] text-[#131316] uppercase tracking-[-0.96px]">What Is Not Covered?</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {WARRANTY_EXCLUSIONS.map((x, i) => (
              <FadeUp key={x} delay={i * 0.04}>
                <div className="flex items-start gap-3 bg-white rounded-xl border border-[#eee] px-5 py-4">
                  <svg width="16" height="16" viewBox="0 0 16 16" className="shrink-0 mt-0.5"><path d="M4 4l8 8M12 4l-8 8" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" /></svg>
                  <span className="font-['Overpass',sans-serif] text-[14px] text-[#555] leading-relaxed">{x}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Claims process */}
      <section className="bg-white w-full px-6 md:px-12 lg:px-20 py-14">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <FadeUp>
            <div className="flex flex-col gap-2">
              <OrangeAccent />
              <h2 className="font-['Overpass',sans-serif] font-extrabold text-[32px] md:text-[36px] text-[#131316] uppercase tracking-[-0.96px]">How to File a Warranty Claim</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {WARRANTY_STEPS.map((st, i) => (
              <FadeUp key={st.title} delay={i * 0.08}>
                <div className="h-full flex flex-col gap-3 p-6 rounded-2xl border border-[#eee] bg-[#f8f8f8]">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-['Overpass',sans-serif] font-extrabold text-white text-[16px]" style={{ backgroundColor: ORANGE }}>{i + 1}</div>
                  <p className="font-['Overpass',sans-serif] font-bold text-[14px] text-[#131316] uppercase tracking-[0.5px] leading-snug">{st.title}</p>
                  <p className="font-['Overpass',sans-serif] text-[13px] text-[#666] leading-relaxed">{st.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="w-full px-6 md:px-12 lg:px-20 pb-20">
        <FadeUp>
          <div className="max-w-[1440px] mx-auto rounded-2xl px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8" style={{ backgroundColor: "#0f172a" }}>
            <div className="flex flex-col gap-3 max-w-xl">
              <h2 className="font-['Overpass',sans-serif] font-extrabold text-[30px] md:text-[38px] text-white uppercase leading-none tracking-[-1px]">Register Your Machine for Warranty</h2>
              <p className="font-['Overpass',sans-serif] text-[15px] text-white/55">Activate your warranty coverage and receive important product updates.</p>
            </div>
            <button onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }}
              className="shrink-0 px-8 py-4 rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-white hover:scale-105 hover:brightness-110 transition-all duration-200"
              style={{ backgroundColor: ORANGE, boxShadow: `0 4px 20px ${ORANGE}40` }}>
              Register Now
            </button>
          </div>
        </FadeUp>
      </section>

      <Newsletter />
      <Footer setPage={setPage} svgData={deskSvg} />
    </>
  );
}

// ─── Frequently Asked Questions ───────────────────────────────────────────────

const SUPPORT_FAQS = [
  "Where can I buy ELIET machines?", "Do you offer financing?", "What is the difference between models?",
  "How do I register my machine?", "How do I get replacement parts?", "Do you have service centers?",
  "What maintenance is required?", "What is the warranty period?", "Can I schedule a demo?",
  "Are ELIET machines made in the USA?",
];

function FaqPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <>
      <PageHero img={imgDownloadsWhyBg} title="Frequently Asked Questions"
        text="Answers to common questions about ELIET machines, service, warranty, and support." />

      <section className="bg-white w-full px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-[900px] mx-auto flex flex-col gap-3">
          {SUPPORT_FAQS.map((q, i) => (
            <FadeUp key={q} delay={i * 0.03}>
              <FaqItem q={q} a="[Answer content pending from client — see Eliet Website Content Document.]" />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Escalation */}
      <section className="w-full px-6 md:px-12 lg:px-20 pb-20">
        <FadeUp>
          <div className="max-w-[1440px] mx-auto rounded-2xl px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8" style={{ backgroundColor: "#0f172a" }}>
            <div className="flex flex-col gap-3 max-w-xl">
              <h2 className="font-['Overpass',sans-serif] font-extrabold text-[30px] md:text-[38px] text-white uppercase leading-none tracking-[-1px]">Still Have Questions?</h2>
              <p className="font-['Overpass',sans-serif] text-[15px] text-white/55">Our team is ready to help with any questions about ELIET equipment, parts, or service.</p>
            </div>
            <button onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }}
              className="shrink-0 px-8 py-4 rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-white hover:scale-105 hover:brightness-110 transition-all duration-200"
              style={{ backgroundColor: ORANGE, boxShadow: `0 4px 20px ${ORANGE}40` }}>
              Contact Us
            </button>
          </div>
        </FadeUp>
      </section>

      <Newsletter />
      <Footer setPage={setPage} svgData={deskSvg} />
    </>
  );
}

// ─── Dealer Locator ───────────────────────────────────────────────────────────

const DEALER_TIER_STYLES: Record<string, { bg: string; color: string }> = {
  "STAR DEALER": { bg: `${ORANGE}18`, color: ORANGE },
  "PROFESSIONAL DEALER": { bg: "#13131614", color: "#131316" },
  "RENTAL PARTNER": { bg: "#88888818", color: "#666" },
};

const DEALERS = [
  { tier: "STAR DEALER", name: "Philly Outdoor Equipment", street: "1420 Chestnut Street", city: "Philadelphia, PA 19102", phone: "(215) 555-0100", email: "sales@phillyoutdoor.com" },
  { tier: "PROFESSIONAL DEALER", name: "Main Line Turf & Tractor", street: "801 W Lancaster Ave", city: "Bryn Mawr, PA 19010", phone: "(610) 555-0200", email: "info@mlturftractor.com" },
  { tier: "RENTAL PARTNER", name: "United Rentals - King of Prussia", street: "110 Allendale Rd", city: "King of Prussia, PA 19406", phone: "(610) 555-0300", email: "kop@unitedrentals.com" },
  { tier: "STAR DEALER", name: "Delaware Valley Equipment", street: "2500 Concord Pike", city: "Wilmington, DE 19803", phone: "(302) 555-0400", email: "sales@dvequipment.com" },
  { tier: "PROFESSIONAL DEALER", name: "Montgomery County Landscape Supply", street: "1600 Dekalb Pike", city: "Blue Bell, PA 19422", phone: "(610) 555-0500", email: "info@mclandscape.com" },
  { tier: "STAR DEALER", name: "Cherry Hill Power Equipment", street: "2000 Route 38", city: "Cherry Hill, NJ 08002", phone: "(856) 555-0600", email: "sales@cherryhillpower.com" },
  { tier: "RENTAL PARTNER", name: "Sunbelt Rentals - Bensalem", street: "3100 Street Road", city: "Bensalem, PA 19020", phone: "(215) 555-0700", email: "bensalem@sunbeltrentals.com" },
  { tier: "PROFESSIONAL DEALER", name: "Bucks County Turf & Equipment", street: "650 York Road", city: "Warminster, PA 18974", phone: "(215) 555-0800", email: "info@buckscountyturf.com" },
  { tier: "STAR DEALER", name: "Lehigh Valley Equipment", street: "3400 Hamilton Blvd", city: "Allentown, PA 18103", phone: "(610) 555-0900", email: "sales@lehighvalleyequip.com" },
  { tier: "RENTAL PARTNER", name: "Herc Rentals - South Philly", street: "2700 S Christopher Columbus Blvd", city: "Philadelphia, PA 19148", phone: "(215) 555-1000", email: "southphilly@hercrentals.com" },
  { tier: "PROFESSIONAL DEALER", name: "West Chester Outdoor Power", street: "1010 West Chester Pike", city: "West Chester, PA 19382", phone: "(610) 555-1100", email: "info@wcopower.com" },
  { tier: "STAR DEALER", name: "Princeton Outdoor Supply", street: "3500 US-1", city: "Princeton, NJ 08540", phone: "(609) 555-1200", email: "sales@princetonoutdoor.com" },
];

function DealersPage({ setPage }: { setPage: (p: Page) => void }) {
  const [query, setQuery] = useState("19118");
  return (
    <>
      <PageHero img={imgDealerBg} title="Dealer Locator"
        text="Find an authorized ELIET dealer near you for parts, service, and new equipment. Our network is growing across the United States." />

      {/* Search + map */}
      <section className="bg-white w-full px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <FadeUp>
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
              <label className="sr-only">Zip code or city, state</label>
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Zip code or city, state"
                className="flex-1 h-14 px-5 rounded-full border border-[#ddd] font-['Overpass',sans-serif] text-[15px] text-[#131316] focus:outline-none focus:border-[#ef7d00] transition-colors" />
              <button className="h-14 px-9 rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-white hover:brightness-110 transition-all"
                style={{ backgroundColor: ORANGE, boxShadow: `0 4px 20px ${ORANGE}40` }}>
                Search
              </button>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="w-full rounded-2xl border border-[#e0e0e0] bg-[#eef1f4] flex items-center justify-center" style={{ height: 380 }}>
              <div className="flex flex-col items-center gap-3">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-6.1-7-11a7 7 0 1114 0c0 4.9-7 11-7 11z" stroke="#94a3b8" strokeWidth="1.6" /><circle cx="12" cy="10" r="2.6" stroke="#94a3b8" strokeWidth="1.6" /></svg>
                <p className="font-['Overpass',sans-serif] text-[14px] text-[#94a3b8] uppercase tracking-[2px]">Interactive Map</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Dealer grid */}
      <section className="bg-[#f4f4f4] w-full px-6 md:px-12 lg:px-20 py-14">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEALERS.map((d, i) => (
            <FadeUp key={d.name} delay={(i % 6) * 0.05}>
              <div className="h-full flex flex-col gap-4 bg-white rounded-2xl border border-[#eee] p-7 hover:border-[#ef7d00] hover:shadow-md transition-all duration-300">
                <span className="self-start px-2.5 py-1 rounded-full font-['Overpass',sans-serif] font-bold text-[10px] uppercase tracking-[1.5px]"
                  style={{ backgroundColor: DEALER_TIER_STYLES[d.tier].bg, color: DEALER_TIER_STYLES[d.tier].color }}>
                  {d.tier}
                </span>
                <p className="font-['Overpass',sans-serif] font-bold text-[18px] text-[#131316] leading-snug">{d.name}</p>
                <div className="flex flex-col gap-1">
                  <p className="font-['Overpass',sans-serif] text-[14px] text-[#666]">{d.street}</p>
                  <p className="font-['Overpass',sans-serif] text-[14px] text-[#666]">{d.city}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-['Overpass',sans-serif] text-[14px] text-[#444] font-semibold">{d.phone}</p>
                  <p className="font-['Overpass',sans-serif] text-[13px]" style={{ color: ORANGE }}>{d.email}</p>
                </div>
                <div className="flex items-center gap-5 mt-auto pt-2">
                  <button className="font-['Overpass',sans-serif] font-bold text-[12px] uppercase tracking-[1px] hover:opacity-60 transition-opacity" style={{ color: ORANGE }}>Get directions</button>
                  <button className="font-['Overpass',sans-serif] font-bold text-[12px] uppercase tracking-[1px] text-[#131316] hover:opacity-60 transition-opacity">Call dealer</button>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Escalation */}
      <section className="w-full px-6 md:px-12 lg:px-20 py-16 bg-white">
        <FadeUp>
          <div className="max-w-[1440px] mx-auto rounded-2xl px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8" style={{ backgroundColor: "#0f172a" }}>
            <div className="flex flex-col gap-3 max-w-xl">
              <h2 className="font-['Overpass',sans-serif] font-extrabold text-[30px] md:text-[38px] text-white uppercase leading-none tracking-[-1px]">Don't See a Dealer Near You?</h2>
              <p className="font-['Overpass',sans-serif] text-[15px] text-white/55">Our network is growing. Contact us directly and we'll help you find support in your area.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }}
                className="px-8 py-4 rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-white hover:scale-105 hover:brightness-110 transition-all duration-200"
                style={{ backgroundColor: ORANGE, boxShadow: `0 4px 20px ${ORANGE}40` }}>
                Find a Sales Rep
              </button>
              <button onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }}
                className="font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-white/85 hover:text-white transition-colors">
                Contact ELIET Directly →
              </button>
            </div>
          </div>
        </FadeUp>
      </section>

      <Newsletter />
      <Footer setPage={setPage} svgData={deskSvg} />
    </>
  );
}

// ─── Finance Options ──────────────────────────────────────────────────────────

const FINANCE_PROGRAMS = [
  { title: "Low Down Payment", text: "Get into new ELIET equipment with minimal upfront cost. Flexible down payment options to preserve your working capital." },
  { title: "Seasonal Payment Plans", text: "Match payments to your revenue cycle. Skip payments during slow months available on qualified programs." },
];

function FinancePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <>
      <PageHero img={imgDownloadsWhyP1} title="Finance Options"
        text="Flexible financing programs to get professional ELIET equipment working for your operation." />

      <section className="bg-white w-full px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {FINANCE_PROGRAMS.map((f, i) => (
            <FadeUp key={f.title} delay={i * 0.08}>
              <div className="h-full flex flex-col gap-4 p-9 rounded-2xl bg-[#f8f8f8] border border-[#eee] hover:border-[#ef7d00] transition-colors duration-300">
                <OrangeAccent />
                <p className="font-['Overpass',sans-serif] font-extrabold text-[24px] text-[#131316] uppercase tracking-[-0.5px]">{f.title}</p>
                <p className="font-['Overpass',sans-serif] text-[15px] text-[#666] leading-relaxed">{f.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Why ELIET */}
      <section className="w-full px-6 md:px-12 lg:px-20 pb-20">
        <FadeUp>
          <div className="max-w-[1440px] mx-auto">
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 420 }}>
              <img src={imgDetailWhyBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/65" />
              <div className="relative z-10 flex flex-col justify-center gap-7 px-10 md:px-14 py-14 max-w-xl min-h-[420px]">
                <h2 className="font-['Overpass',sans-serif] font-extrabold text-[36px] text-white uppercase leading-tight tracking-[-0.5px]">Why Professionals Choose ELIET</h2>
                <ul className="flex flex-col gap-4">
                  {["Same-day parts shipping", "Local reps across the US", "Service you can count on", "30+ years of engineering"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center" style={{ backgroundColor: ORANGE }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                      <span className="font-['Overpass',sans-serif] font-semibold text-[15px] text-white">{item}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => { setPage("products"); window.scrollTo({ top: 0 }); }}
                  className="self-start px-7 py-3.5 rounded-full bg-white font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] transition-all duration-200 hover:scale-105"
                  style={{ color: DARK }}>
                  Our Products
                </button>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      <Newsletter />
      <Footer setPage={setPage} svgData={deskSvg} />
    </>
  );
}

// ─── Contact ELIET USA ────────────────────────────────────────────────────────

const CONTACT_BLOCKS = [
  { title: "Headquarters", context: null, lines: ["ELIET USA Inc.", "19 E Moreland Ave", "Philadelphia, PA 19118"], phone: "+1 412 367 5185", email: "info@elietusa.com" },
  { title: "Customer Support", context: "For parts, service, warranty, and technical questions:", lines: [], phone: "+1 412 367 5185 (ext. 2)", email: "support@elietusa.com" },
  { title: "Sales Inquiries", context: "For dealer partnerships, bulk orders or product questions:", lines: [], phone: "+1 412 367 5185 (ext. 1)", email: "sales@elietusa.com" },
];

const CONTACT_RESOURCES = [
  { title: "Request a Brochure", text: "Download or request a printed catalog.", cta: "View downloads →", page: "downloads" as Page },
  { title: "Schedule a Call", text: "Talk directly with a sales representative.", cta: "Find a sales rep →", page: "dealers" as Page },
  { title: "Technical Support", text: "Get help with parts, service or warranty.", cta: "Visit support →", page: "faq" as Page },
];

function ContactPage({ setPage }: { setPage: (p: Page) => void }) {
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 5000); };
  const inputCls = "h-12 px-4 rounded-lg border border-[#ddd] bg-white font-['Overpass',sans-serif] text-[14px] text-[#131316] focus:outline-none focus:border-[#ef7d00] transition-colors w-full";
  return (
    <>
      <PageHero img={imgAboutHero} title="Contact ELIET USA"
        text="Reach our team for sales, support, parts, and everything in between." />

      <section className="bg-white w-full px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info column */}
          <div className="flex flex-col gap-6">
            {CONTACT_BLOCKS.map((b, i) => (
              <FadeUp key={b.title} delay={i * 0.07}>
                <div className="rounded-2xl border border-[#eee] bg-[#f8f8f8] p-7 flex flex-col gap-3">
                  <p className="font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[1.5px]" style={{ color: ORANGE }}>{b.title}</p>
                  {b.context && <p className="font-['Overpass',sans-serif] text-[14px] text-[#666]">{b.context}</p>}
                  {b.lines.map(l => <p key={l} className="font-['Overpass',sans-serif] text-[15px] text-[#333] leading-snug">{l}</p>)}
                  <div className="flex flex-col gap-1 pt-1">
                    <a href="tel:+14123675185" className="font-['Overpass',sans-serif] font-semibold text-[15px] text-[#131316] hover:opacity-70 transition-opacity">{b.phone}</a>
                    <a href={`mailto:${b.email}`} className="font-['Overpass',sans-serif] text-[14px] hover:opacity-70 transition-opacity" style={{ color: ORANGE }}>{b.email}</a>
                  </div>
                </div>
              </FadeUp>
            ))}
            <FadeUp delay={0.2}>
              <div className="rounded-2xl border border-[#eee] bg-[#f8f8f8] p-7 flex flex-col gap-3">
                <p className="font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[1.5px]" style={{ color: ORANGE }}>Office Hours</p>
                {[["Monday–Friday", "8:00 AM – 6:00 PM EST"], ["Saturday", "Closed"], ["Sunday", "Closed"]].map(([d, h]) => (
                  <div key={d} className="flex items-center justify-between border-b border-[#eee] last:border-0 pb-2 last:pb-0">
                    <span className="font-['Overpass',sans-serif] text-[14px] text-[#444] font-semibold">{d}</span>
                    <span className="font-['Overpass',sans-serif] text-[14px] text-[#888]">{h}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.25}>
              <div className="rounded-2xl border border-[#e0e0e0] bg-[#eef1f4] flex items-center justify-center" style={{ height: 240 }}>
                <p className="font-['Overpass',sans-serif] text-[13px] text-[#94a3b8] uppercase tracking-[2px] text-center px-6">Interactive Map — ELIET USA Headquarters, Philadelphia, PA</p>
              </div>
            </FadeUp>
          </div>

          {/* Form column */}
          <FadeUp delay={0.1}>
            <form onSubmit={submit} className="rounded-2xl border border-[#eee] bg-white shadow-sm p-8 md:p-10 flex flex-col gap-5 h-fit">
              <div className="flex flex-col gap-1">
                <h2 className="font-['Overpass',sans-serif] font-extrabold text-[26px] text-[#131316] uppercase tracking-[-0.5px]">Send Us a Message</h2>
                <p className="font-['Overpass',sans-serif] text-[14px] text-[#888]">We'll get back to you within 1–2 business days.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5"><label className="font-['Overpass',sans-serif] text-[12px] font-bold uppercase tracking-[1px] text-[#999]">First name</label><input required className={inputCls} /></div>
                <div className="flex flex-col gap-1.5"><label className="font-['Overpass',sans-serif] text-[12px] font-bold uppercase tracking-[1px] text-[#999]">Last name</label><input required className={inputCls} /></div>
                <div className="flex flex-col gap-1.5"><label className="font-['Overpass',sans-serif] text-[12px] font-bold uppercase tracking-[1px] text-[#999]">Email address</label><input type="email" required className={inputCls} /></div>
                <div className="flex flex-col gap-1.5"><label className="font-['Overpass',sans-serif] text-[12px] font-bold uppercase tracking-[1px] text-[#999]">Phone number</label><input className={inputCls} /></div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-['Overpass',sans-serif] text-[12px] font-bold uppercase tracking-[1px] text-[#999]">Inquiry type</label>
                <select className={inputCls} defaultValue=""><option value="" disabled>Select</option><option>Sales</option><option>Support</option><option>Parts</option><option>Warranty</option><option>Other</option></select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-['Overpass',sans-serif] text-[12px] font-bold uppercase tracking-[1px] text-[#999]">Message</label>
                <textarea rows={5} placeholder="Please include any details that will help us assist you"
                  className="px-4 py-3 rounded-lg border border-[#ddd] bg-white font-['Overpass',sans-serif] text-[14px] text-[#131316] focus:outline-none focus:border-[#ef7d00] transition-colors w-full resize-none" />
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required className="mt-1 accent-[#ef7d00]" />
                <span className="font-['Overpass',sans-serif] text-[13px] text-[#666] leading-relaxed">I agree to the privacy policy and consent to being contacted.</span>
              </label>
              <button type="submit"
                className="self-start px-8 py-4 rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-white hover:scale-105 hover:brightness-110 transition-all duration-200"
                style={{ backgroundColor: sent ? "#2e7d32" : ORANGE, boxShadow: `0 4px 20px ${ORANGE}40` }}>
                {sent ? "Message Sent ✓" : "Send Message"}
              </button>
            </form>
          </FadeUp>
        </div>
      </section>

      {/* Resource redirection */}
      <section className="bg-[#f4f4f4] w-full px-6 md:px-12 lg:px-20 py-14">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {CONTACT_RESOURCES.map((c, i) => (
            <FadeUp key={c.title} delay={i * 0.07}>
              <button onClick={() => { setPage(c.page); window.scrollTo({ top: 0 }); }}
                className="w-full h-full text-left flex flex-col gap-2.5 bg-white rounded-2xl border border-[#eee] p-7 hover:border-[#ef7d00] hover:shadow-md transition-all duration-300">
                <p className="font-['Overpass',sans-serif] font-bold text-[16px] text-[#131316] uppercase tracking-[0.5px]">{c.title}</p>
                <p className="font-['Overpass',sans-serif] text-[14px] text-[#666] leading-relaxed">{c.text}</p>
                <p className="font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[1px] mt-auto" style={{ color: ORANGE }}>{c.cta}</p>
              </button>
            </FadeUp>
          ))}
        </div>
      </section>

      <Newsletter />
      <Footer setPage={setPage} svgData={deskSvg} />
    </>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  if (!visible) return null;
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      style={{ backgroundColor: DARK, border: `1.5px solid ${ORANGE}40` }}
      aria-label="Back to top"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 12V4M8 4L4 8M8 4L12 8" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.button>
  );
}

// ─── Login / Machine Registration ─────────────────────────────────────────────
// Visual mockup only (Figma node 5484-2435) — login maps to WooCommerce's
// My Account; machine registration submits to a form/CRM integration in production.

const REGISTER_BENEFITS: { title: string; icon: React.ReactNode }[] = [
  { title: "Activate warranty coverage",
    icon: <><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 11.5l2 2 4-4" /></> },
  { title: "Receive service reminders",
    icon: <><path d="M6 16v-5a6 6 0 1112 0v5l1.5 2h-15L6 16z" /><path d="M10 20.5a2 2 0 004 0" /></> },
  { title: "Get product updates & recalls",
    icon: <><path d="M3 10v4h3l6 4V6l-6 4H3z" /><path d="M16 9a5 5 0 010 6" /></> },
  { title: "Access manuals & parts lists",
    icon: <><path d="M5 4h13a1 1 0 011 1v14a1 1 0 01-1 1H5V4z" /><path d="M9 4v16" /></> },
];

function LoginPage({ setPage }: { setPage: (p: Page) => void }) {
  const [loginSent, setLoginSent] = useState(false);
  const [regSent, setRegSent] = useState(false);
  const submitLogin = (e: React.FormEvent) => { e.preventDefault(); setLoginSent(true); setTimeout(() => setLoginSent(false), 5000); };
  const submitReg = (e: React.FormEvent) => { e.preventDefault(); setRegSent(true); setTimeout(() => setRegSent(false), 5000); };
  const lightInput = "h-12 px-4 rounded-lg border border-[#ddd] bg-white font-['Overpass',sans-serif] text-[14px] text-[#131316] placeholder:text-[#aaa] focus:outline-none focus:border-[#ef7d00] transition-colors w-full";
  const lightLabel = "font-['Overpass',sans-serif] font-semibold text-[12px] text-[#131316] uppercase tracking-[1px]";
  const prototypeNote = "font-['Overpass',sans-serif] text-[12px] text-[#92600a] bg-[#fdf3e0] border border-[#f0d9ad] rounded-lg px-4 py-2.5";
  const cardShadow = { boxShadow: "0 24px 64px rgba(0,0,0,0.45)" };
  return (
    <>
      <section className="relative w-full overflow-hidden px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="absolute inset-0 bg-[#0f0f12]">
          <img src={imgDetailWhyBg} alt="" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(15,15,18,0.72), rgba(15,15,18,0.92))" }} />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col gap-10">
          <FadeUp className="flex flex-col gap-3 max-w-2xl">
            <span className="font-['Overpass',sans-serif] font-semibold text-[11px] uppercase tracking-[3px]" style={{ color: ORANGE }}>Account Access</span>
            <h1 className="font-['Overpass',sans-serif] font-extrabold text-[28px] sm:text-[40px] md:text-[48px] text-white uppercase leading-none tracking-[-1px]">
              Login / Machine Registration
            </h1>
            <p className="font-['Overpass',sans-serif] text-[15px] text-white/65 leading-relaxed">
              Access your account, register your equipment, or manage your registered machines. Join the ELIET professional network today.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-6 items-start">
            {/* Login card */}
            <FadeUp>
              <div className="bg-white rounded-2xl px-8 md:px-10 py-10 flex flex-col gap-7" style={cardShadow}>
                <div className="flex flex-col gap-3">
                  <div className="h-[6px] w-16" style={{ backgroundColor: ORANGE }} />
                  <h2 className="font-['Overpass',sans-serif] font-extrabold text-[28px] text-[#131316] uppercase tracking-[-0.5px] leading-none">Login</h2>
                  <p className="font-['Overpass',sans-serif] text-[14px] text-[#666] leading-relaxed">Access your ELIET account to manage machines, warranty, and orders.</p>
                </div>
                <form onSubmit={submitLogin} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className={lightLabel}>Email address</label>
                    <input type="email" placeholder="you@example.com" required className={lightInput} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={lightLabel}>Password</label>
                    <input type="password" placeholder="••••••••" required className={lightInput} />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 accent-[#ef7d00]" />
                      <span className="font-['Overpass',sans-serif] text-[13px] text-[#666]">Remember me</span>
                    </label>
                    <button type="button" className="font-['Overpass',sans-serif] font-semibold text-[13px] hover:underline" style={{ color: ORANGE }}>Forgot password?</button>
                  </div>
                  <button type="submit"
                    className="h-12 justify-center rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-white transition-all duration-200 hover:brightness-110"
                    style={{ backgroundColor: ORANGE, boxShadow: `0 4px 20px ${ORANGE}40` }}>
                    Sign In →
                  </button>
                  {loginSent && (
                    <p className={prototypeNote}>Design prototype — login is handled by WooCommerce (My Account) in production.</p>
                  )}
                  <p className="font-['Overpass',sans-serif] text-center text-[13px] text-[#666] pt-4 border-t border-[#eee]">
                    Don't have an account?{" "}
                    <button type="button" style={{ color: ORANGE }} className="font-semibold hover:underline"
                      onClick={() => document.getElementById("register-machine")?.scrollIntoView({ behavior: "smooth", block: "start" })}>
                      Register here
                    </button>
                  </p>
                </form>
              </div>
            </FadeUp>
            {/* Machine registration card */}
            <FadeUp delay={0.08}>
              <div id="register-machine" className="bg-white rounded-2xl px-8 md:px-10 py-10 flex flex-col gap-7 scroll-mt-24" style={cardShadow}>
                <div className="flex flex-col gap-3">
                  <div className="h-[6px] w-16" style={{ backgroundColor: ORANGE }} />
                  <h2 className="font-['Overpass',sans-serif] font-extrabold text-[28px] text-[#131316] uppercase tracking-[-0.5px] leading-none">Register Your Machine</h2>
                  <p className="font-['Overpass',sans-serif] text-[14px] text-[#666] leading-relaxed">
                    Create an account to register your ELIET equipment, access warranty information, and receive product updates.
                  </p>
                </div>
                <form onSubmit={submitReg} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className={lightLabel}>First name *</label>
                      <input placeholder="First name" required className={lightInput} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={lightLabel}>Last name *</label>
                      <input placeholder="Last name" required className={lightInput} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={lightLabel}>Email address *</label>
                    <input type="email" placeholder="Email address" required className={lightInput} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={lightLabel}>Phone number</label>
                    <input type="tel" placeholder="Phone number" className={lightInput} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className={lightLabel}>Machine model *</label>
                      <select required defaultValue="" className={lightInput}>
                        <option value="" disabled>Select model…</option>
                        {CATALOG.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={lightLabel}>Serial number *</label>
                      <input placeholder="e.g., MA 001 053 801" required className={lightInput} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={lightLabel}>Purchase date</label>
                    <input type="date" className={lightInput} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={lightLabel}>Dealer purchased from</label>
                    <input placeholder="Dealer name" className={lightInput} />
                  </div>
                  <label className="flex items-center gap-2.5 cursor-pointer">
                    <input type="checkbox" required className="w-4 h-4 shrink-0 accent-[#ef7d00]" />
                    <span className="font-['Overpass',sans-serif] text-[13px] text-[#666]">
                      I agree to the <span className="underline" style={{ color: ORANGE }}>Terms of Use</span> and <span className="underline" style={{ color: ORANGE }}>Privacy Policy</span>
                    </span>
                  </label>
                  <button type="submit"
                    className="self-start px-7 py-3.5 rounded-full font-['Overpass',sans-serif] font-bold text-[13px] uppercase tracking-[2px] text-white transition-all duration-200 hover:brightness-110"
                    style={{ backgroundColor: ORANGE, boxShadow: `0 4px 20px ${ORANGE}40` }}>
                    Register Machine →
                  </button>
                  {regSent && (
                    <p className={prototypeNote}>Design prototype — machine registration is handled by a form/CRM integration in production.</p>
                  )}
                  <p className="font-['Overpass',sans-serif] text-[13px] text-[#444] bg-[#f8f8f8] rounded-lg px-4 py-3 leading-relaxed" style={{ borderLeft: `3px solid ${ORANGE}` }}>
                    <span className="font-semibold" style={{ color: ORANGE }}>✓ Registration benefits:</span>{" "}
                    Activate your warranty, receive service reminders, and get notified of product updates.
                  </p>
                </form>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why register band */}
      <section className="bg-white w-full px-6 md:px-12 lg:px-20 py-14">
        <FadeUp>
          <div className="max-w-[1440px] mx-auto rounded-2xl bg-[#131316] px-8 md:px-12 py-10 flex flex-col gap-8">
            <h2 className="font-['Overpass',sans-serif] font-extrabold text-[22px] md:text-[26px] text-white uppercase tracking-[-0.5px] text-center">
              Why Register Your ELIET Machine?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {REGISTER_BENEFITS.map((b) => (
                <div key={b.title} className="bg-white rounded-xl px-6 py-7 flex flex-col items-center text-center gap-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {b.icon}
                  </svg>
                  <p className="font-['Overpass',sans-serif] font-semibold text-[14px] text-[#131316]">{b.title}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>

      <HomeDealerLocator setPage={setPage} />
      <Newsletter />
      <Footer setPage={setPage} svgData={deskSvg} />
    </>
  );
}

function ComparePageView({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <>
      <ComparisonPage setPage={setPage} />
      <Footer setPage={setPage} svgData={deskSvg} />
    </>
  );
}

function AppContent() {
  const [page, setPage] = useState<Page>("home");
  const [detailProduct, setDetailProduct] = useState<ProductDetail>(MAESTRO_CITY);
  const { state, ackOpenCompare } = useComparison();

  // YITH page mode: sticky “Compare” or auto-open on 2nd product → dedicated Compare page
  useEffect(() => {
    if (!state.openCompareRequested) return;
    setPage("compare");
    window.scrollTo({ top: 0, behavior: "smooth" });
    ackOpenCompare();
  }, [state.openCompareRequested, ackOpenCompare]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header page={page} setPage={setPage} svgData={deskSvg} />
      <main className="flex-1 flex flex-col pt-[70px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {page === "home" ? (
              <HomePage setPage={setPage} />
            ) : page === "demo" ? (
              <DemoPage setPage={setPage} />
            ) : page === "about" ? (
              <AboutPage setPage={setPage} />
            ) : page === "products" ? (
              <ProductsPage setPage={setPage} openProduct={(p) => { setDetailProduct(p); setPage("detail"); }} />
            ) : page === "detail" ? (
              <DetailPage product={detailProduct} setPage={setPage} />
            ) : page === "compare" ? (
              <ComparePageView setPage={setPage} />
            ) : page === "warranty" ? (
              <WarrantyPage setPage={setPage} />
            ) : page === "faq" ? (
              <FaqPage setPage={setPage} />
            ) : page === "dealers" ? (
              <DealersPage setPage={setPage} />
            ) : page === "finance" ? (
              <FinancePage setPage={setPage} />
            ) : page === "contact" ? (
              <ContactPage setPage={setPage} />
            ) : page === "login" ? (
              <LoginPage setPage={setPage} />
            ) : (
              <DownloadsPage setPage={setPage} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>
      <ComparisonBar hidden={page === "compare"} />
      <Toaster position="top-right" />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <ComparisonProvider>
      <AppContent />
    </ComparisonProvider>
  );
}
