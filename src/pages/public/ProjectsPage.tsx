import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { projectService } from '../../services/projectService'
import type { Project } from '../../types'
import { ArrowRight, ExternalLink, ArrowUpRight, Search, Filter } from 'lucide-react'
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
    <div className="w-full text-left">
      <SEO
        title="What We've Built | Projects & Products Showcase"
        description="Explore the platforms, products, and digital systems designed and delivered by Centrifuge Group."
      />

      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-[#172333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-[#16C7D9] tracking-wider uppercase">
              DELIVERED SYSTEMS & DIGITAL PRODUCTS
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              What we've built.
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Explore the platforms, enterprise software, and mission-critical systems we've designed and delivered for commercial operations, healthcare, logistics, and government institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Content Grid */}
      <section className="py-14 bg-[#F7F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Category Filter */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E2E8F0]">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3 py-1.5 rounded-[6px] font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#0B1F33] text-white font-semibold shadow-xs'
                      : 'bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#F1F5F9]'
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
                leftIcon={<Search className="h-4 w-4" />}
              />
            </div>
          </div>

          {/* Grid of Projects */}
          {isLoading ? (
            <div className="py-20 text-center text-xs text-[#64748B]">
              Loading project portfolio...
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center text-sm text-[#64748B] bg-white rounded-[12px] border border-[#E2E8F0]">
              No projects found matching your criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-white rounded-[16px] border border-[#E2E8F0] overflow-hidden flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="h-52 relative overflow-hidden bg-[#0B1F33]">
                      <img
                        src={proj.image}
                        alt={proj.name}
                        className="w-full h-full object-cover opacity-90 group-hover:scale-103 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 flex gap-1.5">
                        <span className="px-2 py-0.5 rounded-[4px] bg-white/95 text-[10px] font-bold text-[#0B1F33] shadow-xs">
                          {proj.category}
                        </span>
                        {proj.status === 'live' && (
                          <span className="px-2 py-0.5 rounded-[4px] bg-[#16A34A] text-[10px] font-bold text-white shadow-xs">
                            LIVE
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="text-[11px] font-mono font-bold text-[#64748B] uppercase tracking-wider">
                        {proj.industry}
                      </div>
                      <h3 className="text-lg font-bold text-[#0B1F33] font-heading mt-1 group-hover:text-[#16C7D9] transition-colors leading-snug">
                        {proj.name}
                      </h3>
                      <p className="text-xs text-[#64748B] mt-2 line-clamp-3 leading-relaxed">
                        {proj.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {proj.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-[#F1F5F9] text-[10px] text-[#475569] font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between">
                    <Link
                      to={`/projects/${proj.slug}`}
                      className="text-xs font-bold text-[#0B1F33] group-hover:text-[#16C7D9] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>View Project Details</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>

                    <div className="flex items-center gap-2">
                      {proj.demoUrl && (
                        <a
                          href={proj.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-semibold text-[#64748B] hover:text-[#0B1F33] flex items-center gap-0.5"
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
