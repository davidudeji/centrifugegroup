import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { SEO } from '../../components/ui/SEO';
import { ArrowRight, Layers, Truck, Activity, Building, BarChart2, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';
export const SolutionsPage = () => {
    const solutions = [
        {
            slug: 'optimax',
            name: 'Optimax Connected Enterprise Platform',
            category: 'Enterprise ERP & Operations',
            icon: Layers,
            description: 'An all-in-one business management platform connecting commerce, automated financial ledgers, multi-location inventory, HR, and real-time business intelligence.',
            modules: ['Commerce & POS', 'Financial Ledgers', 'Multi-Warehouse Inventory', 'Payroll & HR', 'Predictive Analytics'],
            featured: true,
        },
        {
            slug: 'logistics',
            name: 'Logistics & Dispatch Mobility Suite',
            category: 'Supply Chain & Telematics',
            icon: Truck,
            description: 'Hardware-agnostic GPS vehicle tracking, automated dispatch scheduling, CAN-Bus fuel auditing, and mobile driver proof-of-delivery (ePOD).',
            modules: ['Live Corridor Telematics', 'Route Optimization', 'Geofencing Engine', 'Driver Mobile App', 'Fuel Monitoring'],
            featured: false,
        },
        {
            slug: 'healthcare',
            name: 'Healthcare Informatics & Hospital Systems',
            category: 'HealthTech & Government',
            icon: Activity,
            description: 'Human Resource for Health Information Systems (HRHIS), digital clinician licensing, electronic medical records (EMR), and WHO-standard health reporting.',
            modules: ['National Health Workforce Registry', 'Hospital Clinical EMR', 'Digital Practitioner Licensing', 'DHIS2 Standards'],
            featured: false,
        },
        {
            slug: 'enterprise',
            name: 'Custom Core Enterprise Systems',
            category: 'Custom Digital Architecture',
            icon: Building,
            description: 'Tailored business automation architectures, high-concurrency payment reconciliations, and mission-critical enterprise workflows.',
            modules: ['Custom Ledger Engines', 'System Integrations', 'Multi-tenant Portals', 'Automated Compliance'],
            featured: false,
        },
        {
            slug: 'data-analytics',
            name: 'Spatial GIS & Business Intelligence',
            category: 'Data Science & Spatial Analytics',
            icon: BarChart2,
            description: 'Interactive geospatial mapping of health facilities and logistics routes, automated executive reporting dashboards, and time-series sensor ingestion.',
            modules: ['Interactive Map Layers', 'Catchment Radii Analysis', 'Executive KPI Dashboards', 'IoT Stream Ingestion'],
            featured: false,
        },
    ];
    return (_jsxs("div", { className: "w-full text-left", children: [_jsx(SEO, { title: "Enterprise Solutions & Platforms", description: "Explore Centrifuge Group platforms: Optimax ERP, Logistics & Mobility, Healthcare Informatics, and Spatial GIS Data." }), _jsx("section", { className: "bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-[#172333]", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-3xl space-y-4", children: [_jsx("span", { className: "text-xs font-mono font-bold text-[#16C7D9] tracking-wider uppercase", children: "CENTRIFUGE PLATFORM SUITE" }), _jsx("h1", { className: "text-3xl sm:text-5xl font-extrabold font-heading tracking-tight", children: "Integrated platforms for complex operations." }), _jsx("p", { className: "text-base sm:text-lg text-[#94A3B8] leading-relaxed", children: "We design, build, and operate digital systems that eliminate operational blind spots, connect departments, and scale seamlessly with organizational growth." })] }) }) }), _jsx("section", { className: "py-16 bg-[#F8FAFC]", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10", children: solutions.map((sol, index) => {
                        const Icon = sol.icon;
                        return (_jsxs("div", { className: "bg-white rounded-[18px] border border-[#E2E8F0] p-8 lg:p-10 shadow-sm hover:border-[#CBD5E1] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center", children: [_jsxs("div", { className: "lg:col-span-8 space-y-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "h-9 w-9 rounded-[8px] bg-[#0B1F33]/5 text-[#0B1F33] flex items-center justify-center", children: _jsx(Icon, { className: "h-5 w-5 text-[#16C7D9]" }) }), _jsxs("span", { className: "text-xs font-mono font-bold text-[#64748B] uppercase", children: ["0", index + 1, " \u00B7 ", sol.category] })] }), _jsx("h3", { className: "text-2xl font-bold text-[#0B1F33] font-heading", children: sol.name }), _jsx("p", { className: "text-sm text-[#475569] leading-relaxed max-w-2xl", children: sol.description }), _jsxs("div", { className: "pt-2", children: [_jsx("span", { className: "text-xs font-semibold text-[#111827] block mb-2", children: "Core Modules & Capabilities:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: sol.modules.map((mod) => (_jsxs("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-[#F1F5F9] text-xs font-medium text-[#334155]", children: [_jsx(CheckCircle2, { className: "h-3 w-3 text-[#16A34A]" }), mod] }, mod))) })] })] }), _jsxs("div", { className: "lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3", children: [_jsx(Link, { to: `/solutions/${sol.slug}`, children: _jsxs(Button, { variant: "primary", size: "md", rightIcon: _jsx(ArrowRight, { className: "h-4 w-4" }), children: ["Explore ", sol.name.split(' ')[0]] }) }), _jsx(Link, { to: "/contact", className: "text-xs font-semibold text-[#64748B] hover:text-[#0B1F33] transition-colors", children: "Request Technical Overview \u2192" })] })] }, sol.slug));
                    }) }) })] }));
};
export default SolutionsPage;
