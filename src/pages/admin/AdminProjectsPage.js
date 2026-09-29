import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { mockProjects } from '../../data/mockData';
import { Plus, Edit2, Trash2, Star, ExternalLink, Search, Globe, GitBranch, BookOpen, Play, } from 'lucide-react';
const statusColors = {
    live: 'bg-[#16A34A]/10 text-[#16A34A] border-[#16A34A]/20',
    development: 'bg-[#D97706]/10 text-[#D97706] border-[#D97706]/20',
    archived: 'bg-[#94A3B8]/10 text-[#94A3B8] border-[#94A3B8]/20',
};
export const AdminProjectsPage = () => {
    const [projects, setProjects] = useState(mockProjects);
    const [search, setSearch] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [editId, setEditId] = useState(null);
    const emptyProject = {
        slug: '',
        name: '',
        category: '',
        industry: '',
        description: '',
        image: '',
        technologies: [],
        status: 'development',
        featured: false,
        displayOrder: projects.length + 1,
    };
    const [form, setForm] = useState(emptyProject);
    const [techInput, setTechInput] = useState('');
    const filtered = projects.filter((p) => !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase()) ||
        p.industry.toLowerCase().includes(search.toLowerCase()));
    const handleEdit = (p) => {
        setEditId(p.id);
        setForm({ ...p });
        setTechInput('');
        setShowForm(true);
    };
    const handleSave = () => {
        if (!form.name.trim())
            return;
        if (editId) {
            setProjects((prev) => prev.map((p) => p.id === editId ? { ...p, ...form } : p));
        }
        else {
            const newProject = {
                ...form,
                id: `proj-${Date.now()}`,
            };
            setProjects((prev) => [newProject, ...prev]);
        }
        setShowForm(false);
        setEditId(null);
        setForm(emptyProject);
    };
    const handleDelete = (id) => {
        setProjects((prev) => prev.filter((p) => p.id !== id));
    };
    const toggleFeatured = (id) => {
        setProjects((prev) => prev.map((p) => p.id === id ? { ...p, featured: !p.featured } : p));
    };
    const addTech = () => {
        const t = techInput.trim();
        if (!t)
            return;
        setForm((f) => ({ ...f, technologies: [...(f.technologies || []), t] }));
        setTechInput('');
    };
    const removeTech = (tech) => {
        setForm((f) => ({ ...f, technologies: (f.technologies || []).filter((t) => t !== tech) }));
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "font-heading font-bold text-2xl text-[#0B1F33]", children: "Projects Showcase" }), _jsxs("p", { className: "text-sm text-[#64748B] mt-0.5", children: [projects.length, " projects"] })] }), _jsxs("button", { onClick: () => { setShowForm(true); setEditId(null); setForm(emptyProject); setTechInput(''); }, className: "inline-flex items-center gap-2 px-4 py-2 bg-[#0B1F33] text-white rounded-lg text-xs font-bold hover:bg-[#071521] transition-colors", children: [_jsx(Plus, { className: "h-4 w-4" }), "Add Project"] })] }), showForm && (_jsxs("div", { className: "bg-white rounded-xl border border-[#E2E8F0] p-6 space-y-5", children: [_jsx("h2", { className: "font-heading font-bold text-base text-[#0B1F33]", children: editId ? 'Edit Project' : 'Add New Project' }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [[
                                { label: 'Project Name *', key: 'name', type: 'text', placeholder: 'e.g. Optimax Enterprise ERP' },
                                { label: 'Slug *', key: 'slug', type: 'text', placeholder: 'e.g. optimax-enterprise-erp' },
                                { label: 'Category *', key: 'category', type: 'text', placeholder: 'e.g. Enterprise ERP' },
                                { label: 'Industry *', key: 'industry', type: 'text', placeholder: 'e.g. Commerce & Operations' },
                                { label: 'Image URL', key: 'image', type: 'url', placeholder: 'https://…' },
                                { label: 'Live URL', key: 'liveUrl', type: 'url', placeholder: 'https://…' },
                                { label: 'Demo URL', key: 'demoUrl', type: 'url', placeholder: 'https://…' },
                                { label: 'GitHub URL', key: 'githubUrl', type: 'url', placeholder: 'https://github.com/…' },
                                { label: 'Documentation URL', key: 'documentationUrl', type: 'url', placeholder: 'https://…' },
                            ].map(({ label, key, type, placeholder }) => (_jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: label }), _jsx("input", { type: type, value: form[key] ?? '', onChange: (e) => setForm((f) => ({ ...f, [key]: e.target.value })), placeholder: placeholder, className: "w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]" })] }, key))), _jsxs("div", { className: "sm:col-span-2", children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: "Description *" }), _jsx("textarea", { value: form.description, onChange: (e) => setForm((f) => ({ ...f, description: e.target.value })), rows: 3, className: "w-full px-3 py-2 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9] resize-none" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: "Status" }), _jsxs("select", { value: form.status, onChange: (e) => setForm((f) => ({ ...f, status: e.target.value })), className: "w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]", children: [_jsx("option", { value: "live", children: "Live" }), _jsx("option", { value: "development", children: "Development" }), _jsx("option", { value: "archived", children: "Archived" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: "Display Order" }), _jsx("input", { type: "number", min: 1, value: form.displayOrder ?? '', onChange: (e) => setForm((f) => ({ ...f, displayOrder: Number(e.target.value) })), className: "w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]" })] }), _jsxs("div", { className: "sm:col-span-2", children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: "Technologies" }), _jsxs("div", { className: "flex gap-2 mb-2", children: [_jsx("input", { type: "text", value: techInput, onChange: (e) => setTechInput(e.target.value), onKeyDown: (e) => e.key === 'Enter' && (e.preventDefault(), addTech()), placeholder: "Add a technology and press Enter", className: "flex-1 h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]" }), _jsx("button", { onClick: addTech, className: "px-3 py-2 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-xs font-semibold text-[#64748B] hover:bg-[#E2E8F0]", children: "Add" })] }), (form.technologies ?? []).length > 0 && (_jsx("div", { className: "flex flex-wrap gap-2", children: (form.technologies ?? []).map((tech) => (_jsxs("span", { className: "flex items-center gap-1.5 px-2.5 py-1 bg-[#0B1F33]/10 text-[#0B1F33] rounded-full text-xs font-semibold", children: [tech, _jsx("button", { onClick: () => removeTech(tech), className: "text-[#64748B] hover:text-[#DC2626]", children: "\u00D7" })] }, tech))) }))] }), _jsx("div", { className: "sm:col-span-2 flex items-center gap-3", children: _jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [_jsx("input", { type: "checkbox", checked: form.featured, onChange: (e) => setForm((f) => ({ ...f, featured: e.target.checked })), className: "h-4 w-4 rounded border-[#E2E8F0]" }), _jsx("span", { className: "text-xs font-semibold text-[#172333]", children: "Featured project" })] }) })] }), _jsxs("div", { className: "flex gap-3 pt-2 border-t border-[#E2E8F0]", children: [_jsx("button", { onClick: handleSave, className: "px-5 py-2 bg-[#0B1F33] text-white rounded-lg text-xs font-bold hover:bg-[#071521] transition-colors", children: editId ? 'Save Changes' : 'Create Project' }), _jsx("button", { onClick: () => { setShowForm(false); setEditId(null); }, className: "px-5 py-2 border border-[#E2E8F0] rounded-lg text-xs font-semibold text-[#64748B] hover:bg-[#F7F9FA] transition-colors", children: "Cancel" })] })] })), _jsx("div", { className: "bg-white rounded-xl border border-[#E2E8F0] p-4", children: _jsxs("div", { className: "relative max-w-sm", children: [_jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]" }), _jsx("input", { type: "text", placeholder: "Search projects\u2026", value: search, onChange: (e) => setSearch(e.target.value), className: "w-full h-9 pl-9 pr-4 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] placeholder-[#94A3B8] focus:outline-none focus:border-[#16C7D9]" })] }) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5", children: filtered.map((project) => (_jsxs("div", { className: "bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-[0_4px_16px_rgba(11,31,51,0.08)] transition-shadow", children: [_jsxs("div", { className: "aspect-video bg-[#F7F9FA] overflow-hidden relative", children: [project.image ? (_jsx("img", { src: project.image, alt: project.name, className: "w-full h-full object-cover" })) : (_jsx("div", { className: "w-full h-full flex items-center justify-center text-[#94A3B8] text-xs", children: "No image" })), project.featured && (_jsxs("div", { className: "absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-[#D97706] text-white rounded-full text-[10px] font-bold", children: [_jsx(Star, { className: "h-2.5 w-2.5" }), "Featured"] })), _jsx("div", { className: `absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold border ${statusColors[project.status]}`, children: project.status })] }), _jsxs("div", { className: "p-4 space-y-3", children: [_jsxs("div", { children: [_jsx("p", { className: "text-[10px] font-mono font-bold text-[#16C7D9] uppercase tracking-wider", children: project.category }), _jsx("h3", { className: "font-heading font-bold text-sm text-[#0B1F33] mt-0.5 leading-tight", children: project.name }), _jsx("p", { className: "text-xs text-[#64748B] mt-1 line-clamp-2", children: project.description })] }), project.technologies.length > 0 && (_jsxs("div", { className: "flex flex-wrap gap-1", children: [project.technologies.slice(0, 4).map((tech) => (_jsx("span", { className: "px-2 py-0.5 bg-[#F7F9FA] border border-[#E2E8F0] rounded text-[10px] font-semibold text-[#64748B]", children: tech }, tech))), project.technologies.length > 4 && (_jsxs("span", { className: "px-2 py-0.5 bg-[#F7F9FA] border border-[#E2E8F0] rounded text-[10px] text-[#94A3B8]", children: ["+", project.technologies.length - 4] }))] })), _jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [project.liveUrl && (_jsxs("a", { href: project.liveUrl, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-1 text-[10px] text-[#16C7D9] font-semibold hover:underline", children: [_jsx(Globe, { className: "h-3 w-3" }), "Live"] })), project.demoUrl && (_jsxs("a", { href: project.demoUrl, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-1 text-[10px] text-[#64748B] font-semibold hover:underline", children: [_jsx(Play, { className: "h-3 w-3" }), "Demo"] })), project.githubUrl && (_jsxs("a", { href: project.githubUrl, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-1 text-[10px] text-[#64748B] font-semibold hover:underline", children: [_jsx(GitBranch, { className: "h-3 w-3" }), "GitHub"] })), project.documentationUrl && (_jsxs("a", { href: project.documentationUrl, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-1 text-[10px] text-[#64748B] font-semibold hover:underline", children: [_jsx(BookOpen, { className: "h-3 w-3" }), "Docs"] }))] }), _jsxs("div", { className: "flex items-center gap-2 pt-2 border-t border-[#F1F5F9]", children: [_jsx("button", { onClick: () => toggleFeatured(project.id), className: `p-1.5 rounded-lg transition-colors ${project.featured ? 'bg-[#D97706]/10 text-[#D97706]' : 'text-[#94A3B8] hover:bg-[#F1F5F9]'}`, title: project.featured ? 'Unfeature' : 'Feature', children: _jsx(Star, { className: "h-3.5 w-3.5" }) }), _jsx("button", { onClick: () => handleEdit(project), className: "p-1.5 rounded-lg text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0B1F33] transition-colors", title: "Edit", children: _jsx(Edit2, { className: "h-3.5 w-3.5" }) }), _jsx("button", { onClick: () => handleDelete(project.id), className: "p-1.5 rounded-lg text-[#94A3B8] hover:bg-[#DC2626]/10 hover:text-[#DC2626] transition-colors", title: "Delete", children: _jsx(Trash2, { className: "h-3.5 w-3.5" }) }), _jsx("a", { href: `/projects/${project.slug}`, target: "_blank", rel: "noopener noreferrer", className: "ml-auto p-1.5 rounded-lg text-[#94A3B8] hover:bg-[#F1F5F9] hover:text-[#0B1F33] transition-colors", title: "View public page", children: _jsx(ExternalLink, { className: "h-3.5 w-3.5" }) })] })] })] }, project.id))) })] }));
};
export default AdminProjectsPage;
