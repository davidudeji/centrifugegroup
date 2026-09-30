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
      <section className="bg-[#000000] text-white py-20 sm:py-28 border-b border-[#1e1e1d] flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              {/* 404 Code Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#f0b66d]/15 border border-[#f0b66d]/30">
                <span className="font-mono text-xs font-bold text-[#f0b66d] tracking-widest">
                  ERROR 404 — PAGE NOT FOUND
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl font-extrabold font-heading tracking-tight text-white leading-[1]">
                This page doesn't exist.
              </h1>

              <p className="text-base sm:text-lg text-[#868684] leading-relaxed max-w-lg">
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
                    className="bg-transparent text-white border-[#334155] hover:bg-[#121212]/10"
                    leftIcon={<Home className="h-4 w-4" />}
                  >
                    Return Home
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual — monospace 404 art block */}
            <div className="lg:col-span-6 hidden lg:flex items-center justify-center">
              <div className="font-mono text-[#f0b66d]/20 text-[8rem] font-black leading-none select-none tracking-tighter">
                404
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Recovery Section */}
      <section className="py-14 bg-[#000000] border-b border-[#333333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-[#f0b66d]">
              Navigate Centrifuge
            </p>
            <h2 className="text-2xl font-bold text-[#faf9f6] font-heading mt-1">
              Find what you're looking for
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="group flex items-center justify-between p-4 bg-[#121212] rounded-[10px] border border-[#333333] hover:border-[#333333] hover:shadow-sm transition-all text-sm font-medium text-[#faf9f6] hover:text-[#f0b66d]"
              >
                <span className="leading-snug">{link.label}</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#868684] group-hover:text-[#f0b66d] shrink-0 ml-2 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 p-6 bg-[#000000] rounded-[14px] text-white">
            <Search className="h-6 w-6 text-[#f0b66d] shrink-0" />
            <div>
              <p className="text-sm font-bold">Still can't find it?</p>
              <p className="text-xs text-[#868684] mt-0.5">
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
