import { CustomCursor } from "../components/landing/CustomCursor";
import { CalEmbed } from "../components/landing/CalEmbed";
import { MotionSidebar } from "../components/motion/MotionSidebar";
import { MotionHero } from "../components/motion/MotionHero";
import {
  FullPortfolio,
  LaunchVideos,
  MotionFaq,
  MotionPricing,
  MotionReviews,
} from "../components/motion/MotionSections";
import { useLenis } from "../hooks/useLenis";
import { PAGE_META, useHead } from "../seo";

/** Matches the sidebar's fixed width so the content column clears it. */
const RAIL = "min-[1024px]:ml-[clamp(330px,25vw,440px)]";

function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-[24px] border-t border-white/6 bg-[#0e0e0e] py-[72px] min-[1024px]:py-[96px]"
    >
      <div className="px-[24px] min-[768px]:px-[48px] min-[1024px]:px-[56px] min-[1440px]:px-[80px]">
        <div className="mb-[44px] flex flex-col gap-[10px]">
          <span className="text-[12px] uppercase tracking-[0.14em] text-[#ff9a72]">Next step</span>
          <h2 className="text-white text-[clamp(26px,3.2vw,40px)] font-medium leading-[1.1] tracking-[-0.01em]">
            Let's make your launch move
          </h2>
        </div>
        <CalEmbed />
      </div>
    </section>
  );
}

export default function MotionPage() {
  useLenis();
  useHead(PAGE_META.motion);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#151515] cursor-none">
      <CustomCursor />
      <MotionSidebar />

      <main className={RAIL}>
        <MotionHero />
        <LaunchVideos />
        <FullPortfolio />
        <MotionReviews />
        <MotionPricing />
        <MotionFaq />
        <ContactSection />

        <footer className="border-t border-white/6 px-[24px] py-[28px] min-[768px]:px-[48px] min-[1024px]:px-[56px] min-[1440px]:px-[80px]">
          <span className="text-[13px] text-white/25">
            © {new Date().getFullYear()} Radya Amirur Rahman. All rights reserved.
          </span>
        </footer>
      </main>
    </div>
  );
}
