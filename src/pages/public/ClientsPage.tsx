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
    <div className="w-full text-left bg-[#F5F7FA] text-[#1A1A1A]">
      <SEO
        title="Verified Clients & Institutional Partners | Centrifuge Group"
        description="Explore the federal ministries, healthcare councils, multilateral agencies (WHO, UNICEF, MSH), and enterprise organizations that trust Centrifuge Group."
      />

      {/* ─── Header Banner (UI/UX Spec §1.1 & §4.1) ─── */}
      <section className="bg-[#FFFFFF] text-[#1A1A1A] py-16 sm:py-20 border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] border border-[#008DDA]/30 bg-[#008DDA]/10 text-xs font-semibold uppercase tracking-wider text-[#0077B6]">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>PROVEN INSTITUTIONAL PARTNERSHIPS</span>
            </div>
            <h1 className="text-[32px] sm:text-[44px] font-bold text-[#0F2C59] tracking-tight leading-[1.2]">
              Organizations That Depend on Centrifuge Systems
            </h1>
            <p className="text-[16px] text-[#475569] leading-relaxed max-w-2xl">
              We design and deliver mission-critical software, national healthcare registries, cloud connectivity, and institutional capacity for multilateral institutions, federal ministries, and corporate enterprises across Nigeria and Africa.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Client Directory (UI/UX Spec §3.3 Data Card Module) ─── */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sector Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-[#E2E8F0]">
            <span className="text-xs font-mono font-bold text-[#64748B] mr-2 uppercase tracking-wider">
              Filter by Sector:
            </span>
            {sectors.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSector(sec)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-[4px] transition-colors cursor-pointer ${selectedSector === sec
                    ? 'bg-[#008DDA] text-white shadow-xs'
                    : 'bg-[#FFFFFF] text-[#475569] border border-[#CBD5E1] hover:border-[#008DDA] hover:text-[#008DDA]'
                  }`}
              >
                {sec === 'all' ? 'All Partners' : sec}
              </button>
            ))}
          </div>

          {/* Client Directory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClients.map((client) => (
              <div
                key={client.id}
                className="bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] p-6 sm:p-7 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-xs transition-fin group text-left"
              >
                <div>
                  {/* Logo Container */}
                  <div className="h-20 w-full flex items-center justify-start border-b border-[#F1F5F9] pb-4 mb-4">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-14 max-w-[190px] object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#008DDA]">
                    {client.sector}
                  </span>
                  <h3 className="text-[18px] font-bold text-[#0F2C59] tracking-tight mt-1.5 group-hover:text-[#008DDA] transition-colors">
                    {client.name}
                  </h3>
                  <div className="text-[12px] font-mono text-[#64748B] mt-0.5">
                    {client.role}
                  </div>
                  <p className="text-[13px] text-[#475569] mt-3 leading-relaxed">
                    <p className="text-[13px] text-[#475569] mt-3 leading-relaxed">
                      {client.description}
                    </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#1A1A1A] font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                    <span>Verified Partner</span>
                  </div>
                  <Link
                    to="/case-studies"
                    className="text-xs font-semibold text-[#008DDA] hover:text-[#0077B6] flex items-center gap-1 transition-colors"
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

      {/* ─── Institutional Engagement Callout ─── */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-[8px] bg-[#0F2C59] text-white border border-[#1E3A8A] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#008DDA]">
                GOVERNMENT & MULTILATERAL ADVISORY
              </span>
              <h3 className="text-[22px] sm:text-[26px] font-bold text-white tracking-tight mt-1.5">
                Partner with Centrifuge on your next institutional program.
              </h3>
              <p className="text-sm text-[#A0AEC0] mt-1.5 max-w-xl leading-relaxed">
                Our consultancy practice assists development agencies and state ministries from system feasibility through nationwide rollout and capacity building.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[4px] bg-[#008DDA] text-white hover:bg-[#0077B6] text-sm font-semibold shrink-0 transition-colors"
            >
              <span>Initiate Institutional Dialogue</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ClientsPage
