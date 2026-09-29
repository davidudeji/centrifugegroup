// Payment Service Abstraction
// Supports pluggable providers (Paystack, Flutterwave, Stripe, Bank Transfer, etc.)
class SimulatedGateway {
    name = 'Paystack / Direct Gateway';
    async processPayment(options) {
        // Simulate real gateway response delay
        await new Promise((resolve) => setTimeout(resolve, 800));
        const ref = `pstk_ref_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
        return {
            success: true,
            transactionReference: ref,
            paymentMethod: 'Instant Transfer & Debit Card',
            message: `Payment of ₦${options.amount.toLocaleString()} processed successfully via ${this.name}.`,
        };
    }
}
class PaymentServiceClass {
    activeGateway = new SimulatedGateway();
    setGateway(gateway) {
        this.activeGateway = gateway;
    }
    async processPayment(options) {
        return this.activeGateway.processPayment(options);
    }
}
export const paymentService = new PaymentServiceClass();
