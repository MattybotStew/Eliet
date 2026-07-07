import svgPaths from "./svg-8nte2ehq9w";

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
    <div className="[word-break:break-word] content-stretch flex font-['Overpass:Regular',sans-serif] font-normal gap-[24px] items-center relative shrink-0 text-white tracking-[0.5px] uppercase whitespace-nowrap" data-name="nav">
      <p className="leading-[0] relative shrink-0 text-[0px]">
        <span className="leading-[20px] text-[13px]">{`Products `}</span>
        <span className="leading-[20px] text-[#ef7d00] text-[13px]">+</span>
      </p>
      <p className="leading-[0] relative shrink-0 text-[0px]">
        <span className="leading-[20px] text-[13px]">{`Service `}</span>
        <span className="leading-[20px] text-[#ef7d00] text-[13px]">+</span>
      </p>
      <p className="leading-[0] relative shrink-0 text-[0px]">
        <span className="leading-[20px] text-[13px]">{`Where to Find ELIET `}</span>
        <span className="leading-[20px] text-[#ef7d00] text-[13px]">+</span>
      </p>
      <p className="leading-[0] relative shrink-0 text-[0px]">
        <span className="leading-[20px] text-[13px]">{`About `}</span>
        <span className="leading-[20px] text-[#ef7d00] text-[13px]">+</span>
      </p>
      <p className="leading-[20px] relative shrink-0 text-[13px]">Demo Tour</p>
      <p className="leading-[20px] relative shrink-0 text-[13px]">Contact</p>
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
      <p className="[word-break:break-word] font-['Overpass:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] text-white tracking-[0.5px] uppercase whitespace-nowrap">login</p>
      <div className="h-[16px] relative shrink-0 w-[15.676px]" data-name="⌕">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6758 15.9999">
          <path d={svgPaths.p28358500} fill="var(--fill-0, white)" id="â" />
        </svg>
      </div>
    </div>
  );
}

export default function Component1Header() {
  return (
    <div className="bg-[#131316] content-stretch flex items-center justify-between px-[120px] relative size-full" data-name="§1 - Header">
      <Frame />
      <HeaderRight />
    </div>
  );
}