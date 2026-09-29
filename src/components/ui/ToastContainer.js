import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useUIStore } from '../../stores/uiStore';
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from 'lucide-react';
export const ToastContainer = () => {
    const { toasts, removeToast } = useUIStore();
    if (toasts.length === 0)
        return null;
    const icons = {
        success: _jsx(CheckCircle2, { className: "h-4 w-4 text-[#16A34A] shrink-0" }),
        warning: _jsx(AlertTriangle, { className: "h-4 w-4 text-[#D97706] shrink-0" }),
        error: _jsx(AlertCircle, { className: "h-4 w-4 text-[#DC2626] shrink-0" }),
        info: _jsx(Info, { className: "h-4 w-4 text-[#16C7D9] shrink-0" }),
    };
    return (_jsx("div", { "aria-live": "polite", className: "fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none", children: toasts.map((toast) => (_jsxs("div", { className: "pointer-events-auto flex items-start gap-3 bg-white text-[#111827] p-3.5 rounded-[10px] border border-[#E2E8F0] shadow-lg animate-in slide-in-from-bottom-2 duration-200", children: [icons[toast.type], _jsxs("div", { className: "flex-1 text-left", children: [_jsx("h4", { className: "text-xs font-semibold text-[#111827]", children: toast.title }), toast.description && (_jsx("p", { className: "mt-0.5 text-xs text-[#64748B]", children: toast.description }))] }), _jsx("button", { onClick: () => removeToast(toast.id), className: "text-[#94A3B8] hover:text-[#111827] transition-colors p-0.5", "aria-label": "Dismiss", children: _jsx(X, { className: "h-3.5 w-3.5" }) })] }, toast.id))) }));
};
