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
    <div className="w-full text-left bg-[#000000] text-[#faf9f6]">
      <SEO
        title="Centrifuge Healthcare Solutions | Health Informatics & Hospital Systems"
        description="Public health informatics, national health workforce registries (HRHIS), and hospital information systems."
      />

      {/* ─── Hero Header (Warp Obsidian #000000) ─── */}
      <section className="bg-[#000000] text-[#faf9f6] py-16 sm:py-24 border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684]">
              <span>CENTRIFUGE HEALTH INFORMATICS</span>
            </div>
            <h1 className="text-[36px] sm:text-[56px] font-normal text-[#faf9f6] tracking-[-2.24px] leading-[0.98]">
              Digital systems for better healthcare operations.
            </h1>
            <p className="text-[16px] text-[#868684] tracking-[-0.18px] leading-relaxed">
              We design and operate resilient health information systems in partnership with federal ministries, healthcare regulatory councils, and major multilateral agencies including WHO and UNICEF.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-10 px-6 rounded-[33px] bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] text-[13px] font-semibold transition-colors"
              >
                <span>Consult Health Informatics Team</span>
                <ArrowRight className="h-3.5 w-3.5 ml-2" />
              </Link>
              <Link
                to="/case-studies/fmoh-national-health-workforce"
                className="inline-flex items-center justify-center h-10 px-6 rounded-[33px] bg-transparent border border-[#333333] text-[#b4b4b2] hover:text-[#faf9f6] text-[13px] transition-colors"
              >
                <span>FMOH Case Study</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Systems Grid (Graphite #121212) ─── */}
      <section className="py-20 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#f0b66d]">
              SPECIALIZED HEALTHCARE SUITES
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-normal text-[#faf9f6] tracking-[-0.64px] mt-1">
              Field-proven healthcare infrastructure.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systems.map((sys) => (
              <div
                key={sys.title}
                className="bg-[#1e1e1d] p-8 rounded-[20px] border border-[#1e1e1d] hover:border-[#333333] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-[50px] bg-[#121212] border border-[#333333] text-[#f0b66d] text-[10px] font-mono uppercase tracking-[1px]">
                      {sys.badge}
                    </span>
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px]">
                    {sys.title}
                  </h3>
                  <p className="text-[13px] text-[#868684] mt-2.5 leading-relaxed tracking-[-0.14px]">
                    {sys.desc}
                  </p>

                  <div className="mt-5 space-y-2 pt-4 border-t border-[#333333]/50">
                    {sys.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-[12.5px] text-[#b4b4b2]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#f0b66d] shrink-0" />
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
    </div>
  )
}

export default HealthcarePage
