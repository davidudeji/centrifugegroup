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
    <div className="w-full text-left bg-[#000000] text-[#faf9f6]">
      <SEO
        title="Engineering Insights & Perspectives | Centrifuge Group"
        description="Architectural lessons, field notes, and perspectives from building enterprise systems across emerging markets."
      />

      {/* ─── Hero Header (Warp Obsidian #000000) ─── */}
      <section className="bg-[#000000] text-[#faf9f6] py-16 sm:py-24 border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684]">
              <span>EDITORIAL & RESEARCH</span>
            </div>
            <h1 className="text-[36px] sm:text-[56px] font-normal text-[#faf9f6] tracking-[-2.24px] leading-[0.98]">
              Engineering insights & perspectives.
            </h1>
            <p className="text-[16px] text-[#868684] tracking-[-0.18px] leading-relaxed">
              In-depth articles from our software architects, health informatics engineers, and logistics specialists on building production systems for scale.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Main Content (Warp Graphite #121212) ─── */}
      <section className="py-20 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 pb-6 border-b border-[#1e1e1d]">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`text-[12px] px-4 py-1.5 rounded-[50px] font-medium transition-colors ${
                    selectedCat === cat
                      ? 'bg-[#121212] text-[#080808] font-semibold'
                      : 'bg-[#1e1e1d] text-[#868684] border border-[#333333] hover:text-[#faf9f6]'
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
                leftIcon={<Search className="h-4 w-4 text-[#868684]" />}
              />
            </div>
          </div>

          {/* Articles Grid (Onyx #1e1e1d cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((art) => (
              <article
                key={art.id}
                className="bg-[#1e1e1d] rounded-[20px] border border-[#1e1e1d] overflow-hidden flex flex-col justify-between hover:border-[#333333] transition-all group"
              >
                <div>
                  <div className="h-52 relative overflow-hidden bg-[#000000]">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-[50px] bg-[#000000]/80 backdrop-blur-md border border-[#333333] text-[10px] font-mono text-[#f0b66d]">
                      {art.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#868684]">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{art.readingTime}</span>
                      </span>
                    </div>

                    <h3 className="text-[18px] font-semibold text-[#faf9f6] tracking-[-0.18px] mt-2 group-hover:text-[#f0b66d] transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-[13px] text-[#868684] mt-2 leading-relaxed tracking-[-0.14px]">
                      {art.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#333333]/40 mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#868684]">
                    {art.author.name}
                  </span>
                  <Link
                    to={`/insights/${art.slug}`}
                    className="inline-flex items-center gap-1 text-[12px] font-medium text-[#faf9f6] group-hover:text-[#f0b66d] transition-colors"
                  >
                    <span>Read article</span>
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
