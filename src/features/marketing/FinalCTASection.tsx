import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import { Reveal, StaggerReveal } from '../../components/ui/Reveal'

export const FinalCTASection: React.FC = () => {
  return (
    <section className="bg-[#0B1F33] text-white relative overflow-hidden">
      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 70% at 50% 120%, rgba(242,122,34,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="section-container relative z-10 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <Reveal variant="fade" from="none" delay={0}>
            <div className="badge-eyebrow-dark mb-6 mx-auto w-fit">
              Ready to get started?
            </div>
          </Reveal>

          {/* Headline */}
          <Reveal variant="blur" from="up" distance={20} duration={800} delay={100}>
            <h2 className="text-h2 text-white mb-5">
              Have a complex problem worth solving?
            </h2>
          </Reveal>

          {/* Supporting text */}
          <Reveal from="up" delay={200} duration={700}>
            <p className="text-body-lg text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
              Let's explore the technology, architecture, and systems your organization needs next.
            </p>
          </Reveal>

          {/* CTA buttons */}
          <Reveal from="up" delay={300} variant="scale">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              to="/contact"
              style={{ backgroundColor: '#F27A22', color: '#0F172A', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, textDecoration: 'none' }}
              id="final-cta-primary"
            >
              Talk to Centrifuge
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/projects"
              className="btn-outline-white"
              id="final-cta-portfolio"
            >
              Explore Our Work
            </Link>
            </div>
          </Reveal>

          {/* Contact info strip */}
          <Reveal from="up" delay={450} duration={700}>
            <div className="pt-10 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="h-8 w-8 rounded-[8px] bg-white/[0.07] flex items-center justify-center">
                  <Mail className="h-4 w-4 text-[#16C7D9]" />
                </div>
                <a
                  href="mailto:enquiries@centrifugegroup.com"
                  className="text-[13px] text-[#94A3B8] hover:text-white transition-colors"
                >
                  enquiries@centrifugegroup.com
                </a>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-8 w-8 rounded-[8px] bg-white/[0.07] flex items-center justify-center">
                  <Phone className="h-4 w-4 text-[#16C7D9]" />
                </div>
                <a
                  href="tel:+2348155026555"
                  className="text-[13px] text-[#94A3B8] hover:text-white transition-colors"
                >
                  +234 815 5026 555
                </a>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-8 w-8 rounded-[8px] bg-white/[0.07] flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-[#16C7D9]" />
                </div>
                <span className="text-[13px] text-[#64748B] leading-snug max-w-[180px]">
                  Jinifa Plaza, Central Business District, Abuja, Nigeria
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection
