import logo from "../../../imports/ScrollLogo/logo-replace.webp";

export function LogoMarquee() {
  const sets = Array.from({ length: 4 });
  return (
    <div className="w-full overflow-hidden opacity-30">
      <div className="flex w-max animate-[marquee_45s_linear_infinite]">
        {sets.map((_, i) => (
          <img
            key={i}
            alt="company logos"
            src={logo}
            className="h-[48px] w-auto object-contain pointer-events-none shrink-0 px-[20px]"
          />
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }
      `}</style>
    </div>
  );
}
