import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { ArrowRight, Code2, Smartphone, Cloud, Cpu, Users, GraduationCap, ShieldCheck } from 'lucide-react'
import { Button } from '../../components/ui/Button'

export const ServicesPage: React.FC = () => {
  const services = [
    {
      slug: 'software-development',
      title: 'Custom Software Development',
      icon: Code2,
      desc: 'Design and build reliable digital products around the way your organization actually works. From enterprise web applications to high-concurrency transactional portals.',
      deliverables: ['Custom Web Applications', 'API Architecture', 'Relational Database Schema Design', 'Automated QA & Unit Testing'],
    },
    {
      slug: 'mobile-development',
      title: 'Mobile Application Engineering',
      icon: Smartphone,
      desc: 'Offline-first Android and iOS applications built for harsh field environments, driver telematics, community health worker data collection, and retail sales.',
      deliverables: ['Offline-First Sync', 'Biometric Authentication', 'Hardware Peripheral Integration', 'App Store & MDM Deployment'],
    },
    {
      slug: 'cloud',
      title: 'Cloud & Infrastructure Services',
      icon: Cloud,
      desc: 'Enterprise cloud hosting, containerized orchestration with Docker and Kubernetes, automated zero-downtime CI/CD deployment pipelines, and multi-region failover.',
      deliverables: ['Multi-Cloud Topologies', 'Container Orchestration', 'Automated Backups & DR', 'Security Audits & Hardening'],
    },
    {
      slug: 'infrastructure',
      title: 'Hardware & Telemetry Infrastructure',
      icon: ShieldCheck,
      desc: 'Provisioning, configuring, and maintaining heavy-duty pure sine wave inverters, online UPS backup systems, and ruggedized IoT fleet telemetry gateways.',
      deliverables: ['Industrial Power Backups', 'Fleet GPS Telematics', 'Cold-Chain IoT Probes', 'Server Room Turnkey Setup'],
    },
    {
      slug: 'managed-it',
      title: 'Managed IT & Enterprise Support',
      icon: Cpu,
      desc: '24/7 proactive infrastructure monitoring, network security, helpdesk support, and guaranteed operational SLAs for mission-critical corporate installations.',
      deliverables: ['24/7 SLA Monitoring', 'Network Hardening', 'Disaster Recovery Testing', 'Vendor Hardware Management'],
    },
    {
      slug: 'consulting',
      title: 'Technology Consulting & Digital Strategy',
      icon: Users,
      desc: 'Assisting C-suite leadership and public sector executives in evaluating technology feasibility, modernizing legacy systems, and crafting scalable digital roadmaps.',
      deliverables: ['Legacy System Audits', 'Architecture Blueprints', 'Tech Vendor RFP Evaluations', 'Compliance & NDPR Advisory'],
    },
    {
      slug: 'training',
      title: 'Institutional Training & Capacity Building',
      icon: GraduationCap,
      desc: 'Structured, hands-on technical and operational training programs ensuring your internal workforce masters deployed platforms with confidence.',
      deliverables: ['Executive User Workshops', 'Technical Admin Training', 'Interactive Field Manuals', 'Change Management Programs'],
    },
  ]

  return (
    <div className="w-full text-left">
      <SEO
        title="Engineering Services & Capabilities | Centrifuge Group"
        description="Software development, mobile apps, cloud infrastructure, managed IT, consulting, and institutional training."
      />

      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-[#172333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-[#16C7D9] tracking-wider uppercase">
              FULL LIFECYCLE CAPABILITIES
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              From strategy to systems in production.
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              We provide end-to-end engineering, cloud deployment, and institutional capacity building tailored to the operational demands of Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => {
              const Icon = svc.icon
              return (
                <div
                  key={svc.slug}
                  className="bg-white rounded-[16px] border border-[#E2E8F0] p-8 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-sm transition-all group"
                >
                  <div>
                    <div className="h-10 w-10 rounded-[8px] bg-[#0B1F33]/5 text-[#0B1F33] flex items-center justify-center group-hover:bg-[#16C7D9]/15 group-hover:text-[#0E7490] transition-colors mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1F33] font-heading group-hover:text-[#16C7D9] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                      {svc.desc}
                    </p>

                    <div className="mt-5 space-y-1.5 pt-4 border-t border-[#E2E8F0]/80">
                      <span className="text-[11px] font-bold text-[#111827] uppercase tracking-wider block mb-1">
                        Core Deliverables:
                      </span>
                      {svc.deliverables.map((d) => (
                        <div key={d} className="text-xs text-[#475569] flex items-center gap-1.5">
                          <span className="h-1 w-1 rounded-full bg-[#16C7D9]" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
                    <Link
                      to={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F33] group-hover:text-[#16C7D9] transition-colors"
                    >
                      <span>Explore service details & process</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
export default ServicesPage
