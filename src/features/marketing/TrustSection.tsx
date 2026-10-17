import React from 'react'
import { verifiedClients } from '../../assets'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Triplicate for seamless infinite loop — the CSS animates translateX(-100%/3)
const TRACK = [...verifiedClients, ...verifiedClients, ...verifiedClients]

export const TrustSection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden border-b py-14 lg:py-20"
      style={{
        background: 'linear-gradient(160deg, #14133B 0%, #11274E 60%, #11143C 100%)',
        borderColor: 'rgba(255,255,255,0.07)',
      }}
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 20%, transparent 85%)',
        }}
      />
      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: '-30%', right: '-10%',
          width: '55%', height: '120%',
          background: 'radial-gradient(ellipse at top right, rgba(17,39,78,0.45) 0%, transparent 65%)',
        }}
      />

      {/* ── Contained header ── */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Top strip: label + link */}
        <div className="flex flex-col items-start gap-3 mb-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#F28C28]" aria-hidden="true" />
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F28C28]">
              Institutional Trust
            </p>
          </div>
          <Link
            to="/clients"
            className="inline-flex shrink-0 items-center gap-1.5 text-[0.8125rem] font-semibold text-blue-300 hover:text-white transition-colors group"
          >
            <span>View all clients</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Heading block */}
        <div className="max-w-[520px] mb-12">
          <h2 className="text-[1.75rem] sm:text-[2.125rem] font-bold tracking-tight leading-tight text-white">
            Trusted by Federal Ministries, Regulators &amp; Multinationals
          </h2>
          <p className="mt-4 text-[1rem] leading-[1.75]" style={{ color: 'rgba(191,219,254,0.65)' }}>
            From national healthcare informatics to enterprise technology for energy and
            regulatory bodies, our systems operate at institutional scale.
          </p>
        </div>
      </div>

      {/* ── Full-width infinite marquee ── */}
      <div className="relative w-full overflow-hidden" aria-label="Trusted client logos">

        {/* Left edge fade */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: '100px',
            background: 'linear-gradient(90deg, #14133B 0%, transparent 100%)',
          }}
        />
        {/* Right edge fade */}
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: '100px',
            background: 'linear-gradient(270deg, #11274E 0%, transparent 100%)',
          }}
        />

        {/* Scrolling track — animation defined in index.css as .trust-marquee */}
        <div className="trust-marquee py-2">
          {TRACK.map((client, i) => (
            <div
              key={`${client.id}-${i}`}
              className="group flex-shrink-0 flex flex-col items-center justify-center gap-3 rounded-[12px] mx-3 transition-all duration-300 hover:scale-[1.04]"
              style={{
                width: '160px',
                padding: '20px 18px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.09)',
              }}
              title={client.name}
            >
              {/* Image: natural colors, slightly desaturated, full opacity on hover */}
              <div className="flex h-12 w-full items-center justify-center overflow-hidden rounded-[6px]">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-[110px] object-contain transition-all duration-300"
                  style={{
                    opacity: 0.72,
                    filter: 'grayscale(0.3) brightness(1.1)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.opacity = '1'
                    el.style.filter = 'grayscale(0) brightness(1.25)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.opacity = '0.72'
                    el.style.filter = 'grayscale(0.3) brightness(1.1)'
                  }}
                />
              </div>
              <span
                className="text-center text-[10px] font-medium leading-tight line-clamp-2"
                style={{ color: 'rgba(191,219,254,0.5)' }}
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSection
