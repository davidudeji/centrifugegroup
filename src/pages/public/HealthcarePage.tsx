import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

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
      desc: 'Complete paperless clinical workflow management for public and private healthcare centers.',
      badge: 'Clinical EMR',
      features: ['Outpatient & Inpatient EMR', 'Laboratory Information System (LIS)', 'Pharmacy stock & dispensing', 'NHIS/HMO claims billing'],
    },
    {
      title: 'Digital Credentialing & Licensing Portals',
      desc: 'Tamper-proof digital licensing, examination registration, and instant QR verification for professional councils.',
      badge: 'Regulatory Grade',
      features: ['Cryptographic QR certificates', 'Online credential verification', 'Remita payment reconciliation', 'Examination seat scheduling'],
    },
    {
      title: 'Vaccine & Cold-Chain IoT Monitoring',
      desc: 'Cellular IoT sensor probes continuously monitoring temperature and humidity in pharmaceutical storage and depots.',
      badge: 'Cold Chain',
      features: ['24/7 continuous temperature logs', 'Automated SMS & audible alarms', 'Regulatory audit trail PDFs', '72-hour power backup'],
    },
  ]

  return (
    <div className="w-full text-left bg-white text-[#0F172A]">
      <SEO
        title="Centrifuge Healthcare Solutions | Health Informatics & Hospital Systems"
        description="Public health informatics, national health workforce registries (HRHIS), and hospital information systems."
      />

      {/* Hero Header */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">CENTRIFUGE HEALTH INFORMATICS</span>
            </div>
            <h1
              className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              Digital systems for better healthcare operations.
            </h1>
            <p className="text-[16px] text-[#94A3B8] leading-relaxed">
              We design and operate resilient health information systems in partnership with federal ministries, healthcare regulatory councils, and major multilateral agencies including WHO and UNICEF.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[6px] bg-[#F27A22] text-[#0F172A] hover:bg-[#E06910] text-[14px] font-semibold transition-colors"
              >
                <span>Consult Health Informatics Team</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/case-studies/fmoh-national-health-workforce"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[6px] bg-transparent border border-white/20 text-white hover:border-white/40 text-[14px] font-medium transition-colors"
              >
                <span>FMOH Case Study</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Grid */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto space-y-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">SPECIALIZED HEALTHCARE SUITES</span>
            </div>
            <h2
              className="font-bold text-[#0F172A] leading-[1.1] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
            >
              Field-proven healthcare infrastructure.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {systems.map((sys) => (
              <div
                key={sys.title}
                className="bg-white p-7 rounded-[12px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200 flex flex-col"
              >
                <div className="mb-4">
                  <span className="inline-block px-2.5 py-0.5 rounded-[4px] bg-[#FFF7ED] border border-[#FDBA74]/30 text-[#F27A22] text-[10px] font-semibold uppercase tracking-[1px]">
                    {sys.badge}
                  </span>
                </div>
                <h3 className="text-[17px] font-bold text-[#0F172A] leading-snug mb-2">
                  {sys.title}
                </h3>
                <p className="text-[13px] text-[#475569] leading-relaxed mb-5">
                  {sys.desc}
                </p>

                <div className="mt-auto pt-4 border-t border-[#E2E8F0] space-y-2">
                  {sys.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-[13px] text-[#475569]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#F27A22] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HealthcarePage
