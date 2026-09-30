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
    <div className="w-full text-left bg-[#000000] text-[#faf9f6]">
      <SEO
        title={`${article.title} | Insights`}
        description={article.summary}
      />

      {/* ─── Hero Header (Warp Obsidian #000000) ─── */}
      <section className="bg-[#000000] text-[#faf9f6] py-16 sm:py-24 border-b border-[#1e1e1d]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-[12px] font-mono text-[#868684] hover:text-[#f0b66d] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Articles</span>
          </Link>

          <div className="pt-2 flex items-center gap-3 text-[12px] font-mono">
            <span className="px-2.5 py-0.5 rounded-[50px] bg-[#121212] border border-[#333333] text-[#f0b66d]">
              {article.category}
            </span>
            <span className="text-[#868684]">• {article.date}</span>
            <span className="text-[#868684] flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readingTime}
            </span>
          </div>

          <h1 className="text-[32px] sm:text-[48px] font-normal text-[#faf9f6] tracking-[-1.5px] leading-tight">
            {article.title}
          </h1>

          <div className="pt-4 flex items-center justify-between border-t border-[#1e1e1d]">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-[#121212] border border-[#333333] text-[#f0b66d] font-semibold flex items-center justify-center text-[13px]">
                {article.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-[13px] font-medium text-[#faf9f6]">{article.author.name}</p>
                <p className="text-[11px] text-[#868684]">{article.author.role}</p>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[33px] bg-[#1e1e1d] border border-[#333333] text-[12px] font-medium text-[#faf9f6] hover:border-[#666469] transition-colors"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </section>

      {/* ─── Main Content (Warp Graphite #121212) ─── */}
      <section className="py-20 bg-[#121212] border-b border-[#1e1e1d]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="rounded-[20px] overflow-hidden border border-[#1e1e1d] bg-[#000000]">
            <img src={article.image} alt={article.title} className="w-full h-80 sm:h-96 object-cover opacity-90" />
          </div>

          {/* Article Body (Onyx #1e1e1d card) */}
          <div className="bg-[#1e1e1d] p-8 sm:p-12 rounded-[20px] border border-[#1e1e1d] space-y-6 text-[#b4b4b2] leading-relaxed text-[15px]">
            <p className="text-[17px] text-[#faf9f6] leading-relaxed border-l-2 border-[#f0b66d] pl-4 italic">
              {article.summary}
            </p>

            <div className="space-y-4 pt-2">
              <p>
                When building clinical software for regional hospitals, logistics telematics, or financial ledgers across emerging markets, assuming constant high-speed connectivity is an architectural flaw.
              </p>
              <h3 className="text-[22px] font-normal text-[#faf9f6] tracking-[-0.29px] pt-4">
                The Problem of Network Latency in Critical Operations
              </h3>
              <p>
                In many district health facilities and transit checkpoints, power interruptions and ISP downtime are common operational occurrences. A hospital or logistics management system that depends entirely on continuous round-trip HTTP requests to remote cloud instances will fail when it is needed most.
              </p>
              <p>
                Local-first data architectures ensure that records can be created, edited, and queried with zero network latency, automatically synchronizing changes to the central cloud cluster once connection is reestablished.
              </p>
            </div>

            <div className="pt-8 border-t border-[#333333]/50 flex items-center justify-between">
              <Link
                to="/insights"
                className="inline-flex items-center gap-1.5 text-[13px] text-[#faf9f6] hover:text-[#f0b66d] transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Back to all insights</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-9 px-5 rounded-[33px] bg-[#121212] text-[#080808] hover:bg-[#e3e2e0] text-[13px] font-semibold transition-colors"
              >
                <span>Discuss with our architects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InsightDetailPage
