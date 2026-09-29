import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from '../../components/ui/SEO';
import { useCartStore } from '../../stores/cartStore';
import { useUIStore } from '../../stores/uiStore';
import { orderService } from '../../services/orderService';
import { paymentService } from '../../services/paymentService';
import { CheckCircle2, ShieldCheck, ArrowRight, CreditCard, Building, Check } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
export const CheckoutPage = () => {
    const { items, getSubtotal, clearCart } = useCartStore();
    const { addToast } = useUIStore();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [isProcessing, setIsProcessing] = useState(false);
    const [completedOrderNumber, setCompletedOrderNumber] = useState('');
    // Form State
    const [customerInfo, setCustomerInfo] = useState({
        fullName: 'Amina Bello',
        email: 'amina.bello@apexlogistics.ng',
        phone: '+234 803 234 5678',
        company: 'Apex Logistics Ltd',
    });
    const [shippingAddress, setShippingAddress] = useState({
        fullName: 'Amina Bello',
        email: 'amina.bello@apexlogistics.ng',
        phone: '+234 803 234 5678',
        addressLine1: 'Plot 14B Commercial Boulevard, Ikeja Industrial Estate',
        city: 'Ikeja',
        state: 'Lagos',
        country: 'Nigeria',
        postalCode: '100001',
    });
    const [paymentMethod, setPaymentMethod] = useState('paystack');
    const subtotal = getSubtotal();
    const tax = Math.round(subtotal * 0.075);
    const shipping = subtotal > 2000000 || subtotal === 0 ? 0 : 25000;
    const total = subtotal + tax + shipping;
    const handleProcessOrder = async () => {
        setIsProcessing(true);
        try {
            // 1. Process payment via abstracted paymentService
            const paymentResult = await paymentService.processPayment({
                amount: total,
                currency: 'NGN',
                customerEmail: customerInfo.email,
                customerName: customerInfo.fullName,
            });
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
            });
            setCompletedOrderNumber(order.orderNumber);
            clearCart();
            setIsProcessing(false);
            setStep(4); // Order Confirmation Step
            addToast({
                title: 'Order Confirmed',
                description: `Order ${order.orderNumber} placed successfully.`,
                type: 'success',
            });
        }
        catch (err) {
            setIsProcessing(false);
            addToast({
                title: 'Order Processing Failed',
                description: 'Unable to process checkout. Please try again.',
                type: 'error',
            });
        }
    };
    if (items.length === 0 && step !== 4) {
        return (_jsxs("div", { className: "py-24 text-center space-y-4", children: [_jsx("h2", { className: "text-xl font-bold text-[#111827]", children: "Your cart is empty" }), _jsx(Link, { to: "/shop", children: _jsx(Button, { variant: "primary", size: "sm", children: "Go to Hardware Store" }) })] }));
    }
    return (_jsxs("div", { className: "w-full text-left py-12 bg-[#F8FAFC]", children: [_jsx(SEO, { title: "Secure Checkout | Centrifuge Group Store" }), _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("div", { className: "mb-10 flex items-center justify-between max-w-xl mx-auto text-xs", children: [
                            { num: 1, label: 'Customer' },
                            { num: 2, label: 'Shipping' },
                            { num: 3, label: 'Payment' },
                            { num: 4, label: 'Confirmation' },
                        ].map((s) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: `h-7 w-7 rounded-full flex items-center justify-center font-bold font-mono transition-colors ${step === s.num
                                        ? 'bg-[#16C7D9] text-[#071521]'
                                        : step > s.num
                                            ? 'bg-[#16A34A] text-white'
                                            : 'bg-[#E2E8F0] text-[#64748B]'}`, children: step > s.num ? _jsx(Check, { className: "h-3.5 w-3.5" }) : s.num }), _jsx("span", { className: `font-semibold hidden sm:inline ${step === s.num ? 'text-[#0B1F33]' : 'text-[#64748B]'}`, children: s.label })] }, s.num))) }), step === 1 && (_jsxs("div", { className: "bg-white p-8 rounded-[16px] border border-[#E2E8F0] shadow-xs space-y-6", children: [_jsx("h2", { className: "text-xl font-bold text-[#0B1F33] font-heading", children: "1. Customer Information" }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [_jsx(Input, { label: "Contact Full Name", required: true, value: customerInfo.fullName, onChange: (e) => setCustomerInfo({ ...customerInfo, fullName: e.target.value }) }), _jsx(Input, { label: "Company / Enterprise Name", required: true, value: customerInfo.company, onChange: (e) => setCustomerInfo({ ...customerInfo, company: e.target.value }) }), _jsx(Input, { label: "Work Email", type: "email", required: true, value: customerInfo.email, onChange: (e) => setCustomerInfo({ ...customerInfo, email: e.target.value }) }), _jsx(Input, { label: "Phone Number", type: "tel", required: true, value: customerInfo.phone, onChange: (e) => setCustomerInfo({ ...customerInfo, phone: e.target.value }) })] }), _jsxs("div", { className: "pt-4 flex justify-between items-center border-t border-[#E2E8F0]", children: [_jsx(Link, { to: "/cart", className: "text-xs text-[#64748B] hover:text-[#111827]", children: "\u2190 Return to Cart" }), _jsx(Button, { variant: "primary", size: "md", onClick: () => setStep(2), rightIcon: _jsx(ArrowRight, { className: "h-4 w-4" }), children: "Continue to Shipping" })] })] })), step === 2 && (_jsxs("div", { className: "bg-white p-8 rounded-[16px] border border-[#E2E8F0] shadow-xs space-y-6", children: [_jsx("h2", { className: "text-xl font-bold text-[#0B1F33] font-heading", children: "2. Delivery & Freight Destination" }), _jsxs("div", { className: "space-y-4", children: [_jsx(Input, { label: "Delivery Street Address", required: true, value: shippingAddress.addressLine1, onChange: (e) => setShippingAddress({ ...shippingAddress, addressLine1: e.target.value }) }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [_jsx(Input, { label: "City", required: true, value: shippingAddress.city, onChange: (e) => setShippingAddress({ ...shippingAddress, city: e.target.value }) }), _jsx(Input, { label: "State / Region", required: true, value: shippingAddress.state, onChange: (e) => setShippingAddress({ ...shippingAddress, state: e.target.value }) }), _jsx(Input, { label: "Country", required: true, disabled: true, value: shippingAddress.country })] })] }), _jsxs("div", { className: "pt-4 flex justify-between items-center border-t border-[#E2E8F0]", children: [_jsx(Button, { variant: "ghost", size: "sm", onClick: () => setStep(1), children: "Back to Customer Info" }), _jsx(Button, { variant: "primary", size: "md", onClick: () => setStep(3), rightIcon: _jsx(ArrowRight, { className: "h-4 w-4" }), children: "Proceed to Payment" })] })] })), step === 3 && (_jsxs("div", { className: "bg-white p-8 rounded-[16px] border border-[#E2E8F0] shadow-xs space-y-6", children: [_jsx("h2", { className: "text-xl font-bold text-[#0B1F33] font-heading", children: "3. Payment Method & Confirmation" }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [_jsxs("div", { onClick: () => setPaymentMethod('paystack'), className: `p-4 rounded-[10px] border cursor-pointer transition-all ${paymentMethod === 'paystack'
                                            ? 'border-[#16C7D9] bg-[#16C7D9]/5 ring-1 ring-[#16C7D9]'
                                            : 'border-[#E2E8F0] hover:border-[#CBD5E1]'}`, children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CreditCard, { className: "h-5 w-5 text-[#16C7D9]" }), _jsx("span", { className: "text-sm font-bold text-[#111827]", children: "Instant Card & Transfer (Paystack)" })] }), _jsx("p", { className: "text-xs text-[#64748B] mt-1", children: "Mastercard, Visa, Verve, USSD, and instant Nigerian bank account transfer." })] }), _jsxs("div", { onClick: () => setPaymentMethod('transfer'), className: `p-4 rounded-[10px] border cursor-pointer transition-all ${paymentMethod === 'transfer'
                                            ? 'border-[#16C7D9] bg-[#16C7D9]/5 ring-1 ring-[#16C7D9]'
                                            : 'border-[#E2E8F0] hover:border-[#CBD5E1]'}`, children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Building, { className: "h-5 w-5 text-[#0B1F33]" }), _jsx("span", { className: "text-sm font-bold text-[#111827]", children: "Direct Corporate Invoice Transfer" })] }), _jsx("p", { className: "text-xs text-[#64748B] mt-1", children: "Generates an electronic commercial proforma invoice for corporate wire transfer." })] })] }), _jsxs("div", { className: "p-4 rounded-[10px] bg-[#F8FAFC] border border-[#E2E8F0] space-y-2 text-xs", children: [_jsxs("div", { className: "flex justify-between text-[#64748B]", children: [_jsx("span", { children: "Items Subtotal:" }), _jsxs("span", { className: "font-semibold text-[#111827]", children: ["\u20A6", subtotal.toLocaleString()] })] }), _jsxs("div", { className: "flex justify-between text-[#64748B]", children: [_jsx("span", { children: "Freight Shipping:" }), _jsxs("span", { className: "font-semibold text-[#111827]", children: ["\u20A6", shipping.toLocaleString()] })] }), _jsxs("div", { className: "flex justify-between text-[#64748B]", children: [_jsx("span", { children: "VAT (7.5%):" }), _jsxs("span", { className: "font-semibold text-[#111827]", children: ["\u20A6", tax.toLocaleString()] })] }), _jsxs("div", { className: "pt-2 border-t border-[#E2E8F0] flex justify-between items-baseline font-bold text-sm text-[#0B1F33]", children: [_jsx("span", { children: "Total Amount Due:" }), _jsxs("span", { className: "text-lg font-extrabold text-[#0B1F33] font-heading", children: ["\u20A6", total.toLocaleString()] })] })] }), _jsxs("div", { className: "pt-4 flex justify-between items-center border-t border-[#E2E8F0]", children: [_jsx(Button, { variant: "ghost", size: "sm", onClick: () => setStep(2), children: "Back to Shipping" }), _jsx(Button, { variant: "primary", size: "lg", isLoading: isProcessing, onClick: handleProcessOrder, rightIcon: _jsx(ShieldCheck, { className: "h-4 w-4" }), children: "Authorize & Place Order" })] })] })), step === 4 && (_jsxs("div", { className: "bg-white p-10 rounded-[18px] border border-[#E2E8F0] shadow-sm text-center space-y-6", children: [_jsx("div", { className: "h-16 w-16 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center mx-auto", children: _jsx(CheckCircle2, { className: "h-10 w-10" }) }), _jsxs("div", { children: [_jsx("span", { className: "text-xs font-mono font-bold text-[#16A34A] uppercase tracking-wider", children: "PAYMENT AUTHORIZED & LOGGED" }), _jsx("h2", { className: "text-2xl sm:text-3xl font-extrabold text-[#0B1F33] font-heading mt-1", children: "Thank you for your order!" }), _jsxs("p", { className: "text-xs font-mono text-[#64748B] mt-2", children: ["Order Reference: ", _jsx("strong", { className: "text-[#0B1F33]", children: completedOrderNumber })] })] }), _jsxs("div", { className: "p-5 rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] max-w-md mx-auto text-left text-xs space-y-2", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-[#64748B]", children: "Customer:" }), _jsx("span", { className: "font-semibold text-[#111827]", children: customerInfo.fullName })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-[#64748B]", children: "Dispatch City:" }), _jsxs("span", { className: "font-semibold text-[#111827]", children: [shippingAddress.city, ", ", shippingAddress.state] })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-[#64748B]", children: "Total Paid:" }), _jsxs("span", { className: "font-bold text-[#0B1F33]", children: ["\u20A6", total.toLocaleString()] })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-[#64748B]", children: "Status:" }), _jsx("span", { className: "font-semibold text-[#16A34A]", children: "Processing in Warehouse" })] })] }), _jsxs("div", { className: "pt-4 flex justify-center gap-4", children: [_jsx(Link, { to: "/account", children: _jsx(Button, { variant: "dark", size: "md", children: "View in Customer Account" }) }), _jsx(Link, { to: "/shop", children: _jsx(Button, { variant: "outline", size: "md", children: "Continue Shopping" }) })] })] }))] })] }));
};
export default CheckoutPage;
