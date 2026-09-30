import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { brandAssets } from '../../assets'
import { useCartStore } from '../../stores/cartStore'
import { useUIStore } from '../../stores/uiStore'
import {
  ChevronDown,
  Menu,
  X,
  ShoppingBag,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { mobileNavOpen, setMobileNavOpen } = useUIStore()
  const { getTotalCount, toggleCart } = useCartStore()
  const location = useLocation()
  const totalCartCount = getTotalCount()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null)
    setMobileNavOpen(false)
  }, [location.pathname, setMobileNavOpen])

  return (
    <>
      {/* ─── Warp Announcement Banner (warp_design.md §137-141) ─── */}
      <aside aria-label="Announcement" className="w-full h-9 bg-[#000000] border-b border-[#1e1e1d] flex items-center justify-center px-4 text-[12px] text-[#b4b4b2] tracking-[-0.14px]">
        <div className="flex items-center gap-2 text-center">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f0b66d]" />
          <span>
            Introducing Optimax ERP - Enterprise Resource Planning System.
          </span>
          <Link
            to="https://www.optimaxsuites.com/"
            className="text-[#f0b66d] hover:text-[#faf9f6] underline underline-offset-4 decoration-[#f0b66d]/70 transition-colors font-medium inline-flex items-center gap-0.5 ml-1"
          >
            <span>Learn more</span>
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </aside>

      {/* ─── Warp Top Navigation Bar (warp_design.md §132-136) ─── */}
      <header
        className={`sticky top-0 z-40 w-full transition-colors duration-150 ${isScrolled
          ? 'bg-[#000000]/95 backdrop-blur-md border-b border-[#1e1e1d]'
          : 'bg-[#000000] border-b border-[#1e1e1d]'
          }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-[76px] py-2">
            {/* Brand Logo & Wordmark (250px to 400px wide by 50px to 100px high) */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none rounded-[4px] shrink-0 mr-4"
              aria-label="Centrifuge Group Home"
            >
              <img
                src={brandAssets.logo}
                alt="Centrifuge Group"
                className="w-[260px] sm:w-[320px] h-[52px] sm:h-[64px] object-contain object-left brightness-110"
              />
            </Link>

            {/* Desktop Navigation Links (Matter/Inter 400, 14px, #868684) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1.5 text-[14px] tracking-[-0.14px] transition-colors ${location.pathname.startsWith('/solutions')
                    ? 'text-[#faf9f6]'
                    : 'text-[#868684] hover:text-[#faf9f6]'
                    }`}
                  aria-expanded={activeDropdown === 'solutions'}
                >
                  <span>Solutions</span>
                  <ChevronDown className="h-3.5 w-3.5 text-[#868684] transition-transform duration-150" />
                </button>

                {activeDropdown === 'solutions' && (
                  <div className="absolute top-full left-0 w-72 bg-[#1e1e1d] rounded-[20px] border border-[#1e1e1d] p-3 z-50 shadow-none animate-in fade-in duration-100 mt-2">
                    <Link
                      to="/solutions/optimax"
                      className="block p-2.5 rounded-[10px] hover:bg-[#121212] transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[14px] font-semibold text-[#faf9f6] group-hover:text-[#f0b66d] transition-colors">
                          Optimax ERP
                        </span>
                        <span className="text-[10px] uppercase tracking-[1px] px-2 py-0.5 rounded-[50px] border border-[#333333] text-[#f0b66d] bg-[#f0b66d]/10">
                          Featured
                        </span>
                      </div>
                      <p className="text-[12px] text-[#868684] mt-0.5 line-clamp-1">
                        Connected enterprise operations & finance suite.
                      </p>
                    </Link>

                    <Link
                      to="/solutions/logistics"
                      className="block p-2.5 rounded-[10px] hover:bg-[#121212] transition-colors group"
                    >
                      <span className="text-[14px] font-semibold text-[#faf9f6] group-hover:text-[#f0b66d] transition-colors">
                        Logistics & Mobility
                      </span>
                      <p className="text-[12px] text-[#868684] mt-0.5 line-clamp-1">
                        Dispatch, IoT telematics, and route optimization.
                      </p>
                    </Link>

                    <Link
                      to="/solutions/healthcare"
                      className="block p-2.5 rounded-[10px] hover:bg-[#121212] transition-colors group"
                    >
                      <span className="text-[14px] font-semibold text-[#faf9f6] group-hover:text-[#f0b66d] transition-colors">
                        Healthcare Technology
                      </span>
                      <p className="text-[12px] text-[#868684] mt-0.5 line-clamp-1">
                        Clinical EMR, HRHIS, and health data platforms.
                      </p>
                    </Link>

                    <Link
                      to="/solutions/enterprise"
                      className="block p-2.5 rounded-[10px] hover:bg-[#121212] transition-colors group"
                    >
                      <span className="text-[14px] font-semibold text-[#faf9f6] group-hover:text-[#f0b66d] transition-colors">
                        Enterprise Systems
                      </span>
                      <p className="text-[12px] text-[#868684] mt-0.5 line-clamp-1">
                        Custom core business automation & digital platforms.
                      </p>
                    </Link>

                    <Link
                      to="/solutions/data-analytics"
                      className="block p-2.5 rounded-[10px] hover:bg-[#121212] transition-colors group"
                    >
                      <span className="text-[14px] font-semibold text-[#faf9f6] group-hover:text-[#f0b66d] transition-colors">
                        Data & Analytics
                      </span>
                      <p className="text-[12px] text-[#868684] mt-0.5 line-clamp-1">
                        Business intelligence pipelines & GIS spatial analytics.
                      </p>
                    </Link>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1.5 text-[14px] tracking-[-0.14px] transition-colors ${location.pathname.startsWith('/services')
                    ? 'text-[#faf9f6]'
                    : 'text-[#868684] hover:text-[#faf9f6]'
                    }`}
                  aria-expanded={activeDropdown === 'services'}
                >
                  <span>Services</span>
                  <ChevronDown className="h-3.5 w-3.5 text-[#868684] transition-transform duration-150" />
                </button>

                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 w-72 bg-[#1e1e1d] rounded-[20px] border border-[#1e1e1d] p-3 z-50 shadow-none animate-in fade-in duration-100 mt-2">
                    <Link
                      to="/services/software-development"
                      className="block p-2.5 rounded-[10px] hover:bg-[#121212] transition-colors group"
                    >
                      <span className="text-[14px] font-semibold text-[#faf9f6] group-hover:text-[#f0b66d] transition-colors">
                        Software Development
                      </span>
                      <p className="text-[12px] text-[#868684] mt-0.5">
                        Custom enterprise web applications & architectures.
                      </p>
                    </Link>
                    <Link
                      to="/services/mobile-development"
                      className="block p-2.5 rounded-[10px] hover:bg-[#121212] transition-colors group"
                    >
                      <span className="text-[14px] font-semibold text-[#faf9f6] group-hover:text-[#f0b66d] transition-colors">
                        Mobile Development
                      </span>
                      <p className="text-[12px] text-[#868684] mt-0.5">
                        Offline-first iOS & Android apps for field operations.
                      </p>
                    </Link>
                    <Link
                      to="/services/cloud"
                      className="block p-2.5 rounded-[10px] hover:bg-[#121212] transition-colors group"
                    >
                      <span className="text-[14px] font-semibold text-[#faf9f6] group-hover:text-[#f0b66d] transition-colors">
                        Cloud & Infrastructure
                      </span>
                      <p className="text-[12px] text-[#868684] mt-0.5">
                        High-availability hosting, Docker, and DevOps.
                      </p>
                    </Link>
                    <Link
                      to="/services/managed-it"
                      className="block p-2.5 rounded-[10px] hover:bg-[#121212] transition-colors group"
                    >
                      <span className="text-[14px] font-semibold text-[#faf9f6] group-hover:text-[#f0b66d] transition-colors">
                        Managed IT & Consulting
                      </span>
                      <p className="text-[12px] text-[#868684] mt-0.5">
                        Proactive maintenance, security, and digital strategy.
                      </p>
                    </Link>
                    <Link
                      to="/services/training"
                      className="block p-2.5 rounded-[10px] hover:bg-[#121212] transition-colors group"
                    >
                      <span className="text-[14px] font-semibold text-[#faf9f6] group-hover:text-[#f0b66d] transition-colors">
                        Training & Capacity Building
                      </span>
                      <p className="text-[12px] text-[#868684] mt-0.5">
                        Institutional technical training and user onboarding.
                      </p>
                    </Link>
                  </div>
                )}
              </div>

              {/* Projects link */}
              <Link
                to="/projects"
                className={`text-[14px] tracking-[-0.14px] transition-colors ${location.pathname.startsWith('/projects')
                  ? 'text-[#faf9f6]'
                  : 'text-[#868684] hover:text-[#faf9f6]'
                  }`}
              >
                Projects
              </Link>

              {/* Industries */}
              <Link
                to="/industries"
                className={`text-[14px] tracking-[-0.14px] transition-colors ${location.pathname.startsWith('/industries')
                  ? 'text-[#faf9f6]'
                  : 'text-[#868684] hover:text-[#faf9f6]'
                  }`}
              >
                Industries
              </Link>

              {/* Company Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('company')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1.5 text-[14px] tracking-[-0.14px] transition-colors ${['/about', '/clients', '/case-studies', '/careers'].some((p) =>
                    location.pathname.startsWith(p)
                  )
                    ? 'text-[#faf9f6]'
                    : 'text-[#868684] hover:text-[#faf9f6]'
                    }`}
                  aria-expanded={activeDropdown === 'company'}
                >
                  <span>Company</span>
                  <ChevronDown className="h-3.5 w-3.5 text-[#868684] transition-transform duration-150" />
                </button>

                {activeDropdown === 'company' && (
                  <div className="absolute top-full left-0 w-56 bg-[#1e1e1d] rounded-[20px] border border-[#1e1e1d] p-3 z-50 shadow-none animate-in fade-in duration-100 mt-2">
                    <Link
                      to="/about"
                      className="block p-2 rounded-[10px] hover:bg-[#121212] text-[14px] text-[#b4b4b2] hover:text-[#faf9f6] transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/clients"
                      className="block p-2 rounded-[10px] hover:bg-[#121212] text-[14px] text-[#b4b4b2] hover:text-[#faf9f6] transition-colors"
                    >
                      Clients & Partners
                    </Link>
                    <Link
                      to="/case-studies"
                      className="block p-2 rounded-[10px] hover:bg-[#121212] text-[14px] text-[#b4b4b2] hover:text-[#faf9f6] transition-colors"
                    >
                      Case Studies
                    </Link>
                    <Link
                      to="/careers"
                      className="block p-2 rounded-[10px] hover:bg-[#121212] text-[14px] text-[#b4b4b2] hover:text-[#faf9f6] transition-colors"
                    >
                      Careers
                    </Link>
                  </div>
                )}
              </div>

              {/* Insights */}
              <Link
                to="/insights"
                className={`text-[14px] tracking-[-0.14px] transition-colors ${location.pathname.startsWith('/insights')
                  ? 'text-[#faf9f6]'
                  : 'text-[#868684] hover:text-[#faf9f6]'
                  }`}
              >
                Insights
              </Link>

              {/* Storefront Link */}
              <Link
                to="/shop"
                className={`text-[14px] tracking-[-0.14px] transition-colors flex items-center gap-1.5 ${location.pathname.startsWith('/shop')
                  ? 'text-[#faf9f6]'
                  : 'text-[#868684] hover:text-[#faf9f6]'
                  }`}
              >
                <span>Store</span>
              </Link>
            </nav>

            {/* Right Action Buttons (Ghost Button + Filled White Pill Button) */}
            <div className="flex items-center gap-3">
              {/* Store Cart Button */}
              <button
                onClick={toggleCart}
                className="relative p-2 rounded-[4px] text-[#868684] hover:text-[#faf9f6] transition-colors focus:outline-none"
                aria-label={`Shopping cart containing ${totalCartCount} items`}
              >
                <ShoppingBag className="h-4.5 w-4.5" />
                {totalCartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 min-w-4 px-1 bg-[#f0b66d] text-[#080808] text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalCartCount}
                  </span>
                )}
              </button>

              {/* Secondary Ghost Button: Admin Console */}
              <Link
                to="/admin"
                className="hidden xl:inline-flex items-center gap-1.5 text-[13px] font-normal px-3.5 py-1.5 rounded-[33px] text-[#b4b4b2] border border-[#333333] hover:border-[#b4b4b2] hover:text-[#faf9f6] transition-colors"
                title="Enter Store Administration Dashboard"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-[#f0b66d]" />
                <span>Admin</span>
              </Link>

              {/* Primary Filled Pill Button: Talk to an Expert (warp_design.md §142-146) */}
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center justify-center px-[22px] py-[9px] rounded-[33px] text-[14px] font-semibold bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] transition-colors duration-150 shadow-none tracking-[-0.14px]"
              >
                Talk to an Expert
              </Link>

              {/* Mobile menu toggle button */}
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="lg:hidden p-2 rounded-[4px] text-[#868684] hover:text-[#faf9f6] focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Warp Mobile Drawer Navigation ─── */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#000000] text-[#faf9f6] overflow-y-auto animate-in fade-in duration-150">
          <div className="flex items-center justify-between p-4 border-b border-[#1e1e1d]">
            <Link to="/" onClick={() => setMobileNavOpen(false)} className="flex items-center gap-2">
              <img src={brandAssets.logo} alt="Centrifuge Group" className="h-7 w-auto brightness-110" />
            </Link>
            <button
              onClick={() => setMobileNavOpen(false)}
              className="p-2 rounded-[4px] text-[#868684] hover:text-[#faf9f6]"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6 space-y-6 flex-1">
            <div className="space-y-1">
              <span className="text-[10px] font-normal uppercase tracking-[1px] text-[#868684]">
                Solutions
              </span>
              <div className="mt-2 space-y-1 pl-2">
                <Link
                  to="/solutions/optimax"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-[14px] text-[#b4b4b2] hover:text-[#faf9f6]"
                >
                  Optimax Connected Platform
                </Link>
                <Link
                  to="/solutions/logistics"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-[14px] text-[#b4b4b2] hover:text-[#faf9f6]"
                >
                  Logistics & Mobility Suite
                </Link>
                <Link
                  to="/solutions/healthcare"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-[14px] text-[#b4b4b2] hover:text-[#faf9f6]"
                >
                  Healthcare Technology (EMR / HRHIS)
                </Link>
                <Link
                  to="/solutions/enterprise"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-[14px] text-[#b4b4b2] hover:text-[#faf9f6]"
                >
                  Enterprise Platform Solutions
                </Link>
                <Link
                  to="/solutions/data-analytics"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-[14px] text-[#b4b4b2] hover:text-[#faf9f6]"
                >
                  Data Analytics & Spatial GIS
                </Link>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-normal uppercase tracking-[1px] text-[#868684]">
                Platform & Services
              </span>
              <div className="mt-2 space-y-1 pl-2">
                <Link
                  to="/projects"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-[14px] text-[#b4b4b2] hover:text-[#faf9f6]"
                >
                  What We've Built (Projects Showcase)
                </Link>
                <Link
                  to="/services"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-[14px] text-[#b4b4b2] hover:text-[#faf9f6]"
                >
                  All Engineering Services
                </Link>
                <Link
                  to="/industries"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-[14px] text-[#b4b4b2] hover:text-[#faf9f6]"
                >
                  Industries We Transform
                </Link>
                <Link
                  to="/shop"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-[14px] text-[#f0b66d]"
                >
                  Commercial Hardware Store
                </Link>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-normal uppercase tracking-[1px] text-[#868684]">
                Company
              </span>
              <div className="mt-2 space-y-1 pl-2">
                <Link
                  to="/about"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-[14px] text-[#b4b4b2] hover:text-[#faf9f6]"
                >
                  About Centrifuge
                </Link>
                <Link
                  to="/clients"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-[14px] text-[#b4b4b2] hover:text-[#faf9f6]"
                >
                  Clients & Federal Partners
                </Link>
                <Link
                  to="/case-studies"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-[14px] text-[#b4b4b2] hover:text-[#faf9f6]"
                >
                  Case Studies & Outcomes
                </Link>
                <Link
                  to="/insights"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-[14px] text-[#b4b4b2] hover:text-[#faf9f6]"
                >
                  Engineering Insights
                </Link>
                <Link
                  to="/careers"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-[14px] text-[#b4b4b2] hover:text-[#faf9f6]"
                >
                  Careers & Open Roles
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1e1e1d] space-y-3">
              <Link
                to="/contact"
                onClick={() => setMobileNavOpen(false)}
                className="w-full flex items-center justify-center py-2.5 px-4 rounded-[33px] bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] text-[14px] font-semibold transition-colors"
              >
                Talk to an Expert
              </Link>
              <Link
                to="/admin"
                onClick={() => setMobileNavOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-[33px] border border-[#333333] text-[#b4b4b2] hover:text-[#faf9f6] text-[13px] transition-colors"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-[#f0b66d]" />
                <span>Admin Dashboard</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Header
