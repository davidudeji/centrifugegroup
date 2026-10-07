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

export const OptimaxShowcaseSection: React.FC = () => {
  const [activeModule, setActiveModule] = useState('finance')

  const modules = [
    { id: 'commerce', label: 'Commerce & POS', icon: PackageCheck, desc: 'Omnichannel B2B wholesale and retail operations from one system.' },
    { id: 'finance', label: 'Financial Ledgers', icon: CircleDollarSign, desc: 'Automated journals, ledgers, tax workflows, and reconciliation controls.' },
    { id: 'hr', label: 'HR & Payroll', icon: Users, desc: 'Workforce records, payroll processing, and compliance tracking.' },
    { id: 'inventory', label: 'Inventory Management', icon: Layers3, desc: 'Multi-location stock visibility, thresholds, and operational oversight.' },
    { id: 'analytics', label: 'Analytics & Reporting', icon: BarChart3, desc: 'KPI dashboards, board reporting, and live operational performance.' },
    { id: 'crm', label: 'CRM', icon: Cpu, desc: 'Customer relationships, pipeline visibility, and engagement workflows.' },
  ]

  const activeModData = modules.find((m) => m.id === activeModule) || modules[1]

  return (
    <section className="relative border-b border-[#E2E8F0] bg-[#FFFFFF] py-20 text-left lg:py-24">
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-[#008DDA]/20 bg-[#008DDA]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A6CAE]">
            Optimax Suite Enterprise Platform
          </div>

          <h2 className="text-[32px] font-semibold tracking-[-0.05em] text-[#0F2C59] sm:text-[42px] lg:text-[52px]">
            Everything your business needs. Finally in one place.
          </h2>

          <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-7 text-[#475569] sm:text-[16px]">
            Optimax brings commerce, finance, HR, inventory, analytics, and business operations into one connected, enterprise-grade platform.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {modules.map((m) => {
              const Icon = m.icon
              const isActive = activeModule === m.id

              return (
                <button
                  key={m.id}
                  onClick={() => setActiveModule(m.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[12px] font-semibold transition-all duration-200 ${
                    isActive
                      ? 'border-[#008DDA] bg-[#008DDA]/10 text-[#0A6CAE]'
                      : 'border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] hover:border-[#CBD5E1] hover:text-[#0F2C59]'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{m.label}</span>
                </button>
              )
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/solutions/optimax"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1aa7f0] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(26,167,240,0.24)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#38b4f8]"
            >
              <span>Explore Optimax Platform</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#008DDA]/35 bg-transparent px-5 py-3 text-sm font-semibold text-[#008DDA] transition-colors hover:bg-[#008DDA] hover:text-white"
            >
              <span>Request Private Walkthrough</span>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-[1080px] rounded-[22px] border border-[#E2E8F0] bg-[#F8FAFC] p-4 shadow-[0_20px_50px_rgba(15,44,89,0.05)] sm:p-6">
          <div className="mb-5 flex flex-col gap-4 border-b border-[#E2E8F0] pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#008DDA]">
                Selected Module Capability
              </div>
              <h3 className="mt-2 text-[28px] font-semibold tracking-[-0.04em] text-[#0F2C59]">
                {activeModData.label}
              </h3>
              <p className="mt-2 text-[14px] text-[#475569]">{activeModData.desc}</p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#D1FAE5] px-3 py-1.5 text-[12px] font-semibold text-[#065F46]">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Enterprise Ready
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[14px] border border-[#E2E8F0] bg-white p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#64748B]">Operational Flow</div>
              <div className="mt-2 text-[24px] font-semibold tracking-[-0.04em] text-[#0F2C59]">94%</div>
            </div>
            <div className="rounded-[14px] border border-[#E2E8F0] bg-white p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#64748B]">Automation</div>
              <div className="mt-2 text-[24px] font-semibold tracking-[-0.04em] text-[#0F2C59]">Realtime</div>
            </div>
            <div className="rounded-[14px] border border-[#E2E8F0] bg-white p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#64748B]">Compliance</div>
              <div className="mt-2 text-[24px] font-semibold tracking-[-0.04em] text-[#0F2C59]">Multi-entity</div>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-[#091d35] p-3 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)] sm:p-4">
            <div className="rounded-[12px] border border-white/10 bg-[#0C2647] p-3 sm:p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#60d4ff]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#9be6ff]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#cbd5e1]" />
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-sky-100">
                  Dashboard
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-4">
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[12px] border border-white/10 bg-white/5 p-3">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-sky-100/75">Revenue</div>
                      <div className="mt-2 text-[24px] font-semibold text-white">$2.84M</div>
                    </div>
                    <div className="rounded-[12px] border border-white/10 bg-white/5 p-3">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-sky-100/75">Orders</div>
                      <div className="mt-2 text-[24px] font-semibold text-white">18.4K</div>
                    </div>
                    <div className="rounded-[12px] border border-white/10 bg-white/5 p-3">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-sky-100/75">Inventory</div>
                      <div className="mt-2 text-[24px] font-semibold text-white">92%</div>
                    </div>
                  </div>

                  <div className="rounded-[12px] border border-white/10 bg-white/5 p-4">
                    <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-sky-100/75">Performance</div>
                    <div className="flex h-28 items-end gap-2">
                      {[45, 60, 50, 85, 68, 92, 78].map((height, idx) => (
                        <div key={idx} className="flex-1 rounded-t-[8px] bg-gradient-to-t from-[#5ec9ff] via-[#38b5f5] to-[#9fe8ff]" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[12px] border border-white/10 bg-white/5 p-4">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-sky-100/75">Operations</div>
                    <div className="mt-4 space-y-3">
                      {['Accounts receivable', 'Payroll processing', 'Procurement', 'Service requests'].map((item) => (
                        <div key={item} className="flex items-center justify-between rounded-[10px] border border-white/10 bg-[#0B1F38] px-3 py-2 text-[12px] text-slate-200">
                          <span>{item}</span>
                          <span className="text-sky-300">●</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OptimaxShowcaseSection
