import React from 'react'
import { verifiedClients } from '../../assets'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export const TrustSection: React.FC = () => {
  return (
    <section className="bg-[#000000] py-16 border-b border-[#1e1e1d]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[10px] uppercase tracking-[2px] font-normal text-[#868684]">
            TRUSTED BY MINISTRIES & ENTERPRISES
          </p>
          <h2 className="text-[28px] sm:text-[32px] font-normal text-[#faf9f6] tracking-[-0.64px] mt-2 leading-[1.15]">
            Technology built for real operations.
          </h2>
        </div>

        {/* ─── Warp Trusted-By Logo Grid (warp_design.md §167-171 & §264-265) ─── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-x-10 gap-y-8 items-center justify-items-center">
          {verifiedClients.map((client) => (
            <div
              key={client.id}
              className="group relative flex flex-col items-center justify-center w-full h-[80px] transition-all"
              title={`${client.name} — ${client.role}`}
            >
              <div className="h-12 w-full flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-[120px] object-contain grayscale invert brightness-200 opacity-45 group-hover:opacity-90 transition-opacity duration-150"
                />
              </div>
              <span className="text-[10px] text-center font-normal text-[#666469] line-clamp-1 mt-1 group-hover:text-[#868684] transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/clients"
            className="inline-flex items-center gap-1.5 text-[13px] text-[#868684] hover:text-[#faf9f6] hover:underline transition-colors tracking-[-0.14px]"
          >
            <span>Explore our public sector & enterprise client directory</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  )
}
export default TrustSection
