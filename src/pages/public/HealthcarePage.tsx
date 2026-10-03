import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { PageHero } from '../../components/ui/PageHero'
import { ArrowRight, CheckCircle2, Activity, Shield, Thermometer, Database } from 'lucide-react'

const systems = [
  {
    title: 'Human Resource for Health Information System (HRHIS)',
    icon: Database,
    desc: 'National and state-level healthcare workforce database tracking accreditation, postings, credentials, and capacity building for healthcare practitioners across Nigeria.',
    badge: 'Deployed with FMOH, WHO, UNICEF',
    features: ['Digital licensing & CPD tracking', 'Health facility workforce modelling', 'Biometric validation', 'Interoperable DHIS2 APIs'],
  },
  {
    title: 'Electronic Hospital Management Platform (EHMP)',
    icon: Activity,
    desc: 'Complete paperless clinical workflow management for public and private healthcare centres.',
    badge: 'Clinical EMR',
    features: ['Outpatient & Inpatient EMR', 'Laboratory Information System (LIS)', 'Pharmacy stock & dispensing', 'NHIS/HMO claims billing'],
  },
  {
    title: 'Digital Credentialing & Licensing Portals',
    icon: Shield,
    desc: 'Tamper-proof digital licensing, examination registration, and instant QR verification for professional councils.',
    badge: 'Regulatory Grade',
    features: ['Cryptographic QR certificates', 'Online credential verification', 'Remita payment reconciliation', 'Examination seat scheduling'],
  },
  {
    title: 'Vaccine & Cold-Chain IoT Monitoring',
    icon: Thermometer,
    desc: 'Cellular IoT sensor probes continuously monitoring temperature and humidity in pharmaceutical storage and depots.',
    badge: 'Cold Chain',
    features: ['24/7 continuous temperature logs', 'Automated SMS & audible alarms', 'Regulatory audit trail PDFs', '72-hour power backup'],
  },
]

export const HealthcarePage: React.FC = () => {
  return (
    <div className="w-full bg-[#F7F9FA]">
      <SEO
        title="Centrifuge Healthcare Solutions | Health Informatics & Hospital Systems"
        description="Public health informatics, national health workforce registries (HRHIS), and hospital information systems built for Nigeria's healthcare landscape."
      />

      <PageHero
        eyebrow="Centrifuge Healthcare Technology"
        title={<>Health informatics built for <span className="text-[#16C7D9]">the real world.</span></>}
        description="From national health workforce registries to hospital EMRs, digital credentialing, and cold-chain IoT — Centrifuge builds healthcare infrastructure that works."
      >
        <div className="pt-6 flex flex-wrap items-center gap-4">
          <Link to="/contact" className="btn-accent" id="healthcare-hero-cta">
            Talk to Healthcare Team <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/clients" className="btn-outline-white">See Clients</Link>
        </div>
      </PageHero>

      {/* Systems grid */}
      <section className="section-py bg-[#F7F9FA] border-b border-[#E2E8F0]">
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <div className="badge-eyebrow mb-4">Healthcare Systems</div>
            <h2 className="text-h2 text-[#0B1F33]">Purpose-built for clinical and administrative operations.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systems.map((sys) => {
              const Icon = sys.icon
              return (
                <div key={sys.title} className="card-feature flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <div className="h-11 w-11 rounded-[10px] bg-[#0B1F33] flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[#16C7D9]" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#EFF9FA] border border-[#16C7D9]/25 text-[11px] font-semibold text-[#0EA5B9]">
                      {sys.badge}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-heading font-700 text-[#0B1F33] mb-3 leading-snug">{sys.title}</h3>
                  <p className="text-[14px] text-[#64748B] leading-relaxed mb-4">{sys.desc}</p>
                  <ul className="space-y-2 mt-auto pt-4 border-t border-[#E2E8F0]">
                    {sys.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-[13px] text-[#64748B]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A] shrink-0" />
                        {f}
                      </li>
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
