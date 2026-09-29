import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { projectService } from '../../services/projectService'
import type { Project } from '../../types'
import { ArrowLeft, ExternalLink, ArrowRight, CheckCircle2, Shield, Layers } from 'lucide-react'
import { Button } from '../../components/ui/Button'

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const [project, setProject] = useState<Project | null>(null)
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (!slug) return
    setIsLoading(true)
    projectService.getProductBySlug
    projectService.getProjectBySlug(slug).then((proj) => {
      setProject(proj)
      if (proj) {
        projectService.getProjects().then((all) => {
          setRelatedProjects(all.filter((p) => p.id !== proj.id && p.category === proj.category).slice(0, 2))
        })
      }
      setIsLoading(false)
    })
  }, [slug])

  if (isLoading) {
    return (
      <div className="py-32 text-center text-xs text-[#64748B]">
        Loading project specification...
      </div>
    )
  }

  if (!project) {
    return (
      <div className="py-32 text-center space-y-4">
        <h2 className="text-xl font-bold text-[#111827]">Project not found</h2>
        <p className="text-xs text-[#64748B]">The requested project does not exist or has been archived.</p>
        <Link to="/projects">
          <Button variant="dark" size="sm">Back to Projects</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="w-full text-left">
      <SEO
        title={`${project.name} | Projects Showcase`}
        description={project.description}
      />

      {/* Top Breadcrumb & Title */}
      <section className="bg-[#0B1F33] text-white py-12 sm:py-16 border-b border-[#172333]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#94A3B8] hover:text-[#16C7D9] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Projects & Products</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="px-2.5 py-0.5 rounded bg-[#16C7D9]/20 text-[#67E8F9] text-xs font-mono font-bold">
              {project.category}
            </span>
            <span className="text-xs text-[#94A3B8] font-mono">
              • {project.industry}
            </span>
            {project.status === 'live' && (
              <span className="px-2 py-0.5 rounded bg-[#16A34A]/20 text-[#4ADE80] text-[11px] font-semibold">
                STATUS: PRODUCTION LIVE
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            {project.name}
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Action Row per project_spec.md */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[8px] bg-[#16C7D9] text-[#071521] text-xs font-bold hover:bg-[#14b8a6] transition-colors"
              >
                <span>Visit Live Project</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[8px] bg-[#1E293B] text-white text-xs font-semibold hover:bg-[#334155] transition-colors"
              >
                <span>View Interactive Demo</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#16C7D9]" />
              </a>
            )}

            {project.caseStudySlug && (
              <Link
                to={`/case-studies/${project.caseStudySlug}`}
                className="inline-flex items-center gap-1 px-4 py-2 rounded-[8px] border border-[#334155] text-white text-xs font-semibold hover:bg-white/5 transition-colors"
              >
                <span>View Case Study</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-2 rounded-[8px] text-xs font-mono text-[#94A3B8] hover:text-white"
              >
                <span>Repository ↗</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main Detail Content */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Hero Visual Container */}
          <div className="rounded-[16px] overflow-hidden border border-[#E2E8F0] shadow-md bg-white">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-80 sm:h-[450px] object-cover"
            />
          </div>

          {/* Editorial Grid: Overview, Challenge, Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-8 bg-white p-8 rounded-[16px] border border-[#E2E8F0]">
              {project.overview && (
                <div>
                  <h3 className="text-xl font-bold text-[#0B1F33] font-heading mb-2">
                    System Overview
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {project.overview}
                  </p>
                </div>
              )}

              {project.challenge && (
                <div className="pt-6 border-t border-[#E2E8F0]">
                  <h3 className="text-lg font-bold text-[#0B1F33] font-heading mb-2">
                    Operational Challenge
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="pt-6 border-t border-[#E2E8F0]">
                  <h3 className="text-lg font-bold text-[#0B1F33] font-heading mb-2">
                    Centrifuge Architectural Solution
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}

              {project.capabilities && project.capabilities.length > 0 && (
                <div className="pt-6 border-t border-[#E2E8F0]">
                  <h3 className="text-lg font-bold text-[#0B1F33] font-heading mb-3">
                    Key Engineered Capabilities
                  </h3>
                  <div className="space-y-2.5">
                    {project.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#334155]">
                        <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Meta Box */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-[16px] border border-[#E2E8F0] space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-[4px] bg-[#F1F5F9] text-xs font-mono text-[#0B1F33]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#64748B]">Industry</span>
                    <span className="font-semibold text-[#111827]">{project.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748B]">Category</span>
                    <span className="font-semibold text-[#111827]">{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748B]">Delivery Status</span>
                    <span className="font-semibold text-[#16A34A]">Production Live</span>
                  </div>
                </div>
              </div>

              {/* Consultation Card */}
              <div className="p-6 rounded-[16px] bg-[#071521] text-white border border-[#172333] space-y-3">
                <h4 className="text-sm font-bold font-heading">
                  Deploy a similar platform?
                </h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Our senior engineering team can evaluate your operational requirements and provide architectural recommendations.
                </p>
                <div className="pt-2">
                  <Link to="/contact">
                    <Button variant="primary" size="sm" className="w-full">
                      Talk to an Expert
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ProjectDetailPage
