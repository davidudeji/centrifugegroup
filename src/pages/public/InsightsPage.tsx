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
    <div className="dark-page">
      <SEO
        title="Engineering Insights & Perspectives | Centrifuge Group"
        description="Architectural lessons, field notes, and perspectives from building enterprise systems across emerging markets."
      />

      {/* â”€â”€â”€ Hero Header â”€â”€â”€ */}
      <section className="dark-section-hero pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <span className="dark-badge">
              <span className="h-2 w-2 rounded-full bg-[#F28C28] ring-4 ring-[#F28C28]/20" aria-hidden="true" />
              Engineering Insights
            </span>
            <h1 className="text-[32px] sm:text-[48px] font-bold text-[#F0F4FF] tracking-tight leading-[1.1]">
              Engineering Insights & Architectural Perspectives
            </h1>
            <p className="text-[17px] text-[#8BA4C8] leading-relaxed max-w-2xl">
              In-depth articles from our software architects, health informatics engineers, and logistics specialists on building production systems for scale.
            </p>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Main Content â”€â”€â”€ */}
      <section className="dark-section-b py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.07]">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`dark-pill ${selectedCat === cat ? 'is-active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="w-full md:w-72 relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#8BA4C8] pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="dark-input pl-9"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <div
                key={article.id}
                className="dark-card p-6 flex flex-col justify-between group text-left"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="px-2 py-0.5 rounded-[4px] bg-[#60ABFF]/10 border border-[#60ABFF]/30 text-[#60ABFF] text-[11px] font-mono font-bold uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-[#8BA4C8] flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="h-3 w-3" />
                      {article.readingTime}
                    </span>
                  </div>

                  <h3 className="text-[18px] font-bold text-[#F0F4FF] tracking-tight leading-snug group-hover:text-[#60ABFF] transition-colors">
                    <Link to={`/insights/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="text-[13.5px] text-[#8BA4C8] mt-2.5 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.07] flex items-center justify-between">
                  <div className="text-xs text-[#8BA4C8]">
                    <span className="font-semibold text-[#C8D8F0]">{article.author.name}</span>
                    <span className="block text-[11px] text-[#8BA4C8]">{article.date}</span>
                  </div>
                  <Link
                    to={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#60ABFF] hover:text-[#F28C28] transition-colors"
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

