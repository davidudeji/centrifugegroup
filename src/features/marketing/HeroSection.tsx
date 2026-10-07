import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#071d39] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(26,167,240,0.24),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(103,198,255,0.12),transparent_30%)]" aria-hidden="true" />
      <div className="absolute inset-0 opacity-40" aria-hidden="true">
        <div className="hero-grid-overlay" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 pb-12 pt-12 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
        <div className="flex min-h-[620px] items-center">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-[560px]">
              <div className="mb-6 inline-flex items-center rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-100/90">
                Digital Solutions for Complex Business
              </div>

              <h1 className="max-w-[620px] text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[54px] lg:text-[68px]">
                Technology that moves your business forward.
              </h1>

              <p className="mt-6 max-w-[540px] text-base leading-7 text-slate-200/80 sm:text-lg">
                We design and develop enterprise software, e-health solutions, and cloud platforms that help organizations operate smarter, scale faster, and create lasting impact.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1aa7f0] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(26,167,240,0.3)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#38b4f8]"
                >
                  Explore Solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-sky-200/40 hover:bg-white/8"
                >
                  Talk to Us
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="enterprise-visual">
                <div className="enterprise-visual__halo" />

                <div className="enterprise-visual__panel panel-left">
                  <div className="panel-header">
                    <span className="panel-dot dot-blue" />
                    <span className="panel-dot dot-cyan" />
                    <span className="panel-dot dot-slate" />
                  </div>
                  <div className="panel-body">
                    <div className="panel-metric">
                      <span className="metric-label">Platforms</span>
                      <strong>24</strong>
                    </div>
                    <div className="panel-grid">
                      <span className="grid-cell active" />
                      <span className="grid-cell" />
                      <span className="grid-cell active" />
                      <span className="grid-cell" />
                      <span className="grid-cell" />
                      <span className="grid-cell active" />
                    </div>
                  </div>
                </div>

                <div className="enterprise-visual__panel panel-right">
                  <div className="mini-stack">
                    <span>Cloud</span>
                    <span>Data</span>
                    <span>Integrations</span>
                  </div>
                  <div className="signal-row">
                    <span className="signal signal-1" />
                    <span className="signal signal-2" />
                    <span className="signal signal-3" />
                  </div>
                </div>

                <div className="network-core">
                  <span className="node node-1" />
                  <span className="node node-2" />
                  <span className="node node-3" />
                  <span className="node node-4" />
                  <span className="node node-5" />
                  <span className="link link-1" />
                  <span className="link link-2" />
                  <span className="link link-3" />
                </div>

                <div className="floating-card card-primary">
                  <CheckCircle2 className="h-4 w-4" />
                  Enterprise software
                </div>

                <div className="floating-card card-secondary">
                  <CheckCircle2 className="h-4 w-4" />
                  Unified systems
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-4 text-sm text-slate-200/80 md:flex-row md:items-center md:justify-between">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-100/80">
            Trusted Technology Partner
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[13px] text-slate-200/80">
            <span>Enterprise Software</span>
            <span className="h-1 w-1 rounded-full bg-sky-300/90" />
            <span>e-Health</span>
            <span className="h-1 w-1 rounded-full bg-sky-300/90" />
            <span>Cloud SaaS</span>
            <span className="hidden h-1 w-1 rounded-full bg-sky-300/90 sm:block" />
            <span className="hidden sm:block">Since 2007</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
