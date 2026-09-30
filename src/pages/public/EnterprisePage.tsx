import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { ArrowRight, BarChart3, Building2, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react'

export const EnterprisePage: React.FC = () => {
  return (
    <div className="w-full text-left bg-[#000000] text-[#faf9f6]">
      <SEO
        title="Enterprise Solutions & Custom IT Systems | Centrifuge Group"
        description="ERP systems, custom IT solutions, software development and customization tailored to the specific requirements of your organization."
      />

      {/* ─── Hero Header (Warp Obsidian #000000) ─── */}
      <section className="bg-[#000000] text-[#faf9f6] py-16 sm:py-24 border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684]">
              <span>PILLAR 5: ENTERPRISE SOLUTIONS</span>
            </div>
            <h1 className="text-[36px] sm:text-[56px] font-normal text-[#faf9f6] tracking-[-2.24px] leading-[0.98]">
              Enterprise Solutions
            </h1>
            <p className="text-[16px] text-[#868684] tracking-[-0.18px] leading-relaxed">
              These solutions often include Enterprise Resource Planning (ERP) systems, IT consulting, and custom IT solutions tailored to the specific requirements of an organization. ERP systems integrate core business processes such as finance, human resources, supply chain management, and customer relationship management into a unified platform, providing a comprehensive view of organizational data.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/solutions/optimax"
                className="inline-flex items-center justify-center h-10 px-6 rounded-[33px] bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] text-[13px] font-semibold transition-colors"
              >
                <span>Explore Optimax ERP</span>
                <ArrowRight className="h-3.5 w-3.5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-10 px-6 rounded-[33px] bg-transparent border border-[#333333] text-[#b4b4b2] hover:text-[#faf9f6] text-[13px] transition-colors"
              >
                <span>Discuss custom IT solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Three Core Offerings (Graphite #121212) ─── */}
      <section className="py-20 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1e1e1d] p-8 rounded-[20px] border border-[#1e1e1d] hover:border-[#333333] transition-all flex flex-col justify-between group">
              <div>
                <div className="h-10 w-10 rounded-[8px] bg-[#121212] border border-[#333333] flex items-center justify-center group-hover:border-[#f0b66d] transition-colors mb-5">
                  <BarChart3 className="h-5 w-5 text-[#f0b66d]" />
                </div>
                <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px]">
                  ERP (Enterprise Resource Planning)
                </h3>
                <p className="text-[13px] text-[#868684] mt-2.5 leading-relaxed tracking-[-0.14px]">
                  Unified enterprise modules connecting finance, general ledgers, multi-warehouse inventory, procurement, and HR into a coherent operational cockpit.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#333333]/50">
                <Link
                  to="/solutions/optimax"
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#faf9f6] group-hover:text-[#f0b66d] transition-colors"
                >
                  <span>Explore Optimax platform</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="bg-[#1e1e1d] p-8 rounded-[20px] border border-[#1e1e1d] hover:border-[#333333] transition-all flex flex-col justify-between group">
              <div>
                <div className="h-10 w-10 rounded-[8px] bg-[#121212] border border-[#333333] flex items-center justify-center group-hover:border-[#f0b66d] transition-colors mb-5">
                  <Building2 className="h-5 w-5 text-[#f0b66d]" />
                </div>
                <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px]">
                  Custom IT Solutions
                </h3>
                <p className="text-[13px] text-[#868684] mt-2.5 leading-relaxed tracking-[-0.14px]">
                  Bespoke software systems, workflow engines, and APIs tailored specifically to your organizational hierarchy and regulatory reporting rules.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#333333]/50">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#faf9f6] group-hover:text-[#f0b66d] transition-colors"
                >
                  <span>Request custom architecture</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="bg-[#1e1e1d] p-8 rounded-[20px] border border-[#1e1e1d] hover:border-[#333333] transition-all flex flex-col justify-between group">
              <div>
                <div className="h-10 w-10 rounded-[8px] bg-[#121212] border border-[#333333] flex items-center justify-center group-hover:border-[#f0b66d] transition-colors mb-5">
                  <Layers className="h-5 w-5 text-[#f0b66d]" />
                </div>
                <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px]">
                  Software Development & Customization
                </h3>
                <p className="text-[13px] text-[#868684] mt-2.5 leading-relaxed tracking-[-0.14px]">
                  Customization of existing software frameworks, building specialized bridges between legacy databases, and continuous lifecycle maintenance.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#333333]/50">
                <Link
                  to="/services/software-development"
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#faf9f6] group-hover:text-[#f0b66d] transition-colors"
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
