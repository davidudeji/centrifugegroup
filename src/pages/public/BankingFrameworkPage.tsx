import React from 'react'
import { SEO } from '../../components/ui/SEO'
import { BankingProcessStudio } from '../../components/studio/BankingProcessStudio'
import { Link } from 'react-router-dom'
import { Cpu, ArrowRight, ShieldCheck, Zap, Layers, Lock } from 'lucide-react'

export const BankingFrameworkPage: React.FC = () => {
  return (
    <div className="w-full bg-[#F5F7FA] min-h-screen py-10 sm:py-14 text-left">
      <SEO
        title="Digital Banking Architecture & Visual Modeler | Centrifuge Group"
        description="High-performance modular coreless banking framework, real-time multi-rail settlement, and visual process modeler canvas."
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Institutional Header Banner */}
        <div className="rounded-[8px] bg-[#0F2C59] text-white p-8 sm:p-12 relative overflow-hidden shadow-xs border border-[#1E3A8A]">
          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#008DDA]/20 border border-[#008DDA]/40 text-[#008DDA] text-xs font-semibold uppercase tracking-wider">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>CORELESS FINANCIAL ARCHITECTURE SPECIFICATION</span>
            </div>
            <h1 className="text-[32px] sm:text-[44px] font-bold tracking-tight text-white leading-tight">
              Enterprise Banking Framework & Visual Process Modeler
            </h1>
            <p className="text-[15px] sm:text-[16px] text-[#A0AEC0] leading-relaxed">
              Modeled after tier-1 enterprise financial technology platforms. Features decoupled high-throughput ledger state, sub-3.2ms transaction consensus, and visual process orchestration.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1E3A8A] flex flex-wrap items-center gap-6 text-xs text-[#A0AEC0]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#10B981]" />
              <span>ISO 20022 Multi-Rail Compliant</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-[#008DDA]" />
              <span>Active-Active Multi-Region Cluster</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="h-4 w-4 text-[#10B981]" />
              <span>Zero-Trust Cryptographic Auditability</span>
            </span>
          </div>
        </div>

        {/* ─── TEMPLATE B WIREFRAME: TECHNICAL CAPABILITIES & VISUAL STUDIO DASHBOARD ─── */}
        <BankingProcessStudio />
      </div>
    </div>
  )
}
export default BankingFrameworkPage
