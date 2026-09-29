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
  ExternalLink,
  ShieldCheck,
  Search,
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
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-[0_1px_2px_rgba(0,0,0,0.03)] py-3'
            : 'bg-white border-b border-[#E2E8F0] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#16C7D9]/50 rounded-[6px]"
              aria-label="Centrifuge Group Home"
            >
              <img
                src={brandAssets.logo}
                alt="Centrifuge Group"
                className="h-9 w-auto object-contain transition-transform group-hover:scale-102"
              />
              <span className="hidden sm:inline-block font-heading font-bold text-lg tracking-tight text-[#0B1F33]">
                Centrifuge<span className="text-[#16C7D9]">.</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-[6px] transition-colors ${
                    location.pathname.startsWith('/solutions')
                      ? 'text-[#16C7D9] font-semibold'
                      : 'text-[#1D242F] hover:text-[#0B1F33] hover:bg-[#F3F4F6]'
                  }`}
                  aria-expanded={activeDropdown === 'solutions'}
                >
                  <span>Solutions</span>
                  <ChevronDown className="h-3.5 w-3.5 text-[#64748B] transition-transform duration-200" />
                </button>

                {activeDropdown === 'solutions' && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-[10px] border border-[#E2E8F0] shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <Link
                      to="/solutions/optimax"
                      className="block p-2.5 rounded-[6px] hover:bg-[#F8FAFC] transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#111827] group-hover:text-[#16C7D9]">
                          Optimax ERP
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#16C7D9]/10 text-[#0E7490]">
                          Featured
                        </span>
                      </div>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        Connected enterprise operations & finance suite.
                      </p>
                    </Link>

                    <Link
                      to="/solutions/logistics"
                      className="block p-2.5 rounded-[6px] hover:bg-[#F8FAFC] transition-colors group"
                    >
                      <span className="text-sm font-semibold text-[#111827] group-hover:text-[#16C7D9]">
                        Logistics & Mobility
                      </span>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        Dispatch, IoT telematics, and route optimization.
                      </p>
                    </Link>

                    <Link
                      to="/solutions/healthcare"
                      className="block p-2.5 rounded-[6px] hover:bg-[#F8FAFC] transition-colors group"
                    >
                      <span className="text-sm font-semibold text-[#111827] group-hover:text-[#16C7D9]">
                        Healthcare Technology
                      </span>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        Clinical EMR, HRHIS, and health data platforms.
                      </p>
                    </Link>

                    <Link
                      to="/solutions/enterprise"
                      className="block p-2.5 rounded-[6px] hover:bg-[#F8FAFC] transition-colors group"
                    >
                      <span className="text-sm font-semibold text-[#111827] group-hover:text-[#16C7D9]">
                        Enterprise Systems
                      </span>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        Custom core business automation & digital platforms.
                      </p>
                    </Link>

                    <Link
                      to="/solutions/data-analytics"
                      className="block p-2.5 rounded-[6px] hover:bg-[#F8FAFC] transition-colors group"
                    >
                      <span className="text-sm font-semibold text-[#111827] group-hover:text-[#16C7D9]">
                        Data & Analytics
                      </span>
                      <p className="text-xs text-[#64748B] mt-0.5">
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
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-[6px] transition-colors ${
                    location.pathname.startsWith('/services')
                      ? 'text-[#16C7D9] font-semibold'
                      : 'text-[#1D242F] hover:text-[#0B1F33] hover:bg-[#F3F4F6]'
                  }`}
                  aria-expanded={activeDropdown === 'services'}
                >
                  <span>Services</span>
                  <ChevronDown className="h-3.5 w-3.5 text-[#64748B]" />
                </button>

                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-[10px] border border-[#E2E8F0] shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <Link
                      to="/services/software-development"
                      className="block p-2.5 rounded-[6px] hover:bg-[#F8FAFC] transition-colors group"
                    >
                      <span className="text-sm font-semibold text-[#111827] group-hover:text-[#16C7D9]">
                        Software Development
                      </span>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        Custom enterprise web applications & architectures.
                      </p>
                    </Link>
                    <Link
                      to="/services/mobile-development"
                      className="block p-2.5 rounded-[6px] hover:bg-[#F8FAFC] transition-colors group"
                    >
                      <span className="text-sm font-semibold text-[#111827] group-hover:text-[#16C7D9]">
                        Mobile Development
                      </span>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        Offline-first iOS & Android apps for field operations.
                      </p>
                    </Link>
                    <Link
                      to="/services/cloud"
                      className="block p-2.5 rounded-[6px] hover:bg-[#F8FAFC] transition-colors group"
                    >
                      <span className="text-sm font-semibold text-[#111827] group-hover:text-[#16C7D9]">
                        Cloud & Infrastructure
                      </span>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        High-availability hosting, Docker, and DevOps.
                      </p>
                    </Link>
                    <Link
                      to="/services/managed-it"
                      className="block p-2.5 rounded-[6px] hover:bg-[#F8FAFC] transition-colors group"
                    >
                      <span className="text-sm font-semibold text-[#111827] group-hover:text-[#16C7D9]">
                        Managed IT & Consulting
                      </span>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        Proactive maintenance, security, and digital strategy.
                      </p>
                    </Link>
                    <Link
                      to="/services/training"
                      className="block p-2.5 rounded-[6px] hover:bg-[#F8FAFC] transition-colors group"
                    >
                      <span className="text-sm font-semibold text-[#111827] group-hover:text-[#16C7D9]">
                        Training & Capacity Building
                      </span>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        Institutional technical training and user onboarding.
                      </p>
                    </Link>
                  </div>
                )}
              </div>

              {/* Projects link (per project_spec.md) */}
              <Link
                to="/projects"
                className={`px-3 py-2 text-sm font-medium rounded-[6px] transition-colors ${
                  location.pathname.startsWith('/projects')
                    ? 'text-[#16C7D9] font-semibold'
                    : 'text-[#1D242F] hover:text-[#0B1F33] hover:bg-[#F3F4F6]'
                }`}
              >
                Projects
              </Link>

              {/* Industries */}
              <Link
                to="/industries"
                className={`px-3 py-2 text-sm font-medium rounded-[6px] transition-colors ${
                  location.pathname.startsWith('/industries')
                    ? 'text-[#16C7D9] font-semibold'
                    : 'text-[#1D242F] hover:text-[#0B1F33] hover:bg-[#F3F4F6]'
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
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-[6px] transition-colors ${
                    ['/about', '/clients', '/case-studies'].some((p) =>
                      location.pathname.startsWith(p)
                    )
                      ? 'text-[#16C7D9] font-semibold'
                      : 'text-[#1D242F] hover:text-[#0B1F33] hover:bg-[#F3F4F6]'
                  }`}
                  aria-expanded={activeDropdown === 'company'}
                >
                  <span>Company</span>
                  <ChevronDown className="h-3.5 w-3.5 text-[#64748B]" />
                </button>

                {activeDropdown === 'company' && (
                  <div className="absolute top-full left-0 w-60 bg-white rounded-[10px] border border-[#E2E8F0] shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <Link
                      to="/about"
                      className="block p-2 rounded-[6px] hover:bg-[#F8FAFC] text-sm font-semibold text-[#111827] hover:text-[#16C7D9] transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/clients"
                      className="block p-2 rounded-[6px] hover:bg-[#F8FAFC] text-sm font-semibold text-[#111827] hover:text-[#16C7D9] transition-colors"
                    >
                      Clients & Partners
                    </Link>
                    <Link
                      to="/case-studies"
                      className="block p-2 rounded-[6px] hover:bg-[#F8FAFC] text-sm font-semibold text-[#111827] hover:text-[#16C7D9] transition-colors"
                    >
                      Case Studies
                    </Link>
                    <Link
                      to="/careers"
                      className="block p-2 rounded-[6px] hover:bg-[#F8FAFC] text-sm font-semibold text-[#111827] hover:text-[#16C7D9] transition-colors"
                    >
                      Careers
                    </Link>
                  </div>
                )}
              </div>

              {/* Insights */}
              <Link
                to="/insights"
                className={`px-3 py-2 text-sm font-medium rounded-[6px] transition-colors ${
                  location.pathname.startsWith('/insights')
                    ? 'text-[#16C7D9] font-semibold'
                    : 'text-[#1D242F] hover:text-[#0B1F33] hover:bg-[#F3F4F6]'
                }`}
              >
                Insights
              </Link>

              {/* Storefront Link */}
              <Link
                to="/shop"
                className={`px-3 py-2 text-sm font-medium rounded-[6px] transition-colors flex items-center gap-1.5 ${
                  location.pathname.startsWith('/shop')
                    ? 'text-[#16C7D9] font-semibold'
                    : 'text-[#1D242F] hover:text-[#0B1F33] hover:bg-[#F3F4F6]'
                }`}
              >
                <span>Store</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-[#0B1F33]/5 text-[#0B1F33]">
                  Hardware
                </span>
              </Link>
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Store Cart Button */}
              <button
                onClick={toggleCart}
                className="relative p-2 rounded-[8px] text-[#1D242F] hover:bg-[#F3F4F6] transition-colors focus:outline-none"
                aria-label={`Shopping cart containing ${totalCartCount} items`}
              >
                <ShoppingBag className="h-5 w-5" />
                {totalCartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4.5 min-w-4.5 px-1 bg-[#16C7D9] text-[#071521] text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalCartCount}
                  </span>
                )}
              </button>

              {/* Quick Admin Entry Link */}
              <Link
                to="/admin"
                className="hidden xl:inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-[6px] text-[#64748B] hover:text-[#0B1F33] hover:bg-[#F3F4F6] border border-transparent hover:border-[#E2E8F0] transition-all"
                title="Enter Store Administration Dashboard"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-[#16C7D9]" />
                <span>Admin</span>
              </Link>

              {/* Primary Contact CTA Button */}
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-[8px] text-sm font-semibold bg-[#0B1F33] text-white hover:bg-[#071521] transition-all shadow-xs"
              >
                Talk to an Expert
              </Link>

              {/* Mobile menu toggle button */}
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="lg:hidden p-2 rounded-[8px] text-[#111827] hover:bg-[#F3F4F6] focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white overflow-y-auto animate-in fade-in duration-150">
          <div className="flex items-center justify-between p-4 border-b border-[#E2E8F0]">
            <Link to="/" onClick={() => setMobileNavOpen(false)} className="flex items-center gap-2">
              <img src={brandAssets.logo} alt="Centrifuge Group" className="h-8 w-auto" />
              <span className="font-heading font-bold text-base text-[#0B1F33]">
                Centrifuge<span className="text-[#16C7D9]">.</span>
              </span>
            </Link>
            <button
              onClick={() => setMobileNavOpen(false)}
              className="p-2 rounded-[6px] text-[#64748B] hover:bg-[#F1F5F9]"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-5 space-y-6 flex-1">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                Solutions
              </span>
              <div className="mt-2 space-y-1 pl-2">
                <Link
                  to="/solutions/optimax"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#111827] hover:text-[#16C7D9]"
                >
                  Optimax Connected Platform
                </Link>
                <Link
                  to="/solutions/logistics"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#111827] hover:text-[#16C7D9]"
                >
                  Logistics & Mobility Suite
                </Link>
                <Link
                  to="/solutions/healthcare"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#111827] hover:text-[#16C7D9]"
                >
                  Healthcare Technology (EMR / HRHIS)
                </Link>
                <Link
                  to="/solutions/enterprise"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#111827] hover:text-[#16C7D9]"
                >
                  Enterprise Platform Solutions
                </Link>
                <Link
                  to="/solutions/data-analytics"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#111827] hover:text-[#16C7D9]"
                >
                  Data Analytics & Spatial GIS
                </Link>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                Platform & Services
              </span>
              <div className="mt-2 space-y-1 pl-2">
                <Link
                  to="/projects"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-semibold text-[#111827] hover:text-[#16C7D9]"
                >
                  What We've Built (Projects Showcase)
                </Link>
                <Link
                  to="/services"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#111827] hover:text-[#16C7D9]"
                >
                  All Engineering Services
                </Link>
                <Link
                  to="/industries"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#111827] hover:text-[#16C7D9]"
                >
                  Industries We Transform
                </Link>
                <Link
                  to="/shop"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-semibold text-[#16C7D9]"
                >
                  Commercial Hardware Store
                </Link>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                Company
              </span>
              <div className="mt-2 space-y-1 pl-2">
                <Link
                  to="/about"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#111827]"
                >
                  About Centrifuge
                </Link>
                <Link
                  to="/clients"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#111827]"
                >
                  Clients & Federal Partners
                </Link>
                <Link
                  to="/case-studies"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#111827]"
                >
                  Case Studies & Outcomes
                </Link>
                <Link
                  to="/insights"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#111827]"
                >
                  Engineering Insights
                </Link>
                <Link
                  to="/careers"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#111827]"
                >
                  Careers & Open Roles
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] space-y-3">
              <Link
                to="/contact"
                onClick={() => setMobileNavOpen(false)}
                className="w-full flex items-center justify-center py-2.5 px-4 rounded-[8px] bg-[#0B1F33] text-white text-sm font-semibold"
              >
                Talk to an Expert
              </Link>
              <Link
                to="/admin"
                onClick={() => setMobileNavOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-[8px] border border-[#E2E8F0] text-[#111827] text-xs font-semibold"
              >
                <ShieldCheck className="h-4 w-4 text-[#16C7D9]" />
                Admin Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
