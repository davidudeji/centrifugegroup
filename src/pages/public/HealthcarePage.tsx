import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { ArrowRight, CheckCircle2, Activity, ShieldCheck, Database, Cpu } from 'lucide-react'

export const HealthcarePage: React.FC = () => {
  const systems = [
    {
      title: 'Human Resource for Health Information System (HRHIS)',
      desc: 'National and state-level healthcare workforce database tracking accreditation, postings, credentials, and capacity building for healthcare practitioners across Nigeria.',
      badge: 'Deployed with FMOH, WHO, UNICEF',
      features: ['Digital licensing & CPD tracking', 'Health facility workforce modeling', 'Biometric validation', 'Interoperable DHIS2 APIs'],
    },
    {
      title: 'Electronic Hospital Management Platform (EHMP)',
      desc: 'Complete paperless clinical workflow management for public teaching hospitals and private healthcare networks.',
      badge: 'Clinical EMR',
      features: ['Outpatient & Inpatient EMR', 'Laboratory Information System (LIS)', 'Pharmacy stock & dispensing', 'NHIS/HMO claims billing'],
    },
    {
      title: 'Digital Credentialing & Licensing Portals',
      desc: 'Tamper-proof digital licensing, examination registration, and instant QR verification for professional regulatory councils.',
      badge: 'Regulatory Grade',
      features: ['Cryptographic QR certificates', 'Online credential verification', 'Remita payment reconciliation', 'Examination seat scheduling'],
    },
    {
      title: 'Vaccine & Cold-Chain IoT Monitoring',
      desc: 'Cellular IoT sensor probes continuously monitoring temperature and humidity in pharmaceutical storage and regional depots.',
      badge: 'Cold Chain',
      features: ['24/7 continuous temperature logs', 'Automated SMS & audible alarms', 'Regulatory audit trail PDFs', '72-hour power backup'],
    },
  ]

  export const HealthcarePage: React.FC = () => {
    return (
      <div className="w-full text-left bg-[#F5F7FA] text-[#1A1A1A]">
        <SEO
          title="Centrifuge Healthcare Solutions | Health Informatics & Hospital Systems"
          description="Public health informatics, national health workforce registries (HRHIS), and hospital information systems."
        />

        {/* ─── Hero Header (UI/UX Spec §1.1 & §4.1) ─── */}
        <section className="bg-[#FFFFFF] text-[#1A1A1A] py-16 sm:py-20 border-b border-[#E2E8F0] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] border border-[#008DDA]/30 bg-[#008DDA]/10 text-xs font-semibold uppercase tracking-wider text-[#0077B6]">
                <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>CENTRIFUGE HEALTH INFORMATICS</span>
              </div>
              <h1 className="text-[32px] sm:text-[44px] font-bold text-[#0F2C59] tracking-tight leading-[1.2]">
                National Health Registries & Clinical Information Systems
              </h1>
              <p className="text-[16px] text-[#475569] leading-relaxed max-w-2xl">
                We design and operate resilient public health informatics systems in partnership with the Federal Ministry of Health, national regulatory councils, and multilateral bodies including the WHO and UNICEF.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#008DDA] text-white hover:bg-[#0077B6] text-sm font-semibold transition-colors duration-200"
                >
                  <span>Consult Health Informatics Team</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/case-studies/fmoh-national-health-workforce"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] bg-transparent border border-[#008DDA] text-[#008DDA] hover:bg-[#008DDA] hover:text-white text-sm font-semibold transition-all duration-200"
                >
                  <span>FMOH Case Study</span>
                </Link>
              </div>
            </div>
          </div>
        </PageHero>

        {/* ─── Systems Grid (UI/UX Spec §3.3 Data Card Module) ─── */}
        <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E2E8F0]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-2xl text-left">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#008DDA]">
                SPECIALIZED HEALTHCARE SUITES
              </span>
              <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0F2C59] tracking-tight mt-2">
                Field-Proven Healthcare Infrastructure
              </h2>
              <p className="text-[14px] text-[#64748B] mt-2">
                Architectures compliant with WHO data standards and national health interoperability frameworks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {systems.map((sys) => (
                <div
                  key={sys.title}
                  className="bg-[#FFFFFF] p-6 sm:p-8 rounded-[8px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs transition-fin flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-1 rounded-[4px] bg-[#008DDA]/10 border border-[#008DDA]/25 text-[#0077B6] text-[11px] font-mono font-semibold uppercase tracking-wider">
                        {sys.badge}
                      </span>
                    </div>
                    <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight">
                      {sys.title}
                    </h3>
                    <p className="text-[14px] text-[#475569] mt-2.5 leading-relaxed">
                      {sys.desc}
                    </p>

                    <div className="mt-6 space-y-2.5 pt-4 border-t border-[#F1F5F9]">
                      {sys.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-[13px] text-[#1A1A1A]">
                          <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </ul>
                  </div>
                  )
            })}
                </div>
        </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0B1F33] py-20">
          <div className="section-container text-center">
            <h2 className="text-h2 text-white mb-4">Serving Nigeria's healthcare infrastructure.</h2>
            <p className="text-body-lg text-[#94A3B8] mb-8 max-w-xl mx-auto">
              Let us demonstrate how Centrifuge healthcare technology can transform your institution's clinical operations.
            </p>
            <Link to="/contact" className="btn-accent" id="healthcare-bottom-cta">
              Request Healthcare Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    )
  }

  export default HealthcarePage
