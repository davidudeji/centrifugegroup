import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Cpu, Network, Timer } from 'lucide-react'
import { Reveal, StaggerReveal } from '../../components/ui/Reveal'

const PILLARS = [
  {
    num: '01',
    icon: Layers,
    title: 'Engineered for Scale',
    desc: 'Systems designed to grow with operational demand — from a single site to enterprise-wide infrastructure.',
  },
  {
    num: '02',
    icon: Cpu,
    title: 'Built Around Operations',
    desc: 'Technology shaped around real workflows, not abstract features. Every system reflects how your organization works.',
  },
  {
    num: '03',
    icon: Network,
    title: 'Connected by Design',
    desc: 'Applications, data, teams, and processes that work together through purpose-built integrations and APIs.',
  },
  {
    num: '04',
    icon: Timer,
    title: 'Designed for Long-Term Value',
    desc: 'Infrastructure that remains useful as the organization evolves — not systems that lock you into a single vendor.',
  },
]

export const WhyCentrifugeSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#0F2C59', borderBottom: '1px solid rgba(255,255,255,0.06)' }} className="section-py">
      <div className="section-container">
        <Reveal from="up" duration={700}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '40px', maxWidth: '680px' }}>
            <h2 style={{
              fontFamily: 'Inter, Segoe UI, sans-serif', fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 700, color: '#fff', lineHeight: 1.08, letterSpacing: '-0.025em',
              margin: 0
            }}>
              Built for organizations where
              <span style={{ display: 'block', color: '#008DDA', fontStyle: 'italic' }}>technology has to work.</span>
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(148,163,184,0.85)', lineHeight: 1.7, margin: '16px 0 0', maxWidth: '540px' }}>
              We build systems for ministries, enterprises, and institutions that operate in environments where downtime, data loss, and integration failures have real consequences.
            </p>
          </div>
        </Reveal>

        <StaggerReveal
          variant="scale"
          stagger={100}
          duration={600}
          className="why-centrifuge-grid"
          childClassName=""
          style={{ marginBottom: '32px' }}
        >
          {PILLARS.map(({ num, icon: Icon, title, desc }) => (
            <div key={num} style={{
              backgroundColor: '#0F2C59',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = '#1E3A8A' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = '#0F2C59' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '4px', flexShrink: 0,
                  backgroundColor: 'rgba(0,141,218,0.1)',
                  border: '1px solid rgba(0,141,218,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <Icon style={{ width: 18, height: 18, color: '#008DDA' }} />
                </div>
                <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(255,255,255,0.2)', margin: '13px 0 0', letterSpacing: '0.06em' }}>
                  {num}
                </p>
              </div>
              <h3 style={{ fontFamily: 'Inter, Segoe UI, sans-serif', fontSize: '20px', fontWeight: 700, color: '#fff', letterSpacing: '-0.015em', margin: 0 }}>
                {title}
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(148,163,184,0.8)', lineHeight: 1.7, margin: 0 }}>
                {desc}
              </p>
            </div>
          ))}
        </StaggerReveal>

        <Reveal from="up" delay={100}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', paddingTop: '28px', borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap' }}>
            <p style={{ fontSize: '18px', fontWeight: 600, color: '#fff', fontFamily: 'Inter, Segoe UI, sans-serif', margin: 0, maxWidth: '560px' }}>
              Ready to discuss your organization's technology needs?
            </p>
            <Link
              to="/contact"
              id="why-centrifuge-cta"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 28px', backgroundColor: '#008DDA', color: '#FFFFFF',
                borderRadius: '4px', fontSize: '15px', fontWeight: 700,
                textDecoration: 'none', flexShrink: 0, transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              Talk to Centrifuge
              <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default WhyCentrifugeSection
