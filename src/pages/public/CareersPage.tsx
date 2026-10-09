import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockJobs } from '../../data/mockData'
import { ArrowRight, MapPin, Briefcase, Award, Heart } from 'lucide-react'

export const CareersPage: React.FC = () => {
  return (
    <div className="w-full text-left bg-[#F5F7FA] text-[#1A1A1A]">
      <SEO
        title="Careers & Engineering Culture | Centrifuge Group"
        description="Build technology that matters. Join Centrifuge to engineer mission-critical enterprise systems and national health registries."
      />

      {/* ─── Hero Header (UI/UX Spec §1.1 & §4.1) ─── */}
      <section className="bg-[#FFFFFF] text-[#1A1A1A] py-16 sm:py-20 border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-[32px] sm:text-[44px] font-bold text-[#0F2C59] tracking-tight leading-[1.2]">
              Build Technology Engineered for Real Operational Scale
            </h1>
            <p className="text-[16px] text-[#475569] leading-relaxed max-w-2xl">
              We design software and platforms that run hospital wards, keep logistics cargo moving, and govern national healthcare workforces. Join a disciplined engineering team that prizes architectural integrity and real-world impact.
            </p>
            <div className="pt-2">
              <Link
                to="/careers/jobs"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#008DDA] text-white hover:bg-[#0077B6] text-sm font-semibold transition-colors duration-200"
              >
                <span>View All Open Positions ({mockJobs.length})</span>
                <ArrowRight className="h-4 w-4" />
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Culture & Principles (UI/UX Spec §3.3 Data Card Module) ─── */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 text-left">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#008DDA]">
              ENGINEERING VALUES
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0F2C59] tracking-tight mt-1">
              Why Engineers Thrive at Centrifuge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs space-y-3 transition-fin text-left">
              <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center">
                <Award className="h-5 w-5 text-[#008DDA]" />
              </div>
              <h3 className="text-[18px] font-bold text-[#0F2C59] tracking-tight pt-1">
                High-Stakes Operational Systems
              </h3>
              <p className="text-[14px] text-[#475569] leading-relaxed">
                Your code won’t sit on a forgotten internal prototype. It directly verifies medical licenses, routes freight fleets, and powers retail businesses.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs space-y-3 transition-fin text-left">
              <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-[#008DDA]" />
              </div>
              <h3 className="text-[18px] font-bold text-[#0F2C59] tracking-tight pt-1">
                Disciplined Architecture
              </h3>
              <p className="text-[14px] text-[#475569] leading-relaxed">
                We value clean code, strong typing with TypeScript, offline-first reliability, and strict peer code reviews over reckless shortcuts.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs space-y-3 transition-fin text-left">
              <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center">
                <Heart className="h-5 w-5 text-[#008DDA]" />
              </div>
              <h3 className="text-[18px] font-bold text-[#0F2C59] tracking-tight pt-1">
                Institutional Support
              </h3>
              <p className="text-[14px] text-[#475569] leading-relaxed">
                Comprehensive health coverage, flexible hybrid setups, modern workstation provisioning, and dedicated continuous learning budgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Open Roles Preview ─── */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-6 border-b border-[#E2E8F0] gap-4 text-left">
            <div>
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#008DDA]">
                CURRENT VACANCIES
              </span>
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#0F2C59] tracking-tight mt-1">
                Featured Engineering Roles
              </h3>
            </div>
            <Link
              to="/careers/jobs"
              className="text-xs font-semibold text-[#008DDA] hover:text-[#0077B6] flex items-center gap-1"
            >
              <span>Explore all {mockJobs.length} openings</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="space-y-4">
            {mockJobs.slice(0, 3).map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs transition-fin flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded-[4px] border border-[#008DDA]/30 text-[#008DDA] bg-[#008DDA]/10">
                      {job.department}
                    </span>
                    <span className="text-xs text-[#64748B] font-mono">{job.type}</span>
                  </div>
                  <h4 className="text-[18px] font-bold text-[#0F2C59] mt-2 tracking-tight">
                    {job.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-[#64748B] mt-1 font-mono">
                    <MapPin className="h-3.5 w-3.5 text-[#008DDA]" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <Link
                  to={`/careers/jobs/${job.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-[4px] bg-[#008DDA] text-white hover:bg-[#0077B6] text-xs font-semibold shrink-0 transition-colors"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                  <ArrowRight className="h-3.5 w-3.5" />
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
