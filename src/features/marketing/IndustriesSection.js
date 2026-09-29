import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, Truck, Building2, Landmark, Store } from 'lucide-react';
export const IndustriesSection = () => {
    const industries = [
        {
            id: 'healthcare',
            name: 'Healthcare & Medical Systems',
            icon: HeartPulse,
            challenge: 'Fragmented patient records and paper workforce registries cause clinical blindspots.',
            solution: 'Turnkey EMRs, national health workforce platforms, and automated laboratory diagnostics.',
            slug: '/industries/healthcare',
        },
        {
            id: 'logistics',
            name: 'Logistics & Inter-State Freight',
            icon: Truck,
            challenge: 'High fuel pilferage, unexpected vehicle downtime, and delayed paper delivery notes.',
            solution: 'Sub-second GPS/CAN-Bus telematics, automated dispatch scheduling, and digital ePOD.',
            slug: '/industries/logistics',
        },
        {
            id: 'government',
            name: 'Government & Regulatory Councils',
            icon: Landmark,
            challenge: 'Manual queues for licensing, counterfeit credentials, and delayed revenue reporting.',
            solution: 'Tamper-proof digital licensing, Remita automated payments, and verified registries.',
            slug: '/industries/government',
        },
        {
            id: 'enterprise',
            name: 'Large Enterprise & Energy',
            icon: Building2,
            challenge: 'Disconnected ERP modules leading to multi-week manual financial reconciliations.',
            solution: 'Modular connected business architectures, automated ledger postings, and audit trails.',
            slug: '/industries/enterprise',
        },
        {
            id: 'smes',
            name: 'Growing Commercial SMEs',
            icon: Store,
            challenge: 'Stock shrinkage and unreliable power grids disrupting day-to-day point of sale.',
            solution: 'Cloud inventory POS combined with industrial pure sine wave inverters and solar backup.',
            slug: '/industries/smes',
        },
    ];
    return (_jsx("section", { className: "py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "max-w-3xl text-left mb-14", children: [_jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-[#16C7D9]", children: "Sector-Specific Engineering" }), _jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-heading mt-2 tracking-tight", children: "Industries we transform." }), _jsx("p", { className: "text-base text-[#64748B] mt-3", children: "We don't sell generic software. We engineer systems purpose-built for the operational realities of African institutions and commercial enterprises." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: industries.map((ind) => {
                        const Icon = ind.icon;
                        return (_jsxs("div", { className: "bg-white rounded-[14px] border border-[#E2E8F0] p-7 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-sm transition-all text-left group", children: [_jsxs("div", { children: [_jsx("div", { className: "h-10 w-10 rounded-[8px] bg-[#0B1F33]/5 text-[#0B1F33] flex items-center justify-center group-hover:bg-[#16C7D9]/15 group-hover:text-[#0E7490] transition-colors", children: _jsx(Icon, { className: "h-5 w-5" }) }), _jsx("h3", { className: "text-lg font-bold text-[#0B1F33] font-heading mt-4 group-hover:text-[#16C7D9] transition-colors", children: ind.name }), _jsxs("div", { className: "mt-3 space-y-2 text-xs", children: [_jsxs("div", { children: [_jsx("span", { className: "font-semibold text-[#111827]", children: "Operational Challenge:" }), ' ', _jsx("span", { className: "text-[#64748B]", children: ind.challenge })] }), _jsxs("div", { children: [_jsx("span", { className: "font-semibold text-[#111827]", children: "Centrifuge Solution:" }), ' ', _jsx("span", { className: "text-[#64748B]", children: ind.solution })] })] })] }), _jsx("div", { className: "mt-6 pt-4 border-t border-[#E2E8F0]", children: _jsxs(Link, { to: ind.slug, className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F33] group-hover:text-[#16C7D9] transition-colors", children: [_jsx("span", { children: "Industry solutions & case studies" }), _jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })] }) })] }, ind.id));
                    }) })] }) }));
};
