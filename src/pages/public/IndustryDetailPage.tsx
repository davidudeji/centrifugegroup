import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

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
    problem:
      'Disjointed medical record-keeping, multi-month accreditation backlogs, and lack of real-time epidemiological visibility hamper patient care and regulatory governance across regional hospitals.',
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
    },
  },
  logistics: {
    title: 'Logistics, Freight & Inter-State Mobility',
    subtitle: 'Real-time telemetry, automated dispatch, and digital delivery auditing.',
    problem:
      'High cargo transit risks, undetected fuel pilferage along transit corridors, and reliance on physical delivery notes that delay freight invoicing cycles by up to 30 days.',
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
    },
  },
  government: {
    title: 'Government Ministries, Departments & Agencies',
    subtitle: 'Institutional platforms, verified citizen registries, and automated fee collections.',
    problem:
      'Manual paper queues for accreditation, reconciliation leakages with treasury accounts, and high overhead maintaining outdated local servers.',
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
    },
  },
  enterprise: {
    title: 'Large Commercial Enterprises & Energy Conglomerates',
    subtitle: 'Connected ERP architectures, automated multi-depot inventory, and secure cloud clusters.',
    problem:
      'Multi-entity corporate groups struggle with fragmented reporting, disconnected branches, and slow financial consolidation across divisions.',
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
    ],
  },
  smes: {
    title: 'Growing Commercial SMEs & Multi-Branch Retailers',
    subtitle: 'Fast-deploy cloud POS, stock auditing, and continuous solar power infrastructure.',
    problem:
      'Erratic grid power disrupting point-of-sale operations, internal inventory shrinkage, and lack of real-time sales visibility.',
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
    ],
  },
}

export const IndustryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const ind = (slug && industryDetails[slug]) || industryDetails['healthcare']

  return (
    <div className="w-full text-left bg-white text-[#0B1F33]">
      <SEO
        title={`${ind.title} | Centrifuge Industry Solutions`}
        description={ind.subtitle}
      />

      {/* Hero Header */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto space-y-4">
          <Link
            to="/industries"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#94A3B8] hover:text-[#16C7D9] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Industries</span>
          </Link>

          <div className="flex items-center gap-2 pt-1">
            <span className="h-px w-6 bg-[#16C7D9]" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#16C7D9]">
              INDUSTRY SPECIFICATION
            </span>
          </div>

          <h1
            className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            {ind.title}
          </h1>

          <p className="text-[16px] text-[#94A3B8] leading-relaxed max-w-3xl">
            {ind.subtitle}
          </p>

          <div className="pt-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-[6px] bg-[#16C7D9] text-[#0B1F33] hover:bg-[#10b8ca] text-[13px] font-semibold transition-colors"
            >
              <span>Consult Industry Experts</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto space-y-10">

          {/* Operational Challenge */}
          <div className="bg-white p-7 rounded-[12px] border border-[#E2E8F0] space-y-2">
            <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#16C7D9] block">
              THE OPERATIONAL CHALLENGE IN THIS SECTOR
            </span>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              {ind.problem}
            </p>
          </div>

          {/* How Centrifuge Solves It */}
          <div className="bg-white p-8 rounded-[12px] border border-[#E2E8F0] space-y-5">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#94A3B8] block mb-1">
                DEPLOYED CAPABILITIES
              </span>
              <h3 className="text-[20px] font-bold text-[#0B1F33] tracking-[-0.025em]">
                How Centrifuge Solves It
              </h3>
            </div>
            <div className="space-y-3 pt-2">
              {ind.howCentrifugeHelps.map((point, i) => (
                <div key={i} className="flex items-start gap-3 text-[13px] text-[#475569]">
                  <CheckCircle2 className="h-4 w-4 text-[#16C7D9] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions & Services Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-7 rounded-[12px] border border-[#E2E8F0] space-y-3">
              <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#94A3B8] block">
                Relevant Centrifuge Platforms
              </span>
              <div className="space-y-2 pt-1">
                {ind.relevantSolutions.map((sol) => (
                  <Link
                    key={sol.name}
                    to={sol.url}
                    className="flex items-center justify-between p-3 rounded-[8px] bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-[13px] font-medium text-[#334155] group transition-colors"
                  >
                    <span>{sol.name}</span>
                    <ArrowRight className="h-3 w-3 text-[#16C7D9] group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white p-7 rounded-[12px] border border-[#E2E8F0] space-y-3">
              <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#94A3B8] block">
                Related Engineering Services
              </span>
              <div className="space-y-2 pt-1">
                {ind.relevantServices.map((svc) => (
                  <Link
                    key={svc.name}
                    to={svc.url}
                    className="flex items-center justify-between p-3 rounded-[8px] bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-[13px] font-medium text-[#334155] group transition-colors"
                  >
                    <span>{svc.name}</span>
                    <ArrowRight className="h-3 w-3 text-[#16C7D9] group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Case Study Callout */}
          {ind.caseStudy && (
            <div className="p-8 rounded-[12px] bg-[#0B1F33] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#16C7D9] block mb-1">
                  PROVEN OUTCOME
                </span>
                <h4 className="text-[18px] font-bold text-white tracking-[-0.025em]">
                  {ind.caseStudy.title}
                </h4>
              </div>
              <Link
                to={ind.caseStudy.url}
                className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-[6px] bg-[#16C7D9] text-[#0B1F33] hover:bg-[#10b8ca] text-[13px] font-semibold shrink-0 transition-colors"
              >
                <span>Read Case Study</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default IndustryDetailPage
