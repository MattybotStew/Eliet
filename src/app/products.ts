// Product detail template data. The DetailPage in App.tsx renders whatever
// ProductDetail it is given — in production every field below comes from
// WooCommerce (product, ACF/meta, and media library).
import imgMaestroCity from "@/imports/Detail/c94192fe59684f294c0e23b040e9535e1b810b60.png";
import imgFeatRobustFrame from "@/imports/Detail/14f6882065d85cf5e711b6a4221e9ef56bd5bffc.png";
import imgFeatLowNoise from "@/imports/Detail/970dd86fc1aac6154ea34bdd2da0d4beffffa239.png";
import imgFeatCollectionBag from "@/imports/Detail/d783e11aa03289570f50111ba7b64cd2ace5d216.png";
import imgFeatSightGlass from "@/imports/Detail/f3d5193dcf67de760bdf01425c635343368b92be.png";
import imgFeatCalibrationSieve from "@/imports/Detail/9a4092d26988ddb09948055a482f505b7aadf4ea.png";
import imgFeatWetGrating from "@/imports/Detail/a514b16c0f59c75ca2d62d2024e6ad5b5d9151aa.png";

export type Spec = { label: string; value: string };
export type Feature = { img: string; title: string; desc: string };
export type EngineOption = { name: string; hp: string; note: string };
export type Accessory = { code: string; name: string };

export type ProductDetail = {
  name: string;
  sku: string;
  engine: string;
  description: string;
  image: string;
  specs: Spec[];
  features: Feature[];
  technology: { heading: string; body: string; points: { title: string; desc: string }[] };
  engineOptions: EngineOption[];
  accessories: Accessory[];
};

export const MAESTRO_CITY: ProductDetail = {
  name: "Maestro City",
  sku: "MA 001 052 123",
  engine: "5.5 HP B&S XR 750",
  description:
    "ELIET emphasises ease of use as a high priority. To limit the effort required during collecting pruning waste, the Maestro has a wide feed-in opening. The Maestro City has the added advantage that the feed-in position is 15 cm lower compared to the Maestro Country.",
  image: imgMaestroCity,
  specs: [
    { label: "Engine", value: "5.5 HP B&S XR 750" },
    { label: "SKU", value: "MA 001 052 123" },
    { label: "Feed Opening", value: "70 × 45 mm" },
    { label: "Collection Bag", value: "60 litres" },
    { label: "Weight", value: "62 kg" },
    { label: "Noise Level", value: "< 90 dB(A)" },
    { label: "Cutting System", value: "Chopping Principle™" },
    { label: "Chipping Capacity", value: "Ø 40 mm" },
  ],
  features: [
    { img: imgFeatRobustFrame, title: "Robust Frame", desc: "All ELIET chippers are manufactured to the highest degree of craftsmanship. The steel shredding chamber is firmly welded to the tubular frame, and the feed hopper is manufactured from steel — built to withstand years of demanding use." },
    { img: imgFeatLowNoise, title: "Low Noise", desc: "The shredding chamber has a double wall to reduce noise pollution. Sound-damping material on the frame wall suppresses the drumming effect of chippings, reducing the noise level by several dB." },
    { img: imgFeatCollectionBag, title: "Collection Bag", desc: "Fine chippings are immediately collected in a large 60-litre bag. One full bag fills a wheelbarrow — ready for the compost bin or applied directly as fertile mulch around garden borders." },
    { img: imgFeatSightGlass, title: "Sight Glass", desc: "A sight-glass in the top plate of the chassis lets you see at a glance when the collection bag is getting full — no stopping, no guesswork." },
    { img: imgFeatCalibrationSieve, title: "Standard Calibration Sieve", desc: "The special shredding system handles thick branches, fine hedge trimmings, leafy green waste from flower borders, and even autumn leaves — all in one pass without clogging." },
    { img: imgFeatWetGrating, title: "Multi-Purpose Grating for Wet Greenwaste", desc: "For moisture-rich material, replace the standard sieve with the optional multi-purpose grating (Art. MA 001 052 001) to prevent any clogging and maintain throughput." },
  ],
  technology: {
    heading: "The Chopping Principle™",
    body: "At the heart of every ELIET machine is the patented Chopping Principle™. Unlike conventional drum shredders that tear material, ELIET's precision-ground blade chops branches cleanly in a single pass — delivering finer output, less noise, and significantly reduced blade wear.",
    points: [
      { title: "Clean cut output", desc: "Fine uniform chips ready for composting or mulching in one pass." },
      { title: "Anti-blockage system", desc: "Automatic reversal clears jams without manual intervention." },
      { title: "Double-wall chamber", desc: "Acoustic dampening reduces operating noise by several dB." },
      { title: "Hardened blade", desc: "Long-lasting precision-ground steel for maximum throughput." },
    ],
  },
  engineOptions: [
    { name: "B&S XR 750 (std)", hp: "5.5 HP", note: "Standard — included" },
    { name: "Honda GX200", hp: "6.5 HP", note: "Optional upgrade" },
  ],
  accessories: [
    { code: "MA 001 052 001", name: "Multi-Purpose Grating for Wet Greenwaste" },
    { code: "MA 001 052 010", name: "Extra Collection Bag (60L)" },
    { code: "MA 001 052 020", name: "Replacement Calibration Sieve" },
    { code: "MA 001 052 030", name: "Transport Wheel Set" },
  ],
};

// Prototype helper: opens the detail template as any catalog product.
// Identity fields (name/sku/engine/description) come from the clicked product;
// the rest reuses Maestro City content as stand-in until real data exists.
export function productDetailFrom(p: { name: string; sku: string; engine: string; desc: string }): ProductDetail {
  return {
    ...MAESTRO_CITY,
    name: p.name,
    sku: p.sku,
    engine: p.engine,
    description: p.desc,
    specs: MAESTRO_CITY.specs.map(s =>
      s.label === "Engine" ? { ...s, value: p.engine } :
      s.label === "SKU" ? { ...s, value: p.sku } : s
    ),
  };
}
