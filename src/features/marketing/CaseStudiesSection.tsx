import React from 'react'
import { Link } from 'react-router-dom'
import { mockCaseStudies } from '../../data/mockData'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const CaseStudiesSection: React.FC = () => {
  const featured = mockCaseStudies[0]
  const secondary = mockCaseStudies.slice(1, 3)

  return (
    <section className="border-b border-[#E2E8F0] bg-[#F5F7FA] py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F28C28]">
              Case Studies
            </p>
            <h2 className="text-[1.875rem] font-bold leading-tight tracking-[-0.04em] text-[#0F2C59] sm:text-[2.25rem]">
              Production & Active Deployments
            </h2>
            <p className="mt-3 max-w-[520px] text-[0.9375rem] leading-[1.7] text-[#64748B]">
              Authentic stories of how Centrifuge technology resolved mission-critical
              bottlenecks for federal ministries and commercial enterprises.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex shrink-0 items-center gap-1.5 text-[0.875rem] font-semibold text-[#0756A5] hover:text-[#073B70] transition-colors group"
          >
            <span>View all case studies</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Featured Case Study — full-width image-left */}
        <div className="mb-6 overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-white shadow-[0_8px_32px_rgba(11,31,51,0.06)] transition-all duration-200 hover:shadow-[0_16px_48px_rgba(11,31,51,0.1)]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="relative h-64 overflow-hidden bg-[#F1F5F9] sm:h-80 lg:col-span-6 lg:h-auto">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
              {featured.clientLogo && (
                <div className="absolute left-4 top-4 rounded-[5px] border border-[#E2E8F0] bg-white/95 px-3 py-1.5 shadow-sm">
                  <img src={featured.clientLogo} alt={featured.client} className="h-6 max-w-[110px] object-contain" />
                </div>
              )}
            </div>

            <div className="flex flex-col justify-between lg:col-span-6 p-8 sm:p-10">
              <div className="space-y-4">
                <div>
                  <span className="text-[0.75rem] font-mono font-bold uppercase tracking-wider text-[#0756A5]">
                    {featured.industry} · {featured.client}
                  </span>
                  <h3 className="mt-1.5 text-[1.375rem] font-bold leading-snug tracking-tight text-[#0F2C59] sm:text-[1.625rem]">
                    {featured.title}
                  </h3>
                </div>
                <p className="line-clamp-3 text-[0.875rem] leading-[1.7] text-[#475569]">
                  {featured.challenge}
                </p>

                {/* Results */}
                <div className="rounded-[10px] border border-[#F1F5F9] bg-[#F8FAFC] p-4 space-y-2">
                  <span className="block text-[10.5px] font-bold uppercase tracking-[0.15em] text-[#0F2C59]">
                    Measurable Impact
                  </span>
                  {featured.results.slice(0, 2).map((res, i) => (
                    <div key={i} className="flex items-start gap-2 text-[0.8125rem] text-[#475569]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#10B981]" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-[#E2E8F0] pt-5">
                <Link
                  to={`/case-studies/${featured.slug}`}
                  className="inline-flex items-center gap-2 rounded-[6px] bg-[#0756A5] px-5 py-2.5 text-[0.875rem] font-semibold text-white transition-colors hover:bg-[#073B70]"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Case Studies */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {secondary.map((cs) => (
            <div
              key={cs.id}
              className="group flex flex-col rounded-[14px] border border-[#E2E8F0] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#CBD5E1] hover:shadow-[0_16px_40px_rgba(11,31,51,0.08)]"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-[0.75rem] font-mono font-semibold uppercase tracking-wider text-[#0756A5]">
                  {cs.industry}
                </span>
                {cs.clientLogo && (
                  <img src={cs.clientLogo} alt={cs.client} className="h-6 max-w-[80px] object-contain opacity-80" />
                )}
              </div>
              <h4 className="text-[1.0625rem] font-bold leading-snug tracking-tight text-[#0F2C59]">
                {cs.title}
              </h4>
              <p className="mt-2 line-clamp-3 flex-1 text-[0.8125rem] leading-[1.65] text-[#475569]">
                {cs.challenge}
              </p>

              <div className="mt-4 space-y-1.5 border-t border-[#F1F5F9] pt-3">
                {cs.results.slice(0, 2).map((r, i) => (
                  <div key={i} className="flex items-center gap-2 text-[0.75rem] text-[#64748B]">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#10B981]" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 border-t border-[#F1F5F9] pt-4">
                <Link
                  to={`/case-studies/${cs.slug}`}
                  className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-[#0756A5] transition-colors hover:text-[#073B70] group/link"
                >
                  <span>Read Complete Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection
