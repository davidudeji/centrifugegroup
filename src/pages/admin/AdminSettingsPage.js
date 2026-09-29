import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Save, Store, DollarSign, Truck, CreditCard, Bell, Search, Globe } from 'lucide-react';
const sections = [
    { key: 'general', label: 'General', icon: Store },
    { key: 'currency', label: 'Currency & Tax', icon: DollarSign },
    { key: 'shipping', label: 'Shipping', icon: Truck },
    { key: 'payments', label: 'Payments', icon: CreditCard },
    { key: 'notifications', label: 'Notifications', icon: Bell },
    { key: 'seo', label: 'SEO', icon: Search },
    { key: 'social', label: 'Social Links', icon: Globe },
];
export const AdminSettingsPage = () => {
    const [active, setActive] = useState('general');
    const [saved, setSaved] = useState(false);
    // Demo state for each section
    const [general, setGeneral] = useState({
        storeName: 'Centrifuge Group Store',
        email: 'store@centrifugegroup.co',
        phone: '+234 800 CENTRIFUGE',
        address: 'Victoria Island, Lagos, Nigeria',
        timezone: 'Africa/Lagos',
    });
    const [currency, setCurrency] = useState({
        currency: 'NGN',
        symbol: '₦',
        taxRate: '7.5',
        taxLabel: 'VAT',
    });
    const [shipping, setShipping] = useState({
        freeShippingThreshold: '500000',
        standardRate: '5000',
        expressRate: '15000',
        estimatedDays: '3–7',
    });
    const [seo, setSeo] = useState({
        metaTitle: 'Centrifuge Group | Enterprise Technology & Store',
        metaDescription: 'Premium technology hardware, inverters, UPS, solar controllers and enterprise IoT equipment from Centrifuge Group.',
        keywords: 'inverter Nigeria, UPS system, solar controller, enterprise hardware',
    });
    const [social, setSocial] = useState({
        linkedin: 'https://linkedin.com/company/centrifuge-group',
        twitter: '',
        facebook: '',
        instagram: '',
    });
    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };
    const Field = ({ label, value, onChange, type = 'text', placeholder = '' }) => (_jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: label }), _jsx("input", { type: type, value: value, onChange: (e) => onChange(e.target.value), placeholder: placeholder, className: "w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9] transition-all" })] }));
    const renderSection = () => {
        switch (active) {
            case 'general':
                return (_jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [_jsx(Field, { label: "Store Name", value: general.storeName, onChange: (v) => setGeneral({ ...general, storeName: v }) }), _jsx(Field, { label: "Contact Email", value: general.email, type: "email", onChange: (v) => setGeneral({ ...general, email: v }) }), _jsx(Field, { label: "Phone Number", value: general.phone, onChange: (v) => setGeneral({ ...general, phone: v }) }), _jsx(Field, { label: "Timezone", value: general.timezone, onChange: (v) => setGeneral({ ...general, timezone: v }) }), _jsxs("div", { className: "sm:col-span-2", children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: "Store Address" }), _jsx("textarea", { value: general.address, onChange: (e) => setGeneral({ ...general, address: e.target.value }), rows: 2, className: "w-full px-3 py-2 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9] resize-none" })] })] }));
            case 'currency':
                return (_jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: "Currency" }), _jsxs("select", { value: currency.currency, onChange: (e) => setCurrency({ ...currency, currency: e.target.value }), className: "w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]", children: [_jsx("option", { value: "NGN", children: "NGN \u2014 Nigerian Naira (\u20A6)" }), _jsx("option", { value: "USD", children: "USD \u2014 US Dollar ($)" }), _jsx("option", { value: "GBP", children: "GBP \u2014 British Pound (\u00A3)" }), _jsx("option", { value: "EUR", children: "EUR \u2014 Euro (\u20AC)" })] })] }), _jsx(Field, { label: "Currency Symbol", value: currency.symbol, onChange: (v) => setCurrency({ ...currency, symbol: v }) }), _jsx(Field, { label: "Tax Rate (%)", value: currency.taxRate, type: "number", onChange: (v) => setCurrency({ ...currency, taxRate: v }) }), _jsx(Field, { label: "Tax Label", value: currency.taxLabel, onChange: (v) => setCurrency({ ...currency, taxLabel: v }) })] }));
            case 'shipping':
                return (_jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [_jsx(Field, { label: "Free Shipping Threshold (\u20A6)", value: shipping.freeShippingThreshold, type: "number", onChange: (v) => setShipping({ ...shipping, freeShippingThreshold: v }) }), _jsx(Field, { label: "Standard Shipping Rate (\u20A6)", value: shipping.standardRate, type: "number", onChange: (v) => setShipping({ ...shipping, standardRate: v }) }), _jsx(Field, { label: "Express Shipping Rate (\u20A6)", value: shipping.expressRate, type: "number", onChange: (v) => setShipping({ ...shipping, expressRate: v }) }), _jsx(Field, { label: "Estimated Delivery (e.g. 3\u20137 days)", value: shipping.estimatedDays, onChange: (v) => setShipping({ ...shipping, estimatedDays: v }) })] }));
            case 'payments':
                return (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "p-4 bg-[#F7F9FA] rounded-xl border border-[#E2E8F0]", children: [_jsx("p", { className: "text-xs font-semibold text-[#172333] mb-1", children: "Payment Gateway" }), _jsxs("p", { className: "text-xs text-[#64748B]", children: ["Payment is abstracted behind ", _jsx("code", { className: "font-mono text-[#0B1F33] bg-[#E2E8F0] px-1.5 py-0.5 rounded", children: "PaymentService" }), ". Connect Paystack, Flutterwave, or Stripe by updating the service in ", _jsx("code", { className: "font-mono text-[#0B1F33] bg-[#E2E8F0] px-1.5 py-0.5 rounded", children: "src/services/paymentService.ts" }), "."] })] }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: "Active Gateway" }), _jsxs("select", { className: "w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]", children: [_jsx("option", { children: "Mock Payment (Development)" }), _jsx("option", { children: "Paystack" }), _jsx("option", { children: "Flutterwave" }), _jsx("option", { children: "Stripe" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: "Mode" }), _jsxs("select", { className: "w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]", children: [_jsx("option", { children: "Test Mode" }), _jsx("option", { children: "Live Mode" })] })] })] })] }));
            case 'notifications':
                return (_jsx("div", { className: "space-y-4", children: [
                        { label: 'New Order Email', desc: 'Receive email when a new order is placed' },
                        { label: 'Low Stock Alert', desc: 'Alert when a product falls below threshold' },
                        { label: 'Customer Registration', desc: 'Notify when a new customer registers' },
                        { label: 'Order Status Updates', desc: 'Notify customers when order status changes' },
                    ].map((item) => (_jsxs("div", { className: "flex items-center justify-between p-4 bg-[#F7F9FA] rounded-xl border border-[#E2E8F0]", children: [_jsxs("div", { children: [_jsx("p", { className: "text-xs font-semibold text-[#172333]", children: item.label }), _jsx("p", { className: "text-xs text-[#64748B]", children: item.desc })] }), _jsx("input", { type: "checkbox", defaultChecked: true, className: "h-4 w-4 rounded border-[#E2E8F0]" })] }, item.label))) }));
            case 'seo':
                return (_jsxs("div", { className: "space-y-5", children: [_jsx(Field, { label: "Meta Title", value: seo.metaTitle, onChange: (v) => setSeo({ ...seo, metaTitle: v }) }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: "Meta Description" }), _jsx("textarea", { value: seo.metaDescription, onChange: (e) => setSeo({ ...seo, metaDescription: e.target.value }), rows: 3, className: "w-full px-3 py-2 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9] resize-none" })] }), _jsx(Field, { label: "Keywords (comma-separated)", value: seo.keywords, onChange: (v) => setSeo({ ...seo, keywords: v }) })] }));
            case 'social':
                return (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: Object.entries(social).map(([key, value]) => (_jsx(Field, { label: key.charAt(0).toUpperCase() + key.slice(1), value: value, type: "url", placeholder: `https://${key}.com/…`, onChange: (v) => setSocial({ ...social, [key]: v }) }, key))) }));
            default:
                return null;
        }
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h1", { className: "font-heading font-bold text-2xl text-[#0B1F33]", children: "Store Settings" }), _jsx("p", { className: "text-sm text-[#64748B] mt-0.5", children: "Manage your store configuration and preferences" })] }), _jsxs("div", { className: "flex flex-col lg:flex-row gap-6", children: [_jsx("aside", { className: "lg:w-56 shrink-0", children: _jsx("div", { className: "bg-white rounded-xl border border-[#E2E8F0] overflow-hidden", children: sections.map((s) => {
                                const Icon = s.icon;
                                return (_jsxs("button", { onClick: () => setActive(s.key), className: `w-full flex items-center gap-3 px-4 py-3 text-xs font-semibold text-left transition-colors border-b last:border-0 border-[#F1F5F9] ${active === s.key
                                        ? 'bg-[#0B1F33] text-white'
                                        : 'text-[#64748B] hover:bg-[#F7F9FA] hover:text-[#172333]'}`, children: [_jsx(Icon, { className: "h-4 w-4 shrink-0" }), s.label] }, s.key));
                            }) }) }), _jsx("div", { className: "flex-1", children: _jsxs("div", { className: "bg-white rounded-xl border border-[#E2E8F0] p-6 space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h2", { className: "font-heading font-bold text-base text-[#0B1F33]", children: sections.find((s) => s.key === active)?.label }), _jsxs("button", { onClick: handleSave, className: `inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${saved
                                                ? 'bg-[#16A34A] text-white'
                                                : 'bg-[#0B1F33] text-white hover:bg-[#071521]'}`, children: [_jsx(Save, { className: "h-3.5 w-3.5" }), saved ? 'Saved!' : 'Save Changes'] })] }), renderSection()] }) })] })] }));
};
export default AdminSettingsPage;
