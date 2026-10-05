import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { ArrowRight, BarChart3, Building2, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react'

export const EnterprisePage: React.FC = () => {
  return (
    <div className="w-full text-left bg-[#F5F7FA] text-[#1A1A1A]">
      <SEO
        title="Enterprise Solutions & Custom IT Systems | Centrifuge Group"
        description="ERP systems, custom IT solutions, software development and customization tailored to the specific requirements of your organization."
      />

      {/* ─── Hero Header (UI/UX Spec §1.1 & §4.1) ─── */}
      <section className="bg-[#FFFFFF] text-[#1A1A1A] py-16 sm:py-20 border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] border border-[#008DDA]/30 bg-[#008DDA]/10 text-xs font-semibold uppercase tracking-wider text-[#0077B6]">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>PILLAR 5: ENTERPRISE SOLUTIONS</span>
            </div>
            <h1 className="text-[32px] sm:text-[44px] font-bold text-[#0F2C59] tracking-tight leading-[1.2]">
              Custom Core Enterprise Platforms & ERP Systems
            </h1>
            <p className="text-[16px] text-[#475569] leading-relaxed max-w-2xl">
              Turnkey ERP implementations, specialized workflow engines, and mission-critical enterprise integrations engineered to withstand complex regulatory environments across West Africa and emerging markets.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/solutions/optimax"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#008DDA] text-white hover:bg-[#0077B6] text-sm font-semibold transition-colors duration-200"
              >
                <span>Explore Optimax ERP</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] bg-transparent border border-[#008DDA] text-[#008DDA] hover:bg-[#008DDA] hover:text-white text-sm font-semibold transition-all duration-200"
              >
                <span>Discuss Custom IT Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Three Core Offerings (UI/UX Spec §3.3 Data Card Module) ─── */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-[8px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs transition-fin flex flex-col justify-between group text-left">
              <div>
                <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center mb-5 group-hover:bg-[#008DDA] group-hover:text-white transition-colors duration-200">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight">
                  ERP (Enterprise Resource Planning)
                </h3>
                <p className="text-[14px] text-[#475569] mt-2.5 leading-relaxed">
                  Unified enterprise modules connecting finance, general ledgers, multi-warehouse inventory, procurement, and HR into a coherent operational cockpit.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#F1F5F9]">
                <Link
                  to="/solutions/optimax"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#008DDA] hover:text-[#0077B6] transition-colors"
                >
                  <span>Explore Optimax platform</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-[8px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs transition-fin flex flex-col justify-between group text-left">
              <div>
                <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center mb-5 group-hover:bg-[#008DDA] group-hover:text-white transition-colors duration-200">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight">
                  Custom IT Solutions
                </h3>
                <p className="text-[14px] text-[#475569] mt-2.5 leading-relaxed">
                  Bespoke software systems, workflow engines, and APIs tailored specifically to your organizational hierarchy and regulatory reporting rules.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#F1F5F9]">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#008DDA] hover:text-[#0077B6] transition-colors"
                >
                  <span>Request custom architecture</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-[8px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs transition-fin flex flex-col justify-between group text-left">
              <div>
                <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center mb-5 group-hover:bg-[#008DDA] group-hover:text-white transition-colors duration-200">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight">
                  Software Development & Customization
                </h3>
                <p className="text-[14px] text-[#475569] mt-2.5 leading-relaxed">
                  Customization of existing software frameworks, building specialized bridges between legacy databases, and continuous lifecycle maintenance.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#F1F5F9]">
                <Link
                  to="/services/software-development"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#008DDA] hover:text-[#0077B6] transition-colors"
                >
                  <span>Explore engineering capabilities</span>
                  <ArrowRight className="h-3 w-3" />
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
