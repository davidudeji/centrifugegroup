import React from 'react'
import { Link } from 'react-router-dom'
import { mockProjects } from '../../data/mockData'
import { ArrowRight, ExternalLink, ArrowUpRight } from 'lucide-react'

export const ProjectsShowcaseSection: React.FC = () => {
  const featuredProject = mockProjects.find((p) => p.featured) || mockProjects[0]
  const secondaryProjects = mockProjects.filter((p) => p.id !== featuredProject.id).slice(0, 3)

  return (
    <section className="py-20 lg:py-24 bg-[#121212] border-b border-[#1e1e1d]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 text-left gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684] mb-3">
              <span>PORTFOLIO OF DEPLOYED SYSTEMS</span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] font-normal text-[#faf9f6] tracking-[-1.13px] leading-[1.05]">
              What we've built.
            </h2>
            <p className="text-[15px] text-[#868684] tracking-[-0.14px] mt-3 max-w-2xl leading-[1.4]">
              Explore the platforms, products, and digital systems we've designed and delivered for governments, institutions, and enterprises.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-[14px] text-[#faf9f6] hover:text-[#cbb0f7] transition-colors shrink-0 tracking-[-0.14px]"
          >
            <span>Explore all projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Featured Project Banner (Onyx #1e1e1d surface, 20px radius, 1px #1e1e1d border) */}
        <div className="bg-[#1e1e1d] text-[#faf9f6] rounded-[20px] overflow-hidden border border-[#1e1e1d] hover:border-[#333333] transition-colors mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Image container */}
            <div className="lg:col-span-7 h-64 sm:h-96 lg:h-full relative overflow-hidden bg-[#000000]">
              <img
                src={featuredProject.image}
                alt={featuredProject.name}
                className="w-full h-full object-cover opacity-80 hover:opacity-95 transition-opacity duration-300"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-2.5 py-1 rounded-[50px] bg-[#000000]/80 text-[10px] font-mono uppercase tracking-[1px] text-[#cbb0f7] border border-[#333333]">
                  FEATURED PLATFORM
                </span>
                <span className="px-2.5 py-1 rounded-[50px] bg-[#000000]/80 text-[#faf9f6] border border-[#333333] text-[10px] font-mono">
                  STATUS: LIVE
                </span>
              </div>
            </div>

            {/* Narrative container */}
            <div className="lg:col-span-5 p-8 sm:p-10 space-y-4 text-left">
              <div>
                <span className="text-[10px] font-mono text-[#868684] uppercase tracking-[1px]">
                  {featuredProject.category} · {featuredProject.industry}
                </span>
                <h3 className="text-[24px] sm:text-[28px] font-normal tracking-[-0.64px] text-[#faf9f6] mt-1 leading-snug">
                  {featuredProject.name}
                </h3>
              </div>

              <p className="text-[14px] text-[#868684] leading-relaxed tracking-[-0.14px]">
                {featuredProject.description}
              </p>

              {/* Technologies in 50px pill badges */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-[50px] border border-[#333333] bg-[#121212] text-[10px] text-[#b4b4b2] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons Row */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  to={`/projects/${featuredProject.slug}`}
                  className="inline-flex items-center justify-center px-[22px] py-[10px] rounded-[33px] text-[14px] font-semibold bg-[#ffffff] text-[#080808] hover:bg-[#e3e2e0] transition-colors duration-150 tracking-[-0.14px]"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-2" />
                </Link>

                {featuredProject.demoUrl && (
                  <a
                    href={featuredProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-[18px] py-[9px] rounded-[33px] text-[13px] font-normal bg-transparent border border-[#333333] text-[#b4b4b2] hover:border-[#b4b4b2] hover:text-[#faf9f6] transition-colors"
                  >
                    <span>View Demo</span>
                    <ExternalLink className="h-3 w-3 ml-1.5 text-[#cbb0f7]" />
                  </a>
                )}

                {featuredProject.caseStudySlug && (
                  <Link
                    to={`/case-studies/${featuredProject.caseStudySlug}`}
                    className="text-[13px] text-[#868684] hover:text-[#faf9f6] hover:underline transition-colors"
                  >
                    Case Study →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Projects Grid (3 Column Onyx Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#1e1e1d] rounded-[20px] border border-[#1e1e1d] overflow-hidden flex flex-col justify-between hover:border-[#333333] transition-colors group text-left"
            >
              <div>
                <div className="h-44 relative overflow-hidden bg-[#000000]">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-95 transition-opacity duration-200"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-[50px] bg-[#000000]/80 border border-[#333333] text-[10px] font-normal uppercase tracking-[1px] text-[#b4b4b2]">
                    {proj.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="text-[10px] font-mono text-[#868684] uppercase tracking-[1px]">
                    {proj.industry}
                  </div>
                  <h4 className="text-[18px] font-semibold text-[#faf9f6] tracking-[-0.18px] mt-1 group-hover:text-[#cbb0f7] transition-colors">
                    {proj.name}
                  </h4>
                  <p className="text-[13px] text-[#868684] mt-2 line-clamp-3 leading-relaxed tracking-[-0.14px]">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {proj.technologies.slice(0, 3).map((tech) => (
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
                  <span>View Project</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>

                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#868684] hover:text-[#faf9f6] flex items-center gap-1"
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
