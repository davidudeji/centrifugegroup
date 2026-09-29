import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Shield, Plus, Edit2, Trash2, CheckCircle2, XCircle, ChevronDown, ChevronRight } from 'lucide-react';
const ROLES = ['Super Admin', 'Store Manager', 'Inventory Manager', 'Order Manager', 'Content Manager'];
const PERMISSION_GROUPS = [
    {
        group: 'Products',
        permissions: ['products.read', 'products.create', 'products.update', 'products.delete'],
    },
    {
        group: 'Orders',
        permissions: ['orders.read', 'orders.update'],
    },
    {
        group: 'Inventory',
        permissions: ['inventory.read', 'inventory.update'],
    },
    {
        group: 'Customers',
        permissions: ['customers.read'],
    },
    {
        group: 'Analytics',
        permissions: ['analytics.read'],
    },
    {
        group: 'Settings',
        permissions: ['settings.update'],
    },
    {
        group: 'Projects',
        permissions: ['projects.manage'],
    },
];
const ROLE_PERMISSIONS = {
    'Super Admin': PERMISSION_GROUPS.flatMap((g) => g.permissions),
    'Store Manager': ['products.read', 'products.create', 'products.update', 'orders.read', 'orders.update', 'customers.read', 'analytics.read'],
    'Inventory Manager': ['products.read', 'inventory.read', 'inventory.update'],
    'Order Manager': ['orders.read', 'orders.update', 'customers.read'],
    'Content Manager': ['products.read', 'projects.manage', 'analytics.read'],
};
const demoUsers = [
    {
        id: 'u-1', name: 'Kelechi Nwosu', email: 'admin@centrifugegroup.co',
        role: 'Super Admin', status: 'active', lastLogin: '2024-03-29T09:30:00Z',
        permissions: ROLE_PERMISSIONS['Super Admin']
    },
    {
        id: 'u-2', name: 'Chisom Eze', email: 'chisom@centrifugegroup.co',
        role: 'Store Manager', status: 'active', lastLogin: '2024-03-28T14:00:00Z',
        permissions: ROLE_PERMISSIONS['Store Manager']
    },
    {
        id: 'u-3', name: 'Emeka Obi', email: 'emeka@centrifugegroup.co',
        role: 'Inventory Manager', status: 'active', lastLogin: '2024-03-27T11:00:00Z',
        permissions: ROLE_PERMISSIONS['Inventory Manager']
    },
];
export const AdminUsersPage = () => {
    const [users, setUsers] = useState(demoUsers);
    const [showForm, setShowForm] = useState(false);
    const [editId, setEditId] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [expandedGroup, setExpandedGroup] = useState(null);
    const [form, setForm] = useState({
        name: '', email: '', role: 'Store Manager', status: 'active',
    });
    const formatDate = (iso) => new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const handleEdit = (u) => {
        setEditId(u.id);
        setForm({ name: u.name, email: u.email, role: u.role, status: u.status });
        setShowForm(true);
    };
    const handleSave = () => {
        if (!form.name || !form.email)
            return;
        const perms = ROLE_PERMISSIONS[form.role] ?? [];
        if (editId) {
            setUsers((prev) => prev.map((u) => u.id === editId ? { ...u, ...form, permissions: perms } : u));
        }
        else {
            setUsers((prev) => [
                ...prev,
                { id: `u-${Date.now()}`, ...form, permissions: perms, lastLogin: new Date().toISOString() }
            ]);
        }
        setShowForm(false);
        setEditId(null);
        setForm({ name: '', email: '', role: 'Store Manager', status: 'active' });
    };
    const handleDelete = (id) => {
        setUsers((prev) => prev.filter((u) => u.id !== id));
        if (selectedUser?.id === id)
            setSelectedUser(null);
    };
    const toggleStatus = (id) => {
        setUsers((prev) => prev.map((u) => u.id === id ? { ...u, status: u.status === 'active' ? 'inactive' : 'active' } : u));
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "font-heading font-bold text-2xl text-[#0B1F33]", children: "Users & Roles" }), _jsxs("p", { className: "text-sm text-[#64748B] mt-0.5", children: [users.length, " admin users"] })] }), _jsxs("button", { onClick: () => { setShowForm(true); setEditId(null); setForm({ name: '', email: '', role: 'Store Manager', status: 'active' }); }, className: "inline-flex items-center gap-2 px-4 py-2 bg-[#0B1F33] text-white rounded-lg text-xs font-bold hover:bg-[#071521] transition-colors", children: [_jsx(Plus, { className: "h-4 w-4" }), "Invite User"] })] }), _jsxs("div", { className: "flex items-start gap-3 p-4 bg-[#D97706]/5 border border-[#D97706]/20 rounded-xl", children: [_jsx(Shield, { className: "h-4 w-4 text-[#D97706] shrink-0 mt-0.5" }), _jsxs("p", { className: "text-xs text-[#64748B]", children: [_jsx("span", { className: "font-bold text-[#172333]", children: "Security note:" }), " Frontend permissions are UI-only controls. Real authorization must be enforced at the API/backend level. Never rely solely on frontend permission checks."] })] }), showForm && (_jsxs("div", { className: "bg-white rounded-xl border border-[#E2E8F0] p-6 space-y-5", children: [_jsx("h2", { className: "font-heading font-bold text-base text-[#0B1F33]", children: editId ? 'Edit User' : 'Invite New User' }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: "Full Name *" }), _jsx("input", { type: "text", value: form.name, onChange: (e) => setForm({ ...form, name: e.target.value }), className: "w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: "Email Address *" }), _jsx("input", { type: "email", value: form.email, onChange: (e) => setForm({ ...form, email: e.target.value }), className: "w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: "Role" }), _jsx("select", { value: form.role, onChange: (e) => setForm({ ...form, role: e.target.value }), className: "w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]", children: ROLES.map((r) => _jsx("option", { children: r }, r)) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", children: "Status" }), _jsxs("select", { value: form.status, onChange: (e) => setForm({ ...form, status: e.target.value }), className: "w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]", children: [_jsx("option", { value: "active", children: "Active" }), _jsx("option", { value: "inactive", children: "Inactive" })] })] })] }), _jsxs("div", { className: "p-4 bg-[#F7F9FA] rounded-xl border border-[#E2E8F0]", children: [_jsxs("p", { className: "text-xs font-semibold text-[#172333] mb-2", children: ["Permissions for ", form.role, ":"] }), _jsx("div", { className: "flex flex-wrap gap-2", children: (ROLE_PERMISSIONS[form.role] ?? []).map((p) => (_jsx("span", { className: "px-2 py-1 bg-white border border-[#E2E8F0] rounded text-[10px] font-mono text-[#64748B]", children: p }, p))) })] }), _jsxs("div", { className: "flex gap-3 pt-2 border-t border-[#E2E8F0]", children: [_jsx("button", { onClick: handleSave, className: "px-5 py-2 bg-[#0B1F33] text-white rounded-lg text-xs font-bold hover:bg-[#071521]", children: editId ? 'Save Changes' : 'Send Invitation' }), _jsx("button", { onClick: () => { setShowForm(false); setEditId(null); }, className: "px-5 py-2 border border-[#E2E8F0] rounded-lg text-xs font-semibold text-[#64748B] hover:bg-[#F7F9FA]", children: "Cancel" })] })] })), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsx("div", { className: "lg:col-span-2", children: _jsx("div", { className: "bg-white rounded-xl border border-[#E2E8F0] overflow-hidden", children: _jsxs("table", { className: "w-full text-sm", children: [_jsx("thead", { className: "bg-[#F7F9FA] border-b border-[#E2E8F0]", children: _jsxs("tr", { children: [_jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide", children: "User" }), _jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide", children: "Role" }), _jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide", children: "Last Login" }), _jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide", children: "Status" }), _jsx("th", { className: "text-right px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide", children: "Actions" })] }) }), _jsx("tbody", { className: "divide-y divide-[#F1F5F9]", children: users.map((user) => (_jsxs("tr", { className: `hover:bg-[#F7F9FA] transition-colors cursor-pointer ${selectedUser?.id === user.id ? 'bg-[#F7F9FA]' : ''}`, onClick: () => setSelectedUser(selectedUser?.id === user.id ? null : user), children: [_jsx("td", { className: "px-4 py-3.5", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "h-8 w-8 rounded-full bg-[#0B1F33] text-white flex items-center justify-center font-bold text-xs font-heading shrink-0", children: user.name.charAt(0) }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-[#172333] text-xs", children: user.name }), _jsx("p", { className: "text-[11px] text-[#94A3B8]", children: user.email })] })] }) }), _jsx("td", { className: "px-4 py-3.5", children: _jsx("span", { className: "px-2.5 py-1 bg-[#0B1F33]/5 text-[#0B1F33] rounded-full text-[11px] font-bold", children: user.role }) }), _jsx("td", { className: "px-4 py-3.5 text-xs text-[#64748B]", children: formatDate(user.lastLogin) }), _jsx("td", { className: "px-4 py-3.5", children: _jsx("button", { onClick: (e) => { e.stopPropagation(); toggleStatus(user.id); }, className: "flex items-center gap-1.5", children: user.status === 'active' ? (_jsxs(_Fragment, { children: [_jsx(CheckCircle2, { className: "h-3.5 w-3.5 text-[#16A34A]" }), _jsx("span", { className: "text-xs text-[#16A34A] font-semibold", children: "Active" })] })) : (_jsxs(_Fragment, { children: [_jsx(XCircle, { className: "h-3.5 w-3.5 text-[#94A3B8]" }), _jsx("span", { className: "text-xs text-[#94A3B8] font-semibold", children: "Inactive" })] })) }) }), _jsx("td", { className: "px-4 py-3.5 text-right", children: _jsxs("div", { className: "flex items-center justify-end gap-2", onClick: (e) => e.stopPropagation(), children: [_jsx("button", { onClick: () => handleEdit(user), className: "p-1.5 rounded hover:bg-[#F1F5F9] text-[#64748B]", children: _jsx(Edit2, { className: "h-3.5 w-3.5" }) }), user.role !== 'Super Admin' && (_jsx("button", { onClick: () => handleDelete(user.id), className: "p-1.5 rounded hover:bg-[#DC2626]/10 text-[#94A3B8] hover:text-[#DC2626]", children: _jsx(Trash2, { className: "h-3.5 w-3.5" }) }))] }) })] }, user.id))) })] }) }) }), _jsx("div", { children: _jsxs("div", { className: "bg-white rounded-xl border border-[#E2E8F0] overflow-hidden", children: [_jsx("div", { className: "px-5 py-4 border-b border-[#E2E8F0]", children: _jsx("h2", { className: "font-heading font-bold text-sm text-[#0B1F33]", children: selectedUser ? `${selectedUser.name}'s Permissions` : 'Permission Reference' }) }), _jsx("div", { className: "p-4 space-y-2", children: PERMISSION_GROUPS.map((group) => {
                                        const isExpanded = expandedGroup === group.group;
                                        const hasAll = selectedUser
                                            ? group.permissions.every((p) => selectedUser.permissions.includes(p))
                                            : false;
                                        const hasSome = selectedUser
                                            ? group.permissions.some((p) => selectedUser.permissions.includes(p))
                                            : false;
                                        return (_jsxs("div", { className: "rounded-lg border border-[#E2E8F0] overflow-hidden", children: [_jsxs("button", { onClick: () => setExpandedGroup(isExpanded ? null : group.group), className: "w-full flex items-center justify-between px-3 py-2.5 text-xs font-semibold text-[#172333] hover:bg-[#F7F9FA] transition-colors", children: [_jsxs("div", { className: "flex items-center gap-2", children: [selectedUser && (_jsx("div", { className: `h-2 w-2 rounded-full ${hasAll ? 'bg-[#16A34A]' : hasSome ? 'bg-[#D97706]' : 'bg-[#E2E8F0]'}` })), _jsx("span", { children: group.group })] }), isExpanded ? _jsx(ChevronDown, { className: "h-3.5 w-3.5 text-[#94A3B8]" }) : _jsx(ChevronRight, { className: "h-3.5 w-3.5 text-[#94A3B8]" })] }), isExpanded && (_jsx("div", { className: "px-3 pb-3 bg-[#F7F9FA] space-y-1.5", children: group.permissions.map((p) => {
                                                        const hasPermission = selectedUser ? selectedUser.permissions.includes(p) : true;
                                                        return (_jsxs("div", { className: "flex items-center gap-2", children: [selectedUser ? (hasPermission
                                                                    ? _jsx(CheckCircle2, { className: "h-3 w-3 text-[#16A34A] shrink-0" })
                                                                    : _jsx(XCircle, { className: "h-3 w-3 text-[#E2E8F0] shrink-0" })) : _jsx("div", { className: "h-3 w-3" }), _jsx("span", { className: `font-mono text-[10px] ${hasPermission && selectedUser ? 'text-[#172333]' : 'text-[#94A3B8]'}`, children: p })] }, p));
                                                    }) }))] }, group.group));
                                    }) })] }) })] })] }));
};
export default AdminUsersPage;
