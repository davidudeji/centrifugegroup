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
    <div className="w-full text-left bg-[#F5F7FA] text-[#1A1A1A]">
      <SEO
        title={`${ind.title} | Centrifuge Industry Solutions`}
        description={ind.subtitle}
      />

      {/* ─── Hero Header (UI/UX Spec §1.1 & §4.1) ─── */}
      <section className="bg-[#FFFFFF] text-[#1A1A1A] py-16 sm:py-20 border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <Link
            to="/industries"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#008DDA] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Industries</span>
          </Link>

          <div>
            <h1 className="text-[32px] sm:text-[44px] font-bold text-[#0F2C59] tracking-tight leading-[1.2]">
              {ind.title}
            </h1>
          </div>

          <p className="text-[16px] text-[#475569] leading-relaxed max-w-3xl">
            {ind.subtitle}
          </p>

          <div className="pt-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#008DDA] text-white hover:bg-[#0077B6] text-sm font-semibold transition-colors duration-200"
            >
              <span>Consult Industry Experts</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Main Content (UI/UX Spec §3.3 Data Card Module) ─── */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Operational Challenge */}
          <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-[8px] border border-[#E2E8F0] space-y-2 shadow-2xs">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#EF4444] block">
              THE OPERATIONAL CHALLENGE IN THIS SECTOR
            </span>
            <h3 className="text-[18px] font-bold text-[#0F2C59]">
              Sector Bottleneck
            </h3>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              {ind.problem}
            </p>
          </div>

          {/* How Centrifuge Solves It */}
          <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-[8px] border border-[#E2E8F0] space-y-5 shadow-2xs">
            <div>
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#008DDA]">
                DEPLOYED CAPABILITIES
              </span>
              <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight mt-1">
                How Centrifuge Solves It
              </h3>
            </div>
            <div className="space-y-3 pt-2">
              {ind.howCentrifugeHelps.map((point, i) => (
                <div key={i} className="flex items-start gap-3 text-[13.5px] text-[#1A1A1A]">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions & Services Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-[8px] border border-[#E2E8F0] space-y-3 shadow-2xs">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#008DDA] block">
                Relevant Centrifuge Platforms
              </span>
              <div className="space-y-2 pt-1">
                {ind.relevantSolutions.map((sol) => (
                  <Link
                    key={sol.name}
                    to={sol.url}
                    className="flex items-center justify-between p-3 rounded-[4px] bg-[#F8FAFC] hover:bg-[#FFFFFF] border border-[#E2E8F0] text-[13px] font-medium text-[#1A1A1A] hover:text-[#008DDA] hover:border-[#CBD5E1] group transition-colors"
                  >
                    <span>{sol.name}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#008DDA] group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-[8px] border border-[#E2E8F0] space-y-3 shadow-2xs">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#008DDA] block">
                Related Engineering Services
              </span>
              <div className="space-y-2 pt-1">
                {ind.relevantServices.map((svc) => (
                  <Link
                    key={svc.name}
                    to={svc.url}
                    className="flex items-center justify-between p-3 rounded-[4px] bg-[#F8FAFC] hover:bg-[#FFFFFF] border border-[#E2E8F0] text-[13px] font-medium text-[#1A1A1A] hover:text-[#008DDA] hover:border-[#CBD5E1] group transition-colors"
                  >
                    <span>{svc.name}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#008DDA] group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Case Study Callout */}
          {ind.caseStudy && (
            <div className="p-6 sm:p-8 rounded-[8px] bg-[#0F2C59] text-white border border-[#1E3A8A] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div>
                <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-[#008DDA]">
                  PROVEN OUTCOME
                </span>
                <h4 className="text-[18px] font-bold text-white mt-1 tracking-tight">
                  {ind.caseStudy.title}
                </h4>
              </div>
              <Link
                to={ind.caseStudy.url}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#008DDA] text-white hover:bg-[#0077B6] text-xs font-semibold shrink-0 transition-colors"
              >
                <span>Read Case Study</span>
                <ArrowRight className="h-3.5 w-3.5" />
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
