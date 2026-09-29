import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockJobs } from '../../data/mockData'
import { ArrowRight, MapPin, Briefcase, Award, Heart, CheckCircle2 } from 'lucide-react'
import { Button } from '../../components/ui/Button'

export const CareersPage: React.FC = () => {
  return (
    <div className="w-full text-left">
      <SEO
        title="Careers & Engineering Culture | Centrifuge Group"
        description="Build technology that matters. Join Centrifuge to engineer mission-critical enterprise systems and national health registries."
      />

      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-[#172333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-[#16C7D9] tracking-wider uppercase">
              JOIN OUR ENGINEERING TEAM
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              Build technology that matters.
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              We design software and platforms that run hospital wards, keep cargo moving, and govern national health workforces. Join a disciplined engineering team that prizes reliability and real-world impact.
            </p>
            <div className="pt-2">
              <Link to="/careers/jobs">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  View All Open Positions ({mockJobs.length})
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Principles */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-[#16C7D9]">
              Engineering Values
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] font-heading mt-1">
              Why engineers thrive at Centrifuge.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-[14px] bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
              <Award className="h-7 w-7 text-[#0B1F33]" />
              <h3 className="text-lg font-bold text-[#0B1F33] font-heading">
                High-Stakes Operational Systems
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Your code won't sit on a forgotten internal prototype. It directly verifies medical licenses, routes freight fleets, and powers retail businesses.
              </p>
            </div>

            <div className="p-7 rounded-[14px] bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
              <Briefcase className="h-7 w-7 text-[#16C7D9]" />
              <h3 className="text-lg font-bold text-[#0B1F33] font-heading">
                Disciplined Architecture
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                We value clean code, strong typing with TypeScript, offline-first reliability, and strict peer code reviews over reckless shortcuts.
              </p>
            </div>

            <div className="p-7 rounded-[14px] bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
              <Heart className="h-7 w-7 text-[#10B981]" />
              <h3 className="text-lg font-bold text-[#0B1F33] font-heading">
                Real Career Support
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Comprehensive health insurance, flexible hybrid setups, modern MacBook/workstation provisioning, and continuous learning budgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Open Roles */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#16C7D9]">
                Current Openings
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] font-heading mt-1">
                Open roles across engineering & health informatics.
              </h2>
            </div>
            <Link to="/careers/jobs" className="text-xs font-bold text-[#0B1F33] hover:text-[#16C7D9] flex items-center gap-1">
              <span>See all listings</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="space-y-4">
            {mockJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-[14px] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#0B1F33]/5 text-[#0B1F33] text-[10px] font-bold uppercase">
                      {job.department}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#10B981]/10 text-[#166534] text-[10px] font-semibold">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#0B1F33] font-heading">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-[#64748B]">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-[#94A3B8]" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <Link to={`/careers/jobs/${job.slug}`}>
                  <Button variant="secondary" size="sm">
                    View Role & Apply →
                  </Button>
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
