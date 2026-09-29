import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockCaseStudies } from '../../data/mockData'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="w-full text-left">
      <SEO
        title="Case Studies & Client Outcomes | Centrifuge Group"
        description="Authentic case studies of enterprise systems and national health workforce platforms delivered by Centrifuge."
      />

      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-[#172333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-[#16C7D9] tracking-wider uppercase">
              VERIFIED CLIENT OUTCOMES
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              Case studies in production.
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Explore how we solved critical operational problems for government ministries, medical councils, and large enterprises.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {mockCaseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-[18px] border border-[#E2E8F0] overflow-hidden shadow-sm hover:border-[#CBD5E1] transition-all grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-5 h-64 sm:h-80 lg:h-auto relative bg-[#0B1F33] overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover opacity-90"
                />
                {cs.clientLogo && (
                  <div className="absolute top-4 left-4 bg-white/95 p-2 rounded-[8px] shadow-sm">
                    <img src={cs.clientLogo} alt={cs.client} className="h-8 max-w-[130px] object-contain" />
                  </div>
                )}
              </div>

              <div className="lg:col-span-7 p-8 lg:p-10 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-[#16C7D9] uppercase tracking-wider">
                    {cs.industry} · {cs.client}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1F33] font-heading mt-1 leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-[#475569] mt-3 leading-relaxed">
                    {cs.challenge}
                  </p>

                  <div className="mt-5 space-y-2 pt-4 border-t border-[#E2E8F0]">
                    <span className="text-xs font-semibold text-[#111827] block">
                      Results Achieved:
                    </span>
                    {cs.results.map((res, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#334155]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-[#F1F5F9] text-[10px] text-[#475569] font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F33] hover:text-[#16C7D9] transition-colors"
                  >
                    <span>Read Full Case Study</span>
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
