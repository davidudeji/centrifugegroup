import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { ArrowRight, Activity, Users, Shield, Database, Award, CheckCircle2 } from 'lucide-react'

export const HealthcareShowcaseSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: UI Mockup of Healthcare Information Systems */}
          <div className="lg:col-span-7 order-2 lg:order-1 text-left">
            <div className="rounded-[16px] bg-white border border-[#E2E8F0] shadow-xl overflow-hidden p-5">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#16A34A]" />
                  <span className="font-bold text-[#0B1F33] font-heading">
                    National Health Workforce Registry (HRHIS)
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-[4px] bg-[#0284C7]/10 text-[#0369A1] font-mono text-[11px] font-semibold">
                  FMOH & WHO STANDARDS
                </span>
              </div>

              {/* Data Table Preview */}
              <div className="mt-4 space-y-2.5">
                <div className="grid grid-cols-4 p-2 bg-[#F1F5F9] rounded-[6px] text-[11px] font-bold text-[#475569] uppercase tracking-wider">
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
                    className="grid grid-cols-4 p-2.5 rounded-[6px] border border-[#E2E8F0] text-xs items-center hover:bg-[#F8FAFC]"
                  >
                    <span className="font-semibold text-[#111827]">{row.name}</span>
                    <span className="text-[#64748B]">{row.cadre}</span>
                    <span className="text-[#64748B] text-[11px] truncate pr-2">{row.facility}</span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#15803D] font-medium">
                      <CheckCircle2 className="h-3 w-3 text-[#16A34A]" />
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats Bar */}
              <div className="mt-4 pt-3 border-t border-[#E2E8F0] grid grid-cols-3 gap-3 text-center">
                <div className="p-2 bg-[#F8FAFC] rounded-[6px]">
                  <span className="text-[10px] text-[#64748B] block">Licensed Personnel</span>
                  <span className="text-sm font-bold text-[#111827]">142,000+</span>
                </div>
                <div className="p-2 bg-[#F8FAFC] rounded-[6px]">
                  <span className="text-[10px] text-[#64748B] block">Integrated Facilities</span>
                  <span className="text-sm font-bold text-[#111827]">1,850+</span>
                </div>
                <div className="p-2 bg-[#F8FAFC] rounded-[6px]">
                  <span className="text-[10px] text-[#64748B] block">Verification Latency</span>
                  <span className="text-sm font-bold text-[#16A34A]">Instant QR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#16A34A]/10 border border-[#16A34A]/20 text-xs font-semibold text-[#15803D]">
              <Activity className="h-3 w-3 text-[#16A34A]" />
              <span>CENTRIFUGE HEALTH INFORMATICS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-heading tracking-tight leading-[1.15]">
              Digital systems for better{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] to-[#16A34A]">
                healthcare operations.
              </span>
            </h2>

            <p className="text-base text-[#64748B] leading-relaxed">
              We partner with federal health ministries, healthcare councils, and hospital networks to deploy robust clinical EMRs, nationwide human resource for health information systems (HRHIS), and secure practitioner credentialing portals.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-1">
              <div className="p-3 bg-white rounded-[8px] border border-[#E2E8F0]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B1F33]">
                  <Users className="h-4 w-4 text-[#0284C7]" />
                  <span>HRHIS Registry</span>
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  National health workforce deployment, CPD monitoring, and state quotas.
                </p>
              </div>

              <div className="p-3 bg-white rounded-[8px] border border-[#E2E8F0]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B1F33]">
                  <Database className="h-4 w-4 text-[#16A34A]" />
                  <span>Hospital EMR</span>
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Outpatient triage, digital pharmacy dispensing, laboratory LIS, and billing.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <Link to="/solutions/healthcare">
                <Button variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Explore Healthcare Solutions
                </Button>
              </Link>
              <Link to="/case-studies/fmoh-national-health-workforce">
                <Button variant="outline" size="md">
                  View FMOH Case Study
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
