import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockJobs } from '../../data/mockData'
import { MapPin, ArrowRight, ArrowLeft } from 'lucide-react'
import { Button } from '../../components/ui/Button'

export const JobsPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All')
  const departments = ['All', 'Engineering', 'Healthcare Solutions', 'Product Design']

  const filtered = selectedDept === 'All'
    ? mockJobs
    : mockJobs.filter((j) => j.department === selectedDept)

  return (
    <div className="w-full text-left">
      <SEO
        title="Open Positions | Centrifuge Careers"
        description="Explore open engineering, product design, and health informatics roles at Centrifuge Group."
      />

      <section className="bg-[#0B1F33] text-white py-14 sm:py-20 border-b border-[#172333]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <Link
            to="/careers"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#94A3B8] hover:text-[#16C7D9] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Careers Overview</span>
          </Link>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Job Openings at Centrifuge
          </h1>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            We are actively expanding our software engineering, health informatics, and product design teams in Abuja and remote locations.
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Department Filter */}
          <div className="flex flex-wrap gap-2 pb-4 border-b border-[#E2E8F0]">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`text-xs px-3.5 py-1.5 rounded-[6px] font-medium transition-colors ${
                  selectedDept === dept
                    ? 'bg-[#0B1F33] text-white font-semibold'
                    : 'bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#F1F5F9]'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {filtered.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-[14px] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
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
                  <div className="flex items-center gap-2 text-xs text-[#64748B]">
                    <MapPin className="h-3.5 w-3.5 text-[#94A3B8]" />
                    <span>{job.location}</span>
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
export default JobsPage
