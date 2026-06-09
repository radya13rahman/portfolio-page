import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = to / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Projects Shipped" },
  { value: 3, suffix: "×", label: "App Store Features" },
  { value: 1, suffix: "", label: "WWDC23 Winner" },
];

/** Gold gradient shared by the ornamental frame strokes */
function GoldDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <linearGradient id="jvGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6e3ad" />
          <stop offset="38%" stopColor="#cBA75a" />
          <stop offset="62%" stopColor="#9c7b2e" />
          <stop offset="100%" stopColor="#e9cd86" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** A single Javanese-style sulur (scrollwork) corner ornament. */
function Corner({ className }: { className: string }) {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      className={className}
      fill="none"
      stroke="url(#jvGold)"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* corner bracket with a soft ogee */}
      <path d="M8 24 V13 a5 5 0 0 1 5-5 h11" />
      {/* lower graceful vine + curl */}
      <path d="M8 30 C8 44 18 50 27 45 C19 52 9 47 7 35" />
      {/* right graceful vine + curl */}
      <path d="M30 8 C44 8 50 18 45 27 C52 19 47 9 35 7" />
      {/* inner paired leaves */}
      <path d="M17 17 C27 20 31 30 27 40" opacity="0.6" />
      <path d="M17 17 C20 27 30 31 40 27" opacity="0.6" />
      {/* tendril tips */}
      <path d="M27 40 c5 -2 7 -7 6 -12" opacity="0.45" />
      <path d="M40 27 c-2 5 -7 7 -12 6" opacity="0.45" />
      {/* bud */}
      <circle cx="13" cy="13" r="2" fill="url(#jvGold)" stroke="none" />
    </svg>
  );
}

/** Small lozenge accent for the centre of an edge. */
function EdgeAccent({ className }: { className: string }) {
  return (
    <svg
      width="56"
      height="18"
      viewBox="0 0 56 18"
      className={className}
      fill="none"
      stroke="url(#jvGold)"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M28 3 L34 9 L28 15 L22 9 Z" />
      <path d="M22 9 H6" opacity="0.6" />
      <path d="M34 9 H50" opacity="0.6" />
      <circle cx="28" cy="9" r="1.4" fill="url(#jvGold)" stroke="none" />
    </svg>
  );
}

/** Ornamental gold frame that wraps the stats grid. */
function OrnateFrame() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* double border line */}
      <div className="absolute inset-[14px] border border-[#caa75a]/35" />
      <div className="absolute inset-[18px] border border-[#caa75a]/15" />
      {/* corner flourishes */}
      <Corner className="absolute top-[4px] left-[4px]" />
      <Corner className="absolute top-[4px] right-[4px] -scale-x-100" />
      <Corner className="absolute bottom-[4px] left-[4px] -scale-y-100" />
      <Corner className="absolute bottom-[4px] right-[4px] -scale-100" />
      {/* centre edge accents */}
      <EdgeAccent className="absolute top-[7px] left-1/2 -translate-x-1/2" />
      <EdgeAccent className="absolute bottom-[7px] left-1/2 -translate-x-1/2" />
    </div>
  );
}

export function StatsRow() {
  return (
    <section className="bg-[#171717] border-y border-white/5 py-[40px]">
      <GoldDefs />
      <div className="max-w-[1442px] mx-auto px-[24px] min-[768px]:px-[48px] min-[1024px]:px-[64px] min-[1200px]:px-[120px]">
        <div className="relative px-[28px] py-[24px]">
          <OrnateFrame />
          <div className="relative grid grid-cols-2 min-[800px]:grid-cols-4 gap-[1px] bg-white/5 overflow-hidden">
            {stats.map((s, i) => (
              <div key={i} className="bg-[#171717] px-[32px] py-[28px] flex flex-col gap-[6px]">
                <span className="text-white text-[36px] md:text-[48px] font-light leading-none tracking-[-1px]">
                  <Counter to={s.value} suffix={s.suffix} />
                </span>
                <span className="text-white/40 text-[13px] tracking-[-0.1px]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
