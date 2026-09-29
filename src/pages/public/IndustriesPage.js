import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { SEO } from '../../components/ui/SEO';
import { HeartPulse, Truck, Landmark, Building2, Store, ArrowRight } from 'lucide-react';
export const IndustriesPage = () => {
    const industries = [
        {
            slug: 'healthcare',
            title: 'Healthcare & Public Health Systems',
            icon: HeartPulse,
            desc: 'National health workforce information systems, hospital clinical workflows, medical regulatory credentialing, and cold chain telemetry.',
            clients: 'Federal Ministry of Health, Nursing & Midwifery Council of Nigeria, Carter Center, Heartland Alliance',
        },
        {
            slug: 'logistics',
            title: 'Logistics, Freight & Inter-State Mobility',
            icon: Truck,
            desc: 'Hardware-agnostic GPS fleet tracking, automated route dispatching, fuel auditing, and offline digital proof of delivery for haulage operators.',
            clients: 'Commercial transport fleets, industrial distribution lines, fuel hauliers',
        },
        {
            slug: 'government',
            title: 'Government Ministries, Departments & Agencies',
            icon: Landmark,
            desc: 'Digital registries, civil service capacity management, Remita-integrated fee collection, and tamper-proof verification portals.',
            clients: 'Federal MDAs, state health ministries, regulatory licensing boards',
        },
        {
            slug: 'enterprise',
            title: 'Large Commercial Enterprises & Energy',
            icon: Building2,
            desc: 'Optimax connected ERP suite, multi-entity accounting, warehouse inventory controls, and mission-critical cloud hosting.',
            clients: 'Nigeria LNG Limited (NLNG), industrial manufacturers, corporate groups',
        },
        {
            slug: 'smes',
            title: 'High-Growth Commercial SMEs',
            icon: Store,
            desc: 'Turnkey point of sale software, multi-warehouse stock auditing, and industrial pure sine wave solar inverters for continuous operations.',
            clients: 'Multi-branch retail networks, diagnostic medical centers, engineering firms',
        },
    ];
    return (_jsxs("div", { className: "w-full text-left", children: [_jsx(SEO, { title: "Industries We Transform | Centrifuge Group", description: "Sector-specific enterprise systems for healthcare, logistics, government, corporate enterprises, and SMEs." }), _jsx("section", { className: "bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-[#172333]", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-3xl space-y-4", children: [_jsx("span", { className: "text-xs font-mono font-bold text-[#16C7D9] tracking-wider uppercase", children: "SECTOR FOCUS" }), _jsx("h1", { className: "text-3xl sm:text-5xl font-extrabold font-heading tracking-tight", children: "Deep domain expertise for complex industries." }), _jsx("p", { className: "text-base sm:text-lg text-[#94A3B8] leading-relaxed", children: "We design software around the exact operational, legal, and environmental realities of our partner sectors." })] }) }) }), _jsx("section", { className: "py-16 bg-[#F8FAFC]", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: industries.map((ind) => {
                            const Icon = ind.icon;
                            return (_jsxs("div", { className: "bg-white rounded-[16px] border border-[#E2E8F0] p-8 flex flex-col justify-between hover:border-[#CBD5E1] transition-all group", children: [_jsxs("div", { children: [_jsx("div", { className: "h-10 w-10 rounded-[8px] bg-[#0B1F33]/5 text-[#0B1F33] flex items-center justify-center group-hover:bg-[#16C7D9]/15 group-hover:text-[#0E7490] transition-colors mb-4", children: _jsx(Icon, { className: "h-5 w-5" }) }), _jsx("h3", { className: "text-lg font-bold text-[#0B1F33] font-heading group-hover:text-[#16C7D9] transition-colors", children: ind.title }), _jsx("p", { className: "text-xs text-[#64748B] mt-2 leading-relaxed", children: ind.desc }), _jsxs("div", { className: "mt-4 pt-3 border-t border-[#E2E8F0] text-[11px]", children: [_jsx("span", { className: "font-semibold text-[#111827]", children: "Verified Clients / Sectors:" }), ' ', _jsx("span", { className: "text-[#64748B]", children: ind.clients })] })] }), _jsx("div", { className: "mt-6 pt-4 border-t border-[#E2E8F0]", children: _jsxs(Link, { to: `/industries/${ind.slug}`, className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F33] group-hover:text-[#16C7D9] transition-colors", children: [_jsx("span", { children: "Explore industry solutions" }), _jsx(ArrowRight, { className: "h-3.5 w-3.5" })] }) })] }, ind.slug));
                        }) }) }) })] }));
};
export default IndustriesPage;
