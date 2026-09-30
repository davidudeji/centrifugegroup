import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Activity, Truck, BarChart3, ShieldCheck } from 'lucide-react'

export const WhatWeBuildSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#121212] border-b border-[#1e1e1d]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading (warp_design.md §177-180 & §260) */}
        <div className="max-w-3xl text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684] mb-3">
            <span>CORE DOMAINS & ENGINEERING CAPABILITY</span>
          </div>
          <h2 className="text-[32px] sm:text-[42px] font-normal text-[#faf9f6] tracking-[-1.13px] leading-[1.05]">
            We build the systems businesses depend on.
          </h2>
          <p className="text-[15px] text-[#868684] tracking-[-0.14px] mt-3 max-w-2xl leading-[1.4]">
            From national clinical workforce registries to heavy freight telematics and integrated commercial ERPs, we deliver engineered reliability.
          </p>
        </div>

        {/* ─── Warp Bento Grid (Onyx #1e1e1d cards, 20px radius, hairline #1e1e1d border) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Card 01: Enterprise Software (Span 7) */}
          <div className="md:col-span-7 rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] hover:border-[#333333] p-6 flex flex-col justify-between transition-colors group text-left">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-mono text-[#cbb0f7]">01</span>
                <div className="h-7 w-7 rounded-[4px] border border-[#333333] bg-[#121212] flex items-center justify-center">
                  <Layers className="h-3.5 w-3.5 text-[#faf9f6]" />
                </div>
              </div>
              <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.22px] mt-4">
                Enterprise Software
              </h3>
              <p className="text-[14px] text-[#868684] mt-2 max-w-xl leading-relaxed tracking-[-0.14px]">
                Modern ERP platforms, unified accounting, multi-warehouse inventory systems, and automated operational pipelines custom-tailored to high-growth organizations.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-[#333333]/50 flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono tracking-[1px] px-2.5 py-0.5 rounded-[50px] border border-[#333333] text-[#b4b4b2]">
                OPTIMAX SUITE
              </span>
              <Link
                to="/solutions/optimax"
                className="inline-flex items-center gap-1.5 text-[13px] text-[#faf9f6] group-hover:text-[#cbb0f7] transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Card 02: Healthcare Technology (Span 5) */}
          <div className="md:col-span-5 rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] hover:border-[#333333] p-6 flex flex-col justify-between transition-colors group text-left">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-mono text-[#cbb0f7]">02</span>
                <div className="h-7 w-7 rounded-[4px] border border-[#333333] bg-[#121212] flex items-center justify-center">
                  <Activity className="h-3.5 w-3.5 text-[#faf9f6]" />
                </div>
              </div>
              <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.22px] mt-4">
                Healthcare Technology
              </h3>
              <p className="text-[14px] text-[#868684] mt-2 leading-relaxed tracking-[-0.14px]">
                Hospital information systems, national health workforce registries (HRHIS), digital medical credentialing, and interoperable health data infrastructure.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-[#333333]/50 flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono tracking-[1px] px-2.5 py-0.5 rounded-[50px] border border-[#333333] text-[#b4b4b2]">
                FMOH & NMCN
              </span>
              <Link
                to="/solutions/healthcare"
                className="inline-flex items-center gap-1.5 text-[13px] text-[#faf9f6] group-hover:text-[#cbb0f7] transition-colors"
              >
                <span>Explore Healthcare</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Card 03: Logistics & Mobility (Span 4) */}
          <div className="md:col-span-4 rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] hover:border-[#333333] p-6 flex flex-col justify-between transition-colors group text-left">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-mono text-[#cbb0f7]">03</span>
                <div className="h-7 w-7 rounded-[4px] border border-[#333333] bg-[#121212] flex items-center justify-center">
                  <Truck className="h-3.5 w-3.5 text-[#faf9f6]" />
                </div>
              </div>
              <h3 className="text-[18px] font-semibold text-[#faf9f6] tracking-[-0.18px] mt-4">
                Logistics & Mobility
              </h3>
              <p className="text-[13px] text-[#868684] mt-2 leading-relaxed tracking-[-0.14px]">
                GPS telematics, automated dispatch, fuel auditing, route planning, and offline-capable mobile driver proof-of-delivery.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-[#333333]/50 flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono tracking-[1px] px-2.5 py-0.5 rounded-[50px] border border-[#333333] text-[#b4b4b2]">
                TELEMATICS
              </span>
              <Link
                to="/solutions/logistics"
                className="inline-flex items-center gap-1 text-[13px] text-[#faf9f6] group-hover:text-[#cbb0f7] transition-colors"
              >
                <span>Details</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Card 04: Data & Analytics (Span 4) */}
          <div className="md:col-span-4 rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] hover:border-[#333333] p-6 flex flex-col justify-between transition-colors group text-left">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-mono text-[#cbb0f7]">04</span>
                <div className="h-7 w-7 rounded-[4px] border border-[#333333] bg-[#121212] flex items-center justify-center">
                  <BarChart3 className="h-3.5 w-3.5 text-[#faf9f6]" />
                </div>
              </div>
              <h3 className="text-[18px] font-semibold text-[#faf9f6] tracking-[-0.18px] mt-4">
                Data & Analytics
              </h3>
              <p className="text-[13px] text-[#868684] mt-2 leading-relaxed tracking-[-0.14px]">
                GIS spatial mapping, executive business intelligence dashboards, real-time event streaming, and automated regulatory reporting.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-[#333333]/50 flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono tracking-[1px] px-2.5 py-0.5 rounded-[50px] border border-[#333333] text-[#b4b4b2]">
                SPATIAL GIS
              </span>
              <Link
                to="/solutions/data-analytics"
                className="inline-flex items-center gap-1 text-[13px] text-[#faf9f6] group-hover:text-[#cbb0f7] transition-colors"
              >
                <span>Details</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Card 05: Infrastructure & IoT (Span 4) */}
          <div className="md:col-span-4 rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] hover:border-[#333333] p-6 flex flex-col justify-between transition-colors group text-left">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-mono text-[#cbb0f7]">05</span>
                <div className="h-7 w-7 rounded-[4px] border border-[#333333] bg-[#121212] flex items-center justify-center">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#faf9f6]" />
                </div>
              </div>
              <h3 className="text-[18px] font-semibold text-[#faf9f6] tracking-[-0.18px] mt-4">
                Infrastructure & IoT
              </h3>
              <p className="text-[13px] text-[#868684] mt-2 leading-relaxed tracking-[-0.14px]">
                Cold-chain pharmaceutical monitoring, high-efficiency pure sine wave solar inverters, and high-availability cloud infrastructure.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-[#333333]/50 flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono tracking-[1px] px-2.5 py-0.5 rounded-[50px] border border-[#333333] text-[#b4b4b2]">
                TELEMETRY
              </span>
              <Link
                to="/services/cloud"
                className="inline-flex items-center gap-1 text-[13px] text-[#faf9f6] group-hover:text-[#cbb0f7] transition-colors"
              >
                <span>Details</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WhatWeBuildSection
