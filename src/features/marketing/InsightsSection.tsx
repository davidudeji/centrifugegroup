import React from 'react'
import { Link } from 'react-router-dom'
import { mockArticles } from '../../data/mockData'
import { ArrowRight, Clock } from 'lucide-react'

export const InsightsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#F5F7FA] border-b border-[#E2E8F0] text-left">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0F2C59] tracking-tight">
              Technical Insights & Architectural Perspectives
            </h2>
            <p className="text-[15px] text-[#64748B] mt-2 max-w-xl leading-relaxed">
              Architectural lessons, field notes, and perspectives from building enterprise systems across emerging markets.
            </p>
          </div>
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#008DDA] hover:text-[#0077B6] transition-colors shrink-0"
          >
            <span>View all articles</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ─── Insights Grid (UI/UX Spec §3.3 Data Card Module: 8px radius, #FFFFFF, 1px #E2E8F0) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockArticles.map((art) => (
            <article
              key={art.id}
              className="bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs overflow-hidden flex flex-col justify-between transition-fin text-left group"
            >
              <div>
                <div className="h-44 relative overflow-hidden bg-[#F1F5F9]">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-[4px] bg-[#0F2C59]/90 text-[10px] font-semibold uppercase tracking-wider text-white">
                    {art.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {art.readingTime}
                    </span>
                  </div>

                  <h3 className="text-[18px] font-bold text-[#0F2C59] tracking-tight mt-2.5 group-hover:text-[#008DDA] transition-colors line-clamp-2 leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-[13px] text-[#475569] mt-2 line-clamp-3 leading-relaxed">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 py-3.5 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between text-xs font-semibold">
                <span className="text-[#64748B]">
                  {art.author.name}
                </span>
                <Link
                  to={`/insights/${art.slug}`}
                  className="text-[#008DDA] group-hover:text-[#0077B6] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read Article</span>
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
