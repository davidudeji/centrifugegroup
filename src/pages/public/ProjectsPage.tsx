import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { projectService } from '../../services/projectService'
import type { Project } from '../../types'
import { ArrowRight, ArrowUpRight, Search } from 'lucide-react'
import { LoadingState } from '../../components/ui/LoadingState'

export const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    projectService.getProjects().then((data) => {
      setProjects(data)
      setIsLoading(false)
    })
  }, [])

  const categories = [
    'all',
    'Enterprise ERP',
    'Logistics Management',
    'HRHIS',
    'Electronic Hospital Management',
    'Geospatial & Mapping',
    'IoT Solutions',
  ]

  const filtered = projects.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory
    const matchesSearch =
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.industry.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <div className="dark-page">
      <SEO
        title="What We've Built | Projects & Products Showcase"
        description="Explore the platforms, products, and digital systems designed and delivered by Centrifuge Group."
      />

      {/* â”€â”€â”€ Header Banner â”€â”€â”€ */}
      <section className="dark-section-hero pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <span className="dark-badge">
              <span className="h-2 w-2 rounded-full bg-[#F28C28] ring-4 ring-[#F28C28]/20" aria-hidden="true" />
              Projects & Portfolio
            </span>
            <h1 className="text-[32px] sm:text-[48px] font-bold text-[#F0F4FF] tracking-tight leading-[1.1]">
              What We Have Architected & Delivered
            </h1>
            <p className="text-[17px] text-[#8BA4C8] leading-relaxed max-w-2xl">
              Explore the platforms, enterprise software, and mission-critical systems we've designed and delivered for commercial operations, healthcare, logistics, and government institutions.
            </p>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Showcase Grid â”€â”€â”€ */}
      <section className="dark-section-b py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.07]">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`dark-pill ${selectedCategory === cat ? 'is-active' : ''}`}
                >
                  {cat === 'all' ? 'All Systems' : cat}
                </button>
              ))}
            </div>

            <div className="w-full md:w-72 relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#8BA4C8] pointer-events-none" />
              <input
                type="text"
                placeholder="Search systems..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="dark-input pl-9"
              />
            </div>
          </div>

          {isLoading ? (
            <LoadingState message="Loading engineering portfolio..." />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((proj) => (
                <div
                  key={proj.id}
                  className="dark-card overflow-hidden flex flex-col justify-between group text-left"
                >
                  <div>
                    {/* Media Thumbnail */}
                    <div className="h-48 w-full relative bg-white/[0.03] overflow-hidden">
                      <img
                        src={proj.image}
                        alt={proj.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-2 py-0.5 rounded-[4px] bg-black/60 backdrop-blur-xs border border-white/10 text-[10px] font-mono font-bold uppercase text-[#C8D8F0]">
                          {proj.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#60ABFF] block mb-1">
                        {proj.industry}
                      </span>
                      <h3 className="text-[18px] font-bold text-[#F0F4FF] tracking-tight group-hover:text-[#60ABFF] transition-colors leading-snug">
                        <Link to={`/projects/${proj.slug}`}>{proj.name}</Link>
                      </h3>
                      <p className="text-[13px] text-[#8BA4C8] mt-2 line-clamp-3 leading-relaxed">
                        {proj.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-white/[0.07] flex flex-wrap gap-1.5">
                        {proj.technologies.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-[4px] bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono font-medium text-[#8BA4C8]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                    <Link
                      to={`/projects/${proj.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#60ABFF] hover:text-[#F28C28] transition-colors"
                    >
                      <span>Explore specifications</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>

                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-[#8BA4C8] hover:text-[#F0F4FF] flex items-center gap-1 transition-colors"
                      >
                        <span>Live</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}


export default ProjectsPage

