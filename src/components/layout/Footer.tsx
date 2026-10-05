import React from 'react'
import { Link } from 'react-router-dom'
import { brandAssets } from '../../assets'
import { Mail, Phone, MapPin, ArrowUpRight, Briefcase, MessageCircle, Play, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react'

export const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0F2C59] text-[#A0AEC0] pt-16 pb-12 border-t border-[#1E3A8A]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-12 border-b border-[#1E3A8A]">
          {/* Brand & Corporate Presence Column */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={brandAssets.logo}
                alt="Centrifuge Group"
                className="w-[240px] sm:w-[280px] h-[52px] object-contain object-left brightness-125"
              />
            </Link>

            <p className="text-[13px] text-[#A0AEC0] leading-relaxed max-w-sm">
              High-performance digital banking architecture, modular coreless systems, healthcare workforce registers, and mission-critical enterprise engineering.
            </p>

            <div className="pt-2 text-[12px] text-[#A0AEC0] space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#008DDA] shrink-0 mt-0.5" />
                <span>Suite 203, 2nd Floor, Jinifa Plaza, Central Business District, Abuja, Nigeria.</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#008DDA] shrink-0" />
                <a href="mailto:enquiries@centrifugegroup.com" className="hover:text-white transition-colors">
                  enquiries@centrifugegroup.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#008DDA] shrink-0" />
                <a href="tel:+2348155026555" className="hover:text-white transition-colors">
                  +234 815 5026 555
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.linkedin.com/company/centrifuge-information-technology"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Centrifuge Group on LinkedIn"
                className="h-8 w-8 rounded-[4px] bg-[#1E3A8A]/50 border border-[#1E3A8A] flex items-center justify-center text-[#A0AEC0] hover:text-white hover:bg-[#008DDA] transition-colors"
              >
                <Briefcase className="h-4 w-4" />
              </a>
              {/* X / Twitter */}
              <a
                href="https://twitter.com/centrifugegroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Centrifuge Group on X"
                className="h-8 w-8 rounded-[4px] bg-[#1E3A8A]/50 border border-[#1E3A8A] flex items-center justify-center text-[#A0AEC0] hover:text-white hover:bg-[#008DDA] transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@centrifugegroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Centrifuge Group on YouTube"
                className="h-8 w-8 rounded-[4px] bg-[#1E3A8A]/50 border border-[#1E3A8A] flex items-center justify-center text-[#A0AEC0] hover:text-white hover:bg-[#008DDA] transition-colors"
              >
                <Play className="h-4 w-4" />
              </a>
              <a
                href="https://centrifugegroup.co"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Centrifuge Group Website"
                className="h-8 w-8 rounded-[4px] bg-[#1E3A8A]/50 border border-[#1E3A8A] flex items-center justify-center text-[#A0AEC0] hover:text-white hover:bg-[#008DDA] transition-colors"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="text-left">
            <h4 className="text-[12px] font-bold uppercase tracking-[1px] text-white mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <Link to="/solutions/banking-framework" className="hover:text-white transition-colors flex items-center gap-1.5 text-[#008DDA]">
                  <span>Banking Architecture</span>
                  <span className="text-[9px] bg-[#008DDA]/20 text-white px-1.5 py-0.5 rounded-[2px] font-mono">v3.8</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions/optimax" className="hover:text-white transition-colors">
                  Optimax ERP Suite
                </Link>
              </li>
              <li>
                <Link to="/solutions/healthcare" className="hover:text-white transition-colors">
                  Healthcare Systems (HRHIS)
                </Link>
              </li>
              <li>
                <Link to="/solutions/logistics" className="hover:text-white transition-colors">
                  Logistics & Telematics
                </Link>
              </li>
              <li>
                <Link to="/solutions/enterprise" className="hover:text-white transition-colors">
                  Enterprise Integration
                </Link>
              </li>
              <li>
                <Link to="/solutions/data-analytics" className="hover:text-white transition-colors">
                  Business Intelligence
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Store */}
          <div className="text-left">
            <h4 className="text-[12px] font-bold uppercase tracking-[1px] text-white mb-4">
              Products & Hardware
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">
                  All Hardware Catalog
                </Link>
              </li>
              <li>
                <Link to="/shop/titan-5kva-inverter" className="hover:text-white transition-colors">
                  Titan 5kVA Inverters
                </Link>
              </li>
              <li>
                <Link to="/shop/apex-online-ups-10kva" className="hover:text-white transition-colors">
                  Data Center UPS Systems
                </Link>
              </li>
              <li>
                <Link to="/shop/solartrac-mppt-controller-80a" className="hover:text-white transition-colors">
                  MPPT Controllers
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-white transition-colors">
                  Procurement Cart
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-white transition-colors flex items-center gap-1 text-[#008DDA]">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Admin Console</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Capabilities */}
          <div className="text-left">
            <h4 className="text-[12px] font-bold uppercase tracking-[1px] text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <Link to="/services/software-development" className="hover:text-white transition-colors">
                  Software Engineering
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-development" className="hover:text-white transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link to="/services/cloud" className="hover:text-white transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services/managed-it" className="hover:text-white transition-colors">
                  Managed IT Services
                </Link>
              </li>
              <li>
                <Link to="/services/training" className="hover:text-white transition-colors">
                  Capacity Building
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">
                  Project Showcase
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional Company */}
          <div className="text-left">
            <h4 className="text-[12px] font-bold uppercase tracking-[1px] text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Centrifuge
                </Link>
              </li>
              <li>
                <Link to="/clients" className="hover:text-white transition-colors">
                  Institutional Clients
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-white transition-colors">
                  Client Case Studies
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-white transition-colors">
                  Technical Insights
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Careers & Openings
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Advisory
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Institutional Trust & Compliance Banner */}
        <div className="py-6 border-b border-[#1E3A8A] flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-6 text-[#A0AEC0]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
              <span>ISO 27001 Certified Security Standards</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
              <span>ISO 20022 Financial Messaging Compliance</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
              <span>NDPR & GDPR Data Governance</span>
            </span>
          </div>

          <div className="text-[#A0AEC0]">
            Operational Latency: <span className="text-[#10B981] font-semibold">&lt; 3.2ms</span>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[#A0AEC0] gap-4">
          <p>© {new Date().getFullYear()} Centrifuge Group. Enterprise Financial Technology & Institutional Engineering. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Security Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
