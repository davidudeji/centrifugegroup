import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockCaseStudies } from '../../data/mockData'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="dark-page">
      <SEO
        title="Case Studies & Client Outcomes | Centrifuge Group"
        description="Authentic case studies of enterprise systems and national health workforce platforms delivered by Centrifuge."
      />

      {/* â”€â”€â”€ Hero Header â”€â”€â”€ */}
      <section className="dark-section-hero pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <span className="dark-badge">
              <span className="h-2 w-2 rounded-full bg-[#F28C28] ring-4 ring-[#F28C28]/20" aria-hidden="true" />
              Case Studies in Production
            </span>
            <h1 className="text-[32px] sm:text-[48px] font-bold text-[#F0F4FF] tracking-tight leading-[1.1]">
              Client Outcomes & Real-World Impact
            </h1>
            <p className="text-[17px] text-[#8BA4C8] leading-relaxed max-w-2xl">
              Explore how we solved critical operational challenges for government ministries, medical regulatory councils, and corporate enterprises across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Case Studies List â”€â”€â”€ */}
      <section className="dark-section-b py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {mockCaseStudies.map((cs) => (
            <div
              key={cs.id}
              className="dark-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 text-left"
            >
              <div className="lg:col-span-5 h-64 sm:h-80 lg:h-auto relative bg-white/[0.03] overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 opacity-80"
                />
                {cs.clientLogo && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-white/20 p-2 rounded-[4px] shadow-xs">
                    <img src={cs.clientLogo} alt={cs.client} className="h-7 max-w-[130px] object-contain" />
                  </div>
                )}
              </div>

              <div className="lg:col-span-7 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono font-bold text-[#60ABFF] uppercase tracking-wider">
                    {cs.industry} Â· {cs.client}
                  </div>
                  <h3 className="text-[20px] sm:text-[24px] font-bold text-[#F0F4FF] tracking-tight mt-1 leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-[14px] text-[#8BA4C8] mt-3 leading-relaxed">
                    {cs.solution}
                  </p>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {cs.results.map((res, i) => (
                      <div
                        key={i}
                        className="bg-white/[0.04] border border-white/[0.08] p-3 rounded-[4px] text-xs font-semibold text-[#8BA4C8] flex items-start gap-2"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-white/[0.07] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-[4px] bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono font-medium text-[#8BA4C8]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[4px] bg-[#0756A5] text-white hover:bg-[#073B70] text-xs font-semibold transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CaseStudiesPage

