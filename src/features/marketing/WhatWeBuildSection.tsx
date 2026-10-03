import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Activity, Truck, BarChart3, Globe, Cpu } from 'lucide-react'
import { Reveal } from '../../components/ui/Reveal'

const capabilities = [
  {
    id: 'enterprise',
    num: '01',
    icon: Layers,
    label: 'Enterprise Software',
    tag: 'OPTIMAX SUITE',
    features: ['Operations', 'Finance', 'HR', 'Sales', 'Analytics'],
    desc: 'Connected business systems that bring operations, finance, people, sales, and decision-making into one controlled environment.',
    href: '/solutions/enterprise',
    wide: true,
  },
  {
    id: 'healthcare',
    num: '02',
    icon: Activity,
    label: 'e-Health Systems',
    tag: 'FMOH · NMCN',
    features: ['Patient Systems', 'Healthcare Ops', 'Digital Records', 'Analytics'],
    desc: 'Digital healthcare infrastructure designed to improve access, coordination, records, and operational visibility.',
    href: '/solutions/healthcare',
    wide: false,
  },
  {
    id: 'logistics',
    num: '03',
    icon: Truck,
    label: 'Logistics & Mobility',
    tag: 'TELEMATICS',
    features: ['Dispatch', 'GPS Tracking', 'Route Planning', 'ePOD'],
    desc: 'GPS telematics, automated dispatch, fuel auditing, route planning, and offline-capable mobile proof-of-delivery.',
    href: '/solutions/logistics',
    wide: false,
  },
  {
    id: 'cloud',
    num: '04',
    icon: Globe,
    label: 'Cloud & SaaS',
    tag: 'CLOUD · IOT',
    features: ['Cloud Architecture', 'SaaS Platforms', 'APIs', 'Security'],
    desc: 'Secure, scalable cloud platforms designed to support modern applications, teams, and business infrastructure.',
    href: '/services/cloud',
    wide: false,
  },
  {
    id: 'data',
    num: '05',
    icon: BarChart3,
    label: 'Data & Analytics',
    tag: 'SPATIAL GIS',
    features: ['GIS Mapping', 'BI Dashboards', 'Reporting', 'Streaming'],
    desc: 'GIS spatial mapping, executive BI dashboards, real-time event streaming, and automated regulatory reporting.',
    href: '/solutions/data-analytics',
    wide: false,
  },
  {
    id: 'digital',
    num: '06',
    icon: Cpu,
    label: 'Digital Platforms',
    tag: 'CUSTOM DEV',
    features: ['Web Apps', 'Mobile', 'Integration', 'Automation'],
    desc: 'Bespoke digital platforms, mobile applications, systems integrations, and business process automation.',
    href: '/services/software-development',
    wide: true,
  },
]

export const WhatWeBuildSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }} className="section-py">
      <div className="section-container">

        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '5px 14px', backgroundColor: 'rgba(242,122,34,0.08)',
                  border: '1px solid rgba(242,122,34,0.25)', borderRadius: '9999px',
                  color: '#F27A22', fontSize: '11px', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px'
                }}
              >
                <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', backgroundColor: '#F27A22' }} />
                01 / CAPABILITIES
              </div>
              <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#0F172A', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '16px' }}>
                Technology built around real<br />operational complexity.
              </h2>
              <p style={{ fontSize: 'clamp(16px, 1.4vw, 18px)', color: '#64748B', lineHeight: 1.7, maxWidth: '520px' }}>
                From enterprise operations to healthcare delivery and cloud infrastructure — we build systems designed around how organizations actually work.
              </p>
            </div>
            <Link
              to="/solutions"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', backgroundColor: '#0F172A', color: '#fff',
                borderRadius: '10px', fontSize: '14px', fontWeight: 600,
                textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0,
                transition: 'background-color 150ms'
              }}
              id="what-we-build-explore"
            >
              Explore All Solutions
              <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <Link
                  key={cap.id}
                  to={cap.href}
                  aria-label={`Learn about ${cap.label}`}
                  className="group"
                  style={{
                    gridColumn: cap.wide ? 'span 7' : 'span 5',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '260px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '32px',
                    textDecoration: 'none',
                    transition: 'border-color 200ms ease, box-shadow 200ms ease, transform 150ms ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.borderColor = '#F27A22'
                    el.style.boxShadow = '0 8px 32px rgba(242,122,34,0.10)'
                    el.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.borderColor = '#E2E8F0'
                    el.style.boxShadow = 'none'
                    el.style.transform = 'translateY(0)'
                  }}
                >
                  <div>
                    {/* Top row: icon + tag */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '12px',
                        backgroundColor: '#0F172A',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'background-color 200ms'
                      }}>
                        <Icon style={{ width: 20, height: 20, color: '#fff' }} />
                      </div>
                      <span style={{
                        fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em',
                        textTransform: 'uppercase', color: '#94A3B8',
                        padding: '4px 12px', borderRadius: '9999px',
                        border: '1px solid #E2E8F0', backgroundColor: '#F8FAFC'
                      }}>
                        {cap.tag}
                      </span>
                    </div>

                    {/* Number */}
                    <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#CBD5E1', marginBottom: '6px', fontWeight: 400 }}>
                      {cap.num}
                    </p>

                    {/* Title */}
                    <h3 style={{
                      fontFamily: 'Manrope, sans-serif', fontSize: '22px', fontWeight: 700,
                      color: '#0F172A', letterSpacing: '-0.02em', marginBottom: '10px',
                      lineHeight: 1.2
                    }}>
                      {cap.label}
                    </h3>

                    {/* Desc */}
                    <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.7, marginBottom: '16px' }}>
                      {cap.desc}
                    </p>

                    {/* Feature tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {cap.features.map((feat) => (
                        <span key={feat} style={{
                          fontSize: '11px', fontWeight: 600, color: '#334155',
                          padding: '3px 10px', borderRadius: '6px',
                          border: '1px solid #E2E8F0', backgroundColor: '#F8FAFC'
                        }}>
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#F27A22' }}>
                      Explore {cap.label} →
                    </span>
                    <div style={{
                      width: 32, height: 32, borderRadius: '8px',
                      backgroundColor: 'rgba(242,122,34,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <ArrowRight style={{ width: 14, height: 14, color: '#F27A22' }} />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default WhatWeBuildSection
