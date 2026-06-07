import { motion } from "motion/react";
import { GridPattern } from "./GridPattern";
import {
  siFigma, siFramer, siSketch,
  siReact, siTailwindcss, siHtml5, siTypescript, siAnthropic,
} from "simple-icons";
import { Users, TestTube2, BarChart2, Lightbulb, Pen, Camera, Layers } from "lucide-react";

function SiIcon({ icon, size = 16 }: { icon: { path: string; hex: string }; size?: number }) {
  return (
    <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className="shrink-0 opacity-70">
      <path d={icon.path} />
    </svg>
  );
}

const skillGroups = [
  {
    label: "Design",
    skills: [
      { name: "Figma", icon: <SiIcon icon={siFigma} /> },
      { name: "Framer", icon: <SiIcon icon={siFramer} /> },
      { name: "Adobe Illustrator", icon: <Pen size={16} className="shrink-0 opacity-70" /> },
      { name: "Adobe Photoshop", icon: <Camera size={16} className="shrink-0 opacity-70" /> },
      { name: "Sketch", icon: <SiIcon icon={siSketch} /> },
      { name: "ProtoPie", icon: <Layers size={16} className="shrink-0 opacity-70" /> },
    ],
  },
  {
    label: "Research",
    skills: [
      { name: "User Interviews", icon: <Users size={16} className="shrink-0 opacity-70" /> },
      { name: "Usability Testing", icon: <TestTube2 size={16} className="shrink-0 opacity-70" /> },
      { name: "Competitive Analysis", icon: <BarChart2 size={16} className="shrink-0 opacity-70" /> },
      { name: "Design Thinking", icon: <Lightbulb size={16} className="shrink-0 opacity-70" /> },
    ],
  },
  {
    label: "Development",
    skills: [
      { name: "React", icon: <SiIcon icon={siReact} /> },
      { name: "Tailwind CSS", icon: <SiIcon icon={siTailwindcss} /> },
      { name: "HTML / CSS", icon: <SiIcon icon={siHtml5} /> },
      { name: "TypeScript", icon: <SiIcon icon={siTypescript} /> },
      { name: "Claude Code", icon: <SiIcon icon={siAnthropic} /> },
      { name: "Figma AI", icon: <SiIcon icon={siFigma} /> },
    ],
  },
];

export function Skills() {
  return (
    <section className="bg-[#151515] py-[60px] md:py-[80px] border-t border-white/5 relative overflow-hidden">
      <GridPattern />
      <div className="relative w-full min-[1000px]:w-[70%] max-w-[1442px] mx-auto px-[24px] min-[768px]:px-[48px] min-[1024px]:px-[64px] flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[8px]">
          <h2 className="text-white text-[24px] md:text-[32px] tracking-[0.32px] leading-[1.1]">
            Tools & Skills
          </h2>
          <p className="text-white/40 text-[14px]">What I work with day-to-day</p>
        </div>

        <div className="flex flex-col gap-[32px]">
          {skillGroups.map((group, gi) => (
            <div key={gi} className="flex flex-col gap-[12px]">
              <span className="text-white/30 text-[12px] uppercase tracking-[1.5px]">{group.label}</span>
              <div className="flex flex-wrap gap-[8px]">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={si}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: si * 0.05 }}
                    className="inline-flex items-center gap-[8px] px-[14px] py-[8px] rounded-[8px] bg-[#1f1f1f] text-white/70 text-[14px] border border-white/5 hover:border-white/15 hover:text-white transition-all duration-200"
                  >
                    {skill.icon}
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
