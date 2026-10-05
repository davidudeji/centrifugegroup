import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { PageHero } from '../../components/ui/PageHero'
import { Reveal, StaggerReveal } from '../../components/ui/Reveal'
import { verifiedClients } from '../../assets'
import { ArrowRight, ShieldCheck, Cpu, Building2, CheckCircle2 } from 'lucide-react'

export const AboutPage: React.FC = () => {
  const values = [
    {
      title: '1. Reliability & Resilience',
      motto: 'We engineer technology that institutional operations can depend on.',
      desc: 'In mission-critical healthcare informatics, financial transaction ledgers, and logistics dispatch, software failure is not an option. We design fault-tolerant, high-availability architectures that guarantee business continuity.',
    },
    {
      title: '2. Practical Innovation',
      motto: 'Technology must resolve real operational friction, not merely simulate progress.',
      desc: 'We reject vanity hype and prioritize genuine operational utility: reducing patient waiting times, eliminating supply chain leakage, accelerating transaction settlement, and automating regulatory compliance.',
    },
    {
      title: '3. Long-Term Partnership',
      motto: 'We stand alongside enterprises and government agencies long after deployment.',
      desc: 'We do not abandon clients post-launch. We provide institutional capacity building, proactive 24/7 telemetry monitoring, continuous software enhancements, and regulatory alignment.',
    },
  ]

  return (
    <div className="w-full text-left bg-[#F5F7FA] text-[#1A1A1A]">
      <SEO
        title="About Centrifuge Group | Enterprise Technology & Financial Architecture"
        description="Learn about Centrifuge Group, our mission, core engineering values, and institutional partnerships across Africa."
      />

      {/* ─── Hero Header (UI/UX Spec §1.1 & §4.1) ─── */}
      <section className="bg-[#FFFFFF] text-[#1A1A1A] py-16 sm:py-20 border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] border border-[#008DDA]/30 bg-[#008DDA]/10 text-xs font-semibold uppercase tracking-wider text-[#0077B6]">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>ABOUT CENTRIFUGE GROUP</span>
            </div>
            <h1 className="text-[32px] sm:text-[44px] font-bold text-[#0F2C59] tracking-tight leading-[1.2]">
              Technology Engineered for Institutional Scale
            </h1>
            <p className="text-[16px] text-[#475569] leading-relaxed max-w-2xl">
              Centrifuge Group is an enterprise technology firm that architects and deploys mission-critical financial systems, national healthcare informatics, logistics automation, cloud infrastructure, and regulatory platforms.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Mission & Operational Reality ─── */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#008DDA]">
              OUR IDENTITY & ARCHITECTURAL PURPOSE
            </span>
            <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F2C59] tracking-tight leading-snug">
              Engineered for the Real-World Demands of Emerging Markets
            </h2>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Headquartered in Abuja, Nigeria, Centrifuge Information Technology Limited was founded to bridge the systemic divide between theoretical software designs and rigorous on-the-ground operational environments.
            </p>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Standard commercial software often degrades under network volatility, complex inter-agency ministerial workflows, and multi-rail banking settlement. We build resilient, low-latency, and audit-ready architectures designed to excel in any environment.
            </p>

            <div className="pt-2">
              <Link
                to="/solutions/banking-framework"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#008DDA] hover:text-[#0077B6] transition-colors"
              >
                <span>Explore our digital banking framework</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-fin">
              <div className="text-[32px] font-bold text-[#0F2C59] font-sans tracking-tight">36+</div>
              <h4 className="text-[13px] font-semibold text-[#1A1A1A] mt-1">States Covered</h4>
              <p className="text-[12px] text-[#64748B] mt-1">Active healthcare, biometric, or logistics instances nationwide.</p>
            </div>
            <div className="p-6 bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-fin">
              <div className="text-[32px] font-bold text-[#008DDA] font-sans tracking-tight">100%</div>
              <h4 className="text-[13px] font-semibold text-[#1A1A1A] mt-1">Indigenous IP</h4>
              <p className="text-[12px] text-[#64748B] mt-1">Proprietary enterprise architectures and secured codebases.</p>
            </div>
            <div className="p-6 bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-fin">
              <div className="text-[32px] font-bold text-[#0F2C59] font-sans tracking-tight">140k+</div>
              <h4 className="text-[13px] font-semibold text-[#1A1A1A] mt-1">Practitioners</h4>
              <p className="text-[12px] text-[#64748B] mt-1">Health professionals verified across national registries.</p>
            </div>
            <div className="p-6 bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-fin">
              <div className="text-[32px] font-bold text-[#10B981] font-sans tracking-tight">99.99%</div>
              <h4 className="text-[13px] font-semibold text-[#1A1A1A] mt-1">Telemetry Uptime</h4>
              <p className="text-[12px] text-[#64748B] mt-1">Real-time enterprise uptime monitoring and support SLAs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Brand Values (UI/UX Spec §3.3 Data Card Module) ─── */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl text-left">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#008DDA]">
              THE CENTRIFUGE BENCHMARK
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0F2C59] tracking-tight mt-2">
              Our Core Architectural Values
            </h2>
            <p className="text-[14px] text-[#64748B] mt-2">
              Principles guiding every database schema, API gateway, and enterprise deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#FFFFFF] p-6 rounded-[8px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs transition-fin space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="h-10 w-10 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-5 w-5 text-[#008DDA]" />
                  </div>
                  <h3 className="text-[18px] font-bold text-[#0F2C59] tracking-tight">
                    {v.title}
                  </h3>
                  <p className="text-[12px] font-semibold text-[#008DDA] mt-1">
                    "{v.motto}"
                  </p>
                  <p className="text-[13px] text-[#475569] leading-relaxed pt-2">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Verified Institutional Partnerships ─── */}
      <section className="py-16 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#008DDA]">
                INSTITUTIONAL TRUST
              </p>
              <h2 className="text-[24px] font-bold text-[#0F2C59] tracking-tight mt-1">
                Verified Enterprise & Public Sector Partners
              </h2>
            </div>
            <Link
              to="/clients"
              className="text-[13px] font-semibold text-[#008DDA] hover:text-[#0077B6] flex items-center gap-1.5 transition-colors"
            >
              <span>View full client directory</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {verifiedClients.slice(0, 6).map((c) => (
              <div
                key={c.id}
                className="h-20 p-3 bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-fin flex items-center justify-center shadow-2xs"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-12 max-w-[120px] object-contain opacity-85 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section className="bg-[#0B1F33] py-20">
        <div className="section-container text-center">
          <Reveal variant="blur" from="up" distance={20} duration={800}>
            <h2 className="text-h2 text-white mb-4">Ready to work with us?</h2>
          </Reveal>
          <Reveal from="up" delay={150} duration={700}>
            <p className="text-body-lg text-[#94A3B8] mb-8 max-w-xl mx-auto">
              Let's understand your operational challenge and design the right technology response.
            </p>
          </Reveal>
          <Reveal from="up" delay={300} variant="scale">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-accent" id="about-cta-primary">
                Talk to an Expert <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/case-studies" className="btn-outline-white" id="about-cta-secondary">
                Read Case Studies
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  )
}

export default AboutPage
