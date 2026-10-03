import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { ArrowRight, Layers, Truck, Activity, Building, BarChart2, CheckCircle2 } from 'lucide-react'

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
    <div className="w-full text-left bg-white text-[#0F172A]">
      <SEO
        title="Enterprise Solutions & Platforms | Centrifuge Group"
        description="Explore Centrifuge Group platforms: Optimax ERP, Logistics & Mobility, Healthcare Informatics, and Spatial GIS Data."
      />

      {/* Header */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">CENTRIFUGE PLATFORM SUITE</span>
            </div>
            <h1
              className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              Integrated platforms for complex operations.
            </h1>
            <p className="text-[16px] text-[#94A3B8] leading-relaxed max-w-2xl">
              We design, build, and operate digital systems that eliminate operational blind spots, connect departments, and scale seamlessly with organizational growth.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto space-y-5">
          {solutions.map((sol, index) => {
            const Icon = sol.icon
            return (
              <div
                key={sol.slug}
                className="bg-white rounded-[12px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-md p-8 lg:p-10 transition-all duration-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-[8px] bg-[#FFF7ED] border border-[#FDBA74]/30 flex items-center justify-center">
                      <Icon className="h-4.5 w-4.5 text-[#F27A22]" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#F27A22] uppercase tracking-[1.5px]">
                      0{index + 1} · {sol.category}
                    </span>
                  </div>

                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0F172A] tracking-[-0.025em]">
                    {sol.name}
                  </h3>

                  <p className="text-[14px] text-[#475569] leading-relaxed max-w-2xl">
                    {sol.description}
                  </p>

                  <div className="pt-1">
                    <span className="text-[11px] font-semibold uppercase tracking-[1px] text-[#0F172A] block mb-2">
                      Core Modules & Capabilities:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {sol.modules.map((mod) => (
                        <span
                          key={mod}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] text-[#475569]"
                        >
                          <CheckCircle2 className="h-3 w-3 text-[#F27A22]" />
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
                  <Link
                    to={`/solutions/${sol.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] text-[14px] font-semibold bg-[#334155] text-white hover:bg-[#1E293B] transition-colors duration-150 whitespace-nowrap"
                  >
                    Explore {sol.name.split(' ')[0]}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="text-[13px] font-medium text-[#475569] hover:text-[#F27A22] transition-colors"
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
