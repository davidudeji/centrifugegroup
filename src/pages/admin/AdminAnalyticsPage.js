import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, ShoppingBag, Users, Package, DollarSign } from 'lucide-react';
// Demo analytics data — replace with real API data
const revenueData = [
    { month: 'Oct', revenue: 1200000, orders: 8 },
    { month: 'Nov', revenue: 1850000, orders: 12 },
    { month: 'Dec', revenue: 2400000, orders: 18 },
    { month: 'Jan', revenue: 1600000, orders: 11 },
    { month: 'Feb', revenue: 2100000, orders: 15 },
    { month: 'Mar', revenue: 3200000, orders: 22 },
    { month: 'Apr', revenue: 2750000, orders: 19 },
    { month: 'May', revenue: 3600000, orders: 25 },
    { month: 'Jun', revenue: 4100000, orders: 29 },
    { month: 'Jul', revenue: 3850000, orders: 27 },
    { month: 'Aug', revenue: 4400000, orders: 31 },
    { month: 'Sep', revenue: 5200000, orders: 37 },
];
const categoryData = [
    { name: 'Inverters', value: 42, color: '#0B1F33' },
    { name: 'UPS Systems', value: 28, color: '#16C7D9' },
    { name: 'Solar Controllers', value: 18, color: '#67E8F9' },
    { name: 'IoT / Hardware', value: 12, color: '#64748B' },
];
const topProducts = [
    { name: 'Titan 5kVA Inverter', units: 24, revenue: 22800000 },
    { name: 'CentroGuard 2kVA UPS', units: 18, revenue: 14400000 },
    { name: 'SolarTrack 100A MPPT', units: 15, revenue: 5700000 },
    { name: 'FleetTrack-X Gateway', units: 12, revenue: 6600000 },
    { name: 'PowerCell 200Ah Battery', units: 10, revenue: 3800000 },
];
const customerGrowth = [
    { month: 'Oct', customers: 42 },
    { month: 'Nov', customers: 58 },
    { month: 'Dec', customers: 71 },
    { month: 'Jan', customers: 85 },
    { month: 'Feb', customers: 102 },
    { month: 'Mar', customers: 124 },
    { month: 'Apr', customers: 139 },
    { month: 'May', customers: 163 },
    { month: 'Jun', customers: 188 },
    { month: 'Jul', customers: 214 },
    { month: 'Aug', customers: 240 },
    { month: 'Sep', customers: 278 },
];
const periods = ['7 Days', '30 Days', '90 Days', '12 Months'];
const formatCurrency = (v) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0, notation: 'compact' }).format(v);
export const AdminAnalyticsPage = () => {
    const [period, setPeriod] = useState('12 Months');
    const summaryStats = [
        { label: 'Total Revenue', value: '₦35.7M', change: '+18%', icon: DollarSign, color: 'text-[#16A34A]' },
        { label: 'Total Orders', value: '254', change: '+12%', icon: ShoppingBag, color: 'text-[#16C7D9]' },
        { label: 'Avg. Order Value', value: '₦140.5K', change: '+5%', icon: TrendingUp, color: 'text-[#D97706]' },
        { label: 'Total Customers', value: '278', change: '+23%', icon: Users, color: 'text-[#0B1F33]' },
        { label: 'Active Products', value: '126', change: '+4', icon: Package, color: 'text-[#64748B]' },
    ];
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "font-heading font-bold text-2xl text-[#0B1F33]", children: "Analytics" }), _jsx("p", { className: "text-sm text-[#64748B] mt-0.5", children: "Store performance overview \u2014 demo data" })] }), _jsx("div", { className: "flex items-center gap-1 bg-white border border-[#E2E8F0] rounded-lg p-1", children: periods.map((p) => (_jsx("button", { onClick: () => setPeriod(p), className: `px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${period === p
                                ? 'bg-[#0B1F33] text-white'
                                : 'text-[#64748B] hover:text-[#172333]'}`, children: p }, p))) })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", children: summaryStats.map((stat) => {
                    const Icon = stat.icon;
                    return (_jsxs("div", { className: "bg-white rounded-xl border border-[#E2E8F0] p-4", children: [_jsxs("div", { className: "flex items-center gap-2 mb-3", children: [_jsx("div", { className: `p-1.5 rounded-lg bg-[#F7F9FA]`, children: _jsx(Icon, { className: `h-4 w-4 ${stat.color}` }) }), _jsx("span", { className: "text-xs text-[#94A3B8] font-semibold leading-tight", children: stat.label })] }), _jsx("p", { className: "font-heading font-bold text-xl text-[#0B1F33]", children: stat.value }), _jsxs("p", { className: "text-xs text-[#16A34A] font-semibold mt-0.5", children: [stat.change, " vs last period"] })] }, stat.label));
                }) }), _jsxs("div", { className: "bg-white rounded-xl border border-[#E2E8F0] p-6", children: [_jsx("h2", { className: "font-heading font-bold text-base text-[#0B1F33] mb-6", children: "Revenue Over Time" }), _jsx(ResponsiveContainer, { width: "100%", height: 260, children: _jsxs(AreaChart, { data: revenueData, margin: { top: 0, right: 0, left: 0, bottom: 0 }, children: [_jsx("defs", { children: _jsxs("linearGradient", { id: "revenueGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "5%", stopColor: "#0B1F33", stopOpacity: 0.12 }), _jsx("stop", { offset: "95%", stopColor: "#0B1F33", stopOpacity: 0 })] }) }), _jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#F1F5F9" }), _jsx(XAxis, { dataKey: "month", tick: { fontSize: 11, fill: '#94A3B8' }, axisLine: false, tickLine: false }), _jsx(YAxis, { tick: { fontSize: 11, fill: '#94A3B8' }, axisLine: false, tickLine: false, tickFormatter: (v) => formatCurrency(v) }), _jsx(Tooltip, { formatter: (value) => [formatCurrency(Number(value ?? 0)), 'Revenue'], contentStyle: { border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '12px' } }), _jsx(Area, { type: "monotone", dataKey: "revenue", stroke: "#0B1F33", strokeWidth: 2, fill: "url(#revenueGrad)", dot: false })] }) })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs("div", { className: "bg-white rounded-xl border border-[#E2E8F0] p-6", children: [_jsx("h2", { className: "font-heading font-bold text-base text-[#0B1F33] mb-6", children: "Orders Per Month" }), _jsx(ResponsiveContainer, { width: "100%", height: 220, children: _jsxs(BarChart, { data: revenueData, margin: { top: 0, right: 0, left: 0, bottom: 0 }, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#F1F5F9", vertical: false }), _jsx(XAxis, { dataKey: "month", tick: { fontSize: 11, fill: '#94A3B8' }, axisLine: false, tickLine: false }), _jsx(YAxis, { tick: { fontSize: 11, fill: '#94A3B8' }, axisLine: false, tickLine: false }), _jsx(Tooltip, { contentStyle: { border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '12px' } }), _jsx(Bar, { dataKey: "orders", fill: "#16C7D9", radius: [4, 4, 0, 0] })] }) })] }), _jsxs("div", { className: "bg-white rounded-xl border border-[#E2E8F0] p-6", children: [_jsx("h2", { className: "font-heading font-bold text-base text-[#0B1F33] mb-6", children: "Sales by Category" }), _jsxs("div", { className: "flex items-center gap-6", children: [_jsx(ResponsiveContainer, { width: "50%", height: 200, children: _jsxs(PieChart, { children: [_jsx(Pie, { data: categoryData, cx: "50%", cy: "50%", innerRadius: 55, outerRadius: 80, paddingAngle: 3, dataKey: "value", children: categoryData.map((entry, index) => (_jsx(Cell, { fill: entry.color }, index))) }), _jsx(Tooltip, { formatter: (value) => [`${Number(value ?? 0)}%`, 'Share'], contentStyle: { border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '12px' } })] }) }), _jsx("div", { className: "space-y-3 flex-1", children: categoryData.map((item) => (_jsxs("div", { className: "flex items-center gap-2.5", children: [_jsx("div", { className: "h-2.5 w-2.5 rounded-full shrink-0", style: { backgroundColor: item.color } }), _jsx("div", { className: "flex-1 min-w-0", children: _jsx("p", { className: "text-xs font-semibold text-[#172333] truncate", children: item.name }) }), _jsxs("span", { className: "text-xs font-bold text-[#64748B]", children: [item.value, "%"] })] }, item.name))) })] })] })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs("div", { className: "bg-white rounded-xl border border-[#E2E8F0] overflow-hidden", children: [_jsx("div", { className: "px-5 py-4 border-b border-[#E2E8F0]", children: _jsx("h2", { className: "font-heading font-bold text-base text-[#0B1F33]", children: "Top Products" }) }), _jsx("div", { className: "divide-y divide-[#F1F5F9]", children: topProducts.map((p, idx) => (_jsxs("div", { className: "flex items-center gap-4 px-5 py-3.5", children: [_jsx("span", { className: "font-mono text-xs font-bold text-[#94A3B8] w-4", children: idx + 1 }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("p", { className: "text-xs font-semibold text-[#172333] truncate", children: p.name }), _jsxs("p", { className: "text-[11px] text-[#94A3B8]", children: [p.units, " units sold"] })] }), _jsx("span", { className: "text-xs font-bold text-[#0B1F33]", children: formatCurrency(p.revenue) })] }, p.name))) })] }), _jsxs("div", { className: "bg-white rounded-xl border border-[#E2E8F0] p-6", children: [_jsx("h2", { className: "font-heading font-bold text-base text-[#0B1F33] mb-6", children: "Customer Growth" }), _jsx(ResponsiveContainer, { width: "100%", height: 220, children: _jsxs(AreaChart, { data: customerGrowth, margin: { top: 0, right: 0, left: 0, bottom: 0 }, children: [_jsx("defs", { children: _jsxs("linearGradient", { id: "custGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "5%", stopColor: "#16C7D9", stopOpacity: 0.15 }), _jsx("stop", { offset: "95%", stopColor: "#16C7D9", stopOpacity: 0 })] }) }), _jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#F1F5F9" }), _jsx(XAxis, { dataKey: "month", tick: { fontSize: 11, fill: '#94A3B8' }, axisLine: false, tickLine: false }), _jsx(YAxis, { tick: { fontSize: 11, fill: '#94A3B8' }, axisLine: false, tickLine: false }), _jsx(Tooltip, { contentStyle: { border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '12px' } }), _jsx(Area, { type: "monotone", dataKey: "customers", stroke: "#16C7D9", strokeWidth: 2, fill: "url(#custGrad)", dot: false })] }) })] })] })] }));
};
export default AdminAnalyticsPage;
