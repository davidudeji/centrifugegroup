import React from 'react'
import { Link } from 'react-router-dom'
import { mockCaseStudies } from '../../data/mockData'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const CaseStudiesSection: React.FC = () => {
  const featured = mockCaseStudies[0]
  const secondary = mockCaseStudies.slice(1, 3)

  return (
    <section className="section-py bg-[#F7F9FA] border-b border-[#E2E8F0]">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="badge-eyebrow mb-4">Case Studies</div>
            <h2 className="text-h2 text-[#0B1F33] mb-4">
              Verified client outcomes.
            </h2>
            <p className="text-body-lg text-[#64748B]">
              Authentic stories of how Centrifuge technology resolved operational
              bottlenecks for federal ministries and commercial enterprises.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#64748B] hover:text-[#0B1F33] transition-colors shrink-0"
            id="case-studies-view-all"
          >
            View all case studies
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Featured case study */}
        <div className="bg-white rounded-[16px] border border-[#E2E8F0] overflow-hidden mb-6 group hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Image */}
            <div className="lg:col-span-5 h-64 lg:h-auto relative bg-[#0B1F33] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-500"
              />
              {featured.clientLogo && (
                <div className="absolute top-4 left-4 bg-white/95 border border-[#E2E8F0] px-3 py-1.5 rounded-full shadow-sm">
                  <img
                    src={featured.clientLogo}
                    alt={featured.client}
                    className="h-5 max-w-[90px] object-contain"
                  />
                </div>
              )}
              {/* Industry badge */}
              <div className="absolute bottom-4 left-4">
                <span className="text-[11px] font-semibold uppercase tracking-widest bg-[#16C7D9] text-[#0B1F33] px-2.5 py-1 rounded-full">
                  {featured.industry}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-widest mb-3 block">
                  {featured.client}
                </span>
                <h3 className="text-[26px] sm:text-[30px] font-heading font-700 text-[#0B1F33] tracking-tight leading-snug mb-4">
                  {featured.title}
                </h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed line-clamp-3 mb-6">
                  {featured.challenge}
                </p>

                {/* Results */}
                <div className="space-y-2.5 pt-5 border-t border-[#E2E8F0]">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-[#94A3B8] mb-3">
                    Key outcomes
                  </p>
                  {featured.results.slice(0, 3).map((res, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[14px] text-[#64748B]">
                      <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                <Link
                  to={`/case-studies/${featured.slug}`}
                  className="btn-primary text-[14px] py-2.5 px-6"
                  id={`case-study-featured-${featured.slug}`}
                >
                  Read Full Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {secondary.map((cs) => (
            <Link
              key={cs.id}
              to={`/case-studies/${cs.slug}`}
              className="group bg-white rounded-[16px] border border-[#E2E8F0] p-7 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold text-[#16C7D9] uppercase tracking-widest">
                    {cs.industry}
                  </span>
                  {cs.clientLogo && (
                    <img
                      src={cs.clientLogo}
                      alt={cs.client}
                      className="h-5 max-w-[80px] object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                </div>
                <h4 className="text-[18px] font-heading font-700 text-[#0B1F33] tracking-tight leading-snug mb-2 group-hover:text-[#16C7D9] transition-colors">
                  {cs.title}
                </h4>
                <p className="text-[13px] text-[#64748B] line-clamp-3 leading-relaxed">
                  {cs.solution}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-[12px] font-medium text-[#94A3B8]">
                  {cs.client}
                </span>
                <span className="inline-flex items-center gap-1 text-[13px] font-medium text-[#64748B] group-hover:text-[#16C7D9] transition-colors">
                  Read study
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection
