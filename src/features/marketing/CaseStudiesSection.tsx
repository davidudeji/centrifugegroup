import React from 'react'
import { Link } from 'react-router-dom'
import { mockCaseStudies } from '../../data/mockData'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const CaseStudiesSection: React.FC = () => {
  const featured = mockCaseStudies[0]
  const secondary = mockCaseStudies.slice(1, 3)

  return (
    <section className="py-20 lg:py-24 bg-[#000000] border-b border-[#1e1e1d]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 text-left gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684] mb-3">
              <span>VERIFIED CLIENT OUTCOMES</span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] font-normal text-[#faf9f6] tracking-[-1.13px] leading-[1.05]">
              Case studies in production.
            </h2>
            <p className="text-[15px] text-[#868684] tracking-[-0.14px] mt-2 max-w-xl leading-[1.4]">
              Authentic stories of how Centrifuge technology resolved operational bottlenecks for federal ministries and commercial enterprises.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-[14px] text-[#faf9f6] hover:text-[#f0b66d] transition-colors shrink-0 tracking-[-0.14px]"
          >
            <span>View all case studies</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ─── Warp Featured Case Study Card (warp_design.md §162-166 & §258) ─── */}
        <div className="bg-[#1e1e1d] rounded-[20px] border border-[#1e1e1d] hover:border-[#333333] transition-colors overflow-hidden mb-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 h-64 sm:h-80 lg:h-auto relative bg-[#000000] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover opacity-80 hover:opacity-95 transition-opacity duration-300"
              />
              {featured.clientLogo && (
                <div className="absolute top-4 left-4 bg-[#000000]/85 border border-[#333333] px-3 py-1.5 rounded-[50px]">
                  <img src={featured.clientLogo} alt={featured.client} className="h-6 max-w-[100px] object-contain invert brightness-200" />
                </div>
              )}
            </div>

            <div className="lg:col-span-6 p-8 sm:p-10 space-y-4">
              <div className="text-[10px] font-mono text-[#f0b66d] uppercase tracking-[1px]">
                {featured.industry}
              </div>
              <h3 className="text-[24px] sm:text-[28px] font-normal text-[#faf9f6] tracking-[-0.64px] leading-snug">
                {featured.title}
              </h3>
              <p className="text-[14px] text-[#868684] leading-relaxed line-clamp-3 tracking-[-0.14px]">
                {featured.challenge}
              </p>

              <div className="pt-3 border-t border-[#333333]/50 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-[1px] text-[#faf9f6] block">Key Measurable Outcomes:</span>
                {featured.results.slice(0, 2).map((res, i) => (
                  <div key={i} className="flex items-start gap-2 text-[13px] text-[#b4b4b2]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#f0b66d] shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to={`/case-studies/${featured.slug}`}
                  className="inline-flex items-center justify-center px-[22px] py-[10px] rounded-[33px] text-[14px] font-semibold bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] transition-colors duration-150 tracking-[-0.14px]"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Warp Secondary Testimonial Cards (warp_design.md §162-166) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondary.map((cs) => (
            <div
              key={cs.id}
              className="bg-[#1e1e1d] rounded-[20px] border border-[#1e1e1d] hover:border-[#333333] p-7 flex flex-col justify-between transition-colors text-left group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-[#f0b66d] uppercase tracking-[1px]">
                    {cs.industry}
                  </span>
                  {cs.clientLogo && (
                    <img src={cs.clientLogo} alt={cs.client} className="h-5 max-w-[80px] object-contain invert brightness-200 opacity-60" />
                  )}
                </div>
                <h4 className="text-[18px] font-normal text-[#faf9f6] tracking-[-0.18px] leading-[1.38]">
                  {cs.title}
                </h4>
                <p className="text-[13px] text-[#868684] mt-2 line-clamp-3 leading-relaxed tracking-[-0.14px]">
                  {cs.solution}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#333333]/50 flex items-center justify-between">
                <span className="text-[12px] text-[#b4b4b2]">
                  {cs.client}
                </span>
                <Link
                  to={`/case-studies/${cs.slug}`}
                  className="inline-flex items-center gap-1 text-[13px] text-[#faf9f6] group-hover:text-[#f0b66d] transition-colors"
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
export default CaseStudiesSection
