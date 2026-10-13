import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockCaseStudies } from '../../data/mockData'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="w-full text-left bg-[#F5F7FA] text-[#1A1A1A]">
      <SEO
        title="Case Studies & Client Outcomes | Centrifuge Group"
        description="Authentic case studies of enterprise systems and national health workforce platforms delivered by Centrifuge."
      />

      {/* ─── Hero Header (UI/UX Spec §1.1 & §4.1) ─── */}
      <section className="bg-[#FFFFFF] text-[#1A1A1A] py-16 sm:py-20 border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-[32px] sm:text-[44px] font-bold text-[#0F2C59] tracking-tight leading-[1.2]">
              Case Studies in Production
            </h1>
            <p className="text-[16px] text-[#475569] leading-relaxed max-w-2xl">
              Explore how we solved critical operational challenges for government ministries, medical regulatory councils, and corporate enterprises across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Case Studies List (UI/UX Spec §3.3 Data Card Module) ─── */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {mockCaseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] overflow-hidden hover:border-[#CBD5E1] hover:shadow-xs transition-fin grid grid-cols-1 lg:grid-cols-12 text-left"
            >
              <div className="lg:col-span-5 h-64 sm:h-80 lg:h-auto relative bg-[#F1F5F9] overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {cs.clientLogo && (
                  <div className="absolute top-4 left-4 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E2E8F0] p-2 rounded-[4px] shadow-xs">
                    <img src={cs.clientLogo} alt={cs.client} className="h-7 max-w-[130px] object-contain" />
                  </div>
                )}
              </div>

              <div className="lg:col-span-7 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono font-bold text-[#008DDA] uppercase tracking-wider">
                    {cs.industry} · {cs.client}
                  </div>
                  <h3 className="text-[20px] sm:text-[24px] font-bold text-[#0F2C59] tracking-tight mt-1 leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-[14px] text-[#475569] mt-3 leading-relaxed">
                    {cs.solution}
                  </p>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {cs.results.map((res, i) => (
                      <div
                        key={i}
                        className="bg-[#F8FAFC] border border-[#E2E8F0] p-3 rounded-[4px] text-xs font-semibold text-[#1A1A1A] flex items-start gap-2"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-[#F1F5F9] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-[4px] bg-[#F1F5F9] border border-[#E2E8F0] text-[11px] font-mono font-medium text-[#64748B]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[4px] bg-[#008DDA] text-white hover:bg-[#0077B6] text-xs font-semibold transition-colors"
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
