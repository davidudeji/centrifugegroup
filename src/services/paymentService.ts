// Payment Service Abstraction
// Supports pluggable providers (Paystack, Flutterwave, Stripe, Bank Transfer, etc.)

export interface PaymentIntentOptions {
  amount: number
  currency: string
  customerEmail: string
  customerName: string
  orderId?: string
  metadata?: Record<string, unknown>
}

export interface PaymentResult {
  success: boolean
  transactionReference: string
  paymentMethod: string
  message: string
}

export interface PaymentGateway {
  name: string
  processPayment: (options: PaymentIntentOptions) => Promise<PaymentResult>
}

class SimulatedGateway implements PaymentGateway {
  name = 'Paystack / Direct Gateway'

  async processPayment(options: PaymentIntentOptions): Promise<PaymentResult> {
    // Simulate real gateway response delay
    await new Promise((resolve) => setTimeout(resolve, 800))
    const ref = `pstk_ref_${Date.now()}_${Math.floor(Math.random() * 10000)}`
    return {
      success: true,
      transactionReference: ref,
      paymentMethod: 'Instant Transfer & Debit Card',
      message: `Payment of ₦${options.amount.toLocaleString()} processed successfully via ${this.name}.`,
    }
  }
}

class PaymentServiceClass {
  private activeGateway: PaymentGateway = new SimulatedGateway()

  setGateway(gateway: PaymentGateway) {
    this.activeGateway = gateway
  }

  async processPayment(options: PaymentIntentOptions): Promise<PaymentResult> {
    return this.activeGateway.processPayment(options)
  }
}

export const paymentService = new PaymentServiceClass()
