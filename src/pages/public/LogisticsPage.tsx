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
  'Eliminated paper delivery notes — digital ePOD with offline capability.',
  'Automated driver compliance alerts before licence or vehicle roadworthiness expiry.',
]

export const LogisticsPage: React.FC = () => {
  return (
    <div className="w-full text-left bg-[#F5F7FA] text-[#1A1A1A]">
      <SEO
        title="Centrifuge Logistics & Mobility | Fleet Telematics & Dispatch Suite"
        description="Hardware-agnostic GPS fleet tracking, dispatch control room, and electronic proof of delivery software."
      />

      {/* ─── Hero Header (UI/UX Spec §1.1 & §4.1) ─── */}
      <section className="bg-[#FFFFFF] text-[#1A1A1A] py-16 sm:py-20 border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-[32px] sm:text-[44px] font-bold text-[#0F2C59] tracking-tight leading-[1.2]">
              Fleet Telematics & Intelligent Dispatch Architecture
            </h1>
            <p className="text-[16px] text-[#475569] leading-relaxed max-w-2xl">
              Transform unpredictable transit corridors into audited, high-efficiency supply networks with sub-second GPS telematics, automated dispatch algorithms, CAN-Bus fuel sensors, and offline driver proof-of-delivery.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#008DDA] text-white hover:bg-[#0077B6] text-sm font-semibold transition-colors duration-200"
              >
                <span>Request Logistics Walkthrough</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] bg-transparent border border-[#008DDA] text-[#008DDA] hover:bg-[#008DDA] hover:text-white text-sm font-semibold transition-all duration-200"
              >
                <span>Browse Telemetry Hardware</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Platform Capabilities (UI/UX Spec §3.3 Data Card Module) ─── */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left mb-12">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#008DDA]">
              PLATFORM CAPABILITIES
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0F2C59] tracking-tight mt-2">
              End-to-End Fleet & Dispatch Infrastructure
            </h2>
            <p className="text-[14px] text-[#64748B] mt-2">
              Engineered to endure severe heat, remote satellite gaps, and multi-depot transit operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div
                  key={cap.name}
                  className="bg-[#FFFFFF] p-6 rounded-[8px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs transition-fin flex flex-col justify-between group text-left"
                >
                  <div>
                    <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center mb-4 group-hover:bg-[#008DDA] group-hover:text-white transition-colors duration-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-[18px] font-bold text-[#0F2C59] tracking-tight">
                      {cap.name}
                    </h3>
                    <p className="text-[13px] text-[#475569] mt-2 leading-relaxed">
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
                  <span className="text-[11px] font-mono font-bold text-[#008DDA]">{i + 1}</span>
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
