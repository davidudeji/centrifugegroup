import React from 'react'
import { verifiedClients } from '../../assets'
import { Link } from 'react-router-dom'

export const TrustSection: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs uppercase tracking-widest font-bold text-[#64748B]">
            Verified Enterprise & Institutional Partnerships
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F33] font-heading mt-1">
            Technology built for real operations.
          </h2>
        </div>

        {/* Clean Logo Grid using Verified Client Assets */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 sm:gap-8 items-center justify-items-center">
          {verifiedClients.map((client) => (
            <div
              key={client.id}
              className="group relative flex flex-col items-center justify-center p-3 rounded-[10px] hover:bg-[#F8FAFC] transition-all duration-200 w-full"
              title={`${client.name} — ${client.role}`}
            >
              <div className="h-14 sm:h-16 w-full flex items-center justify-center p-1">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-[120px] object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200"
                />
              </div>
              <span className="text-[10px] text-center font-medium text-[#64748B] line-clamp-1 mt-1 opacity-75 group-hover:opacity-100">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/clients"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F33] hover:text-[#16C7D9] transition-colors"
          >
            <span>Explore our public sector & enterprise client directory</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
