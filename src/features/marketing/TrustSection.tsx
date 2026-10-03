import React from 'react'
import { verifiedClients } from '../../assets'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export const TrustSection: React.FC = () => {
  return (
    <section className="bg-white border-b border-[#E2E8F0] py-16" aria-label="Trusted partners">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-eyebrow text-[#16C7D9] mb-1">
              Trusted By
            </p>
            <h2 className="text-[22px] font-heading font-700 text-[#0B1F33] tracking-tight">
              Ministries, agencies &amp; enterprises
            </h2>
          </div>
          <Link
            to="/clients"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#64748B] hover:text-[#0B1F33] transition-colors shrink-0"
            id="trust-view-all-clients"
          >
            View all clients
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
          {verifiedClients.map((client) => (
            <div
              key={client.id}
              className="group flex flex-col items-center justify-center gap-2.5 min-h-[90px] px-3 py-4 rounded-[12px] border border-[#E2E8F0] bg-[#F7F9FA] hover:bg-white hover:border-[#CBD5E1] hover:shadow-sm transition-all duration-150"
              title={`${client.name}${client.role ? ` — ${client.role}` : ''}`}
            >
              <div className="h-10 w-full flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-[100px] object-contain grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-200"
                />
              </div>
              <span className="text-[11px] text-center font-medium text-[#94A3B8] group-hover:text-[#64748B] transition-colors leading-snug line-clamp-2">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSection
