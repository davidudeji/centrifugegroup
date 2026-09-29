import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/ui/SEO';
import { mockJobs } from '../../data/mockData';
import { MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/Button';
export const JobsPage = () => {
    const [selectedDept, setSelectedDept] = useState('All');
    const departments = ['All', 'Engineering', 'Healthcare Solutions', 'Product Design'];
    const filtered = selectedDept === 'All'
        ? mockJobs
        : mockJobs.filter((j) => j.department === selectedDept);
    return (_jsxs("div", { className: "w-full text-left", children: [_jsx(SEO, { title: "Open Positions | Centrifuge Careers", description: "Explore open engineering, product design, and health informatics roles at Centrifuge Group." }), _jsx("section", { className: "bg-[#0B1F33] text-white py-14 sm:py-20 border-b border-[#172333]", children: _jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3", children: [_jsxs(Link, { to: "/careers", className: "inline-flex items-center gap-1.5 text-xs font-semibold text-[#94A3B8] hover:text-[#16C7D9] transition-colors", children: [_jsx(ArrowLeft, { className: "h-3.5 w-3.5" }), _jsx("span", { children: "Careers Overview" })] }), _jsx("h1", { className: "text-3xl sm:text-5xl font-extrabold font-heading tracking-tight", children: "Job Openings at Centrifuge" }), _jsx("p", { className: "text-sm sm:text-base text-[#94A3B8] max-w-2xl", children: "We are actively expanding our software engineering, health informatics, and product design teams in Abuja and remote locations." })] }) }), _jsx("section", { className: "py-14 bg-[#F8FAFC]", children: _jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8", children: [_jsx("div", { className: "flex flex-wrap gap-2 pb-4 border-b border-[#E2E8F0]", children: departments.map((dept) => (_jsx("button", { onClick: () => setSelectedDept(dept), className: `text-xs px-3.5 py-1.5 rounded-[6px] font-medium transition-colors ${selectedDept === dept
                                    ? 'bg-[#0B1F33] text-white font-semibold'
                                    : 'bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#F1F5F9]'}`, children: dept }, dept))) }), _jsx("div", { className: "space-y-4", children: filtered.map((job) => (_jsxs("div", { className: "bg-white p-6 rounded-[14px] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4", children: [_jsxs("div", { className: "space-y-1.5", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "px-2 py-0.5 rounded bg-[#0B1F33]/5 text-[#0B1F33] text-[10px] font-bold uppercase", children: job.department }), _jsx("span", { className: "px-2 py-0.5 rounded bg-[#10B981]/10 text-[#166534] text-[10px] font-semibold", children: job.type })] }), _jsx("h3", { className: "text-base font-bold text-[#0B1F33] font-heading", children: job.title }), _jsxs("div", { className: "flex items-center gap-2 text-xs text-[#64748B]", children: [_jsx(MapPin, { className: "h-3.5 w-3.5 text-[#94A3B8]" }), _jsx("span", { children: job.location })] })] }), _jsx(Link, { to: `/careers/jobs/${job.slug}`, children: _jsx(Button, { variant: "secondary", size: "sm", children: "View Role & Apply \u2192" }) })] }, job.id))) })] }) })] }));
};
export default JobsPage;
