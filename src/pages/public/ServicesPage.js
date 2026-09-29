import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { SEO } from '../../components/ui/SEO';
import { ArrowRight, Code2, Smartphone, Cloud, Cpu, Users, GraduationCap, ShieldCheck } from 'lucide-react';
export const ServicesPage = () => {
    const services = [
        {
            slug: 'software-development',
            title: 'Custom Software Development',
            icon: Code2,
            desc: 'Design and build reliable digital products around the way your organization actually works. From enterprise web applications to high-concurrency transactional portals.',
            deliverables: ['Custom Web Applications', 'API Architecture', 'Relational Database Schema Design', 'Automated QA & Unit Testing'],
        },
        {
            slug: 'mobile-development',
            title: 'Mobile Application Engineering',
            icon: Smartphone,
            desc: 'Offline-first Android and iOS applications built for harsh field environments, driver telematics, community health worker data collection, and retail sales.',
            deliverables: ['Offline-First Sync', 'Biometric Authentication', 'Hardware Peripheral Integration', 'App Store & MDM Deployment'],
        },
        {
            slug: 'cloud',
            title: 'Cloud & Infrastructure Services',
            icon: Cloud,
            desc: 'Enterprise cloud hosting, containerized orchestration with Docker and Kubernetes, automated zero-downtime CI/CD deployment pipelines, and multi-region failover.',
            deliverables: ['Multi-Cloud Topologies', 'Container Orchestration', 'Automated Backups & DR', 'Security Audits & Hardening'],
        },
        {
            slug: 'infrastructure',
            title: 'Hardware & Telemetry Infrastructure',
            icon: ShieldCheck,
            desc: 'Provisioning, configuring, and maintaining heavy-duty pure sine wave inverters, online UPS backup systems, and ruggedized IoT fleet telemetry gateways.',
            deliverables: ['Industrial Power Backups', 'Fleet GPS Telematics', 'Cold-Chain IoT Probes', 'Server Room Turnkey Setup'],
        },
        {
            slug: 'managed-it',
            title: 'Managed IT & Enterprise Support',
            icon: Cpu,
            desc: '24/7 proactive infrastructure monitoring, network security, helpdesk support, and guaranteed operational SLAs for mission-critical corporate installations.',
            deliverables: ['24/7 SLA Monitoring', 'Network Hardening', 'Disaster Recovery Testing', 'Vendor Hardware Management'],
        },
        {
            slug: 'consulting',
            title: 'Technology Consulting & Digital Strategy',
            icon: Users,
            desc: 'Assisting C-suite leadership and public sector executives in evaluating technology feasibility, modernizing legacy systems, and crafting scalable digital roadmaps.',
            deliverables: ['Legacy System Audits', 'Architecture Blueprints', 'Tech Vendor RFP Evaluations', 'Compliance & NDPR Advisory'],
        },
        {
            slug: 'training',
            title: 'Institutional Training & Capacity Building',
            icon: GraduationCap,
            desc: 'Structured, hands-on technical and operational training programs ensuring your internal workforce masters deployed platforms with confidence.',
            deliverables: ['Executive User Workshops', 'Technical Admin Training', 'Interactive Field Manuals', 'Change Management Programs'],
        },
    ];
    return (_jsxs("div", { className: "w-full text-left", children: [_jsx(SEO, { title: "Engineering Services & Capabilities | Centrifuge Group", description: "Software development, mobile apps, cloud infrastructure, managed IT, consulting, and institutional training." }), _jsx("section", { className: "bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-[#172333]", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-3xl space-y-4", children: [_jsx("span", { className: "text-xs font-mono font-bold text-[#16C7D9] tracking-wider uppercase", children: "FULL LIFECYCLE CAPABILITIES" }), _jsx("h1", { className: "text-3xl sm:text-5xl font-extrabold font-heading tracking-tight", children: "From strategy to systems in production." }), _jsx("p", { className: "text-base sm:text-lg text-[#94A3B8] leading-relaxed", children: "We provide end-to-end engineering, cloud deployment, and institutional capacity building tailored to the operational demands of Africa." })] }) }) }), _jsx("section", { className: "py-16 bg-[#F8FAFC]", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: services.map((svc) => {
                            const Icon = svc.icon;
                            return (_jsxs("div", { className: "bg-white rounded-[16px] border border-[#E2E8F0] p-8 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-sm transition-all group", children: [_jsxs("div", { children: [_jsx("div", { className: "h-10 w-10 rounded-[8px] bg-[#0B1F33]/5 text-[#0B1F33] flex items-center justify-center group-hover:bg-[#16C7D9]/15 group-hover:text-[#0E7490] transition-colors mb-4", children: _jsx(Icon, { className: "h-5 w-5" }) }), _jsx("h3", { className: "text-lg font-bold text-[#0B1F33] font-heading group-hover:text-[#16C7D9] transition-colors", children: svc.title }), _jsx("p", { className: "text-xs text-[#64748B] mt-2 leading-relaxed", children: svc.desc }), _jsxs("div", { className: "mt-5 space-y-1.5 pt-4 border-t border-[#E2E8F0]/80", children: [_jsx("span", { className: "text-[11px] font-bold text-[#111827] uppercase tracking-wider block mb-1", children: "Core Deliverables:" }), svc.deliverables.map((d) => (_jsxs("div", { className: "text-xs text-[#475569] flex items-center gap-1.5", children: [_jsx("span", { className: "h-1 w-1 rounded-full bg-[#16C7D9]" }), _jsx("span", { children: d })] }, d)))] })] }), _jsx("div", { className: "mt-6 pt-4 border-t border-[#E2E8F0]", children: _jsxs(Link, { to: `/services/${svc.slug}`, className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F33] group-hover:text-[#16C7D9] transition-colors", children: [_jsx("span", { children: "Explore service details & process" }), _jsx(ArrowRight, { className: "h-3.5 w-3.5" })] }) })] }, svc.slug));
                        }) }) }) })] }));
};
export default ServicesPage;
