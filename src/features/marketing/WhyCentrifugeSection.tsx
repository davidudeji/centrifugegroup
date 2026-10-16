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
      className="relative overflow-hidden section-py border-b border-white/8"
      style={{ background: 'linear-gradient(160deg, #0B1F33 0%, #071521 100%)' }}
    >
      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 20%, transparent 80%)',
        }}
      />
      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: 0,
          right: '-10%',
          width: '55%',
          height: '80%',
          background: 'radial-gradient(ellipse at top right, rgba(7,86,165,0.22) 0%, transparent 65%)',
        }}
      />

      <div className="section-container relative z-10">
        {/* Split header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal from="up" duration={700}>
            <div className="max-w-[620px]">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#F28C28]" aria-hidden="true" />
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F28C28]">
                  Why Centrifuge
                </p>
              </div>
              <h2
                className="text-white"
                style={{
                  fontSize: 'clamp(2.125rem, 4vw, 3.625rem)',
                  fontWeight: 800,
                  lineHeight: 1.04,
                  letterSpacing: '-0.05em',
                }}
              >
                Built for organizations where{' '}
                <em style={{ color: '#FDBA74', fontStyle: 'italic', fontWeight: 500 }}>
                  technology has to work.
                </em>
              </h2>
              <p className="mt-5 max-w-[520px] text-[1rem] leading-[1.8] text-blue-100/65">
                We build systems for ministries, enterprises, and institutions that operate in
                environments where downtime, data loss, and integration failures have real consequences.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Pillar grid — 2×2 */}
        <StaggerReveal
          variant="scale"
          stagger={100}
          duration={600}
          className="grid grid-cols-1 gap-px sm:grid-cols-2 rounded-[14px] overflow-hidden border border-white/8 bg-white/6"
          childClassName=""
        >
          {PILLARS.map(({ num, icon: Icon, title, desc }) => (
            <div
              key={num}
              className="group flex flex-col gap-4 bg-[#102540]/70 p-7 sm:p-8 transition-all duration-200 hover:bg-[#16305A]/80"
            >
              {/* Icon + number row */}
              <div className="flex items-center justify-between">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-[9px]"
                  style={{
                    background: 'rgba(232,121,22,0.12)',
                    border: '1px solid rgba(232,121,22,0.22)',
                  }}
                >
                  <Icon style={{ width: 18, height: 18, color: '#E87916' }} />
                </div>
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.1em]"
                  style={{ color: 'rgba(191,219,254,0.4)' }}
                >
                  {num}
                </span>
              </div>

              <h3
                className="text-white"
                style={{ fontSize: '1.125rem', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.3 }}
              >
                {title}
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'rgba(191,219,254,0.65)' }}>
                {desc}
              </p>
            </div>
          ))}
        </StaggerReveal>

        {/* CTA strip */}
        <Reveal from="up" delay={100}>
          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-[12px] border border-white/10 bg-white/4 px-7 py-6"
          >
            <div>
              <p className="text-[1.0625rem] font-semibold text-white leading-snug">
                Ready to discuss your organization's technology needs?
              </p>
              <p className="mt-1 text-[0.875rem] text-blue-100/55">
                Our team works with government, enterprise, and NGO partners.
              </p>
            </div>
            <Link
              to="/contact"
              id="why-centrifuge-cta"
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-[8px] bg-[#E87916] px-6 py-3.5 text-[0.9375rem] font-semibold text-white shadow-[0_10px_24px_rgba(232,121,22,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D0690E] hover:shadow-[0_14px_30px_rgba(232,121,22,0.38)]"
            >
              <span>Talk to Centrifuge</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default WhyCentrifugeSection
