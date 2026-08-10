import type { ReactNode } from "react";
import kennardImg from "../../../imports/avatar-kennard.webp";
import tiffanyImg from "../../../imports/avatar-tiffany.webp";
import gregoriusImg from "../../../imports/avatar-gregorius.webp";
import hannahImg from "../../../imports/avatar-hannah.webp";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  ALL CONTENT FOR /motion LIVES HERE.
 *
 *  Sidebar, reviews, and project entries are Radya's real content (from
 *  radya-homepage-content-option-2.md). The hero copy, pricing, and FAQ are
 *  still placeholders — no source data for those yet.
 *
 *  Videos: give an entry a `src` (and optional `poster`) and the placeholder
 *  card turns into a real <video>. Leave `src` off to keep the dummy card.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Publicly visible contact address; renders as a mailto link in the sidebar. */
export const EMAIL = "radyaamirur@gmail.com";

/** Underlined inline link used in the sidebar copy. */
export function SideLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="text-white/85 underline decoration-white/25 underline-offset-[3px] hover:text-white hover:decoration-[#ff7a3d] transition-colors"
    >
      {children}
    </a>
  );
}

/** Emphasised (non-link) phrase in the sidebar copy. */
function Em({ children }: { children: ReactNode }) {
  return <strong className="font-medium text-white/70">{children}</strong>;
}

// ── Sidebar ──────────────────────────────────────────────────────────────────

export const SIDEBAR = {
  avatar: "/favicon.png",
  name: "Radya Amirur Rahman",
  role: "Product Designer & Researcher",

  /** Groups of one-line sentences, each separated by vertical space. */
  blocks: [
    [
      <>Currently designing AI products at <SideLink href="https://appnigma.ai/">Appnigma AI</SideLink></>,
      <>Making software easier to understand, use &amp; ship</>,
      <>Sometimes turning designs into code with <Em>Claude Code</Em></>,
      <>Sharing visual experiments on <SideLink href="https://layers.to/radyaar">Layers</SideLink></>,
      <>Taking selected freelance projects on <SideLink href="https://www.upwork.com/freelancers/~01cc55f16d41e10395">Upwork</SideLink></>,
      <>Somehow won Apple's <Em>WWDC23 Swift Student Challenge</Em></>,
      <>Based in <Em>Surakarta, Indonesia · GMT+7</Em></>,
    ],
    [
      <>
        Previously with <SideLink href="https://walturn.com/">Walturn</SideLink>,{" "}
        <SideLink href="https://www.techflouu.com/">Techflouu</SideLink>,{" "}
        <SideLink href="https://www.telkom.co.id/">Telkom Indonesia</SideLink> &amp;{" "}
        <SideLink href="https://campaign.com/">Campaign.com</SideLink>
      </>,
      <>
        Former learner at{" "}
        <SideLink href="https://developeracademy.apps.binus.ac.id/">
          Apple Developer Academy Indonesia
        </SideLink>
      </>,
      <>See my work at <SideLink href="https://radyaar.com/">radyaar.com</SideLink></>,
      <>Connect on <SideLink href="https://www.linkedin.com/in/radya13rahman/">LinkedIn</SideLink></>,
      <>Browse experiments on <SideLink href="https://layers.to/radyaar">Layers</SideLink></>,
      <>More shots on <SideLink href="https://dribbble.com/radyaar">Dribbble</SideLink></>,
      <>Code &amp; old experiments on <SideLink href="https://github.com/radya13rahman">GitHub</SideLink></>,
      <>
        <SideLink href="https://drive.google.com/uc?export=download&id=1JGQatYz2f3qvOLdgpjrvcrAZfqYghyLN">
          Download my resume
        </SideLink>
      </>,
    ],
    [
      <>
        <SideLink href="#contact">Book a call</SideLink> if you have something interesting to build
      </>,
      EMAIL ? (
        <>Email me at <SideLink href={`mailto:${EMAIL}`}>{EMAIL}</SideLink></>
      ) : (
        <>
          Email me at{" "}
          <span className="rounded-[4px] border border-dashed border-white/20 px-[6px] py-[1px] text-white/30">
            add your email
          </span>
        </>
      ),
    ],
  ] as ReactNode[][],
};

/** Section anchors for the "Jump to:" nav and the scroll-spy highlight. */
export const JUMP_LINKS = [
  { id: "launch-videos", label: "Selected Work" },
  { id: "reviews", label: "Reviews" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ's" },
];

// ── Hero ─────────────────────────────────────────────────────────────────────
// PLACEHOLDER — no source copy for the hero yet.

export const HERO: {
  badge: string;
  headline: string[];
  lead: string;
  body: string;
  cta: { label: string; href: string };
  watermark: string;
  video: { title: string; duration?: string; src?: string; poster?: string };
} = {
  badge: "Trusted By 20+ Product Teams",
  /** Rendered as two lines on wide screens. */
  headline: ["We make scroll-stopping", "launch videos for software."],
  lead: "Our videos average 100k+ views.",
  body: "Story-driven product films built to create hype, lift conversion, and make your launch look like the real thing.",
  cta: { label: "See Pricing", href: "#pricing" },
  /** Giant repeating text behind the hero. */
  watermark: "just do it",
  video: {
    title: "Showreel",
    src: "/videos/showcase.mp4",
    poster: "/videos/showcase-poster.webp",
    duration: "1:25",
  },
};

// ── Projects ─────────────────────────────────────────────────────────────────
// Three entries, each backed by a real cut. Encodes live in public/videos/;
// the commands that produced them are in ./VIDEOS.md.

export type VideoItem = {
  title: string;
  client: string;
  tags: string;
  href?: string;
  duration?: string;
  blurb?: string;
  src?: string;
  poster?: string;
};

export const LAUNCH_VIDEOS: VideoItem[] = [
  {
    title: "Appnigma AI",
    client: "Appnigma",
    tags: "Product · AI · Salesforce & HubSpot",
    href: "https://appnigma.ai/",
    src: "/videos/appnigma-ai.mp4",
    poster: "/videos/appnigma-ai-poster.webp",
    duration: "0:20",
  },
  {
    title: "Gyde",
    client: "Gyde",
    tags: "Mobile App · Product Design",
    // No public URL supplied for Gyde yet — add `href` and the title links out.
    src: "/videos/gyde.mp4",
    poster: "/videos/gyde-poster.webp",
    duration: "3:00",
  },
  {
    title: "Walturn",
    client: "Walturn",
    tags: "Product Engineering",
    href: "https://walturn.com/",
    src: "/videos/walturn.mp4",
    poster: "/videos/walturn-poster.webp",
    duration: "2:29",
  },
];

// ── Reviews ──────────────────────────────────────────────────────────────────
// Shown one at a time and stepped through with the arrows.
// Kennard is first — flagged as the recommended quote in the source doc.

export const REVIEWS = [
  {
    name: "Kennard Sugirotok",
    title: "Full Stack Developer",
    company: "Techflouu",
    photo: kennardImg,
    text: "Radya combines strong visual design with proactive communication and a clear understanding of user needs. He is reliable, collaborative, and easy to work with.",
  },
  {
    name: "Tiffany Eunike",
    title: "Ops & Product Management",
    company: "Techflouu",
    photo: tiffanyImg,
    text: "Radya is creative, kind, and positive to work with. He consistently brings thoughtful contributions to UI/UX projects and works well with the wider team.",
  },
  {
    name: "Gregorius Yuristama",
    title: "iOS Developer",
    company: "Apple Developer Academy / BCA Digital",
    photo: gregoriusImg,
    text: "Radya has a strong eye for visual design and consistently approaches problems from a user-centered perspective. His willingness to explore unconventional ideas makes him a valuable design collaborator.",
  },
  {
    name: "Hannah Nur Azzahrah",
    title: "UI/UX Designer",
    company: "Apple Developer Academy",
    photo: hannahImg,
    text: "Radya stands out for his prototyping skills, Figma expertise, curiosity, and willingness to experiment. He also contributes actively through constructive feedback and collaborative brainstorming.",
  },
];

// ── Pricing ──────────────────────────────────────────────────────────────────
// ⚠️ The RATES BELOW ARE INVENTED — plausible for launch-video work, but not
// yours. The scope lines are realistic and can mostly stand; replace the three
// numbers (and anything you don't actually offer) before this goes public.

export const PRICING = [
  {
    name: "Single Film",
    price: "$1,500",
    cadence: "per video",
    description: "One launch video, script to final cut.",
    features: [
      "Up to 60 seconds, 16:9",
      "Script and storyboard",
      "Motion graphics and sound design",
      "2 rounds of revisions",
      "~2 week turnaround",
    ],
    cta: "Book a Call",
    featured: false,
  },
  {
    name: "Launch Package",
    price: "$3,800",
    cadence: "per launch",
    description: "The hero film plus everything you need to promote it.",
    features: [
      "Everything in Single Film",
      "5 social cutdowns (9:16 and 1:1)",
      "Thumbnails and burned-in captions",
      "Licensed music track",
      "4 rounds of revisions",
      "~3 week turnaround",
    ],
    cta: "Book a Call",
    featured: true,
  },
  {
    name: "Retainer",
    price: "$2,400",
    cadence: "per month",
    description: "Ongoing motion for teams shipping constantly.",
    features: [
      "2–3 videos per month",
      "Rolling queue, one active task",
      "Async review, 24h turnaround on notes",
      "Source project files handed over",
      "Pause or cancel anytime",
    ],
    cta: "Book a Call",
    featured: false,
  },
];

// ── FAQ ──────────────────────────────────────────────────────────────────────
// ⚠️ Written to match the packages above — the terms here (revision counts,
// turnarounds, the rush fee, the voiceover range) are proposals, not promises
// you've made. Read them as a contract and adjust anything you won't honour.

export const FAQS = [
  {
    q: "How long does one video take?",
    a: "A single film runs about two weeks end to end: a few days on script and storyboard, a week on animation and sound, then revisions. Launch packages take closer to three weeks because of the cutdowns. Rush timelines are possible and carry a 30% fee.",
  },
  {
    q: "What do you need from us to start?",
    a: "Product access or a screen recording of the flow you want shown, your logo and brand fonts, and any existing footage or screenshots. If you have a positioning doc or a draft launch post, send that too — it usually becomes the backbone of the script.",
  },
  {
    q: "How many revisions are included?",
    a: "Two rounds on a single film, four on a launch package. A round is one consolidated set of notes rather than notes arriving one at a time. Structural changes after the storyboard is signed off start a new round, so that's the moment to be picky.",
  },
  {
    q: "Do you write the script and record voiceover?",
    a: "The script is included in every package. Voiceover is cast and licensed separately — budget roughly $150–400 depending on the talent and usage rights. Plenty of launch videos land better with music and on-screen text alone, so it's worth deciding late.",
  },
  {
    q: "Can you work within our existing brand guidelines?",
    a: "That's the default. Send the guidelines and the video matches your type, colour, and spacing rules. If there's no motion spec yet, I'll propose one alongside the first video so anything made later stays consistent with it.",
  },
  {
    q: "Who owns the final files?",
    a: "You do, outright, once the final invoice is settled. Retainer clients also receive the source project files. The exception is licensed music and stock footage, which stay under their own licences — those are always listed before purchase.",
  },
];
