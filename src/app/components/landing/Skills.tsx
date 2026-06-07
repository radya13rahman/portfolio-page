import { motion } from "motion/react";

const skillGroups = [
  {
    label: "Design",
    skills: ["Figma", "Framer", "Adobe Illustrator", "Adobe Photoshop", "Sketch", "ProtoPie"],
  },
  {
    label: "Research",
    skills: ["User Interviews", "Usability Testing", "Competitive Analysis", "Design Thinking"],
  },
  {
    label: "Development",
    skills: ["React", "Tailwind CSS", "HTML / CSS", "TypeScript", "Claude Code", "Figma AI"],
  },
];

export function Skills() {
  return (
    <section className="bg-[#151515] py-[60px] md:py-[80px] border-t border-white/5">
      <div className="w-full min-[1000px]:w-[70%] max-w-[1442px] mx-auto px-[24px] min-[768px]:px-[48px] min-[1024px]:px-[64px] flex flex-col gap-[40px]">
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
                    className="px-[14px] py-[8px] rounded-[8px] bg-[#1f1f1f] text-white/70 text-[14px] border border-white/5 hover:border-white/15 hover:text-white transition-all duration-200"
                  >
                    {skill}
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
