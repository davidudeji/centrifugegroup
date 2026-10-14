import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import heroImage from "../../assets/hero-image.jpg";

const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const HeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const isReduced = Boolean(prefersReducedMotion);
  const headlineX = isReduced ? 0 : -36;
  const paragraphX = isReduced ? 0 : -24;
  const buttonsY = isReduced ? 0 : 16;

  const headlineVariants: Variants = {
    hidden: {
      opacity: 0,
      x: headlineX,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: isReduced ? 0 : 0.7,
        delay: 0,
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
        duration: isReduced ? 0 : 0.75,
        delay: isReduced ? 0 : 0.1,
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
        duration: isReduced ? 0 : 0.6,
        delay: isReduced ? 0 : 0.2,
        ease: EASING,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: isReduced ? 1 : 0,
      x: isReduced ? 0 : 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: isReduced ? 0 : 0.85,
        delay: isReduced ? 0 : 0.1,
        ease: EASING,
      },
    },
  };

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-[#071521] text-white pt-10 sm:pt-14 lg:pt-16 pb-14 lg:pb-20 border-b border-white/10"
    >
      {/* ─── Ambient High-Contrast Enterprise Backdrop ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Base dark navy protective gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071521] via-[#0B1F33] to-[#071521]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_35%,rgba(11,31,51,0.95)_0%,rgba(7,21,33,0.98)_70%)]" />

        {/* Subtle architectural grid overlay */}
        <div className="hero-grid-overlay opacity-30" />

        {/* Brand Glow Accents */}
        <div className="pointer-events-none absolute -top-36 right-1/4 h-[440px] w-[440px] rounded-full bg-gradient-to-bl from-[#008DDA]/20 via-[#E87916]/10 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-10 h-[360px] w-[360px] rounded-full bg-[#E87916]/12 blur-3xl" />
      </div>

      {/* ─── Hero Content (2-Column Composition) ─── */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid items-center gap-12 py-4 sm:py-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14 lg:py-8 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] xl:gap-16">

          {/* Left Column: Text & CTAs */}
          <div className="flex flex-col text-left max-w-[620px] lg:max-w-none">



            {/* Headline */}
            <motion.h1
              initial={isReduced ? false : 'hidden'}
              animate="visible"
              variants={headlineVariants}
              className="marketing-hero__heading font-extrabold text-white drop-shadow-sm"
            >
              Technology that moves your business forward.
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={isReduced ? false : 'hidden'}
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
              initial={isReduced ? false : 'hidden'}
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


          </div>

          {/* Right Column: Hero Image in Responsive Application Frame */}
          <div className="relative flex justify-center lg:justify-end w-full">
            <motion.div
              initial={isReduced ? false : 'hidden'}
              animate="visible"
              variants={imageVariants}
              className="relative w-full max-w-[660px] lg:max-w-none group"
            >
              {/* Restrained Backdrop Shadow Pill */}
              <div
                className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#008DDA]/25 via-transparent to-[#E87916]/25 blur-xl opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />

              {/* Browser / Application Frame */}
              <div className="relative rounded-2xl border border-white/20 bg-slate-900/60 shadow-[0_24px_50px_rgba(0,0,0,0.4),0_6px_16px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-300 group-hover:shadow-[0_28px_60px_rgba(0,0,0,0.55)] backdrop-blur-md">

                {/* Title Bar */}
                <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/80 px-4 py-2.5 backdrop-blur-md">
                </div>

                {/* Main Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
