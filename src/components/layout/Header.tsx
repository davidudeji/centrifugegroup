import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { brandAssets } from '../../assets'
import { useUIStore } from '../../stores/uiStore'
import { useCartStore } from '../../stores/cartStore'
import {
  ChevronDown,
  Menu,
  X,
  ShoppingBag,
  Cpu,
  Layers,
} from 'lucide-react'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { mobileNavOpen, setMobileNavOpen } = useUIStore()
  const toggleCart = useCartStore((state) => state.toggleCart)
  const totalCartCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0),
  )
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setActiveDropdown(null)
    setMobileNavOpen(false)
  }, [location.pathname, setMobileNavOpen])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null)
        setMobileNavOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setMobileNavOpen])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 w-full border-b border-white/10 transition-all duration-300 ${
          isScrolled ? 'bg-[#0b2a52]/90 shadow-[0_16px_40px_rgba(10,20,35,0.22)] backdrop-blur-xl' : 'bg-[#0b2a52]/60 backdrop-blur-xl'
        }`}
      >
        <div className="mx-auto h-[72px] max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-full items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-6 lg:gap-8">
              <Link
                to="/"
                className="flex shrink-0 items-center py-2 focus:outline-none"
                aria-label="Centrifuge Group Home"
              >
                <img
                  src={brandAssets.logo}
                  alt="Centrifuge Group"
                  className="h-[40px] w-auto object-contain object-left"
                />
              </Link>

              <nav className="hidden items-center gap-1 lg:flex xl:gap-2">
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('solutions')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-[14px] font-medium transition-colors ${
                      location.pathname.startsWith('/solutions')
                        ? 'bg-white/10 text-white'
                        : 'text-white/75 hover:bg-white/5 hover:text-white'
                    }`}
                    aria-expanded={activeDropdown === 'solutions'}
                  >
                    <span>Solutions</span>
                    <ChevronDown className="h-3.5 w-3.5 text-white/70" />
                  </button>

                  {activeDropdown === 'solutions' && (
                    <div className="absolute left-0 top-full w-[280px] rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-[0_18px_48px_rgba(15,32,59,0.18)] backdrop-blur-sm">
                      <div className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Enterprise Technology
                      </div>
                      <Link to="/solutions/project-development-management" className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-slate-50">
                        <div className="mt-0.5 rounded-md bg-[#008DDA]/10 p-2 text-[#008DDA]">
                          <Cpu className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="block text-[14px] font-semibold text-slate-900">
                            Project Development & Management
                          </span>
                          <p className="mt-1 text-[12px] text-slate-500">
                            Complex business systems and digital delivery.
                          </p>
                        </div>
                      </Link>
                      <Link to="/solutions/optimax" className="mt-1 flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-slate-50">
                        <div className="mt-0.5 rounded-md bg-[#0F2C59]/10 p-2 text-[#0F2C59]">
                          <Layers className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="block text-[14px] font-semibold text-slate-900">
                            Optimax ERP Suite
                          </span>
                          <p className="mt-1 text-[12px] text-slate-500">
                            Finance, operations, and enterprise workflows.
                          </p>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('company')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-[14px] font-medium transition-colors ${
                      ['/about', '/clients', '/case-studies', '/careers'].some((p) =>
                        location.pathname.startsWith(p),
                      )
                        ? 'bg-white/10 text-white'
                        : 'text-white/75 hover:bg-white/5 hover:text-white'
                    }`}
                    aria-expanded={activeDropdown === 'company'}
                  >
                    <span>Company</span>
                    <ChevronDown className="h-3.5 w-3.5 text-white/70" />
                  </button>

                  {activeDropdown === 'company' && (
                    <div className="absolute left-0 top-full w-[220px] rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-[0_18px_48px_rgba(15,32,59,0.18)] backdrop-blur-sm">
                      <Link to="/about" className="block rounded-xl px-3 py-2 text-[14px] text-slate-700 hover:bg-slate-50 hover:text-[#008DDA]">About</Link>
                      <Link to="/clients" className="block rounded-xl px-3 py-2 text-[14px] text-slate-700 hover:bg-slate-50 hover:text-[#008DDA]">Clients</Link>
                      <Link to="/case-studies" className="block rounded-xl px-3 py-2 text-[14px] text-slate-700 hover:bg-slate-50 hover:text-[#008DDA]">Case Studies</Link>
                      <Link to="/careers" className="block rounded-xl px-3 py-2 text-[14px] text-slate-700 hover:bg-slate-50 hover:text-[#008DDA]">Careers</Link>
                    </div>
                  )}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('resources')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-[14px] font-medium transition-colors ${
                      ['/insights', '/services', '/industries'].some((p) =>
                        location.pathname.startsWith(p),
                      )
                        ? 'bg-white/10 text-white'
                        : 'text-white/75 hover:bg-white/5 hover:text-white'
                    }`}
                    aria-expanded={activeDropdown === 'resources'}
                  >
                    <span>Resources</span>
                    <ChevronDown className="h-3.5 w-3.5 text-white/70" />
                  </button>

                  {activeDropdown === 'resources' && (
                    <div className="absolute left-0 top-full w-[220px] rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-[0_18px_48px_rgba(15,32,59,0.18)] backdrop-blur-sm">
                      <Link to="/services" className="block rounded-xl px-3 py-2 text-[14px] text-slate-700 hover:bg-slate-50 hover:text-[#008DDA]">Services</Link>
                      <Link to="/insights" className="block rounded-xl px-3 py-2 text-[14px] text-slate-700 hover:bg-slate-50 hover:text-[#008DDA]">Insights</Link>
                      <Link to="/industries" className="block rounded-xl px-3 py-2 text-[14px] text-slate-700 hover:bg-slate-50 hover:text-[#008DDA]">Industries</Link>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                to="/shop"
                className="hidden text-[14px] font-medium text-white/80 transition-colors hover:text-white sm:inline-flex"
              >
                Shop
              </Link>

              <button
                onClick={toggleCart}
                className="relative rounded-full p-2 text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                aria-label={`Shopping cart with ${totalCartCount} items`}
              >
                <ShoppingBag className="h-4 w-4" />
                {totalCartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#1aa7f0] px-1 text-[10px] font-bold text-white">
                    {totalCartCount}
                  </span>
                )}
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#1aa7f0] px-4 py-2 text-[14px] font-semibold text-white shadow-[0_12px_24px_rgba(26,167,240,0.28)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#38b4f8]"
              >
                Contact Us
              </Link>

              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="lg:hidden rounded-full p-2 text-white/80 hover:bg-white/5 hover:text-white"
                aria-label={mobileNavOpen ? 'Close navigation' : 'Open navigation'}
                aria-expanded={mobileNavOpen}
              >
                {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div aria-hidden="true" className="h-[72px] shrink-0" />

      {mobileNavOpen && (
        <nav aria-label="Mobile site navigation" className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-[#0b2a52] text-white lg:hidden">
          <div className="flex h-[72px] items-center justify-between border-b border-white/10 px-4">
            <Link to="/" onClick={() => setMobileNavOpen(false)} className="flex items-center gap-2">
              <img src={brandAssets.logo} alt="Centrifuge Group" className="h-8 w-auto" />
            </Link>
            <button onClick={() => setMobileNavOpen(false)} className="rounded-full p-2 text-white/80 hover:bg-white/5 hover:text-white" aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-6 p-4">
            <div className="space-y-2">
              <p className="px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200/70">Solutions</p>
              <Link to="/solutions/project-development-management" onClick={() => setMobileNavOpen(false)} className="block rounded-xl px-3 py-2 text-[15px] text-white/80 hover:bg-white/5 hover:text-white">Project Development & Management</Link>
              <Link to="/solutions/optimax" onClick={() => setMobileNavOpen(false)} className="block rounded-xl px-3 py-2 text-[15px] text-white/80 hover:bg-white/5 hover:text-white">Optimax ERP Suite</Link>
              <Link to="/solutions/healthcare" onClick={() => setMobileNavOpen(false)} className="block rounded-xl px-3 py-2 text-[15px] text-white/80 hover:bg-white/5 hover:text-white">Healthcare Technology</Link>
            </div>

            <div className="space-y-2 border-t border-white/10 pt-4">
              <p className="px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200/70">Company</p>
              <Link to="/about" onClick={() => setMobileNavOpen(false)} className="block rounded-xl px-3 py-2 text-[15px] text-white/80 hover:bg-white/5 hover:text-white">About</Link>
              <Link to="/clients" onClick={() => setMobileNavOpen(false)} className="block rounded-xl px-3 py-2 text-[15px] text-white/80 hover:bg-white/5 hover:text-white">Clients</Link>
              <Link to="/case-studies" onClick={() => setMobileNavOpen(false)} className="block rounded-xl px-3 py-2 text-[15px] text-white/80 hover:bg-white/5 hover:text-white">Case Studies</Link>
              <Link to="/careers" onClick={() => setMobileNavOpen(false)} className="block rounded-xl px-3 py-2 text-[15px] text-white/80 hover:bg-white/5 hover:text-white">Careers</Link>
            </div>

            <div className="space-y-2 border-t border-white/10 pt-4">
              <p className="px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200/70">Resources</p>
              <Link to="/services" onClick={() => setMobileNavOpen(false)} className="block rounded-xl px-3 py-2 text-[15px] text-white/80 hover:bg-white/5 hover:text-white">Services</Link>
              <Link to="/insights" onClick={() => setMobileNavOpen(false)} className="block rounded-xl px-3 py-2 text-[15px] text-white/80 hover:bg-white/5 hover:text-white">Insights</Link>
              <Link to="/industries" onClick={() => setMobileNavOpen(false)} className="block rounded-xl px-3 py-2 text-[15px] text-white/80 hover:bg-white/5 hover:text-white">Industries</Link>
            </div>

            <div className="border-t border-white/10 pt-4">
              <Link to="/shop" onClick={() => setMobileNavOpen(false)} className="block rounded-xl px-3 py-2 text-[15px] text-white/80 hover:bg-white/5 hover:text-white">Shop</Link>
            </div>

            <div className="border-t border-white/10 pt-4">
              <Link
                to="/contact"
                onClick={() => setMobileNavOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#1aa7f0] px-4 py-3 text-[15px] font-semibold text-white shadow-[0_12px_24px_rgba(26,167,240,0.28)]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  )
}

export default Header
