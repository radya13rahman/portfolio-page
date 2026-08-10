import { useRef } from "react";
import { motion } from "motion/react";
import { HERO } from "./motionData";
import { Watermark } from "./Watermark";
import { VideoPlaceholder } from "./VideoPlaceholder";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function MotionHero() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} id="hero" className="relative overflow-hidden pt-[56px] pb-[80px] min-[1024px]:pt-[104px] min-[1024px]:pb-[120px]">
      <Watermark text={HERO.watermark} targetRef={ref} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative flex flex-col gap-[48px] px-[24px] min-[768px]:px-[48px] min-[1024px]:px-[56px] min-[1440px]:px-[80px]"
      >
        <motion.span
          variants={item}
          className="w-fit rounded-full bg-[#ff7a3d] px-[16px] py-[7px] text-[13px] font-medium text-[#1b0d05] tracking-[-0.1px]"
        >
          {HERO.badge}
        </motion.span>

        <motion.h1
          variants={item}
          className="max-w-[24ch] text-white text-[clamp(38px,5.2vw,74px)] font-medium leading-[1.04] tracking-[-0.02em]"
        >
          {HERO.headline.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.div
          variants={item}
          className="flex flex-col gap-[28px] min-[900px]:flex-row min-[900px]:items-end min-[900px]:justify-between min-[900px]:gap-[48px]"
        >
          <p className="max-w-[58ch] text-[17px] leading-[1.6] tracking-[-0.16px] text-white/45">
            <span className="text-white/85">{HERO.lead}</span> {HERO.body}
          </p>

          <a
            href={HERO.cta.href}
            className="w-fit shrink-0 rounded-full border border-white/12 bg-white/[0.06] px-[22px] py-[12px] text-[14px] text-white transition-colors hover:bg-white/[0.12]"
          >
            {HERO.cta.label}
          </a>
        </motion.div>

        <motion.div variants={item} className="pt-[8px]">
          <VideoPlaceholder
            ambient
            src={HERO.video.src}
            poster={HERO.video.poster}
            label={HERO.video.title}
            duration={HERO.video.duration}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
