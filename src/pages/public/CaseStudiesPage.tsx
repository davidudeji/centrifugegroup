import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockCaseStudies } from '../../data/mockData'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="w-full text-left bg-[#000000] text-[#faf9f6]">
      <SEO
        title="Case Studies & Client Outcomes | Centrifuge Group"
        description="Authentic case studies of enterprise systems and national health workforce platforms delivered by Centrifuge."
      />

      {/* ─── Hero Header (Warp Obsidian #000000) ─── */}
      <section className="bg-[#000000] text-[#faf9f6] py-16 sm:py-24 border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684]">
              <span>VERIFIED CLIENT OUTCOMES</span>
            </div>
            <h1 className="text-[36px] sm:text-[56px] font-normal text-[#faf9f6] tracking-[-2.24px] leading-[0.98]">
              Case studies in production.
            </h1>
            <p className="text-[16px] text-[#868684] tracking-[-0.18px] leading-relaxed">
              Explore how we solved critical operational problems for government ministries, medical councils, and corporate enterprises across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Case Studies List (Warp Graphite #121212) ─── */}
      <section className="py-20 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {mockCaseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-[#1e1e1d] rounded-[20px] border border-[#1e1e1d] overflow-hidden hover:border-[#333333] transition-all grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-5 h-64 sm:h-80 lg:h-auto relative bg-[#000000] overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-500"
                />
                {cs.clientLogo && (
                  <div className="absolute top-4 left-4 bg-[#000000]/90 backdrop-blur-md border border-[#333333] p-2 rounded-[8px]">
                    <img src={cs.clientLogo} alt={cs.client} className="h-7 max-w-[130px] object-contain brightness-110" />
                  </div>
                )}
              </div>

              <div className="lg:col-span-7 p-8 lg:p-10 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-[#f0b66d] uppercase tracking-[1.5px]">
                    {cs.industry} · {cs.client}
                  </div>
                  <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#faf9f6] tracking-[-0.29px] mt-2 leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-[13px] text-[#868684] mt-3 leading-relaxed tracking-[-0.14px]">
                    {cs.challenge}
                  </p>

                  <div className="mt-5 space-y-2 pt-4 border-t border-[#333333]/50">
                    <span className="text-[11px] font-mono uppercase tracking-[1.5px] text-[#666469] block">
                      Results Achieved:
                    </span>
                    {cs.results.map((res, i) => (
                      <div key={i} className="flex items-start gap-2 text-[12.5px] text-[#b4b4b2]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#f0b66d] shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#333333]/50 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-[50px] bg-[#121212] border border-[#333333] text-[10px] text-[#868684] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#faf9f6] hover:text-[#f0b66d] transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CaseStudiesPage
