import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { ArrowRight, Layers, Truck, Activity, Building, BarChart2, CheckCircle2 } from 'lucide-react'
import { Button } from '../../components/ui/Button'

export const SolutionsPage: React.FC = () => {
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
    <div className="w-full text-left bg-[#000000] text-[#faf9f6]">
      <SEO
        title="Enterprise Solutions & Platforms"
        description="Explore Centrifuge Group platforms: Optimax ERP, Logistics & Mobility, Healthcare Informatics, and Spatial GIS Data."
      />

      {/* ─── Header ─── */}
      <section className="bg-[#000000] text-[#faf9f6] py-16 sm:py-24 border-b border-[#1e1e1d]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684]">
              <span>CENTRIFUGE PLATFORM SUITE</span>
            </div>
            <h1 className="text-[36px] sm:text-[56px] font-normal text-[#faf9f6] tracking-[-2.24px] leading-[0.98]">
              Integrated platforms for complex operations.
            </h1>
            <p className="text-[16px] text-[#868684] tracking-[-0.18px] leading-relaxed">
              We design, build, and operate digital systems that eliminate operational blind spots, connect departments, and scale seamlessly with organizational growth.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Solutions List (Graphite #121212) ─── */}
      <section className="py-20 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {solutions.map((sol, index) => {
            const Icon = sol.icon
            return (
              <div
                key={sol.slug}
                className="bg-[#1e1e1d] rounded-[20px] border border-[#1e1e1d] hover:border-[#333333] p-8 lg:p-10 transition-colors grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
              >
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-[4px] bg-[#121212] border border-[#333333] flex items-center justify-center">
                      <Icon className="h-4 w-4 text-[#f0b66d]" />
                    </div>
                    <span className="text-[11px] font-mono text-[#f0b66d] uppercase tracking-[1px]">
                      0{index + 1} · {sol.category}
                    </span>
                  </div>

                  <h3 className="text-[22px] sm:text-[24px] font-semibold text-[#faf9f6] tracking-[-0.29px]">
                    {sol.name}
                  </h3>

                  <p className="text-[14px] text-[#868684] leading-relaxed max-w-2xl tracking-[-0.14px]">
                    {sol.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-[1px] text-[#faf9f6] block mb-2">
                      Core Modules & Capabilities:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {sol.modules.map((mod) => (
                        <span
                          key={mod}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[50px] bg-[#121212] border border-[#333333] text-[11px] text-[#b4b4b2]"
                        >
                          <CheckCircle2 className="h-3 w-3 text-[#f0b66d]" />
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
                  <Link
                    to={`/solutions/${sol.slug}`}
                    className="inline-flex items-center justify-center px-[22px] py-[10px] rounded-[33px] text-[14px] font-semibold bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] transition-colors duration-150 tracking-[-0.14px]"
                  >
                    <span>Explore {sol.name.split(' ')[0]}</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-2" />
                  </Link>
                  <Link
                    to="/contact"
                    className="text-[13px] text-[#868684] hover:text-[#faf9f6] hover:underline transition-colors"
                  >
                    Request Technical Overview →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
export default SolutionsPage
