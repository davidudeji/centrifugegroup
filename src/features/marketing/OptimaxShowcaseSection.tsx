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
} from 'lucide-react'
import { VideoPreviewOverlay } from '../../components/media/VideoPreviewOverlay'

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
    <section className="bg-[#000000] text-[#faf9f6] py-20 lg:py-24 border-b border-[#1e1e1d] relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block (warp_design.md §177-180) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684] mb-3">
            <span>OPTIMAX CONNECTED PLATFORM</span>
          </div>

          <h2 className="text-[32px] sm:text-[42px] font-normal text-[#faf9f6] tracking-[-1.13px] leading-[1.05]">
            Your business. Connected.
          </h2>

          <p className="mt-4 text-[15px] sm:text-[16px] text-[#868684] tracking-[-0.18px] max-w-2xl mx-auto leading-[1.4]">
            Optimax brings commerce, finance, HR, inventory, analytics, and business operations into one unified, enterprise-grade platform.
          </p>

          {/* Module Selector Chips (warp_design.md §182-186) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {modules.map((m) => {
              const Icon = m.icon
              const isActive = activeModule === m.id
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveModule(m.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-[50px] text-[11px] uppercase tracking-[1px] transition-colors ${
                    isActive
                      ? 'border border-[#cbb0f7] text-[#cbb0f7] bg-[#cbb0f7]/10'
                      : 'border border-[#333333] text-[#868684] hover:text-[#faf9f6] hover:border-[#868684] bg-transparent'
                  }`}
                >
                  <Icon className="h-3 w-3" />
                  <span>{m.label}</span>
                </button>
              )
            })}
          </div>

          {/* Action Buttons Row (warp_design.md §142-150) */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/solutions/optimax"
              className="inline-flex items-center justify-center px-[22px] py-[10px] rounded-[33px] text-[14px] font-semibold bg-[#ffffff] text-[#080808] hover:bg-[#e3e2e0] transition-colors duration-150 tracking-[-0.14px]"
            >
              <span>Explore Optimax Platform</span>
              <ArrowRight className="h-3.5 w-3.5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-[20px] py-[10px] rounded-[33px] text-[14px] font-normal bg-transparent border border-[#333333] text-[#b4b4b2] hover:border-[#b4b4b2] hover:text-[#faf9f6] transition-colors duration-150 tracking-[-0.14px]"
            >
              <span>Request Private Walkthrough</span>
            </Link>
          </div>
        </div>

        {/* Optimax Live Workspace Dashboard with Video Preview Overlay */}
        <div className="relative mt-8 rounded-[20px] border border-[#1e1e1d] bg-[#000000] p-3 overflow-hidden">
          <VideoPreviewOverlay
            backgroundImage="/previews/optimax-dashboard-preview.png"
            videoSource="/previews/optimax-ledger-stream.webm"
            dimensions={{
              top: '31.5%',
              left: '40.2%',
              width: '56.8%',
              height: '42.5%',
            }}
            altText="Optimax Enterprise Workspace Operational Ledger & Automated Reconciliation"
            className="rounded-[16px] border border-[#1e1e1d] bg-[#000000]"
            overlayClassName="rounded-[8px] border border-[#cbb0f7]/40"
          />
        </div>
      </div>
    </section>
  )
}
export default OptimaxShowcaseSection
