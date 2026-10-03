import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { verifiedClients } from '../../assets'
import { ArrowRight } from 'lucide-react'

export const AboutPage: React.FC = () => {
  const values = [
    {
      title: '1. Reliability',
      motto: 'We build technology people can depend on.',
      desc: 'In mission-critical healthcare informatics, financial ledgers, and logistics dispatch, software failure is not an option. We engineer for maximum resilience and uptime.',
    },
    {
      title: '2. Practical Innovation',
      motto: 'Technology should solve real problems, not simply look impressive.',
      desc: 'We reject vanity hype and focus on genuine operational utility: reducing hospital wait times, eliminating stock pilferage, and automating regulatory licensing.',
    },
    {
      title: '3. Long-Term Partnership',
      motto: 'We work alongside organizations beyond deployment.',
      desc: "We don't abandon clients post-launch. We provide institutional capacity building, proactive system monitoring, and ongoing feature evolution.",
    },
  ]

  return (
    <div className="w-full text-left bg-white text-[#0F172A]">
      <SEO
        title="About Centrifuge Group | Enterprise Technology Company"
        description="Learn about Centrifuge Group, our mission, core engineering values, and institutional partnerships across Africa."
      />

      {/* Hero Header */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">ABOUT CENTRIFUGE GROUP</span>
            </div>
            <h1
              className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              Technology that moves business forward.
            </h1>
            <p className="text-[16px] text-[#94A3B8] leading-relaxed max-w-2xl">
              Centrifuge is an enterprise technology company that designs and delivers software, healthcare technology, logistics systems, enterprise platforms, cloud/infrastructure services, consulting, and training.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Purpose */}
      <section className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">OUR IDENTITY & PURPOSE</span>
            </div>
            <h2
              className="font-bold text-[#0F172A] leading-[1.1] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
            >
              Engineered for the operational realities of Africa.
            </h2>
            <p className="text-[15px] text-[#475569] leading-relaxed">
              Headquartered in Abuja, Nigeria, Centrifuge Information Technology Limited was founded to address the deep systemic gap between commercial software promises and complex on-the-ground operational demands.
            </p>
            <p className="text-[15px] text-[#475569] leading-relaxed">
              We recognized early that foreign-built software often breaks down when exposed to unstable internet grids, paper-dependent ministerial workflows, and multi-currency volatility. We set out to build technology that works under any condition.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {[
              { value: '36+', label: 'States with active Centrifuge healthcare or logistics instances.', accent: false },
              { value: '100%', label: 'Indigenously owned and engineered enterprise IP.', accent: true },
              { value: '140k+', label: 'Health practitioners managed on our HRHIS registries.', accent: false },
              { value: '24/7', label: 'Uptime telemetry and enterprise support guarantees.', accent: true },
            ].map((stat) => (
              <div key={stat.value} className="p-6 bg-[#F8FAFC] rounded-[12px] border border-[#E2E8F0]">
                <div className={`text-[32px] font-bold leading-none tracking-[-0.025em] ${stat.accent ? 'text-[#F27A22]' : 'text-[#0F172A]'}`}>
                  {stat.value}
                </div>
                <p className="text-[12px] text-[#475569] mt-2 leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Brand Values */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">THE CENTRIFUGE STANDARD</span>
            </div>
            <h2
              className="font-bold text-[#0F172A] leading-[1.1] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
            >
              Our Core Brand Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white p-7 rounded-[12px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-md transition-all duration-200 space-y-3"
              >
                <h3 className="text-[17px] font-bold text-[#0F172A]">{v.title}</h3>
                <p className="text-[12px] font-medium text-[#F27A22] italic">"{v.motto}"</p>
                <p className="text-[13px] text-[#475569] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Partnerships */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-px w-6 bg-[#F27A22]" aria-hidden="true" />
                <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#F27A22]">TRUSTED ACROSS SECTORS</span>
              </div>
              <h2 className="text-[22px] font-bold text-[#0F172A] tracking-[-0.02em]">
                Verified Enterprise & Public Sector Partners
              </h2>
            </div>
            <Link to="/clients" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#475569] hover:text-[#F27A22] transition-colors whitespace-nowrap shrink-0">
              View full client directory
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {verifiedClients.slice(0, 6).map((c) => (
              <div key={c.id} className="h-16 flex items-center justify-center rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#CBD5E1] transition-colors p-3">
                <img src={c.logo} alt={c.name} className="max-h-8 max-w-full object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-200" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
