import React, { useState } from 'react'
import { SEO } from '../../components/ui/SEO'
import { Star, Search, Filter, CheckCircle, XCircle, Clock, MessageSquare, ThumbsUp, Eye } from 'lucide-react'
import { Input } from '../../components/ui/Input'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { useUIStore } from '../../stores/uiStore'

interface Review {
  id: string
  productId: string
  productName: string
  productSku: string
  customerName: string
  customerEmail: string
  rating: number
  title: string
  body: string
  status: 'pending' | 'approved' | 'rejected'
  helpful: number
  createdAt: string
}

const mockReviews: Review[] = [
  {
    id: 'rev-001',
    productId: 'prod-1',
    productName: 'Centrifuge Titan 5kVA Pure Sine Wave Inverter',
    productSku: 'CFG-INV-5000',
    customerName: 'Emmanuel Okafor',
    customerEmail: 'e.okafor@hospital.gov.ng',
    rating: 5,
    title: 'Exceptional performance for our hospital ward',
    body: 'We installed three units in our maternity ward. They have been running continuously for 4 months without any issues. The transfer time is indeed under 10ms — our medical equipment never drops. Highly recommended for healthcare facilities.',
    status: 'approved',
    helpful: 12,
    createdAt: '2026-08-15T10:30:00Z',
  },
  {
    id: 'rev-002',
    productId: 'prod-5',
    productName: 'Centrifuge Fortress 10kVA Online UPS (3-Phase)',
    productSku: 'CFG-UPS-10000-3P',
    customerName: 'Amaka Nwosu',
    customerEmail: 'amaka@techsolutions.co',
    rating: 4,
    title: 'Solid enterprise-grade UPS',
    body: 'Running our server room on this unit. The double-conversion architecture genuinely delivers zero transfer time. Installation took some effort but the documentation is thorough. Knocked one star off for the slightly higher-than-expected noise level at full load.',
    status: 'approved',
    helpful: 8,
    createdAt: '2026-08-28T14:22:00Z',
  },
  {
    id: 'rev-003',
    productId: 'prod-9',
    productName: 'Centrifuge SolarMaster 60A MPPT Controller',
    productSku: 'CFG-SOL-60A',
    customerName: 'Musa Aliyu Ibrahim',
    customerEmail: 'm.ibrahim@renewableenergy.ng',
    rating: 5,
    title: 'Best MPPT controller for large arrays',
    body: 'Deployed this on a 12kWp array. The efficiency is remarkable — we are seeing 98.2% MPPT tracking efficiency consistently. The remote telemetry via Modbus integration with our monitoring system works flawlessly.',
    status: 'pending',
    helpful: 3,
    createdAt: '2026-09-10T09:15:00Z',
  },
  {
    id: 'rev-004',
    productId: 'prod-2',
    productName: 'Centrifuge Titan 10kVA Three-Phase Industrial Inverter',
    productSku: 'CFG-INV-10000-3P',
    customerName: 'Chidinma Eze',
    customerEmail: 'c.eze@manufacturing.com',
    rating: 2,
    title: 'Had issues with generator integration',
    body: 'The unit itself is well built but the generator auto-start feature took a lot of configuration. The manual could be clearer on the voltage threshold settings. Support team was helpful but response took 48 hours.',
    status: 'pending',
    helpful: 1,
    createdAt: '2026-09-18T16:40:00Z',
  },
  {
    id: 'rev-005',
    productId: 'prod-13',
    productName: 'Centrifuge FleetEdge IoT Telematics Gateway',
    productSku: 'CFG-IOT-FLEET-4G',
    customerName: 'Taiwo Adebisi',
    customerEmail: 'taiwo@logistics.ng',
    rating: 5,
    title: 'Game-changer for our fleet operations',
    body: 'We have deployed 40 units across our tanker fleet. Real-time tracking with 4G connectivity has completely eliminated the "where is the truck?" problem. The geofencing alerts and driver behavior monitoring have already reduced fuel wastage by a noticeable margin.',
    status: 'rejected',
    helpful: 0,
    createdAt: '2026-09-22T11:05:00Z',
  },
]

const statusConfig = {
  pending: { label: 'Pending Review', variant: 'warning' as const, icon: Clock },
  approved: { label: 'Approved', variant: 'success' as const, icon: CheckCircle },
  rejected: { label: 'Rejected', variant: 'error' as const, icon: XCircle },
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-3.5 w-3.5 ${
            star <= rating
              ? 'fill-[#F59E0B] text-[#F59E0B]'
              : 'fill-[#E2E8F0] text-[#64748B]'
          }`}
        />
      ))}
    </div>
  )
}

export const AdminReviewsPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(mockReviews)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [ratingFilter, setRatingFilter] = useState<string>('all')
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const { addToast } = useUIStore()

  const filtered = reviews.filter((r) => {
    const matchesSearch =
      searchQuery === '' ||
      r.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || r.status === statusFilter
    const matchesRating = ratingFilter === 'all' || r.rating === parseInt(ratingFilter)
    return matchesSearch && matchesStatus && matchesRating
  })

  const handleStatusChange = (reviewId: string, newStatus: Review['status']) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === reviewId ? { ...r, status: newStatus } : r))
    )
    addToast({
      title: `Review ${newStatus === 'approved' ? 'Approved' : 'Rejected'}`,
      description: `Review has been marked as ${newStatus}.`,
      type: newStatus === 'approved' ? 'success' : 'error',
    })
  }

  const counts = {
    all: reviews.length,
    pending: reviews.filter((r) => r.status === 'pending').length,
    approved: reviews.filter((r) => r.status === 'approved').length,
    rejected: reviews.filter((r) => r.status === 'rejected').length,
  }

  const avgRating = (
    reviews.filter((r) => r.status === 'approved').reduce((s, r) => s + r.rating, 0) /
    (reviews.filter((r) => r.status === 'approved').length || 1)
  ).toFixed(1)

  return (
    <div className="space-y-6 text-left">
      <SEO title="Reviews Management | Centrifuge Admin" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-[#1A1A1A] font-heading">Customer Reviews</h1>
          <p className="text-sm text-[#64748B] mt-0.5">
            Moderate and manage product reviews from store customers.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-[#FFFFFF] border border-[#E2E8F0] rounded-[8px] flex items-center gap-2">
            <Star className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
            <span className="text-sm font-bold text-[#1A1A1A]">{avgRating}</span>
            <span className="text-xs text-[#64748B]">avg. approved rating</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Total Reviews', value: counts.all, color: '#008DDA' },
          { label: 'Pending', value: counts.pending, color: '#D97706' },
          { label: 'Approved', value: counts.approved, color: '#10B981' },
          { label: 'Rejected', value: counts.rejected, color: '#EF4444' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-[#FFFFFF] rounded-[12px] border border-[#E2E8F0] p-4"
          >
            <div className="text-2xl font-bold font-heading" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="text-xs text-[#64748B] mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-[#FFFFFF] rounded-[12px] border border-[#E2E8F0] p-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-full sm:w-72">
            <Input
              placeholder="Search reviews, products, customers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIcon={<Search className="h-4 w-4" />}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#64748B] font-medium">Status:</span>
            {(['all', 'pending', 'approved', 'rejected'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`text-xs px-3 py-1.5 rounded-[6px] font-medium capitalize transition-colors ${
                  statusFilter === s
                    ? 'bg-[#008DDA] text-white font-semibold'
                    : 'bg-[#F5F7FA] text-[#64748B] hover:bg-[#E2E8F0]'
                }`}
              >
                {s === 'all' ? `All (${counts.all})` : `${s} (${counts[s]})`}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#64748B] font-medium">Rating:</span>
            <select
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
              className="text-xs border border-[#E2E8F0] rounded-[6px] py-1.5 px-2 bg-[#FFFFFF] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#008DDA]/30"
            >
              <option value="all">All Ratings</option>
              <option value="5">⭐⭐⭐⭐⭐ 5 stars</option>
              <option value="4">⭐⭐⭐⭐ 4 stars</option>
              <option value="3">⭐⭐⭐ 3 stars</option>
              <option value="2">⭐⭐ 2 stars</option>
              <option value="1">⭐ 1 star</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      {filtered.length === 0 ? (
        <div className="bg-[#FFFFFF] rounded-[12px] border border-[#E2E8F0] py-16 text-center">
          <MessageSquare className="h-10 w-10 text-[#CBD5E1] mx-auto mb-3" />
          <p className="text-sm font-semibold text-[#1A1A1A]">No reviews found</p>
          <p className="text-xs text-[#64748B] mt-1">Try adjusting your filters or search query.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((review) => {
            const status = statusConfig[review.status]
            const StatusIcon = status.icon
            const isExpanded = expandedId === review.id

            return (
              <div
                key={review.id}
                className="bg-[#FFFFFF] rounded-[12px] border border-[#E2E8F0] overflow-hidden hover:border-[#E2E8F0] transition-colors"
              >
                {/* Review Header */}
                <div className="p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className="h-10 w-10 rounded-full bg-[#F5F7FA] flex items-center justify-center text-sm font-bold text-[#1A1A1A] shrink-0">
                      {review.customerName.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-bold text-[#1A1A1A]">
                          {review.customerName}
                        </span>
                        <StarRating rating={review.rating} />
                        <Badge variant={status.variant} size="sm" dot>
                          {status.label}
                        </Badge>
                      </div>
                      <p className="text-xs font-semibold text-[#1A1A1A] mt-0.5 truncate">
                        "{review.title}"
                      </p>
                      <p className="text-[11px] text-[#64748B] mt-0.5 truncate">
                        On: <span className="font-medium text-[#64748B]">{review.productName}</span>
                        {' · '}
                        {review.productSku}
                        {' · '}
                        {new Date(review.createdAt).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : review.id)}
                      className="text-xs font-medium text-[#64748B] hover:text-[#1A1A1A] flex items-center gap-1 transition-colors"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      {isExpanded ? 'Collapse' : 'Read'}
                    </button>

                    {review.status === 'pending' && (
                      <>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => handleStatusChange(review.id, 'approved')}
                          leftIcon={<CheckCircle className="h-3.5 w-3.5" />}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => handleStatusChange(review.id, 'rejected')}
                          leftIcon={<XCircle className="h-3.5 w-3.5" />}
                        >
                          Reject
                        </Button>
                      </>
                    )}
                    {review.status === 'approved' && (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => handleStatusChange(review.id, 'rejected')}
                      >
                        Reject
                      </Button>
                    )}
                    {review.status === 'rejected' && (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => handleStatusChange(review.id, 'approved')}
                      >
                        Re-Approve
                      </Button>
                    )}
                  </div>
                </div>

                {/* Expanded Body */}
                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-[#E2E8F0] pt-4 space-y-3">
                    <div className="text-sm text-[#64748B] leading-relaxed bg-[#F5F7FA] p-4 rounded-[8px] border border-[#E2E8F0]">
                      {review.body}
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#64748B]">
                      <span className="flex items-center gap-1.5">
                        <ThumbsUp className="h-3.5 w-3.5" />
                        <span>{review.helpful} customers found this helpful</span>
                      </span>
                      <span className="font-mono">{review.customerEmail}</span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default AdminReviewsPage
