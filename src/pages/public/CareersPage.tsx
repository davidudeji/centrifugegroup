import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockJobs } from '../../data/mockData'
import { ArrowRight, MapPin, Briefcase, Award, Heart, CheckCircle2 } from 'lucide-react'

export const CareersPage: React.FC = () => {
  return (
    <div className="w-full text-left bg-[#000000] text-[#faf9f6]">
      <SEO
        title="Careers & Engineering Culture | Centrifuge Group"
        description="Build technology that matters. Join Centrifuge to engineer mission-critical enterprise systems and national health registries."
      />

      {/* ─── Hero Header (Warp Obsidian #000000) ─── */}
      <section className="bg-[#000000] text-[#faf9f6] py-16 sm:py-24 border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684]">
              <span>JOIN OUR ENGINEERING TEAM</span>
            </div>
            <h1 className="text-[36px] sm:text-[56px] font-normal text-[#faf9f6] tracking-[-2.24px] leading-[0.98]">
              Build technology that matters.
            </h1>
            <p className="text-[16px] text-[#868684] tracking-[-0.18px] leading-relaxed">
              We design software and platforms that run hospital wards, keep cargo moving, and govern national health workforces. Join a disciplined engineering team that prizes reliability and real-world impact.
            </p>
            <div className="pt-2">
              <Link
                to="/careers/jobs"
                className="inline-flex items-center justify-center h-10 px-6 rounded-[33px] bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] text-[13px] font-semibold transition-colors"
              >
                <span>View All Open Positions ({mockJobs.length})</span>
                <ArrowRight className="h-3.5 w-3.5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Culture & Principles (Warp Graphite #121212) ─── */}
      <section className="py-20 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#f0b66d]">
              ENGINEERING VALUES
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-normal text-[#faf9f6] tracking-[-0.64px] mt-1">
              Why engineers thrive at Centrifuge.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] hover:border-[#333333] space-y-3 transition-colors">
              <div className="h-10 w-10 rounded-[8px] bg-[#121212] border border-[#333333] flex items-center justify-center">
                <Award className="h-5 w-5 text-[#f0b66d]" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#faf9f6] tracking-[-0.18px] pt-1">
                High-Stakes Operational Systems
              </h3>
              <p className="text-[13px] text-[#868684] leading-relaxed">
                Your code won’t sit on a forgotten internal prototype. It directly verifies medical licenses, routes freight fleets, and powers retail businesses.
              </p>
            </div>

            <div className="p-7 rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] hover:border-[#333333] space-y-3 transition-colors">
              <div className="h-10 w-10 rounded-[8px] bg-[#121212] border border-[#333333] flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-[#f0b66d]" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#faf9f6] tracking-[-0.18px] pt-1">
                Disciplined Architecture
              </h3>
              <p className="text-[13px] text-[#868684] leading-relaxed">
                We value clean code, strong typing with TypeScript, offline-first reliability, and strict peer code reviews over reckless shortcuts.
              </p>
            </div>

            <div className="p-7 rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] hover:border-[#333333] space-y-3 transition-colors">
              <div className="h-10 w-10 rounded-[8px] bg-[#121212] border border-[#333333] flex items-center justify-center">
                <Heart className="h-5 w-5 text-[#f0b66d]" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#faf9f6] tracking-[-0.18px] pt-1">
                Real Career Support
              </h3>
              <p className="text-[13px] text-[#868684] leading-relaxed">
                Comprehensive health coverage, flexible hybrid setups, modern workstation provisioning, and dedicated continuous learning budgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Open Roles Preview ─── */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-[#1e1e1d] gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#868684]">
                CURRENT VACANCIES
              </span>
              <h3 className="text-[24px] sm:text-[32px] font-normal text-[#faf9f6] tracking-[-0.64px] mt-1">
                Featured Engineering Roles
              </h3>
            </div>
            <Link
              to="/careers/jobs"
              className="text-[12px] font-medium text-[#f0b66d] hover:underline flex items-center gap-1"
            >
              <span>Explore all {mockJobs.length} openings</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="space-y-4">
            {mockJobs.slice(0, 3).map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] hover:border-[#333333] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-mono tracking-[1px] px-2.5 py-0.5 rounded-[50px] border border-[#333333] text-[#f0b66d] bg-[#121212]">
                      {job.department}
                    </span>
                    <span className="text-[11px] text-[#868684] font-mono">{job.type}</span>
                  </div>
                  <h4 className="text-[18px] font-semibold text-[#faf9f6] mt-2 tracking-[-0.18px]">
                    {job.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[12px] text-[#868684] mt-1 font-mono">
                    <MapPin className="h-3 w-3 text-[#f0b66d]" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <Link
                  to={`/careers/jobs/${job.slug}`}
                  className="inline-flex items-center justify-center h-9 px-5 rounded-[33px] bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] text-[12px] font-semibold shrink-0 transition-colors"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="h-3 w-3 ml-1.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CareersPage
