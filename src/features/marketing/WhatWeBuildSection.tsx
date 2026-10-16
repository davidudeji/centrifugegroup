import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers3, Workflow, Cloud, CheckCircle2 } from 'lucide-react'
import digitalSolutionThatScale from '../../assets/digital solution that scale.avif'
import digitalSolution1 from '../../assets/digital solution 1.avif'

const solutionImages = [
  {
    id: 'scale',
    src: digitalSolutionThatScale,
    alt: 'Engineering digital solutions that scale — enterprise platform architecture',
    caption: 'Cloud Infrastructure & Microservices',
  },
  {
    id: 'solutions',
    src: digitalSolution1,
    alt: 'Tailored digital solutions and system integrations',
    caption: 'Data Orchestration & API Gateways',
  },
]

const capabilities = [
  {
    title: 'Enterprise Software',
    text: 'Scalable digital platforms built around your actual business operations — not generic templates.',
    icon: Layers3,
    href: '/services/software-development',
  },
  {
    title: 'Cloud & SaaS',
    text: 'Secure, multi-tenant cloud solutions designed for modern organizations and institutional scale.',
    icon: Cloud,
    href: '/services/cloud',
  },
  {
    title: 'System Integration',
    text: 'Connect business systems and workflows with purpose-built integrations and robust APIs.',
    icon: Workflow,
    href: '/services/software-development',
  },
]

const PROOF_POINTS = [
  'National health workforce systems',
  'Enterprise ERP deployments',
  'Logistics & telematics platforms',
  'Government digital registries',
]

export const WhatWeBuildSection: React.FC = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % solutionImages.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="border-b border-[#E2E8F0] bg-[#F7F9FB] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">

        {/* Asymmetric 2-col layout */}
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] xl:gap-20">

          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#F28C28]" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F28C28]">
                What We Build
              </p>
            </div>
            <h2 className="text-[2.125rem] font-bold leading-[1.06] tracking-[-0.04em] text-[#0B1F33] sm:text-[2.75rem] lg:text-[3.25rem]">
              Engineering digital solutions that scale with your ambition.
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-[1.8] text-[#475569]">
              We design and develop tailored software that helps organizations simplify operations,
              connect systems, and create better experiences — from enterprise applications to
              cloud platforms built for long-term growth.
            </p>

            {/* Proof points */}
            <ul className="mt-6 space-y-2.5">
              {PROOF_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-[0.9375rem] text-[#344054]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0756A5]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Image caption indicator */}
            <div className="mt-8 flex items-center gap-2">
              {solutionImages.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActive(i)}
                  aria-label={`View ${img.caption}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? "w-8 bg-[#0756A5]" : "w-3 bg-[#CBD5E1] hover:bg-[#94A3B8]"
                    }`}
                />
              ))}
              <span className="ml-2 text-[12px] font-medium text-[#64748B]">
                {solutionImages[active].caption}
              </span>
            </div>

            <Link
              to="/solutions"
              className="mt-8 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-[#0756A5] transition-colors hover:text-[#073B70] group"
            >
              <span>Explore Our Capabilities</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right: Rotating image in app frame */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px]">
              {/* Ambient glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[40px] opacity-25 blur-3xl"
                style={{ background: "radial-gradient(ellipse, rgba(7,86,165,0.4) 0%, transparent 70%)" }}
              />

              {/* Frame */}
              <div className="relative overflow-hidden rounded-[20px] border border-slate-200/80 bg-white shadow-[0_28px_64px_rgba(11,31,51,0.1)]">

                {/* Crossfading images */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  {solutionImages.map((img, idx) => (
                    <img
                      key={img.id}
                      src={img.src}
                      alt={img.alt}
                      width={1280}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className={`absolute inset-0 h-full w-full select-none object-cover object-center transition-all duration-700 ease-in-out ${active === idx ? "opacity-100 scale-100" : "opacity-0 scale-[1.02] pointer-events-none"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Capability cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {capabilities.map(({ title, text, icon: Icon, href }) => (
            <Link
              key={title}
              to={href}
              className="group relative flex flex-col rounded-[16px] border border-[#E2E8F0] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0756A5]/25 hover:shadow-[0_16px_40px_rgba(7,86,165,0.08)]"
            >
              {/* Accent line on hover */}
              <div
                className="absolute inset-x-0 top-0 h-[3px] rounded-t-[16px] bg-[#0756A5] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#0756A5]/8 text-[#0756A5] transition-colors group-hover:bg-[#0756A5] group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-[1.0625rem] font-semibold text-[#0B1F33]">{title}</h3>
              <p className="mt-2 text-[0.875rem] leading-[1.7] text-[#475569] flex-1">{text}</p>
              <div className="mt-4 flex items-center gap-1 text-[0.8125rem] font-semibold text-[#0756A5]">
                <span>Learn more</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeBuildSection
