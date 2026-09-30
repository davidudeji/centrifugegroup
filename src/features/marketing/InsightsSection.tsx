import React from 'react'
import { Link } from 'react-router-dom'
import { mockArticles } from '../../data/mockData'
import { ArrowRight, Clock } from 'lucide-react'

export const InsightsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#000000] border-b border-[#1e1e1d]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 text-left gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684] mb-3">
              <span>ENGINEERING & OPERATIONAL THOUGHT LEADERSHIP</span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] font-normal text-[#faf9f6] tracking-[-1.13px] leading-[1.05]">
              Insights & research.
            </h2>
            <p className="text-[15px] text-[#868684] tracking-[-0.14px] mt-2 max-w-xl leading-[1.4]">
              Architectural lessons, field notes, and perspectives from building enterprise systems across emerging markets.
            </p>
          </div>
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-[14px] text-[#faf9f6] hover:text-[#cbb0f7] transition-colors shrink-0 tracking-[-0.14px]"
          >
            <span>View all articles</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ─── Warp Insights Grid (Onyx #1e1e1d cards, 20px radius) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockArticles.map((art) => (
            <article
              key={art.id}
              className="bg-[#1e1e1d] rounded-[20px] border border-[#1e1e1d] hover:border-[#333333] overflow-hidden flex flex-col justify-between transition-colors text-left group"
            >
              <div>
                <div className="h-44 relative overflow-hidden bg-[#000000]">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-95 transition-opacity duration-200"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-[50px] bg-[#000000]/80 border border-[#333333] text-[10px] font-normal uppercase tracking-[1px] text-[#b4b4b2]">
                    {art.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] text-[#666469]">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {art.readingTime}
                    </span>
                  </div>

                  <h3 className="text-[18px] font-semibold text-[#faf9f6] tracking-[-0.18px] mt-2 group-hover:text-[#cbb0f7] transition-colors line-clamp-2 leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-[13px] text-[#868684] mt-2 line-clamp-3 leading-relaxed tracking-[-0.14px]">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 bg-[#121212] border-t border-[#1e1e1d] flex items-center justify-between">
                <span className="text-[11px] text-[#b4b4b2]">
                  {art.author.name}
                </span>
                <Link
                  to={`/insights/${art.slug}`}
                  className="text-[13px] text-[#faf9f6] group-hover:text-[#cbb0f7] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read article</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
export default InsightsSection
