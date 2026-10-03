import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Activity, Truck, BarChart3, Globe, Cpu } from 'lucide-react'

const capabilities = [
  {
    id: 'enterprise',
    icon: Layers,
    label: 'Enterprise Software',
    tag: 'OPTIMAX SUITE',
    desc: 'Modern ERP platforms, unified accounting, multi-warehouse inventory, and automated operational pipelines tailored to high-growth organisations.',
    href: '/solutions/enterprise',
    span: 'lg:col-span-7',
  },
  {
    id: 'healthcare',
    icon: Activity,
    label: 'Healthcare Technology',
    tag: 'FMOH · NMCN',
    desc: 'Hospital information systems, national health workforce registries (HRHIS), digital credentialing, and interoperable health data infrastructure.',
    href: '/solutions/healthcare',
    span: 'lg:col-span-5',
  },
  {
    id: 'logistics',
    icon: Truck,
    label: 'Logistics & Mobility',
    tag: 'TELEMATICS',
    desc: 'GPS telematics, automated dispatch, fuel auditing, route planning, and offline-capable mobile proof-of-delivery.',
    href: '/solutions/logistics',
    span: 'lg:col-span-4',
  },
  {
    id: 'data',
    icon: BarChart3,
    label: 'Data & Analytics',
    tag: 'SPATIAL GIS',
    desc: 'GIS spatial mapping, executive BI dashboards, real-time event streaming, and automated regulatory reporting.',
    href: '/solutions/data-analytics',
    span: 'lg:col-span-4',
  },
  {
    id: 'cloud',
    icon: Globe,
    label: 'Cloud & Infrastructure',
    tag: 'CLOUD · IOT',
    desc: 'High-availability cloud infrastructure, cold-chain pharmaceutical monitoring, and industrial power systems.',
    href: '/services/cloud',
    span: 'lg:col-span-4',
  },
  {
    id: 'digital',
    icon: Cpu,
    label: 'Digital Platforms',
    tag: 'CUSTOM DEV',
    desc: 'Bespoke digital platforms, mobile applications, systems integrations, and business process automation.',
    href: '/services/software-development',
    span: 'lg:col-span-4',
  },
]

export const WhatWeBuildSection: React.FC = () => {
  return (
    <section className="section-py bg-[#F7F9FA] border-b border-[#E2E8F0]">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="badge-eyebrow mb-4">What We Build</div>
          <h2 className="text-h2 text-[#0B1F33] mb-4">
            Systems businesses depend on.
          </h2>
          <p className="text-body-lg text-[#64748B] max-w-2xl">
            From national clinical workforce registries to heavy freight telematics
            and integrated commercial ERPs — we deliver engineered reliability.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon
            return (
              <Link
                key={cap.id}
                to={cap.href}
                className={`group card-feature flex flex-col justify-between ${cap.span} min-h-[220px]`}
                aria-label={`Learn about ${cap.label}`}
              >
                <div>
                  {/* Icon + tag row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-10 w-10 rounded-[10px] bg-[#0B1F33] flex items-center justify-center group-hover:bg-[#16C7D9] transition-colors duration-200">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#94A3B8] px-2.5 py-1 rounded-full border border-[#E2E8F0] bg-[#F7F9FA]">
                      {cap.tag}
                    </span>
                  </div>

                  {/* Number */}
                  <p className="text-[11px] font-mono text-[#CBD5E1] mb-1">
                    {String(i + 1).padStart(2, '0')}
                  </p>

                  {/* Title */}
                  <h3 className="text-[20px] font-heading font-700 text-[#0B1F33] tracking-tight mb-2 group-hover:text-[#16C7D9] transition-colors">
                    {cap.label}
                  </h3>

                  {/* Desc */}
                  <p className="text-[14px] text-[#64748B] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-[13px] font-medium text-[#0B1F33] group-hover:text-[#16C7D9] transition-colors">
                    Learn more
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#94A3B8] group-hover:text-[#16C7D9] group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhatWeBuildSection
