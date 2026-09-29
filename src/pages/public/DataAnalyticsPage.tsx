import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { Button } from '../../components/ui/Button'
import { ArrowRight, BarChart3, Map, Database, Cpu, CheckCircle2 } from 'lucide-react'

export const DataAnalyticsPage: React.FC = () => {
  return (
    <div className="w-full text-left">
      <SEO
        title="Data Analytics & Spatial GIS Solutions | Centrifuge Group"
        description="Geospatial health mapping, real-time vehicle stream processing, and executive business intelligence dashboards."
      />

      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-[#172333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-[#16C7D9] tracking-wider uppercase">
              DATA SCIENCE & GEOSPATIAL INTELLIGENCE
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              Turn operational noise into clear foresight.
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              We build real-time stream ingestion pipelines, spatial GIS mapping engines, and executive analytics dashboards that give leaders instant operational clarity.
            </p>
            <div className="pt-4 flex gap-3">
              <Link to="/contact">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Consult Data Architects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[16px] border border-[#E2E8F0] space-y-3">
            <Map className="h-8 w-8 text-[#16C7D9]" />
            <h3 className="text-lg font-bold text-[#0B1F33] font-heading">
              Geospatial GIS Health Mapping
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Interactive coordinate mapping of medical centers, cold chain depots, and primary healthcare clinics with population catchment radius analytics.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[16px] border border-[#E2E8F0] space-y-3">
            <BarChart3 className="h-8 w-8 text-[#0B1F33]" />
            <h3 className="text-lg font-bold text-[#0B1F33] font-heading">
              Executive BI Dashboards
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Real-time charts and KPI aggregates eliminating static monthly spreadsheet reporting for senior directors and boards.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[16px] border border-[#E2E8F0] space-y-3">
            <Cpu className="h-8 w-8 text-[#10B981]" />
            <h3 className="text-lg font-bold text-[#0B1F33] font-heading">
              Telemetry Event Streaming
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              High-throughput MQTT and WebSocket stream brokers capable of processing tens of thousands of IoT sensor pings per second.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default DataAnalyticsPage
