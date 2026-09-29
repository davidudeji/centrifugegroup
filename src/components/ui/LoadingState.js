import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const LoadingState = ({ message = 'Loading platform data...', }) => {
    return (_jsxs("div", { className: "py-16 flex flex-col items-center justify-center text-center", children: [_jsx("div", { className: "relative", children: _jsx("div", { className: "w-10 h-10 border-2 border-[#E2E8F0] border-t-[#16C7D9] rounded-full animate-spin" }) }), _jsx("p", { className: "mt-4 text-xs font-medium text-[#64748B]", children: message })] }));
};
