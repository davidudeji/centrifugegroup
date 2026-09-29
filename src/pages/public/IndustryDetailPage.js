import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../../components/ui/SEO';
import { Button } from '../../components/ui/Button';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
const industryDetails = {
    healthcare: {
        title: 'Healthcare & Public Health Information Systems',
        subtitle: 'Digitizing medical personnel governance, clinical workflows, and emergency health tracking.',
        problem: 'Disjointed medical record-keeping, multi-month accreditation backlogs, and lack of real-time epidemiological visibility hamper patient care and regulatory governance across regional hospitals.',
        howCentrifugeHelps: [
            'National Human Resource for Health Information System (HRHIS) tracking healthcare workers nationwide.',
            'Paperless hospital EMR managing outpatient triage, lab LIS, pharmacy dispensing, and insurance claims.',
            'Cryptographic QR code professional practicing license verification portals eliminating forged credentials.',
            'Cellular IoT temperature telemetry safeguarding vaccine depot cold-chains 24/7.',
        ],
        relevantSolutions: [
            { name: 'Healthcare Informatics Suite', url: '/solutions/healthcare' },
            { name: 'Data & Geospatial GIS Mapping', url: '/solutions/data-analytics' },
        ],
        relevantServices: [
            { name: 'Custom Software Development', url: '/services/software-development' },
            { name: 'Institutional Training & Capacity', url: '/services/training' },
        ],
        caseStudy: {
            title: 'FMOH National Health Workforce HRHIS Modernization',
            url: '/case-studies/fmoh-national-health-workforce',
        }
    },
    logistics: {
        title: 'Logistics, Freight & Inter-State Mobility',
        subtitle: 'Real-time telemetry, automated dispatch, and digital delivery auditing.',
        problem: 'High cargo transit risks, undetected fuel pilferage along transit corridors, and reliance on physical delivery notes that delay freight invoicing cycles by up to 30 days.',
        howCentrifugeHelps: [
            'Hardware-agnostic telematics integration providing live second-by-second vehicle tracking.',
            'CAN-Bus engine sensor monitoring for automated fuel drop detection.',
            'Mobile driver app with offline digital proof-of-delivery (ePOD) and tamper-proof photo signatures.',
            'Automated consignee tracking links and departure geofencing triggers.',
        ],
        relevantSolutions: [
            { name: 'Logistics & Dispatch Mobility Suite', url: '/solutions/logistics' },
            { name: 'Hardware & Pure Sine Wave Backups', url: '/shop' },
        ],
        relevantServices: [
            { name: 'Mobile Application Engineering', url: '/services/mobile-development' },
            { name: 'Cloud Infrastructure & Telemetry', url: '/services/cloud' },
        ],
        caseStudy: {
            title: 'Inter-State Logistics Telematics & Visibility',
            url: '/case-studies/nationwide-fleet-telematics',
        }
    },
    government: {
        title: 'Government Ministries, Departments & Agencies',
        subtitle: 'Institutional platforms, verified citizen registries, and automated fee collections.',
        problem: 'Manual paper queues for accreditation, reconciliation leakages with treasury accounts, and high overhead maintaining outdated local servers.',
        howCentrifugeHelps: [
            'High-concurrency digital licensing portals integrated with Remita payment gateways.',
            'Tamper-proof verifiable digital certificates with instant QR validation.',
            'Capacity building and cascading training for federal and state civil service personnel.',
            'Cloud modernization adhering to Nigerian Data Protection Regulations (NDPR).',
        ],
        relevantSolutions: [
            { name: 'Optimax Enterprise Platform', url: '/solutions/optimax' },
            { name: 'Healthcare & Regulatory Registries', url: '/solutions/healthcare' },
        ],
        relevantServices: [
            { name: 'Institutional Training & Capacity', url: '/services/training' },
            { name: 'Technology Consulting & Audits', url: '/services/consulting' },
        ],
        caseStudy: {
            title: 'Nursing & Midwifery Council Digital Licensing Portal',
            url: '/case-studies/nursing-council-digital-licensing',
        }
    },
    enterprise: {
        title: 'Large Commercial Enterprises & Energy Conglomerates',
        subtitle: 'Connected ERP architectures, automated multi-depot inventory, and secure cloud clusters.',
        problem: 'Multi-entity corporate groups struggle with fragmented reporting, disconnected branches, and slow financial consolidation across divisions.',
        howCentrifugeHelps: [
            'Optimax unified ERP connecting sales, multi-warehouse stock, and double-entry general ledgers.',
            'Custom API middleware integrating existing legacy accounting systems.',
            'High-availability cloud container clusters with strict 99.9% uptime SLAs.',
        ],
        relevantSolutions: [
            { name: 'Optimax Enterprise ERP Suite', url: '/solutions/optimax' },
            { name: 'Custom Enterprise Systems', url: '/solutions/enterprise' },
        ],
        relevantServices: [
            { name: 'Custom Software Development', url: '/services/software-development' },
            { name: 'Managed IT & Support SLAs', url: '/services/managed-it' },
        ]
    },
    smes: {
        title: 'Growing Commercial SMEs & Multi-Branch Retailers',
        subtitle: 'Fast-deploy cloud POS, stock auditing, and continuous solar power infrastructure.',
        problem: 'Erratic grid power disrupting point-of-sale operations, internal inventory shrinkage, and lack of real-time sales visibility.',
        howCentrifugeHelps: [
            'Turnkey point-of-sale and barcode inventory software running offline and online.',
            'Industrial pure sine wave hybrid inverters and UPS backup power for zero downtime.',
            'Multi-branch daily revenue auditing and low-stock replenishment alerts.',
        ],
        relevantSolutions: [
            { name: 'Optimax Commerce & POS', url: '/solutions/optimax' },
            { name: 'Commercial Hardware Store', url: '/shop' },
        ],
        relevantServices: [
            { name: 'Hardware & Infrastructure Setup', url: '/services/infrastructure' },
            { name: 'Custom Software Development', url: '/services/software-development' },
        ]
    }
};
export const IndustryDetailPage = () => {
    const { slug } = useParams();
    const ind = (slug && industryDetails[slug]) || industryDetails['healthcare'];
    return (_jsxs("div", { className: "w-full text-left", children: [_jsx(SEO, { title: `${ind.title} | Centrifuge Industry Solutions`, description: ind.subtitle }), _jsx("section", { className: "bg-[#0B1F33] text-white py-16 sm:py-20 border-b border-[#172333]", children: _jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4", children: [_jsxs(Link, { to: "/industries", className: "inline-flex items-center gap-1.5 text-xs font-semibold text-[#94A3B8] hover:text-[#16C7D9] transition-colors", children: [_jsx(ArrowLeft, { className: "h-3.5 w-3.5" }), _jsx("span", { children: "All Industries" })] }), _jsxs("div", { className: "pt-2", children: [_jsx("span", { className: "text-xs font-mono font-bold text-[#16C7D9] tracking-wider uppercase", children: "INDUSTRY SPECIFICATION" }), _jsx("h1", { className: "text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mt-1", children: ind.title })] }), _jsx("p", { className: "text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-3xl", children: ind.subtitle }), _jsx("div", { className: "pt-4", children: _jsx(Link, { to: "/contact", children: _jsx(Button, { variant: "primary", size: "md", rightIcon: _jsx(ArrowRight, { className: "h-4 w-4" }), children: "Consult Industry Experts" }) }) })] }) }), _jsx("section", { className: "py-16 bg-[#F8FAFC]", children: _jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12", children: [_jsxs("div", { className: "bg-[#FEF2F2] p-8 rounded-[16px] border border-[#FEE2E2] space-y-2", children: [_jsx("span", { className: "text-xs font-mono font-bold text-[#DC2626] uppercase", children: "The Operational Problem In This Sector" }), _jsx("p", { className: "text-sm text-[#7F1D1D] leading-relaxed", children: ind.problem })] }), _jsxs("div", { className: "bg-white p-8 rounded-[16px] border border-[#E2E8F0] space-y-4", children: [_jsx("h3", { className: "text-xl font-bold text-[#0B1F33] font-heading", children: "How Centrifuge Solves It" }), _jsx("div", { className: "space-y-3 pt-2", children: ind.howCentrifugeHelps.map((point, i) => (_jsxs("div", { className: "flex items-start gap-3 text-xs sm:text-sm text-[#334155]", children: [_jsx(CheckCircle2, { className: "h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" }), _jsx("span", { className: "leading-relaxed", children: point })] }, i))) })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsxs("div", { className: "bg-white p-7 rounded-[14px] border border-[#E2E8F0] space-y-3", children: [_jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-[#64748B] block", children: "Relevant Centrifuge Platforms" }), _jsx("div", { className: "space-y-2 pt-1", children: ind.relevantSolutions.map((sol) => (_jsxs(Link, { to: sol.url, className: "flex items-center justify-between p-2.5 rounded-[6px] bg-[#F8FAFC] hover:bg-[#F1F5F9] text-xs font-semibold text-[#0B1F33] transition-colors", children: [_jsx("span", { children: sol.name }), _jsx(ArrowRight, { className: "h-3 w-3 text-[#16C7D9]" })] }, sol.name))) })] }), _jsxs("div", { className: "bg-white p-7 rounded-[14px] border border-[#E2E8F0] space-y-3", children: [_jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-[#64748B] block", children: "Related Engineering Services" }), _jsx("div", { className: "space-y-2 pt-1", children: ind.relevantServices.map((svc) => (_jsxs(Link, { to: svc.url, className: "flex items-center justify-between p-2.5 rounded-[6px] bg-[#F8FAFC] hover:bg-[#F1F5F9] text-xs font-semibold text-[#0B1F33] transition-colors", children: [_jsx("span", { children: svc.name }), _jsx(ArrowRight, { className: "h-3 w-3 text-[#16C7D9]" })] }, svc.name))) })] })] }), ind.caseStudy && (_jsxs("div", { className: "p-8 rounded-[16px] bg-[#071521] text-white flex flex-col sm:flex-row items-center justify-between gap-6", children: [_jsxs("div", { children: [_jsx("span", { className: "text-[11px] font-mono text-[#16C7D9] uppercase font-bold", children: "PROVEN OUTCOME" }), _jsx("h4", { className: "text-lg font-bold font-heading mt-1", children: ind.caseStudy.title })] }), _jsx(Link, { to: ind.caseStudy.url, children: _jsx(Button, { variant: "primary", size: "md", children: "Read Case Study" }) })] }))] }) })] }));
};
export default IndustryDetailPage;
