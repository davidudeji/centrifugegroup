import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers3, Database, Workflow, Cloud, ShieldCheck } from 'lucide-react'

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
  return (
    <section className="border-b border-[#E2E8F0] bg-[#F5F7FA] py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-[560px]">
            <div className="mb-5 inline-flex items-center rounded-full border border-[#008DDA]/25 bg-[#008DDA]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A6CAE]">
              Software Development
            </div>

            <h2 className="text-[34px] font-semibold leading-[1.02] tracking-[-0.05em] text-[#0F2C59] sm:text-[46px] lg:text-[54px]">
              Engineering digital solutions that scale
            </h2>

            <p className="mt-4 text-[18px] font-medium text-[#0F2C59]">
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
              className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-[#008DDA] transition-colors hover:text-[#0077B6]"
            >
              <span>Explore Our Capabilities</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="architecture-visual" aria-hidden="true">
              <div className="architecture-visual__glow" />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {capabilityCards.map(({ title, text, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-[14px] border border-[#E2E8F0] bg-white p-5 shadow-[0_10px_30px_rgba(15,44,89,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#BEE7FF] hover:shadow-[0_18px_42px_rgba(15,44,89,0.08)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#008DDA]/10 text-[#008DDA] transition-colors group-hover:bg-[#008DDA] group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#0F2C59]">
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
  );
}

export default WhatWeBuildSection
