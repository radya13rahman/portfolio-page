import { motion } from "motion/react";

const testimonials = [
  {
    name: "Kennard Sugirotok, B.Sc.",
    title: "Full Stack Developer @ Techflouu",
    relation: "Worked together",
    text: "Working with Radya on our website project was a fantastic experience. He doesn't just create visually stunning interfaces; his proactive communication makes the entire project lifecycle incredibly smooth. If you need a reliable UI/UX designer who truly understands how to collaborate effectively and deliver modern, user-centric designs, Radya is the person you want on your team.",
  },
  {
    name: "Tiffany Eunike",
    title: "Ops and Product Management",
    relation: "Worked together",
    text: "Radya is a kind and creative individual who brings a positive attitude to the workplace. It was a pleasure having him on the team, and I appreciated his contributions to our UI/UX projects.",
  },
  {
    name: "Hannah Nur Azzahrah",
    title: "UI/UX Designer · Apple Developer Academy Graduate",
    relation: "Studied together",
    text: "Radya and I are fellow learners at the Apple Developer Academy and he consistently impresses me with his advanced prototyping skills and deep expertise in Figma. Radya's determination to learn and experiment with new techniques is truly inspiring. His ability to provide constructive feedback and actively participate in brainstorming sessions makes him an invaluable partner in any design process.",
  },
  {
    name: "Gregorius Yuristama Nugraha",
    title: "iOS Developer @ BCA Digital · Apple Developer Academy Graduate",
    relation: "Worked together",
    text: "I am pleased to provide my endorsement for Radya, a skilled UI/UX professional with whom I've had the pleasure of collaborating. Radya's exceptional design acumen has consistently produced visually appealing and user-centric solutions. His ability to think innovatively and outside the box has greatly contributed to the success of our projects. I confidently recommend Radya for any UI/UX design opportunities, as his blend of technical expertise and creative thinking makes him an invaluable asset to any team.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#0A0A0A] py-[60px] md:py-[80px]">
      <div className="max-w-[1442px] mx-auto px-[24px] min-[768px]:px-[48px] min-[1024px]:px-[64px] min-[1200px]:px-[120px] flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[8px]">
          <h2 className="text-white text-[24px] md:text-[32px] tracking-[0.32px] leading-[1.1]">
            What people say
          </h2>
          <p className="text-white/40 text-[14px]">From LinkedIn recommendations</p>
        </div>

        <div className="grid grid-cols-1 min-[800px]:grid-cols-2 gap-[1px] border border-white/8 rounded-[12px] overflow-hidden">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (i % 2) * 0.1 }}
              className="bg-[#111111] p-[32px] flex flex-col gap-[20px]"
            >
              <p className="text-white/70 text-[15px] leading-[1.7] tracking-[-0.1px] flex-1">
                "{t.text}"
              </p>
              <div className="flex flex-col gap-[4px] pt-[4px] border-t border-white/8">
                <span className="text-white text-[14px] font-medium">{t.name}</span>
                <span className="text-white/40 text-[13px]">{t.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
