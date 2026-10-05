import React from 'react'
import { verifiedClients } from '../../assets'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const TrustSection: React.FC = () => {
  return (
    <section className="bg-[#FFFFFF] py-16 border-b border-[#E2E8F0] text-left">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-[#008DDA]/10 border border-[#008DDA]/20 text-[#0077B6] text-xs font-semibold uppercase tracking-wider mb-2">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>INSTITUTIONAL TRUST & GOVERNANCE</span>
          </div>
          <h2 className="text-[26px] sm:text-[30px] font-bold text-[#0F2C59] tracking-tight">
            Trusted by Federal Ministries, Financial Regulators & Multinationals
          </h2>
          <p className="text-xs sm:text-[13px] text-[#64748B] mt-1.5">
            Mission-critical systems engineered to adhere to stringent enterprise standards and data sovereignty requirements.
          </p>
        </div>

        {/* ─── Client Logo Grid (UI/UX Spec §3.3 Data Card Module: 8px radius, #FFFFFF, 1px #E2E8F0) ─── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 items-center justify-items-center">
          {verifiedClients.map((client) => (
            <div
              key={client.id}
              className="group relative flex flex-col items-center justify-center w-full min-h-[110px] p-3 rounded-[8px] border border-[#E2E8F0] bg-[#FFFFFF] hover:border-[#008DDA]/50 hover:shadow-xs transition-fin"
              title={`${client.name} — ${client.role}`}
            >
              <div className="h-14 w-full flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-[140px] object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-200"
                />
              </div>
              <span className="text-[11px] text-center font-medium text-[#475569] line-clamp-1 mt-2 group-hover:text-[#0F2C59] transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/clients"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#008DDA] hover:text-[#0077B6] transition-colors"
          >
            <span>Explore our full public sector & enterprise client directory</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
  )
}

export default TrustSection
