import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { Button } from '../../components/ui/Button'
import { ArrowRight, Activity, Users, Database, ShieldCheck, HeartPulse, CheckCircle2 } from 'lucide-react'

export const HealthcarePage: React.FC = () => {
  const systems = [
    {
      title: 'Human Resource for Health Information System (HRHIS)',
      desc: 'National and state-level healthcare workforce database tracking accreditation, postings, credentials, and capacity building for healthcare practitioners across Nigeria.',
      badge: 'Deployed with FMOH',
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
    <div className="w-full text-left">
      <SEO
        title="Centrifuge Healthcare Solutions | Health Informatics & Hospital Systems"
        description="Public health informatics, national health workforce registries (HRHIS), and hospital information systems."
      />

      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-[#172333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-[#16C7D9] tracking-wider uppercase">
              CENTRIFUGE HEALTH INFORMATICS
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              Digital systems for better healthcare operations.
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              We design and operate resilient health information systems in partnership with federal ministries, healthcare regulatory councils, and major hospitals.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Consult Health Informatics Team
                </Button>
              </Link>
              <Link to="/case-studies/fmoh-national-health-workforce">
                <Button variant="outline" size="lg" className="bg-transparent text-white border-[#334155]">
                  FMOH Case Study
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#16C7D9]">
              Specialized Healthcare Suites
            </p>
            <h2 className="text-3xl font-extrabold text-[#0B1F33] font-heading mt-1">
              Field-proven healthcare infrastructure.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {systems.map((sys) => (
              <div
                key={sys.title}
                className="bg-white p-8 rounded-[16px] border border-[#E2E8F0] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-[#16A34A]/10 text-[#15803D] text-[11px] font-bold">
                      {sys.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F33] font-heading">
                    {sys.title}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-2.5 leading-relaxed">
                    {sys.desc}
                  </p>

                  <div className="mt-5 space-y-2">
                    {sys.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-[#334155]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F33] hover:text-[#16C7D9] transition-colors"
                  >
                    <span>Request technical architecture note</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
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
