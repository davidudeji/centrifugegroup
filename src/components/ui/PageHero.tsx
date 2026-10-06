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
      <section className="bg-[#F5F7FA] border-b border-[#E2E8F0] py-16 sm:py-20">
        <div className="section-container">
          <div className="max-w-3xl">
              <h1 className="text-h1 text-[#0F2C59] mb-4">{title}</h1>
            {description && (
              <p className="text-body-lg text-[#64748B] leading-relaxed">{description}</p>
            )}
            {children}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-[#0F2C59] text-white py-16 sm:py-24 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 70% 60% at 70% -20%, rgba(0,141,218,0.12) 0%, transparent 60%)',
        }}
      />
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-h1 text-white mb-4">{title}</h1>
          {description && (
            <p className="text-body-lg text-[#94A3B8] leading-relaxed max-w-2xl">{description}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}

export default PageHero
