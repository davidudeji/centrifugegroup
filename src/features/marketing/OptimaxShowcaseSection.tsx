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
  Layers,
  CheckCircle2,
} from 'lucide-react'

export const OptimaxShowcaseSection: React.FC = () => {
  const [activeModule, setActiveModule] = useState('finance')

  const modules = [
    {
      id: "commerce",
      label: "Commerce & POS",
      icon: PackageCheck,
      desc: "Omnichannel B2B wholesale & retail POS synchronization.",
    },
    {
      id: "finance",
      label: "Financial Ledgers",
      icon: DollarSign,
      desc: "Automated double-entry journals, tax computation & bank reconciliation.",
    },
    {
      id: "hr",
      label: "HR & Payroll",
      icon: Users,
      desc: "Workforce records, timesheets, PAYE deductions & automated pensions.",
    },
    {
      id: "inventory",
      label: "Inventory Management",
      icon: Layers,
      desc: "Multi-depot inventory tracking, threshold reorders & barcode scanning.",
    },
    {
      id: "Analytics",
      label: "Analytics & Reporting",
      icon: BarChart2,
      desc: "Real-time reporting, analytics dashboards & KPI monitoring.",
    },
    {
      id: "crm",
      label: "CRM",
      icon: Cpu,
      desc: "Enterprise accounts receivable, credit limits & customer engagement.",
    },
  ];

  const activeModData =
    modules.find((m) => m.id === activeModule) || modules[1];

  return (
    <section className="bg-[#FFFFFF] text-[#1A1A1A] py-20 lg:py-24 border-b border-[#E2E8F0] relative text-left">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#008DDA]/10 border border-[#008DDA]/20 text-xs font-semibold uppercase tracking-wider text-[#0077B6] mb-3">
            <span>OPTIMAX SUITE ENTERPRISE PLATFORM</span>
          </div>

          <h2 className="text-[28px] sm:text-[38px] font-bold text-[#0F2C59] tracking-tight">
            Everything your business needs. Finally in one place.
          </h2>

          <p className="mt-3 text-[15px] sm:text-[16px] text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Optimax brings commerce, finance, HR, inventory, analytics, and
            business operations into one connected, enterprise-grade
            architecture.
          </p>

          {/* Module Selector Chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {modules.map((m) => {
              const Icon = m.icon;
              const isActive = activeModule === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveModule(m.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[4px] text-xs font-semibold transition-fin cursor-pointer ${
                    isActive
                      ? "border border-[#008DDA] text-[#0077B6] bg-[#008DDA]/10 shadow-xs"
                      : "border border-[#E2E8F0] text-[#64748B] hover:text-[#0F2C59] hover:border-[#CBD5E1] bg-[#F8FAFC]"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{m.label}</span>
                </button>
              );
            })}
          </div>

          {/* Action Buttons Row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/solutions/optimax"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] text-sm font-semibold bg-[#008DDA] text-white hover:bg-[#0077B6] transition-colors"
            >
              <span>Explore Optimax Platform</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-[4px] text-sm font-semibold bg-transparent border border-[#008DDA] text-[#008DDA] hover:bg-[#008DDA] hover:text-white transition-colors"
            >
              <span>Request Private Walkthrough</span>
            </Link>
          </div>
        </div>

        {/* Optimax Feature Highlight Card (Data Card Module §3.3) */}
        <div className="rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC] p-6 sm:p-8 max-w-4xl mx-auto shadow-none">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
            <div>
              <span className="text-xs font-mono font-bold text-[#008DDA] uppercase tracking-wider">
                SELECTED MODULE CAPABILITY
              </span>
              <h3 className="text-xl font-bold text-[#0F2C59] mt-0.5">
                {activeModData.label}
              </h3>
              <p className="text-sm text-[#64748B] mt-1">
                {activeModData.desc}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-[4px] bg-[#D1FAE5] text-[#065F46] border border-[#A7F3D0]">
                <CheckCircle2 className="h-3 w-3" />
                <span>Enterprise Ready</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-xs text-[#475569]">
            <div className="p-3 bg-[#FFFFFF] rounded-[4px] border border-[#E2E8F0]">
              <span className="text-[#64748B] block mb-1">
                Reconciliation Model
              </span>
              <span className="font-semibold text-[#0F2C59] text-sm">
                Automated Real-Time
              </span>
            </div>
            <div className="p-3 bg-[#FFFFFF] rounded-[4px] border border-[#E2E8F0]">
              <span className="text-[#64748B] block mb-1">
                Audit Compliance
              </span>
              <span className="font-semibold text-[#0F2C59] text-sm">
                IFRS / FIRS Certified
              </span>
            </div>
            <div className="p-3 bg-[#FFFFFF] rounded-[4px] border border-[#E2E8F0]">
              <span className="text-[#64748B] block mb-1">
                Multi-Tenant Isolation
              </span>
              <span className="font-semibold text-[#0F2C59] text-sm">
                Dedicated DB Schema
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OptimaxShowcaseSection
