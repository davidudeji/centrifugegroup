import React from 'react'
import { Link } from 'react-router-dom'
import { brandAssets } from '../../assets'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const FOOTER_COLS = [
  {
    heading: 'Solutions',
    links: [
      { label: 'Optimax ERP',       to: '/solutions/optimax' },
      { label: 'Logistics',          to: '/solutions/logistics' },
      { label: 'Healthcare',         to: '/solutions/healthcare' },
      { label: 'Enterprise',         to: '/solutions/enterprise' },
      { label: 'Data & Analytics',   to: '/solutions/data-analytics' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Software Dev',       to: '/services/software-development' },
      { label: 'Mobile Dev',         to: '/services/mobile-development' },
      { label: 'Cloud',              to: '/services/cloud' },
      { label: 'Infrastructure',     to: '/services/infrastructure' },
      { label: 'Managed IT',         to: '/services/managed-it' },
      { label: 'Consulting',         to: '/services/consulting' },
      { label: 'Training',           to: '/services/training' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Healthcare',         to: '/industries/healthcare' },
      { label: 'Logistics',          to: '/industries/logistics' },
      { label: 'Government',         to: '/industries/government' },
      { label: 'Enterprise',         to: '/industries/enterprise' },
      { label: 'SMEs',               to: '/industries/smes' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',              to: '/about' },
      { label: 'Clients',            to: '/clients' },
      { label: 'Case Studies',       to: '/case-studies' },
      { label: 'Projects',           to: '/projects' },
      { label: 'Careers',            to: '/careers' },
      { label: 'Contact',            to: '/contact' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Insights',           to: '/insights' },
      { label: 'Shop',               to: '/shop' },
      { label: 'Privacy Policy',     to: '/privacy' },
      { label: 'Terms of Service',   to: '/terms' },
    ],
    external: [
      { label: 'Optimax Site', href: 'https://www.optimaxsuites.com/' },
    ],
  },
]

export const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0B1F33] text-[#94A3B8]">
      <div className="w-[min(92%,1440px)] mx-auto pt-16 pb-10">

        {/* ── Main grid ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/[0.07]">

          {/* Brand column */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              to="/"
              className="inline-block focus-visible:ring-2 focus-visible:ring-[#16C7D9] rounded-sm"
              aria-label="Centrifuge Group — home"
            >
              <img
                src={brandAssets.logo}
                alt="Centrifuge Group"
                className="h-11 w-auto object-contain object-left brightness-0 invert"
              />
            </Link>

            <p className="text-[14px] text-[#64748B] leading-relaxed max-w-sm">
              Technology that moves business forward. Enterprise software,
              e-health systems, and cloud platforms that help organisations
              manage complexity, improve visibility, and scale.
            </p>

            {/* Contact details */}
            <div className="space-y-2.5 text-[13px] text-[#64748B]">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#16C7D9] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Suite 203, Jinifa Plaza, Plot 1014 Samuel Adesoji Ademulegun St, Central Business District, Abuja, Nigeria.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#16C7D9] shrink-0" aria-hidden="true" />
                <a href="mailto:enquiries@centrifugegroup.com" className="hover:text-white transition-colors">
                  enquiries@centrifugegroup.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#16C7D9] shrink-0" aria-hidden="true" />
                <a href="tel:+2348155026555" className="hover:text-white transition-colors">
                  +234 815 5026 555
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2 pt-1">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/centrifuge-information-technology"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Centrifuge Group on LinkedIn"
                className="h-8 w-8 rounded-[6px] bg-white/[0.06] flex items-center justify-center text-[#64748B] hover:text-white hover:bg-white/[0.12] transition-colors"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="https://twitter.com/centrifugegroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Centrifuge Group on X"
                className="h-8 w-8 rounded-[6px] bg-white/[0.06] flex items-center justify-center text-[#64748B] hover:text-white hover:bg-white/[0.12] transition-colors"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@centrifugegroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Centrifuge Group on YouTube"
                className="h-8 w-8 rounded-[6px] bg-white/[0.06] flex items-center justify-center text-[#64748B] hover:text-white hover:bg-white/[0.12] transition-colors"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.heading} className="lg:col-span-2">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2.5 text-[13px] text-[#64748B]">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
                {'external' in col &&
                  col.external?.map((ext) => (
                    <li key={ext.href}>
                      <a
                        href={ext.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        {ext.label}
                        <ArrowUpRight className="h-3 w-3 text-[#16C7D9]" />
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ─────────────────────────────── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#475569]">
          <div>
            <p className="font-medium text-[#64748B] italic mb-0.5">
              "Technology that moves business forward."
            </p>
            <p>© {year} Centrifuge Information Technology Limited. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms"   className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
