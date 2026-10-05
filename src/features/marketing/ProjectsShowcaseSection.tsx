import React from 'react'
import { Link } from 'react-router-dom'
import { mockProjects } from '../../data/mockData'
import { ArrowRight, ExternalLink, ArrowUpRight } from 'lucide-react'

export const ProjectsShowcaseSection: React.FC = () => {
  const featuredProject = mockProjects.find((p) => p.featured) || mockProjects[0]
  const secondaryProjects = mockProjects.filter((p) => p.id !== featuredProject.id).slice(0, 3)

  return (
    <section className="py-20 lg:py-24 bg-[#F5F7FA] border-b border-[#E2E8F0] text-left">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-[#008DDA] uppercase tracking-wider">
              SHOWCASE & DELIVERED SYSTEMS
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0F2C59] tracking-tight mt-1">
              Delivered Institutional & Enterprise Systems
            </h2>
            <p className="text-[15px] text-[#64748B] mt-2 max-w-2xl leading-relaxed">
              Explore the platforms, products, and digital systems we've designed and delivered for governments, institutions, and enterprises.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#008DDA] hover:text-[#0077B6] transition-colors shrink-0"
          >
            <span>Explore all projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Featured Project Banner (Data Card Module §3.3: 8px radius, #FFFFFF, 1px #E2E8F0 border) */}
        <div className="bg-[#FFFFFF] text-[#1A1A1A] rounded-[8px] overflow-hidden border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs transition-fin mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Image container */}
            <div className="lg:col-span-7 h-64 sm:h-96 lg:h-full relative overflow-hidden bg-[#F1F5F9]">
              <img
                src={featuredProject.image}
                alt={featuredProject.name}
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-2.5 py-1 rounded-[4px] bg-[#0F2C59] text-[10px] font-mono uppercase tracking-[1px] text-white">
                  FEATURED PLATFORM
                </span>
                <span className="px-2.5 py-1 rounded-[4px] bg-[#10B981] text-white text-[10px] font-mono font-semibold">
                  STATUS: LIVE
                </span>
              </div>
            </div>

            {/* Narrative container */}
            <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
              <div>
                <span className="text-xs font-mono font-semibold text-[#008DDA] uppercase tracking-wider">
                  {featuredProject.category} · {featuredProject.industry}
                </span>
                <h3 className="text-[24px] sm:text-[28px] font-bold text-[#0F2C59] tracking-tight mt-1 leading-snug">
                  {featuredProject.name}
                </h3>
              </div>

              <p className="text-[14px] text-[#475569] leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Technologies in 4px badges */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-[4px] border border-[#E2E8F0] bg-[#F8FAFC] text-[11px] text-[#475569] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons Row */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  to={`/projects/${featuredProject.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] text-sm font-semibold bg-[#008DDA] text-white hover:bg-[#0077B6] transition-colors"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                {featuredProject.demoUrl && (
                  <a
                    href={featuredProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-[4px] text-sm font-semibold bg-transparent border border-[#008DDA] text-[#008DDA] hover:bg-[#008DDA] hover:text-white transition-colors"
                  >
                    <span>View Demo</span>
                    <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                  </a>
                )}

                {featuredProject.caseStudySlug && (
                  <Link
                    to={`/case-studies/${featuredProject.caseStudySlug}`}
                    className="text-xs font-semibold text-[#64748B] hover:text-[#0F2C59] hover:underline transition-colors"
                  >
                    Case Study →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Projects Grid (3 Column 8px Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] overflow-hidden flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-xs transition-fin group text-left"
            >
              <div>
                <div className="h-44 relative overflow-hidden bg-[#F1F5F9]">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-[4px] bg-[#0F2C59]/90 text-[10px] font-semibold uppercase tracking-wider text-white">
                    {proj.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="text-xs font-mono font-semibold text-[#008DDA] uppercase tracking-wider">
                    {proj.industry}
                  </div>
                  <h4 className="text-[18px] font-bold text-[#0F2C59] tracking-tight mt-1 group-hover:text-[#008DDA] transition-colors">
                    {proj.name}
                  </h4>
                  <p className="text-[13px] text-[#64748B] mt-2 line-clamp-3 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {proj.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-[4px] border border-[#E2E8F0] bg-[#F8FAFC] text-[10px] text-[#64748B] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 py-3.5 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between text-xs font-semibold">
                <Link
                  to={`/projects/${proj.slug}`}
                  className="text-[#008DDA] group-hover:text-[#0077B6] inline-flex items-center gap-1 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>

                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#64748B] hover:text-[#0F2C59] flex items-center gap-1"
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
export default ProjectsShowcaseSection
