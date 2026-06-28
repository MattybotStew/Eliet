import svgPaths from "./svg-pctjnimoaf";
import imgHero from "./2fb07080584865f70c7dcdae3920be4e533eb1e3.png";
import imgIMg from "./c94192fe59684f294c0e23b040e9535e1b810b60.png";
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
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[40px] items-center max-w-[760px] not-italic relative shrink-0 text-center text-white w-full" data-name="hero-copy">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Bold',sans-serif] leading-none relative shrink-0 text-[74px] tracking-[-0.5px] uppercase w-full">All Products</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Regular',sans-serif] leading-[normal] relative shrink-0 text-[24px] w-full">Professional-grade equipment for green waste processing, lawn care, and beyond. Browse our complete lineup below.</p>
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
        <div className="content-stretch flex flex-col items-center justify-center px-[40px] py-[200px] relative size-full">
          <HeroCopy />
        </div>
      </div>
    </div>
  );
}

function NavBreadcrumb() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1200px]" data-name="Nav - Breadcrumb">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Interstate:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#777] text-[14.7px] w-full">
        <p>
          <span className="leading-[26.4px] text-[#ef7d00]">Home</span>
          <span className="leading-[26.4px]">{` / Products`}</span>
        </p>
      </div>
    </div>
  );
}

function Component5TheLatestDrop() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="§5 - The Latest Drop">
      <div className="content-stretch flex flex-col items-start px-[120px] py-[64px] relative size-full">
        <NavBreadcrumb />
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16.63px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.63 16.63">
        <g clipPath="url(#clip0_5_750)" id="SVG">
          <path d={svgPaths.p2259a030} fill="var(--fill-0, #52505E)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_5_750">
            <rect fill="white" height="16.63" width="16.63" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-center flex flex-wrap items-center pr-[5px] relative shrink-0" data-name="Container">
      <Svg />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.02px] pb-[3.8px] pt-[0.37px] relative shrink-0 w-[16.63px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[26.41px] relative shrink-0 w-[52.28px]" data-name="Margin">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Interstate:Regular',sans-serif] justify-center leading-[0] left-[8.56px] not-italic text-[#131316] text-[17.1px] top-[12.5px] w-[44.132px]">
        <p className="leading-[26.4px]">Filter</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Link">
      <Container1 />
      <Margin />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[7.898px] relative shrink-0 w-[12.8px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 7.89809">
        <g clipPath="url(#clip0_5_747)" id="image">
          <path d={svgPaths.p124e3b00} fill="var(--fill-0, #52505E)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_5_747">
            <rect fill="white" height="7.89809" width="12.8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ImageClip() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col items-start justify-center left-[calc(50%+0.14px)] pl-[144.256px] pr-[2.944px] py-[13.551px] top-0" data-name="image clip">
      <Image />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pr-[23.73px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Interstate:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[16px] whitespace-nowrap">
        <p className="leading-[19px]">Default sorting</p>
      </div>
    </div>
  );
}

function OptionsShopOrder() {
  return (
    <div className="max-w-[160px] relative shrink-0 w-full" data-name="Options - Shop order">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center max-w-[inherit] p-[8px] relative size-full">
          <ImageClip />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="Form">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[10px] py-[8px] relative size-full">
          <OptionsShopOrder />
        </div>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="SVG">
          <path d={svgPaths.p18452a00} fill="var(--fill-0, #FB5832)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-center flex flex-wrap items-center left-0 top-px" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="SVG">
          <path d={svgPaths.pc6e1780} fill="var(--fill-0, #52505E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-center flex flex-wrap items-center left-[10px] top-px" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[17px] relative shrink-0 w-[27px]" data-name="Margin">
      <Container8 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container6 />
      <Margin1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[238.73px]" data-name="Container">
      <Form />
      <Container5 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[51px] items-center justify-between relative shrink-0 w-[1200px]" data-name="Container">
      <Link />
      <Container3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container />
    </div>
  );
}

function IMg() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="iMG">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMg} />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start not-italic relative size-full">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#131316] text-[18px] tracking-[1.5px] uppercase whitespace-nowrap">{`Product Name `}</p>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#ef7d00] text-[12px] w-[min-content]">
          <p className="leading-[18px]">MA 001 052 123</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#828282] text-[13px] w-[min-content]">
          <p className="leading-[18px]">{`5.5 HP B&S XR 750`}</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[#131316] text-[13px] w-[min-content]">
          <p className="leading-[18.2px]">Compact shredder for residential and light commercial use.</p>
        </div>
      </div>
    </div>
  );
}

function Shredders() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Shredders">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[21px] relative size-full">
        <IMg />
        <Frame3 />
      </div>
    </div>
  );
}

function IMg1() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="iMG">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMg} />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start not-italic relative size-full">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#131316] text-[18px] tracking-[1.5px] uppercase w-full">{`Product Name `}</p>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ef7d00] text-[12px] w-full">
          <p className="leading-[18px]">MA 001 052 123</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#828282] text-[13px] w-full">
          <p className="leading-[18px]">{`5.5 HP B&S XR 750`}</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#131316] text-[13px] w-full">
          <p className="leading-[18.2px]">Compact shredder for residential and light commercial use.</p>
        </div>
      </div>
    </div>
  );
}

function Shredders1() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Shredders">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[21px] relative size-full">
        <IMg1 />
        <Frame4 />
      </div>
    </div>
  );
}

function IMg2() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="iMG">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMg} />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start not-italic relative size-full">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#131316] text-[18px] tracking-[1.5px] uppercase w-full">{`Product Name `}</p>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ef7d00] text-[12px] w-full">
          <p className="leading-[18px]">MA 001 052 123</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#828282] text-[13px] w-full">
          <p className="leading-[18px]">{`5.5 HP B&S XR 750`}</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#131316] text-[13px] w-full">
          <p className="leading-[18.2px]">Compact shredder for residential and light commercial use.</p>
        </div>
      </div>
    </div>
  );
}

function Shredders2() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Shredders">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[21px] relative size-full">
        <IMg2 />
        <Frame5 />
      </div>
    </div>
  );
}

function IMg3() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="iMG">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMg} />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start not-italic relative size-full">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#131316] text-[18px] tracking-[1.5px] uppercase w-full">{`Product Name `}</p>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ef7d00] text-[12px] w-full">
          <p className="leading-[18px]">MA 001 052 123</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#828282] text-[13px] w-full">
          <p className="leading-[18px]">{`5.5 HP B&S XR 750`}</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#131316] text-[13px] w-full">
          <p className="leading-[18.2px]">Compact shredder for residential and light commercial use.</p>
        </div>
      </div>
    </div>
  );
}

function Shredders3() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Shredders">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[21px] relative size-full">
        <IMg3 />
        <Frame6 />
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[20px] h-[396px] items-start relative shrink-0 w-[1200px]" data-name="row">
      <Shredders />
      <Shredders1 />
      <Shredders2 />
      <Shredders3 />
    </div>
  );
}

function IMg4() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="iMG">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMg} />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start not-italic relative size-full">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#131316] text-[18px] tracking-[1.5px] uppercase whitespace-nowrap">{`Product Name `}</p>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#ef7d00] text-[12px] w-[min-content]">
          <p className="leading-[18px]">MA 001 052 123</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#828282] text-[13px] w-[min-content]">
          <p className="leading-[18px]">{`5.5 HP B&S XR 750`}</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[#131316] text-[13px] w-[min-content]">
          <p className="leading-[18.2px]">Compact shredder for residential and light commercial use.</p>
        </div>
      </div>
    </div>
  );
}

function Shredders4() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Shredders">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[21px] relative size-full">
        <IMg4 />
        <Frame7 />
      </div>
    </div>
  );
}

function IMg5() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="iMG">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMg} />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start not-italic relative size-full">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#131316] text-[18px] tracking-[1.5px] uppercase w-full">{`Product Name `}</p>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ef7d00] text-[12px] w-full">
          <p className="leading-[18px]">MA 001 052 123</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#828282] text-[13px] w-full">
          <p className="leading-[18px]">{`5.5 HP B&S XR 750`}</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#131316] text-[13px] w-full">
          <p className="leading-[18.2px]">Compact shredder for residential and light commercial use.</p>
        </div>
      </div>
    </div>
  );
}

function Shredders5() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Shredders">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[21px] relative size-full">
        <IMg5 />
        <Frame8 />
      </div>
    </div>
  );
}

function IMg6() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="iMG">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMg} />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start not-italic relative size-full">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#131316] text-[18px] tracking-[1.5px] uppercase w-full">{`Product Name `}</p>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ef7d00] text-[12px] w-full">
          <p className="leading-[18px]">MA 001 052 123</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#828282] text-[13px] w-full">
          <p className="leading-[18px]">{`5.5 HP B&S XR 750`}</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#131316] text-[13px] w-full">
          <p className="leading-[18.2px]">Compact shredder for residential and light commercial use.</p>
        </div>
      </div>
    </div>
  );
}

function Shredders6() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Shredders">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[21px] relative size-full">
        <IMg6 />
        <Frame9 />
      </div>
    </div>
  );
}

function IMg7() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="iMG">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMg} />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start not-italic relative size-full">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#131316] text-[18px] tracking-[1.5px] uppercase w-full">{`Product Name `}</p>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ef7d00] text-[12px] w-full">
          <p className="leading-[18px]">MA 001 052 123</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#828282] text-[13px] w-full">
          <p className="leading-[18px]">{`5.5 HP B&S XR 750`}</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#131316] text-[13px] w-full">
          <p className="leading-[18.2px]">Compact shredder for residential and light commercial use.</p>
        </div>
      </div>
    </div>
  );
}

function Shredders7() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Shredders">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[21px] relative size-full">
        <IMg7 />
        <Frame10 />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[20px] h-[396px] items-start relative shrink-0 w-[1200px]" data-name="row">
      <Shredders4 />
      <Shredders5 />
      <Shredders6 />
      <Shredders7 />
    </div>
  );
}

function IMg8() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="iMG">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMg} />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start not-italic relative size-full">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#131316] text-[18px] tracking-[1.5px] uppercase whitespace-nowrap">{`Product Name `}</p>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#ef7d00] text-[12px] w-[min-content]">
          <p className="leading-[18px]">MA 001 052 123</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#828282] text-[13px] w-[min-content]">
          <p className="leading-[18px]">{`5.5 HP B&S XR 750`}</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[#131316] text-[13px] w-[min-content]">
          <p className="leading-[18.2px]">Compact shredder for residential and light commercial use.</p>
        </div>
      </div>
    </div>
  );
}

function Shredders8() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Shredders">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[21px] relative size-full">
        <IMg8 />
        <Frame11 />
      </div>
    </div>
  );
}

function IMg9() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="iMG">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMg} />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start not-italic relative size-full">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#131316] text-[18px] tracking-[1.5px] uppercase w-full">{`Product Name `}</p>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ef7d00] text-[12px] w-full">
          <p className="leading-[18px]">MA 001 052 123</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#828282] text-[13px] w-full">
          <p className="leading-[18px]">{`5.5 HP B&S XR 750`}</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#131316] text-[13px] w-full">
          <p className="leading-[18.2px]">Compact shredder for residential and light commercial use.</p>
        </div>
      </div>
    </div>
  );
}

function Shredders9() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Shredders">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[21px] relative size-full">
        <IMg9 />
        <Frame12 />
      </div>
    </div>
  );
}

function IMg10() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="iMG">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMg} />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start not-italic relative size-full">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#131316] text-[18px] tracking-[1.5px] uppercase w-full">{`Product Name `}</p>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ef7d00] text-[12px] w-full">
          <p className="leading-[18px]">MA 001 052 123</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#828282] text-[13px] w-full">
          <p className="leading-[18px]">{`5.5 HP B&S XR 750`}</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#131316] text-[13px] w-full">
          <p className="leading-[18.2px]">Compact shredder for residential and light commercial use.</p>
        </div>
      </div>
    </div>
  );
}

function Shredders10() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Shredders">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[21px] relative size-full">
        <IMg10 />
        <Frame13 />
      </div>
    </div>
  );
}

function IMg11() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="iMG">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMg} />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start not-italic relative size-full">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#131316] text-[18px] tracking-[1.5px] uppercase w-full">{`Product Name `}</p>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ef7d00] text-[12px] w-full">
          <p className="leading-[18px]">MA 001 052 123</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#828282] text-[13px] w-full">
          <p className="leading-[18px]">{`5.5 HP B&S XR 750`}</p>
        </div>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#131316] text-[13px] w-full">
          <p className="leading-[18.2px]">Compact shredder for residential and light commercial use.</p>
        </div>
      </div>
    </div>
  );
}

function Shredders11() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Shredders">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[21px] relative size-full">
        <IMg11 />
        <Frame14 />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[20px] h-[396px] items-start relative shrink-0 w-[1200px]" data-name="row">
      <Shredders8 />
      <Shredders9 />
      <Shredders10 />
      <Shredders11 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <Row />
      <Row1 />
      <Row2 />
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#ef7d00] relative rounded-[4px] self-stretch shrink-0 w-[42px]" data-name="Link">
      <div aria-hidden className="absolute border border-[#ef7d00] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[15px] py-[9px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Interstate:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
            <p className="leading-[24px]">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[4px] self-stretch shrink-0 w-[42px]" data-name="Link">
      <div aria-hidden className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[15px] py-[9px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Interstate:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] whitespace-nowrap">
            <p className="leading-[24px]">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-[4px] self-stretch shrink-0 w-[42px]" data-name="Link">
      <div aria-hidden className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[15px] py-[9px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Interstate:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] whitespace-nowrap">
            <p className="leading-[24px]">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative rounded-[4px] self-stretch shrink-0 w-[42px]" data-name="Link">
      <div aria-hidden className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[15px] py-[9px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular','Noto_Sans_Symbols:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wght" 400' }}>
            <p className="leading-[24px]">→</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex gap-[12px] h-[54px] items-start justify-center pt-[12px] relative shrink-0 w-full" data-name="PAGINATION">
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Component5TheLatestDrop1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="§5 - The Latest Drop">
      <div className="content-stretch flex flex-col gap-[30px] items-start pb-[64px] px-[120px] relative size-full">
        <Frame1 />
        <Frame2 />
        <Pagination />
      </div>
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

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.1px] pt-[2.3px] relative shrink-0 w-full" data-name="Container">
      <Logo2 />
    </div>
  );
}

function Frame15() {
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

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#131316] text-[14px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">our products</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[14px] items-start justify-center relative shrink-0" data-name="Container">
      <Container13 />
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-white content-stretch flex items-start px-[32px] py-[16px] relative rounded-[24px] shrink-0" data-name="Link">
      <Container12 />
    </div>
  );
}

function Container14() {
  return <div className="h-[46px] relative shrink-0 w-[319.95px]" data-name="Container" />;
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start pl-[60px] relative self-stretch shrink-0 w-[359.95px]" data-name="Container">
      <Container11 />
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Interstate:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[35px] text-white uppercase w-[min-content]">
        <p className="leading-none">Why professionals choose ELIET</p>
      </div>
      <Frame15 />
      <Link5 />
      <Container14 />
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

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <SportsWearStoreCollectionImg />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Container">
      <Container16 />
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

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <SportsWearStoreCollectionImg1 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Container">
      <Container18 />
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
      <Container10 />
      <Container15 />
      <Container17 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1200px]" data-name="Margin">
      <Background />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[64px] px-[120px] relative size-full">
          <Margin2 />
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

export default function Products() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Products">
      <div className="bg-[#131316] content-stretch flex h-[70px] items-center justify-between px-[120px] relative shrink-0 w-[1440px]" data-name="§1 - Header">
        <Frame />
        <HeaderRight />
      </div>
      <Hero />
      <Component5TheLatestDrop />
      <Component5TheLatestDrop1 />
      <Container9 />
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