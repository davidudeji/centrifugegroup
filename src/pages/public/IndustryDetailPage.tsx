import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { Button } from '../../components/ui/Button'
import { ArrowLeft, ArrowRight, CheckCircle2, Shield, HeartPulse, Truck, Landmark, Building2, Store } from 'lucide-react'

interface IndustryData {
  title: string
  subtitle: string
  problem: string
  howCentrifugeHelps: string[]
  relevantSolutions: { name: string; url: string }[]
  relevantServices: { name: string; url: string }[]
  caseStudy?: { title: string; url: string }
}

const industryDetails: Record<string, IndustryData> = {
  healthcare: {
    title: 'Healthcare & Public Health Information Systems',
    subtitle: 'Digitizing medical personnel governance, clinical workflows, and emergency health tracking.',
    problem: 'Disjointed medical record-keeping, multi-month accreditation backlogs, and lack of real-time epidemiological visibility hamper patient care and regulatory governance across regional hospitals.',
    howCentrifugeHelps: [
      'National Human Resource for Health Information System (HRHIS) tracking healthcare workers nationwide.',
      'Paperless hospital EMR managing outpatient triage, lab LIS, pharmacy dispensing, and insurance claims.',
      'Cryptographic QR code professional practicing license verification portals eliminating forged credentials.',
      'Cellular IoT temperature telemetry safeguarding vaccine depot cold-chains 24/7.',
    ],
    relevantSolutions: [
      { name: 'Healthcare Informatics Suite', url: '/solutions/healthcare' },
      { name: 'Data & Geospatial GIS Mapping', url: '/solutions/data-analytics' },
    ],
    relevantServices: [
      { name: 'Custom Software Development', url: '/services/software-development' },
      { name: 'Institutional Training & Capacity', url: '/services/training' },
    ],
    caseStudy: {
      title: 'FMOH National Health Workforce HRHIS Modernization',
      url: '/case-studies/fmoh-national-health-workforce',
    }
  },
  logistics: {
    title: 'Logistics, Freight & Inter-State Mobility',
    subtitle: 'Real-time telemetry, automated dispatch, and digital delivery auditing.',
    problem: 'High cargo transit risks, undetected fuel pilferage along transit corridors, and reliance on physical delivery notes that delay freight invoicing cycles by up to 30 days.',
    howCentrifugeHelps: [
      'Hardware-agnostic telematics integration providing live second-by-second vehicle tracking.',
      'CAN-Bus engine sensor monitoring for automated fuel drop detection.',
      'Mobile driver app with offline digital proof-of-delivery (ePOD) and tamper-proof photo signatures.',
      'Automated consignee tracking links and departure geofencing triggers.',
    ],
    relevantSolutions: [
      { name: 'Logistics & Dispatch Mobility Suite', url: '/solutions/logistics' },
      { name: 'Hardware & Pure Sine Wave Backups', url: '/shop' },
    ],
    relevantServices: [
      { name: 'Mobile Application Engineering', url: '/services/mobile-development' },
      { name: 'Cloud Infrastructure & Telemetry', url: '/services/cloud' },
    ],
    caseStudy: {
      title: 'Inter-State Logistics Telematics & Visibility',
      url: '/case-studies/nationwide-fleet-telematics',
    }
  },
  government: {
    title: 'Government Ministries, Departments & Agencies',
    subtitle: 'Institutional platforms, verified citizen registries, and automated fee collections.',
    problem: 'Manual paper queues for accreditation, reconciliation leakages with treasury accounts, and high overhead maintaining outdated local servers.',
    howCentrifugeHelps: [
      'High-concurrency digital licensing portals integrated with Remita payment gateways.',
      'Tamper-proof verifiable digital certificates with instant QR validation.',
      'Capacity building and cascading training for federal and state civil service personnel.',
      'Cloud modernization adhering to Nigerian Data Protection Regulations (NDPR).',
    ],
    relevantSolutions: [
      { name: 'Optimax Enterprise Platform', url: '/solutions/optimax' },
      { name: 'Healthcare & Regulatory Registries', url: '/solutions/healthcare' },
    ],
    relevantServices: [
      { name: 'Institutional Training & Capacity', url: '/services/training' },
      { name: 'Technology Consulting & Audits', url: '/services/consulting' },
    ],
    caseStudy: {
      title: 'Nursing & Midwifery Council Digital Licensing Portal',
      url: '/case-studies/nursing-council-digital-licensing',
    }
  },
  enterprise: {
    title: 'Large Commercial Enterprises & Energy Conglomerates',
    subtitle: 'Connected ERP architectures, automated multi-depot inventory, and secure cloud clusters.',
    problem: 'Multi-entity corporate groups struggle with fragmented reporting, disconnected branches, and slow financial consolidation across divisions.',
    howCentrifugeHelps: [
      'Optimax unified ERP connecting sales, multi-warehouse stock, and double-entry general ledgers.',
      'Custom API middleware integrating existing legacy accounting systems.',
      'High-availability cloud container clusters with strict 99.9% uptime SLAs.',
    ],
    relevantSolutions: [
      { name: 'Optimax Enterprise ERP Suite', url: '/solutions/optimax' },
      { name: 'Custom Enterprise Systems', url: '/solutions/enterprise' },
    ],
    relevantServices: [
      { name: 'Custom Software Development', url: '/services/software-development' },
      { name: 'Managed IT & Support SLAs', url: '/services/managed-it' },
    ]
  },
  smes: {
    title: 'Growing Commercial SMEs & Multi-Branch Retailers',
    subtitle: 'Fast-deploy cloud POS, stock auditing, and continuous solar power infrastructure.',
    problem: 'Erratic grid power disrupting point-of-sale operations, internal inventory shrinkage, and lack of real-time sales visibility.',
    howCentrifugeHelps: [
      'Turnkey point-of-sale and barcode inventory software running offline and online.',
      'Industrial pure sine wave hybrid inverters and UPS backup power for zero downtime.',
      'Multi-branch daily revenue auditing and low-stock replenishment alerts.',
    ],
    relevantSolutions: [
      { name: 'Optimax Commerce & POS', url: '/solutions/optimax' },
      { name: 'Commercial Hardware Store', url: '/shop' },
    ],
    relevantServices: [
      { name: 'Hardware & Infrastructure Setup', url: '/services/infrastructure' },
      { name: 'Custom Software Development', url: '/services/software-development' },
    ]
  }
}

export const IndustryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const ind = (slug && industryDetails[slug]) || industryDetails['healthcare']

  return (
    <div className="w-full text-left">
      <SEO
        title={`${ind.title} | Centrifuge Industry Solutions`}
        description={ind.subtitle}
      />

      <section className="bg-[#0B1F33] text-white py-16 sm:py-20 border-b border-[#172333]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            to="/industries"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#94A3B8] hover:text-[#16C7D9] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Industries</span>
          </Link>

          <div className="pt-2">
            <span className="text-xs font-mono font-bold text-[#16C7D9] tracking-wider uppercase">
              INDUSTRY SPECIFICATION
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mt-1">
              {ind.title}
            </h1>
          </div>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-3xl">
            {ind.subtitle}
          </p>

          <div className="pt-4">
            <Link to="/contact">
              <Button variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Consult Industry Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Operational Challenge */}
          <div className="bg-[#FEF2F2] p-8 rounded-[16px] border border-[#FEE2E2] space-y-2">
            <span className="text-xs font-mono font-bold text-[#DC2626] uppercase">
              The Operational Problem In This Sector
            </span>
            <p className="text-sm text-[#7F1D1D] leading-relaxed">
              {ind.problem}
            </p>
          </div>

          {/* How Centrifuge Helps */}
          <div className="bg-white p-8 rounded-[16px] border border-[#E2E8F0] space-y-4">
            <h3 className="text-xl font-bold text-[#0B1F33] font-heading">
              How Centrifuge Solves It
            </h3>
            <div className="space-y-3 pt-2">
              {ind.howCentrifugeHelps.map((point, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#334155]">
                  <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions & Services Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-7 rounded-[14px] border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block">
                Relevant Centrifuge Platforms
              </span>
              <div className="space-y-2 pt-1">
                {ind.relevantSolutions.map((sol) => (
                  <Link
                    key={sol.name}
                    to={sol.url}
                    className="flex items-center justify-between p-2.5 rounded-[6px] bg-[#F8FAFC] hover:bg-[#F1F5F9] text-xs font-semibold text-[#0B1F33] transition-colors"
                  >
                    <span>{sol.name}</span>
                    <ArrowRight className="h-3 w-3 text-[#16C7D9]" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white p-7 rounded-[14px] border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block">
                Related Engineering Services
              </span>
              <div className="space-y-2 pt-1">
                {ind.relevantServices.map((svc) => (
                  <Link
                    key={svc.name}
                    to={svc.url}
                    className="flex items-center justify-between p-2.5 rounded-[6px] bg-[#F8FAFC] hover:bg-[#F1F5F9] text-xs font-semibold text-[#0B1F33] transition-colors"
                  >
                    <span>{svc.name}</span>
                    <ArrowRight className="h-3 w-3 text-[#16C7D9]" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Case Study Callout */}
          {ind.caseStudy && (
            <div className="p-8 rounded-[16px] bg-[#071521] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[11px] font-mono text-[#16C7D9] uppercase font-bold">
                  PROVEN OUTCOME
                </span>
                <h4 className="text-lg font-bold font-heading mt-1">
                  {ind.caseStudy.title}
                </h4>
              </div>
              <Link to={ind.caseStudy.url}>
                <Button variant="primary" size="md">
                  Read Case Study
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
export default IndustryDetailPage
