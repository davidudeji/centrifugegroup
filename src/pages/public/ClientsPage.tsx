import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { verifiedClients } from '../../assets'
import { CheckCircle2, ArrowRight, ShieldCheck, Building2 } from 'lucide-react'

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
    <div className="w-full text-left bg-[#000000] text-[#faf9f6]">
      <SEO
        title="Verified Clients & Institutional Partners | Centrifuge Group"
        description="Explore the federal ministries, healthcare councils, multilateral agencies (WHO, UNICEF, MSH), and enterprise organizations that trust Centrifuge Group."
      />

      {/* ─── Header Banner (Warp Obsidian #000000) ─── */}
      <section className="bg-[#000000] text-[#faf9f6] py-16 sm:py-24 border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684]">
              <span>PROVEN PARTNERSHIPS</span>
            </div>
            <h1 className="text-[36px] sm:text-[56px] font-normal text-[#faf9f6] tracking-[-2.24px] leading-[0.98]">
              Organizations that depend on Centrifuge.
            </h1>
            <p className="text-[16px] text-[#868684] tracking-[-0.18px] leading-relaxed">
              We design and deliver mission-critical software, healthcare registries, cloud connectivity, and institutional capacity for multilateral institutions, federal ministries, and corporate enterprises across Nigeria and Africa.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Client Directory (Warp Graphite #121212) ─── */}
      <section className="py-20 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sector Filter Tabs (50px pill radius) */}
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-[#1e1e1d]">
            <span className="text-[12px] font-mono text-[#868684] mr-2">Filter by Sector:</span>
            {sectors.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSector(sec)}
                className={`text-[12px] font-medium px-4 py-1.5 rounded-[50px] transition-colors ${
                  selectedSector === sec
                    ? 'bg-[#121212] text-[#080808] font-semibold'
                    : 'bg-[#1e1e1d] text-[#868684] border border-[#333333] hover:text-[#faf9f6]'
                }`}
              >
                {sec === 'all' ? 'All Partners' : sec}
              </button>
            ))}
          </div>

          {/* Client Directory Grid (Onyx #1e1e1d cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClients.map((client) => (
              <div
                key={client.id}
                className="bg-[#1e1e1d] rounded-[20px] border border-[#1e1e1d] p-7 flex flex-col justify-between hover:border-[#333333] transition-all group"
              >
                <div>
                  {/* Logo Container */}
                  <div className="h-20 w-full flex items-center justify-start border-b border-[#333333]/50 pb-4 mb-5">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-14 max-w-[190px] object-contain brightness-95 contrast-125"
                    />
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-[1.5px] text-[#f0b66d]">
                    {client.sector}
                  </span>
                  <h3 className="text-[18px] font-semibold text-[#faf9f6] tracking-[-0.18px] mt-2 group-hover:text-[#f0b66d] transition-colors">
                    {client.name}
                  </h3>
                  <div className="text-[12px] font-mono text-[#b4b4b2] mt-1">
                    {client.role}
                  </div>
                  <p className="text-[13px] text-[#868684] mt-3 leading-relaxed">
                    {client.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#333333]/40 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#faf9f6] font-mono">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#f0b66d]" />
                    <span>Verified Partner</span>
                  </div>
                  <Link
                    to="/case-studies"
                    className="text-[12px] font-medium text-[#b4b4b2] group-hover:text-[#faf9f6] flex items-center gap-1 transition-colors"
                  >
                    <span>View work</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Institutional Engagement Callout ─── */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#868684]">
                GOVERNMENT & MULTILATERAL ADVISORY
              </span>
              <h3 className="text-[22px] sm:text-[28px] font-normal text-[#faf9f6] tracking-[-0.29px] mt-2">
                Partner with Centrifuge on your next institutional program.
              </h3>
              <p className="text-[13px] text-[#868684] mt-1 max-w-xl">
                Our consultancy practice assists development agencies and state ministries from planning through national deployment.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-10 px-6 rounded-[33px] bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] text-[13px] font-semibold shrink-0 transition-colors"
            >
              <span>Initiate institutional dialogue</span>
              <ArrowRight className="h-3.5 w-3.5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ClientsPage
