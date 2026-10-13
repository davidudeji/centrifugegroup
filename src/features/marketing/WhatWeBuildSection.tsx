import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers3, Workflow, Cloud, Lock, ShieldCheck } from 'lucide-react'
import digitalSolutionThatScale from '../../assets/digital solution that scale.avif'
import digitalSolution1 from '../../assets/digital solution 1.avif'

const solutionImages = [
  {
    id: 'scale',
    src: digitalSolutionThatScale,
    alt: 'Engineering digital solutions that scale - Enterprise platform architecture',
    caption: 'Cloud Infrastructure & Microservices',
  },
  {
    id: 'solutions',
    src: digitalSolution1,
    alt: 'Engineering digital solutions that scale - Tailored digital solutions and system integrations',
    caption: 'Data Orchestration & API Gateways',
  },
]

const capabilityCards = [
  {
    title: 'Enterprise Software',
    text: 'Scalable digital platforms built around business operations.',
    icon: Layers3,
  },
  {
    title: 'Cloud & SaaS',
    text: 'Secure and scalable cloud solutions for modern organizations.',
    icon: Cloud,
  },
  {
    title: 'System Integration',
    text: 'Connect business systems and workflows seamlessly.',
    icon: Workflow,
  },
]

export const WhatWeBuildSection: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Smooth periodic transition between digital solution images
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % solutionImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="border-b border-[#E2E8F0] bg-[#F7F9FA] py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left Column: Heading, Description & CTA */}
          <div className="max-w-[560px]">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0B1F33]/15 bg-[#0B1F33]/[0.03] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0B1F33]">
              <span className="h-2 w-2 rounded-full bg-[#E87916] ring-4 ring-[#E87916]/20" aria-hidden="true" />
              <span>Software Development</span>
            </div>

            <h2 className="text-[34px] font-bold leading-[1.04] tracking-tight text-[#0B1F33] sm:text-[46px] lg:text-[52px]">
              Engineering digital solutions that scale
            </h2>

            <p className="mt-4 text-[18px] font-semibold text-[#0B1F33]">
              From complex challenges to connected digital solutions.
            </p>

            <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-[#475569]">
              We design and develop tailored software solutions that help
              organizations simplify operations, connect systems, and create
              better experiences. From enterprise applications to integrations
              and cloud platforms, we turn complex requirements into technology
              built for growth.
            </p>

            <Link
              to="/solutions"
              className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-[#008DDA] transition-colors hover:text-[#0077B6] group"
            >
              <span>Explore Our Capabilities</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column: Transitioning Digital Solution Images in Application Frame */}
          <div className="relative flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[620px] group">
              {/* Subtle Ambient Shadow Glow */}
              <div
                className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#008DDA]/15 via-[#E87916]/10 to-transparent blur-xl opacity-70 transition-opacity duration-300 group-hover:opacity-90"
                aria-hidden="true"
              />

              {/* Application Browser Frame */}
              <div className="relative rounded-2xl border border-slate-200/90 bg-white shadow-[0_20px_45px_rgba(11,31,51,0.08),0_6px_16px_rgba(11,31,51,0.04)] overflow-hidden transition-all duration-300 group-hover:shadow-[0_24px_55px_rgba(11,31,51,0.12)]">
                {/* Title Bar */}
                <div className="flex items-center justify-between border-b border-slate-200/90 bg-slate-50/95 px-4 py-2.5 backdrop-blur-xs">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/80" />
                  </div>

                  <div className="flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white px-3 py-1 text-[11px] font-medium text-slate-600 shadow-2xs">
                    <Lock className="h-3 w-3 text-emerald-600" aria-hidden="true" />
                    <span className="font-mono text-slate-500">centrifugegroup.com</span>
                    <span className="text-slate-300">/</span>
                    <span className="text-slate-700">engineering-scale</span>
                  </div>

                  {/* Slide Switcher Controls */}
                  <div className="flex items-center gap-1.5" aria-label="Digital solution image slides">
                    {solutionImages.map((img, idx) => (
                      <button
                        key={img.id}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        title={img.caption}
                        aria-label={`View ${img.caption}`}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          activeImageIndex === idx
                            ? 'w-4 bg-[#E87916]'
                            : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Smooth Crossfading Digital Solution Images Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  {solutionImages.map((img, idx) => (
                    <img
                      key={img.id}
                      src={img.src}
                      alt={img.alt}
                      width={1280}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className={`absolute inset-0 h-full w-full object-cover object-center select-none transition-all duration-700 ease-in-out ${
                        activeImageIndex === idx
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-102 pointer-events-none'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Engineering Badge */}
              <div className="absolute -bottom-4 left-4 sm:-bottom-5 sm:left-6 z-10 flex items-center gap-3 rounded-xl border border-slate-200/90 bg-white/95 px-4 py-2.5 shadow-[0_12px_28px_rgba(11,31,51,0.1)] backdrop-blur-md">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E87916]/10 text-[#E87916]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="text-[12px] font-bold text-[#0B1F33]">
                    {solutionImages[activeImageIndex].caption}
                  </div>
                  <div className="text-[11px] text-[#64748B]">
                    Scalable Architecture & Secure Operations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Capability Cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {capabilityCards.map(({ title, text, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-[14px] border border-[#E2E8F0] bg-white p-6 shadow-[0_10px_30px_rgba(15,44,89,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#E87916]/40 hover:shadow-[0_18px_42px_rgba(15,44,89,0.08)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#E87916]/10 text-[#E87916] transition-colors group-hover:bg-[#E87916] group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#0B1F33]">
                {title}
              </h3>
              <p className="mt-2 text-[14px] leading-6 text-[#475569]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeBuildSection
