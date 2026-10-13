import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  Layers,
  Sparkles,
} from "lucide-react";
import digitalSolutionThatScale from "../../assets/digital solution that scale.avif";
import digitalSolution1 from "../../assets/digital solution 1.avif";

const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

const HERO_BACKGROUNDS = [
  {
    id: "scale",
    image: digitalSolutionThatScale,
    title: "Connected Enterprise Infrastructure",
  },
  {
    id: "architecture",
    image: digitalSolution1,
    title: "High-Scale Digital Platforms",
  },
];

export const HeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDevice("mobile");
      } else if (width < 1024) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth periodic background transition
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % HERO_BACKGROUNDS.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  const isReduced = Boolean(prefersReducedMotion);
  const headlineX = isReduced ? 0 : device === "mobile" ? -24 : device === "tablet" ? -40 : -60;
  const paragraphX = isReduced ? 0 : device === "mobile" ? -16 : device === "tablet" ? -28 : -40;
  const buttonsY = isReduced ? 0 : device === "mobile" ? 12 : device === "tablet" ? 16 : 20;

  const eyebrowVariants: Variants = {
    hidden: {
      opacity: 0,
      y: isReduced ? 0 : -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isReduced ? 0.2 : 0.6,
        delay: 0.05,
        ease: EASING,
      },
    },
  };

  const headlineVariants: Variants = {
    hidden: {
      opacity: 0,
      x: headlineX,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: isReduced ? 0.2 : device === "mobile" ? 0.75 : 0.85,
        delay: 0.1,
        ease: EASING,
      },
    },
  };

  const paragraphVariants: Variants = {
    hidden: {
      opacity: 0,
      x: paragraphX,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: isReduced ? 0.2 : device === "mobile" ? 0.7 : 0.8,
        delay: 0.25,
        ease: EASING,
      },
    },
  };

  const buttonsVariants: Variants = {
    hidden: {
      opacity: 0,
      y: buttonsY,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isReduced ? 0.2 : device === "mobile" ? 0.55 : 0.65,
        delay: 0.45,
        ease: EASING,
      },
    },
  };

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-[#071521] text-white pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24 border-b border-white/10"
    >
      {/* ─── Smoothly Transitioning Digital Solution Background Images ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {HERO_BACKGROUNDS.map((bg, index) => (
          <div
            key={bg.id}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
              currentBgIndex === index
                ? "opacity-40 scale-100 filter brightness-95"
                : "opacity-0 scale-105 pointer-events-none"
            }`}
            style={{ backgroundImage: `url("${bg.image}")` }}
          />
        ))}

        {/* Layer 1: Protective multi-stop dark navy gradient guaranteeing clear AAA text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071521]/96 via-[#0B1F33]/92 to-[#071521]/80" />

        {/* Layer 2: Targeted radial vignette focused over the left text area */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_45%,rgba(7,21,33,0.95)_0%,rgba(11,31,51,0.88)_55%,rgba(7,21,33,0.78)_100%)]" />

        {/* Layer 3: Subtle architectural grid overlay */}
        <div className="hero-grid-overlay opacity-25" />

        {/* Layer 4: Ambient glow accents */}
        <div className="pointer-events-none absolute -top-36 right-1/4 h-[440px] w-[440px] rounded-full bg-gradient-to-bl from-[#008DDA]/15 via-[#E87916]/10 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-10 h-[360px] w-[360px] rounded-full bg-[#E87916]/10 blur-3xl" />
      </div>

      {/* ─── Hero Content (Focused, Premium, High Legibility) ─── */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[880px] py-6 sm:py-10 lg:py-14">
          
          {/* Eyebrow Label */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={eyebrowVariants}
            className="mb-5 inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FDBA74] backdrop-blur-md shadow-xs"
          >
            <span
              className="h-2 w-2 rounded-full bg-[#E87916] ring-4 ring-[#E87916]/30"
              aria-hidden="true"
            />
            <span>Digital Solutions for Complex Operations</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={headlineVariants}
            className="text-[38px] font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-sm sm:text-[52px] md:text-[60px] lg:text-[68px] xl:text-[76px]"
          >
            Technology that moves your business forward.
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
            className="mt-6 text-[17px] leading-[1.7] text-slate-200 sm:text-[19px] lg:text-[21px] max-w-[720px] drop-shadow-2xs"
          >
            We design and deliver enterprise software, healthcare platforms,
            logistics systems and digital solutions that solve complex
            operational problems.
          </motion.p>

          {/* Primary & Secondary CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonsVariants}
            className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
          >
            {/* Primary CTA (Logo-aligned accent color: #E87916) */}
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#E87916] px-7 py-4 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(232,121,22,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D0690E] hover:shadow-[0_14px_30px_rgba(232,121,22,0.45)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E87916]"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/solutions"
              className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-white/25 bg-white/10 backdrop-blur-md px-7 py-4 text-[15px] font-semibold text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 hover:shadow-sm active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>Explore Solutions</span>
            </Link>
          </motion.div>

          {/* Micro Credential Pills */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonsVariants}
            className="mt-10 flex flex-wrap items-center gap-y-2 gap-x-6 text-[13px] font-medium text-slate-300"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#E87916]" />
              <span>Enterprise Grade</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#008DDA]" />
              <span>Mission-Critical Systems</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#10B981]" />
              <span>Since 2007</span>
            </div>
          </motion.div>
        </div>

        {/* Coordinated Trust Credentials Strip */}
        <div className="mt-12 sm:mt-16 border-t border-white/15 pt-6 flex flex-col gap-4 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
            Enterprise Technology Partner
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[13px] text-slate-300">
            <span>Enterprise Software</span>
            <span className="h-1 w-1 rounded-full bg-[#E87916]" aria-hidden="true" />
            <span>Healthcare Informatics</span>
            <span className="h-1 w-1 rounded-full bg-[#008DDA]" aria-hidden="true" />
            <span>Logistics Systems</span>
            <span className="h-1 w-1 rounded-full bg-[#E87916]" aria-hidden="true" />
            <span>Cloud & SaaS Platforms</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-500 sm:block" aria-hidden="true" />
            <span className="hidden sm:block font-semibold text-white">Since 2007</span>
          </div>

          {/* Background Slide Indicators */}
          <div className="flex items-center gap-2 pt-1 md:pt-0" aria-label="Hero background controls">
            {HERO_BACKGROUNDS.map((bg, idx) => (
              <button
                key={bg.id}
                type="button"
                onClick={() => setCurrentBgIndex(idx)}
                title={bg.title}
                aria-label={`Switch to ${bg.title}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentBgIndex === idx
                    ? "w-6 bg-[#E87916]"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
