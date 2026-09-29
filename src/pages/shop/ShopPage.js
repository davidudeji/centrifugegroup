import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/ui/SEO';
import { productService } from '../../services/productService';
import { useCartStore } from '../../stores/cartStore';
import { useUIStore } from '../../stores/uiStore';
import { mockCategories } from '../../data/mockData';
import { Search, ShoppingBag } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Badge } from '../../components/ui/Badge';
export const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('featured');
    const [isLoading, setIsLoading] = useState(true);
    const { addItem } = useCartStore();
    const { addToast } = useUIStore();
    useEffect(() => {
        productService.getProducts().then((data) => {
            setProducts(data);
            setIsLoading(false);
        });
    }, []);
    // Filter and sort
    const filteredProducts = products
        .filter((p) => {
        const matchesCategory = selectedCategory === 'all' || p.categoryId === selectedCategory;
        const matchesSearch = searchQuery === '' ||
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    })
        .sort((a, b) => {
        if (sortBy === 'price-low')
            return a.price - b.price;
        if (sortBy === 'price-high')
            return b.price - a.price;
        if (sortBy === 'name')
            return a.name.localeCompare(b.name);
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
    const handleAddToCart = (product, e) => {
        e.preventDefault();
        e.stopPropagation();
        addItem(product, 1);
        addToast({
            title: 'Added to Cart',
            description: `${product.name} has been added to your hardware cart.`,
            type: 'success',
        });
    };
    return (_jsxs("div", { className: "w-full text-left", children: [_jsx(SEO, { title: "Centrifuge Hardware Store | Inverters, UPS & Solar Systems", description: "Industrial pure sine wave inverters, online UPS backup systems, and MPPT solar charge controllers." }), _jsx("section", { className: "bg-[#0B1F33] text-white py-14 sm:py-20 border-b border-[#172333]", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-3xl space-y-3", children: [_jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#16C7D9]/15 border border-[#16C7D9]/30 text-xs font-mono font-bold text-[#67E8F9]", children: _jsx("span", { children: "COMMERCIAL HARDWARE STORE \u00B7 DEMO INVENTORY" }) }), _jsx("h1", { className: "text-3xl sm:text-5xl font-extrabold font-heading tracking-tight", children: "Technology for the way you work." }), _jsx("p", { className: "text-sm sm:text-base text-[#94A3B8] leading-relaxed", children: "Industrial-grade pure sine wave hybrid inverters, online double-conversion UPS units, MPPT solar controllers, and ruggedized IoT fleet telemetry gateways." })] }) }) }), _jsx("section", { className: "py-12 bg-[#F8FAFC]", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E2E8F0]", children: [_jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [_jsxs("button", { onClick: () => setSelectedCategory('all'), className: `text-xs px-3 py-1.5 rounded-[6px] font-medium transition-colors ${selectedCategory === 'all'
                                                ? 'bg-[#0B1F33] text-white font-semibold shadow-xs'
                                                : 'bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#F1F5F9]'}`, children: ["All Products (", products.length, ")"] }), mockCategories.map((cat) => (_jsx("button", { onClick: () => setSelectedCategory(cat.id), className: `text-xs px-3 py-1.5 rounded-[6px] font-medium transition-colors ${selectedCategory === cat.id
                                                ? 'bg-[#0B1F33] text-white font-semibold shadow-xs'
                                                : 'bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#F1F5F9]'}`, children: cat.name }, cat.id)))] }), _jsxs("div", { className: "flex items-center gap-3 w-full lg:w-auto", children: [_jsx("div", { className: "w-full sm:w-64", children: _jsx(Input, { placeholder: "Search products & SKUs...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), leftIcon: _jsx(Search, { className: "h-4 w-4" }) }) }), _jsx("div", { className: "shrink-0", children: _jsxs("select", { value: sortBy, onChange: (e) => setSortBy(e.target.value), className: "bg-white text-xs text-[#111827] border border-[#E2E8F0] rounded-[8px] py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#16C7D9]/30", children: [_jsx("option", { value: "featured", children: "Featured First" }), _jsx("option", { value: "price-low", children: "Price: Low to High" }), _jsx("option", { value: "price-high", children: "Price: High to Low" }), _jsx("option", { value: "name", children: "Name A-Z" })] }) })] })] }), isLoading ? (_jsx("div", { className: "py-20 text-center text-xs text-[#64748B]", children: "Loading commercial catalog..." })) : filteredProducts.length === 0 ? (_jsxs("div", { className: "py-20 text-center bg-white rounded-[12px] border border-[#E2E8F0] p-8 space-y-3", children: [_jsx("p", { className: "text-sm font-semibold text-[#111827]", children: "No products found" }), _jsx("p", { className: "text-xs text-[#64748B]", children: "Try clearing your search query or selecting a different category." }), _jsx(Button, { variant: "secondary", size: "sm", onClick: () => {
                                        setSelectedCategory('all');
                                        setSearchQuery('');
                                    }, children: "Reset Filters" })] })) : (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: filteredProducts.map((prod) => (_jsxs(Link, { to: `/shop/product/${prod.slug}`, className: "bg-white rounded-[14px] border border-[#E2E8F0] overflow-hidden flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-md transition-all group", children: [_jsxs("div", { children: [_jsxs("div", { className: "h-52 relative overflow-hidden bg-[#F8FAFC] p-4 flex items-center justify-center border-b border-[#E2E8F0]/80", children: [_jsx("img", { src: prod.images[0], alt: prod.name, className: "max-h-full max-w-full object-contain group-hover:scale-104 transition-transform duration-300" }), _jsx("div", { className: "absolute top-2.5 left-2.5 flex flex-col gap-1", children: prod.stockQuantity <= prod.lowStockThreshold ? (_jsxs(Badge, { variant: "warning", size: "sm", dot: true, children: ["Low Stock (", prod.stockQuantity, ")"] })) : (_jsx(Badge, { variant: "success", size: "sm", dot: true, children: "In Stock" })) })] }), _jsxs("div", { className: "p-5", children: [_jsxs("div", { className: "flex items-center justify-between text-[11px] text-[#64748B] font-mono", children: [_jsx("span", { children: prod.brand }), _jsx("span", { children: prod.sku })] }), _jsx("h3", { className: "text-sm font-bold text-[#111827] font-heading mt-1.5 group-hover:text-[#16C7D9] transition-colors line-clamp-2 leading-snug", children: prod.name }), _jsx("p", { className: "text-[11px] text-[#64748B] mt-1.5 line-clamp-2 leading-relaxed", children: prod.shortDescription })] })] }), _jsx("div", { className: "p-5 pt-0", children: _jsxs("div", { className: "pt-3 border-t border-[#E2E8F0]/80 flex items-center justify-between", children: [_jsxs("div", { children: [_jsxs("div", { className: "text-base font-extrabold text-[#0B1F33] font-heading", children: ["\u20A6", prod.price.toLocaleString()] }), prod.compareAtPrice && (_jsxs("div", { className: "text-[10px] text-[#94A3B8] line-through font-mono", children: ["\u20A6", prod.compareAtPrice.toLocaleString()] }))] }), _jsx(Button, { variant: "primary", size: "sm", onClick: (e) => handleAddToCart(prod, e), leftIcon: _jsx(ShoppingBag, { className: "h-3.5 w-3.5" }), children: "Add to Cart" })] }) })] }, prod.id))) }))] }) })] }));
};
export default ShopPage;
