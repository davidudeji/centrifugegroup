import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockArticles } from '../../data/mockData'
import { Search, Clock, ArrowRight } from 'lucide-react'
import { Input } from '../../components/ui/Input'

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
    <div className="w-full text-left">
      <SEO
        title="Engineering Insights & Perspectives | Centrifuge Group"
        description="Architectural lessons, field notes, and perspectives from building enterprise systems across emerging markets."
      />

      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-[#172333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-[#16C7D9] tracking-wider uppercase">
              EDITORIAL & RESEARCH
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              Engineering insights & perspectives.
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              In-depth articles from our software architects, health informatics engineers, and logistics specialists.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E2E8F0]">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`text-xs px-3 py-1.5 rounded-[6px] font-medium transition-colors ${
                    selectedCat === cat
                      ? 'bg-[#0B1F33] text-white font-semibold'
                      : 'bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#F1F5F9]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="w-full md:w-72">
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                leftIcon={<Search className="h-4 w-4" />}
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((art) => (
              <article
                key={art.id}
                className="bg-white rounded-[16px] border border-[#E2E8F0] overflow-hidden flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-sm transition-all group"
              >
                <div>
                  <div className="h-52 relative overflow-hidden bg-[#F1F5F9]">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded-[4px] bg-white/95 text-[10px] font-bold text-[#0B1F33] shadow-xs">
                      {art.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] text-[#64748B]">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {art.readingTime}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#0B1F33] font-heading mt-2 group-hover:text-[#16C7D9] transition-colors leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-xs text-[#64748B] mt-2 line-clamp-3 leading-relaxed">
                      {art.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#111827]">
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
    </div>
  )
}
export default InsightsPage
