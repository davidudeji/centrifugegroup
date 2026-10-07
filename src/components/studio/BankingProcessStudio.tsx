import React, { useState } from 'react'
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Gauge,
  GraduationCap,
  Layers,
  Play,
  RefreshCw,
  ShieldCheck,
  Target,
  TrendingUp,
} from 'lucide-react'
import { Button } from '../ui/Button'

type StepKey = 1 | 2 | 3 | 4 | 5

export const BankingProcessStudio: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<StepKey>(1)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const metrics = [
    {
      label: 'PROJECT HEALTH',
      value: '92%',
      note: 'Delivery confidence across active clusters',
      tone: 'emerald',
      icon: ShieldCheck,
    },
    {
      label: 'BUDGET DISCIPLINE',
      value: '94%',
      note: 'Variance kept within approved thresholds',
      tone: 'sky',
      icon: Gauge,
    },
    {
      label: 'TIMELINE ADHERENCE',
      value: '88%',
      note: 'Milestones on track across portfolio',
      tone: 'indigo',
      icon: Clock3,
    },
  ]

  const steps: Record<StepKey, { title: string; subtitle: string; specs: { label: string; value: string }[]; deliverable: string }> = {
    1: {
      title: 'Step 1: Project Initiation',
      subtitle: 'Define scope, stakeholders, governance, and success criteria',
      specs: [
        { label: 'Sponsor alignment', value: 'Business case and expected outcomes validated' },
        { label: 'Scope framing', value: 'Objectives, constraints, and assumptions documented' },
        { label: 'Governance model', value: 'Steering, reporting, and decision rights agreed' },
      ],
      deliverable: 'Approved project charter, scope statement, and stakeholder map.',
    },
    2: {
      title: 'Step 2: Planning & Organisation',
      subtitle: 'Build a realistic execution plan with cost, time, risk, and resource controls',
      specs: [
        { label: 'Schedule logic', value: 'Milestones phased with dependency tracking' },
        { label: 'Budget control', value: 'Cost baseline, contingency, and approvals set' },
        { label: 'Risk register', value: 'Threats, mitigations, and response owners assigned' },
      ],
      deliverable: 'Integrated plan covering quality, scope, budget, time, and communication.',
    },
    3: {
      title: 'Step 3: Implementation & Execution',
      subtitle: 'Deliver project outputs while maintaining accountability, quality, and progress visibility',
      specs: [
        { label: 'Team coordination', value: 'Workstreams sequenced for clarity and speed' },
        { label: 'Quality assurance', value: 'Deliverables reviewed against acceptance criteria' },
        { label: 'Change control', value: 'Scope adjustments governed and documented' },
      ],
      deliverable: 'Progressing deliverables with managed change and escalation paths.',
    },
    4: {
      title: 'Step 4: Monitoring & Controlling',
      subtitle: 'Track performance, correct deviation, and protect delivery outcomes',
      specs: [
        { label: 'Performance tracking', value: 'Schedule, cost, and risk dashboards reviewed live' },
        { label: 'Decision support', value: 'Escalation triggers and corrective actions logged' },
        { label: 'Stakeholder reporting', value: 'Progress updates aligned to governance cadence' },
      ],
      deliverable: 'Actionable performance insights and control reports for leadership.',
    },
    5: {
      title: 'Step 5: Completion & Closure',
      subtitle: 'Validate outcomes, transfer ownership, and embed learning for future delivery',
      specs: [
        { label: 'Acceptance review', value: 'Business outcomes and quality benchmarks confirmed' },
        { label: 'Knowledge transfer', value: 'Operational handover and capacity-building support in place' },
        { label: 'Closure reporting', value: 'Lessons learned captured and next-step actions recorded' },
      ],
      deliverable: 'Closed project, operational handover, and a repeatable improvement record.',
    },
  }

  const activeStep = steps[selectedStep]

  return (
    <div className="space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-[#64748B] mb-1">
            <span>Home</span>
            <span>&gt;</span>
            <span>Solutions</span>
            <span>&gt;</span>
            <span className="text-[#0F2C59] font-bold">Project Development & Management</span>
          </div>
          <h1 className="text-[26px] sm:text-[32px] font-bold text-[#0F2C59] tracking-tight">
            Delivery Framework & Project Governance Dashboard
          </h1>
          <p className="text-xs sm:text-[13px] text-[#64748B] mt-0.5">
            Built to help organizations plan, execute, monitor, and close complex projects with confidence.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setIsRefreshing(true)
              window.setTimeout(() => setIsRefreshing(false), 400)
            }}
            leftIcon={<RefreshCw className="h-3.5 w-3.5" />}
            isLoading={isRefreshing}
          >
            Refresh Dashboard
          </Button>

          <Button
            variant="primary"
            size="sm"
            leftIcon={<Play className="h-3.5 w-3.5 fill-current" />}
          >
            Start Review Cycle
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map(({ label, value, note, tone, icon: Icon }) => (
          <div key={label} className="rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] p-6 hover:border-[#CBD5E1]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">{label}</span>
              <div className={`h-8 w-8 rounded-[4px] flex items-center justify-center ${
                tone === 'emerald' ? 'bg-[#10B981]/10 text-[#10B981]' : tone === 'sky' ? 'bg-[#008DDA]/10 text-[#008DDA]' : 'bg-[#0F2C59]/10 text-[#0F2C59]'
              }`}>
                <Icon className="h-4.5 w-4.5" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline justify-between">
              <span className="text-[28px] font-bold text-[#0F2C59] tracking-tight">{value}</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-[4px] bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]">
                Live
              </span>
            </div>
            <div className="mt-3 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#64748B]">
              <span>{note}</span>
              <TrendingUp className="h-3.5 w-3.5 text-[#10B981]" />
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] overflow-hidden">
        <div className="p-5 border-b border-[#E2E8F0] flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#FFFFFF]">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-[4px] bg-[#008DDA] text-white flex items-center justify-center font-bold">
              <BriefcaseBusiness className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-[18px] font-bold text-[#0F2C59] tracking-tight">PROJECT DELIVERY LIFECYCLE</h2>
              <p className="text-xs text-[#64748B]">Select each stage to view critical controls, governance checkpoints, and expected outputs.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_1fr] gap-6 p-6">
          <div className="space-y-3">
            {[1,2,3,4,5].map((step) => {
              const isActive = selectedStep === step
              return (
                <button
                  key={step}
                  type="button"
                  onClick={() => setSelectedStep(step as StepKey)}
                  className={`w-full rounded-[6px] border p-4 text-left transition-colors ${
                    isActive ? 'border-[#008DDA] bg-[#008DDA]/5' : 'border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#CBD5E1]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`h-8 w-8 rounded-[4px] flex items-center justify-center text-xs font-bold ${
                        isActive ? 'bg-[#008DDA] text-white' : 'bg-[#E2E8F0] text-[#475569]'
                      }`}>
                        {step}
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-[#0F2C59]">{steps[step as StepKey].title}</div>
                        <div className="text-[11px] text-[#64748B]">{steps[step as StepKey].subtitle}</div>
                      </div>
                    </div>
                    <ArrowRight className={`h-4 w-4 ${isActive ? 'text-[#008DDA]' : 'text-[#94A3B8]'}`} />
                  </div>
                </button>
              )
            })}
          </div>

          <div className="rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC] p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-[4px] bg-[#10B981]/10 text-[#10B981] flex items-center justify-center">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">Current stage</span>
            </div>
            <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight">{activeStep.title}</h3>
            <p className="mt-2 text-[13px] text-[#475569] leading-relaxed">{activeStep.subtitle}</p>

            <div className="mt-5 space-y-3">
              {activeStep.specs.map((spec) => (
                <div key={spec.label} className="rounded-[4px] border border-[#E2E8F0] bg-[#FFFFFF] p-3">
                  <span className="block text-[10px] uppercase tracking-wider font-bold text-[#64748B]">{spec.label}</span>
                  <span className="mt-1 block text-[13px] text-[#1A1A1A] font-medium">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[6px] border border-[#BAE6FD] bg-[#E0F2FE] p-3">
              <div className="flex items-center gap-2 mb-1">
                <ClipboardCheck className="h-4 w-4 text-[#0369A1]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0369A1]">Expected output</span>
              </div>
              <p className="text-[13px] text-[#0F172A] leading-relaxed">{activeStep.deliverable}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] p-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-5 w-5 text-[#008DDA]" />
            <h3 className="text-[18px] font-bold text-[#0F2C59] tracking-tight">Project priorities</h3>
          </div>
          <ul className="space-y-3 text-[13px] text-[#475569]">
            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#10B981] mt-0.5" /><span>Plan and organise workstreams before execution begins.</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#10B981] mt-0.5" /><span>Maintain budget, timeline, quality, and risk controls throughout the project lifecycle.</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#10B981] mt-0.5" /><span>Embed project management capability in the client team through coaching and mentoring.</span></li>
          </ul>
        </div>

        <div className="rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] p-6">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="h-5 w-5 text-[#008DDA]" />
            <h3 className="text-[18px] font-bold text-[#0F2C59] tracking-tight">Training & advisory support</h3>
          </div>
          <ul className="space-y-3 text-[13px] text-[#475569]">
            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#10B981] mt-0.5" /><span>Project management training for teams, managers, and executives.</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#10B981] mt-0.5" /><span>Advisory support for project planning, execution governance, and delivery oversight.</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#10B981] mt-0.5" /><span>Tools, frameworks, and practical methods to manage complex initiatives effectively.</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BankingProcessStudio
