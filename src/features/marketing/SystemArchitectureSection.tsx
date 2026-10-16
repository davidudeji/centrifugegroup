import React from 'react'

const LAYERS = [
  { id: 'users', label: 'Users & Organizations', sublabel: 'Web · Mobile · API clients' },
  { id: 'apps', label: 'Applications', sublabel: 'Optimax ERP · Health Systems · Logistics' },
  { id: 'api', label: 'API Gateway', sublabel: 'REST · GraphQL · WebSocket' },
  { id: 'cloud', label: 'Cloud Infrastructure', sublabel: 'Compute · Storage · Networking' },
  { id: 'data', label: 'Data Layer', sublabel: 'Databases · Warehouses · Streams' },
  { id: 'bi', label: 'Analytics & Insights', sublabel: 'BI dashboards · GIS · reporting' },
]

const CAPABILITIES = [
  'Offline-capable mobile and field applications',
  'Secure API integrations with third-party systems',
  'Real-time data pipelines and event streaming',
  'Multi-region cloud deployments with SLA guarantees',
  'HIPAA-aligned healthcare data handling',
]



export const SystemArchitectureSection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10 py-20 text-white lg:py-28"
      style={{ background: 'linear-gradient(180deg, #0D2240 0%, #071521 100%)' }}
    >
      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.1) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(ellipse 100% 80% at 50% 50%, black 20%, transparent 85%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 max-w-[600px]">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#F28C28]" aria-hidden="true" />
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F28C28]">
              Platform Architecture
            </p>
          </div>
          <h2
            className="text-white"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3.25rem)',
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: '-0.045em',
            }}
          >
            Built to connect the systems behind the business.
          </h2>
          <p className="mt-4 text-[1rem] leading-[1.8] text-slate-300/65">
            Every Centrifuge system is built on a layered architecture designed for real enterprise
            conditions: secure integrations, resilient data flows, high availability, and long-term
            operational continuity.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Left: Layer stack */}
          <div className="space-y-2">
            {LAYERS.map((layer, index) => (
              <div
                key={layer.id}
                className="group flex items-center gap-4 rounded-[12px] border border-white/8 bg-white/3 p-4 transition-all duration-200 hover:bg-white/6 hover:border-white/12"
              >
                {/* Step number */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/4 text-[12px] font-bold text-[#E87916]">
                  {index + 1}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-[0.9375rem] font-semibold text-white">{layer.label}</p>
                  <p className="mt-0.5 text-[0.75rem] text-slate-300/60">{layer.sublabel}</p>
                </div>

                {/* Live indicator */}
                <div
                  className="h-2 w-2 shrink-0 rounded-full bg-[#E87916] opacity-60 shadow-[0_0_8px_rgba(232,121,22,0.7)] group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>

          {/* Right: Panel */}
          <div className="rounded-[20px] border border-white/10 bg-[#071521]/90 p-7 shadow-[0_30px_80px_rgba(2,7,18,0.4)] sm:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-100/65 mb-3">
                  Infrastructure Design
                </p>
                <h3 className="text-[1.5rem] font-bold leading-tight tracking-[-0.035em] text-white">
                  Operationally reliable by design.
                </h3>
              </div>

            </div>

            <div className="space-y-2.5">
              {CAPABILITIES.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[10px] border border-white/6 bg-white/2 p-3"
                >
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#60d4ff] shadow-[0_0_10px_rgba(96,212,255,0.8)]"
                    aria-hidden="true"
                  />
                  <span className="text-[0.875rem] leading-[1.65] text-slate-200/80">{item}</span>
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
