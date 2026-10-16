import React from 'react'
import { Link } from 'react-router-dom'
import {
  BarChart3,
  Briefcase,
  Cog,
  GraduationCap,
  Layers,
  PieChart,
  ArrowRight,
} from 'lucide-react'

const pillars = [
  {
    id: 'app-dev',
    icon: Cog,
    title: 'Application Development',
    description:
      'Institutional-grade applications that balance business logic, architectural integrity, and reliable cloud delivery.',
    links: [
      { label: 'Web application development', href: '/services/software-development' },
      { label: 'Mobile application development', href: '/services/mobile-development' },
      { label: 'Cloud & microservice development', href: '/services/cloud' },
      { label: 'Enterprise transactional systems', href: '/services/software-development' },
    ],
    accentColor: '#0756A5',
  },
  {
    id: 'it-training',
    icon: GraduationCap,
    title: 'IT Training & Capacity',
    description:
      'Structured upskilling for teams building, securing, and operating modern digital systems at enterprise scale.',
    links: [
      { label: 'Database administration & SQL tuning', href: '/services/training' },
      { label: 'Project architecture & Agile management', href: '/services/training' },
      { label: 'Big Data & telemetry engineering', href: '/services/training' },
    ],
    accentColor: '#1677D2',
  },
  {
    id: 'it-consultancy',
    icon: PieChart,
    title: 'IT Consultancy & Audit',
    description:
      'Technical advisory for institutions needing system auditability, modernization roadmaps, and regulatory alignment.',
    links: [
      { label: 'World Health Organization (WHO)', href: '/clients' },
      { label: 'UNICEF — Child Health Systems', href: '/clients' },
      { label: 'Management Sciences for Health', href: '/clients' },
    ],
    accentColor: '#0756A5',
  },
  {
    id: 'infrastructure',
    icon: Layers,
    title: 'Infrastructure & Connectivity',
    description:
      'Secure hosting, resilient networking, and operational systems that keep critical services available and maintainable.',
    links: [
      { label: 'Managed IT & 24/7 operations', href: '/services/managed-it' },
      { label: 'Multi-cloud hosting & DevOps', href: '/services/cloud' },
      { label: 'Hardware & telematics integration', href: '/services/infrastructure' },
      { label: 'Data center power & clean energy', href: '/shop' },
    ],
    accentColor: '#1677D2',
  },
  {
    id: 'enterprise-solutions',
    icon: BarChart3,
    title: 'Enterprise Solutions',
    description:
      'ERP, banking rails, and operational platforms designed for complex regulatory and multi-entity environments.',
    links: [
      { label: 'Optimax ERP core suite', href: '/solutions/optimax' },
      { label: 'Project Development & Management Studio', href: '/solutions/project-development-management' },
      { label: 'Custom institutional digital portals', href: '/services/software-development' },
    ],
    accentColor: '#0756A5',
  },
  {
    id: 'business-solutions',
    icon: Briefcase,
    title: 'Business Solutions',
    description:
      'Commercial systems that improve visibility, automate workflows, and create measurable operational efficiency.',
    links: [
      { label: 'SaaS platform development', href: '/solutions/optimax' },
      { label: 'Procurement & hardware store', href: '/shop' },
      { label: 'Data analytics & executive dashboards', href: '/solutions/data-analytics' },
    ],
    accentColor: '#1677D2',
  },
]

export const ServicesSection: React.FC = () => {
  return (
    <section className="border-b border-[#E2E8F0] bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">

        {/* Section header — editorial left-aligned */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[640px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#F28C28]" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F28C28]">
                Capabilities
              </p>
            </div>
            <h2 className="text-[2.125rem] font-bold leading-[1.06] tracking-[-0.04em] text-[#0F2C59] sm:text-[2.625rem] lg:text-[3rem]">
              Capabilities engineered for institutional scale.
            </h2>
            <p className="mt-4 max-w-[560px] text-[1rem] leading-[1.75] text-[#475569]">
              From application design and systems integration to cloud operations and enterprise
              advisory, we support every stage of digital evolution.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex shrink-0 items-center gap-1.5 text-[0.875rem] font-semibold text-[#0756A5] hover:text-[#073B70] transition-colors group"
          >
            <span>All services</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* 6-card grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <article
                key={pillar.id}
                className="group relative flex flex-col rounded-[16px] border border-[#E8EDF3] bg-[#FAFBFC] p-7 transition-all duration-250 hover:-translate-y-0.5 hover:border-[#0756A5]/20 hover:bg-white hover:shadow-[0_20px_48px_rgba(7,86,165,0.08)]"
              >
                {/* Top accent line on hover */}
                <div
                  className="absolute inset-x-0 top-0 h-[3px] rounded-t-[16px] opacity-0 transition-opacity duration-250 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, ${pillar.accentColor}, transparent)` }}
                  aria-hidden="true"
                />

                {/* Number badge */}
                <div className="absolute right-6 top-6 text-[11px] font-bold tabular-nums text-[#CBD5E1]">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-[10px] transition-colors duration-200"
                  style={{
                    background: `${pillar.accentColor}12`,
                    color: pillar.accentColor,
                  }}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <h3 className="text-[0.9375rem] font-bold uppercase tracking-[0.05em] text-[#0F2C59]">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-[0.875rem] leading-[1.72] text-[#475569]">
                  {pillar.description}
                </p>

                {/* Links */}
                <div className="mt-5 flex-1 space-y-1.5 border-t border-[#E8EDF3] pt-4">
                  {pillar.links.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="flex items-start gap-2 text-[0.8125rem] text-[#64748B] transition-colors hover:text-[#0756A5]"
                    >
                      <span className="mt-0.5 text-[#0756A5] shrink-0" aria-hidden="true">→</span>
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
