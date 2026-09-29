import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { SEO } from '../../components/ui/SEO';
import { mockCategories } from '../../data/mockData';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Modal } from '../../components/ui/Modal';
import { useUIStore } from '../../stores/uiStore';
export const AdminCategoriesPage = () => {
    const { addToast } = useUIStore();
    const [categories, setCategories] = useState(mockCategories);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const handleOpenCreate = () => {
        setEditingCategory(null);
        setName('');
        setDescription('');
        setIsModalOpen(true);
    };
    const handleOpenEdit = (c) => {
        setEditingCategory(c);
        setName(c.name);
        setDescription(c.description);
        setIsModalOpen(true);
    };
    const handleSave = (e) => {
        e.preventDefault();
        if (!name.trim())
            return;
        if (editingCategory) {
            setCategories((prev) => prev.map((c) => c.id === editingCategory.id ? { ...c, name, description } : c));
            addToast({
                title: 'Category Updated',
                description: `${name} has been updated successfully.`,
                type: 'success',
            });
        }
        else {
            const newCat = {
                id: `cat-${Date.now()}`,
                name,
                slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                description,
                productCount: 0,
                createdAt: new Date().toISOString(),
            };
            setCategories([...categories, newCat]);
            addToast({
                title: 'Category Created',
                description: `${name} added to catalog.`,
                type: 'success',
            });
        }
        setIsModalOpen(false);
    };
    const handleDelete = (id, catName) => {
        setCategories(categories.filter((c) => c.id !== id));
        addToast({
            title: 'Category Deleted',
            description: `${catName} has been removed.`,
            type: 'success',
        });
    };
    return (_jsxs("div", { className: "space-y-6 text-left", children: [_jsx(SEO, { title: "Category Management | Centrifuge Admin" }), _jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-[#0B1F33] font-heading", children: "Hardware Categories" }), _jsx("p", { className: "text-xs text-[#64748B] mt-0.5", children: "Organize products into hierarchical categories and store navigation tags." })] }), _jsx(Button, { variant: "primary", size: "md", onClick: handleOpenCreate, leftIcon: _jsx(Plus, { className: "h-4 w-4" }), children: "Add Category" })] }), _jsx("div", { className: "bg-white rounded-[16px] border border-[#E2E8F0] shadow-xs overflow-hidden", children: _jsxs("table", { className: "w-full text-left text-xs divide-y divide-[#E2E8F0]", children: [_jsx("thead", { className: "bg-[#F8FAFC] text-[#475569] font-bold", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3.5", children: "Category Name" }), _jsx("th", { className: "px-6 py-3.5", children: "Slug" }), _jsx("th", { className: "px-6 py-3.5", children: "Description" }), _jsx("th", { className: "px-6 py-3.5", children: "Products" }), _jsx("th", { className: "px-6 py-3.5 text-right", children: "Actions" })] }) }), _jsx("tbody", { className: "divide-y divide-[#E2E8F0]", children: categories.map((cat) => (_jsxs("tr", { className: "hover:bg-[#F8FAFC]", children: [_jsx("td", { className: "px-6 py-4 font-semibold text-[#111827]", children: cat.name }), _jsx("td", { className: "px-6 py-4 font-mono text-[#64748B]", children: cat.slug }), _jsx("td", { className: "px-6 py-4 text-[#64748B] max-w-sm truncate", children: cat.description }), _jsxs("td", { className: "px-6 py-4 font-semibold text-[#0B1F33]", children: [cat.productCount, " items"] }), _jsxs("td", { className: "px-6 py-4 text-right space-x-2", children: [_jsx("button", { onClick: () => handleOpenEdit(cat), className: "p-1 text-[#64748B] hover:text-[#0B1F33]", title: "Edit category", children: _jsx(Edit, { className: "h-4 w-4" }) }), _jsx("button", { onClick: () => handleDelete(cat.id, cat.name), className: "p-1 text-[#DC2626] hover:text-[#B91C1C]", title: "Delete category", children: _jsx(Trash2, { className: "h-4 w-4" }) })] })] }, cat.id))) })] }) }), _jsx(Modal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false), title: editingCategory ? 'Edit Category' : 'Create New Category', children: _jsxs("form", { onSubmit: handleSave, className: "space-y-4", children: [_jsx(Input, { label: "Category Name", required: true, value: name, onChange: (e) => setName(e.target.value) }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#1D242F] mb-1.5", children: "Description" }), _jsx("textarea", { rows: 3, className: "w-full text-xs p-2.5 border border-[#E2E8F0] rounded-[8px]", value: description, onChange: (e) => setDescription(e.target.value) })] }), _jsxs("div", { className: "flex justify-end gap-2 pt-2 border-t border-[#E2E8F0]", children: [_jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: () => setIsModalOpen(false), children: "Cancel" }), _jsx(Button, { type: "submit", variant: "primary", size: "sm", children: "Save Category" })] })] }) })] }));
};
export default AdminCategoriesPage;
