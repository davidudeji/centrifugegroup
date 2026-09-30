import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { projectService } from '../../services/projectService'
import type { Project } from '../../types'
import { ArrowRight, ArrowUpRight, Search } from 'lucide-react'
import { Input } from '../../components/ui/Input'

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
    'IoT Solutions'
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
    <div className="w-full text-left bg-[#000000] text-[#faf9f6]">
      <SEO
        title="What We've Built | Projects & Products Showcase"
        description="Explore the platforms, products, and digital systems designed and delivered by Centrifuge Group."
      />

      {/* ─── Header Banner ─── */}
      <section className="bg-[#000000] text-[#faf9f6] py-16 sm:py-24 border-b border-[#1e1e1d]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684]">
              <span>DELIVERED SYSTEMS & DIGITAL PRODUCTS</span>
            </div>
            <h1 className="text-[36px] sm:text-[56px] font-normal text-[#faf9f6] tracking-[-2.24px] leading-[0.98]">
              What we've built.
            </h1>
            <p className="text-[16px] text-[#868684] tracking-[-0.18px] leading-relaxed">
              Explore the platforms, enterprise software, and mission-critical systems we've designed and delivered for commercial operations, healthcare, logistics, and government institutions.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Filter and Content Grid (Graphite #121212) ─── */}
      <section className="py-14 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Category Filter */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#1e1e1d]">
            {/* Category Pills (50px radius per warp_design.md §182-186) */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[11px] uppercase tracking-[1px] px-3.5 py-1.5 rounded-[50px] font-normal transition-colors ${
                    selectedCategory === cat
                      ? 'border border-[#cbb0f7] text-[#cbb0f7] bg-[#cbb0f7]/10'
                      : 'border border-[#333333] text-[#868684] hover:border-[#868684] hover:text-[#faf9f6] bg-transparent'
                  }`}
                >
                  {cat === 'all' ? 'All Projects' : cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full md:w-72">
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                leftIcon={<Search className="h-3.5 w-3.5" />}
              />
            </div>
          </div>

          {/* Grid of Projects (Onyx #1e1e1d cards) */}
          {isLoading ? (
            <div className="py-20 text-center text-[12px] font-mono text-[#868684]">
              Loading project portfolio...
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center text-[13px] text-[#868684] bg-[#1e1e1d] rounded-[20px] border border-[#1e1e1d]">
              No projects found matching your criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-[#1e1e1d] rounded-[20px] border border-[#1e1e1d] overflow-hidden flex flex-col justify-between hover:border-[#333333] transition-colors group text-left"
                >
                  <div>
                    <div className="h-48 relative overflow-hidden bg-[#000000]">
                      <img
                        src={proj.image}
                        alt={proj.name}
                        className="w-full h-full object-cover opacity-75 group-hover:opacity-95 transition-opacity duration-200"
                      />
                      <div className="absolute top-3 left-3 flex gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-[50px] bg-[#000000]/80 border border-[#333333] text-[10px] uppercase tracking-[1px] text-[#b4b4b2]">
                          {proj.category}
                        </span>
                        {proj.status === 'live' && (
                          <span className="px-2.5 py-0.5 rounded-[50px] bg-[#000000]/80 border border-[#cbb0f7]/40 text-[10px] font-mono text-[#cbb0f7]">
                            LIVE
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="text-[10px] font-mono text-[#868684] uppercase tracking-[1px]">
                        {proj.industry}
                      </div>
                      <h3 className="text-[18px] font-semibold text-[#faf9f6] tracking-[-0.18px] mt-1 group-hover:text-[#cbb0f7] transition-colors leading-snug">
                        {proj.name}
                      </h3>
                      <p className="text-[13px] text-[#868684] mt-2 line-clamp-3 leading-relaxed tracking-[-0.14px]">
                        {proj.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {proj.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-[50px] border border-[#333333] text-[10px] text-[#868684] font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-[#121212] border-t border-[#1e1e1d] flex items-center justify-between">
                    <Link
                      to={`/projects/${proj.slug}`}
                      className="text-[13px] text-[#faf9f6] group-hover:text-[#cbb0f7] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>View Project Details</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>

                    <div className="flex items-center gap-2">
                      {proj.demoUrl && (
                        <a
                          href={proj.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-[#868684] hover:text-[#faf9f6] flex items-center gap-0.5"
                          title="Open Live Demo"
                        >
                          <span>Demo</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      )}
                    </div>
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
