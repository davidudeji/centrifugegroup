import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { X } from 'lucide-react';
export const Modal = ({ isOpen, onClose, title, description, children, maxWidth = 'md', }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape')
                onClose();
        };
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);
    if (!isOpen)
        return null;
    const maxWidthStyles = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-2xl',
    };
    return (_jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6", role: "dialog", "aria-modal": "true", children: [_jsx("div", { className: "fixed inset-0 bg-[#071521]/60 backdrop-blur-[2px] transition-opacity", onClick: onClose }), _jsxs("div", { className: `relative w-full ${maxWidthStyles[maxWidth]} bg-white rounded-[16px] shadow-2xl border border-[#E2E8F0] p-6 z-10 animate-in fade-in zoom-in-95 duration-150`, children: [_jsxs("div", { className: "flex items-start justify-between pb-3 border-b border-[#E2E8F0]/80", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-base font-bold text-[#111827] font-heading", children: title }), description && (_jsx("p", { className: "mt-1 text-xs text-[#64748B]", children: description }))] }), _jsx("button", { onClick: onClose, className: "rounded-[6px] p-1 text-[#94A3B8] hover:text-[#111827] hover:bg-[#F1F5F9] transition-colors", "aria-label": "Close modal", children: _jsx(X, { className: "h-4 w-4" }) })] }), _jsx("div", { className: "mt-4", children: children })] })] }));
};
