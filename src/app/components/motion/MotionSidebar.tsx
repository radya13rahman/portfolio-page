import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { JUMP_LINKS, SIDEBAR } from "./motionData";

/** Stable identity so the scroll-spy effect subscribes once, not every render. */
const JUMP_IDS = JUMP_LINKS.map((l) => l.id);

/** Local clock in Jakarta time, 24h — matches the "UTC+7 21:15" footer style. */
function useJakartaClock() {
  const format = () =>
    new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Jakarta",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/**
 * Highlights the section currently under the top third of the viewport.
 * Uses scroll position rather than IntersectionObserver so it stays accurate
 * while Lenis is interpolating a smooth scroll.
 */
function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const onScroll = () => {
      const line = window.scrollY + window.innerHeight * 0.35;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top + window.scrollY <= line) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
}

export function MotionSidebar() {
  const time = useJakartaClock();
  const active = useScrollSpy(JUMP_IDS);

  return (
    <aside
      className="
        relative z-20 border-b border-white/8 bg-[#0e0e0e]
        min-[1024px]:fixed min-[1024px]:inset-y-0 min-[1024px]:left-0
        min-[1024px]:w-[clamp(330px,25vw,440px)]
        min-[1024px]:border-b-0 min-[1024px]:border-r
        min-[1024px]:flex min-[1024px]:flex-col min-[1024px]:overflow-hidden
      "
    >
      {/* faint texture so the rail reads as its own surface */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Vertical rhythm scales with viewport height so the rail fits on
          laptop screens instead of running off the bottom. */}
      <div className="relative flex min-h-full flex-col gap-[clamp(20px,3.2vh,40px)] px-[24px] py-[clamp(28px,4.4vh,48px)] min-[768px]:px-[48px] min-[1024px]:h-full min-[1024px]:px-[40px]">
        <a
          href="/"
          className="inline-flex w-fit shrink-0 items-center gap-[8px] text-[13px] text-white/40 transition-colors hover:text-white"
        >
          <ArrowLeft className="size-[14px]" />
          Back to portfolio
        </a>

        {/* Identity + bio lines. This is the only part that scrolls when the
            rail is taller than the viewport, so the jump nav and clock below
            stay reachable no matter how much copy lands here.
            `data-lenis-prevent` hands the wheel back to native scrolling —
            Lenis would otherwise scroll the page instead of this box. */}
        <div className="relative flex flex-col min-[1024px]:min-h-0 min-[1024px]:flex-1">
          <div
            data-lenis-prevent
            className="
              flex flex-col gap-[clamp(20px,3.2vh,40px)]
              min-[1024px]:h-full min-[1024px]:overflow-y-auto
              min-[1024px]:overscroll-contain min-[1024px]:pr-[10px]
              [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.16)_transparent]
              [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/15
              hover:[&::-webkit-scrollbar-thumb]:bg-white/25
            "
          >
            <div className="flex shrink-0 flex-col gap-[clamp(10px,1.8vh,14px)]">
              <img
                src={SIDEBAR.avatar}
                alt={SIDEBAR.name}
                className="size-[clamp(48px,7vh,64px)] rounded-full object-cover"
              />
              <div className="flex flex-col gap-[2px]">
                <span className="text-[16px] font-medium text-white">{SIDEBAR.name}</span>
                <span className="text-[16px] text-white/40">{SIDEBAR.role}</span>
              </div>
            </div>

            {/* sentence lines with inline links */}
            <div className="flex shrink-0 flex-col gap-[clamp(16px,2.6vh,28px)]">
              {SIDEBAR.blocks.map((block, bi) => (
                <div key={bi} className="flex flex-col gap-[clamp(6px,1.2vh,10px)]">
                  {block.map((line, li) => (
                    <p key={li} className="text-[15px] leading-[1.6] text-white/45">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* soft bottom edge so a mid-line cut reads as "more below",
              not as clipped content */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[40px] bg-gradient-to-t from-[#0e0e0e] to-transparent min-[1024px]:block"
          />
        </div>

        {/* jump nav — pinned above the fold, never scrolls out of view */}
        <nav className="flex shrink-0 flex-col gap-[clamp(6px,1.2vh,10px)]">
          <span className="text-[13px] text-white/30">Jump to:</span>
          {JUMP_LINKS.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
                className={`group flex items-center gap-[10px] text-[15px] transition-colors ${
                  isActive ? "text-white" : "text-white/45 hover:text-white/80"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-px transition-all duration-300 ${
                    isActive ? "w-[22px] bg-[#ff7a3d]" : "w-[10px] bg-white/25 group-hover:w-[16px]"
                  }`}
                />
                {label}
              </a>
            );
          })}
        </nav>

        <span className="shrink-0 text-[13px] text-white/25 tabular-nums">
          © {new Date().getFullYear()} · UTC+7 {time}
        </span>
      </div>
    </aside>
  );
}
