import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { Button } from '../../components/ui/Button'
import {
  ArrowRight,
  Truck,
  Navigation,
  ShieldCheck,
  Radio,
  FileCheck2,
  Gauge,
  MapPin,
  CheckCircle2
} from 'lucide-react'

export const LogisticsPage: React.FC = () => {
  const capabilities = [
    { name: 'Hardware-Agnostic Telematics', icon: Radio, desc: 'Connects with OBD-II, CAN-Bus, satellite trackers, or mobile GPS with unified ingestion protocols.' },
    { name: 'Automated Dispatch & Routing', icon: Navigation, desc: 'Optimizes truck cargo allocations, waypoint sequences, and transit times based on road quality.' },
    { name: 'CAN-Bus Fuel Auditing', icon: Gauge, desc: 'Monitors fuel levels second-by-second to detect unauthorized siphoning, idling waste, and generator consumption.' },
    { name: 'Digital Proof of Delivery (ePOD)', icon: FileCheck2, desc: 'Offline mobile signature capture, timestamped photos of unloaded cargo, and instant consignee receipt generation.' },
    { name: 'Cold-Chain Telemetry Alerts', icon: ShieldCheck, desc: 'Integrated temperature & humidity sensors for pharmaceutical and perishable freight with emergency alarm broadcasts.' },
    { name: 'Carrier & Driver Management', icon: Truck, desc: 'Driver safety scoring, license validity tracking, hours-of-service compliance, and automated trip allowances.' }
  ]

  return (
    <div className="w-full text-left">
      <SEO
        title="Centrifuge Logistics & Mobility | Fleet Telematics & Dispatch Suite"
        description="Hardware-agnostic GPS fleet tracking, dispatch control room, and electronic proof of delivery software."
      />

      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-[#172333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-[#16C7D9] tracking-wider uppercase">
              CENTRIFUGE LOGISTICS & MOBILITY
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              Move smarter. Deliver with visibility.
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              We turn unpredictable transit corridors into audited, efficient supply chains with real-time GPS telematics, intelligent dispatch, and mobile driver apps.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Request Logistics Demo
                </Button>
              </Link>
              <Link to="/shop">
                <Button variant="outline" size="lg" className="bg-transparent text-white border-[#334155]">
                  Browse GPS & Telemetry Hardware
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-[#16C7D9]">
              Platform Modules
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] font-heading mt-2">
              End-to-end freight & dispatch infrastructure.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div
                  key={cap.name}
                  className="bg-white p-7 rounded-[14px] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="h-10 w-10 rounded-[8px] bg-[#0B1F33]/5 text-[#0B1F33] flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-[#16C7D9]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1F33] font-heading">
                      {cap.name}
                    </h3>
                    <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
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
