import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, HeartPulse, Truck, Building2, Landmark, Store, Landmark as Bank } from 'lucide-react'

const industries = [
    {
      id: 'banking',
      name: 'Financial Services & Digital Banking',
      icon: Bank,
      challenge: 'Rigid monolithic legacy core banking stacks with multi-day reconciliation windows.',
      solution: 'Decoupled event-sourced ledger, ISO 20022 clearing gateways, and real-time fraud scoring.',
      slug: '/solutions/banking-framework',
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Clinical Systems',
      icon: HeartPulse,
      challenge: 'Fragmented patient records and paper workforce registries cause operational blindspots.',
      solution: 'National health workforce platforms (HRHIS), clinical EMRs, and automated diagnostic registers.',
      slug: '/industries/healthcare',
    },
    {
      id: 'logistics',
      name: 'Logistics & Inter-State Freight',
      icon: Truck,
      challenge: 'High fuel pilferage, unexpected vehicle downtime, and delayed manual delivery notes.',
      solution: 'Sub-second GPS/CAN-Bus telematics, automated dispatch scheduling, and digital ePOD.',
      slug: '/industries/logistics',
    },
    {
      id: 'government',
      name: 'Government & Regulatory Councils',
      icon: Landmark,
      challenge: 'Manual queues for licensing, counterfeit credentials, and delayed revenue reporting.',
      solution: 'Tamper-proof digital licensing, automated payment gateways, and verified registries.',
      slug: '/industries/government',
    },
    {
      id: 'enterprise',
      name: 'Large Enterprise & Energy',
      icon: Building2,
      challenge: 'Disconnected ERP modules leading to multi-week manual financial reconciliations.',
      solution: 'Modular connected business architectures, automated ledger postings, and audit trails.',
      slug: '/industries/enterprise',
    },
    {
      id: 'smes',
      name: 'Growing Commercial SMEs',
      icon: Store,
      challenge: 'Stock shrinkage and unreliable power grids disrupting day-to-day point of sale.',
      solution: 'Cloud inventory POS combined with industrial pure sine wave inverters and solar backup.',
      slug: '/industries/smes',
    },
]

  export const IndustriesSection: React.FC = () => {
    return (
      <section className="py-20 lg:py-24 bg-[#F5F7FA] border-b border-[#E2E8F0] text-left">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#008DDA]/10 border border-[#008DDA]/20 text-xs font-semibold uppercase tracking-wider text-[#0077B6] mb-3">
              <span>SECTOR-SPECIFIC ARCHITECTURE</span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0F2C59] tracking-tight">
              Industries We Modernize with Engineered Reliability
            </h2>
            <p className="text-[15px] text-[#64748B] mt-2.5 max-w-2xl leading-relaxed">
              We engineer systems purpose-built for the operational realities of African institutions, financial bodies, and commercial enterprises.
            </p>
          </div>

          {/* ─── Data Card Module Grid (UI/UX Spec §3.3: 8px radius, #FFFFFF, 1px #E2E8F0, 24px padding) ─── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <div
                  key={ind.id}
                  className="bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs p-6 flex flex-col justify-between transition-fin group text-left"
                >
                  <div>
                    <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center group-hover:bg-[#008DDA] group-hover:text-white transition-colors duration-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-[18px] font-bold text-[#0F2C59] tracking-tight mt-4">
                      {ind.name}
                    </h3>
                    <div className="mt-4 space-y-2.5 text-[13px]">
                      <div>
                        <span className="text-[#64748B] font-semibold block text-xs">CHALLENGE:</span>
                        <span className="text-[#475569]">{ind.challenge}</span>
                      </div>
                      <div>
                        <span className="text-[#008DDA] font-semibold block text-xs">CENTRIFUGE SOLUTION:</span>
                        <span className="text-[#1A1A1A] font-medium">{ind.solution}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F1F5F9]">
                    <Link
                      to={ind.slug}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#008DDA] hover:text-[#0077B6] transition-colors"
                    >
                      <span>Industry solutions & case studies</span>
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
