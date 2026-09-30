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
    <div className="w-full text-left bg-[#000000] text-[#faf9f6]">
      <SEO
        title="Open Positions | Centrifuge Careers"
        description="Explore open engineering, product design, and health informatics roles at Centrifuge Group."
      />

      {/* ─── Hero Header (Warp Obsidian #000000) ─── */}
      <section className="bg-[#000000] text-[#faf9f6] py-16 sm:py-24 border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            to="/careers"
            className="inline-flex items-center gap-1.5 text-[12px] font-mono text-[#868684] hover:text-[#f0b66d] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Careers Overview</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684] mb-1">
            <span>ENGINEERING & PRODUCT VACANCIES</span>
          </div>
          <h1 className="text-[36px] sm:text-[56px] font-normal text-[#faf9f6] tracking-[-2.24px] leading-[0.98]">
            Job Openings at Centrifuge
          </h1>
          <p className="text-[16px] text-[#868684] max-w-2xl leading-relaxed tracking-[-0.14px]">
            We are actively expanding our software engineering, health informatics, and product design teams in Abuja and remote locations.
          </p>
        </div>
      </section>

      {/* ─── Main Content (Warp Graphite #121212) ─── */}
      <section className="py-20 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Department Filter (50px pill radius) */}
          <div className="flex flex-wrap gap-2 pb-6 border-b border-[#1e1e1d]">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`text-[12px] px-4 py-1.5 rounded-[50px] font-medium transition-colors ${
                  selectedDept === dept
                    ? 'bg-[#121212] text-[#080808] font-semibold'
                    : 'bg-[#1e1e1d] text-[#868684] border border-[#333333] hover:text-[#faf9f6]'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Cards (Onyx #1e1e1d cards, 20px radius) */}
          <div className="space-y-4">
            {filtered.map((job) => (
              <div
                key={job.id}
                className="bg-[#1e1e1d] p-7 rounded-[20px] border border-[#1e1e1d] hover:border-[#333333] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-5"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-mono tracking-[1px] px-2.5 py-0.5 rounded-[50px] border border-[#333333] text-[#f0b66d] bg-[#121212]">
                      {job.department}
                    </span>
                    <span className="text-[11px] font-mono text-[#868684]">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#faf9f6] tracking-[-0.18px]">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[12px] text-[#868684] font-mono">
                    <MapPin className="h-3.5 w-3.5 text-[#f0b66d]" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <Link
                  to={`/careers/jobs/${job.slug}`}
                  className="inline-flex items-center justify-center h-10 px-5 rounded-[33px] bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] text-[12.5px] font-semibold shrink-0 transition-colors"
                >
                  <span>View Role & Apply</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
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
