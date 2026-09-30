import React, { useState } from 'react'
import { mockDiscounts } from '../../data/mockData'
import type { Discount } from '../../types'
import { Plus, Edit2, Trash2, Tag, CheckCircle2, XCircle, Search } from 'lucide-react'

const emptyDiscount: Omit<Discount, 'id' | 'usageCount'> = {
  code: '',
  type: 'percentage',
  value: 0,
  minSpend: undefined,
  maxDiscount: undefined,
  usageLimit: undefined,
  startDate: new Date().toISOString().split('T')[0],
  endDate: undefined,
  isActive: true,
}

export const AdminDiscountsPage: React.FC = () => {
  const [discounts, setDiscounts] = useState<Discount[]>(mockDiscounts)
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editId, setEditId] = useState<string | null>(null)
  const [form, setForm] = useState(emptyDiscount)

  const filtered = discounts.filter((d) =>
    !search || d.code.toLowerCase().includes(search.toLowerCase())
  )

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(amount)

  const handleSave = () => {
    if (!form.code.trim()) return
    if (editId) {
      setDiscounts((prev) =>
        prev.map((d) => d.id === editId ? { ...d, ...form } : d)
      )
    } else {
      const newDiscount: Discount = {
        ...form,
        id: `disc-${Date.now()}`,
        usageCount: 0,
      }
      setDiscounts((prev) => [newDiscount, ...prev])
    }
    setShowForm(false)
    setEditId(null)
    setForm(emptyDiscount)
  }

  const handleEdit = (d: Discount) => {
    setEditId(d.id)
    setForm({
      code: d.code,
      type: d.type,
      value: d.value,
      minSpend: d.minSpend,
      maxDiscount: d.maxDiscount,
      usageLimit: d.usageLimit,
      startDate: d.startDate,
      endDate: d.endDate,
      isActive: d.isActive,
    })
    setShowForm(true)
  }

  const handleDelete = (id: string) => {
    setDiscounts((prev) => prev.filter((d) => d.id !== id))
  }

  const toggleActive = (id: string) => {
    setDiscounts((prev) =>
      prev.map((d) => d.id === id ? { ...d, isActive: !d.isActive } : d)
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading font-bold text-2xl text-[#faf9f6]">Discounts</h1>
          <p className="text-sm text-[#868684] mt-0.5">{discounts.length} discount code{discounts.length !== 1 ? 's' : ''}</p>
        </div>
        <button
          onClick={() => { setShowForm(true); setEditId(null); setForm(emptyDiscount) }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#000000] text-white rounded-lg text-xs font-bold hover:bg-[#000000] transition-colors"
        >
          <Plus className="h-4 w-4" />
          Create Discount
        </button>
      </div>

      {/* Create / Edit Form */}
      {showForm && (
        <div className="bg-[#121212] rounded-xl border border-[#333333] p-6 space-y-5">
          <h2 className="font-heading font-bold text-base text-[#faf9f6]">
            {editId ? 'Edit Discount Code' : 'Create Discount Code'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#faf9f6] mb-1.5">Code *</label>
              <input
                type="text"
                value={form.code}
                onChange={(e) => setForm({ ...form, code: e.target.value.toUpperCase() })}
                placeholder="e.g. SAVE20"
                className="w-full h-9 px-3 bg-[#000000] border border-[#333333] rounded-lg text-sm text-[#faf9f6] font-mono focus:outline-none focus:border-[#f0b66d]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#faf9f6] mb-1.5">Type</label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value as 'percentage' | 'fixed' })}
                className="w-full h-9 px-3 bg-[#000000] border border-[#333333] rounded-lg text-sm text-[#faf9f6] focus:outline-none focus:border-[#f0b66d]"
              >
                <option value="percentage">Percentage (%)</option>
                <option value="fixed">Fixed Amount (₦)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#faf9f6] mb-1.5">
                Value ({form.type === 'percentage' ? '%' : '₦'}) *
              </label>
              <input
                type="number"
                min={0}
                value={form.value}
                onChange={(e) => setForm({ ...form, value: Number(e.target.value) })}
                className="w-full h-9 px-3 bg-[#000000] border border-[#333333] rounded-lg text-sm text-[#faf9f6] focus:outline-none focus:border-[#f0b66d]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#faf9f6] mb-1.5">Minimum Order (₦)</label>
              <input
                type="number"
                min={0}
                value={form.minSpend ?? ''}
                onChange={(e) => setForm({ ...form, minSpend: e.target.value ? Number(e.target.value) : undefined })}
                className="w-full h-9 px-3 bg-[#000000] border border-[#333333] rounded-lg text-sm text-[#faf9f6] focus:outline-none focus:border-[#f0b66d]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#faf9f6] mb-1.5">Usage Limit</label>
              <input
                type="number"
                min={1}
                value={form.usageLimit ?? ''}
                onChange={(e) => setForm({ ...form, usageLimit: e.target.value ? Number(e.target.value) : undefined })}
                className="w-full h-9 px-3 bg-[#000000] border border-[#333333] rounded-lg text-sm text-[#faf9f6] focus:outline-none focus:border-[#f0b66d]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#faf9f6] mb-1.5">Start Date</label>
              <input
                type="date"
                value={form.startDate}
                onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                className="w-full h-9 px-3 bg-[#000000] border border-[#333333] rounded-lg text-sm text-[#faf9f6] focus:outline-none focus:border-[#f0b66d]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#faf9f6] mb-1.5">End Date (optional)</label>
              <input
                type="date"
                value={form.endDate ?? ''}
                onChange={(e) => setForm({ ...form, endDate: e.target.value || undefined })}
                className="w-full h-9 px-3 bg-[#000000] border border-[#333333] rounded-lg text-sm text-[#faf9f6] focus:outline-none focus:border-[#f0b66d]"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.isActive}
                onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
                className="h-4 w-4 rounded border-[#333333] text-[#f0b66d]"
              />
              <span className="text-xs font-semibold text-[#faf9f6]">Active</span>
            </label>
          </div>
          <div className="flex gap-3 pt-2 border-t border-[#333333]">
            <button onClick={handleSave} className="px-5 py-2 bg-[#000000] text-white rounded-lg text-xs font-bold hover:bg-[#000000] transition-colors">
              {editId ? 'Save Changes' : 'Create Discount'}
            </button>
            <button onClick={() => { setShowForm(false); setEditId(null) }} className="px-5 py-2 border border-[#333333] rounded-lg text-xs font-semibold text-[#868684] hover:bg-[#000000] transition-colors">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="bg-[#121212] rounded-xl border border-[#333333] p-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#868684]" />
          <input
            type="text"
            placeholder="Search discount codes…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-9 pl-9 pr-4 bg-[#000000] border border-[#333333] rounded-lg text-sm text-[#faf9f6] placeholder-[#868684] focus:outline-none focus:border-[#f0b66d]"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#121212] rounded-xl border border-[#333333] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#000000] border-b border-[#333333]">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#868684] uppercase tracking-wide">Code</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#868684] uppercase tracking-wide">Type</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#868684] uppercase tracking-wide">Value</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#868684] uppercase tracking-wide">Min Spend</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-[#868684] uppercase tracking-wide">Usage</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#868684] uppercase tracking-wide">Expires</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#868684] uppercase tracking-wide">Status</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-[#868684] uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#333333]">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-12 text-center text-sm text-[#868684]">
                    No discount codes found.
                  </td>
                </tr>
              ) : filtered.map((d) => (
                <tr key={d.id} className="hover:bg-[#000000] transition-colors">
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2">
                      <Tag className="h-3.5 w-3.5 text-[#f0b66d]" />
                      <span className="font-mono font-bold text-xs text-[#faf9f6]">{d.code}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-xs text-[#868684] capitalize">{d.type}</td>
                  <td className="px-4 py-3.5 text-xs font-semibold text-[#faf9f6]">
                    {d.type === 'percentage' ? `${d.value}%` : formatCurrency(d.value)}
                  </td>
                  <td className="px-4 py-3.5 text-xs text-[#868684]">
                    {d.minSpend ? formatCurrency(d.minSpend) : '—'}
                  </td>
                  <td className="px-4 py-3.5 text-right text-xs text-[#868684]">
                    {d.usageCount}{d.usageLimit ? ` / ${d.usageLimit}` : ''}
                  </td>
                  <td className="px-4 py-3.5 text-xs text-[#868684]">
                    {d.endDate ? new Date(d.endDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'}
                  </td>
                  <td className="px-4 py-3.5">
                    <button onClick={() => toggleActive(d.id)} className="flex items-center gap-1.5">
                      {d.isActive ? (
                        <><CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A]" /><span className="text-xs text-[#16A34A] font-semibold">Active</span></>
                      ) : (
                        <><XCircle className="h-3.5 w-3.5 text-[#868684]" /><span className="text-xs text-[#868684] font-semibold">Inactive</span></>
                      )}
                    </button>
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => handleEdit(d)} className="p-1.5 rounded hover:bg-[#1e1e1d] text-[#868684] hover:text-[#faf9f6]">
                        <Edit2 className="h-3.5 w-3.5" />
                      </button>
                      <button onClick={() => handleDelete(d.id)} className="p-1.5 rounded hover:bg-[#DC2626]/10 text-[#868684] hover:text-[#DC2626]">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminDiscountsPage
