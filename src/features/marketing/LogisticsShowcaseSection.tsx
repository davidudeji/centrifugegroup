import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Truck, Navigation, MapPin, Gauge, Radio, ShieldCheck } from 'lucide-react'

export const LogisticsShowcaseSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#121212] border-b border-[#1e1e1d] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Storytelling */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684]">
              <Radio className="h-3 w-3 animate-pulse text-[#cbb0f7]" />
              <span>CENTRIFUGE LOGISTICS & MOBILITY</span>
            </div>

            <h2 className="text-[32px] sm:text-[42px] font-normal text-[#faf9f6] tracking-[-1.13px] leading-[1.05]">
              Move smarter. Deliver with visibility.
            </h2>

            <p className="text-[15px] text-[#868684] tracking-[-0.14px] leading-relaxed">
              We engineer hardware-agnostic telematics, real-time dispatch control rooms, and mobile proof-of-delivery applications that turn complex freight corridors into predictable, audited supply lines.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-[4px] bg-[#1e1e1d] border border-[#333333] flex items-center justify-center shrink-0 mt-0.5">
                  <Navigation className="h-3 w-3 text-[#cbb0f7]" />
                </div>
                <div className="text-[13px] tracking-[-0.14px]">
                  <span className="font-semibold text-[#faf9f6]">Live Telematics & Geofencing:</span>{' '}
                  <span className="text-[#868684]">Second-by-second coordinate tracking with automated geofence triggers and harsh braking alerts.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-[4px] bg-[#1e1e1d] border border-[#333333] flex items-center justify-center shrink-0 mt-0.5">
                  <Gauge className="h-3 w-3 text-[#cbb0f7]" />
                </div>
                <div className="text-[13px] tracking-[-0.14px]">
                  <span className="font-semibold text-[#faf9f6]">Fuel & Diagnostic Auditing:</span>{' '}
                  <span className="text-[#868684]">CAN-Bus sensor integration monitoring fuel drop levels and engine diagnostics in real time.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-[4px] bg-[#1e1e1d] border border-[#333333] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="h-3 w-3 text-[#cbb0f7]" />
                </div>
                <div className="text-[13px] tracking-[-0.14px]">
                  <span className="font-semibold text-[#faf9f6]">Digital Proof of Delivery (ePOD):</span>{' '}
                  <span className="text-[#868684]">Offline cryptographic signatures and timestamped photo capture straight from driver handhelds.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link
                to="/solutions/logistics"
                className="inline-flex items-center justify-center px-[22px] py-[10px] rounded-[33px] text-[14px] font-semibold bg-[#ffffff] text-[#080808] hover:bg-[#e3e2e0] transition-colors duration-150 tracking-[-0.14px]"
              >
                <span>Explore Logistics Platform</span>
                <ArrowRight className="h-3.5 w-3.5 ml-2" />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-[20px] py-[10px] rounded-[33px] text-[14px] font-normal bg-transparent border border-[#333333] text-[#b4b4b2] hover:border-[#b4b4b2] hover:text-[#faf9f6] transition-colors duration-150 tracking-[-0.14px]"
              >
                <span>View Telemetry Hardware</span>
              </Link>
            </div>
          </div>

          {/* Right Column: High-tech Map & Dispatch Cockpit */}
          <div className="lg:col-span-7">
            <div className="rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] p-5 text-left">
              {/* Telematics Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-[#333333] text-[12px]">
                <div className="flex items-center gap-2 text-[#faf9f6] font-mono">
                  <Truck className="h-3.5 w-3.5 text-[#cbb0f7]" />
                  <span>DISPATCH CONTROL HUB · CORRIDOR MONITOR</span>
                </div>
                <span className="px-2 py-0.5 rounded-[50px] border border-[#333333] text-[#b4b4b2] font-mono text-[10px]">
                  320 VEHICLES ACTIVE
                </span>
              </div>

              {/* Graphical Map Simulation Panel */}
              <div className="relative mt-4 h-64 sm:h-72 rounded-[12px] bg-[#000000] overflow-hidden border border-[#1e1e1d] flex items-center justify-center">
                {/* SVG Route lines and node markers */}
                <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#1e1e1d" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Transit line connecting nodes */}
                  <path
                    d="M 60 180 Q 180 80 340 140 T 580 100"
                    fill="none"
                    stroke="#cbb0f7"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                  />
                </svg>

                {/* Simulated Waypoint Pins */}
                <div className="absolute left-[10%] bottom-[20%] p-2 rounded-[7px] bg-[#121212] border border-[#333333] text-[#faf9f6] text-[11px]">
                  <div className="font-semibold flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-[#cbb0f7]" /> Lagos Port Terminal
                  </div>
                  <div className="text-[10px] text-[#868684]">Departed: 06:14 AM</div>
                </div>

                <div className="absolute left-[48%] top-[30%] p-2 rounded-[7px] bg-[#121212] border border-[#cbb0f7]/60 text-[#faf9f6] text-[11px]">
                  <div className="font-semibold flex items-center gap-1">
                    <Truck className="h-3 w-3 text-[#cbb0f7]" /> Truck #CFG-882 (In-Transit)
                  </div>
                  <div className="text-[10px] text-[#cbb0f7]">Speed: 74 km/h · Fuel 86%</div>
                </div>

                <div className="absolute right-[8%] top-[18%] p-2 rounded-[7px] bg-[#121212] border border-[#333333] text-[#faf9f6] text-[11px]">
                  <div className="font-semibold flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-[#868684]" /> Abuja Regional Depot
                  </div>
                  <div className="text-[10px] text-[#868684]">ETA: 03:45 PM (On-Time)</div>
                </div>
              </div>

              {/* Bottom Telemetry Cards */}
              <div className="mt-4 grid grid-cols-3 gap-2.5 text-center text-xs">
                <div className="p-2.5 rounded-[7px] bg-[#121212] border border-[#1e1e1d]">
                  <span className="text-[10px] text-[#868684] uppercase tracking-[1px] block">Route Efficiency</span>
                  <span className="text-[14px] font-semibold text-[#faf9f6] font-mono">98.2%</span>
                </div>
                <div className="p-2.5 rounded-[7px] bg-[#121212] border border-[#1e1e1d]">
                  <span className="text-[10px] text-[#868684] uppercase tracking-[1px] block">Fuel Anomalies</span>
                  <span className="text-[14px] font-semibold text-[#cbb0f7] font-mono">0 Detected</span>
                </div>
                <div className="p-2.5 rounded-[7px] bg-[#121212] border border-[#1e1e1d]">
                  <span className="text-[10px] text-[#868684] uppercase tracking-[1px] block">Average POD Time</span>
                  <span className="text-[14px] font-semibold text-[#faf9f6] font-mono">1.8 Mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default LogisticsShowcaseSection
