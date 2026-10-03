import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { ArrowRight, BarChart3, Map, Cpu } from 'lucide-react'

export const DataAnalyticsPage: React.FC = () => {
  return (
    <div className="w-full text-left bg-white text-[#0F172A]">
      <SEO
        title="Data Analytics & Spatial GIS Solutions | Centrifuge Group"
        description="Geospatial health mapping, real-time vehicle stream processing, and executive business intelligence dashboards."
      />

      {/* Hero Header */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">BUSINESS SOLUTIONS · DATA & ANALYTICS</span>
            </div>
            <h1
              className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              Data Management & Analytics
            </h1>
            <p className="text-[16px] text-[#94A3B8] leading-relaxed max-w-2xl">
              We build real-time stream ingestion pipelines, spatial GIS mapping engines, and executive business intelligence dashboards that convert complex raw operational telemetry into clear organizational foresight.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[6px] bg-[#F27A22] text-[#0F172A] hover:bg-[#E06910] text-[14px] font-semibold transition-colors"
              >
                <span>Consult Data Architects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-7 rounded-[12px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200 flex flex-col group">
            <div className="h-10 w-10 rounded-[8px] bg-[#FFF7ED] border border-[#FDBA74]/30 flex items-center justify-center mb-5">
              <Map className="h-5 w-5 text-[#F27A22]" />
            </div>
            <h3 className="text-[18px] font-bold text-[#0F172A] leading-snug mb-2">
              Geospatial GIS Health Mapping
            </h3>
            <p className="text-[13px] text-[#475569] leading-relaxed">
              Interactive coordinate mapping of medical centers, cold chain depots, and primary healthcare clinics with population catchment radius analytics.
            </p>
          </div>

          <div className="bg-white p-7 rounded-[12px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200 flex flex-col group">
            <div className="h-10 w-10 rounded-[8px] bg-[#FFF7ED] border border-[#FDBA74]/30 flex items-center justify-center mb-5">
              <BarChart3 className="h-5 w-5 text-[#F27A22]" />
            </div>
            <h3 className="text-[18px] font-bold text-[#0F172A] leading-snug mb-2">
              Executive BI Dashboards
            </h3>
            <p className="text-[13px] text-[#475569] leading-relaxed">
              Real-time charts and KPI aggregates eliminating static monthly spreadsheet reporting for senior directors and enterprise boards.
            </p>
          </div>

          <div className="bg-white p-7 rounded-[12px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200 flex flex-col group">
            <div className="h-10 w-10 rounded-[8px] bg-[#FFF7ED] border border-[#FDBA74]/30 flex items-center justify-center mb-5">
              <Cpu className="h-5 w-5 text-[#F27A22]" />
            </div>
            <h3 className="text-[18px] font-bold text-[#0F172A] leading-snug mb-2">
              Telemetry Event Streaming
            </h3>
            <p className="text-[13px] text-[#475569] leading-relaxed">
              High-throughput MQTT and WebSocket stream brokers capable of processing tens of thousands of IoT sensor pings per second.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DataAnalyticsPage
