import React, { useState } from 'react'
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts'
import { TrendingUp, ShoppingBag, Users, Package, DollarSign } from 'lucide-react'

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
]

const categoryData = [
  { name: 'Inverters', value: 42, color: '#a55d0c' },
  { name: 'UPS Systems', value: 28, color: '#f0b66d' },
  { name: 'Solar Controllers', value: 18, color: '#d9943b' },
  { name: 'IoT / Hardware', value: 12, color: '#868684' },
]

const topProducts = [
  { name: 'Titan 5kVA Inverter', units: 24, revenue: 22800000 },
  { name: 'CentroGuard 2kVA UPS', units: 18, revenue: 14400000 },
  { name: 'SolarTrack 100A MPPT', units: 15, revenue: 5700000 },
  { name: 'FleetTrack-X Gateway', units: 12, revenue: 6600000 },
  { name: 'PowerCell 200Ah Battery', units: 10, revenue: 3800000 },
]

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
]

const periods = ['7 Days', '30 Days', '90 Days', '12 Months'] as const
type Period = typeof periods[number]

const formatCurrency = (v: number) =>
  new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0, notation: 'compact' }).format(v)

export const AdminAnalyticsPage: React.FC = () => {
  const [period, setPeriod] = useState<Period>('12 Months')

  const summaryStats = [
    { label: 'Total Revenue', value: '₦35.7M', change: '+18%', icon: DollarSign, color: 'text-[#16A34A]' },
    { label: 'Total Orders', value: '254', change: '+12%', icon: ShoppingBag, color: 'text-[#f0b66d]' },
    { label: 'Avg. Order Value', value: '₦140.5K', change: '+5%', icon: TrendingUp, color: 'text-[#D97706]' },
    { label: 'Total Customers', value: '278', change: '+23%', icon: Users, color: 'text-[#faf9f6]' },
    { label: 'Active Products', value: '126', change: '+4', icon: Package, color: 'text-[#868684]' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading font-bold text-2xl text-[#faf9f6]">Analytics</h1>
          <p className="text-sm text-[#868684] mt-0.5">Store performance overview — demo data</p>
        </div>
        {/* Period selector */}
        <div className="flex items-center gap-1 bg-[#121212] border border-[#333333] rounded-lg p-1">
          {periods.map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                period === p
                  ? 'bg-[#000000] text-white'
                  : 'text-[#868684] hover:text-[#faf9f6]'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {summaryStats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="bg-[#121212] rounded-xl border border-[#333333] p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className={`p-1.5 rounded-lg bg-[#000000]`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
                <span className="text-xs text-[#868684] font-semibold leading-tight">{stat.label}</span>
              </div>
              <p className="font-heading font-bold text-xl text-[#faf9f6]">{stat.value}</p>
              <p className="text-xs text-[#16A34A] font-semibold mt-0.5">{stat.change} vs last period</p>
            </div>
          )
        })}
      </div>

      {/* Revenue chart */}
      <div className="bg-[#121212] rounded-xl border border-[#333333] p-6">
        <h2 className="font-heading font-bold text-base text-[#faf9f6] mb-6">Revenue Over Time</h2>
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={revenueData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f0b66d" stopOpacity={0.12} />
                <stop offset="95%" stopColor="#f0b66d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#333333" />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} tickFormatter={(v) => formatCurrency(v)} />
            <Tooltip
              formatter={(value) => [formatCurrency(Number(value ?? 0)), 'Revenue']}
              contentStyle={{ backgroundColor: '#121212', border: '1px solid #333333', borderRadius: '8px', fontSize: '12px', color: '#faf9f6' }}
            />
            <Area type="monotone" dataKey="revenue" stroke="#f0b66d" strokeWidth={2} fill="url(#revenueGrad)" dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Orders chart */}
        <div className="bg-[#121212] rounded-xl border border-[#333333] p-6">
          <h2 className="font-heading font-bold text-base text-[#faf9f6] mb-6">Orders Per Month</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={revenueData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333333" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#121212', border: '1px solid #333333', borderRadius: '8px', fontSize: '12px', color: '#faf9f6' }} />
              <Bar dataKey="orders" fill="#f0b66d" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Sales by category */}
        <div className="bg-[#121212] rounded-xl border border-[#333333] p-6">
          <h2 className="font-heading font-bold text-base text-[#faf9f6] mb-6">Sales by Category</h2>
          <div className="flex items-center gap-6">
            <ResponsiveContainer width="50%" height={200}>
              <PieChart>
                <Pie data={categoryData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={3} dataKey="value">
                  {categoryData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${Number(value ?? 0)}%`, 'Share']} contentStyle={{ backgroundColor: '#121212', border: '1px solid #333333', borderRadius: '8px', fontSize: '12px', color: '#faf9f6' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3 flex-1">
              {categoryData.map((item) => (
                <div key={item.name} className="flex items-center gap-2.5">
                  <div className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-[#faf9f6] truncate">{item.name}</p>
                  </div>
                  <span className="text-xs font-bold text-[#868684]">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top products */}
        <div className="bg-[#121212] rounded-xl border border-[#333333] overflow-hidden">
          <div className="px-5 py-4 border-b border-[#333333]">
            <h2 className="font-heading font-bold text-base text-[#faf9f6]">Top Products</h2>
          </div>
          <div className="divide-y divide-[#333333]">
            {topProducts.map((p, idx) => (
              <div key={p.name} className="flex items-center gap-4 px-5 py-3.5">
                <span className="font-mono text-xs font-bold text-[#868684] w-4">{idx + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-[#faf9f6] truncate">{p.name}</p>
                  <p className="text-[11px] text-[#868684]">{p.units} units sold</p>
                </div>
                <span className="text-xs font-bold text-[#faf9f6]">{formatCurrency(p.revenue)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Customer growth */}
        <div className="bg-[#121212] rounded-xl border border-[#333333] p-6">
          <h2 className="font-heading font-bold text-base text-[#faf9f6] mb-6">Customer Growth</h2>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={customerGrowth} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="custGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f0b66d" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#f0b66d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333333" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#121212', border: '1px solid #333333', borderRadius: '8px', fontSize: '12px', color: '#faf9f6' }} />
              <Area type="monotone" dataKey="customers" stroke="#f0b66d" strokeWidth={2} fill="url(#custGrad)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default AdminAnalyticsPage
