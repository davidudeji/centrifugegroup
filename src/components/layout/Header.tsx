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
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${isScrolled
          ? 'bg-[#071521]/95 backdrop-blur-md border-b border-[#1E3A5F] shadow-lg shadow-black/25 py-3'
          : 'bg-[#071521] border-b border-[#172333] py-4'
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
                className="h-9 w-auto object-contain brightness-110 transition-transform group-hover:scale-102"
              />
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
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-[6px] transition-colors group ${location.pathname.startsWith('/solutions')
                    ? 'text-[#16C7D9] font-semibold bg-[#16C7D9]/10'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                    }`}
                  aria-expanded={activeDropdown === 'solutions'}
                >
                  <span>Solutions</span>
                  <ChevronDown className="h-3.5 w-3.5 text-[#64748B] group-hover:text-white transition-transform duration-200" />
                </button>

                {activeDropdown === 'solutions' && (
                  <div className="absolute top-full left-0 w-72 bg-[#0B1F33] rounded-[10px] border border-[#1E3A5F] shadow-2xl shadow-black/50 p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <Link
                      to="/solutions/optimax"
                      className="block p-2.5 rounded-[6px] hover:bg-[#132A45] transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-white group-hover:text-[#16C7D9] transition-colors">
                          Optimax ERP
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#16C7D9]/20 text-[#67E8F9]">
                          Featured
                        </span>
                      </div>
                      <p className="text-xs text-[#94A3B8] mt-0.5">
                        Connected enterprise operations & finance suite.
                      </p>
                    </Link>

                    <Link
                      to="/solutions/logistics"
                      className="block p-2.5 rounded-[6px] hover:bg-[#132A45] transition-colors group"
                    >
                      <span className="text-sm font-semibold text-white group-hover:text-[#16C7D9] transition-colors">
                        Logistics & Mobility
                      </span>
                      <p className="text-xs text-[#94A3B8] mt-0.5">
                        Dispatch, IoT telematics, and route optimization.
                      </p>
                    </Link>

                    <Link
                      to="/solutions/healthcare"
                      className="block p-2.5 rounded-[6px] hover:bg-[#132A45] transition-colors group"
                    >
                      <span className="text-sm font-semibold text-white group-hover:text-[#16C7D9] transition-colors">
                        Healthcare Technology
                      </span>
                      <p className="text-xs text-[#94A3B8] mt-0.5">
                        Clinical EMR, HRHIS, and health data platforms.
                      </p>
                    </Link>

                    <Link
                      to="/solutions/enterprise"
                      className="block p-2.5 rounded-[6px] hover:bg-[#132A45] transition-colors group"
                    >
                      <span className="text-sm font-semibold text-white group-hover:text-[#16C7D9] transition-colors">
                        Enterprise Systems
                      </span>
                      <p className="text-xs text-[#94A3B8] mt-0.5">
                        Custom core business automation & digital platforms.
                      </p>
                    </Link>

                    <Link
                      to="/solutions/data-analytics"
                      className="block p-2.5 rounded-[6px] hover:bg-[#132A45] transition-colors group"
                    >
                      <span className="text-sm font-semibold text-white group-hover:text-[#16C7D9] transition-colors">
                        Data & Analytics
                      </span>
                      <p className="text-xs text-[#94A3B8] mt-0.5">
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
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-[6px] transition-colors group ${location.pathname.startsWith('/services')
                    ? 'text-[#16C7D9] font-semibold bg-[#16C7D9]/10'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                    }`}
                  aria-expanded={activeDropdown === 'services'}
                >
                  <span>Services</span>
                  <ChevronDown className="h-3.5 w-3.5 text-[#64748B] group-hover:text-white transition-transform duration-200" />
                </button>

                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 w-72 bg-[#0B1F33] rounded-[10px] border border-[#1E3A5F] shadow-2xl shadow-black/50 p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <Link
                      to="/services/software-development"
                      className="block p-2.5 rounded-[6px] hover:bg-[#132A45] transition-colors group"
                    >
                      <span className="text-sm font-semibold text-white group-hover:text-[#16C7D9] transition-colors">
                        Software Development
                      </span>
                      <p className="text-xs text-[#94A3B8] mt-0.5">
                        Custom enterprise web applications & architectures.
                      </p>
                    </Link>
                    <Link
                      to="/services/mobile-development"
                      className="block p-2.5 rounded-[6px] hover:bg-[#132A45] transition-colors group"
                    >
                      <span className="text-sm font-semibold text-white group-hover:text-[#16C7D9] transition-colors">
                        Mobile Development
                      </span>
                      <p className="text-xs text-[#94A3B8] mt-0.5">
                        Offline-first iOS & Android apps for field operations.
                      </p>
                    </Link>
                    <Link
                      to="/services/cloud"
                      className="block p-2.5 rounded-[6px] hover:bg-[#132A45] transition-colors group"
                    >
                      <span className="text-sm font-semibold text-white group-hover:text-[#16C7D9] transition-colors">
                        Cloud & Infrastructure
                      </span>
                      <p className="text-xs text-[#94A3B8] mt-0.5">
                        High-availability hosting, Docker, and DevOps.
                      </p>
                    </Link>
                    <Link
                      to="/services/managed-it"
                      className="block p-2.5 rounded-[6px] hover:bg-[#132A45] transition-colors group"
                    >
                      <span className="text-sm font-semibold text-white group-hover:text-[#16C7D9] transition-colors">
                        Managed IT & Consulting
                      </span>
                      <p className="text-xs text-[#94A3B8] mt-0.5">
                        Proactive maintenance, security, and digital strategy.
                      </p>
                    </Link>
                    <Link
                      to="/services/training"
                      className="block p-2.5 rounded-[6px] hover:bg-[#132A45] transition-colors group"
                    >
                      <span className="text-sm font-semibold text-white group-hover:text-[#16C7D9] transition-colors">
                        Training & Capacity Building
                      </span>
                      <p className="text-xs text-[#94A3B8] mt-0.5">
                        Institutional technical training and user onboarding.
                      </p>
                    </Link>
                  </div>
                )}
              </div>

              {/* Projects link */}
              <Link
                to="/projects"
                className={`px-3 py-2 text-sm font-medium rounded-[6px] transition-colors ${location.pathname.startsWith('/projects')
                  ? 'text-[#16C7D9] font-semibold bg-[#16C7D9]/10'
                  : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                  }`}
              >
                Projects
              </Link>

              {/* Industries */}
              <Link
                to="/industries"
                className={`px-3 py-2 text-sm font-medium rounded-[6px] transition-colors ${location.pathname.startsWith('/industries')
                  ? 'text-[#16C7D9] font-semibold bg-[#16C7D9]/10'
                  : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
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
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-[6px] transition-colors group ${['/about', '/clients', '/case-studies'].some((p) =>
                    location.pathname.startsWith(p)
                  )
                    ? 'text-[#16C7D9] font-semibold bg-[#16C7D9]/10'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                    }`}
                  aria-expanded={activeDropdown === 'company'}
                >
                  <span>Company</span>
                  <ChevronDown className="h-3.5 w-3.5 text-[#64748B] group-hover:text-white transition-transform duration-200" />
                </button>

                {activeDropdown === 'company' && (
                  <div className="absolute top-full left-0 w-60 bg-[#0B1F33] rounded-[10px] border border-[#1E3A5F] shadow-2xl shadow-black/50 p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <Link
                      to="/about"
                      className="block p-2 rounded-[6px] hover:bg-[#132A45] text-sm font-semibold text-white hover:text-[#16C7D9] transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/clients"
                      className="block p-2 rounded-[6px] hover:bg-[#132A45] text-sm font-semibold text-white hover:text-[#16C7D9] transition-colors"
                    >
                      Clients & Partners
                    </Link>
                    <Link
                      to="/case-studies"
                      className="block p-2 rounded-[6px] hover:bg-[#132A45] text-sm font-semibold text-white hover:text-[#16C7D9] transition-colors"
                    >
                      Case Studies
                    </Link>
                    <Link
                      to="/careers"
                      className="block p-2 rounded-[6px] hover:bg-[#132A45] text-sm font-semibold text-white hover:text-[#16C7D9] transition-colors"
                    >
                      Careers
                    </Link>
                  </div>
                )}
              </div>

              {/* Insights */}
              <Link
                to="/insights"
                className={`px-3 py-2 text-sm font-medium rounded-[6px] transition-colors ${location.pathname.startsWith('/insights')
                  ? 'text-[#16C7D9] font-semibold bg-[#16C7D9]/10'
                  : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                  }`}
              >
                Insights
              </Link>

              {/* Storefront Link */}
              <Link
                to="/shop"
                className={`px-3 py-2 text-sm font-medium rounded-[6px] transition-colors flex items-center gap-1.5 ${location.pathname.startsWith('/shop')
                  ? 'text-[#16C7D9] font-semibold bg-[#16C7D9]/10'
                  : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                  }`}
              >
                <span>Store</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#16C7D9]/20 text-[#67E8F9]">
                  Hardware
                </span>
              </Link>
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Store Cart Button */}
              <button
                onClick={toggleCart}
                className="relative p-2 rounded-[8px] text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
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
                className="hidden xl:inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-[6px] text-[#94A3B8] hover:text-white hover:bg-white/5 border border-[#1E3A5F]/70 hover:border-[#16C7D9]/40 transition-all"
                title="Enter Store Administration Dashboard"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-[#16C7D9]" />
                <span>Admin</span>
              </Link>

              {/* Primary Contact CTA Button */}
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-[8px] text-sm font-semibold bg-[#16C7D9] text-[#071521] hover:bg-[#22D3EE] transition-all shadow-sm shadow-[#16C7D9]/20"
              >
                Talk to an Expert
              </Link>

              {/* Mobile menu toggle button */}
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="lg:hidden p-2 rounded-[8px] text-white hover:bg-white/10 focus:outline-none"
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
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#071521] text-white overflow-y-auto animate-in fade-in duration-150">
          <div className="flex items-center justify-between p-4 border-b border-[#172333]">
            <Link to="/" onClick={() => setMobileNavOpen(false)} className="flex items-center gap-2">
              <img src={brandAssets.logo} alt="Centrifuge Group" className="h-8 w-auto brightness-110" />
            </Link>
            <button
              onClick={() => setMobileNavOpen(false)}
              className="p-2 rounded-[6px] text-[#94A3B8] hover:text-white hover:bg-white/10"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-5 space-y-6 flex-1">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Solutions
              </span>
              <div className="mt-2 space-y-1 pl-2">
                <Link
                  to="/solutions/optimax"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#E2E8F0] hover:text-[#16C7D9]"
                >
                  Optimax Connected Platform
                </Link>
                <Link
                  to="/solutions/logistics"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#E2E8F0] hover:text-[#16C7D9]"
                >
                  Logistics & Mobility Suite
                </Link>
                <Link
                  to="/solutions/healthcare"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#E2E8F0] hover:text-[#16C7D9]"
                >
                  Healthcare Technology (EMR / HRHIS)
                </Link>
                <Link
                  to="/solutions/enterprise"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#E2E8F0] hover:text-[#16C7D9]"
                >
                  Enterprise Platform Solutions
                </Link>
                <Link
                  to="/solutions/data-analytics"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#E2E8F0] hover:text-[#16C7D9]"
                >
                  Data Analytics & Spatial GIS
                </Link>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Platform & Services
              </span>
              <div className="mt-2 space-y-1 pl-2">
                <Link
                  to="/projects"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-semibold text-[#E2E8F0] hover:text-[#16C7D9]"
                >
                  What We've Built (Projects Showcase)
                </Link>
                <Link
                  to="/services"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#E2E8F0] hover:text-[#16C7D9]"
                >
                  All Engineering Services
                </Link>
                <Link
                  to="/industries"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#E2E8F0] hover:text-[#16C7D9]"
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
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Company
              </span>
              <div className="mt-2 space-y-1 pl-2">
                <Link
                  to="/about"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#E2E8F0] hover:text-[#16C7D9]"
                >
                  About Centrifuge
                </Link>
                <Link
                  to="/clients"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#E2E8F0] hover:text-[#16C7D9]"
                >
                  Clients & Federal Partners
                </Link>
                <Link
                  to="/case-studies"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#E2E8F0] hover:text-[#16C7D9]"
                >
                  Case Studies & Outcomes
                </Link>
                <Link
                  to="/insights"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#E2E8F0] hover:text-[#16C7D9]"
                >
                  Engineering Insights
                </Link>
                <Link
                  to="/careers"
                  onClick={() => setMobileNavOpen(false)}
                  className="block py-1.5 text-sm font-medium text-[#E2E8F0] hover:text-[#16C7D9]"
                >
                  Careers & Open Roles
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-[#172333] space-y-3">
              <Link
                to="/contact"
                onClick={() => setMobileNavOpen(false)}
                className="w-full flex items-center justify-center py-2.5 px-4 rounded-[8px] bg-[#16C7D9] text-[#071521] hover:bg-[#22D3EE] text-sm font-semibold"
              >
                Talk to an Expert
              </Link>
              <Link
                to="/admin"
                onClick={() => setMobileNavOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-[8px] border border-[#1E3A5F] text-[#94A3B8] hover:text-white hover:bg-[#0B1F33] text-xs font-semibold"
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
