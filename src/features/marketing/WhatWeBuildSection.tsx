import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Activity, Truck, BarChart3, ShieldCheck } from 'lucide-react'

export const WhatWeBuildSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F9FA] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-[#16C7D9]">
            Core Domains & Engineering Capability
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-heading mt-2 tracking-tight">
            We build the systems businesses depend on.
          </h2>
          <p className="text-[#64748B] text-base mt-4">
            From national clinical workforce registries to heavy freight telematics and integrated commercial ERPs, we deliver engineered reliability.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 01: Enterprise Software (Span 7) */}
          <div className="md:col-span-7 bg-white rounded-[16px] border border-[#E2E8F0] p-8 flex flex-col justify-between hover:border-[#CBD5E1] transition-all group text-left">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#16C7D9]">01</span>
                <Layers className="h-6 w-6 text-[#0B1F33]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F33] font-heading mt-4">
                Enterprise Software
              </h3>
              <p className="text-sm text-[#64748B] mt-2 max-w-xl leading-relaxed">
                Modern ERP platforms, unified accounting, multi-warehouse inventory systems, and automated operational pipelines custom-tailored to high-growth organizations.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#111827]">
                Featured in Optimax Suite
              </span>
              <Link
                to="/solutions/optimax"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F33] group-hover:text-[#16C7D9] transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 02: Healthcare Technology (Span 5) */}
          <div className="md:col-span-5 bg-white rounded-[16px] border border-[#E2E8F0] p-8 flex flex-col justify-between hover:border-[#CBD5E1] transition-all group text-left">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#16C7D9]">02</span>
                <Activity className="h-6 w-6 text-[#0284C7]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F33] font-heading mt-4">
                Healthcare Technology
              </h3>
              <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
                Hospital information systems, national health workforce registries (HRHIS), digital medical credentialing, and interoperable health data infrastructure.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#111827]">
                Deployed with FMOH & NMCN
              </span>
              <Link
                to="/solutions/healthcare"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F33] group-hover:text-[#16C7D9] transition-colors"
              >
                <span>Explore Healthcare</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 03: Logistics & Mobility (Span 4) */}
          <div className="md:col-span-4 bg-white rounded-[16px] border border-[#E2E8F0] p-8 flex flex-col justify-between hover:border-[#CBD5E1] transition-all group text-left">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#16C7D9]">03</span>
                <Truck className="h-6 w-6 text-[#0B1F33]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F33] font-heading mt-4">
                Logistics & Mobility
              </h3>
              <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
                GPS telematics, automated dispatch, fuel auditing, route planning, and offline-capable mobile driver proof-of-delivery.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#111827]">
                Real-Time Telematics
              </span>
              <Link
                to="/solutions/logistics"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F33] group-hover:text-[#16C7D9] transition-colors"
              >
                <span>Details</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 04: Data & Analytics (Span 4) */}
          <div className="md:col-span-4 bg-white rounded-[16px] border border-[#E2E8F0] p-8 flex flex-col justify-between hover:border-[#CBD5E1] transition-all group text-left">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#16C7D9]">04</span>
                <BarChart3 className="h-6 w-6 text-[#16C7D9]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F33] font-heading mt-4">
                Data & Analytics
              </h3>
              <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
                GIS spatial mapping, executive business intelligence dashboards, real-time event streaming, and automated regulatory reporting.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#111827]">
                Spatial GIS & BI
              </span>
              <Link
                to="/solutions/data-analytics"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F33] group-hover:text-[#16C7D9] transition-colors"
              >
                <span>Details</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 05: Infrastructure & IoT (Span 4) */}
          <div className="md:col-span-4 bg-white rounded-[16px] border border-[#E2E8F0] p-8 flex flex-col justify-between hover:border-[#CBD5E1] transition-all group text-left">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#16C7D9]">05</span>
                <ShieldCheck className="h-6 w-6 text-[#071521]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F33] font-heading mt-4">
                Infrastructure & IoT
              </h3>
              <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
                Cold-chain pharmaceutical monitoring, high-efficiency pure sine wave solar inverters, and high-availability cloud infrastructure.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#111827]">
                Hardware & Telemetry
              </span>
              <Link
                to="/services/infrastructure"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F33] group-hover:text-[#16C7D9] transition-colors"
              >
                <span>Details</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
