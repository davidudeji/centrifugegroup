import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { StatCard } from '../../components/ui/StatCard'
import { BankingProcessStudio } from '../../components/studio/BankingProcessStudio'
import { mockOrders, mockProducts } from '../../data/mockData'
import {
  DollarSign,
  ShoppingBag,
  Users,
  Package,
  AlertTriangle,
  Clock,
  ArrowRight,
  TrendingUp,
  Download,
  Workflow,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts'

export const AdminDashboardPage: React.FC = () => {
  const [activeDashboardView, setActiveDashboardView] = useState<
    "project" | "store"
  >("project");
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d')

  const revenueChartData = [
    { date: 'Sep 01', revenue: 640000, orders: 12 },
    { date: 'Sep 05', revenue: 980000, orders: 18 },
    { date: 'Sep 10', revenue: 1420000, orders: 24 },
    { date: 'Sep 15', revenue: 2100000, orders: 36 },
    { date: 'Sep 20', revenue: 1850000, orders: 28 },
    { date: 'Sep 25', revenue: 2650000, orders: 42 },
    { date: 'Sep 29', revenue: 3100000, orders: 50 },
  ]

  const categorySalesData = [
    { category: 'Inverters', amount: 11200000 },
    { category: 'UPS Systems', amount: 8400000 },
    { category: 'Solar Controllers', amount: 3200000 },
    { category: 'IoT Telemetry', amount: 1700000 },
  ]

  return (
    <div className="space-y-8 text-left">
      <SEO title="Enterprise Architecture & Management Portal | Centrifuge Group" />

      {/* ─── TEMPLATE B: TECHNICAL CAPABILITIES & VISUAL STUDIO DASHBOARD ─── */}
      {activeDashboardView === "project" ? (
        <BankingProcessStudio />
      ) : (
        /* ─── Store & Hardware Operations View ─── */
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
            <div>
              <h1 className="text-2xl font-bold text-[#0F2C59]">
                Hardware & Store Operations
              </h1>
              <p className="text-xs text-[#64748B] mt-0.5">
                Consolidated overview of hardware inventory, dispatch orders,
                and commercial transactions.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex rounded-[4px] border border-[#E2E8F0] bg-[#FFFFFF] p-0.5 text-xs">
                {(["7d", "30d", "90d"] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => setTimeRange(r)}
                    className={`px-2.5 py-1 rounded-[3px] font-medium transition-colors ${
                      timeRange === r
                        ? "bg-[#0F2C59] text-white font-semibold"
                        : "text-[#64748B] hover:text-[#0F2C59]"
                    }`}
                  >
                    {r.toUpperCase()}
                  </button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                leftIcon={<Download className="h-3.5 w-3.5" />}
              >
                Export CSV
              </Button>
            </div>
          </div>

          {/* KPI Stat Cards Grid (8px radius, white fill, 1px border profile per Spec §3.3) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            <StatCard
              title="Total Revenue"
              value="₦24.5M"
              change="12.5%"
              isPositive={true}
              description="vs last period"
              icon={<DollarSign className="h-4 w-4 text-[#008DDA]" />}
            />
            <StatCard
              title="Total Orders"
              value="1,284"
              change="8.2%"
              isPositive={true}
              description="vs last month"
              icon={<ShoppingBag className="h-4 w-4 text-[#008DDA]" />}
            />
            <StatCard
              title="Customers"
              value="842"
              change="14.1%"
              isPositive={true}
              description="enterprise accounts"
              icon={<Users className="h-4 w-4 text-[#10B981]" />}
            />
            <StatCard
              title="Live Products"
              value="126"
              badgeText="Active"
              badgeVariant="neutral"
              icon={<Package className="h-4 w-4 text-[#0F2C59]" />}
            />
            <StatCard
              title="Low Stock"
              value="12"
              badgeText="Action"
              badgeVariant="warning"
              icon={<AlertTriangle className="h-4 w-4 text-[#D97706]" />}
            />
            <StatCard
              title="Pending Orders"
              value="28"
              badgeText="Fulfillment"
              badgeVariant="neutral"
              icon={<Clock className="h-4 w-4 text-[#008DDA]" />}
            />
          </div>

          {/* Charts Section: Revenue Overview & Category Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Revenue Area Chart (Span 8) */}
            <div className="lg:col-span-8 bg-[#FFFFFF] p-6 rounded-[8px] border border-[#E2E8F0] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#0F2C59]">
                    Revenue & Turnover Overview
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Daily consolidated transaction volume
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-[#10B981]">
                  <TrendingUp className="h-4 w-4" />
                  <span>+18.4% annualized</span>
                </div>
              </div>

              <div className="h-72 w-full pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={revenueChartData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#008DDA"
                          stopOpacity={0.25}
                        />
                        <stop
                          offset="95%"
                          stopColor="#008DDA"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#E2E8F0"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="date"
                      stroke="#94A3B8"
                      fontSize={11}
                      tickLine={false}
                    />
                    <YAxis
                      stroke="#94A3B8"
                      fontSize={11}
                      tickLine={false}
                      tickFormatter={(val) => `₦${(val / 1000000).toFixed(1)}M`}
                    />
                    <Tooltip
                      formatter={(val: any) => [
                        `₦${Number(val).toLocaleString()}`,
                        "Revenue",
                      ]}
                      contentStyle={{
                        backgroundColor: "#FFFFFF",
                        borderColor: "#E2E8F0",
                        borderRadius: "4px",
                        color: "#1A1A1A",
                        fontSize: "12px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#008DDA"
                      strokeWidth={2.5}
                      fillOpacity={1}
                      fill="url(#colorRev)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Category Breakdown (Span 4) */}
            <div className="lg:col-span-4 bg-[#FFFFFF] p-6 rounded-[8px] border border-[#E2E8F0] shadow-xs space-y-4">
              <div>
                <h3 className="text-sm font-bold text-[#0F2C59]">
                  Sales by Category
                </h3>
                <p className="text-xs text-[#64748B]">
                  Revenue distribution across lines
                </p>
              </div>

              <div className="h-72 w-full pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={categorySalesData}
                    margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#E2E8F0"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="category"
                      stroke="#94A3B8"
                      fontSize={10}
                      tickLine={false}
                    />
                    <YAxis
                      stroke="#94A3B8"
                      fontSize={10}
                      tickLine={false}
                      tickFormatter={(val) => `₦${(val / 1000000).toFixed(0)}M`}
                    />
                    <Tooltip
                      formatter={(val: any) => [
                        `₦${Number(val).toLocaleString()}`,
                        "Sales",
                      ]}
                      contentStyle={{
                        backgroundColor: "#FFFFFF",
                        borderColor: "#E2E8F0",
                        borderRadius: "4px",
                        color: "#1A1A1A",
                        fontSize: "11px",
                      }}
                    />
                    <Bar
                      dataKey="amount"
                      fill="#0F2C59"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Bottom Grids: Recent Orders & Inventory Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Recent Orders (Span 8) */}
            <div className="lg:col-span-8 bg-[#FFFFFF] rounded-[8px] border border-[#E2E8F0] shadow-xs overflow-hidden">
              <div className="p-5 border-b border-[#E2E8F0] flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#0F2C59]">
                  Recent Customer Orders
                </h3>
                <Link
                  to="/admin/orders"
                  className="text-xs font-semibold text-[#008DDA] hover:underline"
                >
                  View All Orders →
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs divide-y divide-[#E2E8F0]">
                  <thead className="bg-[#F8FAFC] text-[#64748B] font-bold">
                    <tr>
                      <th className="px-5 py-3">Order Ref</th>
                      <th className="px-5 py-3">Customer</th>
                      <th className="px-5 py-3">Amount</th>
                      <th className="px-5 py-3">Status</th>
                      <th className="px-5 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0]">
                    {mockOrders.map((ord) => (
                      <tr key={ord.id} className="hover:bg-[#F8FAFC]">
                        <td className="px-5 py-3.5 font-mono font-bold text-[#0F2C59]">
                          {ord.orderNumber}
                        </td>
                        <td className="px-5 py-3.5 font-medium text-[#1A1A1A]">
                          {ord.customerName}
                        </td>
                        <td className="px-5 py-3.5 font-bold text-[#1A1A1A]">
                          ₦{ord.total.toLocaleString()}
                        </td>
                        <td className="px-5 py-3.5">
                          <Badge
                            variant={
                              ord.orderStatus === "delivered"
                                ? "success"
                                : ord.orderStatus === "shipped"
                                  ? "info"
                                  : "warning"
                            }
                            size="sm"
                            dot
                          >
                            {ord.orderStatus}
                          </Badge>
                        </td>
                        <td className="px-5 py-3.5 text-right">
                          <Link
                            to="/admin/orders"
                            className="text-xs font-semibold text-[#008DDA] hover:underline"
                          >
                            Manage
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Top Products & Low Stock Alerts (Span 4) */}
            <div className="lg:col-span-4 bg-[#FFFFFF] p-5 rounded-[8px] border border-[#E2E8F0] shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                <h3 className="text-sm font-bold text-[#0F2C59]">
                  Low Stock Warnings
                </h3>
                <Link
                  to="/admin/inventory"
                  className="text-xs text-[#EF4444] font-semibold hover:underline"
                >
                  Adjust Stock →
                </Link>
              </div>

              <div className="space-y-3">
                {mockProducts.slice(0, 4).map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center justify-between p-2.5 rounded-[4px] bg-[#F8FAFC] border border-[#E2E8F0]"
                  >
                    <div>
                      <span className="text-xs font-semibold text-[#1A1A1A] line-clamp-1 block">
                        {p.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#64748B]">
                        SKU: {p.sku}
                      </span>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          p.stockQuantity <= p.lowStockThreshold
                            ? "warning"
                            : "neutral"
                        }
                        size="sm"
                      >
                        {p.stockQuantity} left
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default AdminDashboardPage
