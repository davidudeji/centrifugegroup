import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { ToastContainer } from '../ui/ToastContainer';
export const PublicLayout = () => {
    return (_jsxs("div", { className: "min-h-screen flex flex-col bg-[#F7F9FA] text-[#172333] font-sans antialiased selection:bg-[#16C7D9]/20 selection:text-[#0B1F33]", children: [_jsx(Header, {}), _jsx("main", { className: "flex-1", children: _jsx(Outlet, {}) }), _jsx(Footer, {}), _jsx(CartDrawer, {}), _jsx(ToastContainer, {})] }));
};
