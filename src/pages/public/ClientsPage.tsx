import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { verifiedClients } from '../../assets'
import { Building2, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '../../components/ui/Button'

export const ClientsPage: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<string>('all')

  const sectors = ['all', 'Healthcare & Government', 'Enterprise & Energy', 'International NGO & Health', 'Healthcare & Regulatory']

  const filteredClients = selectedSector === 'all'
    ? verifiedClients
    : verifiedClients.filter(c => c.sector.toLowerCase().includes(selectedSector.toLowerCase()) || selectedSector.toLowerCase().includes(c.sector.toLowerCase()))

  return (
    <div className="w-full text-left">
      <SEO
        title="Verified Clients & Institutional Partners"
        description="Explore the federal ministries, healthcare councils, international NGOs, and enterprise organizations that trust Centrifuge Group."
      />

      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-[#172333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-[#16C7D9] tracking-wider uppercase">
              PROVEN PARTNERSHIPS
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              Organizations that depend on Centrifuge.
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              We build mission-critical systems for federal ministries, healthcare regulatory councils, energy conglomerates, and humanitarian institutions across Nigeria and Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Directory & Filter */}
      <section className="py-16 bg-[#F7F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sector Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#E2E8F0]">
            <span className="text-xs font-semibold text-[#64748B] mr-2">Filter by Sector:</span>
            {sectors.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSector(sec)}
                className={`text-xs font-medium px-3 py-1.5 rounded-[6px] transition-colors ${
                  selectedSector === sec
                    ? 'bg-[#0B1F33] text-white shadow-xs font-semibold'
                    : 'bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#F1F5F9]'
                }`}
              >
                {sec === 'all' ? 'All Partners' : sec}
              </button>
            ))}
          </div>

          {/* Client Directory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClients.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-[16px] border border-[#E2E8F0] p-7 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-md transition-all group"
              >
                <div>
                  <div className="h-20 w-full flex items-center justify-start border-b border-[#E2E8F0]/80 pb-4 mb-4">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-16 max-w-[180px] object-contain"
                    />
                  </div>

                  <span className="text-[11px] font-mono font-bold text-[#16C7D9] uppercase tracking-wider">
                    {client.sector}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B1F33] font-heading mt-1 group-hover:text-[#16C7D9] transition-colors">
                    {client.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#111827] mt-1">
                    {client.role}
                  </div>
                  <p className="text-xs text-[#64748B] mt-2.5 leading-relaxed">
                    {client.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#15803D] font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A]" />
                    <span>Verified Partner</span>
                  </div>
                  <Link
                    to="/case-studies"
                    className="text-xs font-bold text-[#0B1F33] group-hover:text-[#16C7D9] flex items-center gap-1 transition-colors"
                  >
                    <span>Outcomes</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Principles Callout */}
          <div className="mt-16 p-8 rounded-[16px] bg-[#071521] text-white border border-[#172333] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-heading">
                Ready to explore enterprise partnership?
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] max-w-xl">
                We sign formal NDAs and adhere to Nigerian Data Protection Regulation (NDPR) and international security standards.
              </p>
            </div>
            <Link to="/contact">
              <Button variant="primary" size="md">
                Schedule Institutional Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ClientsPage
