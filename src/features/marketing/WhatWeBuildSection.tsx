import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Activity, Truck, BarChart3, ShieldCheck, Cpu } from 'lucide-react'

export const WhatWeBuildSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#F5F7FA] border-b border-[#E2E8F0] text-left">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading (UI/UX Spec §1.2 H2 & Body) */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#008DDA]/10 border border-[#008DDA]/20 text-xs font-semibold uppercase tracking-wider text-[#0077B6] mb-3">
            <span>CORE DOMAINS & ENTERPRISE CAPABILITY</span>
          </div>
          <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0F2C59] tracking-tight">
            We Engineer the Critical Infrastructure Institutions Depend On
          </h2>
          <p className="text-[15px] text-[#64748B] mt-2.5 max-w-2xl leading-relaxed">
            From national clinical workforce registries to heavy freight telematics and integrated commercial ERPs, we deliver engineered reliability.
          </p>
        </div>

        {/* ─── Data Card Module Grid (UI/UX Spec §3.3: 8px radius, #FFFFFF fill, 1px #E2E8F0 border, 24px padding) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 01: Enterprise Banking & ERP (Span 7) */}
          <div className="md:col-span-7 rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs p-6 flex flex-col justify-between transition-fin group">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#008DDA]">DOMAIN 01</span>
                <div className="h-8 w-8 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center">
                  <Layers className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight mt-3">
                Enterprise Banking & Operations
              </h3>
              <p className="text-[14px] text-[#475569] mt-2 max-w-xl leading-relaxed">
                Modern ERP platforms, unified accounting, multi-warehouse inventory systems, and automated operational pipelines custom-tailored to high-growth institutions.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
              <span className="text-[11px] uppercase font-mono font-semibold px-2 py-0.5 rounded-[4px] bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0]">
                OPTIMAX SUITE
              </span>
              <Link
                to="/solutions/optimax"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#008DDA] group-hover:text-[#0077B6] transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Card 02: Healthcare Technology (Span 5) */}
          <div className="md:col-span-5 rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs p-6 flex flex-col justify-between transition-fin group">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#008DDA]">DOMAIN 02</span>
                <div className="h-8 w-8 rounded-[4px] bg-[#10B981]/10 text-[#10B981] flex items-center justify-center">
                  <Activity className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight mt-3">
                Healthcare Technologies
              </h3>
              <p className="text-[14px] text-[#475569] mt-2 leading-relaxed">
                Hospital information systems, national health workforce registries (HRHIS), digital medical credentialing, and interoperable health data infrastructure.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
              <span className="text-[11px] uppercase font-mono font-semibold px-2 py-0.5 rounded-[4px] bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0]">
                FMOH & NMCN
              </span>
              <Link
                to="/solutions/healthcare"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#008DDA] group-hover:text-[#0077B6] transition-colors"
              >
                <span>Explore Healthcare</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Card 03: Logistics & Mobility (Span 4) */}
          <div className="md:col-span-4 rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs p-6 flex flex-col justify-between transition-fin group">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#008DDA]">DOMAIN 03</span>
                <div className="h-8 w-8 rounded-[4px] bg-[#008DDA]/10 text-[#008DDA] flex items-center justify-center">
                  <Truck className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-[18px] font-bold text-[#0F2C59] tracking-tight mt-3">
                Logistics & Mobility
              </h3>
              <p className="text-[13px] text-[#475569] mt-2 leading-relaxed">
                GPS telematics, automated dispatch, fuel auditing, route planning, and offline-capable mobile driver proof-of-delivery.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
              <span className="text-[11px] uppercase font-mono font-semibold px-2 py-0.5 rounded-[4px] bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0]">
                TELEMATICS
              </span>
              <Link
                to="/solutions/logistics"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#008DDA] group-hover:text-[#0077B6] transition-colors"
              >
                <span>Details</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Card 04: Data & Analytics (Span 4) */}
          <div className="md:col-span-4 rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs p-6 flex flex-col justify-between transition-fin group">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#008DDA]">DOMAIN 04</span>
                <div className="h-8 w-8 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center">
                  <BarChart3 className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-[18px] font-bold text-[#0F2C59] tracking-tight mt-3">
                Data & Analytics
              </h3>
              <p className="text-[13px] text-[#475569] mt-2 leading-relaxed">
                GIS spatial mapping, executive business intelligence dashboards, real-time event streaming, and automated regulatory reporting.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
              <span className="text-[11px] uppercase font-mono font-semibold px-2 py-0.5 rounded-[4px] bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0]">
                SPATIAL GIS
              </span>
              <Link
                to="/solutions/data-analytics"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#008DDA] group-hover:text-[#0077B6] transition-colors"
              >
                <span>Details</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Card 05: Infrastructure & IoT (Span 4) */}
          <div className="md:col-span-4 rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs p-6 flex flex-col justify-between transition-fin group">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#008DDA]">DOMAIN 05</span>
                <div className="h-8 w-8 rounded-[4px] bg-[#10B981]/10 text-[#10B981] flex items-center justify-center">
                  <ShieldCheck className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-[18px] font-bold text-[#0F2C59] tracking-tight mt-3">
                Infrastructure & IoT
              </h3>
              <p className="text-[13px] text-[#475569] mt-2 leading-relaxed">
                Cold-chain pharmaceutical monitoring, high-efficiency pure sine wave solar inverters, and high-availability cloud infrastructure.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
              <span className="text-[11px] uppercase font-mono font-semibold px-2 py-0.5 rounded-[4px] bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0]">
                TELEMETRY
              </span>
              <Link
                to="/services/cloud"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#008DDA] group-hover:text-[#0077B6] transition-colors"
              >
                <span>Details</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default WhatWeBuildSection
