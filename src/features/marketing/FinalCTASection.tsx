import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone } from 'lucide-react'

export const FinalCTASection: React.FC = () => {
  return (
    <section className="bg-[#000000] text-[#faf9f6] py-20 lg:py-28 border-b border-[#1e1e1d] text-center relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684] mb-4">
          <span>READY TO OPERATE AT ENTERPRISE SCALE?</span>
        </div>

        <h2 className="text-[36px] sm:text-[48px] font-normal text-[#faf9f6] tracking-[-1.5px] leading-[1.05] max-w-3xl mx-auto">
          Let's build what your business needs.
        </h2>

        <p className="mt-4 text-[15px] sm:text-[16px] text-[#868684] tracking-[-0.18px] max-w-2xl mx-auto leading-[1.4]">
          Whether you need an integrated commercial platform, specialized
          healthcare software, or a nationwide telematics network, Centrifuge
          delivers systems you can depend on.
        </p>

        {/* Dual Pill Buttons (warp_design.md §142-150) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-[24px] py-[11px] rounded-[33px] text-[14px] font-semibold bg-[#e9e8e4] text-[#080808] hover:bg-[#e3e2e0] transition-colors duration-150 tracking-[-0.14px]"
          >
            <span>Talk to Centrifuge</span>
            <ArrowRight className="h-3.5 w-3.5 ml-2" />
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-[22px] py-[11px] rounded-[33px] text-[14px] font-normal bg-transparent border border-[#333333] text-[#b4b4b2] hover:border-[#b4b4b2] hover:text-[#faf9f6] transition-colors duration-150 tracking-[-0.14px]"
          >
            <span>Explore Portfolio</span>
          </Link>
        </div>

        {/* Bottom Contacts Row */}
        <div className="mt-12 pt-8 border-t border-[#1e1e1d] flex flex-wrap items-center justify-center gap-8 text-[12px] text-[#868684]">
          <div className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 text-[#f0b66d]" />
            <a
              href="mailto:info@centrifugegroup.co"
              className="hover:text-[#faf9f6] transition-colors"
            >
              enquiries@centrifugegroup.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-[#f0b66d]" />
            <a
              href="tel:234 815 5026 555"
              className="hover:text-[#faf9f6] transition-colors"
            >
              +234 815 5026 555
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FinalCTASection
