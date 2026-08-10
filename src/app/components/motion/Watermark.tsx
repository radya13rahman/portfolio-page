import { motion, useScroll, useTransform } from "motion/react";
import type { RefObject } from "react";

const ROWS = 6;

/**
 * Oversized repeating wordmark behind the hero — the same trick Flowjam uses to
 * fill the empty space above the fold. Each row is offset and drifts slightly
 * against the scroll so the block never reads as a flat texture.
 */
export function Watermark({
  text,
  targetRef,
}: {
  text: string;
  targetRef: RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const driftLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const driftRight = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  const phrase = `${text} `.repeat(8);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      <div className="flex h-full flex-col justify-center gap-[0.06em]">
        {Array.from({ length: ROWS }).map((_, i) => (
          <motion.div
            key={i}
            style={{
              x: i % 2 === 0 ? driftLeft : driftRight,
              marginLeft: `${(i % 3) * -8}%`,
              fontSize: "clamp(64px, 11vw, 168px)",
            }}
            className="whitespace-nowrap font-medium leading-[0.95] tracking-[-0.02em] text-white/[0.022]"
          >
            {phrase}
          </motion.div>
        ))}
      </div>
      {/* fade the block out toward the edges so it never fights the copy */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#151515] via-transparent to-[#151515]" />
    </div>
  );
}
