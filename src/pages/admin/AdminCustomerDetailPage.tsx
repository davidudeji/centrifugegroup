import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { mockCustomers, mockOrders } from '../../data/mockData'
import { ArrowLeft, Mail, Phone, MapPin, ShoppingBag, Calendar } from 'lucide-react'

export const AdminCustomerDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const customer = mockCustomers.find((c) => c.id === id)
  const customerOrders = mockOrders.filter((o) => o.customerId === id)

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(amount)

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })

  if (!customer) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <p className="text-[#868684] text-sm">Customer not found.</p>
        <Link to="/admin/customers" className="text-[#f0b66d] text-sm font-semibold">← Back to customers</Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 rounded-lg border border-[#333333] text-[#868684] hover:bg-[#000000]">
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-3 flex-1">
          <div className="h-12 w-12 rounded-full bg-[#000000] text-white flex items-center justify-center font-bold text-lg font-heading">
            {customer.name.charAt(0)}
          </div>
          <div>
            <h1 className="font-heading font-bold text-xl text-[#faf9f6]">{customer.name}</h1>
            <p className="text-xs text-[#868684]">Customer since {formatDate(customer.createdAt)}</p>
          </div>
        </div>
        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold border ${
          customer.status === 'active'
            ? 'bg-[#16A34A]/10 text-[#16A34A] border-[#16A34A]/20'
            : 'bg-[#94A3B8]/10 text-[#868684] border-[#94A3B8]/20'
        }`}>
          {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left — Profile */}
        <div className="space-y-5">
          {/* Contact info */}
          <div className="bg-[#121212] rounded-xl border border-[#333333] p-5 space-y-4">
            <h2 className="font-heading font-bold text-sm text-[#faf9f6]">Contact Information</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs">
                <Mail className="h-4 w-4 text-[#868684] shrink-0" />
                <span className="text-[#faf9f6]">{customer.email}</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <Phone className="h-4 w-4 text-[#868684] shrink-0" />
                <span className="text-[#faf9f6]">{customer.phone}</span>
              </div>
              <div className="flex items-start gap-3 text-xs">
                <Calendar className="h-4 w-4 text-[#868684] shrink-0 mt-0.5" />
                <span className="text-[#faf9f6]">Joined {formatDate(customer.createdAt)}</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-[#121212] rounded-xl border border-[#333333] p-5">
            <h2 className="font-heading font-bold text-sm text-[#faf9f6] mb-4">Summary</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#000000] rounded-lg p-3 text-center">
                <p className="font-bold text-lg text-[#faf9f6]">{customer.ordersCount}</p>
                <p className="text-[11px] text-[#868684]">Orders</p>
              </div>
              <div className="bg-[#000000] rounded-lg p-3 text-center">
                <p className="font-bold text-sm text-[#faf9f6]">{formatCurrency(customer.totalSpent)}</p>
                <p className="text-[11px] text-[#868684]">Total Spent</p>
              </div>
            </div>
          </div>

          {/* Addresses */}
          {customer.addresses.length > 0 && (
            <div className="bg-[#121212] rounded-xl border border-[#333333] p-5">
              <h2 className="font-heading font-bold text-sm text-[#faf9f6] mb-4">Addresses</h2>
              {customer.addresses.map((addr, idx) => (
                <div key={idx} className="bg-[#000000] rounded-lg p-3 text-xs text-[#868684] space-y-0.5">
                  <div className="flex items-center gap-1.5 mb-1">
                    <MapPin className="h-3 w-3 text-[#f0b66d]" />
                    <span className="font-semibold text-[#faf9f6]">{addr.fullName}</span>
                  </div>
                  <p>{addr.addressLine1}</p>
                  <p>{addr.city}, {addr.state}, {addr.country}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right — Orders */}
        <div className="lg:col-span-2">
          <div className="bg-[#121212] rounded-xl border border-[#333333] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-[#333333]">
              <ShoppingBag className="h-4 w-4 text-[#868684]" />
              <h2 className="font-heading font-bold text-sm text-[#faf9f6]">Order History</h2>
              <span className="ml-auto text-xs text-[#868684]">{customerOrders.length} orders</span>
            </div>
            {customerOrders.length === 0 ? (
              <div className="py-12 text-center text-sm text-[#868684]">No orders found for this customer.</div>
            ) : (
              <div className="divide-y divide-[#333333]">
                {customerOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between px-5 py-3.5 hover:bg-[#000000] transition-colors">
                    <div>
                      <p className="font-mono text-xs font-bold text-[#faf9f6]">{order.orderNumber}</p>
                      <p className="text-[11px] text-[#868684]">{formatDate(order.createdAt)} · {order.items.length} item(s)</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
                        order.orderStatus === 'delivered' ? 'bg-[#16A34A]/10 text-[#16A34A] border-[#16A34A]/20' :
                        order.orderStatus === 'cancelled' ? 'bg-[#DC2626]/10 text-[#DC2626] border-[#DC2626]/20' :
                        'bg-[#D97706]/10 text-[#D97706] border-[#D97706]/20'
                      }`}>
                        {order.orderStatus}
                      </span>
                      <span className="text-xs font-bold text-[#faf9f6]">{formatCurrency(order.total)}</span>
                      <Link to={`/admin/orders/${order.id}`} className="text-xs text-[#f0b66d] font-semibold hover:underline">
                        View →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminCustomerDetailPage
