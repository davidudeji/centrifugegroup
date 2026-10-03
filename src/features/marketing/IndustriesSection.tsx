import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, HeartPulse, Truck, Building2, Landmark, Store } from 'lucide-react'

const industries = [
  {
    id: 'healthcare',
    name: 'Healthcare & Medical Systems',
    icon: HeartPulse,
    challenge: 'Fragmented patient records and paper workforce registries create clinical blindspots.',
    solution: 'Turnkey EMRs, national health workforce platforms, and automated laboratory diagnostics.',
    slug: '/industries/healthcare',
    accent: '#16C7D9',
  },
  {
    id: 'logistics',
    name: 'Logistics & Inter-State Freight',
    icon: Truck,
    challenge: 'High fuel pilferage, unexpected vehicle downtime, and delayed paper delivery notes.',
    solution: 'Sub-second GPS/CAN-Bus telematics, automated dispatch scheduling, and digital ePOD.',
    slug: '/industries/logistics',
    accent: '#16C7D9',
  },
  {
    id: 'government',
    name: 'Government & Regulatory Councils',
    icon: Landmark,
    challenge: 'Manual queues for licensing, counterfeit credentials, and delayed revenue reporting.',
    solution: 'Tamper-proof digital licensing, Remita automated payments, and verified registries.',
    slug: '/industries/government',
    accent: '#16C7D9',
  },
  {
    id: 'enterprise',
    name: 'Large Enterprise & Energy',
    icon: Building2,
    challenge: 'Disconnected ERP modules leading to multi-week manual financial reconciliations.',
    solution: 'Modular connected business architectures, automated ledger postings, and audit trails.',
    slug: '/industries/enterprise',
    accent: '#16C7D9',
  },
  {
    id: 'smes',
    name: 'Growing Commercial SMEs',
    icon: Store,
    challenge: 'Stock shrinkage and unreliable power grids disrupting day-to-day point of sale.',
    solution: 'Cloud inventory POS combined with industrial pure sine wave inverters and solar backup.',
    slug: '/industries/smes',
    accent: '#16C7D9',
  },
]

export const IndustriesSection: React.FC = () => {
  return (
    <section className="section-py bg-white border-b border-[#E2E8F0]">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="badge-eyebrow mb-4">Industries</div>
            <h2 className="text-h2 text-[#0B1F33] mb-4">
              Industries we transform.
            </h2>
            <p className="text-body-lg text-[#64748B]">
              We engineer systems purpose-built for the operational realities
              of African institutions and commercial enterprises.
            </p>
          </div>
          <Link
            to="/industries"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#64748B] hover:text-[#0B1F33] transition-colors shrink-0"
            id="industries-view-all"
          >
            All industries
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Industry cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind) => {
            const Icon = ind.icon
            return (
              <Link
                key={ind.id}
                to={ind.slug}
                className="group card flex flex-col justify-between min-h-[260px]"
                aria-label={`${ind.name} — industry solutions`}
              >
                <div>
                  {/* Icon */}
                  <div className="h-11 w-11 rounded-[10px] bg-[#F7F9FA] border border-[#E2E8F0] flex items-center justify-center mb-5 group-hover:bg-[#0B1F33] group-hover:border-[#0B1F33] transition-all duration-200">
                    <Icon className="h-5 w-5 text-[#0B1F33] group-hover:text-[#16C7D9] transition-colors" />
                  </div>

                  {/* Name */}
                  <h3 className="text-[18px] font-heading font-700 text-[#0B1F33] tracking-tight mb-3 group-hover:text-[#16C7D9] transition-colors leading-snug">
                    {ind.name}
                  </h3>

                  {/* Challenge + solution */}
                  <div className="space-y-2 text-[13px]">
                    <div>
                      <span className="font-semibold text-[#94A3B8]">Challenge: </span>
                      <span className="text-[#64748B]">{ind.challenge}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#0B1F33]">Solution: </span>
                      <span className="text-[#64748B]">{ind.solution}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-[13px] font-medium text-[#64748B] group-hover:text-[#16C7D9] transition-colors">
                    Solutions &amp; case studies
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#CBD5E1] group-hover:text-[#16C7D9] group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
