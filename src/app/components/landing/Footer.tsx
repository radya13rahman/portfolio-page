export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-[24px]">
      <div className="max-w-[1442px] mx-auto px-[24px] min-[768px]:px-[48px] min-[1024px]:px-[64px] min-[1200px]:px-[120px] flex flex-col min-[600px]:flex-row items-center justify-between gap-[12px]">
        <span className="text-white/30 text-[13px]">
          © {new Date().getFullYear()} Radya Amirur Rahman. All rights reserved.
        </span>
        <div className="flex items-center gap-[24px]">
          <a href="https://www.linkedin.com/in/radya13rahman/" target="_blank" rel="noreferrer" className="text-white/30 hover:text-white text-[13px] transition-colors">LinkedIn</a>
          <a href="https://layers.to/radyaar" target="_blank" rel="noreferrer" className="text-white/30 hover:text-white text-[13px] transition-colors">Layers</a>
          <a href="https://dribbble.com/radyaar" target="_blank" rel="noreferrer" className="text-white/30 hover:text-white text-[13px] transition-colors">Dribbble</a>
          <a href="https://drive.google.com/uc?export=download&id=1JGQatYz2f3qvOLdgpjrvcrAZfqYghyLN" className="text-white/30 hover:text-white text-[13px] transition-colors">Resume</a>
        </div>
      </div>
    </footer>
  );
}
