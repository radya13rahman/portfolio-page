import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

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

/** Warm gold gradient (with a slow shimmer) shared by the frame strokes */
function GoldDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <linearGradient id="jvGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffe9b0" />
          <stop offset="32%" stopColor="#e8b75a" />
          <stop offset="58%" stopColor="#b07d2a" />
          <stop offset="82%" stopColor="#d99f3f" />
          <stop offset="100%" stopColor="#ffdf94" />
          {/* slow metallic shimmer */}
          <animateTransform
            attributeName="gradientTransform"
            type="rotate"
            from="0 0.5 0.5"
            to="360 0.5 0.5"
            dur="9s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** A single Javanese-style sulur (scrollwork) corner ornament, filigreed. */
function Corner({ className }: { className: string }) {
  return (
    <svg
      width="84"
      height="84"
      viewBox="0 0 84 84"
      className={className}
      fill="none"
      stroke="url(#jvGold)"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* corner bracket with a soft ogee */}
      <path d="M9 28 V15 a6 6 0 0 1 6-6 h13" />
      {/* outer graceful vines + curls */}
      <path d="M9 34 C9 50 20 57 31 51 C21 59 10 53 8 39" />
      <path d="M34 9 C50 9 57 20 51 31 C59 21 53 10 39 8" />
      {/* inner paired leaves */}
      <path d="M19 19 C30 22 34 33 30 44" opacity="0.6" />
      <path d="M19 19 C22 30 33 34 44 30" opacity="0.6" />
      {/* secondary inner scroll (filigree) */}
      <path d="M20 30 C16 30 15 35 18 37 C20 38 23 36 22 33" opacity="0.5" />
      <path d="M30 20 C30 16 35 15 37 18 C38 20 36 23 33 22" opacity="0.5" />
      {/* tendril tips */}
      <path d="M31 51 c7 -2 10 -9 9 -16" opacity="0.4" />
      <path d="M51 31 c-2 7 -9 10 -16 9" opacity="0.4" />
      {/* buds & dotted accents */}
      <circle cx="15" cy="15" r="2.2" fill="url(#jvGold)" stroke="none" />
      <circle cx="40" cy="9" r="1.1" fill="url(#jvGold)" stroke="none" opacity="0.7" />
      <circle cx="9" cy="40" r="1.1" fill="url(#jvGold)" stroke="none" opacity="0.7" />
      <circle cx="30" cy="44" r="1.3" fill="url(#jvGold)" stroke="none" opacity="0.55" />
      <circle cx="44" cy="30" r="1.3" fill="url(#jvGold)" stroke="none" opacity="0.55" />
    </svg>
  );
}

/** Small lozenge accent with curls for the centre of an edge. */
function EdgeAccent({ className }: { className: string }) {
  return (
    <svg
      width="84"
      height="20"
      viewBox="0 0 84 20"
      className={className}
      fill="none"
      stroke="url(#jvGold)"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M42 4 L48 10 L42 16 L36 10 Z" />
      <path d="M36 10 H20" opacity="0.6" />
      <path d="M48 10 H64" opacity="0.6" />
      {/* small end curls */}
      <path d="M20 10 C14 10 12 6 15 4" opacity="0.45" />
      <path d="M64 10 C70 10 72 6 69 4" opacity="0.45" />
      <circle cx="42" cy="10" r="1.4" fill="url(#jvGold)" stroke="none" />
    </svg>
  );
}

/** Ornamental gold frame that wraps the stats grid, revealing on scroll-in. */
function OrnateFrame() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.975 }}
      animate={
        inView
          ? {
              opacity: 1,
              scale: 1,
              filter: [
                "drop-shadow(0 0 0px rgba(224,176,80,0))",
                "drop-shadow(0 0 12px rgba(224,176,80,0.55))",
                "drop-shadow(0 0 5px rgba(224,176,80,0.3))",
              ],
            }
          : {}
      }
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute inset-0"
    >
      {/* double border line */}
      <div className="absolute inset-[14px] border border-[#d6a24a]/40" />
      <div className="absolute inset-[18px] border border-[#d6a24a]/18" />
      {/* corner flourishes */}
      <Corner className="absolute top-[2px] left-[2px]" />
      <Corner className="absolute top-[2px] right-[2px] -scale-x-100" />
      <Corner className="absolute bottom-[2px] left-[2px] -scale-y-100" />
      <Corner className="absolute bottom-[2px] right-[2px] -scale-100" />
      {/* centre edge accents */}
      <EdgeAccent className="absolute top-[7px] left-1/2 -translate-x-1/2" />
      <EdgeAccent className="absolute bottom-[7px] left-1/2 -translate-x-1/2" />
    </motion.div>
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
