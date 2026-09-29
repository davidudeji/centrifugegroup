import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from 'react';
import { Upload, Search, Grid, List, Trash2, Copy, Image as ImageIcon, FileVideo, File, CheckCircle2, Plus, } from 'lucide-react';
// Demo media assets
const demoMedia = [
    {
        id: 'm-1', name: 'optimax-dashboard.jpg', type: 'image',
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
        size: '248 KB', dimensions: '1200 × 800', uploadedAt: '2024-03-20T10:00:00Z'
    },
    {
        id: 'm-2', name: 'logistics-platform.jpg', type: 'image',
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
        size: '312 KB', dimensions: '1200 × 800', uploadedAt: '2024-03-18T14:00:00Z'
    },
    {
        id: 'm-3', name: 'healthcare-system.jpg', type: 'image',
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
        size: '189 KB', dimensions: '1200 × 800', uploadedAt: '2024-03-15T08:00:00Z'
    },
    {
        id: 'm-4', name: 'titan-inverter.jpg', type: 'image',
        url: 'https://images.unsplash.com/photo-1558441719-8b4bee5e998a?auto=format&fit=crop&w=600&q=80',
        size: '267 KB', dimensions: '800 × 800', uploadedAt: '2024-03-10T09:00:00Z'
    },
    {
        id: 'm-5', name: 'solar-controller.jpg', type: 'image',
        url: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80',
        size: '198 KB', dimensions: '800 × 800', uploadedAt: '2024-03-08T11:00:00Z'
    },
    {
        id: 'm-6', name: 'gis-mapping.jpg', type: 'image',
        url: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80',
        size: '341 KB', dimensions: '1200 × 900', uploadedAt: '2024-03-05T15:00:00Z'
    },
    {
        id: 'm-7', name: 'iot-monitoring.jpg', type: 'image',
        url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
        size: '276 KB', dimensions: '1200 × 800', uploadedAt: '2024-03-01T10:00:00Z'
    },
    {
        id: 'm-8', name: 'hospital-management.jpg', type: 'image',
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
        size: '223 KB', dimensions: '1200 × 800', uploadedAt: '2024-02-28T13:00:00Z'
    },
];
export const AdminMediaPage = () => {
    const [media, setMedia] = useState(demoMedia);
    const [search, setSearch] = useState('');
    const [viewMode, setViewMode] = useState('grid');
    const [selected, setSelected] = useState([]);
    const [copiedId, setCopiedId] = useState(null);
    const fileInputRef = useRef(null);
    const filtered = media.filter((m) => !search || m.name.toLowerCase().includes(search.toLowerCase()));
    const toggleSelect = (id) => {
        setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
    };
    const handleCopyUrl = (url, id) => {
        navigator.clipboard.writeText(url);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 1500);
    };
    const handleDelete = (ids) => {
        setMedia((prev) => prev.filter((m) => !ids.includes(m.id)));
        setSelected([]);
    };
    const formatDate = (iso) => new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const TypeIcon = ({ type }) => {
        if (type === 'image')
            return _jsx(ImageIcon, { className: "h-4 w-4 text-[#16C7D9]" });
        if (type === 'video')
            return _jsx(FileVideo, { className: "h-4 w-4 text-[#D97706]" });
        return _jsx(File, { className: "h-4 w-4 text-[#64748B]" });
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "font-heading font-bold text-2xl text-[#0B1F33]", children: "Media Library" }), _jsxs("p", { className: "text-sm text-[#64748B] mt-0.5", children: [media.length, " assets"] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [selected.length > 0 && (_jsxs("button", { onClick: () => handleDelete(selected), className: "inline-flex items-center gap-2 px-3 py-2 bg-[#DC2626]/10 text-[#DC2626] border border-[#DC2626]/20 rounded-lg text-xs font-semibold hover:bg-[#DC2626]/20 transition-colors", children: [_jsx(Trash2, { className: "h-3.5 w-3.5" }), "Delete (", selected.length, ")"] })), _jsxs("button", { onClick: () => fileInputRef.current?.click(), className: "inline-flex items-center gap-2 px-4 py-2 bg-[#0B1F33] text-white rounded-lg text-xs font-bold hover:bg-[#071521] transition-colors", children: [_jsx(Plus, { className: "h-4 w-4" }), "Upload"] }), _jsx("input", { ref: fileInputRef, type: "file", multiple: true, accept: "image/*,video/*,.pdf", className: "hidden", onChange: () => { } })] })] }), _jsxs("div", { className: "border-2 border-dashed border-[#E2E8F0] rounded-xl p-8 text-center hover:border-[#16C7D9] transition-colors cursor-pointer", onClick: () => fileInputRef.current?.click(), onDragOver: (e) => e.preventDefault(), children: [_jsx(Upload, { className: "h-8 w-8 text-[#94A3B8] mx-auto mb-3" }), _jsx("p", { className: "text-sm font-semibold text-[#172333]", children: "Drop files here or click to upload" }), _jsx("p", { className: "text-xs text-[#94A3B8] mt-1", children: "Images, videos and documents supported" })] }), _jsxs("div", { className: "bg-white rounded-xl border border-[#E2E8F0] p-4 flex items-center gap-3", children: [_jsxs("div", { className: "relative flex-1", children: [_jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]" }), _jsx("input", { type: "text", placeholder: "Search files\u2026", value: search, onChange: (e) => setSearch(e.target.value), className: "w-full h-9 pl-9 pr-4 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] placeholder-[#94A3B8] focus:outline-none focus:border-[#16C7D9]" })] }), _jsxs("div", { className: "flex items-center gap-1 border border-[#E2E8F0] rounded-lg p-1", children: [_jsx("button", { onClick: () => setViewMode('grid'), className: `p-1.5 rounded ${viewMode === 'grid' ? 'bg-[#0B1F33] text-white' : 'text-[#64748B] hover:bg-[#F7F9FA]'}`, children: _jsx(Grid, { className: "h-3.5 w-3.5" }) }), _jsx("button", { onClick: () => setViewMode('list'), className: `p-1.5 rounded ${viewMode === 'list' ? 'bg-[#0B1F33] text-white' : 'text-[#64748B] hover:bg-[#F7F9FA]'}`, children: _jsx(List, { className: "h-3.5 w-3.5" }) })] })] }), viewMode === 'grid' ? (_jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4", children: filtered.map((asset) => {
                    const isSelected = selected.includes(asset.id);
                    const isCopied = copiedId === asset.id;
                    return (_jsxs("div", { className: `group relative bg-white rounded-xl border overflow-hidden transition-all cursor-pointer ${isSelected ? 'border-[#16C7D9] ring-2 ring-[#16C7D9]/30' : 'border-[#E2E8F0] hover:border-[#CBD5E1]'}`, onClick: () => toggleSelect(asset.id), children: [_jsx("div", { className: "aspect-square bg-[#F7F9FA] overflow-hidden", children: asset.type === 'image' ? (_jsx("img", { src: asset.url, alt: asset.name, className: "w-full h-full object-cover" })) : (_jsx("div", { className: "w-full h-full flex items-center justify-center", children: _jsx(TypeIcon, { type: asset.type }) })) }), _jsxs("div", { className: "absolute inset-0 bg-[#0B1F33]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2", children: [_jsx("button", { onClick: (e) => { e.stopPropagation(); handleCopyUrl(asset.url, asset.id); }, className: "p-2 rounded-lg bg-white/90 text-[#0B1F33] hover:bg-white transition-colors", title: "Copy URL", children: isCopied ? _jsx(CheckCircle2, { className: "h-4 w-4 text-[#16A34A]" }) : _jsx(Copy, { className: "h-4 w-4" }) }), _jsx("button", { onClick: (e) => { e.stopPropagation(); handleDelete([asset.id]); }, className: "p-2 rounded-lg bg-white/90 text-[#DC2626] hover:bg-white transition-colors", title: "Delete", children: _jsx(Trash2, { className: "h-4 w-4" }) })] }), isSelected && (_jsx("div", { className: "absolute top-2 left-2 h-5 w-5 rounded-full bg-[#16C7D9] flex items-center justify-center", children: _jsx(CheckCircle2, { className: "h-3.5 w-3.5 text-white" }) })), _jsxs("div", { className: "p-2", children: [_jsx("p", { className: "text-[10px] font-semibold text-[#172333] truncate", children: asset.name }), _jsx("p", { className: "text-[10px] text-[#94A3B8]", children: asset.size })] })] }, asset.id));
                }) })) : (_jsx("div", { className: "bg-white rounded-xl border border-[#E2E8F0] overflow-hidden", children: _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full text-sm", children: [_jsx("thead", { className: "bg-[#F7F9FA] border-b border-[#E2E8F0]", children: _jsxs("tr", { children: [_jsx("th", { className: "w-8 px-4 py-3" }), _jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide", children: "File" }), _jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide", children: "Type" }), _jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide", children: "Size" }), _jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide", children: "Dimensions" }), _jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide", children: "Uploaded" }), _jsx("th", { className: "text-right px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide", children: "Actions" })] }) }), _jsx("tbody", { className: "divide-y divide-[#F1F5F9]", children: filtered.map((asset) => (_jsxs("tr", { className: "hover:bg-[#F7F9FA] transition-colors", children: [_jsx("td", { className: "px-4 py-3", children: _jsx("input", { type: "checkbox", checked: selected.includes(asset.id), onChange: () => toggleSelect(asset.id), className: "h-4 w-4 rounded border-[#E2E8F0]" }) }), _jsx("td", { className: "px-4 py-3", children: _jsxs("div", { className: "flex items-center gap-3", children: [asset.type === 'image' && (_jsx("img", { src: asset.url, alt: asset.name, className: "h-10 w-10 rounded-lg object-cover border border-[#E2E8F0] shrink-0" })), _jsx("span", { className: "text-xs font-semibold text-[#172333]", children: asset.name })] }) }), _jsx("td", { className: "px-4 py-3", children: _jsx(TypeIcon, { type: asset.type }) }), _jsx("td", { className: "px-4 py-3 text-xs text-[#64748B]", children: asset.size }), _jsx("td", { className: "px-4 py-3 text-xs text-[#64748B]", children: asset.dimensions ?? '—' }), _jsx("td", { className: "px-4 py-3 text-xs text-[#64748B]", children: formatDate(asset.uploadedAt) }), _jsx("td", { className: "px-4 py-3 text-right", children: _jsxs("div", { className: "flex items-center justify-end gap-2", children: [_jsx("button", { onClick: () => handleCopyUrl(asset.url, asset.id), className: "p-1.5 rounded hover:bg-[#F1F5F9] text-[#64748B] hover:text-[#0B1F33]", title: "Copy URL", children: copiedId === asset.id ? _jsx(CheckCircle2, { className: "h-3.5 w-3.5 text-[#16A34A]" }) : _jsx(Copy, { className: "h-3.5 w-3.5" }) }), _jsx("button", { onClick: () => handleDelete([asset.id]), className: "p-1.5 rounded hover:bg-[#DC2626]/10 text-[#94A3B8] hover:text-[#DC2626]", title: "Delete", children: _jsx(Trash2, { className: "h-3.5 w-3.5" }) })] }) })] }, asset.id))) })] }) }) }))] }));
};
export default AdminMediaPage;
