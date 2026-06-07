export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* horizontal top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/8" />
      {/* horizontal bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/8" />
      {/* vertical left line — matches content container left padding */}
      <div className="absolute inset-y-0 w-px bg-white/8 left-[24px] min-[768px]:left-[48px] min-[1024px]:left-[64px] min-[1200px]:left-[120px]" />
      {/* vertical right line — matches content container right padding */}
      <div className="absolute inset-y-0 w-px bg-white/8 right-[24px] min-[768px]:right-[48px] min-[1024px]:right-[64px] min-[1200px]:right-[120px]" />
    </div>
  );
}
