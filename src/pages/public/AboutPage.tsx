import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { Reveal } from '../../components/ui/Reveal'
import { verifiedClients } from '../../assets'
import { ArrowRight, ShieldCheck, Cpu, Building2, CheckCircle2, GraduationCap } from 'lucide-react'

export const AboutPage: React.FC = () => {
  const values = [
    {
      title: '1. Reliability & Resilience',
      motto: 'We engineer technology that institutional operations can depend on.',
      desc: 'We consider reliability, security, and continuity from the start, especially where teams depend on connected systems to manage essential operations.',
    },
    {
      title: '2. Practical Innovation',
      motto: 'Technology must resolve real operational friction, not merely simulate progress.',
      desc: 'We begin with the work people need to do, then shape software and integrations around practical requirements rather than technology for its own sake.',
    },
    {
      title: '3. Long-Term Partnership',
      motto: 'Support, handover, and future change should be considered beyond initial delivery.',
      desc: 'Long-term value depends on systems that can be supported and adapted. We work to make operational needs, handover, and future change part of the delivery conversation.',
    },
  ]

  return (
    <div className="w-full text-left bg-[#F5F7FA] text-[#1A1A1A]">
      <SEO
        title="About Centrifuge Group | Enterprise Technology"
        description="Learn how Centrifuge Group approaches enterprise software engineering, systems integration, and digital transformation."
      />

      {/* â”€â”€â”€ Hero Header (UI/UX Spec Â§1.1 & Â§4.1) â”€â”€â”€ */}
      <section className="bg-[#FFFFFF] text-[#1A1A1A] py-16 sm:py-20 border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-[32px] sm:text-[44px] font-bold text-[#0F2C59] tracking-tight leading-[1.2]">
              Technology Engineered for Institutional Scale
            </h1>
            <p className="text-[16px] text-[#475569] leading-relaxed max-w-2xl">
              Centrifuge Group is an enterprise technology firm that architects and deploys mission-critical financial systems, national healthcare informatics, logistics automation, cloud infrastructure, and regulatory platforms.
            </p>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Mission & Operational Reality â”€â”€â”€ */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F2C59] tracking-tight leading-snug">
              Engineered for the Real-World Demands of Emerging Markets
            </h2>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Centrifuge Group designs, develops, integrates, and supports technology for organizations with complex operational requirements. Our work spans enterprise software engineering, digital transformation, workflow automation, and secure digital infrastructure.
            </p>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Fragmented information, manual processes, and disconnected systems can make coordination, reporting, and oversight more difficult. Well-designed systems can connect information, clarify workflows, support better operational visibility, and scale as requirements change.
            </p>

            <div className="pt-2">
              <Link
                to="/solutions/project-development-management"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#008DDA] hover:text-[#0077B6] transition-colors"
              >
                <span>Explore project development and management</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Cpu, title: 'Software engineering', description: 'Applications and platforms shaped around organizational requirements.' },
              { icon: Building2, title: 'Systems integration', description: 'Connected tools and data flows that support coordinated work.' },
              { icon: CheckCircle2, title: 'Operational automation', description: 'Digital workflows that can reduce repetitive manual steps.' },
              { icon: ShieldCheck, title: 'Reliable infrastructure', description: 'Secure foundations designed with continuity and growth in mind.' },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="p-5 bg-white rounded-[8px] border border-[#E2E8F0]">
                <Icon aria-hidden="true" className="h-5 w-5 text-[#008DDA]" />
                <h3 className="text-[15px] font-semibold text-[#0F2C59] mt-3">{title}</h3>
                <p className="text-[13px] text-[#64748B] leading-relaxed mt-1">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl">
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0F2C59] tracking-tight">
              Organizations and operational contexts
            </h2>
            <p className="text-[14px] text-[#64748B] leading-relaxed mt-3">
              Our engineering and advisory work is relevant to teams managing complex services, information, and operations. These examples reflect potential needs, not necessarily existing client engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <article className="p-6 rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]">
              <h3 className="text-[17px] font-semibold text-[#0F2C59]">Healthcare NGOs and programme teams</h3>
              <p className="text-[13px] text-[#475569] leading-relaxed mt-2">
                Field data capture, programme tracking, beneficiary information, and reporting can be difficult to coordinate across fragmented tools. These needs may align with our healthcare informatics and data capabilities.
              </p>
              <Link to="/solutions/healthcare" className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-semibold text-[#008DDA] hover:text-[#0077B6]">
                Explore healthcare systems <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
              </Link>
            </article>

            <article className="p-6 rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]">
              <h3 className="text-[17px] font-semibold text-[#0F2C59]">Public health agencies</h3>
              <p className="text-[13px] text-[#475569] leading-relaxed mt-2">
                Digital information systems can support programme tracking and coordinated reporting, including alignment with applicable guidance where required. Any standards or reporting needs should be confirmed for each engagement.
              </p>
              <Link to="/solutions/healthcare" className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-semibold text-[#008DDA] hover:text-[#0077B6]">
                Explore healthcare systems <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
              </Link>
            </article>

            <article className="p-6 rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]">
              <h3 className="text-[17px] font-semibold text-[#0F2C59]">SME operations teams</h3>
              <p className="text-[13px] text-[#475569] leading-relaxed mt-2">
                Growing teams can outgrow spreadsheets and disconnected tools. Integrated business platforms and workflow automation are potential ways to improve operational visibility and reduce repetitive work.
              </p>
              <Link to="/solutions/enterprise" className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-semibold text-[#008DDA] hover:text-[#0077B6]">
                Explore enterprise solutions <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
              </Link>
            </article>

            <article className="p-6 rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]">
              <h3 className="text-[17px] font-semibold text-[#0F2C59]">Teams seeking practical technology training</h3>
              <p className="text-[13px] text-[#475569] leading-relaxed mt-2">
                Staff may need practical support to use software, data, and digital workflows in their day-to-day work. Training and capacity building are included in the current service portfolio.
              </p>
              <Link to="/services/training" className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-semibold text-[#008DDA] hover:text-[#0077B6]">
                Explore training services <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
              </Link>
            </article>

            <article className="p-6 rounded-[8px] border border-dashed border-[#CBD5E1] bg-white">
              <div className="flex items-start gap-3">
                <GraduationCap aria-hidden="true" className="h-5 w-5 shrink-0 text-[#64748B] mt-0.5" />
                <div>
                  <h3 className="text-[17px] font-semibold text-[#0F2C59]">Universities and colleges</h3>
                  <p className="text-[13px] text-[#475569] leading-relaxed mt-2">
                    Student portals, academic records, and campus services are potential areas to explore. Speak with our team to confirm fit and current scope.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-semibold text-[#008DDA] hover:text-[#0077B6]">
                    Discuss education system requirements <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Core Brand Values (UI/UX Spec Â§3.3 Data Card Module) â”€â”€â”€ */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl text-left">
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0F2C59] tracking-tight mt-2">
              Our Core Architectural Values
            </h2>
            <p className="text-[14px] text-[#64748B] mt-2">
              Principles that inform our approach to architecture, integrations, and delivery.
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

      {/* â”€â”€â”€ Verified Institutional Partnerships â”€â”€â”€ */}
      <section className="py-16 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-[24px] font-bold text-[#0F2C59] tracking-tight">
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
          </div>
        </div>
      </section>

      {/* â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="bg-[#0F2C59] py-20">
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
