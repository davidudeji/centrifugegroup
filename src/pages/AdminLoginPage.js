import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { brandAssets } from '../assets';
import { Eye, EyeOff, ArrowRight, Terminal } from 'lucide-react';
export const AdminLoginPage = () => {
    const navigate = useNavigate();
    const { login, isLoading } = useAuthStore();
    const [email, setEmail] = useState('admin@centrifugegroup.co');
    const [password, setPassword] = useState('admin');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const success = await login(email, password, 'super_admin');
        if (success) {
            navigate('/admin');
        }
        else {
            setError('Invalid credentials. Access denied.');
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-[#071521] flex flex-col items-center justify-center px-4", children: [_jsx("div", { className: "fixed inset-0 opacity-[0.03]", style: {
                    backgroundImage: `linear-gradient(rgba(22,199,217,1) 1px, transparent 1px), linear-gradient(90deg, rgba(22,199,217,1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                } }), _jsxs("div", { className: "relative w-full max-w-sm", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx(Link, { to: "/", className: "inline-flex items-center gap-2.5 mb-6", children: _jsx("img", { src: brandAssets.logo, alt: "Centrifuge", className: "h-8 w-auto object-contain" }) }), _jsxs("div", { className: "flex items-center justify-center gap-2 mb-3", children: [_jsx(Terminal, { className: "h-4 w-4 text-[#16C7D9]" }), _jsx("span", { className: "text-xs font-mono font-bold text-[#16C7D9] tracking-widest uppercase", children: "Admin Access" })] }), _jsx("h1", { className: "font-heading font-bold text-2xl text-white", children: "Sign in to Dashboard" }), _jsx("p", { className: "text-sm text-[#64748B] mt-1", children: "Centrifuge Group Administration" })] }), _jsxs("div", { className: "bg-[#0B1F33] rounded-2xl border border-[#172333] p-8", children: [_jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#94A3B8] mb-1.5", htmlFor: "admin-email", children: "Administrator Email" }), _jsx("input", { id: "admin-email", type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), className: "w-full h-11 px-4 bg-[#071521] border border-[#172333] rounded-lg text-sm text-white placeholder-[#475569] focus:outline-none focus:border-[#16C7D9] focus:ring-2 focus:ring-[#16C7D9]/20 transition-all" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#94A3B8] mb-1.5", htmlFor: "admin-password", children: "Password" }), _jsxs("div", { className: "relative", children: [_jsx("input", { id: "admin-password", type: showPassword ? 'text' : 'password', required: true, value: password, onChange: (e) => setPassword(e.target.value), className: "w-full h-11 px-4 pr-11 bg-[#071521] border border-[#172333] rounded-lg text-sm text-white placeholder-[#475569] focus:outline-none focus:border-[#16C7D9] focus:ring-2 focus:ring-[#16C7D9]/20 transition-all" }), _jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#475569] hover:text-[#94A3B8]", children: showPassword ? _jsx(EyeOff, { className: "h-4 w-4" }) : _jsx(Eye, { className: "h-4 w-4" }) })] })] }), error && (_jsx("p", { className: "text-xs text-[#DC2626] bg-[#DC2626]/10 border border-[#DC2626]/20 rounded-lg px-3 py-2", children: error })), _jsx("button", { type: "submit", disabled: isLoading, className: "w-full h-11 bg-[#16C7D9] text-[#071521] rounded-lg text-sm font-bold hover:bg-[#67E8F9] transition-colors flex items-center justify-center gap-2 disabled:opacity-60", children: isLoading ? 'Authenticating…' : (_jsxs(_Fragment, { children: ["Access Dashboard", _jsx(ArrowRight, { className: "h-4 w-4" })] })) })] }), _jsx("div", { className: "mt-5 p-3 bg-[#071521] rounded-lg border border-[#172333]", children: _jsx("p", { className: "text-xs text-[#475569] text-center font-mono", children: "demo credentials pre-filled above" }) })] }), _jsx("p", { className: "text-center text-xs text-[#475569] mt-6", children: _jsx(Link, { to: "/", className: "hover:text-[#64748B] transition-colors", children: "\u2190 Back to Corporate Site" }) })] })] }));
};
export default AdminLoginPage;
