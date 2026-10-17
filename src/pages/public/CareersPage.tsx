import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockJobs } from '../../data/mockData'
import { ArrowRight, MapPin, Briefcase, Award, Heart } from 'lucide-react'

export const CareersPage: React.FC = () => {
  return (
    <div className="dark-page">
      <SEO
        title="Careers & Engineering Culture | Centrifuge Group"
        description="Build technology that matters. Join Centrifuge to engineer mission-critical enterprise systems and national health registries."
      />

      {/* â”€â”€â”€ Hero Header (UI/UX Spec Â§1.1 & Â§4.1) â”€â”€â”€ */}
      <section className="dark-section-hero pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 dark-badge">
              <span className="h-2 w-2 rounded-full bg-[#E87916] ring-4 ring-[#E87916]/20" aria-hidden="true" />
              <span>Engineering Careers</span>
            </div>
            <h1 className="text-[32px] sm:text-[44px] font-bold text-[#F0F4FF] tracking-tight leading-[1.2]">
              Build Technology Engineered for Real Operational Scale
            </h1>
            <p className="text-[16px] text-[#8BA4C8] leading-relaxed max-w-2xl">
              We design software and platforms that run hospital wards, keep logistics cargo moving, and govern national healthcare workforces. Join a disciplined engineering team that prizes architectural integrity and real-world impact.
            </p>
            <div className="pt-2">
            <Link
                to="/careers/jobs"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[8px] bg-[#E87916] text-white shadow-[0_8px_20px_rgba(232,121,22,0.28)] hover:bg-[#D0690E] hover:-translate-y-0.5 text-sm font-semibold transition-all duration-200"
              >
                <span>View All Open Positions ({mockJobs.length})</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Culture & Principles (UI/UX Spec Â§3.3 Data Card Module) â”€â”€â”€ */}
      <section className="dark-section-b py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 text-left">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#0756A5]">
              ENGINEERING VALUES
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#F0F4FF] tracking-tight mt-1">
              Why Engineers Thrive at Centrifuge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="dark-card p-6">
              <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#F0F4FF] flex items-center justify-center">
                <Award className="h-5 w-5 text-[#60ABFF]" />
              </div>
              <h3 className="text-[18px] font-bold text-[#F0F4FF] tracking-tight pt-1">
                High-Stakes Operational Systems
              </h3>
              <p className="text-[14px] text-[#8BA4C8] leading-relaxed">
                Your code wonâ€™t sit on a forgotten internal prototype. It directly verifies medical licenses, routes freight fleets, and powers retail businesses.
              </p>
            </div>

            <div className="dark-card p-6">
              <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#F0F4FF] flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-[#60ABFF]" />
              </div>
              <h3 className="text-[18px] font-bold text-[#F0F4FF] tracking-tight pt-1">
                Disciplined Architecture
              </h3>
              <p className="text-[14px] text-[#8BA4C8] leading-relaxed">
                We value clean code, strong typing with TypeScript, offline-first reliability, and strict peer code reviews over reckless shortcuts.
              </p>
            </div>

            <div className="dark-card p-6">
              <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#F0F4FF] flex items-center justify-center">
                <Heart className="h-5 w-5 text-[#60ABFF]" />
              </div>
              <h3 className="text-[18px] font-bold text-[#F0F4FF] tracking-tight pt-1">
                Institutional Support
              </h3>
              <p className="text-[14px] text-[#8BA4C8] leading-relaxed">
                Comprehensive health coverage, flexible hybrid setups, modern workstation provisioning, and dedicated continuous learning budgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Open Roles Preview â”€â”€â”€ */}
      <section className="dark-section-a py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-6 border-b border-white/[0.07] gap-4 text-left">
            <div>
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#60ABFF]">
                CURRENT VACANCIES
              </span>
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[#F0F4FF] tracking-tight mt-1">
                Featured Engineering Roles
              </h3>
            </div>
            <Link
              to="/careers/jobs"
              className="text-xs font-semibold text-[#60ABFF] hover:text-[#F28C28] flex items-center gap-1"
            >
              <span>Explore all {mockJobs.length} openings</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="space-y-4">
            {mockJobs.slice(0, 3).map((job) => (
              <div
                key={job.id}
                className="dark-card p-6"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded-[4px] border border-[#008DDA]/30 text-[#60ABFF] bg-[#008DDA]/10">
                      {job.department}
                    </span>
                    <span className="text-xs text-[#8BA4C8] font-mono">{job.type}</span>
                  </div>
                  <h4 className="text-[18px] font-bold text-[#F0F4FF] mt-2 tracking-tight">
                    {job.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-[#8BA4C8] mt-1 font-mono">
                    <MapPin className="h-3.5 w-3.5 text-[#60ABFF]" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <Link
                  to={`/careers/jobs/${job.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-[4px] bg-[#0756A5] text-white hover:bg-[#073B70] text-xs font-semibold shrink-0 transition-colors"
                >
                  <span>Apply Now</span>
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



