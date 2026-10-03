import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { brandAssets } from '../../assets'
import { useUIStore } from '../../stores/uiStore'
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react'

// ─── Nav Config ──────────────────────────────────────────────────────────────
const NAV = [
  {
    label: 'Solutions',
    key: 'solutions',
    basePath: '/solutions',
    items: [
      { to: '/solutions/optimax',       label: 'Optimax ERP',          desc: 'Connected enterprise operations & finance suite.', badge: 'Featured' },
      { to: '/solutions/logistics',     label: 'Logistics & Mobility',  desc: 'Dispatch, IoT telematics, and route optimisation.' },
      { to: '/solutions/healthcare',    label: 'Healthcare Technology', desc: 'Clinical EMR, HRHIS, and health data platforms.' },
      { to: '/solutions/enterprise',    label: 'Enterprise Systems',    desc: 'Custom core business automation & digital platforms.' },
      { to: '/solutions/data-analytics',label: 'Data & Analytics',      desc: 'Business intelligence pipelines & GIS spatial analytics.' },
    ],
  },
  {
    label: 'Services',
    key: 'services',
    basePath: '/services',
    items: [
      { to: '/services/software-development', label: 'Software Development', desc: 'Custom enterprise apps & integrations.' },
      { to: '/services/mobile-development',   label: 'Mobile Development',   desc: 'Native & cross-platform mobile apps.' },
      { to: '/services/cloud',                label: 'Cloud',                desc: 'Cloud migration, architecture & DevOps.' },
      { to: '/services/infrastructure',       label: 'Infrastructure',       desc: 'Data centres, networking & hardware.' },
      { to: '/services/managed-it',           label: 'Managed IT',           desc: 'Proactive monitoring & operations support.' },
      { to: '/services/consulting',           label: 'Consulting',           desc: 'Digital transformation & technology advisory.' },
      { to: '/services/training',             label: 'Training',             desc: 'Institutional capacity building & onboarding.' },
    ],
  },
  {
    label: 'Industries',
    key: 'industries',
    basePath: '/industries',
    items: [
      { to: '/industries/healthcare', label: 'Healthcare',         desc: 'EMR, HRHIS, clinical data infrastructure.' },
      { to: '/industries/logistics',  label: 'Logistics',          desc: 'Fleet telematics, dispatch & ePOD.' },
      { to: '/industries/government', label: 'Government',         desc: 'Digital licensing & regulatory platforms.' },
      { to: '/industries/enterprise', label: 'Enterprise',         desc: 'ERP, automation & connected operations.' },
      { to: '/industries/smes',       label: 'SMEs',               desc: 'Cloud POS, power & inventory solutions.' },
    ],
  },
  {
    label: 'Company',
    key: 'company',
    basePath: '/about',
    items: [
      { to: '/about',        label: 'About Us',    desc: 'Our mission, values, and story.' },
      { to: '/clients',      label: 'Clients',     desc: 'Ministries, agencies & enterprises we serve.' },
      { to: '/case-studies', label: 'Case Studies',desc: 'Verified client outcomes & results.' },
      { to: '/projects',     label: 'Projects',    desc: 'Our portfolio of deployments.' },
      { to: '/careers',      label: 'Careers',     desc: 'Build technology that matters.' },
      { to: '/contact',      label: 'Contact',     desc: 'Reach our team.' },
    ],
  },
]

const SIMPLE_LINKS = [
  { label: 'Insights', to: '/insights' },
]

// ─── Component ────────────────────────────────────────────────────────────────
export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { mobileNavOpen, setMobileNavOpen } = useUIStore()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setActiveDropdown(null)
    setMobileNavOpen(false)
  }, [location.pathname, setMobileNavOpen])

  const isActive = (basePath: string) => location.pathname.startsWith(basePath)

  return (
    <>
      {/* ── Announcement Banner ─────────────────────────── */}
      <aside
        aria-label="Announcement"
        className="w-full h-9 bg-[#071521] flex items-center justify-center px-4 text-[12px] text-[#64748B]"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#16C7D9]" aria-hidden="true" />
          <span>Introducing Optimax ERP — Enterprise Resource Planning for growing organisations.</span>
          <Link
            to="https://www.optimaxsuites.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#16C7D9] hover:text-white underline underline-offset-4 transition-colors font-medium inline-flex items-center gap-0.5 ml-1"
          >
            Learn more
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </aside>

      {/* ── Main Header ─────────────────────────────────── */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/97 backdrop-blur-md border-b border-[#E2E8F0] shadow-[0_1px_8px_rgba(11,31,51,0.06)]'
            : 'bg-white border-b border-[#E2E8F0]'
        }`}
      >
        <div className="w-[min(92%,1440px)] mx-auto">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo — the PNG has white text + orange mark (designed for dark bg).
                 On the white header we use a brightness(0) filter to render all
                 pixels as solid black, making the wordmark visible while keeping
                 the icon silhouette. The small orange circle below provides brand colour. */}
            <Link
              to="/"
              className="flex items-center gap-2 shrink-0 focus-visible:ring-2 focus-visible:ring-[#F27A22] rounded-sm"
              aria-label="Centrifuge Group — home"
            >
              <img
                src={brandAssets.logo}
                alt="Centrifuge Group"
                style={{ filter: 'brightness(0) saturate(100%) invert(52%) sepia(94%) saturate(617%) hue-rotate(346deg) brightness(102%)', height: '38px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>

            {/* ── Desktop Nav ─────────────────────────── */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary navigation">
              {/* Dropdown items */}
              {NAV.map((group) => (
                <div
                  key={group.key}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(group.key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`relative flex items-center gap-1 px-3 py-2 text-[14px] font-medium rounded-[8px] transition-colors duration-150 hover:bg-[#F7F9FA] ${
                      isActive(group.basePath)
                        ? 'text-[#0B1F33]'
                        : 'text-[#64748B] hover:text-[#0B1F33]'
                    }`}
                    aria-expanded={activeDropdown === group.key}
                    aria-haspopup="true"
                  >
                    {group.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        activeDropdown === group.key ? 'rotate-180' : ''
                      }`}
                    />
                    {/* Active underline */}
                    {isActive(group.basePath) && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#16C7D9] rounded-full" />
                    )}
                  </button>

                  {/* Dropdown panel */}
                  {activeDropdown === group.key && (
                    <div
                      role="menu"
                      className="absolute top-full left-0 w-72 bg-white rounded-[12px] border border-[#E2E8F0] p-2 z-50 shadow-[0_8px_32px_rgba(11,31,51,0.10)] mt-1"
                    >
                      {group.items.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          role="menuitem"
                          className="flex items-start gap-3 p-2.5 rounded-[8px] hover:bg-[#F7F9FA] transition-colors group"
                        >
                          <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[#16C7D9] shrink-0" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[13px] font-semibold text-[#0B1F33] group-hover:text-[#16C7D9] transition-colors">
                                {item.label}
                              </span>
                              {'badge' in item && item.badge && (
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#EFF9FA] text-[#0EA5B9] border border-[#16C7D9]/20 font-medium">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[12px] text-[#94A3B8] mt-0.5 leading-snug">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Simple links */}
              {SIMPLE_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-3 py-2 text-[14px] font-medium rounded-[8px] transition-colors duration-150 hover:bg-[#F7F9FA] ${
                    isActive(link.to)
                      ? 'text-[#0B1F33]'
                      : 'text-[#64748B] hover:text-[#0B1F33]'
                  }`}
                >
                  {link.label}
                  {isActive(link.to) && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#16C7D9] rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* ── Right CTA ───────────────────────────── */}
            <div className="flex items-center gap-3">
              <Link
                to="/shop"
                className="hidden md:inline-flex items-center gap-1.5 text-[14px] font-medium text-[#64748B] hover:text-[#0B1F33] transition-colors px-3 py-2"
              >
                Shop
              </Link>
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-[10px] text-[14px] font-semibold transition-colors duration-150"
                style={{ backgroundColor: '#F27A22', color: '#0F172A', boxShadow: '0 1px 3px rgba(242,122,34,0.3)', fontWeight: 600 }}
                id="header-contact-cta"
              >
                Talk to Centrifuge
              </Link>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="lg:hidden p-2 rounded-[8px] text-[#64748B] hover:text-[#0B1F33] hover:bg-[#F7F9FA] transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileNavOpen}
              >
                {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ───────────────────────────────── */}
      {mobileNavOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#E2E8F0]">
            <Link to="/" onClick={() => setMobileNavOpen(false)}>
              <img src={brandAssets.logo} alt="Centrifuge Group" style={{ filter: 'brightness(0) saturate(100%) invert(52%) sepia(94%) saturate(617%) hue-rotate(346deg) brightness(102%)', height: '36px', width: 'auto' }} />
            </Link>
            <button
              onClick={() => setMobileNavOpen(false)}
              className="p-2 rounded-[8px] text-[#64748B] hover:text-[#0B1F33] hover:bg-[#F7F9FA] transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Drawer body */}
          <div className="p-5 flex-1 space-y-6 overflow-y-auto">
            {NAV.map((group) => (
              <div key={group.key}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8] mb-2 px-2">
                  {group.label}
                </p>
                <div className="space-y-0.5">
                  {group.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileNavOpen(false)}
                      className="flex items-center gap-3 py-3 px-3 rounded-[8px] text-[15px] font-medium text-[#0B1F33] hover:bg-[#F7F9FA] transition-colors min-h-[48px]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#16C7D9] shrink-0" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8] mb-2 px-2">
                More
              </p>
              {[...SIMPLE_LINKS, { label: 'Shop', to: '/shop' }].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileNavOpen(false)}
                  className="flex items-center py-3 px-3 rounded-[8px] text-[15px] font-medium text-[#0B1F33] hover:bg-[#F7F9FA] transition-colors min-h-[48px]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Drawer footer */}
          <div className="p-5 border-t border-[#E2E8F0]">
            <Link
              to="/contact"
              onClick={() => setMobileNavOpen(false)}
              className="w-full flex items-center justify-center py-3.5 px-6 rounded-[10px] text-[15px] font-semibold transition-colors min-h-[48px]"
              style={{ backgroundColor: '#F27A22', color: '#0F172A' }}
              id="mobile-contact-cta"
            >
              Talk to Centrifuge
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
