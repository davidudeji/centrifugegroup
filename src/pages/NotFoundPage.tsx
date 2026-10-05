import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SEO } from '../components/ui/SEO'
import { ArrowLeft, Home, Search, ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/Button'

const quickLinks = [
  { label: 'Solutions Overview', href: '/solutions' },
  { label: 'Optimax ERP Platform', href: '/solutions/optimax' },
  { label: 'Healthcare Technology', href: '/solutions/healthcare' },
  { label: 'Logistics & Fleet', href: '/solutions/logistics' },
  { label: 'About Centrifuge', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Hardware Store', href: '/shop' },
  { label: 'Engineering Insights', href: '/insights' },
]

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full text-left min-h-[calc(100vh-64px)] flex flex-col">
      <SEO
        title="Page Not Found | Centrifuge Group"
        description="The page you're looking for doesn't exist or has been moved."
      />

      {/* Hero Section */}
      <section className="bg-[#0F2C59] text-white py-20 sm:py-28 border-b border-[#1E3A8A] flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              {/* 404 Code Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#008DDA]/15 border border-[#008DDA]/30">
                <span className="font-mono text-xs font-bold text-[#008DDA] tracking-widest">
                  ERROR 404 — PAGE NOT FOUND
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl font-extrabold font-heading tracking-tight text-white leading-[1]">
                This page doesn't exist.
              </h1>

              <p className="text-base sm:text-lg text-[#A0AEC0] leading-relaxed max-w-lg">
                The URL you've followed may have been moved, renamed, or never existed. Check the address or use the links below to find what you need.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate(-1)}
                  leftIcon={<ArrowLeft className="h-4 w-4" />}
                >
                  Go Back
                </Button>
                <Link to="/">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent text-white border-white/40 hover:bg-white/10"
                    leftIcon={<Home className="h-4 w-4" />}
                  >
                    Return Home
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual — monospace 404 art block */}
            <div className="lg:col-span-6 hidden lg:flex items-center justify-center">
              <div className="font-mono text-[#008DDA]/20 text-[8rem] font-black leading-none select-none tracking-tighter">
                404
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Recovery Section */}
      <section className="py-14 bg-[#0F2C59] border-b border-[#1E3A8A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-[#008DDA]">
              Navigate Centrifuge
            </p>
            <h2 className="text-2xl font-bold text-white font-heading mt-1">
              Find what you're looking for
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="group flex items-center justify-between p-4 bg-[#1E3A8A]/40 rounded-[8px] border border-[#1E3A8A] hover:border-[#008DDA] hover:shadow-xs transition-fin text-sm font-medium text-white hover:text-[#008DDA]"
              >
                <span className="leading-snug">{link.label}</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#A0AEC0] group-hover:text-[#008DDA] shrink-0 ml-2 transition-fin group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 p-6 bg-[#1E3A8A]/40 rounded-[8px] border border-[#1E3A8A] text-white">
            <Search className="h-6 w-6 text-[#008DDA] shrink-0" />
            <div>
              <p className="text-sm font-bold">Still can't find it?</p>
              <p className="text-xs text-[#A0AEC0] mt-0.5">
                Our team can help you find the right solution or information.
              </p>
            </div>
            <div className="sm:ml-auto">
              <Link to="/contact">
                <Button variant="primary" size="sm">
                  Contact Support →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage
