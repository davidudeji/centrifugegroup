import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, HeartPulse, Truck, Building2, Landmark, Store, Landmark as Bank } from 'lucide-react'

const industries = [
  {
    id: 'banking',
    name: 'Project Development & Management',
    icon: Bank,
    challenge: 'Rigid monolithic legacy stacks with slow reconciliation and fragmented reporting.',
    solution: 'Decoupled event-driven architecture, automated workflows, and audit-ready integrations.',
    slug: '/solutions/project-development-management',
    accentColor: '#0756A5',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinical Systems',
    icon: HeartPulse,
    challenge: 'Fragmented patient records and paper-heavy workforce processes create operational blind spots.',
    solution: 'National health workforce platforms, EMR workflows, and digital registry automation.',
    slug: '/industries/healthcare',
    accentColor: '#1677D2',
  },
  {
    id: 'logistics',
    name: 'Logistics & Inter-State Freight',
    icon: Truck,
    challenge: 'Fuel loss, delayed dispatch visibility, and fragmented vehicle tracking.',
    solution: 'Telematics, dispatch orchestration, and digital proof-of-delivery workflows.',
    slug: '/industries/logistics',
    accentColor: '#0756A5',
  },
  {
    id: 'government',
    name: 'Government & Regulatory Councils',
    icon: Landmark,
    challenge: 'Manual licensing and verification workflows slow service delivery.',
    solution: 'Secure digital registries, verified credentials, and payment-enabled service portals.',
    slug: '/industries/government',
    accentColor: '#1677D2',
  },
  {
    id: 'enterprise',
    name: 'Large Enterprise & Energy',
    icon: Building2,
    challenge: 'Disconnected business modules create long reconciliation cycles and reporting friction.',
    solution: 'Connected ERP architecture with operational visibility, finance automation, and unified datasets.',
    slug: '/industries/enterprise',
    accentColor: '#0756A5',
  },
  {
    id: 'smes',
    name: 'Growing Commercial SMEs',
    icon: Store,
    challenge: 'Reorder delays, stock shrinkage, and inconsistent sales visibility limit growth.',
    solution: 'Cloud POS, inventory controls, and operational reporting built for scaling teams.',
    slug: '/industries/smes',
    accentColor: '#1677D2',
  },
]

export const IndustriesSection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden border-b py-20 lg:py-28"
      style={{
        background: 'linear-gradient(155deg, #14133B 0%, #11274E 50%, #11143C 100%)',
        borderColor: 'rgba(255,255,255,0.07)',
      }}
    >
      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 15%, transparent 80%)',
        }}
      />
      {/* Right glow */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: '-15%', right: '-10%',
          width: '55%', height: '110%',
          background: 'radial-gradient(ellipse at top right, rgba(22,119,210,0.18) 0%, transparent 65%)',
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#F28C28]" aria-hidden="true" />
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F28C28]">
              Industries
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2
              className="max-w-[560px] text-white"
              style={{ fontSize: 'clamp(2.125rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.04em' }}
            >
              Industries we modernize with engineered reliability.
            </h2>
            <p className="max-w-[320px] text-[1rem] leading-[1.7]" style={{ color: 'rgba(191,219,254,0.6)' }}>
              Purpose-fit systems for institutions, financial bodies, and commercial organizations in demanding environments.
            </p>
          </div>
        </div>

        {/* 6-card grid */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((ind) => {
            const Icon = ind.icon
            return (
              <article
                key={ind.id}
                className="group flex flex-col rounded-[16px] p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Icon */}
                <div
                  className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[10px] transition-all duration-200"
                  style={{
                    background: `${ind.accentColor}22`,
                    border: `1px solid ${ind.accentColor}35`,
                    color: ind.accentColor,
                  }}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-white text-[1.0625rem] font-semibold leading-snug">{ind.name}</h3>

                {/* Challenge / Solution */}
                <div className="mt-4 flex-1 space-y-4 text-[0.875rem] leading-[1.68]">
                  <div>
                    <span className="mb-1.5 block text-[10.5px] font-bold uppercase tracking-[0.18em]" style={{ color: 'rgba(191,219,254,0.38)' }}>
                      Challenge
                    </span>
                    <span style={{ color: 'rgba(191,219,254,0.58)' }}>{ind.challenge}</span>
                  </div>
                  <div>
                    <span
                      className="mb-1.5 block text-[10.5px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: ind.accentColor }}
                    >
                      Centrifuge solution
                    </span>
                    <span className="font-medium text-white/85">{ind.solution}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <Link
                    to={ind.slug}
                    className="inline-flex items-center gap-2 text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-blue-300 transition-colors hover:text-white group/link"
                  >
                    <span>Explore this sector</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
