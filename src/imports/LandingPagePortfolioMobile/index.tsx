import svgPaths from "./svg-fjqz3k8r6a";
import imgProfilePicture11 from "./dea0e01553c2241aed7423833326af4aae99cafb.webp";
import imgSlideshowImage1 from "./d60b360a8251a7bbb27835bb086f1e7f52381580.webp";

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['PP_Formula:Narrow_Semibold',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[28px] text-white tracking-[0.28px] w-[min-content] whitespace-pre-wrap">
        {`Know Radya Better, `}
        <br aria-hidden />
        Who is He?
      </p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#dfdfdf] text-[16px] tracking-[0.16px] whitespace-nowrap">by Radya Rahman</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['PP_Formula:Narrow_Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white tracking-[0.24px] whitespace-nowrap">{`A Product Designer & Researcher`}</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#dfdfdf] text-[16px] tracking-[-0.16px] w-[min-content]">Radya Amirur is a product designer and researcher with 4 years of experience in iOS and web interfaces. Proficient in tools like Figma, Adobe Suites, Sketch, and Framer, he combines design with research and usability testing. Radya has shipped apps featured on the App Store via Apple Developer Academy 2023 and won the WWDC23 Swift Student Challenge. He now uses AI tools like Claude Code and Figma AI to enhance creativity and efficiency.</p>
      <ul className="block font-['Work_Sans:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[0px] text-white tracking-[-0.16px] w-[480px]">
        <li className="leading-[1.5] mb-[4px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[16px]">
          <span className="[word-break:break-word] font-['Work_Sans:Bold',sans-serif] font-bold">{`Location `}</span>
          {`: `}
          <span className="text-[#dfdfdf]">Surakarta, Indonesia (+62)</span>
        </li>
        <li className="leading-[1.5] ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[16px]">
          <span className="[word-break:break-word] font-['Work_Sans:Bold',sans-serif] font-bold">{`Time Zone `}</span>
          {`: `}
          <span className="text-[#dfdfdf]">Jakarta (GMT+7)</span>
        </li>
      </ul>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Work_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-center text-white tracking-[-0.294px] whitespace-nowrap" style={{ fontFeatureSettings: '"cv09", "ss11", "calt" 0, "liga" 0' }}>
        Let’s Collaborate
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-start left-1/2 top-[calc(50%+0.5px)] w-[350px]">
      <Frame1 />
      <Frame />
      <div className="relative rounded-[10px] shrink-0" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(227, 92, 67) 0%, rgb(227, 92, 67) 100%)" }} data-name="Fancy Buttons [1.0]">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[10px] relative rounded-[inherit] size-full">
          <Text />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(167,76,37,0.48),0px_0px_0px_1px_#d5715e]" />
      </div>
    </div>
  );
}

function LoadingProgressScroll() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-name="Loading Progress Scroll">
      <div className="bg-[#1f1f1f] h-[12px] relative shrink-0 w-full" data-name="Loading Bar - Background" />
      <div className="absolute bg-white h-[12px] left-0 top-0 w-[120px]" data-name="Loading Bar - Progress" />
    </div>
  );
}

function HeroSectionPortfolioMobile() {
  return (
    <div className="bg-[#151515] h-[856px] overflow-clip relative shrink-0 w-full" data-name="Hero Section - Portfolio - Mobile">
      <Frame2 />
      <div className="absolute h-[808px] left-[734px] top-[216px] w-[706px]" data-name="Profile Picture (1) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[116.45%] left-0 max-w-none top-[-5.92%] w-full" src={imgProfilePicture11} />
        </div>
      </div>
      <LoadingProgressScroll />
    </div>
  );
}

function Contents() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Contents">
      <p className="font-['PP_Formula:Narrow_Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white tracking-[0.24px] w-full">Got experience with all kinds of companies</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#dfdfdf] text-[16px] tracking-[-0.16px] w-full">Startups, big companies, overseas agencies, working on existing stuff, or building from scratch</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-[73.8px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.8 24">
        <g id="logotype">
          <path d={svgPaths.p3b2cc8f0} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.pa52b80} fill="var(--fill-0, white)" id="Vector_2" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-[77.4px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.4001 24">
        <g id="logotype">
          <path clipRule="evenodd" d={svgPaths.p3f7e3c80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p110d5200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p187fba30} fill="var(--fill-0, white)" id="Vector_3" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p1d4d00b0} fill="var(--fill-0, white)" id="Vector_4" style={{ fill: "white", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p1a71b300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_5" style={{ fill: "white", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p3b184a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_6" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p3276e370} fill="var(--fill-0, white)" id="Vector_7" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p354a3100} fill="var(--fill-0, white)" id="Vector_8" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p2b188700} fill="var(--fill-0, white)" id="Vector_9" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p33b73800} fill="var(--fill-0, white)" id="Vector_10" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.pec4c400} fill="var(--fill-0, white)" id="Vector_11" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Logomark() {
  return (
    <div className="absolute inset-[0_81.4%_0_0]" data-name="logomark">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="logomark">
          <path d={svgPaths.p13fa1c00} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Logotype() {
  return (
    <div className="absolute inset-[12.5%_0.13%_9.2%_24.19%]" data-name="logotype">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97.6351 18.7916">
        <g id="logotype">
          <path d={svgPaths.p1022bf00} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p37ba0800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" style={{ fill: "white", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p21af3700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" style={{ fill: "white", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p24ed3c00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_4" style={{ fill: "white", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p2ad40880} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_5" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p486500} fill="var(--fill-0, white)" id="Vector_6" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p21e71e00} fill="var(--fill-0, white)" id="Vector_7" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p1b44ebc0} fill="var(--fill-0, white)" id="Vector_8" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p14ccce00} fill="var(--fill-0, white)" id="Vector_9" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p2f71a300} fill="var(--fill-0, white)" id="Vector_10" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p2a95f700} fill="var(--fill-0, white)" id="Vector_11" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Logo2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-[129px]" data-name="Logo">
      <Logomark />
      <Logotype />
    </div>
  );
}

function ScrollLogo() {
  return (
    <div className="content-stretch flex gap-[40px] items-center opacity-20 overflow-clip relative shrink-0 w-full" data-name="Scroll Logo">
      <Logo />
      <Logo1 />
      <Logo2 />
    </div>
  );
}

function CompanyExperiencePortfolioMobile() {
  return (
    <div className="bg-[#171717] relative shrink-0 w-full" data-name="Company Experience - Portfolio - Mobile">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-start pb-[40px] pt-[20px] px-[20px] relative size-full">
          <Contents />
          <ScrollLogo />
        </div>
      </div>
    </div>
  );
}

function Contents1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Contents">
      <p className="font-['PP_Formula:Narrow_Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white tracking-[0.24px] w-full">Project Name</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#dfdfdf] text-[16px] tracking-[-0.16px] w-full">{`The 'Innovate Together' project aims to create a mobile app that boosts community engagement by showcasing local events. Key features include an interactive calendar, tailored notifications, and a social feed to connect users with nearby happenings, fostering a vibrant local culture.`}</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(223,223,223,0.5)] tracking-[-0.16px] w-full">Website, Landing Page</p>
    </div>
  );
}

function PortfolioDetailsPortfolioMobile() {
  return (
    <div className="bg-[#151515] relative shrink-0 w-full" data-name="Portfolio Details - Portfolio - Mobile">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[80px] relative size-full">
          <Contents1 />
        </div>
      </div>
    </div>
  );
}

function GroupPortfolio1PortfolioMobile() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Group Portfolio 1 - Portfolio - Mobile">
      <PortfolioDetailsPortfolioMobile />
      <div className="h-[400px] relative shrink-0 w-[390px]" data-name="Slideshow - Image">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[400px] left-1/2 top-1/2 w-[390px]" data-name="Slideshow - Image 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSlideshowImage1} />
        </div>
      </div>
    </div>
  );
}

function Contents2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Contents">
      <p className="font-['PP_Formula:Narrow_Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white tracking-[0.24px] w-full">Project Name</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#dfdfdf] text-[16px] tracking-[-0.16px] w-full">{`The 'Innovate Together' project aims to create a mobile app that boosts community engagement by showcasing local events. Key features include an interactive calendar, tailored notifications, and a social feed to connect users with nearby happenings, fostering a vibrant local culture.`}</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(223,223,223,0.5)] tracking-[-0.16px] w-full">Website, Landing Page</p>
    </div>
  );
}

function PortfolioDetailsPortfolioMobile1() {
  return (
    <div className="bg-[#151515] relative shrink-0 w-full" data-name="Portfolio Details - Portfolio - Mobile">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[80px] relative size-full">
          <Contents2 />
        </div>
      </div>
    </div>
  );
}

function GroupPortfolio2PortfolioMobile() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Group Portfolio 2 - Portfolio - Mobile">
      <PortfolioDetailsPortfolioMobile1 />
      <div className="h-[400px] relative shrink-0 w-[390px]" data-name="Slideshow - Image">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[400px] left-1/2 top-1/2 w-[390px]" data-name="Slideshow - Image 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSlideshowImage1} />
        </div>
      </div>
    </div>
  );
}

function Contents3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Contents">
      <p className="font-['PP_Formula:Narrow_Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white tracking-[0.24px] w-full">Project Name</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#dfdfdf] text-[16px] tracking-[-0.16px] w-full">{`The 'Innovate Together' project aims to create a mobile app that boosts community engagement by showcasing local events. Key features include an interactive calendar, tailored notifications, and a social feed to connect users with nearby happenings, fostering a vibrant local culture.`}</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(223,223,223,0.5)] tracking-[-0.16px] w-full">Website, Landing Page</p>
    </div>
  );
}

function PortfolioDetailsPortfolioMobile2() {
  return (
    <div className="bg-[#151515] relative shrink-0 w-full" data-name="Portfolio Details - Portfolio - Mobile">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[80px] relative size-full">
          <Contents3 />
        </div>
      </div>
    </div>
  );
}

function GroupPortfolio3PortfolioMobile() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Group Portfolio 3 - Portfolio - Mobile">
      <PortfolioDetailsPortfolioMobile2 />
      <div className="h-[400px] relative shrink-0 w-[390px]" data-name="Slideshow - Image">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[400px] left-1/2 top-1/2 w-[390px]" data-name="Slideshow - Image 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSlideshowImage1} />
        </div>
      </div>
    </div>
  );
}

export default function LandingPagePortfolioMobile() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Landing Page - Portfolio - Mobile">
      <HeroSectionPortfolioMobile />
      <CompanyExperiencePortfolioMobile />
      <GroupPortfolio1PortfolioMobile />
      <GroupPortfolio2PortfolioMobile />
      <GroupPortfolio3PortfolioMobile />
    </div>
  );
}