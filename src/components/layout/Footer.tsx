import React from 'react'
import { Link } from 'react-router-dom'
import { brandAssets } from '../../assets'
import { Mail, Phone, MapPin, Globe, ShieldCheck } from 'lucide-react'

// Custom brand icons as SVG components (lucide-react doesn't export Linkedin/Twitter/Youtube in this version)
const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const TwitterXIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const YoutubeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
)

const footerLinks = {
  solutions: [
    { label: 'Project Development & Management', href: '/solutions/project-development-management' },
    { label: 'Optimax ERP Suite', href: '/solutions/optimax' },
    { label: 'Healthcare Systems (HRHIS)', href: '/solutions/healthcare' },
    { label: 'Logistics & Telematics', href: '/solutions/logistics' },
    { label: 'Enterprise Integration', href: '/solutions/enterprise' },
    { label: 'Business Intelligence', href: '/solutions/data-analytics' },
  ],
  optimaxCloud: [
    { label: 'Overview', href: '/optima-xcloud/' },
    { label: 'Platform', href: '/optima-xcloud/platform/' },
    { label: 'Integrations', href: '/optima-xcloud/integrations/' },
    { label: 'Solutions', href: '/optima-xcloud/solutions/' },
    { label: 'Cloud Migration', href: '/optima-xcloud/migration/' },
    { label: 'Pricing', href: '/optima-xcloud/pricing/' },
    { label: 'Documentation', href: '/optima-xcloud/documentation/' },
  ],
  services: [
    { label: 'Software Engineering', href: '/services/software-development' },
    { label: 'Mobile Development', href: '/services/mobile-development' },
    { label: 'Cloud Infrastructure', href: '/services/cloud' },
    { label: 'Managed IT Services', href: '/services/infrastructure' },
    { label: 'Capacity Building', href: '/services/training' },
    { label: 'Project Showcase', href: '/projects' },
  ],
  company: [
    { label: 'About Centrifuge', href: '/about' },
    { label: 'Institutional Clients', href: '/clients' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Technical Insights', href: '/insights' },
    { label: 'Careers & Openings', href: '/careers' },
    { label: 'Contact Advisory', href: '/contact' },
  ],
}

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/centrifuge-information-technology',
    icon: LinkedinIcon,
  },
  {
    label: 'X / Twitter',
    href: 'https://twitter.com/centrifugegroup',
    icon: TwitterXIcon,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@centrifugegroup',
    icon: YoutubeIcon,
  },
  {
    label: 'Website',
    href: 'https://centrifugegroup.co',
    icon: Globe,
  },
]

interface FooterColumnProps {
  heading: string
  links: Array<{ label: string; href: string }>
  highlight?: string
}

const FooterColumn: React.FC<FooterColumnProps> = ({ heading, links, highlight }) => (
  <div>
    <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
      {heading}
    </h4>
    <ul className="space-y-2.5 text-[13.5px]">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            to={link.href}
            className={`transition-colors hover:text-white ${
              link.label === highlight
                ? 'text-[#60A5FA] font-medium'
                : 'text-[#8BAACC]'
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer text-[#8BAACC]">

      {/* Main footer grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">

          {/* Brand column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block" aria-label="Centrifuge Group home">
              <img
                src={brandAssets.logo}
                alt="Centrifuge Group"
                className="h-[48px] w-auto object-contain object-left"
                style={{ maxWidth: 220 }}
              />
            </Link>

            <p className="text-[13.5px] leading-[1.75] text-[#7A9BBC] max-w-[280px]">
              Enterprise software engineering, systems integration, and digital infrastructure for complex operational environments.
            </p>

            {/* Contact details */}
            <div className="space-y-3 text-[13px] text-[#7A9BBC]">
              <a
                href="mailto:enquiries@centrifugegroup.com"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-[#E87916] shrink-0" />
                <span>enquiries@centrifugegroup.com</span>
              </a>
              <a
                href="tel:+2348155026555"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#E87916] shrink-0" />
                <span>+234 815 5026 555</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-3.5 w-3.5 text-[#E87916] shrink-0 mt-0.5" />
                <span>Suite 203, Jinifa Plaza, CBD, Abuja, Nigeria</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Centrifuge Group on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-white/[0.1] bg-white/[0.04] text-[#7A9BBC] transition-all hover:border-[#F28C28]/60 hover:bg-[#F28C28] hover:text-white hover:scale-105"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <FooterColumn heading="Solutions" links={footerLinks.solutions} highlight="Project Development & Management" />

          {/* OptimaXCloud */}
          <div>
            <h4 className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white">OptimaXCloud</h4>
            <p className="mb-4 text-[12px] leading-[1.6] text-[#6A8AA8]">
              Cloud infrastructure & managed services from Centrifuge Group.
            </p>
            <ul className="space-y-2.5 text-[13.5px]">
              {footerLinks.optimaxCloud.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-[#8BAACC] transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <FooterColumn heading="Services" links={footerLinks.services} />

          {/* Company */}
          <FooterColumn heading="Company" links={footerLinks.company} />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/[0.07]" />

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[12.5px] text-[#4A6A8C]">
        <p>
          &copy; {year} Centrifuge Group. Enterprise technology and engineering. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <Link to="/contact" className="hover:text-white transition-colors">Security Disclosure</Link>
          <Link to="/admin" className="inline-flex items-center gap-1 hover:text-white transition-colors">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Admin</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
