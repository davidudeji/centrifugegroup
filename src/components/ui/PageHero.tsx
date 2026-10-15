import React from 'react'

interface PageHeroProps {
  eyebrow: string
  title: React.ReactNode
  description?: string
  /** If true, renders on the neutral light surface instead of navy */
  light?: boolean
  children?: React.ReactNode
}

/**
 * Shared page hero banner used across all public marketing pages.
 * Provides consistent branding: deep navy background, Inter heading,
 * blue eyebrow badge, and generous padding.
 */
export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  description,
  light = false,
  children,
}) => {
  if (light) {
    return (
      <section className="bg-[#F5F8FC] border-b border-[#E2E8F0] py-16 sm:py-24 relative overflow-hidden text-left">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0756A5_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0756A5]/15 bg-[#0756A5]/[0.03] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0756A5] mb-4">
                <span className="h-2 w-2 rounded-full bg-[#F28C28] ring-4 ring-[#F28C28]/20" aria-hidden="true" />
                <span>{eyebrow}</span>
              </div>
            )}
            <h1 className="text-[32px] sm:text-[44px] font-bold text-[#102A43] tracking-tight leading-[1.2] mb-4">{title}</h1>
            {description && (
              <p className="text-[16px] text-[#475569] leading-relaxed max-w-2xl">{description}</p>
            )}
            {children && <div className="mt-6">{children}</div>}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-[#073B70] text-white py-16 sm:py-24 relative overflow-hidden text-left border-b border-white/10">
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
          'radial-gradient(ellipse 70% 60% at 70% -20%, rgba(22,119,210,0.2) 0%, transparent 60%)',
        }}
      />
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-4">
              <span className="h-2 w-2 rounded-full bg-[#F28C28] ring-4 ring-[#F28C28]/20" aria-hidden="true" />
              <span>{eyebrow}</span>
            </div>
          )}
          <h1 className="text-[32px] sm:text-[48px] font-bold text-white tracking-tight leading-[1.15] mb-4">{title}</h1>
          {description && (
            <p className="text-[16px] text-slate-300 leading-relaxed max-w-2xl">{description}</p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  )
}

export default PageHero
