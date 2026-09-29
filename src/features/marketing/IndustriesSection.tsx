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
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-[#16C7D9]">
            Sector-Specific Engineering
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-heading mt-2 tracking-tight">
            Industries we transform.
          </h2>
          <p className="text-base text-[#64748B] mt-3">
            We don't sell generic software. We engineer systems purpose-built for the operational realities of African institutions and commercial enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => {
            const Icon = ind.icon
            return (
              <div
                key={ind.id}
                className="bg-white rounded-[14px] border border-[#E2E8F0] p-7 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-sm transition-all text-left group"
              >
                <div>
                  <div className="h-10 w-10 rounded-[8px] bg-[#0B1F33]/5 text-[#0B1F33] flex items-center justify-center group-hover:bg-[#16C7D9]/15 group-hover:text-[#0E7490] transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1F33] font-heading mt-4 group-hover:text-[#16C7D9] transition-colors">
                    {ind.name}
                  </h3>
                  <div className="mt-3 space-y-2 text-xs">
                    <div>
                      <span className="font-semibold text-[#111827]">Operational Challenge:</span>{' '}
                      <span className="text-[#64748B]">{ind.challenge}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#111827]">Centrifuge Solution:</span>{' '}
                      <span className="text-[#64748B]">{ind.solution}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
                  <Link
                    to={ind.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F33] group-hover:text-[#16C7D9] transition-colors"
                  >
                    <span>Industry solutions & case studies</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
