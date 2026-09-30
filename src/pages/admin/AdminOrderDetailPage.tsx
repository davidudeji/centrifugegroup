import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { mockOrders } from '../../data/mockData'
import type { OrderStatus } from '../../types'
import {
  ArrowLeft,
  Package,
  MapPin,
  CreditCard,
  Clock,
  Truck,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Loader2,
  Printer,
  MessageSquare,
} from 'lucide-react'

const statusConfig: Record<OrderStatus, { label: string; color: string; icon: React.FC<{ className?: string }> }> = {
  pending:    { label: 'Pending',    color: 'bg-[#D97706]/10 text-[#D97706] border-[#D97706]/20',    icon: Clock },
  processing: { label: 'Processing', color: 'bg-[#f0b66d]/10 text-[#f0b66d] border-[#f0b66d]/20',    icon: Loader2 },
  shipped:    { label: 'Shipped',    color: 'bg-[#000000]/10 text-[#faf9f6] border-[#1e1e1d]/20',    icon: Truck },
  delivered:  { label: 'Delivered',  color: 'bg-[#16A34A]/10 text-[#16A34A] border-[#16A34A]/20',    icon: CheckCircle2 },
  cancelled:  { label: 'Cancelled',  color: 'bg-[#DC2626]/10 text-[#DC2626] border-[#DC2626]/20',    icon: XCircle },
  refunded:   { label: 'Refunded',   color: 'bg-[#64748B]/10 text-[#868684] border-[#64748B]/20',    icon: RotateCcw },
}

export const AdminOrderDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const order = mockOrders.find((o) => o.id === id)

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(amount)

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <p className="text-[#868684] text-sm">Order not found.</p>
        <Link to="/admin/orders" className="text-[#f0b66d] text-sm font-semibold">← Back to orders</Link>
      </div>
    )
  }

  const status = statusConfig[order.orderStatus]
  const StatusIcon = status.icon

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg border border-[#333333] text-[#868684] hover:bg-[#000000] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div className="flex-1">
          <h1 className="font-heading font-bold text-xl text-[#faf9f6]">{order.orderNumber}</h1>
          <p className="text-xs text-[#868684]">Placed {formatDate(order.createdAt)}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${status.color}`}>
            <StatusIcon className="h-3.5 w-3.5" />
            {status.label}
          </span>
          <button className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold border border-[#333333] rounded-lg hover:bg-[#000000]">
            <Printer className="h-3.5 w-3.5" />
            Print
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Products */}
          <div className="bg-[#121212] rounded-xl border border-[#333333] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-[#333333]">
              <Package className="h-4 w-4 text-[#868684]" />
              <h2 className="font-heading font-bold text-sm text-[#faf9f6]">Order Items</h2>
            </div>
            <div className="divide-y divide-[#333333]">
              {order.items.map((item) => (
                <div key={item.productId} className="flex items-center gap-4 px-5 py-4">
                  <div className="h-14 w-14 rounded-lg bg-[#000000] border border-[#333333] flex items-center justify-center overflow-hidden shrink-0">
                    {item.productImage ? (
                      <img src={item.productImage} alt={item.productName} className="h-full w-full object-cover" />
                    ) : (
                      <Package className="h-6 w-6 text-[#868684]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-[#faf9f6] truncate">{item.productName}</p>
                    <p className="text-xs text-[#868684] font-mono">{item.sku}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-[#868684]">{formatCurrency(item.price)} × {item.quantity}</p>
                    <p className="font-bold text-sm text-[#faf9f6]">{formatCurrency(item.total)}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Pricing summary */}
            <div className="px-5 py-4 border-t border-[#333333] space-y-2">
              {[
                { label: 'Subtotal', value: order.subtotal },
                { label: 'Shipping', value: order.shipping },
                { label: 'Tax', value: order.tax },
                ...(order.discount > 0 ? [{ label: 'Discount', value: -order.discount }] : []),
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-xs text-[#868684]">
                  <span>{label}</span>
                  <span className={value < 0 ? 'text-[#16A34A]' : ''}>{formatCurrency(Math.abs(value))}</span>
                </div>
              ))}
              <div className="flex justify-between font-bold text-sm text-[#faf9f6] pt-2 border-t border-[#333333]">
                <span>Total</span>
                <span>{formatCurrency(order.total)}</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-[#121212] rounded-xl border border-[#333333] p-5">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="h-4 w-4 text-[#868684]" />
              <h2 className="font-heading font-bold text-sm text-[#faf9f6]">Internal Notes</h2>
            </div>
            {order.notes ? (
              <p className="text-sm text-[#868684]">{order.notes}</p>
            ) : (
              <p className="text-xs text-[#868684] italic">No notes added.</p>
            )}
            <button className="mt-4 text-xs text-[#f0b66d] font-semibold hover:underline">+ Add note</button>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Customer */}
          <div className="bg-[#121212] rounded-xl border border-[#333333] p-5">
            <h2 className="font-heading font-bold text-sm text-[#faf9f6] mb-4">Customer</h2>
            <p className="font-semibold text-sm text-[#faf9f6]">{order.customerName}</p>
            <p className="text-xs text-[#868684]">{order.customerEmail}</p>
          </div>

          {/* Shipping */}
          <div className="bg-[#121212] rounded-xl border border-[#333333] p-5">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-4 w-4 text-[#868684]" />
              <h2 className="font-heading font-bold text-sm text-[#faf9f6]">Shipping Address</h2>
            </div>
            <div className="text-xs text-[#868684] space-y-0.5">
              <p className="font-semibold text-[#faf9f6]">{order.shippingAddress.fullName}</p>
              <p>{order.shippingAddress.addressLine1}</p>
              {order.shippingAddress.addressLine2 && <p>{order.shippingAddress.addressLine2}</p>}
              <p>{order.shippingAddress.city}, {order.shippingAddress.state}</p>
              <p>{order.shippingAddress.country}</p>
              <p className="pt-1">{order.shippingAddress.phone}</p>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-[#121212] rounded-xl border border-[#333333] p-5">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="h-4 w-4 text-[#868684]" />
              <h2 className="font-heading font-bold text-sm text-[#faf9f6]">Payment</h2>
            </div>
            <p className="text-xs font-semibold text-[#faf9f6]">{order.paymentMethod}</p>
            <p className={`text-xs font-bold mt-1 ${order.paymentStatus === 'paid' ? 'text-[#16A34A]' : 'text-[#D97706]'}`}>
              {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
            </p>
          </div>

          {/* Update Status */}
          <div className="bg-[#121212] rounded-xl border border-[#333333] p-5">
            <h2 className="font-heading font-bold text-sm text-[#faf9f6] mb-4">Update Status</h2>
            <select className="w-full h-9 px-3 bg-[#000000] border border-[#333333] rounded-lg text-sm text-[#faf9f6] focus:outline-none focus:border-[#f0b66d]"
              defaultValue={order.orderStatus}
            >
              {Object.entries(statusConfig).map(([k, v]) => (
                <option key={k} value={k}>{v.label}</option>
              ))}
            </select>
            <button className="mt-3 w-full h-9 bg-[#000000] text-white rounded-lg text-xs font-bold hover:bg-[#000000] transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminOrderDetailPage
