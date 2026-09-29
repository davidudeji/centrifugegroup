import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Smartphone, Cloud, Cpu, Users, GraduationCap, BarChart } from 'lucide-react'

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Custom Software Development',
      slug: '/services/software-development',
      icon: Code2,
      outcome: 'Design and build reliable digital products around the way your organization actually works.',
    },
    {
      title: 'Mobile Application Engineering',
      slug: '/services/mobile-development',
      icon: Smartphone,
      outcome: 'Offline-capable Android & iOS applications ensuring field teams capture data without interruption.',
    },
    {
      title: 'Cloud & Infrastructure Services',
      slug: '/services/cloud',
      icon: Cloud,
      outcome: 'Architect, secure, and maintain multi-region cloud systems with high-uptime SLAs.',
    },
    {
      title: 'Enterprise Data & Analytics',
      slug: '/solutions/data-analytics',
      icon: BarChart,
      outcome: 'Convert transactional noise into clean executive business intelligence and spatial GIS heatmaps.',
    },
    {
      title: 'Technology Consulting & Architecture',
      slug: '/services/consulting',
      icon: Cpu,
      outcome: 'Auditing legacy software, modernizing database topologies, and crafting scalable digital roadmaps.',
    },
    {
      title: 'Institutional Training & Capacity',
      slug: '/services/training',
      icon: GraduationCap,
      outcome: 'Empower internal government and corporate teams through structured, hands-on technical programs.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-[#16C7D9]">
            Full Lifecycle Engineering
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-heading mt-2 tracking-tight">
            From strategy to systems in production.
          </h2>
          <p className="text-base text-[#64748B] mt-3">
            We partner with organizations through every phase of system evolution—from initial architectural blueprinting to nationwide field rollout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <div
                key={svc.title}
                className="p-6 rounded-[12px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs transition-all text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="h-9 w-9 rounded-[6px] bg-[#F1F5F9] text-[#0B1F33] flex items-center justify-center group-hover:bg-[#0B1F33] group-hover:text-[#16C7D9] transition-colors">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1F33] font-heading mt-4 group-hover:text-[#16C7D9] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                    {svc.outcome}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E2E8F0]/80">
                  <Link
                    to={svc.slug}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B1F33] group-hover:text-[#16C7D9] transition-colors"
                  >
                    <span>Capabilities & process</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
