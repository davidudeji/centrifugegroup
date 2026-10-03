import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

interface ServiceData {
  title: string
  category: string
  problem: string
  solution: string
  capabilities: string[]
  process: { step: string; title: string; desc: string }[]
  technologies: string[]
  useCases: string[]
}

const serviceDatabase: Record<string, ServiceData> = {
  'software-development': {
    title: 'Application Development & Custom Software',
    category: 'Pillar 1: Application Development',
    problem:
      'Commercial off-the-shelf software rarely fits intricate multi-department workflows, causing organizations to run critical processes on chaotic spreadsheets and disconnected tools.',
    solution:
      'We believe in building softwares that are not just great, but memorable, inspiring, remarkable and entertaining. We work with companies to understand their users and to shape and guide their strategy across web, mobile, cloud, and enterprise e-commerce.',
    capabilities: [
      'Web application development (React, TypeScript, Node.js)',
      'Mobile application development (React Native, iOS, Android offline-first)',
      'Cloud & infrastructure application development with automated scaling',
      'E-commerce platforms and high-security transactional portals',
      'High-performance relational database schemas (PostgreSQL) with audit triggers',
      'Event-driven background job queues and resilient microservices',
      'Role-based access control complying with ISO and NDPR regulations',
    ],
    process: [
      { step: '01', title: 'Operational Discovery', desc: 'Detailed workflow mapping with departmental leads and end users.' },
      { step: '02', title: 'System Blueprinting', desc: 'Interactive prototypes, database entity models, and API specifications.' },
      { step: '03', title: 'Iterative Engineering', desc: 'Bi-weekly sprint demos with production-grade test coverage.' },
      { step: '04', title: 'Deployment & Training', desc: 'Zero-downtime deployment followed by hands-on user enablement.' },
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Redis', 'Tailwind CSS'],
    useCases: [
      'Centralized enterprise ERP and financial accounting suites',
      'National professional credentialing and digital licensing registries',
      'Multi-branch retail inventory and warehouse stock management',
    ],
  },
  'mobile-development': {
    title: 'Mobile Application Engineering',
    category: 'Pillar 1: Application Development',
    problem:
      'Field workers, truck drivers, and community healthcare workers frequently operate in remote regions with unstable or absent cellular network coverage.',
    solution:
      'We engineer offline-first mobile applications with local-first transactional stores and automated background delta synchronization when reconnected.',
    capabilities: [
      'Offline-first data architectures using encrypted local SQLite stores',
      'Biometric fingerprint and camera OCR identification',
      'Bluetooth integration with portable POS printers and medical probes',
      'Mobile Device Management (MDM) deployment for corporate fleets',
    ],
    process: [
      { step: '01', title: 'Field UX Research', desc: 'Testing interface ergonomic constraints under sunlight and on low-spec hardware.' },
      { step: '02', title: 'Sync Architecture', desc: 'Designing conflict-free replicated data models (CRDT) for offline edits.' },
      { step: '03', title: 'Native Integration', desc: 'Hardware peripheral interfacing (GPS, Bluetooth, NFC).' },
      { step: '04', title: 'Rollout & Telemetry', desc: 'Crash reporting and automated over-the-air updates.' },
    ],
    technologies: ['React Native', 'TypeScript', 'SQLite', 'C/C++ Embedded', 'Background Sync Workers'],
    useCases: [
      'Logistics driver delivery and proof-of-delivery (ePOD) handhelds',
      'Community health worker patient survey and triage tools',
      'Mobile POS cash collection for distributors and FMCG sales teams',
    ],
  },
  cloud: {
    title: 'Cloud & Infrastructure Services',
    category: 'Pillar 4: Infrastructure & Connectivity',
    problem:
      'Self-hosted servers and poorly configured cloud instances suffer catastrophic outages during traffic spikes, unmonitored disk fills, and lack automated disaster recovery.',
    solution:
      'Centrifuge engineers automated containerized cloud environments with automated scaling, multi-region failovers, and 99.9% uptime SLA commitments.',
    capabilities: [
      'Container orchestration using Docker and Kubernetes',
      'Infrastructure as Code (Terraform / Ansible)',
      'Automated database snapshots with point-in-time recovery',
      'Web Application Firewall (WAF) and DDoS mitigation',
    ],
    process: [
      { step: '01', title: 'Infrastructure Audit', desc: 'Assessing single-points-of-failure, security holes, and cloud expenditure.' },
      { step: '02', title: 'Topology Design', desc: 'Blue-green deployment architecture and automated backup pipelines.' },
      { step: '03', title: 'Migration Execution', desc: 'Zero-loss database migration with minimum maintenance windows.' },
      { step: '04', title: '24/7 Monitoring', desc: 'Automated paging and proactive incident remediation.' },
    ],
    technologies: ['Docker', 'Kubernetes', 'AWS', 'Linux ARM', 'PostgreSQL HA', 'Cloudflare', 'Prometheus'],
    useCases: [
      'Hosting high-concurrency national examination registration portals',
      'Mission-critical hospital EMR cloud backups',
      'Enterprise ERP application clusters',
    ],
  },
  infrastructure: {
    title: 'Hardware & Connectivity Services',
    category: 'Pillar 4: Infrastructure & Connectivity',
    problem:
      'Erratic national power grids and harsh tropical temperatures damage sensitive server hardware and interrupt commercial operations and point-of-sale systems.',
    solution:
      'Turnkey hardware and connectivity provisioning: pure sine wave hybrid inverters, zero-transfer online UPS cabinets, and ruggedized IP67 IoT telemetry devices.',
    capabilities: [
      'Managed IT Services and continuous operational monitoring',
      'Cloud Services and server colocation support',
      'Hardware and Software Integration for industrial setups',
      'Hardware Solutions: UPS cabinets, pure sine wave inverters, surge suppression',
      'Network Services: low-latency multi-branch interconnects and SD-WAN',
    ],
    process: [
      { step: '01', title: 'Load Audit', desc: 'On-site power and telemetry audit measuring true surge requirements.' },
      { step: '02', title: 'Hardware Sizing', desc: 'Selecting calibrated inverters, battery banks, and sensor nodes.' },
      { step: '03', title: 'Turnkey Installation', desc: 'Physical deployment, cable management, and telemetry commissioning.' },
      { step: '04', title: 'Remote Monitoring', desc: 'Connecting hardware to cloud telemetry boards for automated alerts.' },
    ],
    technologies: ['Modbus RS485', 'MQTT', 'Pure Sine Wave', 'LiFePO4 Batteries', 'CAN-Bus OBD-II'],
    useCases: [
      'Hospital diagnostic laboratory uninterrupted power backup',
      'Commercial logistics interstate fleet GPS telemetry tracking',
      'Enterprise server room modular UPS power conditioning',
    ],
  },
  'managed-it': {
    title: 'Managed IT & Enterprise Connectivity',
    category: 'Pillar 4: Infrastructure & Connectivity',
    problem:
      'Hiring full-time in-house specialist teams for network security, database tuning, and hardware maintenance is expensive and difficult to retain.',
    solution:
      'Centrifuge acts as your dedicated enterprise systems custodian, providing guaranteed response times, regular security audits, and continuous system maintenance.',
    capabilities: [
      'Managed IT Services and 24/7 dedicated support engineers',
      'Continuous performance tuning and database index optimization',
      'Regular penetration testing and compliance audits',
      'Network Service engineering, firewall administration, and secure VPNs',
    ],
    process: [
      { step: '01', title: 'SLA Baseline', desc: 'Defining clear response times and priority incident escalation trees.' },
      { step: '02', title: 'Agent Deployment', desc: 'Installing non-intrusive health probes across server nodes.' },
      { step: '03', title: 'Continuous Maintenance', desc: 'Patch management, security updates, and automated backups.' },
      { step: '04', title: 'Reporting', desc: 'Monthly SLA reports and optimization recommendations.' },
    ],
    technologies: ['Grafana', 'Prometheus', 'PostgreSQL Admin Tools', 'Network Scanners', 'OpenVPN'],
    useCases: [
      'Public sector ministry national platform operations',
      'Enterprise corporate headquarters network maintenance',
    ],
  },
  consulting: {
    title: 'IT Consultancy & Strategic Advisory',
    category: 'Pillar 3: IT Consultancy',
    problem:
      'Organizations waste millions on software licenses and failed implementations due to vendor lock-in, poor architectural planning, or misunderstood requirements.',
    solution:
      'Our IT Consulting team provides clients with access to a specialized group of professional resources experienced in a range of programme and project-related activities, trusted by multilateral agencies like WHO, UNICEF, and MSH.',
    capabilities: [
      'Strategic IT Consulting for international agencies and government ministries',
      'Programme and project development & management advisory',
      'Comprehensive software architecture and database audits',
      'Technical RFP drafting and vendor proposal evaluation',
      'Data governance and NDPR privacy compliance advisory',
    ],
    process: [
      { step: '01', title: 'Stakeholder Interviews', desc: 'Engaging executive management, operations teams, and IT staff.' },
      { step: '02', title: 'Architecture Review', desc: 'Deep inspection of current codebases, schemas, and infrastructure.' },
      { step: '03', title: 'Gap Analysis', desc: 'Identifying bottlenecks, security risks, and technical debt.' },
      { step: '04', title: 'Actionable Blueprint', desc: 'Delivering practical implementation blueprints and cost models.' },
    ],
    technologies: ['TOGAF Framework', 'Enterprise Architecture', 'NDPR Standards', 'OpenHIE'],
    useCases: [
      'Federal ministry health informatics architecture review',
      'Multilateral institutional programme systems evaluation',
      'Enterprise logistics digital modernization feasibility study',
    ],
  },
  training: {
    title: 'IT Training & Institutional Capacity Building',
    category: 'Pillar 2: IT Training',
    problem:
      'Sophisticated software systems fail when end-users are intimidated by the interface or lack structured hands-on training.',
    solution:
      'Are you driving your organization to becoming more standardized, simplified and automated? Our consultants can help your team assess the current state of your organizational processes, establish a new strategic vision and prioritize a roadmap of change programs designed to help you transform your business.',
    capabilities: [
      'Database administration training (PostgreSQL, MySQL, Schema Optimization)',
      'Project development and management methodologies (Agile, Scrum, Prince2)',
      'Big Data analytics, ingestion pipelines, and business intelligence',
      'Customized role-specific curriculum design and digital sandboxes',
      'Nationwide train-the-trainer cascading workshops',
      'Post-training competency assessments and certification',
    ],
    process: [
      { step: '01', title: 'Skill Assessment', desc: 'Evaluating baseline digital literacy among operational cohorts.' },
      { step: '02', title: 'Curriculum Development', desc: 'Building practical scenario-based training materials.' },
      { step: '03', title: 'Interactive Delivery', desc: 'Conducting in-person and hybrid hands-on sandbox workshops.' },
      { step: '04', title: 'Post-Training Support', desc: 'Providing ongoing desk support and refresher modules.' },
    ],
    technologies: ['Interactive Sandbox LMS', 'Video Guides', 'Illustrated Job Aids', 'PostgreSQL Labs'],
    useCases: [
      'Training federal and state health planning officers on HRHIS registries',
      'Training warehouse and dispatch staff on Optimax ERP systems',
      'Corporate big data and relational database administrator workshops',
    ],
  },
}

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const service = (slug && serviceDatabase[slug]) || serviceDatabase['software-development']

  return (
    <div className="w-full text-left bg-white text-[#0B1F33]">
      <SEO
        title={`${service.title} | Centrifuge Group Capabilities`}
        description={service.solution}
      />

      {/* Hero Header */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto space-y-5">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#94A3B8] hover:text-[#16C7D9] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Engineering Services</span>
          </Link>

          <div className="flex items-center gap-2 pt-1">
            <span className="h-px w-6 bg-[#16C7D9]" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#16C7D9]">
              {service.category}
            </span>
          </div>

          <h1
            className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            {service.title}
          </h1>

          <p className="text-[16px] text-[#94A3B8] leading-relaxed max-w-3xl">
            {service.solution}
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-[6px] bg-[#16C7D9] text-[#0B1F33] hover:bg-[#10b8ca] text-[13px] font-semibold transition-colors"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center h-10 px-6 rounded-[6px] bg-transparent border border-white/20 text-[#94A3B8] hover:text-white text-[13px] transition-colors"
            >
              <span>Explore all pillars</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto space-y-10">

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-7 rounded-[12px] border border-[#E2E8F0] space-y-3">
              <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#94A3B8] block">
                The Operational Bottleneck
              </span>
              <p className="text-[14px] text-[#475569] leading-relaxed">
                {service.problem}
              </p>
            </div>

            <div className="bg-white p-7 rounded-[12px] border border-[#E2E8F0] space-y-3">
              <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#16C7D9] block">
                The Centrifuge Approach
              </span>
              <p className="text-[14px] text-[#334155] leading-relaxed">
                {service.solution}
              </p>
            </div>
          </div>

          {/* Capabilities */}
          <div className="bg-white p-8 rounded-[12px] border border-[#E2E8F0] space-y-5">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#94A3B8] block mb-1">
                SCOPE & DELIVERABLES
              </span>
              <h3 className="text-[22px] font-bold text-[#0B1F33] tracking-[-0.025em]">
                Engineered Capabilities
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {service.capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#475569]">
                  <CheckCircle2 className="h-4 w-4 text-[#16C7D9] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Step Process */}
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#94A3B8] block mb-1">
                METHODOLOGY
              </span>
              <h3 className="text-[22px] font-bold text-[#0B1F33] tracking-[-0.025em]">
                Implementation Workflow
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {service.process.map((p) => (
                <div
                  key={p.step}
                  className="bg-white p-6 rounded-[12px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200"
                >
                  <span className="inline-block text-[11px] font-bold text-[#16C7D9] px-2 py-0.5 rounded-[4px] border border-[#67E8F9]/30 bg-[#EFF9FA]">
                    {p.step}
                  </span>
                  <h4 className="text-[15px] font-bold text-[#0B1F33] mt-4 tracking-[-0.015em]">
                    {p.title}
                  </h4>
                  <p className="text-[12.5px] text-[#475569] mt-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies & Use Cases */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-7 rounded-[12px] border border-[#E2E8F0] space-y-4">
              <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#94A3B8] block">
                Technology Standards
              </span>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-[4px] bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] text-[#475569] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-7 rounded-[12px] border border-[#E2E8F0] space-y-4">
              <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#94A3B8] block">
                Representative Deployments
              </span>
              <div className="space-y-2.5">
                {service.useCases.map((uc, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[13px] text-[#475569]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#16C7D9] shrink-0" />
                    <span>{uc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="p-8 sm:p-10 rounded-[12px] bg-[#0B1F33] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-[20px] font-bold text-white tracking-[-0.025em]">
                Ready to scope your requirements?
              </h3>
              <p className="text-[13px] text-[#94A3B8] mt-1">
                Consult with our senior technical architects today.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-[6px] bg-[#16C7D9] text-[#0B1F33] hover:bg-[#10b8ca] text-[13px] font-semibold shrink-0 transition-colors"
            >
              <span>Talk to Centrifuge</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetailPage
