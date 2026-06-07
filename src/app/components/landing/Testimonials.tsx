import { motion } from "motion/react";
import { GridPattern } from "./GridPattern";
import kennardImg from "../../../imports/avatar-kennard.webp";
import tiffanyImg from "../../../imports/avatar-tiffany.webp";
import gregoriusImg from "../../../imports/avatar-gregorius.webp";
import hannahImg from "../../../imports/avatar-hannah.webp";

const testimonials = [
  {
    name: "Kennard Sugirotok",
    title: "Full Stack Developer",
    agency: "Techflouu",
    photo: kennardImg,
    text: "Working with Radya on our website project was a fantastic experience. He doesn't just create visually stunning interfaces; his proactive communication makes the entire project lifecycle incredibly smooth. If you need a reliable UI/UX designer who truly understands how to collaborate effectively and deliver modern, user-centric designs, Radya is the person you want on your team.",
  },
  {
    name: "Tiffany Eunike",
    title: "Ops and Product Management",
    agency: "Techflouu",
    photo: tiffanyImg,
    text: "Radya is a kind and creative individual who brings a positive attitude to the workplace. It was a pleasure having him on the team, and I appreciated his contributions to our UI/UX projects.",
  },
  {
    name: "Gregorius Yuristama",
    title: "iOS Developer",
    agency: "Apple Developer Academy · BCA Digital",
    photo: gregoriusImg,
    text: "I am pleased to provide my endorsement for Radya, a skilled UI/UX professional with whom I've had the pleasure of collaborating. Radya's exceptional design acumen has consistently produced visually appealing and user-centric solutions. His ability to think innovatively and outside the box has greatly contributed to the success of our projects.",
  },
  {
    name: "Hannah Nur Azzahrah",
    title: "UI/UX Designer",
    agency: "Apple Developer Academy",
    photo: hannahImg,
    text: "Radya and I are fellow learners at the Apple Developer Academy and he consistently impresses me with his advanced prototyping skills and deep expertise in Figma. His determination to learn and experiment with new techniques is truly inspiring. His ability to provide constructive feedback and actively participate in brainstorming sessions makes him an invaluable partner in any design process.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0A0A0A] py-[60px] md:py-[80px] relative overflow-hidden">
      <GridPattern diagonal />
      <div className="relative w-full min-[1000px]:w-[70%] max-w-[1442px] mx-auto px-[24px] min-[768px]:px-[48px] min-[1024px]:px-[64px] flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[8px] mb-[16px] px-[20px] min-[1000px]:px-0">
          <h2 className="text-white text-[24px] md:text-[32px] tracking-[0.32px] leading-[1.1]">
            What people say
          </h2>
          <p className="text-white/40 text-[14px]">From LinkedIn recommendations</p>
        </div>

        <div className="grid grid-cols-1 min-[800px]:grid-cols-2 gap-[24px]">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (i % 2) * 0.08 }}
              className="bg-[#1f1f1f] p-[28px] flex flex-col gap-[24px]"
            >
              {/* Avatar + person info */}
              <div className="flex items-center gap-[14px]">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="size-[44px] rounded-full object-cover shrink-0"
                />
                <div className="flex flex-col gap-[2px]">
                  <span className="text-white text-[14px] font-medium leading-tight">{t.name}</span>
                  <span className="text-white/40 text-[12px] leading-tight">{t.title} · <span className="text-white/60">{t.agency}</span></span>
                </div>
              </div>

              {/* Quote */}
              <p className="text-white/60 text-[14px] leading-[1.7] tracking-[-0.1px] flex-1">
                "{t.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
