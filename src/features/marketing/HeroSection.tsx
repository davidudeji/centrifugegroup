import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const makeVariant = (
  x: number,
  y: number,
  delay: number,
  duration: number,
  reduced: boolean,
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

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative isolate overflow-hidden"
      style={{
        minHeight: "100svh",
        backgroundImage: "url('/merged section bg.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ── Readability overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: "linear-gradient(180deg, rgba(4,15,35,0.62) 0%, rgba(4,15,35,0.32) 45%, rgba(4,15,35,0.72) 100%)",
        }}
      />

      {/* ── Subtle grid texture ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage: "radial-gradient(ellipse 100% 80% at 50% 0%, black 30%, transparent 100%)",
        }}
      />

      {/* ── Radial accent glow top-right ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          zIndex: 1,
          top: "-20%",
          right: "-8%",
          width: "55%",
          height: "120%",
          background: "radial-gradient(ellipse at top right, rgba(22,119,210,0.22) 0%, transparent 65%)",
        }}
      />

      {/* ── Hero content ── */}
      <div
        className="relative text-white"
        style={{ zIndex: 2 }}
      >
        <div
          className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            minHeight: "100svh",
            paddingTop: "120px",
            paddingBottom: "80px",
          }}
        >
          <div className="flex flex-col items-start max-w-[680px]">


            <motion.div
              initial={prefersReduced ? false : "hidden"}
              animate="visible"
              variants={subheadV}
              className="mb-7 inline-flex items-center gap-2.5 rounded- px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FDBA74]"
            >

              Centrifuge Group · IT Consulting and Software Solutions
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={prefersReduced ? false : "hidden"}
              animate="visible"
              variants={headlineV}
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                fontWeight: 800,
                color: "#ffffff",
                maxWidth: "900px",
              }}
            >
              Deliver solutions that makes your business{" "}
              <span style={{ color: "#FDBA74" }}>grow.</span>
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
              style={{
                maxWidth: "640px",
                fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                lineHeight: 1.8,
              }}
              className="mt-4 text-slate-200/80"
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
                className="group inline-flex min-h-[52px] items-center gap-2.5 rounded-[6px] bg-[#F28C28] px-7 py-3.5 text-[1rem] font-semibold text-[#102A43] transition-all duration-200 hover:bg-[#D96F12] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F28C28] shadow-[0_8px_24px_rgba(242,140,40,0.30)]"
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
              className="mt-10 flex flex-wrap items-stretch gap-6 border-t border-white/15 pt-8"
            >
              {METRICS.map(({ value, label }, i) => (
                <React.Fragment key={label}>
                  {i > 0 && (
                    <div className="w-px self-stretch bg-white/15" aria-hidden="true" />
                  )}
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[1.875rem] font-extrabold leading-none tracking-[-0.04em] text-white">
                      {value}
                    </span>
                    <span className="text-[0.8125rem] text-slate-300/75 leading-tight">{label}</span>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>

            {/* Capability tags */}
            <motion.div
              initial={prefersReduced ? false : "hidden"}
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { delay: prefersReduced ? 0 : 0.6, duration: 0.5 },
                },
              }}
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
