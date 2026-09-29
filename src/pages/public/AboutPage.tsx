import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { verifiedClients } from '../../assets'
import { ShieldCheck, Target, Users2, Award, ArrowRight, Building, CheckCircle2 } from 'lucide-react'
import { Button } from '../../components/ui/Button'

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
      desc: 'We don’t abandon clients post-launch. We provide institutional capacity building, proactive system monitoring, and ongoing feature evolution.',
    },
  ]

  return (
    <div className="w-full text-left">
      <SEO
        title="About Centrifuge Group | Enterprise Technology Company"
        description="Learn about Centrifuge Group, our mission, core engineering values, and institutional partnerships across Africa."
      />

      {/* Header */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-[#172333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-[#16C7D9] tracking-wider uppercase">
              ABOUT CENTRIFUGE GROUP
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              Technology that moves business forward.
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Centrifuge is an enterprise technology company that designs and delivers software, healthcare technology, logistics systems, enterprise platforms, cloud/infrastructure services, consulting, and training.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Purpose */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#16C7D9]">
              Our Identity & Purpose
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B1F33] font-heading">
              Engineered for the operational realities of Africa.
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Headquartered in Abuja, Nigeria, Centrifuge Information Technology Limited was founded to address the deep systemic gap between commercial software promises and complex on-the-ground operational demands.
            </p>
            <p className="text-sm text-[#475569] leading-relaxed">
              We recognized early that foreign-built software often breaks down when exposed to unstable internet grids, paper-dependent ministerial workflows, and multi-currency volatility. We set out to build technology that works under any condition.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 bg-[#F8FAFC] rounded-[14px] border border-[#E2E8F0]">
              <div className="text-3xl font-extrabold text-[#0B1F33] font-heading">36+</div>
              <p className="text-xs text-[#64748B] mt-1">States with active Centrifuge healthcare or logistics instances.</p>
            </div>
            <div className="p-6 bg-[#F8FAFC] rounded-[14px] border border-[#E2E8F0]">
              <div className="text-3xl font-extrabold text-[#16C7D9] font-heading">100%</div>
              <p className="text-xs text-[#64748B] mt-1">Indigenously owned and engineered enterprise IP.</p>
            </div>
            <div className="p-6 bg-[#F8FAFC] rounded-[14px] border border-[#E2E8F0]">
              <div className="text-3xl font-extrabold text-[#0B1F33] font-heading">140k+</div>
              <p className="text-xs text-[#64748B] mt-1">Health practitioners managed on our HRHIS registries.</p>
            </div>
            <div className="p-6 bg-[#F8FAFC] rounded-[14px] border border-[#E2E8F0]">
              <div className="text-3xl font-extrabold text-[#10B981] font-heading">24/7</div>
              <p className="text-xs text-[#64748B] mt-1">Uptime telemetry and enterprise support guarantees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Brand Values */}
      <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#16C7D9]">
              The Centrifuge Standard
            </p>
            <h2 className="text-3xl font-extrabold text-[#0B1F33] font-heading mt-1">
              Our Core Brand Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white p-8 rounded-[16px] border border-[#E2E8F0] space-y-3"
              >
                <h3 className="text-lg font-bold text-[#0B1F33] font-heading">
                  {v.title}
                </h3>
                <p className="text-xs font-semibold text-[#16C7D9] italic">
                  "{v.motto}"
                </p>
                <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Partnerships Recap */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#16C7D9]">
                Trusted Across Sectors
              </p>
              <h2 className="text-2xl font-bold text-[#0B1F33] font-heading mt-1">
                Verified Enterprise & Public Sector Partners
              </h2>
            </div>
            <Link to="/clients" className="text-xs font-bold text-[#0B1F33] hover:text-[#16C7D9] flex items-center gap-1">
              <span>View full client directory</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {verifiedClients.slice(0, 6).map((c) => (
              <div key={c.id} className="p-4 rounded-[10px] border border-[#E2E8F0] flex items-center justify-center h-20">
                <img src={c.logo} alt={c.name} className="max-h-12 max-w-[120px] object-contain grayscale opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
export default AboutPage
