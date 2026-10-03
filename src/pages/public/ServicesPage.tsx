import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import {
  Cog,
  GraduationCap,
  PieChart,
  Layers,
  BarChart3,
  Briefcase,
  ArrowRight,
} from 'lucide-react'

export const ServicesPage: React.FC = () => {
  const pillars = [
    {
      id: 'application-development',
      icon: Cog,
      title: 'Application Development',
      subtitle: 'Modern Web, Native Mobile & Resilient Cloud Architecture',
      description:
        'We build software that is not just functional, but resilient, scalable, and memorable. We work with organizations to understand their operational workflows and shape their digital strategy.',
      links: [
        { label: 'Web application development', href: '/services/software-development' },
        { label: 'Mobile application development', href: '/services/mobile-development' },
        { label: 'Cloud/infrastructure application development', href: '/services/cloud' },
        { label: 'E-commerce and professional websites', href: '/services/software-development' },
      ],
      deliverables: [
        'Responsive High-Concurrency Web Apps (React, TypeScript)',
        'Offline-First Android & iOS Native Mobile Apps',
        'Cloud-Native Microservices & High-Availability APIs',
        'Secure Payment Gateways & E-Commerce Engines',
      ],
      slug: 'software-development',
    },
    {
      id: 'it-training',
      icon: GraduationCap,
      title: 'IT Training',
      subtitle: 'Workforce Enablement, Data Mastery & Agile Transformation',
      description:
        'Our consultants help organizations assess their current state, establish a strategic vision, and build internal capability through hands-on digital training programmes designed for lasting impact.',
      links: [
        { label: 'Database administration', href: '/services/training' },
        { label: 'Project development and management', href: '/services/training' },
        { label: 'Big Data engineering', href: '/services/training' },
      ],
      deliverables: [
        'PostgreSQL & High-Scale Database Administration',
        'Agile Software Lifecycle & Project Governance',
        'Big Data Ingestion, Data Pipelines & Warehousing',
        'Train-the-Trainer Interactive Digital Sandboxes',
      ],
      slug: 'training',
    },
    {
      id: 'it-consultancy',
      icon: PieChart,
      title: 'IT Consultancy',
      subtitle: 'Institutional Advisory, Regulatory Audits & Programme Strategy',
      description:
        'Our IT Consulting team provides clients with access to specialized professional resources experienced in programme management, systems audits, and institutional technology advisory.',
      links: [
        { label: 'World Health Organization – WHO', href: '/clients' },
        { label: 'United Nations Children Emergency Fund – UNICEF', href: '/clients' },
        { label: 'Management Science for Health (MSH)', href: '/clients' },
      ],
      deliverables: [
        'Enterprise Technical Feasibility & Architecture Audits',
        'Regulatory Compliance (NDPR & Health Informatics)',
        'Programme Management for Global Multilateral Partners',
        'Vendor-Neutral Technology RFP Evaluation',
      ],
      slug: 'consulting',
    },
    {
      id: 'infrastructure-connectivity',
      icon: Layers,
      title: 'Infrastructure & Connectivity',
      subtitle: 'Turnkey Hardware, Power Conditioning & Cloud Networks',
      description:
        'We establish robust digital foundations covering managed IT operations, multi-cloud orchestration, hardware deployment, and zero-transfer power conditioning for uninterrupted operations.',
      links: [
        { label: 'Managed IT Services', href: '/services/managed-it' },
        { label: 'Cloud Services', href: '/services/cloud' },
        { label: 'Hardware and Software Integration', href: '/services/infrastructure' },
        { label: 'Network Services', href: '/services/managed-it' },
      ],
      deliverables: [
        '24/7 Managed IT System & Network Operations Center (NOC)',
        'Multi-Cloud Orchestration (AWS, Docker, Kubernetes)',
        'Zero-Transfer Online UPS & Hybrid Power Conditioning',
        'Edge Telematics & Low-Latency Field Networking',
      ],
      slug: 'infrastructure',
    },
    {
      id: 'enterprise-solutions',
      icon: BarChart3,
      title: 'Enterprise Solutions',
      subtitle: 'Integrated ERP, Workflow Automation & Core Ledgers',
      description:
        'We deliver ERP systems and custom enterprise architectures that integrate finance, human resources, supply chain, and reporting into a unified operational platform.',
      links: [
        { label: 'ERP (Enterprise Resource Planning)', href: '/solutions/optimax' },
        { label: 'Custom IT Solutions', href: '/solutions/enterprise' },
        { label: 'Software Development and Customization', href: '/services/software-development' },
      ],
      deliverables: [
        'Optimax ERP Operations & Financial Ledger Suite',
        'Automated Supply Chain & Warehouse Barcode Logistics',
        'Custom Workflow Integration with Legacy Databases',
        'Real-time Executive Data Lake & BI Reporting',
      ],
      slug: 'software-development',
    },
    {
      id: 'business-solutions',
      icon: Briefcase,
      title: 'Business Solutions',
      subtitle: 'SaaS Platforms, Analytics & Operational Growth Tools',
      description:
        'We design and engineer SaaS products, digital commerce platforms, and data governance frameworks tailored to enhance efficiency and performance across diverse business verticals.',
      links: [
        { label: 'Software as a Service (SaaS) Development', href: '/solutions/optimax' },
        { label: 'Digital Marketing Services', href: '/services/software-development' },
        { label: 'E-commerce Solutions', href: '/shop' },
        { label: 'Data Management and Analytics', href: '/solutions/data-analytics' },
      ],
      deliverables: [
        'Multi-Tenant SaaS Platform Engineering',
        'Digital Omnichannel Commerce & POS Integration',
        'Data Governance, Spatial GIS & Business Analytics',
        'Performance Growth & Operational Optimization',
      ],
      slug: 'software-development',
    },
  ]

  return (
    <div className="w-full text-left bg-white text-[#0B1F33]">
      <SEO
        title="Services & Core Capabilities | Centrifuge Group"
        description="Explore our six core engineering and advisory pillars: Application Development, IT Training, IT Consultancy, Infrastructure and Connectivity, Enterprise Solutions, and Business Solutions."
      />

      {/* Hero Header */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#16C7D9]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#16C7D9]">FULL LIFECYCLE CAPABILITIES</span>
            </div>
            <h1
              className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              From strategy to systems in production.
            </h1>
            <p className="text-[16px] text-[#94A3B8] leading-relaxed max-w-2xl">
              We provide end-to-end engineering, institutional capacity building, robust connectivity infrastructure, and specialized enterprise systems designed for maximum resilience and operational scale.
            </p>
          </div>
        </div>
      </section>

      {/* Six Core Pillars */}
      <section className="py-14 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E2E8F0] gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-px w-6 bg-[#16C7D9]" aria-hidden="true" />
                <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#16C7D9]">CORE PILLARS</span>
              </div>
              <h2
                className="font-bold text-[#0B1F33] tracking-[-0.025em]"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
              >
                Our Engineering & Advisory Pillars
              </h2>
            </div>
            <p className="text-[13px] text-[#475569] max-w-md leading-relaxed">
              Each pillar represents deep subject-matter expertise, tested frameworks, and verified track records with commercial and institutional leaders.
            </p>
          </div>

          {/* 6 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.id}
                  className="bg-white rounded-[12px] border border-[#E2E8F0] p-7 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200 group"
                >
                  <div>
                    {/* Icon & Index */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="h-10 w-10 rounded-[8px] bg-[#EFF9FA] border border-[#67E8F9]/30 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-[#16C7D9]" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#94A3B8] tracking-[1px]">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-[18px] font-bold text-[#0B1F33] leading-snug tracking-[-0.02em] group-hover:text-[#334155] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#16C7D9] mt-1 uppercase tracking-[0.5px]">
                      {pillar.subtitle}
                    </p>

                    <p className="text-[13px] text-[#475569] mt-3 leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Sub-links */}
                    <div className="mt-5 pt-4 border-t border-[#E2E8F0] space-y-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#94A3B8] block mb-2">
                        Offerings & Specialized Focus:
                      </span>
                      {pillar.links.map((link) => (
                        <Link
                          key={link.label}
                          to={link.href}
                          className="flex items-start gap-2 text-[12.5px] text-[#475569] hover:text-[#16C7D9] transition-colors group/link"
                        >
                          <ArrowRight className="h-3.5 w-3.5 text-[#16C7D9] shrink-0 mt-0.5 transition-transform group-hover/link:translate-x-0.5" />
                          <span className="hover:underline underline-offset-2">{link.label}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Deliverables */}
                    <div className="mt-5 pt-4 border-t border-[#E2E8F0] space-y-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#94A3B8] block mb-2">
                        Key Deliverables:
                      </span>
                      {pillar.deliverables.map((deliv) => (
                        <div key={deliv} className="text-[12px] text-[#475569] flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#16C7D9] shrink-0" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#E2E8F0]">
                    <Link
                      to={`/services/${pillar.slug}`}
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#334155] group-hover:text-[#16C7D9] transition-colors"
                    >
                      <span>Explore detailed scope & process</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Process */}
      <section className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#16C7D9]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#16C7D9]">OPERATIONAL EXCELLENCE</span>
            </div>
            <h2
              className="font-bold text-[#0B1F33] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
            >
              How we execute enterprise deliveries.
            </h2>
            <p className="text-[14px] text-[#475569] mt-2 leading-relaxed">
              Every project follows stringent technical milestones, ISO and NDPR security compliance, and direct architect oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              {
                step: '01',
                title: 'Architecture Blueprint',
                desc: 'Workflow audits, data schema modeling, and zero-trust security planning with your teams.',
              },
              {
                step: '02',
                title: 'Iterative Sprints',
                desc: 'Two-week agile release cadence with automated continuous integration and testing suites.',
              },
              {
                step: '03',
                title: 'Field Verification',
                desc: 'On-site stress-testing, low-bandwidth validation, and power failover commissioning.',
              },
              {
                step: '04',
                title: 'Institutional Handover',
                desc: 'Hands-on user enablement, documentation job aids, and SLA-backed maintenance.',
              },
            ].map((p) => (
              <div
                key={p.step}
                className="p-6 rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-sm transition-all"
              >
                <span className="inline-block text-[11px] font-semibold text-[#16C7D9] px-2.5 py-0.5 rounded-[4px] bg-[#EFF9FA] border border-[#67E8F9]/30 mb-4">
                  {p.step}
                </span>
                <h4 className="text-[16px] font-bold text-[#0B1F33] tracking-[-0.02em]">
                  {p.title}
                </h4>
                <p className="text-[13px] text-[#475569] mt-2 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="p-8 sm:p-12 rounded-[12px] bg-[#0B1F33] border border-white/10 text-center max-w-3xl mx-auto space-y-6">
            <h3
              className="font-bold text-white tracking-[-0.025em]"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)' }}
            >
              Ready to architect your next system?
            </h3>
            <p className="text-[14px] text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
              Schedule an executive discovery session with our engineering directors to evaluate project scope, system architecture, and deployment schedules.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[6px] bg-[#16C7D9] text-[#0B1F33] hover:bg-[#10b8ca] text-[14px] font-semibold transition-colors"
              >
                <span>Initiate a technical conversation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[6px] bg-transparent border border-white/20 text-[#CBD5E1] hover:text-white hover:border-white/40 text-[14px] font-medium transition-colors"
              >
                <span>View completed projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
