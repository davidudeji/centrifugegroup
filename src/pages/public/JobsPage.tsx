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
    <div className="w-full text-left bg-white text-[#0F172A]">
      <SEO
        title="Open Positions | Centrifuge Careers"
        description="Explore open engineering, product design, and health informatics roles at Centrifuge Group."
      />

      {/* Hero Header */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto space-y-4">
          <Link
            to="/careers"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#94A3B8] hover:text-[#F27A22] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Careers Overview</span>
          </Link>
          <div className="flex items-center gap-2 pt-1">
            <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">ENGINEERING & PRODUCT VACANCIES</span>
          </div>
          <h1
            className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            Job Openings at Centrifuge
          </h1>
          <p className="text-[16px] text-[#94A3B8] max-w-2xl leading-relaxed">
            We are actively expanding our software engineering, health informatics, and product design teams in Abuja and remote locations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto space-y-8">
          {/* Department Filter */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 pb-6 border-b border-[#E2E8F0]">
            <span className="text-[11px] font-semibold uppercase tracking-[1px] text-[#94A3B8] shrink-0">
              Filter by Department:
            </span>
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`text-[11px] uppercase tracking-[1px] px-3.5 py-1.5 rounded-[6px] font-semibold transition-colors ${
                    selectedDept === dept
                      ? 'bg-[#F27A22] text-[#0F172A] shadow-sm'
                      : 'bg-white border border-[#E2E8F0] text-[#475569] hover:border-[#CBD5E1] hover:text-[#0F172A]'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {filtered.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-[12px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-semibold tracking-[1px] px-2.5 py-0.5 rounded-[4px] border border-[#FDBA74]/30 text-[#F27A22] bg-[#FFF7ED]">
                      {job.department}
                    </span>
                    <span className="text-[11px] font-medium text-[#94A3B8]">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-bold text-[#0F172A] leading-snug">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[12px] text-[#94A3B8]">
                    <MapPin className="h-3.5 w-3.5 text-[#F27A22]" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <Link
                  to={`/careers/jobs/${job.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-[6px] bg-[#F27A22] text-[#0F172A] hover:bg-[#E06910] text-[13px] font-semibold shrink-0 transition-colors"
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
