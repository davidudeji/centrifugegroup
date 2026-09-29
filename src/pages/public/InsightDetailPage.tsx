import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { mockArticles } from '../../data/mockData'
import { ArrowLeft, Clock, Share2, Tag, ArrowRight } from 'lucide-react'
import { Button } from '../../components/ui/Button'
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
    <div className="w-full text-left">
      <SEO
        title={`${article.title} | Insights`}
        description={article.summary}
      />

      <section className="bg-[#0B1F33] text-white py-16 sm:py-20 border-b border-[#172333]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#94A3B8] hover:text-[#16C7D9] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Articles</span>
          </Link>

          <div className="pt-2 flex items-center gap-3 text-xs">
            <span className="px-2.5 py-0.5 rounded bg-[#16C7D9]/20 text-[#67E8F9] font-mono font-bold">
              {article.category}
            </span>
            <span className="text-[#94A3B8]">• {article.date}</span>
            <span className="text-[#94A3B8] flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="pt-3 flex items-center justify-between border-t border-[#172333]">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-[#16C7D9]/20 text-[#16C7D9] font-bold flex items-center justify-center font-heading text-xs">
                {article.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-bold text-white">{article.author.name}</p>
                <p className="text-[11px] text-[#94A3B8]">{article.author.role}</p>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="rounded-[16px] overflow-hidden border border-[#E2E8F0] shadow-sm">
            <img src={article.image} alt={article.title} className="w-full h-80 sm:h-96 object-cover" />
          </div>

          {/* Article Markdown/Content Body */}
          <div className="bg-white p-8 sm:p-12 rounded-[16px] border border-[#E2E8F0] space-y-6 text-[#334155] leading-relaxed text-sm sm:text-base">
            <p className="text-lg font-medium text-[#0B1F33] leading-relaxed border-l-4 border-[#16C7D9] pl-4 italic">
              {article.summary}
            </p>

            <div className="space-y-4 pt-2">
              <p>
                When building clinical software for regional hospitals and primary healthcare centers across emerging markets, assuming constant 5G connectivity is an architectural failure.
              </p>
              <h3 className="text-xl font-bold text-[#0B1F33] font-heading pt-4">
                The Problem of Network Latency in Critical Operations
              </h3>
              <p>
                In many district health facilities and transit checkpoints, power interruptions and ISP downtime are common operational occurrences. A hospital or logistics information management system that depends entirely on continuous round-trip HTTP requests to remote cloud instances will fail when it is needed most.
              </p>
              <h3 className="text-xl font-bold text-[#0B1F33] font-heading pt-4">
                Our Three-Tier Resilient Sync Architecture
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[#475569]">
                <li><strong>Local-First Working Cache:</strong> Every consultation, vitals capture, and cargo dispatch event is committed locally to encrypted client storage before any network request is fired.</li>
                <li><strong>Background Sync Worker:</strong> Service workers monitor connectivity states and queue encrypted transactional packets with exponential backoff.</li>
                <li><strong>Deterministic Reconciliation:</strong> When reconnected, changes are merged using idempotent ledger timestamps, guaranteeing data consistency without overwriting concurrent records.</li>
              </ul>
            </div>

            {/* Tags */}
            <div className="pt-8 border-t border-[#E2E8F0] flex flex-wrap items-center gap-2">
              <Tag className="h-4 w-4 text-[#64748B]" />
              {article.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded bg-[#F1F5F9] text-xs font-mono text-[#0B1F33]">
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default InsightDetailPage
