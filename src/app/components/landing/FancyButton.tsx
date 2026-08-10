import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  className?: string;
};

const baseClass =
  "relative rounded-[99999px] inline-flex items-center justify-center gap-[8px] px-[16px] py-[10px] overflow-hidden cursor-pointer transition-all hover:brightness-110 active:brightness-95 font-normal text-[14px] text-white tracking-[-0.294px] leading-[20px] whitespace-nowrap";

/** The site's primary-CTA fill. Exported so other surfaces can reuse it. */
export const gradientStyle = {
  backgroundImage: [
    "linear-gradient(180deg, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.15) 100%)",
    "linear-gradient(180deg, #f08a73 0%, #e35c43 50%, #ff7a3d 100%)",
  ].join(", "),
  boxShadow: [
    "inset 0 1px 0 0 rgba(255,255,255,0.55)",
    "inset 0 -1px 0 0 rgba(255,180,120,0.55)",
    "inset 0 0 0 1px rgba(255,255,255,0.12)",
    "0 1px 2px 0 rgba(227,92,67,0.5)",
    "0 6px 16px -2px rgba(255,122,61,0.45)",
  ].join(", "),
  textShadow: "0 1px 1px rgba(0,0,0,0.25)",
  fontFeatureSettings: '"cv09", "ss11", "calt" 0, "liga" 0',
};

export function FancyButton({
  children,
  className = "",
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={`${baseClass} ${className}`} style={gradientStyle}>
      {children}
    </button>
  );
}

export function FancyLinkButton({
  children,
  className = "",
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...props} className={`${baseClass} ${className}`} style={gradientStyle}>
      {children}
    </a>
  );
}
