import React from 'react'
import { Link } from 'react-router-dom'
import { mockCaseStudies } from '../../data/mockData'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const CaseStudiesSection: React.FC = () => {
  const featured = mockCaseStudies[0]
  const secondary = mockCaseStudies.slice(1, 3)

  return (
    <section className="py-20 lg:py-28 bg-[#F7F9FA] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 text-left gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#16C7D9]">
              Verified Client Outcomes
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-heading mt-2 tracking-tight">
              Case studies in production.
            </h2>
            <p className="text-base text-[#64748B] mt-2 max-w-xl">
              Authentic stories of how Centrifuge technology resolved operational bottlenecks for federal ministries and commercial enterprises.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B1F33] hover:text-[#16C7D9] transition-colors shrink-0"
          >
            <span>View all case studies</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Featured Case Study Card */}
        <div className="bg-white rounded-[16px] border border-[#E2E8F0] shadow-sm overflow-hidden mb-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 h-64 sm:h-80 lg:h-auto relative bg-[#0B1F33] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover opacity-90"
              />
              {featured.clientLogo && (
                <div className="absolute top-4 left-4 bg-white/95 p-2 rounded-[8px] shadow-sm">
                  <img src={featured.clientLogo} alt={featured.client} className="h-8 max-w-[120px] object-contain" />
                </div>
              )}
            </div>

            <div className="lg:col-span-6 p-8 sm:p-10 space-y-4">
              <div className="text-xs font-mono font-bold text-[#16C7D9] uppercase tracking-wider">
                {featured.industry}
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F33] font-heading leading-tight">
                {featured.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed line-clamp-3">
                {featured.challenge}
              </p>

              <div className="pt-2 border-t border-[#E2E8F0] space-y-2">
                <span className="text-xs font-semibold text-[#111827] block">Key Measurable Outcomes:</span>
                {featured.results.slice(0, 2).map((res, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#475569]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to={`/case-studies/${featured.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[8px] bg-[#0B1F33] text-white text-xs font-semibold hover:bg-[#071521] transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondary.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-[14px] border border-[#E2E8F0] p-6 sm:p-7 flex flex-col justify-between hover:border-[#CBD5E1] transition-all text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider font-semibold">
                    {cs.industry}
                  </span>
                  {cs.clientLogo && (
                    <img src={cs.clientLogo} alt={cs.client} className="h-6 max-w-[80px] object-contain" />
                  )}
                </div>
                <h4 className="text-lg font-bold text-[#0B1F33] font-heading leading-snug">
                  {cs.title}
                </h4>
                <p className="text-xs text-[#64748B] mt-2 line-clamp-3 leading-relaxed">
                  {cs.solution}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-xs font-medium text-[#111827]">
                  {cs.client}
                </span>
                <Link
                  to={`/case-studies/${cs.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0B1F33] hover:text-[#16C7D9] transition-colors"
                >
                  <span>Read Study</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
