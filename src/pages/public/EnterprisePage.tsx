import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { ArrowRight, BarChart3, Building2, Layers } from 'lucide-react'

export const EnterprisePage: React.FC = () => {
  return (
    <div className="dark-page">
      <SEO
        title="Enterprise Solutions & Custom IT Systems | Centrifuge Group"
        description="ERP systems, custom IT solutions, software development and customization tailored to the specific requirements of your organization."
      />

      {/* â”€â”€â”€ Hero Header â”€â”€â”€ */}
      <section className="dark-section-hero pt-32 pb-20 sm:pt-36 sm:pb-24">
<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 dark-badge">
              <span className="h-2 w-2 rounded-full bg-[#E87916] ring-4 ring-[#E87916]/20" aria-hidden="true" />
              <span>Core Enterprise Architecture</span>
            </div>
            <h1 className="text-[32px] sm:text-[44px] font-bold text-[#F0F4FF] tracking-tight leading-[1.2]">
              Custom Core Enterprise Platforms & ERP Systems
            </h1>
            <p className="text-[16px] text-[#8BA4C8] leading-relaxed max-w-2xl">
              Turnkey ERP implementations, specialized workflow engines, and mission-critical enterprise integrations engineered to withstand complex regulatory environments across West Africa and emerging markets.
            </p>
            <p className="text-[14px] text-[#8BA4C8] leading-relaxed max-w-2xl">
              For growing operations teams, requirements discovery can identify where connected applications and workflow automation may reduce reliance on spreadsheets and disconnected tools.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/solutions/optimax"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] bg-[#E87916] text-white shadow-[0_10px_24px_rgba(232,121,22,0.28)] hover:bg-[#D0690E] hover:shadow-[0_14px_30px_rgba(232,121,22,0.36)] hover:-translate-y-0.5 text-sm font-semibold transition-all duration-200"
              >
                <span>Explore Optimax ERP</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] bg-white border border-white/20 text-[#F0F4FF] hover:border-[#0B1F33]/40 hover:bg-white/[0.08] hover:-translate-y-0.5 text-sm font-semibold transition-all duration-200"
              >
                <span>Discuss Custom IT Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Three Core Offerings (UI/UX Spec Â§3.3 Data Card Module) â”€â”€â”€ */}
      <section className="dark-section-b py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/[0.04] p-6 sm:p-8 rounded-[8px] border border-white/[0.09] hover:border-white/20 hover:shadow-xs transition-fin flex flex-col justify-between group text-left">
              <div>
                <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#F0F4FF] flex items-center justify-center mb-5 group-hover:bg-[rgba(7,86,165,0.5)] transition-colors duration-200">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <h3 className="text-[20px] font-bold text-[#F0F4FF] tracking-tight">
                  ERP (Enterprise Resource Planning)
                </h3>
                <p className="text-[14px] text-[#8BA4C8] mt-2.5 leading-relaxed">
                  Unified enterprise modules connecting finance, general ledgers, multi-warehouse inventory, procurement, and HR into a coherent operational cockpit.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.07]">
                <Link
                  to="/solutions/optimax"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#60ABFF] hover:text-[#F28C28] transition-colors"
                >
                  <span>Explore Optimax platform</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white/[0.04] p-6 sm:p-8 rounded-[8px] border border-white/[0.09] hover:border-white/20 hover:shadow-xs transition-fin flex flex-col justify-between group text-left">
              <div>
                <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#F0F4FF] flex items-center justify-center mb-5 group-hover:bg-[rgba(7,86,165,0.5)] transition-colors duration-200">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="text-[20px] font-bold text-[#F0F4FF] tracking-tight">
                  Custom IT Solutions
                </h3>
                <p className="text-[14px] text-[#8BA4C8] mt-2.5 leading-relaxed">
                  Bespoke software systems, workflow engines, and APIs tailored specifically to your organizational hierarchy and regulatory reporting rules.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.07]">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#60ABFF] hover:text-[#F28C28] transition-colors"
                >
                  <span>Request custom architecture</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white/[0.04] p-6 sm:p-8 rounded-[8px] border border-white/[0.09] hover:border-white/20 hover:shadow-xs transition-fin flex flex-col justify-between group text-left">
              <div>
                <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#F0F4FF] flex items-center justify-center mb-5 group-hover:bg-[rgba(7,86,165,0.5)] transition-colors duration-200">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-[20px] font-bold text-[#F0F4FF] tracking-tight">
                  Software Development & Customization
                </h3>
                <p className="text-[14px] text-[#8BA4C8] mt-2.5 leading-relaxed">
                  Customization of existing software frameworks, building specialized bridges between legacy databases, and continuous lifecycle maintenance.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.07]">
                <Link
                  to="/services/software-development"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#60ABFF] hover:text-[#F28C28] transition-colors"
                >
                  <span>Explore engineering capabilities</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnterprisePage



