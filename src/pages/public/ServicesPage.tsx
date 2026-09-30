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
  Code2,
  Smartphone,
  Cloud,
  Database,
  ShieldCheck,
  Server,
  Terminal,
} from 'lucide-react'

export const ServicesPage: React.FC = () => {
  const pillars = [
    {
      id: 'application-development',
      icon: Cog,
      title: 'APPLICATION DEVELOPMENT',
      subtitle: 'Modern Web, Native Mobile & Resilient Cloud Architecture',
      description:
        'We believe in building softwares that are not just great, but memorable, inspiring, remarkable and entertaining. We work with companies to understand their users and to shape and guide their strategy.',
      links: [
        { label: 'Web application development', href: '/services/software-development' },
        { label: 'Mobile application development', href: '/services/mobile-development' },
        { label: 'Cloud/infrastructure application development', href: '/services/cloud' },
        { label: 'E-commerce and professional website', href: '/services/software-development' },
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
      title: 'IT TRAINING',
      subtitle: 'Workforce Enablement, Data Mastery & Agile Transformation',
      description:
        'Are you driving your organization to becoming more standardized, simplified and automated? Our consultants can help your team assess the current state of your organizational processes, establish a new strategic vision and priorities a road map of change programs designed to help you transform your business and reach for a greater productivity.',
      links: [
        { label: 'Database administration', href: '/services/training' },
        { label: 'Project development and management', href: '/services/training' },
        { label: 'Big Data', href: '/services/training' },
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
      title: 'IT CONSULTANCY',
      subtitle: 'Institutional Advisory, Regulatory Audits & Programme Strategy',
      description:
        'Our IT Consulting team provides clients with access to a specialized group of professional resources experienced in a range of programme and project-related activities.',
      links: [
        { label: 'World Health Organization - WHO', href: '/clients' },
        { label: 'United Nation Children Emergency Fund - UNICEF', href: '/clients' },
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
      title: 'Infrastructure and Connectivity Services',
      subtitle: 'Turnkey Hardware, Power Conditioning & Cloud Networks',
      description:
        'In the realm of software development, Infrastructure and Connectivity services play a pivotal role in establishing a robust foundation for seamless operations. These services encompass the essential components that ensure the reliability, scalability, and efficiency of a company’s IT environment.',
      links: [
        { label: 'Managed IT Services', href: '/services/managed-it' },
        { label: 'Cloud Services', href: '/services/cloud' },
        { label: 'Hardware and Software Integration', href: '/services/infrastructure' },
        { label: 'Hardware Solution', href: '/services/infrastructure' },
        { label: 'Network Service', href: '/services/managed-it' },
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
        'These solutions often include Enterprise Resource Planning (ERP) systems, IT consulting, and custom IT solutions tailored to the specific requirements of an organization. ERP systems integrate core business processes such as finance, human resources, supply chain management, and customer relationship management into a unified platform, providing a comprehensive view of organizational data.',
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
        'Business Solutions, within the realm of software development services, encompass a range of offerings aimed at addressing and optimizing various aspects of a company’s operations. These services are tailored to enhance efficiency, productivity, and overall performance, contributing to the growth and success of businesses across industries.',
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
    <div className="w-full text-left bg-[#000000] text-[#faf9f6]">
      <SEO
        title="Services & Core Capabilities | Centrifuge Group"
        description="Explore our six core engineering and advisory pillars: Application Development, IT Training, IT Consultancy, Infrastructure and Connectivity, Enterprise Solutions, and Business Solutions."
      />

      {/* ─── Hero Header (Warp Obsidian #000000) ─── */}
      <section className="bg-[#000000] text-[#faf9f6] py-16 sm:py-24 border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684]">
              <span>FULL LIFECYCLE CAPABILITIES</span>
            </div>
            <h1 className="text-[36px] sm:text-[56px] font-normal text-[#faf9f6] tracking-[-2.24px] leading-[0.98]">
              From strategy to systems in production.
            </h1>
            <p className="text-[16px] text-[#868684] tracking-[-0.18px] leading-relaxed">
              We provide end-to-end engineering, institutional capacity building, robust connectivity infrastructure, and specialized enterprise systems designed for maximum resilience and operational scale.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Six Core Pillars Section (Warp Graphite #121212) ─── */}
      <section className="py-20 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#1e1e1d] gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#f0b66d]">
                CORE PILLARS
              </span>
              <h2 className="text-[28px] sm:text-[36px] font-normal text-[#faf9f6] tracking-[-0.64px] mt-1">
                Our Engineering & Advisory Pillars
              </h2>
            </div>
            <p className="text-[13px] text-[#868684] max-w-md">
              Each pillar represents deep subject-matter expertise, tested frameworks, and verified track records with commercial and institutional leaders.
            </p>
          </div>

          {/* 6 Cards Grid (Onyx #1e1e1d, 20px radius) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.id}
                  className="bg-[#1e1e1d] rounded-[20px] border border-[#1e1e1d] hover:border-[#333333] p-7 flex flex-col justify-between transition-all group"
                >
                  <div>
                    {/* Icon & Badge */}
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-[8px] bg-[#121212] border border-[#333333] flex items-center justify-center group-hover:border-[#f0b66d] transition-colors">
                        <Icon className="h-5 w-5 text-[#f0b66d]" />
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-[1px] px-2.5 py-0.5 rounded-[50px] border border-[#333333] text-[#868684] bg-[#121212]">
                        Pillar
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-[20px] font-semibold text-[#faf9f6] tracking-[-0.29px] mt-5 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] font-mono text-[#f0b66d] mt-1 uppercase tracking-[0.5px]">
                      {pillar.subtitle}
                    </p>

                    {/* Paragraph */}
                    <p className="text-[13px] text-[#868684] mt-3 leading-relaxed tracking-[-0.14px]">
                      {pillar.description}
                    </p>

                    {/* Arrow Sub-links (from reference images) */}
                    <div className="mt-5 pt-4 border-t border-[#333333]/50 space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-[1.5px] text-[#666469] block mb-1">
                        Offerings & Specialized Focus:
                      </span>
                      {pillar.links.map((link) => (
                        <Link
                          key={link.label}
                          to={link.href}
                          className="group/link flex items-start gap-2 text-[12.5px] text-[#b4b4b2] hover:text-[#f0b66d] transition-colors"
                        >
                          <span className="text-[#f0b66d] font-semibold text-[13px] leading-tight shrink-0 transition-transform group-hover/link:translate-x-0.5">
                            →
                          </span>
                          <span className="hover:underline underline-offset-2">
                            {link.label}
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* Core Deliverables */}
                    <div className="mt-5 pt-4 border-t border-[#333333]/30 space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-[1.5px] text-[#666469] block mb-1">
                        Key Deliverables:
                      </span>
                      {pillar.deliverables.map((deliv) => (
                        <div key={deliv} className="text-[12px] text-[#868684] flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-[#f0b66d] shrink-0" />
                          <span className="truncate">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-8 pt-4 border-t border-[#333333]/50">
                    <Link
                      to={`/services/${pillar.slug}`}
                      className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#faf9f6] group-hover:text-[#f0b66d] transition-colors"
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

      {/* ─── Technical Process & Quality Guarantee (Obsidian #000000) ─── */}
      <section className="py-20 bg-[#000000] border-b border-[#1e1e1d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#868684]">
              OPERATIONAL EXCELLENCE
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-normal text-[#faf9f6] tracking-[-0.64px] mt-1">
              How we execute enterprise deliveries.
            </h2>
            <p className="text-[14px] text-[#868684] mt-2">
              Every project follows stringent technical milestones, ISO and NDPR security compliance, and direct architect oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                className="p-6 rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] hover:border-[#333333] transition-colors"
              >
                <span className="text-[12px] font-mono text-[#f0b66d] px-2 py-0.5 rounded-[50px] border border-[#333333] bg-[#121212]">
                  {p.step}
                </span>
                <h4 className="text-[16px] font-semibold text-[#faf9f6] mt-4 tracking-[-0.18px]">
                  {p.title}
                </h4>
                <p className="text-[12.5px] text-[#868684] mt-2 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] text-center max-w-3xl mx-auto space-y-6">
            <h3 className="text-[28px] sm:text-[36px] font-normal text-[#faf9f6] tracking-[-0.64px]">
              Ready to architect your next system?
            </h3>
            <p className="text-[14px] text-[#868684] max-w-xl mx-auto leading-relaxed">
              Schedule an executive discovery session with our engineering directors to evaluate project scope, system architecture, and deployment schedules.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-10 px-6 rounded-[33px] bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] text-[13px] font-semibold transition-colors"
              >
                <span>Initiate a technical conversation</span>
                <ArrowRight className="h-3.5 w-3.5 ml-2" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center h-10 px-6 rounded-[33px] bg-transparent border border-[#333333] text-[#b4b4b2] hover:text-[#faf9f6] hover:border-[#666469] text-[13px] transition-colors"
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
