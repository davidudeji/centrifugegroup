import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockCaseStudies } from '../../data/mockData'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const cs = mockCaseStudies.find((item) => item.slug === slug) || mockCaseStudies[0]

  return (
    <div className="w-full text-left bg-white text-[#0F172A]">
      <SEO
        title={`${cs.title} | Case Study`}
        description={cs.challenge}
      />

      {/* Hero Header */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto space-y-4">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#94A3B8] hover:text-[#F27A22] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Case Studies</span>
          </Link>

          <div className="flex items-center gap-3 pt-1">
            <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#F27A22]">
              {cs.industry}
            </span>
            <span className="text-[12px] text-[#94A3B8]">· {cs.client}</span>
          </div>

          <h1
            className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {cs.title}
          </h1>

          <div className="pt-2 flex flex-wrap gap-2">
            {cs.technologies.map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 rounded-[4px] bg-white/10 border border-white/15 text-[11px] text-[#94A3B8] font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto space-y-10">
          {/* Main Visual */}
          <div className="rounded-[12px] overflow-hidden border border-[#E2E8F0] bg-[#0F172A]">
            <img src={cs.image} alt={cs.title} className="w-full h-80 sm:h-[450px] object-cover opacity-90" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Narrative */}
            <div className="lg:col-span-8 space-y-8 bg-white p-8 sm:p-10 rounded-[12px] border border-[#E2E8F0]">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#94A3B8] block mb-2">
                  THE CHALLENGE
                </span>
                <h3 className="text-[20px] font-bold text-[#0F172A] tracking-[-0.025em] mb-3">
                  The Institutional Challenge
                </h3>
                <p className="text-[14px] text-[#475569] leading-relaxed">
                  {cs.challenge}
                </p>
              </div>

              <div className="pt-6 border-t border-[#E2E8F0]">
                <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#F27A22] block mb-2">
                  THE SOLUTION
                </span>
                <h3 className="text-[20px] font-bold text-[#0F172A] tracking-[-0.025em] mb-3">
                  The Centrifuge Solution
                </h3>
                <p className="text-[14px] text-[#334155] leading-relaxed">
                  {cs.solution}
                </p>
              </div>

              <div className="pt-6 border-t border-[#E2E8F0]">
                <h3 className="text-[20px] font-bold text-[#0F172A] tracking-[-0.025em] mb-3">
                  Capabilities & Implementation
                </h3>
                <p className="text-[14px] text-[#475569] leading-relaxed mb-4">
                  {cs.implementation}
                </p>
                <div className="space-y-2.5">
                  {cs.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#475569]">
                      <CheckCircle2 className="h-4 w-4 text-[#F27A22] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#E2E8F0]">
                <h3 className="text-[20px] font-bold text-[#0F172A] tracking-[-0.025em] mb-4">
                  Verified Operational Results
                </h3>
                <div className="space-y-2.5">
                  {cs.results.map((res, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#334155]">
                      <CheckCircle2 className="h-4 w-4 text-[#F27A22] shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Metadata */}
            <div className="lg:col-span-4 space-y-5">
              <div className="bg-white p-6 rounded-[12px] border border-[#E2E8F0] space-y-4">
                <h4 className="text-[15px] font-bold text-[#0F172A]">
                  Project Overview
                </h4>
                <div className="space-y-3 text-[13px]">
                  <div>
                    <span className="text-[#94A3B8] block text-[11px] font-semibold uppercase tracking-[1px] mb-0.5">Client</span>
                    <span className="text-[#0F172A] font-semibold">{cs.client}</span>
                  </div>
                  <div>
                    <span className="text-[#94A3B8] block text-[11px] font-semibold uppercase tracking-[1px] mb-0.5">Sector</span>
                    <span className="text-[#0F172A] font-semibold">{cs.industry}</span>
                  </div>
                  {cs.results.length > 0 && (
                    <div>
                      <span className="text-[#94A3B8] block text-[11px] font-semibold uppercase tracking-[1px] mb-1.5">Key Result</span>
                      <div className="p-3 rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0]">
                        <span className="text-[13px] text-[#334155]">{cs.results[0]}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-[#0F172A] p-6 rounded-[12px] text-center space-y-4">
                <h4 className="text-[16px] font-bold text-white">
                  Ready to deploy similar outcomes?
                </h4>
                <p className="text-[12.5px] text-[#94A3B8]">
                  Our architects can help design a comparable system for your organization.
                </p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 h-10 px-5 rounded-[6px] bg-[#F27A22] text-[#0F172A] hover:bg-[#E06910] text-[13px] font-semibold transition-colors"
                >
                  <span>Request consultation</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudyDetailPage
