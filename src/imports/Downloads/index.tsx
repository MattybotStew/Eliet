import svgPaths from "./svg-q0xqbfjtec";
import imgHero from "./abbc53ab6aad7b9899bebafa6de7dba793b1c7df.png";
import imgBackground from "./1f82331238f563e5b59fb3af78d5ffe2c314621b.png";
import imgSportsWearStoreCollectionImg1 from "./00653fe968cdffe052e9eeb52f31990f947b3900.png";
import imgSportsWearStoreCollectionImg2 from "./fdd6e374d528d07eceea4ad1a4b0646537fccb84.png";

function Logo1() {
  return (
    <div className="h-[26.995px] relative shrink-0 w-[88px]" data-name="logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 26.9948">
        <g id="logo">
          <path d={svgPaths.p2709be70} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2504cc00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1ce90ef0} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p30d48000} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.pecc3180} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start justify-center relative shrink-0" data-name="Logo">
      <Logo1 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="bg-white h-[5px] relative w-[88px]" data-name="Rectangle" />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Interstate:Regular',sans-serif] gap-[24px] items-center not-italic relative shrink-0 text-[13px] text-white tracking-[0.5px] uppercase whitespace-nowrap" data-name="nav">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] leading-[0] relative shrink-0">
        <span className="leading-[normal] text-[#ffb666]">Products</span>
        <span className="leading-[normal]">{` `}</span>
        <span className="leading-[normal] text-[#ffb666]">+</span>
      </p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] leading-[0] relative shrink-0">
        <span className="leading-[normal]">{`Service `}</span>
        <span className="leading-[normal] text-[#ef7d00]">+</span>
      </p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] leading-[0] relative shrink-0">
        <span className="leading-[normal]">{`Where to Find ELIET `}</span>
        <span className="leading-[normal] text-[#ef7d00]">+</span>
      </p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] leading-[0] relative shrink-0">
        <span className="leading-[normal]">{`About `}</span>
        <span className="leading-[normal] text-[#ef7d00]">+</span>
      </p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] leading-[normal] relative shrink-0">Demo Tour</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] leading-[normal] relative shrink-0">Contact</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[60px] items-center relative shrink-0">
      <Logo />
      <Nav />
    </div>
  );
}

function HeaderRight() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="header-right">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Interstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-white tracking-[0.5px] uppercase whitespace-nowrap">login</p>
      <div className="h-[16px] relative shrink-0 w-[15.676px]" data-name="⌕">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6758 15.9999">
          <path d={svgPaths.p28358500} fill="var(--fill-0, white)" id="â" />
        </svg>
      </div>
    </div>
  );
}

function HeroCopy() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[40px] items-center max-w-[760px] not-italic relative shrink-0 text-white w-full" data-name="hero-copy">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Bold',sans-serif] leading-none relative shrink-0 text-[74px] text-center tracking-[-0.5px] uppercase w-full">DOWNLOADS</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Regular',sans-serif] leading-[normal] relative shrink-0 text-[24px] w-full">Find product manuals, maintenance schedules, and technical data</p>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="search">
          <path d={svgPaths.p1615880} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SearchInput() {
  return (
    <div className="bg-white flex-[1_0_0] h-[56px] min-w-px relative rounded-[8px]" data-name="search-input">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] relative size-full">
          <Search />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#9ca3af] text-[14px]">Search manuals, schedules, or product data...</p>
        </div>
      </div>
    </div>
  );
}

function SearchCta() {
  return (
    <div className="bg-[#ef7d00] content-stretch flex h-[56px] items-center justify-center relative rounded-[8px] shrink-0 w-[180px]" data-name="search-cta">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[14px] text-white tracking-[1px] whitespace-nowrap">SEARCH</p>
    </div>
  );
}

function HeroSearchRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-center max-w-[920px] relative shrink-0 w-full" data-name="hero-search-row">
      <SearchInput />
      <SearchCta />
    </div>
  );
}

function Hero() {
  return (
    <div className="relative shrink-0 w-full" data-name="Hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(15,23,42,0.78)] inset-0" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center px-[40px] py-[200px] relative size-full">
          <HeroCopy />
          <HeroSearchRow />
        </div>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 w-full" data-name="section-header">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#131316] text-[36px] tracking-[-0.96px] uppercase w-full">
        <p className="leading-[62.4px]">Browse by category</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-[#6b7280] text-[13px] w-full">
        <p className="leading-[1.6]">Explore the most requested resources for your fleet.</p>
      </div>
    </div>
  );
}

function Wrench() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="wrench">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_7_2241)" id="wrench">
          <path d={svgPaths.p12aeae00} id="Vector" stroke="var(--stroke-0, #EF7D00)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_7_2241">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="icon">
      <Wrench />
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="cta">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ef7d00] text-[13px] whitespace-nowrap">View</p>
      <div className="relative shrink-0 size-[10.5px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
          <path d={svgPaths.pcf45680} fill="var(--fill-0, #EF7D00)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Meta() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap">12 files</p>
      <Cta />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white drop-shadow-[0px_8px_10px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Icon />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#131316] text-[24px] tracking-[-0.96px] uppercase w-[min-content]">
          <p className="leading-[62.4px]">Lawn Equipment</p>
        </div>
        <Meta />
      </div>
    </div>
  );
}

function Leaf() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="leaf">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_7_2247)" id="leaf">
          <path d={svgPaths.p3e8ee500} id="Vector" stroke="var(--stroke-0, #EF7D00)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_7_2247">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="icon">
      <Leaf />
    </div>
  );
}

function Cta1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="cta">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ef7d00] text-[13px] whitespace-nowrap">View</p>
      <div className="relative shrink-0 size-[10.5px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
          <path d={svgPaths.pcf45680} fill="var(--fill-0, #EF7D00)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Meta1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap">8 files</p>
      <Cta1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white drop-shadow-[0px_8px_10px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Icon1 />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#131316] text-[24px] tracking-[-0.96px] uppercase w-[min-content]">
          <p className="leading-[62.4px]">{`Leaf Blowers & Vacuums`}</p>
        </div>
        <Meta1 />
      </div>
    </div>
  );
}

function Package() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="package">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="package">
          <path d={svgPaths.p5adfd80} id="Vector" stroke="var(--stroke-0, #EF7D00)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="icon">
      <Package />
    </div>
  );
}

function Cta2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="cta">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ef7d00] text-[13px] whitespace-nowrap">View</p>
      <div className="relative shrink-0 size-[10.5px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
          <path d={svgPaths.pcf45680} fill="var(--fill-0, #EF7D00)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Meta2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap">6 files</p>
      <Cta2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white drop-shadow-[0px_8px_10px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Icon2 />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#131316] text-[24px] tracking-[-0.96px] uppercase w-[min-content]">
          <p className="leading-[62.4px]">Spreaders</p>
        </div>
        <Meta2 />
      </div>
    </div>
  );
}

function Grid() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="grid">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="grid">
          <path d={svgPaths.p10635e00} id="Vector" stroke="var(--stroke-0, #EF7D00)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="icon">
      <Grid />
    </div>
  );
}

function Cta3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="cta">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ef7d00] text-[13px] whitespace-nowrap">View</p>
      <div className="relative shrink-0 size-[10.5px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
          <path d={svgPaths.pcf45680} fill="var(--fill-0, #EF7D00)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Meta3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap">5 files</p>
      <Cta3 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white drop-shadow-[0px_8px_10px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Icon3 />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#131316] text-[24px] tracking-[-0.96px] uppercase w-[min-content]">
          <p className="leading-[62.4px]">Belt-Pit Systems</p>
        </div>
        <Meta3 />
      </div>
    </div>
  );
}

function GridRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="grid-row-1">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function BookOpen() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="book-open">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="book-open">
          <path d={svgPaths.p36698480} id="Vector" stroke="var(--stroke-0, #EF7D00)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="icon">
      <BookOpen />
    </div>
  );
}

function Cta4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="cta">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ef7d00] text-[13px] whitespace-nowrap">View</p>
      <div className="relative shrink-0 size-[10.5px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
          <path d={svgPaths.pcf45680} fill="var(--fill-0, #EF7D00)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Meta4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap">24 files</p>
      <Cta4 />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white drop-shadow-[0px_8px_10px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Icon4 />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#131316] text-[24px] tracking-[-0.96px] uppercase w-[min-content]">
          <p className="leading-[62.4px]">Manuals</p>
        </div>
        <Meta4 />
      </div>
    </div>
  );
}

function Ruler() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="ruler">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_7_2232)" id="ruler">
          <path d={svgPaths.p3b58e100} id="Vector" stroke="var(--stroke-0, #EF7D00)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_7_2232">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="icon">
      <Ruler />
    </div>
  );
}

function Cta5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="cta">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ef7d00] text-[13px] whitespace-nowrap">View</p>
      <div className="relative shrink-0 size-[10.5px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
          <path d={svgPaths.pcf45680} fill="var(--fill-0, #EF7D00)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Meta5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap">18 files</p>
      <Cta5 />
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white drop-shadow-[0px_8px_10px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Icon5 />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#131316] text-[24px] tracking-[-0.96px] uppercase w-[min-content]">
          <p className="leading-[62.4px]">Dimensions</p>
        </div>
        <Meta5 />
      </div>
    </div>
  );
}

function Layers() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="layers">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_7_2229)" id="layers">
          <path d={svgPaths.p1646ec00} id="Vector" stroke="var(--stroke-0, #EF7D00)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_7_2229">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="icon">
      <Layers />
    </div>
  );
}

function Cta6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="cta">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ef7d00] text-[13px] whitespace-nowrap">View</p>
      <div className="relative shrink-0 size-[10.5px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
          <path d={svgPaths.pcf45680} fill="var(--fill-0, #EF7D00)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Meta6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap">9 files</p>
      <Cta6 />
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white drop-shadow-[0px_8px_10px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Icon6 />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#131316] text-[24px] tracking-[-0.96px] uppercase w-[min-content]">
          <p className="leading-[62.4px]">Top Additions</p>
        </div>
        <Meta6 />
      </div>
    </div>
  );
}

function Scissors() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="scissors">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="scissors">
          <path d={svgPaths.p28981e00} id="Vector" stroke="var(--stroke-0, #EF7D00)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="icon">
      <Scissors />
    </div>
  );
}

function Cta7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="cta">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ef7d00] text-[13px] whitespace-nowrap">View</p>
      <div className="relative shrink-0 size-[10.5px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
          <path d={svgPaths.pcf45680} fill="var(--fill-0, #EF7D00)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Meta7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] whitespace-nowrap">7 files</p>
      <Cta7 />
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-white drop-shadow-[0px_8px_10px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Icon7 />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#131316] text-[24px] tracking-[-0.96px] uppercase w-[min-content]">
          <p className="leading-[62.4px]">Edge Cutting</p>
        </div>
        <Meta7 />
      </div>
    </div>
  );
}

function GridRow1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="grid-row-2">
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
    </div>
  );
}

function Categories() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Categories">
      <SectionHeader />
      <GridRow />
      <GridRow1 />
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="relative shrink-0 w-full" data-name="section-header">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#131316] text-[36px] tracking-[-0.96px] uppercase w-full">
          <p className="leading-[62.4px]">Filter tools</p>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-full">Narrow down results by product group and machine.</p>
      </div>
    </div>
  );
}

function Accent() {
  return <div className="bg-[#ef7d00] h-[4px] relative rounded-[2px] shrink-0 w-full" data-name="accent" />;
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="chevron-down">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Select() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="select">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[14px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#9ca3af] text-[14px]">Select group</p>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[13px] w-full">Product group</p>
      <Select />
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="chevron-down">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Select1() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="select">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[14px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#9ca3af] text-[14px]">Select machine</p>
          <ChevronDown1 />
        </div>
      </div>
    </div>
  );
}

function Field1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[13px] w-full">Machine</p>
      <Select1 />
    </div>
  );
}

function Btn() {
  return (
    <div className="bg-[#ef7d00] content-stretch flex h-[48px] items-center justify-center relative rounded-[8px] shrink-0 w-full" data-name="btn">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">FIND RESULTS</p>
    </div>
  );
}

function FilterCard() {
  return (
    <div className="bg-white drop-shadow-[0px_8px_10px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="filter-card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <Accent />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#131316] text-[24px] tracking-[-0.96px] uppercase w-full">
          <p className="leading-[62.4px]">Find a Manual</p>
        </div>
        <Field />
        <Field1 />
        <Btn />
      </div>
    </div>
  );
}

function Accent1() {
  return <div className="bg-[#ef7d00] h-[4px] relative rounded-[2px] shrink-0 w-full" data-name="accent" />;
}

function ChevronDown2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="chevron-down">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Select2() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="select">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[14px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#9ca3af] text-[14px]">Select group</p>
          <ChevronDown2 />
        </div>
      </div>
    </div>
  );
}

function Field2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[13px] w-full">Product group</p>
      <Select2 />
    </div>
  );
}

function ChevronDown3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="chevron-down">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Select3() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="select">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[14px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#9ca3af] text-[14px]">Select machine</p>
          <ChevronDown3 />
        </div>
      </div>
    </div>
  );
}

function Field3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[13px] w-full">Machine</p>
      <Select3 />
    </div>
  );
}

function Btn1() {
  return (
    <div className="bg-[#ef7d00] content-stretch flex h-[48px] items-center justify-center relative rounded-[8px] shrink-0 w-full" data-name="btn">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">FIND RESULTS</p>
    </div>
  );
}

function FilterCard1() {
  return (
    <div className="bg-white drop-shadow-[0px_8px_10px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="filter-card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <Accent1 />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#131316] text-[24px] tracking-[-0.96px] uppercase w-full">
          <p className="leading-[62.4px]">Maintenance Schedules</p>
        </div>
        <Field2 />
        <Field3 />
        <Btn1 />
      </div>
    </div>
  );
}

function Accent2() {
  return <div className="bg-[#ef7d00] h-[4px] relative rounded-[2px] shrink-0 w-full" data-name="accent" />;
}

function ChevronDown4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="chevron-down">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Select4() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="select">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[14px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#9ca3af] text-[14px]">Select group</p>
          <ChevronDown4 />
        </div>
      </div>
    </div>
  );
}

function Field4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[13px] w-full">Product group</p>
      <Select4 />
    </div>
  );
}

function ChevronDown5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="chevron-down">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Select5() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="select">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[14px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#9ca3af] text-[14px]">Select machine</p>
          <ChevronDown5 />
        </div>
      </div>
    </div>
  );
}

function Field5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[13px] w-full">Machine</p>
      <Select5 />
    </div>
  );
}

function Btn2() {
  return (
    <div className="bg-[#ef7d00] content-stretch flex h-[48px] items-center justify-center relative rounded-[8px] shrink-0 w-full" data-name="btn">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">FIND RESULTS</p>
    </div>
  );
}

function FilterCard2() {
  return (
    <div className="bg-white drop-shadow-[0px_8px_10px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="filter-card">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <Accent2 />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#131316] text-[24px] tracking-[-0.96px] uppercase w-full">
          <p className="leading-[62.4px]">Primary Data</p>
        </div>
        <Field4 />
        <Field5 />
        <Btn2 />
      </div>
    </div>
  );
}

function FilterRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="filter-row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <FilterCard />
        <FilterCard1 />
        <FilterCard2 />
      </div>
    </div>
  );
}

function Shredders() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Shredders">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[21px] relative size-full">
        <SectionHeader1 />
        <FilterRow />
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[1200px]" data-name="row">
      <Shredders />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Row />
    </div>
  );
}

function Component5TheLatestDrop() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[30px] items-start px-[120px] py-[64px] relative shrink-0" data-name="§5 - The Latest Drop">
      <Categories />
      <Frame1 />
    </div>
  );
}

function Logo3() {
  return (
    <div className="h-[26.995px] relative shrink-0 w-[88px]" data-name="logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 26.9948">
        <g id="logo">
          <path d={svgPaths.p2709be70} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2504cc00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1ce90ef0} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p30d48000} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.pecc3180} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Logo2() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start justify-center relative shrink-0" data-name="Logo">
      <Logo3 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="bg-white h-[5px] relative w-[88px]" data-name="Rectangle" />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.1px] pt-[2.3px] relative shrink-0 w-full" data-name="Container">
      <Logo2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Montserrat:Bold',sans-serif] gap-[18px] items-start leading-[0] not-italic relative shrink-0 text-[16px] text-white">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col justify-center relative shrink-0 w-[299.95px]">
        <p className="leading-[26.4px]">Same‑day parts shipping</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col justify-center relative shrink-0 w-[299.95px]">
        <p className="leading-[26.4px]">Local reps across the US</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col justify-center relative shrink-0 w-[299.95px]">
        <p className="leading-[26.4px]">Service you can count on</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col justify-center relative shrink-0 w-[299.95px]">
        <p className="leading-[26.4px]">30+ years of engineering</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#131316] text-[14px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">our products</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[14px] items-start justify-center relative shrink-0" data-name="Container">
      <Container4 />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white content-stretch flex items-start px-[32px] py-[16px] relative rounded-[24px] shrink-0" data-name="Link">
      <Container3 />
    </div>
  );
}

function Container5() {
  return <div className="h-[46px] relative shrink-0 w-[319.95px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start pl-[60px] relative self-stretch shrink-0 w-[359.95px]" data-name="Container">
      <Container2 />
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Interstate:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[35px] text-white uppercase w-[min-content]">
        <p className="leading-none">Why professionals choose ELIET</p>
      </div>
      <Frame2 />
      <Link />
      <Container5 />
    </div>
  );
}

function SportsWearStoreCollectionImg() {
  return (
    <div className="h-[400px] max-w-[399.95001220703125px] relative shrink-0 w-[300px]" data-name="sports wear store collection img 1">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSportsWearStoreCollectionImg1} />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <SportsWearStoreCollectionImg />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Container">
      <Container7 />
    </div>
  );
}

function SportsWearStoreCollectionImg1() {
  return (
    <div className="h-[400px] max-w-[399.95001220703125px] relative shrink-0 w-[300px]" data-name="sports wear store collection img 2">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSportsWearStoreCollectionImg2} />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <SportsWearStoreCollectionImg1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Container">
      <Container9 />
    </div>
  );
}

function Background() {
  return (
    <div className="content-stretch flex h-[508.395px] items-start justify-center py-[40px] relative shrink-0 w-full" data-name="Background">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
        <div className="absolute bg-[rgba(0,0,0,0.58)] inset-0" />
      </div>
      <Container1 />
      <Container6 />
      <Container8 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1200px]" data-name="Margin">
      <Background />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[64px] px-[120px] relative size-full">
          <Margin />
        </div>
      </div>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-white content-stretch flex h-[52px] items-center px-[16px] relative rounded-[4px] shrink-0 w-[400px]" data-name="Email Input">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#999] text-[14px] whitespace-nowrap">Email Address *</p>
    </div>
  );
}

function SubscribeBtn() {
  return (
    <div className="bg-[#ef7d00] content-stretch flex h-[52px] items-center justify-center relative rounded-[4px] shrink-0 w-[160px]" data-name="Subscribe Btn">
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-white tracking-[1.5px] whitespace-nowrap">SUBSCRIBE</p>
    </div>
  );
}

function NewsletterRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="newsletter-row">
      <EmailInput />
      <SubscribeBtn />
    </div>
  );
}

function Logo5() {
  return (
    <div className="h-[26.995px] relative shrink-0 w-[88px]" data-name="logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 26.9948">
        <g id="logo">
          <path d={svgPaths.p2709be70} fill="var(--fill-0, #EF7D00)" id="Vector" />
          <path d={svgPaths.p2504cc00} fill="var(--fill-0, #EF7D00)" id="Vector_2" />
          <path d={svgPaths.p1ce90ef0} fill="var(--fill-0, #EF7D00)" id="Vector_3" />
          <path d={svgPaths.p30d48000} fill="var(--fill-0, #EF7D00)" id="Vector_4" />
          <path d={svgPaths.pecc3180} fill="var(--fill-0, #EF7D00)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Logo4() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start justify-center relative shrink-0" data-name="Logo">
      <Logo5 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#ef7d00] h-[5px] relative w-[88px]" data-name="Rectangle" />
        </div>
      </div>
    </div>
  );
}

function FooterLeft() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[360px]" data-name="footer-left">
      <Logo4 />
      <p className="[word-break:break-word] font-['Interstate:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#999] text-[14px] w-[min-content]">ELIET is a Belgian-engineered professional equipment company. Our patented Chopping Principle™ delivers superior performance in shredding, lawn renovation, seeding, and top dressing. Available across the United States through our network of professional dealers.</p>
    </div>
  );
}

function ColShop() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="col-shop">
      <p className="font-['Interstate:Bold',sans-serif] relative shrink-0 text-[12px] text-white tracking-[1.5px]">AT ELIET</p>
      <p className="font-['Interstate:Regular',sans-serif] relative shrink-0 text-[#999] text-[14px]">All Products</p>
      <p className="font-['Interstate:Regular',sans-serif] relative shrink-0 text-[#999] text-[14px]">Find a Dealer</p>
      <p className="font-['Interstate:Regular',sans-serif] relative shrink-0 text-[#999] text-[14px]">Demo Tour</p>
      <p className="font-['Interstate:Regular',sans-serif] relative shrink-0 text-[#999] text-[14px]">Finance Options</p>
    </div>
  );
}

function ColAbout() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="col-about">
      <p className="font-['Interstate:Bold',sans-serif] relative shrink-0 text-[12px] text-white tracking-[1.5px]">ABOUT ELIET</p>
      <p className="font-['Interstate:Regular',sans-serif] relative shrink-0 text-[#999] text-[14px]">About Us</p>
      <p className="font-['Interstate:Regular',sans-serif] relative shrink-0 text-[#999] text-[14px]">Service</p>
      <p className="font-['Interstate:Regular',sans-serif] relative shrink-0 text-[#999] text-[14px]">Machine Registration</p>
      <p className="font-['Interstate:Regular',sans-serif] relative shrink-0 text-[#999] text-[14px]">Press</p>
    </div>
  );
}

function ColContact() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="col-contact">
      <p className="font-['Interstate:Bold',sans-serif] relative shrink-0 text-[12px] text-white tracking-[1.5px]">GET IN TOUCH</p>
      <p className="font-['Interstate:Regular',sans-serif] relative shrink-0 text-[#999] text-[14px]">19 E Moreland Ave, Philadelphia PA 19118</p>
      <p className="font-['Interstate:Regular',sans-serif] relative shrink-0 text-[#999] text-[14px]">+1 412 367 5185</p>
      <p className="font-['Interstate:Regular',sans-serif] relative shrink-0 text-[#999] text-[14px]">info@elietusa.com</p>
    </div>
  );
}

function FooterRight() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[40px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="footer-right">
      <ColShop />
      <ColAbout />
      <ColContact />
    </div>
  );
}

function FooterTopRow() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="footer-top-row">
      <FooterLeft />
      <FooterRight />
    </div>
  );
}

function FooterTop() {
  return (
    <div className="relative shrink-0 w-full" data-name="footer-top">
      <div className="content-stretch flex flex-col gap-[40px] items-start pb-[40px] pt-[100px] px-[120px] relative size-full">
        <FooterTopRow />
        <div className="bg-[#383838] h-px relative shrink-0 w-full" data-name="Rectangle" />
      </div>
    </div>
  );
}

function FooterBottomBar() {
  return (
    <div className="bg-[#0d0d0f] h-[48px] relative shrink-0 w-full" data-name="footer-bottom-bar">
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Interstate:Regular',sans-serif] items-center justify-between leading-[normal] not-italic px-[120px] relative size-full text-[#666] text-[12px] whitespace-nowrap">
          <p className="relative shrink-0">Copyright © 2026 ELIET USA, Inc.</p>
          <p className="relative shrink-0">Powered by ELIET USA</p>
        </div>
      </div>
    </div>
  );
}

export default function Downloads() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="DOWNLOADS">
      <div className="bg-[#131316] content-stretch flex h-[70px] items-center justify-between px-[120px] relative shrink-0 w-[1440px]" data-name="§1 - Header">
        <Frame />
        <HeaderRight />
      </div>
      <Hero />
      <Component5TheLatestDrop />
      <Container />
      <div className="bg-[#f5f5f5] relative shrink-0 w-full" data-name="§10 - Newsletter">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[24px] items-center px-[120px] py-[72px] relative size-full">
            <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Interstate:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#131316] text-[36px] text-center tracking-[1.5px] w-[min-content]">BE THE FIRST TO KNOW</p>
            <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Interstate:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#4a4a4a] text-[16px] text-center w-[min-content]">Get updates on new machines, dealer events, and support news.</p>
            <NewsletterRow />
          </div>
        </div>
      </div>
      <div className="bg-[#131316] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="§11 - Footer">
        <FooterTop />
        <FooterBottomBar />
      </div>
    </div>
  );
}