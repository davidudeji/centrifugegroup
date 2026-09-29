import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { brandAssets } from '../assets';
import { Eye, EyeOff, ArrowRight, Shield } from 'lucide-react';
export const LoginPage = () => {
    const navigate = useNavigate();
    const { login, isLoading } = useAuthStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const success = await login(email, password, 'customer');
        if (success) {
            navigate('/account');
        }
        else {
            setError('Invalid credentials. Please try again.');
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-[#F7F9FA] flex flex-col", children: [_jsx("header", { className: "h-16 bg-white border-b border-[#E2E8F0] flex items-center px-6", children: _jsxs(Link, { to: "/", className: "flex items-center gap-2.5", children: [_jsx("img", { src: brandAssets.logo, alt: "Centrifuge Group", className: "h-7 w-auto object-contain" }), _jsx("span", { className: "font-heading font-bold text-[#0B1F33] text-base", children: "Centrifuge Group" })] }) }), _jsx("main", { className: "flex-1 flex items-center justify-center px-4 py-16", children: _jsxs("div", { className: "w-full max-w-md", children: [_jsxs("div", { className: "bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_2px_8px_rgba(11,31,51,0.05)] p-8", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("div", { className: "inline-flex items-center justify-center h-12 w-12 rounded-xl bg-[#0B1F33] mb-4", children: _jsx(Shield, { className: "h-6 w-6 text-[#16C7D9]" }) }), _jsx("h1", { className: "font-heading font-bold text-2xl text-[#0B1F33] mb-1", children: "Sign in to your account" }), _jsx("p", { className: "text-sm text-[#64748B]", children: "Access your orders, wishlist and profile" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", htmlFor: "email", children: "Email address" }), _jsx("input", { id: "email", type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "you@example.com", className: "w-full h-11 px-4 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] placeholder-[#94A3B8] focus:outline-none focus:border-[#16C7D9] focus:ring-2 focus:ring-[#16C7D9]/20 transition-all" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#172333] mb-1.5", htmlFor: "password", children: "Password" }), _jsxs("div", { className: "relative", children: [_jsx("input", { id: "password", type: showPassword ? 'text' : 'password', required: true, value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Your password", className: "w-full h-11 px-4 pr-11 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] placeholder-[#94A3B8] focus:outline-none focus:border-[#16C7D9] focus:ring-2 focus:ring-[#16C7D9]/20 transition-all" }), _jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#64748B]", children: showPassword ? _jsx(EyeOff, { className: "h-4 w-4" }) : _jsx(Eye, { className: "h-4 w-4" }) })] })] }), error && (_jsx("p", { className: "text-xs text-[#DC2626] bg-[#DC2626]/5 border border-[#DC2626]/20 rounded-lg px-3 py-2", children: error })), _jsx("button", { type: "submit", disabled: isLoading, className: "w-full h-11 bg-[#0B1F33] text-white rounded-lg text-sm font-semibold hover:bg-[#071521] transition-colors flex items-center justify-center gap-2 disabled:opacity-60", children: isLoading ? 'Signing in…' : (_jsxs(_Fragment, { children: ["Sign In", _jsx(ArrowRight, { className: "h-4 w-4" })] })) })] }), _jsx("div", { className: "mt-6 pt-6 border-t border-[#E2E8F0] text-center", children: _jsxs("p", { className: "text-sm text-[#64748B]", children: ["Don't have an account?", ' ', _jsx(Link, { to: "/contact", className: "text-[#16C7D9] font-semibold hover:underline", children: "Contact us" })] }) }), _jsx("div", { className: "mt-4 p-3 bg-[#F7F9FA] rounded-lg border border-[#E2E8F0]", children: _jsxs("p", { className: "text-xs text-[#64748B] text-center", children: [_jsx("span", { className: "font-semibold text-[#172333]", children: "Demo:" }), " Any email/password combination works"] }) })] }), _jsx("p", { className: "text-center text-xs text-[#94A3B8] mt-6", children: _jsx(Link, { to: "/", className: "hover:text-[#64748B] transition-colors", children: "\u2190 Back to Centrifuge Group" }) })] }) })] }));
};
export default LoginPage;
