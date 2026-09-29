import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { ArrowRight, Mail, Phone } from 'lucide-react'

export const FinalCTASection: React.FC = () => {
  return (
    <section className="bg-[#0B1F33] text-white py-20 lg:py-28 relative overflow-hidden text-center">
      {/* Subtle blueprint pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#16C7D9 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="text-xs font-mono font-bold tracking-widest text-[#16C7D9] uppercase">
          READY TO OPERATE AT ENTERPRISE SCALE?
        </p>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading mt-3 tracking-tight">
          Let's build what your business needs.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
          Whether you need an integrated commercial platform, specialized healthcare software, or a nationwide telematics network, Centrifuge delivers systems you can depend on.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact">
            <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
              Talk to Centrifuge
            </Button>
          </Link>
          <Link to="/projects">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-[#334155] hover:bg-white/10"
            >
              Explore Portfolio
            </Button>
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-[#172333] flex flex-wrap items-center justify-center gap-8 text-xs text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#16C7D9]" />
            <span>info@centrifugegroup.co</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#16C7D9]" />
            <span>+234 (0) 803 000 1234</span>
          </div>
        </div>
      </div>
    </section>
  )
}
