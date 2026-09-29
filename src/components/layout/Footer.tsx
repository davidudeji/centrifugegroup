import React from 'react'
import { Link } from 'react-router-dom'
import { brandAssets } from '../../assets'
import { Mail, Phone, MapPin, Shield, ArrowUpRight, Briefcase, MessageCircle, Play, Globe } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#071521] text-white pt-16 pb-12 border-t border-[#172333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-12 border-b border-[#172333]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={brandAssets.logo}
                alt="Centrifuge Group"
                className="h-9 w-auto object-contain brightness-110"
              />
            </Link>

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              We design and deliver enterprise software, healthcare platforms, logistics systems, and digital solutions that solve complex operational problems.
            </p>

            <div className="pt-2 text-xs text-[#64748B] space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#16C7D9] shrink-0 mt-0.5" />
                <span>Plot 1083, Cadastral Zone B06, Mabushi District, Abuja, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#16C7D9] shrink-0" />
                <a href="mailto:info@centrifugegroup.co" className="hover:text-white transition-colors">
                  info@centrifugegroup.co
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#16C7D9] shrink-0" />
                <a href="tel:+2348030001234" className="hover:text-white transition-colors">
                  +234 (0) 803 000 1234
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.linkedin.com/company/centrifuge-information-technology"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Centrifuge Group on LinkedIn"
                className="h-8 w-8 rounded-[6px] bg-[#0B1F33] border border-[#1E3A5F] flex items-center justify-center text-[#64748B] hover:text-[#16C7D9] hover:border-[#16C7D9]/40 transition-colors"
              >
                <Briefcase className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://twitter.com/centrifugegroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Centrifuge Group on X (Twitter)"
                className="h-8 w-8 rounded-[6px] bg-[#0B1F33] border border-[#1E3A5F] flex items-center justify-center text-[#64748B] hover:text-[#16C7D9] hover:border-[#16C7D9]/40 transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://www.youtube.com/@centrifugegroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Centrifuge Group on YouTube"
                className="h-8 w-8 rounded-[6px] bg-[#0B1F33] border border-[#1E3A5F] flex items-center justify-center text-[#64748B] hover:text-[#16C7D9] hover:border-[#16C7D9]/40 transition-colors"
              >
                <Play className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://centrifugegroup.co"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Centrifuge Group Website"
                className="h-8 w-8 rounded-[6px] bg-[#0B1F33] border border-[#1E3A5F] flex items-center justify-center text-[#64748B] hover:text-[#16C7D9] hover:border-[#16C7D9]/40 transition-colors"
              >
                <Globe className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li>
                <Link to="/solutions/optimax" className="hover:text-[#16C7D9] transition-colors flex items-center gap-1">
                  <span>Optimax ERP</span>
                  <span className="text-[9px] bg-[#16C7D9]/20 text-[#67E8F9] px-1 py-0.2 rounded font-mono">v4</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions/logistics" className="hover:text-[#16C7D9] transition-colors">
                  Logistics & Fleet
                </Link>
              </li>
              <li>
                <Link to="/solutions/healthcare" className="hover:text-[#16C7D9] transition-colors">
                  Healthcare Platforms
                </Link>
              </li>
              <li>
                <Link to="/solutions/enterprise" className="hover:text-[#16C7D9] transition-colors">
                  Enterprise Software
                </Link>
              </li>
              <li>
                <Link to="/solutions/data-analytics" className="hover:text-[#16C7D9] transition-colors">
                  Data & GIS Analytics
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#16C7D9] transition-colors flex items-center gap-1 text-white font-medium">
                  <span>Projects Showcase</span>
                  <ArrowUpRight className="h-3 w-3 text-[#16C7D9]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li>
                <Link to="/services/software-development" className="hover:text-[#16C7D9] transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-development" className="hover:text-[#16C7D9] transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link to="/services/cloud" className="hover:text-[#16C7D9] transition-colors">
                  Cloud & Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services/managed-it" className="hover:text-[#16C7D9] transition-colors">
                  Managed IT Services
                </Link>
              </li>
              <li>
                <Link to="/services/consulting" className="hover:text-[#16C7D9] transition-colors">
                  Technology Consulting
                </Link>
              </li>
              <li>
                <Link to="/services/training" className="hover:text-[#16C7D9] transition-colors">
                  Institutional Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li>
                <Link to="/industries/healthcare" className="hover:text-[#16C7D9] transition-colors">
                  Healthcare & Medical
                </Link>
              </li>
              <li>
                <Link to="/industries/logistics" className="hover:text-[#16C7D9] transition-colors">
                  Logistics & Transport
                </Link>
              </li>
              <li>
                <Link to="/industries/government" className="hover:text-[#16C7D9] transition-colors">
                  Federal & Public Sector
                </Link>
              </li>
              <li>
                <Link to="/industries/enterprise" className="hover:text-[#16C7D9] transition-colors">
                  Large Enterprises
                </Link>
              </li>
              <li>
                <Link to="/industries/smes" className="hover:text-[#16C7D9] transition-colors">
                  Commercial SMEs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li>
                <Link to="/about" className="hover:text-[#16C7D9] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/clients" className="hover:text-[#16C7D9] transition-colors">
                  Verified Clients
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-[#16C7D9] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-[#16C7D9] transition-colors">
                  Engineering Insights
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#16C7D9] transition-colors flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="text-[9px] bg-[#16A34A]/20 text-[#4ADE80] px-1 py-0.2 rounded font-medium">Hiring</span>
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#16C7D9] transition-colors">
                  Hardware Store
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-[#16C7D9] transition-colors text-white font-medium flex items-center gap-1">
                  <Shield className="h-3 w-3 text-[#16C7D9]" />
                  <span>Admin Portal</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Centrifuge Information Technology Limited. All rights reserved.</span>
          </div>

          <div className="italic text-[#94A3B8] font-medium tracking-tight">
            "Technology that moves business forward."
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
