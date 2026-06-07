import { useEffect, useRef, useState } from "react";
import { Music, Pause } from "lucide-react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "motion/react";
import trackSrc from "../../../imports/Perunggu_-_Ini_Abadi__Video_Lirik___320_.mp3";

const TRACK_TITLE = "Ini Abadi — Perunggu";
const TRACK_SRC = trackSrc;

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [headHidden, setHeadHidden] = useState(false);

  // Rotate the head based on scroll progress
  const { scrollYProgress } = useScroll();
  const rotateRaw = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const rotate = useSpring(rotateRaw, { stiffness: 80, damping: 20, mass: 0.5 });

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.4;
    let cancelled = false;
    const tryPlay = async () => {
      try {
        await a.play();
        if (!cancelled) setPlaying(true);
      } catch {
        if (!cancelled) setPlaying(false);
      }
    };
    tryPlay();
    return () => {
      cancelled = true;
    };
  }, []);

  // When music plays, bring the head back
  useEffect(() => {
    if (playing) setHeadHidden(false);
  }, [playing]);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      if (a.paused) {
        await a.play();
        setPlaying(true);
      } else {
        a.pause();
        setPlaying(false);
      }
    } catch {
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={TRACK_SRC} loop preload="auto" />

      {/* Rotating head — sits above the music player */}
      <AnimatePresence>
        {!headHidden && (
          <motion.button
            type="button"
            onClick={() => setHeadHidden(true)}
            aria-label="Hide avatar"
            title="Click to hide"
            initial={{ opacity: 0, scale: 0.4, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.4, y: 12 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-[64px] right-[12px] z-50 size-[176px] cursor-pointer"
          >
            <motion.video
              src="/head.webm"
              poster="/head.webp"
              autoPlay
              loop
              muted
              playsInline
              style={{ rotate }}
              className="size-full object-contain"
            />
          </motion.button>
        )}
      </AnimatePresence>

      <button
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        title={`${playing ? "Pause" : "Play"} · ${TRACK_TITLE}`}
        className="fixed bottom-[24px] right-[24px] z-50 flex items-center gap-[8px] bg-black/70 hover:bg-black/85 text-white rounded-full pl-[12px] pr-[16px] py-[10px] backdrop-blur-md border border-white/10 transition-colors"
      >
        {playing ? (
          <Pause className="size-[16px]" />
        ) : (
          <Music className={`size-[16px] ${playing ? "" : "animate-pulse"}`} />
        )}
        <span className="text-[12px] tracking-[0.02em] whitespace-nowrap">
          {TRACK_TITLE}
        </span>
      </button>
    </>
  );
}
