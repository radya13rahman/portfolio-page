import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5" : ""
      }`}
    >
      <div className="max-w-[1442px] mx-auto px-[24px] min-[768px]:px-[48px] min-[1024px]:px-[64px] min-[1200px]:px-[120px] h-[56px] flex items-center justify-between">
        <a href="#" className="hover:opacity-70 transition-opacity">
          <img src="/favicon.png" alt="Radya Rahman" className="size-[32px] rounded-full" />
        </a>

        <nav className="hidden min-[600px]:flex items-center gap-[32px]">
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

        <a
          href="#contact"
          className="text-[13px] text-white bg-white/10 hover:bg-white/20 transition-colors duration-200 px-[14px] py-[7px] rounded-full"
        >
          Let's work →
        </a>
      </div>
    </motion.header>
  );
}
