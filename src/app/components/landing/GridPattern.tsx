export function GridPattern({ className = "", diagonal = false }: { className?: string; diagonal?: boolean }) {
  return (
    <div aria-hidden="true" className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* vertical left line — matches content container left padding */}
      <div className="absolute inset-y-0 w-px bg-white/8 left-[24px] min-[768px]:left-[48px] min-[1024px]:left-[64px] min-[1200px]:left-[120px]" />
      {/* vertical right line — matches content container right padding */}
      <div className="absolute inset-y-0 w-px bg-white/8 right-[24px] min-[768px]:right-[48px] min-[1024px]:right-[64px] min-[1200px]:right-[120px]" />

      {/* diagonal hatching in outside columns (left & right of content) */}
      {diagonal && (
        <>
          <div
            className="absolute inset-y-0 left-0 right-[calc(100%-24px)] min-[768px]:right-[calc(100%-48px)] min-[1024px]:right-[calc(100%-64px)] min-[1200px]:right-[calc(100%-120px)]"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 12px)",
            }}
          />
          <div
            className="absolute inset-y-0 right-0 left-[calc(100%-24px)] min-[768px]:left-[calc(100%-48px)] min-[1024px]:left-[calc(100%-64px)] min-[1200px]:left-[calc(100%-120px)]"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 12px)",
            }}
          />
        </>
      )}
    </div>
  );
}
