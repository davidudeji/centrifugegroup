import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/ui/SEO';
import { projectService } from '../../services/projectService';
import { ArrowRight, ArrowUpRight, Search } from 'lucide-react';
import { Input } from '../../components/ui/Input';
export const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        projectService.getProjects().then((data) => {
            setProjects(data);
            setIsLoading(false);
        });
    }, []);
    const categories = [
        'all',
        'Enterprise ERP',
        'Logistics Management',
        'HRHIS',
        'Electronic Hospital Management',
        'Geospatial & Mapping',
        'IoT Solutions'
    ];
    const filtered = projects.filter((p) => {
        const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
        const matchesSearch = searchQuery === '' ||
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.industry.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
    });
    return (_jsxs("div", { className: "w-full text-left", children: [_jsx(SEO, { title: "What We've Built | Projects & Products Showcase", description: "Explore the platforms, products, and digital systems designed and delivered by Centrifuge Group." }), _jsx("section", { className: "bg-[#0B1F33] text-white py-16 sm:py-24 border-b border-[#172333]", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-3xl space-y-4", children: [_jsx("span", { className: "text-xs font-mono font-bold text-[#16C7D9] tracking-wider uppercase", children: "DELIVERED SYSTEMS & DIGITAL PRODUCTS" }), _jsx("h1", { className: "text-3xl sm:text-5xl font-extrabold font-heading tracking-tight", children: "What we've built." }), _jsx("p", { className: "text-base sm:text-lg text-[#94A3B8] leading-relaxed", children: "Explore the platforms, enterprise software, and mission-critical systems we've designed and delivered for commercial operations, healthcare, logistics, and government institutions." })] }) }) }), _jsx("section", { className: "py-14 bg-[#F7F9FA]", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E2E8F0]", children: [_jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((cat) => (_jsx("button", { onClick: () => setSelectedCategory(cat), className: `text-xs px-3 py-1.5 rounded-[6px] font-medium transition-all ${selectedCategory === cat
                                            ? 'bg-[#0B1F33] text-white font-semibold shadow-xs'
                                            : 'bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#F1F5F9]'}`, children: cat === 'all' ? 'All Projects' : cat }, cat))) }), _jsx("div", { className: "w-full md:w-72", children: _jsx(Input, { placeholder: "Search projects...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), leftIcon: _jsx(Search, { className: "h-4 w-4" }) }) })] }), isLoading ? (_jsx("div", { className: "py-20 text-center text-xs text-[#64748B]", children: "Loading project portfolio..." })) : filtered.length === 0 ? (_jsx("div", { className: "py-20 text-center text-sm text-[#64748B] bg-white rounded-[12px] border border-[#E2E8F0]", children: "No projects found matching your criteria." })) : (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: filtered.map((proj) => (_jsxs("div", { className: "bg-white rounded-[16px] border border-[#E2E8F0] overflow-hidden flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-md transition-all group", children: [_jsxs("div", { children: [_jsxs("div", { className: "h-52 relative overflow-hidden bg-[#0B1F33]", children: [_jsx("img", { src: proj.image, alt: proj.name, className: "w-full h-full object-cover opacity-90 group-hover:scale-103 transition-transform duration-300" }), _jsxs("div", { className: "absolute top-3 left-3 flex gap-1.5", children: [_jsx("span", { className: "px-2 py-0.5 rounded-[4px] bg-white/95 text-[10px] font-bold text-[#0B1F33] shadow-xs", children: proj.category }), proj.status === 'live' && (_jsx("span", { className: "px-2 py-0.5 rounded-[4px] bg-[#16A34A] text-[10px] font-bold text-white shadow-xs", children: "LIVE" }))] })] }), _jsxs("div", { className: "p-6", children: [_jsx("div", { className: "text-[11px] font-mono font-bold text-[#64748B] uppercase tracking-wider", children: proj.industry }), _jsx("h3", { className: "text-lg font-bold text-[#0B1F33] font-heading mt-1 group-hover:text-[#16C7D9] transition-colors leading-snug", children: proj.name }), _jsx("p", { className: "text-xs text-[#64748B] mt-2 line-clamp-3 leading-relaxed", children: proj.description }), _jsx("div", { className: "flex flex-wrap gap-1.5 mt-4", children: proj.technologies.slice(0, 4).map((tech) => (_jsx("span", { className: "px-2 py-0.5 rounded bg-[#F1F5F9] text-[10px] text-[#475569] font-mono", children: tech }, tech))) })] })] }), _jsxs("div", { className: "px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between", children: [_jsxs(Link, { to: `/projects/${proj.slug}`, className: "text-xs font-bold text-[#0B1F33] group-hover:text-[#16C7D9] inline-flex items-center gap-1 transition-colors", children: [_jsx("span", { children: "View Project Details" }), _jsx(ArrowRight, { className: "h-3.5 w-3.5" })] }), _jsx("div", { className: "flex items-center gap-2", children: proj.demoUrl && (_jsxs("a", { href: proj.demoUrl, target: "_blank", rel: "noopener noreferrer", className: "text-[11px] font-semibold text-[#64748B] hover:text-[#0B1F33] flex items-center gap-0.5", title: "Open Live Demo", children: [_jsx("span", { children: "Demo" }), _jsx(ArrowUpRight, { className: "h-3 w-3" })] })) })] })] }, proj.id))) }))] }) })] }));
};
export default ProjectsPage;
