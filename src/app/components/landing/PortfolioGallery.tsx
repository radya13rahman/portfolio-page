import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export interface GalleryProject {
  name: string;
  description?: string;
  tags?: string;
  category?: string;
  image: string;
  images?: string[];
  link?: string;
}

function Card({ project, className = "" }: { project: GalleryProject; className?: string }) {
  const slides = project.images && project.images.length > 0 ? project.images : [project.image];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3500);
    return () => clearInterval(id);
  }, [slides.length]);

  const inner = (
    <div className="relative w-full h-full overflow-hidden rounded-[8px] bg-[#1f1f1f] group">
      {slides.map((src, i) => (
        <ImageWithFallback
          key={i}
          src={src}
          alt={`${project.name} ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:scale-[1.03] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute left-[20px] right-[20px] bottom-[20px] text-white opacity-0 group-hover:opacity-100 translate-y-[8px] group-hover:translate-y-0 transition-all duration-300">
        <h3 className="text-[20px] tracking-[0.2px]">{project.name}</h3>
        {project.tags && (
          <p className="text-[14px] text-white/70 mt-[4px]">{project.tags}</p>
        )}
      </div>
      {slides.length > 1 && (
        <div className="absolute top-[12px] right-[12px] flex gap-[4px]">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-[4px] rounded-full transition-all ${
                i === index ? "bg-white w-[16px]" : "bg-white/40 w-[4px]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noreferrer" className={className}>
        {inner}
      </a>
    );
  }
  return <div className={className}>{inner}</div>;
}

export function PortfolioGallery({ projects }: { projects: GalleryProject[] }) {
  const [filter, setFilter] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.category && set.add(p.category));
    return ["All", ...Array.from(set)];
  }, [projects]);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [projects, filter],
  );

  return (
    <section className="bg-[#151515] py-[60px] md:py-[80px]">
      <div className="max-w-[1442px] mx-auto px-[24px] min-[768px]:px-[48px] min-[1024px]:px-[64px] min-[1200px]:px-[120px] flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[16px] min-[600px]:flex-row min-[600px]:items-center min-[600px]:justify-between mb-[16px]">
          <h2 className="text-white text-[24px] md:text-[32px] tracking-[0.32px] leading-[1.1]">
            Selected Works
          </h2>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[200px] bg-[#1f1f1f] border-white/10 text-white">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-[#1f1f1f] border-white/10 text-white">
              {categories.map((c) => (
                <SelectItem key={c} value={c} className="focus:bg-white/10 focus:text-white">
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 min-[800px]:grid-cols-2 gap-[24px]">
          {filtered.map((project, i) => {
            const isWide = i % 3 === 0;
            return (
              <motion.div
                key={`${project.name}-${i}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.08 }}
                className={`${isWide ? "min-[800px]:col-span-2" : ""}`}
              >
                <Card project={project} className="aspect-[16/10] block w-full" />
              </motion.div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-white/60 text-center py-[40px]">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
