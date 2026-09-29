import React from 'react'
import { Link } from 'react-router-dom'
import { mockProjects } from '../../data/mockData'
import { ArrowRight, ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react'

export const ProjectsShowcaseSection: React.FC = () => {
  const featuredProject = mockProjects.find((p) => p.featured) || mockProjects[0]
  const secondaryProjects = mockProjects.filter((p) => p.id !== featuredProject.id).slice(0, 3)

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 text-left gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#16C7D9]">
              Portfolio of Deployed Systems
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-heading mt-2 tracking-tight">
              What we've built.
            </h2>
            <p className="text-base text-[#64748B] mt-2 max-w-2xl">
              Explore the platforms, products, and digital systems we've designed and delivered for governments, institutions, and enterprises.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B1F33] hover:text-[#16C7D9] transition-colors shrink-0"
          >
            <span>Explore all projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Featured Project Banner (Large Editorial Style per project_spec.md) */}
        <div className="bg-[#071521] text-white rounded-[20px] overflow-hidden border border-[#172333] shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Image container */}
            <div className="lg:col-span-7 h-64 sm:h-96 lg:h-full relative overflow-hidden bg-[#0B1F33]">
              <img
                src={featuredProject.image}
                alt={featuredProject.name}
                className="w-full h-full object-cover opacity-85 hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-2.5 py-1 rounded-[6px] bg-[#071521]/80 backdrop-blur-md text-[11px] font-mono font-bold text-[#16C7D9] border border-[#16C7D9]/30">
                  FEATURED PLATFORM
                </span>
                <span className="px-2.5 py-1 rounded-[6px] bg-[#10B981]/20 text-[#34D399] text-[11px] font-semibold">
                  STATUS: LIVE
                </span>
              </div>
            </div>

            {/* Narrative container */}
            <div className="lg:col-span-5 p-8 sm:p-10 space-y-5 text-left">
              <div>
                <span className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider">
                  {featuredProject.category} · {featuredProject.industry}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
                  {featuredProject.name}
                </h3>
              </div>

              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-[4px] bg-[#1E293B] text-[11px] text-[#CBD5E1] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions per project_spec.md */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  to={`/projects/${featuredProject.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[8px] bg-[#16C7D9] text-[#071521] text-xs font-bold hover:bg-[#14b8a6] transition-colors"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                {featuredProject.demoUrl && (
                  <a
                    href={featuredProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-[8px] bg-[#1E293B] text-white text-xs font-semibold hover:bg-[#334155] transition-colors"
                  >
                    <span>View Demo</span>
                    <ExternalLink className="h-3 w-3 text-[#16C7D9]" />
                  </a>
                )}

                {featuredProject.caseStudySlug && (
                  <Link
                    to={`/case-studies/${featuredProject.caseStudySlug}`}
                    className="text-xs font-semibold text-[#94A3B8] hover:text-white transition-colors"
                  >
                    Case Study →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Projects Grid (3 Column per project_spec.md) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {secondaryProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-[16px] border border-[#E2E8F0] overflow-hidden flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-md transition-all group text-left"
            >
              <div>
                <div className="h-48 relative overflow-hidden bg-[#F1F5F9]">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-[4px] bg-white/90 backdrop-blur-xs text-[10px] font-bold text-[#0B1F33] shadow-xs">
                    {proj.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                    {proj.industry}
                  </div>
                  <h4 className="text-lg font-bold text-[#0B1F33] font-heading mt-1 group-hover:text-[#16C7D9] transition-colors">
                    {proj.name}
                  </h4>
                  <p className="text-xs text-[#64748B] mt-2 line-clamp-3 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-4">
                    {proj.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 rounded bg-[#F1F5F9] text-[10px] text-[#475569] font-mono"
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
                  <span>View Project</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#64748B] hover:text-[#0B1F33] flex items-center gap-1"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
