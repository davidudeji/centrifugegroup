import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockArticles } from '../../data/mockData'
import { Search, Clock, ArrowRight } from 'lucide-react'

export const InsightsPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const categories = ['All', 'Healthcare', 'Enterprise', 'Logistics', 'Technology', 'AI']

  const filtered = mockArticles.filter((art) => {
    const matchesCat = selectedCat === 'All' || art.category === selectedCat
    const matchesSearch =
      searchQuery === '' ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <div className="w-full text-left bg-[#F5F7FA] text-[#1A1A1A]">
      <SEO
        title="Engineering Insights & Perspectives | Centrifuge Group"
        description="Architectural lessons, field notes, and perspectives from building enterprise systems across emerging markets."
      />

      {/* ─── Hero Header (UI/UX Spec §1.1 & §4.1) ─── */}
      <section className="bg-[#FFFFFF] text-[#1A1A1A] py-16 sm:py-20 border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-[32px] sm:text-[44px] font-bold text-[#0F2C59] tracking-tight leading-[1.2]">
              Engineering Insights & Architectural Perspectives
            </h1>
            <p className="text-[16px] text-[#475569] leading-relaxed max-w-2xl">
              In-depth articles from our software architects, health informatics engineers, and logistics specialists on building production systems for scale.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Main Content (UI/UX Spec §3.3 Data Card Module) ─── */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E2E8F0]">
            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCat(cat)}
                    className={`text-xs font-semibold px-3.5 py-1.5 rounded-[4px] transition-colors cursor-pointer ${selectedCat === cat
                        ? 'bg-[#008DDA] text-white shadow-xs'
                        : 'bg-[#FFFFFF] text-[#475569] border border-[#CBD5E1] hover:border-[#008DDA] hover:text-[#008DDA]'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
            </div>

            <div className="w-full md:w-72 relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#64748B] pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2 text-xs bg-[#FFFFFF] border border-[#CBD5E1] rounded-[4px] text-[#1A1A1A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#008DDA]/20 focus:border-[#008DDA]"
                />
            </div>

          </div>

          {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article) => (
                <div
                  key={article.id}
                  className="bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] p-6 hover:border-[#CBD5E1] hover:shadow-xs transition-fin flex flex-col justify-between group text-left"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="px-2 py-0.5 rounded-[4px] bg-[#008DDA]/10 border border-[#008DDA]/30 text-[#008DDA] text-[11px] font-mono font-bold uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-[#64748B] flex items-center gap-1 font-mono text-[11px]">
                        <Clock className="h-3 w-3" />
                        {article.readingTime}
                      </span>
                    </div>

                    <h3 className="text-[18px] font-bold text-[#0F2C59] tracking-tight leading-snug group-hover:text-[#008DDA] transition-colors">
                      <Link to={`/insights/${article.slug}`}>{article.title}</Link>
                    </h3>
                    <p className="text-[13.5px] text-[#475569] mt-2.5 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                    <div className="text-xs text-[#64748B]">
                      <span className="font-semibold text-[#1A1A1A]">{article.author.name}</span>
                      <span className="block text-[11px] text-[#64748B]">{article.date}</span>
                    </div>
                    <Link
                      to={`/insights/${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#008DDA] hover:text-[#0077B6]"
                    >
                      <span>Read</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>
    </div>
  )
}

export default InsightsPage
