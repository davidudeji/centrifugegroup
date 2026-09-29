import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Smartphone, Cloud, Cpu, GraduationCap, BarChart } from 'lucide-react';
export const ServicesSection = () => {
    const services = [
        {
            title: 'Custom Software Development',
            slug: '/services/software-development',
            icon: Code2,
            outcome: 'Design and build reliable digital products around the way your organization actually works.',
        },
        {
            title: 'Mobile Application Engineering',
            slug: '/services/mobile-development',
            icon: Smartphone,
            outcome: 'Offline-capable Android & iOS applications ensuring field teams capture data without interruption.',
        },
        {
            title: 'Cloud & Infrastructure Services',
            slug: '/services/cloud',
            icon: Cloud,
            outcome: 'Architect, secure, and maintain multi-region cloud systems with high-uptime SLAs.',
        },
        {
            title: 'Enterprise Data & Analytics',
            slug: '/solutions/data-analytics',
            icon: BarChart,
            outcome: 'Convert transactional noise into clean executive business intelligence and spatial GIS heatmaps.',
        },
        {
            title: 'Technology Consulting & Architecture',
            slug: '/services/consulting',
            icon: Cpu,
            outcome: 'Auditing legacy software, modernizing database topologies, and crafting scalable digital roadmaps.',
        },
        {
            title: 'Institutional Training & Capacity',
            slug: '/services/training',
            icon: GraduationCap,
            outcome: 'Empower internal government and corporate teams through structured, hands-on technical programs.',
        },
    ];
    return (_jsx("section", { className: "py-20 lg:py-28 bg-white border-b border-[#E2E8F0]", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "max-w-3xl text-left mb-14", children: [_jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-[#16C7D9]", children: "Full Lifecycle Engineering" }), _jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F33] font-heading mt-2 tracking-tight", children: "From strategy to systems in production." }), _jsx("p", { className: "text-base text-[#64748B] mt-3", children: "We partner with organizations through every phase of system evolution\u2014from initial architectural blueprinting to nationwide field rollout." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: services.map((svc) => {
                        const Icon = svc.icon;
                        return (_jsxs("div", { className: "p-6 rounded-[12px] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-xs transition-all text-left flex flex-col justify-between group", children: [_jsxs("div", { children: [_jsx("div", { className: "h-9 w-9 rounded-[6px] bg-[#F1F5F9] text-[#0B1F33] flex items-center justify-center group-hover:bg-[#0B1F33] group-hover:text-[#16C7D9] transition-colors", children: _jsx(Icon, { className: "h-4.5 w-4.5" }) }), _jsx("h3", { className: "text-base font-bold text-[#0B1F33] font-heading mt-4 group-hover:text-[#16C7D9] transition-colors", children: svc.title }), _jsx("p", { className: "text-xs text-[#64748B] mt-2 leading-relaxed", children: svc.outcome })] }), _jsx("div", { className: "mt-5 pt-3 border-t border-[#E2E8F0]/80", children: _jsxs(Link, { to: svc.slug, className: "inline-flex items-center gap-1 text-xs font-semibold text-[#0B1F33] group-hover:text-[#16C7D9] transition-colors", children: [_jsx("span", { children: "Capabilities & process" }), _jsx(ArrowRight, { className: "h-3 w-3 transition-transform group-hover:translate-x-1" })] }) })] }, svc.title));
                    }) })] }) }));
};
