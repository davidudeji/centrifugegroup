import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FolderOpen } from 'lucide-react';
import { Button } from './Button';
export const EmptyState = ({ title, description, actionLabel, onAction, icon, }) => {
    return (_jsxs("div", { className: "py-14 px-4 flex flex-col items-center justify-center text-center border border-dashed border-[#CBD5E1] rounded-[12px] bg-[#F8FAFC]", children: [_jsx("div", { className: "h-12 w-12 rounded-[10px] bg-white border border-[#E2E8F0] shadow-xs flex items-center justify-center text-[#64748B] mb-3", children: icon || _jsx(FolderOpen, { className: "h-6 w-6 text-[#94A3B8]" }) }), _jsx("h3", { className: "text-sm font-semibold text-[#111827]", children: title }), _jsx("p", { className: "mt-1 text-xs text-[#64748B] max-w-sm", children: description }), actionLabel && onAction && (_jsx("div", { className: "mt-4", children: _jsx(Button, { variant: "secondary", size: "sm", onClick: onAction, children: actionLabel }) }))] }));
};
