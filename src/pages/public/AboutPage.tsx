import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { PageHero } from '../../components/ui/PageHero'
import { Reveal, StaggerReveal } from '../../components/ui/Reveal'
import { verifiedClients } from '../../assets'
import { ArrowRight, Shield, Lightbulb, Handshake } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Reliability',
    motto: 'We build technology people can depend on.',
    desc: 'In mission-critical healthcare informatics, financial ledgers, and logistics dispatch, software failure is not an option. We engineer for maximum resilience and uptime.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Innovation',
    motto: 'Technology should solve real problems, not simply look impressive.',
    desc: 'We reject vanity hype and focus on genuine operational utility: reducing hospital wait times, eliminating stock pilferage, and automating regulatory licensing.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    motto: 'We work alongside organisations beyond deployment.',
    desc: "We don't abandon clients post-launch. We provide institutional capacity building, proactive system monitoring, and ongoing feature evolution.",
  },
]

const stats = [
  { value: '36+', label: 'States with active Centrifuge healthcare or logistics instances' },
  { value: '100%', label: 'Indigenously owned and engineered enterprise IP', accent: true },
  { value: '140k+', label: 'Health practitioners managed on our HRHIS registries' },
  { value: '24/7', label: 'Uptime telemetry and enterprise support guarantees', accent: true },
]

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-[#F7F9FA]">
      <SEO
        title="About Centrifuge Group | Enterprise Technology Company"
        description="Learn about Centrifuge Group, our mission, core engineering values, and institutional partnerships across Africa."
      />

      {/* ── Hero ─────────────────────────────────── */}
      <PageHero
        eyebrow="About Centrifuge Group"
        title="Technology that moves business forward."
        description="Centrifuge is an enterprise technology company that designs and delivers software, healthcare technology, logistics systems, enterprise platforms, cloud/infrastructure services, consulting, and training."
      />

      {/* ── Mission & Purpose ───────────────────── */}
      <section className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal from="left" duration={700} className="lg:col-span-6 space-y-5">
            <div className="badge-eyebrow">Our Identity &amp; Purpose</div>
            <h2 className="text-h2 text-[#0B1F33]">
              Engineered for the operational realities of Africa.
            </h2>
            <p className="text-[15px] text-[#64748B] leading-relaxed">
              Headquartered in Abuja, Nigeria, Centrifuge Information Technology Limited was founded
              to address the deep systemic gap between commercial software promises and complex
              on-the-ground operational demands.
            </p>
            <p className="text-[15px] text-[#64748B] leading-relaxed">
              We recognised early that foreign-built software often breaks down when exposed to
              unstable internet grids, paper-dependent ministerial workflows, and multi-currency
              volatility. We set out to build technology that works under any condition.
            </p>
            <Link to="/contact" className="btn-primary inline-flex mt-2">
              Talk to our team <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          {/* Stats grid */}
          <StaggerReveal
            stagger={90}
            variant="scale"
            duration={600}
            className="lg:col-span-6 grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="p-6 bg-[#F7F9FA] rounded-[16px] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-colors"
              >
                <div className={`text-[36px] font-heading font-800 leading-none tracking-tight ${stat.accent ? 'text-[#16C7D9]' : 'text-[#0B1F33]'}`}>
                  {stat.value}
                </div>
                <p className="text-[13px] text-[#64748B] mt-2 leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Core Brand Values ─────────────────── */}
      <section className="section-py bg-[#F7F9FA] border-b border-[#E2E8F0]">
        <div className="section-container">
          <Reveal from="up" duration={700}>
            <div className="mb-12">
              <div className="badge-eyebrow mb-4">The Centrifuge Standard</div>
              <h2 className="text-h2 text-[#0B1F33]">Our Core Values</h2>
            </div>
          </Reveal>

          <StaggerReveal
            stagger={100}
            from="up"
            duration={650}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="card-feature flex flex-col"
                >
                  <div className="h-12 w-12 rounded-[12px] bg-[#0B1F33] flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-[#16C7D9]" />
                  </div>
                  <h3 className="text-[20px] font-heading font-700 text-[#0B1F33] mb-2">{v.title}</h3>
                  <p className="text-[13px] font-medium text-[#16C7D9] italic mb-3">"{v.motto}"</p>
                  <p className="text-[14px] text-[#64748B] leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Trusted Partners ────────────────── */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="section-container">
          <Reveal from="up" duration={700}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <div className="badge-eyebrow mb-3">Trusted Across Sectors</div>
                <h2 className="text-[22px] font-heading font-700 text-[#0B1F33] tracking-tight">
                  Verified Enterprise &amp; Public Sector Partners
                </h2>
              </div>
              <Link
                to="/clients"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#64748B] hover:text-[#0B1F33] transition-colors whitespace-nowrap shrink-0"
              >
                View full client directory
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>

          <StaggerReveal
            stagger={60}
            from="up"
            variant="scale"
            duration={500}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {verifiedClients.slice(0, 6).map((c) => (
              <div
                key={c.id}
                className="h-20 flex items-center justify-center rounded-[12px] border border-[#E2E8F0] bg-[#F7F9FA] hover:bg-white hover:border-[#CBD5E1] hover:shadow-sm transition-all p-3"
                title={c.name}
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-10 max-w-full object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-200"
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
