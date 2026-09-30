import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { ArrowRight, BarChart3, Map, Cpu } from 'lucide-react'

export const DataAnalyticsPage: React.FC = () => {
  return (
    <div className="w-full text-left bg-[#000000] text-[#faf9f6]">
      <SEO
        title="Data Analytics & Spatial GIS Solutions | Centrifuge Group"
        description="Geospatial health mapping, real-time vehicle stream processing, and executive business intelligence dashboards."
      />

      {/* ─── Hero Header (Warp Obsidian #000000) ─── */}
      <section className="bg-[#000000] text-[#faf9f6] py-16 sm:py-24 border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684]">
              <span>BUSINESS SOLUTIONS · DATA & ANALYTICS</span>
            </div>
            <h1 className="text-[36px] sm:text-[56px] font-normal text-[#faf9f6] tracking-[-2.24px] leading-[0.98]">
              Data Management & Analytics
            </h1>
            <p className="text-[16px] text-[#868684] tracking-[-0.18px] leading-relaxed">
              We build real-time stream ingestion pipelines, spatial GIS mapping engines, and executive business intelligence dashboards that convert complex raw operational telemetry into clear organizational foresight.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-10 px-6 rounded-[33px] bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] text-[13px] font-semibold transition-colors"
              >
                <span>Consult Data Architects</span>
                <ArrowRight className="h-3.5 w-3.5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Main Grid (Graphite #121212) ─── */}
      <section className="py-20 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1e1e1d] p-8 rounded-[20px] border border-[#1e1e1d] hover:border-[#333333] transition-all flex flex-col justify-between group">
            <div>
              <div className="h-10 w-10 rounded-[8px] bg-[#121212] border border-[#333333] flex items-center justify-center group-hover:border-[#f0b66d] transition-colors mb-5">
                <Map className="h-5 w-5 text-[#f0b66d]" />
              </div>
              <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px]">
                Geospatial GIS Health Mapping
              </h3>
              <p className="text-[13px] text-[#868684] mt-2.5 leading-relaxed tracking-[-0.14px]">
                Interactive coordinate mapping of medical centers, cold chain depots, and primary healthcare clinics with population catchment radius analytics.
              </p>
            </div>
          </div>

          <div className="bg-[#1e1e1d] p-8 rounded-[20px] border border-[#1e1e1d] hover:border-[#333333] transition-all flex flex-col justify-between group">
            <div>
              <div className="h-10 w-10 rounded-[8px] bg-[#121212] border border-[#333333] flex items-center justify-center group-hover:border-[#f0b66d] transition-colors mb-5">
                <BarChart3 className="h-5 w-5 text-[#f0b66d]" />
              </div>
              <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px]">
                Executive BI Dashboards
              </h3>
              <p className="text-[13px] text-[#868684] mt-2.5 leading-relaxed tracking-[-0.14px]">
                Real-time charts and KPI aggregates eliminating static monthly spreadsheet reporting for senior directors and enterprise boards.
              </p>
            </div>
          </div>

          <div className="bg-[#1e1e1d] p-8 rounded-[20px] border border-[#1e1e1d] hover:border-[#333333] transition-all flex flex-col justify-between group">
            <div>
              <div className="h-10 w-10 rounded-[8px] bg-[#121212] border border-[#333333] flex items-center justify-center group-hover:border-[#f0b66d] transition-colors mb-5">
                <Cpu className="h-5 w-5 text-[#f0b66d]" />
              </div>
              <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px]">
                Telemetry Event Streaming
              </h3>
              <p className="text-[13px] text-[#868684] mt-2.5 leading-relaxed tracking-[-0.14px]">
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
