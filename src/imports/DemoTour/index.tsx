import svgPaths from "./svg-w9v4mzv8qe";
import img2Hero from "./7c7c4e64ba9073e2d62482ad77ee8344ba3a7abe.png";
import imgMapPlaceholder from "./775f0ad568422bc32cdac14671967599f64cdeb4.png";
import imgBackground from "./251a1cb33423b5471808f54174524ddaf2538a27.png";
import imgBackground1 from "./1f82331238f563e5b59fb3af78d5ffe2c314621b.png";
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
    <div className="[word-break:break-word] content-stretch flex gap-[24px] items-center not-italic relative shrink-0 text-[13px] text-white tracking-[0.5px] uppercase whitespace-nowrap" data-name="nav">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Regular',sans-serif] leading-[0] relative shrink-0">
        <span className="leading-[normal]">{`Products `}</span>
        <span className="leading-[normal] text-[#ef7d00]">+</span>
      </p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Regular',sans-serif] leading-[0] relative shrink-0">
        <span className="leading-[normal]">{`Service `}</span>
        <span className="leading-[normal] text-[#ef7d00]">+</span>
      </p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Regular',sans-serif] leading-[0] relative shrink-0">
        <span className="leading-[normal]">{`Where to Find ELIET `}</span>
        <span className="leading-[normal] text-[#ef7d00]">+</span>
      </p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Regular',sans-serif] leading-[0] relative shrink-0">
        <span className="leading-[normal]">{`About `}</span>
        <span className="leading-[normal] text-[#ef7d00]">+</span>
      </p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0">Demo Tour</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Interstate:Regular',sans-serif] leading-[normal] relative shrink-0">Contact</p>
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

function HeroContent() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-[800px]" data-name="hero-content">
      <div className="bg-white h-[10px] relative shrink-0 w-[133px]" data-name="Rectangle" />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Interstate:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[41px] text-center text-white tracking-[-0.5px] uppercase w-[438px]">about eliet</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Interstate:Bold',sans-serif] leading-none min-w-full not-italic relative shrink-0 text-[74px] text-center text-white tracking-[-0.5px] uppercase w-[min-content]">Demo Tour</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Interstate:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[24px] text-center text-white w-[min-content]">Experience ELIET equipment in action - find a demo near you or request a private session.</p>
    </div>
  );
}

function Component2Hero() {
  return (
    <div className="content-stretch flex flex-col h-[900px] items-center justify-center overflow-clip px-[120px] relative shrink-0 w-[1440px]" data-name="§2 - Hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[118.03%] left-[-8.07%] max-w-none top-[-18.05%] w-[132.17%]" src={img2Hero} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.46)] inset-0" />
      </div>
      <HeroContent />
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex items-start pb-[6.5px] pt-[8.5px] relative shrink-0" data-name="Tab">
      <div aria-hidden className="absolute border-[#ef7d00] border-solid border-t-2 inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Interstate:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[12.3px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[20.8px]">The eliet story</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-start px-[20px] relative shrink-0" data-name="Container">
      <Tab />
      <div className="absolute bg-[#ef7d00] h-[3px] left-0 right-0 top-0" data-name="Background" />
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex items-start py-[6.5px] relative shrink-0" data-name="Tab">
      <div className="[word-break:break-word] flex flex-col font-['Interstate:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[12.3px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[20.8px]">eliet values</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start px-[20px] relative shrink-0" data-name="Container">
      <Tab1 />
    </div>
  );
}

function Tab2() {
  return (
    <div className="content-stretch flex items-start py-[6.5px] relative shrink-0" data-name="Tab">
      <div className="[word-break:break-word] flex flex-col font-['Interstate:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[12.3px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[20.8px]">USA TEAM</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-start px-[20px] relative shrink-0" data-name="Container">
      <Tab2 />
    </div>
  );
}

function Tab3() {
  return (
    <div className="content-stretch flex items-start py-[6.5px] relative shrink-0" data-name="Tab">
      <div className="[word-break:break-word] flex flex-col font-['Interstate:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[12.3px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[20.8px]">Testimonials</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-start px-[20px] relative shrink-0" data-name="Container">
      <Tab3 />
    </div>
  );
}

function Tab4() {
  return (
    <div className="content-stretch flex items-start py-[6.5px] relative shrink-0" data-name="Tab">
      <div className="[word-break:break-word] flex flex-col font-['Interstate:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[12.3px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[20.8px]">VIDEO</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-start px-[20px] relative shrink-0" data-name="Container">
      <Tab4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Tablist() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Tablist">
      <div className="absolute bg-[#ddd] h-px left-0 right-[0.44px] top-0" data-name="Horizontal Divider" />
      <Frame1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1200px]" data-name="Container">
      <Tablist />
    </div>
  );
}

function Component5TheLatestDrop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center px-[120px] relative shrink-0" data-name="§5 - The Latest Drop">
      <Container />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[44px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#999] text-[14px] whitespace-nowrap">Enter first name</p>
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Field">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#131316] text-[14px] whitespace-nowrap">First Name *</p>
      <Input />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[44px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#999] text-[14px] whitespace-nowrap">Enter last name</p>
        </div>
      </div>
    </div>
  );
}

function Field1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Field">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#131316] text-[14px] whitespace-nowrap">Last Name *</p>
      <Input1 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row 1">
      <Field />
      <Field1 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[44px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#999] text-[14px] whitespace-nowrap">Enter email</p>
        </div>
      </div>
    </div>
  );
}

function Field2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Field">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#131316] text-[14px] whitespace-nowrap">Email Address *</p>
      <Input2 />
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[44px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#999] text-[14px] whitespace-nowrap">Enter phone number</p>
        </div>
      </div>
    </div>
  );
}

function Field3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Field">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#131316] text-[14px] whitespace-nowrap">Phone Number *</p>
      <Input3 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row 2">
      <Field2 />
      <Field3 />
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white h-[44px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#999] text-[14px] whitespace-nowrap">Enter company</p>
        </div>
      </div>
    </div>
  );
}

function Field4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Field">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#131316] text-[14px] whitespace-nowrap">Company / Organization</p>
      <Input4 />
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white h-[44px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#999] text-[14px] whitespace-nowrap">City, State</p>
        </div>
      </div>
    </div>
  );
}

function Field5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Field">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#131316] text-[14px] whitespace-nowrap">Location / Address</p>
      <Input5 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row 3">
      <Field4 />
      <Field5 />
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white h-[44px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#999] text-[14px] whitespace-nowrap">mm/dd/yyyy</p>
        </div>
      </div>
    </div>
  );
}

function Field6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Field">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#131316] text-[14px] whitespace-nowrap">Preferred Date (Optional)</p>
      <Input6 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Row 4">
      <Field6 />
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white h-[120px] relative rounded-[4px] shrink-0 w-full" data-name="Textarea">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start px-[16px] py-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#999] text-[14px] whitespace-nowrap">Tell us about your operation...</p>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Row 5">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#131316] text-[14px] whitespace-nowrap">Message</p>
      <Textarea />
    </div>
  );
}

function FormGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Form Grid">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </div>
  );
}

function PillShredders() {
  return (
    <div className="bg-[#ef7d00] content-stretch flex h-[44px] items-center justify-center px-[24px] relative rounded-[22px] shrink-0" data-name="Pill/Shredders →">
      <p className="[word-break:break-word] font-['Montserrat:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-white tracking-[1px] whitespace-nowrap">Submit Request →</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <PillShredders />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-w-px relative">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#131316] text-[36px] text-center tracking-[-0.96px] uppercase whitespace-nowrap">
        <p className="leading-[62.4px]">Request a Private Demo</p>
      </div>
      <FormGrid />
      <Form />
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="map-pin">
          <path d={svgPaths.p8b99100} id="Vector" stroke="var(--stroke-0, #EF7D00)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Location">
      <MapPin />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] whitespace-nowrap">Equip Exposition - Booth #2840</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Content">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ef7d00] text-[24px] whitespace-nowrap">JUNE 15-17, 2026</p>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#131316] text-[20px] whitespace-nowrap">Philadelphia, PA</p>
      <Location />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#666] text-[14px] w-[min-content]">See the full ELIET lineup including the new E-Power series. Live demonstrations daily at 10am, 1pm, and 3pm.</p>
    </div>
  );
}

function Action() {
  return (
    <div className="bg-[#ef7d00] content-stretch flex items-start px-[24px] py-[12px] relative rounded-[4px] shrink-0" data-name="Action">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">LEARN MORE</p>
    </div>
  );
}

function EventCard() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Event Card">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[32px] relative size-full">
          <Content />
          <Action />
        </div>
      </div>
    </div>
  );
}

function MapPin1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="map-pin">
          <path d={svgPaths.p8b99100} id="Vector" stroke="var(--stroke-0, #EF7D00)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Location1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Location">
      <MapPin1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] whitespace-nowrap">GIE+EXPO - Outdoor Demo Area</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Content">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ef7d00] text-[24px] whitespace-nowrap">JULY 8-10, 2026</p>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#131316] text-[20px] whitespace-nowrap">Columbus, OH</p>
      <Location1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#666] text-[14px] w-[min-content]">Hands-on demonstrations of shredders, dethatchers. Bring your toughest material to test.</p>
    </div>
  );
}

function Action1() {
  return (
    <div className="bg-[#ef7d00] content-stretch flex items-start px-[24px] py-[12px] relative rounded-[4px] shrink-0" data-name="Action">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">LEARN MORE</p>
    </div>
  );
}

function EventCard1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Event Card">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[32px] relative size-full">
          <Content1 />
          <Action1 />
        </div>
      </div>
    </div>
  );
}

function MapPin2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="map-pin">
          <path d={svgPaths.p8b99100} id="Vector" stroke="var(--stroke-0, #EF7D00)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Location2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Location">
      <MapPin2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] whitespace-nowrap">Southeastern Turf Conference</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Content">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ef7d00] text-[24px] whitespace-nowrap">AUGUST 5, 2026</p>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#131316] text-[20px] whitespace-nowrap">Atlanta, GA</p>
      <Location2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#666] text-[14px] w-[min-content]">Focus on golf course and sports turf equipment. Expert staff available for one-on-one consultations.</p>
    </div>
  );
}

function Action2() {
  return (
    <div className="bg-[#ef7d00] content-stretch flex items-start px-[24px] py-[12px] relative rounded-[4px] shrink-0" data-name="Action">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">LEARN MORE</p>
    </div>
  );
}

function EventCard2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Event Card">
      <div aria-hidden className="absolute border border-[#d1d1d1] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[32px] relative size-full">
          <Content2 />
          <Action2 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-w-px relative">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#131316] text-[36px] text-center tracking-[-0.96px] uppercase whitespace-nowrap">
        <p className="leading-[62.4px]">Upcoming Demo Events</p>
      </div>
      <EventCard />
      <EventCard1 />
      <EventCard2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[32px] items-start min-w-px relative">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function CategoryGrid() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="category-grid">
      <Frame2 />
    </div>
  );
}

function MapPlaceholder() {
  return (
    <div className="h-[432px] relative shrink-0 w-full" data-name="MAP PLACEHOLDER">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMapPlaceholder} />
    </div>
  );
}

function MapSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="MAP SECTION">
      <MapPlaceholder />
    </div>
  );
}

function Component3ShopByCategory() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[90px] items-start pt-[90px] px-[120px] relative shrink-0 w-[1440px]" data-name="§3 - Shop by Category">
      <CategoryGrid />
      <MapSection />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#131316] text-[14px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">Find a dealer</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[14px] items-start justify-center relative shrink-0" data-name="Container">
      <Container11 />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white content-stretch flex items-start px-[32px] py-[16px] relative rounded-[24px] shrink-0" data-name="Link">
      <Container10 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col h-[87.204px] items-start justify-center relative shrink-0 w-[480px]" data-name="Container">
      <Link />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[13px] items-start min-h-px relative">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Interstate:Bold',sans-serif] h-[212.322px] justify-center leading-[0] not-italic relative shrink-0 text-[66px] text-white uppercase w-[480px]">
        <p className="leading-none">Dealer Locator</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Interstate:Regular',sans-serif] h-[73.934px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-[480px]">
        <p className="leading-[26.4px] mb-0">Find parts, service, and new equipment at</p>
        <p className="leading-[26.4px]">a dealer near you.</p>
      </div>
      <Container9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[64px] pr-[40px] py-[40px] relative size-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="content-stretch flex h-[480px] items-center relative shrink-0 w-full" data-name="Background">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground} />
        <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
      </div>
      <Container8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Background />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Container7 />
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

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.1px] pt-[2.3px] relative shrink-0 w-full" data-name="Container">
      <Logo2 />
    </div>
  );
}

function Frame7() {
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

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#131316] text-[14px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">our products</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[14px] items-start justify-center relative shrink-0" data-name="Container">
      <Container15 />
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-white content-stretch flex items-start px-[32px] py-[16px] relative rounded-[24px] shrink-0" data-name="Link">
      <Container14 />
    </div>
  );
}

function Container16() {
  return <div className="h-[46px] relative shrink-0 w-[319.95px]" data-name="Container" />;
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start pl-[60px] relative self-stretch shrink-0 w-[359.95px]" data-name="Container">
      <Container13 />
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Interstate:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[35px] text-white uppercase w-[min-content]">
        <p className="leading-none">Why professionals choose ELIET</p>
      </div>
      <Frame7 />
      <Link1 />
      <Container16 />
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

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <SportsWearStoreCollectionImg />
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

function SportsWearStoreCollectionImg1() {
  return (
    <div className="h-[400px] max-w-[399.95001220703125px] relative shrink-0 w-[300px]" data-name="sports wear store collection img 2">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSportsWearStoreCollectionImg2} />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <SportsWearStoreCollectionImg1 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Container">
      <Container20 />
    </div>
  );
}

function Background1() {
  return (
    <div className="content-stretch flex h-[508.395px] items-start justify-center py-[40px] relative shrink-0 w-full" data-name="Background">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBackground1} />
        <div className="absolute bg-[rgba(0,0,0,0.58)] inset-0" />
      </div>
      <Container12 />
      <Container17 />
      <Container19 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1200px]" data-name="Margin">
      <Background1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start justify-center px-[120px] py-[64px] relative size-full">
          <Frame5 />
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

export default function DemoTour() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Demo Tour">
      <div className="bg-[#131316] content-stretch flex h-[70px] items-center justify-between px-[120px] relative shrink-0 w-[1440px]" data-name="§1 - Header">
        <Frame />
        <HeaderRight />
      </div>
      <Component2Hero />
      <Component5TheLatestDrop />
      <Component3ShopByCategory />
      <Container6 />
      <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[24px] items-center px-[120px] py-[72px] relative shrink-0 w-[1440px]" data-name="§10 - Newsletter">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Interstate:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#131316] text-[36px] text-center tracking-[1.5px] w-[min-content]">BE THE FIRST TO KNOW</p>
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Interstate:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#4a4a4a] text-[16px] text-center w-[min-content]">Get updates on new machines, dealer events, and support news.</p>
        <NewsletterRow />
      </div>
      <div className="bg-[#131316] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="§11 - Footer">
        <FooterTop />
        <FooterBottomBar />
      </div>
    </div>
  );
}