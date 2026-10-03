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
    <div className="w-full text-left bg-white text-[#0F172A]">
      <SEO
        title="Centrifuge Logistics & Mobility | Fleet Telematics & Dispatch Suite"
        description="Hardware-agnostic GPS fleet tracking, dispatch control room, and electronic proof of delivery software."
      />

      {/* Hero Header */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">CENTRIFUGE LOGISTICS & MOBILITY</span>
            </div>
            <h1
              className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              Move smarter. Deliver with visibility.
            </h1>
            <p className="text-[16px] text-[#94A3B8] leading-relaxed">
              We turn unpredictable transit corridors into audited, efficient supply chains with real-time GPS telematics, intelligent dispatch, and mobile driver apps.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[6px] bg-[#F27A22] text-[#0F172A] hover:bg-[#E06910] text-[14px] font-semibold transition-colors"
              >
                <span>Request Logistics Demo</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[6px] bg-transparent border border-white/20 text-white hover:border-white/40 text-[14px] font-medium transition-colors"
              >
                <span>Browse Telemetry Hardware</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Modules */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">PLATFORM MODULES</span>
            </div>
            <h2
              className="font-bold text-[#0F172A] leading-[1.1] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
            >
              End-to-end freight & dispatch infrastructure.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div
                  key={cap.name}
                  className="bg-white p-6 rounded-[12px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200 flex flex-col group"
                >
                  <div className="h-10 w-10 rounded-[8px] bg-[#FFF7ED] border border-[#FDBA74]/30 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-[#F27A22]" />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#0F172A] leading-snug mb-2">
                    {cap.name}
                  </h3>
                  <p className="text-[13px] text-[#475569] leading-relaxed">
                    {cap.desc}
                  </p>
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
