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
} from 'lucide-react'

export const OptimaxPage: React.FC = () => {
  const modules = [
    { name: 'Commerce & Omnichannel', icon: PackageCheck, desc: 'Centralized product catalogue, retail POS synchronization, and automated order routing across physical stores and web channels.' },
    { name: 'Financial Ledgers & Tax', icon: DollarSign, desc: 'Automated double-entry general ledgers, multi-currency accounting, FIRS tax compliance, and automated bank feeds reconciliation.' },
    { name: 'Human Resources & Payroll', icon: Users, desc: 'Comprehensive personnel records, biometric clock-in, automated salary deductions, pension computation, and leave tracking.' },
    { name: 'Multi-Warehouse Inventory', icon: Layers, desc: 'Real-time multi-location stock movements, low-stock threshold triggers, barcode batch tracking, and supplier replenishment.' },
    { name: 'Procurement & Purchasing', icon: Building2, desc: 'Purchase requisition approval hierarchies, vendor scoring, automated purchase order generation, and delivery matching.' },
    { name: 'Executive Analytics & BI', icon: BarChart2, desc: 'Consolidated profit-and-loss dashboards, inventory turnover velocity, departmental spend audits, and cashflow projections.' },
    { name: 'Predictive Demand AI', icon: Cpu, desc: 'Machine learning algorithms forecasting replenishment schedules based on seasonal sales spikes and supply transit lead times.' },
    { name: 'Role-Based Security Mesh', icon: ShieldCheck, desc: 'Granular permissions, tamper-proof activity logs, dual-authorization for large payments, and enterprise encryption.' },
  ]

  const outcomes = [
    'Reduced end-of-month financial reconciliation from 14 days to under 4 hours.',
    'Eliminated stock shrinkage across multi-depot distribution networks.',
    'Centralized visibility across executive leadership, finance, and warehouse managers in real time.',
    'Zero-loss offline point-of-sale ensuring uninterrupted retail billing during network outages.',
  ]

  return (
    <div className="w-full text-left bg-white text-[#0F172A]">
      <SEO
        title="Optimax Enterprise ERP Platform | Centrifuge Group"
        description="Optimax connects commerce, finance, HR, inventory, analytics, and business operations into one unified enterprise platform."
      />

      {/* Hero Header */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">ENTERPRISE RESOURCE PLANNING · VERSION 4</span>
            </div>
            <h1
              className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              Optimax ERP. Your business connected.
            </h1>
            <p className="text-[16px] text-[#94A3B8] leading-relaxed">
              An all-in-one, modular business management platform that unifies commerce, financial ledgers, inventory, human resources, and real-time business intelligence into a single source of truth.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[6px] bg-[#F27A22] text-[#0F172A] hover:bg-[#E06910] text-[14px] font-semibold transition-colors"
              >
                <span>Schedule Enterprise Walkthrough</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://www.optimaxsuites.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[6px] bg-transparent border border-white/20 text-white hover:border-white/40 text-[14px] font-medium transition-colors"
              >
                <span>Visit OptimaxSuites.com</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-[12px] border border-[#E2E8F0] space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#94A3B8] block">
              THE OPERATIONAL PROBLEM
            </span>
            <h3 className="text-[22px] font-bold text-[#0F172A] tracking-[-0.025em]">
              The Disconnected Enterprise Trap
            </h3>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Growing companies typically juggle 6 to 8 disparate tools: standalone spreadsheets for inventory, separate desktop accounting software, manual paper payroll files, and unconnected retail cash registers.
            </p>
            <p className="text-[13px] text-[#94A3B8] leading-relaxed pt-1">
              Result: Stock discrepancies, slow financial closes, blind executive decision-making, and high vulnerability to internal fraud.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[12px] border border-[#E2E8F0] space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#F27A22] block">
              THE CENTRIFUGE SOLUTION
            </span>
            <h3 className="text-[22px] font-bold text-[#0F172A] tracking-[-0.025em]">
              Unified Single Source of Truth
            </h3>
            <p className="text-[14px] text-[#334155] leading-relaxed">
              Optimax unifies transactional data across all branches and subsidiaries into a single real-time ledger. When a cashier completes a sale, the ledger balances immediately update, inventory decrements instantly, and audit logs record the event.
            </p>
            <div className="space-y-2 pt-2">
              {outcomes.map((o, i) => (
                <div key={i} className="flex items-start gap-2 text-[13px] text-[#475569]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#F27A22] shrink-0 mt-0.5" />
                  <span>{o}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">MODULAR ARCHITECTURE</span>
            </div>
            <h2
              className="font-bold text-[#0F172A] leading-[1.1] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
            >
              Engineered for multi-entity scale.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {modules.map((m) => {
              const Icon = m.icon
              return (
                <div
                  key={m.name}
                  className="bg-white p-6 rounded-[12px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200 flex flex-col group"
                >
                  <div className="h-10 w-10 rounded-[8px] bg-[#FFF7ED] border border-[#FDBA74]/30 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-[#F27A22]" />
                  </div>
                  <h4 className="text-[15px] font-bold text-[#0F172A] leading-snug mb-2">
                    {m.name}
                  </h4>
                  <p className="text-[13px] text-[#475569] leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default OptimaxPage
