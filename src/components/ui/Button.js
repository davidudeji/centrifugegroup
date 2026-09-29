import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export const Button = React.forwardRef(({ className, variant = 'primary', size = 'md', isLoading = false, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#16C7D9]/40 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';
    const sizeStyles = {
        sm: 'text-xs px-3 py-1.5 rounded-[6px] gap-1.5',
        md: 'text-sm px-4 py-2 rounded-[8px] gap-2',
        lg: 'text-base px-6 py-2.5 rounded-[8px] gap-2.5 font-semibold',
    };
    const variantStyles = {
        primary: 'bg-[#16C7D9] text-[#071521] hover:bg-[#14b8a6] hover:shadow-sm font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.06)]',
        secondary: 'bg-[#F3F4F6] text-[#1D242F] hover:bg-[#E5E7EB] border border-[#E2E8F0]',
        dark: 'bg-[#0B1F33] text-white hover:bg-[#071521] shadow-sm',
        outline: 'bg-white text-[#1D242F] border border-[#E2E8F0] hover:bg-[#F8FAFC] hover:border-[#CBD5E1]',
        ghost: 'text-[#64748B] hover:text-[#0B1F33] hover:bg-black/5',
        'code-pill': 'bg-white text-[#111827] border border-[#E2E8F0] font-mono text-xs px-3 py-1.5 rounded-[6px] hover:border-[#16C7D9] hover:bg-[#F8FAFC]',
        danger: 'bg-[#DC2626] text-white hover:bg-[#B91C1C] shadow-sm',
    };
    return (_jsxs("button", { ref: ref, disabled: disabled || isLoading, className: twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)), ...props, children: [isLoading ? (_jsxs("svg", { className: "animate-spin h-4 w-4 text-current", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] })) : (leftIcon), _jsx("span", { children: children }), !isLoading && rightIcon] }));
});
Button.displayName = 'Button';
