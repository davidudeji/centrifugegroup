import React from 'react'
import { Link } from 'react-router-dom'
import {
  Cog,
  GraduationCap,
  PieChart,
  Layers,
  BarChart3,
  Briefcase,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'

export const ServicesSection: React.FC = () => {
  const pillars = [
    {
      id: 'app-dev',
      icon: Cog,
      title: 'APPLICATION DEVELOPMENT',
      description:
        'We engineer institutional-grade applications that combine rigorous architectural integrity with high-availability cloud performance and human-centered design.',
      links: [
        {
          label: 'Web application development',
          href: '/services/software-development',
        },
        {
          label: 'Mobile application development',
          href: '/services/mobile-development',
        },
        {
          label: 'Cloud & microservice development',
          href: '/services/cloud',
        },
        {
          label: 'Enterprise banking & transactional web',
          href: '/services/software-development',
        },
      ],
      detailLink: '/services/software-development',
    },
    {
      id: 'it-training',
      icon: GraduationCap,
      title: 'IT TRAINING & CAPACITY',
      description:
        'Help your teams adopt standardized, automated modern engineering workflows with comprehensive institutional onboarding, security training, and DevOps best practices.',
      links: [
        { label: 'Database administration & SQL tuning', href: '/services/training' },
        {
          label: 'Project architecture & Agile management',
          href: '/services/training',
        },
        { label: 'Big Data & telemetry engineering', href: '/services/training' },
      ],
      detailLink: '/services/training',
    },
    {
      id: 'it-consultancy',
      icon: PieChart,
      title: 'IT CONSULTANCY & AUDIT',
      description:
        'Our technical advisory practice provides enterprises and international agencies with seasoned specialists in system auditability, regulatory alignment, and digital modernization.',
      links: [
        { label: 'World Health Organization - WHO', href: '/clients' },
        {
          label: 'United Nations Children Emergency Fund - UNICEF',
          href: '/clients',
        },
        { label: 'Management Sciences for Health (MSH)', href: '/clients' },
      ],
      detailLink: '/services/consulting',
    },
    {
      id: 'infrastructure',
      icon: Layers,
      title: 'INFRASTRUCTURE & CONNECTIVITY',
      description:
        'Establish a rock-solid foundation for continuous enterprise operations. Covers active-active cloud hosting, container orchestration, hardware telematics, and secure SD-WAN.',
      links: [
        { label: 'Managed IT & 24/7 Operations', href: '/services/managed-it' },
        { label: 'Multi-Cloud Hosting & DevOps', href: '/services/cloud' },
        {
          label: 'Hardware and Telematics Integration',
          href: '/services/infrastructure',
        },
        { label: 'Data Center Power & Clean Energy', href: '/shop' },
      ],
      detailLink: '/services/infrastructure',
    },
    {
      id: 'enterprise-solutions',
      icon: BarChart3,
      title: 'ENTERPRISE SOLUTIONS',
      description:
        'Turnkey ERP implementations, banking rails, and automated compliance pipelines tailored to complex regulatory environments across West Africa and emerging markets.',
      links: [
        {
          label: 'Optimax ERP Core Suite',
          href: '/solutions/optimax',
        },
        { label: 'Banking Framework Studio', href: '/solutions/banking-framework' },
        {
          label: 'Custom Institutional Digital Portals',
          href: '/services/software-development',
        },
      ],
      detailLink: '/solutions/optimax',
    },
    {
      id: 'business-solutions',
      icon: Briefcase,
      title: 'BUSINESS SOLUTIONS',
      description:
        'High-velocity digital commerce, real-time analytics pipelines, and workflow automation that drive measurable margin expansion and operational transparency.',
      links: [
        {
          label: 'SaaS Platform Development',
          href: '/solutions/optimax',
        },
        {
          label: 'Procurement & Hardware Store',
          href: '/shop',
        },
        {
          label: 'Data Analytics & Executive Dashboards',
          href: '/solutions/data-analytics',
        },
      ],
      detailLink: '/solutions',
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E2E8F0] text-left">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#008DDA]/10 border border-[#008DDA]/20 text-xs font-semibold uppercase tracking-wider text-[#0077B6] mb-3">
            <span>CORE SERVICES & SOLUTIONS</span>
          </div>
          <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0F2C59] tracking-tight">
            Engineered Capabilities Built for Institutional Scale
          </h2>
          <p className="text-[15px] text-[#64748B] mt-2.5 max-w-2xl leading-relaxed">
            From modern application architecture and institutional capacity building to enterprise cloud connectivity, we partner across every phase of digital evolution.
          </p>
        </div>

        {/* ─── 6 Pillars Grid (UI/UX Spec §3.3 Data Card Module: 8px radius, #FFFFFF, 1px #E2E8F0, 24px padding) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.id}
                className="p-6 rounded-[8px] bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs transition-fin flex flex-col justify-between group"
              >
                <div>
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center group-hover:bg-[#008DDA] group-hover:text-white transition-colors duration-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] uppercase font-mono font-semibold px-2 py-0.5 rounded-[4px] bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0]">
                      Capability
                    </span>
                  </div>

                  {/* Title & Body */}
                  <h3 className="text-[18px] font-bold text-[#0F2C59] tracking-tight mt-4">
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] text-[#475569] mt-2 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Bullet Sub-links */}
                  <div className="mt-5 pt-4 border-t border-[#F1F5F9] space-y-2">
                    {pillar.links.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        className="group/link flex items-start gap-2 text-[13px] text-[#64748B] hover:text-[#008DDA] transition-colors"
                      >
                        <span className="text-[#008DDA] font-bold text-xs shrink-0 transition-transform group-hover/link:translate-x-0.5">
                          →
                        </span>
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-[#F1F5F9]">
                  <Link
                    to={pillar.detailLink}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#008DDA] hover:text-[#0077B6] transition-colors"
                  >
                    <span>Explore full specifications</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-[#0F2C59]">Require a Custom Technical Architecture?</h4>
            <p className="text-xs text-[#64748B]">Our engineering leads assess infrastructure requirements and provide detailed implementation roadmaps.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-[4px] bg-[#008DDA] text-white hover:bg-[#0077B6] text-xs font-semibold shrink-0 transition-colors"
          >
            <span>Request Technical Consultation</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
export default ServicesSection
