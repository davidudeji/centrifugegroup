import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockCaseStudies } from '../../data/mockData'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const cs = mockCaseStudies.find((item) => item.slug === slug) || mockCaseStudies[0]

  return (
    <div className="dark-page">
      <SEO
        title={`${cs.title} | Centrifuge Case Study`}
        description={cs.challenge}
      />

      {/* â”€â”€â”€ Hero Header â”€â”€â”€ */}
      <section className="dark-section-hero pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8BA4C8] hover:text-[#60ABFF] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Case Studies</span>
          </Link>

          <div className="pt-2 text-sm text-[#8BA4C8]">
            <span>{cs.industry}</span>
            <span> Â· {cs.client}</span>
          </div>

          <h1 className="text-[32px] sm:text-[44px] font-bold text-[#F0F4FF] tracking-tight leading-[1.1]">
            {cs.title}
          </h1>

          <div className="pt-2 flex flex-wrap gap-2">
            {cs.technologies.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-[4px] bg-white/[0.04] border border-white/[0.09] text-xs font-mono font-medium text-[#8BA4C8]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Main Content â”€â”€â”€ */}
      <section className="dark-section-b py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Main Visual */}
          <div className="dark-card overflow-hidden rounded-[10px]">
            <img src={cs.image} alt={cs.title} className="w-full h-80 sm:h-[450px] object-cover opacity-85" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Narrative */}
            <div className="lg:col-span-8 space-y-8 dark-card p-6 sm:p-10">
              <div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-red-400 block mb-2">
                  THE CHALLENGE
                </span>
                <h3 className="text-[20px] font-bold text-[#F0F4FF] tracking-tight mb-2">
                  The Institutional Challenge
                </h3>
                <p className="text-[14px] text-[#8BA4C8] leading-relaxed">
                  {cs.challenge}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.07]">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#10B981] block mb-2">
                  THE SOLUTION
                </span>
                <h3 className="text-[20px] font-bold text-[#F0F4FF] tracking-tight mb-2">
                  The Centrifuge Engineering Response
                </h3>
                <p className="text-[14px] text-[#8BA4C8] leading-relaxed">
                  {cs.solution}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.07]">
                <h3 className="text-[20px] font-bold text-[#F0F4FF] tracking-tight mb-3">
                  Capabilities & Implementation Scope
                </h3>
                <p className="text-[14px] text-[#8BA4C8] leading-relaxed mb-4">
                  {cs.implementation}
                </p>
                <div className="space-y-2.5">
                  {cs.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[13.5px] text-[#8BA4C8]">
                      <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span className="font-medium">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.07]">
                <h3 className="text-[20px] font-bold text-[#F0F4FF] tracking-tight mb-3">
                  Verified Operational Results
                </h3>
                <div className="space-y-2.5">
                  {cs.results.map((res, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[13.5px] text-[#8BA4C8]">
                      <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span className="font-medium">{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Metadata */}
            <div className="lg:col-span-4 space-y-5">
              <div className="dark-card p-6 space-y-4">
                <h4 className="text-[15px] font-bold text-[#F0F4FF] tracking-tight">
                  Project Overview
                </h4>
                <div className="space-y-3 text-[13px]">
                  <div>
                    <span className="text-[#8BA4C8] block text-[11px] font-mono uppercase tracking-wider font-semibold mb-1">Client</span>
                    <span className="text-[#F0F4FF] font-semibold">{cs.client}</span>
                  </div>
                  <div>
                    <span className="text-[#8BA4C8] block text-[11px] font-mono uppercase tracking-wider font-semibold mb-1">Sector</span>
                    <span className="text-[#F0F4FF] font-semibold">{cs.industry}</span>
                  </div>
                  {cs.results.length > 0 && (
                    <div>
                      <span className="text-[#8BA4C8] block text-[11px] font-mono uppercase tracking-wider font-semibold mb-1.5">Key Metric</span>
                      <div className="p-3 rounded-[4px] bg-white/[0.04] border border-white/[0.08]">
                        <span className="text-[13px] font-medium text-[#C8D8F0]">{cs.results[0]}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="dark-card p-6 text-center space-y-4">
                <h4 className="text-[16px] font-bold text-[#F0F4FF]">
                  Ready to Deploy Similar Outcomes?
                </h4>
                <p className="text-[13px] text-[#8BA4C8]">
                  Our architects can help design and deploy a comparable system for your organization.
                </p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#0756A5] text-white hover:bg-[#073B70] text-xs font-semibold transition-colors"
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

