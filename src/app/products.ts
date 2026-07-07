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

// Full 2026 equipment catalog (source: Equipment List 2026.csv, client Smartsheet export).
export type CatalogItem = { id: number; name: string; sku: string; engine: string; desc: string; category: string };

export const CATALOG: CatalogItem[] = [
  {id: 1, name: "Maestro City", sku: "MA 001 052 123", engine: "5.5 HP B&S XR 750", desc: "Professional-grade shredder from the ELIET range.", category: "Shredders"},
  {id: 2, name: "Maestro Country", sku: "MA 001 053 124", engine: "6.5 HP B&S XR 950", desc: "Professional-grade shredder from the ELIET range.", category: "Shredders"},
  {id: 3, name: "Maestro Country E-Power", sku: "MA 001 053 801", engine: "4.5 HP 56V DC battery (3200W)", desc: "E-DC56V", category: "Shredders"},
  {id: 4, name: "Minor 4S", sku: "MA 002 013 132", engine: "6.5 HP Vanguard", desc: "6.5 HP Vanguard", category: "Shredders"},
  {id: 5, name: "Minor 4S 6.5 HP Honda GX200", sku: "MA 002 013 206", engine: "6.5 HP Honda GX200", desc: "Professional-grade shredder from the ELIET range.", category: "Shredders"},
  {id: 6, name: "Major 4S PTO", sku: "MA 003 013 000", engine: "PTO", desc: "Professional-grade shredder from the ELIET range.", category: "Shredders"},
  {id: 7, name: "Major 4S 9 HP Honda GX270", sku: "MA 003 013 208", engine: "9.0 HP Honda GX270", desc: "Professional-grade shredder from the ELIET range.", category: "Shredders"},
  {id: 8, name: "Vector 4S STD 13 HP Honda GX390", sku: "MA 034 001 209", engine: "13.0 HP Honda GX390", desc: "Professional-grade shredder from the ELIET range.", category: "Shredders"},
  {id: 9, name: "Vector 4S PRO 13 HP Honda GX390", sku: "MA 034 010 209", engine: "13.0 HP Honda GX390", desc: "Professional-grade shredder from the ELIET range.", category: "Shredders"},
  {id: 10, name: "Vector 4S ZR 13 HP Honda GX390", sku: "MA 034 020 209", engine: "13.0 HP Honda GX390", desc: "Professional-grade shredder from the ELIET range.", category: "Shredders"},
  {id: 11, name: "Vector 4S CC 13 HP Honda GX390", sku: "MA 034 030 209", engine: "13.0 HP Honda GX390", desc: "Professional-grade shredder from the ELIET range.", category: "Shredders"},
  {id: 12, name: "Prof 6 OW 14 HP Vanguard 400", sku: "MA 032 010 131", engine: "14 HP Vanguard 400", desc: "On Wheels", category: "Shredders"},
  {id: 13, name: "Prof 6 CC 14 HP Vanguard 400", sku: "MA 032 020 131", engine: "14 HP Vanguard 400", desc: "Cross Country", category: "Shredders"},
  {id: 14, name: "Prof 6 OR 14 HP Vanguard 400", sku: "MA 032 030 131", engine: "14 HP Vanguard 400", desc: "On Road", category: "Shredders"},
  {id: 15, name: "Prof 6 PTO", sku: "MA 032 040 000", engine: "PTO - ABM", desc: "Professional-grade shredder from the ELIET range.", category: "Shredders"},
  {id: 16, name: "Prof 6 E-Power OW", sku: "MA 032 010 821", engine: "7.5 kW - 48 V Vanguard 7.0 kW", desc: "On Wheels", category: "Shredders"},
  {id: 17, name: "Prof 6 E-Power CC", sku: "MA 032 020 821", engine: "7.5 kW - 48 V Vanguard 7.0 kW", desc: "Cross Country", category: "Shredders"},
  {id: 18, name: "Prof 6 Monster", sku: "MA 032 010 113", engine: "18 HP Vanguard V-Twin", desc: "OW 18 HP Vanguard V-Twin · On Wheels", category: "Shredders"},
  {id: 19, name: "Prof 6 Monster CC 18 HP Vanguard V-Twin", sku: "MA 032 020 113", engine: "18 HP Vanguard V-Twin", desc: "Cross Country", category: "Shredders"},
  {id: 20, name: "Prof 6 Monster OR 18 HP Vanguard V-Twin", sku: "MA 032 030 113", engine: "18 HP Vanguard V-Twin", desc: "On Road", category: "Shredders"},
  {id: 21, name: "Super Prof OW 18 HP Vanguard", sku: "MA 029 040 113", engine: "(18 HP) B&S Vanguard", desc: "+ ABM + ZR", category: "Shredders"},
  {id: 22, name: "Super Prof CC 18 HP Vanguard", sku: "MA 029 050 113", engine: "(18 HP) B&S Vanguard", desc: "Cross Country", category: "Shredders"},
  {id: 23, name: "Super Prof OR 18 HP Vanguard", sku: "MA 029 070 113", engine: "(18 HP) B&S Vanguard", desc: "On Road", category: "Shredders"},
  {id: 24, name: "Super Prof Max OW 23 HP EFI Vanguard", sku: "MA 029 040 125", engine: "(23 HP) B&S EFI Vanguard", desc: "+ ABM + ZR", category: "Shredders"},
  {id: 25, name: "Super Prof Max CC 23 HP EFI Vanguard", sku: "MA 029 050 125", engine: "(23 HP) B&S EFI Vanguard", desc: "Cross Country", category: "Shredders"},
  {id: 26, name: "Super Prof Max OR 23 HP EFI Vanguard", sku: "MA 029 070 125", engine: "(23 HP) B&S EFIVanguard", desc: "On Road", category: "Shredders"},
  {id: 27, name: "MEGA PROF OR 25 HP Kubota Diesel", sku: "MA 018 011 340", engine: "(25 HP) Kubota Diesel", desc: "ON ROAD", category: "Shredders"},
  {id: 28, name: "MEGA PROF OR 40 HP Vanguard", sku: "MA 018 011 137", engine: "(37 HP) B&S EFI Vanguard", desc: "ON ROAD", category: "Shredders"},
  {id: 29, name: "MEGA PROF OW 25 HP Kubota Diesel", sku: "MA 018 021 340", engine: "(25 HP) Kubota Diesel", desc: "ON WHEELS", category: "Shredders"},
  {id: 30, name: "E401 PRO Fixed knives PSB TM", sku: "MA 007 010 203", engine: "4.0 HP Honda GX120", desc: "Professional-grade dethatcher from the ELIET range.", category: "Dethatchers"},
  {id: 31, name: "E401 PRO Loose knives PSB TM", sku: "MA 007 020 203", engine: "4.0 HP Honda GX120", desc: "Professional-grade dethatcher from the ELIET range.", category: "Dethatchers"},
  {id: 32, name: "E401 PRO Double-Cut knives PSB TM", sku: "MA 007 030 203", engine: "4.0 HP Honda GX120", desc: "Professional-grade dethatcher from the ELIET range.", category: "Dethatchers"},
  {id: 33, name: "E450 PRO Fixed knives PSB™", sku: "MA 025 010 205", engine: "5.5 HP Honda GX160", desc: "Professional-grade dethatcher from the ELIET range.", category: "Dethatchers"},
  {id: 34, name: "E450 PRO Loose knives PSB™", sku: "MA 025 020 205", engine: "5.5 HP Honda GX160", desc: "Professional-grade dethatcher from the ELIET range.", category: "Dethatchers"},
  {id: 35, name: "E450 PRO Double-Cut knives PSB™", sku: "MA 025 030 205", engine: "5.5 HP Honda GX160", desc: "Professional-grade dethatcher from the ELIET range.", category: "Dethatchers"},
  {id: 36, name: "E450 PRO DC E-Power", sku: "MA 025 030 802", engine: "4.5 HP 56V DC battery (3200W)", desc: "NEW", category: "Dethatchers"},
  {id: 37, name: "E501 PRO Fixed knives PSB™", sku: "MA 008 020 206", engine: "6.5 HP Honda GX200", desc: "Professional-grade dethatcher from the ELIET range.", category: "Dethatchers"},
  {id: 38, name: "E501 PRO Loose knives PSB™", sku: "MA 008 030 206", engine: "6.5 HP Honda GX200", desc: "Professional-grade dethatcher from the ELIET range.", category: "Dethatchers"},
  {id: 39, name: "E501 PRO Double-Cut knives PSB™", sku: "MA 008 040 206", engine: "6.5 HP Honda GX200", desc: "Professional-grade dethatcher from the ELIET range.", category: "Dethatchers"},
  {id: 40, name: "E450ZR 5.5 HP Honda GX160", sku: "MA 037 010 205", engine: "5.5 HP Honda GX160", desc: "Professional-grade dethatcher from the ELIET range.", category: "Dethatchers"},
  {id: 41, name: "450ZR DC E-Power", sku: "MA 037 010 802", engine: "4.5 HP 56V DC battery (3200W)", desc: "Professional-grade dethatcher from the ELIET range.", category: "Dethatchers"},
  {id: 42, name: "E550ZR 6.5 HP Honda GX200", sku: "MA 035 010 206", engine: "6.5 HP Honda GX200", desc: "Professional-grade dethatcher from the ELIET range.", category: "Dethatchers"},
  {id: 43, name: "E650ZR 9 HP Honda GX270", sku: "MA 038 010 208", engine: "9 HP Honda GX270", desc: "Professional-grade dethatcher from the ELIET range.", category: "Dethatchers"},
  {id: 44, name: "C550ZR COLLECTOR", sku: "MA 008 140 206", engine: "6.5 HP Honda GX200", desc: "Professional-grade dethatcher from the ELIET range.", category: "Dethatchers"},
  {id: 45, name: "E750 Fixed knives PSB™", sku: "MA 009 010 207", engine: "9.0 HP Honda GX270", desc: "Professional-grade dethatcher from the ELIET range.", category: "Dethatchers"},
  {id: 46, name: "E750 Loose knives PSB™", sku: "MA 009 020 207", engine: "9.0 HP Honda GX270", desc: "Professional-grade dethatcher from the ELIET range.", category: "Dethatchers"},
  {id: 47, name: "E750 Double-Cut knives PSB™", sku: "MA 009 030 207", engine: "9.0 HP Honda GX270", desc: "Professional-grade dethatcher from the ELIET range.", category: "Dethatchers"},
  {id: 48, name: "E750 tow behind option", sku: "MA 009 001 001", engine: "(supplementary price)", desc: "Tow behind model", category: "Dethatchers"},
  {id: 49, name: "DZC 450", sku: "MA 033 010 206", engine: "6.5 HP Honda GX200", desc: "Professional-grade overseeder from the ELIET range.", category: "Overseeders"},
  {id: 50, name: "DZC 600", sku: "MA 028 020 207", engine: "9.0 HP Honda GX270", desc: "Professional-grade overseeder from the ELIET range.", category: "Overseeders"},
  {id: 51, name: "DZC 750 HST", sku: "MA 016 020 218", engine: "13 HP Honda GX390 (Hydrostatic)", desc: "Professional-grade overseeder from the ELIET range.", category: "Overseeders"},
  {id: 52, name: "ECOCURE ZR Base", sku: "MA 024 300 209", engine: "Eco Cure ZR base machine Honda GX390E (electric start)", desc: "Professional-grade top dresser from the ELIET range.", category: "Top Dressers"},
  {id: 53, name: "ECOCURE ZR Hydraulic Dumper Attachment", sku: "MA 024 001 006", engine: "Eco Cure Hydraulic dumper", desc: "Professional-grade top dresser from the ELIET range.", category: "Top Dressers"},
  {id: 54, name: "ECOCURE ZR Widespread Attachment", sku: "MA 024 001 007", engine: "Eco Cure WS (wide spread)", desc: "Professional-grade top dresser from the ELIET range.", category: "Top Dressers"},
  {id: 55, name: "KS 240 STD", sku: "MA 010 010 121", engine: "4.0 HP B&S Series 550", desc: "Professional-grade edger from the ELIET range.", category: "Edgers"},
  {id: 56, name: "KS 300 PRO 4 HP Honda GX120", sku: "MA 010 020 203", engine: "4.0 HP Honda GX120", desc: "Professional-grade edger from the ELIET range.", category: "Edgers"},
  {id: 57, name: "KS 300 PRO 5.5 HP Honda GX160", sku: "MA 010 020 205", engine: "5.5 HP Honda GX160", desc: "Professional-grade edger from the ELIET range.", category: "Edgers"},
  {id: 58, name: "KS 300 PRO HD Heavy Duty", sku: "MA 010 022 205", engine: "5.5 HP Honda GX160", desc: "Professional-grade edger from the ELIET range.", category: "Edgers"},
  {id: 59, name: "Edge Styler PRO", sku: "MA 022 020 203", engine: "4.0 HP Honda GX120", desc: "Professional-grade edger from the ELIET range.", category: "Edgers"},
  {id: 60, name: "TURFAWAY 600 CC", sku: "MA 031 010 206", engine: "6.5 HP Honda GX200 (Hydrostatic)", desc: "Cross Country", category: "Sod Cutters"},
  {id: 61, name: "TURFAWAY 600 OW", sku: "MA 031 020 206", engine: "6.5 HP Honda GX200 (Hydrostatic)", desc: "On Wheels", category: "Sod Cutters"},
  {id: 62, name: "GZC 750 HST", sku: "MA 016 011 206", engine: "6.5 HP Honda GX200 (Hydrostatic)", desc: "Professional-grade seeder from the ELIET range.", category: "Seeders"},
  {id: 63, name: "GZC 1000 HST", sku: "MA 016 011 208", engine: "9 HP GX270 (Hydrostatic)", desc: "Professional-grade seeder from the ELIET range.", category: "Seeders"},
  {id: 64, name: "BL 360 5.5 HP Honda GX160", sku: "MA 012 010 205", engine: "5.5 HP Honda GX160", desc: "Professional-grade blower from the ELIET range.", category: "Blowers"},
  {id: 65, name: "BL 360 E-POWER", sku: "MA 012 010 802", engine: "4.5 HP 56V DC battery (3200W)", desc: "Professional-grade blower from the ELIET range.", category: "Blowers"},
  {id: 66, name: "BL 450 E", sku: "MA 013 010 207", engine: "9.0 HP Honda GX270", desc: "9 HP Honda GX270", category: "Blowers"},
  {id: 67, name: "TL Pro 450 9 HP Honda GX270", sku: "MA 027 010 208", engine: "9.0 HP Honda GX270 (incl. easy handle)", desc: "Professional-grade leaf vac from the ELIET range.", category: "Leaf Vacs"},
  {id: 68, name: "TL Pro 450 13 HP Honda GX 390", sku: "MA 027 010 209", engine: "13 HP Honda GX390 (incl. easy handle)", desc: "Professional-grade leaf vac from the ELIET range.", category: "Leaf Vacs"},
  {id: 69, name: "TL Pro 450 18 HP Vanguard Elec-start & easy handle", sku: "MA 027 010 113", engine: "18 HP B&S Vanguard ES (incl. electric start & easy handle)", desc: "Professional-grade leaf vac from the ELIET range.", category: "Leaf Vacs"},
  {id: 70, name: "TL Pro 450 23 HP", sku: "MA 027 010 117", engine: "23 HP B&S Vanguard ES (incl. electric start & easy handle)", desc: "Vanguard Elec-start & easy handle", category: "Leaf Vacs"},
  {id: 71, name: "TL Pro HD 450 18 HP Vanguard elec-start", sku: "MA 015 010 113", engine: "18 HP B&S Vanguard ES (electric start)", desc: "Professional-grade leaf vac from the ELIET range.", category: "Leaf Vacs"},
];
