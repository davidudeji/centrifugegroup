import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  Cpu,
  Layers3,
  PackageCheck,
  Users,
} from 'lucide-react'

const modules = [
  { id: 'commerce', label: 'Commerce & POS', icon: PackageCheck, desc: 'Omnichannel B2B wholesale and retail operations from one system.' },
  { id: 'finance', label: 'Financial Ledgers', icon: CircleDollarSign, desc: 'Automated journals, ledgers, tax workflows, and reconciliation controls.' },
  { id: 'hr', label: 'HR & Payroll', icon: Users, desc: 'Workforce records, payroll processing, and compliance tracking.' },
  { id: 'inventory', label: 'Inventory Management', icon: Layers3, desc: 'Multi-location stock visibility, thresholds, and operational oversight.' },
  { id: 'analytics', label: 'Analytics & Reporting', icon: BarChart3, desc: 'KPI dashboards, board reporting, and live operational performance.' },
  { id: 'crm', label: 'CRM', icon: Cpu, desc: 'Customer relationships, pipeline visibility, and engagement workflows.' },
]

const pillars = [
  { label: 'Cloud-native platform', sub: 'Multi-region, always-on infrastructure' },
  { label: 'Fully customizable', sub: 'Modules adapt to your workflows' },
  { label: 'Multi-tenant ready', sub: 'Enterprise & SME configurations' },
]

export const OptimaxShowcaseSection: React.FC = () => {
  const optimaxDashboard = new URL('../../assets/optimax sales dashboard.PNG', import.meta.url).href
  const [activeModule, setActiveModule] = useState('finance')
  const activeModData = modules.find((m) => m.id === activeModule) || modules[1]

  return (
    <section className="relative border-b border-[#E2E8F0] bg-[#F7F9FB] py-20 lg:py-28">
      {/* Subtle dot pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(#0756A5 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">

        {/* Two-column editorial header */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[640px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#F28C28]" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F28C28]">
                Optimax ERP Platform
              </p>
            </div>
            <h2 className="text-[2.125rem] font-bold leading-[1.06] tracking-[-0.04em] text-[#0B1F33] sm:text-[2.75rem] lg:text-[3.25rem]">
              Everything your business needs.{' '}
              <span className="text-[#0756A5]">Finally in one place.</span>
            </h2>
            <p className="mt-4 max-w-[540px] text-[1rem] leading-[1.8] text-[#475569]">
              Optimax brings commerce, finance, HR, inventory, analytics, and business operations
              into one connected, enterprise-grade platform.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
            <Link
              to="/solutions/optimax"
              className="group inline-flex items-center gap-2 rounded-[8px] bg-[#E87916] px-6 py-3.5 text-[0.9375rem] font-semibold text-white shadow-[0_10px_24px_rgba(232,121,22,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D0690E]"
            >
              <span>Explore Optimax Platform</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-[8px] border border-[#CBD5E1] bg-white px-5 py-3.5 text-[0.9375rem] font-semibold text-[#0B1F33] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0B1F33]/30 hover:bg-slate-50"
            >
              Request Private Walkthrough
            </Link>
          </div>
        </div>

        {/* Module tabs */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {modules.map((m) => {
            const Icon = m.icon
            const isActive = activeModule === m.id
            return (
              <button
                key={m.id}
                onClick={() => setActiveModule(m.id)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[12.5px] font-semibold transition-all duration-200 ${
                  isActive
                    ? 'border-[#0756A5] bg-[#0756A5] text-white shadow-[0_4px_12px_rgba(7,86,165,0.25)]'
                    : 'border-[#E2E8F0] bg-white text-[#475569] hover:border-[#CBD5E1] hover:text-[#0B1F33]'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{m.label}</span>
              </button>
            )
          })}
        </div>

        {/* Module showcase panel */}
        <div className="mx-auto rounded-[20px] border border-[#E2E8F0] bg-white p-5 shadow-[0_20px_50px_rgba(15,44,89,0.07)] sm:p-7">

          {/* Active module header */}
          <div className="mb-5 flex flex-col gap-4 border-b border-[#E2E8F0] pb-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0756A5]">
                Active Module
              </p>
              <h3 className="mt-1.5 text-[1.625rem] font-bold tracking-[-0.035em] text-[#0F2C59]">
                {activeModData.label}
              </h3>
              <p className="mt-1.5 text-[0.9375rem] text-[#475569]">{activeModData.desc}</p>
            </div>
            <div className="flex shrink-0 items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F5F8FC] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#475569]">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#0756A5]" />
              Live operations
            </div>
          </div>

          {/* Pillar stats */}
          <div className="mb-5 grid gap-3 md:grid-cols-3">
            {pillars.map(({ label, sub }) => (
              <div key={label} className="rounded-[12px] border border-[#E8EDF3] bg-[#F8FAFC] p-4">
                <div className="text-[1.125rem] font-bold tracking-[-0.025em] text-[#0F2C59]">{label}</div>
                <div className="mt-1 text-[0.8125rem] text-[#64748B]">{sub}</div>
              </div>
            ))}
          </div>

          {/* Dashboard screenshot */}
          <div className="overflow-hidden rounded-[16px] border border-[#1e3a5f] bg-[#091d35] p-3 sm:p-4">
            <div className="rounded-[10px] border border-white/8 bg-[#0C2647] p-2 sm:p-3">
              <img
                src={optimaxDashboard}
                alt="Optimax ERP sales dashboard — real-time business intelligence"
                className="w-full rounded-[8px] border border-white/8 object-cover shadow-[0_20px_40px_rgba(0,0,0,0.22)]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OptimaxShowcaseSection
