function Text() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Work_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-center text-white tracking-[-0.294px] whitespace-nowrap" style={{ fontFeatureSettings: '"cv09", "ss11", "calt" 0, "liga" 0' }}>
        Let’s Collaborate
      </p>
    </div>
  );
}

export default function FancyButtons() {
  return (
    <div className="relative rounded-[10px] size-full" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(227, 92, 67) 0%, rgb(227, 92, 67) 100%)" }} data-name="Fancy Buttons [1.0]">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[10px] relative rounded-[inherit] size-full">
        <Text />
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(167,76,37,0.48),0px_0px_0px_1px_#d5715e]" />
    </div>
  );
}