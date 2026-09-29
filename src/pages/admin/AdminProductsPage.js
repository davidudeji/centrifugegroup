import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/ui/SEO';
import { productService } from '../../services/productService';
import { useUIStore } from '../../stores/uiStore';
import { mockCategories } from '../../data/mockData';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Badge } from '../../components/ui/Badge';
import { Modal } from '../../components/ui/Modal';
export const AdminProductsPage = () => {
    const { addToast } = useUIStore();
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');
    const [deleteModalProduct, setDeleteModalProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const loadProducts = () => {
        setIsLoading(true);
        productService.getProducts().then((data) => {
            setProducts(data);
            setIsLoading(false);
        });
    };
    useEffect(() => {
        loadProducts();
    }, []);
    const handleDelete = async () => {
        if (!deleteModalProduct)
            return;
        await productService.deleteProduct(deleteModalProduct.id);
        setDeleteModalProduct(null);
        loadProducts();
        addToast({
            title: 'Product Deleted',
            description: `${deleteModalProduct.name} has been removed.`,
            type: 'success',
        });
    };
    const filtered = products.filter((p) => {
        const matchesCat = categoryFilter === 'all' || p.categoryId === categoryFilter;
        const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
        const matchesSearch = search === '' ||
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.sku.toLowerCase().includes(search.toLowerCase());
        return matchesCat && matchesStatus && matchesSearch;
    });
    return (_jsxs("div", { className: "space-y-6 text-left", children: [_jsx(SEO, { title: "Product Catalog Management | Centrifuge Admin" }), _jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-[#0B1F33] font-heading", children: "Commercial Hardware Products" }), _jsx("p", { className: "text-xs text-[#64748B] mt-0.5", children: "Manage your hardware inventory, pricing, specifications, and live store availability." })] }), _jsx(Link, { to: "/admin/products/new", children: _jsx(Button, { variant: "primary", size: "md", leftIcon: _jsx(Plus, { className: "h-4 w-4" }), children: "Add New Product" }) })] }), _jsxs("div", { className: "bg-white p-4 rounded-[12px] border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4", children: [_jsx("div", { className: "w-full md:w-80", children: _jsx(Input, { placeholder: "Search by product name or SKU...", value: search, onChange: (e) => setSearch(e.target.value), leftIcon: _jsx(Search, { className: "h-4 w-4" }) }) }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("select", { value: categoryFilter, onChange: (e) => setCategoryFilter(e.target.value), className: "bg-white text-xs border border-[#E2E8F0] rounded-[8px] py-2 px-3 focus:outline-none", children: [_jsx("option", { value: "all", children: "All Categories" }), mockCategories.map((c) => (_jsx("option", { value: c.id, children: c.name }, c.id)))] }), _jsxs("select", { value: statusFilter, onChange: (e) => setStatusFilter(e.target.value), className: "bg-white text-xs border border-[#E2E8F0] rounded-[8px] py-2 px-3 focus:outline-none", children: [_jsx("option", { value: "all", children: "All Statuses" }), _jsx("option", { value: "active", children: "Active" }), _jsx("option", { value: "draft", children: "Draft" }), _jsx("option", { value: "archived", children: "Archived" })] })] })] }), _jsx("div", { className: "bg-white rounded-[16px] border border-[#E2E8F0] shadow-xs overflow-hidden", children: _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full text-left text-xs divide-y divide-[#E2E8F0]", children: [_jsx("thead", { className: "bg-[#F8FAFC] text-[#475569] font-bold", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3.5", children: "Product" }), _jsx("th", { className: "px-6 py-3.5", children: "SKU" }), _jsx("th", { className: "px-6 py-3.5", children: "Category" }), _jsx("th", { className: "px-6 py-3.5", children: "Price" }), _jsx("th", { className: "px-6 py-3.5", children: "Stock" }), _jsx("th", { className: "px-6 py-3.5", children: "Status" }), _jsx("th", { className: "px-6 py-3.5 text-right", children: "Actions" })] }) }), _jsx("tbody", { className: "divide-y divide-[#E2E8F0]", children: isLoading ? (_jsx("tr", { children: _jsx("td", { colSpan: 7, className: "px-6 py-12 text-center text-[#64748B]", children: "Loading products..." }) })) : filtered.length === 0 ? (_jsx("tr", { children: _jsx("td", { colSpan: 7, className: "px-6 py-12 text-center text-[#64748B]", children: "No products found matching filters." }) })) : (filtered.map((prod) => (_jsxs("tr", { className: "hover:bg-[#F8FAFC]", children: [_jsx("td", { className: "px-6 py-3.5", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("img", { src: prod.images[0], alt: "", className: "h-10 w-10 object-contain rounded border p-0.5 bg-[#F8FAFC] shrink-0" }), _jsxs("div", { children: [_jsx("span", { className: "font-semibold text-[#111827] block line-clamp-1", children: prod.name }), _jsx("span", { className: "text-[10px] text-[#64748B]", children: prod.brand })] })] }) }), _jsx("td", { className: "px-6 py-3.5 font-mono text-[#0B1F33]", children: prod.sku }), _jsx("td", { className: "px-6 py-3.5 text-[#475569]", children: prod.categoryName || 'Hardware' }), _jsxs("td", { className: "px-6 py-3.5 font-bold text-[#0B1F33]", children: ["\u20A6", prod.price.toLocaleString()] }), _jsx("td", { className: "px-6 py-3.5", children: _jsxs(Badge, { variant: prod.stockQuantity <= prod.lowStockThreshold ? 'warning' : 'success', size: "sm", dot: true, children: [prod.stockQuantity, " units"] }) }), _jsx("td", { className: "px-6 py-3.5", children: _jsx(Badge, { variant: prod.status === 'active' ? 'success' : 'neutral', size: "sm", children: prod.status.toUpperCase() }) }), _jsxs("td", { className: "px-6 py-3.5 text-right space-x-2", children: [_jsx(Link, { to: `/admin/products/edit/${prod.id}`, className: "inline-flex p-1 text-[#64748B] hover:text-[#0B1F33]", title: "Edit product", children: _jsx(Edit, { className: "h-4 w-4" }) }), _jsx("button", { onClick: () => setDeleteModalProduct(prod), className: "inline-flex p-1 text-[#DC2626] hover:text-[#B91C1C]", title: "Delete product", children: _jsx(Trash2, { className: "h-4 w-4" }) })] })] }, prod.id)))) })] }) }) }), _jsx(Modal, { isOpen: !!deleteModalProduct, onClose: () => setDeleteModalProduct(null), title: "Delete Product?", description: "This action cannot be undone. The product will be permanently removed from catalog.", maxWidth: "sm", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("p", { className: "text-xs text-[#475569]", children: ["Are you sure you want to delete ", _jsx("strong", { className: "text-[#111827]", children: deleteModalProduct?.name }), " (SKU: ", deleteModalProduct?.sku, ")?"] }), _jsxs("div", { className: "flex justify-end gap-3 pt-2", children: [_jsx(Button, { variant: "outline", size: "sm", onClick: () => setDeleteModalProduct(null), children: "Cancel" }), _jsx(Button, { variant: "danger", size: "sm", onClick: handleDelete, children: "Delete Product" })] })] }) })] }));
};
export default AdminProductsPage;
