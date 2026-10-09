import React from 'react'

const LAYERS = [
  { id: 'users', label: 'Users & Organizations', sublabel: 'Web · Mobile · API clients' },
  { id: 'apps', label: 'Applications', sublabel: 'Optimax ERP · Health Systems · Logistics' },
  { id: 'api', label: 'API Gateway', sublabel: 'REST · GraphQL · WebSocket' },
  { id: 'cloud', label: 'Cloud Infrastructure', sublabel: 'Compute · Storage · Networking' },
  { id: 'data', label: 'Data Layer', sublabel: 'Databases · Warehouses · Streams' },
  { id: 'bi', label: 'Analytics & Insights', sublabel: 'BI dashboards · GIS · reporting' },
]

export const SystemArchitectureSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0B2A52] py-20 text-white lg:py-24">
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="hero-grid-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-[680px]">
          <h2 className="text-[34px] font-semibold leading-[1.04] tracking-[-0.05em] text-white sm:text-[44px] lg:text-[56px]">
            Built to connect the systems behind the business.
          </h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="space-y-4">
            {LAYERS.map((layer, index) => (
              <div key={layer.id} className="group">
                <div className="flex items-center gap-4 rounded-[16px] border border-white/10 bg-white/4 p-4 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.06)] transition-all duration-200 hover:bg-white/7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-300/20 bg-sky-400/10 text-[11px] font-semibold text-sky-100">
                    {index + 1}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] font-semibold text-white">{layer.label}</p>
                    <p className="mt-1 text-[12px] text-slate-300/80">{layer.sublabel}</p>
                  </div>

                  <div className="h-2.5 w-2.5 rounded-full bg-[#4cc3ff] shadow-[0_0_14px_rgba(76,195,255,0.8)]" />
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#0D1F39]/85 p-6 shadow-[0_30px_80px_rgba(2,7,18,0.32)] backdrop-blur-sm sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-100/80">Platform Architecture</div>
                <h3 className="mt-2 text-[28px] font-semibold tracking-[-0.04em] text-white">Operationally reliable by design.</h3>
              </div>
              <div className="rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-100">
                Live systems
              </div>
            </div>

            <p className="text-[15px] leading-7 text-slate-300/85">
              Every Centrifuge system is built on a layered architecture designed for real enterprise conditions: secure integrations, resilient data flows, high availability, and long-term operational continuity.
            </p>

            <div className="mt-7 space-y-4">
              {[
                'Offline-capable mobile and field applications',
                'Secure API integrations with third-party systems',
                'Real-time data pipelines and event streaming',
                'Multi-region cloud deployments with SLA guarantees',
                'HIPAA-aligned healthcare data handling',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[12px] border border-white/8 bg-white/2 p-3">
                  <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#60d4ff] shadow-[0_0_14px_rgba(96,212,255,0.9)]" />
                  <span className="text-[14px] leading-6 text-slate-200/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SystemArchitectureSection
