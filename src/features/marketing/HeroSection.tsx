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
      className="relative overflow-hidden bg-[#073B70] text-white pt-10 sm:pt-14 lg:pt-16 pb-14 lg:pb-20 border-b border-white/10"
    >
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0756A5] via-[#073B70] to-[#102A43]" />
        <div className="hero-grid-overlay opacity-20" />
      </div>

      {/* ─── Hero Content (2-Column Composition) ─── */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid items-center gap-12 py-4 sm:py-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14 lg:py-8 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] xl:gap-16">

          {/* Left Column: Text & CTAs */}
          <div className="flex flex-col text-left max-w-[620px] lg:max-w-none">
            <p className="mb-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#FDBA74]">
              <span className="h-2 w-2 rounded-full bg-[#F28C28]" aria-hidden="true" />
              CENTRIFUGE GROUP
            </p>

            {/* Headline */}
            <motion.h1
              initial={isReduced ? false : 'hidden'}
              animate="visible"
              variants={headlineVariants}
              className="marketing-hero__heading font-extrabold text-white drop-shadow-sm"
            >
              Technology that moves your business forward.
            </motion.h1>

            <motion.p
              initial={isReduced ? false : 'hidden'}
              animate="visible"
              variants={paragraphVariants}
              className="mt-5 text-[20px] font-semibold leading-snug text-white sm:text-[22px]"
            >
              From complex challenges to connected digital solutions.
            </motion.p>

            <motion.p
              initial={isReduced ? false : 'hidden'}
              animate="visible"
              variants={paragraphVariants}
              className="mt-4 max-w-[560px] text-[16px] leading-[1.7] text-slate-200 sm:text-[17px] lg:text-[18px]"
            >
              We design and develop tailored software solutions that help
              organizations simplify operations, connect systems, and create
              better experiences. From enterprise applications to integrations
              and cloud platforms, we turn complex requirements into technology
              built for growth.
            </motion.p>

            {/* Primary & Secondary CTA Buttons */}
            <motion.div
              initial={isReduced ? false : 'hidden'}
              animate="visible"
              variants={buttonsVariants}
              className="mt-8 flex flex-wrap items-center gap-4 sm:gap-4"
            >
              <Link
                to="/solutions"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] bg-[#F28C28] px-6 py-3.5 text-[15px] font-semibold text-[#102A43] transition-colors duration-200 hover:bg-[#D96F12] hover:text-white active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F28C28]"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border border-white/45 bg-transparent px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Discuss Your Project</span>
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
              <div className="relative overflow-hidden rounded-[8px] border border-white/25 bg-white shadow-[0_24px_50px_rgba(16,42,67,0.3)]">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={heroImage}
                    alt="Centrifuge Group enterprise software engineering, cloud systems, and digital solutions architecture"
                    width={1280}
                    height={800}
                    loading="eager"
                    decoding="async"
                    className="h-full w-full select-none object-cover object-center"
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
            <span className="h-1 w-1 rounded-full bg-[#F28C28]" aria-hidden="true" />
            <span>Healthcare Informatics</span>
            <span className="h-1 w-1 rounded-full bg-[#F28C28]" aria-hidden="true" />
            <span>Logistics Systems</span>
            <span className="h-1 w-1 rounded-full bg-[#F28C28]" aria-hidden="true" />
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
