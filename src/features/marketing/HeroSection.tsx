import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Terminal, Layers } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <section className="relative bg-[#000000] text-[#faf9f6] pt-14 pb-20 lg:pt-20 lg:pb-28 border-b border-[#1e1e1d] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Display Headline (Matter 400 at 56px, -2.24px letter-spacing, line-height 0.96) */}
          <h1 className="text-[38px] sm:text-[48px] lg:text-[56px] font-normal tracking-[-2.24px] text-[#faf9f6] leading-[0.98] sm:leading-[0.96] max-w-4xl mx-auto">
            Digitize your business today
          </h1>

          {/* Subheading Body (Matter 400 at 16px, #868684, -0.18px letter-spacing) */}
          <p className="mt-5 text-[15px] sm:text-[16px] text-[#868684] tracking-[-0.18px] max-w-2xl mx-auto leading-[1.4]">
            We design and deliver enterprise software, healthcare platforms,
            logistics systems, and digital solutions that solve complex
            operational problems.
          </p>

          {/* Action Button Row (Ghost + Filled White Pill per warp_design.md §142-150) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-[22px] py-[10px] rounded-[33px] text-[14px] font-semibold bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] transition-colors duration-150 tracking-[-0.14px]"
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
                    <Terminal className="h-3 w-3 text-[#f0b66d]" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#faf9f6] tracking-[-0.18px] leading-tight">
                      Centrifuge ...
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Optimax Connected Operations */}
            <div className="lg:col-span-5 rounded-[20px] border border-[#1e1e1d] bg-[#000000] p-6 flex flex-col justify-between hover:border-[#333333] transition-colors group">
              {/* Caption Block */}
              <div className="flex items-start justify-between pb-4 border-b border-[#1e1e1d]">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-[4px] border border-[#333333] bg-[#121212] flex items-center justify-center">
                    <Layers className="h-3 w-3 text-[#faf9f6]" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#faf9f6] tracking-[-0.18px] leading-tight">
                      Optimax ERP
                    </h3>
                    <p className="text-[13px] text-[#868684] tracking-[-0.14px]">
                      Run finance, inventory, operations, reporting, and
                      automation from one intelligent system designed to keep
                      your business moving.
                    </p>
                  </div>
                </div>

                <span className="text-[10px] uppercase font-mono tracking-[1px] px-2 py-0.5 rounded-[50px] border border-[#333333] text-[#f0b66d]">
                  Everything your business needs.
                </span>
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
                  className="inline-flex items-center justify-center px-4 py-2 rounded-[33px] text-[13px] font-semibold bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] transition-colors"
                >
                  <span>Request Walkthrough</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
