import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Activity, Users, Database, CheckCircle2 } from 'lucide-react'

export const HealthcareShowcaseSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#000000] border-b border-[#1e1e1d] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: UI Mockup of Healthcare Information Systems (Onyx #1e1e1d Card) */}
          <div className="lg:col-span-7 order-2 lg:order-1 text-left">
            <div className="rounded-[20px] bg-[#1e1e1d] border border-[#1e1e1d] p-5">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#333333] text-[12px]">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#cbb0f7]" />
                  <span className="font-semibold text-[#faf9f6] tracking-[-0.14px]">
                    National Health Workforce Registry (HRHIS)
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-[50px] border border-[#333333] text-[#b4b4b2] font-mono text-[10px] uppercase tracking-[1px]">
                  FMOH & WHO STANDARDS
                </span>
              </div>

              {/* Data Table Preview */}
              <div className="mt-4 space-y-2">
                <div className="grid grid-cols-4 p-2 bg-[#121212] rounded-[7px] text-[10px] font-normal text-[#868684] uppercase tracking-[1px]">
                  <span>Practitioner</span>
                  <span>Cadre / Specialty</span>
                  <span>Facility Allocation</span>
                  <span>License Status</span>
                </div>

                {[
                  { name: 'Dr. Fatima Aliyu', cadre: 'Chief Medical Officer', facility: 'Federal Medical Centre, Keffi', status: 'Active / Verified' },
                  { name: 'Nurse Emeka Obi', cadre: 'Registered Midwife (RM)', facility: 'State Specialist Hospital, Asaba', status: 'Active / Verified' },
                  { name: 'Dr. Sarah Danjuma', cadre: 'Consultant Obstetrician', facility: 'National Hospital Abuja', status: 'Active / Verified' },
                  { name: 'Pharmacist Yusuf Garba', cadre: 'Hospital Pharmacist', facility: 'Murtala Muhammad Hospital, Kano', status: 'Active / Verified' },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-4 p-2.5 rounded-[7px] bg-[#121212] border border-[#1e1e1d] text-[12px] items-center hover:border-[#333333] transition-colors"
                  >
                    <span className="font-medium text-[#faf9f6]">{row.name}</span>
                    <span className="text-[#868684]">{row.cadre}</span>
                    <span className="text-[#868684] text-[11px] truncate pr-2">{row.facility}</span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#cbb0f7] font-mono">
                      <CheckCircle2 className="h-3 w-3 text-[#cbb0f7]" />
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats Bar */}
              <div className="mt-4 pt-3 border-t border-[#333333] grid grid-cols-3 gap-2.5 text-center">
                <div className="p-2.5 bg-[#121212] rounded-[7px] border border-[#1e1e1d]">
                  <span className="text-[10px] text-[#868684] uppercase tracking-[1px] block">Licensed Personnel</span>
                  <span className="text-[14px] font-semibold text-[#faf9f6] font-mono">142,000+</span>
                </div>
                <div className="p-2.5 bg-[#121212] rounded-[7px] border border-[#1e1e1d]">
                  <span className="text-[10px] text-[#868684] uppercase tracking-[1px] block">Integrated Facilities</span>
                  <span className="text-[14px] font-semibold text-[#faf9f6] font-mono">1,850+</span>
                </div>
                <div className="p-2.5 bg-[#121212] rounded-[7px] border border-[#1e1e1d]">
                  <span className="text-[10px] text-[#868684] uppercase tracking-[1px] block">Verification Latency</span>
                  <span className="text-[14px] font-semibold text-[#cbb0f7] font-mono">Instant QR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684]">
              <Activity className="h-3 w-3 text-[#cbb0f7]" />
              <span>CENTRIFUGE HEALTH INFORMATICS</span>
            </div>

            <h2 className="text-[32px] sm:text-[42px] font-normal text-[#faf9f6] tracking-[-1.13px] leading-[1.05]">
              Digital systems for better healthcare operations.
            </h2>

            <p className="text-[15px] text-[#868684] tracking-[-0.14px] leading-relaxed">
              We partner with federal health ministries, healthcare councils, and hospital networks to deploy robust clinical EMRs, nationwide human resource for health information systems (HRHIS), and secure practitioner credentialing portals.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-[#1e1e1d] rounded-[10px] border border-[#1e1e1d]">
                <div className="flex items-center gap-2 text-[13px] font-semibold text-[#faf9f6]">
                  <Users className="h-3.5 w-3.5 text-[#cbb0f7]" />
                  <span>HRHIS Registry</span>
                </div>
                <p className="text-[11px] text-[#868684] mt-1 tracking-[-0.14px]">
                  National health workforce deployment, CPD monitoring, and state quotas.
                </p>
              </div>

              <div className="p-3 bg-[#1e1e1d] rounded-[10px] border border-[#1e1e1d]">
                <div className="flex items-center gap-2 text-[13px] font-semibold text-[#faf9f6]">
                  <Database className="h-3.5 w-3.5 text-[#cbb0f7]" />
                  <span>Hospital EMR</span>
                </div>
                <p className="text-[11px] text-[#868684] mt-1 tracking-[-0.14px]">
                  Outpatient triage, digital pharmacy dispensing, laboratory LIS, and billing.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/solutions/healthcare"
                className="inline-flex items-center justify-center px-[22px] py-[10px] rounded-[33px] text-[14px] font-semibold bg-[#ffffff] text-[#080808] hover:bg-[#e3e2e0] transition-colors duration-150 tracking-[-0.14px]"
              >
                <span>Explore Healthcare Solutions</span>
                <ArrowRight className="h-3.5 w-3.5 ml-2" />
              </Link>
              <Link
                to="/case-studies/fmoh-national-health-workforce"
                className="inline-flex items-center justify-center px-[20px] py-[10px] rounded-[33px] text-[14px] font-normal bg-transparent border border-[#333333] text-[#b4b4b2] hover:border-[#b4b4b2] hover:text-[#faf9f6] transition-colors duration-150 tracking-[-0.14px]"
              >
                <span>View FMOH Case Study</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HealthcareShowcaseSection
