import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Smartphone, Cloud, Cpu, GraduationCap, BarChart } from 'lucide-react'

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
    <section className="py-20 lg:py-24 bg-[#121212] border-b border-[#1e1e1d]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684] mb-3">
            <span>FULL LIFECYCLE ENGINEERING</span>
          </div>
          <h2 className="text-[32px] sm:text-[42px] font-normal text-[#faf9f6] tracking-[-1.13px] leading-[1.05]">
            From strategy to systems in production.
          </h2>
          <p className="text-[15px] text-[#868684] tracking-[-0.14px] mt-3 max-w-2xl leading-[1.4]">
            We partner with organizations through every phase of system evolution—from initial architectural blueprinting to nationwide field rollout.
          </p>
        </div>

        {/* ─── Warp Services Cards (Onyx #1e1e1d, 20px radius) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <div
                key={svc.title}
                className="p-6 rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] hover:border-[#333333] transition-colors text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="h-8 w-8 rounded-[4px] bg-[#121212] border border-[#333333] flex items-center justify-center group-hover:border-[#cbb0f7] transition-colors">
                    <Icon className="h-4 w-4 text-[#cbb0f7]" />
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#faf9f6] tracking-[-0.18px] mt-4 leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-[13px] text-[#868684] mt-2 leading-relaxed tracking-[-0.14px]">
                    {svc.outcome}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#333333]/50">
                  <Link
                    to={svc.slug}
                    className="inline-flex items-center gap-1.5 text-[13px] text-[#faf9f6] group-hover:text-[#cbb0f7] transition-colors"
                  >
                    <span>Capabilities & process</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
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
export default ServicesSection
