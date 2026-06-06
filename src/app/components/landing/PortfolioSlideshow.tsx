import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { FancyLinkButton } from "./FancyButton";

export interface PortfolioProject {
  name: string;
  description: string;
  tags: string;
  images: string[];
  link?: string;
}

export function PortfolioSlideshow({ project }: { project: PortfolioProject }) {
  const [index, setIndex] = useState(0);
  const total = project.images.length;
  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  useEffect(() => {
    if (total <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 5000);
    return () => clearInterval(id);
  }, [total, index]);

  const details = (
    <div className="flex flex-col gap-[16px] max-w-[603px] self-start h-fit">
      <h2 className="text-white text-[24px] md:text-[32px] tracking-[0.32px]">
        {project.name}
      </h2>
      <p className="text-[#dfdfdf] text-[16px] leading-[1.5] tracking-[-0.16px]">
        {project.description}
      </p>
      <p className="text-[rgba(223,223,223,0.5)] text-[16px] leading-[1.5] tracking-[-0.16px]">
        {project.tags}
      </p>
      {project.link && (
        <FancyLinkButton
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-[8px] self-start"
        >
          View Project
          <ExternalLink className="size-[16px]" />
        </FancyLinkButton>
      )}
    </div>
  );

  const slideshow = (
    <div className="relative w-full h-[40vh] min-[1200px]:h-auto min-[1200px]:aspect-[4/3] bg-black overflow-hidden group min-[1200px]:rounded-[12px]">
      {project.images.map((src, i) => (
        <ImageWithFallback
          key={i}
          src={src}
          alt={`${project.name} screenshot ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {total > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-[16px] top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-[8px] backdrop-blur-sm"
          >
            <ChevronLeft className="size-[20px]" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-[16px] top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-[8px] backdrop-blur-sm"
          >
            <ChevronRight className="size-[20px]" />
          </button>
          <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 flex gap-[8px]">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-[6px] rounded-full transition-all ${
                  i === index ? "bg-white w-[24px]" : "bg-white/40 w-[6px]"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="w-full bg-[#151515]">
      <div className="min-[1200px]:hidden">
        <div className="px-[24px] min-[768px]:px-[48px] min-[1024px]:px-[64px] py-[60px] md:py-[80px]">
          {details}
        </div>
        {slideshow}
      </div>

      <div className="hidden min-[1200px]:block">
        <div className="max-w-[1442px] mx-auto px-[120px] py-[80px] grid grid-cols-2 gap-[60px] items-center">
          {details}
          {slideshow}
        </div>
      </div>
    </div>
  );
}
