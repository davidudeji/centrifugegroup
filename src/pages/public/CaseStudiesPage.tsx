import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockCaseStudies } from '../../data/mockData'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="w-full text-left bg-white text-[#0F172A]">
      <SEO
        title="Case Studies & Client Outcomes | Centrifuge Group"
        description="Authentic case studies of enterprise systems and national health workforce platforms delivered by Centrifuge."
      />

      {/* Hero Header */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">VERIFIED CLIENT OUTCOMES</span>
            </div>
            <h1
              className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              Case studies in production.
            </h1>
            <p className="text-[16px] text-[#94A3B8] leading-relaxed max-w-2xl">
              Explore how we solved critical operational problems for government ministries, medical councils, and corporate enterprises across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto space-y-6">
          {mockCaseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-[12px] border border-[#E2E8F0] overflow-hidden hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200 grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Image */}
              <div className="lg:col-span-5 h-64 sm:h-72 lg:h-auto relative bg-[#E2E8F0] overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
                {cs.clientLogo && (
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-[#E2E8F0] p-2.5 rounded-[8px] shadow-sm">
                    <img src={cs.clientLogo} alt={cs.client} className="h-7 max-w-[130px] object-contain" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#F27A22] block mb-1">
                      {cs.industry} · {cs.client}
                    </span>
                    <h3 className="text-[20px] sm:text-[24px] font-bold text-[#0F172A] leading-snug tracking-[-0.025em]">
                      {cs.title}
                    </h3>
                  </div>

                  <p className="text-[14px] text-[#475569] leading-relaxed">
                    {cs.challenge}
                  </p>

                  <div className="pt-4 border-t border-[#E2E8F0] space-y-2.5">
                    <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#94A3B8] block">
                      Results Achieved:
                    </span>
                    {cs.results.map((res, i) => (
                      <div key={i} className="flex items-start gap-2 text-[13px] text-[#0F172A]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#F27A22] shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-[4px] bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] text-[#475569] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#334155] hover:text-[#F27A22] transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="h-3.5 w-3.5 transition-transform hover:translate-x-0.5" />
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
