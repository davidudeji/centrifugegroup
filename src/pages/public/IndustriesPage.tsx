import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { HeartPulse, Truck, Landmark, Building2, Store, ArrowRight } from 'lucide-react'

export const IndustriesPage: React.FC = () => {
  const industries = [
    {
      slug: 'healthcare',
      title: 'Healthcare & Public Health Systems',
      icon: HeartPulse,
      desc: 'National health workforce information systems, hospital clinical workflows, medical regulatory credentialing, and cold chain telemetry.',
      clients: 'Federal Ministry of Health, Nursing & Midwifery Council of Nigeria, Carter Center, Heartland Alliance, WHO, UNICEF',
    },
    {
      slug: 'logistics',
      title: 'Logistics, Freight & Inter-State Mobility',
      icon: Truck,
      desc: 'Hardware-agnostic GPS fleet tracking, automated route dispatching, fuel auditing, and offline digital proof of delivery for haulage operators.',
      clients: 'Commercial transport fleets, industrial distribution lines, fuel hauliers',
    },
    {
      slug: 'government',
      title: 'Government Ministries, Departments & Agencies',
      icon: Landmark,
      desc: 'Digital registries, civil service capacity management, Remita-integrated fee collection, and tamper-proof verification portals.',
      clients: 'Federal MDAs, state health ministries, regulatory licensing boards',
    },
    {
      slug: 'enterprise',
      title: 'Large Commercial Enterprises & Energy',
      icon: Building2,
      desc: 'Optimax connected ERP suite, multi-entity accounting, warehouse inventory controls, and mission-critical cloud hosting.',
      clients: 'Nigeria LNG Limited (NLNG), industrial manufacturers, corporate groups',
    },
    {
      slug: 'smes',
      title: 'High-Growth Commercial SMEs',
      icon: Store,
      desc: 'Turnkey point of sale software, multi-warehouse stock auditing, and industrial pure sine wave solar inverters for continuous operations.',
      clients: 'Multi-branch retail networks, diagnostic medical centers, engineering firms',
    },
  ]

  return (
    <div className="w-full text-left bg-[#F5F7FA] text-[#1A1A1A]">
      <SEO
        title="Industries We Transform | Centrifuge Group"
        description="Sector-specific enterprise systems for healthcare, logistics, government, corporate enterprises, and SMEs."
      />

      {/* ─── Hero Banner (UI/UX Spec §1.1 & §4.1) ─── */}
      <section className="bg-[#FFFFFF] text-[#1A1A1A] py-16 sm:py-20 border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] border border-[#008DDA]/30 bg-[#008DDA]/10 text-xs font-semibold uppercase tracking-wider text-[#0077B6]">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>SECTOR SPECIALIZATION</span>
            </div>
            <h1 className="text-[32px] sm:text-[44px] font-bold text-[#0F2C59] tracking-tight leading-[1.2]">
              Deep Domain Expertise for Complex Industries
            </h1>
            <p className="text-[16px] text-[#475569] leading-relaxed max-w-2xl">
              We design software, cloud connectivity, and institutional capacity around the exact operational, legal, and regulatory requirements of our partner sectors.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Industries Grid (UI/UX Spec §3.3 Data Card Module) ─── */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <div
                  key={ind.slug}
                  className="bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] p-6 sm:p-8 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-xs transition-fin group text-left"
                >
                  <div>
                    <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center group-hover:bg-[#008DDA] group-hover:text-white transition-colors duration-200 mb-5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-[18px] font-bold text-[#0F2C59] tracking-tight group-hover:text-[#008DDA] transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-[14px] text-[#475569] mt-2.5 leading-relaxed">
                      {ind.desc}
                    </p>
                    <div className="mt-5 pt-4 border-t border-[#F1F5F9] text-xs">
                      <span className="font-mono text-[#008DDA] text-[11px] block uppercase font-bold tracking-wider mb-1">
                        Verified Partners:
                      </span>
                      <span className="text-[#64748B] leading-relaxed block">{ind.clients}</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#F1F5F9]">
                    <Link
                      to={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#008DDA] hover:text-[#0077B6] transition-colors"
                    >
                      <span>Explore industry solutions</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default IndustriesPage
