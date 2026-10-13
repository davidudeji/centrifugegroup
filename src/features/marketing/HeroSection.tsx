import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  Lock,
  Layers,
  Sparkles,
} from "lucide-react";
import heroImage from "../../assets/hero image.jpg";
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
  const imageX = isReduced ? 0 : device === "mobile" ? 24 : device === "tablet" ? 45 : 70;
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

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      x: imageX,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: isReduced ? 0.2 : device === "mobile" ? 0.85 : 1.0,
        delay: 0.15,
        ease: EASING,
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: {
      opacity: 0,
      y: isReduced ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isReduced ? 0.2 : 0.55,
        delay: 0.7,
        ease: EASING,
      },
    },
  };

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-[#071521] text-white pt-10 sm:pt-14 lg:pt-16 pb-14 lg:pb-20 border-b border-white/10"
    >
      {/* ─── Smoothly Transitioning Digital Solution Background Images ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {HERO_BACKGROUNDS.map((bg, index) => (
          <div
            key={bg.id}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
              currentBgIndex === index
                ? "opacity-35 scale-100 filter brightness-95"
                : "opacity-0 scale-105 pointer-events-none"
            }`}
            style={{ backgroundImage: `url("${bg.image}")` }}
          />
        ))}

        {/* Layer 1: Protective multi-stop dark navy gradient guaranteeing clear AAA text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071521]/96 via-[#0B1F33]/90 to-[#071521]/80" />

        {/* Layer 2: Targeted radial vignette focused over the left text column */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,rgba(7,21,33,0.96)_0%,rgba(11,31,51,0.88)_55%,rgba(7,21,33,0.75)_100%)]" />

        {/* Layer 3: Subtle architectural grid overlay */}
        <div className="hero-grid-overlay opacity-25" />

        {/* Layer 4: Ambient glow accents */}
        <div className="pointer-events-none absolute -top-36 right-1/4 h-[440px] w-[440px] rounded-full bg-gradient-to-bl from-[#008DDA]/15 via-[#E87916]/10 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-10 h-[360px] w-[360px] rounded-full bg-[#E87916]/10 blur-3xl" />
      </div>

      {/* ─── Hero Content ─── */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[46%_54%] xl:grid-cols-[45%_55%] lg:gap-14 xl:gap-16">
          
          {/* Left Column: Text & CTAs */}
          <div className="flex flex-col text-left max-w-[620px] lg:max-w-none">
            
            {/* Eyebrow Label */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={eyebrowVariants}
              className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FDBA74] backdrop-blur-md shadow-xs"
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
              className="text-[36px] font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-sm sm:text-[46px] md:text-[52px] lg:text-[56px] xl:text-[62px]"
            >
              Technology that moves your business forward.
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial="hidden"
              animate="visible"
              variants={paragraphVariants}
              className="mt-6 text-[16px] leading-[1.65] text-slate-200 sm:text-[18px] lg:text-[19px] max-w-[560px] drop-shadow-2xs"
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
              className="mt-8 flex flex-wrap items-center gap-4 sm:gap-4"
            >
              {/* Primary CTA (Logo-aligned accent color: #E87916) */}
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#E87916] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(232,121,22,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D0690E] hover:shadow-[0_14px_30px_rgba(232,121,22,0.45)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E87916]"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-white/25 bg-white/10 backdrop-blur-md px-6 py-3.5 text-[15px] font-semibold text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 hover:shadow-sm active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Explore Solutions</span>
              </Link>
            </motion.div>

            {/* Micro Credential Pills */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={buttonsVariants}
              className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-5 text-[13px] font-medium text-slate-300"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#E87916]" />
                <span>Enterprise Grade</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers className="h-4 w-4 text-[#008DDA]" />
                <span>Mission-Critical Systems</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-[#10B981]" />
                <span>Since 2007</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual (Hero Image in Restrained Application Frame) */}
          <div className="relative flex justify-center lg:justify-end w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="relative w-full max-w-[700px] lg:max-w-none group"
            >
              {/* Restrained Backdrop Shadow Pill */}
              <div
                className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-[#008DDA]/20 via-transparent to-[#E87916]/20 blur-xl opacity-75"
                aria-hidden="true"
              />

              {/* Browser / Application Frame */}
              <div className="relative rounded-2xl border border-white/15 bg-slate-900/40 shadow-[0_24px_50px_rgba(0,0,0,0.35),0_6px_16px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-300 group-hover:shadow-[0_28px_60px_rgba(0,0,0,0.45)] backdrop-blur-xs">
                
                {/* Title Bar */}
                <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/80 px-4 py-2.5 backdrop-blur-md">
                  {/* Window Controls */}
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/80" />
                  </div>

                  {/* Browser Address Bar / Context Pill */}
                  <div className="flex items-center gap-1.5 rounded-md border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-slate-200 shadow-2xs">
                    <Lock className="h-3 w-3 text-emerald-400" aria-hidden="true" />
                    <span className="font-mono text-slate-300">centrifugegroup.com</span>
                    <span className="text-slate-400">/</span>
                    <span className="text-white">solutions-architecture</span>
                  </div>

                  {/* Live Status Badge */}
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-300">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="hidden sm:inline text-[11px]">Active Production</span>
                  </div>
                </div>

                {/* Main Screenshot Container (Stable aspect ratio prevents layout shifts) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900/60">
                  <img
                    src={heroImage}
                    alt="Centrifuge Group enterprise software engineering, cloud systems, and digital solutions architecture"
                    width={1280}
                    height={800}
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover object-center select-none transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Optional Dashboard Detail Badge (Section 6.E) */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={badgeVariants}
                className="absolute -bottom-5 left-4 sm:-bottom-6 sm:left-6 z-10 flex items-center gap-3 rounded-xl border border-white/15 bg-[#0B1F33]/95 px-4 py-2.5 shadow-[0_14px_32px_rgba(0,0,0,0.35)] backdrop-blur-md"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E87916]/15 text-[#E87916]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="text-[12px] font-bold text-white">
                    Enterprise Digital Engineering
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Scalable Architecture & Secure Platforms
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Coordinated Trust Credentials Strip */}
        <div className="mt-14 sm:mt-16 border-t border-white/15 pt-6 flex flex-col gap-3 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
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
