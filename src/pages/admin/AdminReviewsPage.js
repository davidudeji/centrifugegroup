import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { SEO } from '../../components/ui/SEO';
import { Star, Search, CheckCircle, XCircle, Clock, MessageSquare, ThumbsUp, Eye } from 'lucide-react';
import { Input } from '../../components/ui/Input';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { useUIStore } from '../../stores/uiStore';
const mockReviews = [
    {
        id: 'rev-001',
        productId: 'prod-1',
        productName: 'Centrifuge Titan 5kVA Pure Sine Wave Inverter',
        productSku: 'CFG-INV-5000',
        customerName: 'Emmanuel Okafor',
        customerEmail: 'e.okafor@hospital.gov.ng',
        rating: 5,
        title: 'Exceptional performance for our hospital ward',
        body: 'We installed three units in our maternity ward. They have been running continuously for 4 months without any issues. The transfer time is indeed under 10ms — our medical equipment never drops. Highly recommended for healthcare facilities.',
        status: 'approved',
        helpful: 12,
        createdAt: '2026-08-15T10:30:00Z',
    },
    {
        id: 'rev-002',
        productId: 'prod-5',
        productName: 'Centrifuge Fortress 10kVA Online UPS (3-Phase)',
        productSku: 'CFG-UPS-10000-3P',
        customerName: 'Amaka Nwosu',
        customerEmail: 'amaka@techsolutions.co',
        rating: 4,
        title: 'Solid enterprise-grade UPS',
        body: 'Running our server room on this unit. The double-conversion architecture genuinely delivers zero transfer time. Installation took some effort but the documentation is thorough. Knocked one star off for the slightly higher-than-expected noise level at full load.',
        status: 'approved',
        helpful: 8,
        createdAt: '2026-08-28T14:22:00Z',
    },
    {
        id: 'rev-003',
        productId: 'prod-9',
        productName: 'Centrifuge SolarMaster 60A MPPT Controller',
        productSku: 'CFG-SOL-60A',
        customerName: 'Musa Aliyu Ibrahim',
        customerEmail: 'm.ibrahim@renewableenergy.ng',
        rating: 5,
        title: 'Best MPPT controller for large arrays',
        body: 'Deployed this on a 12kWp array. The efficiency is remarkable — we are seeing 98.2% MPPT tracking efficiency consistently. The remote telemetry via Modbus integration with our monitoring system works flawlessly.',
        status: 'pending',
        helpful: 3,
        createdAt: '2026-09-10T09:15:00Z',
    },
    {
        id: 'rev-004',
        productId: 'prod-2',
        productName: 'Centrifuge Titan 10kVA Three-Phase Industrial Inverter',
        productSku: 'CFG-INV-10000-3P',
        customerName: 'Chidinma Eze',
        customerEmail: 'c.eze@manufacturing.com',
        rating: 2,
        title: 'Had issues with generator integration',
        body: 'The unit itself is well built but the generator auto-start feature took a lot of configuration. The manual could be clearer on the voltage threshold settings. Support team was helpful but response took 48 hours.',
        status: 'pending',
        helpful: 1,
        createdAt: '2026-09-18T16:40:00Z',
    },
    {
        id: 'rev-005',
        productId: 'prod-13',
        productName: 'Centrifuge FleetEdge IoT Telematics Gateway',
        productSku: 'CFG-IOT-FLEET-4G',
        customerName: 'Taiwo Adebisi',
        customerEmail: 'taiwo@logistics.ng',
        rating: 5,
        title: 'Game-changer for our fleet operations',
        body: 'We have deployed 40 units across our tanker fleet. Real-time tracking with 4G connectivity has completely eliminated the "where is the truck?" problem. The geofencing alerts and driver behavior monitoring have already reduced fuel wastage by a noticeable margin.',
        status: 'rejected',
        helpful: 0,
        createdAt: '2026-09-22T11:05:00Z',
    },
];
const statusConfig = {
    pending: { label: 'Pending Review', variant: 'warning', icon: Clock },
    approved: { label: 'Approved', variant: 'success', icon: CheckCircle },
    rejected: { label: 'Rejected', variant: 'error', icon: XCircle },
};
function StarRating({ rating }) {
    return (_jsx("div", { className: "flex items-center gap-0.5", children: [1, 2, 3, 4, 5].map((star) => (_jsx(Star, { className: `h-3.5 w-3.5 ${star <= rating
                ? 'fill-[#F59E0B] text-[#F59E0B]'
                : 'fill-[#E2E8F0] text-[#E2E8F0]'}` }, star))) }));
}
export const AdminReviewsPage = () => {
    const [reviews, setReviews] = useState(mockReviews);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [ratingFilter, setRatingFilter] = useState('all');
    const [expandedId, setExpandedId] = useState(null);
    const { addToast } = useUIStore();
    const filtered = reviews.filter((r) => {
        const matchesSearch = searchQuery === '' ||
            r.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            r.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            r.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'all' || r.status === statusFilter;
        const matchesRating = ratingFilter === 'all' || r.rating === parseInt(ratingFilter);
        return matchesSearch && matchesStatus && matchesRating;
    });
    const handleStatusChange = (reviewId, newStatus) => {
        setReviews((prev) => prev.map((r) => (r.id === reviewId ? { ...r, status: newStatus } : r)));
        addToast({
            title: `Review ${newStatus === 'approved' ? 'Approved' : 'Rejected'}`,
            description: `Review has been marked as ${newStatus}.`,
            type: newStatus === 'approved' ? 'success' : 'error',
        });
    };
    const counts = {
        all: reviews.length,
        pending: reviews.filter((r) => r.status === 'pending').length,
        approved: reviews.filter((r) => r.status === 'approved').length,
        rejected: reviews.filter((r) => r.status === 'rejected').length,
    };
    const avgRating = (reviews.filter((r) => r.status === 'approved').reduce((s, r) => s + r.rating, 0) /
        (reviews.filter((r) => r.status === 'approved').length || 1)).toFixed(1);
    return (_jsxs("div", { className: "space-y-6 text-left", children: [_jsx(SEO, { title: "Reviews Management | Centrifuge Admin" }), _jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-[#0B1F33] font-heading", children: "Customer Reviews" }), _jsx("p", { className: "text-sm text-[#64748B] mt-0.5", children: "Moderate and manage product reviews from store customers." })] }), _jsx("div", { className: "flex items-center gap-3", children: _jsxs("div", { className: "px-4 py-2 bg-white border border-[#E2E8F0] rounded-[8px] flex items-center gap-2", children: [_jsx(Star, { className: "h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" }), _jsx("span", { className: "text-sm font-bold text-[#0B1F33]", children: avgRating }), _jsx("span", { className: "text-xs text-[#64748B]", children: "avg. approved rating" })] }) })] }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
                    { label: 'Total Reviews', value: counts.all, color: '#0B1F33' },
                    { label: 'Pending', value: counts.pending, color: '#D97706' },
                    { label: 'Approved', value: counts.approved, color: '#16A34A' },
                    { label: 'Rejected', value: counts.rejected, color: '#DC2626' },
                ].map((stat) => (_jsxs("div", { className: "bg-white rounded-[12px] border border-[#E2E8F0] p-4", children: [_jsx("div", { className: "text-2xl font-bold font-heading", style: { color: stat.color }, children: stat.value }), _jsx("div", { className: "text-xs text-[#64748B] mt-0.5", children: stat.label })] }, stat.label))) }), _jsx("div", { className: "bg-white rounded-[12px] border border-[#E2E8F0] p-4", children: _jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-4", children: [_jsx("div", { className: "w-full sm:w-72", children: _jsx(Input, { placeholder: "Search reviews, products, customers...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), leftIcon: _jsx(Search, { className: "h-4 w-4" }) }) }), _jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [_jsx("span", { className: "text-xs text-[#64748B] font-medium", children: "Status:" }), ['all', 'pending', 'approved', 'rejected'].map((s) => (_jsx("button", { onClick: () => setStatusFilter(s), className: `text-xs px-3 py-1.5 rounded-[6px] font-medium capitalize transition-colors ${statusFilter === s
                                        ? 'bg-[#0B1F33] text-white font-semibold'
                                        : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]'}`, children: s === 'all' ? `All (${counts.all})` : `${s} (${counts[s]})` }, s)))] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-xs text-[#64748B] font-medium", children: "Rating:" }), _jsxs("select", { value: ratingFilter, onChange: (e) => setRatingFilter(e.target.value), className: "text-xs border border-[#E2E8F0] rounded-[6px] py-1.5 px-2 bg-white text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#16C7D9]/30", children: [_jsx("option", { value: "all", children: "All Ratings" }), _jsx("option", { value: "5", children: "\u2B50\u2B50\u2B50\u2B50\u2B50 5 stars" }), _jsx("option", { value: "4", children: "\u2B50\u2B50\u2B50\u2B50 4 stars" }), _jsx("option", { value: "3", children: "\u2B50\u2B50\u2B50 3 stars" }), _jsx("option", { value: "2", children: "\u2B50\u2B50 2 stars" }), _jsx("option", { value: "1", children: "\u2B50 1 star" })] })] })] }) }), filtered.length === 0 ? (_jsxs("div", { className: "bg-white rounded-[12px] border border-[#E2E8F0] py-16 text-center", children: [_jsx(MessageSquare, { className: "h-10 w-10 text-[#CBD5E1] mx-auto mb-3" }), _jsx("p", { className: "text-sm font-semibold text-[#0B1F33]", children: "No reviews found" }), _jsx("p", { className: "text-xs text-[#64748B] mt-1", children: "Try adjusting your filters or search query." })] })) : (_jsx("div", { className: "space-y-3", children: filtered.map((review) => {
                    const status = statusConfig[review.status];
                    const StatusIcon = status.icon;
                    const isExpanded = expandedId === review.id;
                    return (_jsxs("div", { className: "bg-white rounded-[12px] border border-[#E2E8F0] overflow-hidden hover:border-[#CBD5E1] transition-colors", children: [_jsxs("div", { className: "p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between", children: [_jsxs("div", { className: "flex items-start gap-3 flex-1 min-w-0", children: [_jsx("div", { className: "h-10 w-10 rounded-full bg-[#F1F5F9] flex items-center justify-center text-sm font-bold text-[#0B1F33] shrink-0", children: review.customerName.charAt(0) }), _jsxs("div", { className: "min-w-0 flex-1", children: [_jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [_jsx("span", { className: "text-sm font-bold text-[#111827]", children: review.customerName }), _jsx(StarRating, { rating: review.rating }), _jsx(Badge, { variant: status.variant, size: "sm", dot: true, children: status.label })] }), _jsxs("p", { className: "text-xs font-semibold text-[#0B1F33] mt-0.5 truncate", children: ["\"", review.title, "\""] }), _jsxs("p", { className: "text-[11px] text-[#64748B] mt-0.5 truncate", children: ["On: ", _jsx("span", { className: "font-medium text-[#475569]", children: review.productName }), ' · ', review.productSku, ' · ', new Date(review.createdAt).toLocaleDateString('en-GB', {
                                                                day: 'numeric',
                                                                month: 'short',
                                                                year: 'numeric',
                                                            })] })] })] }), _jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [_jsxs("button", { onClick: () => setExpandedId(isExpanded ? null : review.id), className: "text-xs font-medium text-[#64748B] hover:text-[#0B1F33] flex items-center gap-1 transition-colors", children: [_jsx(Eye, { className: "h-3.5 w-3.5" }), isExpanded ? 'Collapse' : 'Read'] }), review.status === 'pending' && (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "primary", size: "sm", onClick: () => handleStatusChange(review.id, 'approved'), leftIcon: _jsx(CheckCircle, { className: "h-3.5 w-3.5" }), children: "Approve" }), _jsx(Button, { variant: "secondary", size: "sm", onClick: () => handleStatusChange(review.id, 'rejected'), leftIcon: _jsx(XCircle, { className: "h-3.5 w-3.5" }), children: "Reject" })] })), review.status === 'approved' && (_jsx(Button, { variant: "secondary", size: "sm", onClick: () => handleStatusChange(review.id, 'rejected'), children: "Reject" })), review.status === 'rejected' && (_jsx(Button, { variant: "secondary", size: "sm", onClick: () => handleStatusChange(review.id, 'approved'), children: "Re-Approve" }))] })] }), isExpanded && (_jsxs("div", { className: "px-5 pb-5 border-t border-[#E2E8F0] pt-4 space-y-3", children: [_jsx("div", { className: "text-sm text-[#475569] leading-relaxed bg-[#F8FAFC] p-4 rounded-[8px] border border-[#E2E8F0]", children: review.body }), _jsxs("div", { className: "flex items-center justify-between text-xs text-[#64748B]", children: [_jsxs("span", { className: "flex items-center gap-1.5", children: [_jsx(ThumbsUp, { className: "h-3.5 w-3.5" }), _jsxs("span", { children: [review.helpful, " customers found this helpful"] })] }), _jsx("span", { className: "font-mono", children: review.customerEmail })] })] }))] }, review.id));
                }) }))] }));
};
export default AdminReviewsPage;
