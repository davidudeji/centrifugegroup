import React from 'react'
import { SEO } from '../../components/ui/SEO'
import { BankingProcessStudio } from '../../components/studio/BankingProcessStudio'
import { BriefcaseBusiness, Gauge, GraduationCap } from 'lucide-react'

export const BankingFrameworkPage: React.FC = () => {
  return (
    <div className="dark-page min-h-screen pt-28 pb-14">
      <SEO
        title="Project Development & Management | Centrifuge Group"
        description="Project planning, implementation, monitoring, project control, completion, and training services for successful delivery."
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Hero Banner */}
        <div className="dark-section-hero rounded-[12px] p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-4">
            <h1 className="text-[32px] sm:text-[44px] font-bold tracking-tight text-[#F0F4FF] leading-tight">
              Strategic Project Delivery for Complex Business Priorities
            </h1>
            <p className="text-[15px] sm:text-[16px] text-[#8BA4C8] leading-relaxed">
              Centrifuge Group helps organizations plan, organize, implement, monitor, and close projects with clarity, discipline, and measurable outcomes. We support teams to deliver projects within budget and timelines while strengthening project management capability across the organization.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs text-[#8BA4C8]">
            <span className="flex items-center gap-1.5">
              <BriefcaseBusiness className="h-4 w-4 text-[#10B981]" />
              <span>Project planning & organization</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Gauge className="h-4 w-4 text-[#60ABFF]" />
              <span>Monitoring & controlling</span>
            </span>
            <span className="flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4 text-[#10B981]" />
              <span>Project management training</span>
            </span>
          </div>
        </div>

        <BankingProcessStudio />
      </div>
    </div>
  )
}

export default BankingFrameworkPage

