import { siLinkedin, siDribbble } from "simple-icons";
import { Layers, FileText } from "lucide-react";

function SiIcon({ path }: { path: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" width={15} height={15} fill="currentColor">
      <path d={path} />
    </svg>
  );
}

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/radya13rahman/",
    icon: <SiIcon path={siLinkedin.path} />,
  },
  {
    label: "Layers",
    href: "https://layers.to/radyaar",
    icon: <Layers size={15} />,
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/radyaar",
    icon: <SiIcon path={siDribbble.path} />,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/uc?export=download&id=1JGQatYz2f3qvOLdgpjrvcrAZfqYghyLN",
    icon: <FileText size={15} />,
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-[24px]">
      <div className="max-w-[1442px] mx-auto px-[24px] min-[768px]:px-[48px] min-[1024px]:px-[64px] min-[1200px]:px-[120px] flex flex-col min-[600px]:flex-row items-center justify-between gap-[12px]">
        <span className="text-white/30 text-[13px]">
          © {new Date().getFullYear()} Radya Amirur Rahman. All rights reserved.
        </span>
        <div className="flex items-center gap-[20px]">
          {links.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={label !== "Resume" ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-[6px] text-white/30 hover:text-white text-[13px] transition-colors"
            >
              {icon}
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
