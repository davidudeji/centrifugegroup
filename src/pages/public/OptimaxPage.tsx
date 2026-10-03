import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { PageHero } from '../../components/ui/PageHero'
import {
  ArrowRight, ArrowUpRight,
  CheckCircle2, DollarSign, PackageCheck, Users,
  Layers, BarChart2, Cpu, ShieldCheck, Building2, TrendingUp,
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
    <div className="w-full bg-[#F7F9FA]">
      <SEO
        title="Optimax Enterprise ERP Platform | Centrifuge Group"
        description="Optimax connects commerce, finance, HR, inventory, analytics, and business operations into one unified enterprise platform."
      />

      <PageHero
        eyebrow="Enterprise Resource Planning · Optimax"
        title={<>Optimax ERP. <span className="text-[#16C7D9]">Your business connected.</span></>}
        description="An all-in-one, modular business management platform that unifies commerce, financial ledgers, inventory, human resources, and real-time business intelligence into a single source of truth."
      >
        <div className="pt-6 flex flex-wrap items-center gap-4">
          <Link to="/contact" className="btn-accent" id="optimax-hero-cta">
            Schedule Enterprise Walkthrough <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://www.optimaxsuites.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white"
          >
            Visit OptimaxSuites.com <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </PageHero>

      {/* Problem vs Solution */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#F7F9FA] p-8 rounded-[16px] border border-[#E2E8F0] space-y-3">
            <span className="text-eyebrow text-[#94A3B8]">The Operational Problem</span>
            <h3 className="text-h3 text-[#0B1F33]">The Disconnected Enterprise Trap</h3>
            <p className="text-[15px] text-[#64748B] leading-relaxed">
              Growing companies typically juggle 6 to 8 disparate tools: standalone spreadsheets for inventory, separate desktop accounting software, manual paper payroll files, and unconnected retail cash registers.
            </p>
            <p className="text-[13px] text-[#94A3B8] leading-relaxed">
              Result: Stock discrepancies, slow financial closes, blind executive decision-making, and high vulnerability to internal fraud.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[16px] border border-[#16C7D9]/30 space-y-3 shadow-[0_0_0_1px_rgba(22,199,217,0.15)]">
            <span className="text-eyebrow text-[#16C7D9]">The Centrifuge Solution</span>
            <h3 className="text-h3 text-[#0B1F33]">Unified Single Source of Truth</h3>
            <p className="text-[15px] text-[#64748B] leading-relaxed">
              Optimax unifies transactional data across all branches and subsidiaries into a single real-time ledger. When a cashier completes a sale, the ledger balances immediately update, inventory decrements instantly, and audit logs record the event.
            </p>
            <div className="space-y-2.5 pt-2">
              {outcomes.map((o, i) => (
                <div key={i} className="flex items-start gap-2.5 text-[14px] text-[#64748B]">
                  <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>{o}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="section-py bg-[#F7F9FA] border-b border-[#E2E8F0]">
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <div className="badge-eyebrow mb-4">Modular Architecture</div>
            <h2 className="text-h2 text-[#0B1F33]">Engineered for multi-entity scale.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((m) => {
              const Icon = m.icon
              return (
                <div key={m.name} className="card-feature group">
                  <div className="h-11 w-11 rounded-[10px] bg-[#0B1F33] flex items-center justify-center mb-5 group-hover:bg-[#16C7D9] transition-colors duration-200">
                    <Icon className="h-5 w-5 text-[#16C7D9] group-hover:text-[#0B1F33] transition-colors" />
                  </div>
                  <h4 className="text-[16px] font-heading font-700 text-[#0B1F33] mb-2">{m.name}</h4>
                  <p className="text-[13px] text-[#64748B] leading-relaxed">{m.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1F33] py-20">
        <div className="section-container text-center">
          <h2 className="text-h2 text-white mb-4">Ready to connect your business?</h2>
          <p className="text-body-lg text-[#94A3B8] mb-8 max-w-xl mx-auto">
            Let our architects walk you through an Optimax deployment tailored to your operational context.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-accent" id="optimax-bottom-cta">
              Request Walkthrough <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="https://www.optimaxsuites.com/" target="_blank" rel="noopener noreferrer" className="btn-outline-white">
              Optimax Site <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OptimaxPage
