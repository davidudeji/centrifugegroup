import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockJobs } from '../../data/mockData'
import { MapPin, ArrowRight, ArrowLeft } from 'lucide-react'

export const JobsPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All')
  const departments = ['All', 'Engineering', 'Healthcare Solutions', 'Product Design']

  const filtered =
    selectedDept === 'All'
      ? mockJobs
      : mockJobs.filter((j) => j.department === selectedDept)

  return (
    <div className="w-full text-left bg-[#F5F7FA] text-[#1A1A1A]">
      <SEO
        title="Open Positions | Centrifuge Careers"
        description="Explore open engineering, product design, and health informatics roles at Centrifuge Group."
      />

      {/* ─── Hero Header (UI/UX Spec §1.1 & §4.1) ─── */}
      <section className="bg-[#FFFFFF] text-[#1A1A1A] py-16 sm:py-20 border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <Link
            to="/careers"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#008DDA] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Careers Overview</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] border border-[#008DDA]/30 bg-[#008DDA]/10 text-xs font-semibold uppercase tracking-wider text-[#0077B6] mb-1">
            <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>ENGINEERING & PRODUCT VACANCIES</span>
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-bold text-[#0F2C59] tracking-tight leading-[1.2]">
            Job Openings at Centrifuge Group
          </h1>
          <p className="text-[16px] text-[#475569] max-w-2xl leading-relaxed">
            We are actively expanding our software engineering, health informatics, and product design teams across Abuja and remote African hubs.
          </p>
        </div>
      </section>

      {/* ─── Main Content (UI/UX Spec §3.3 Data Card Module) ─── */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Department Filter */}
          <div className="flex flex-wrap gap-2 pb-6 border-b border-[#E2E8F0]">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-[4px] transition-colors cursor-pointer ${selectedDept === dept
                    ? 'bg-[#008DDA] text-white shadow-xs'
                    : 'bg-[#FFFFFF] text-[#475569] border border-[#CBD5E1] hover:border-[#008DDA] hover:text-[#008DDA]'
                  }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          {/* Job Cards */}
          <div className="space-y-4">
            {filtered.map((job) => (
              <div
                key={job.id}
                className="bg-[#FFFFFF] p-6 sm:p-7 rounded-[8px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs transition-fin flex flex-col sm:flex-row sm:items-center justify-between gap-5 text-left"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded-[4px] border border-[#008DDA]/30 text-[#008DDA] bg-[#008DDA]/10">
                      {job.department}
                    </span>
                    <span className="text-xs font-mono text-[#64748B]">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-bold text-[#0F2C59] tracking-tight">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-mono">
                    <MapPin className="h-3.5 w-3.5 text-[#008DDA]" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <Link
                  to={`/careers/jobs/${job.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#008DDA] text-white hover:bg-[#0077B6] text-xs font-semibold shrink-0 transition-colors"
                >
                  <span>View Role & Apply</span>
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

export default JobsPage
