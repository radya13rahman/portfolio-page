import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    // Skip smooth-scroll on touch devices: it adds little there and
    // conflicts with native scrolling inside embeds like the Cal.com
    // iframe (causes scroll jumps/glitches on mobile).
    const isTouch =
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window);
    if (isTouch) return;

    let lenis: import("lenis").default | null = null;
    let frame = 0;
    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      const raf = (time: number) => { lenis!.raf(time); frame = requestAnimationFrame(raf); };
      frame = requestAnimationFrame(raf);
    });
    return () => { cancelAnimationFrame(frame); lenis?.destroy(); };
  }, []);
}
