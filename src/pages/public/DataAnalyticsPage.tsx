import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { ArrowRight, BarChart3, Map, Cpu } from 'lucide-react'

export const DataAnalyticsPage: React.FC = () => {
  return (
    <div className="w-full text-left bg-[#F5F7FA] text-[#1A1A1A]">
      <SEO
        title="Data Analytics & Spatial GIS Solutions | Centrifuge Group"
        description="Geospatial health mapping, real-time vehicle stream processing, and executive business intelligence dashboards."
      />

      {/* ─── Hero Header (UI/UX Spec §1.1 & §4.1) ─── */}
      <section className="bg-[#FFFFFF] text-[#1A1A1A] py-16 sm:py-20 border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-[32px] sm:text-[44px] font-bold text-[#0F2C59] tracking-tight leading-[1.2]">
              Data Architecture, Spatial GIS & Business Intelligence
            </h1>
            <p className="text-[16px] text-[#475569] leading-relaxed max-w-2xl">
              We engineer real-time event streaming pipelines, interactive spatial GIS coordinate mappers, and executive KPI intelligence dashboards that convert dense operational telemetry into decisive institutional foresight.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#008DDA] text-white hover:bg-[#0077B6] text-sm font-semibold transition-colors duration-200"
              >
                <span>Consult Data Architects</span>
                <ArrowRight className="h-4 w-4" />
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Main Grid (UI/UX Spec §3.3 Data Card Module) ─── */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-[8px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs transition-fin flex flex-col justify-between group text-left">
            <div>
              <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center mb-5 group-hover:bg-[#008DDA] group-hover:text-white transition-colors duration-200">
                <Map className="h-5 w-5" />
              </div>
              <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight">
                Geospatial GIS Health Mapping
              </h3>
              <p className="text-[14px] text-[#475569] mt-2.5 leading-relaxed">
                Interactive coordinate mapping of medical centers, cold chain depots, and primary healthcare clinics with population catchment radius analytics.
              </p>
            </div>
          </div>

          <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-[8px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs transition-fin flex flex-col justify-between group text-left">
            <div>
              <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center mb-5 group-hover:bg-[#008DDA] group-hover:text-white transition-colors duration-200">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight">
                Executive BI Dashboards
              </h3>
              <p className="text-[14px] text-[#475569] mt-2.5 leading-relaxed">
                Real-time charts and KPI aggregates eliminating static monthly spreadsheet reporting for senior directors and enterprise boards.
              </p>
            </div>
          </div>

          <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-[8px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs transition-fin flex flex-col justify-between group text-left">
            <div>
              <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center mb-5 group-hover:bg-[#008DDA] group-hover:text-white transition-colors duration-200">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight">
                Telemetry Event Streaming
              </h3>
              <p className="text-[14px] text-[#475569] mt-2.5 leading-relaxed">
                High-throughput MQTT and WebSocket stream brokers capable of processing tens of thousands of IoT sensor pings per second.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DataAnalyticsPage
