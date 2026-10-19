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

const capabilities = [
  { name: 'Hardware-Agnostic Telematics', icon: Radio, desc: 'Connects with OBD-II, CAN-Bus, satellite trackers, or mobile GPS with unified ingestion protocols.' },
  { name: 'Automated Dispatch & Routing', icon: Navigation, desc: 'Optimises truck cargo allocations, waypoint sequences, and transit times based on road quality.' },
  { name: 'CAN-Bus Fuel Auditing', icon: Gauge, desc: 'Monitors fuel levels second-by-second to detect unauthorised siphoning, idling waste, and generator consumption.' },
  { name: 'Digital Proof of Delivery (ePOD)', icon: FileCheck2, desc: 'Offline mobile signature capture, timestamped photos of unloaded cargo, and instant consignee receipt generation.' },
  { name: 'Cold-Chain Telemetry Alerts', icon: ShieldCheck, desc: 'Integrated temperature & humidity sensors for pharmaceutical and perishable freight with emergency alarm broadcasts.' },
  { name: 'Carrier & Driver Management', icon: Truck, desc: 'Driver safety scoring, licence validity tracking, hours-of-service compliance, and automated trip allowances.' },
]

const outcomes = [
  'Reduced unauthorised fuel losses to near-zero across multi-depot fleets.',
  'Real-time visibility of all vehicles, cargo status, and ETAs from a single control room.',
  'Eliminated paper delivery notes â€” digital ePOD with offline capability.',
  'Automated driver compliance alerts before licence or vehicle roadworthiness expiry.',
]

export const LogisticsPage: React.FC = () => {
  return (
    <div className="dark-page">
      <SEO
        title="Centrifuge Logistics & Mobility | Fleet Telematics & Dispatch Suite"
        description="Hardware-agnostic GPS fleet tracking, dispatch control room, and electronic proof of delivery software."
      />

      {/* â”€â”€â”€ Hero Header â”€â”€â”€ */}
      <section className="dark-section-hero pt-32 pb-20 sm:pt-36 sm:pb-24">
<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 dark-badge">
              <span className="h-2 w-2 rounded-full bg-[#E87916] ring-4 ring-[#E87916]/20" aria-hidden="true" />
              <span>Logistics & Telematics Architecture</span>
            </div>
            <h1 className="text-[32px] sm:text-[44px] font-bold text-[#F0F4FF] tracking-tight leading-[1.2]">
              Fleet Telematics & Intelligent Dispatch Architecture
            </h1>
            <p className="text-[16px] text-[#8BA4C8] leading-relaxed max-w-2xl">
              Transform unpredictable transit corridors into audited, high-efficiency supply networks with sub-second GPS telematics, automated dispatch algorithms, CAN-Bus fuel sensors, and offline driver proof-of-delivery.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] bg-[#E87916] text-white shadow-[0_10px_24px_rgba(232,121,22,0.28)] hover:bg-[#D0690E] hover:shadow-[0_14px_30px_rgba(232,121,22,0.36)] hover:-translate-y-0.5 text-sm font-semibold transition-all duration-200"
              >
                <span>Request Logistics Walkthrough</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] bg-white border border-white/20 text-[#102A43] hover:border-[#0B1F33]/40 hover:bg-white/[0.08] hover:text-white hover:-translate-y-0.5 text-sm font-semibold transition-all duration-200"
              >
                <span>Browse Telemetry Hardware</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Platform Capabilities (UI/UX Spec Â§3.3 Data Card Module) â”€â”€â”€ */}
      <section className="dark-section-b py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left mb-12">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#60ABFF]">
              PLATFORM CAPABILITIES
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#F0F4FF] tracking-tight mt-2">
              End-to-End Fleet & Dispatch Infrastructure
            </h2>
            <p className="text-[14px] text-[#8BA4C8] mt-2">
              Engineered to endure severe heat, remote satellite gaps, and multi-depot transit operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div
                  key={cap.name}
                  className="dark-card p-6"
                >
                  <div>
                    <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#F0F4FF] flex items-center justify-center mb-4 group-hover:bg-[rgba(7,86,165,0.5)] transition-colors duration-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-[18px] font-bold text-[#F0F4FF] tracking-tight">
                      {cap.name}
                    </h3>
                    <p className="text-[13px] text-[#8BA4C8] mt-2 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-py bg-[#0F2C59] text-white">
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <h2 className="text-h2 text-white">What clients achieve with Centrifuge Logistics.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {outcomes.map((o, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-[16px] bg-white/[0.05] border border-white/[0.08]">
                <div className="h-7 w-7 rounded-[4px] bg-[#008DDA]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[11px] font-mono font-bold text-[#60ABFF]">{i + 1}</span>
                </div>
                <p className="text-[15px] text-[#94A3B8] leading-relaxed">{o}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn-accent" id="logistics-outcomes-cta">
              Talk to an Expert <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/case-studies" className="btn-outline-white">View Case Studies</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LogisticsPage



