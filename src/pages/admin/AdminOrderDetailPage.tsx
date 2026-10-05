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
  processing: { label: 'Processing', color: 'bg-[#008DDA]/10 text-[#008DDA] border-[#008DDA]/20',    icon: Loader2 },
  shipped:    { label: 'Shipped',    color: 'bg-[#F5F7FA]/10 text-[#1A1A1A] border-[#F5F7FA]/20',    icon: Truck },
  delivered:  { label: 'Delivered',  color: 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20',    icon: CheckCircle2 },
  cancelled:  { label: 'Cancelled',  color: 'bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/20',    icon: XCircle },
  refunded:   { label: 'Refunded',   color: 'bg-[#64748B]/10 text-[#64748B] border-[#64748B]/20',    icon: RotateCcw },
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
        <p className="text-[#64748B] text-sm">Order not found.</p>
        <Link to="/admin/orders" className="text-[#008DDA] text-sm font-semibold">← Back to orders</Link>
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
          className="p-2 rounded-lg border border-[#E2E8F0] text-[#64748B] hover:bg-[#F5F7FA] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div className="flex-1">
          <h1 className="font-heading font-bold text-xl text-[#1A1A1A]">{order.orderNumber}</h1>
          <p className="text-xs text-[#64748B]">Placed {formatDate(order.createdAt)}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${status.color}`}>
            <StatusIcon className="h-3.5 w-3.5" />
            {status.label}
          </span>
          <button className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold border border-[#E2E8F0] rounded-lg hover:bg-[#F5F7FA]">
            <Printer className="h-3.5 w-3.5" />
            Print
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Products */}
          <div className="bg-[#FFFFFF] rounded-xl border border-[#E2E8F0] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-[#E2E8F0]">
              <Package className="h-4 w-4 text-[#64748B]" />
              <h2 className="font-heading font-bold text-sm text-[#1A1A1A]">Order Items</h2>
            </div>
            <div className="divide-y divide-[#E2E8F0]">
              {order.items.map((item) => (
                <div key={item.productId} className="flex items-center gap-4 px-5 py-4">
                  <div className="h-14 w-14 rounded-lg bg-[#F5F7FA] border border-[#E2E8F0] flex items-center justify-center overflow-hidden shrink-0">
                    {item.productImage ? (
                      <img src={item.productImage} alt={item.productName} className="h-full w-full object-cover" />
                    ) : (
                      <Package className="h-6 w-6 text-[#64748B]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-[#1A1A1A] truncate">{item.productName}</p>
                    <p className="text-xs text-[#64748B] font-mono">{item.sku}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-[#64748B]">{formatCurrency(item.price)} × {item.quantity}</p>
                    <p className="font-bold text-sm text-[#1A1A1A]">{formatCurrency(item.total)}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Pricing summary */}
            <div className="px-5 py-4 border-t border-[#E2E8F0] space-y-2">
              {[
                { label: 'Subtotal', value: order.subtotal },
                { label: 'Shipping', value: order.shipping },
                { label: 'Tax', value: order.tax },
                ...(order.discount > 0 ? [{ label: 'Discount', value: -order.discount }] : []),
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-xs text-[#64748B]">
                  <span>{label}</span>
                  <span className={value < 0 ? 'text-[#10B981]' : ''}>{formatCurrency(Math.abs(value))}</span>
                </div>
              ))}
              <div className="flex justify-between font-bold text-sm text-[#1A1A1A] pt-2 border-t border-[#E2E8F0]">
                <span>Total</span>
                <span>{formatCurrency(order.total)}</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-[#FFFFFF] rounded-xl border border-[#E2E8F0] p-5">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="h-4 w-4 text-[#64748B]" />
              <h2 className="font-heading font-bold text-sm text-[#1A1A1A]">Internal Notes</h2>
            </div>
            {order.notes ? (
              <p className="text-sm text-[#64748B]">{order.notes}</p>
            ) : (
              <p className="text-xs text-[#64748B] italic">No notes added.</p>
            )}
            <button className="mt-4 text-xs text-[#008DDA] font-semibold hover:underline">+ Add note</button>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Customer */}
          <div className="bg-[#FFFFFF] rounded-xl border border-[#E2E8F0] p-5">
            <h2 className="font-heading font-bold text-sm text-[#1A1A1A] mb-4">Customer</h2>
            <p className="font-semibold text-sm text-[#1A1A1A]">{order.customerName}</p>
            <p className="text-xs text-[#64748B]">{order.customerEmail}</p>
          </div>

          {/* Shipping */}
          <div className="bg-[#FFFFFF] rounded-xl border border-[#E2E8F0] p-5">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-4 w-4 text-[#64748B]" />
              <h2 className="font-heading font-bold text-sm text-[#1A1A1A]">Shipping Address</h2>
            </div>
            <div className="text-xs text-[#64748B] space-y-0.5">
              <p className="font-semibold text-[#1A1A1A]">{order.shippingAddress.fullName}</p>
              <p>{order.shippingAddress.addressLine1}</p>
              {order.shippingAddress.addressLine2 && <p>{order.shippingAddress.addressLine2}</p>}
              <p>{order.shippingAddress.city}, {order.shippingAddress.state}</p>
              <p>{order.shippingAddress.country}</p>
              <p className="pt-1">{order.shippingAddress.phone}</p>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-[#FFFFFF] rounded-xl border border-[#E2E8F0] p-5">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="h-4 w-4 text-[#64748B]" />
              <h2 className="font-heading font-bold text-sm text-[#1A1A1A]">Payment</h2>
            </div>
            <p className="text-xs font-semibold text-[#1A1A1A]">{order.paymentMethod}</p>
            <p className={`text-xs font-bold mt-1 ${order.paymentStatus === 'paid' ? 'text-[#10B981]' : 'text-[#D97706]'}`}>
              {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
            </p>
          </div>

          {/* Update Status */}
          <div className="bg-[#FFFFFF] rounded-xl border border-[#E2E8F0] p-5">
            <h2 className="font-heading font-bold text-sm text-[#1A1A1A] mb-4">Update Status</h2>
            <select className="w-full h-9 px-3 bg-[#F5F7FA] border border-[#E2E8F0] rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#008DDA]"
              defaultValue={order.orderStatus}
            >
              {Object.entries(statusConfig).map(([k, v]) => (
                <option key={k} value={k}>{v.label}</option>
              ))}
            </select>
            <button className="mt-3 w-full h-9 bg-[#008DDA] text-white rounded-lg text-xs font-bold hover:bg-[#0077B6] transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminOrderDetailPage
