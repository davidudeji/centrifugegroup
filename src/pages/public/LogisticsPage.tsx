import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { PageHero } from '../../components/ui/PageHero'
import { ArrowRight, Truck, Navigation, ShieldCheck, Radio, FileCheck2, Gauge } from 'lucide-react'

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
    <div className="w-full bg-[#F7F9FA]">
      <SEO
        title="Centrifuge Logistics & Mobility | Fleet Telematics & Dispatch Suite"
        description="Hardware-agnostic GPS fleet tracking, dispatch control room, and electronic proof of delivery software."
      />

      <PageHero
        eyebrow="Centrifuge Logistics & Mobility"
        title={<>Fleet telematics and dispatch <span className="text-[#16C7D9]">done right.</span></>}
        description="Sub-second GPS/CAN-Bus telematics, automated dispatch, fuel auditing, digital ePOD, and cold-chain monitoring — purpose-built for African logistics operations."
      >
        <div className="pt-6 flex flex-wrap items-center gap-4">
          <Link to="/contact" className="btn-accent" id="logistics-hero-cta">
            Request Live Demo <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/solutions" className="btn-outline-white">All Solutions</Link>
        </div>
      </PageHero>

      {/* Capabilities */}
      <section className="section-py bg-white border-b border-[#E2E8F0]">
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <div className="badge-eyebrow mb-4">Core Capabilities</div>
            <h2 className="text-h2 text-[#0B1F33]">Everything your fleet operation needs.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div key={cap.name} className="card-feature group">
                  <div className="h-11 w-11 rounded-[10px] bg-[#0B1F33] flex items-center justify-center mb-5 group-hover:bg-[#16C7D9] transition-colors duration-200">
                    <Icon className="h-5 w-5 text-[#16C7D9] group-hover:text-[#0B1F33] transition-colors" />
                  </div>
                  <h3 className="text-[16px] font-heading font-700 text-[#0B1F33] mb-2">{cap.name}</h3>
                  <p className="text-[13px] text-[#64748B] leading-relaxed">{cap.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-py bg-[#0B1F33] text-white">
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <div className="badge-eyebrow-dark mb-4">Proven Outcomes</div>
            <h2 className="text-h2 text-white">What clients achieve with Centrifuge Logistics.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {outcomes.map((o, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-[16px] bg-white/[0.05] border border-white/[0.08]">
                <div className="h-7 w-7 rounded-full bg-[#16C7D9]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[11px] font-mono font-bold text-[#16C7D9]">{i + 1}</span>
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
