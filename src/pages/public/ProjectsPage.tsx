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
    <div className="w-full text-left bg-white text-[#0F172A]">
      <SEO
        title="What We've Built | Projects & Products Showcase"
        description="Explore the platforms, products, and digital systems designed and delivered by Centrifuge Group."
      />

      {/* Header Banner */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">DELIVERED SYSTEMS & DIGITAL PRODUCTS</span>
            </div>
            <h1
              className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              What we've built.
            </h1>
            <p className="text-[16px] text-[#94A3B8] leading-relaxed max-w-2xl">
              Explore the platforms, enterprise software, and mission-critical systems we've designed and delivered for commercial operations, healthcare, logistics, and government institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Content Grid */}
      <section className="py-14 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto">

          {/* Search & Category Filter */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E2E8F0]">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[11px] uppercase tracking-[1px] px-3.5 py-1.5 rounded-[6px] font-semibold transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#F27A22] text-[#0F172A] shadow-sm'
                      : 'bg-white border border-[#E2E8F0] text-[#475569] hover:border-[#CBD5E1] hover:text-[#0F172A]'
                  }`}
                >
                  {cat === 'all' ? 'All Projects' : cat}
                </button>
              ))}
            </div>

            <div className="w-full md:w-72">
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                leftIcon={<Search className="h-3.5 w-3.5" />}
              />
            </div>
          </div>

          {/* Grid of Projects */}
          {isLoading ? (
            <div className="py-20 text-center text-[13px] text-[#94A3B8]">
              Loading project portfolio…
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center text-[13px] text-[#475569] bg-white rounded-[12px] border border-[#E2E8F0]">
              No projects found matching your criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-white rounded-[12px] border border-[#E2E8F0] overflow-hidden flex flex-col hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200 group"
                >
                  <div>
                    <div className="h-44 relative overflow-hidden bg-[#E2E8F0]">
                      <img
                        src={proj.image}
                        alt={proj.name}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                      />
                      <div className="absolute top-3 left-3 flex gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-[4px] bg-white/90 border border-[#E2E8F0] text-[10px] font-semibold uppercase tracking-[1px] text-[#475569]">
                          {proj.category}
                        </span>
                        {proj.status === 'live' && (
                          <span className="px-2.5 py-0.5 rounded-[4px] bg-[#0F172A]/80 text-[10px] font-semibold text-[#22C55E] flex items-center gap-1 backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
                            LIVE
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#F27A22] mb-1">
                        {proj.industry}
                      </div>
                      <h3 className="text-[17px] font-bold text-[#0F172A] leading-snug group-hover:text-[#334155] transition-colors">
                        {proj.name}
                      </h3>
                      <p className="text-[13px] text-[#475569] mt-2 line-clamp-3 leading-relaxed">
                        {proj.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {proj.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-[4px] border border-[#E2E8F0] bg-[#F8FAFC] text-[10px] text-[#475569] font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between">
                    <Link
                      to={`/projects/${proj.slug}`}
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#334155] group-hover:text-[#F27A22] transition-colors"
                    >
                      View Project Details
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>

                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[12px] text-[#94A3B8] hover:text-[#475569] flex items-center gap-0.5 transition-colors"
                        title="Open Live Demo"
                      >
                        Demo
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
