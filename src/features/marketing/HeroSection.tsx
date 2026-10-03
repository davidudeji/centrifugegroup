import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Activity, Server, Cpu, BarChart2, CheckCircle2 } from 'lucide-react'

const QUICK = [
  { label: 'Optimax ERP', to: '/solutions/optimax' },
  { label: 'Healthcare', to: '/solutions/healthcare' },
  { label: 'Logistics', to: '/solutions/logistics' },
  { label: 'Case Studies', to: '/case-studies' },
]

const STATS = [
  { label: 'Years of operation',       value: '10+' },
  { label: 'Enterprise clients served', value: '40+' },
  { label: 'Systems in production',    value: '12+' },
  { label: 'Countries of presence',    value: '3' },
]

// ── System Visualization ──────────────────────────────────────────────────────
const SystemViz: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef   = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let t = 0
    const nodes = [
      { x: 0.5, y: 0.12, label: 'Applications', color: '#F27A22' },
      { x: 0.2, y: 0.38, label: 'Enterprise API', color: '#16C7D9' },
      { x: 0.8, y: 0.38, label: 'Health Layer',  color: '#16C7D9' },
      { x: 0.5, y: 0.62, label: 'Cloud Infra',   color: '#F27A22' },
      { x: 0.2, y: 0.85, label: 'Analytics',     color: '#94A3B8' },
      { x: 0.8, y: 0.85, label: 'Data Store',    color: '#94A3B8' },
    ]
    const edges = [
      [0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5],
    ]

    function draw() {
      if (!canvas || !ctx) return
      const W = canvas.width
      const H = canvas.height
      ctx.clearRect(0, 0, W, H)

      // Draw edges with animated dash
      edges.forEach(([a, b]) => {
        const na = nodes[a], nb = nodes[b]
        const x1 = na.x * W, y1 = na.y * H
        const x2 = nb.x * W, y2 = nb.y * H
        ctx.save()
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = 'rgba(22, 199, 217, 0.18)'
        ctx.lineWidth = 1
        ctx.setLineDash([4, 8])
        ctx.lineDashOffset = -t * 0.5
        ctx.stroke()
        ctx.restore()

        // Animated packet
        const progress = ((t * 0.008) % 1)
        const px = x1 + (x2 - x1) * progress
        const py = y1 + (y2 - y1) * progress
        ctx.beginPath()
        ctx.arc(px, py, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = '#F27A22'
        ctx.fill()
      })

      // Draw nodes
      nodes.forEach((n, i) => {
        const x = n.x * W, y = n.y * H
        // Glow
        const grd = ctx.createRadialGradient(x, y, 0, x, y, 24)
        grd.addColorStop(0, n.color === '#F27A22' ? 'rgba(242,122,34,0.18)' : 'rgba(22,199,217,0.12)')
        grd.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.arc(x, y, 24, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()

        // Node dot
        ctx.beginPath()
        ctx.arc(x, y, 6, 0, Math.PI * 2)
        ctx.fillStyle = n.color
        ctx.fill()

        // Pulse ring
        const pulse = (Math.sin(t * 0.04 + i) + 1) / 2
        ctx.beginPath()
        ctx.arc(x, y, 6 + pulse * 10, 0, Math.PI * 2)
        ctx.strokeStyle = n.color
        ctx.lineWidth = 0.8
        ctx.globalAlpha = (1 - pulse) * 0.6
        ctx.stroke()
        ctx.globalAlpha = 1
      })

      t++
      animRef.current = requestAnimationFrame(draw)
    }

    const resize = () => {
      canvas.width  = canvas.offsetWidth  * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Background panel */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #0F2C47 0%, #0B1F33 60%, #071521 100%)',
        borderRadius: '20px',
        border: '1px solid rgba(22,199,217,0.15)',
        overflow: 'hidden'
      }}>
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Canvas: architecture diagram */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', borderRadius: '20px' }}
      />

      {/* UI overlay cards */}
      <div style={{ position: 'relative', zIndex: 2, padding: '24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

        {/* Top metric cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {[
            { label: 'Active Systems',   value: '12',    icon: Server,   color: '#16C7D9', delta: '+2 this month' },
            { label: 'Uptime SLA',       value: '99.9%', icon: Activity, color: '#F27A22', delta: 'Last 30 days' },
            { label: 'Data Processed',   value: '4.2TB', icon: Cpu,      color: '#16C7D9', delta: 'This quarter' },
            { label: 'Clients Active',   value: '40+',   icon: BarChart2,color: '#F27A22', delta: 'Verified clients' },
          ].map(({ label, value, icon: Icon, color, delta }) => (
            <div key={label} style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              padding: '14px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase', margin: 0 }}>{label}</p>
                <Icon style={{ width: 13, height: 13, color }} />
              </div>
              <p style={{ fontSize: '22px', fontWeight: 700, color: '#fff', fontFamily: 'Manrope, sans-serif', margin: 0, lineHeight: 1 }}>{value}</p>
              <p style={{ fontSize: '10px', color, margin: '4px 0 0', letterSpacing: '0.02em' }}>{delta}</p>
            </div>
          ))}
        </div>

        {/* Status list */}
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '14px',
          padding: '16px'
        }}>
          <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px', margin: '0 0 12px' }}>
            System Status
          </p>
          {[
            { name: 'Optimax ERP Suite',     status: 'Operational', ok: true  },
            { name: 'Health Workforce HRHIS', status: 'Operational', ok: true  },
            { name: 'Logistics Platform',     status: 'Operational', ok: true  },
            { name: 'Cloud Infrastructure',   status: 'Operational', ok: true  },
          ].map(({ name, status, ok }) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', backgroundColor: ok ? '#22C55E' : '#EF4444', boxShadow: ok ? '0 0 6px rgba(34,197,94,0.6)' : '0 0 6px rgba(239,68,68,0.6)' }} />
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{name}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle2 style={{ width: 11, height: 11, color: '#22C55E' }} />
                <span style={{ fontSize: '11px', color: '#22C55E', fontWeight: 600 }}>{status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          backgroundColor: 'rgba(242,122,34,0.1)',
          border: '1px solid rgba(242,122,34,0.25)',
          borderRadius: '10px',
          padding: '12px 16px',
          display: 'flex', alignItems: 'center', gap: '10px'
        }}>
          <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', backgroundColor: '#F27A22', boxShadow: '0 0 8px rgba(242,122,34,0.7)' }} />
          <span style={{ fontSize: '12px', color: '#F27A22', fontWeight: 600 }}>Enterprise systems operating across 3 countries</span>
        </div>

      </div>
    </div>
  )
}

// ── Main Section ──────────────────────────────────────────────────────────────
export const HeroSection: React.FC = () => {
  return (
    <section style={{ position: 'relative', backgroundColor: '#0B1F33', color: '#fff', overflow: 'hidden' }}>
      {/* Background radial glows */}
      <div aria-hidden="true" style={{
        pointerEvents: 'none', position: 'absolute', inset: 0,
        backgroundImage: `
          radial-gradient(ellipse 80% 60% at 30% -10%, rgba(22,199,217,0.10) 0%, transparent 65%),
          radial-gradient(ellipse 50% 40% at 90% 80%, rgba(242,122,34,0.06) 0%, transparent 50%)
        `
      }} />

      {/* Grid pattern */}
      <div aria-hidden="true" style={{
        pointerEvents: 'none', position: 'absolute', inset: 0, opacity: 0.025,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Asymmetric two-column layout */}
      <div className="section-container" style={{ position: 'relative', zIndex: 10, paddingTop: '80px', paddingBottom: '0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', minHeight: '620px' }}>

          {/* ── LEFT: Copy ──────────────────────────────────── */}
          <div style={{ paddingBottom: '80px' }}>
            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '5px 14px', marginBottom: '28px',
              backgroundColor: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '9999px',
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)'
            }}>
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', backgroundColor: '#16C7D9' }} />
              CENTRIFUGE GROUP / TECHNOLOGY SYSTEMS
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(42px, 5.5vw, 72px)',
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: '-0.03em',
              color: '#fff',
              marginBottom: '24px'
            }}>
              Technology{' '}
              <span style={{ color: '#F27A22', fontStyle: 'italic' }}>infrastructure</span>
              {' '}for organizations built to scale.
            </h1>

            {/* Supporting copy */}
            <p style={{
              fontSize: 'clamp(16px, 1.5vw, 19px)',
              color: 'rgba(148,163,184,0.95)',
              lineHeight: 1.7,
              maxWidth: '480px',
              marginBottom: '40px'
            }}>
              We design and build enterprise software, e-health systems, and cloud platforms that help organizations manage complex operations, connect people, and scale with confidence.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
              <Link
                to="/contact"
                id="hero-cta-primary"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '14px 28px', backgroundColor: '#F27A22', color: '#0F172A',
                  borderRadius: '10px', fontSize: '15px', fontWeight: 700,
                  textDecoration: 'none', transition: 'background-color 150ms, transform 100ms'
                }}
              >
                Talk to Centrifuge
                <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
              <Link
                to="/solutions"
                id="hero-cta-secondary"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '13px 27px',
                  backgroundColor: 'transparent', color: '#fff',
                  borderRadius: '10px', fontSize: '15px', fontWeight: 500,
                  border: '1.5px solid rgba(255,255,255,0.2)',
                  textDecoration: 'none', transition: 'border-color 150ms, background-color 150ms'
                }}
              >
                Explore Solutions
              </Link>
            </div>

            {/* Quick-nav chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '12px', color: 'rgba(100,116,139,0.9)', fontWeight: 500 }}>
                Quick access:
              </span>
              {QUICK.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '4px',
                    padding: '5px 12px',
                    borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.1)',
                    fontSize: '12px', color: 'rgba(148,163,184,0.9)',
                    textDecoration: 'none', transition: 'color 150ms, border-color 150ms'
                  }}
                >
                  {item.label}
                  <ChevronRight style={{ width: 12, height: 12 }} />
                </Link>
              ))}
            </div>
          </div>

          {/* ── RIGHT: System Visualization ─────────────────── */}
          <div style={{ height: '540px', paddingBottom: '80px' }} className="hidden lg:block">
            <SystemViz />
          </div>

        </div>
      </div>

      {/* Bottom stats bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="section-container" style={{ paddingTop: '32px', paddingBottom: '32px' }}>
          <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dd style={{ fontSize: '36px', fontWeight: 800, fontFamily: 'Manrope, sans-serif', color: '#fff', lineHeight: 1, margin: 0 }}>
                  {stat.value}
                </dd>
                <dt style={{ marginTop: '4px', fontSize: '12px', color: 'rgba(100,116,139,0.9)', fontWeight: 500 }}>
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
