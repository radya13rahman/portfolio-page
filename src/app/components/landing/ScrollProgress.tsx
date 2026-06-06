import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="hidden md:block fixed top-0 left-0 right-0 h-[12px] bg-[#1f1f1f] z-50">
      <div
        className="h-full bg-white transition-[width] duration-75 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
