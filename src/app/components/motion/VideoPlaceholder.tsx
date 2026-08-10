import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Play, Film, Volume2, VolumeX } from "lucide-react";

type Props = {
  /** Real video file. When unset the card renders as a dummy placeholder. */
  src?: string;
  poster?: string;
  /** Caption shown on the placeholder card. */
  label?: string;
  duration?: string;
  /** CSS aspect ratio, e.g. "16 / 9" or "4 / 5". */
  aspect?: string;
  /**
   * Loop silently on load, like a showreel. Every browser requires muted for
   * autoplay, so this pairs with a sound toggle rather than dropping the audio.
   */
  ambient?: boolean;
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
 *
 * `ambient` flips that for the hero: it loops muted from load, and the sound
 * toggle is the gesture that brings the audio in.
 */
export function VideoPlaceholder({
  src,
  poster,
  label = "Video placeholder",
  duration,
  aspect = "16 / 9",
  ambient = false,
  className = "",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(true);

  // Start true so the prerendered HTML already carries autoplay/loop/muted and
  // the browser can begin before JS hydrates — otherwise the hero sits on its
  // poster until then, and the play button flashes in and straight back out.
  // Autoplay is still motion, so back it out for a reduced-motion preference.
  const [allowAmbient, setAllowAmbient] = useState(ambient);
  useEffect(() => {
    if (!ambient || !src) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAllowAmbient(false);
      videoRef.current?.pause();
    }
  }, [ambient, src]);

  // React can drop the `muted` attribute during hydration, which would let an
  // unmuted autoplay be blocked outright — so pin it on the element directly.
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted, allowAmbient]);

  const start = () => {
    const v = videoRef.current;
    if (!v) return;
    setStarted(true);
    v.play().catch(() => setStarted(false));
  };

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    setMuted(next);
    if (!next) v.play().catch(() => {});
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
            autoPlay={allowAmbient}
            loop={allowAmbient}
            muted={allowAmbient ? muted : undefined}
            preload={allowAmbient ? "auto" : "metadata"}
            controls={started}
            onEnded={() => setStarted(false)}
            className="absolute inset-0 size-full object-cover"
          />

          {allowAmbient ? (
            <button
              type="button"
              onClick={toggleSound}
              aria-label={muted ? `Unmute ${label}` : `Mute ${label}`}
              className="absolute bottom-[12px] right-[12px] flex items-center gap-[7px] rounded-full border border-white/15 bg-black/60 px-[12px] py-[7px] text-[12px] text-white/80 backdrop-blur-sm outline-none transition-colors hover:border-white/30 hover:text-white focus-visible:border-white/30"
            >
              {muted ? <VolumeX className="size-[14px]" /> : <Volume2 className="size-[14px]" />}
              {muted ? "Sound off" : "Sound on"}
            </button>
          ) : (
            !started && (
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
            )
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

      {/* hidden once native controls or the sound toggle take over that corner */}
      {duration && !started && !allowAmbient && (
        <span className="absolute bottom-[12px] right-[12px] rounded-full border border-white/10 bg-black/60 px-[10px] py-[4px] text-[11px] tabular-nums text-white/70 backdrop-blur-sm">
          {duration}
        </span>
      )}
    </motion.div>
  );
}
