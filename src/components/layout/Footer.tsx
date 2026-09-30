import React from 'react'
import { Link } from 'react-router-dom'
import { brandAssets } from '../../assets'
import { Mail, Phone, MapPin, Shield, ArrowUpRight, Briefcase, MessageCircle, Play, Globe } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000] text-[#faf9f6] pt-16 pb-10 border-t border-[#1e1e1d]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-12 border-b border-[#1e1e1d]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={brandAssets.logo}
                alt="Centrifuge Group"
                className="w-[280px] sm:w-[320px] h-[56px] sm:h-[68px] object-contain object-left brightness-110"
              />
            </Link>

            <p className="text-[13px] text-[#868684] leading-relaxed max-w-sm tracking-[-0.14px]">
              We design and deliver enterprise software, healthcare platforms, logistics systems, and digital solutions that solve complex operational problems.
            </p>

            <div className="pt-2 text-[12px] text-[#666469] space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#f0b66d] shrink-0 mt-0.5" />
                <span>Suite 203, 2nd Floor, Jinifa Plaza, Plot 1014, Samuel Adesoji Ademulegun Street, Central Business District, Federal Capital Territory- Abuja, Nigeria.</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#f0b66d] shrink-0" />
                <a href="mailto:info@centrifugegroup.co" className="hover:text-[#faf9f6] transition-colors">
                  enquiries@centrifugegroup.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[#f0b66d] shrink-0" />
                <a href="tel:+2348030001234" className="hover:text-[#faf9f6] transition-colors">
                  +234 815 5026 555
                </a>
              </div>
            </div>

            {/* Social Links (monochrome white at 60% opacity with 4px radius per warp_design.md) */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.linkedin.com/company/centrifuge-information-technology"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Centrifuge Group on LinkedIn"
                className="h-7 w-7 rounded-[4px] bg-[#121212] border border-[#1e1e1d] flex items-center justify-center text-white/60 hover:text-white hover:border-[#333333] transition-colors"
              >
                <Briefcase className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://twitter.com/centrifugegroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Centrifuge Group on X"
                className="h-7 w-7 rounded-[4px] bg-[#121212] border border-[#1e1e1d] flex items-center justify-center text-white/60 hover:text-white hover:border-[#333333] transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://www.youtube.com/@centrifugegroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Centrifuge Group on YouTube"
                className="h-7 w-7 rounded-[4px] bg-[#121212] border border-[#1e1e1d] flex items-center justify-center text-white/60 hover:text-white hover:border-[#333333] transition-colors"
              >
                <Play className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://centrifugegroup.co"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Centrifuge Group Website"
                className="h-7 w-7 rounded-[4px] bg-[#121212] border border-[#1e1e1d] flex items-center justify-center text-white/60 hover:text-white hover:border-[#333333] transition-colors"
              >
                <Globe className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[1px] text-[#faf9f6] mb-4">
              Solutions
            </h4>
            <ul className="space-y-2 text-[12px] text-[#868684]">
              <li>
                <Link to="/solutions/optimax" className="hover:text-[#faf9f6] transition-colors flex items-center gap-1.5">
                  <span>Optimax ERP</span>
                  <span className="text-[9px] bg-[#1e1e1d] text-[#f0b66d] border border-[#333333] px-1 py-0.2 rounded font-mono">v4</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions/logistics" className="hover:text-[#faf9f6] transition-colors">
                  Logistics & Fleet
                </Link>
              </li>
              <li>
                <Link to="/solutions/healthcare" className="hover:text-[#faf9f6] transition-colors">
                  Healthcare Platforms
                </Link>
              </li>
              <li>
                <Link to="/solutions/enterprise" className="hover:text-[#faf9f6] transition-colors">
                  Enterprise Software
                </Link>
              </li>
              <li>
                <Link to="/solutions/data-analytics" className="hover:text-[#faf9f6] transition-colors">
                  Data & GIS Analytics
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#faf9f6] transition-colors flex items-center gap-1 text-[#faf9f6]">
                  <span>Projects Showcase</span>
                  <ArrowUpRight className="h-3 w-3 text-[#f0b66d]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[1px] text-[#faf9f6] mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-[12px] text-[#868684]">
              <li>
                <Link to="/services/software-development" className="hover:text-[#faf9f6] transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-development" className="hover:text-[#faf9f6] transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link to="/services/cloud" className="hover:text-[#faf9f6] transition-colors">
                  Cloud & Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services/managed-it" className="hover:text-[#faf9f6] transition-colors">
                  Managed IT Services
                </Link>
              </li>
              <li>
                <Link to="/services/consulting" className="hover:text-[#faf9f6] transition-colors">
                  Technology Consulting
                </Link>
              </li>
              <li>
                <Link to="/services/training" className="hover:text-[#faf9f6] transition-colors">
                  Institutional Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[1px] text-[#faf9f6] mb-4">
              Industries
            </h4>
            <ul className="space-y-2 text-[12px] text-[#868684]">
              <li>
                <Link to="/industries/healthcare" className="hover:text-[#faf9f6] transition-colors">
                  Healthcare & Medical
                </Link>
              </li>
              <li>
                <Link to="/industries/logistics" className="hover:text-[#faf9f6] transition-colors">
                  Logistics & Transport
                </Link>
              </li>
              <li>
                <Link to="/industries/government" className="hover:text-[#faf9f6] transition-colors">
                  Federal & Public Sector
                </Link>
              </li>
              <li>
                <Link to="/industries/enterprise" className="hover:text-[#faf9f6] transition-colors">
                  Large Enterprises
                </Link>
              </li>
              <li>
                <Link to="/industries/smes" className="hover:text-[#faf9f6] transition-colors">
                  Commercial SMEs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[1px] text-[#faf9f6] mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-[12px] text-[#868684]">
              <li>
                <Link to="/about" className="hover:text-[#faf9f6] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/clients" className="hover:text-[#faf9f6] transition-colors">
                  Verified Clients
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-[#faf9f6] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-[#faf9f6] transition-colors">
                  Engineering Insights
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#faf9f6] transition-colors flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="text-[9px] bg-[#1e1e1d] text-[#f0b66d] border border-[#333333] px-1 py-0.2 rounded font-mono">Hiring</span>
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#faf9f6] transition-colors">
                  Hardware Store
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-[#faf9f6] transition-colors flex items-center gap-1">
                  <Shield className="h-3 w-3 text-[#f0b66d]" />
                  <span>Admin Portal</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright 11px #666469 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#666469]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Centrifuge Information Technology Limited. All rights reserved.</span>
          </div>

          <div className="text-[#868684] tracking-tight font-normal">
            Obsidian Command Center · Engineered Reliability
          </div>

          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-[#faf9f6] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#faf9f6] transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-[#faf9f6] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
