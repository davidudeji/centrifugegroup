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
import optimaxDashboard from "../../assets/optimax sales dashboard.PNG";

const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const HeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">("desktop");

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
      className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#F1F5F9] text-[#0B1F33] pt-10 sm:pt-14 lg:pt-16 pb-14 lg:pb-20 border-b border-[#E2E8F0]"
    >
      {/* Restrained Architectural Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(#0B1F33_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-gradient-to-bl from-[#008DDA]/10 via-[#E87916]/5 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[46%_54%] xl:grid-cols-[45%_55%] lg:gap-14 xl:gap-16">
          
          {/* Left Column: Text & CTAs */}
          <div className="flex flex-col text-left max-w-[620px] lg:max-w-none">
            
            {/* Eyebrow Label */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={eyebrowVariants}
              className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-[#0B1F33]/15 bg-[#0B1F33]/[0.03] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0B1F33]"
            >
              <span
                className="h-2 w-2 rounded-full bg-[#E87916] ring-4 ring-[#E87916]/20"
                aria-hidden="true"
              />
              <span>Digital Solutions for Complex Operations</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={headlineVariants}
              className="text-[36px] font-extrabold leading-[1.08] tracking-tight text-[#0B1F33] sm:text-[46px] md:text-[52px] lg:text-[56px] xl:text-[62px]"
            >
              Technology that moves your business forward.
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial="hidden"
              animate="visible"
              variants={paragraphVariants}
              className="mt-6 text-[16px] leading-[1.65] text-[#475569] sm:text-[18px] lg:text-[19px] max-w-[560px]"
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
                className="group inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#E87916] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(232,121,22,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D0690E] hover:shadow-[0_14px_30px_rgba(232,121,22,0.34)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E87916]"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-[#CBD5E1] bg-white px-6 py-3.5 text-[15px] font-semibold text-[#0B1F33] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0B1F33]/40 hover:bg-slate-50 hover:shadow-sm active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1F33]"
              >
                <span>Explore Solutions</span>
              </Link>
            </motion.div>

            {/* Micro Credential Pills */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={buttonsVariants}
              className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-5 text-[13px] font-medium text-[#64748B]"
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
                <Sparkles className="h-4 w-4 text-[#16A34A]" />
                <span>Since 2007</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual (Optimax ERP Screenshot in Restrained Browser Frame) */}
          <div className="relative flex justify-center lg:justify-end w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="relative w-full max-w-[700px] lg:max-w-none group"
            >
              {/* Restrained Backdrop Shadow Pill */}
              <div
                className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-[#0B1F33]/5 via-transparent to-[#E87916]/10 blur-xl opacity-75"
                aria-hidden="true"
              />

              {/* Browser / Application Frame */}
              <div className="relative rounded-2xl border border-slate-200/90 bg-white shadow-[0_24px_50px_rgba(11,31,51,0.08),0_6px_16px_rgba(11,31,51,0.04)] overflow-hidden transition-all duration-300 group-hover:shadow-[0_28px_60px_rgba(11,31,51,0.12)]">
                
                {/* Title Bar */}
                <div className="flex items-center justify-between border-b border-slate-200/90 bg-slate-50/95 px-4 py-2.5 backdrop-blur-xs">
                  {/* Window Controls */}
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/80" />
                  </div>

                  {/* Browser Address Bar / Context Pill */}
                  <div className="flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white px-3 py-1 text-[11px] font-medium text-slate-600 shadow-2xs">
                    <Lock className="h-3 w-3 text-emerald-600" aria-hidden="true" />
                    <span className="font-mono text-slate-500">optimax.centrifugegroup.com</span>
                    <span className="text-slate-300">/</span>
                    <span className="text-slate-700">sales-command</span>
                  </div>

                  {/* Live Status Badge */}
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="hidden sm:inline text-[11px]">Live System</span>
                  </div>
                </div>

                {/* Main Screenshot Container (Stable aspect ratio prevents layout shifts) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={optimaxDashboard}
                    alt="OptimaX ERP Suite Sales Command Center dashboard showing enterprise revenue analytics, live quotes, and operational workflows"
                    width={1280}
                    height={800}
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover object-top select-none transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>
              </div>

              {/* Optional Dashboard Detail Badge (Section 6.E) */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={badgeVariants}
                className="absolute -bottom-5 left-4 sm:-bottom-6 sm:left-6 z-10 flex items-center gap-3 rounded-xl border border-slate-200/90 bg-white/95 px-4 py-2.5 shadow-[0_12px_28px_rgba(11,31,51,0.1)] backdrop-blur-md"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E87916]/10 text-[#E87916]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="text-[12px] font-bold text-[#0B1F33]">
                    OptimaX ERP Suite
                  </div>
                  <div className="text-[11px] text-[#64748B]">
                    Multi-Entity Operations & Revenue Engine
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Coordinated Trust Credentials Strip */}
        <div className="mt-14 sm:mt-16 border-t border-[#E2E8F0] pt-6 flex flex-col gap-3 text-sm text-[#64748B] md:flex-row md:items-center md:justify-between">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B1F33]">
            Enterprise Technology Partner
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[13px] text-[#64748B]">
            <span>Enterprise Software</span>
            <span className="h-1 w-1 rounded-full bg-[#E87916]" aria-hidden="true" />
            <span>Healthcare Informatics</span>
            <span className="h-1 w-1 rounded-full bg-[#008DDA]" aria-hidden="true" />
            <span>Logistics Systems</span>
            <span className="h-1 w-1 rounded-full bg-[#E87916]" aria-hidden="true" />
            <span>Cloud & SaaS Platforms</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" aria-hidden="true" />
            <span className="hidden sm:block font-semibold text-[#0B1F33]">Since 2007</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
