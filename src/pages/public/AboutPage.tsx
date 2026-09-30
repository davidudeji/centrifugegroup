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
      desc: 'We don’t abandon clients post-launch. We provide institutional capacity building, proactive system monitoring, and ongoing feature evolution.',
    },
  ]

  return (
    <div className="w-full text-left bg-[#000000] text-[#faf9f6]">
      <SEO
        title="About Centrifuge Group | Enterprise Technology Company"
        description="Learn about Centrifuge Group, our mission, core engineering values, and institutional partnerships across Africa."
      />

      {/* ─── Hero Header (Obsidian #000000) ─── */}
      <section className="bg-[#000000] text-[#faf9f6] py-16 sm:py-24 border-b border-[#1e1e1d]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684]">
              <span>ABOUT CENTRIFUGE GROUP</span>
            </div>
            <h1 className="text-[36px] sm:text-[56px] font-normal text-[#faf9f6] tracking-[-2.24px] leading-[0.98]">
              Technology that moves business forward.
            </h1>
            <p className="text-[16px] text-[#868684] tracking-[-0.18px] leading-relaxed">
              Centrifuge is an enterprise technology company that designs and delivers software, healthcare technology, logistics systems, enterprise platforms, cloud/infrastructure services, consulting, and training.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Mission & Purpose (Graphite #121212) ─── */}
      <section className="py-20 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#868684]">
              OUR IDENTITY & PURPOSE
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-normal text-[#faf9f6] tracking-[-0.64px] leading-snug">
              Engineered for the operational realities of Africa.
            </h2>
            <p className="text-[14px] text-[#868684] leading-relaxed tracking-[-0.14px]">
              Headquartered in Abuja, Nigeria, Centrifuge Information Technology Limited was founded to address the deep systemic gap between commercial software promises and complex on-the-ground operational demands.
            </p>
            <p className="text-[14px] text-[#868684] leading-relaxed tracking-[-0.14px]">
              We recognized early that foreign-built software often breaks down when exposed to unstable internet grids, paper-dependent ministerial workflows, and multi-currency volatility. We set out to build technology that works under any condition.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 bg-[#1e1e1d] rounded-[20px] border border-[#1e1e1d]">
              <div className="text-[32px] font-normal text-[#faf9f6] font-mono tracking-[-0.64px]">36+</div>
              <p className="text-[12px] text-[#868684] mt-1">States with active Centrifuge healthcare or logistics instances.</p>
            </div>
            <div className="p-6 bg-[#1e1e1d] rounded-[20px] border border-[#1e1e1d]">
              <div className="text-[32px] font-normal text-[#f0b66d] font-mono tracking-[-0.64px]">100%</div>
              <p className="text-[12px] text-[#868684] mt-1">Indigenously owned and engineered enterprise IP.</p>
            </div>
            <div className="p-6 bg-[#1e1e1d] rounded-[20px] border border-[#1e1e1d]">
              <div className="text-[32px] font-normal text-[#faf9f6] font-mono tracking-[-0.64px]">140k+</div>
              <p className="text-[12px] text-[#868684] mt-1">Health practitioners managed on our HRHIS registries.</p>
            </div>
            <div className="p-6 bg-[#1e1e1d] rounded-[20px] border border-[#1e1e1d]">
              <div className="text-[32px] font-normal text-[#f0b66d] font-mono tracking-[-0.64px]">24/7</div>
              <p className="text-[12px] text-[#868684] mt-1">Uptime telemetry and enterprise support guarantees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Brand Values (Obsidian #000000) ─── */}
      <section className="py-20 bg-[#000000] border-b border-[#1e1e1d]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] border border-[#333333] bg-transparent text-[10px] uppercase tracking-[2px] text-[#868684] mb-3">
              <span>THE CENTRIFUGE STANDARD</span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] font-normal text-[#faf9f6] tracking-[-1.13px] leading-[1.05]">
              Our Core Brand Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#1e1e1d] p-7 rounded-[20px] border border-[#1e1e1d] hover:border-[#333333] transition-colors space-y-3"
              >
                <h3 className="text-[18px] font-semibold text-[#faf9f6] tracking-[-0.18px]">
                  {v.title}
                </h3>
                <p className="text-[12px] font-mono text-[#f0b66d]">
                  "{v.motto}"
                </p>
                <p className="text-[13px] text-[#868684] leading-relaxed pt-1 tracking-[-0.14px]">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Verified Partnerships Recap (Graphite #121212) ─── */}
      <section className="py-16 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[2px] text-[#868684]">
                TRUSTED ACROSS SECTORS
              </p>
              <h2 className="text-[24px] font-normal text-[#faf9f6] tracking-[-0.29px] mt-1">
                Verified Enterprise & Public Sector Partners
              </h2>
            </div>
            <Link to="/clients" className="text-[13px] text-[#faf9f6] hover:text-[#f0b66d] flex items-center gap-1">
              <span>View full client directory</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {verifiedClients.slice(0, 6).map((c) => (
              <div key={c.id} className="h-16 flex items-center justify-center">
                <img src={c.logo} alt={c.name} className="max-h-10 max-w-[110px] object-contain invert brightness-200 opacity-45 hover:opacity-90 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
export default AboutPage
