import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCartStore } from '../../stores/cartStore'
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react'
import { Button } from '../ui/Button'

export const CartDrawer: React.FC = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, getSubtotal } = useCartStore()
  const navigate = useNavigate()
  const subtotal = getSubtotal()

  if (!isOpen) return null

  const handleCheckout = () => {
    setIsOpen(false)
    navigate('/checkout')
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0F2C59]/40 backdrop-blur-xs transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFFFF] border-l border-[#E2E8F0] flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#E2E8F0] flex items-center justify-between bg-[#FFFFFF]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-[#008DDA]" />
              <h2 className="text-[16px] font-bold text-[#0F2C59]">
                Hardware Procurement ({items.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-[4px] text-[#64748B] hover:text-[#0F2C59] hover:bg-[#F1F5F9] transition-colors"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-[#E2E8F0] bg-[#FFFFFF]">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="h-14 w-14 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center text-[#008DDA] mb-4">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <h3 className="text-[15px] font-bold text-[#0F2C59]">Your cart is empty</h3>
                <p className="mt-1 text-xs text-[#64748B] max-w-xs">
                  Explore our pure sine wave inverters, online double-conversion UPS systems, and telemetry sensors.
                </p>
                <div className="mt-5">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      setIsOpen(false)
                      navigate('/shop')
                    }}
                  >
                    Browse Hardware Catalog
                  </Button>
                </div>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.product.id} className="py-4 flex gap-4">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="h-16 w-16 object-cover rounded-[4px] border border-[#E2E8F0] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[13px] font-semibold text-[#1A1A1A] line-clamp-2">
                      {item.product.name}
                    </h4>
                    <p className="text-[10px] font-mono text-[#64748B] mt-0.5">
                      SKU: {item.product.sku}
                    </p>
                    <div className="mt-1 font-mono font-bold text-[13px] text-[#0F2C59]">
                      ₦{item.product.price.toLocaleString()}
                    </div>

                    <div className="mt-2.5 flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#E2E8F0] rounded-[4px] bg-[#F8FAFC]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:bg-[#E2E8F0] text-[#64748B] transition-colors rounded-l-[3px]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-2 text-xs font-mono font-semibold text-[#1A1A1A]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-[#E2E8F0] text-[#64748B] transition-colors rounded-r-[3px]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-[#64748B] hover:text-[#EF4444] transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#E2E8F0] bg-[#F8FAFC] space-y-3">
              <div className="flex items-center justify-between text-xs text-[#64748B]">
                <span>Estimated Subtotal</span>
                <span className="font-mono font-bold text-base text-[#0F2C59]">
                  ₦{subtotal.toLocaleString()}
                </span>
              </div>
              <p className="text-[11px] text-[#94A3B8]">
                Taxes, commercial freight computation, and official VAT invoice generated at checkout.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => {
                    setIsOpen(false)
                    navigate('/cart')
                  }}
                >
                  View Full Cart
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleCheckout}
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Checkout
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default CartDrawer
