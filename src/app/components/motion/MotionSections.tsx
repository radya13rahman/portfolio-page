import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Minus, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { gradientStyle } from "../landing/FancyButton";
import { FAQS, LAUNCH_VIDEOS, PRICING, REVIEWS } from "./motionData";
import { VideoPlaceholder } from "./VideoPlaceholder";
import { BendCard } from "./BendCard";

const PAD = "px-[24px] min-[768px]:px-[48px] min-[1024px]:px-[56px] min-[1440px]:px-[80px]";

/** Project title — becomes a link out when the entry has an `href`. */
function ProjectLink({ href, children }: { href?: string; children: ReactNode }) {
  if (!href) return <>{children}</>;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group/link inline-flex items-center gap-[6px] transition-colors hover:text-[#ff9a72]"
    >
      {children}
      <ArrowUpRight className="size-[15px] shrink-0 text-white/25 transition-all group-hover/link:translate-x-[2px] group-hover/link:-translate-y-[2px] group-hover/link:text-[#ff9a72]" />
    </a>
  );
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      // offset so anchor jumps don't tuck the heading under the top edge
      className={`scroll-mt-[24px] border-t border-white/6 py-[72px] min-[1024px]:py-[96px] ${className}`}
    >
      <div className={PAD}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-[44px] flex flex-col gap-[10px]"
        >
          <span className="text-[12px] uppercase tracking-[0.14em] text-[#ff9a72]">{eyebrow}</span>
          <h2 className="text-white text-[clamp(26px,3.2vw,40px)] font-medium leading-[1.1] tracking-[-0.01em]">
            {title}
          </h2>
          {subtitle && <p className="max-w-[62ch] text-[16px] leading-[1.6] text-white/40">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

export function LaunchVideos() {
  return (
    <Section
      id="launch-videos"
      eyebrow="Selected work"
      title="Recent projects"
      subtitle="Three builds, each with the full cut. Press play — they run with sound."
    >
      <div className="flex flex-col gap-[72px]">
        {LAUNCH_VIDEOS.map((v, i) => (
          <BendCard key={i}>
          <article className="flex flex-col gap-[20px]">
            <VideoPlaceholder src={v.src} poster={v.poster} label={v.title} duration={v.duration} />
            <div className="flex flex-col gap-[12px] min-[768px]:flex-row min-[768px]:items-start min-[768px]:justify-between min-[768px]:gap-[48px]">
              <div className="flex flex-col gap-[4px]">
                <h3 className="text-[19px] font-medium text-white">
                  <ProjectLink href={v.href}>{v.title}</ProjectLink>
                </h3>
                <span className="text-[14px] text-white/35">
                  {v.client} · {v.tags}
                </span>
              </div>
              {v.blurb && (
                <p className="max-w-[46ch] text-[15px] leading-[1.65] text-white/40">{v.blurb}</p>
              )}
            </div>
          </article>
          </BendCard>
        ))}
      </div>
    </Section>
  );
}

/**
 * One quote at a time, stepped with the arrows — per the source doc's note to
 * rotate testimonials rather than show them all at once, and matching the
 * arrow-stepped testimonial in the reference layout.
 */
export function MotionReviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const review = REVIEWS[index];

  const step = (delta: number) => {
    setDirection(delta);
    setIndex((i) => (i + delta + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <Section id="reviews" eyebrow="Reviews" title="What people say">
      <div className="flex max-w-[76ch] flex-col gap-[28px]">
        {/* min-height keeps the arrows from jumping as quotes change length */}
        <div className="relative min-h-[190px] min-[720px]:min-h-[150px]">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.figure
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-[20px]"
            >
              <blockquote className="text-[clamp(16px,1.7vw,19px)] leading-[1.6] tracking-[-0.1px] text-white/70">
                “{review.text}”
              </blockquote>
              <figcaption className="flex items-center gap-[13px]">
                <img
                  src={review.photo}
                  alt={review.name}
                  loading="lazy"
                  className="size-[44px] shrink-0 rounded-full object-cover"
                />
                <span className="flex flex-col gap-[2px]">
                  <span className="text-[14px] font-medium leading-tight text-white">
                    {review.name}
                  </span>
                  <span className="text-[13px] leading-tight text-white/35">
                    {review.title} · <span className="text-white/55">{review.company}</span>
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-[18px]">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous review"
            className="flex size-[36px] items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors hover:border-white/25 hover:text-white"
          >
            <ArrowLeft className="size-[16px]" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next review"
            className="flex size-[36px] items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors hover:border-white/25 hover:text-white"
          >
            <ArrowRight className="size-[16px]" />
          </button>
          <span className="text-[13px] tabular-nums text-white/25">
            {index + 1} / {REVIEWS.length}
          </span>
        </div>
      </div>
    </Section>
  );
}

export function MotionPricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title="Simple, flat packages"
      subtitle="Fixed price per project, no hourly billing. Script, storyboard, and sound design are in every package."
    >
      <div className="grid grid-cols-1 gap-[24px] min-[860px]:grid-cols-3">
        {PRICING.map((tier, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
            className={`relative flex flex-col gap-[24px] rounded-[18px] border p-[28px] ${
              tier.featured
                ? "border-[#ff7a3d]/35 bg-[#1f1512]"
                : "border-white/8 bg-[#1b1b1b]"
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-[11px] left-[28px] rounded-full bg-[#ff7a3d] px-[10px] py-[3px] text-[11px] font-medium text-[#1b0d05]">
                Most popular
              </span>
            )}

            <div className="flex flex-col gap-[6px]">
              <span className="text-[15px] font-medium text-white">{tier.name}</span>
              <span className="text-[14px] leading-[1.5] text-white/40">{tier.description}</span>
            </div>

            <div className="flex items-baseline gap-[7px]">
              <span className="text-[32px] font-medium tracking-[-0.02em] text-white">{tier.price}</span>
              <span className="text-[13px] text-white/35">{tier.cadence}</span>
            </div>

            <ul className="flex flex-1 flex-col gap-[10px]">
              {tier.features.map((f, fi) => (
                <li key={fi} className="flex items-start gap-[9px] text-[14px] leading-[1.5] text-white/55">
                  <Check className="mt-[3px] size-[14px] shrink-0 text-[#ff9a72]" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={
                tier.featured
                  ? "relative inline-flex items-center justify-center overflow-hidden rounded-full px-[16px] py-[11px] text-[14px] text-white transition-all hover:brightness-110"
                  : "inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.06] px-[16px] py-[11px] text-[14px] text-white transition-colors hover:bg-white/[0.12]"
              }
              style={tier.featured ? gradientStyle : undefined}
            >
              {tier.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function MotionFaq() {
  return (
    <Section id="faq" eyebrow="FAQ's" title="Questions, answered">
      <Accordion type="single" collapsible className="max-w-[76ch]">
        {FAQS.map((f, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border-b border-white/8 last:border-b-0"
          >
            <AccordionTrigger className="group flex w-full items-start justify-between gap-[24px] py-[20px] text-left text-[16px] font-medium text-white/85 outline-none transition-colors hover:text-white">
              {f.q}
              <span className="relative mt-[3px] size-[16px] shrink-0 text-white/35 transition-colors group-hover:text-white/70">
                <Plus className="absolute inset-0 size-[16px] transition-opacity group-data-[state=open]:opacity-0" />
                <Minus className="absolute inset-0 size-[16px] opacity-0 transition-opacity group-data-[state=open]:opacity-100" />
              </span>
            </AccordionTrigger>
            <AccordionContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <p className="max-w-[62ch] pb-[22px] text-[15px] leading-[1.7] text-white/45">{f.a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
