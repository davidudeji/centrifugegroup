import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { SEO } from '../../components/ui/SEO';
import { productService } from '../../services/productService';
import { useUIStore } from '../../stores/uiStore';
import { mockCategories } from '../../data/mockData';
import { ArrowLeft, Save } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
export const AdminProductFormPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToast } = useUIStore();
    const isEditing = Boolean(id && id !== 'new');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(isEditing);
    // Form State
    const [formData, setFormData] = useState({
        name: '',
        slug: '',
        sku: '',
        brand: 'Centrifuge Power',
        categoryId: 'cat-1',
        price: 0,
        compareAtPrice: 0,
        costPrice: 0,
        stockQuantity: 10,
        lowStockThreshold: 3,
        status: 'active',
        featured: false,
        shortDescription: '',
        description: '',
        imageUrl: 'https://images.unsplash.com/photo-1558441719-8b4bee5e998a?auto=format&fit=crop&w=800&q=80',
        weight: '15.0 kg',
        dimensions: '400 x 300 x 150 mm',
    });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        if (isEditing && id) {
            productService.getProductById(id).then((prod) => {
                if (prod) {
                    setFormData({
                        name: prod.name,
                        slug: prod.slug,
                        sku: prod.sku,
                        brand: prod.brand,
                        categoryId: prod.categoryId,
                        price: prod.price,
                        compareAtPrice: prod.compareAtPrice || 0,
                        costPrice: prod.costPrice || 0,
                        stockQuantity: prod.stockQuantity,
                        lowStockThreshold: prod.lowStockThreshold,
                        status: prod.status,
                        featured: prod.featured,
                        shortDescription: prod.shortDescription,
                        description: prod.description,
                        imageUrl: prod.images[0] || '',
                        weight: prod.weight || '',
                        dimensions: prod.dimensions || '',
                    });
                }
                setIsLoading(false);
            });
        }
    }, [id, isEditing]);
    const validate = () => {
        const errs = {};
        if (!formData.name.trim())
            errs.name = 'Product name is required';
        if (!formData.sku.trim())
            errs.sku = 'SKU is required';
        if (formData.price <= 0)
            errs.price = 'Price must be greater than zero';
        if (formData.stockQuantity < 0)
            errs.stockQuantity = 'Stock cannot be negative';
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate())
            return;
        setIsSubmitting(true);
        const selectedCat = mockCategories.find((c) => c.id === formData.categoryId);
        try {
            if (isEditing && id) {
                await productService.updateProduct(id, {
                    name: formData.name,
                    slug: formData.slug || formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                    sku: formData.sku,
                    brand: formData.brand,
                    categoryId: formData.categoryId,
                    categoryName: selectedCat?.name || 'Hardware',
                    price: Number(formData.price),
                    compareAtPrice: Number(formData.compareAtPrice) || undefined,
                    costPrice: Number(formData.costPrice) || undefined,
                    stockQuantity: Number(formData.stockQuantity),
                    lowStockThreshold: Number(formData.lowStockThreshold),
                    status: formData.status,
                    featured: formData.featured,
                    shortDescription: formData.shortDescription,
                    description: formData.description,
                    images: [formData.imageUrl],
                    weight: formData.weight,
                    dimensions: formData.dimensions,
                });
                addToast({
                    title: 'Product Updated',
                    description: `${formData.name} updated successfully.`,
                    type: 'success',
                });
            }
            else {
                await productService.createProduct({
                    name: formData.name,
                    slug: formData.slug || formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                    sku: formData.sku,
                    brand: formData.brand,
                    categoryId: formData.categoryId,
                    categoryName: selectedCat?.name || 'Hardware',
                    price: Number(formData.price),
                    compareAtPrice: Number(formData.compareAtPrice) || undefined,
                    costPrice: Number(formData.costPrice) || undefined,
                    stockQuantity: Number(formData.stockQuantity),
                    lowStockThreshold: Number(formData.lowStockThreshold),
                    status: formData.status,
                    featured: formData.featured,
                    shortDescription: formData.shortDescription,
                    description: formData.description,
                    images: [formData.imageUrl],
                    weight: formData.weight,
                    dimensions: formData.dimensions,
                    specifications: { 'Warranty': '24 Months', 'Input Voltage': '230V AC' },
                });
                addToast({
                    title: 'Product Created',
                    description: `${formData.name} added to catalog successfully.`,
                    type: 'success',
                });
            }
            setIsSubmitting(false);
            navigate('/admin/products');
        }
        catch (err) {
            setIsSubmitting(false);
            addToast({
                title: 'Error',
                description: 'Failed to save product details.',
                type: 'error',
            });
        }
    };
    if (isLoading) {
        return _jsx("div", { className: "py-20 text-center text-xs text-[#64748B]", children: "Loading product details..." });
    }
    return (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6 text-left", children: [_jsx(SEO, { title: isEditing ? 'Edit Product | Admin' : 'New Product | Admin' }), _jsxs("div", { className: "flex items-center justify-between pb-4 border-b border-[#E2E8F0]", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Link, { to: "/admin/products", className: "p-1.5 rounded-[6px] text-[#64748B] hover:text-[#0B1F33] hover:bg-[#F1F5F9]", children: _jsx(ArrowLeft, { className: "h-4 w-4" }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-xl font-bold text-[#0B1F33] font-heading", children: isEditing ? `Edit: ${formData.name}` : 'Create New Hardware Product' }), _jsx("p", { className: "text-xs text-[#64748B]", children: "Configure hardware specs, pricing, and stock visibility." })] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Link, { to: "/admin/products", children: _jsx(Button, { type: "button", variant: "outline", size: "sm", children: "Cancel" }) }), _jsx(Button, { type: "submit", variant: "primary", size: "sm", isLoading: isSubmitting, leftIcon: _jsx(Save, { className: "h-4 w-4" }), children: isEditing ? 'Save Changes' : 'Publish Product' })] })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8", children: [_jsxs("div", { className: "lg:col-span-8 space-y-6", children: [_jsxs("div", { className: "bg-white p-6 rounded-[16px] border border-[#E2E8F0] shadow-xs space-y-4", children: [_jsx("h3", { className: "text-sm font-bold text-[#0B1F33] font-heading", children: "Product Information" }), _jsx(Input, { label: "Product Title", required: true, error: errors.name, value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }) }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [_jsx(Input, { label: "SKU Code", required: true, error: errors.sku, value: formData.sku, onChange: (e) => setFormData({ ...formData, sku: e.target.value }) }), _jsx(Input, { label: "Brand", required: true, value: formData.brand, onChange: (e) => setFormData({ ...formData, brand: e.target.value }) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#1D242F] mb-1.5", children: "Short Description (Listing Summary)" }), _jsx("textarea", { rows: 2, required: true, className: "w-full text-xs p-3 border border-[#E2E8F0] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#16C7D9]/30", value: formData.shortDescription, onChange: (e) => setFormData({ ...formData, shortDescription: e.target.value }) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#1D242F] mb-1.5", children: "Full Technical Specifications & Overview" }), _jsx("textarea", { rows: 4, required: true, className: "w-full text-xs p-3 border border-[#E2E8F0] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#16C7D9]/30", value: formData.description, onChange: (e) => setFormData({ ...formData, description: e.target.value }) })] })] }), _jsxs("div", { className: "bg-white p-6 rounded-[16px] border border-[#E2E8F0] shadow-xs space-y-4", children: [_jsx("h3", { className: "text-sm font-bold text-[#0B1F33] font-heading", children: "Product Image" }), _jsx(Input, { label: "Image Direct URL", value: formData.imageUrl, onChange: (e) => setFormData({ ...formData, imageUrl: e.target.value }) }), formData.imageUrl && (_jsx("div", { className: "h-36 w-36 rounded-[8px] border border-[#E2E8F0] p-2 bg-[#F8FAFC]", children: _jsx("img", { src: formData.imageUrl, alt: "Preview", className: "h-full w-full object-contain" }) }))] })] }), _jsxs("div", { className: "lg:col-span-4 space-y-6", children: [_jsxs("div", { className: "bg-white p-6 rounded-[16px] border border-[#E2E8F0] shadow-xs space-y-4", children: [_jsx("h3", { className: "text-sm font-bold text-[#0B1F33] font-heading", children: "Organization" }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#1D242F] mb-1.5", children: "Catalog Category *" }), _jsx("select", { value: formData.categoryId, onChange: (e) => setFormData({ ...formData, categoryId: e.target.value }), className: "w-full bg-white text-xs border border-[#E2E8F0] rounded-[8px] py-2 px-3 focus:outline-none", children: mockCategories.map((c) => (_jsx("option", { value: c.id, children: c.name }, c.id))) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-xs font-semibold text-[#1D242F] mb-1.5", children: "Publishing Status" }), _jsxs("select", { value: formData.status, onChange: (e) => setFormData({ ...formData, status: e.target.value }), className: "w-full bg-white text-xs border border-[#E2E8F0] rounded-[8px] py-2 px-3 focus:outline-none", children: [_jsx("option", { value: "active", children: "Active (Visible in Store)" }), _jsx("option", { value: "draft", children: "Draft (Hidden)" }), _jsx("option", { value: "archived", children: "Archived" })] })] }), _jsxs("div", { className: "flex items-center gap-2 pt-2", children: [_jsx("input", { type: "checkbox", id: "featured", checked: formData.featured, onChange: (e) => setFormData({ ...formData, featured: e.target.checked }), className: "rounded text-[#16C7D9] focus:ring-[#16C7D9]" }), _jsx("label", { htmlFor: "featured", className: "text-xs font-medium text-[#111827]", children: "Feature on Homepage" })] })] }), _jsxs("div", { className: "bg-white p-6 rounded-[16px] border border-[#E2E8F0] shadow-xs space-y-4", children: [_jsx("h3", { className: "text-sm font-bold text-[#0B1F33] font-heading", children: "Pricing & Margins (NGN)" }), _jsx(Input, { label: "Selling Price (\u20A6)", type: "number", required: true, error: errors.price, value: formData.price, onChange: (e) => setFormData({ ...formData, price: Number(e.target.value) }) }), _jsx(Input, { label: "Compare-at Price (\u20A6) [Optional]", type: "number", value: formData.compareAtPrice, onChange: (e) => setFormData({ ...formData, compareAtPrice: Number(e.target.value) }) }), _jsx(Input, { label: "Cost Price (\u20A6)", type: "number", value: formData.costPrice, onChange: (e) => setFormData({ ...formData, costPrice: Number(e.target.value) }) })] }), _jsxs("div", { className: "bg-white p-6 rounded-[16px] border border-[#E2E8F0] shadow-xs space-y-4", children: [_jsx("h3", { className: "text-sm font-bold text-[#0B1F33] font-heading", children: "Inventory Controls" }), _jsx(Input, { label: "Quantity in Stock", type: "number", required: true, error: errors.stockQuantity, value: formData.stockQuantity, onChange: (e) => setFormData({ ...formData, stockQuantity: Number(e.target.value) }) }), _jsx(Input, { label: "Low-Stock Alert Threshold", type: "number", value: formData.lowStockThreshold, onChange: (e) => setFormData({ ...formData, lowStockThreshold: Number(e.target.value) }) })] })] })] })] }));
};
export default AdminProductFormPage;
