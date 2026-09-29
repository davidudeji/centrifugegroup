import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export const Input = React.forwardRef(({ className, label, error, helperText, leftIcon, rightIcon, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    return (_jsxs("div", { className: "w-full space-y-1.5 text-left", children: [label && (_jsxs("label", { htmlFor: inputId, className: "block text-xs font-semibold text-[#1D242F] tracking-tight", children: [label, props.required && _jsx("span", { className: "text-[#DC2626] ml-1", children: "*" })] })), _jsxs("div", { className: "relative flex items-center", children: [leftIcon && (_jsx("div", { className: "absolute left-3 text-[#94A3B8] pointer-events-none flex items-center", children: leftIcon })), _jsx("input", { id: inputId, ref: ref, className: twMerge(clsx('w-full bg-white text-[#111827] text-sm placeholder:text-[#94A3B8] border rounded-[8px] transition-all duration-150 py-2 focus:outline-none focus:ring-2 focus:ring-[#16C7D9]/30 focus:border-[#16C7D9] disabled:bg-[#F3F4F6] disabled:text-[#9CA3AF] disabled:cursor-not-allowed', leftIcon ? 'pl-9.5' : 'pl-3.5', rightIcon ? 'pr-9.5' : 'pr-3.5', error
                            ? 'border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/20'
                            : 'border-[#E2E8F0] hover:border-[#CBD5E1]', className)), ...props }), rightIcon && (_jsx("div", { className: "absolute right-3 text-[#94A3B8] flex items-center", children: rightIcon }))] }), error && (_jsxs("p", { className: "text-xs text-[#DC2626] font-medium flex items-center gap-1", children: [_jsx("span", { children: "\u2022" }), " ", error] })), !error && helperText && (_jsx("p", { className: "text-xs text-[#64748B]", children: helperText }))] }));
});
Input.displayName = 'Input';
