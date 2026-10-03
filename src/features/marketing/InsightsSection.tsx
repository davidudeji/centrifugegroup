import React from 'react'
import { Link } from 'react-router-dom'
import { mockArticles } from '../../data/mockData'
import { ArrowRight, Clock, User } from 'lucide-react'

export const InsightsSection: React.FC = () => {
  return (
    <section className="section-py bg-white border-b border-[#E2E8F0]">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="badge-eyebrow mb-4">Insights</div>
            <h2 className="text-h2 text-[#0B1F33] mb-4">
              Insights &amp; research.
            </h2>
            <p className="text-body-lg text-[#64748B]">
              Architectural lessons, field notes, and perspectives from building
              enterprise systems across emerging markets.
            </p>
          </div>
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#64748B] hover:text-[#0B1F33] transition-colors shrink-0"
            id="insights-view-all"
          >
            View all articles
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockArticles.slice(0, 3).map((art) => (
            <article
              key={art.id}
              className="group bg-[#F7F9FA] rounded-[16px] border border-[#E2E8F0] overflow-hidden flex flex-col hover:border-[#CBD5E1] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Thumbnail */}
              <div className="h-44 relative overflow-hidden bg-[#0B1F33]">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-[1.03] transition-all duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 border border-[#E2E8F0] text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                  {art.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-3 text-[12px] text-[#94A3B8] mb-3">
                  <span>{art.date}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {art.readingTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-heading font-700 text-[#0B1F33] tracking-tight leading-snug mb-2 group-hover:text-[#16C7D9] transition-colors line-clamp-2">
                  {art.title}
                </h3>

                {/* Summary */}
                <p className="text-[13px] text-[#64748B] leading-relaxed line-clamp-3 flex-1">
                  {art.summary}
                </p>

                {/* Footer */}
                <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-[#0B1F33] flex items-center justify-center">
                      <User className="h-3 w-3 text-[#16C7D9]" />
                    </div>
                    <span className="text-[12px] font-medium text-[#64748B]">
                      {art.author.name}
                    </span>
                  </div>
                  <Link
                    to={`/insights/${art.slug}`}
                    className="inline-flex items-center gap-1 text-[13px] font-medium text-[#64748B] group-hover:text-[#16C7D9] transition-colors"
                    id={`insight-${art.slug}`}
                  >
                    Read
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InsightsSection
