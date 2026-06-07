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

export function StatsRow() {
  return (
    <section className="bg-[#171717] border-y border-white/5 py-[40px]">
      <div className="max-w-[1442px] mx-auto px-[24px] min-[768px]:px-[48px] min-[1024px]:px-[64px] min-[1200px]:px-[120px]">
        <div className="grid grid-cols-2 min-[800px]:grid-cols-4 gap-[1px] bg-white/5 rounded-[8px] overflow-hidden">
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
    </section>
  );
}
