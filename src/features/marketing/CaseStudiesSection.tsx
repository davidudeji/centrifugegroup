import React from 'react'
import { Link } from 'react-router-dom'
import { mockCaseStudies } from '../../data/mockData'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Reveal, StaggerReveal } from '../../components/ui/Reveal'

export const CaseStudiesSection: React.FC = () => {
  const featured = mockCaseStudies[0]
  const secondary = mockCaseStudies.slice(1, 3)

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E2E8F0] text-left">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#008DDA]/10 border border-[#008DDA]/20 text-xs font-semibold uppercase tracking-wider text-[#0077B6] mb-3">
              <span>VERIFIED CLIENT OUTCOMES</span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0F2C59] tracking-tight">
              Case Studies in Production & Active Deployment
            </h2>
            <p className="text-[15px] text-[#64748B] mt-2 max-w-xl leading-relaxed">
              Authentic stories of how Centrifuge technology resolved mission-critical bottlenecks for federal ministries and commercial enterprises.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#008DDA] hover:text-[#0077B6] transition-colors shrink-0"
          >
            <span>View all case studies</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ─── Featured Case Study Card (Data Card Module §3.3) ─── */}
        <div className="bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs transition-fin overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 h-64 sm:h-80 lg:h-auto relative bg-[#F1F5F9] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
              />
              {featured.clientLogo && (
                <div className="absolute top-4 left-4 bg-white/95 border border-[#E2E8F0] px-3 py-1.5 rounded-[4px] shadow-xs">
                  <img src={featured.clientLogo} alt={featured.client} className="h-6 max-w-[110px] object-contain" />
                </div>
              )}
              {/* Industry badge */}
              <div className="absolute bottom-4 left-4">
                <span className="text-[11px] font-semibold uppercase tracking-widest bg-[#16C7D9] text-[#0B1F33] px-2.5 py-1 rounded-full">
                  {featured.industry}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-10 space-y-4">
              <div className="text-xs font-mono font-bold text-[#008DDA] uppercase tracking-wider">
                {featured.industry} · {featured.client}
              </div>
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0F2C59] tracking-tight leading-snug">
                {featured.title}
              </h3>
              <p className="text-[14px] text-[#475569] leading-relaxed line-clamp-3">
                {featured.challenge}
              </p>

              <div className="pt-3 border-t border-[#F1F5F9] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F2C59] block">
                  Measurable Operational Impact:
                </span>
                {featured.results.slice(0, 2).map((res, i) => (
                  <div key={i} className="flex items-start gap-2 text-[13px] text-[#475569]">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                <Link
                  to={`/case-studies/${featured.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] text-sm font-semibold bg-[#008DDA] text-white hover:bg-[#0077B6] transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ─── Secondary Case Study Cards ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {secondary.map((cs) => (
          <Link
            key={cs.id}
            className="bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs p-6 flex flex-col justify-between transition-fin group text-left"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold text-[#008DDA] uppercase tracking-wider">
                  {cs.industry}
                </span>
                {cs.clientLogo && (
                  <img src={cs.clientLogo} alt={cs.client} className="h-6 max-w-[90px] object-contain opacity-85" />
                )}
              </div>
              <h4 className="text-[18px] font-bold text-[#0F2C59] tracking-tight leading-snug">
                {cs.title}
              </h4>
              <p className="text-[13px] text-[#475569] mt-2 line-clamp-3 leading-relaxed">
                {cs.challenge}
              </p>

              <div className="mt-4 pt-3 border-t border-[#F1F5F9] space-y-1.5">
                {cs.results.slice(0, 2).map((r, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#64748B]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981] shrink-0" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F1F5F9]">
              <Link
                to={`/case-studies/${cs.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#008DDA] hover:text-[#0077B6] transition-colors"
              >
                <span>Read Complete Case Study</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Link>
        ))}
      </StaggerReveal>
    </div>
    </section >
  )
}

export default CaseStudiesSection
