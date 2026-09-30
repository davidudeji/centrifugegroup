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
    <div className="w-full text-left bg-[#000000] text-[#faf9f6]">
      <SEO
        title="Optimax Enterprise ERP Platform | Centrifuge Group"
        description="Optimax connects commerce, finance, HR, inventory, analytics, and business operations into one unified enterprise platform."
      />

      {/* ─── Hero Header (Warp Obsidian #000000) ─── */}
      <section className="bg-[#000000] text-[#faf9f6] py-16 sm:py-24 border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#f0b66d]">
              <span>ENTERPRISE RESOURCE PLANNING · VERSION 4</span>
            </div>
            <h1 className="text-[36px] sm:text-[56px] font-normal text-[#faf9f6] tracking-[-2.24px] leading-[0.98]">
              Optimax ERP. Your business connected.
            </h1>
            <p className="text-[16px] text-[#868684] tracking-[-0.18px] leading-relaxed">
              An all-in-one, modular business management platform that unifies commerce, financial ledgers, inventory, human resources, and real-time business intelligence into a single source of truth.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-10 px-6 rounded-[33px] bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] text-[13px] font-semibold transition-colors"
              >
                <span>Schedule Enterprise Walkthrough</span>
                <ArrowRight className="h-3.5 w-3.5 ml-2" />
              </Link>
              <a
                href="https://www.optimaxsuites.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 px-6 rounded-[33px] bg-transparent border border-[#333333] text-[#b4b4b2] hover:text-[#faf9f6] text-[13px] transition-colors"
              >
                <span>Visit OptimaxSuites.com</span>
                <ArrowUpRight className="h-3.5 w-3.5 ml-1.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem vs Solution (Graphite #121212) ─── */}
      <section className="py-20 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#868684] block">
              THE OPERATIONAL PROBLEM
            </span>
            <h3 className="text-[22px] font-semibold text-[#faf9f6] tracking-[-0.29px]">
              The Disconnected Enterprise Trap
            </h3>
            <p className="text-[13.5px] text-[#868684] leading-relaxed">
              Growing companies typically juggle 6 to 8 disparate tools: standalone spreadsheets for inventory, separate desktop accounting software, manual paper payroll files, and unconnected retail cash registers.
            </p>
            <p className="text-[12.5px] text-[#868684]/80 leading-relaxed pt-2">
              Result: Stock discrepancies, slow financial closes, blind executive decision-making, and high vulnerability to internal fraud.
            </p>
          </div>

          <div className="p-8 rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#f0b66d] block">
              THE CENTRIFUGE SOLUTION
            </span>
            <h3 className="text-[22px] font-semibold text-[#faf9f6] tracking-[-0.29px]">
              Unified Single Source of Truth
            </h3>
            <p className="text-[13.5px] text-[#faf9f6] leading-relaxed">
              Optimax unifies transactional data across all branches and subsidiaries into a single real-time ledger. When a cashier completes a sale, the ledger balances immediately update, inventory decrements instantly, and audit logs record the event.
            </p>
            <div className="space-y-2 pt-2">
              {outcomes.map((o, i) => (
                <div key={i} className="flex items-start gap-2 text-[12.5px] text-[#b4b4b2]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#f0b66d] shrink-0 mt-0.5" />
                  <span>{o}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Modules Grid (Obsidian #000000) ─── */}
      <section className="py-20 bg-[#000000] border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#868684]">
              MODULAR ARCHITECTURE
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-normal text-[#faf9f6] tracking-[-0.64px] mt-1">
              Engineered for multi-entity scale.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((m) => {
              const Icon = m.icon
              return (
                <div
                  key={m.name}
                  className="bg-[#1e1e1d] p-7 rounded-[20px] border border-[#1e1e1d] hover:border-[#333333] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-10 w-10 rounded-[8px] bg-[#121212] border border-[#333333] flex items-center justify-center mb-4 group-hover:border-[#f0b66d] transition-colors">
                      <Icon className="h-5 w-5 text-[#f0b66d]" />
                    </div>
                    <h4 className="text-[17px] font-semibold text-[#faf9f6] tracking-[-0.18px]">
                      {m.name}
                    </h4>
                    <p className="text-[12.5px] text-[#868684] mt-2 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
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
