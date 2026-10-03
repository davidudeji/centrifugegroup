import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockJobs } from '../../data/mockData'
import { ArrowRight, MapPin, Briefcase, Award, Heart } from 'lucide-react'

export const CareersPage: React.FC = () => {
  return (
    <div className="w-full text-left bg-white text-[#0F172A]">
      <SEO
        title="Careers & Engineering Culture | Centrifuge Group"
        description="Build technology that matters. Join Centrifuge to engineer mission-critical enterprise systems and national health registries."
      />

      {/* Hero Header */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">JOIN OUR ENGINEERING TEAM</span>
            </div>
            <h1
              className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              Build technology that matters.
            </h1>
            <p className="text-[16px] text-[#94A3B8] leading-relaxed max-w-2xl">
              We design software and platforms that run hospital wards, keep cargo moving, and govern national health workforces. Join a disciplined engineering team that prizes reliability and real-world impact.
            </p>
            <div className="pt-2">
              <Link
                to="/careers/jobs"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[6px] bg-[#F27A22] text-[#0F172A] hover:bg-[#E06910] text-[14px] font-semibold transition-colors"
              >
                <span>View All Open Positions ({mockJobs.length})</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Principles */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">ENGINEERING VALUES</span>
            </div>
            <h2
              className="font-bold text-[#0F172A] leading-[1.1] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
            >
              Why engineers thrive at Centrifuge.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white p-7 rounded-[12px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200">
              <div className="h-10 w-10 rounded-[8px] bg-[#FFF7ED] border border-[#FDBA74]/30 flex items-center justify-center mb-4">
                <Award className="h-5 w-5 text-[#F27A22]" />
              </div>
              <h3 className="text-[17px] font-bold text-[#0F172A] leading-snug mb-2">
                High-Stakes Operational Systems
              </h3>
              <p className="text-[13px] text-[#475569] leading-relaxed">
                Your code won't sit on a forgotten internal prototype. It directly verifies medical licenses, routes freight fleets, and powers retail businesses.
              </p>
            </div>

            <div className="bg-white p-7 rounded-[12px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200">
              <div className="h-10 w-10 rounded-[8px] bg-[#FFF7ED] border border-[#FDBA74]/30 flex items-center justify-center mb-4">
                <Briefcase className="h-5 w-5 text-[#F27A22]" />
              </div>
              <h3 className="text-[17px] font-bold text-[#0F172A] leading-snug mb-2">
                Disciplined Architecture
              </h3>
              <p className="text-[13px] text-[#475569] leading-relaxed">
                We value clean code, strong typing with TypeScript, offline-first reliability, and strict peer code reviews over reckless shortcuts.
              </p>
            </div>

            <div className="bg-white p-7 rounded-[12px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200">
              <div className="h-10 w-10 rounded-[8px] bg-[#FFF7ED] border border-[#FDBA74]/30 flex items-center justify-center mb-4">
                <Heart className="h-5 w-5 text-[#F27A22]" />
              </div>
              <h3 className="text-[17px] font-bold text-[#0F172A] leading-snug mb-2">
                Real Career Support
              </h3>
              <p className="text-[13px] text-[#475569] leading-relaxed">
                Comprehensive health coverage, flexible hybrid setups, modern workstation provisioning, and dedicated continuous learning budgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles Preview */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-[#E2E8F0] gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
                <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">CURRENT VACANCIES</span>
              </div>
              <h3
                className="font-bold text-[#0F172A] leading-[1.1] tracking-[-0.025em]"
                style={{ fontSize: 'clamp(1.375rem, 2.5vw, 1.75rem)' }}
              >
                Featured Engineering Roles
              </h3>
            </div>
            <Link
              to="/careers/jobs"
              className="text-[13px] font-semibold text-[#F27A22] hover:text-[#E06910] flex items-center gap-1 transition-colors"
            >
              <span>Explore all {mockJobs.length} openings</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="space-y-4">
            {mockJobs.slice(0, 3).map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-[12px] bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] uppercase font-semibold tracking-[1px] px-2.5 py-0.5 rounded-[4px] border border-[#FDBA74]/30 text-[#F27A22] bg-[#FFF7ED]">
                      {job.department}
                    </span>
                    <span className="text-[11px] text-[#94A3B8] font-medium">{job.type}</span>
                  </div>
                  <h4 className="text-[17px] font-bold text-[#0F172A] leading-snug">
                    {job.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[12px] text-[#94A3B8] mt-1">
                    <MapPin className="h-3 w-3 text-[#F27A22]" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <Link
                  to={`/careers/jobs/${job.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-[6px] bg-[#F27A22] text-[#0F172A] hover:bg-[#E06910] text-[13px] font-semibold shrink-0 transition-colors"
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
