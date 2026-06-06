import { useEffect, useRef, useState } from "react";
import { Music, Pause } from "lucide-react";
import trackSrc from "../../../imports/Perunggu_-_Ini_Abadi__Video_Lirik___320_.mp3";

const TRACK_TITLE = "Ini Abadi — Perunggu";
const TRACK_SRC = trackSrc;

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

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
