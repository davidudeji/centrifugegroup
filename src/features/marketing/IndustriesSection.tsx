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
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinical Systems',
    icon: HeartPulse,
    challenge: 'Fragmented patient records and paper-heavy workforce processes create operational blind spots.',
    solution: 'National health workforce platforms, EMR workflows, and digital registry automation.',
    slug: '/industries/healthcare',
  },
  {
    id: 'logistics',
    name: 'Logistics & Inter-State Freight',
    icon: Truck,
    challenge: 'Fuel loss, delayed dispatch visibility, and fragmented vehicle tracking.',
    solution: 'Telematics, dispatch orchestration, and digital proof-of-delivery workflows.',
    slug: '/industries/logistics',
  },
  {
    id: 'government',
    name: 'Government & Regulatory Councils',
    icon: Landmark,
    challenge: 'Manual licensing and verification workflows slow service delivery and undermine confidence.',
    solution: 'Secure digital registries, verified credentials, and payment-enabled service portals.',
    slug: '/industries/government',
  },
  {
    id: 'enterprise',
    name: 'Large Enterprise & Energy',
    icon: Building2,
    challenge: 'Disconnected business modules create long reconciliation cycles and reporting friction.',
    solution: 'Connected ERP architecture with operational visibility, finance automation, and unified datasets.',
    slug: '/industries/enterprise',
  },
  {
    id: 'smes',
    name: 'Growing Commercial SMEs',
    icon: Store,
    challenge: 'Reorder delays, stock shrinkage, and inconsistent sales visibility limit growth.',
    solution: 'Cloud POS, inventory controls, and operational reporting built for scaling teams.',
    slug: '/industries/smes',
  },
]

export const IndustriesSection: React.FC = () => {
  return (
    <section className="border-b border-[#E2E8F0] bg-[#F5F7FA] py-20 text-left lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-[760px]">
          <h2 className="text-[34px] font-semibold tracking-[-0.05em] text-[#0F2C59] sm:text-[42px] lg:text-[52px]">
            Industries we modernize with engineered reliability.
          </h2>
          <p className="mt-4 max-w-[640px] text-[15px] leading-7 text-[#475569] sm:text-[16px]">
            We build purpose-fit systems for institutions, financial bodies, and commercial organizations operating in demanding environments.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((ind) => {
            const Icon = ind.icon
            return (
              <div
                key={ind.id}
                className="group flex min-h-[330px] flex-col justify-between rounded-[18px] border border-[#E2E8F0] bg-white p-6 shadow-[0_14px_32px_rgba(15,44,89,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#BEE7FF] hover:shadow-[0_24px_45px_rgba(15,44,89,0.08)]"
              >
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#0F2C59]/10 text-[#0F2C59] transition-colors duration-200 group-hover:bg-[#008DDA] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#0F2C59]">{ind.name}</h3>

                  <div className="mt-5 space-y-4 text-[13px] leading-6 text-[#475569]">
                    <div>
                      <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">Challenge</span>
                      <span>{ind.challenge}</span>
                    </div>
                    <div>
                      <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#008DDA]">Centrifuge solution</span>
                      <span className="font-medium text-[#1A1A1A]">{ind.solution}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-[#E2E8F0] pt-4">
                  <Link
                    to={ind.slug}
                    className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#008DDA] transition-colors hover:text-[#0077B6]"
                  >
                    <span>Explore this sector</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
