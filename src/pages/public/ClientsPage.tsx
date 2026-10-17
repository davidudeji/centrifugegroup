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
    <div className="dark-page">
      <SEO
        title="Verified Clients & Institutional Partners | Centrifuge Group"
        description="Explore the federal ministries, healthcare councils, multilateral agencies (WHO, UNICEF, MSH), and enterprise organizations that trust Centrifuge Group."
      />

      {/* â”€â”€â”€ Header Banner â”€â”€â”€ */}
      <section className="dark-section-hero pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <span className="dark-badge">
              <span className="h-2 w-2 rounded-full bg-[#F28C28] ring-4 ring-[#F28C28]/20" aria-hidden="true" />
              Verified Partners & Clients
            </span>
            <h1 className="text-[32px] sm:text-[48px] font-bold text-[#F0F4FF] tracking-tight leading-[1.1]">
              Organizations That Depend on Centrifuge Systems
            </h1>
            <p className="text-[17px] text-[#8BA4C8] leading-relaxed max-w-2xl">
              We design and deliver mission-critical software, national healthcare registries, cloud connectivity, and institutional capacity for multilateral institutions, federal ministries, and corporate enterprises across Nigeria and Africa.
            </p>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Client Directory â”€â”€â”€ */}
      <section className="dark-section-b py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sector Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-white/[0.07]">
            <span className="text-xs font-mono font-bold text-[#8BA4C8] mr-2 uppercase tracking-wider">
              Filter by Sector:
            </span>
            {sectors.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSector(sec)}
                className={`dark-pill ${selectedSector === sec ? 'is-active' : ''}`}
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
                className="dark-card p-6 sm:p-7 flex flex-col justify-between group text-left"
              >
                <div>
                  {/* Logo Container */}
                  <div className="h-20 w-full flex items-center justify-start border-b border-white/[0.07] pb-4 mb-4">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-14 max-w-[190px] object-contain opacity-75 group-hover:opacity-100 transition-opacity filter brightness-150 saturate-50"
                    />
                  </div>

                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#60ABFF]">
                    {client.sector}
                  </span>
                  <h3 className="text-[18px] font-bold text-[#F0F4FF] tracking-tight mt-1.5 group-hover:text-[#60ABFF] transition-colors">
                    {client.name}
                  </h3>
                  <div className="text-[12px] font-mono text-[#8BA4C8] mt-0.5">
                    {client.role}
                  </div>
                  <p className="text-[13px] text-[#8BA4C8] mt-3 leading-relaxed">
                    {client.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.07] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#8BA4C8] font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                    <span>Verified Partner</span>
                  </div>
                  <Link
                    to="/case-studies"
                    className="text-xs font-semibold text-[#60ABFF] hover:text-[#F28C28] flex items-center gap-1 transition-colors"
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

      {/* â”€â”€â”€ Institutional Engagement Callout â”€â”€â”€ */}
      <section className="dark-section-a py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="dark-cta-banner flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="dark-section-label">Government & Multilateral Advisory</span>
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#F0F4FF] tracking-tight mt-2">
                Partner with Centrifuge on your next institutional program.
              </h3>
              <p className="text-sm text-[#8BA4C8] mt-1.5 max-w-xl leading-relaxed">
                Our consultancy practice assists development agencies and state ministries from system feasibility through nationwide rollout and capacity building.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] bg-[#E87916] text-white shadow-[0_8px_20px_rgba(232,121,22,0.28)] hover:bg-[#D0690E] hover:-translate-y-0.5 text-sm font-semibold shrink-0 transition-all duration-200"
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

