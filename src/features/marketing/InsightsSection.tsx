import React from 'react'
import { Link } from 'react-router-dom'
import { mockArticles } from '../../data/mockData'
import { ArrowRight, Clock } from 'lucide-react'

export const InsightsSection: React.FC = () => {
  return (
    <section className="border-b border-[#E2E8F0] bg-[#F7F9FB] py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#F28C28]" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F28C28]">
                Technical Insights
              </p>
            </div>
            <h2 className="text-[2rem] font-bold leading-tight tracking-[-0.04em] text-[#0F2C59] sm:text-[2.5rem]">
              Architectural Perspectives & Field Notes
            </h2>
            <p className="mt-3 max-w-[480px] text-[1rem] leading-[1.75] text-[#64748B]">
              Lessons and perspectives from building enterprise systems across emerging markets.
            </p>
          </div>
          <Link
            to="/insights"
            className="inline-flex shrink-0 items-center gap-1.5 text-[0.875rem] font-semibold text-[#0756A5] hover:text-[#073B70] transition-colors group"
          >
            <span>View all articles</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Articles grid — varied layout */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {mockArticles.map((art, i) => (
            <article
              key={art.id}
              className={`group flex flex-col overflow-hidden rounded-[16px] border border-[#E8EDF3] bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0756A5]/18 hover:shadow-[0_16px_40px_rgba(7,86,165,0.08)] ${
                i === 1 ? "md:mt-6" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-[#F1F5F9]">
                <img
                  src={art.image}
                  alt={art.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-[5px] bg-[#0F2C59]/88 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  {art.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-center gap-2 text-[0.75rem] text-[#94A3B8]">
                  <span>{art.date}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {art.readingTime}
                  </span>
                </div>

                <h3 className="mt-2.5 line-clamp-2 text-[1.0625rem] font-bold leading-snug tracking-tight text-[#0F2C59] transition-colors group-hover:text-[#0756A5]">
                  {art.title}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-[0.875rem] leading-[1.68] text-[#475569]">
                  {art.summary}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-[#E8EDF3] px-5 py-3.5 sm:px-6">
                <span className="text-[0.8125rem] font-semibold text-[#64748B]">{art.author.name}</span>
                <Link
                  to={`/insights/${art.slug}`}
                  className="inline-flex items-center gap-1 text-[0.8125rem] font-semibold text-[#0756A5] transition-colors hover:text-[#073B70]"
                >
                  <span>Read</span>
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
