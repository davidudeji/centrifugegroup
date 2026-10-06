import React, { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'

const LAYERS = [
  { id: 'users',   label: 'Users & Organizations', sublabel: 'Web · Mobile · API clients',          color: '#008DDA' },
  { id: 'apps',    label: 'Applications',           sublabel: 'Optimax ERP · Health Systems · Logistics', color: '#008DDA' },
  { id: 'api',     label: 'API Gateway',            sublabel: 'REST · GraphQL · WebSocket',          color: '#008DDA' },
  { id: 'cloud',   label: 'Cloud Infrastructure',   sublabel: 'Compute · Storage · Networking',      color: '#008DDA' },
  { id: 'data',    label: 'Data Layer',             sublabel: 'Databases · Data Warehouses · Streams', color: '#008DDA' },
  { id: 'bi',      label: 'Analytics & Insights',   sublabel: 'BI Dashboards · GIS · Reporting',     color: '#008DDA' },
]

export const SystemArchitectureSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#0F2C59', borderBottom: '1px solid rgba(255,255,255,0.06)' }} className="section-py">
      <div className="section-container">
        <div style={{ marginBottom: '48px', maxWidth: '720px' }}>
          <h2 style={{
            fontFamily: 'Inter, Segoe UI, sans-serif', fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 700, color: '#fff', lineHeight: 1.08,
            letterSpacing: '-0.025em', margin: 0
          }}>
            Built to connect the systems behind the business.
          </h2>
        </div>

        <div className="architecture-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', width: '100%' }}>
            {LAYERS.map((layer, i) => (
              <React.Fragment key={layer.id}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '18px 20px',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  width: '100%'
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.08)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.04)' }}
                >
                  <div style={{
                    width: 10, height: 10, borderRadius: '50%', flexShrink: 0,
                    backgroundColor: layer.color,
                    boxShadow: `0 0 8px ${layer.color}66`
                  }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: '15px', fontWeight: 600, color: '#fff', fontFamily: 'Inter, Segoe UI, sans-serif', margin: 0, lineHeight: 1.3 }}>
                      {layer.label}
                    </p>
                    <p style={{ fontSize: '12px', color: 'rgba(148,163,184,0.7)', margin: '2px 0 0' }}>
                      {layer.sublabel}
                    </p>
                  </div>
                  <div style={{
                    fontSize: '11px', fontFamily: 'monospace',
                    color: 'rgba(255,255,255,0.2)',
                    padding: '3px 8px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px'
                  }}>
                    L{i + 1}
                  </div>
                </div>
                {i < LAYERS.length - 1 && (
                  <div style={{ display: 'flex', justifyContent: 'center', padding: '5px 0' }}>
                    <ArrowDown style={{ width: 14, height: 14, color: 'rgba(255,255,255,0.15)' }} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div style={{ color: '#fff' }}>
            <h3 style={{ fontFamily: 'Inter, Segoe UI, sans-serif', fontSize: '25px', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '18px' }}>
              Full-stack enterprise architecture, designed for operational environments.
            </h3>
            <p style={{ fontSize: '16px', color: 'rgba(148,163,184,0.85)', lineHeight: 1.7, marginBottom: '28px' }}>
              Every Centrifuge system is built on a layered architecture designed for the realities of enterprise environments — high availability, secure integrations, offline capability, and compliance requirements.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Offline-capable mobile and field applications',      color: '#008DDA' },
                { label: 'Secure API integrations with third-party systems',   color: '#008DDA' },
                { label: 'Real-time data pipelines and event streaming',       color: '#008DDA' },
                { label: 'Multi-region cloud deployments with SLA guarantees', color: '#008DDA' },
                { label: 'HIPAA-aligned healthcare data handling',             color: '#008DDA' },
              ].map(({ label, color }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ display: 'inline-block', width: 7, height: 7, borderRadius: '50%', backgroundColor: color, flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: 'rgba(203,213,225,0.9)', lineHeight: 1.5 }}>{label}</span>
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
