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
    <div className="w-full text-left bg-white text-[#0F172A]">
      <SEO
        title="Engineering Insights & Perspectives | Centrifuge Group"
        description="Architectural lessons, field notes, and perspectives from building enterprise systems across emerging markets."
      />

      {/* Hero Header */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">EDITORIAL & RESEARCH</span>
            </div>
            <h1
              className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              Engineering insights & perspectives.
            </h1>
            <p className="text-[16px] text-[#94A3B8] leading-relaxed max-w-2xl">
              In-depth articles from our software architects, health informatics engineers, and logistics specialists on building production systems for scale.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto">

          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E2E8F0]">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`text-[11px] uppercase tracking-[1px] px-3.5 py-1.5 rounded-[6px] font-semibold transition-colors ${
                    selectedCat === cat
                      ? 'bg-[#F27A22] text-[#0F172A] shadow-sm'
                      : 'bg-white border border-[#E2E8F0] text-[#475569] hover:border-[#CBD5E1] hover:text-[#0F172A]'
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
                leftIcon={<Search className="h-3.5 w-3.5" />}
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((art) => (
              <article
                key={art.id}
                className="bg-white rounded-[12px] border border-[#E2E8F0] overflow-hidden flex flex-col hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200 group"
              >
                <div>
                  <div className="h-48 relative overflow-hidden bg-[#E2E8F0]">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-[4px] bg-white/90 border border-[#E2E8F0] text-[11px] font-semibold uppercase tracking-[1px] text-[#F27A22] backdrop-blur-sm">
                      {art.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[12px] text-[#94A3B8]">
                      <span>{art.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {art.readingTime}
                      </span>
                    </div>

                    <h3 className="text-[17px] font-bold text-[#0F172A] leading-snug mt-2 group-hover:text-[#334155] transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-[13px] text-[#475569] mt-2 leading-relaxed line-clamp-3">
                      {art.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-auto px-6 py-4 border-t border-[#E2E8F0] flex items-center justify-between bg-[#F8FAFC]">
                  <span className="text-[12px] text-[#94A3B8] font-medium">
                    {art.author.name}
                  </span>
                  <Link
                    to={`/insights/${art.slug}`}
                    className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#334155] group-hover:text-[#F27A22] transition-colors"
                  >
                    Read article
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
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
