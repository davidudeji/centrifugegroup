import React from 'react'
import { Link } from 'react-router-dom'
import { mockArticles } from '../../data/mockData'
import { ArrowRight, BookOpen, Clock } from 'lucide-react'

export const InsightsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 text-left gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#16C7D9]">
              Engineering & Operational Thought Leadership
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-heading mt-2 tracking-tight">
              Insights & research.
            </h2>
            <p className="text-base text-[#64748B] mt-2 max-w-xl">
              Architectural lessons, field notes, and perspectives from building enterprise systems across emerging markets.
            </p>
          </div>
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B1F33] hover:text-[#16C7D9] transition-colors shrink-0"
          >
            <span>View all articles</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockArticles.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-[16px] border border-[#E2E8F0] overflow-hidden flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-xs transition-all text-left group"
            >
              <div>
                <div className="h-48 relative overflow-hidden bg-[#F1F5F9]">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-[4px] bg-white/90 backdrop-blur-xs text-[10px] font-bold text-[#0B1F33] shadow-xs">
                    {art.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-[#64748B]">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {art.readingTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0B1F33] font-heading mt-2.5 group-hover:text-[#16C7D9] transition-colors line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-[#64748B] mt-2 line-clamp-3 leading-relaxed">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#111827]">
                  {art.author.name}
                </span>
                <Link
                  to={`/insights/${art.slug}`}
                  className="text-xs font-bold text-[#0B1F33] group-hover:text-[#16C7D9] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read article</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
