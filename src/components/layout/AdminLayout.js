import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import { useUIStore } from '../../stores/uiStore';
import { brandAssets } from '../../assets';
import { LayoutDashboard, ShoppingBag, Package, Layers, Archive, Users, Tag, MessageSquare, Image, BarChart2, FolderKanban, Settings, Shield, LogOut, Menu, X, Bell, ExternalLink, } from 'lucide-react';
import { ToastContainer } from '../ui/ToastContainer';
export const AdminLayout = () => {
    const { user, logout } = useAuthStore();
    const { adminSidebarCollapsed, toggleAdminSidebar } = useUIStore();
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const navSections = [
        {
            title: 'OVERVIEW',
            items: [
                { path: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
                { path: '/admin/analytics', label: 'Analytics & BI', icon: BarChart2 },
            ]
        },
        {
            title: 'STORE MANAGEMENT',
            items: [
                { path: '/admin/orders', label: 'Orders', icon: ShoppingBag },
                { path: '/admin/products', label: 'Products', icon: Package },
                { path: '/admin/categories', label: 'Categories', icon: Layers },
                { path: '/admin/inventory', label: 'Inventory', icon: Archive },
                { path: '/admin/customers', label: 'Customers', icon: Users },
                { path: '/admin/discounts', label: 'Discounts', icon: Tag },
            ]
        },
        {
            title: 'CONTENT & SHOWCASE',
            items: [
                { path: '/admin/projects', label: 'Projects Showcase', icon: FolderKanban },
                { path: '/admin/media', label: 'Media Library', icon: Image },
                { path: '/admin/reviews', label: 'Reviews', icon: MessageSquare },
            ]
        },
        {
            title: 'SYSTEM & SETTINGS',
            items: [
                { path: '/admin/users', label: 'Users & Roles', icon: Shield },
                { path: '/admin/settings', label: 'Store Settings', icon: Settings },
            ]
        }
    ];
    const isLinkActive = (path, exact) => {
        if (exact)
            return location.pathname === path;
        return location.pathname.startsWith(path);
    };
    return (_jsxs("div", { className: "min-h-screen bg-[#F7F9FA] text-[#172333] flex flex-col font-sans antialiased text-left", children: [_jsxs("header", { className: "sticky top-0 z-30 h-16 bg-white border-b border-[#E2E8F0] px-4 sm:px-6 flex items-center justify-between shadow-[0_1px_2px_rgba(0,0,0,0.03)]", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("button", { onClick: () => setMobileSidebarOpen(!mobileSidebarOpen), className: "lg:hidden p-2 rounded-[6px] text-[#64748B] hover:bg-[#F1F5F9]", "aria-label": "Toggle navigation drawer", children: _jsx(Menu, { className: "h-5 w-5" }) }), _jsxs(Link, { to: "/admin", className: "flex items-center gap-2.5", children: [_jsx("img", { src: brandAssets.logo, alt: "Centrifuge", className: "h-7 w-auto object-contain" }), _jsxs("span", { className: "font-heading font-bold text-base text-[#0B1F33]", children: ["Centrifuge ", _jsx("span", { className: "text-[#16C7D9] font-mono text-xs", children: "Admin" })] })] })] }), _jsxs("div", { className: "flex items-center gap-3 sm:gap-4", children: [_jsxs(Link, { to: "/shop", target: "_blank", rel: "noopener noreferrer", className: "hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-[6px] text-[#64748B] hover:text-[#0B1F33] hover:bg-[#F1F5F9] border border-[#E2E8F0] transition-colors", children: [_jsx("span", { children: "Live Store" }), _jsx(ExternalLink, { className: "h-3 w-3" })] }), _jsxs("button", { className: "relative p-2 rounded-[6px] text-[#64748B] hover:text-[#111827] hover:bg-[#F1F5F9]", title: "System notifications", children: [_jsx(Bell, { className: "h-4.5 w-4.5" }), _jsx("span", { className: "absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#16C7D9]" })] }), _jsx("div", { className: "h-6 w-px bg-[#E2E8F0]" }), _jsxs("div", { className: "flex items-center gap-2.5", children: [_jsx("div", { className: "h-8 w-8 rounded-full bg-[#0B1F33] text-white flex items-center justify-center font-bold text-xs font-heading", children: user?.name ? user.name.charAt(0) : 'A' }), _jsxs("div", { className: "hidden md:block text-left", children: [_jsx("span", { className: "text-xs font-bold text-[#111827] block leading-tight", children: user?.name || 'Kelechi Nwosu' }), _jsx("span", { className: "text-[10px] text-[#16A34A] font-semibold", children: "Super Admin" })] })] })] })] }), _jsxs("div", { className: "flex-1 flex overflow-hidden", children: [_jsxs("aside", { className: "hidden lg:flex flex-col w-64 bg-[#071521] text-white border-r border-[#172333] shrink-0 overflow-y-auto", children: [_jsx("div", { className: "p-4 space-y-6 flex-1", children: navSections.map((sec) => (_jsxs("div", { className: "space-y-1", children: [_jsx("span", { className: "text-[10px] font-mono font-bold tracking-wider text-[#64748B] uppercase px-3 block", children: sec.title }), _jsx("div", { className: "space-y-0.5 mt-1.5", children: sec.items.map((item) => {
                                                const Icon = item.icon;
                                                const active = isLinkActive(item.path, item.exact);
                                                return (_jsxs(Link, { to: item.path, className: `flex items-center gap-3 px-3 py-2 rounded-[8px] text-xs font-medium transition-all ${active
                                                        ? 'bg-[#16C7D9] text-[#071521] font-bold shadow-xs'
                                                        : 'text-[#CBD5E1] hover:text-white hover:bg-white/5'}`, children: [_jsx(Icon, { className: `h-4 w-4 shrink-0 ${active ? 'text-[#071521]' : 'text-[#64748B]'}` }), _jsx("span", { children: item.label })] }, item.path));
                                            }) })] }, sec.title))) }), _jsxs("div", { className: "p-4 border-t border-[#172333] space-y-2", children: [_jsxs(Link, { to: "/", className: "flex items-center justify-between text-xs text-[#94A3B8] hover:text-white px-2 py-1.5 transition-colors", children: [_jsx("span", { children: "Back to Corporate Site" }), _jsx(ExternalLink, { className: "h-3 w-3" })] }), _jsxs("button", { onClick: () => {
                                            logout();
                                            navigate('/admin/login');
                                        }, className: "w-full flex items-center gap-2 text-xs font-semibold text-[#DC2626] hover:bg-red-500/10 px-2 py-1.5 rounded-[6px] transition-colors", children: [_jsx(LogOut, { className: "h-3.5 w-3.5" }), _jsx("span", { children: "Sign Out" })] })] })] }), mobileSidebarOpen && (_jsxs("div", { className: "fixed inset-0 z-50 lg:hidden flex", role: "dialog", "aria-modal": "true", children: [_jsx("div", { className: "fixed inset-0 bg-black/60 backdrop-blur-xs", onClick: () => setMobileSidebarOpen(false) }), _jsxs("div", { className: "relative w-64 bg-[#071521] text-white flex flex-col h-full z-10 p-4 overflow-y-auto", children: [_jsxs("div", { className: "flex items-center justify-between pb-4 border-b border-[#172333] mb-4", children: [_jsx("span", { className: "font-heading font-bold text-sm text-white", children: "Centrifuge Admin" }), _jsx("button", { onClick: () => setMobileSidebarOpen(false), className: "p-1 rounded text-[#94A3B8] hover:text-white", children: _jsx(X, { className: "h-5 w-5" }) })] }), _jsx("div", { className: "space-y-6 flex-1", children: navSections.map((sec) => (_jsxs("div", { className: "space-y-1", children: [_jsx("span", { className: "text-[10px] font-mono font-bold tracking-wider text-[#64748B] uppercase px-3 block", children: sec.title }), _jsx("div", { className: "space-y-0.5 mt-1", children: sec.items.map((item) => {
                                                        const Icon = item.icon;
                                                        const active = isLinkActive(item.path, item.exact);
                                                        return (_jsxs(Link, { to: item.path, onClick: () => setMobileSidebarOpen(false), className: `flex items-center gap-3 px-3 py-2 rounded-[8px] text-xs font-medium transition-all ${active
                                                                ? 'bg-[#16C7D9] text-[#071521] font-bold'
                                                                : 'text-[#CBD5E1] hover:text-white hover:bg-white/5'}`, children: [_jsx(Icon, { className: "h-4 w-4 shrink-0" }), _jsx("span", { children: item.label })] }, item.path));
                                                    }) })] }, sec.title))) })] })] })), _jsx("main", { className: "flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8", children: _jsx(Outlet, {}) })] }), _jsx(ToastContainer, {})] }));
};
export default AdminLayout;
