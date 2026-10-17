import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

export const FinalCTASection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          'linear-gradient(170deg, #14133B 0%, #11143C 35%, #11274E 68%, #0D1030 100%)',
      }}
    >
      {/* Fine grid texture — same opacity/size as footer's sibling sections */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 50%, black 10%, transparent 100%)',
        }}
      />

      {/* Top-edge brand hairline — mirrors footer's ::before glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '1px',
          background:
            'linear-gradient(90deg, transparent 0%, rgba(242,140,40,0.5) 30%, rgba(100,160,255,0.3) 65%, transparent 100%)',
        }}
      />

      {/* Ambient radial glow — deep indigo bloom at centre-bottom */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          bottom: '-25%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          height: '160%',
          background:
            'radial-gradient(ellipse, rgba(17,39,78,0.55) 0%, rgba(20,19,59,0.25) 40%, transparent 70%)',
        }}
      />

      {/* Secondary glow — top-right accent */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: '-10%',
          right: '-5%',
          width: '45%',
          height: '80%',
          background:
            'radial-gradient(ellipse, rgba(26,24,80,0.45) 0%, transparent 68%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-24 lg:py-36">

        {/* Two-column editorial layout */}
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:items-start">

          {/* Left: Main CTA content */}
          <div>
            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.05] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FDBA74]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F28C28] shadow-[0_0_6px_rgba(242,140,40,0.7)]" aria-hidden="true" />
              Enterprise Architecture Consultation
            </div>

            <h2
              className="text-white"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.04,
                letterSpacing: '-0.05em',
              }}
            >
              Let's build the architecture{' '}
              <span style={{ color: '#FDBA74' }}>your enterprise needs.</span>
            </h2>

            <p className="mt-6 max-w-[580px] text-[1rem] leading-[1.8] text-[#8BA4C8]">
              Whether you need financial infrastructure, healthcare information systems, or a
              connected operational platform, Centrifuge engineers dependable technology built
              for real business conditions.
            </p>

            {/* Primary CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                id="final-cta-primary"
                className="group inline-flex items-center gap-2.5 rounded-[8px] bg-[#E87916] px-8 py-4 text-[1rem] font-semibold text-white shadow-[0_12px_28px_rgba(232,121,22,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D0690E] hover:shadow-[0_16px_36px_rgba(232,121,22,0.45)]"
              >
                <span>Speak with an Enterprise Architect</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/projects"
                id="final-cta-secondary"
                className="inline-flex items-center gap-2 rounded-[8px] border border-white/[0.18] bg-white/[0.04] px-6 py-4 text-[1rem] font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/[0.08]"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Right: Contact details card — glassy panel matching footer depth */}
          <div
            className="rounded-[20px] p-8 backdrop-blur-sm"
            style={{
              background: 'linear-gradient(145deg, rgba(26,24,80,0.55) 0%, rgba(17,39,78,0.40) 100%)',
              border: '1px solid rgba(255,255,255,0.09)',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04), 0 24px 56px rgba(8,10,28,0.45)',
            }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F28C28] mb-5">
              Get In Touch
            </p>
            <h3 className="text-[1.25rem] font-bold text-white leading-snug mb-6">
              Ready to start a conversation? Reach us directly.
            </h3>

            <div className="space-y-5">
              <a
                href="mailto:enquiries@centrifugegroup.com"
                className="flex items-start gap-3.5 group"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-[#E87916]/15 border border-[#E87916]/25">
                  <Mail className="h-4 w-4 text-[#E87916]" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[#8BA4C8]/60 mb-0.5">Email</p>
                  <span className="text-[0.9375rem] font-medium text-[#C8D8EE] group-hover:text-white transition-colors">
                    enquiries@centrifugegroup.com
                  </span>
                </div>
              </a>

              <a
                href="tel:+2348155026555"
                className="flex items-start gap-3.5 group"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-[#E87916]/15 border border-[#E87916]/25">
                  <Phone className="h-4 w-4 text-[#E87916]" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[#8BA4C8]/60 mb-0.5">Phone</p>
                  <span className="text-[0.9375rem] font-medium text-[#C8D8EE] group-hover:text-white transition-colors">
                    +234 815 5026 555
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-[#E87916]/15 border border-[#E87916]/25">
                  <MapPin className="h-4 w-4 text-[#E87916]" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[#8BA4C8]/60 mb-0.5">Office</p>
                  <span className="text-[0.9375rem] text-[#C8D8EE] leading-snug">
                    Suite 203, Jinifa Plaza, Abuja, Nigeria
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 rounded-[8px] border border-[#22C55E]/20 bg-[#22C55E]/[0.06] px-4 py-3">
              <span className="h-2 w-2 rounded-full bg-[#22C55E] shadow-[0_0_6px_rgba(34,197,94,0.8)] shrink-0" aria-hidden="true" />
              <span className="text-[0.8125rem] font-medium text-[#4ADE80]">
                Response typically within 1 business day
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTASection
