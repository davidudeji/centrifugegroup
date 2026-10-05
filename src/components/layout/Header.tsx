import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { brandAssets } from '../../assets'
import { useUIStore } from '../../stores/uiStore'
import {
  ChevronDown,
  Menu,
  X,
  ShoppingBag,
  Cpu,
  Layers,
  Activity,
  Truck,
  Building2,
  FileCode,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { mobileNavOpen, setMobileNavOpen } = useUIStore()
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

  const isActive = (basePath: string) => location.pathname.startsWith(basePath)

  return (
    <>
      {/* ─── Enterprise Status & News Bar (UI/UX Spec §1.1 & §3.1) ─── */}
      <aside
        aria-label="Institutional Announcement"
        className="w-full h-9 bg-[#0F2C59] text-white flex items-center justify-between px-4 sm:px-8 text-[12px] font-medium tracking-normal border-b border-[#1E3A8A]"
      >
        <div className="flex items-center gap-2 max-w-[1440px] mx-auto w-full justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[#A0AEC0] hidden sm:inline">Platform Status:</span>
            <span className="text-white font-semibold">ISO 20022 Multi-Rail Core Live</span>
            <span className="text-[#A0AEC0] hidden md:inline">· 99.999% SLA Uptime</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link
              to="/solutions/banking-framework"
              className="text-[#008DDA] hover:text-white transition-colors inline-flex items-center gap-1 font-semibold"
            >
              <span>Explore Visual Studio</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
            <span className="text-[#1E3A8A]">|</span>
            <Link
              to="/admin"
              className="text-[#A0AEC0] hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-[#008DDA]" />
              <span>Admin Console</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* ─── Global Top Navigation Bar (UI/UX Spec §3.1: 72px Fixed Height, #FFFFFF, 1px #E2E8F0 Border) ─── */}
      <header
        className={`sticky top-0 z-40 w-full h-[72px] bg-[#FFFFFF] border-b border-[#E2E8F0] transition-shadow duration-200 ${isScrolled ? 'shadow-xs' : ''
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Brand Wordmark & Enterprise Identity */}
            <div className="flex items-center gap-8">
              <Link
                to="/"
                className="flex items-center gap-3 focus:outline-none shrink-0"
                aria-label="Centrifuge Group Home"
              >
                <img
                  src={brandAssets.logo}
                  alt="Centrifuge Group"
                  className="w-[200px] sm:w-[240px] h-[46px] object-contain object-left"
                />
              </Link>

              {/* Wireframe 4.1 Global Nav: Solutions, Products, Company, Resources */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                {/* 1. Solutions Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('solutions')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium rounded-[4px] transition-fin ${location.pathname.startsWith('/solutions')
                        ? 'text-[#008DDA] font-semibold bg-[#008DDA]/5'
                        : 'text-[#1A1A1A] hover:text-[#008DDA] hover:bg-[#F5F7FA]'
                      }`}
                    aria-expanded={activeDropdown === 'solutions'}
                  >
                    <span>Solutions</span>
                    <ChevronDown className="h-3.5 w-3.5 text-[#64748B] transition-transform duration-150" />
                  </button>

                  {activeDropdown === 'solutions' && (
                    <div className="absolute top-full left-0 w-80 bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] p-3 z-50 shadow-lg mt-1 animate-in fade-in duration-150">
                      <div className="text-[11px] font-semibold text-[#64748B] uppercase px-2.5 py-1 tracking-wider">
                        Financial & Enterprise Tech
                      </div>
                      <Link
                        to="/solutions/banking-framework"
                        className="flex items-start gap-3 p-2.5 rounded-[4px] hover:bg-[#F5F7FA] transition-colors group"
                      >
                        <div className="p-1.5 rounded-[4px] bg-[#008DDA]/10 text-[#008DDA] shrink-0 mt-0.5">
                          <Cpu className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="text-[14px] font-semibold text-[#1A1A1A] group-hover:text-[#008DDA] transition-colors block">
                            Banking Architecture
                          </span>
                          <p className="text-[12px] text-[#64748B] line-clamp-1">
                            Coreless ledger, multi-rail settlement & visual studio.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/solutions/optimax"
                        className="flex items-start gap-3 p-2.5 rounded-[4px] hover:bg-[#F5F7FA] transition-colors group"
                      >
                        <div className="p-1.5 rounded-[4px] bg-[#0F2C59]/10 text-[#0F2C59] shrink-0 mt-0.5">
                          <Layers className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="text-[14px] font-semibold text-[#1A1A1A] group-hover:text-[#008DDA] transition-colors block">
                            Optimax ERP Suite
                          </span>
                          <p className="text-[12px] text-[#64748B] line-clamp-1">
                            Connected corporate finance, tax, and multi-depot inventory.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/solutions/healthcare"
                        className="flex items-start gap-3 p-2.5 rounded-[4px] hover:bg-[#F5F7FA] transition-colors group"
                      >
                        <div className="p-1.5 rounded-[4px] bg-[#10B981]/10 text-[#10B981] shrink-0 mt-0.5">
                          <Activity className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="text-[14px] font-semibold text-[#1A1A1A] group-hover:text-[#008DDA] transition-colors block">
                            Healthcare Technologies
                          </span>
                          <p className="text-[12px] text-[#64748B] line-clamp-1">
                            National HRHIS, clinical EMR, and medical registers.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/solutions/logistics"
                        className="flex items-start gap-3 p-2.5 rounded-[4px] hover:bg-[#F5F7FA] transition-colors group"
                      >
                        <div className="p-1.5 rounded-[4px] bg-[#008DDA]/10 text-[#008DDA] shrink-0 mt-0.5">
                          <Truck className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="text-[14px] font-semibold text-[#1A1A1A] group-hover:text-[#008DDA] transition-colors block">
                            Logistics & Telematics
                          </span>
                          <p className="text-[12px] text-[#64748B] line-clamp-1">
                            Route dispatch, IoT sensor telemetry, and fleet auditing.
                          </p>
                        </div>
                      </Link>

                      <div className="mt-2 pt-2 border-t border-[#E2E8F0] px-2 flex justify-between items-center">
                        <Link
                          to="/solutions"
                          className="text-[12px] font-semibold text-[#008DDA] hover:underline flex items-center gap-1"
                        >
                          <span>All Solutions</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Products / Store */}
                <Link
                  to="/shop"
                  className={`px-3 py-2 text-[14px] font-medium rounded-[4px] transition-fin ${location.pathname.startsWith('/shop')
                      ? 'text-[#008DDA] font-semibold bg-[#008DDA]/5'
                      : 'text-[#1A1A1A] hover:text-[#008DDA] hover:bg-[#F5F7FA]'
                    }`}
                >
                  Products & Hardware
                </Link>

                {/* 3. Company Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('company')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium rounded-[4px] transition-fin ${['/about', '/clients', '/case-studies', '/careers'].some((p) =>
                      location.pathname.startsWith(p)
                    )
                        ? 'text-[#008DDA] font-semibold bg-[#008DDA]/5'
                        : 'text-[#1A1A1A] hover:text-[#008DDA] hover:bg-[#F5F7FA]'
                      }`}
                    aria-expanded={activeDropdown === 'company'}
                  >
                    <span>Company</span>
                    <ChevronDown className="h-3.5 w-3.5 text-[#64748B] transition-transform duration-150" />
                  </button>

                  {activeDropdown === 'company' && (
                    <div className="absolute top-full left-0 w-64 bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] p-2 z-50 shadow-lg mt-1 animate-in fade-in duration-150">
                      <Link
                        to="/about"
                        className="block p-2 rounded-[4px] hover:bg-[#F5F7FA] text-[14px] text-[#1A1A1A] hover:text-[#008DDA] transition-colors"
                      >
                        About Us
                      </Link>
                      <Link
                        to="/clients"
                        className="block p-2 rounded-[4px] hover:bg-[#F5F7FA] text-[14px] text-[#1A1A1A] hover:text-[#008DDA] transition-colors"
                      >
                        Institutional Clients
                      </Link>
                      <Link
                        to="/case-studies"
                        className="block p-2 rounded-[4px] hover:bg-[#F5F7FA] text-[14px] text-[#1A1A1A] hover:text-[#008DDA] transition-colors"
                      >
                        Case Studies
                      </Link>
                      <Link
                        to="/projects"
                        className="block p-2 rounded-[4px] hover:bg-[#F5F7FA] text-[14px] text-[#1A1A1A] hover:text-[#008DDA] transition-colors"
                      >
                        Engineering Portfolio
                      </Link>
                      <Link
                        to="/careers"
                        className="block p-2 rounded-[4px] hover:bg-[#F5F7FA] text-[14px] text-[#1A1A1A] hover:text-[#008DDA] transition-colors"
                      >
                        Careers & Culture
                      </Link>
                    </div>
                  )}
                </div>

                {/* 4. Resources Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('resources')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium rounded-[4px] transition-fin ${['/insights', '/services'].some((p) => location.pathname.startsWith(p))
                        ? 'text-[#008DDA] font-semibold bg-[#008DDA]/5'
                        : 'text-[#1A1A1A] hover:text-[#008DDA] hover:bg-[#F5F7FA]'
                      }`}
                    aria-expanded={activeDropdown === 'resources'}
                  >
                    <span>Resources</span>
                    <ChevronDown className="h-3.5 w-3.5 text-[#64748B] transition-transform duration-150" />
                  </button>

                  {activeDropdown === 'resources' && (
                    <div className="absolute top-full left-0 w-64 bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] p-2 z-50 shadow-lg mt-1 animate-in fade-in duration-150">
                      <Link
                        to="/services"
                        className="block p-2 rounded-[4px] hover:bg-[#F5F7FA] text-[14px] text-[#1A1A1A] hover:text-[#008DDA] transition-colors"
                      >
                        Consulting & Services
                      </Link>
                      <Link
                        to="/insights"
                        className="block p-2 rounded-[4px] hover:bg-[#F5F7FA] text-[14px] text-[#1A1A1A] hover:text-[#008DDA] transition-colors"
                      >
                        Whitepapers & Insights
                      </Link>
                      <Link
                        to="/industries"
                        className="block p-2 rounded-[4px] hover:bg-[#F5F7FA] text-[14px] text-[#1A1A1A] hover:text-[#008DDA] transition-colors"
                      >
                        Industry Sectors
                      </Link>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* Right Action Controls: Cart, Studio Quick-Launch, and Contact Us */}
            <div className="flex items-center gap-3">
              {/* Cart Drawer Trigger */}
              <button
                onClick={toggleCart}
                className="relative p-2 rounded-[4px] text-[#64748B] hover:text-[#0F2C59] hover:bg-[#F1F5F9] transition-colors"
                aria-label={`Shopping cart with ${totalCartCount} items`}
              >
                <ShoppingBag className="h-5 w-5" />
                {totalCartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 min-w-4 px-1 bg-[#008DDA] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalCartCount}
                  </span>
                )}
              </button>

              {/* Template B Quick Access Pill Button */}
              <Link
                to="/solutions/banking-framework"
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-[4px] text-[#0F2C59] bg-[#F1F5F9] hover:bg-[#E2E8F0] border border-[#E2E8F0] transition-colors"
              >
                <Cpu className="h-3.5 w-3.5 text-[#008DDA]" />
                <span>Banking Studio</span>
              </Link>

              {/* Wireframe 4.1 Primary CTA: Contact Us Button */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-[4px] text-[14px] font-semibold bg-[#008DDA] text-white hover:bg-[#0077B6] focus:outline-none focus:ring-2 focus:ring-[#0F2C59] transition-colors duration-200"
              >
                <span>Contact Us</span>
              </Link>

              {/* Mobile Drawer Toggle */}
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="lg:hidden p-2 rounded-[4px] text-[#64748B] hover:text-[#0F2C59] hover:bg-[#F1F5F9]"
                aria-label="Toggle Navigation Drawer"
              >
                {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ─── Responsive Slide-out Mobile Navigation Drawer ─── */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#FFFFFF] text-[#1A1A1A] overflow-y-auto animate-in fade-in duration-150">
          <div className="flex items-center justify-between p-4 border-b border-[#E2E8F0] h-[72px]">
            <Link to="/" onClick={() => setMobileNavOpen(false)} className="flex items-center gap-2">
              <img src={brandAssets.logo} alt="Centrifuge Group" className="h-8 w-auto" />
            </Link>
            <button
              onClick={() => setMobileNavOpen(false)}
              className="p-2 rounded-[4px] text-[#64748B] hover:text-[#1A1A1A]"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-4 space-y-4 flex-1">
            <div className="space-y-1">
              <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider px-3 py-1">
                Platform Architecture
              </div>
              <Link
                to="/solutions/banking-framework"
                onClick={() => setMobileNavOpen(false)}
                className="block px-3 py-2 rounded-[4px] text-[14px] font-semibold text-[#008DDA] bg-[#008DDA]/10"
              >
                Banking Framework & Visual Studio (Template B)
              </Link>
              <Link
                to="/solutions/optimax"
                onClick={() => setMobileNavOpen(false)}
                className="block px-3 py-2 rounded-[4px] text-[14px] font-medium text-[#1A1A1A] hover:bg-[#F5F7FA]"
              >
                Optimax ERP Suite
              </Link>
              <Link
                to="/solutions/healthcare"
                onClick={() => setMobileNavOpen(false)}
                className="block px-3 py-2 rounded-[4px] text-[14px] font-medium text-[#1A1A1A] hover:bg-[#F5F7FA]"
              >
                Healthcare Technology (HRHIS)
              </Link>
              <Link
                to="/solutions/logistics"
                onClick={() => setMobileNavOpen(false)}
                className="block px-3 py-2 rounded-[4px] text-[14px] font-medium text-[#1A1A1A] hover:bg-[#F5F7FA]"
              >
                Logistics & Telematics
              </Link>
            </div>

            <div className="space-y-1 pt-2 border-t border-[#E2E8F0]">
              <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider px-3 py-1">
                Explore
              </div>
              <Link
                to="/shop"
                onClick={() => setMobileNavOpen(false)}
                className="block px-3 py-2 rounded-[4px] text-[14px] font-medium text-[#1A1A1A] hover:bg-[#F5F7FA]"
              >
                Products & Store
              </Link>
              <Link
                to="/services"
                onClick={() => setMobileNavOpen(false)}
                className="block px-3 py-2 rounded-[4px] text-[14px] font-medium text-[#1A1A1A] hover:bg-[#F5F7FA]"
              >
                Services & Consulting
              </Link>
              <Link
                to="/projects"
                onClick={() => setMobileNavOpen(false)}
                className="block px-3 py-2 rounded-[4px] text-[14px] font-medium text-[#1A1A1A] hover:bg-[#F5F7FA]"
              >
                Projects & Portfolio
              </Link>
              <Link
                to="/clients"
                onClick={() => setMobileNavOpen(false)}
                className="block px-3 py-2 rounded-[4px] text-[14px] font-medium text-[#1A1A1A] hover:bg-[#F5F7FA]"
              >
                Clients & Partners
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileNavOpen(false)}
                className="block px-3 py-2 rounded-[4px] text-[14px] font-medium text-[#1A1A1A] hover:bg-[#F5F7FA]"
              >
                About Centrifuge
              </Link>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] space-y-2">
              <Link
                to="/contact"
                onClick={() => setMobileNavOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-[4px] text-[14px] font-semibold bg-[#008DDA] text-white"
              >
                Contact Us
              </Link>
              <Link
                to="/admin"
                onClick={() => setMobileNavOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2 rounded-[4px] text-[13px] font-medium text-[#0F2C59] bg-[#F1F5F9] border border-[#E2E8F0]"
              >
                Admin Portal
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
