import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { verifiedClients } from '../../assets'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const ClientsPage: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<string>('all')

  const sectors = [
    'all',
    'International NGO & Health',
    'Healthcare & Government',
    'Enterprise & Energy',
    'Healthcare & Regulatory',
    'Civil Society & Socioeconomic',
  ]

  const filteredClients =
    selectedSector === 'all'
      ? verifiedClients
      : verifiedClients.filter(
          (c) =>
            c.sector.toLowerCase().includes(selectedSector.toLowerCase()) ||
            selectedSector.toLowerCase().includes(c.sector.toLowerCase())
        )

  return (
    <div className="w-full text-left bg-white text-[#0F172A]">
      <SEO
        title="Verified Clients & Institutional Partners | Centrifuge Group"
        description="Explore the federal ministries, healthcare councils, multilateral agencies (WHO, UNICEF, MSH), and enterprise organizations that trust Centrifuge Group."
      />

      {/* Hero Header */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">PROVEN PARTNERSHIPS</span>
            </div>
            <h1
              className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              Organizations that depend on Centrifuge.
            </h1>
            <p className="text-[16px] text-[#94A3B8] leading-relaxed max-w-2xl">
              We design and deliver mission-critical software, healthcare registries, cloud connectivity, and institutional capacity for multilateral institutions, federal ministries, and corporate enterprises across Nigeria and Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Client Directory */}
      <section className="py-14 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto">

          {/* Sector Filter */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10 pb-6 border-b border-[#E2E8F0]">
            <span className="text-[11px] font-semibold uppercase tracking-[1px] text-[#94A3B8] shrink-0">
              Filter by Sector:
            </span>
            <div className="flex flex-wrap gap-2">
              {sectors.map((sec) => (
                <button
                  key={sec}
                  onClick={() => setSelectedSector(sec)}
                  className={`text-[11px] uppercase tracking-[1px] px-3.5 py-1.5 rounded-[6px] font-semibold transition-colors ${
                    selectedSector === sec
                      ? 'bg-[#F27A22] text-[#0F172A] shadow-sm'
                      : 'bg-white border border-[#E2E8F0] text-[#475569] hover:border-[#CBD5E1] hover:text-[#0F172A]'
                  }`}
                >
                  {sec === 'all' ? 'All Partners' : sec}
                </button>
              ))}
            </div>
          </div>

          {/* Client Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredClients.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-[12px] border border-[#E2E8F0] p-7 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200 group"
              >
                <div>
                  {/* Logo Container */}
                  <div className="h-16 w-full flex items-center justify-start border-b border-[#E2E8F0] pb-4 mb-5">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-12 max-w-[170px] object-contain grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>

                  <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#F27A22] block mb-1">
                    {client.sector}
                  </span>
                  <h3 className="text-[17px] font-bold text-[#0F172A] leading-snug group-hover:text-[#334155] transition-colors">
                    {client.name}
                  </h3>
                  <div className="text-[12px] font-medium text-[#94A3B8] mt-0.5">
                    {client.role}
                  </div>
                  <p className="text-[13px] text-[#475569] mt-3 leading-relaxed">
                    {client.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#475569] font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#F27A22]" />
                    <span>Verified Partner</span>
                  </div>
                  <Link
                    to="/case-studies"
                    className="text-[12px] font-semibold text-[#334155] group-hover:text-[#F27A22] flex items-center gap-1 transition-colors"
                  >
                    <span>View work</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Engagement Callout */}
      <section className="py-20 bg-[#0F172A]">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="p-8 sm:p-12 rounded-[12px] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22] block mb-2">
                GOVERNMENT & MULTILATERAL ADVISORY
              </span>
              <h3
                className="font-bold text-white leading-snug tracking-[-0.025em]"
                style={{ fontSize: 'clamp(1.375rem, 3vw, 1.75rem)' }}
              >
                Partner with Centrifuge on your next institutional program.
              </h3>
              <p className="text-[13px] text-[#94A3B8] mt-2 max-w-xl">
                Our consultancy practice assists development agencies and state ministries from planning through national deployment.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[6px] bg-[#F27A22] text-[#0F172A] hover:bg-[#E06910] text-[14px] font-semibold shrink-0 transition-colors whitespace-nowrap"
            >
              <span>Initiate institutional dialogue</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ClientsPage
