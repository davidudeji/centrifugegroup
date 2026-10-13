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
  const optimaxDashboard = new URL('../../assets/optimax sales dashboard.PNG', import.meta.url).href
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

          <h2 className="text-[32px] font-semibold tracking-[-0.05em] text-[#0B1F33] sm:text-[42px] lg:text-[52px]">
            Everything your business needs. Finally in one place.
          </h2>

          <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-7 text-[#475569] sm:text-[16px]">
            Optimax brings commerce, finance, HR, inventory, analytics, and
            business operations into one connected, enterprise-grade platform.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {modules.map((m) => {
              const Icon = m.icon;
              const isActive = activeModule === m.id;

              return (
                <button
                  key={m.id}
                  onClick={() => setActiveModule(m.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[12px] font-semibold transition-all duration-200 ${isActive
                      ? "border-[#E87916] bg-[#E87916]/10 text-[#D0690E]"
                      : "border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] hover:border-[#CBD5E1] hover:text-[#0B1F33]"
                    }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{m.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/solutions/optimax"
              className="group inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#E87916] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(232,121,22,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D0690E] hover:shadow-[0_14px_30px_rgba(232,121,22,0.36)]"
            >
              <span>Explore Optimax Platform</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-[8px] border border-[#CBD5E1] bg-white px-5 py-3 text-sm font-semibold text-[#0B1F33] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0B1F33]/40 hover:bg-slate-50"
            >
              <span>Request Private Walkthrough</span>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-[1080px] rounded-[22px] border border-[#E2E8F0] bg-[#F8FAFC] p-4 shadow-[0_20px_50px_rgba(15,44,89,0.05)] sm:p-6">
          <div className="mb-5 flex flex-col gap-4 border-b border-[#E2E8F0] pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="mt-2 text-[28px] font-semibold tracking-[-0.04em] text-[#0F2C59]">
                {activeModData.label}
              </h3>
              <p className="mt-2 text-[14px] text-[#475569]">
                {activeModData.desc}
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#475569]">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#1aa7f0]" />
              Live operations
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[14px] border border-[#E2E8F0] bg-white p-4">
              <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Platform
              </div>
              <div className="mt-2 text-[24px] font-semibold tracking-[-0.04em] text-[#0F2C59]">
                Cloud-native
              </div>
            </div>
            <div className="rounded-[14px] border border-[#E2E8F0] bg-white p-4">
              <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Control
              </div>
              <div className="mt-2 text-[24px] font-semibold tracking-[-0.04em] text-[#0F2C59]">
                Customizable
              </div>
            </div>
            <div className="rounded-[14px] border border-[#E2E8F0] bg-white p-4">
              <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Scale
              </div>
              <div className="mt-2 text-[24px] font-semibold tracking-[-0.04em] text-[#0F2C59]">
                Multi-tenant
              </div>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-[#091d35] p-3 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)] sm:p-4">
            <div className="rounded-[12px] border border-white/10 bg-[#0C2647] p-2 sm:p-3">
              <img
                src={optimaxDashboard}
                alt="Optimax sales dashboard"
                className="w-full rounded-[10px] border border-white/10 object-cover shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OptimaxShowcaseSection
