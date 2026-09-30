import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Terminal, Layers, CheckCircle2, Shield, ArrowUpRight } from 'lucide-react'
import { VideoPreviewOverlay } from '../../components/media/VideoPreviewOverlay'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#000000] text-[#faf9f6] pt-14 pb-20 lg:pt-20 lg:pb-28 border-b border-[#1e1e1d] overflow-hidden">
      {/* ─── Center Command Header ─── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Pill Tag Category Chip (warp_design.md §182-186) */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#b4b4b2] mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#cbb0f7] animate-pulse" />
          <span>CENTRIFUGE GROUP · ENTERPRISE SYSTEMS COCKPIT</span>
        </div>

        {/* Display Headline (Matter 400 at 56px, -2.24px letter-spacing, line-height 0.96) */}
        <h1 className="text-[38px] sm:text-[48px] lg:text-[56px] font-normal tracking-[-2.24px] text-[#faf9f6] leading-[0.98] sm:leading-[0.96] max-w-4xl mx-auto">
          Technology that moves business forward.
        </h1>

        {/* Subheading Body (Matter 400 at 16px, #868684, -0.18px letter-spacing) */}
        <p className="mt-5 text-[15px] sm:text-[16px] text-[#868684] tracking-[-0.18px] max-w-2xl mx-auto leading-[1.4]">
          We design and deliver enterprise software, healthcare platforms, logistics systems, and digital solutions that solve complex operational problems.
        </p>

        {/* Action Button Row (Ghost + Filled White Pill per warp_design.md §142-150) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-[22px] py-[10px] rounded-[33px] text-[14px] font-semibold bg-[#ffffff] text-[#080808] hover:bg-[#e3e2e0] transition-colors duration-150 tracking-[-0.14px]"
          >
            <span>Talk to an Expert</span>
            <ArrowRight className="h-3.5 w-3.5 ml-2" />
          </Link>

          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-[20px] py-[10px] rounded-[33px] text-[14px] font-normal bg-transparent border border-[#333333] text-[#b4b4b2] hover:border-[#b4b4b2] hover:text-[#faf9f6] transition-colors duration-150 tracking-[-0.14px]"
          >
            <span>Explore Architecture</span>
          </Link>
        </div>

        {/* ─── Side-by-Side Product Showcase Cards (warp_design.md §157-161 & §187-191) ─── */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
          {/* Card 1: Multi-Cluster Telemetry Terminal Cockpit (Span 7) */}
          <div className="lg:col-span-7 rounded-[20px] border border-[#1e1e1d] bg-[#000000] p-6 flex flex-col justify-between hover:border-[#333333] transition-colors group">
            {/* Caption Block */}
            <div className="flex items-start justify-between pb-4 border-b border-[#1e1e1d]">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-[4px] border border-[#333333] bg-[#121212] flex items-center justify-center">
                  <Terminal className="h-3 w-3 text-[#cbb0f7]" />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#faf9f6] tracking-[-0.18px] leading-tight">
                    Service Mesh Telemetry
                  </h3>
                  <p className="text-[13px] text-[#868684] tracking-[-0.14px]">
                    Multi-node real-time cluster sync & operational audit
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-mono tracking-[1px] px-2 py-0.5 rounded-[50px] border border-[#333333] text-[#b4b4b2]">
                  LIVE MESH
                </span>
              </div>
            </div>

            {/* Faux Terminal Window with Traffic Light Dots & Phosphor Violet accents */}
            <div className="mt-4 rounded-[12px] bg-[#000000] border border-[#1e1e1d] overflow-hidden font-mono text-[12px]">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-3 py-2 bg-[#121212] border-b border-[#1e1e1d]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#333333]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#333333]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#333333]" />
                </div>
                <span className="text-[11px] text-[#868684]">telemetry.centrifuge.internal</span>
                <span className="text-[10px] text-[#cbb0f7]">READY</span>
              </div>

              {/* Terminal Body */}
              <div className="p-3 text-[12px] space-y-1.5 text-[#b4b4b2] bg-[#000000]">
                <div className="flex items-center gap-2">
                  <span className="text-[#868684]">$</span>
                  <span className="text-[#faf9f6]">centrifuge</span>
                  <span className="text-[#cbb0f7]">cluster --sync --verify</span>
                </div>
                <div className="text-[#868684] text-[11px]">
                  [cluster-abuja-01] Synchronized 1,420,892 records in 12ms (SHA-256 ok)
                </div>
                <div className="text-[#868684] text-[11px]">
                  [node-lagos-edge] Gateway operational · latency: 4.8ms
                </div>
              </div>

              {/* Live Video Preview Overlay */}
              <div className="p-2 border-t border-[#1e1e1d] bg-[#080808]">
                <VideoPreviewOverlay
                  backgroundImage="/previews/hero-system-preview.png"
                  videoSource="/previews/service-mesh-telemetry.webm"
                  dimensions={{
                    top: '34.8%',
                    left: '5.6%',
                    width: '88.8%',
                    height: '29.2%',
                  }}
                  altText="Centrifuge Multi-Cluster Service Mesh Live Telemetry"
                  className="rounded-[8px] border border-[#1e1e1d] bg-[#000000] overflow-hidden"
                  overlayClassName="rounded-[6px] border border-[#cbb0f7]/40"
                />
              </div>
            </div>

            {/* Bottom Card Actions */}
            <div className="mt-4 pt-3 border-t border-[#1e1e1d] flex items-center justify-between">
              <span className="text-[12px] text-[#868684]">
                Architecture: Distributed Event Bus
              </span>
              <Link
                to="/solutions/enterprise"
                className="inline-flex items-center gap-1 text-[13px] text-[#faf9f6] hover:text-[#cbb0f7] transition-colors"
              >
                <span>Learn more</span>
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Card 2: Optimax Connected Operations (Span 5) */}
          <div className="lg:col-span-5 rounded-[20px] border border-[#1e1e1d] bg-[#000000] p-6 flex flex-col justify-between hover:border-[#333333] transition-colors group">
            {/* Caption Block */}
            <div className="flex items-start justify-between pb-4 border-b border-[#1e1e1d]">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-[4px] border border-[#333333] bg-[#121212] flex items-center justify-center">
                  <Layers className="h-3 w-3 text-[#faf9f6]" />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#faf9f6] tracking-[-0.18px] leading-tight">
                    Optimax ERP v4
                  </h3>
                  <p className="text-[13px] text-[#868684] tracking-[-0.14px]">
                    Unified finance, supply & human resource core
                  </p>
                </div>
              </div>

              <span className="text-[10px] uppercase font-mono tracking-[1px] px-2 py-0.5 rounded-[50px] border border-[#333333] text-[#cbb0f7]">
                ERP CORE
              </span>
            </div>

            {/* Flat Surface Card Stepping Panel */}
            <div className="mt-4 rounded-[12px] bg-[#121212] border border-[#1e1e1d] p-4 space-y-3">
              <div className="flex items-center justify-between text-[11px] text-[#868684] font-mono">
                <span>ACTIVE WORKSPACE</span>
                <span className="text-[#faf9f6]">HEALTH: 100%</span>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 rounded-[7px] bg-[#1e1e1d] border border-[#333333]/60 flex items-center justify-between text-[12px]">
                  <span className="text-[#faf9f6]">Automated General Ledger</span>
                  <span className="text-[#cbb0f7] font-mono">Synced</span>
                </div>
                <div className="p-2.5 rounded-[7px] bg-[#1e1e1d] border border-[#333333]/60 flex items-center justify-between text-[12px]">
                  <span className="text-[#faf9f6]">Multi-Warehouse Inventory</span>
                  <span className="text-[#cbb0f7] font-mono">Audited</span>
                </div>
                <div className="p-2.5 rounded-[7px] bg-[#1e1e1d] border border-[#333333]/60 flex items-center justify-between text-[12px]">
                  <span className="text-[#faf9f6]">Cryptographic Proof of Delivery</span>
                  <span className="text-[#cbb0f7] font-mono">Verified</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-[11px] text-[#868684]">
                <Shield className="h-3.5 w-3.5 text-[#cbb0f7]" />
                <span>Zero dropouts across flaky rural connectivity</span>
              </div>
            </div>

            {/* Bottom Card Actions */}
            <div className="mt-6 pt-3 border-t border-[#1e1e1d] flex items-center justify-between">
              <Link
                to="/solutions/optimax"
                className="inline-flex items-center justify-center px-4 py-2 rounded-[33px] text-[13px] font-normal bg-transparent border border-[#333333] text-[#b4b4b2] hover:border-[#b4b4b2] hover:text-[#faf9f6] transition-colors"
              >
                <span>View Platform</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-[33px] text-[13px] font-semibold bg-[#ffffff] text-[#080808] hover:bg-[#e3e2e0] transition-colors"
              >
                <span>Request Walkthrough</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ─── Compact Metrics Hairline Strip (flat surface stepping) ─── */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
          <div className="p-4 rounded-[12px] bg-[#121212] border border-[#1e1e1d]">
            <div className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.22px]">
              100%
            </div>
            <div className="text-[11px] uppercase tracking-[1px] text-[#868684] mt-0.5">
              Production Delivery
            </div>
          </div>
          <div className="p-4 rounded-[12px] bg-[#121212] border border-[#1e1e1d]">
            <div className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.22px]">
              36+
            </div>
            <div className="text-[11px] uppercase tracking-[1px] text-[#868684] mt-0.5">
              States Deployed (FMOH)
            </div>
          </div>
          <div className="p-4 rounded-[12px] bg-[#121212] border border-[#1e1e1d]">
            <div className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.22px]">
              &lt;10ms
            </div>
            <div className="text-[11px] uppercase tracking-[1px] text-[#868684] mt-0.5">
              Zero-Transfer Hardware
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection
