import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { useCartStore } from '../../stores/cartStore'
import { useUIStore } from '../../stores/uiStore'
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Tag } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'

export const CartPage: React.FC = () => {
  const { items, updateQuantity, removeItem, clearCart, getSubtotal } = useCartStore()
  const { addToast } = useUIStore()
  const navigate = useNavigate()

  const [discountCode, setDiscountCode] = useState('')
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0)

  const subtotal = getSubtotal()
  const tax = Math.round(subtotal * 0.075) // 7.5% Nigerian VAT
  const shipping = subtotal > 2000000 || subtotal === 0 ? 0 : 25000
  const total = Math.max(0, subtotal + tax + shipping - appliedDiscount)

  const handleApplyDiscount = (e: React.FormEvent) => {
    e.preventDefault()
    if (discountCode.trim().toUpperCase() === 'CENTRIFUGE10') {
      const discount = Math.min(100000, Math.round(subtotal * 0.1))
      setAppliedDiscount(discount)
      addToast({
        title: 'Discount Applied',
        description: '10% discount has been applied to your subtotal.',
        type: 'success',
      })
    } else {
      addToast({
        title: 'Invalid Discount Code',
        description: 'Try CENTRIFUGE10 for 10% off eligible hardware.',
        type: 'error',
      })
    }
  }

  if (items.length === 0) {
    return (
      <div className="py-28 max-w-xl mx-auto px-4 text-center space-y-4">
        <SEO title="Your Hardware Cart | Centrifuge Store" />
        <div className="h-18 w-18 rounded-full bg-[#FFFFFF] flex items-center justify-center text-[#64748B] mx-auto mb-2">
          <ShoppingBag className="h-9 w-9" />
        </div>
        <h2 className="text-2xl font-bold text-[#1A1A1A] font-heading">
          Your cart is currently empty
        </h2>
        <p className="text-sm text-[#64748B]">
          Explore our pure sine wave hybrid inverters, modular server room UPS units, and solar charge controllers.
        </p>
        <div className="pt-2">
          <Link to="/shop">
            <Button variant="primary" size="md">
              Browse Hardware Store
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full text-left py-12 bg-[#F5F7FA]">
      <SEO title="Shopping Cart | Centrifuge Group" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-6 border-b border-[#E2E8F0]">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] font-heading">
            Hardware Order Cart ({items.reduce((s, i) => s + i.quantity, 0)} items)
          </h1>
          <button
            onClick={clearCart}
            className="text-xs text-[#EF4444] hover:underline font-semibold"
          >
            Clear Entire Cart
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Items Table / Cards */}
          <div className="lg:col-span-8 bg-[#FFFFFF] rounded-[16px] border border-[#E2E8F0] overflow-hidden divide-y divide-[#E2E8F0]">
            {items.map((item) => (
              <div key={item.product.id} className="p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
                <div className="flex gap-4 items-center">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="h-20 w-20 object-contain rounded-[8px] border border-[#E2E8F0] p-1 bg-[#F5F7FA] shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-mono text-[#64748B] block">
                      {item.product.brand} · SKU: {item.product.sku}
                    </span>
                    <Link
                      to={`/shop/product/${item.product.slug}`}
                      className="text-sm font-bold text-[#1A1A1A] hover:text-[#008DDA] transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <div className="text-xs font-semibold text-[#1A1A1A] mt-1">
                      ₦{item.product.price.toLocaleString()} each
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-0 border-[#E2E8F0]/60">
                  {/* Quantity Control */}
                  <div className="flex items-center border border-[#E2E8F0] rounded-[6px] bg-[#FFFFFF]">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1.5 hover:bg-[#F5F7FA] text-[#64748B] transition-colors rounded-l-[5px]"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="px-3 text-xs font-bold text-[#1A1A1A]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1.5 hover:bg-[#F5F7FA] text-[#64748B] transition-colors rounded-r-[5px]"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div className="text-sm font-bold text-[#1A1A1A] font-heading min-w-[100px] text-right">
                    ₦{(item.product.price * item.quantity).toLocaleString()}
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="p-1 text-[#64748B] hover:text-[#EF4444] transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Column */}
          <div className="lg:col-span-4 bg-[#FFFFFF] rounded-[16px] border border-[#E2E8F0] p-6 space-y-6">
            <h3 className="text-base font-bold text-[#1A1A1A] font-heading">
              Order Summary
            </h3>

            {/* Discount Code Input */}
            <form onSubmit={handleApplyDiscount} className="flex gap-2">
              <Input
                placeholder="Discount code (try CENTRIFUGE10)"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <Button type="submit" variant="secondary" size="md">
                Apply
              </Button>
            </form>

            <div className="space-y-3 text-xs border-t border-[#E2E8F0] pt-4">
              <div className="flex justify-between text-[#64748B]">
                <span>Items Subtotal</span>
                <span className="font-semibold text-[#1A1A1A]">₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#64748B]">
                <span>Estimated Freight Shipping</span>
                <span className="font-semibold text-[#1A1A1A]">
                  {shipping === 0 ? <span className="text-[#10B981]">Free Shipping</span> : `₦${shipping.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between text-[#64748B]">
                <span>Statutory 7.5% VAT</span>
                <span className="font-semibold text-[#1A1A1A]">₦{tax.toLocaleString()}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-[#10B981]">
                  <span>Applied Promotional Discount</span>
                  <span className="font-semibold">-₦{appliedDiscount.toLocaleString()}</span>
                </div>
              )}

              <div className="pt-3 border-t border-[#E2E8F0] flex justify-between items-baseline">
                <span className="text-sm font-bold text-[#1A1A1A]">Total Payable</span>
                <span className="text-xl font-extrabold text-[#1A1A1A] font-heading">
                  ₦{total.toLocaleString()}
                </span>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => navigate('/checkout')}
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Proceed to Checkout
            </Button>

            <div className="pt-2 text-[11px] text-[#64748B] flex items-center justify-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#10B981]" />
              <span>Secured checkout via Paystack / Direct Transfer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartPage
