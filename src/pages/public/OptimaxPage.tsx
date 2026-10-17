import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import {
  ArrowRight,
  CheckCircle2,
  DollarSign,
  PackageCheck,
  Users,
  Layers,
  BarChart2,
  Cpu,
  ShieldCheck,
  Building2,
  ArrowUpRight,
  TrendingUp,
} from 'lucide-react'

const modules = [
  { name: 'Commerce & Omnichannel', icon: PackageCheck, desc: 'Centralised product catalogue, retail POS synchronisation, and automated order routing across physical stores and web channels.' },
  { name: 'Financial Ledgers & Tax', icon: DollarSign, desc: 'Automated double-entry general ledgers, multi-currency accounting, FIRS tax compliance, and automated bank feeds reconciliation.' },
  { name: 'Human Resources & Payroll', icon: Users, desc: 'Comprehensive personnel records, biometric clock-in, automated salary deductions, pension computation, and leave tracking.' },
  { name: 'Multi-Warehouse Inventory', icon: Layers, desc: 'Real-time multi-location stock movements, low-stock threshold triggers, barcode batch tracking, and supplier replenishment.' },
  { name: 'Procurement & Purchasing', icon: Building2, desc: 'Purchase requisition approval hierarchies, vendor scoring, automated purchase order generation, and delivery matching.' },
  { name: 'Sales & CRM', icon: TrendingUp, desc: 'Lead pipeline, customer relationship management, quotation, and sales performance dashboards.' },
  { name: 'Executive Analytics & BI', icon: BarChart2, desc: 'Consolidated P&L dashboards, inventory turnover velocity, departmental spend audits, and cashflow projections.' },
  { name: 'AI & Demand Forecasting', icon: Cpu, desc: 'Machine learning algorithms forecasting replenishment schedules based on seasonal sales spikes and supply transit lead times.' },
  { name: 'Security & Audit Mesh', icon: ShieldCheck, desc: 'Granular permissions, tamper-proof activity logs, dual-authorisation for large payments, and enterprise encryption.' },
]

const outcomes = [
  'Reduced end-of-month financial reconciliation from 14 days to under 4 hours.',
  'Eliminated stock shrinkage across multi-depot distribution networks.',
  'Centralised visibility across executive leadership, finance, and warehouse managers in real time.',
  'Zero-loss offline point-of-sale ensuring uninterrupted retail billing during network outages.',
]

export const OptimaxPage: React.FC = () => {
  return (
    <div className="dark-page">
      <SEO
        title="Optimax Enterprise ERP Platform | Centrifuge Group"
        description="Optimax connects commerce, finance, HR, inventory, analytics, and business operations into one unified enterprise platform."
      />

      {/* â”€â”€â”€ Hero Header â”€â”€â”€ */}
      <section className="dark-section-hero pt-32 pb-20 sm:pt-36 sm:pb-24">
<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 dark-badge">
              <span className="h-2 w-2 rounded-full bg-[#E87916] ring-4 ring-[#E87916]/20" aria-hidden="true" />
              <span>Optimax Suite Enterprise Platform</span>
            </div>
            <h1 className="text-[32px] sm:text-[44px] font-bold text-[#F0F4FF] tracking-tight leading-[1.2]">
              Optimax ERP: Your Entire Enterprise Connected
            </h1>
            <p className="text-[16px] text-[#8BA4C8] leading-relaxed max-w-2xl">
              An all-in-one modular business management platform that unifies commerce, general ledgers, multi-depot inventory, human resources, and real-time business intelligence into a single institutional source of truth.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] bg-[#E87916] text-white shadow-[0_10px_24px_rgba(232,121,22,0.28)] hover:bg-[#D0690E] hover:shadow-[0_14px_30px_rgba(232,121,22,0.36)] hover:-translate-y-0.5 text-sm font-semibold transition-all duration-200"
              >
                <span>Schedule Enterprise Walkthrough</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://www.optimaxsuites.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] bg-white border border-white/20 text-[#F0F4FF] hover:border-[#0B1F33]/40 hover:bg-white/[0.08] hover:-translate-y-0.5 text-sm font-semibold transition-all duration-200"
              >
                <span>Visit OptimaxSuites.com</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Operational Problem vs Institutional Solution â”€â”€â”€ */}
      <section className="dark-section-b py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-[8px]  space-y-3 shadow-2xs">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#EF4444] block">
              THE OPERATIONAL PROBLEM
            </span>
            <h3 className="text-[22px] font-bold text-[#F0F4FF] tracking-tight">
              The Disconnected Enterprise Trap
            </h3>
            <p className="text-[14px] text-[#8BA4C8] leading-relaxed">
              Growing companies typically juggle 6 to 8 disparate tools: standalone spreadsheets for inventory, separate desktop accounting software, manual paper payroll files, and unconnected retail cash registers.
            </p>
            <p className="text-[13px] text-[#8BA4C8] leading-relaxed pt-2 border-t border-white/[0.07]">
              <strong className="text-[#F0F4FF]">Operational consequence:</strong> Chronic inventory shrinkage, month-end ledger discrepancies, blind executive decision-making, and high vulnerability to internal leakage.
            </p>
          </div>

          <div className="p-8 rounded-[8px]  space-y-3 shadow-2xs">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#10B981] block">
              THE CENTRIFUGE SOLUTION
            </span>
            <h3 className="text-[22px] font-bold text-[#F0F4FF] tracking-tight">
              Unified Ledger & Real-Time Telemetry
            </h3>
            <p className="text-[14px] text-[#8BA4C8] leading-relaxed">
              Optimax unifies all commercial, financial, and operational events into a transactional double-entry core. Every sale automatically decrements warehouse stock, posts ledger entries, and updates executive P&L dashboards instantly.
            </p>
            <p className="text-[13px] text-[#8BA4C8] leading-relaxed pt-2 border-t border-white/[0.07]">
              <strong className="text-[#F0F4FF]">Institutional outcome:</strong> Zero reconciliation delays, unified corporate auditability, and immediate visibility across all branches and subsidiaries.
            </p>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ 8 Core Modules Grid (UI/UX Spec Â§3.3 Data Card Module) â”€â”€â”€ */}
      <section className="dark-section-a py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl text-left">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#60ABFF]">
              MODULAR ARCHITECTURE
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#F0F4FF] tracking-tight mt-2">
              Eight Turnkey Enterprise Capabilities
            </h2>
            <p className="text-[14px] text-[#8BA4C8] mt-2">
              Deploy individually as specialized point solutions or connected as a full corporate enterprise stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((m) => {
              const Icon = m.icon
              return (
                <div
                  key={m.name}
                  className="dark-card p-6"
                >
                  <div>
                    <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#F0F4FF] flex items-center justify-center mb-4 group-hover:bg-[rgba(7,86,165,0.5)] transition-colors duration-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-[16px] font-bold text-[#F0F4FF] tracking-tight">
                      {m.name}
                    </h3>
                    <p className="text-[13px] text-[#8BA4C8] leading-relaxed pt-1">
                      {m.desc}
                    </p>
                  </div>
                  <h4 className="text-[16px] font-semibold text-[#F0F4FF] mb-2">{m.name}</h4>
                  <p className="text-[13px] text-[#8BA4C8] leading-relaxed">{m.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Proven Deployment Outcomes â”€â”€â”€ */}
      <section className="dark-section-b py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-[8px]  shadow-2xs">
            <div className="max-w-3xl mb-8">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#60ABFF]">
                MEASURABLE ROI
              </span>
              <h2 className="text-[24px] sm:text-[28px] font-bold text-[#F0F4FF] tracking-tight mt-1">
                Verified Operational Outcomes Across Live Deployments
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {outcomes.map((out, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-[4px] bg-white/[0.03] border border-white/[0.09]">
                  <CheckCircle2 className="h-5 w-5 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="text-[13.5px] text-[#F0F4FF] font-medium leading-relaxed">{out}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-[#8BA4C8]">
                Optimax instances support continuous offline billing with automatic conflict-free delta sync.
              </span>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#60ABFF] hover:text-[#F28C28]"
              >
                <span>Request customized proposal</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default OptimaxPage



