import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import svgPaths from "../imports/LandingPagePortfolioDesktop/svg-tt1e977ne4";
import heroImage from "../imports/image-hero.webp";
import heroBeskapImage from "../imports/image-hero-beskap.webp";
import heroBgImage from "../imports/image-4.webp";
import ctaBgImage from "../imports/image-cta-bg.webp";
import lightbridgeImg from "../imports/image.webp";
import lightbridgeImg2 from "../imports/Screenshot_2026-06-06_at_16.20.21.webp";
import lightbridgeImg3 from "../imports/Screenshot_2026-06-06_at_16.20.31.webp";
import lightbridgeImg4 from "../imports/Screenshot_2026-06-06_at_16.20.39.webp";
import walturnImg from "../imports/Screenshot_2026-06-06_at_15.32.09.webp";
import walturnSlide1 from "../imports/walturn-1.webp";
import walturnSlide2 from "../imports/walturn-2.webp";
import rallyImg from "../imports/Screenshot_2026-06-06_at_15.32.18.webp";
import radfolioImg from "../imports/Screenshot_2026-06-06_at_15.32.41.webp";
import sproutFetchImg from "../imports/Screenshot_2026-06-06_at_15.36.04.webp";
import appnigmaImg from "../imports/Screenshot_2026-06-06_at_15.39.54.webp";
import parksImg from "../imports/Screenshot_2026-06-06_at_15.45.53.webp";
import layersImg from "../imports/Screenshot_2026-06-06_at_15.46.59.webp";
import dribbbleImg from "../imports/Screenshot_2026-06-06_at_15.49.05.webp";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ScrollProgress } from "./components/landing/ScrollProgress";
import { LogoMarquee } from "./components/landing/LogoMarquee";
import { PortfolioGallery, type GalleryProject } from "./components/landing/PortfolioGallery";
import { FancyLinkButton } from "./components/landing/FancyButton";
import { Calendar, FileText } from "lucide-react";
import { CalEmbed } from "./components/landing/CalEmbed";
import { Testimonials } from "./components/landing/Testimonials";
import { MusicPlayer } from "./components/landing/MusicPlayer";

const projects: GalleryProject[] = [
  {
    name: "Lightbridge",
    tags: "Mobile Engagement Platform · Website",
    category: "Website",
    image: lightbridgeImg,
    images: [lightbridgeImg, lightbridgeImg2, lightbridgeImg3, lightbridgeImg4],
    link: "https://lightbridgelife.com",
  },
  {
    name: "Walturn",
    tags: "Product Engineering · Website",
    category: "Website",
    image: walturnImg,
    images: [walturnImg, walturnSlide1, walturnSlide2],
    link: "https://walturn.com",
  },
  {
    name: "Rally",
    tags: "Tennis Community App · Website",
    category: "Mobile App",
    image: rallyImg,
    link: "https://rallyracquet.com",
  },
  {
    name: "Radfolio",
    tags: "Personal Portfolio",
    category: "Portfolio",
    image: radfolioImg,
    link: "https://radyaar.framer.website",
  },
  {
    name: "Sprout Fetch",
    tags: "Image Gallery · Web",
    category: "Website",
    image: sproutFetchImg,
    link: "https://sprout-fetch-44130875.figma.site",
  },
  {
    name: "Appnigma",
    tags: "AI Product · Website",
    category: "Website",
    image: appnigmaImg,
    link: "https://appnigma.ai/",
  },
  {
    name: "New York State Parks Proposal",
    tags: "Concept Website",
    category: "Website",
    image: parksImg,
    link: "https://parks.framer.website/",
  },
  {
    name: "Layers Profile",
    tags: "Design Community",
    category: "Profile",
    image: layersImg,
    link: "https://layers.to/radyaar",
  },
  {
    name: "Dribbble Shots",
    tags: "Design Showcase",
    category: "Profile",
    image: dribbbleImg,
    link: "https://dribbble.com/radyaar",
  },
];

function HeroPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const [lens, setLens] = useState({ x: 50, y: 50, active: false });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setLens({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  };

  const revealMask = `radial-gradient(circle 300px at ${lens.x}% ${lens.y}%, #000 0%, #000 55%, transparent 78%)`;
  const cutoutMask = `radial-gradient(circle 300px at ${lens.x}% ${lens.y}%, transparent 0%, transparent 55%, #000 78%)`;

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setLens((l) => ({ ...l, active: false }))}
      className="relative w-full cursor-crosshair"
    >
      <img
        src={heroImage}
        alt="Radya Rahman portrait"
        className="block w-full h-auto"
        style={
          lens.active
            ? { WebkitMaskImage: cutoutMask, maskImage: cutoutMask }
            : undefined
        }
      />
      <img
        src={heroBeskapImage}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-[4px] w-full h-auto pointer-events-none"
        style={{
          opacity: lens.active ? 1 : 0,
          WebkitMaskImage: revealMask,
          maskImage: revealMask,
        }}
      />
    </div>
  );
}

function useJakartaTime() {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Jakarta", hour: "numeric", minute: "2-digit", hour12: true })
  );
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Jakarta", hour: "numeric", minute: "2-digit", hour12: true }));
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function HeroSection() {
  const jakartaTime = useJakartaTime();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section ref={sectionRef} className="bg-[#151515] relative overflow-hidden min-h-[900px] md:min-h-[900px]">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[10%] h-[120%] pointer-events-none">
        <ImageWithFallback
          src={heroBgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>
      <div className="relative max-w-[1442px] mx-auto px-[24px] min-[768px]:px-[48px] min-[1024px]:px-[64px] min-[1200px]:px-[120px] py-[120px] md:py-0 md:h-[900px] flex items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-[40px] items-start w-full md:w-[590px] relative z-10"
        >
          <div className="flex flex-col gap-[24px] w-full">
            <motion.div variants={item} className="inline-flex items-center gap-[8px] self-start rounded-full border border-white/20 bg-white/5 px-[12px] py-[6px]">
              <span className="relative flex size-[6px]">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex size-[6px] rounded-full bg-green-400" />
              </span>
              <span className="text-[12px] text-white/80 tracking-[0.2px]">3 Seats Available · Q3 2026</span>
            </motion.div>
            <motion.h1 variants={item} className="text-white text-[36px] md:text-[56px] tracking-[0.48px] leading-[1.1]">
              A Product Designer <br />
              &amp; Researcher
            </motion.h1>
            <motion.p variants={item} className="text-[#dfdfdf] text-[16px] leading-[1.5] tracking-[-0.16px]">
              Radya Amirur is a product designer and researcher with 4 years of experience in iOS and web interfaces. Proficient in tools like Figma, Adobe Suites, Sketch, and Framer, he combines design with research and usability testing. Radya has shipped apps featured on the App Store via Apple Developer Academy 2023 and won the WWDC23 Swift Student Challenge. He now uses AI tools like Claude Code and Figma AI to enhance creativity and efficiency.
            </motion.p>
            <motion.ul variants={item} className="list-disc pl-[20px] text-white text-[16px] leading-[1.5] tracking-[-0.16px]">
              <li className="mb-[4px]">
                <span className="font-bold">Location </span>
                : <span className="text-[#dfdfdf]">Surakarta, Indonesia (+62)</span>
              </li>
              <li>
                <span className="font-bold">Time Zone </span>
                : <span className="text-[#dfdfdf]">Jakarta (GMT+7) — </span><span className="text-[#dfdfdf] font-mono tabular-nums">{jakartaTime}</span>
              </li>
            </motion.ul>
          </div>

          <motion.div variants={item} className="flex flex-wrap gap-[12px] max-[400px]:flex-col max-[400px]:w-full">
            <FancyLinkButton href="#contact" className="max-[400px]:w-full max-[400px]:justify-center">
              <Calendar className="size-[16px]" />
              Let's Collaborate
            </FancyLinkButton>
            <a
              href="https://drive.google.com/uc?export=download&id=1JGQatYz2f3qvOLdgpjrvcrAZfqYghyLN"
              download="Radya-Rahman-Resume.pdf"
              className="inline-flex items-center justify-center gap-[8px] rounded-[10px] px-[16px] py-[10px] text-[14px] font-normal text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors max-[400px]:w-full"
            >
              <FileText className="size-[16px]" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: portraitY }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="hidden min-[1200px]:block absolute right-[120px] bottom-0 w-[45vw] max-w-[760px]"
        >
          <HeroPortrait />
        </motion.div>
      </div>
    </section>
  );
}

function CompanyExperience() {
  return (
    <section className="bg-[#171717] py-[60px] md:py-[80px] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '200px 200px' }} />
      <div className="relative max-w-[1442px] mx-auto px-[24px] min-[768px]:px-[48px] min-[1024px]:px-[64px] min-[1200px]:px-[120px] flex flex-col min-[1200px]:flex-row min-[1200px]:items-center min-[1200px]:justify-between gap-[40px]">
        <div className="flex flex-col gap-[16px] max-w-[603px]">
          <h2 className="text-white text-[24px] md:text-[32px] tracking-[0.32px] leading-[1.1]">
            Got experience <br />
            with all kinds of companies
          </h2>
          <p className="text-[#dfdfdf] text-[16px] leading-[1.5] tracking-[-0.16px]">
            Startups, big companies, overseas agencies, working on existing stuff, or building from scratch
          </p>
        </div>
        <div className="w-full min-[1200px]:flex-1 min-[1200px]:max-w-[640px]">
          <LogoMarquee />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={sectionRef} id="contact" className="bg-[#171717] py-[60px] md:py-[80px] relative overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[15%] h-[130%] pointer-events-none">
        <ImageWithFallback
          src={ctaBgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>
      <div className="relative max-w-[1442px] mx-auto px-[24px] min-[768px]:px-[48px] min-[1024px]:px-[64px] min-[1200px]:px-[120px] flex flex-col gap-[60px] md:gap-[80px] items-center">
        <h2 className="text-white text-[24px] md:text-[32px] tracking-[0.32px] leading-[1.1] text-center">
          Ready to build great product together
        </h2>

        <div className="w-full max-w-[1038px]">
          <CalEmbed />
        </div>

        <div className="flex flex-col md:flex-row gap-[24px] md:gap-[80px] opacity-70">
          <div className="flex gap-[16px] items-center">
            <div className="size-[24px]">
              <svg viewBox="0 0 24 24" fill="none">
                <path d={svgPaths.p2ccee40} fill="white" />
              </svg>
            </div>
            <a
              href="https://www.linkedin.com/in/radya13rahman/"
              target="_blank"
              rel="noreferrer"
              className="text-[#dfdfdf] text-[16px] tracking-[-0.16px] underline"
            >
              Radya Amirur Rahman
            </a>
          </div>
          <div className="flex gap-[16px] items-center">
            <div className="size-[24px]">
              <svg viewBox="0 0 24 24" fill="none">
                <path d={svgPaths.p7d25a00} fill="white" fillOpacity="0.2" />
                <path d={svgPaths.p3a84ae00} fill="white" fillOpacity="0.5" />
                <path d={svgPaths.p3f45c600} fill="white" fillOpacity="0.8" />
              </svg>
            </div>
            <a
              href="https://layers.to/radyaar"
              target="_blank"
              rel="noreferrer"
              className="text-[#dfdfdf] text-[16px] tracking-[-0.16px] underline"
            >
              https://layers.to/radyaar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#151515] w-full">
      <ScrollProgress />
      <HeroSection />
      <CompanyExperience />
      <PortfolioGallery projects={projects} />
      <Testimonials />
      <ContactSection />
      <MusicPlayer />
    </div>
  );
}
