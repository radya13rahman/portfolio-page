import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

/* Shared warm-gold gradient + slow shimmer for the portfolio motifs. */
export function MotifDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <linearGradient id="jvGoldP" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffe9b0" />
          <stop offset="32%" stopColor="#e8b75a" />
          <stop offset="58%" stopColor="#b07d2a" />
          <stop offset="82%" stopColor="#d99f3f" />
          <stop offset="100%" stopColor="#ffdf94" />
          <animateTransform
            attributeName="gradientTransform"
            type="rotate"
            from="0 0.5 0.5"
            to="360 0.5 0.5"
            dur="11s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* One half of the cloud-scroll vine; mirrored for symmetry. */
function ScrollHalf() {
  return (
    <g
      fill="none"
      stroke="url(#jvGoldP)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M600 45 C660 45 678 24 716 28 C756 32 762 56 802 54 C838 52 848 33 882 39 C920 45 926 65 964 60 C998 56 1002 41 1028 46" />
      {/* terminal spiral */}
      <path d="M1028 46 C1050 50 1055 64 1041 70 C1029 75 1017 66 1023 56" />
      {/* under-curls (cloud hooks) */}
      <path d="M716 28 C708 16 720 8 732 14 C740 18 738 28 730 30" opacity="0.6" />
      <path d="M882 39 C876 27 888 21 898 27 C905 31 902 40 894 41" opacity="0.55" />
      {/* buds */}
      <circle cx="760" cy="44" r="2.4" fill="url(#jvGoldP)" stroke="none" opacity="0.8" />
      <circle cx="924" cy="52" r="2" fill="url(#jvGoldP)" stroke="none" opacity="0.7" />
    </g>
  );
}

/* Symmetric Javanese cloud-scroll divider that draws + parallaxes in. */
export function CloudScrollDivider({ flip = false }: { flip?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      style={{ x }}
      className={`pointer-events-none mx-auto w-full max-w-[760px] ${flip ? "rotate-180" : ""}`}
    >
      <motion.svg
        viewBox="0 0 1200 90"
        className="w-full h-auto"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ filter: "drop-shadow(0 0 6px rgba(224,176,80,0.35))" }}
      >
        {/* centre lotus medallion */}
        <g
          fill="none"
          stroke="url(#jvGoldP)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M600 30 C610 38 610 52 600 60 C590 52 590 38 600 30 Z"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
          />
          <path d="M584 45 C592 40 608 40 616 45 C608 50 592 50 584 45 Z" opacity="0.8" />
          <circle cx="600" cy="45" r="3" fill="url(#jvGoldP)" stroke="none" />
        </g>
        <motion.g
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.15 }}
        >
          <ScrollHalf />
          <g transform="translate(1200,0) scale(-1,1)">
            <ScrollHalf />
          </g>
        </motion.g>
      </motion.svg>
    </motion.div>
  );
}

/* Large faint heritage watermark (lotus + cloud mandala) with parallax. */
export function HeritageBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "10%"]);

  return (
    <div ref={ref} aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.svg
        style={{ y }}
        viewBox="0 0 600 600"
        className="absolute left-1/2 top-1/2 w-[720px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
        fill="none"
        stroke="#e8c27a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* concentric lotus */}
        <circle cx="300" cy="300" r="60" />
        <circle cx="300" cy="300" r="92" />
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i / 16) * Math.PI * 2;
          const x1 = 300 + Math.cos(a) * 92;
          const y1 = 300 + Math.sin(a) * 92;
          const x2 = 300 + Math.cos(a) * 150;
          const y2 = 300 + Math.sin(a) * 150;
          const xm = 300 + Math.cos(a + 0.18) * 124;
          const ym = 300 + Math.sin(a + 0.18) * 124;
          const xn = 300 + Math.cos(a - 0.18) * 124;
          const yn = 300 + Math.sin(a - 0.18) * 124;
          return (
            <path
              key={i}
              d={`M${x1} ${y1} C${xm} ${ym} ${x2} ${y2} ${x2} ${y2} C${xn} ${yn} ${x1} ${y1} ${x1} ${y1} Z`}
            />
          );
        })}
        <circle cx="300" cy="300" r="180" strokeDasharray="2 10" />
        {/* outer cloud-scroll ring */}
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i / 8) * 360;
          return (
            <g key={`c${i}`} transform={`rotate(${a} 300 300)`} opacity="0.8">
              <path d="M300 110 C320 110 330 95 348 98 C330 101 326 116 308 114" />
            </g>
          );
        })}
      </motion.svg>
    </div>
  );
}

/* One-time gold light-sweep when the section enters the viewport. */
export function EntryCurtain() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  return (
    <div ref={ref} aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
      <motion.div
        initial={{ x: "-130%" }}
        animate={inView ? { x: "130%" } : {}}
        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        className="absolute inset-y-0 w-2/3 -skew-x-12"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(232,183,90,0.08) 45%, rgba(255,223,148,0.14) 50%, rgba(232,183,90,0.08) 55%, transparent 100%)",
        }}
      />
    </div>
  );
}

/* Gold sulur corner accents for a portfolio card (shown on hover). */
export function CardCorners() {
  const Corner = ({ cls }: { cls: string }) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className={`absolute ${cls}`}
      fill="none"
      stroke="url(#jvGoldP)"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 16 V10 a4 4 0 0 1 4-4 h6" />
      <path d="M6 20 C6 28 11 31 16 29 C11 33 6 30 5 24" opacity="0.7" />
      <circle cx="9" cy="9" r="1.5" fill="url(#jvGoldP)" stroke="none" />
    </svg>
  );
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-[6px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    >
      <Corner cls="top-0 left-0" />
      <Corner cls="top-0 right-0 -scale-x-100" />
      <Corner cls="bottom-0 left-0 -scale-y-100" />
      <Corner cls="bottom-0 right-0 -scale-100" />
    </div>
  );
}
