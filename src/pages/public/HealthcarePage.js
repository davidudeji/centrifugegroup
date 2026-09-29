import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { SEO } from '../../components/ui/SEO';
import { Button } from '../../components/ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
export const HealthcarePage = () => {
    const systems = [
        {
            title: 'Human Resource for Health Information System (HRHIS)',
            desc: 'National and state-level healthcare workforce database tracking accreditation, postings, credentials, and capacity building for healthcare practitioners across Nigeria.',
            badge: 'Deployed with FMOH',
            features: ['Digital licensing & CPD tracking', 'Health facility workforce modeling', 'Biometric validation', 'Interoperable DHIS2 APIs'],
        },
        {
            title: 'Electronic Hospital Management Platform (EHMP)',
            desc: 'Complete paperless clinical workflow management for public and private healthcare centers.',
            badge: 'Clinical EMR',
            features: ['Outpatient & Inpatient EMR', 'Laboratory Information System (LIS)', 'Pharmacy stock & dispensing', 'NHIS/HMO claims billing'],
        },
        {
            title: 'Digital Credentialing & Licensing Portals',
            desc: 'Tamper-proof digital licensing, examination registration, and instant QR verification for professional councils.',
            badge: 'Regulatory Grade',
            features: ['Cryptographic QR certificates', 'Online credential verification', 'Remita payment reconciliation', 'Examination seat scheduling'],
        },
        {
            title: 'Vaccine & Cold-Chain IoT Monitoring',
            desc: 'Cellular IoT sensor probes continuously monitoring temperature and humidity in pharmaceutical storage and depots.',
            badge: 'Cold Chain',
            features: ['24/7 continuous temperature logs', 'Automated SMS & audible alarms', 'Regulatory audit trail PDFs', '72-hour power backup'],
        },
    ];
    return (_jsxs("div", { className: "w-full text-left", children: [_jsx(SEO, { title: "Centrifuge Healthcare Solutions | Health Informatics & Hospital Systems", description: "Public health informatics, national health workforce registries (HRHIS), and hospital information systems." }), _jsx("section", { className: "bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-[#172333]", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-3xl space-y-4", children: [_jsx("span", { className: "text-xs font-mono font-bold text-[#16C7D9] tracking-wider uppercase", children: "CENTRIFUGE HEALTH INFORMATICS" }), _jsx("h1", { className: "text-3xl sm:text-5xl font-extrabold font-heading tracking-tight", children: "Digital systems for better healthcare operations." }), _jsx("p", { className: "text-base sm:text-lg text-[#94A3B8] leading-relaxed", children: "We design and operate resilient health information systems in partnership with federal ministries, healthcare regulatory councils, and major hospitals." }), _jsxs("div", { className: "pt-4 flex flex-wrap gap-3", children: [_jsx(Link, { to: "/contact", children: _jsx(Button, { variant: "primary", size: "lg", rightIcon: _jsx(ArrowRight, { className: "h-4 w-4" }), children: "Consult Health Informatics Team" }) }), _jsx(Link, { to: "/case-studies/fmoh-national-health-workforce", children: _jsx(Button, { variant: "outline", size: "lg", className: "bg-transparent text-white border-[#334155]", children: "FMOH Case Study" }) })] })] }) }) }), _jsx("section", { className: "py-20 bg-[#F8FAFC]", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8", children: [_jsxs("div", { className: "max-w-2xl", children: [_jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-[#16C7D9]", children: "Specialized Healthcare Suites" }), _jsx("h2", { className: "text-3xl font-extrabold text-[#0B1F33] font-heading mt-1", children: "Field-proven healthcare infrastructure." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: systems.map((sys) => (_jsxs("div", { className: "bg-white p-8 rounded-[16px] border border-[#E2E8F0] shadow-sm flex flex-col justify-between", children: [_jsxs("div", { children: [_jsx("div", { className: "flex items-center justify-between mb-3", children: _jsx("span", { className: "px-2.5 py-0.5 rounded bg-[#16A34A]/10 text-[#15803D] text-[11px] font-bold", children: sys.badge }) }), _jsx("h3", { className: "text-xl font-bold text-[#0B1F33] font-heading", children: sys.title }), _jsx("p", { className: "text-xs text-[#64748B] mt-2.5 leading-relaxed", children: sys.desc }), _jsx("div", { className: "mt-5 space-y-2", children: sys.features.map((feat) => (_jsxs("div", { className: "flex items-center gap-2 text-xs text-[#334155]", children: [_jsx(CheckCircle2, { className: "h-3.5 w-3.5 text-[#16A34A] shrink-0" }), _jsx("span", { children: feat })] }, feat))) })] }), _jsx("div", { className: "mt-6 pt-4 border-t border-[#E2E8F0]", children: _jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F33] hover:text-[#16C7D9] transition-colors", children: [_jsx("span", { children: "Request technical architecture note" }), _jsx(ArrowRight, { className: "h-3 w-3" })] }) })] }, sys.title))) })] }) })] }));
};
export default HealthcarePage;
