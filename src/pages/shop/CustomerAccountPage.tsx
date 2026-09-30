import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { orderService } from '../../services/orderService'
import { useAuthStore } from '../../stores/authStore'
import type { Order } from '../../types'
import {
  User,
  ShoppingBag,
  MapPin,
  Shield,
  Clock,
  CheckCircle2,
  ExternalLink,
  LogOut,
  Package,
} from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'

export const CustomerAccountPage: React.FC = () => {
  const { user, logout } = useAuthStore()
  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'addresses' | 'security'>('orders')
  const [orders, setOrders] = useState<Order[]>([])
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    orderService.getOrders().then((data) => {
      setOrders(data)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className="w-full text-left py-12 bg-[#000000]">
      <SEO title="Customer Account | Centrifuge Group Store" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Account Header */}
        <div className="bg-[#121212] p-6 sm:p-8 rounded-[16px] border border-[#333333] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-[#000000] text-[#f0b66d] flex items-center justify-center font-bold text-xl font-heading shrink-0">
              {user?.name ? user.name.charAt(0) : 'A'}
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#faf9f6] font-heading">
                {user?.name || 'Amina Bello (Apex Logistics)'}
              </h1>
              <p className="text-xs text-[#868684] mt-0.5">
                {user?.email || 'amina.bello@apexlogistics.ng'} · Verified Enterprise Customer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/admin">
              <Button variant="secondary" size="sm">
                Switch to Admin Portal
              </Button>
            </Link>
            <Button variant="outline" size="sm" onClick={logout} leftIcon={<LogOut className="h-3.5 w-3.5" />}>
              Sign Out
            </Button>
          </div>
        </div>

        {/* Account Navigation Tabs */}
        <div className="flex gap-2 border-b border-[#333333] pb-3">
          {[
            { id: 'orders', label: 'Order History', icon: Package },
            { id: 'profile', label: 'Profile Settings', icon: User },
            { id: 'addresses', label: 'Saved Addresses', icon: MapPin },
            { id: 'security', label: 'Security & Sessions', icon: Shield },
          ].map((t) => {
            const Icon = t.icon
            return (
              <button
                key={t.id}
                onClick={() => {
                  setActiveTab(t.id as any)
                  setSelectedOrder(null)
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-[8px] text-xs font-semibold transition-all ${
                  activeTab === t.id
                    ? 'bg-[#000000] text-white shadow-xs'
                    : 'bg-[#121212] text-[#b4b4b2] border border-[#333333] hover:bg-[#1e1e1d]'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{t.label}</span>
              </button>
            )
          })}
        </div>

        {/* Tab 1: Orders */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            {selectedOrder ? (
              // Order Detail Subview
              <div className="bg-[#121212] p-6 sm:p-8 rounded-[16px] border border-[#333333] shadow-xs space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#333333]">
                  <div>
                    <button
                      onClick={() => setSelectedOrder(null)}
                      className="text-xs font-semibold text-[#f0b66d] hover:underline mb-1 block"
                    >
                      ← Back to All Orders
                    </button>
                    <h2 className="text-lg font-bold text-[#faf9f6]">
                      Order {selectedOrder.orderNumber}
                    </h2>
                    <span className="text-xs text-[#868684]">Placed on {new Date(selectedOrder.createdAt).toLocaleDateString()}</span>
                  </div>
                  <Badge
                    variant={
                      selectedOrder.orderStatus === 'delivered'
                        ? 'success'
                        : selectedOrder.orderStatus === 'shipped'
                        ? 'info'
                        : 'warning'
                    }
                    size="md"
                    dot
                  >
                    {selectedOrder.orderStatus.toUpperCase()}
                  </Badge>
                </div>

                {/* Items */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase text-[#868684]">Purchased Items</h4>
                  <div className="divide-y divide-[#333333] border rounded-[10px]">
                    {selectedOrder.items.map((i, idx) => (
                      <div key={idx} className="p-4 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                          <img src={i.productImage} alt="" className="h-12 w-12 object-contain rounded border" />
                          <div>
                            <span className="font-semibold text-[#faf9f6] block">{i.productName}</span>
                            <span className="text-[#868684] font-mono">SKU: {i.sku} · Qty: {i.quantity}</span>
                          </div>
                        </div>
                        <span className="font-bold text-[#faf9f6]">₦{i.total.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Financial Summary */}
                <div className="p-4 bg-[#000000] rounded-[10px] space-y-2 text-xs">
                  <div className="flex justify-between text-[#868684]">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#faf9f6]">₦{selectedOrder.subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[#868684]">
                    <span>Shipping</span>
                    <span className="font-semibold text-[#faf9f6]">₦{selectedOrder.shipping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[#868684]">
                    <span>VAT</span>
                    <span className="font-semibold text-[#faf9f6]">₦{selectedOrder.tax.toLocaleString()}</span>
                  </div>
                  <div className="pt-2 border-t flex justify-between font-bold text-sm text-[#faf9f6]">
                    <span>Total Paid</span>
                    <span className="font-extrabold">₦{selectedOrder.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ) : (
              // Orders Table
              <div className="bg-[#121212] rounded-[16px] border border-[#333333] shadow-xs overflow-hidden">
                <div className="p-5 border-b border-[#333333]">
                  <h3 className="text-sm font-bold text-[#faf9f6] font-heading">
                    Past Hardware Orders ({orders.length})
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs divide-y divide-[#333333]">
                    <thead className="bg-[#000000] text-[#b4b4b2] font-bold">
                      <tr>
                        <th className="px-6 py-3.5">Order Ref</th>
                        <th className="px-6 py-3.5">Date</th>
                        <th className="px-6 py-3.5">Items</th>
                        <th className="px-6 py-3.5">Total Amount</th>
                        <th className="px-6 py-3.5">Payment</th>
                        <th className="px-6 py-3.5">Fulfillment</th>
                        <th className="px-6 py-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#333333]">
                      {orders.map((ord) => (
                        <tr key={ord.id} className="hover:bg-[#000000] transition-colors">
                          <td className="px-6 py-4 font-mono font-bold text-[#faf9f6]">
                            {ord.orderNumber}
                          </td>
                          <td className="px-6 py-4 text-[#868684]">
                            {new Date(ord.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 text-[#faf9f6]">
                            {ord.items.length} product(s)
                          </td>
                          <td className="px-6 py-4 font-bold text-[#faf9f6]">
                            ₦{ord.total.toLocaleString()}
                          </td>
                          <td className="px-6 py-4">
                            <Badge variant={ord.paymentStatus === 'paid' ? 'success' : 'warning'} size="sm">
                              {ord.paymentStatus.toUpperCase()}
                            </Badge>
                          </td>
                          <td className="px-6 py-4">
                            <Badge
                              variant={
                                ord.orderStatus === 'delivered'
                                  ? 'success'
                                  : ord.orderStatus === 'shipped'
                                  ? 'info'
                                  : 'warning'
                              }
                              size="sm"
                              dot
                            >
                              {ord.orderStatus}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedOrder(ord)}
                            >
                              Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Profile */}
        {activeTab === 'profile' && (
          <div className="bg-[#121212] p-8 rounded-[16px] border border-[#333333] shadow-xs space-y-4 max-w-xl">
            <h3 className="text-base font-bold text-[#faf9f6] font-heading">
              Personal & Company Information
            </h3>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[#868684] block">Full Name</span>
                <span className="font-semibold text-sm text-[#faf9f6]">Amina Bello</span>
              </div>
              <div>
                <span className="text-[#868684] block">Company</span>
                <span className="font-semibold text-sm text-[#faf9f6]">Apex Logistics Limited</span>
              </div>
              <div>
                <span className="text-[#868684] block">Registered Email</span>
                <span className="font-semibold text-sm text-[#faf9f6]">amina.bello@apexlogistics.ng</span>
              </div>
              <div>
                <span className="text-[#868684] block">Phone</span>
                <span className="font-semibold text-sm text-[#faf9f6]">+234 803 234 5678</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Saved Addresses */}
        {activeTab === 'addresses' && (
          <div className="bg-[#121212] p-8 rounded-[16px] border border-[#333333] shadow-xs space-y-4 max-w-xl">
            <h3 className="text-base font-bold text-[#faf9f6] font-heading">
              Primary Delivery Address
            </h3>
            <div className="p-4 rounded-[10px] bg-[#000000] border border-[#333333] text-xs space-y-1">
              <span className="font-bold text-[#faf9f6] block">Amina Bello (Warehouse Receiving)</span>
              <p className="text-[#868684]">Plot 14B Commercial Boulevard, Ikeja Industrial Estate</p>
              <p className="text-[#868684]">Ikeja, Lagos State, Nigeria (100001)</p>
              <p className="text-[#868684] pt-1">Tel: +234 803 234 5678</p>
            </div>
          </div>
        )}

        {/* Tab 4: Security */}
        {activeTab === 'security' && (
          <div className="bg-[#121212] p-8 rounded-[16px] border border-[#333333] shadow-xs space-y-4 max-w-xl">
            <h3 className="text-base font-bold text-[#faf9f6] font-heading">
              Account Security & Sessions
            </h3>
            <p className="text-xs text-[#868684]">
              Authenticated via encrypted demo credential session. Password change and two-factor authentication can be managed by account administrators.
            </p>
            <div className="pt-2">
              <Button variant="outline" size="sm">
                Request Password Reset
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default CustomerAccountPage
