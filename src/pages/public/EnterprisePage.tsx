import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { ArrowRight, BarChart3, Building2, Layers } from 'lucide-react'

export const EnterprisePage: React.FC = () => {
  return (
    <div className="w-full text-left bg-white text-[#0B1F33]">
      <SEO
        title="Enterprise Solutions & Custom IT Systems | Centrifuge Group"
        description="ERP systems, custom IT solutions, software development and customization tailored to the specific requirements of your organization."
      />

      {/* Hero Header */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#16C7D9]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#16C7D9]">PILLAR 5: ENTERPRISE SOLUTIONS</span>
            </div>
            <h1
              className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              Enterprise Solutions
            </h1>
            <p className="text-[16px] text-[#94A3B8] leading-relaxed max-w-2xl">
              These solutions often include Enterprise Resource Planning (ERP) systems, IT consulting, and custom IT solutions tailored to the specific requirements of an organization. ERP systems integrate core business processes such as finance, human resources, supply chain management, and customer relationship management into a unified platform, providing a comprehensive view of organizational data.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/solutions/optimax"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[6px] bg-[#16C7D9] text-[#0B1F33] hover:bg-[#10b8ca] text-[14px] font-semibold transition-colors"
              >
                <span>Explore Optimax ERP</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[6px] bg-transparent border border-white/20 text-white hover:border-white/40 text-[14px] font-medium transition-colors"
              >
                <span>Discuss custom IT solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Core Offerings */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white p-7 rounded-[12px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200 flex flex-col group">
              <div>
                <div className="h-10 w-10 rounded-[8px] bg-[#EFF9FA] border border-[#67E8F9]/30 flex items-center justify-center mb-5">
                  <BarChart3 className="h-5 w-5 text-[#16C7D9]" />
                </div>
                <h3 className="text-[18px] font-bold text-[#0B1F33] leading-snug mb-2">
                  ERP (Enterprise Resource Planning)
                </h3>
                <p className="text-[13px] text-[#475569] leading-relaxed">
                  Unified enterprise modules connecting finance, general ledgers, multi-warehouse inventory, procurement, and HR into a coherent operational cockpit.
                </p>
              </div>
              <div className="mt-auto pt-5 border-t border-[#E2E8F0] mt-6">
                <Link
                  to="/solutions/optimax"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#334155] group-hover:text-[#16C7D9] transition-colors"
                >
                  <span>Explore Optimax platform</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-7 rounded-[12px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200 flex flex-col group">
              <div>
                <div className="h-10 w-10 rounded-[8px] bg-[#EFF9FA] border border-[#67E8F9]/30 flex items-center justify-center mb-5">
                  <Building2 className="h-5 w-5 text-[#16C7D9]" />
                </div>
                <h3 className="text-[18px] font-bold text-[#0B1F33] leading-snug mb-2">
                  Custom IT Solutions
                </h3>
                <p className="text-[13px] text-[#475569] leading-relaxed">
                  Bespoke software systems, workflow engines, and APIs tailored specifically to your organizational hierarchy and regulatory reporting rules.
                </p>
              </div>
              <div className="mt-auto pt-5 border-t border-[#E2E8F0] mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#334155] group-hover:text-[#16C7D9] transition-colors"
                >
                  <span>Request custom architecture</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-7 rounded-[12px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200 flex flex-col group">
              <div>
                <div className="h-10 w-10 rounded-[8px] bg-[#EFF9FA] border border-[#67E8F9]/30 flex items-center justify-center mb-5">
                  <Layers className="h-5 w-5 text-[#16C7D9]" />
                </div>
                <h3 className="text-[18px] font-bold text-[#0B1F33] leading-snug mb-2">
                  Software Development & Customization
                </h3>
                <p className="text-[13px] text-[#475569] leading-relaxed">
                  Customization of existing software frameworks, building specialized bridges between legacy databases, and continuous lifecycle maintenance.
                </p>
              </div>
              <div className="mt-auto pt-5 border-t border-[#E2E8F0] mt-6">
                <Link
                  to="/services/software-development"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#334155] group-hover:text-[#16C7D9] transition-colors"
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
