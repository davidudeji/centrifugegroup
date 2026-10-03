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
    <div className="w-full text-left bg-white text-[#0F172A]">
      <SEO
        title="Industries We Transform | Centrifuge Group"
        description="Sector-specific enterprise systems for healthcare, logistics, government, corporate enterprises, and SMEs."
      />

      {/* Hero Banner */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">SECTOR SPECIALIZATION</span>
            </div>
            <h1
              className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              Deep domain expertise for complex industries.
            </h1>
            <p className="text-[16px] text-[#94A3B8] leading-relaxed max-w-2xl">
              We design software, cloud connectivity, and institutional capacity around the exact operational, legal, and environmental realities of our partner sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-14 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <div
                  key={ind.slug}
                  className="bg-white rounded-[12px] border border-[#E2E8F0] p-7 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200 group"
                >
                  <div>
                    <div className="h-10 w-10 rounded-[8px] bg-[#FFF7ED] border border-[#FDBA74]/30 flex items-center justify-center mb-5">
                      <Icon className="h-5 w-5 text-[#F27A22]" />
                    </div>
                    <h3 className="text-[17px] font-bold text-[#0F172A] leading-snug group-hover:text-[#334155] transition-colors mb-2">
                      {ind.title}
                    </h3>
                    <p className="text-[13px] text-[#475569] leading-relaxed">
                      {ind.desc}
                    </p>
                    <div className="mt-5 pt-4 border-t border-[#E2E8F0]">
                      <span className="text-[10px] font-semibold uppercase tracking-[1px] text-[#94A3B8] block mb-1">
                        Verified Partners:
                      </span>
                      <span className="text-[12px] text-[#475569]">{ind.clients}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
                    <Link
                      to={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#334155] group-hover:text-[#F27A22] transition-colors"
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
