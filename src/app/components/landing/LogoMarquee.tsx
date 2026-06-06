import svgPaths from "../../../imports/ScrollLogo/svg-1gno27yvdv";
import imgImage2 from "../../../imports/ScrollLogo/f165701f8129ac918aca0b985ea279e0bf4896b8.webp";
import imgImage4 from "../../../imports/ScrollLogo/dabb063c412c35790955f0007804f1f1429c6647.webp";
import imgImage5 from "../../../imports/ScrollLogo/ae9adb32b11406989296ee574d6bc03614b9b84e.webp";
import imgImage7 from "../../../imports/ScrollLogo/82ff1d0155db9559b9bbea08f1b8d893be397479.webp";

function Walturn() {
  return (
    <p className="font-['Poppins:SemiBold',sans-serif] text-white text-[40px] tracking-[-1.6px] whitespace-nowrap leading-[1.1]">
      Walturn
    </p>
  );
}

function Image2() {
  return (
    <div className="w-[120px] aspect-[937/512] relative shrink-0">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Image4() {
  return (
    <div className="w-[160px] aspect-[168/30] relative shrink-0">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage4} />
    </div>
  );
}

function Techflouu() {
  return (
    <div className="flex gap-[6px] items-center justify-center shrink-0">
      <div className="h-[36px] w-[42px] relative">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.2625 44.5486">
          <g>
            <path d={svgPaths.p3a297100} stroke="white" strokeWidth="0.971305" />
            <circle cx="11.4919" cy="10.3059" fill="white" r="1.94261" />
            <circle cx="23.3415" cy="12.2485" fill="white" r="1.94261" />
            <circle cx="32.1807" cy="22.3501" fill="white" r="1.94261" />
            <circle cx="38.1054" cy="10.0144" fill="white" r="1.94261" />
            <circle cx="43.3507" cy="22.6416" fill="white" r="1.94261" />
            <circle cx="27.2271" cy="29.9262" fill="white" r="1.94261" />
            <circle cx="14.3085" cy="26.0412" fill="white" r="1.94261" />
          </g>
        </svg>
      </div>
      <p className="font-['Quantico:Regular',sans-serif] text-white text-[32px] tracking-[-1.6px] whitespace-nowrap">
        /techflouu
      </p>
    </div>
  );
}

function Image5() {
  return (
    <div className="w-[160px] aspect-[364/108] relative shrink-0">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage5} />
    </div>
  );
}

function Image6() {
  return (
    <div className="h-[50px] w-[50px] relative shrink-0">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.8459 63.8563">
        <g clipPath="url(#scroll-logo-clip)">
          <path d={svgPaths.p20ba6380} fill="white" />
          <path d={svgPaths.p1d78b180} fill="#1E1E1E" />
        </g>
        <defs>
          <clipPath id="scroll-logo-clip">
            <rect fill="white" height="63.8563" width="63.8459" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Image7() {
  return (
    <div className="w-[180px] aspect-[226/84] relative shrink-0 overflow-hidden">
      <img alt="" className="absolute h-[157.14%] left-[-53.98%] max-w-none top-[-27.38%] w-[169.03%]" src={imgImage7} />
    </div>
  );
}

function Lightbridge() {
  return (
    <p className="font-['DM_Sans:Bold',sans-serif] font-bold text-white text-[40px] tracking-[-1.8px] whitespace-nowrap">
      Lightbridge
    </p>
  );
}

function LogoSet() {
  return (
    <div className="flex gap-[40px] items-center shrink-0 px-[20px]">
      <Walturn />
      <Image2 />
      <Image4 />
      <Techflouu />
      <Image5 />
      <Image6 />
      <Image7 />
      <Lightbridge />
    </div>
  );
}

export function LogoMarquee() {
  const sets = Array.from({ length: 3 });
  return (
    <div className="w-full overflow-hidden opacity-30">
      <div className="flex w-max animate-[marquee_45s_linear_infinite] origin-left scale-[0.7]">
        {sets.map((_, i) => (
          <LogoSet key={i} />
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
