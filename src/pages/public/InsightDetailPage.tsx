import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockArticles } from '../../data/mockData'
import { ArrowLeft, Clock, Share2, ArrowRight } from 'lucide-react'
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
    <div className="w-full text-left bg-white text-[#0B1F33]">
      <SEO
        title={`${article.title} | Insights`}
        description={article.summary}
      />

      {/* Hero Header */}
      <section className="bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="w-[min(92%,1440px)] mx-auto max-w-[1000px] space-y-5">
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#94A3B8] hover:text-[#16C7D9] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Articles</span>
          </Link>

          <div className="pt-1 flex items-center gap-3 text-[12px]">
            <span className="px-2.5 py-0.5 rounded-[4px] bg-[#EFF9FA]/10 border border-[#16C7D9]/30 text-[#16C7D9] font-semibold text-[11px]">
              {article.category}
            </span>
            <span className="text-[#94A3B8]">• {article.date}</span>
            <span className="text-[#94A3B8] flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readingTime}
            </span>
          </div>

          <h1
            className="font-bold text-white leading-[1.05] tracking-[-0.025em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {article.title}
          </h1>

          <div className="pt-4 flex items-center justify-between border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-[#16C7D9]/20 border border-[#16C7D9]/40 text-[#16C7D9] font-bold flex items-center justify-center text-[13px]">
                {article.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-[13px] font-semibold text-white">{article.author.name}</p>
                <p className="text-[11px] text-[#94A3B8]">{article.author.role}</p>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] bg-white/10 border border-white/20 text-[12px] font-medium text-white hover:bg-white/20 transition-colors"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-[min(92%,1440px)] mx-auto max-w-[1000px] space-y-8">
          <div className="rounded-[12px] overflow-hidden border border-[#E2E8F0] bg-[#0B1F33]">
            <img src={article.image} alt={article.title} className="w-full h-80 sm:h-96 object-cover opacity-90" />
          </div>

          {/* Article Body */}
          <div className="bg-white p-8 sm:p-12 rounded-[12px] border border-[#E2E8F0] space-y-6 text-[#475569] leading-relaxed text-[15px]">
            <p className="text-[17px] text-[#334155] leading-relaxed border-l-2 border-[#16C7D9] pl-5 italic">
              {article.summary}
            </p>

            <div className="space-y-4 pt-2">
              <p>
                When building clinical software for regional hospitals, logistics telematics, or financial ledgers across emerging markets, assuming constant high-speed connectivity is an architectural flaw.
              </p>
              <h3 className="text-[22px] font-bold text-[#0B1F33] tracking-[-0.025em] pt-4">
                The Problem of Network Latency in Critical Operations
              </h3>
              <p>
                In many district health facilities and transit checkpoints, power interruptions and ISP downtime are common operational occurrences. A hospital or logistics management system that depends entirely on continuous round-trip HTTP requests to remote cloud instances will fail when it is needed most.
              </p>
              <p>
                Local-first data architectures ensure that records can be created, edited, and queried with zero network latency, automatically synchronizing changes to the central cloud cluster once connection is reestablished.
              </p>
            </div>

            <div className="pt-8 border-t border-[#E2E8F0] flex items-center justify-between">
              <Link
                to="/insights"
                className="inline-flex items-center gap-1.5 text-[13px] text-[#334155] hover:text-[#16C7D9] transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Back to all insights</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 h-9 px-5 rounded-[6px] bg-[#16C7D9] text-[#0B1F33] hover:bg-[#10b8ca] text-[13px] font-semibold transition-colors"
              >
                <span>Discuss with our architects</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InsightDetailPage
