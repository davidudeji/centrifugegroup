import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../../components/ui/SEO';
import { Button } from '../../components/ui/Button';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
const serviceDatabase = {
    'software-development': {
        title: 'Custom Enterprise Software Development',
        category: 'Engineering & Architecture',
        problem: 'Commercial off-the-shelf software rarely fits intricate multi-department workflows, causing organizations to run critical processes on chaotic spreadsheets and disconnected tools.',
        solution: 'We architect and build tailored web applications and API ecosystems engineered specifically for your organizational structure, governance rules, and scaling roadmap.',
        capabilities: [
            'Modern web application engineering with React, TypeScript, and Node.js',
            'High-performance relational database schemas (PostgreSQL) with audit triggers',
            'Event-driven asynchronous background job queues and micro-services',
            'Automated testing suites ensuring zero-regression releases',
            'Role-based security complying with ISO and NDPR regulations',
        ],
        process: [
            { step: '01', title: 'Operational Discovery', desc: 'Detailed workflow mapping with departmental leads and end users.' },
            { step: '02', title: 'System Blueprinting', desc: 'Interactive prototypes, database entity models, and API specifications.' },
            { step: '03', title: 'Iterative Engineering', desc: 'Bi-weekly sprint demos with production-grade test coverage.' },
            { step: '04', title: 'Deployment & Training', desc: 'Zero-downtime deployment followed by hands-on user enablement.' },
        ],
        technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Redis', 'Tailwind CSS'],
        useCases: [
            'Centralized enterprise ERP and financial accounting suites',
            'National professional credentialing and digital licensing registries',
            'Multi-branch retail inventory and warehouse stock management',
        ]
    },
    'mobile-development': {
        title: 'Mobile Application Engineering',
        category: 'Field & Consumer Mobility',
        problem: 'Field workers, truck drivers, and community healthcare workers frequently operate in remote regions with unstable or absent cellular network coverage.',
        solution: 'We engineer offline-first mobile applications with local-first transactional stores and automated background delta synchronization when reconnected.',
        capabilities: [
            'Offline-first data architectures using encrypted local stores',
            'Biometric fingerprint and camera OCR identification',
            'Bluetooth integration with portable POS printers and medical probes',
            'Mobile Device Management (MDM) deployment for corporate fleets',
        ],
        process: [
            { step: '01', title: 'Field UX Research', desc: 'Testing interface ergonomic constraints under sunlight and on low-spec hardware.' },
            { step: '02', title: 'Sync Architecture', desc: 'Designing conflict-free replicated data models (CRDT) for offline edits.' },
            { step: '03', title: 'Native Integration', desc: 'Hardware peripheral interfacing (GPS, Bluetooth, NFC).' },
            { step: '04', title: 'Rollout & Telemetry', desc: 'Crash reporting and automated over-the-air updates.' },
        ],
        technologies: ['React Native', 'TypeScript', 'SQLite', 'C/C++ Embedded', 'Background Sync Workers'],
        useCases: [
            'Logistics driver delivery and proof-of-delivery (ePOD) handhelds',
            'Community health worker patient survey and triage tools',
            'Mobile POS cash collection for distributors and FMCG sales teams',
        ]
    },
    'cloud': {
        title: 'Cloud & Infrastructure Services',
        category: 'DevOps & Scalability',
        problem: 'Self-hosted servers and poorly configured cloud instances suffer catastrophic outages during traffic spikes, unmonitored disk fills, and lack automated disaster recovery.',
        solution: 'Centrifuge engineers automated containerized cloud environments with automated scaling, multi-region failovers, and 99.9% uptime SLA commitments.',
        capabilities: [
            'Container orchestration using Docker and Kubernetes',
            'Infrastructure as Code (Terraform / Ansible)',
            'Automated database snapshots with point-in-time recovery',
            'Web Application Firewall (WAF) and DDoS mitigation',
        ],
        process: [
            { step: '01', title: 'Infrastructure Audit', desc: 'Assessing single-points-of-failure, security holes, and cloud expenditure.' },
            { step: '02', title: 'Topology Design', desc: 'Blue-green deployment architecture and automated backup pipelines.' },
            { step: '03', title: 'Migration Execution', desc: 'Zero-loss database migration with minimum maintenance windows.' },
            { step: '04', title: '24/7 Monitoring', desc: 'Automated paging and proactive incident remediation.' },
        ],
        technologies: ['Docker', 'Kubernetes', 'AWS', 'Linux ARM', 'PostgreSQL HA', 'Cloudflare', 'Prometheus'],
        useCases: [
            'Hosting high-concurrency national examination registration portals',
            'Mission-critical hospital EMR cloud backups',
            'Enterprise ERP application clusters',
        ]
    },
    'infrastructure': {
        title: 'Hardware & Telemetry Infrastructure',
        category: 'Hardware & Power',
        problem: 'Erratic national power grids and harsh tropical temperatures damage sensitive server hardware and interrupt commercial point of sale.',
        solution: 'Turnkey hardware provisioning: pure sine wave hybrid inverters, zero-transfer online UPS cabinets, and ruggedized IP67 IoT telemetry devices.',
        capabilities: [
            'Data-center grade online double-conversion UPS installations (<0ms transfer)',
            'Heavy-duty industrial pure sine wave inverters with smart solar hybrid integration',
            'IP67 waterproof GPS/CAN-Bus telematics tracking gateways',
            'Cold-chain vaccine depot wireless temperature & humidity logging',
        ],
        process: [
            { step: '01', title: 'Load Audit', desc: 'On-site power and telemetry audit measuring true surge requirements.' },
            { step: '02', title: 'Hardware Sizing', desc: 'Selecting calibrated inverters, battery banks, and sensor nodes.' },
            { step: '03', title: 'Turnkey Installation', desc: 'Physical deployment, cable management, and telemetry commissioning.' },
            { step: '04', title: 'Remote Monitoring', desc: 'Connecting hardware to cloud telemetry boards for automated alerts.' },
        ],
        technologies: ['Modbus RS485', 'MQTT', 'Pure Sine Wave', 'LiFePO4 Batteries', 'CAN-Bus OBD-II'],
        useCases: [
            'Hospital diagnostic laboratory uninterrupted power backup',
            'Commercial logistics interstate fleet GPS telemetry tracking',
            'Enterprise server room modular UPS power conditioning',
        ]
    },
    'managed-it': {
        title: 'Managed IT & Enterprise Support',
        category: 'Ongoing Operations',
        problem: 'Hiring full-time in-house specialist teams for network security, database tuning, and hardware maintenance is expensive and difficult to retain.',
        solution: 'Centrifuge acts as your dedicated enterprise systems custodian, providing guaranteed response times, regular security audits, and continuous system maintenance.',
        capabilities: [
            'Dedicated Tier-2 and Tier-3 technical support engineers',
            'Continuous performance tuning and database index optimization',
            'Regular penetration testing and compliance audits',
            'Quarterly executive technology roadmap reviews',
        ],
        process: [
            { step: '01', title: 'SLA Baseline', desc: 'Defining clear response times and priority incident escalation trees.' },
            { step: '02', title: 'Agent Deployment', desc: 'Installing non-intrusive health probes across server nodes.' },
            { step: '03', title: 'Continuous Maintenance', desc: 'Patch management, security updates, and automated backups.' },
            { step: '04', title: 'Reporting', desc: 'Monthly SLA reports and optimization recommendations.' },
        ],
        technologies: ['Grafana', 'Prometheus', 'Zendesk', 'PostgreSQL Admin Tools', 'Network Scanners'],
        useCases: [
            'Public sector ministry national platform operations',
            'Enterprise corporate headquarters network maintenance',
        ]
    },
    'consulting': {
        title: 'Technology Consulting & Architecture Advisory',
        category: 'Strategic Advisory',
        problem: 'Organizations waste millions on software licenses and failed implementations due to vendor lock-in, poor architectural planning, or misunderstood requirements.',
        solution: 'Senior architectural guidance evaluating system feasibility, designing vendor-neutral technical blueprints, and safeguarding technology investments.',
        capabilities: [
            'Comprehensive software architecture audits',
            'Technical RFP drafting and vendor proposal evaluation',
            'Data governance and NDPR privacy compliance advisory',
            'Digital transformation roadmaps for legacy enterprises',
        ],
        process: [
            { step: '01', title: 'Stakeholder Interviews', desc: 'Engaging executive management, operations teams, and IT staff.' },
            { step: '02', title: 'Architecture Review', desc: 'Deep inspection of current codebases, schemas, and infrastructure.' },
            { step: '03', title: 'Gap Analysis', desc: 'Identifying bottlenecks, security risks, and technical debt.' },
            { step: '04', title: 'Actionable Blueprint', desc: 'Delivering practical implementation blueprints and cost models.' },
        ],
        technologies: ['TOGAF Framework', 'Enterprise Architecture', 'NDPR Standards', 'OpenHIE'],
        useCases: [
            'Federal ministry health informatics architecture review',
            'Enterprise logistics digital modernization feasibility study',
        ]
    },
    'training': {
        title: 'Institutional Training & Capacity Building',
        category: 'Workforce Enablement',
        problem: 'Sophisticated software systems fail when end-users are intimidated by the interface or lack structured hands-on training.',
        solution: 'Empowering civil servants, health workers, and enterprise employees with practical, role-specific training curricula, interactive labs, and clear job aids.',
        capabilities: [
            'Customized role-specific curriculum design',
            'Nationwide train-the-trainer cascading workshops',
            'Bilingual documentation and illustrated visual quick-guides',
            'Post-training competency assessments and certification',
        ],
        process: [
            { step: '01', title: 'Skill Assessment', desc: 'Evaluating baseline digital literacy among operational cohorts.' },
            { step: '02', title: 'Curriculum Development', desc: 'Building practical scenario-based training materials.' },
            { step: '03', title: 'Interactive Delivery', desc: 'Conducting in-person and hybrid hands-on sandbox workshops.' },
            { step: '04', title: 'Post-Training Support', desc: 'Providing ongoing desk support and refresher modules.' },
        ],
        technologies: ['Interactive Sandbox LMS', 'Video Guides', 'Illustrated Job Aids'],
        useCases: [
            'Training federal and state health planning officers on HRHIS registries',
            'Training warehouse staff on Optimax barcode inventory scanning',
        ]
    }
};
export const ServiceDetailPage = () => {
    const { slug } = useParams();
    const service = (slug && serviceDatabase[slug]) || serviceDatabase['software-development'];
    return (_jsxs("div", { className: "w-full text-left", children: [_jsx(SEO, { title: `${service.title} | Centrifuge Engineering`, description: service.solution }), _jsx("section", { className: "bg-[#0B1F33] text-white py-16 sm:py-20 border-b border-[#172333]", children: _jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4", children: [_jsxs(Link, { to: "/services", className: "inline-flex items-center gap-1.5 text-xs font-semibold text-[#94A3B8] hover:text-[#16C7D9] transition-colors", children: [_jsx(ArrowLeft, { className: "h-3.5 w-3.5" }), _jsx("span", { children: "All Engineering Services" })] }), _jsxs("div", { className: "pt-2", children: [_jsx("span", { className: "text-xs font-mono font-bold text-[#16C7D9] tracking-wider uppercase", children: service.category }), _jsx("h1", { className: "text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mt-1", children: service.title })] }), _jsx("p", { className: "text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-3xl", children: service.solution }), _jsx("div", { className: "pt-4 flex items-center gap-3", children: _jsx(Link, { to: "/contact", children: _jsx(Button, { variant: "primary", size: "md", rightIcon: _jsx(ArrowRight, { className: "h-4 w-4" }), children: "Discuss Your Requirements" }) }) })] }) }), _jsx("section", { className: "py-16 bg-[#F8FAFC]", children: _jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsxs("div", { className: "bg-white p-7 rounded-[14px] border border-[#E2E8F0] space-y-3", children: [_jsx("span", { className: "text-xs font-mono font-bold text-[#DC2626] uppercase", children: "The Operational Bottleneck" }), _jsx("p", { className: "text-sm text-[#475569] leading-relaxed", children: service.problem })] }), _jsxs("div", { className: "bg-white p-7 rounded-[14px] border border-[#E2E8F0] space-y-3", children: [_jsx("span", { className: "text-xs font-mono font-bold text-[#16A34A] uppercase", children: "The Centrifuge Approach" }), _jsx("p", { className: "text-sm text-[#475569] leading-relaxed", children: service.solution })] })] }), _jsxs("div", { className: "bg-white p-8 rounded-[16px] border border-[#E2E8F0] space-y-4", children: [_jsx("h3", { className: "text-xl font-bold text-[#0B1F33] font-heading", children: "Engineered Capabilities & Deliverables" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2", children: service.capabilities.map((cap, i) => (_jsxs("div", { className: "flex items-start gap-2.5 text-xs text-[#334155]", children: [_jsx(CheckCircle2, { className: "h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" }), _jsx("span", { className: "leading-relaxed", children: cap })] }, i))) })] }), _jsxs("div", { className: "space-y-6", children: [_jsx("h3", { className: "text-xl font-bold text-[#0B1F33] font-heading", children: "Our Implementation Process" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: service.process.map((p) => (_jsxs("div", { className: "bg-white p-6 rounded-[12px] border border-[#E2E8F0]", children: [_jsx("span", { className: "text-xl font-mono font-bold text-[#16C7D9] block", children: p.step }), _jsx("h4", { className: "text-sm font-bold text-[#0B1F33] font-heading mt-2", children: p.title }), _jsx("p", { className: "text-xs text-[#64748B] mt-1.5 leading-relaxed", children: p.desc })] }, p.step))) })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsxs("div", { className: "bg-white p-7 rounded-[14px] border border-[#E2E8F0] space-y-3", children: [_jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-[#64748B] block", children: "Technology Standards" }), _jsx("div", { className: "flex flex-wrap gap-1.5 pt-1", children: service.technologies.map((t) => (_jsx("span", { className: "px-2.5 py-1 rounded bg-[#F1F5F9] text-xs font-mono text-[#0B1F33]", children: t }, t))) })] }), _jsxs("div", { className: "bg-white p-7 rounded-[14px] border border-[#E2E8F0] space-y-3", children: [_jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-[#64748B] block", children: "Representative Deployments" }), _jsx("div", { className: "space-y-2 pt-1", children: service.useCases.map((uc, i) => (_jsxs("div", { className: "flex items-center gap-2 text-xs text-[#334155]", children: [_jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#16C7D9]" }), _jsx("span", { children: uc })] }, i))) })] })] }), _jsxs("div", { className: "p-8 rounded-[16px] bg-[#071521] text-white flex flex-col sm:flex-row items-center justify-between gap-6", children: [_jsxs("div", { children: [_jsxs("h3", { className: "text-xl font-bold font-heading", children: ["Ready to scope your ", service.title, "?"] }), _jsx("p", { className: "text-xs text-[#94A3B8] mt-1", children: "Consult with our senior technical architects today." })] }), _jsx(Link, { to: "/contact", children: _jsx(Button, { variant: "primary", size: "md", children: "Talk to Centrifuge" }) })] })] }) })] }));
};
export default ServiceDetailPage;
