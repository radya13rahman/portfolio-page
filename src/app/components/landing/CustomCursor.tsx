import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  const sx = useSpring(mx, { stiffness: 200, damping: 24, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 200, damping: 24, mass: 0.4 });

  // ring lags more for a trailing feel
  const rx = useSpring(mx, { stiffness: 80, damping: 20, mass: 0.6 });
  const ry = useSpring(my, { stiffness: 80, damping: 20, mass: 0.6 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
    };
  }, [mx, my, visible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      {/* dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%", opacity: visible ? 1 : 0 }}
      >
        <motion.div
          className="size-[6px] rounded-full bg-white"
          animate={{ scale: clicking ? 0.5 : 1 }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>

      {/* ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%", opacity: visible ? 1 : 0 }}
      >
        <motion.div
          className="size-[32px] rounded-full border border-white/30"
          animate={{ scale: clicking ? 0.7 : 1 }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </>
  );
}
