import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import {
  ArrowRight,
  Truck,
  Navigation,
  ShieldCheck,
  Radio,
  FileCheck2,
  Gauge,
} from 'lucide-react'

export const LogisticsPage: React.FC = () => {
  const capabilities = [
    { name: 'Hardware-Agnostic Telematics', icon: Radio, desc: 'Connects with OBD-II, CAN-Bus, satellite trackers, or mobile GPS with unified ingestion protocols.' },
    { name: 'Automated Dispatch & Routing', icon: Navigation, desc: 'Optimizes truck cargo allocations, waypoint sequences, and transit times based on road quality.' },
    { name: 'CAN-Bus Fuel Auditing', icon: Gauge, desc: 'Monitors fuel levels second-by-second to detect unauthorized siphoning, idling waste, and generator consumption.' },
    { name: 'Digital Proof of Delivery (ePOD)', icon: FileCheck2, desc: 'Offline mobile signature capture, timestamped photos of unloaded cargo, and instant consignee receipt generation.' },
    { name: 'Cold-Chain Telemetry Alerts', icon: ShieldCheck, desc: 'Integrated temperature & humidity sensors for pharmaceutical and perishable freight with emergency alarm broadcasts.' },
    { name: 'Carrier & Driver Management', icon: Truck, desc: 'Driver safety scoring, license validity tracking, hours-of-service compliance, and automated trip allowances.' },
  ]

  return (
    <div className="w-full text-left bg-[#000000] text-[#faf9f6]">
      <SEO
        title="Centrifuge Logistics & Mobility | Fleet Telematics & Dispatch Suite"
        description="Hardware-agnostic GPS fleet tracking, dispatch control room, and electronic proof of delivery software."
      />

      {/* ─── Hero Header (Warp Obsidian #000000) ─── */}
      <section className="bg-[#000000] text-[#faf9f6] py-16 sm:py-24 border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684]">
              <span>CENTRIFUGE LOGISTICS & MOBILITY</span>
            </div>
            <h1 className="text-[36px] sm:text-[56px] font-normal text-[#faf9f6] tracking-[-2.24px] leading-[0.98]">
              Move smarter. Deliver with visibility.
            </h1>
            <p className="text-[16px] text-[#868684] tracking-[-0.18px] leading-relaxed">
              We turn unpredictable transit corridors into audited, efficient supply chains with real-time GPS telematics, intelligent dispatch, and mobile driver apps.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-10 px-6 rounded-[33px] bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] text-[13px] font-semibold transition-colors"
              >
                <span>Request Logistics Demo</span>
                <ArrowRight className="h-3.5 w-3.5 ml-2" />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center h-10 px-6 rounded-[33px] bg-transparent border border-[#333333] text-[#b4b4b2] hover:text-[#faf9f6] text-[13px] transition-colors"
              >
                <span>Browse Telemetry Hardware</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Platform Modules (Graphite #121212) ─── */}
      <section className="py-20 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#f0b66d]">
              PLATFORM MODULES
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-normal text-[#faf9f6] tracking-[-0.64px] mt-1">
              End-to-end freight & dispatch infrastructure.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div
                  key={cap.name}
                  className="bg-[#1e1e1d] p-7 rounded-[20px] border border-[#1e1e1d] hover:border-[#333333] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-10 w-10 rounded-[8px] bg-[#121212] border border-[#333333] flex items-center justify-center mb-4 group-hover:border-[#f0b66d] transition-colors">
                      <Icon className="h-5 w-5 text-[#f0b66d]" />
                    </div>
                    <h3 className="text-[18px] font-semibold text-[#faf9f6] tracking-[-0.18px]">
                      {cap.name}
                    </h3>
                    <p className="text-[13px] text-[#868684] mt-2.5 leading-relaxed tracking-[-0.14px]">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default LogisticsPage
