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
  const toggleCart = useCartStore((state) => state.toggleCart)
  const totalCartCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
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

  const isActive = (basePath: string) => location.pathname.startsWith(basePath)

  return (
    <>
      {/* ─── Global Top Navigation Bar ─── */}
      <header
        className={`fixed inset-x-0 top-0 z-40 h-[72px] w-full border-b border-white/10 bg-[#0F2C59]/90 backdrop-blur-md transition-shadow duration-200 ${
          isScrolled ? "shadow-sm shadow-[#0F2C59]/10" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full gap-4">
            {/* Brand Wordmark & Enterprise Identity */}
            <div className="flex items-center gap-6 lg:gap-8 min-w-0">
              <Link
                to="/"
                className="flex items-center gap-3 focus:outline-none shrink-0 py-2"
                aria-label="Centrifuge Group Home"
              >
                <span className="h-[40px] w-auto flex items-center overflow-hidden shrink-0">
                  <img
                    src={brandAssets.logo}
                    alt=""
                    aria-hidden="true"
                    className="max-w-none h-[40px] w-auto object-contain object-left"
                  />
                </span>
              </Link>

              {/* Wireframe 4.1 Global Nav: Solutions, Products, Company, Resources */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-white/90">
                {/* 1. Solutions Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("solutions")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium rounded-[4px] transition-fin ${
                      location.pathname.startsWith("/solutions")
                        ? "text-white font-semibold bg-white/10"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    aria-expanded={activeDropdown === "solutions"}
                  >
                    <span>Solutions</span>
                    <ChevronDown className="h-3.5 w-3.5 text-white/70 transition-transform duration-150" />
                  </button>

                  {activeDropdown === "solutions" && (
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
                            Human Resource For Health Information System
                          </span>
                          <p className="text-[12px] text-[#64748B] line-clamp-1">
                            Coreless ledger, multi-rail settlement & visual
                            studio.
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
                            Connected corporate finance, tax, and multi-depot
                            inventory.
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
                            Logistic Management Software
                          </span>
                          <p className="text-[12px] text-[#64748B] line-clamp-1">
                            Route dispatch, IoT sensor telemetry, and fleet
                            auditing.
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
                  className={`px-3 py-2 text-[14px] font-medium rounded-[4px] transition-fin ${
                    location.pathname.startsWith("/shop")
                      ? "text-[#008DDA] font-semibold bg-[#008DDA]/5"
                      : "text-[#1A1A1A] hover:text-[#008DDA] hover:bg-[#F5F7FA]"
                  }`}
                >
                  Shop
                </Link>

                {/* 3. Company Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("company")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium rounded-[4px] transition-fin ${
                      ["/about", "/clients", "/case-studies", "/careers"].some(
                        (p) => location.pathname.startsWith(p),
                      )
                        ? "text-white font-semibold bg-white/10"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    aria-expanded={activeDropdown === "company"}
                  >
                    <span>Company</span>
                    <ChevronDown className="h-3.5 w-3.5 text-white/70 transition-transform duration-150" />
                  </button>

                  {activeDropdown === "company" && (
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
                  onMouseEnter={() => setActiveDropdown("resources")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium rounded-[4px] transition-fin ${
                      ["/insights", "/services"].some((p) =>
                        location.pathname.startsWith(p),
                      )
                        ? "text-white font-semibold bg-white/10"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    aria-expanded={activeDropdown === "resources"}
                  >
                    <span>Resources</span>
                    <ChevronDown className="h-3.5 w-3.5 text-white/70 transition-transform duration-150" />
                  </button>

                  {activeDropdown === "resources" && (
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
                className="relative p-2 rounded-[4px] text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label={`Shopping cart with ${totalCartCount} items`}
              >
                <ShoppingBag className="h-5 w-5" />
                {totalCartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 min-w-4 px-1 bg-[#008DDA] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalCartCount}
                  </span>
                )}
              </button>

              {/* Wireframe 4.1 Primary CTA: Contact Us Button */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-[4px] text-[14px] font-semibold bg-[#008DDA] text-white hover:bg-[#0077B6] focus:outline-none focus:ring-2 focus:ring-white/60 transition-colors duration-200"
              >
                <span>Contact Us</span>
              </Link>

              {/* Mobile Drawer Toggle */}
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="lg:hidden p-2 rounded-[4px] text-white/80 hover:text-white hover:bg-white/10"
                aria-label="Toggle Navigation Drawer"
              >
                {mobileNavOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div aria-hidden="true" className="h-[72px] shrink-0" />

      {/* ─── Responsive Slide-out Mobile Navigation Drawer ─── */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#0F2C59] text-white overflow-y-auto animate-in fade-in duration-150">
          <div className="flex items-center justify-between p-4 border-b border-white/10 h-[72px] bg-[#0F2C59]">
            <Link
              to="/"
              onClick={() => setMobileNavOpen(false)}
              className="flex items-center gap-2"
            >
              <img
                src={brandAssets.logo}
                alt="Centrifuge Group"
                className="h-8 w-auto"
              />
            </Link>
            <button
              onClick={() => setMobileNavOpen(false)}
              className="p-2 rounded-[4px] text-white/80 hover:text-white"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-4 space-y-4 flex-1">
            <div className="space-y-1">
              <div className="text-[11px] font-bold text-white/60 uppercase tracking-wider px-3 py-1">
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
                className="block px-3 py-2 rounded-[4px] text-[14px] font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                Optimax ERP Suite
              </Link>
              <Link
                to="/solutions/healthcare"
                onClick={() => setMobileNavOpen(false)}
                className="block px-3 py-2 rounded-[4px] text-[14px] font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                Healthcare Technology (HRHIS)
              </Link>
              <Link
                to="/solutions/logistics"
                onClick={() => setMobileNavOpen(false)}
                className="block px-3 py-2 rounded-[4px] text-[14px] font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                Logistics & Telematics
              </Link>
            </div>

            <div className="space-y-1 pt-2 border-t border-white/10">
              <div className="text-[11px] font-bold text-white/60 uppercase tracking-wider px-3 py-1">
                Explore
              </div>
              <Link
                to="/shop"
                onClick={() => setMobileNavOpen(false)}
                className="block px-3 py-2 rounded-[4px] text-[14px] font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                Products & Store
              </Link>
              <Link
                to="/services"
                onClick={() => setMobileNavOpen(false)}
                className="block px-3 py-2 rounded-[4px] text-[14px] font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                Services & Consulting
              </Link>
              <Link
                to="/projects"
                onClick={() => setMobileNavOpen(false)}
                className="block px-3 py-2 rounded-[4px] text-[14px] font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                Projects & Portfolio
              </Link>
              <Link
                to="/clients"
                onClick={() => setMobileNavOpen(false)}
                className="block px-3 py-2 rounded-[4px] text-[14px] font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                Clients & Partners
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileNavOpen(false)}
                className="block px-3 py-2 rounded-[4px] text-[14px] font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                About Centrifuge
              </Link>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2">
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
                className="w-full inline-flex items-center justify-center px-4 py-2 rounded-[4px] text-[13px] font-medium text-white bg-white/10 border border-white/10"
              >
                Admin Portal
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header
