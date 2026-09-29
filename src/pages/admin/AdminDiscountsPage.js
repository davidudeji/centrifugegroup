import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { mockDiscounts } from '../../data/mockData';
import { Plus, Edit2, Trash2, Tag, CheckCircle2, XCircle, Search } from 'lucide-react';
const emptyDiscount = {
    code: '',
    type: 'percentage',
    value: 0,
    minSpend: undefined,
    maxDiscount: undefined,
    usageLimit: undefined,
    startDate: new Date().toISOString().split('T')[0],
    endDate: undefined,
    isActive: true,
};
export const AdminDiscountsPage = () => {
    const [discounts, setDiscounts] = useState(mockDiscounts);
    const [search, setSearch] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [editId, setEditId] = useState(null);
    const [form, setForm] = useState(emptyDiscount);
    const filtered = discounts.filter((d) => !search || d.code.toLowerCase().includes(search.toLowerCase()));
    const formatCurrency = (amount) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(amount);
    const handleSave = () => {
        if (!form.code.trim())
            return;
        if (editId) {
            setDiscounts((prev) => prev.map((d) => d.id === editId ? { ...d, ...form } : d));
        }
        else {
            const newDiscount = {
                ...form,
                id: `disc-${Date.now()}`,
                usageCount: 0,
            };
            setDiscounts((prev) => [newDiscount, ...prev]);
        }
        setShowForm(false);
        setEditId(null);
        setForm(emptyDiscount);
    };
    const handleEdit = (d) => {
        setEditId(d.id);
        setForm({
            code: d.code,
            type: d.type,
            value: d.value,
            minSpend: d.minSpend,
            maxDiscount: d.maxDiscount,
            usageLimit: d.usageLimit,
            startDate: d.startDate,
            endDate: d.endDate,
            isActive: d.isActive,
        });
        setShowForm(true);
    };
    const handleDelete = (id) => {
        setDiscounts((prev) => prev.filter((d) => d.id !== id));
    };
    const toggleActive = (id) => {
        setDiscounts((prev) => prev.map((d) => d.id === id ? { ...d, isActive: !d.isActive } : d));
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "font-heading font-bold text-2xl text-[#0B1F33]", children: "Discounts" }), _jsxs("p", { className: "text-sm text-[#64748B] mt-0.5", children: [discounts.length, " discount code", discounts.length !== 1 ? 's' : ''] })] }), _jsxs("button", { onClick: () => { setShowForm(true); setEditId(null); setForm(emptyDiscount); }, className: "inline-flex items-center gap-2 px-4 py-2 bg-[#0B1F33] text-white rounded-lg text-xs font-bold hover:bg-[#071521] transition-colors", children: [_jsx(Plus, { className: "h-4 w-4" }), "Create Discount"] })] }), showForm && (_jsxs("div", { className: "bg-white rounded-xl border border-[#E2E8F0] p-6 space-y-5", children: [_jsx("h2", { className: "font-heading font-bold text-base text-[#0B1F33]", children: editId ? 'Edit Discount Code' : 'Create Discount Code' }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: "Code *" }), _jsx("input", { type: "text", value: form.code, onChange: (e) => setForm({ ...form, code: e.target.value.toUpperCase() }), placeholder: "e.g. SAVE20", className: "w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] font-mono focus:outline-none focus:border-[#16C7D9]" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: "Type" }), _jsxs("select", { value: form.type, onChange: (e) => setForm({ ...form, type: e.target.value }), className: "w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]", children: [_jsx("option", { value: "percentage", children: "Percentage (%)" }), _jsx("option", { value: "fixed", children: "Fixed Amount (\u20A6)" })] })] }), _jsxs("div", { children: [_jsxs("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: ["Value (", form.type === 'percentage' ? '%' : '₦', ") *"] }), _jsx("input", { type: "number", min: 0, value: form.value, onChange: (e) => setForm({ ...form, value: Number(e.target.value) }), className: "w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: "Minimum Order (\u20A6)" }), _jsx("input", { type: "number", min: 0, value: form.minSpend ?? '', onChange: (e) => setForm({ ...form, minSpend: e.target.value ? Number(e.target.value) : undefined }), className: "w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: "Usage Limit" }), _jsx("input", { type: "number", min: 1, value: form.usageLimit ?? '', onChange: (e) => setForm({ ...form, usageLimit: e.target.value ? Number(e.target.value) : undefined }), className: "w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: "Start Date" }), _jsx("input", { type: "date", value: form.startDate, onChange: (e) => setForm({ ...form, startDate: e.target.value }), className: "w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: "End Date (optional)" }), _jsx("input", { type: "date", value: form.endDate ?? '', onChange: (e) => setForm({ ...form, endDate: e.target.value || undefined }), className: "w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]" })] })] }), _jsx("div", { className: "flex items-center gap-3", children: _jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [_jsx("input", { type: "checkbox", checked: form.isActive, onChange: (e) => setForm({ ...form, isActive: e.target.checked }), className: "h-4 w-4 rounded border-[#E2E8F0] text-[#16C7D9]" }), _jsx("span", { className: "text-xs font-semibold text-[#172333]", children: "Active" })] }) }), _jsxs("div", { className: "flex gap-3 pt-2 border-t border-[#E2E8F0]", children: [_jsx("button", { onClick: handleSave, className: "px-5 py-2 bg-[#0B1F33] text-white rounded-lg text-xs font-bold hover:bg-[#071521] transition-colors", children: editId ? 'Save Changes' : 'Create Discount' }), _jsx("button", { onClick: () => { setShowForm(false); setEditId(null); }, className: "px-5 py-2 border border-[#E2E8F0] rounded-lg text-xs font-semibold text-[#64748B] hover:bg-[#F7F9FA] transition-colors", children: "Cancel" })] })] })), _jsx("div", { className: "bg-white rounded-xl border border-[#E2E8F0] p-4", children: _jsxs("div", { className: "relative max-w-sm", children: [_jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]" }), _jsx("input", { type: "text", placeholder: "Search discount codes\u2026", value: search, onChange: (e) => setSearch(e.target.value), className: "w-full h-9 pl-9 pr-4 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] placeholder-[#94A3B8] focus:outline-none focus:border-[#16C7D9]" })] }) }), _jsx("div", { className: "bg-white rounded-xl border border-[#E2E8F0] overflow-hidden", children: _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full text-sm", children: [_jsx("thead", { className: "bg-[#F7F9FA] border-b border-[#E2E8F0]", children: _jsxs("tr", { children: [_jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide", children: "Code" }), _jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide", children: "Type" }), _jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide", children: "Value" }), _jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide", children: "Min Spend" }), _jsx("th", { className: "text-right px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide", children: "Usage" }), _jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide", children: "Expires" }), _jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide", children: "Status" }), _jsx("th", { className: "text-right px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide", children: "Actions" })] }) }), _jsx("tbody", { className: "divide-y divide-[#F1F5F9]", children: filtered.length === 0 ? (_jsx("tr", { children: _jsx("td", { colSpan: 8, className: "px-4 py-12 text-center text-sm text-[#94A3B8]", children: "No discount codes found." }) })) : filtered.map((d) => (_jsxs("tr", { className: "hover:bg-[#F7F9FA] transition-colors", children: [_jsx("td", { className: "px-4 py-3.5", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Tag, { className: "h-3.5 w-3.5 text-[#16C7D9]" }), _jsx("span", { className: "font-mono font-bold text-xs text-[#0B1F33]", children: d.code })] }) }), _jsx("td", { className: "px-4 py-3.5 text-xs text-[#64748B] capitalize", children: d.type }), _jsx("td", { className: "px-4 py-3.5 text-xs font-semibold text-[#172333]", children: d.type === 'percentage' ? `${d.value}%` : formatCurrency(d.value) }), _jsx("td", { className: "px-4 py-3.5 text-xs text-[#64748B]", children: d.minSpend ? formatCurrency(d.minSpend) : '—' }), _jsxs("td", { className: "px-4 py-3.5 text-right text-xs text-[#64748B]", children: [d.usageCount, d.usageLimit ? ` / ${d.usageLimit}` : ''] }), _jsx("td", { className: "px-4 py-3.5 text-xs text-[#64748B]", children: d.endDate ? new Date(d.endDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—' }), _jsx("td", { className: "px-4 py-3.5", children: _jsx("button", { onClick: () => toggleActive(d.id), className: "flex items-center gap-1.5", children: d.isActive ? (_jsxs(_Fragment, { children: [_jsx(CheckCircle2, { className: "h-3.5 w-3.5 text-[#16A34A]" }), _jsx("span", { className: "text-xs text-[#16A34A] font-semibold", children: "Active" })] })) : (_jsxs(_Fragment, { children: [_jsx(XCircle, { className: "h-3.5 w-3.5 text-[#94A3B8]" }), _jsx("span", { className: "text-xs text-[#94A3B8] font-semibold", children: "Inactive" })] })) }) }), _jsx("td", { className: "px-4 py-3.5 text-right", children: _jsxs("div", { className: "flex items-center justify-end gap-2", children: [_jsx("button", { onClick: () => handleEdit(d), className: "p-1.5 rounded hover:bg-[#F1F5F9] text-[#64748B] hover:text-[#0B1F33]", children: _jsx(Edit2, { className: "h-3.5 w-3.5" }) }), _jsx("button", { onClick: () => handleDelete(d.id), className: "p-1.5 rounded hover:bg-[#DC2626]/10 text-[#94A3B8] hover:text-[#DC2626]", children: _jsx(Trash2, { className: "h-3.5 w-3.5" }) })] }) })] }, d.id))) })] }) }) })] }));
};
export default AdminDiscountsPage;
