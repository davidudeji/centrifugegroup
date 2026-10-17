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
    <div className="dark-page">
      <SEO
        title="Open Positions | Centrifuge Careers"
        description="Explore open engineering, product design, and health informatics roles at Centrifuge Group."
      />

      {/* â”€â”€â”€ Hero Header (UI/UX Spec Â§1.1 & Â§4.1) â”€â”€â”€ */}
      <section className="dark-section-hero pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <Link
            to="/careers"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8BA4C8] hover:text-[#60ABFF] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Careers Overview</span>
          </Link>
          <h1 className="text-[32px] sm:text-[44px] font-bold text-[#F0F4FF] tracking-tight leading-[1.2]">
            Job Openings at Centrifuge Group
          </h1>
          <p className="text-[16px] text-[#8BA4C8] max-w-2xl leading-relaxed">
            We are actively expanding our software engineering, health informatics, and product design teams across Abuja and remote African hubs.
          </p>
        </div>
      </section>

      {/* â”€â”€â”€ Main Content (UI/UX Spec Â§3.3 Data Card Module) â”€â”€â”€ */}
      <section className="dark-section-b py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Department Filter */}
          <div className="flex flex-wrap gap-2 pb-6 border-b border-white/[0.07]">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-[4px] transition-colors cursor-pointer ${selectedDept === dept
                    ? 'bg-[#008DDA] text-white shadow-xs'
                    : 'bg-[#FFFFFF] text-[#8BA4C8] border border-white/20 hover:border-[#008DDA] hover:text-[#60ABFF]'
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
                className="bg-white/[0.04] p-6 sm:p-7 rounded-[8px] border border-white/[0.09] hover:border-white/20 hover:shadow-xs transition-fin flex flex-col sm:flex-row sm:items-center justify-between gap-5 text-left"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded-[4px] border border-[#008DDA]/30 text-[#60ABFF] bg-[#008DDA]/10">
                      {job.department}
                    </span>
                    <span className="text-xs font-mono text-[#8BA4C8]">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-bold text-[#F0F4FF] tracking-tight">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#8BA4C8] font-mono">
                    <MapPin className="h-3.5 w-3.5 text-[#60ABFF]" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <Link
                  to={`/careers/jobs/${job.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#0756A5] text-white hover:bg-[#073B70] text-xs font-semibold shrink-0 transition-colors"
                >
                  <span>View Role & Apply</span>
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



