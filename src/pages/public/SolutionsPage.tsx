import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { ArrowRight, Layers, Truck, Activity, Building, BarChart2, CheckCircle2, Cpu } from 'lucide-react'

export const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      slug: 'project-development-management',
      name: 'Project Development & Management',
      category: 'Delivery & Execution Advisory',
      icon: Cpu,
      description: 'Structured project planning, execution oversight, stakeholder governance, and practical PM training to help organizations deliver complex initiatives on time and within budget.',
      modules: ['Project Planning & Organization', 'Implementation & Execution', 'Monitoring & Controlling', 'Completion & Closure', 'PM Training & Advisory'],
      featured: true,
      customLink: '/solutions/project-development-management',
    },
    {
      slug: 'optimax',
      name: 'Optimax Connected Enterprise Platform',
      category: 'Enterprise ERP & Operations',
      icon: Layers,
      description: 'An all-in-one business management platform connecting commerce, automated financial ledgers, multi-location inventory, HR, and real-time business intelligence.',
      modules: ['Commerce & POS', 'Financial Ledgers', 'Multi-Warehouse Inventory', 'Payroll & HR', 'Predictive Analytics'],
      featured: false,
    },
    {
      slug: 'logistics',
      name: 'Logistics & Dispatch Mobility Suite',
      category: 'Supply Chain & Telematics',
      icon: Truck,
      description: 'Hardware-agnostic GPS vehicle tracking, automated dispatch scheduling, CAN-Bus fuel auditing, and mobile driver proof-of-delivery (ePOD).',
      modules: ['Live Corridor Telematics', 'Route Optimization', 'Geofencing Engine', 'Driver Mobile App', 'Fuel Monitoring'],
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
      icon: Building,
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

  return (
      <div className="w-full text-left bg-[#F5F7FA] text-[#1A1A1A]">
        <SEO
          title="Enterprise Solutions & Project Development | Centrifuge Group"
          description="Explore Centrifuge Group platforms: Project Development & Management, Optimax ERP, Logistics & Mobility, Healthcare Informatics, and Spatial GIS Data."
        />

        {/* ─── Header ─── */}
        <section className="bg-[#FFFFFF] text-[#1A1A1A] py-16 sm:py-24 border-b border-[#E2E8F0]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-[34px] sm:text-[48px] font-bold text-[#0F2C59] tracking-tight leading-tight">
                Integrated Platforms for Complex Institutional Operations
              </h1>
              <p className="text-[16px] text-[#475569] leading-relaxed">
                We design, build, and operate digital systems that eliminate operational blind spots, connect departments, and scale seamlessly with organizational growth.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Solutions List (Data Card Module §3.3: 8px radius, #FFFFFF, 1px #E2E8F0, 24px padding) ─── */}
        <section className="py-20 bg-[#F5F7FA] border-b border-[#E2E8F0]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {solutions.map((sol, index) => {
              const Icon = sol.icon
              const targetUrl = sol.customLink || `/solutions/${sol.slug}`
              return (
                <div
                  key={sol.slug}
                  className="bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs p-6 lg:p-8 transition-fin grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
                >
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#008DDA] uppercase tracking-wider">
                        0{index + 1} · {sol.category}
                      </span>
                      {sol.featured && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px] bg-[#D1FAE5] text-[#065F46] border border-[#A7F3D0]">
                          Flagship
                        </span>
                      )}
                    </div>

                    <h3 className="text-[22px] sm:text-[24px] font-bold text-[#0F2C59] tracking-tight">
                      {sol.name}
                    </h3>

                    <p className="text-[14px] text-[#475569] leading-relaxed max-w-2xl">
                      {sol.description}
                    </p>

                    <div className="pt-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0F2C59] block mb-2">
                        Core Modules & Capabilities:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {sol.modules.map((mod) => (
                          <span
                            key={mod}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#475569]"
                          >
                            <CheckCircle2 className="h-3 w-3 text-[#10B981]" />
                            {mod}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
                    <Link
                      to={targetUrl}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] text-sm font-semibold bg-[#008DDA] text-white hover:bg-[#0077B6] transition-colors"
                    >
                      <span>Explore Solution</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      to="/contact"
                      className="text-xs font-semibold text-[#64748B] hover:text-[#008DDA] transition-colors"
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
        <section className="bg-[#0F2C59] py-20">
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
