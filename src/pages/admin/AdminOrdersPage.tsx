import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { mockOrders } from '../../data/mockData'
import type { OrderStatus, PaymentStatus } from '../../types'
import {
  Search,
  Filter,
  Download,
  Eye,
  ChevronLeft,
  ChevronRight,
  Clock,
  Truck,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Loader2,
} from 'lucide-react'

const statusConfig: Record<OrderStatus, { label: string; color: string; icon: React.FC<{ className?: string }> }> = {
  pending: { label: 'Pending', color: 'bg-[#D97706]/10 text-[#D97706] border-[#D97706]/20', icon: Clock },
  processing: { label: 'Processing', color: 'bg-[#f0b66d]/10 text-[#f0b66d] border-[#f0b66d]/20', icon: Loader2 },
  shipped: { label: 'Shipped', color: 'bg-[#000000]/10 text-[#faf9f6] border-[#1e1e1d]/20', icon: Truck },
  delivered: { label: 'Delivered', color: 'bg-[#16A34A]/10 text-[#16A34A] border-[#16A34A]/20', icon: CheckCircle2 },
  cancelled: { label: 'Cancelled', color: 'bg-[#DC2626]/10 text-[#DC2626] border-[#DC2626]/20', icon: XCircle },
  refunded: { label: 'Refunded', color: 'bg-[#64748B]/10 text-[#868684] border-[#64748B]/20', icon: RotateCcw },
}

const paymentConfig: Record<PaymentStatus, { label: string; color: string }> = {
  pending: { label: 'Pending', color: 'text-[#D97706]' },
  paid: { label: 'Paid', color: 'text-[#16A34A]' },
  failed: { label: 'Failed', color: 'text-[#DC2626]' },
  refunded: { label: 'Refunded', color: 'text-[#868684]' },
}

const PAGE_SIZE = 10

export const AdminOrdersPage: React.FC = () => {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [paymentFilter, setPaymentFilter] = useState<string>('all')
  const [page, setPage] = useState(1)

  const filtered = mockOrders.filter((o) => {
    const matchSearch =
      !search ||
      o.orderNumber.toLowerCase().includes(search.toLowerCase()) ||
      o.customerName.toLowerCase().includes(search.toLowerCase()) ||
      o.customerEmail.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'all' || o.orderStatus === statusFilter
    const matchPayment = paymentFilter === 'all' || o.paymentStatus === paymentFilter
    return matchSearch && matchStatus && matchPayment
  })

  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(amount)

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading font-bold text-2xl text-[#faf9f6]">Orders</h1>
          <p className="text-sm text-[#868684] mt-0.5">{total} total order{total !== 1 ? 's' : ''}</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#868684] border border-[#333333] rounded-lg hover:bg-[#000000] transition-colors">
          <Download className="h-3.5 w-3.5" />
          Export
        </button>
      </div>

      {/* Filters */}
      <div className="bg-[#121212] rounded-xl border border-[#333333] p-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#868684]" />
          <input
            type="text"
            placeholder="Search by order ID, customer name or email…"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1) }}
            className="w-full h-9 pl-9 pr-4 bg-[#000000] border border-[#333333] rounded-lg text-sm text-[#faf9f6] placeholder-[#868684] focus:outline-none focus:border-[#f0b66d] transition-all"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-[#868684]" />
          <select
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value); setPage(1) }}
            className="h-9 px-3 bg-[#000000] border border-[#333333] rounded-lg text-sm text-[#faf9f6] focus:outline-none focus:border-[#f0b66d]"
          >
            <option value="all">All Statuses</option>
            {Object.entries(statusConfig).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>

          <select
            value={paymentFilter}
            onChange={(e) => { setPaymentFilter(e.target.value); setPage(1) }}
            className="h-9 px-3 bg-[#000000] border border-[#333333] rounded-lg text-sm text-[#faf9f6] focus:outline-none focus:border-[#f0b66d]"
          >
            <option value="all">All Payments</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
            <option value="refunded">Refunded</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#121212] rounded-xl border border-[#333333] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#000000] border-b border-[#333333]">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#868684] uppercase tracking-wide">Order</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#868684] uppercase tracking-wide">Customer</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#868684] uppercase tracking-wide">Date</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-[#868684] uppercase tracking-wide">Items</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-[#868684] uppercase tracking-wide">Total</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#868684] uppercase tracking-wide">Payment</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#868684] uppercase tracking-wide">Status</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-[#868684] uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#333333]">
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-12 text-center text-sm text-[#868684]">
                    No orders match your filters.
                  </td>
                </tr>
              ) : paginated.map((order) => {
                const status = statusConfig[order.orderStatus]
                const payment = paymentConfig[order.paymentStatus]
                const StatusIcon = status.icon
                return (
                  <tr key={order.id} className="hover:bg-[#000000] transition-colors">
                    <td className="px-4 py-3.5">
                      <span className="font-mono text-xs font-bold text-[#faf9f6]">{order.orderNumber}</span>
                    </td>
                    <td className="px-4 py-3.5">
                      <p className="font-semibold text-[#faf9f6] text-xs">{order.customerName}</p>
                      <p className="text-[11px] text-[#868684]">{order.customerEmail}</p>
                    </td>
                    <td className="px-4 py-3.5 text-xs text-[#868684]">{formatDate(order.createdAt)}</td>
                    <td className="px-4 py-3.5 text-right text-xs text-[#868684]">{order.items.length}</td>
                    <td className="px-4 py-3.5 text-right font-semibold text-[#faf9f6] text-xs">{formatCurrency(order.total)}</td>
                    <td className="px-4 py-3.5">
                      <span className={`text-xs font-semibold ${payment.color}`}>{payment.label}</span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${status.color}`}>
                        <StatusIcon className="h-3 w-3" />
                        {status.label}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <Link
                        to={`/admin/orders/${order.id}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#f0b66d] hover:text-[#faf9f6] transition-colors"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        View
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-4 py-3 border-t border-[#333333] flex items-center justify-between">
            <span className="text-xs text-[#868684]">
              Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, total)} of {total}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-1.5 rounded-lg border border-[#333333] text-[#868684] hover:bg-[#000000] disabled:opacity-40"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <span className="text-xs text-[#faf9f6] font-semibold">{page} / {totalPages}</span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="p-1.5 rounded-lg border border-[#333333] text-[#868684] hover:bg-[#000000] disabled:opacity-40"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminOrdersPage
