import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { Button } from '../../components/ui/Button'
import { ArrowRight, Building, Layers, ShieldCheck, Database, CheckCircle2 } from 'lucide-react'

export const EnterprisePage: React.FC = () => {
  return (
    <div className="w-full text-left">
      <SEO
        title="Enterprise Systems & Architecture | Centrifuge Group"
        description="Custom enterprise software, ERP platforms, automated ledger engines, and core operational platforms."
      />

      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-[#172333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-[#16C7D9] tracking-wider uppercase">
              ENTERPRISE PLATFORMS
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              Custom systems engineered for enterprise scale.
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              When off-the-shelf software cannot bend to your operational complexity, Centrifuge designs and implements core business platforms built around the exact way your organization operates.
            </p>
            <div className="pt-4 flex gap-3">
              <Link to="/contact">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Discuss Enterprise Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[16px] border border-[#E2E8F0] space-y-3">
            <Building className="h-8 w-8 text-[#0B1F33]" />
            <h3 className="text-lg font-bold text-[#0B1F33] font-heading">
              Custom Enterprise ERP
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Engineered for organizations with multi-entity holdings, complex approval hierarchies, and specialized procurement workflows.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[16px] border border-[#E2E8F0] space-y-3">
            <Layers className="h-8 w-8 text-[#16C7D9]" />
            <h3 className="text-lg font-bold text-[#0B1F33] font-heading">
              Legacy Modernization
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Migrate legacy on-premise monolithic databases and visual basic applications to secure, web-native cloud architectures.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[16px] border border-[#E2E8F0] space-y-3">
            <ShieldCheck className="h-8 w-8 text-[#10B981]" />
            <h3 className="text-lg font-bold text-[#0B1F33] font-heading">
              Auditing & Compliance Mesh
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Cryptographic audit logs, role-based access enforcement, and automated regulatory reporting engines.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default EnterprisePage
