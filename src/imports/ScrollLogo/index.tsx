import logo from "./logo-replace.webp";

function LogoItem() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <img alt="logo" className="max-w-none object-contain pointer-events-none h-[48px]" src={logo} />
    </div>
  );
}

export default function ScrollLogo() {
  return (
    <div className="content-stretch flex gap-[40px] items-center opacity-20 relative size-full" data-name="Scroll Logo">
      <LogoItem />
      <LogoItem />
      <LogoItem />
      <LogoItem />
      <LogoItem />
      <LogoItem />
      <LogoItem />
      <LogoItem />
    </div>
  );
}
