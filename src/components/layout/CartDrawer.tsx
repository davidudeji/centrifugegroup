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
        className="fixed inset-0 bg-[#000000]/80 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#000000] border-l border-[#1e1e1d] flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#1e1e1d] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-4.5 w-4.5 text-[#f0b66d]" />
              <h2 className="text-[16px] font-semibold text-[#faf9f6] tracking-[-0.18px]">
                Hardware Cart ({items.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-[4px] text-[#868684] hover:text-[#faf9f6] hover:bg-[#121212] transition-colors"
              aria-label="Close cart"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-[#1e1e1d]">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="h-14 w-14 rounded-full bg-[#121212] border border-[#333333] flex items-center justify-center text-[#f0b66d] mb-4">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <h3 className="text-[14px] font-semibold text-[#faf9f6]">Your cart is empty</h3>
                <p className="mt-1 text-[13px] text-[#868684] max-w-xs">
                  Explore our pure sine wave inverters, online UPS systems, and telemetry sensors.
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
                    Browse Hardware Store
                  </Button>
                </div>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.product.id} className="py-4 flex gap-4">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="h-16 w-16 object-cover rounded-[7px] border border-[#1e1e1d] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[13px] font-medium text-[#faf9f6] line-clamp-2">
                      {item.product.name}
                    </h4>
                    <p className="text-[10px] font-mono text-[#868684] mt-0.5">
                      SKU: {item.product.sku}
                    </p>
                    <div className="mt-1 font-mono font-semibold text-[13px] text-[#faf9f6]">
                      ₦{item.product.price.toLocaleString()}
                    </div>

                    <div className="mt-2.5 flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#333333] rounded-[7px] bg-[#121212]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:bg-[#1e1e1d] text-[#868684] transition-colors rounded-l-[6px]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-2 text-[12px] font-mono text-[#faf9f6]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-[#1e1e1d] text-[#868684] transition-colors rounded-r-[6px]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-[#868684] hover:text-[#ef4444] transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#1e1e1d] bg-[#121212] space-y-3">
              <div className="flex items-center justify-between text-[13px] text-[#868684]">
                <span>Estimated Subtotal</span>
                <span className="font-mono font-bold text-[15px] text-[#faf9f6]">
                  ₦{subtotal.toLocaleString()}
                </span>
              </div>
              <p className="text-[11px] text-[#666469]">
                Taxes, freight calculation, and official invoice generated at checkout.
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
