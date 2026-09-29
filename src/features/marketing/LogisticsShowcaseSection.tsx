import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { ArrowRight, Truck, Navigation, MapPin, Gauge, Radio, ShieldCheck } from 'lucide-react'

export const LogisticsShowcaseSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Storytelling */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#0284C7]/10 border border-[#0284C7]/20 text-xs font-semibold text-[#0369A1]">
              <Radio className="h-3 w-3 animate-pulse text-[#0284C7]" />
              <span>CENTRIFUGE LOGISTICS & MOBILITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-heading tracking-tight leading-[1.15]">
              Move smarter.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] to-[#14B8A6]">
                Deliver with visibility.
              </span>
            </h2>

            <p className="text-base text-[#64748B] leading-relaxed">
              We engineer hardware-agnostic telematics, real-time dispatch control rooms, and mobile proof-of-delivery applications that turn complex freight corridors into predictable, audited supply lines.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-[4px] bg-[#16C7D9]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Navigation className="h-3 w-3 text-[#0E7490]" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-[#111827]">Live Telematics & Geofencing:</span>{' '}
                  <span className="text-[#64748B]">Second-by-second coordinate tracking with automated geofence triggers and harsh braking alerts.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-[4px] bg-[#16C7D9]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Gauge className="h-3 w-3 text-[#0E7490]" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-[#111827]">Fuel & Diagnostic Auditing:</span>{' '}
                  <span className="text-[#64748B]">CAN-Bus sensor integration monitoring fuel drop levels and engine diagnostics in real time.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-[4px] bg-[#16C7D9]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="h-3 w-3 text-[#0E7490]" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-[#111827]">Digital Proof of Delivery (ePOD):</span>{' '}
                  <span className="text-[#64748B]">Offline cryptographic signatures and timestamped photo capture straight from driver handhelds.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <Link to="/solutions/logistics">
                <Button variant="dark" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Explore Logistics Platform
                </Button>
              </Link>
              <Link to="/shop">
                <Button variant="outline" size="md">
                  View Telemetry Hardware
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: High-tech Map & Dispatch Mockup */}
          <div className="lg:col-span-7">
            <div className="rounded-[16px] bg-[#071521] border border-[#172333] shadow-xl overflow-hidden p-4 text-left">
              {/* Telematics Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-[#1E293B] text-xs">
                <div className="flex items-center gap-2 text-white font-mono">
                  <Truck className="h-4 w-4 text-[#16C7D9]" />
                  <span>DISPATCH CONTROL HUB · ACTIVE CORRIDOR</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#10B981]/20 text-[#34D399] font-mono text-[11px]">
                  320 VEHICLES ACTIVE
                </span>
              </div>

              {/* Graphical Map Simulation Panel */}
              <div className="relative mt-3 h-64 sm:h-72 rounded-[10px] bg-[#0B1F33] overflow-hidden border border-[#1E293B] flex items-center justify-center">
                {/* SVG Route lines and node markers */}
                <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E293B" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Transit line connecting nodes */}
                  <path
                    d="M 60 180 Q 180 80 340 140 T 580 100"
                    fill="none"
                    stroke="#16C7D9"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                  />
                </svg>

                {/* Simulated Waypoint Pins */}
                <div className="absolute left-[12%] bottom-[25%] p-2 rounded-[8px] bg-[#071521]/90 border border-[#16C7D9] text-white text-[11px] shadow-lg">
                  <div className="font-bold flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-[#16C7D9]" /> Lagos Port Terminal
                  </div>
                  <div className="text-[10px] text-[#94A3B8]">Departed: 06:14 AM</div>
                </div>

                <div className="absolute left-[50%] top-[35%] p-2 rounded-[8px] bg-[#071521]/90 border border-[#10B981] text-white text-[11px] shadow-lg">
                  <div className="font-bold flex items-center gap-1">
                    <Truck className="h-3 w-3 text-[#10B981]" /> Truck #CFG-882 (In-Transit)
                  </div>
                  <div className="text-[10px] text-[#34D399]">Speed: 74 km/h · Fuel 86%</div>
                </div>

                <div className="absolute right-[10%] top-[20%] p-2 rounded-[8px] bg-[#071521]/90 border border-[#64748B] text-white text-[11px] shadow-lg">
                  <div className="font-bold flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-[#94A3B8]" /> Abuja Regional Depot
                  </div>
                  <div className="text-[10px] text-[#94A3B8]">ETA: 03:45 PM (On-Time)</div>
                </div>
              </div>

              {/* Bottom Telemetry Cards */}
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-[6px] bg-[#0B1F33] border border-[#1E293B]">
                  <span className="text-[10px] text-[#94A3B8] uppercase block">Route Efficiency</span>
                  <span className="text-sm font-bold text-white font-mono">98.2%</span>
                </div>
                <div className="p-2.5 rounded-[6px] bg-[#0B1F33] border border-[#1E293B]">
                  <span className="text-[10px] text-[#94A3B8] uppercase block">Fuel Anomalies</span>
                  <span className="text-sm font-bold text-[#10B981] font-mono">0 Detected</span>
                </div>
                <div className="p-2.5 rounded-[6px] bg-[#0B1F33] border border-[#1E293B]">
                  <span className="text-[10px] text-[#94A3B8] uppercase block">Average POD Time</span>
                  <span className="text-sm font-bold text-[#16C7D9] font-mono">1.8 Mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
