import React from 'react'
import { verifiedClients } from '../../assets'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const STATS = [
  { num: "10+", label: "Federal institutions" },
  { num: "17+", label: "Years engineering" },
  { num: "6", label: "Sectors served" },
]

export const TrustSection: React.FC = () => {
  return (
    <section className="bg-white border-b border-[#E2E8F0] py-14 lg:py-18">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Top strip: label + link */}
        <div className="flex flex-col items-start gap-3 mb-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#F28C28]" aria-hidden="true" />
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F28C28]">
              Institutional Trust
            </p>
          </div>
          <Link
            to="/clients"
            className="inline-flex shrink-0 items-center gap-1.5 text-[0.8125rem] font-semibold text-[#0756A5] hover:text-[#073B70] transition-colors group"
          >
            <span>View all clients</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Split layout: heading left + logos right */}
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-14 lg:items-center">

          {/* Left: heading + stats */}
          <div>
            <h2 className="text-[1.75rem] sm:text-[2.125rem] font-bold text-[#0F2C59] tracking-tight leading-tight">
              Trusted by Federal Ministries, Regulators & Multinationals
            </h2>
            <p className="mt-4 text-[1rem] leading-[1.75] text-[#475569]">
              From national healthcare informatics to enterprise technology for energy and regulatory bodies, our systems operate at institutional scale.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-8">
              {STATS.map(({ num, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-[2rem] font-extrabold tracking-[-0.04em] text-[#0756A5] leading-none">{num}</span>
                  <span className="text-[0.875rem] text-[#64748B]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: client logos */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            {verifiedClients.slice(0, 8).map((client) => (
              <div
                key={client.id}
                title={`${client.name} — ${client.role}`}
                className="group flex flex-col items-center justify-center gap-2 rounded-[10px] border border-[#E8EDF3] bg-[#FAFBFC] p-4 transition-all duration-200 hover:border-[#0756A5]/20 hover:bg-white hover:shadow-[0_8px_24px_rgba(7,86,165,0.07)]"
              >
                <div className="flex h-11 w-full items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-[100px] object-contain grayscale opacity-60 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
                <span className="text-center text-[10px] font-medium leading-tight text-[#64748B] line-clamp-2 group-hover:text-[#0F2C59] transition-colors">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom banner */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 rounded-[10px] border border-[#E8EDF3] bg-[#F5F8FC] px-6 py-4 text-[0.875rem]">
          <span className="text-[#475569]">
            Enterprise Technology Partner · <span className="font-semibold text-[#102A43]">Abuja, Nigeria</span>
          </span>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 font-semibold text-[#0756A5] hover:text-[#073B70] transition-colors group"
          >
            <span>Start a conversation</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
