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
    <div className="w-full text-left bg-[#F5F7FA] text-[#1A1A1A]">
      <SEO
        title="What We've Built | Projects & Products Showcase"
        description="Explore the platforms, products, and digital systems designed and delivered by Centrifuge Group."
      />

      {/* ─── Header Banner (UI/UX Spec §1.1 & §4.1) ─── */}
      <section className="bg-[#FFFFFF] text-[#1A1A1A] py-16 sm:py-20 border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] border border-[#008DDA]/30 bg-[#008DDA]/10 text-xs font-semibold uppercase tracking-wider text-[#0077B6]">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>DELIVERED SYSTEMS & DIGITAL PRODUCTS</span>
            </div>
            <h1 className="text-[32px] sm:text-[44px] font-bold text-[#0F2C59] tracking-tight leading-[1.2]">
              What We Have Architected & Delivered
            </h1>
            <p className="text-[16px] text-[#475569] leading-relaxed max-w-2xl">
              Explore the platforms, enterprise software, and mission-critical systems we've designed and delivered for commercial operations, healthcare, logistics, and government institutions.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Showcase Grid (UI/UX Spec §3.3 Data Card Module) ─── */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E2E8F0]">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-[4px] transition-colors cursor-pointer ${selectedCategory === cat
                      ? 'bg-[#008DDA] text-white shadow-xs'
                      : 'bg-[#FFFFFF] text-[#475569] border border-[#CBD5E1] hover:border-[#008DDA] hover:text-[#008DDA]'
                    }`}
                >
                  {cat === 'all' ? 'All Systems' : cat}
                </button>
              ))}
            </div>

            <div className="w-full md:w-72 relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#64748B] pointer-events-none" />
              <input
                type="text"
                placeholder="Search systems..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 text-xs bg-[#FFFFFF] border border-[#CBD5E1] rounded-[4px] text-[#1A1A1A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#008DDA]/20 focus:border-[#008DDA]"
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
                  className="bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] overflow-hidden hover:border-[#CBD5E1] hover:shadow-xs transition-fin flex flex-col justify-between group text-left"
                >
                  <div>
                    {/* Media Thumbnail */}
                    <div className="h-48 w-full relative bg-[#F1F5F9] overflow-hidden">
                      <img
                        src={proj.image}
                        alt={proj.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-2 py-0.5 rounded-[4px] bg-[#FFFFFF]/90 backdrop-blur-xs border border-[#E2E8F0] text-[10px] font-mono font-bold uppercase text-[#0F2C59]">
                          {proj.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#008DDA] block mb-1">
                        {proj.industry}
                      </span>
                      <h3 className="text-[18px] font-bold text-[#0F2C59] tracking-tight group-hover:text-[#008DDA] transition-colors leading-snug">
                        <Link to={`/projects/${proj.slug}`}>{proj.name}</Link>
                      </h3>
                      <p className="text-[13px] text-[#475569] mt-2 line-clamp-3 leading-relaxed">
                        {proj.description}
                      </p>

                        <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-1.5">
                          {proj.technologies.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-[4px] bg-[#F1F5F9] border border-[#E2E8F0] text-[10px] font-mono font-medium text-[#64748B]"
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
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#008DDA] hover:text-[#0077B6]"
                    >
                      <span>Explore specifications</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>

                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-[#64748B] hover:text-[#0F2C59] flex items-center gap-1"
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
