import React from 'react'
import { Link } from 'react-router-dom'
import {
  BarChart3,
  Briefcase,
  Cog,
  GraduationCap,
  Layers,
  PieChart,
} from 'lucide-react'

export const ServicesSection: React.FC = () => {
  const pillars = [
    {
      id: 'app-dev',
      icon: Cog,
      title: 'APPLICATION DEVELOPMENT',
      description: 'Institutional-grade applications that balance business logic, architectural integrity, and reliable cloud delivery.',
      links: [
        { label: 'Web application development', href: '/services/software-development' },
        { label: 'Mobile application development', href: '/services/mobile-development' },
        { label: 'Cloud & microservice development', href: '/services/cloud' },
        { label: 'Enterprise banking & transactional web', href: '/services/software-development' },
      ],
    },
    {
      id: 'it-training',
      icon: GraduationCap,
      title: 'IT TRAINING & CAPACITY',
      description: 'Structured upskilling for teams building, securing, and operating modern digital systems at enterprise scale.',
      links: [
        { label: 'Database administration & SQL tuning', href: '/services/training' },
        { label: 'Project architecture & Agile management', href: '/services/training' },
        { label: 'Big Data & telemetry engineering', href: '/services/training' },
      ],
    },
    {
      id: 'it-consultancy',
      icon: PieChart,
      title: 'IT CONSULTANCY & AUDIT',
      description: 'Technical advisory for institutions and agencies needing system auditability, modernization roadmaps, and regulatory alignment.',
      links: [
        { label: 'World Health Organization - WHO', href: '/clients' },
        { label: 'United Nations Children Emergency Fund - UNICEF', href: '/clients' },
        { label: 'Management Sciences for Health (MSH)', href: '/clients' },
      ],
    },
    {
      id: 'infrastructure',
      icon: Layers,
      title: 'INFRASTRUCTURE & CONNECTIVITY',
      description: 'Secure hosting, resilient networking, and operational systems that keep critical services available and maintainable.',
      links: [
        { label: 'Managed IT & 24/7 operations', href: '/services/managed-it' },
        { label: 'Multi-cloud hosting & DevOps', href: '/services/cloud' },
        { label: 'Hardware & telematics integration', href: '/services/infrastructure' },
        { label: 'Data center power & clean energy', href: '/shop' },
      ],
    },
    {
      id: 'enterprise-solutions',
      icon: BarChart3,
      title: 'ENTERPRISE SOLUTIONS',
      description: 'ERP, banking rails, and operational platforms designed for complex regulatory and multi-entity environments.',
      links: [
        { label: 'Optimax ERP core suite', href: '/solutions/optimax' },
        { label: 'Project Development & Management Studio', href: '/solutions/project-development-management' },
        { label: 'Custom institutional digital portals', href: '/services/software-development' },
      ],
    },
    {
      id: 'business-solutions',
      icon: Briefcase,
      title: 'BUSINESS SOLUTIONS',
      description: 'Commercial systems that improve visibility, automate workflows, and create measurable operational efficiency.',
      links: [
        { label: 'SaaS platform development', href: '/solutions/optimax' },
        { label: 'Procurement & hardware store', href: '/shop' },
        { label: 'Data analytics & executive dashboards', href: '/solutions/data-analytics' },
      ],
    },
  ]

  return (
    <section className="border-b border-[#E2E8F0] bg-white py-20 text-left lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-[760px]">
          <div className="mb-4 inline-flex items-center rounded-full border border-[#008DDA]/20 bg-[#008DDA]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A6CAE]">
            Core services & solutions
          </div>
          <h2 className="text-[34px] font-semibold tracking-[-0.05em] text-[#0F2C59] sm:text-[42px] lg:text-[52px]">
            Capabilities engineered for institutional scale.
          </h2>
          <p className="mt-4 max-w-[680px] text-[15px] leading-7 text-[#475569] sm:text-[16px]">
            From application design and systems integration to cloud operations and enterprise advisory, we support every stage of digital evolution.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.id}
                className="group flex min-h-[360px] flex-col justify-between rounded-[18px] border border-[#E2E8F0] bg-white p-6 shadow-[0_14px_32px_rgba(15,44,89,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#BEE7FF] hover:shadow-[0_20px_42px_rgba(15,44,89,0.08)]"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#0F2C59]/10 text-[#0F2C59] transition-colors duration-200 group-hover:bg-[#008DDA] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                      Capability
                    </span>
                  </div>

                  <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#0F2C59]">{pillar.title}</h3>
                  <p className="mt-3 text-[14px] leading-6 text-[#475569]">{pillar.description}</p>

                  <div className="mt-5 space-y-2 border-t border-[#E2E8F0] pt-4">
                    {pillar.links.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        className="group/link flex items-start gap-2 text-[13px] text-[#64748B] transition-colors hover:text-[#008DDA]"
                      >
                        <span className="mt-0.5 text-[#008DDA]">→</span>
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
