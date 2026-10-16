import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "../../assets/hero-image.jpg";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const makeVariant = (
  x: number,
  y: number,
  delay: number,
  duration: number,
  reduced: boolean
): Variants => ({
  hidden: { opacity: 0, x: reduced ? 0 : x, y: reduced ? 0 : y },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: reduced ? 0 : duration, delay: reduced ? 0 : delay, ease: EASE },
  },
});

const CREDENTIALS = [
  "Enterprise Software",
  "Healthcare Informatics",
  "Logistics Systems",
  "Cloud & SaaS",
];

const METRICS = [
  { value: "17+", label: "Years delivering" },
  { value: "10+", label: "Federal institutions" },
  { value: "6", label: "Sectors served" },
];

export const HeroSection: React.FC = () => {
  const prefersReduced = Boolean(useReducedMotion());

  const eyebrowV = makeVariant(-20, 0, 0, 0.55, prefersReduced);
  const headlineV = makeVariant(-28, 0, 0.08, 0.75, prefersReduced);
  const subheadV = makeVariant(-20, 0, 0.2, 0.65, prefersReduced);
  const bodyV = makeVariant(-16, 0, 0.3, 0.65, prefersReduced);
  const ctaV = makeVariant(0, 14, 0.4, 0.55, prefersReduced);
  const metricsV = makeVariant(0, 10, 0.5, 0.5, prefersReduced);
  const imageV = makeVariant(32, 0, 0.14, 0.9, prefersReduced);

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden text-white"
      style={{ background: "linear-gradient(145deg, #073B70 0%, #0756A5 50%, #064A8C 100%)" }}
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage: "radial-gradient(ellipse 100% 85% at 50% 50%, black 20%, transparent 100%)",
        }}
      />
      {/* Radial accent */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "-15%",
          right: "-5%",
          width: "60%",
          height: "130%",
          background: "radial-gradient(ellipse at top right, rgba(22,119,210,0.28) 0%, transparent 65%)",
        }}
      />
      {/* Bottom gradient fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(7,59,112,0.15))" }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28 xl:gap-24">

          {/* ── Left Column ── */}
          <div className="flex flex-col items-start max-w-[600px]">
            {/* Eyebrow */}
            <motion.div
              initial={prefersReduced ? false : "hidden"}
              animate="visible"
              variants={eyebrowV}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/8 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FDBA74]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#F28C28] shadow-[0_0_6px_rgba(242,140,40,0.7)]" aria-hidden="true" />
              Centrifuge Group · Since 2007
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={prefersReduced ? false : "hidden"}
              animate="visible"
              variants={headlineV}
              className="text-[2.75rem] font-extrabold leading-[1.03] tracking-[-0.05em] text-white sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem]"
            >
              Technology that moves your business{" "}
              <span className="text-[#FDBA74]">forward.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={prefersReduced ? false : "hidden"}
              animate="visible"
              variants={subheadV}
              className="mt-5 text-[1.125rem] font-semibold leading-snug text-white/90"
            >
              From complex challenges to connected digital solutions.
            </motion.p>

            {/* Body copy */}
            <motion.p
              initial={prefersReduced ? false : "hidden"}
              animate="visible"
              variants={bodyV}
              className="mt-4 max-w-[520px] text-[1rem] leading-[1.8] text-slate-200/75"
            >
              We design and develop tailored software solutions that help organizations
              simplify operations, connect systems, and create better experiences —
              from enterprise applications to integrations and cloud platforms.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={prefersReduced ? false : "hidden"}
              animate="visible"
              variants={ctaV}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/solutions"
                id="hero-primary-cta"
                className="group inline-flex min-h-[52px] items-center gap-2.5 rounded-[6px] bg-[#F28C28] px-7 py-3.5 text-[1rem] font-semibold text-[#102A43] transition-all duration-200 hover:bg-[#D96F12] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F28C28] shadow-[0_8px_24px_rgba(242,140,40,0.3)]"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                id="hero-secondary-cta"
                className="inline-flex min-h-[52px] items-center gap-2 rounded-[6px] border border-white/30 bg-transparent px-7 py-3.5 text-[1rem] font-semibold text-white transition-all duration-200 hover:border-white/55 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Discuss Your Project</span>
              </Link>
            </motion.div>

            {/* Metrics strip */}
            <motion.div
              initial={prefersReduced ? false : "hidden"}
              animate="visible"
              variants={metricsV}
              className="mt-10 flex flex-wrap items-stretch gap-6 border-t border-white/12 pt-8"
            >
              {METRICS.map(({ value, label }, i) => (
                <React.Fragment key={label}>
                  {i > 0 && (
                    <div className="w-px self-stretch bg-white/12" aria-hidden="true" />
                  )}
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[1.875rem] font-extrabold leading-none tracking-[-0.04em] text-white">{value}</span>
                    <span className="text-[0.8125rem] text-slate-300/75 leading-tight">{label}</span>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>

            {/* Capability tags */}
            <motion.div
              initial={prefersReduced ? false : "hidden"}
              animate="visible"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: prefersReduced ? 0 : 0.6, duration: 0.5 } } }}
              className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.8125rem] text-slate-300/65"
            >
              {CREDENTIALS.map((tag, i) => (
                <React.Fragment key={tag}>
                  {i > 0 && (
                    <span className="h-1 w-1 rounded-full bg-[#F28C28]/50" aria-hidden="true" />
                  )}
                  <span>{tag}</span>
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* ── Right Column: Image ── */}
          <motion.div
            initial={prefersReduced ? false : "hidden"}
            animate="visible"
            variants={imageV}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[640px]">
              {/* Glow behind image */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[40px] opacity-35 blur-3xl"
                style={{ background: "radial-gradient(ellipse, rgba(22,119,210,0.6) 0%, transparent 70%)" }}
              />

              <div className="relative overflow-hidden rounded-[18px] border border-white/18 shadow-[0_40px_80px_rgba(5,15,40,0.5)]">


                <div className="aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={heroImage}
                    alt="Centrifuge Group enterprise software engineering and digital solutions"
                    width={1280}
                    height={800}
                    loading="eager"
                    decoding="async"
                    className="h-full w-full select-none object-cover object-center"
                  />
                </div>
              </div>

              {/* Floating badge — trusted */}


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
