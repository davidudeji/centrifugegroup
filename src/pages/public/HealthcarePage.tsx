import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const HealthcarePage: React.FC = () => {
  const systems = [
    {
      title: 'Human Resource for Health Information System (HRHIS)',
      desc: 'National and state-level healthcare workforce database tracking accreditation, postings, credentials, and capacity building for healthcare practitioners across Nigeria.',
      context: 'Health workforce information system',
      features: ['Digital licensing & CPD tracking', 'Health facility workforce modeling', 'Biometric validation', 'Interoperable DHIS2 APIs'],
    },
    {
      title: 'Electronic Hospital Management Platform (EHMP)',
      desc: 'Complete paperless clinical workflow management for public teaching hospitals and private healthcare networks.',
      context: 'Clinical information system',
      features: ['Outpatient & Inpatient EMR', 'Laboratory Information System (LIS)', 'Pharmacy stock & dispensing', 'NHIS/HMO claims billing'],
    },
    {
      title: 'Digital Credentialing & Licensing Portals',
      desc: 'Tamper-proof digital licensing, examination registration, and instant QR verification for professional regulatory councils.',
      context: 'Credentialing and licensing',
      features: ['Cryptographic QR certificates', 'Online credential verification', 'Remita payment reconciliation', 'Examination seat scheduling'],
    },
    {
      title: 'Vaccine & Cold-Chain IoT Monitoring',
      desc: 'Cellular IoT sensor probes continuously monitoring temperature and humidity in pharmaceutical storage and regional depots.',
      context: 'Cold-chain monitoring',
      features: ['24/7 continuous temperature logs', 'Automated SMS & audible alarms', 'Regulatory audit trail PDFs', '72-hour power backup'],
    },
  ]

  return (
      <div className="dark-page">
        <SEO
          title="Centrifuge Healthcare Solutions | Health Informatics & Hospital Systems"
          description="Public health informatics, national health workforce registries (HRHIS), and hospital information systems."
        />

        {/* â”€â”€â”€ Hero Header â”€â”€â”€ */}
        <section className="dark-section-hero pt-32 pb-20 sm:pt-36 sm:pb-24">
<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 dark-badge">
                <span className="h-2 w-2 rounded-full bg-[#E87916] ring-4 ring-[#E87916]/20" aria-hidden="true" />
                <span>Healthcare Informatics & Systems</span>
              </div>
              <h1 className="text-[32px] sm:text-[44px] font-bold text-[#F0F4FF] tracking-tight leading-[1.2]">
                National Health Registries & Clinical Information Systems
              </h1>
              <p className="text-[16px] text-[#8BA4C8] leading-relaxed max-w-2xl">
                We design public health and workforce information systems for complex institutional environments. Programme reporting, data standards, and interoperability requirements are confirmed with stakeholders for each engagement.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] bg-[#E87916] text-white shadow-[0_10px_24px_rgba(232,121,22,0.28)] hover:bg-[#D0690E] hover:shadow-[0_14px_30px_rgba(232,121,22,0.36)] hover:-translate-y-0.5 text-sm font-semibold transition-all duration-200"
                >
                  <span>Consult Health Informatics Team</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/case-studies/fmoh-national-health-workforce"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] bg-white border border-white/20 text-[#F0F4FF] hover:border-[#0B1F33]/40 hover:bg-white/[0.08] hover:-translate-y-0.5 text-sm font-semibold transition-all duration-200"
                >
                  <span>FMOH Case Study</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€â”€ Systems Grid (UI/UX Spec Â§3.3 Data Card Module) â”€â”€â”€ */}
        <section className="dark-section-b py-16 sm:py-20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-2xl text-left">
              <h2 className="text-[28px] sm:text-[34px] font-bold text-[#F0F4FF] tracking-tight mt-2">
                Healthcare Information Systems
              </h2>
              <p className="text-[14px] text-[#8BA4C8] mt-2">
                System requirements and reporting structures should be agreed with relevant institutions and aligned with applicable guidance.
              </p>
              <p className="text-[14px] text-[#8BA4C8] mt-2">
                For NGO and public health programmes, discovery may include field data capture, programme and beneficiary information, and coordinated reporting. Fit depends on each programme's scope, data governance, and interoperability requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {systems.map((sys) => (
                <div
                  key={sys.title}
                  className="bg-white/[0.04] p-6 sm:p-8 rounded-[8px] border border-white/[0.09] hover:border-white/20 hover:shadow-xs transition-fin flex flex-col justify-between text-left"
                >
                  <div>
                    <h3 className="text-[20px] font-bold text-[#F0F4FF] tracking-tight">
                      {sys.title}
                    </h3>
                    <p className="text-[13px] font-medium text-[#8BA4C8] mt-1">{sys.context}</p>
                    <p className="text-[14px] text-[#8BA4C8] mt-2.5 leading-relaxed">
                      {sys.desc}
                    </p>

                    <div className="mt-6 space-y-2.5 pt-4 border-t border-white/[0.07]">
                      {sys.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-[13px] text-[#F0F4FF]">
                          <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0F2C59] py-20">
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



