import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone, ShieldCheck } from 'lucide-react'

export const FinalCTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0B1F33] py-20 text-white lg:py-24">
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="hero-grid-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
            <span className="h-2 w-2 rounded-full bg-[#E87916] ring-4 ring-[#E87916]/20" aria-hidden="true" />
            <ShieldCheck className="h-3.5 w-3.5 text-[#E87916]" />
            <span>Ready to operate at institutional scale?</span>
          </div>

          <h2 className="text-[34px] font-semibold leading-[1.04] tracking-[-0.05em] text-white sm:text-[48px] lg:text-[60px]">
            Let’s build the architecture your enterprise needs.
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-[15px] leading-7 text-slate-200/80 sm:text-[16px]">
            Whether you need financial infrastructure, healthcare information
            systems, or a connected operational platform, Centrifuge engineers
            dependable technology built for real business conditions.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#E87916] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(232,121,22,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D0690E] hover:shadow-[0_14px_30px_rgba(232,121,22,0.36)]"
            >
              <span>Speak with an Enterprise Architect</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8 text-[13px] text-slate-200/70">
          <a
            href="mailto:enquiries@centrifugegroup.com"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4 text-[#E87916]" />
            enquiries@centrifugegroup.com
          </a>
          <a
            href="tel:+2348155026555"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4 text-[#E87916]" />
            +234 815 5026 555
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalCTASection
