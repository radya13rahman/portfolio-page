import { useRef, type ReactNode } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";

/**
 * Scroll-driven fold, in the spirit of canvasui.dev/docs/components/bend.
 *
 * That component renders HTML into WebGL via drawElementImage(), which is a
 * Chrome origin trial — on Safari, Firefox, and stock Chrome it falls back to a
 * flat div and the effect never appears. This does the fold in CSS 3D instead,
 * so every visitor sees it, at the cost of bending the card as a plane rather
 * than creasing its interior.
 *
 * A card hinges as it crosses the viewport: tipped while entering at the
 * bottom, flat through the middle band, tipped the other way as it leaves.
 *
 * Progress comes from the element's own rect each frame rather than
 * `useScroll`. The page scrolls under Lenis, and its root sets `overflow-x:
 * hidden` — which makes `overflow-y` compute to `auto` — so the nearest
 * "scroll container" is not the one actually scrolling and useScroll's progress
 * pins to its extremes. Reading the rect sidesteps that entirely, and because
 * the rect already reflects Lenis's smoothed position, the fold inherits that
 * smoothing without a spring of its own.
 */

/** Maximum tip in degrees, reached at the viewport edges. */
const ANGLE = 18;
/** Focal length in px. Smaller pinches the fold harder. */
const PERSPECTIVE = 1200;
/**
 * Fraction of the card's viewport traversal spent flat and centred. Widening
 * this shortens the fold zone at each edge.
 */
const FLAT_FROM = 0.35;
const FLAT_TO = 0.65;

export function BendCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // 0 = top edge level with the viewport bottom, 1 = bottom edge past the top.
  const progress = useMotionValue(0.5);

  useAnimationFrame(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    // Skip the layout read cost while the card is nowhere near the viewport.
    if (rect.bottom < -vh || rect.top > vh * 2) return;
    const raw = (vh - rect.top) / (vh + rect.height);
    progress.set(Math.min(1, Math.max(0, raw)));
  });

  const rotateX = useTransform(progress, [0, FLAT_FROM, FLAT_TO, 1], [ANGLE, 0, 0, -ANGLE]);
  const scale = useTransform(progress, [0, FLAT_FROM, FLAT_TO, 1], [0.93, 1, 1, 0.93]);
  const opacity = useTransform(progress, [0, FLAT_FROM, FLAT_TO, 1], [0.45, 1, 1, 0.45]);

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <div ref={ref} style={{ perspective: `${PERSPECTIVE}px` }} className={className}>
      <motion.div
        style={{ rotateX, scale, opacity, transformOrigin: "center center", willChange: "transform" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
