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
  CheckCircle2,
} from 'lucide-react'

export const ServicesPage: React.FC = () => {
  const pillars = [
    {
      id: 'application-development',
      icon: Cog,
      title: 'Application Development',
      subtitle: 'Modern Web, Native Mobile & Resilient Cloud Architecture',
      description:
        'We engineer institutional-grade applications that combine rigorous architectural integrity with high-availability cloud performance and human-centered design across web, mobile, cloud, and enterprise e-commerce.',
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
      title: 'IT TRAINING & CAPACITY',
      subtitle: 'Workforce Enablement, Data Mastery & Agile Transformation',
      description:
        'Help your teams adopt standardized, automated modern engineering workflows with comprehensive institutional onboarding, database administration, and DevOps best practices.',
      links: [
        { label: 'Database administration', href: '/services/training' },
        { label: 'Project development and management', href: '/services/training' },
        { label: 'Big Data & telemetry engineering', href: '/services/training' },
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
      title: 'IT CONSULTANCY & AUDIT',
      subtitle: 'Institutional Advisory, Regulatory Audits & Programme Strategy',
      description:
        'Our technical advisory practice provides international agencies, multilateral institutions, and government ministries with seasoned specialists in system auditability, regulatory alignment, and digital modernization.',
      links: [
        { label: 'World Health Organization - WHO', href: '/clients' },
        { label: 'United Nations Children Emergency Fund - UNICEF', href: '/clients' },
        { label: 'Management Sciences for Health (MSH)', href: '/clients' },
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
      title: 'INFRASTRUCTURE & CONNECTIVITY',
      subtitle: 'Turnkey Hardware, Power Conditioning & Cloud Networks',
      description:
        'Establish a rock-solid foundation for continuous enterprise operations. Covers active-active cloud hosting, container orchestration, hardware telematics, and secure SD-WAN.',
      links: [
        { label: 'Managed IT Services', href: '/services/managed-it' },
        { label: 'Cloud Services', href: '/services/cloud' },
        { label: 'Hardware and Software Integration', href: '/services/infrastructure' },
        { label: 'Hardware Solutions & Clean Power', href: '/shop' },
        { label: 'Network & Telemetry Operations', href: '/services/managed-it' },
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
      title: 'ENTERPRISE SOLUTIONS',
      subtitle: 'Integrated ERP, Workflow Automation & Core Ledgers',
      description:
        'Turnkey ERP implementations, banking rails, and automated compliance pipelines tailored to complex regulatory environments across West Africa and emerging markets.',
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
      title: 'BUSINESS SOLUTIONS',
      subtitle: 'SaaS Platforms, Analytics & Operational Growth Tools',
      description:
        'Multi-tenant SaaS platforms, omnichannel commercial solutions, and geospatial analytics engines designed to accelerate institutional growth and streamline operational efficiency.',
      links: [
        { label: 'Software as a Service (SaaS) Development', href: '/solutions/optimax' },
        { label: 'Digital Marketing & Growth Services', href: '/services/software-development' },
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
    <div className="dark-page">
      <SEO
        title="Services & Core Capabilities | Centrifuge Group"
        description="Explore our six core engineering and advisory pillars: Application Development, IT Training, IT Consultancy, Infrastructure and Connectivity, Enterprise Solutions, and Business Solutions."
      />

      {/* â”€â”€â”€ Hero Header â”€â”€â”€ */}
      <section className="dark-section-hero pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <span className="dark-badge">
              <span className="h-2 w-2 rounded-full bg-[#F28C28] ring-4 ring-[#F28C28]/20" aria-hidden="true" />
              Core Capabilities & Advisory
            </span>
            <h1 className="text-[32px] sm:text-[48px] font-bold text-[#F0F4FF] tracking-tight leading-[1.1]">
              From Architectural Strategy to High-Scale Production Systems
            </h1>
            <p className="text-[17px] text-[#8BA4C8] leading-relaxed max-w-2xl">
              We provide end-to-end engineering, institutional capacity building, robust connectivity infrastructure, and specialized enterprise systems designed for maximum resilience and operational scale.
            </p>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Six Core Pillars â”€â”€â”€ */}
      <section className="dark-section-b py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/[0.07] gap-4">
            <div>
              <span className="dark-section-label">Core Pillars</span>
              <h2 className="text-[28px] sm:text-[34px] font-bold text-[#F0F4FF] tracking-tight mt-2">
                Our Engineering & Advisory Pillars
              </h2>
            </div>
            <p className="text-[14px] text-[#8BA4C8] max-w-md">
              Each pillar represents deep subject-matter expertise, tested frameworks, and verified track records with commercial and institutional leaders.
            </p>
          </div>

          {/* 6 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.id}
                  className="dark-card p-6 flex flex-col justify-between group text-left"
                >
                  <div>
                    <div className="dark-icon-bubble group-hover:bg-[rgba(7,86,165,0.5)] transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-[18px] font-bold text-[#F0F4FF] tracking-tight mt-5 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-[12px] font-semibold text-[#60ABFF] mt-1 uppercase tracking-wider">
                      {pillar.subtitle}
                    </p>

                    {/* Paragraph */}
                    <p className="text-[13px] text-[#8BA4C8] mt-3 leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Sublinks */}
                    <div className="mt-5 pt-4 border-t border-white/[0.07] space-y-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8BA4C8] block mb-1">
                        Offerings & Specialized Focus:
                      </span>
                      {pillar.links.map((link) => (
                        <Link
                          key={link.label}
                          to={link.href}
                          className="group/link flex items-start gap-2 text-[13px] text-[#8BA4C8] hover:text-[#60ABFF] transition-colors"
                        >
                          <span className="text-[#60ABFF] font-bold text-xs shrink-0 transition-transform group-hover/link:translate-x-0.5">â†’</span>
                          <span>{link.label}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Core Deliverables */}
                    <div className="mt-5 pt-4 border-t border-white/[0.07] space-y-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8BA4C8] block mb-1">
                        Key Deliverables:
                      </span>
                      {pillar.deliverables.map((deliv) => (
                        <div key={deliv} className="flex items-start gap-2 text-[12px] text-[#8BA4C8]">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-6 pt-4 border-t border-white/[0.07] flex items-center justify-between">
                    <Link
                      to={`/services/${pillar.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#60ABFF] hover:text-[#F28C28] transition-colors"
                    >
                      <span>Explore service specifications</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Bottom CTA Banner â”€â”€â”€ */}
      <section className="dark-section-a py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="dark-cta-banner flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="dark-section-label">Custom Engagements</span>
              <h3 className="text-[22px] font-bold text-[#F0F4FF] mt-2">
                Require a Multi-Pillar Institutional Partnership?
              </h3>
              <p className="text-sm text-[#8BA4C8] mt-1 max-w-xl">
                We frequently assemble interdisciplinary teams spanning software architects, cloud engineers, and field trainers for enterprise programs.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] bg-[#E87916] text-white shadow-[0_10px_24px_rgba(232,121,22,0.28)] hover:bg-[#D0690E] hover:shadow-[0_14px_30px_rgba(232,121,22,0.36)] hover:-translate-y-0.5 text-sm font-semibold transition-all duration-200 shrink-0"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ServicesPage

