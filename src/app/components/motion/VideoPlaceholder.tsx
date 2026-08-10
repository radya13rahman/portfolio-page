import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Play, Film } from "lucide-react";

type Props = {
  /** Real video file. When unset the card renders as a dummy placeholder. */
  src?: string;
  poster?: string;
  /** Caption shown on the placeholder card. */
  label?: string;
  duration?: string;
  /** CSS aspect ratio, e.g. "16 / 9" or "4 / 5". */
  aspect?: string;
  className?: string;
};

/**
 * The one video surface used across /motion. Until a `src` is supplied it draws
 * a dummy card — hatched backdrop, play affordance, duration chip — so the
 * layout can be judged at full size without any footage.
 *
 * With a `src` it plays the real film: poster first, then sound-on playback with
 * native controls. Nothing autoplays, so the first play is always a user gesture
 * and browsers allow the audio through — these films are sound-designed, and
 * muting them by default would throw that away.
 */
export function VideoPlaceholder({
  src,
  poster,
  label = "Video placeholder",
  duration,
  aspect = "16 / 9",
  className = "",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    const v = videoRef.current;
    if (!v) return;
    setStarted(true);
    v.play().catch(() => setStarted(false));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ aspectRatio: aspect }}
      className={`group relative w-full overflow-hidden rounded-[20px] border border-white/8 bg-[#1b1b1b] ${className}`}
    >
      {src ? (
        <>
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            playsInline
            preload="metadata"
            controls={started}
            onEnded={() => setStarted(false)}
            className="absolute inset-0 size-full object-cover"
          />
          {!started && (
            <button
              type="button"
              onClick={start}
              aria-label={`Play ${label}`}
              className="group/play absolute inset-0 flex items-center justify-center bg-black/10 outline-none transition-colors duration-300 hover:bg-black/25 focus-visible:bg-black/25"
            >
              <span className="flex size-[68px] items-center justify-center rounded-full border border-white/30 bg-black/45 text-white backdrop-blur-sm transition-transform duration-300 group-hover/play:scale-110">
                <Play className="size-[24px] translate-x-[2px]" />
              </span>
            </button>
          )}
        </>
      ) : (
        <>
          {/* hatched backdrop */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 14px)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "180px 180px",
            }}
          />
          {/* sheen sweep on hover */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[110%] group-hover:opacity-100"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-[14px]">
            <span className="flex size-[64px] items-center justify-center rounded-full border border-[#ff7a3d]/40 bg-[#ff7a3d]/10 text-[#ff9a72] transition-transform duration-300 group-hover:scale-110">
              <Play className="size-[22px] translate-x-[2px]" />
            </span>
            <span className="flex items-center gap-[6px] text-white/35 text-[12px] tracking-[0.08em] uppercase">
              <Film className="size-[13px]" />
              {label}
            </span>
          </div>
        </>
      )}

      {/* hidden once native controls take over that corner */}
      {duration && !started && (
        <span className="absolute bottom-[12px] right-[12px] rounded-full border border-white/10 bg-black/60 px-[10px] py-[4px] text-[11px] tabular-nums text-white/70 backdrop-blur-sm">
          {duration}
        </span>
      )}
    </motion.div>
  );
}
