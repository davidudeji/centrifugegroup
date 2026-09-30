import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { ArrowRight, Server, Activity, Compass, Cpu, CheckCircle2 } from 'lucide-react'
import { VideoPreviewOverlay } from '../../components/media/VideoPreviewOverlay'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-[#E2E8F0] pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background blueprint grid pattern (Prisma & Centrifuge style) */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0B1F33 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Positioning */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#0B1F33]/5 border border-[#0B1F33]/10 text-xs font-semibold text-[#0B1F33]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16C7D9] animate-pulse" />
              <span>CENTRIFUGE GROUP · ENTERPRISE SYSTEMS</span>
            </div>

            {/* Signature Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1F33] font-heading leading-[1.1]">
              Technology that moves{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B1F33] via-[#071521] to-[#14B8A6]">
                business forward.
              </span>
            </h1>

            {/* Supporting Brand Promise */}
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl">
              We design and deliver enterprise software, healthcare platforms, logistics systems, and digital solutions that solve complex operational problems.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link to="/contact">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Talk to an Expert
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg">
                  Explore What We've Built
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Visual Product Architecture Composition with Live Video Overlay */}
          <div className="lg:col-span-6 relative">
            <VideoPreviewOverlay
              backgroundImage="/previews/hero-system-preview.png"
              videoSource="/previews/service-mesh-telemetry.webm"
              dimensions={{
                top: '34.8%',
                left: '5.6%',
                width: '88.8%',
                height: '29.2%',
              }}
              altText="Centrifuge Multi-Cluster Service Mesh Live Telemetry"
              className="rounded-[16px] border border-[#E2E8F0] bg-white shadow-2xl overflow-hidden"
              overlayClassName="rounded-[8px] border border-[#16C7D9]/30"
            />

            {/* Floating verification badge */}
            <div className="absolute -bottom-5 -left-4 sm:left-4 bg-[#0B1F33] text-white p-3 rounded-[10px] shadow-xl border border-[#172333] flex items-center gap-3 z-10">
              <CheckCircle2 className="h-5 w-5 text-[#16C7D9] shrink-0" />
              <div className="text-left">
                <p className="text-xs font-bold">Enterprise Mission Critical</p>
                <p className="text-[10px] text-[#94A3B8]">Government & Corporate Grade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
