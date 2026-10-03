import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

export const FinalCTASection: React.FC = () => {
  return (
    <section className="bg-[#0B1F33] text-white relative overflow-hidden">
      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 70% at 50% 120%, rgba(22,199,217,0.1) 0%, transparent 60%)',
        }}
      />

      <div className="section-container relative z-10 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="badge-eyebrow-dark mb-6 mx-auto w-fit">
            Ready to get started?
          </div>

          {/* Headline */}
          <h2 className="text-h2 text-white mb-5">
            Let's build what your business needs.
          </h2>

          {/* Supporting text */}
          <p className="text-body-lg text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you need an integrated commercial platform, specialised
            healthcare software, or a nationwide telematics network — Centrifuge
            delivers systems you can depend on.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              to="/contact"
              className="btn-accent"
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
              Explore Portfolio
            </Link>
          </div>

          {/* Contact info strip */}
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
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection
