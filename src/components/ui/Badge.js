import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export const Badge = ({ children, variant = 'default', size = 'md', dot = false, className, ...props }) => {
    const sizeStyles = {
        sm: 'text-[11px] px-2 py-0.5 font-medium',
        md: 'text-xs px-2.5 py-1 font-medium',
    };
    const variantStyles = {
        default: 'bg-[#0B1F33]/5 text-[#0B1F33] border border-[#0B1F33]/10',
        success: 'bg-[#16A34A]/10 text-[#15803D] border border-[#16A34A]/20',
        warning: 'bg-[#D97706]/10 text-[#B45309] border border-[#D97706]/20',
        error: 'bg-[#DC2626]/10 text-[#B91C1C] border border-[#DC2626]/20',
        info: 'bg-[#0284C7]/10 text-[#0369A1] border border-[#0284C7]/20',
        neutral: 'bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]',
        outline: 'bg-transparent text-[#64748B] border border-[#E2E8F0]',
        teal: 'bg-[#16C7D9]/15 text-[#0E7490] border border-[#16C7D9]/30',
    };
    const dotColors = {
        default: 'bg-[#0B1F33]',
        success: 'bg-[#16A34A]',
        warning: 'bg-[#D97706]',
        error: 'bg-[#DC2626]',
        info: 'bg-[#0284C7]',
        neutral: 'bg-[#64748B]',
        outline: 'bg-[#94A3B8]',
        teal: 'bg-[#16C7D9]',
    };
    return (_jsxs("span", { className: twMerge(clsx('inline-flex items-center gap-1.5 rounded-[6px] tracking-tight transition-colors', sizeStyles[size], variantStyles[variant], className)), ...props, children: [dot && (_jsx("span", { className: clsx('h-1.5 w-1.5 rounded-full shrink-0', dotColors[variant]), "aria-hidden": "true" })), _jsx("span", { children: children })] }));
};
