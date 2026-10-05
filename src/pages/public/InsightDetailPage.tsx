import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockArticles } from '../../data/mockData'
import { ArrowLeft, Clock, Share2 } from 'lucide-react'
import { useUIStore } from '../../stores/uiStore'

export const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const { addToast } = useUIStore()
  const article = mockArticles.find((a) => a.slug === slug) || mockArticles[0]

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      addToast({
        title: 'Link copied',
        description: 'Article link copied to clipboard.',
        type: 'success',
      })
    }
  }

  return (
    <div className="w-full text-left bg-[#F5F7FA] text-[#1A1A1A]">
      <SEO
        title={`${article.title} | Insights`}
        description={article.summary}
      />

      {/* ─── Hero Header (UI/UX Spec §1.1 & §4.1) ─── */}
      <section className="bg-[#FFFFFF] text-[#1A1A1A] py-16 sm:py-20 border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F2C59_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5 relative z-10">
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#008DDA] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Articles</span>
          </Link>

          <div className="pt-2 flex items-center gap-3 text-xs font-mono">
            <span className="px-2.5 py-0.5 rounded-[4px] bg-[#008DDA]/10 border border-[#008DDA]/30 text-[#008DDA] font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-[#64748B]">• {article.date}</span>
            <span className="text-[#64748B] flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readingTime}
            </span>
          </div>

          <h1 className="text-[32px] sm:text-[44px] font-bold text-[#0F2C59] tracking-tight leading-[1.2]">
            {article.title}
          </h1>

          <div className="pt-4 flex items-center justify-between border-t border-[#F1F5F9]">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-[#0F2C59] text-white font-bold flex items-center justify-center text-xs">
                {article.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-[13px] font-bold text-[#1A1A1A]">{article.author.name}</p>
                <p className="text-[11px] text-[#64748B]">{article.author.role}</p>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#FFFFFF] border border-[#CBD5E1] text-xs font-semibold text-[#475569] hover:border-[#008DDA] hover:text-[#008DDA] transition-colors cursor-pointer"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </section>

      {/* ─── Main Content (UI/UX Spec §3.3 Data Card Module) ─── */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="rounded-[8px] overflow-hidden border border-[#E2E8F0] bg-[#FFFFFF] shadow-2xs">
            <img src={article.image} alt={article.title} className="w-full h-80 sm:h-96 object-cover" />
          </div>

          {/* Article Body */}
          <div className="bg-[#FFFFFF] p-8 sm:p-12 rounded-[8px] border border-[#E2E8F0] space-y-6 text-[#475569] leading-relaxed text-[15px] shadow-2xs">
            <p className="text-[17px] text-[#0F2C59] font-medium leading-relaxed border-l-4 border-[#008DDA] pl-4 italic">
              {article.summary}
            </p>

            <div className="space-y-4 pt-2">
              <p>
                When building clinical software for regional hospitals, logistics telematics, or financial transaction ledgers across emerging markets, assuming constant high-speed connectivity is an architectural flaw.
              </p>
              <h3 className="text-[20px] font-bold text-[#0F2C59] tracking-tight pt-4">
                The Reality of Network Latency in Critical Operations
              </h3>
              <p>
                In many district health facilities and transit checkpoints, power interruptions and ISP downtime are common operational occurrences. A hospital or logistics management system that depends entirely on continuous round-trip HTTP requests to remote cloud instances will fail when it is needed most.
              </p>
              <p>
                Local-first data architectures ensure that records can be created, edited, and queried with zero network latency, automatically synchronizing changes to the central cloud cluster once connection is reestablished.
              </p>
            </div>

            <div className="pt-8 border-t border-[#F1F5F9] flex items-center justify-between">
              <Link
                to="/insights"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#008DDA] hover:text-[#0077B6] transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Back to all insights</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-[4px] bg-[#008DDA] text-white hover:bg-[#0077B6] text-xs font-semibold transition-colors"
              >
                <span>Discuss with Our Architects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InsightDetailPage
