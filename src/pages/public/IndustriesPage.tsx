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
    <div className="w-full text-left bg-[#000000] text-[#faf9f6]">
      <SEO
        title="Industries We Transform | Centrifuge Group"
        description="Sector-specific enterprise systems for healthcare, logistics, government, corporate enterprises, and SMEs."
      />

      {/* ─── Hero Banner (Warp Obsidian #000000) ─── */}
      <section className="bg-[#000000] text-[#faf9f6] py-16 sm:py-24 border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684]">
              <span>SECTOR SPECIALIZATION</span>
            </div>
            <h1 className="text-[36px] sm:text-[56px] font-normal text-[#faf9f6] tracking-[-2.24px] leading-[0.98]">
              Deep domain expertise for complex industries.
            </h1>
            <p className="text-[16px] text-[#868684] tracking-[-0.18px] leading-relaxed">
              We design software, cloud connectivity, and institutional capacity around the exact operational, legal, and environmental realities of our partner sectors.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Industries Grid (Warp Graphite #121212) ─── */}
      <section className="py-20 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <div
                  key={ind.slug}
                  className="bg-[#1e1e1d] rounded-[20px] border border-[#1e1e1d] p-8 flex flex-col justify-between hover:border-[#333333] transition-all group"
                >
                  <div>
                    <div className="h-10 w-10 rounded-[8px] bg-[#121212] border border-[#333333] flex items-center justify-center group-hover:border-[#f0b66d] transition-colors mb-5">
                      <Icon className="h-5 w-5 text-[#f0b66d]" />
                    </div>
                    <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px] group-hover:text-[#f0b66d] transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-[13px] text-[#868684] mt-2.5 leading-relaxed tracking-[-0.14px]">
                      {ind.desc}
                    </p>
                    <div className="mt-5 pt-4 border-t border-[#333333]/50 text-[12px]">
                      <span className="font-mono text-[#b4b4b2] text-[11px] block uppercase tracking-[1px] mb-1">
                        Verified Partners:
                      </span>
                      <span className="text-[#868684]">{ind.clients}</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#333333]/50">
                    <Link
                      to={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#faf9f6] group-hover:text-[#f0b66d] transition-colors"
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
