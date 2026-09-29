import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  PackageCheck,
  Users,
  Shield,
  BarChart2,
  Cpu,
  Layers,
} from 'lucide-react'

export const OptimaxShowcaseSection: React.FC = () => {
  const [activeModule, setActiveModule] = useState('finance')

  const modules = [
    { id: 'commerce', label: 'Commerce', icon: PackageCheck, desc: 'Omnichannel B2B & retail POS sync.' },
    { id: 'finance', label: 'Finance', icon: DollarSign, desc: 'Automated ledgers, tax & reconciliation.' },
    { id: 'hr', label: 'HR & Payroll', icon: Users, desc: 'Workforce records, timesheets & benefits.' },
    { id: 'inventory', label: 'Inventory', icon: Layers, desc: 'Multi-warehouse stock alerts & barcode scans.' },
    { id: 'analytics', label: 'Analytics', icon: BarChart2, desc: 'Real-time financial & operational KPI boards.' },
    { id: 'ai', label: 'Predictive AI', icon: Cpu, desc: 'Demand forecasting & stock anomaly detection.' },
  ]

  return (
    <section className="bg-[#071521] text-white py-24 sm:py-32 relative overflow-hidden border-b border-[#172333]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#16C7D9]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#16C7D9]/15 border border-[#16C7D9]/30 text-xs font-mono text-[#67E8F9] mb-4">
            <span>OPTIMAX CONNECTED PLATFORM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
            Your business.{' '}
            <span className="text-[#16C7D9]">Connected.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Optimax brings commerce, finance, HR, inventory, analytics, and business operations into one unified, enterprise-grade platform.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Link to="/solutions/optimax">
              <Button variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Explore Optimax Platform
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="md" className="bg-transparent text-white border-[#334155] hover:bg-white/10">
                Request Private Walkthrough
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Product UI Screenshot / Framing (Linear style) */}
        <div className="rounded-[16px] border border-[#1E293B] bg-[#0B1F33] shadow-2xl p-2 sm:p-4 text-left">
          {/* Mock Window Chrome */}
          <div className="flex items-center justify-between pb-3 px-3 border-b border-[#1E293B] text-xs text-[#94A3B8]">
            <div className="flex items-center gap-2 font-mono">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#EF4444]/80" />
                <div className="h-3 w-3 rounded-full bg-[#F59E0B]/80" />
                <div className="h-3 w-3 rounded-full bg-[#10B981]/80" />
              </div>
              <span className="ml-3 hidden sm:inline text-[#CBD5E1]">
                optimax.internal / workspace / enterprise-hq
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-[11px]">
              <span className="px-2 py-0.5 rounded bg-[#10B981]/20 text-[#34D399]">
                STATUS: SYNCED
              </span>
              <span className="hidden md:inline text-[#64748B]">LATENCY 18ms</span>
            </div>
          </div>

          {/* Inner Dashboard Layout */}
          <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#071521]/80 rounded-[12px] mt-3">
            {/* Left Summary Pane */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-[10px] bg-[#0B1F33] border border-[#1E293B]">
                <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                  <span>Consolidated Monthly Turnover</span>
                  <TrendingUp className="h-4 w-4 text-[#16C7D9]" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-heading mt-2">
                  ₦148,290,000
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#10B981] mt-2">
                  <span>+18.4%</span>
                  <span className="text-[#64748B]">vs previous quarter</span>
                </div>
              </div>

              <div className="p-4 rounded-[10px] bg-[#0B1F33] border border-[#1E293B] space-y-3">
                <span className="text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider block">
                  Synchronized Ledgers
                </span>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-[#94A3B8]">
                    <span>Lagos Main Depot</span>
                    <span className="font-mono text-white">₦84.2M</span>
                  </div>
                  <div className="w-full bg-[#1E293B] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#16C7D9] h-full w-[65%]" />
                  </div>

                  <div className="flex justify-between text-[#94A3B8] pt-1">
                    <span>Abuja Central Hub</span>
                    <span className="font-mono text-white">₦42.6M</span>
                  </div>
                  <div className="w-full bg-[#1E293B] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#10B981] h-full w-[45%]" />
                  </div>

                  <div className="flex justify-between text-[#94A3B8] pt-1">
                    <span>Port Harcourt Facility</span>
                    <span className="font-mono text-white">₦21.4M</span>
                  </div>
                  <div className="w-full bg-[#1E293B] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#F59E0B] h-full w-[25%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Module Preview Pane */}
            <div className="lg:col-span-8 p-4 rounded-[10px] bg-[#0B1F33] border border-[#1E293B] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#1E293B] pb-3">
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">
                      Operational Ledger & Automated Reconciliation
                    </h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5">
                      Real-time double-entry ledger postings from integrated POS and delivery manifests.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#16C7D9] bg-[#16C7D9]/10 px-2 py-1 rounded">
                    AUTO-POST: ENABLED
                  </span>
                </div>

                {/* Simulated Ledger Rows */}
                <div className="mt-4 space-y-2">
                  {[
                    { id: 'TX-9901', account: 'Commercial Freight Clearing', amount: '₦4,850,000', status: 'Reconciled', time: '2m ago' },
                    { id: 'TX-9902', account: 'Inventory Restock Batch #441', amount: '₦12,400,000', status: 'Audited', time: '14m ago' },
                    { id: 'TX-9903', account: 'Hospital Consumables Distribution', amount: '₦6,150,000', status: 'Reconciled', time: '38m ago' },
                    { id: 'TX-9904', account: 'Fleet Fuel Automated Dispense', amount: '₦890,000', status: 'Reconciled', time: '1h ago' },
                  ].map((row) => (
                    <div
                      key={row.id}
                      className="p-2.5 rounded-[6px] bg-[#071521] border border-[#1E293B] flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[#16C7D9] font-semibold">{row.id}</span>
                        <span className="text-[#E2E8F0]">{row.account}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-white font-bold">{row.amount}</span>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-[#10B981]/20 text-[#34D399]">
                          {row.status}
                        </span>
                        <span className="text-[#64748B] text-[10px] hidden sm:inline">{row.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Module Capabilities Bar */}
              <div className="mt-6 pt-4 border-t border-[#1E293B] flex flex-wrap items-center gap-3 text-xs text-[#94A3B8]">
                <span className="text-[#CBD5E1] font-semibold">Security & Compliance:</span>
                <span className="flex items-center gap-1"><Shield className="h-3 w-3 text-[#16C7D9]" /> ISO 27001 Certified</span>
                <span>•</span>
                <span>Role-Based Audit Trails</span>
                <span>•</span>
                <span>Automated FIRS Tax Invoicing</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Modular Cards Below the Screenshot */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {modules.map((m) => {
            const Icon = m.icon
            return (
              <div
                key={m.id}
                onClick={() => setActiveModule(m.id)}
                className={`p-4 rounded-[10px] border transition-all text-left cursor-pointer ${
                  activeModule === m.id
                    ? 'bg-[#0B1F33] border-[#16C7D9] shadow-md'
                    : 'bg-[#0B1F33]/60 border-[#1E293B] hover:border-[#334155]'
                }`}
              >
                <Icon className={`h-5 w-5 ${activeModule === m.id ? 'text-[#16C7D9]' : 'text-[#64748B]'}`} />
                <h4 className="text-sm font-bold text-white font-heading mt-2.5">{m.label}</h4>
                <p className="text-[11px] text-[#94A3B8] mt-1 leading-snug">{m.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
