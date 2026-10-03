import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  PackageCheck,
  Users,
  BarChart2,
  Cpu,
  ShoppingBag,
  ClipboardList,
} from 'lucide-react'

const modules = [
  {
    id: 'commerce',
    label: 'Commerce',
    icon: ShoppingBag,
    desc: 'Omnichannel B2B & retail POS with real-time inventory sync across all channels.',
    highlight: 'Multi-channel order management, returns, fulfilment, and discount engine.',
  },
  {
    id: 'finance',
    label: 'Finance',
    icon: DollarSign,
    desc: 'Automated general ledger, tax computation, bank reconciliation, and financial reporting.',
    highlight: 'Multi-currency, multi-entity, automated VAT & WHT, audit trails.',
  },
  {
    id: 'hr',
    label: 'HR & Payroll',
    icon: Users,
    desc: 'Workforce records, payroll processing, timesheets, leave management, and benefits.',
    highlight: 'PAYE-compliant payroll, pension integration, employee self-service.',
  },
  {
    id: 'inventory',
    label: 'Inventory',
    icon: PackageCheck,
    desc: 'Multi-warehouse stock management, barcode scanning, low-stock alerts, and transfers.',
    highlight: 'FIFO/LIFO costing, batch tracking, reorder points, stocktake.',
  },
  {
    id: 'sales',
    label: 'Sales & CRM',
    icon: TrendingUp,
    desc: 'Lead pipeline, quotation, customer relationship management, and sales performance.',
    highlight: 'Pipeline tracking, customer history, pricing rules, commissions.',
  },
  {
    id: 'procurement',
    label: 'Procurement',
    icon: ClipboardList,
    desc: 'Purchase requests, supplier management, goods receipt, and payment scheduling.',
    highlight: 'Approval workflows, LPO generation, 3-way matching, supplier ratings.',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart2,
    desc: 'Real-time KPI boards, executive dashboards, financial summaries, and trend analysis.',
    highlight: 'Custom reports, scheduled delivery, drill-down, data export.',
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    icon: Cpu,
    desc: 'Intelligent automation of repetitive processes, predictive inventory, and smart alerts.',
    highlight: 'Demand forecasting, anomaly detection, workflow automation.',
  },
]

export const OptimaxShowcaseSection: React.FC = () => {
  const [activeModule, setActiveModule] = useState('finance')
  const active = modules.find((m) => m.id === activeModule)!

  return (
    <section className="section-py bg-[#0B1F33] text-white overflow-hidden relative">
      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 70% 50% at 50% 110%, rgba(22,199,217,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="badge-eyebrow-dark mb-4">Optimax Connected Platform</div>
            <h2 className="text-h2 text-white mb-4">
              Your business.{' '}
              <span className="text-[#16C7D9]">Connected.</span>
            </h2>
            <p className="text-body-lg text-[#94A3B8]">
              Optimax brings commerce, finance, HR, inventory, analytics, and
              business operations into one unified, enterprise-grade platform.
            </p>
          </div>
          <Link
            to="/solutions/optimax"
            className="btn-accent shrink-0 self-start lg:self-auto"
            id="optimax-explore-cta"
          >
            Explore Optimax
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Module selector */}
          <div className="lg:col-span-4 flex flex-col gap-1.5">
            {modules.map((m) => {
              const Icon = m.icon
              const isActive = m.id === activeModule
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveModule(m.id)}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-[10px] transition-all duration-150 ${
                    isActive
                      ? 'bg-[#16C7D9]/15 border border-[#16C7D9]/30 text-white'
                      : 'border border-transparent text-[#64748B] hover:text-[#94A3B8] hover:bg-white/5'
                  }`}
                  aria-pressed={isActive}
                >
                  <div
                    className={`h-8 w-8 rounded-[8px] flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? 'bg-[#16C7D9]' : 'bg-white/[0.07]'
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${isActive ? 'text-[#0B1F33]' : 'text-[#64748B]'}`} />
                  </div>
                  <span className={`text-[14px] font-medium ${isActive ? 'font-semibold' : ''}`}>
                    {m.label}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Module detail panel */}
          <div className="lg:col-span-8">
            <div className="h-full rounded-[16px] border border-white/[0.08] bg-white/[0.04] p-8 flex flex-col justify-between min-h-[380px]">
              <div>
                {/* Module header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-[12px] bg-[#16C7D9] flex items-center justify-center">
                    {React.createElement(
                      modules.find((m) => m.id === activeModule)!.icon,
                      { className: 'h-6 w-6 text-[#0B1F33]' }
                    )}
                  </div>
                  <div>
                    <h3 className="text-[22px] font-heading font-700 text-white">
                      {active.label}
                    </h3>
                    <p className="text-[13px] text-[#64748B]">Optimax module</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[16px] text-[#94A3B8] leading-relaxed mb-6">
                  {active.desc}
                </p>

                {/* Highlight pill */}
                <div className="inline-flex items-start gap-3 p-4 rounded-[10px] bg-white/[0.05] border border-white/[0.07]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#16C7D9] mt-1.5 shrink-0" />
                  <p className="text-[14px] text-[#94A3B8] leading-relaxed">
                    {active.highlight}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.07] flex items-center justify-between">
                <Link
                  to="/contact"
                  className="text-[14px] font-medium text-[#16C7D9] hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  Request a walkthrough
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/solutions/optimax"
                  className="text-[13px] text-[#64748B] hover:text-white transition-colors"
                >
                  All modules →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OptimaxShowcaseSection
