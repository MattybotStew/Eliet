// Extracts the 71-product catalog + comparison specs + Maestro City detail
// into wordpress/data/products.json for the dev team's WooCommerce import.
// Run: node tools/export-products.mjs
import { writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Image path mapping ─────────────────────────────────────────────────────
// Hash → relative filesystem path (derived from TS source imports)
const IMG_MAP = {
  // Detail images (Maestro City features)
  "c94192fe59684f294c0e23b040e9535e1b810b60": "Detail/c94192fe59684f294c0e23b040e9535e1b810b60.png",
  "14f6882065d85cf5e711b6a4221e9ef56bd5bffc": "Detail/14f6882065d85cf5e711b6a4221e9ef56bd5bffc.png",
  "970dd86fc1aac6154ea34bdd2da0d4beffffa239": "Detail/970dd86fc1aac6154ea34bdd2da0d4beffffa239.png",
  "d783e11aa03289570f50111ba7b64cd2ace5d216": "Detail/d783e11aa03289570f50111ba7b64cd2ace5d216.png",
  "f3d5193dcf67de760bdf01425c635343368b92be": "Detail/f3d5193dcf67de760bdf01425c635343368b92be.png",
  "9a4092d26988ddb09948055a482f505b7aadf4ea": "Detail/9a4092d26988ddb09948055a482f505b7aadf4ea.png",
  "a514b16c0f59c75ca2d62d2024e6ad5b5d9151aa": "Detail/a514b16c0f59c75ca2d62d2024e6ad5b5d9151aa.png",
  // Products card image
  "productCard": "Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",
};

function img(path) {
  // Extract the hash filename, return the relative image path
  const hash = path.split("/").pop().replace(/\.(png|jpg)$/, "");
  return IMG_MAP[hash] || IMG_MAP["productCard"] || "Products/c94192fe59684f294c0e23b040e9535e1b810b60.png";
}

// ─── CATALOG (from products.ts lines 97-168) ─────────────────────────────────
const CATALOG = [
  {id:1,name:"Maestro City",sku:"MA 001 052 123",engine:"5.5 HP B&S XR 750",desc:"Professional-grade shredder from the ELIET range.",category:"Shredders"},
  {id:2,name:"Maestro Country",sku:"MA 001 053 124",engine:"6.5 HP B&S XR 950",desc:"Professional-grade shredder from the ELIET range.",category:"Shredders"},
  {id:3,name:"Maestro Country E-Power",sku:"MA 001 053 801",engine:"4.5 HP 56V DC battery (3200W)",desc:"E-DC56V",category:"Shredders"},
  {id:4,name:"Minor 4S",sku:"MA 002 013 132",engine:"6.5 HP Vanguard",desc:"6.5 HP Vanguard",category:"Shredders"},
  {id:5,name:"Minor 4S 6.5 HP Honda GX200",sku:"MA 002 013 206",engine:"6.5 HP Honda GX200",desc:"Professional-grade shredder from the ELIET range.",category:"Shredders"},
  {id:6,name:"Major 4S PTO",sku:"MA 003 013 000",engine:"PTO",desc:"Professional-grade shredder from the ELIET range.",category:"Shredders"},
  {id:7,name:"Major 4S 9 HP Honda GX270",sku:"MA 003 013 208",engine:"9.0 HP Honda GX270",desc:"Professional-grade shredder from the ELIET range.",category:"Shredders"},
  {id:8,name:"Vector 4S STD 13 HP Honda GX390",sku:"MA 034 001 209",engine:"13.0 HP Honda GX390",desc:"Professional-grade shredder from the ELIET range.",category:"Shredders"},
  {id:9,name:"Vector 4S PRO 13 HP Honda GX390",sku:"MA 034 010 209",engine:"13.0 HP Honda GX390",desc:"Professional-grade shredder from the ELIET range.",category:"Shredders"},
  {id:10,name:"Vector 4S ZR 13 HP Honda GX390",sku:"MA 034 020 209",engine:"13.0 HP Honda GX390",desc:"Professional-grade shredder from the ELIET range.",category:"Shredders"},
  {id:11,name:"Vector 4S CC 13 HP Honda GX390",sku:"MA 034 030 209",engine:"13.0 HP Honda GX390",desc:"Professional-grade shredder from the ELIET range.",category:"Shredders"},
  {id:12,name:"Prof 6 OW 14 HP Vanguard 400",sku:"MA 032 010 131",engine:"14 HP Vanguard 400",desc:"On Wheels",category:"Shredders"},
  {id:13,name:"Prof 6 CC 14 HP Vanguard 400",sku:"MA 032 020 131",engine:"14 HP Vanguard 400",desc:"Cross Country",category:"Shredders"},
  {id:14,name:"Prof 6 OR 14 HP Vanguard 400",sku:"MA 032 030 131",engine:"14 HP Vanguard 400",desc:"On Road",category:"Shredders"},
  {id:15,name:"Prof 6 PTO",sku:"MA 032 040 000",engine:"PTO - ABM",desc:"Professional-grade shredder from the ELIET range.",category:"Shredders"},
  {id:16,name:"Prof 6 E-Power OW",sku:"MA 032 010 821",engine:"7.5 kW - 48 V Vanguard 7.0 kW",desc:"On Wheels",category:"Shredders"},
  {id:17,name:"Prof 6 E-Power CC",sku:"MA 032 020 821",engine:"7.5 kW - 48 V Vanguard 7.0 kW",desc:"Cross Country",category:"Shredders"},
  {id:18,name:"Prof 6 Monster",sku:"MA 032 010 113",engine:"18 HP Vanguard V-Twin",desc:"OW 18 HP Vanguard V-Twin · On Wheels",category:"Shredders"},
  {id:19,name:"Prof 6 Monster CC 18 HP Vanguard V-Twin",sku:"MA 032 020 113",engine:"18 HP Vanguard V-Twin",desc:"Cross Country",category:"Shredders"},
  {id:20,name:"Prof 6 Monster OR 18 HP Vanguard V-Twin",sku:"MA 032 030 113",engine:"18 HP Vanguard V-Twin",desc:"On Road",category:"Shredders"},
  {id:21,name:"Super Prof OW 18 HP Vanguard",sku:"MA 029 040 113",engine:"(18 HP) B&S Vanguard",desc:"+ ABM + ZR",category:"Shredders"},
  {id:22,name:"Super Prof CC 18 HP Vanguard",sku:"MA 029 050 113",engine:"(18 HP) B&S Vanguard",desc:"Cross Country",category:"Shredders"},
  {id:23,name:"Super Prof OR 18 HP Vanguard",sku:"MA 029 070 113",engine:"(18 HP) B&S Vanguard",desc:"On Road",category:"Shredders"},
  {id:24,name:"Super Prof Max OW 23 HP EFI Vanguard",sku:"MA 029 040 125",engine:"(23 HP) B&S EFI Vanguard",desc:"+ ABM + ZR",category:"Shredders"},
  {id:25,name:"Super Prof Max CC 23 HP EFI Vanguard",sku:"MA 029 050 125",engine:"(23 HP) B&S EFI Vanguard",desc:"Cross Country",category:"Shredders"},
  {id:26,name:"Super Prof Max OR 23 HP EFI Vanguard",sku:"MA 029 070 125",engine:"(23 HP) B&S EFIVanguard",desc:"On Road",category:"Shredders"},
  {id:27,name:"MEGA PROF OR 25 HP Kubota Diesel",sku:"MA 018 011 340",engine:"(25 HP) Kubota Diesel",desc:"ON ROAD",category:"Shredders"},
  {id:28,name:"MEGA PROF OR 40 HP Vanguard",sku:"MA 018 011 137",engine:"(37 HP) B&S EFI Vanguard",desc:"ON ROAD",category:"Shredders"},
  {id:29,name:"MEGA PROF OW 25 HP Kubota Diesel",sku:"MA 018 021 340",engine:"(25 HP) Kubota Diesel",desc:"ON WHEELS",category:"Shredders"},
  {id:30,name:"E401 PRO Fixed knives PSB TM",sku:"MA 007 010 203",engine:"4.0 HP Honda GX120",desc:"Professional-grade dethatcher from the ELIET range.",category:"Dethatchers"},
  {id:31,name:"E401 PRO Loose knives PSB TM",sku:"MA 007 020 203",engine:"4.0 HP Honda GX120",desc:"Professional-grade dethatcher from the ELIET range.",category:"Dethatchers"},
  {id:32,name:"E401 PRO Double-Cut knives PSB TM",sku:"MA 007 030 203",engine:"4.0 HP Honda GX120",desc:"Professional-grade dethatcher from the ELIET range.",category:"Dethatchers"},
  {id:33,name:"E450 PRO Fixed knives PSB™",sku:"MA 025 010 205",engine:"5.5 HP Honda GX160",desc:"Professional-grade dethatcher from the ELIET range.",category:"Dethatchers"},
  {id:34,name:"E450 PRO Loose knives PSB™",sku:"MA 025 020 205",engine:"5.5 HP Honda GX160",desc:"Professional-grade dethatcher from the ELIET range.",category:"Dethatchers"},
  {id:35,name:"E450 PRO Double-Cut knives PSB™",sku:"MA 025 030 205",engine:"5.5 HP Honda GX160",desc:"Professional-grade dethatcher from the ELIET range.",category:"Dethatchers"},
  {id:36,name:"E450 PRO DC E-Power",sku:"MA 025 030 802",engine:"4.5 HP 56V DC battery (3200W)",desc:"NEW",category:"Dethatchers"},
  {id:37,name:"E501 PRO Fixed knives PSB™",sku:"MA 008 020 206",engine:"6.5 HP Honda GX200",desc:"Professional-grade dethatcher from the ELIET range.",category:"Dethatchers"},
  {id:38,name:"E501 PRO Loose knives PSB™",sku:"MA 008 030 206",engine:"6.5 HP Honda GX200",desc:"Professional-grade dethatcher from the ELIET range.",category:"Dethatchers"},
  {id:39,name:"E501 PRO Double-Cut knives PSB™",sku:"MA 008 040 206",engine:"6.5 HP Honda GX200",desc:"Professional-grade dethatcher from the ELIET range.",category:"Dethatchers"},
  {id:40,name:"E450ZR 5.5 HP Honda GX160",sku:"MA 037 010 205",engine:"5.5 HP Honda GX160",desc:"Professional-grade dethatcher from the ELIET range.",category:"Dethatchers"},
  {id:41,name:"450ZR DC E-Power",sku:"MA 037 010 802",engine:"4.5 HP 56V DC battery (3200W)",desc:"Professional-grade dethatcher from the ELIET range.",category:"Dethatchers"},
  {id:42,name:"E550ZR 6.5 HP Honda GX200",sku:"MA 035 010 206",engine:"6.5 HP Honda GX200",desc:"Professional-grade dethatcher from the ELIET range.",category:"Dethatchers"},
  {id:43,name:"E650ZR 9 HP Honda GX270",sku:"MA 038 010 208",engine:"9 HP Honda GX270",desc:"Professional-grade dethatcher from the ELIET range.",category:"Dethatchers"},
  {id:44,name:"C550ZR COLLECTOR",sku:"MA 008 140 206",engine:"6.5 HP Honda GX200",desc:"Professional-grade dethatcher from the ELIET range.",category:"Dethatchers"},
  {id:45,name:"E750 Fixed knives PSB™",sku:"MA 009 010 207",engine:"9.0 HP Honda GX270",desc:"Professional-grade dethatcher from the ELIET range.",category:"Dethatchers"},
  {id:46,name:"E750 Loose knives PSB™",sku:"MA 009 020 207",engine:"9.0 HP Honda GX270",desc:"Professional-grade dethatcher from the ELIET range.",category:"Dethatchers"},
  {id:47,name:"E750 Double-Cut knives PSB™",sku:"MA 009 030 207",engine:"9.0 HP Honda GX270",desc:"Professional-grade dethatcher from the ELIET range.",category:"Dethatchers"},
  {id:48,name:"E750 tow behind option",sku:"MA 009 001 001",engine:"(supplementary price)",desc:"Tow behind model",category:"Dethatchers"},
  {id:49,name:"DZC 450",sku:"MA 033 010 206",engine:"6.5 HP Honda GX200",desc:"Professional-grade overseeder from the ELIET range.",category:"Overseeders"},
  {id:50,name:"DZC 600",sku:"MA 028 020 207",engine:"9.0 HP Honda GX270",desc:"Professional-grade overseeder from the ELIET range.",category:"Overseeders"},
  {id:51,name:"DZC 750 HST",sku:"MA 016 020 218",engine:"13 HP Honda GX390 (Hydrostatic)",desc:"Professional-grade overseeder from the ELIET range.",category:"Overseeders"},
  {id:52,name:"ECOCURE ZR Base",sku:"MA 024 300 209",engine:"Eco Cure ZR base machine Honda GX390E (electric start)",desc:"Professional-grade top dresser from the ELIET range.",category:"Top Dressers"},
  {id:53,name:"ECOCURE ZR Hydraulic Dumper Attachment",sku:"MA 024 001 006",engine:"Eco Cure Hydraulic dumper",desc:"Professional-grade top dresser from the ELIET range.",category:"Top Dressers"},
  {id:54,name:"ECOCURE ZR Widespread Attachment",sku:"MA 024 001 007",engine:"Eco Cure WS (wide spread)",desc:"Professional-grade top dresser from the ELIET range.",category:"Top Dressers"},
  {id:55,name:"KS 240 STD",sku:"MA 010 010 121",engine:"4.0 HP B&S Series 550",desc:"Professional-grade edger from the ELIET range.",category:"Edgers"},
  {id:56,name:"KS 300 PRO 4 HP Honda GX120",sku:"MA 010 020 203",engine:"4.0 HP Honda GX120",desc:"Professional-grade edger from the ELIET range.",category:"Edgers"},
  {id:57,name:"KS 300 PRO 5.5 HP Honda GX160",sku:"MA 010 020 205",engine:"5.5 HP Honda GX160",desc:"Professional-grade edger from the ELIET range.",category:"Edgers"},
  {id:58,name:"KS 300 PRO HD Heavy Duty",sku:"MA 010 022 205",engine:"5.5 HP Honda GX160",desc:"Professional-grade edger from the ELIET range.",category:"Edgers"},
  {id:59,name:"Edge Styler PRO",sku:"MA 022 020 203",engine:"4.0 HP Honda GX120",desc:"Professional-grade edger from the ELIET range.",category:"Edgers"},
  {id:60,name:"TURFAWAY 600 CC",sku:"MA 031 010 206",engine:"6.5 HP Honda GX200 (Hydrostatic)",desc:"Cross Country",category:"Sod Cutters"},
  {id:61,name:"TURFAWAY 600 OW",sku:"MA 031 020 206",engine:"6.5 HP Honda GX200 (Hydrostatic)",desc:"On Wheels",category:"Sod Cutters"},
  {id:62,name:"GZC 750 HST",sku:"MA 016 011 206",engine:"6.5 HP Honda GX200 (Hydrostatic)",desc:"Professional-grade seeder from the ELIET range.",category:"Seeders"},
  {id:63,name:"GZC 1000 HST",sku:"MA 016 011 208",engine:"9 HP GX270 (Hydrostatic)",desc:"Professional-grade seeder from the ELIET range.",category:"Seeders"},
  {id:64,name:"BL 360 5.5 HP Honda GX160",sku:"MA 012 010 205",engine:"5.5 HP Honda GX160",desc:"Professional-grade blower from the ELIET range.",category:"Blowers"},
  {id:65,name:"BL 360 E-POWER",sku:"MA 012 010 802",engine:"4.5 HP 56V DC battery (3200W)",desc:"Professional-grade blower from the ELIET range.",category:"Blowers"},
  {id:66,name:"BL 450 E",sku:"MA 013 010 207",engine:"9.0 HP Honda GX270",desc:"9 HP Honda GX270",category:"Blowers"},
  {id:67,name:"TL Pro 450 9 HP Honda GX270",sku:"MA 027 010 208",engine:"9.0 HP Honda GX270 (incl. easy handle)",desc:"Professional-grade leaf vac from the ELIET range.",category:"Leaf Vacs"},
  {id:68,name:"TL Pro 450 13 HP Honda GX 390",sku:"MA 027 010 209",engine:"13 HP Honda GX390 (incl. easy handle)",desc:"Professional-grade leaf vac from the ELIET range.",category:"Leaf Vacs"},
  {id:69,name:"TL Pro 450 18 HP Vanguard Elec-start & easy handle",sku:"MA 027 010 113",engine:"18 HP B&S Vanguard ES (incl. electric start & easy handle)",desc:"Professional-grade leaf vac from the ELIET range.",category:"Leaf Vacs"},
  {id:70,name:"TL Pro 450 23 HP",sku:"MA 027 010 117",engine:"23 HP B&S Vanguard ES (incl. electric start & easy handle)",desc:"Vanguard Elec-start & easy handle",category:"Leaf Vacs"},
  {id:71,name:"TL Pro HD 450 18 HP Vanguard elec-start",sku:"MA 015 010 113",engine:"18 HP B&S Vanguard ES (electric start)",desc:"Professional-grade leaf vac from the ELIET range.",category:"Leaf Vacs"},
];

// ─── COMPARISON_PRODUCT_DATA (from comparisonSpecs.ts, products 1-29) ─────────
const COMPARISON_PRODUCT_DATA = {
  1:{id:1,name:"Maestro City",sku:"MA 001 052 123",engine:"5.5 HP B&S XR 750",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"5.5 HP B&S XR 750",power:"4.1 kW / 5.5 HP",timberDiameter:"Ø 40 mm",capacity:"60 litres",choppingSpeed:"2,800 rpm",shreddingTech:"Chopping Principle™",blades:"1 hardened steel blade",noiseReduction:"Double-wall chamber, sound-damping material",feedOpening:"70 × 45 mm",feedHeight:"Low (15 cm lower than Maestro Country)",collectionCapacity:"60 litres",durability:"Steel shredding chamber, tubular frame",chassis:"Tubular steel frame",safety:"Automatic anti-blockage system",storageDimensions:"1,100 × 600 × 900 mm",wheels:"2 transport wheels",rotor:"Single-piece hardened rotor",cuttingWidth:"N/A",transmission:"Direct drive",dimensions:"1,100 × 600 × 900 mm",noiseLevel:"< 90 dB(A)",weight:"62 kg"}},
  2:{id:2,name:"Maestro Country",sku:"MA 001 053 124",engine:"6.5 HP B&S XR 950",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"6.5 HP B&S XR 950",power:"4.8 kW / 6.5 HP",timberDiameter:"Ø 45 mm",capacity:"60 litres",choppingSpeed:"2,800 rpm",shreddingTech:"Chopping Principle™",blades:"1 hardened steel blade",noiseReduction:"Double-wall chamber, sound-damping material",feedOpening:"70 × 45 mm",feedHeight:"Standard",collectionCapacity:"60 litres",durability:"Steel shredding chamber, tubular frame",chassis:"Tubular steel frame",safety:"Automatic anti-blockage system",storageDimensions:"1,100 × 600 × 900 mm",wheels:"2 transport wheels",rotor:"Single-piece hardened rotor",cuttingWidth:"N/A",transmission:"Direct drive",dimensions:"1,100 × 600 × 900 mm",noiseLevel:"< 90 dB(A)",weight:"65 kg"}},
  3:{id:3,name:"Maestro Country E-Power",sku:"MA 001 053 801",engine:"4.5 HP 56V DC battery (3200W)",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"56V DC battery (3200W)",power:"3.2 kW / 4.5 HP",timberDiameter:"Ø 45 mm",capacity:"60 litres",choppingSpeed:"2,800 rpm",shreddingTech:"Chopping Principle™",blades:"1 hardened steel blade",noiseReduction:"Double-wall chamber, electric motor (quieter)",feedOpening:"70 × 45 mm",feedHeight:"Standard",collectionCapacity:"60 litres",durability:"Steel shredding chamber, tubular frame",chassis:"Tubular steel frame",safety:"Automatic anti-blockage system",storageDimensions:"1,100 × 600 × 900 mm",wheels:"2 transport wheels",rotor:"Single-piece hardened rotor",cuttingWidth:"N/A",transmission:"Direct drive (electric)",dimensions:"1,100 × 600 × 900 mm",noiseLevel:"< 85 dB(A)",weight:"68 kg"}},
  4:{id:4,name:"Minor 4S",sku:"MA 002 013 132",engine:"6.5 HP Vanguard",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"6.5 HP Vanguard",power:"4.8 kW / 6.5 HP",timberDiameter:"Ø 50 mm",capacity:"80 litres",choppingSpeed:"2,600 rpm",shreddingTech:"4-way shredding system",blades:"4 reversible blades",noiseReduction:"Sound-dampened chamber",feedOpening:"80 × 50 mm",feedHeight:"Standard",collectionCapacity:"80 litres",durability:"Heavy-duty steel construction",chassis:"Reinforced steel frame",safety:"Emergency stop, anti-blockage",storageDimensions:"1,200 × 650 × 1,000 mm",wheels:"2 large transport wheels",rotor:"4-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"1,200 × 650 × 1,000 mm",noiseLevel:"< 92 dB(A)",weight:"85 kg"}},
  5:{id:5,name:"Minor 4S 6.5 HP Honda GX200",sku:"MA 002 013 206",engine:"6.5 HP Honda GX200",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"6.5 HP Honda GX200",power:"4.8 kW / 6.5 HP",timberDiameter:"Ø 50 mm",capacity:"80 litres",choppingSpeed:"2,600 rpm",shreddingTech:"4-way shredding system",blades:"4 reversible blades",noiseReduction:"Sound-dampened chamber",feedOpening:"80 × 50 mm",feedHeight:"Standard",collectionCapacity:"80 litres",durability:"Heavy-duty steel construction",chassis:"Reinforced steel frame",safety:"Emergency stop, anti-blockage",storageDimensions:"1,200 × 650 × 1,000 mm",wheels:"2 large transport wheels",rotor:"4-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"1,200 × 650 × 1,000 mm",noiseLevel:"< 92 dB(A)",weight:"85 kg"}},
  6:{id:6,name:"Major 4S PTO",sku:"MA 003 013 000",engine:"PTO",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"PTO (tractor-mounted)",power:"15–30 kW / 20–40 HP (via PTO)",timberDiameter:"Ø 80 mm",capacity:"N/A (ground discharge)",choppingSpeed:"2,400 rpm",shreddingTech:"4-way shredding system",blades:"4 reversible blades",noiseReduction:"Sound-dampened chamber",feedOpening:"100 × 60 mm",feedHeight:"Elevated",collectionCapacity:"N/A (ground discharge)",durability:"Heavy-duty steel, tractor-grade",chassis:"3-point linkage mounted",safety:"PTO safety guard, emergency stop",storageDimensions:"1,400 × 700 × 1,100 mm",wheels:"N/A (tractor mounted)",rotor:"4-way reversible rotor",cuttingWidth:"N/A",transmission:"PTO shaft drive",dimensions:"1,400 × 700 × 1,100 mm",noiseLevel:"< 95 dB(A)",weight:"120 kg"}},
  7:{id:7,name:"Major 4S 9 HP Honda GX270",sku:"MA 003 013 208",engine:"9.0 HP Honda GX270",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"9.0 HP Honda GX270",power:"6.7 kW / 9.0 HP",timberDiameter:"Ø 60 mm",capacity:"100 litres",choppingSpeed:"2,400 rpm",shreddingTech:"4-way shredding system",blades:"4 reversible blades",noiseReduction:"Sound-dampened chamber",feedOpening:"90 × 55 mm",feedHeight:"Standard",collectionCapacity:"100 litres",durability:"Heavy-duty steel construction",chassis:"Reinforced steel frame",safety:"Emergency stop, anti-blockage",storageDimensions:"1,300 × 680 × 1,050 mm",wheels:"2 large transport wheels",rotor:"4-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"1,300 × 680 × 1,050 mm",noiseLevel:"< 93 dB(A)",weight:"95 kg"}},
  8:{id:8,name:"Vector 4S STD 13 HP Honda GX390",sku:"MA 034 001 209",engine:"13.0 HP Honda GX390",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"13.0 HP Honda GX390",power:"9.7 kW / 13.0 HP",timberDiameter:"Ø 70 mm",capacity:"120 litres",choppingSpeed:"2,400 rpm",shreddingTech:"4-way shredding system",blades:"4 reversible blades",noiseReduction:"Sound-dampened chamber",feedOpening:"100 × 60 mm",feedHeight:"Standard",collectionCapacity:"120 litres",durability:"Heavy-duty steel construction",chassis:"Reinforced steel frame",safety:"Emergency stop, anti-blockage",storageDimensions:"1,400 × 720 × 1,100 mm",wheels:"2 large transport wheels",rotor:"4-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"1,400 × 720 × 1,100 mm",noiseLevel:"< 94 dB(A)",weight:"110 kg"}},
  9:{id:9,name:"Vector 4S PRO 13 HP Honda GX390",sku:"MA 034 010 209",engine:"13.0 HP Honda GX390",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"13.0 HP Honda GX390",power:"9.7 kW / 13.0 HP",timberDiameter:"Ø 75 mm",capacity:"140 litres",choppingSpeed:"2,400 rpm",shreddingTech:"4-way shredding system",blades:"4 reversible blades",noiseReduction:"Sound-dampened chamber + extra insulation",feedOpening:"100 × 60 mm",feedHeight:"Standard",collectionCapacity:"140 litres",durability:"Heavy-duty steel, reinforced frame",chassis:"Reinforced steel frame",safety:"Emergency stop, anti-blockage, safety guards",storageDimensions:"1,400 × 720 × 1,100 mm",wheels:"2 large transport wheels + tow hitch",rotor:"4-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"1,400 × 720 × 1,100 mm",noiseLevel:"< 93 dB(A)",weight:"120 kg"}},
  10:{id:10,name:"Vector 4S ZR 13 HP Honda GX390",sku:"MA 034 020 209",engine:"13.0 HP Honda GX390",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"13.0 HP Honda GX390",power:"9.7 kW / 13.0 HP",timberDiameter:"Ø 75 mm",capacity:"140 litres",choppingSpeed:"2,400 rpm",shreddingTech:"4-way shredding system",blades:"4 reversible blades",noiseReduction:"Sound-dampened chamber + extra insulation",feedOpening:"100 × 60 mm",feedHeight:"Standard",collectionCapacity:"140 litres",durability:"Heavy-duty steel, reinforced frame",chassis:"Reinforced steel frame",safety:"Emergency stop, anti-blockage, safety guards",storageDimensions:"1,400 × 720 × 1,100 mm",wheels:"2 large transport wheels + tow hitch",rotor:"4-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"1,400 × 720 × 1,100 mm",noiseLevel:"< 93 dB(A)",weight:"125 kg"}},
  11:{id:11,name:"Vector 4S CC 13 HP Honda GX390",sku:"MA 034 030 209",engine:"13.0 HP Honda GX390",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"13.0 HP Honda GX390",power:"9.7 kW / 13.0 HP",timberDiameter:"Ø 75 mm",capacity:"140 litres",choppingSpeed:"2,400 rpm",shreddingTech:"4-way shredding system",blades:"4 reversible blades",noiseReduction:"Sound-dampened chamber + extra insulation",feedOpening:"100 × 60 mm",feedHeight:"Standard",collectionCapacity:"140 litres",durability:"Heavy-duty steel, reinforced frame",chassis:"Reinforced steel frame, cross-country suspension",safety:"Emergency stop, anti-blockage, safety guards",storageDimensions:"1,400 × 720 × 1,100 mm",wheels:"Cross-country wheels + tow hitch",rotor:"4-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"1,400 × 720 × 1,100 mm",noiseLevel:"< 93 dB(A)",weight:"130 kg"}},
  12:{id:12,name:"Prof 6 OW 14 HP Vanguard 400",sku:"MA 032 010 131",engine:"14 HP Vanguard 400",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"14 HP Vanguard 400",power:"10.4 kW / 14 HP",timberDiameter:"Ø 90 mm",capacity:"200 litres",choppingSpeed:"2,200 rpm",shreddingTech:"6-way shredding system",blades:"6 reversible blades",noiseReduction:"Double-wall chamber, acoustic insulation",feedOpening:"120 × 70 mm",feedHeight:"Standard",collectionCapacity:"200 litres",durability:"Heavy-duty steel, industrial-grade",chassis:"Reinforced steel frame, on wheels",safety:"Emergency stop, anti-blockage, safety guards",storageDimensions:"1,600 × 800 × 1,200 mm",wheels:"2 large pneumatic wheels + tow hitch",rotor:"6-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"1,600 × 800 × 1,200 mm",noiseLevel:"< 95 dB(A)",weight:"180 kg"}},
  13:{id:13,name:"Prof 6 CC 14 HP Vanguard 400",sku:"MA 032 020 131",engine:"14 HP Vanguard 400",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"14 HP Vanguard 400",power:"10.4 kW / 14 HP",timberDiameter:"Ø 90 mm",capacity:"200 litres",choppingSpeed:"2,200 rpm",shreddingTech:"6-way shredding system",blades:"6 reversible blades",noiseReduction:"Double-wall chamber, acoustic insulation",feedOpening:"120 × 70 mm",feedHeight:"Standard",collectionCapacity:"200 litres",durability:"Heavy-duty steel, industrial-grade",chassis:"Reinforced steel frame, cross-country",safety:"Emergency stop, anti-blockage, safety guards",storageDimensions:"1,600 × 800 × 1,200 mm",wheels:"Cross-country pneumatic wheels + tow hitch",rotor:"6-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"1,600 × 800 × 1,200 mm",noiseLevel:"< 95 dB(A)",weight:"195 kg"}},
  14:{id:14,name:"Prof 6 OR 14 HP Vanguard 400",sku:"MA 032 030 131",engine:"14 HP Vanguard 400",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"14 HP Vanguard 400",power:"10.4 kW / 14 HP",timberDiameter:"Ø 90 mm",capacity:"200 litres",choppingSpeed:"2,200 rpm",shreddingTech:"6-way shredding system",blades:"6 reversible blades",noiseReduction:"Double-wall chamber, acoustic insulation",feedOpening:"120 × 70 mm",feedHeight:"Standard",collectionCapacity:"200 litres",durability:"Heavy-duty steel, industrial-grade",chassis:"Reinforced steel frame, on road",safety:"Emergency stop, anti-blockage, safety guards",storageDimensions:"1,600 × 800 × 1,200 mm",wheels:"Road-approved pneumatic wheels + tow hitch",rotor:"6-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"1,600 × 800 × 1,200 mm",noiseLevel:"< 95 dB(A)",weight:"190 kg"}},
  15:{id:15,name:"Prof 6 PTO",sku:"MA 032 040 000",engine:"PTO - ABM",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"PTO (tractor-mounted)",power:"20–40 kW / 27–54 HP (via PTO)",timberDiameter:"Ø 100 mm",capacity:"N/A (ground discharge)",choppingSpeed:"2,200 rpm",shreddingTech:"6-way shredding system",blades:"6 reversible blades",noiseReduction:"Double-wall chamber",feedOpening:"130 × 80 mm",feedHeight:"Elevated",collectionCapacity:"N/A (ground discharge)",durability:"Industrial-grade steel, tractor-grade",chassis:"3-point linkage mounted",safety:"PTO safety guard, emergency stop",storageDimensions:"1,700 × 850 × 1,300 mm",wheels:"N/A (tractor mounted)",rotor:"6-way reversible rotor",cuttingWidth:"N/A",transmission:"PTO shaft drive",dimensions:"1,700 × 850 × 1,300 mm",noiseLevel:"< 97 dB(A)",weight:"220 kg"}},
  16:{id:16,name:"Prof 6 E-Power OW",sku:"MA 032 010 821",engine:"7.5 kW - 48 V Vanguard 7.0 kW",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"48V electric (7.5 kW)",power:"7.5 kW / 10 HP",timberDiameter:"Ø 90 mm",capacity:"200 litres",choppingSpeed:"2,200 rpm",shreddingTech:"6-way shredding system",blades:"6 reversible blades",noiseReduction:"Double-wall chamber, electric motor (very quiet)",feedOpening:"120 × 70 mm",feedHeight:"Standard",collectionCapacity:"200 litres",durability:"Heavy-duty steel, industrial-grade",chassis:"Reinforced steel frame, on wheels",safety:"Emergency stop, anti-blockage, safety guards",storageDimensions:"1,600 × 800 × 1,200 mm",wheels:"2 large pneumatic wheels + tow hitch",rotor:"6-way reversible rotor",cuttingWidth:"N/A",transmission:"Direct drive (electric)",dimensions:"1,600 × 800 × 1,200 mm",noiseLevel:"< 85 dB(A)",weight:"200 kg"}},
  17:{id:17,name:"Prof 6 E-Power CC",sku:"MA 032 020 821",engine:"7.5 kW - 48 V Vanguard 7.0 kW",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"48V electric (7.5 kW)",power:"7.5 kW / 10 HP",timberDiameter:"Ø 90 mm",capacity:"200 litres",choppingSpeed:"2,200 rpm",shreddingTech:"6-way shredding system",blades:"6 reversible blades",noiseReduction:"Double-wall chamber, electric motor (very quiet)",feedOpening:"120 × 70 mm",feedHeight:"Standard",collectionCapacity:"200 litres",durability:"Heavy-duty steel, industrial-grade",chassis:"Reinforced steel frame, cross-country",safety:"Emergency stop, anti-blockage, safety guards",storageDimensions:"1,600 × 800 × 1,200 mm",wheels:"Cross-country pneumatic wheels + tow hitch",rotor:"6-way reversible rotor",cuttingWidth:"N/A",transmission:"Direct drive (electric)",dimensions:"1,600 × 800 × 1,200 mm",noiseLevel:"< 85 dB(A)",weight:"215 kg"}},
  18:{id:18,name:"Prof 6 Monster",sku:"MA 032 010 113",engine:"18 HP Vanguard V-Twin",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"18 HP Vanguard V-Twin",power:"13.4 kW / 18 HP",timberDiameter:"Ø 100 mm",capacity:"250 litres",choppingSpeed:"2,000 rpm",shreddingTech:"6-way shredding system",blades:"6 reversible blades",noiseReduction:"Double-wall chamber, acoustic insulation",feedOpening:"140 × 80 mm",feedHeight:"Standard",collectionCapacity:"250 litres",durability:"Industrial-grade steel, heavy-duty",chassis:"Reinforced steel frame, on wheels",safety:"Emergency stop, anti-blockage, safety guards",storageDimensions:"1,800 × 900 × 1,300 mm",wheels:"2 large pneumatic wheels + tow hitch",rotor:"6-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"1,800 × 900 × 1,300 mm",noiseLevel:"< 96 dB(A)",weight:"250 kg"}},
  19:{id:19,name:"Prof 6 Monster CC 18 HP Vanguard V-Twin",sku:"MA 032 020 113",engine:"18 HP Vanguard V-Twin",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"18 HP Vanguard V-Twin",power:"13.4 kW / 18 HP",timberDiameter:"Ø 100 mm",capacity:"250 litres",choppingSpeed:"2,000 rpm",shreddingTech:"6-way shredding system",blades:"6 reversible blades",noiseReduction:"Double-wall chamber, acoustic insulation",feedOpening:"140 × 80 mm",feedHeight:"Standard",collectionCapacity:"250 litres",durability:"Industrial-grade steel, heavy-duty",chassis:"Reinforced steel frame, cross-country",safety:"Emergency stop, anti-blockage, safety guards",storageDimensions:"1,800 × 900 × 1,300 mm",wheels:"Cross-country pneumatic wheels + tow hitch",rotor:"6-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"1,800 × 900 × 1,300 mm",noiseLevel:"< 96 dB(A)",weight:"270 kg"}},
  20:{id:20,name:"Prof 6 Monster OR 18 HP Vanguard V-Twin",sku:"MA 032 030 113",engine:"18 HP Vanguard V-Twin",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"18 HP Vanguard V-Twin",power:"13.4 kW / 18 HP",timberDiameter:"Ø 100 mm",capacity:"250 litres",choppingSpeed:"2,000 rpm",shreddingTech:"6-way shredding system",blades:"6 reversible blades",noiseReduction:"Double-wall chamber, acoustic insulation",feedOpening:"140 × 80 mm",feedHeight:"Standard",collectionCapacity:"250 litres",durability:"Industrial-grade steel, heavy-duty",chassis:"Reinforced steel frame, on road",safety:"Emergency stop, anti-blockage, safety guards",storageDimensions:"1,800 × 900 × 1,300 mm",wheels:"Road-approved pneumatic wheels + tow hitch",rotor:"6-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"1,800 × 900 × 1,300 mm",noiseLevel:"< 96 dB(A)",weight:"260 kg"}},
  21:{id:21,name:"Super Prof OW 18 HP Vanguard",sku:"MA 029 040 113",engine:"(18 HP) B&S Vanguard",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"18 HP B&S Vanguard",power:"13.4 kW / 18 HP",timberDiameter:"Ø 120 mm",capacity:"300 litres",choppingSpeed:"2,000 rpm",shreddingTech:"6-way shredding system + ABM",blades:"6 reversible blades",noiseReduction:"Double-wall chamber, acoustic insulation",feedOpening:"150 × 90 mm",feedHeight:"Standard",collectionCapacity:"300 litres",durability:"Industrial-grade steel, heavy-duty",chassis:"Reinforced steel frame, on wheels",safety:"Emergency stop, anti-blockage, safety guards, ABM",storageDimensions:"2,000 × 1,000 × 1,400 mm",wheels:"2 large pneumatic wheels + tow hitch",rotor:"6-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"2,000 × 1,000 × 1,400 mm",noiseLevel:"< 97 dB(A)",weight:"320 kg"}},
  22:{id:22,name:"Super Prof CC 18 HP Vanguard",sku:"MA 029 050 113",engine:"(18 HP) B&S Vanguard",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"18 HP B&S Vanguard",power:"13.4 kW / 18 HP",timberDiameter:"Ø 120 mm",capacity:"300 litres",choppingSpeed:"2,000 rpm",shreddingTech:"6-way shredding system + ABM",blades:"6 reversible blades",noiseReduction:"Double-wall chamber, acoustic insulation",feedOpening:"150 × 90 mm",feedHeight:"Standard",collectionCapacity:"300 litres",durability:"Industrial-grade steel, heavy-duty",chassis:"Reinforced steel frame, cross-country",safety:"Emergency stop, anti-blockage, safety guards, ABM",storageDimensions:"2,000 × 1,000 × 1,400 mm",wheels:"Cross-country pneumatic wheels + tow hitch",rotor:"6-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"2,000 × 1,000 × 1,400 mm",noiseLevel:"< 97 dB(A)",weight:"340 kg"}},
  23:{id:23,name:"Super Prof OR 18 HP Vanguard",sku:"MA 029 070 113",engine:"(18 HP) B&S Vanguard",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"18 HP B&S Vanguard",power:"13.4 kW / 18 HP",timberDiameter:"Ø 120 mm",capacity:"300 litres",choppingSpeed:"2,000 rpm",shreddingTech:"6-way shredding system + ABM",blades:"6 reversible blades",noiseReduction:"Double-wall chamber, acoustic insulation",feedOpening:"150 × 90 mm",feedHeight:"Standard",collectionCapacity:"300 litres",durability:"Industrial-grade steel, heavy-duty",chassis:"Reinforced steel frame, on road",safety:"Emergency stop, anti-blockage, safety guards, ABM",storageDimensions:"2,000 × 1,000 × 1,400 mm",wheels:"Road-approved pneumatic wheels + tow hitch",rotor:"6-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"2,000 × 1,000 × 1,400 mm",noiseLevel:"< 97 dB(A)",weight:"330 kg"}},
  24:{id:24,name:"Super Prof Max OW 23 HP EFI Vanguard",sku:"MA 029 040 125",engine:"(23 HP) B&S EFI Vanguard",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"23 HP B&S EFI Vanguard",power:"17.2 kW / 23 HP",timberDiameter:"Ø 130 mm",capacity:"350 litres",choppingSpeed:"1,800 rpm",shreddingTech:"6-way shredding system + ABM + ZR",blades:"6 reversible blades",noiseReduction:"Double-wall chamber, acoustic insulation, EFI",feedOpening:"160 × 100 mm",feedHeight:"Standard",collectionCapacity:"350 litres",durability:"Industrial-grade steel, heavy-duty",chassis:"Reinforced steel frame, on wheels",safety:"Emergency stop, anti-blockage, safety guards, ABM",storageDimensions:"2,100 × 1,100 × 1,500 mm",wheels:"2 large pneumatic wheels + tow hitch",rotor:"6-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"2,100 × 1,100 × 1,500 mm",noiseLevel:"< 97 dB(A)",weight:"380 kg"}},
  25:{id:25,name:"Super Prof Max CC 23 HP EFI Vanguard",sku:"MA 029 050 125",engine:"(23 HP) B&S EFI Vanguard",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"23 HP B&S EFI Vanguard",power:"17.2 kW / 23 HP",timberDiameter:"Ø 130 mm",capacity:"350 litres",choppingSpeed:"1,800 rpm",shreddingTech:"6-way shredding system + ABM + ZR",blades:"6 reversible blades",noiseReduction:"Double-wall chamber, acoustic insulation, EFI",feedOpening:"160 × 100 mm",feedHeight:"Standard",collectionCapacity:"350 litres",durability:"Industrial-grade steel, heavy-duty",chassis:"Reinforced steel frame, cross-country",safety:"Emergency stop, anti-blockage, safety guards, ABM",storageDimensions:"2,100 × 1,100 × 1,500 mm",wheels:"Cross-country pneumatic wheels + tow hitch",rotor:"6-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"2,100 × 1,100 × 1,500 mm",noiseLevel:"< 97 dB(A)",weight:"400 kg"}},
  26:{id:26,name:"Super Prof Max OR 23 HP EFI Vanguard",sku:"MA 029 070 125",engine:"(23 HP) B&S EFIVanguard",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"23 HP B&S EFI Vanguard",power:"17.2 kW / 23 HP",timberDiameter:"Ø 130 mm",capacity:"350 litres",choppingSpeed:"1,800 rpm",shreddingTech:"6-way shredding system + ABM + ZR",blades:"6 reversible blades",noiseReduction:"Double-wall chamber, acoustic insulation, EFI",feedOpening:"160 × 100 mm",feedHeight:"Standard",collectionCapacity:"350 litres",durability:"Industrial-grade steel, heavy-duty",chassis:"Reinforced steel frame, on road",safety:"Emergency stop, anti-blockage, safety guards, ABM",storageDimensions:"2,100 × 1,100 × 1,500 mm",wheels:"Road-approved pneumatic wheels + tow hitch",rotor:"6-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"2,100 × 1,100 × 1,500 mm",noiseLevel:"< 97 dB(A)",weight:"390 kg"}},
  27:{id:27,name:"MEGA PROF OR 25 HP Kubota Diesel",sku:"MA 018 011 340",engine:"(25 HP) Kubota Diesel",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"25 HP Kubota Diesel",power:"18.6 kW / 25 HP",timberDiameter:"Ø 150 mm",capacity:"500 litres",choppingSpeed:"1,800 rpm",shreddingTech:"6-way shredding system + ABM + ZR",blades:"6 reversible blades",noiseReduction:"Double-wall chamber, acoustic insulation",feedOpening:"180 × 110 mm",feedHeight:"Standard",collectionCapacity:"500 litres",durability:"Industrial-grade steel, heavy-duty",chassis:"Reinforced steel frame, on road",safety:"Emergency stop, anti-blockage, safety guards, ABM",storageDimensions:"2,400 × 1,200 × 1,600 mm",wheels:"Road-approved pneumatic wheels + tow hitch",rotor:"6-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"2,400 × 1,200 × 1,600 mm",noiseLevel:"< 98 dB(A)",weight:"520 kg"}},
  28:{id:28,name:"MEGA PROF OR 40 HP Vanguard",sku:"MA 018 011 137",engine:"(37 HP) B&S EFI Vanguard",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"37 HP B&S EFI Vanguard",power:"27.6 kW / 37 HP",timberDiameter:"Ø 160 mm",capacity:"500 litres",choppingSpeed:"1,800 rpm",shreddingTech:"6-way shredding system + ABM + ZR",blades:"6 reversible blades",noiseReduction:"Double-wall chamber, acoustic insulation",feedOpening:"180 × 110 mm",feedHeight:"Standard",collectionCapacity:"500 litres",durability:"Industrial-grade steel, heavy-duty",chassis:"Reinforced steel frame, on road",safety:"Emergency stop, anti-blockage, safety guards, ABM",storageDimensions:"2,400 × 1,200 × 1,600 mm",wheels:"Road-approved pneumatic wheels + tow hitch",rotor:"6-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"2,400 × 1,200 × 1,600 mm",noiseLevel:"< 99 dB(A)",weight:"540 kg"}},
  29:{id:29,name:"MEGA PROF OW 25 HP Kubota Diesel",sku:"MA 018 021 340",engine:"(25 HP) Kubota Diesel",image:"Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",specs:{engine:"25 HP Kubota Diesel",power:"18.6 kW / 25 HP",timberDiameter:"Ø 150 mm",capacity:"500 litres",choppingSpeed:"1,800 rpm",shreddingTech:"6-way shredding system + ABM + ZR",blades:"6 reversible blades",noiseReduction:"Double-wall chamber, acoustic insulation",feedOpening:"180 × 110 mm",feedHeight:"Standard",collectionCapacity:"500 litres",durability:"Industrial-grade steel, heavy-duty",chassis:"Reinforced steel frame, on wheels",safety:"Emergency stop, anti-blockage, safety guards, ABM",storageDimensions:"2,400 × 1,200 × 1,600 mm",wheels:"2 large pneumatic wheels + tow hitch",rotor:"6-way reversible rotor",cuttingWidth:"N/A",transmission:"Belt drive",dimensions:"2,400 × 1,200 × 1,600 mm",noiseLevel:"< 98 dB(A)",weight:"500 kg"}},
};

// ─── Default comparison data generator (from comparisonSpecs.ts lines 964-1008) ──
function defaultComparisonData(p) {
  const isShredder = p.category === "Shredders";
  const isDethatcher = p.category === "Dethatchers";
  const isOverseeder = p.category === "Overseeders";
  const isTopDresser = p.category === "Top Dressers";
  const isEdger = p.category === "Edgers";
  const isSodCutter = p.category === "Sod Cutters";
  const isSeeder = p.category === "Seeders";
  const isBlower = p.category === "Blowers";
  const isLeafVac = p.category === "Leaf Vacs";
  const hpMatch = p.engine.match(/([\d.]+)\s*HP/);
  const hp = hpMatch ? hpMatch[1] : "—";
  const kw = hp !== "—" ? (parseFloat(hp) * 0.746).toFixed(1) : "—";
  const isElectric = p.engine.includes("E-Power") || p.engine.includes("battery") || p.engine.toLowerCase().includes("electric");

  return {
    id: p.id,
    name: p.name,
    sku: p.sku,
    engine: p.engine,
    image: "Products/c94192fe59684f294c0e23b040e9535e1b810b60.png",
    specs: {
      engine: p.engine,
      power: hp !== "—" ? `${kw} kW / ${hp} HP` : p.engine,
      timberDiameter: isShredder ? "Ø 40–60 mm" : "N/A",
      capacity: isShredder ? "60–120 litres" : isDethatcher ? "N/A (rear discharge)" : isBlower || isLeafVac ? "N/A" : "N/A",
      choppingSpeed: isShredder ? "2,400–2,800 rpm" : "N/A",
      shreddingTech: isShredder ? "Chopping Principle™" : isDethatcher ? "PSB™ dethatching system" : isOverseeder ? "Precision seeding system" : isTopDresser ? "Eco Cure spreading system" : isEdger ? "Precision edging system" : isSodCutter ? "Hydrostatic sod cutting" : isSeeder ? "Precision seed distribution" : isBlower ? "High-velocity fan" : isLeafVac ? "Vacuum & shredding system" : "—",
      blades: isShredder ? "1–6 reversible blades" : isDethatcher ? "Fixed / loose / double-cut knives" : "—",
      noiseReduction: isShredder ? "Double-wall chamber" : isBlower || isLeafVac ? "Muffler system" : "Standard",
      feedOpening: isShredder ? "70 × 45 – 180 × 110 mm" : "N/A",
      feedHeight: isShredder ? "Standard" : "N/A",
      collectionCapacity: isShredder ? "60–500 litres" : isDethatcher ? "N/A (rear discharge)" : isBlower || isLeafVac ? "N/A" : "N/A",
      durability: "Heavy-duty steel construction",
      chassis: "Reinforced steel frame",
      safety: "Emergency stop, safety guards",
      storageDimensions: "Varies by model",
      wheels: "2 transport wheels",
      rotor: isShredder ? "Hardened steel rotor" : "N/A",
      cuttingWidth: isDethatcher ? "400–750 mm" : isOverseeder ? "450–750 mm" : isEdger ? "240–300 mm" : isSodCutter ? "600 mm" : isSeeder ? "750–1,000 mm" : "N/A",
      transmission: p.engine.includes("Hydrostatic") ? "Hydrostatic drive" : p.engine.includes("PTO") ? "PTO shaft drive" : isElectric ? "Direct drive (electric)" : "Belt drive",
      dimensions: "Varies by model",
      noiseLevel: isShredder ? "< 90–95 dB(A)" : isBlower ? "< 85 dB(A)" : isLeafVac ? "< 88 dB(A)" : "< 85 dB(A)",
      weight: "Varies by model",
    },
  };
}

function getComparisonData(p) {
  return COMPARISON_PRODUCT_DATA[p.id] ?? defaultComparisonData(p);
}

// ─── Maestro City full detail (from products.ts MAESTRO_CITY) ────────────────
const MAESTRO_CITY_DETAIL = {
  name: "Maestro City",
  sku: "MA 001 052 123",
  engine: "5.5 HP B&S XR 750",
  description: "ELIET emphasises ease of use as a high priority. To limit the effort required during collecting pruning waste, the Maestro has a wide feed-in opening. The Maestro City has the added advantage that the feed-in position is 15 cm lower compared to the Maestro Country.",
  image: "Detail/c94192fe59684f294c0e23b040e9535e1b810b60.png",
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
    { img: "Detail/14f6882065d85cf5e711b6a4221e9ef56bd5bffc.png", title: "Robust Frame", desc: "All ELIET chippers are manufactured to the highest degree of craftsmanship. The steel shredding chamber is firmly welded to the tubular frame, and the feed hopper is manufactured from steel — built to withstand years of demanding use." },
    { img: "Detail/970dd86fc1aac6154ea34bdd2da0d4beffffa239.png", title: "Low Noise", desc: "The shredding chamber has a double wall to reduce noise pollution. Sound-damping material on the frame wall suppresses the drumming effect of chippings, reducing the noise level by several dB." },
    { img: "Detail/d783e11aa03289570f50111ba7b64cd2ace5d216.png", title: "Collection Bag", desc: "Fine chippings are immediately collected in a large 60-litre bag. One full bag fills a wheelbarrow — ready for the compost bin or applied directly as fertile mulch around garden borders." },
    { img: "Detail/f3d5193dcf67de760bdf01425c635343368b92be.png", title: "Sight Glass", desc: "A sight-glass in the top plate of the chassis lets you see at a glance when the collection bag is getting full — no stopping, no guesswork." },
    { img: "Detail/9a4092d26988ddb09948055a482f505b7aadf4ea.png", title: "Standard Calibration Sieve", desc: "The special shredding system handles thick branches, fine hedge trimmings, leafy green waste from flower borders, and even autumn leaves — all in one pass without clogging." },
    { img: "Detail/a514b16c0f59c75ca2d62d2024e6ad5b5d9151aa.png", title: "Multi-Purpose Grating for Wet Greenwaste", desc: "For moisture-rich material, replace the standard sieve with the optional multi-purpose grating (Art. MA 001 052 001) to prevent any clogging and maintain throughput." },
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

// ─── Build output ────────────────────────────────────────────────────────────
const products = CATALOG.map((p) => {
  const compData = getComparisonData(p);
  const isMaestroCity = p.id === 1;
  return {
    id: p.id,
    name: p.name,
    sku: p.sku,
    engine: p.engine,
    description: p.desc,
    category: p.category,
    // WooCommerce product image path (relative to wordpress/assets/images/)
    image: `Products/c94192fe59684f294c0e23b040e9535e1b810b60.png`,
    // Comparison table data
    comparisonSpecs: compData.specs,
    // Full detail page data (only populated for Maestro City; others use productDetailFrom)
    detail: isMaestroCity ? {
      specs: MAESTRO_CITY_DETAIL.specs,
      features: MAESTRO_CITY_DETAIL.features,
      technology: MAESTRO_CITY_DETAIL.technology,
      engineOptions: MAESTRO_CITY_DETAIL.engineOptions,
      accessories: MAESTRO_CITY_DETAIL.accessories,
      image: MAESTRO_CITY_DETAIL.image,
    } : {
      // For non-Maestro City products, specs inherit from comparison data but
      // features/technology/accessories reuse Maestro City as placeholder
      _note: "Detail page content is placeholder (productDetailFrom Maestro City). Real per-product detail coming from Product Import Smartsheet.",
      specs: Object.entries(compData.specs)
        .filter(([key]) => ["engine","power","timberDiameter","weight","noiseLevel","shreddingTech"].includes(key))
        .map(([key, value]) => ({ label: key.replace(/([A-Z])/g," $1").replace(/^./,s=>s.toUpperCase()), value })),
      features: MAESTRO_CITY_DETAIL.features,
      technology: MAESTRO_CITY_DETAIL.technology,
      engineOptions: [{ name: compData.specs.engine, hp: compData.specs.power, note: "" }],
      accessories: [],
      image: compData.image,
    },
    // WC slug references for Advanced Product Comparison plugin
    wcAttributeSlugs: {
      engine: "pa_engine",
      power: "pa_power",
      timberDiameter: "pa_timber-diameter",
      capacity: "pa_capacity",
      choppingSpeed: "pa_chopping-speed",
      shreddingTech: "pa_shredding-technology",
      blades: "pa_blades",
      noiseReduction: "pa_noise-reduction",
      feedOpening: "pa_feed-opening",
      feedHeight: "pa_feed-height",
      collectionCapacity: "pa_collection-capacity",
      durability: "pa_durability",
      chassis: "pa_chassis",
      safety: "pa_safety",
      storageDimensions: "pa_storage-dimensions",
      wheels: "pa_wheels",
      rotor: "pa_rotor",
      cuttingWidth: "pa_cutting-width",
      transmission: "pa_transmission",
      dimensions: "pa_dimensions",
      noiseLevel: "pa_noise-level",
      weight: "pa_weight",
    },
  };
});

const output = {
  _meta: {
    generated: new Date().toISOString(),
    source: "tools/export-products.mjs (from src/app/products.ts + src/app/comparison/comparisonSpecs.ts)",
    totalProducts: products.length,
    productsWithHardcodedSpecs: Object.keys(COMPARISON_PRODUCT_DATA).length,
    productsWithFallbackSpecs: products.length - Object.keys(COMPARISON_PRODUCT_DATA).length,
    notes: [
      "Products 1-29 have hardcoded comparison specs from comparisonSpecs.ts",
      "Products 30-71 use fallback spec data derived from category + engine (defaultComparisonData)",
      "Only Maestro City (id=1) has a full detail page (features, technology, engine options, accessories)",
      "Non-Maestro City products use productDetailFrom() — specs derived from comparison data, features/tech reuse Maestro City placeholder",
      "wcAttributeSlugs map to WooCommerce product attribute taxonomy names (pa_*) for Advanced Product Comparison plugin",
    ],
  },
  comparisonCategories: [
    {
      category: "PERFORMANCE",
      rows: [
        { label: "Engine selection", key: "engine", wcSlug: "pa_engine" },
        { label: "Power (W / DIN HP)", key: "power", wcSlug: "pa_power" },
        { label: "Shreddable timber diameter", key: "timberDiameter", wcSlug: "pa_timber-diameter" },
        { label: "Capacity", key: "capacity", wcSlug: "pa_capacity" },
        { label: "Chopping speed", key: "choppingSpeed", wcSlug: "pa_chopping-speed" },
        { label: "Shredding technology", key: "shreddingTech", wcSlug: "pa_shredding-technology" },
        { label: "Blades", key: "blades", wcSlug: "pa_blades" },
        { label: "Noise reduction", key: "noiseReduction", wcSlug: "pa_noise-reduction" },
      ],
    },
    {
      category: "DESIGN",
      rows: [
        { label: "Feed intake opening", key: "feedOpening", wcSlug: "pa_feed-opening" },
        { label: "Feed height", key: "feedHeight", wcSlug: "pa_feed-height" },
        { label: "Collecting box capacity", key: "collectionCapacity", wcSlug: "pa_collection-capacity" },
        { label: "Durability", key: "durability", wcSlug: "pa_durability" },
        { label: "Chassis", key: "chassis", wcSlug: "pa_chassis" },
        { label: "Safety", key: "safety", wcSlug: "pa_safety" },
        { label: "Storage dimensions", key: "storageDimensions", wcSlug: "pa_storage-dimensions" },
        { label: "Wheels", key: "wheels", wcSlug: "pa_wheels" },
      ],
    },
    {
      category: "DIMENSIONS",
      rows: [
        { label: "Rotor", key: "rotor", wcSlug: "pa_rotor" },
        { label: "Cutting width", key: "cuttingWidth", wcSlug: "pa_cutting-width" },
        { label: "Transmission", key: "transmission", wcSlug: "pa_transmission" },
        { label: "Dimensions", key: "dimensions", wcSlug: "pa_dimensions" },
        { label: "Noise level", key: "noiseLevel", wcSlug: "pa_noise-level" },
        { label: "Weight", key: "weight", wcSlug: "pa_weight" },
      ],
    },
  ],
  products,
};

// ─── Write ───────────────────────────────────────────────────────────────────
const outDir = resolve(__dirname, "..", "wordpress", "data");
mkdirSync(outDir, { recursive: true });
const outPath = resolve(outDir, "products.json");
writeFileSync(outPath, JSON.stringify(output, null, 2));
console.log(`Wrote ${products.length} products to ${outPath}`);
console.log(`  - ${Object.keys(COMPARISON_PRODUCT_DATA).length} with hardcoded comparison specs`);
console.log(`  - ${products.length - Object.keys(COMPARISON_PRODUCT_DATA).length} with fallback comparison specs`);