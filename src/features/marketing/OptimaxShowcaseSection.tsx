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

        {/* Optimax Live Workspace Dashboard with Video Preview Overlay */}
        <div className="relative mt-8">
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
            className="rounded-[16px] border border-[#1E293B] bg-[#071521] shadow-2xl"
            overlayClassName="rounded-[8px] border border-[#16C7D9]/30"
          />
        </div>
      </div>
    </section>
  )
}
