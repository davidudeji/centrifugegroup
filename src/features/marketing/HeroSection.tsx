import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#0B1F33] text-white overflow-hidden">
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 60% at 60% -10%, rgba(22,199,217,0.12) 0%, transparent 60%),
                            radial-gradient(ellipse 50% 40% at 95% 80%, rgba(22,199,217,0.06) 0%, transparent 50%)`,
        }}
      />

      {/* Grid pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="section-container relative z-10 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="badge-eyebrow-dark mb-6 w-fit">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#16C7D9]"
              aria-hidden="true"
            />
            CENTRIFUGE GROUP
          </div>

          {/* Headline */}
          <h1 className="text-hero text-white mb-6">
            Technology that{' '}
            <span
              className="text-[#16C7D9]"
              style={{ fontStyle: 'italic' }}
            >
              moves business
            </span>{' '}
            forward.
          </h1>

          {/* Supporting text */}
          <p className="text-body-lg text-[#94A3B8] max-w-2xl mb-10 leading-relaxed">
            We design and deliver enterprise software, healthcare platforms,
            logistics systems and digital solutions that solve complex
            operational problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link to="/contact" className="btn-accent" id="hero-cta-primary">
              Talk to an Expert
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/solutions" className="btn-outline-white" id="hero-cta-secondary">
              Explore Solutions
            </Link>
          </div>

          {/* Quick-nav chips */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[#64748B] text-[13px] font-medium">
              Quick access:
            </span>
            {[
              { label: 'Optimax ERP', to: '/solutions/optimax' },
              { label: 'Healthcare', to: '/solutions/healthcare' },
              { label: 'Logistics', to: '/solutions/logistics' },
              { label: 'Case Studies', to: '/case-studies' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/10 text-[13px] text-[#94A3B8] hover:text-white hover:border-white/25 transition-colors"
              >
                {item.label}
                <ChevronRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="border-t border-white/[0.07]">
        <div className="section-container py-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Years of operation', value: '10+' },
              { label: 'Enterprise clients served', value: '40+' },
              { label: 'Systems in production', value: '12+' },
              { label: 'Countries of presence', value: '3' },
            ].map((stat) => (
              <div key={stat.label}>
                <dd className="text-[32px] font-bold font-heading text-white leading-none">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-[13px] text-[#64748B] font-medium">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
