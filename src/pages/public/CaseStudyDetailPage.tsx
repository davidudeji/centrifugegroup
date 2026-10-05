import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockCaseStudies } from '../../data/mockData'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const cs = mockCaseStudies.find((item) => item.slug === slug) || mockCaseStudies[0]

  return (
    <div className="w-full text-left bg-[#F5F7FA] text-[#1A1A1A]">
      <SEO
        title={`${cs.title} | Centrifuge Case Study`}
        description={cs.challenge}
      />

      {/* ─── Hero Header (UI/UX Spec §1.1 & §4.1) ─── */}
      <section className="bg-[#FFFFFF] text-[#1A1A1A] py-16 sm:py-20 border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#008DDA] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Case Studies</span>
          </Link>

          <div className="pt-2 flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#008DDA] px-2.5 py-0.5 rounded-[4px] bg-[#008DDA]/10 border border-[#008DDA]/30">
              {cs.industry}
            </span>
            <span className="text-xs text-[#64748B]">· {cs.client}</span>
          </div>

          <h1 className="text-[32px] sm:text-[44px] font-bold text-[#0F2C59] tracking-tight leading-[1.2]">
            {cs.title}
          </h1>

          <div className="pt-3 flex flex-wrap gap-2">
            {cs.technologies.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-[4px] bg-[#F1F5F9] border border-[#E2E8F0] text-xs font-mono font-medium text-[#475569]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Main Content (UI/UX Spec §3.3 Data Card Module) ─── */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Main Visual */}
          <div className="rounded-[8px] overflow-hidden border border-[#E2E8F0] bg-[#FFFFFF] shadow-2xs">
            <img src={cs.image} alt={cs.title} className="w-full h-80 sm:h-[450px] object-cover" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Narrative */}
            <div className="lg:col-span-8 space-y-8 bg-[#FFFFFF] p-6 sm:p-10 rounded-[8px] border border-[#E2E8F0] shadow-2xs">
              <div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#EF4444] block mb-2">
                  THE CHALLENGE
                </span>
                <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight mb-2">
                  The Institutional Challenge
                </h3>
                <p className="text-[14px] text-[#475569] leading-relaxed">
                  {cs.challenge}
                </p>
              </div>

              <div className="pt-6 border-t border-[#F1F5F9]">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#10B981] block mb-2">
                  THE SOLUTION
                </span>
                <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight mb-2">
                  The Centrifuge Engineering Response
                </h3>
                <p className="text-[14px] text-[#475569] leading-relaxed">
                  {cs.solution}
                </p>
              </div>

              <div className="pt-6 border-t border-[#F1F5F9]">
                <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight mb-3">
                  Capabilities & Implementation Scope
                </h3>
                <p className="text-[14px] text-[#475569] leading-relaxed mb-4">
                  {cs.implementation}
                </p>
                <div className="space-y-2.5">
                  {cs.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[13.5px] text-[#1A1A1A]">
                      <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span className="font-medium">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#F1F5F9]">
                <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight mb-3">
                  Verified Operational Results
                </h3>
                <div className="space-y-2.5">
                  {cs.results.map((res, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[13.5px] text-[#1A1A1A]">
                      <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span className="font-medium">{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Metadata */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#FFFFFF] p-6 rounded-[8px] border border-[#E2E8F0] space-y-4 shadow-2xs">
                <h4 className="text-[15px] font-bold text-[#0F2C59] tracking-tight">
                  Project Overview
                </h4>
                <div className="space-y-3 text-[13px]">
                  <div>
                    <span className="text-[#64748B] block text-[11px] font-mono uppercase tracking-wider font-semibold">Client</span>
                    <span className="text-[#1A1A1A] font-semibold">{cs.client}</span>
                  </div>
                  <div>
                    <span className="text-[#64748B] block text-[11px] font-mono uppercase tracking-wider font-semibold">Sector</span>
                    <span className="text-[#1A1A1A] font-semibold">{cs.industry}</span>
                  </div>
                  {cs.results.length > 0 && (
                    <div>
                      <span className="text-[#64748B] block text-[11px] font-mono uppercase tracking-wider font-semibold mb-1.5">Key Metric</span>
                      <div className="p-3 rounded-[4px] bg-[#F8FAFC] border border-[#E2E8F0]">
                        <span className="text-[13px] font-medium text-[#1A1A1A]">{cs.results[0]}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-[#FFFFFF] p-6 rounded-[8px] border border-[#E2E8F0] text-center space-y-4 shadow-2xs">
                <h4 className="text-[16px] font-bold text-[#0F2C59]">
                  Ready to Deploy Similar Outcomes?
                </h4>
                <p className="text-[13px] text-[#64748B]">
                  Our architects can help design and deploy a comparable system for your organization.
                </p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#008DDA] text-white hover:bg-[#0077B6] text-xs font-semibold transition-colors"
                >
                  <span>Request Consultation</span>
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
