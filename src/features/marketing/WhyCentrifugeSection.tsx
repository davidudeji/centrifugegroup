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
    <section style={{ backgroundColor: '#0F172A', borderBottom: '1px solid rgba(255,255,255,0.06)' }} className="section-py">
      <div className="section-container">

        {/* Header */}
        <Reveal from="up" duration={700}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '64px', maxWidth: '680px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '5px 14px', backgroundColor: 'rgba(242,122,34,0.1)',
              border: '1px solid rgba(242,122,34,0.25)', borderRadius: '9999px',
              color: '#F27A22', fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              width: 'fit-content', marginBottom: '12px'
            }}>
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', backgroundColor: '#F27A22' }} />
              04 / WHY CENTRIFUGE
            </div>
            <h2 style={{
              fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 700, color: '#fff', lineHeight: 1.08, letterSpacing: '-0.025em',
              margin: 0
            }}>
              Built for organizations where<br />
              <span style={{ color: '#F27A22', fontStyle: 'italic' }}>technology has to work.</span>
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(148,163,184,0.85)', lineHeight: 1.7, margin: '16px 0 0', maxWidth: '540px' }}>
              We build systems for ministries, enterprises, and institutions that operate in environments where downtime, data loss, and integration failures have real consequences.
            </p>
          </div>
        </Reveal>

        {/* 2×2 grid — staggered scale reveal */}
        <StaggerReveal
          variant="scale"
          stagger={100}
          duration={600}
          className=""
          childClassName=""
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden', marginBottom: '64px' }}
        >
          {PILLARS.map(({ num, icon: Icon, title, desc }) => (
            <div key={num} style={{
              backgroundColor: '#0F172A',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              transition: 'background-color 200ms'
            }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = '#172033' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = '#0F172A' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '12px', flexShrink: 0,
                  backgroundColor: 'rgba(242,122,34,0.1)',
                  border: '1px solid rgba(242,122,34,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <Icon style={{ width: 20, height: 20, color: '#F27A22' }} />
                </div>
                <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(255,255,255,0.2)', margin: '14px 0 0', letterSpacing: '0.06em' }}>
                  {num}
                </p>
              </div>
              <h3 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '20px', fontWeight: 700, color: '#fff', letterSpacing: '-0.015em', margin: 0 }}>
                {title}
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(148,163,184,0.8)', lineHeight: 1.7, margin: 0 }}>
                {desc}
              </p>
            </div>
          ))}
        </StaggerReveal>

        {/* Bottom CTA row */}
        <Reveal from="up" delay={100}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p style={{ fontSize: '18px', fontWeight: 600, color: '#fff', fontFamily: 'Manrope, sans-serif', margin: 0 }}>
              Ready to discuss your organization's technology needs?
            </p>
          <Link
            to="/contact"
            id="why-centrifuge-cta"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px', backgroundColor: '#F27A22', color: '#0F172A',
              borderRadius: '10px', fontSize: '15px', fontWeight: 700,
              textDecoration: 'none', flexShrink: 0, transition: 'background-color 150ms'
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
