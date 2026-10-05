import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { projectService } from '../../services/projectService'
import type { Project } from '../../types'
import { ArrowLeft, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '../../components/ui/Button'

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const [project, setProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (!slug) return
    setIsLoading(true)
    projectService.getProjectBySlug(slug).then((proj) => {
      setProject(proj)
      setIsLoading(false)
    })
  }, [slug])

  if (isLoading) {
    return (
      <div className="py-32 text-center text-[13px] font-medium text-[#94A3B8] bg-white">
        Loading project specification...
      </div>
    )
  }

  if (!project) {
    return (
      <div className="py-32 text-center space-y-4 bg-white text-[#0B1F33]">
        <h2 className="text-[20px] font-bold">Project not found</h2>
        <p className="text-[14px] text-[#475569]">The requested project does not exist or has been archived.</p>
        <Link to="/projects">
          <Button variant="secondary" size="sm">Back to Projects</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="w-full text-left bg-white text-[#0B1F33]">
      <SEO
        title={`${project.name} | Projects Showcase`}
        description={project.description}
      />

      {/* Hero Header */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto space-y-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#94A3B8] hover:text-[#16C7D9] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Projects & Products</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="px-2.5 py-0.5 rounded-[4px] bg-[#EFF9FA]/10 border border-[#16C7D9]/30 text-[#16C7D9] text-[11px] font-semibold">
              {project.category}
            </span>
            <span className="text-[12px] text-[#94A3B8]">
              • {project.industry}
            </span>
            {project.status === 'live' && (
              <span className="px-2.5 py-0.5 rounded-[4px] bg-white/10 border border-white/20 text-white text-[10px] font-semibold uppercase tracking-[1px]">
                STATUS: PRODUCTION LIVE
              </span>
            )}
          </div>

          <h1
            className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {project.name}
          </h1>

          <p className="text-[16px] text-[#94A3B8] leading-relaxed max-w-3xl">
            {project.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-[6px] bg-[#16C7D9] text-[#0B1F33] hover:bg-[#10b8ca] text-[13px] font-semibold transition-colors"
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
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-[6px] bg-transparent border border-white/20 text-white hover:border-white/40 text-[13px] transition-colors"
              >
                <span>Interactive Demo</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#16C7D9]" />
              </a>
            )}

            {project.caseStudySlug && (
              <Link
                to={`/case-studies/${project.caseStudySlug}`}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-[6px] bg-transparent border border-white/20 text-[#94A3B8] hover:text-white text-[13px] transition-colors"
              >
                <span>View Case Study</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto space-y-10">
          {/* Visual Container */}
          <div className="rounded-[12px] overflow-hidden border border-[#E2E8F0] bg-[#0B1F33]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-80 sm:h-[450px] object-cover opacity-90"
            />
          </div>

          {/* Grid Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-8 bg-white p-8 sm:p-10 rounded-[12px] border border-[#E2E8F0]">
              {project.overview && (
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#94A3B8] block mb-2">
                    SYSTEM OVERVIEW
                  </span>
                  <h3 className="text-[20px] font-bold text-[#0B1F33] tracking-[-0.025em] mb-3">
                    Architectural Overview
                  </h3>
                  <p className="text-[14px] text-[#475569] leading-relaxed">
                    {project.overview}
                  </p>
                </div>
              )}

              {project.challenge && (
                <div className="pt-6 border-t border-[#E2E8F0]">
                  <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#94A3B8] block mb-2">
                    THE PROBLEM
                  </span>
                  <h3 className="text-[20px] font-bold text-[#0B1F33] tracking-[-0.025em] mb-3">
                    Operational Challenge
                  </h3>
                  <p className="text-[14px] text-[#475569] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="pt-6 border-t border-[#E2E8F0]">
                  <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#16C7D9] block mb-2">
                    THE SOLUTION
                  </span>
                  <h3 className="text-[20px] font-bold text-[#0B1F33] tracking-[-0.025em] mb-3">
                    Centrifuge Solution
                  </h3>
                  <p className="text-[14px] text-[#334155] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}

              {project.capabilities && project.capabilities.length > 0 && (
                <div className="pt-6 border-t border-[#E2E8F0]">
                  <h3 className="text-[20px] font-bold text-[#0B1F33] tracking-[-0.025em] mb-4">
                    Key Engineered Capabilities
                  </h3>
                  <div className="space-y-2.5">
                    {project.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-[13px] text-[#475569]">
                        <CheckCircle2 className="h-4 w-4 text-[#16C7D9] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Meta Box */}
            <div className="lg:col-span-4 space-y-5">
              <div className="bg-white p-6 rounded-[12px] border border-[#E2E8F0] space-y-4">
                <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#94A3B8] block">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-[4px] bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] text-[#475569] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] space-y-2.5 text-[13px]">
                  <div className="flex justify-between">
                    <span className="text-[#94A3B8]">Industry</span>
                    <span className="font-semibold text-[#0B1F33]">{project.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#94A3B8]">Category</span>
                    <span className="font-semibold text-[#0B1F33]">{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#94A3B8]">Delivery Status</span>
                    <span className="font-semibold text-[#16C7D9]">Production Live</span>
                  </div>
                </div>
              </div>

              {/* Consultation Card */}
              <div className="p-6 rounded-[12px] bg-[#0B1F33] text-center space-y-3">
                <h4 className="text-[16px] font-bold text-white">
                  Deploy a similar platform?
                </h4>
                <p className="text-[12.5px] text-[#94A3B8] leading-relaxed">
                  Our senior engineering team can evaluate your operational requirements and provide architectural recommendations.
                </p>
                <div className="pt-1">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 h-10 px-5 rounded-[6px] bg-[#16C7D9] text-[#0B1F33] hover:bg-[#10b8ca] text-[13px] font-semibold transition-colors"
                  >
                    <span>Talk to an Expert</span>
                    <ArrowRight className="h-3.5 w-3.5" />
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
