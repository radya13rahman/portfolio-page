import svgPaths from "./svg-tt1e977ne4";
import imgHeroImage from "./dea0e01553c2241aed7423833326af4aae99cafb.webp";
import imgSlideshowImage from "./d60b360a8251a7bbb27835bb086f1e7f52381580.webp";

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['PP_Formula:Narrow_Semibold',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[48px] text-white tracking-[0.48px] w-[min-content] whitespace-pre-wrap">
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
      <p className="font-['PP_Formula:Narrow_Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-white tracking-[0.32px] whitespace-nowrap">{`A Product Designer & Researcher`}</p>
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

function Frame5() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-start left-[120px] top-1/2 w-[590px]">
      <Frame4 />
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
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1442px]" data-name="Loading Progress Scroll">
      <div className="bg-[#1f1f1f] h-[12px] relative shrink-0 w-full" data-name="Loading Bar - Background" />
      <div className="absolute bg-white h-[12px] left-0 top-0 w-[120px]" data-name="Loading Bar - Progress" />
    </div>
  );
}

function HeroSectionPortfolioDesktop() {
  return (
    <div className="bg-[#151515] h-[900px] overflow-clip relative shrink-0 w-full" data-name="Hero Section - Portfolio - Desktop">
      <Frame5 />
      <div className="-translate-y-1/2 absolute h-[808px] left-[736px] top-[calc(50%+113px)] w-[706px]" data-name="Hero Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[116.45%] left-0 max-w-none top-[-5.92%] w-full" src={imgHeroImage} />
        </div>
      </div>
      <LoadingProgressScroll />
    </div>
  );
}

function Contents() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] h-[105px] items-start relative shrink-0 w-[603px]" data-name="Contents">
      <p className="font-['PP_Formula:Narrow_Semibold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[32px] text-white tracking-[0.32px] w-[min-content]">Got experience with all kinds of companies</p>
      <p className="flex-[1_0_0] font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] min-h-px relative text-[#dfdfdf] text-[16px] tracking-[-0.16px] w-[590px]">Startups, big companies, overseas agencies, working on existing stuff, or building from scratch</p>
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
    <div className="content-stretch flex gap-[40px] items-center opacity-20 relative shrink-0" data-name="Scroll Logo">
      <Logo />
      <Logo1 />
      <Logo2 />
    </div>
  );
}

function CompanyExperiencePortfolioDesktop() {
  return (
    <div className="bg-[#171717] relative shrink-0 w-full" data-name="Company Experience - Portfolio - Desktop">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[120px] py-[80px] relative size-full">
          <Contents />
          <ScrollLogo />
        </div>
      </div>
    </div>
  );
}

function Contents1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[603px]" data-name="Contents">
      <p className="font-['PP_Formula:Narrow_Semibold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[32px] text-white tracking-[0.32px] w-[min-content]">Project Name</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#dfdfdf] text-[16px] tracking-[-0.16px] w-[590px]">{`The 'Innovate Together' project aims to create a mobile app that boosts community engagement by showcasing local events. Key features include an interactive calendar, tailored notifications, and a social feed to connect users with nearby happenings, fostering a vibrant local culture.`}</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(223,223,223,0.5)] tracking-[-0.16px] w-[590px]">Website, Landing Page</p>
    </div>
  );
}

function PortfolioDetailsPortfolioDesktop() {
  return (
    <div className="bg-[#151515] relative shrink-0 w-full" data-name="Portfolio Details - Portfolio - Desktop">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[120px] py-[80px] relative size-full">
          <Contents1 />
        </div>
      </div>
    </div>
  );
}

function GroupPortfolio1PortfolioDesktop() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Group Portfolio 1 - Portfolio - Desktop">
      <PortfolioDetailsPortfolioDesktop />
      <div className="h-[900px] relative shrink-0 w-[1440px]" data-name="Slideshow - Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSlideshowImage} />
      </div>
    </div>
  );
}

function Contents2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[603px]" data-name="Contents">
      <p className="font-['PP_Formula:Narrow_Semibold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[32px] text-white tracking-[0.32px] w-[min-content]">Project Name</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#dfdfdf] text-[16px] tracking-[-0.16px] w-[590px]">{`The 'Innovate Together' project aims to create a mobile app that boosts community engagement by showcasing local events. Key features include an interactive calendar, tailored notifications, and a social feed to connect users with nearby happenings, fostering a vibrant local culture.`}</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(223,223,223,0.5)] tracking-[-0.16px] w-[590px]">Website, Landing Page</p>
    </div>
  );
}

function PortfolioDetailsPortfolioDesktop1() {
  return (
    <div className="bg-[#151515] relative shrink-0 w-full" data-name="Portfolio Details - Portfolio - Desktop">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[120px] py-[80px] relative size-full">
          <Contents2 />
        </div>
      </div>
    </div>
  );
}

function GroupPortfolio2PortfolioDesktop() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Group Portfolio 2 - Portfolio - Desktop">
      <PortfolioDetailsPortfolioDesktop1 />
      <div className="h-[900px] relative shrink-0 w-[1440px]" data-name="Slideshow - Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSlideshowImage} />
      </div>
    </div>
  );
}

function Contents3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[603px]" data-name="Contents">
      <p className="font-['PP_Formula:Narrow_Semibold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[32px] text-white tracking-[0.32px] w-[min-content]">Project Name</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#dfdfdf] text-[16px] tracking-[-0.16px] w-[590px]">{`The 'Innovate Together' project aims to create a mobile app that boosts community engagement by showcasing local events. Key features include an interactive calendar, tailored notifications, and a social feed to connect users with nearby happenings, fostering a vibrant local culture.`}</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(223,223,223,0.5)] tracking-[-0.16px] w-[590px]">Website, Landing Page</p>
    </div>
  );
}

function PortfolioDetailsPortfolioDesktop2() {
  return (
    <div className="bg-[#151515] relative shrink-0 w-full" data-name="Portfolio Details - Portfolio - Desktop">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[120px] py-[80px] relative size-full">
          <Contents3 />
        </div>
      </div>
    </div>
  );
}

function GroupPortfolio3PortfolioDesktop() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Group Portfolio 3 - Portfolio - Desktop">
      <PortfolioDetailsPortfolioDesktop2 />
      <div className="h-[900px] relative shrink-0 w-[1440px]" data-name="Slideshow - Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSlideshowImage} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social Icons">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p2ccee40} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
        </svg>
      </div>
      <a className="[word-break:break-word] block font-['Work_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#dfdfdf] text-[16px] tracking-[-0.16px] whitespace-nowrap" href="https://www.linkedin.com/in/radya13rahman/" target="_blank">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[1.5] underline">Radya Amirur Rahman</p>
      </a>
    </div>
  );
}

function LayersLogo() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="layers-logo 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_572)" id="layers-logo 1">
          <path d={svgPaths.p7d25a00} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" style={{ fill: "white", fillOpacity: "0.2" }} />
          <path d={svgPaths.p3a84ae00} fill="var(--fill-0, white)" fillOpacity="0.5" id="Vector_2" style={{ fill: "white", fillOpacity: "0.5" }} />
          <path d={svgPaths.p3f45c600} fill="var(--fill-0, white)" fillOpacity="0.8" id="Vector_3" style={{ fill: "white", fillOpacity: "0.8" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_572">
            <rect fill="white" height="24" style={{ fill: "white", fillOpacity: "1" }} width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <LayersLogo />
      <a className="[word-break:break-word] block font-['Work_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#dfdfdf] text-[16px] tracking-[-0.16px] whitespace-nowrap" href="https://layers.to/radyaar" target="_blank">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[1.5] underline">{`https://layers.to/radyaar`}</p>
      </a>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[80px] items-start opacity-70 relative shrink-0">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function CompanyExperiencePortfolioDesktop1() {
  return (
    <div className="bg-[#171717] relative shrink-0 w-full" data-name="Company Experience - Portfolio - Desktop">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-center px-[120px] py-[80px] relative size-full">
          <p className="[word-break:break-word] font-['PP_Formula:Narrow_Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-center text-white tracking-[0.32px] whitespace-nowrap">Ready to build greate product together</p>
          <div className="bg-white h-[546px] relative rounded-[8px] shrink-0 w-[1038px]" data-name="Cal.com - Assets" />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

export default function LandingPagePortfolioDesktop() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Landing Page - Portfolio - Desktop">
      <HeroSectionPortfolioDesktop />
      <CompanyExperiencePortfolioDesktop />
      <GroupPortfolio1PortfolioDesktop />
      <GroupPortfolio2PortfolioDesktop />
      <GroupPortfolio3PortfolioDesktop />
      <CompanyExperiencePortfolioDesktop1 />
    </div>
  );
}