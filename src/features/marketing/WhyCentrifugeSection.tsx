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
    <section
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #0b2347 0%, #0d2340 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}
      className="section-py"
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 78%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal from="up" duration={700}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '40px', maxWidth: '820px' }}>
            <h2
              style={{
                fontFamily: 'Inter, Segoe UI, sans-serif',
                fontSize: 'clamp(36px, 4vw, 68px)',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1.04,
                letterSpacing: '-0.06em',
                margin: 0,
              }}
            >
              Built for organizations where
              <span style={{ display: 'block', color: '#1bb7ff', fontStyle: 'italic', fontWeight: 500 }}>
                technology has to work.
              </span>
            </h2>
            <p
              style={{
                fontSize: '17px',
                color: 'rgba(191, 219, 254, 0.8)',
                lineHeight: 1.65,
                margin: '18px 0 0',
                maxWidth: '620px',
              }}
            >
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
            <div
              key={num}
              style={{
                backgroundColor: 'rgba(16, 37, 68, 0.72)',
                padding: '26px 24px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                minHeight: '190px',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(23, 54, 96, 0.92)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(16, 37, 68, 0.72)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '8px',
                    flexShrink: 0,
                    backgroundColor: 'rgba(27, 183, 255, 0.12)',
                    border: '1px solid rgba(27, 183, 255, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon style={{ width: 18, height: 18, color: '#1bb7ff' }} />
                </div>
                <p
                  style={{
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                    fontSize: '11px',
                    color: 'rgba(191,219,254,0.6)',
                    margin: 0,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {num}
                </p>
              </div>

              <h3
                style={{
                  fontFamily: 'Inter, Segoe UI, sans-serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#fff',
                  letterSpacing: '-0.03em',
                  margin: 0,
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  fontSize: '14px',
                  color: 'rgba(191, 219, 254, 0.72)',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </StaggerReveal>

        <Reveal from="up" delay={100}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              paddingTop: '26px',
              borderTop: '1px solid rgba(112, 146, 204, 0.26)',
              flexWrap: 'wrap',
            }}
          >
            <p
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#fff',
                fontFamily: 'Inter, Segoe UI, sans-serif',
                margin: 0,
                maxWidth: '560px',
                lineHeight: 1.5,
              }}
            >
              Ready to discuss your organization's technology needs?
            </p>
            <Link
              to="/contact"
              id="why-centrifuge-cta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '16px 26px',
                background: 'linear-gradient(180deg, #1bb7ff 0%, #0d9ef0 100%)',
                color: '#FFFFFF',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: 700,
                textDecoration: 'none',
                flexShrink: 0,
                boxShadow: '0 18px 32px rgba(13, 158, 240, 0.22)',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
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
