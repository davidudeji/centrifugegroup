import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SEO } from '../../components/ui/SEO';
import { productService } from '../../services/productService';
import { useCartStore } from '../../stores/cartStore';
import { useUIStore } from '../../stores/uiStore';
import { ArrowLeft, ShoppingBag, Heart, Truck, ShieldCheck, Minus, Plus, Zap, } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
export const ProductDetailPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { addItem } = useCartStore();
    const { addToast } = useUIStore();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [selectedImage, setSelectedImage] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [isWishlisted, setIsWishlisted] = useState(false);
    useEffect(() => {
        if (!slug)
            return;
        setIsLoading(true);
        productService.getProductBySlug(slug).then((prod) => {
            setProduct(prod);
            if (prod) {
                setSelectedImage(prod.images[0]);
                productService.getProducts({ categoryId: prod.categoryId }).then((all) => {
                    setRelatedProducts(all.filter((p) => p.id !== prod.id).slice(0, 3));
                });
            }
            setIsLoading(false);
        });
    }, [slug]);
    if (isLoading) {
        return (_jsx("div", { className: "py-32 text-center text-xs text-[#64748B]", children: "Loading product specifications..." }));
    }
    if (!product) {
        return (_jsxs("div", { className: "py-32 text-center space-y-4", children: [_jsx("h2", { className: "text-xl font-bold text-[#111827]", children: "Product Not Found" }), _jsx("p", { className: "text-xs text-[#64748B]", children: "The requested hardware product does not exist." }), _jsx(Link, { to: "/shop", children: _jsx(Button, { variant: "dark", size: "sm", children: "Back to Store" }) })] }));
    }
    const handleAddToCart = () => {
        addItem(product, quantity);
        addToast({
            title: 'Added to Cart',
            description: `${quantity}x ${product.name} added to your cart.`,
            type: 'success',
        });
    };
    const handleBuyNow = () => {
        addItem(product, quantity);
        navigate('/checkout');
    };
    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
        addToast({
            title: isWishlisted ? 'Removed from Wishlist' : 'Saved to Wishlist',
            description: `${product.name} has been updated.`,
            type: 'info',
        });
    };
    return (_jsxs("div", { className: "w-full text-left", children: [_jsx(SEO, { title: `${product.name} | Centrifuge Store`, description: product.shortDescription }), _jsx("section", { className: "bg-white border-b border-[#E2E8F0] py-3.5", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex items-center gap-2 text-xs text-[#64748B]", children: [_jsxs(Link, { to: "/shop", className: "hover:text-[#0B1F33] flex items-center gap-1", children: [_jsx(ArrowLeft, { className: "h-3 w-3" }), _jsx("span", { children: "Hardware Store" })] }), _jsx("span", { children: "/" }), _jsx("span", { children: product.categoryName || 'Hardware' }), _jsx("span", { children: "/" }), _jsx("span", { className: "text-[#111827] font-semibold truncate max-w-xs", children: product.name })] }) }) }), _jsx("section", { className: "py-12 bg-[#F8FAFC]", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12", children: [_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white p-6 sm:p-10 rounded-[18px] border border-[#E2E8F0] shadow-xs", children: [_jsxs("div", { className: "lg:col-span-6 space-y-4", children: [_jsx("div", { className: "h-80 sm:h-[420px] rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] p-6 flex items-center justify-center overflow-hidden", children: _jsx("img", { src: selectedImage || product.images[0], alt: product.name, className: "max-h-full max-w-full object-contain" }) }), product.images.length > 1 && (_jsx("div", { className: "flex gap-3", children: product.images.map((img, i) => (_jsx("button", { onClick: () => setSelectedImage(img), className: `h-20 w-20 rounded-[8px] bg-[#F8FAFC] p-2 border transition-all ${selectedImage === img
                                                    ? 'border-[#16C7D9] ring-2 ring-[#16C7D9]/20'
                                                    : 'border-[#E2E8F0] hover:border-[#CBD5E1]'}`, children: _jsx("img", { src: img, alt: "", className: "h-full w-full object-contain" }) }, i))) }))] }), _jsxs("div", { className: "lg:col-span-6 space-y-5 text-left", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("span", { className: "text-xs font-mono font-bold text-[#64748B] uppercase", children: [product.brand, " \u00B7 SKU: ", product.sku] }), product.stockQuantity <= product.lowStockThreshold ? (_jsxs(Badge, { variant: "warning", size: "sm", dot: true, children: ["Low Stock (", product.stockQuantity, " remaining)"] })) : (_jsxs(Badge, { variant: "success", size: "sm", dot: true, children: ["In Stock (", product.stockQuantity, " units)"] }))] }), _jsx("h1", { className: "text-2xl sm:text-3xl font-extrabold text-[#0B1F33] font-heading mt-2", children: product.name }), _jsx("p", { className: "text-sm text-[#64748B] mt-2 leading-relaxed", children: product.shortDescription })] }), _jsxs("div", { className: "pt-2 pb-4 border-y border-[#E2E8F0]", children: [_jsxs("div", { className: "flex items-baseline gap-3", children: [_jsxs("span", { className: "text-3xl font-extrabold text-[#0B1F33] font-heading", children: ["\u20A6", product.price.toLocaleString()] }), product.compareAtPrice && (_jsxs("span", { className: "text-sm text-[#94A3B8] line-through font-mono", children: ["\u20A6", product.compareAtPrice.toLocaleString()] }))] }), _jsx("p", { className: "text-[11px] text-[#64748B] mt-1", children: "Includes 7.5% statutory VAT. Free freight delivery on orders over \u20A62,000,000." })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("span", { className: "text-xs font-bold text-[#111827]", children: "Quantity:" }), _jsxs("div", { className: "flex items-center border border-[#CBD5E1] rounded-[8px] bg-white", children: [_jsx("button", { onClick: () => setQuantity(Math.max(1, quantity - 1)), className: "p-2 hover:bg-[#F1F5F9] text-[#64748B] transition-colors rounded-l-[7px]", children: _jsx(Minus, { className: "h-3.5 w-3.5" }) }), _jsx("span", { className: "px-4 text-xs font-bold text-[#111827]", children: quantity }), _jsx("button", { onClick: () => setQuantity(Math.min(product.stockQuantity, quantity + 1)), className: "p-2 hover:bg-[#F1F5F9] text-[#64748B] transition-colors rounded-r-[7px]", children: _jsx(Plus, { className: "h-3.5 w-3.5" }) })] })] }), _jsxs("div", { className: "flex flex-wrap items-center gap-3 pt-2", children: [_jsx(Button, { variant: "primary", size: "lg", onClick: handleAddToCart, leftIcon: _jsx(ShoppingBag, { className: "h-4 w-4" }), children: "Add to Cart" }), _jsx(Button, { variant: "dark", size: "lg", onClick: handleBuyNow, leftIcon: _jsx(Zap, { className: "h-4 w-4" }), children: "Buy Now" }), _jsx("button", { onClick: toggleWishlist, className: `p-2.5 rounded-[8px] border transition-colors ${isWishlisted
                                                                ? 'border-[#DC2626] bg-[#FEE2E2] text-[#DC2626]'
                                                                : 'border-[#CBD5E1] text-[#64748B] hover:text-[#0B1F33] hover:bg-[#F8FAFC]'}`, "aria-label": "Wishlist toggle", children: _jsx(Heart, { className: `h-5 w-5 ${isWishlisted ? 'fill-current' : ''}` }) })] })] }), _jsxs("div", { className: "pt-6 border-t border-[#E2E8F0] grid grid-cols-2 gap-4 text-xs text-[#475569]", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(ShieldCheck, { className: "h-4 w-4 text-[#16A34A] shrink-0" }), _jsx("span", { children: "24-Month Manufacturer Warranty" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Truck, { className: "h-4 w-4 text-[#16C7D9] shrink-0" }), _jsx("span", { children: "Nationwide Insured Freight Delivery" })] })] })] })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8", children: [_jsxs("div", { className: "lg:col-span-7 bg-white p-8 rounded-[16px] border border-[#E2E8F0] space-y-4", children: [_jsx("h3", { className: "text-lg font-bold text-[#0B1F33] font-heading", children: "Detailed Product Overview" }), _jsx("p", { className: "text-sm text-[#475569] leading-relaxed", children: product.description })] }), _jsxs("div", { className: "lg:col-span-5 bg-white p-8 rounded-[16px] border border-[#E2E8F0] space-y-4", children: [_jsx("h3", { className: "text-lg font-bold text-[#0B1F33] font-heading", children: "Technical Specifications" }), _jsxs("div", { className: "divide-y divide-[#E2E8F0] text-xs", children: [Object.entries(product.specifications || {}).map(([key, value]) => (_jsxs("div", { className: "py-2.5 flex justify-between", children: [_jsx("span", { className: "font-medium text-[#64748B]", children: key }), _jsx("span", { className: "font-semibold text-[#111827] text-right font-mono", children: value })] }, key))), product.weight && (_jsxs("div", { className: "py-2.5 flex justify-between", children: [_jsx("span", { className: "font-medium text-[#64748B]", children: "Weight" }), _jsx("span", { className: "font-semibold text-[#111827] font-mono", children: product.weight })] })), product.dimensions && (_jsxs("div", { className: "py-2.5 flex justify-between", children: [_jsx("span", { className: "font-medium text-[#64748B]", children: "Dimensions" }), _jsx("span", { className: "font-semibold text-[#111827] font-mono", children: product.dimensions })] }))] })] })] }), relatedProducts.length > 0 && (_jsxs("div", { className: "space-y-6", children: [_jsx("h3", { className: "text-xl font-bold text-[#0B1F33] font-heading", children: "Related Commercial Systems" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: relatedProducts.map((rel) => (_jsxs(Link, { to: `/shop/product/${rel.slug}`, className: "bg-white p-5 rounded-[12px] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all group flex flex-col justify-between", children: [_jsxs("div", { children: [_jsx("div", { className: "h-40 flex items-center justify-center p-2 mb-3 bg-[#F8FAFC] rounded-[8px]", children: _jsx("img", { src: rel.images[0], alt: rel.name, className: "max-h-full max-w-full object-contain" }) }), _jsx("h4", { className: "text-xs font-bold text-[#111827] group-hover:text-[#16C7D9] transition-colors line-clamp-2", children: rel.name })] }), _jsxs("div", { className: "mt-4 pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-xs", children: [_jsxs("span", { className: "font-bold text-[#0B1F33]", children: ["\u20A6", rel.price.toLocaleString()] }), _jsx("span", { className: "text-[#16C7D9] font-semibold", children: "View \u2192" })] })] }, rel.id))) })] }))] }) })] }));
};
export default ProductDetailPage;
