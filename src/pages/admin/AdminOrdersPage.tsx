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
  processing: { label: 'Processing', color: 'bg-[#008DDA]/10 text-[#008DDA] border-[#008DDA]/20', icon: Loader2 },
  shipped: { label: 'Shipped', color: 'bg-[#F5F7FA]/10 text-[#1A1A1A] border-[#F5F7FA]/20', icon: Truck },
  delivered: { label: 'Delivered', color: 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20', icon: CheckCircle2 },
  cancelled: { label: 'Cancelled', color: 'bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/20', icon: XCircle },
  refunded: { label: 'Refunded', color: 'bg-[#64748B]/10 text-[#64748B] border-[#64748B]/20', icon: RotateCcw },
}

const paymentConfig: Record<PaymentStatus, { label: string; color: string }> = {
  pending: { label: 'Pending', color: 'text-[#D97706]' },
  paid: { label: 'Paid', color: 'text-[#10B981]' },
  failed: { label: 'Failed', color: 'text-[#EF4444]' },
  refunded: { label: 'Refunded', color: 'text-[#64748B]' },
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
          <h1 className="font-heading font-bold text-2xl text-[#1A1A1A]">Orders</h1>
          <p className="text-sm text-[#64748B] mt-0.5">{total} total order{total !== 1 ? 's' : ''}</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#64748B] border border-[#E2E8F0] rounded-lg hover:bg-[#F5F7FA] transition-colors">
          <Download className="h-3.5 w-3.5" />
          Export
        </button>
      </div>

      {/* Filters */}
      <div className="bg-[#FFFFFF] rounded-xl border border-[#E2E8F0] p-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#64748B]" />
          <input
            type="text"
            placeholder="Search by order ID, customer name or email…"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1) }}
            className="w-full h-9 pl-9 pr-4 bg-[#F5F7FA] border border-[#E2E8F0] rounded-lg text-sm text-[#1A1A1A] placeholder-[#64748B] focus:outline-none focus:border-[#008DDA] transition-all"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-[#64748B]" />
          <select
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value); setPage(1) }}
            className="h-9 px-3 bg-[#F5F7FA] border border-[#E2E8F0] rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#008DDA]"
          >
            <option value="all">All Statuses</option>
            {Object.entries(statusConfig).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>

          <select
            value={paymentFilter}
            onChange={(e) => { setPaymentFilter(e.target.value); setPage(1) }}
            className="h-9 px-3 bg-[#F5F7FA] border border-[#E2E8F0] rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#008DDA]"
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
      <div className="bg-[#FFFFFF] rounded-xl border border-[#E2E8F0] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#F5F7FA] border-b border-[#E2E8F0]">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Order</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Customer</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Date</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Items</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Total</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Payment</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Status</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-12 text-center text-sm text-[#64748B]">
                    No orders match your filters.
                  </td>
                </tr>
              ) : paginated.map((order) => {
                const status = statusConfig[order.orderStatus]
                const payment = paymentConfig[order.paymentStatus]
                const StatusIcon = status.icon
                return (
                  <tr key={order.id} className="hover:bg-[#F5F7FA] transition-colors">
                    <td className="px-4 py-3.5">
                      <span className="font-mono text-xs font-bold text-[#1A1A1A]">{order.orderNumber}</span>
                    </td>
                    <td className="px-4 py-3.5">
                      <p className="font-semibold text-[#1A1A1A] text-xs">{order.customerName}</p>
                      <p className="text-[11px] text-[#64748B]">{order.customerEmail}</p>
                    </td>
                    <td className="px-4 py-3.5 text-xs text-[#64748B]">{formatDate(order.createdAt)}</td>
                    <td className="px-4 py-3.5 text-right text-xs text-[#64748B]">{order.items.length}</td>
                    <td className="px-4 py-3.5 text-right font-semibold text-[#1A1A1A] text-xs">{formatCurrency(order.total)}</td>
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
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#008DDA] hover:text-[#1A1A1A] transition-colors"
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
          <div className="px-4 py-3 border-t border-[#E2E8F0] flex items-center justify-between">
            <span className="text-xs text-[#64748B]">
              Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, total)} of {total}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-1.5 rounded-lg border border-[#E2E8F0] text-[#64748B] hover:bg-[#F5F7FA] disabled:opacity-40"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <span className="text-xs text-[#1A1A1A] font-semibold">{page} / {totalPages}</span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="p-1.5 rounded-lg border border-[#E2E8F0] text-[#64748B] hover:bg-[#F5F7FA] disabled:opacity-40"
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
