import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { ArrowRight, Server, Activity, Compass, Cpu, CheckCircle2 } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-[#E2E8F0] pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background blueprint grid pattern (Prisma & Centrifuge style) */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0B1F33 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Positioning */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#0B1F33]/5 border border-[#0B1F33]/10 text-xs font-semibold text-[#0B1F33]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16C7D9] animate-pulse" />
              <span>CENTRIFUGE GROUP · ENTERPRISE SYSTEMS</span>
            </div>

            {/* Signature Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1F33] font-heading leading-[1.1]">
              Technology that moves{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B1F33] via-[#071521] to-[#14B8A6]">
                business forward.
              </span>
            </h1>

            {/* Supporting Brand Promise */}
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl">
              We design and deliver enterprise software, healthcare platforms, logistics systems, and digital solutions that solve complex operational problems.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link to="/contact">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Talk to an Expert
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg">
                  Explore What We've Built
                </Button>
              </Link>
            </div>

            {/* Micro credibility metrics */}
            <div className="pt-6 border-t border-[#E2E8F0] grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#111827] font-heading">
                  100%
                </div>
                <div className="text-[11px] font-medium text-[#64748B] mt-0.5">
                  Production Delivery
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#111827] font-heading">
                  36+
                </div>
                <div className="text-[11px] font-medium text-[#64748B] mt-0.5">
                  States Deployed (FMOH)
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#111827] font-heading">
                  &lt;10ms
                </div>
                <div className="text-[11px] font-medium text-[#64748B] mt-0.5">
                  Zero-Transfer Hardware
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Product Architecture Composition */}
          <div className="lg:col-span-6 relative">
            {/* Main Window Mockup (Optimax & System Telemetry) */}
            <div className="rounded-[16px] border border-[#E2E8F0] bg-white shadow-xl overflow-hidden text-left">
              {/* Window Title Bar */}
              <div className="px-4 py-3 bg-[#0B1F33] flex items-center justify-between border-b border-[#071521]">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
                  <span className="ml-2 text-xs font-mono text-[#94A3B8]">
                    optimax.centrifugegroup.co / enterprise-core
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#16C7D9]/20 text-[#67E8F9]">
                  LIVE SYSTEM
                </span>
              </div>

              {/* Interface Content Mockup */}
              <div className="p-5 bg-[#F8FAFC] space-y-4">
                {/* Metric Summary Bar */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-white rounded-[8px] border border-[#E2E8F0] shadow-xs">
                    <span className="text-[10px] uppercase font-bold text-[#64748B]">
                      Active Facilities
                    </span>
                    <p className="text-base font-bold text-[#111827] mt-0.5">1,482</p>
                    <span className="text-[10px] text-[#16A34A] font-semibold">99.98% Uptime</span>
                  </div>
                  <div className="p-3 bg-white rounded-[8px] border border-[#E2E8F0] shadow-xs">
                    <span className="text-[10px] uppercase font-bold text-[#64748B]">
                      Daily Freight
                    </span>
                    <p className="text-base font-bold text-[#111827] mt-0.5">₦48.2M</p>
                    <span className="text-[10px] text-[#0284C7] font-semibold">Telematics Monitored</span>
                  </div>
                  <div className="p-3 bg-white rounded-[8px] border border-[#E2E8F0] shadow-xs">
                    <span className="text-[10px] uppercase font-bold text-[#64748B]">
                      Workforce Verified
                    </span>
                    <p className="text-base font-bold text-[#111827] mt-0.5">84,190</p>
                    <span className="text-[10px] text-[#15803D] font-semibold">HRHIS Registry</span>
                  </div>
                </div>

                {/* Subsystem Pipeline Visualization */}
                <div className="bg-white p-4 rounded-[10px] border border-[#E2E8F0] space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#111827]">
                    <span>Multi-Cluster Service Mesh</span>
                    <span className="text-[#16C7D9] font-mono">LATENCY: 42ms</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-[6px] bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
                      <div className="flex items-center gap-2 text-[#0B1F33] font-medium">
                        <Activity className="h-3.5 w-3.5 text-[#16C7D9]" />
                        <span>Healthcare Telemetry & EMR Core</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#16A34A] font-bold">SYNCHRONIZED</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-[6px] bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
                      <div className="flex items-center gap-2 text-[#0B1F33] font-medium">
                        <Compass className="h-3.5 w-3.5 text-[#0284C7]" />
                        <span>Logistics Fleet Dispatch & Map Engine</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#16A34A] font-bold">3,120 PINGS/S</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-[6px] bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
                      <div className="flex items-center gap-2 text-[#0B1F33] font-medium">
                        <Server className="h-3.5 w-3.5 text-[#0B1F33]" />
                        <span>Optimax Financial Ledger & Inventory</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#16A34A] font-bold">RECONCILED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating verification badge */}
            <div className="absolute -bottom-5 -left-4 sm:left-4 bg-[#0B1F33] text-white p-3 rounded-[10px] shadow-xl border border-[#172333] flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#16C7D9] shrink-0" />
              <div className="text-left">
                <p className="text-xs font-bold">Enterprise Mission Critical</p>
                <p className="text-[10px] text-[#94A3B8]">Government & Corporate Grade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
