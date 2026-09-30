import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockCaseStudies } from '../../data/mockData'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const cs = mockCaseStudies.find((item) => item.slug === slug) || mockCaseStudies[0]

  return (
    <div className="w-full text-left bg-[#000000] text-[#faf9f6]">
      <SEO
        title={`${cs.title} | Case Study`}
        description={cs.challenge}
      />

      {/* ─── Hero Header (Warp Obsidian #000000) ─── */}
      <section className="bg-[#000000] text-[#faf9f6] py-16 sm:py-24 border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-[12px] font-mono text-[#868684] hover:text-[#f0b66d] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Case Studies</span>
          </Link>

          <div className="pt-2 flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#f0b66d]">
              {cs.industry}
            </span>
            <span className="text-[12px] text-[#868684]">· {cs.client}</span>
          </div>

          <h1 className="text-[32px] sm:text-[48px] font-normal text-[#faf9f6] tracking-[-1.5px] leading-tight">
            {cs.title}
          </h1>

          <div className="pt-3 flex flex-wrap gap-2">
            {cs.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-[50px] bg-[#121212] border border-[#333333] text-[11px] font-mono text-[#b4b4b2]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Main Content (Warp Graphite #121212) ─── */}
      <section className="py-20 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Main Visual */}
          <div className="rounded-[20px] overflow-hidden border border-[#1e1e1d] bg-[#000000]">
            <img src={cs.image} alt={cs.title} className="w-full h-80 sm:h-[450px] object-cover opacity-90" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Narrative (Onyx #1e1e1d) */}
            <div className="lg:col-span-8 space-y-8 bg-[#1e1e1d] p-8 sm:p-10 rounded-[20px] border border-[#1e1e1d]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#868684] block mb-2">
                  THE CHALLENGE
                </span>
                <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px] mb-2">
                  The Institutional Challenge
                </h3>
                <p className="text-[14px] text-[#868684] leading-relaxed">
                  {cs.challenge}
                </p>
              </div>

              <div className="pt-6 border-t border-[#333333]/50">
                <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#f0b66d] block mb-2">
                  THE SOLUTION
                </span>
                <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px] mb-2">
                  The Centrifuge Solution
                </h3>
                <p className="text-[14px] text-[#faf9f6] leading-relaxed">
                  {cs.solution}
                </p>
              </div>

              <div className="pt-6 border-t border-[#333333]/50">
                <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px] mb-3">
                  Capabilities & Implementation
                </h3>
                <p className="text-[14px] text-[#868684] leading-relaxed mb-4">
                  {cs.implementation}
                </p>
                <div className="space-y-2.5">
                  {cs.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#b4b4b2]">
                      <CheckCircle2 className="h-4 w-4 text-[#f0b66d] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#333333]/50">
                <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px] mb-3">
                  Verified Operational Results
                </h3>
                <div className="space-y-2.5">
                  {cs.results.map((res, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#faf9f6]">
                      <CheckCircle2 className="h-4 w-4 text-[#f0b66d] shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Metadata (Onyx #1e1e1d) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#1e1e1d] p-6 rounded-[20px] border border-[#1e1e1d] space-y-4">
                <h4 className="text-[15px] font-semibold text-[#faf9f6] tracking-[-0.18px]">
                  Project Overview
                </h4>
                <div className="space-y-3 text-[13px]">
                  <div>
                    <span className="text-[#868684] block text-[11px] font-mono uppercase tracking-[1px]">Client</span>
                    <span className="text-[#faf9f6] font-medium">{cs.client}</span>
                  </div>
                  <div>
                    <span className="text-[#868684] block text-[11px] font-mono uppercase tracking-[1px]">Sector</span>
                    <span className="text-[#faf9f6] font-medium">{cs.industry}</span>
                  </div>
                  {cs.results.length > 0 && (
                    <div>
                      <span className="text-[#868684] block text-[11px] font-mono uppercase tracking-[1px] mb-1.5">Key Result</span>
                      <div className="p-3 rounded-[12px] bg-[#121212] border border-[#333333]">
                        <span className="text-[13px] text-[#faf9f6]">{cs.results[0]}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-[#1e1e1d] p-6 rounded-[20px] border border-[#1e1e1d] text-center space-y-4">
                <h4 className="text-[16px] font-semibold text-[#faf9f6] tracking-[-0.18px]">
                  Ready to deploy similar outcomes?
                </h4>
                <p className="text-[12.5px] text-[#868684]">
                  Our architects can help design a comparable system for your organization.
                </p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center h-10 px-5 rounded-[33px] bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] text-[13px] font-semibold transition-colors"
                >
                  <span>Request consultation</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-2" />
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
