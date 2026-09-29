import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { SEO } from '../../components/ui/SEO';
import { productService } from '../../services/productService';
import { mockInventoryMovements } from '../../data/mockData';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Badge } from '../../components/ui/Badge';
import { Modal } from '../../components/ui/Modal';
import { useUIStore } from '../../stores/uiStore';
export const AdminInventoryPage = () => {
    const { addToast } = useUIStore();
    const [products, setProducts] = useState([]);
    const [movements, setMovements] = useState(mockInventoryMovements);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeTab, setActiveTab] = useState('inventory');
    // Stock adjustment modal state
    const [isAdjustModalOpen, setIsAdjustModalOpen] = useState(false);
    const [adjustType, setAdjustType] = useState('increase');
    const [adjustQuantity, setAdjustQuantity] = useState(5);
    const [adjustReason, setAdjustReason] = useState('Warehouse restock shipment');
    const loadProducts = () => {
        productService.getProducts().then(setProducts);
    };
    useEffect(() => {
        loadProducts();
    }, []);
    const handleOpenAdjust = (prod) => {
        setSelectedProduct(prod);
        setAdjustType('increase');
        setAdjustQuantity(5);
        setAdjustReason('Warehouse restock shipment');
        setIsAdjustModalOpen(true);
    };
    const handleSaveAdjustment = async (e) => {
        e.preventDefault();
        if (!selectedProduct)
            return;
        let newStock = selectedProduct.stockQuantity;
        if (adjustType === 'increase')
            newStock += adjustQuantity;
        if (adjustType === 'decrease')
            newStock = Math.max(0, newStock - adjustQuantity);
        if (adjustType === 'correction')
            newStock = adjustQuantity;
        await productService.adjustStock(selectedProduct.id, newStock);
        // Record movement
        const movement = {
            id: `mov-${Date.now()}`,
            productId: selectedProduct.id,
            productName: selectedProduct.name,
            sku: selectedProduct.sku,
            type: adjustType,
            quantity: adjustQuantity,
            previousStock: selectedProduct.stockQuantity,
            newStock,
            reason: adjustReason,
            userId: 'usr-admin-1',
            userName: 'Kelechi Nwosu (Store Admin)',
            createdAt: new Date().toISOString(),
        };
        setMovements([movement, ...movements]);
        loadProducts();
        setIsAdjustModalOpen(false);
        addToast({
            title: 'Inventory Adjusted',
            description: `Stock for ${selectedProduct.name} updated to ${newStock} units.`,
            type: 'success',
        });
    };
    return (_jsxs("div", { className: "space-y-6 text-left", children: [_jsx(SEO, { title: "Inventory & Stock Management | Centrifuge Admin" }), _jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-[#0B1F33] font-heading", children: "Hardware Inventory & Stock Levels" }), _jsx("p", { className: "text-xs text-[#64748B] mt-0.5", children: "Monitor real-time warehouse availability, audit movements, and adjust physical counts." })] }), _jsxs("div", { className: "flex rounded-[6px] border border-[#CBD5E1] bg-white p-0.5 text-xs", children: [_jsx("button", { onClick: () => setActiveTab('inventory'), className: `px-3 py-1.5 rounded-[4px] font-semibold transition-colors ${activeTab === 'inventory' ? 'bg-[#0B1F33] text-white' : 'text-[#64748B]'}`, children: "Live Stock Table" }), _jsxs("button", { onClick: () => setActiveTab('history'), className: `px-3 py-1.5 rounded-[4px] font-semibold transition-colors ${activeTab === 'history' ? 'bg-[#0B1F33] text-white' : 'text-[#64748B]'}`, children: ["Movement Audit Log (", movements.length, ")"] })] })] }), activeTab === 'inventory' ? (_jsx("div", { className: "bg-white rounded-[16px] border border-[#E2E8F0] shadow-xs overflow-hidden", children: _jsxs("table", { className: "w-full text-left text-xs divide-y divide-[#E2E8F0]", children: [_jsx("thead", { className: "bg-[#F8FAFC] text-[#475569] font-bold", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3.5", children: "Product & SKU" }), _jsx("th", { className: "px-6 py-3.5", children: "Category" }), _jsx("th", { className: "px-6 py-3.5", children: "Available Stock" }), _jsx("th", { className: "px-6 py-3.5", children: "Threshold" }), _jsx("th", { className: "px-6 py-3.5", children: "Health Status" }), _jsx("th", { className: "px-6 py-3.5 text-right", children: "Adjustment" })] }) }), _jsx("tbody", { className: "divide-y divide-[#E2E8F0]", children: products.map((p) => (_jsxs("tr", { className: "hover:bg-[#F8FAFC]", children: [_jsxs("td", { className: "px-6 py-4", children: [_jsx("span", { className: "font-semibold text-[#111827] block line-clamp-1", children: p.name }), _jsxs("span", { className: "font-mono text-[10px] text-[#64748B]", children: ["SKU: ", p.sku] })] }), _jsx("td", { className: "px-6 py-4 text-[#64748B]", children: p.categoryName || 'Hardware' }), _jsxs("td", { className: "px-6 py-4 font-bold text-sm text-[#0B1F33]", children: [p.stockQuantity, " units"] }), _jsxs("td", { className: "px-6 py-4 text-[#64748B]", children: [p.lowStockThreshold, " units"] }), _jsx("td", { className: "px-6 py-4", children: p.stockQuantity === 0 ? (_jsx(Badge, { variant: "error", size: "sm", dot: true, children: "Out of Stock" })) : p.stockQuantity <= p.lowStockThreshold ? (_jsx(Badge, { variant: "warning", size: "sm", dot: true, children: "Low Stock" })) : (_jsx(Badge, { variant: "success", size: "sm", dot: true, children: "In Stock" })) }), _jsx("td", { className: "px-6 py-4 text-right", children: _jsx(Button, { variant: "outline", size: "sm", onClick: () => handleOpenAdjust(p), children: "Adjust Stock" }) })] }, p.id))) })] }) })) : (_jsx("div", { className: "bg-white rounded-[16px] border border-[#E2E8F0] shadow-xs overflow-hidden", children: _jsxs("table", { className: "w-full text-left text-xs divide-y divide-[#E2E8F0]", children: [_jsx("thead", { className: "bg-[#F8FAFC] text-[#475569] font-bold", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3.5", children: "Timestamp" }), _jsx("th", { className: "px-6 py-3.5", children: "Product & SKU" }), _jsx("th", { className: "px-6 py-3.5", children: "Type" }), _jsx("th", { className: "px-6 py-3.5", children: "Qty Shift" }), _jsx("th", { className: "px-6 py-3.5", children: "Resulting Stock" }), _jsx("th", { className: "px-6 py-3.5", children: "Reason & Auditor" })] }) }), _jsx("tbody", { className: "divide-y divide-[#E2E8F0]", children: movements.map((m) => (_jsxs("tr", { className: "hover:bg-[#F8FAFC]", children: [_jsx("td", { className: "px-6 py-4 text-[#64748B] whitespace-nowrap", children: new Date(m.createdAt).toLocaleString() }), _jsxs("td", { className: "px-6 py-4", children: [_jsx("span", { className: "font-semibold text-[#111827] block line-clamp-1", children: m.productName }), _jsx("span", { className: "font-mono text-[10px] text-[#64748B]", children: m.sku })] }), _jsx("td", { className: "px-6 py-4", children: _jsx(Badge, { variant: m.type === 'increase' ? 'success' : m.type === 'decrease' ? 'error' : 'neutral', size: "sm", children: m.type.toUpperCase() }) }), _jsx("td", { className: "px-6 py-4 font-mono font-bold text-[#0B1F33]", children: m.type === 'increase' ? `+${m.quantity}` : m.type === 'decrease' ? `-${m.quantity}` : `=${m.quantity}` }), _jsxs("td", { className: "px-6 py-4 font-semibold text-[#111827]", children: [m.newStock, " units"] }), _jsxs("td", { className: "px-6 py-4", children: [_jsx("span", { className: "text-[#111827] block", children: m.reason }), _jsx("span", { className: "text-[10px] text-[#64748B]", children: m.userName })] })] }, m.id))) })] }) })), _jsx(Modal, { isOpen: isAdjustModalOpen, onClose: () => setIsAdjustModalOpen(false), title: `Adjust Stock: ${selectedProduct?.name}`, description: `Current on-hand inventory: ${selectedProduct?.stockQuantity} units`, children: _jsxs("form", { onSubmit: handleSaveAdjustment, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#1D242F] mb-1.5", children: "Adjustment Type" }), _jsxs("select", { value: adjustType, onChange: (e) => setAdjustType(e.target.value), className: "w-full bg-white text-xs border border-[#E2E8F0] rounded-[8px] py-2 px-3 focus:outline-none", children: [_jsx("option", { value: "increase", children: "Increase (+ Receipt from Supplier / Restock)" }), _jsx("option", { value: "decrease", children: "Decrease (- Order Dispatch / Damaged Unit)" }), _jsx("option", { value: "correction", children: "Physical Count Correction (Set Exact Value)" })] })] }), _jsx(Input, { label: adjustType === 'correction' ? 'Exact Count After Audit' : 'Quantity to Adjust', type: "number", required: true, value: adjustQuantity, onChange: (e) => setAdjustQuantity(Number(e.target.value)) }), _jsx(Input, { label: "Operational Reason *", required: true, placeholder: "e.g. PO-8821 container receipt, damaged in transit...", value: adjustReason, onChange: (e) => setAdjustReason(e.target.value) }), _jsxs("div", { className: "pt-2 flex justify-end gap-2 border-t border-[#E2E8F0]", children: [_jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: () => setIsAdjustModalOpen(false), children: "Cancel" }), _jsx(Button, { type: "submit", variant: "primary", size: "sm", children: "Commit Stock Adjustment" })] })] }) })] }));
};
export default AdminInventoryPage;
