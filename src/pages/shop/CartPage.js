import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from '../../components/ui/SEO';
import { useCartStore } from '../../stores/cartStore';
import { useUIStore } from '../../stores/uiStore';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
export const CartPage = () => {
    const { items, updateQuantity, removeItem, clearCart, getSubtotal } = useCartStore();
    const { addToast } = useUIStore();
    const navigate = useNavigate();
    const [discountCode, setDiscountCode] = useState('');
    const [appliedDiscount, setAppliedDiscount] = useState(0);
    const subtotal = getSubtotal();
    const tax = Math.round(subtotal * 0.075); // 7.5% Nigerian VAT
    const shipping = subtotal > 2000000 || subtotal === 0 ? 0 : 25000;
    const total = Math.max(0, subtotal + tax + shipping - appliedDiscount);
    const handleApplyDiscount = (e) => {
        e.preventDefault();
        if (discountCode.trim().toUpperCase() === 'CENTRIFUGE10') {
            const discount = Math.min(100000, Math.round(subtotal * 0.1));
            setAppliedDiscount(discount);
            addToast({
                title: 'Discount Applied',
                description: '10% discount has been applied to your subtotal.',
                type: 'success',
            });
        }
        else {
            addToast({
                title: 'Invalid Discount Code',
                description: 'Try CENTRIFUGE10 for 10% off eligible hardware.',
                type: 'error',
            });
        }
    };
    if (items.length === 0) {
        return (_jsxs("div", { className: "py-28 max-w-xl mx-auto px-4 text-center space-y-4", children: [_jsx(SEO, { title: "Your Hardware Cart | Centrifuge Store" }), _jsx("div", { className: "h-18 w-18 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#94A3B8] mx-auto mb-2", children: _jsx(ShoppingBag, { className: "h-9 w-9" }) }), _jsx("h2", { className: "text-2xl font-bold text-[#111827] font-heading", children: "Your cart is currently empty" }), _jsx("p", { className: "text-sm text-[#64748B]", children: "Explore our pure sine wave hybrid inverters, modular server room UPS units, and solar charge controllers." }), _jsx("div", { className: "pt-2", children: _jsx(Link, { to: "/shop", children: _jsx(Button, { variant: "primary", size: "md", children: "Browse Hardware Store" }) }) })] }));
    }
    return (_jsxs("div", { className: "w-full text-left py-12 bg-[#F8FAFC]", children: [_jsx(SEO, { title: "Shopping Cart | Centrifuge Group" }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex items-center justify-between pb-6 border-b border-[#E2E8F0]", children: [_jsxs("h1", { className: "text-2xl sm:text-3xl font-extrabold text-[#0B1F33] font-heading", children: ["Hardware Order Cart (", items.reduce((s, i) => s + i.quantity, 0), " items)"] }), _jsx("button", { onClick: clearCart, className: "text-xs text-[#DC2626] hover:underline font-semibold", children: "Clear Entire Cart" })] }), _jsxs("div", { className: "mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start", children: [_jsx("div", { className: "lg:col-span-8 bg-white rounded-[16px] border border-[#E2E8F0] overflow-hidden divide-y divide-[#E2E8F0]", children: items.map((item) => (_jsxs("div", { className: "p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between", children: [_jsxs("div", { className: "flex gap-4 items-center", children: [_jsx("img", { src: item.product.images[0], alt: item.product.name, className: "h-20 w-20 object-contain rounded-[8px] border border-[#E2E8F0] p-1 bg-[#F8FAFC] shrink-0" }), _jsxs("div", { children: [_jsxs("span", { className: "text-[10px] font-mono text-[#64748B] block", children: [item.product.brand, " \u00B7 SKU: ", item.product.sku] }), _jsx(Link, { to: `/shop/product/${item.product.slug}`, className: "text-sm font-bold text-[#111827] hover:text-[#16C7D9] transition-colors", children: item.product.name }), _jsxs("div", { className: "text-xs font-semibold text-[#0B1F33] mt-1", children: ["\u20A6", item.product.price.toLocaleString(), " each"] })] })] }), _jsxs("div", { className: "flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-0 border-[#E2E8F0]/60", children: [_jsxs("div", { className: "flex items-center border border-[#CBD5E1] rounded-[6px] bg-white", children: [_jsx("button", { onClick: () => updateQuantity(item.product.id, item.quantity - 1), className: "p-1.5 hover:bg-[#F1F5F9] text-[#64748B] transition-colors rounded-l-[5px]", children: _jsx(Minus, { className: "h-3 w-3" }) }), _jsx("span", { className: "px-3 text-xs font-bold text-[#111827]", children: item.quantity }), _jsx("button", { onClick: () => updateQuantity(item.product.id, item.quantity + 1), className: "p-1.5 hover:bg-[#F1F5F9] text-[#64748B] transition-colors rounded-r-[5px]", children: _jsx(Plus, { className: "h-3 w-3" }) })] }), _jsxs("div", { className: "text-sm font-bold text-[#0B1F33] font-heading min-w-[100px] text-right", children: ["\u20A6", (item.product.price * item.quantity).toLocaleString()] }), _jsx("button", { onClick: () => removeItem(item.product.id), className: "p-1 text-[#94A3B8] hover:text-[#DC2626] transition-colors", "aria-label": "Remove item", children: _jsx(Trash2, { className: "h-4 w-4" }) })] })] }, item.product.id))) }), _jsxs("div", { className: "lg:col-span-4 bg-white rounded-[16px] border border-[#E2E8F0] p-6 space-y-6", children: [_jsx("h3", { className: "text-base font-bold text-[#0B1F33] font-heading", children: "Order Summary" }), _jsxs("form", { onSubmit: handleApplyDiscount, className: "flex gap-2", children: [_jsx(Input, { placeholder: "Discount code (try CENTRIFUGE10)", value: discountCode, onChange: (e) => setDiscountCode(e.target.value) }), _jsx(Button, { type: "submit", variant: "secondary", size: "md", children: "Apply" })] }), _jsxs("div", { className: "space-y-3 text-xs border-t border-[#E2E8F0] pt-4", children: [_jsxs("div", { className: "flex justify-between text-[#64748B]", children: [_jsx("span", { children: "Items Subtotal" }), _jsxs("span", { className: "font-semibold text-[#111827]", children: ["\u20A6", subtotal.toLocaleString()] })] }), _jsxs("div", { className: "flex justify-between text-[#64748B]", children: [_jsx("span", { children: "Estimated Freight Shipping" }), _jsx("span", { className: "font-semibold text-[#111827]", children: shipping === 0 ? _jsx("span", { className: "text-[#16A34A]", children: "Free Shipping" }) : `₦${shipping.toLocaleString()}` })] }), _jsxs("div", { className: "flex justify-between text-[#64748B]", children: [_jsx("span", { children: "Statutory 7.5% VAT" }), _jsxs("span", { className: "font-semibold text-[#111827]", children: ["\u20A6", tax.toLocaleString()] })] }), appliedDiscount > 0 && (_jsxs("div", { className: "flex justify-between text-[#16A34A]", children: [_jsx("span", { children: "Applied Promotional Discount" }), _jsxs("span", { className: "font-semibold", children: ["-\u20A6", appliedDiscount.toLocaleString()] })] })), _jsxs("div", { className: "pt-3 border-t border-[#E2E8F0] flex justify-between items-baseline", children: [_jsx("span", { className: "text-sm font-bold text-[#0B1F33]", children: "Total Payable" }), _jsxs("span", { className: "text-xl font-extrabold text-[#0B1F33] font-heading", children: ["\u20A6", total.toLocaleString()] })] })] }), _jsx(Button, { variant: "primary", size: "lg", className: "w-full", onClick: () => navigate('/checkout'), rightIcon: _jsx(ArrowRight, { className: "h-4 w-4" }), children: "Proceed to Checkout" }), _jsxs("div", { className: "pt-2 text-[11px] text-[#64748B] flex items-center justify-center gap-1.5", children: [_jsx(ShieldCheck, { className: "h-4 w-4 text-[#16A34A]" }), _jsx("span", { children: "Secured checkout via Paystack / Direct Transfer" })] })] })] })] })] }));
};
export default CartPage;
