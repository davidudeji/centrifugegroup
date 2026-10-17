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
    <div className="dark-page">
      <SEO
        title="Industries We Transform | Centrifuge Group"
        description="Sector-specific enterprise systems for healthcare, logistics, government, corporate enterprises, and SMEs."
      />

      {/* â”€â”€â”€ Hero Banner â”€â”€â”€ */}
      <section className="dark-section-hero pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <span className="dark-badge">
              <span className="h-2 w-2 rounded-full bg-[#F28C28] ring-4 ring-[#F28C28]/20" aria-hidden="true" />
              Target Sectors & Verticals
            </span>
            <h1 className="text-[32px] sm:text-[48px] font-bold text-[#F0F4FF] tracking-tight leading-[1.1]">
              Deep Domain Expertise for Complex Industries
            </h1>
            <p className="text-[17px] text-[#8BA4C8] leading-relaxed max-w-2xl">
              We design software, cloud connectivity, and institutional capacity around the exact operational, legal, and regulatory requirements of our partner sectors.
            </p>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Industries Grid â”€â”€â”€ */}
      <section className="dark-section-b py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <div
                  key={ind.slug}
                  className="dark-card p-6 sm:p-8 flex flex-col justify-between group text-left"
                >
                  <div>
                    <div className="dark-icon-bubble group-hover:bg-[rgba(7,86,165,0.45)] transition-colors mb-5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-[18px] font-bold text-[#F0F4FF] tracking-tight group-hover:text-[#60ABFF] transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-[14px] text-[#8BA4C8] mt-2.5 leading-relaxed">
                      {ind.desc}
                    </p>
                    <div className="mt-5 pt-4 border-t border-white/[0.07] text-xs">
                      <span className="font-mono text-[#60ABFF] text-[11px] block uppercase font-bold tracking-wider mb-1">
                        Verified Partners:
                      </span>
                      <span className="text-[#8BA4C8] leading-relaxed block">{ind.clients}</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/[0.07]">
                    <Link
                      to={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#60ABFF] hover:text-[#F28C28] transition-colors"
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

