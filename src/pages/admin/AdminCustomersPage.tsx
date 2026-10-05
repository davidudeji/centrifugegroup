import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { mockCustomers } from '../../data/mockData'
import { Search, Eye, ChevronLeft, ChevronRight, Users } from 'lucide-react'

const PAGE_SIZE = 10

export const AdminCustomersPage: React.FC = () => {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all')
  const [page, setPage] = useState(1)

  const filtered = mockCustomers.filter((c) => {
    const matchSearch =
      !search ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'all' || c.status === statusFilter
    return matchSearch && matchStatus
  })

  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(amount)

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading font-bold text-2xl text-[#1A1A1A]">Customers</h1>
          <p className="text-sm text-[#64748B] mt-0.5">{total} customer{total !== 1 ? 's' : ''}</p>
        </div>
        <div className="flex items-center gap-2 p-2 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0]">
          <Users className="h-5 w-5 text-[#008DDA]" />
          <span className="text-sm font-bold text-[#1A1A1A]">{mockCustomers.length}</span>
          <span className="text-xs text-[#64748B]">total</span>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-[#FFFFFF] rounded-xl border border-[#E2E8F0] p-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#64748B]" />
          <input
            type="text"
            placeholder="Search customers by name or email…"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1) }}
            className="w-full h-9 pl-9 pr-4 bg-[#F5F7FA] border border-[#E2E8F0] rounded-lg text-sm text-[#1A1A1A] placeholder-[#64748B] focus:outline-none focus:border-[#008DDA] transition-all"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => { setStatusFilter(e.target.value as 'all' | 'active' | 'inactive'); setPage(1) }}
          className="h-9 px-3 bg-[#F5F7FA] border border-[#E2E8F0] rounded-lg text-sm text-[#1A1A1A] focus:outline-none focus:border-[#008DDA]"
        >
          <option value="all">All Customers</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-[#FFFFFF] rounded-xl border border-[#E2E8F0] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#F5F7FA] border-b border-[#E2E8F0]">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Customer</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Phone</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Orders</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Total Spent</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Joined</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Status</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-sm text-[#64748B]">
                    No customers found.
                  </td>
                </tr>
              ) : paginated.map((customer) => (
                <tr key={customer.id} className="hover:bg-[#F5F7FA] transition-colors">
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-[#008DDA] text-white flex items-center justify-center font-bold text-xs font-heading shrink-0">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-[#1A1A1A] text-xs">{customer.name}</p>
                        <p className="text-[11px] text-[#64748B]">{customer.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-xs text-[#64748B]">{customer.phone}</td>
                  <td className="px-4 py-3.5 text-right text-xs font-semibold text-[#1A1A1A]">{customer.ordersCount}</td>
                  <td className="px-4 py-3.5 text-right text-xs font-semibold text-[#1A1A1A]">{formatCurrency(customer.totalSpent)}</td>
                  <td className="px-4 py-3.5 text-xs text-[#64748B]">{formatDate(customer.createdAt)}</td>
                  <td className="px-4 py-3.5">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
                      customer.status === 'active'
                        ? 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20'
                        : 'bg-[#94A3B8]/10 text-[#64748B] border-[#94A3B8]/20'
                    }`}>
                      {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <Link
                      to={`/admin/customers/${customer.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#008DDA] hover:text-[#1A1A1A] transition-colors"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="px-4 py-3 border-t border-[#E2E8F0] flex items-center justify-between">
            <span className="text-xs text-[#64748B]">
              Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, total)} of {total}
            </span>
            <div className="flex items-center gap-2">
              <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
                className="p-1.5 rounded-lg border border-[#E2E8F0] text-[#64748B] hover:bg-[#F5F7FA] disabled:opacity-40">
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <span className="text-xs text-[#1A1A1A] font-semibold">{page} / {totalPages}</span>
              <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                className="p-1.5 rounded-lg border border-[#E2E8F0] text-[#64748B] hover:bg-[#F5F7FA] disabled:opacity-40">
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminCustomersPage
