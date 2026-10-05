import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone, ShieldCheck } from 'lucide-react'

export const FinalCTASection: React.FC = () => {
  return (
    <section className="bg-[#0F2C59] text-white py-20 lg:py-24 border-b border-[#1E3A8A] text-center relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#008DDA_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] bg-[#008DDA]/20 border border-[#008DDA]/40 text-xs font-semibold uppercase tracking-wider text-[#008DDA] mb-4">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>READY TO OPERATE AT INSTITUTIONAL SCALE?</span>
        </div>

        <h2 className="text-[32px] sm:text-[44px] font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Let's Build the Architecture Your Enterprise Needs
        </h2>

        <p className="mt-4 text-[16px] text-[#A0AEC0] max-w-2xl mx-auto leading-relaxed">
          Whether you require modern coreless financial infrastructure, specialized healthcare registries, or an integrated commercial ERP, Centrifuge engineers systems you can depend on.
        </p>

        {/* Action Button Row (UI/UX Spec §5.1) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[4px] text-[15px] font-semibold bg-[#008DDA] text-white hover:bg-[#0077B6] focus:outline-none focus:ring-2 focus:ring-[#0F2C59] transition-fin shadow-xs"
          >
            <span>Speak with an Enterprise Architect</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/solutions/banking-framework"
            className="inline-flex items-center justify-center px-6 py-3 rounded-[4px] text-[15px] font-semibold bg-transparent border border-white/60 text-white hover:bg-white hover:text-[#0F2C59] transition-fin"
          >
            <span>Launch Visual Studio</span>
          </Link>
        </div>

        {/* Bottom Contacts Row */}
        <div className="mt-12 pt-8 border-t border-[#1E3A8A] flex flex-wrap items-center justify-center gap-8 text-xs text-[#A0AEC0]">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#008DDA]" />
            <a href="mailto:enquiries@centrifugegroup.com" className="hover:text-white transition-colors">
              enquiries@centrifugegroup.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#008DDA]" />
            <a href="tel:+2348155026555" className="hover:text-white transition-colors">
              +234 815 5026 555
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection
