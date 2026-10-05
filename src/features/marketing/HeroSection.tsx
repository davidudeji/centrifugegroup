import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Cpu,
  Layers,
  Workflow,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Activity,
  Zap,
} from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col w-full text-left">
      {/* ─── Template A: HERO SECTION (UI/UX Spec §4.1) ─── */}
      <section className="relative bg-[#FFFFFF] text-[#1A1A1A] pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-[#E2E8F0] overflow-hidden">
        {/* Subtle grid pattern background evoking institutional architecture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Architecture Node Chip */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] bg-[#008DDA]/10 border border-[#008DDA]/30 text-[#0077B6] text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>ENTERPRISE FINANCIAL TECHNOLOGY PLATFORM</span>
          </div>

          {/* Page Header (UI/UX Spec §1.2 H1: 32px-52px, Bold 700, Line Height 1.2) */}
          <h1 className="text-[36px] sm:text-[46px] lg:text-[54px] font-bold text-[#0F2C59] tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Next-Generation Digital Banking Architecture
          </h1>

          {/* Subheading Body Text (UI/UX Spec §1.2: Regular 400, Line Height 1.5) */}
          <p className="mt-5 text-[16px] sm:text-[18px] text-[#475569] max-w-2xl mx-auto leading-relaxed">
            High-performance modular coreless banking, real-time multi-rail settlement, and visual process orchestration built for modern institutional trust.
          </p>

          {/* Action Button Row (UI/UX Spec §5.1 Primary & Secondary Buttons) */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            {/* Primary Action Button: #008DDA, 4px radius, hover #0077B6 */}
            <Link
              to="/solutions/banking-framework"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[4px] text-[15px] font-semibold bg-[#008DDA] text-white hover:bg-[#0077B6] focus:outline-none focus:ring-2 focus:ring-[#0F2C59] transition-all duration-200 shadow-xs"
            >
              <span>Explore Platform Architecture</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* Secondary Action Button: Border 1px #008DDA, text #008DDA, hover swaps to #008DDA fill */}
            <Link
              to="/admin"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[4px] text-[15px] font-semibold bg-transparent text-[#008DDA] border border-[#008DDA] hover:bg-[#008DDA] hover:text-white transition-all duration-200"
            >
              <span>Launch Visual Studio Dashboard</span>
            </Link>
          </div>

          {/* Trust & Performance Metrics Bar */}
          <div className="mt-12 pt-8 border-t border-[#E2E8F0] max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <span className="text-2xl font-bold text-[#0F2C59] block">99.999%</span>
              <span className="text-xs text-[#64748B]">Core Ledger Uptime</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#008DDA] block">&lt; 3.2ms</span>
              <span className="text-xs text-[#64748B]">Consensus Latency</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#10B981] block">ISO 20022</span>
              <span className="text-xs text-[#64748B]">Native Messaging</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#0F2C59] block">Active-Active</span>
              <span className="text-xs text-[#64748B]">Multi-Cloud Node</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3-COLUMN CORE CAPABILITIES (UI/UX Spec §4.1 Wireframe) ─── */}
      <section className="py-20 lg:py-24 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008DDA]">
              CORE ARCHITECTURAL PILLARS
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0F2C59] tracking-tight mt-2">
              Three Foundational Capabilities Powering the Modern Enterprise
            </h2>
            <p className="mt-3 text-[15px] text-[#64748B]">
              Engineered after institutional financial technology standards to decouple legacy constraints and enable instantaneous innovation.
            </p>
          </div>

          {/* 3-Column Grid per Wireframe 4.1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Modular Coreless (Data Card Module §3.3: 8px radius, #FFFFFF, 1px #E2E8F0, 24px padding) */}
            <div className="rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] p-6 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-xs transition-fin group text-left">
              <div>
                <div className="h-12 w-12 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center mb-6 group-hover:bg-[#008DDA] group-hover:text-white transition-colors duration-200">
                  <Cpu className="h-6 w-6" />
                </div>
                <span className="text-[11px] font-mono text-[#008DDA] uppercase tracking-wider font-semibold">
                  MODULE 01
                </span>
                <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight mt-1 mb-3">
                  Modular Coreless
                </h3>
                <p className="text-[14px] text-[#475569] leading-relaxed">
                  Decoupled core banking infrastructure with high-concurrency event sourcing. Separates ledger state from transactional rails, ensuring real-time reconciliation and seamless multi-currency accounting.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#10B981] flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Zero-Lock Architecture</span>
                </span>
                <Link
                  to="/solutions/banking-framework"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#008DDA] group-hover:translate-x-1 transition-transform"
                >
                  <span>Specs</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Omnichannel Engine */}
            <div className="rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] p-6 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-xs transition-fin group text-left">
              <div>
                <div className="h-12 w-12 rounded-[4px] bg-[#008DDA]/10 text-[#008DDA] flex items-center justify-center mb-6 group-hover:bg-[#008DDA] group-hover:text-white transition-colors duration-200">
                  <Layers className="h-6 w-6" />
                </div>
                <span className="text-[11px] font-mono text-[#008DDA] uppercase tracking-wider font-semibold">
                  MODULE 02
                </span>
                <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight mt-1 mb-3">
                  Omnichannel Engine
                </h3>
                <p className="text-[14px] text-[#475569] leading-relaxed">
                  Unified enterprise API gateway binding mobile banking apps, digital corporate portals, ATM switch protocols, and open banking partner integrations into one atomic event loop.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#10B981] flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Sub-4ms Ingress</span>
                </span>
                <Link
                  to="/solutions/banking-framework"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#008DDA] group-hover:translate-x-1 transition-transform"
                >
                  <span>Specs</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Visual Modeler */}
            <div className="rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] p-6 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-xs transition-fin group text-left">
              <div>
                <div className="h-12 w-12 rounded-[4px] bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-6 group-hover:bg-[#008DDA] group-hover:text-white transition-colors duration-200">
                  <Workflow className="h-6 w-6" />
                </div>
                <span className="text-[11px] font-mono text-[#008DDA] uppercase tracking-wider font-semibold">
                  MODULE 03
                </span>
                <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight mt-1 mb-3">
                  Visual Modeler
                </h3>
                <p className="text-[14px] text-[#475569] leading-relaxed">
                  Interactive drag-and-drop process orchestration canvas. Visually model automated KYC/AML compliance pipelines, multi-stage approval hierarchies, and instant credit decision trees.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#10B981] flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Interactive Studio Ready</span>
                </span>
                <Link
                  to="/admin"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#008DDA] group-hover:translate-x-1 transition-transform"
                >
                  <span>Try Canvas</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default HeroSection
