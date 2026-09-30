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
      <div className="py-32 text-center text-[12px] font-mono text-[#868684] bg-[#000000]">
        Loading project specification...
      </div>
    )
  }

  if (!project) {
    return (
      <div className="py-32 text-center space-y-4 bg-[#000000] text-[#faf9f6]">
        <h2 className="text-[20px] font-semibold">Project not found</h2>
        <p className="text-[13px] text-[#868684]">The requested project does not exist or has been archived.</p>
        <Link to="/projects">
          <Button variant="secondary" size="sm">Back to Projects</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="w-full text-left bg-[#000000] text-[#faf9f6]">
      <SEO
        title={`${project.name} | Projects Showcase`}
        description={project.description}
      />

      {/* ─── Hero Header (Warp Obsidian #000000) ─── */}
      <section className="bg-[#000000] text-[#faf9f6] py-16 sm:py-24 border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-[12px] font-mono text-[#868684] hover:text-[#f0b66d] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Projects & Products</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="px-2.5 py-0.5 rounded-[50px] bg-[#121212] border border-[#333333] text-[#f0b66d] text-[11px] font-mono">
              {project.category}
            </span>
            <span className="text-[12px] text-[#868684] font-mono">
              • {project.industry}
            </span>
            {project.status === 'live' && (
              <span className="px-2.5 py-0.5 rounded-[50px] bg-[#121212] border border-[#333333] text-[#faf9f6] text-[10px] font-mono">
                STATUS: PRODUCTION LIVE
              </span>
            )}
          </div>

          <h1 className="text-[32px] sm:text-[48px] font-normal text-[#faf9f6] tracking-[-1.5px] leading-tight">
            {project.name}
          </h1>

          <p className="text-[16px] text-[#868684] leading-relaxed max-w-3xl tracking-[-0.14px]">
            {project.description}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-[33px] bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] text-[13px] font-semibold transition-colors"
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
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-[33px] bg-[#1e1e1d] border border-[#333333] text-[#faf9f6] text-[13px] hover:border-[#666469] transition-colors"
              >
                <span>Interactive Demo</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#f0b66d]" />
              </a>
            )}

            {project.caseStudySlug && (
              <Link
                to={`/case-studies/${project.caseStudySlug}`}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-[33px] bg-transparent border border-[#333333] text-[#b4b4b2] hover:text-[#faf9f6] text-[13px] transition-colors"
              >
                <span>View Case Study</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ─── Main Content (Warp Graphite #121212) ─── */}
      <section className="py-20 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Visual Container */}
          <div className="rounded-[20px] overflow-hidden border border-[#1e1e1d] bg-[#000000]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-80 sm:h-[450px] object-cover opacity-90"
            />
          </div>

          {/* Grid Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8 bg-[#1e1e1d] p-8 sm:p-10 rounded-[20px] border border-[#1e1e1d]">
              {project.overview && (
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#868684] block mb-2">
                    SYSTEM OVERVIEW
                  </span>
                  <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px] mb-2">
                    Architectural Overview
                  </h3>
                  <p className="text-[14px] text-[#868684] leading-relaxed">
                    {project.overview}
                  </p>
                </div>
              )}

              {project.challenge && (
                <div className="pt-6 border-t border-[#333333]/50">
                  <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#868684] block mb-2">
                    THE PROBLEM
                  </span>
                  <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px] mb-2">
                    Operational Challenge
                  </h3>
                  <p className="text-[14px] text-[#868684] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="pt-6 border-t border-[#333333]/50">
                  <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#f0b66d] block mb-2">
                    THE SOLUTION
                  </span>
                  <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px] mb-2">
                    Centrifuge Solution
                  </h3>
                  <p className="text-[14px] text-[#faf9f6] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}

              {project.capabilities && project.capabilities.length > 0 && (
                <div className="pt-6 border-t border-[#333333]/50">
                  <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px] mb-3">
                    Key Engineered Capabilities
                  </h3>
                  <div className="space-y-2.5">
                    {project.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-[13px] text-[#b4b4b2]">
                        <CheckCircle2 className="h-4 w-4 text-[#f0b66d] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Meta Box */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#1e1e1d] p-6 rounded-[20px] border border-[#1e1e1d] space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#868684] block">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-[50px] bg-[#121212] border border-[#333333] text-[11px] font-mono text-[#b4b4b2]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#333333]/50 space-y-2.5 text-[12.5px]">
                  <div className="flex justify-between">
                    <span className="text-[#868684]">Industry</span>
                    <span className="font-medium text-[#faf9f6]">{project.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#868684]">Category</span>
                    <span className="font-medium text-[#faf9f6]">{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#868684]">Delivery Status</span>
                    <span className="font-mono text-[#f0b66d]">Production Live</span>
                  </div>
                </div>
              </div>

              {/* Consultation Card */}
              <div className="p-6 rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] text-center space-y-3">
                <h4 className="text-[16px] font-semibold text-[#faf9f6]">
                  Deploy a similar platform?
                </h4>
                <p className="text-[12.5px] text-[#868684] leading-relaxed">
                  Our senior engineering team can evaluate your operational requirements and provide architectural recommendations.
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center h-10 px-5 rounded-[33px] bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] text-[13px] font-semibold transition-colors"
                  >
                    <span>Talk to an Expert</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
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
