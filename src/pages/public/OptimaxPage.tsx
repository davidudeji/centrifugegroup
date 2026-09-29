import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { Button } from '../../components/ui/Button'
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
  TrendingUp,
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
    'Zero-loss offline point-of-sale ensuring uninterrupted retail billing during network outages.'
  ]

  return (
    <div className="w-full text-left">
      <SEO
        title="Optimax Enterprise ERP Platform | Centrifuge Group"
        description="Optimax connects commerce, finance, HR, inventory, analytics, and business operations into one unified enterprise platform."
      />

      {/* Hero */}
      <section className="bg-[#071521] text-white py-16 sm:py-24 border-b border-[#172333] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#16C7D9]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-[6px] bg-[#16C7D9]/15 border border-[#16C7D9]/30 text-xs font-mono font-bold text-[#67E8F9] inline-block">
              ENTERPRISE RESOURCE PLANNING · VERSION 4
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-heading tracking-tight">
              Optimax. <span className="text-[#16C7D9]">Your business. Connected.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              An all-in-one, modular business management platform that unifies commerce, accounting, inventory, human resources, and real-time business intelligence into a single source of truth.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link to="/contact">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Schedule Enterprise Walkthrough
                </Button>
              </Link>
              <Link to="/projects/optimax-enterprise-erp">
                <Button variant="outline" size="lg" className="bg-transparent text-white border-[#334155] hover:bg-white/10">
                  View Project Architecture
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem & The Solution */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="p-8 rounded-[16px] bg-[#FEF2F2] border border-[#FEE2E2] space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#DC2626]">
              The Operational Problem
            </span>
            <h3 className="text-2xl font-bold text-[#991B1B] font-heading">
              The Disconnected Enterprise Trap
            </h3>
            <p className="text-sm text-[#7F1D1D] leading-relaxed">
              Growing companies typically juggle 6 to 8 disparate tools: standalone spreadsheets for inventory, separate desktop accounting software, manual paper payroll files, and unconnected retail cash registers.
            </p>
            <p className="text-xs text-[#991B1B]/80 leading-relaxed pt-2">
              Result: Stock discrepancies, slow financial closes, blind executive decision-making, and high vulnerability to internal fraud.
            </p>
          </div>

          <div className="p-8 rounded-[16px] bg-[#F0FDF4] border border-[#DCFCE7] space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#16A34A]">
              The Centrifuge Solution
            </span>
            <h3 className="text-2xl font-bold text-[#14532D] font-heading">
              Unified Single Source of Truth
            </h3>
            <p className="text-sm text-[#166534] leading-relaxed">
              Optimax replaces disparate point solutions with a cohesive web-native operating system. When a product is sold at a branch, stock is decremented immediately, accounting ledgers reflect the revenue, and replenishment signals fire automatically.
            </p>
            <p className="text-xs text-[#166534]/80 leading-relaxed pt-2">
              Result: 100% operational transparency, instant auditability, and radical efficiency gains across every department.
            </p>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-[#16C7D9]">
              Modular Architecture
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] font-heading mt-2">
              Everything required to run operations.
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Activate the modules you need today and seamlessly plug in additional capabilities as your footprint expands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((m) => {
              const Icon = m.icon
              return (
                <div
                  key={m.name}
                  className="bg-white p-6 rounded-[14px] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="h-9 w-9 rounded-[6px] bg-[#0B1F33]/5 text-[#0B1F33] flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5 text-[#16C7D9]" />
                    </div>
                    <h4 className="text-base font-bold text-[#0B1F33] font-heading">
                      {m.name}
                    </h4>
                    <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="text-2xl font-bold text-[#0B1F33] font-heading text-center">
            Proven Operational Outcomes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {outcomes.map((out, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-[#F8FAFC] rounded-[10px] border border-[#E2E8F0]">
                <CheckCircle2 className="h-5 w-5 text-[#16A34A] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#1E293B] font-medium leading-relaxed">
                  {out}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center pt-4">
            <Link to="/contact">
              <Button variant="dark" size="lg">
                Request Deployment Proposal
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
export default OptimaxPage
