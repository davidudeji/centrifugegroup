import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Check,
  Cloud,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Globe2,
  Layers3,
  LifeBuoy,
  Network,
  Server,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import { SEO } from '../../components/ui/SEO'
import { Reveal } from '../../components/ui/Reveal'

const root = '/optima-xcloud'

type CloudPageKey =
  | 'overview'
  | 'platform'
  | 'integrations'
  | 'solutions'
  | 'migration'
  | 'pricing'
  | 'documentation'

type SectionContent = {
  title: string
  text: string
  bullets?: string[]
}

const pageMeta: Record<CloudPageKey, { title: string; description: string; eyebrow: string; heading: string; intro: string }> = {
  overview: {
    title: 'OptimaXCloud | Cloud Infrastructure and Application Operations',
    description: 'Explore OptimaXCloud from Centrifuge Group for cloud infrastructure management, application deployment, integrations, migration, and managed cloud services.',
    eyebrow: 'CLOUD INFRASTRUCTURE & APPLICATION OPERATIONS',
    heading: 'Cloud infrastructure. Connected operations.',
    intro: 'OptimaXCloud brings cloud infrastructure management, application deployment, networking, and operational workflows into a unified experience. From hosting business applications to managing cloud environments, Centrifuge Group helps organizations plan, deploy, and operate the technology their business depends on.',
  },
  platform: {
    title: 'OptimaXCloud Platform | Cloud Infrastructure Management',
    description: 'Explore the OptimaXCloud infrastructure and cloud operations approach, from service catalogs and provisioning workflows to tenant management and recovery planning.',
    eyebrow: 'PLATFORM & CAPABILITIES',
    heading: 'Manage the infrastructure behind your applications.',
    intro: 'Explore the operational capabilities that connect infrastructure provisioning, application delivery, networking, customer environments, and ongoing cloud management.',
  },
  integrations: {
    title: 'OptimaXCloud Integrations | CloudStack, Terraform and Proxmox',
    description: 'Learn about the documented OptimaXCloud integration approach for Apache CloudStack, Terraform, and Proxmox, subject to implementation and availability confirmation.',
    eyebrow: 'INTEGRATIONS & ARCHITECTURE',
    heading: 'Connect cloud operations with the infrastructure you use.',
    intro: 'OptimaXCloud is designed around a provider-adapter approach that separates the customer-facing experience from infrastructure-specific operations. This approach can support a more consistent management experience across different environments, subject to the integrations implemented and enabled.',
  },
  solutions: {
    title: 'Cloud Hosting for Business Applications | Centrifuge Group',
    description: 'Explore cloud infrastructure and managed services considerations for enterprise applications, websites, healthcare systems, collaboration, and specialized workloads.',
    eyebrow: 'SOLUTIONS & WORKLOADS',
    heading: 'Cloud infrastructure designed around your applications.',
    intro: 'Different workloads have different requirements. Explore how cloud infrastructure, deployment workflows, and managed services can support the applications and systems your organization depends on.',
  },
  migration: {
    title: 'Cloud Migration and Managed Services | Centrifuge Group',
    description: 'Plan cloud transitions with Centrifuge Group: assess dependencies, prepare destination environments, validate critical services, and coordinate cutover.',
    eyebrow: 'CLOUD MIGRATION & MANAGED SERVICES',
    heading: 'Move your workloads with confidence and a clear migration plan.',
    intro: 'Centrifuge Group helps organizations assess existing environments, plan cloud transitions, prepare destination infrastructure, validate critical services, and coordinate cutover procedures.',
  },
  pricing: {
    title: 'OptimaXCloud Pricing | Cloud Plans and Services',
    description: 'Review indicative OptimaXCloud plan ranges and the infrastructure, application, and support factors that determine a final quotation.',
    eyebrow: 'PLANS & PRICING',
    heading: 'Choose a cloud plan that fits your workload.',
    intro: 'Start with an indicative service tier, then confirm the infrastructure, application, support, and operational requirements that determine your final quotation.',
  },
  documentation: {
    title: 'OptimaXCloud Documentation and Technical Guides',
    description: 'Browse OptimaXCloud product information, user and technical documentation, integration guides, migration resources, pricing, and account access.',
    eyebrow: 'DOCUMENTATION & RESOURCES',
    heading: 'Everything you need to explore OptimaXCloud.',
    intro: 'Browse the available product documentation, integration guides, and migration resources to understand the platform and plan your implementation.',
  },
}

const pageSections: Partial<Record<CloudPageKey, SectionContent[]>> = {
  platform: [
    { title: 'Infrastructure catalog', text: 'An infrastructure catalog describes the service options that can be requested and the context in which they can be delivered. Availability depends on the connected infrastructure provider and configured service catalog.', bullets: ['Compute plans and storage options', 'Regions and provider configurations', 'Public IP allocation and virtual private clouds', 'DNS zones and firewall profiles'] },
    { title: 'Compute and infrastructure provisioning', text: 'A typical provider workflow validates a requested plan and deployment context, submits a provider-specific job, tracks its status, records resulting infrastructure identifiers, and returns deployment information. This describes an intended workflow, not a claim that every provider connection is live.' },
    { title: 'Application deployment', text: 'Application delivery planning brings packages, environment parameters, networking, DNS, backups, validation, and handover together. The actual deployment process depends on the workload and confirmed application catalog.' },
    { title: 'Tenant management and governance', text: 'Managed environments need clear ownership and operational boundaries. Relevant governance considerations include customer environments, access roles, service plans, quotas, usage tracking, operator permissions, and auditability.' },
    { title: 'Networking and connectivity', text: 'Public IP addresses, virtual private clouds, DNS, firewall configuration, and application connectivity vary by provider. Confirm the network actions available for the target environment before planning a deployment.' },
    { title: 'Monitoring and operations', text: 'A cloud operations plan may bring together infrastructure health, provisioning job status, resource usage, service events, operational alerts, backup status, and recovery procedures. Available observability depends on implementation.' },
    { title: 'Backups and restoration', text: 'Define backup ownership, policies, retention, snapshots, restoration procedures, and recovery testing with the service team. Recovery objectives and retention should be agreed for each workload rather than assumed.' },
    { title: 'Billing and service lifecycle', text: 'Plans, orders, payments, resource provisioning, usage reconciliation, customer billing, support, and service status form a connected lifecycle. One-time, recurring, or usage-based billing must be confirmed for the relevant service before purchase.' },
  ],
  solutions: [
    { title: 'Websites and e-commerce', text: 'Plan application environments around website hosting, DNS and SSL, database dependencies, backups, deployment, and migration. Performance and bandwidth depend on the selected environment and workload.' },
    { title: 'ERP and enterprise applications', text: 'Business applications benefit from suitable application and database environments, reliable connectivity, capacity planning, backup and restoration planning, role-based access, and considered maintenance.' },
    { title: 'CRM and business tools', text: 'Customer systems, internal portals, collaboration tools, document management, and reporting applications require attention to deployment requirements, user access, integrations, and data management.' },
    { title: 'Healthcare and institutional workloads', text: 'Plan for appropriate access controls, data protection, auditability, backups, operational continuity, and organizational requirements. No regulatory compliance or sensitive-data certification is implied.' },
    { title: 'AI and specialized computing', text: 'Compute-intensive workloads call for an assessment of CPU or GPU needs, capacity, storage, networking, and cost. GPU availability and pricing depend on the selected infrastructure environment.' },
    { title: 'Collaboration and open-source applications', text: 'Applications such as Nextcloud or WordPress may be considered where appropriate, but general deployment services should not be confused with verified one-click marketplace packages.' },
  ],
  migration: [
    { title: '1. Assess the current environment', text: 'Establish what is running, who owns it, and how the components depend on one another.', bullets: ['Websites, applications, and databases', 'Domains, DNS records, mailboxes, and SSL certificates', 'Scheduled jobs, storage, backups, and access requirements'] },
    { title: '2. Prepare the destination', text: 'Agree the target infrastructure and prepare runtimes, databases, firewall and network rules, DNS readiness, backups, and security review.' },
    { title: '3. Test before the move', text: 'Validate website and application behavior, database integrity, email delivery, DNS, SSL, performance, and backup restoration where appropriate.' },
    { title: '4. Coordinate cutover', text: 'Plan final synchronization, DNS changes, service checks, stakeholder communication, and rollback decision criteria. Downtime depends on the specific migration plan.' },
    { title: '5. Support the new environment', text: 'Confirm monitoring, backup verification, incident ownership, documentation, performance review, and any ongoing management arrangements.' },
  ],
}

const capabilities = [
  { title: 'Infrastructure management', text: 'Organize infrastructure plans, compute resources, storage, networking, and provider-specific configurations through a centralized workspace.', href: `${root}/platform/`, icon: Server },
  { title: 'Application deployment', text: 'Support repeatable application deployment workflows for websites and business applications using defined packages and deployment procedures.', href: `${root}/solutions/`, icon: Boxes },
  { title: 'Networking and DNS', text: 'Coordinate networking, public IP addresses, DNS, and firewall-related configuration as part of the cloud service lifecycle.', href: `${root}/platform/`, icon: Network },
  { title: 'Tenant and service management', text: 'Structure customer environments, access, quotas, service plans, and operational workflows around managed cloud delivery.', href: `${root}/platform/`, icon: Layers3 },
  { title: 'Monitoring and recovery', text: 'Bring operational visibility, backup planning, recovery procedures, and service oversight into the broader cloud management process.', href: `${root}/platform/`, icon: LifeBuoy },
  { title: 'Integrations', text: 'Connect cloud management workflows with infrastructure and automation technologies through a provider-adapter approach.', href: `${root}/integrations/`, icon: Workflow },
]

const integrations = [
  { name: 'Apache CloudStack', role: 'Infrastructure management platform', use: 'Virtual machines, networks, storage, accounts, projects, and service offerings.', official: 'https://cloudstack.apache.org/', guide: 'https://be.optimaxsuites.com/iaas/xcw/cloudstack-integration.html' },
  { name: 'Terraform', role: 'Infrastructure as code and automation', use: 'Reusable infrastructure definitions, repeatable deployments, and controlled infrastructure changes. Terraform is not itself a cloud provider.', official: 'https://www.terraform.io/', guide: 'https://be.optimaxsuites.com/iaas/xcw/terraform-integration.html' },
  { name: 'Proxmox', role: 'Virtualization and private infrastructure', use: 'Virtual machines, private infrastructure, cluster management, and resource allocation where suitable.', official: 'https://www.proxmox.com/', guide: 'https://be.optimaxsuites.com/iaas/xcw/proxmox-integration.html' },
]

const resources = [
  { title: 'Product overview', category: 'Product', text: 'General platform information and available product links.', href: 'https://be.optimaxsuites.com/iaas/xcw/index.html' },
  { title: 'User documentation', category: 'Documentation', text: 'User workflows, service orders, deployments, networking, billing, and support.', href: 'https://be.optimaxsuites.com/iaas/docs-user.html' },
  { title: 'Technical documentation', category: 'Documentation', text: 'Architecture, integrations, security, operations, and technical implementation details.', href: 'https://be.optimaxsuites.com/iaas/docs-technical.html' },
  { title: 'CloudStack integration', category: 'Integration guide', text: 'CloudStack integration model and provisioning workflows.', href: 'https://be.optimaxsuites.com/iaas/xcw/cloudstack-integration.html' },
  { title: 'Terraform integration', category: 'Integration guide', text: 'Infrastructure automation and Terraform integration.', href: 'https://be.optimaxsuites.com/iaas/xcw/terraform-integration.html' },
  { title: 'Proxmox integration', category: 'Integration guide', text: 'Private infrastructure and virtualization integration.', href: 'https://be.optimaxsuites.com/iaas/xcw/proxmox-integration.html' },
  { title: 'IONOS and Plesk migration guide', category: 'Migration', text: 'Migration planning for IONOS and Plesk environments.', href: 'https://be.optimaxsuites.com/iaas/xcw/migration-ionos-plesk.html' },
  { title: 'Product roadmap', category: 'Product', text: 'Published product direction and planned capabilities.', href: 'https://be.optimaxsuites.com/iaas/xcw/roadmap.html' },
  { title: 'Pricing', category: 'Commercial', text: 'Indicative plans and pricing information.', href: 'https://be.optimaxsuites.com/iaas/xcw/pricing.html' },
  { title: 'Account access', category: 'Account', text: 'Product sign-in and account registration.', href: 'https://be.optimaxsuites.com/iaas/login.html' },
]

function PageHero({ page }: { page: CloudPageKey }) {
  const meta = pageMeta[page]
  return (
    <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-white py-14 sm:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#0B1F33_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="section-container relative z-10">
        <Breadcrumbs current={meta.eyebrow} />
        <Reveal className={`pt-7 ${page === 'overview' ? 'grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]' : ''}`} duration={500} distance={14}>
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.19em] text-[#0B1F33]">
              <span className="h-2 w-2 rounded-full bg-[#E87916]" aria-hidden="true" />{meta.eyebrow}
            </p>
            <h1 className="marketing-hero__heading max-w-[800px] font-bold text-[#0B1F33]">{meta.heading}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#475569]">{meta.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="cloud-primary-button" to={page === 'overview' ? `${root}/platform/` : '/contact'}>{page === 'overview' ? 'Explore the Platform' : 'Talk to Our Cloud Team'}<ArrowRight size={16} aria-hidden="true" /></Link>
              <Link className="cloud-outline-button" to={page === 'overview' ? '/contact' : `${root}/integrations/`}>{page === 'overview' ? 'Talk to Our Cloud Team' : 'Explore Integrations'}</Link>
            </div>
          </div>
          {page === 'overview' && <ConceptualCloudVisual />}
        </Reveal>
      </div>
    </section>
  )
}

function ConceptualCloudVisual() {
  const nodes = [
    { label: 'Compute', icon: Cpu },
    { label: 'Applications', icon: Boxes },
    { label: 'Networking', icon: Network },
    { label: 'Operations', icon: Workflow },
  ]
  return (
    <figure className="mx-auto w-full max-w-xl rounded-lg border border-[#CBD5E1] bg-[#F7F9FA] p-5 sm:p-7">
      <figcaption className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#475569]"><Cloud size={16} className="text-[#008DDA]" aria-hidden="true" /> Conceptual cloud operations model</figcaption>
      <div className="grid grid-cols-2 gap-3">
        {nodes.map(({ label, icon: Icon }) => <div key={label} className="flex min-h-20 items-center gap-3 border border-[#E2E8F0] bg-white p-4"><Icon className="h-5 w-5 shrink-0 text-[#008DDA]" aria-hidden="true" /><span className="text-sm font-semibold">{label}</span></div>)}
      </div>
      <div className="my-4 flex items-center justify-center gap-2 text-[#E87916]"><span className="h-px flex-1 bg-[#CBD5E1]" /><ArrowDown size={18} aria-hidden="true" /><span className="h-px flex-1 bg-[#CBD5E1]" /></div>
      <div className="flex items-center gap-3 border border-[#CBD5E1] bg-[#0B1F33] p-4 text-white"><Globe2 className="h-5 w-5 text-[#FDBA74]" aria-hidden="true" /><span className="text-sm font-semibold">Customer environments</span></div>
      <p className="mt-4 text-xs leading-5 text-[#64748B]">Illustrative concept only; this is not a live platform screenshot or a representation of production metrics.</p>
    </figure>
  )
}

function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-[#64748B]">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link to="/" className="underline-offset-4 hover:text-[#0B1F33] hover:underline">Home</Link></li>
        <li aria-hidden="true">/</li>
        <li><Link to={`${root}/`} className="underline-offset-4 hover:text-[#0B1F33] hover:underline">OptimaXCloud</Link></li>
        {current !== 'CLOUD INFRASTRUCTURE & APPLICATION OPERATIONS' && <><li aria-hidden="true">/</li><li aria-current="page" className="text-[#0B1F33]">{current}</li></>}
      </ol>
    </nav>
  )
}

function Section({ title, description, children, dark = false }: { title: string; description?: string; children?: React.ReactNode; dark?: boolean }) {
  return (
    <section className={`border-b ${dark ? 'border-white/10 bg-[#0B1F33] text-white' : 'border-[#E2E8F0] bg-[#F7F9FA] text-[#0B1F33]'}`}>
      <div className="section-container section-py">
        <div className="mb-9 max-w-3xl">
          <h2 className={`marketing-section-heading font-bold ${dark ? 'text-white' : 'text-[#0B1F33]'}`}>{title}</h2>
          {description && <p className={`mt-4 text-base leading-7 ${dark ? 'text-slate-300' : 'text-[#64748B]'}`}>{description}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

function CloudCTA({ title, text, primary = 'Talk to Our Cloud Team', to = '/contact', secondary = 'Explore the Platform' }: { title: string; text: string; primary?: string; to?: string; secondary?: string }) {
  return (
    <section className="bg-[#0B1F33] text-white">
      <div className="section-container flex flex-col gap-7 py-14 sm:flex-row sm:items-center sm:justify-between sm:py-16">
        <div className="max-w-2xl"><h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2><p className="mt-3 leading-7 text-slate-300">{text}</p></div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link className="cloud-primary-button" to={to}>{primary}<ArrowRight size={16} aria-hidden="true" /></Link>
          {secondary && <Link className="cloud-light-button" to={`${root}/platform/`}>{secondary}</Link>}
        </div>
      </div>
    </section>
  )
}

function OverviewPage() {
  return (
    <>
      <PageHero page="overview" />
      <Section title="One connected approach to cloud operations." description="Cloud environments involve more than servers. Infrastructure, applications, networking, access, billing, backups, and support all need to work together. OptimaXCloud brings these operational concerns into one product experience, helping teams manage cloud services through a more consistent and structured workflow.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ title, text, href, icon: Icon }) => <Link key={title} to={href} className="group rounded-lg border border-[#E2E8F0] bg-white p-6 transition-colors hover:border-[#008DDA]/50">
            <Icon className="h-6 w-6 text-[#008DDA]" aria-hidden="true" /><h3 className="mt-4 text-lg font-semibold">{title}</h3><p className="mt-2 leading-6 text-[#64748B]">{text}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F33]">Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
          </Link>)}
        </div>
        <p className="mt-6 text-sm text-[#64748B]">Capabilities and workflows depend on the selected provider, service configuration, and implementation. Contact us to confirm availability.</p>
      </Section>
      <Section title="From infrastructure selection to managed delivery." description="A conceptual service lifecycle; the exact workflow depends on the infrastructure provider, service package, and implementation.">
        <ol className="grid gap-4 md:grid-cols-4">
          {[
            ['01', 'Define the environment', 'Select the workload, infrastructure requirements, service plan, and deployment context.'],
            ['02', 'Provision infrastructure', 'Use the relevant provider or infrastructure workflow to establish the required environment.'],
            ['03', 'Deploy the application', 'Configure the application, networking, DNS, and operational requirements.'],
            ['04', 'Operate and support', 'Manage the environment through appropriate monitoring, backups, support, and operating procedures.'],
          ].map(([number, title, text]) => <li key={number} className="border-l-2 border-[#E87916] bg-white p-5"><span className="font-mono text-xs font-semibold text-[#008DDA]">{number}</span><h3 className="mt-3 font-semibold">{title}</h3><p className="mt-2 leading-6 text-[#64748B]">{text}</p></li>)}
        </ol>
      </Section>
      <Section title="Built around the workloads organizations depend on." description="Workload suitability and deployment availability depend on specific requirements. Explore the planning considerations for each type.">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ['Business applications', 'enterprise-applications'],
            ['Websites and e-commerce', 'websites-ecommerce'],
            ['ERP and CRM', 'enterprise-applications'],
            ['Collaboration platforms', 'collaboration-open-source'],
            ['Healthcare and institutional systems', 'healthcare-institutional'],
            ['AI and specialized computing', 'ai-computing'],
          ].map(([workload, anchor]) => <Link key={workload} to={`${root}/solutions/#${anchor}`} className="flex min-h-20 items-center justify-between gap-3 rounded-md border border-[#E2E8F0] bg-white p-4 font-medium hover:border-[#008DDA]/60">{workload}<ArrowUpRight className="h-4 w-4 shrink-0 text-[#008DDA]" aria-hidden="true" /></Link>)}
        </div>
      </Section>
      <Section title="An integration strategy built for different infrastructure environments." description="The documented architecture aims to separate the customer-facing workspace from provider-specific infrastructure operations. Status and availability require confirmation for each implementation.">
        <IntegrationCards compact />
        <div className="mt-7"><Link to={`${root}/integrations/`} className="inline-flex items-center gap-2 font-semibold text-[#0B1F33] hover:text-[#008DDA]">Explore Integrations <ArrowRight size={16} aria-hidden="true" /></Link></div>
      </Section>
      <Section title="Move your workloads with a plan." description="Moving to the cloud involves more than transferring files. Infrastructure, databases, DNS, email, security configuration, and application dependencies all need to be considered. Centrifuge Group helps organizations plan cloud transitions, prepare destination environments, validate services, and coordinate cutover and recovery procedures.">
        <Link className="cloud-primary-button" to={`${root}/migration/`}>Explore Cloud Migration<ArrowRight size={16} aria-hidden="true" /></Link>
      </Section>
      <Section title="Cloud services aligned with your requirements." description="Choose a starting point based on your workload, then work with our team to confirm infrastructure requirements, support needs, application dependencies, and the full cost of operation.">
        <Link className="cloud-primary-button" to={`${root}/pricing/`}>Explore Pricing<ArrowRight size={16} aria-hidden="true" /></Link>
      </Section>
      <CloudCTA title="Let's plan your next cloud deployment." text="Tell us about your applications, infrastructure requirements, and operational goals. Our team can help identify the right cloud approach for your organization." />
    </>
  )
}

function IntegrationCards({ compact = false }: { compact?: boolean }) {
  return <div className="grid gap-4 md:grid-cols-3">{integrations.map((item) => <article key={item.name} className="flex flex-col rounded-lg border border-[#E2E8F0] bg-white p-5">
    <div className="flex items-start justify-between gap-3"><h3 className="text-lg font-semibold">{item.name}</h3><span className="max-w-48 rounded-sm bg-[#F1F5F9] px-2 py-1 text-[11px] font-medium text-[#475569]">Contact us to confirm availability</span></div>
    <p className="mt-3 text-sm font-medium text-[#475569]">{item.role}</p><p className="mt-2 flex-1 leading-6 text-[#64748B]">{item.use}</p>
    {!compact && <p className="mt-4 border-t border-[#E2E8F0] pt-4 text-sm text-[#475569]">Contact us to confirm availability. The presence of a guide does not confirm an active production integration.</p>}
    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold"><a href={item.official} className="inline-flex items-center gap-1.5 text-[#0B1F33] underline underline-offset-4 hover:text-[#008DDA]">Official website<ExternalLink size={13} aria-hidden="true" /></a><a href={item.guide} className="inline-flex items-center gap-1.5 text-[#0B1F33] underline underline-offset-4 hover:text-[#008DDA]">Product guide<ExternalLink size={13} aria-hidden="true" /></a></div>
  </article>)}</div>
}

function PlatformPage() {
  const sections = pageSections.platform ?? []
  return <>
    <PageHero page="platform" />
    {sections.slice(0, 4).map((section) => <Section key={section.title} title={section.title} description={section.text}>
      {section.bullets && <BulletList items={section.bullets} />}
    </Section>)}
    {sections.slice(4).map((section) => <Section key={section.title} title={section.title} description={section.text} />)}
    <Section title="A conceptual service workflow" description="The sequence below is a conceptual workflow. The live implementation and payment model should be confirmed for the selected service.">
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{['Customer request', 'Plan validation', 'Order and payment', 'Provisioning job', 'Infrastructure provider', 'Application configuration', 'Validation', 'Service handover'].map((step, i) => <li key={step} className="flex items-center gap-3 border border-[#E2E8F0] bg-white p-4"><span className="font-mono text-xs font-bold text-[#008DDA]">{String(i + 1).padStart(2, '0')}</span><span className="font-medium">{step}</span></li>)}</ol>
    </Section>
    <CloudCTA title="Need a cloud environment for a specific workload?" text="Discuss your requirements and confirm which platform capabilities and provider options are available." secondary="Explore Integrations" to="/contact" />
  </>
}

function BulletList({ items }: { items: string[] }) {
  return <ul className="grid gap-2 sm:grid-cols-2">{items.map((item) => <li key={item} className="flex items-start gap-2 text-sm leading-6 text-[#475569]"><Check className="mt-1 h-4 w-4 shrink-0 text-[#008DDA]" aria-hidden="true" />{item}</li>)}</ul>
}

function IntegrationsPage() {
  return <>
    <PageHero page="integrations" />
    <Section title="A provider-adapter architecture" description="This diagram illustrates the intended integration model. The exact architecture and active provider connections depend on the deployed implementation.">
      <div className="mx-auto max-w-4xl space-y-3">
        <ArchitectureLayer title="Customer and operator experience" icon={Cloud} items={['Product workspace', 'Service catalog', 'Orders', 'Tenant management', 'Billing and service status']} />
        <ArchitectureArrow />
        <ArchitectureLayer title="Application and orchestration layer" icon={Workflow} items={['Request validation', 'Provider adapters', 'Provisioning jobs', 'Lifecycle orchestration', 'Status reconciliation']} />
        <ArchitectureArrow />
        <ArchitectureLayer title="Infrastructure and automation" icon={Code2} items={['Apache CloudStack', 'Terraform', 'Proxmox']} />
        <ArchitectureArrow />
        <ArchitectureLayer title="Workloads" icon={Server} items={['Virtual machines', 'Networks', 'Websites', 'Business applications', 'Managed workloads']} />
      </div>
    </Section>
    <Section title="Apache CloudStack integration model" description="CloudStack can manage virtual machines, networks, storage, accounts, projects, and service offerings. The proposed mapping below is an integration approach, not evidence of an active production connection.">
      <ul className="grid gap-3 sm:grid-cols-2">{[
        'OptimaXCloud tenant to provider account or project.',
        'OptimaXCloud plan to an infrastructure service offering.',
        'Provisioning request to a provider deployment operation.',
        'Provider resource identifiers to platform service records.',
        'Provider results to job and service status.',
      ].map((item) => <li key={item} className="flex items-start gap-3 border border-[#E2E8F0] bg-white p-4 leading-6 text-[#475569]"><Check className="mt-1 h-4 w-4 shrink-0 text-[#008DDA]" aria-hidden="true" />{item}</li>)}</ul>
    </Section>
    <Section title="Documented integration technologies" description="These technologies describe possible roles in the integration approach, not confirmation of active production connections.">
      <IntegrationCards />
    </Section>
    <Section title="Architecture and operational considerations" description="A dependable cloud operations design considers asynchronous provisioning, job tracking, retries, provider errors, resource reconciliation, tenant isolation, permission enforcement, secrets management, and audit logs. Whether each is implemented must be verified for the deployed service." />
    <CloudCTA title="Planning a cloud infrastructure integration?" text="Talk through the infrastructure environment, desired workflows, and integration status with our technical team." primary="Talk to Our Technical Team" secondary="Explore the Platform" />
  </>
}

function SolutionsPage() {
  const sections = pageSections.solutions ?? []
  const icons = [Globe2, Boxes, Workflow, ShieldCheck, Cpu, Layers3]
  return <>
    <PageHero page="solutions" />
    <Section title="Workloads and their requirements" description="Every deployment should be assessed against its application, operational, and data requirements.">
      <div className="grid gap-4 md:grid-cols-2">{sections.map((section, index) => {
        const Icon = icons[index]
        const ids = ['websites-ecommerce', 'enterprise-applications', 'crm-business-tools', 'healthcare-institutional', 'ai-computing', 'collaboration-open-source']
        return <article id={ids[index]} key={section.title} className="scroll-mt-24 rounded-lg border border-[#E2E8F0] bg-white p-6"><Icon className="h-6 w-6 text-[#008DDA]" aria-hidden="true" /><h3 className="mt-4 text-lg font-semibold">{section.title}</h3><p className="mt-2 leading-7 text-[#64748B]">{section.text}</p></article>
      })}</div>
    </Section>
    <Section title="Workload requirements planning" description="Use these planning prompts to prepare for a technical discussion. They are not a self-service sizing calculator.">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{['Application or workload', 'Estimated user count', 'CPU and memory needs', 'Storage requirements', 'Network requirements', 'Backup requirements', 'Availability expectations', 'Data location or compliance constraints'].map((item) => <div key={item} className="flex items-center gap-3 border border-[#E2E8F0] bg-white p-4"><Database className="h-4 w-4 shrink-0 text-[#008DDA]" aria-hidden="true" /><span className="text-sm font-medium">{item}</span></div>)}</div>
    </Section>
    <CloudCTA title="Not sure which environment your application needs?" text="Share your application requirements and discuss a suitable cloud approach with our team." primary="Discuss Your Workload" secondary="" />
  </>
}

function MigrationPage() {
  const sections = pageSections.migration ?? []
  return <>
    <PageHero page="migration" />
    <Section title="A structured migration, from assessment to support" description="A migration plan is specific to each current environment and target service. We work through key dependencies before cutover.">
      <div className="grid gap-4 md:grid-cols-2">{sections.map((section) => <article key={section.title} className="rounded-lg border border-[#E2E8F0] bg-white p-6"><h3 className="text-lg font-semibold">{section.title}</h3><p className="mt-3 leading-7 text-[#64748B]">{section.text}</p>{section.bullets && <ul className="mt-4 space-y-2">{section.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-2 text-sm leading-6 text-[#475569]"><Check className="mt-1 h-4 w-4 shrink-0 text-[#008DDA]" aria-hidden="true" />{bullet}</li>)}</ul>}</article>)}</div>
    </Section>
    <Section title="IONOS and Plesk migration" description="The OptimaXCloud migration guide provides a reference for planning Plesk subscriptions, website files, databases, domains, email accounts, DNS, and SSL certificates. Compatibility depends on the source configuration and should be assessed before migration.">
      <a href="https://be.optimaxsuites.com/iaas/xcw/migration-ionos-plesk.html" className="inline-flex items-center gap-2 font-semibold text-[#0B1F33] underline underline-offset-4 hover:text-[#008DDA]">Read the migration guide<ExternalLink size={15} aria-hidden="true" /></a>
    </Section>
    <Section title="Cloud services from Centrifuge Group" description="OptimaXCloud complements Centrifuge Group's wider cloud services offering, including cloud infrastructure planning, migration, cloud environment management, application deployment, backup and disaster recovery planning, and cloud application development.">
      <Link className="cloud-outline-button" to="/services/cloud">Explore Cloud Services<ArrowRight size={16} aria-hidden="true" /></Link>
    </Section>
    <CloudCTA title="Planning a cloud migration?" text="Share your current hosting environment, applications, and operational requirements so our team can help you define the next steps." primary="Request a Migration Consultation" secondary="" />
  </>
}

function PricingPage() {
  const plans = [
    { title: 'Starter Cloud', price: '₦35,000–₦60,000', period: 'per month', description: 'Suitable for evaluating a small, managed cloud environment.', features: ['One managed instance', 'DNS and public IP workflow', 'Basic backup policy'] },
    { title: 'Business Cloud', price: '₦95,000–₦180,000', period: 'per month', description: 'For business workloads requiring a more substantial managed environment.', features: ['Production compute', 'Marketplace deployment support', 'Support and operations workflow'] },
    { title: 'GPU / AI', price: 'Custom pricing', period: 'based on assessment', description: 'Specialized workloads requiring assessment of the infrastructure and capacity needed.', features: ['GPU-capable plans', 'Quota and governance controls', 'Observability and backup options'] },
  ]
  const faqs = [
    ['What is included in each plan?', 'The published indicative descriptions are listed above. Confirm the infrastructure, software, support, and operational scope in a final quotation.'],
    ['Are prices fixed?', 'No. Published prices are indicative and may vary with provider, service configuration, software, support requirements, and partner arrangements.'],
    ['Is application deployment included?', 'The published Business Cloud description includes marketplace deployment support. Confirm the application and exact deployment scope before ordering.'],
    ['What determines GPU pricing?', 'GPU model and capacity, provider availability, workload profile, storage, network, and operational requirements need to be assessed.'],
    ['Can existing applications be migrated?', 'Migration can be discussed and scoped against the source environment, dependencies, data, and destination requirements.'],
    ['What backup and support options are available?', 'Backup and support options depend on the selected service and should be confirmed as part of the quotation.'],
    ['How do I request a custom quotation?', 'Contact Centrifuge Group with your workload and operational requirements to discuss an appropriate quotation.'],
  ]
  return <>
    <PageHero page="pricing" />
    <Section title="Published indicative plans" description="The following ranges reproduce the indicative prices specified for OptimaXCloud. Confirm the current approved commercial offering and full quotation before publication or purchase.">
      <div className="grid gap-4 lg:grid-cols-3">{plans.map((plan) => <article key={plan.title} className="flex flex-col rounded-lg border border-[#E2E8F0] bg-white p-6"><h3 className="text-lg font-semibold">{plan.title}</h3><p className="mt-5 text-2xl font-bold tracking-tight text-[#0B1F33]">{plan.price}</p><p className="text-sm text-[#64748B]">{plan.period}</p><p className="mt-4 min-h-12 leading-6 text-[#475569]">{plan.description}</p><ul className="mt-5 flex-1 space-y-3 border-t border-[#E2E8F0] pt-5">{plan.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-[#475569]"><Check className="mt-1 h-4 w-4 shrink-0 text-[#008DDA]" aria-hidden="true" />{feature}</li>)}</ul><Link className="cloud-outline-button mt-6 w-full" to="/contact">Request a Cloud Quote<ArrowRight size={15} aria-hidden="true" /></Link></article>)}</div>
      <p className="mt-6 border-l-4 border-[#E87916] bg-white p-4 text-sm leading-6 text-[#475569]"><strong className="text-[#0B1F33]">Pricing clarification:</strong> Published prices are indicative. Final pricing may vary depending on the infrastructure provider, service configuration, software package, support requirements, and partner arrangements. Confirm the complete quotation before placing an order.</p>
    </Section>
    <Section title="Pricing questions">
      <div className="mx-auto max-w-3xl divide-y divide-[#E2E8F0] rounded-lg border border-[#E2E8F0] bg-white">{faqs.map(([question, answer]) => <details key={question} className="group p-5"><summary className="cursor-pointer list-none pr-7 font-semibold marker:hidden focus-visible:rounded-sm">{question}<span className="float-right text-[#008DDA]" aria-hidden="true">+</span></summary><p className="mt-3 leading-7 text-[#64748B]">{answer}</p></details>)}</div>
      <p className="mt-5 text-sm text-[#64748B]">Payment methods and checkout availability depend on the relevant flow, currency, and implementation. No recurring billing, automatic renewals, refunds, or payment method availability is implied here.</p>
    </Section>
    <CloudCTA title="Need a plan tailored to your organization?" text="Discuss your workload, service requirements, and indicative budget with our team." primary="Request a Cloud Quote" secondary="" />
  </>
}

function DocumentationPage() {
  return <>
    <PageHero page="documentation" />
    <Section title="Product information, guides, and access" description="The resources below point to the original OptimaXCloud documentation and product pages. External links open in the current tab.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{resources.map((resource) => <article key={resource.href} className="flex flex-col rounded-lg border border-[#E2E8F0] bg-white p-5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#008DDA]">{resource.category}</span><h3 className="mt-3 text-lg font-semibold">{resource.title}</h3><p className="mt-2 flex-1 leading-6 text-[#64748B]">{resource.text}</p><a href={resource.href} className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-[#0B1F33] underline underline-offset-4 hover:text-[#008DDA]">Visit {resource.title}<ExternalLink size={14} aria-hidden="true" /></a>
      </article>)}</div>
    </Section>
    <CloudCTA title="Need help finding the right resource?" text="Talk with Centrifuge Group about documentation, an integration approach, or a migration plan." />
  </>
}

function ArchitectureLayer({ title, items, icon: Icon }: { title: string; items: string[]; icon: React.ElementType }) {
  return <div className="rounded-lg border border-[#CBD5E1] bg-white p-5 shadow-sm sm:p-6">
    <div className="flex items-center gap-3"><Icon className="h-5 w-5 text-[#008DDA]" aria-hidden="true" /><h3 className="font-semibold uppercase tracking-wide text-[#0B1F33]">{title}</h3></div>
    <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">{items.map((item) => <li key={item} className="border border-[#E2E8F0] bg-[#F7F9FA] px-3 py-2 text-sm text-[#475569]">{item}</li>)}</ul>
  </div>
}

function ArchitectureArrow() {
  return <div className="flex justify-center text-[#E87916]" aria-hidden="true"><ArrowDown size={20} /></div>
}

export function OptimaXCloudPage({ page }: { page: CloudPageKey }) {
  const meta = pageMeta[page]
  const content = {
    overview: <OverviewPage />,
    platform: <PlatformPage />,
    integrations: <IntegrationsPage />,
    solutions: <SolutionsPage />,
    migration: <MigrationPage />,
    pricing: <PricingPage />,
    documentation: <DocumentationPage />,
  }[page]
  return <div className="w-full bg-[#F7F9FA] text-left text-[#0B1F33]">
    <SEO title={meta.title} description={meta.description} />
    {content}
  </div>
}
