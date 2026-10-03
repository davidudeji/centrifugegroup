import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { PageHero } from '../../components/ui/PageHero'
import { ArrowRight, Layers, Truck, Activity, Building2, BarChart2, CheckCircle2 } from 'lucide-react'

const solutions = [
  {
    slug: 'optimax',
    name: 'Optimax Connected Enterprise Platform',
    category: 'Enterprise ERP & Operations',
    icon: Layers,
    description: 'An all-in-one business management platform connecting commerce, automated financial ledgers, multi-location inventory, HR, and real-time business intelligence.',
    modules: ['Commerce & POS', 'Financial Ledgers', 'Multi-Warehouse Inventory', 'Payroll & HR', 'Predictive Analytics'],
    featured: true,
  },
  {
    slug: 'logistics',
    name: 'Logistics & Dispatch Mobility Suite',
    category: 'Supply Chain & Telematics',
    icon: Truck,
    description: 'Hardware-agnostic GPS vehicle tracking, automated dispatch scheduling, CAN-Bus fuel auditing, and mobile driver proof-of-delivery (ePOD).',
    modules: ['Live Corridor Telematics', 'Route Optimisation', 'Geofencing Engine', 'Driver Mobile App', 'Fuel Monitoring'],
    featured: false,
  },
  {
    slug: 'healthcare',
    name: 'Healthcare Informatics & Hospital Systems',
    category: 'HealthTech & Government',
    icon: Activity,
    description: 'Human Resource for Health Information Systems (HRHIS), digital clinician licensing, electronic medical records (EMR), and WHO-standard health reporting.',
    modules: ['National Health Workforce Registry', 'Hospital Clinical EMR', 'Digital Practitioner Licensing', 'DHIS2 Standards'],
    featured: false,
  },
  {
    slug: 'enterprise',
    name: 'Custom Core Enterprise Systems',
    category: 'Custom Digital Architecture',
    icon: Building2,
    description: 'Tailored business automation architectures, high-concurrency payment reconciliations, and mission-critical enterprise workflows.',
    modules: ['Custom Ledger Engines', 'System Integrations', 'Multi-tenant Portals', 'Automated Compliance'],
    featured: false,
  },
  {
    slug: 'data-analytics',
    name: 'Spatial GIS & Business Intelligence',
    category: 'Data Science & Spatial Analytics',
    icon: BarChart2,
    description: 'Interactive geospatial mapping of health facilities and logistics routes, automated executive reporting dashboards, and time-series sensor ingestion.',
    modules: ['Interactive Map Layers', 'Catchment Radii Analysis', 'Executive KPI Dashboards', 'IoT Stream Ingestion'],
    featured: false,
  },
]

export const SolutionsPage: React.FC = () => {
  return (
    <div className="w-full bg-[#F7F9FA]">
      <SEO
        title="Enterprise Solutions & Platforms | Centrifuge Group"
        description="Explore Centrifuge Group platforms: Optimax ERP, Logistics & Mobility, Healthcare Informatics, and Spatial GIS Data."
      />

      <PageHero
        eyebrow="Centrifuge Platform Suite"
        title="Integrated platforms for complex operations."
        description="We design, build, and operate digital systems that eliminate operational blind spots, connect departments, and scale seamlessly with organisational growth."
      />

      {/* Solutions list */}
      <section className="section-py bg-[#F7F9FA] border-b border-[#E2E8F0]">
        <div className="section-container space-y-5">
          {solutions.map((sol, index) => {
            const Icon = sol.icon
            return (
              <div
                key={sol.slug}
                className={`bg-white rounded-[16px] border transition-all duration-200 p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:shadow-md ${
                  sol.featured
                    ? 'border-[#16C7D9]/30 shadow-[0_0_0_1px_rgba(22,199,217,0.15)]'
                    : 'border-[#E2E8F0] hover:border-[#CBD5E1]'
                }`}
              >
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className={`h-10 w-10 rounded-[10px] flex items-center justify-center ${sol.featured ? 'bg-[#0B1F33]' : 'bg-[#F7F9FA] border border-[#E2E8F0]'}`}>
                      <Icon className={`h-5 w-5 ${sol.featured ? 'text-[#16C7D9]' : 'text-[#0B1F33]'}`} />
                    </div>
                    <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-[0.12em]">
                      {String(index + 1).padStart(2, '0')} · {sol.category}
                    </span>
                    {sol.featured && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#EFF9FA] border border-[#16C7D9]/30 text-[11px] font-semibold text-[#0EA5B9]">
                        Featured
                      </span>
                    )}
                  </div>

                  <h2 className="text-[22px] font-heading font-700 text-[#0B1F33] tracking-tight">
                    {sol.name}
                  </h2>

                  <p className="text-[15px] text-[#64748B] leading-relaxed max-w-2xl">
                    {sol.description}
                  </p>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#94A3B8] mb-2">
                      Core Modules &amp; Capabilities
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {sol.modules.map((mod) => (
                        <span
                          key={mod}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#F7F9FA] border border-[#E2E8F0] text-[12px] text-[#64748B]"
                        >
                          <CheckCircle2 className="h-3 w-3 text-[#16C7D9]" />
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
                  <Link
                    to={`/solutions/${sol.slug}`}
                    className="btn-primary"
                    id={`solution-${sol.slug}-cta`}
                  >
                    Explore {sol.name.split(' ')[0]}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="text-[13px] font-medium text-[#64748B] hover:text-[#16C7D9] transition-colors"
                  >
                    Request Technical Overview →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1F33] py-20">
        <div className="section-container text-center">
          <h2 className="text-h2 text-white mb-4">Not sure which platform fits?</h2>
          <p className="text-body-lg text-[#94A3B8] mb-8 max-w-xl mx-auto">
            Our team will help you identify the right solution for your organisation's specific operational context.
          </p>
          <Link to="/contact" className="btn-accent" id="solutions-cta">
            Talk to an Expert <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default SolutionsPage
