import React from 'react'
import { Link } from 'react-router-dom'
import {
  Code2,
  Smartphone,
  Cloud,
  Server,
  Shield,
  Lightbulb,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    id: 'software-dev',
    icon: Code2,
    title: 'Software Development',
    desc: 'Custom enterprise applications, web platforms, and integrations built with modern architecture.',
    href: '/services/software-development',
  },
  {
    id: 'mobile-dev',
    icon: Smartphone,
    title: 'Mobile Development',
    desc: 'Native and cross-platform mobile apps for iOS and Android that work seamlessly offline.',
    href: '/services/mobile-development',
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Services',
    desc: 'Cloud migration, architecture design, containerisation, and DevOps implementation.',
    href: '/services/cloud',
  },
  {
    id: 'infrastructure',
    icon: Server,
    title: 'Infrastructure',
    desc: 'Data centres, networking, hardware supply, and physical IT infrastructure deployment.',
    href: '/services/infrastructure',
  },
  {
    id: 'managed-it',
    icon: Shield,
    title: 'Managed IT',
    desc: 'Proactive monitoring, support, and operations management for production environments.',
    href: '/services/managed-it',
  },
  {
    id: 'consulting',
    icon: Lightbulb,
    title: 'Technology Consulting',
    desc: 'Strategic advisory — digital transformation roadmaps, architecture reviews, and feasibility.',
    href: '/services/consulting',
  },
  {
    id: 'training',
    icon: GraduationCap,
    title: 'Training',
    desc: 'Institutional capacity building, user onboarding, and technical certification programmes.',
    href: '/services/training',
  },
]

export const ServicesSection: React.FC = () => {
  return (
    <section className="section-py bg-[#F7F9FA] border-b border-[#E2E8F0]">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="badge-eyebrow mb-4">Services</div>
            <h2 className="text-h2 text-[#0B1F33] mb-4">
              End-to-end technology services.
            </h2>
            <p className="text-body-lg text-[#64748B]">
              From strategy to deployment to long-term support — we work alongside
              organisations through every phase of technology delivery.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#64748B] hover:text-[#0B1F33] transition-colors shrink-0"
            id="services-view-all"
          >
            All services
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Services list — editorial left-aligned layout */}
        <div className="divide-y divide-[#E2E8F0]">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <Link
                key={svc.id}
                to={svc.href}
                className="group flex items-center gap-6 py-5 hover:bg-white rounded-[8px] px-4 -mx-4 transition-colors"
                aria-label={svc.title}
              >
                {/* Index number */}
                <span className="text-[13px] font-mono text-[#CBD5E1] w-6 shrink-0 hidden sm:block">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="h-10 w-10 rounded-[10px] bg-white border border-[#E2E8F0] flex items-center justify-center shrink-0 group-hover:bg-[#0B1F33] group-hover:border-[#0B1F33] transition-all duration-200">
                  <Icon className="h-5 w-5 text-[#0B1F33] group-hover:text-[#16C7D9] transition-colors" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-[17px] font-heading font-600 text-[#0B1F33] tracking-tight group-hover:text-[#16C7D9] transition-colors mb-0.5">
                    {svc.title}
                  </h3>
                  <p className="text-[14px] text-[#64748B] leading-relaxed truncate sm:whitespace-normal">
                    {svc.desc}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight className="h-4 w-4 text-[#CBD5E1] group-hover:text-[#16C7D9] group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 rounded-[16px] bg-[#0B1F33] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <h3 className="text-[20px] font-heading font-700 text-white mb-1">
              Not sure where to start?
            </h3>
            <p className="text-[14px] text-[#94A3B8]">
              Talk to our team and we'll help you find the right fit.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-accent shrink-0"
            id="services-cta"
          >
            Talk to an Expert
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
