import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChevronDown } from 'lucide-react';
export const Select = React.forwardRef(({ className, label, error, options, id, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    return (_jsxs("div", { className: "w-full space-y-1.5 text-left", children: [label && (_jsxs("label", { htmlFor: selectId, className: "block text-xs font-semibold text-[#1D242F] tracking-tight", children: [label, props.required && _jsx("span", { className: "text-[#DC2626] ml-1", children: "*" })] })), _jsxs("div", { className: "relative flex items-center", children: [_jsx("select", { id: selectId, ref: ref, className: twMerge(clsx('w-full bg-white text-[#111827] text-sm border rounded-[8px] py-2 pl-3.5 pr-9 appearance-none transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#16C7D9]/30 focus:border-[#16C7D9] disabled:bg-[#F3F4F6] disabled:cursor-not-allowed', error
                            ? 'border-[#DC2626] focus:border-[#DC2626]'
                            : 'border-[#E2E8F0] hover:border-[#CBD5E1]', className)), ...props, children: options.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value))) }), _jsx("div", { className: "absolute right-3 text-[#64748B] pointer-events-none flex items-center", children: _jsx(ChevronDown, { className: "h-4 w-4" }) })] }), error && (_jsxs("p", { className: "text-xs text-[#DC2626] font-medium flex items-center gap-1", children: [_jsx("span", { children: "\u2022" }), " ", error] }))] }));
});
Select.displayName = 'Select';
