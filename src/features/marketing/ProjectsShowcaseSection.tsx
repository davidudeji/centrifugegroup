import React from 'react'
import { Link } from 'react-router-dom'
import { mockProjects } from '../../data/mockData'
import { ArrowRight, ExternalLink, ArrowUpRight } from 'lucide-react'
import { Reveal, StaggerReveal } from '../../components/ui/Reveal'

export const ProjectsShowcaseSection: React.FC = () => {
  const featuredProject = mockProjects.find((p) => p.featured) || mockProjects[0]
  const secondaryProjects = mockProjects.filter((p) => p.id !== featuredProject.id).slice(0, 3)

  return (
    <section className="py-20 lg:py-28 bg-[#F5F7FA] border-b border-[#E2E8F0]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F28C28]">
              Showcase & Delivered Systems
            </p>
            <h2 className="text-[1.875rem] font-bold leading-tight tracking-[-0.04em] text-[#0B1F33] sm:text-[2.25rem] lg:text-[2.75rem]">
              Delivered Institutional & Enterprise Systems
            </h2>
            <p className="mt-3 max-w-[560px] text-[0.9375rem] leading-[1.7] text-[#475569]">
              Platforms, products, and digital systems designed and delivered for governments,
              institutions, and enterprises.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex shrink-0 items-center gap-1.5 text-[0.875rem] font-semibold text-[#0756A5] hover:text-[#073B70] transition-colors group"
          >
            <span>Explore all projects</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Featured Project — editorial image-left layout */}
        <Reveal className="mb-8" from="up" duration={600}>
          <div className="overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-white shadow-[0_8px_32px_rgba(11,31,51,0.06)] transition-all duration-250 hover:shadow-[0_16px_48px_rgba(11,31,51,0.1)]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image */}
              <div className="relative overflow-hidden bg-[#F1F5F9] lg:col-span-7 lg:min-h-[440px]">
                <div className="aspect-[16/10] lg:aspect-auto lg:h-full">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                {/* Badges */}
                <div className="absolute left-4 top-4 flex gap-2">
                  <span className="rounded-[5px] bg-[#0F2C59] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                    Featured Platform
                  </span>
                  <span className="rounded-[5px] bg-[#10B981] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                    Live
                  </span>
                </div>
              </div>

              {/* Narrative */}
              <div className="flex flex-col justify-between lg:col-span-5 p-8 sm:p-10">
                <div className="space-y-4">
                  <div>
                    <span className="text-[0.75rem] font-mono font-semibold uppercase tracking-wider text-[#0756A5]">
                      {featuredProject.category} · {featuredProject.industry}
                    </span>
                    <h3 className="mt-1.5 text-[1.5rem] font-bold leading-snug tracking-tight text-[#0F2C59] sm:text-[1.75rem]">
                      {featuredProject.name}
                    </h3>
                  </div>
                  <p className="text-[0.875rem] leading-[1.7] text-[#475569]">
                    {featuredProject.description}
                  </p>
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-[4px] border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-0.5 font-mono text-[11px] text-[#475569]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#F1F5F9] pt-5">
                  <Link
                    to={`/projects/${featuredProject.slug}`}
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-[6px] bg-[#0756A5] px-5 py-2.5 text-[0.875rem] font-semibold text-white transition-colors hover:bg-[#073B70]"
                  >
                    <span>View Project</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  {featuredProject.demoUrl && (
                    <a
                      href={featuredProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[42px] items-center gap-2 rounded-[6px] border border-[#0756A5] px-4 py-2.5 text-[0.875rem] font-semibold text-[#0756A5] transition-colors hover:bg-[#0756A5] hover:text-white"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {featuredProject.caseStudySlug && (
                    <Link
                      to={`/case-studies/${featuredProject.caseStudySlug}`}
                      className="text-[0.8125rem] font-semibold text-[#64748B] hover:text-[#0F2C59] hover:underline transition-colors"
                    >
                      Case Study →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Secondary Projects Grid */}
        <StaggerReveal className="grid grid-cols-1 gap-5 md:grid-cols-3" childClassName="h-full" stagger={70}>
          {secondaryProjects.map((proj) => (
            <div
              key={proj.id}
              className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-[#E2E8F0] bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#CBD5E1] hover:shadow-[0_16px_40px_rgba(11,31,51,0.08)]"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F1F5F9]">
                <img
                  src={proj.image}
                  alt={proj.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 rounded-[4px] bg-[#0F2C59]/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                  {proj.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <span className="text-[0.75rem] font-mono font-semibold uppercase tracking-wider text-[#0756A5]">
                  {proj.industry}
                </span>
                <h4 className="mt-1 text-[1.0625rem] font-bold leading-snug tracking-tight text-[#0F2C59] transition-colors group-hover:text-[#0756A5]">
                  {proj.name}
                </h4>
                <p className="mt-2 line-clamp-3 flex-1 text-[0.8125rem] leading-[1.65] text-[#64748B]">
                  {proj.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {proj.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-[4px] border border-[#E2E8F0] bg-[#F8FAFC] px-2 py-0.5 font-mono text-[10px] text-[#64748B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div className="flex items-center justify-between border-t border-[#F1F5F9] bg-[#FAFBFC] px-5 py-3">
                <Link
                  to={`/projects/${proj.slug}`}
                  className="inline-flex items-center gap-1 text-[0.8125rem] font-semibold text-[#0756A5] transition-colors hover:text-[#073B70]"
                >
                  <span>View Details</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[0.75rem] font-semibold text-[#64748B] hover:text-[#0F2C59]"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}

export default ProjectsShowcaseSection
