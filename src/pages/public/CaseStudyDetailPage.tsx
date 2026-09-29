import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockCaseStudies } from '../../data/mockData'
import { ArrowLeft, ArrowRight, CheckCircle2, Shield } from 'lucide-react'
import { Button } from '../../components/ui/Button'

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const cs = mockCaseStudies.find((item) => item.slug === slug) || mockCaseStudies[0]

  return (
    <div className="w-full text-left">
      <SEO
        title={`${cs.title} | Case Study`}
        description={cs.challenge}
      />

      <section className="bg-[#0B1F33] text-white py-16 sm:py-20 border-b border-[#172333]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#94A3B8] hover:text-[#16C7D9] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Case Studies</span>
          </Link>

          <div className="pt-2 flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#16C7D9] uppercase tracking-wider">
              {cs.industry}
            </span>
            <span className="text-xs text-[#94A3B8]">• {cs.client}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
            {cs.title}
          </h1>

          <div className="pt-4 flex flex-wrap gap-2">
            {cs.technologies.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded bg-[#172333] text-xs font-mono text-[#CBD5E1]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Main Visual */}
          <div className="rounded-[16px] overflow-hidden border border-[#E2E8F0] bg-white shadow-sm">
            <img src={cs.image} alt={cs.title} className="w-full h-80 sm:h-[450px] object-cover" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Narrative */}
            <div className="lg:col-span-8 space-y-8 bg-white p-8 rounded-[16px] border border-[#E2E8F0]">
              <div>
                <h3 className="text-xl font-bold text-[#0B1F33] font-heading mb-2">
                  The Institutional Challenge
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {cs.challenge}
                </p>
              </div>

              <div className="pt-6 border-t border-[#E2E8F0]">
                <h3 className="text-xl font-bold text-[#0B1F33] font-heading mb-2">
                  The Centrifuge Solution
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {cs.solution}
                </p>
              </div>

              <div className="pt-6 border-t border-[#E2E8F0]">
                <h3 className="text-xl font-bold text-[#0B1F33] font-heading mb-3">
                  Capabilities & Implementation
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-4">
                  {cs.implementation}
                </p>
                <div className="space-y-2">
                  {cs.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#334155]">
                      <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#E2E8F0]">
                <h3 className="text-xl font-bold text-[#0B1F33] font-heading mb-3">
                  Verified Operational Results
                </h3>
                <div className="space-y-2.5">
                  {cs.results.map((res, i) => (
                    <div key={i} className="p-3 bg-[#F0FDF4] border border-[#DCFCE7] rounded-[8px] text-xs text-[#14532D] font-medium flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Metadata */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-[16px] border border-[#E2E8F0] space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block">
                  Project Client
                </span>
                {cs.clientLogo && (
                  <img src={cs.clientLogo} alt={cs.client} className="h-14 max-w-[160px] object-contain" />
                )}
                <h4 className="text-base font-bold text-[#0B1F33]">{cs.client}</h4>
                <div className="text-xs text-[#64748B]">Industry: {cs.industry}</div>
              </div>

              <div className="p-6 rounded-[16px] bg-[#071521] text-white border border-[#172333] space-y-3">
                <h4 className="text-sm font-bold font-heading">Need similar outcomes?</h4>
                <p className="text-xs text-[#94A3B8]">
                  Speak directly with our solutions architects.
                </p>
                <Link to="/contact">
                  <Button variant="primary" size="sm" className="w-full mt-2">
                    Talk to Centrifuge
                  </Button>
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
