import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      // hide when scrolling down past the navbar, show when scrolling up
      if (y > 120 && y > lastY.current) setHidden(true);
      else if (y < lastY.current) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -80 : 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
        scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5" : ""
      }`}
    >
      <div className="max-w-[1442px] mx-auto px-[24px] min-[768px]:px-[48px] min-[1024px]:px-[64px] min-[1200px]:px-[120px] h-[56px] flex items-center gap-[32px]">
        <a href="#" className="hover:opacity-70 transition-opacity shrink-0">
          <img src="/favicon.png" alt="Radya Rahman" className="size-[32px] rounded-full" />
        </a>

        <nav className="hidden min-[600px]:flex items-center gap-[28px]">
          {[
            { label: "Work", href: "#work" },
            { label: "Reviews", href: "#testimonials" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-white/50 hover:text-white text-[14px] tracking-[-0.1px] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
