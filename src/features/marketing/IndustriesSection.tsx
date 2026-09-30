import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, HeartPulse, Truck, Building2, Landmark, Store } from 'lucide-react'

export const IndustriesSection: React.FC = () => {
  const industries = [
    {
      id: 'healthcare',
      name: 'Healthcare & Medical Systems',
      icon: HeartPulse,
      challenge: 'Fragmented patient records and paper workforce registries cause clinical blindspots.',
      solution: 'Turnkey EMRs, national health workforce platforms, and automated laboratory diagnostics.',
      slug: '/industries/healthcare',
    },
    {
      id: 'logistics',
      name: 'Logistics & Inter-State Freight',
      icon: Truck,
      challenge: 'High fuel pilferage, unexpected vehicle downtime, and delayed paper delivery notes.',
      solution: 'Sub-second GPS/CAN-Bus telematics, automated dispatch scheduling, and digital ePOD.',
      slug: '/industries/logistics',
    },
    {
      id: 'government',
      name: 'Government & Regulatory Councils',
      icon: Landmark,
      challenge: 'Manual queues for licensing, counterfeit credentials, and delayed revenue reporting.',
      solution: 'Tamper-proof digital licensing, Remita automated payments, and verified registries.',
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

  return (
    <section className="py-20 lg:py-24 bg-[#000000] border-b border-[#1e1e1d]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684] mb-3">
            <span>SECTOR-SPECIFIC ARCHITECTURE</span>
          </div>
          <h2 className="text-[32px] sm:text-[42px] font-normal text-[#faf9f6] tracking-[-1.13px] leading-[1.05]">
            Industries we transform.
          </h2>
          <p className="text-[15px] text-[#868684] tracking-[-0.14px] mt-3 max-w-2xl leading-[1.4]">
            We engineer systems purpose-built for the operational realities of African institutions and commercial enterprises.
          </p>
        </div>

        {/* ─── Warp Industry Cards (Onyx #1e1e1d, 20px radius) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind) => {
            const Icon = ind.icon
            return (
              <div
                key={ind.id}
                className="bg-[#1e1e1d] rounded-[20px] border border-[#1e1e1d] hover:border-[#333333] p-6 flex flex-col justify-between transition-colors text-left group"
              >
                <div>
                  <div className="h-8 w-8 rounded-[4px] bg-[#121212] border border-[#333333] text-[#faf9f6] flex items-center justify-center group-hover:border-[#cbb0f7] transition-colors">
                    <Icon className="h-4 w-4 text-[#cbb0f7]" />
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#faf9f6] tracking-[-0.18px] mt-4 leading-snug">
                    {ind.name}
                  </h3>
                  <div className="mt-3 space-y-2 text-[13px] tracking-[-0.14px]">
                    <div>
                      <span className="text-[#868684] font-medium">Challenge:</span>{' '}
                      <span className="text-[#b4b4b2]">{ind.challenge}</span>
                    </div>
                    <div>
                      <span className="text-[#868684] font-medium">Centrifuge Solution:</span>{' '}
                      <span className="text-[#faf9f6]">{ind.solution}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#333333]/50">
                  <Link
                    to={ind.slug}
                    className="inline-flex items-center gap-1.5 text-[13px] text-[#faf9f6] group-hover:text-[#cbb0f7] transition-colors"
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
