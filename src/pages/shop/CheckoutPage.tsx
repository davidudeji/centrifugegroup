import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { useCartStore } from '../../stores/cartStore'
import { useUIStore } from '../../stores/uiStore'
import { orderService } from '../../services/orderService'
import { paymentService } from '../../services/paymentService'
import type { ShippingAddress } from '../../types'
import { CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft, CreditCard, Building, Check } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'

export const CheckoutPage: React.FC = () => {
  const { items, getSubtotal, clearCart } = useCartStore()
  const { addToast } = useUIStore()
  const navigate = useNavigate()

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1)
  const [isProcessing, setIsProcessing] = useState<boolean>(false)
  const [completedOrderNumber, setCompletedOrderNumber] = useState<string>('')

  // Form State
  const [customerInfo, setCustomerInfo] = useState({
    fullName: 'Amina Bello',
    email: 'amina.bello@apexlogistics.ng',
    phone: '+234 803 234 5678',
    company: 'Apex Logistics Ltd',
  })

  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    fullName: 'Amina Bello',
    email: 'amina.bello@apexlogistics.ng',
    phone: '+234 803 234 5678',
    addressLine1: 'Plot 14B Commercial Boulevard, Ikeja Industrial Estate',
    city: 'Ikeja',
    state: 'Lagos',
    country: 'Nigeria',
    postalCode: '100001',
  })

  const [paymentMethod, setPaymentMethod] = useState<'paystack' | 'transfer'>('paystack')

  const subtotal = getSubtotal()
  const tax = Math.round(subtotal * 0.075)
  const shipping = subtotal > 2000000 || subtotal === 0 ? 0 : 25000
  const total = subtotal + tax + shipping

  const handleProcessOrder = async () => {
    setIsProcessing(true)

    try {
      // 1. Process payment via abstracted paymentService
      const paymentResult = await paymentService.processPayment({
        amount: total,
        currency: 'NGN',
        customerEmail: customerInfo.email,
        customerName: customerInfo.fullName,
      })

      // 2. Persist order via orderService
      const order = await orderService.createOrder({
        customerId: 'cust-1',
        customerName: customerInfo.fullName,
        customerEmail: customerInfo.email,
        items: items.map((i) => ({
          productId: i.product.id,
          productName: i.product.name,
          productImage: i.product.images[0],
          sku: i.product.sku,
          price: i.product.price,
          quantity: i.quantity,
          total: i.product.price * i.quantity,
        })),
        subtotal,
        shipping,
        tax,
        discount: 0,
        total,
        paymentMethod: paymentMethod === 'paystack' ? 'Paystack / Online Card' : 'Direct Bank Wire',
        paymentStatus: paymentResult.success ? 'paid' : 'pending',
        orderStatus: 'processing',
        shippingAddress,
      })

      setCompletedOrderNumber(order.orderNumber)
      clearCart()
      setIsProcessing(false)
      setStep(4) // Order Confirmation Step
      addToast({
        title: 'Order Confirmed',
        description: `Order ${order.orderNumber} placed successfully.`,
        type: 'success',
      })
    } catch (err) {
      setIsProcessing(false)
      addToast({
        title: 'Order Processing Failed',
        description: 'Unable to process checkout. Please try again.',
        type: 'error',
      })
    }
  }

  if (items.length === 0 && step !== 4) {
    return (
      <div className="py-24 text-center space-y-4">
        <h2 className="text-xl font-bold text-[#111827]">Your cart is empty</h2>
        <Link to="/shop">
          <Button variant="primary" size="sm">Go to Hardware Store</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="w-full text-left py-12 bg-[#F8FAFC]">
      <SEO title="Secure Checkout | Centrifuge Group Store" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Step Indicator */}
        <div className="mb-10 flex items-center justify-between max-w-xl mx-auto text-xs">
          {[
            { num: 1, label: 'Customer' },
            { num: 2, label: 'Shipping' },
            { num: 3, label: 'Payment' },
            { num: 4, label: 'Confirmation' },
          ].map((s) => (
            <div key={s.num} className="flex items-center gap-2">
              <div
                className={`h-7 w-7 rounded-full flex items-center justify-center font-bold font-mono transition-colors ${
                  step === s.num
                    ? 'bg-[#16C7D9] text-[#071521]'
                    : step > s.num
                    ? 'bg-[#16A34A] text-white'
                    : 'bg-[#E2E8F0] text-[#64748B]'
                }`}
              >
                {step > s.num ? <Check className="h-3.5 w-3.5" /> : s.num}
              </div>
              <span className={`font-semibold hidden sm:inline ${step === s.num ? 'text-[#0B1F33]' : 'text-[#64748B]'}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Step 1: Customer Information */}
        {step === 1 && (
          <div className="bg-white p-8 rounded-[16px] border border-[#E2E8F0] shadow-xs space-y-6">
            <h2 className="text-xl font-bold text-[#0B1F33] font-heading">
              1. Customer Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Contact Full Name"
                required
                value={customerInfo.fullName}
                onChange={(e) => setCustomerInfo({ ...customerInfo, fullName: e.target.value })}
              />
              <Input
                label="Company / Enterprise Name"
                required
                value={customerInfo.company}
                onChange={(e) => setCustomerInfo({ ...customerInfo, company: e.target.value })}
              />
              <Input
                label="Work Email"
                type="email"
                required
                value={customerInfo.email}
                onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
              />
              <Input
                label="Phone Number"
                type="tel"
                required
                value={customerInfo.phone}
                onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
              />
            </div>

            <div className="pt-4 flex justify-between items-center border-t border-[#E2E8F0]">
              <Link to="/cart" className="text-xs text-[#64748B] hover:text-[#111827]">
                ← Return to Cart
              </Link>
              <Button
                variant="primary"
                size="md"
                onClick={() => setStep(2)}
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Continue to Shipping
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Shipping Destination */}
        {step === 2 && (
          <div className="bg-white p-8 rounded-[16px] border border-[#E2E8F0] shadow-xs space-y-6">
            <h2 className="text-xl font-bold text-[#0B1F33] font-heading">
              2. Delivery & Freight Destination
            </h2>

            <div className="space-y-4">
              <Input
                label="Delivery Street Address"
                required
                value={shippingAddress.addressLine1}
                onChange={(e) => setShippingAddress({ ...shippingAddress, addressLine1: e.target.value })}
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Input
                  label="City"
                  required
                  value={shippingAddress.city}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                />
                <Input
                  label="State / Region"
                  required
                  value={shippingAddress.state}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
                />
                <Input
                  label="Country"
                  required
                  disabled
                  value={shippingAddress.country}
                />
              </div>
            </div>

            <div className="pt-4 flex justify-between items-center border-t border-[#E2E8F0]">
              <Button variant="ghost" size="sm" onClick={() => setStep(1)}>
                Back to Customer Info
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={() => setStep(3)}
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Proceed to Payment
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Payment Method & Review */}
        {step === 3 && (
          <div className="bg-white p-8 rounded-[16px] border border-[#E2E8F0] shadow-xs space-y-6">
            <h2 className="text-xl font-bold text-[#0B1F33] font-heading">
              3. Payment Method & Confirmation
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                onClick={() => setPaymentMethod('paystack')}
                className={`p-4 rounded-[10px] border cursor-pointer transition-all ${
                  paymentMethod === 'paystack'
                    ? 'border-[#16C7D9] bg-[#16C7D9]/5 ring-1 ring-[#16C7D9]'
                    : 'border-[#E2E8F0] hover:border-[#CBD5E1]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-[#16C7D9]" />
                  <span className="text-sm font-bold text-[#111827]">Instant Card & Transfer (Paystack)</span>
                </div>
                <p className="text-xs text-[#64748B] mt-1">
                  Mastercard, Visa, Verve, USSD, and instant Nigerian bank account transfer.
                </p>
              </div>

              <div
                onClick={() => setPaymentMethod('transfer')}
                className={`p-4 rounded-[10px] border cursor-pointer transition-all ${
                  paymentMethod === 'transfer'
                    ? 'border-[#16C7D9] bg-[#16C7D9]/5 ring-1 ring-[#16C7D9]'
                    : 'border-[#E2E8F0] hover:border-[#CBD5E1]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-[#0B1F33]" />
                  <span className="text-sm font-bold text-[#111827]">Direct Corporate Invoice Transfer</span>
                </div>
                <p className="text-xs text-[#64748B] mt-1">
                  Generates an electronic commercial proforma invoice for corporate wire transfer.
                </p>
              </div>
            </div>

            {/* Total Review Box */}
            <div className="p-4 rounded-[10px] bg-[#F8FAFC] border border-[#E2E8F0] space-y-2 text-xs">
              <div className="flex justify-between text-[#64748B]">
                <span>Items Subtotal:</span>
                <span className="font-semibold text-[#111827]">₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#64748B]">
                <span>Freight Shipping:</span>
                <span className="font-semibold text-[#111827]">₦{shipping.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#64748B]">
                <span>VAT (7.5%):</span>
                <span className="font-semibold text-[#111827]">₦{tax.toLocaleString()}</span>
              </div>
              <div className="pt-2 border-t border-[#E2E8F0] flex justify-between items-baseline font-bold text-sm text-[#0B1F33]">
                <span>Total Amount Due:</span>
                <span className="text-lg font-extrabold text-[#0B1F33] font-heading">₦{total.toLocaleString()}</span>
              </div>
            </div>

            <div className="pt-4 flex justify-between items-center border-t border-[#E2E8F0]">
              <Button variant="ghost" size="sm" onClick={() => setStep(2)}>
                Back to Shipping
              </Button>
              <Button
                variant="primary"
                size="lg"
                isLoading={isProcessing}
                onClick={handleProcessOrder}
                rightIcon={<ShieldCheck className="h-4 w-4" />}
              >
                Authorize & Place Order
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Order Confirmation */}
        {step === 4 && (
          <div className="bg-white p-10 rounded-[18px] border border-[#E2E8F0] shadow-sm text-center space-y-6">
            <div className="h-16 w-16 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-[#16A34A] uppercase tracking-wider">
                PAYMENT AUTHORIZED & LOGGED
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] font-heading mt-1">
                Thank you for your order!
              </h2>
              <p className="text-xs font-mono text-[#64748B] mt-2">
                Order Reference: <strong className="text-[#0B1F33]">{completedOrderNumber}</strong>
              </p>
            </div>

            <div className="p-5 rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#64748B]">Customer:</span>
                <span className="font-semibold text-[#111827]">{customerInfo.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Dispatch City:</span>
                <span className="font-semibold text-[#111827]">{shippingAddress.city}, {shippingAddress.state}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Total Paid:</span>
                <span className="font-bold text-[#0B1F33]">₦{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Status:</span>
                <span className="font-semibold text-[#16A34A]">Processing in Warehouse</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-4">
              <Link to="/account">
                <Button variant="dark" size="md">
                  View in Customer Account
                </Button>
              </Link>
              <Link to="/shop">
                <Button variant="outline" size="md">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default CheckoutPage
