import React, { useState } from 'react'
import { Shield, Plus, Edit2, Trash2, CheckCircle2, XCircle, ChevronDown, ChevronRight } from 'lucide-react'

interface AdminUser {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
  lastLogin: string
  permissions: string[]
}

const ROLES = ['Super Admin', 'Store Manager', 'Inventory Manager', 'Order Manager', 'Content Manager']

const PERMISSION_GROUPS = [
  {
    group: 'Products',
    permissions: ['products.read', 'products.create', 'products.update', 'products.delete'],
  },
  {
    group: 'Orders',
    permissions: ['orders.read', 'orders.update'],
  },
  {
    group: 'Inventory',
    permissions: ['inventory.read', 'inventory.update'],
  },
  {
    group: 'Customers',
    permissions: ['customers.read'],
  },
  {
    group: 'Analytics',
    permissions: ['analytics.read'],
  },
  {
    group: 'Settings',
    permissions: ['settings.update'],
  },
  {
    group: 'Projects',
    permissions: ['projects.manage'],
  },
]

const ROLE_PERMISSIONS: Record<string, string[]> = {
  'Super Admin': PERMISSION_GROUPS.flatMap((g) => g.permissions),
  'Store Manager': ['products.read', 'products.create', 'products.update', 'orders.read', 'orders.update', 'customers.read', 'analytics.read'],
  'Inventory Manager': ['products.read', 'inventory.read', 'inventory.update'],
  'Order Manager': ['orders.read', 'orders.update', 'customers.read'],
  'Content Manager': ['products.read', 'projects.manage', 'analytics.read'],
}

const demoUsers: AdminUser[] = [
  {
    id: 'u-1', name: 'Kelechi Nwosu', email: 'admin@centrifugegroup.co',
    role: 'Super Admin', status: 'active', lastLogin: '2024-03-29T09:30:00Z',
    permissions: ROLE_PERMISSIONS['Super Admin']
  },
  {
    id: 'u-2', name: 'Chisom Eze', email: 'chisom@centrifugegroup.co',
    role: 'Store Manager', status: 'active', lastLogin: '2024-03-28T14:00:00Z',
    permissions: ROLE_PERMISSIONS['Store Manager']
  },
  {
    id: 'u-3', name: 'Emeka Obi', email: 'emeka@centrifugegroup.co',
    role: 'Inventory Manager', status: 'active', lastLogin: '2024-03-27T11:00:00Z',
    permissions: ROLE_PERMISSIONS['Inventory Manager']
  },
]

export const AdminUsersPage: React.FC = () => {
  const [users, setUsers] = useState<AdminUser[]>(demoUsers)
  const [showForm, setShowForm] = useState(false)
  const [editId, setEditId] = useState<string | null>(null)
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null)
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null)

  const [form, setForm] = useState({
    name: '', email: '', role: 'Store Manager', status: 'active' as AdminUser['status'],
  })

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })

  const handleEdit = (u: AdminUser) => {
    setEditId(u.id)
    setForm({ name: u.name, email: u.email, role: u.role, status: u.status })
    setShowForm(true)
  }

  const handleSave = () => {
    if (!form.name || !form.email) return
    const perms = ROLE_PERMISSIONS[form.role] ?? []
    if (editId) {
      setUsers((prev) => prev.map((u) => u.id === editId ? { ...u, ...form, permissions: perms } : u))
    } else {
      setUsers((prev) => [
        ...prev,
        { id: `u-${Date.now()}`, ...form, permissions: perms, lastLogin: new Date().toISOString() }
      ])
    }
    setShowForm(false)
    setEditId(null)
    setForm({ name: '', email: '', role: 'Store Manager', status: 'active' })
  }

  const handleDelete = (id: string) => {
    setUsers((prev) => prev.filter((u) => u.id !== id))
    if (selectedUser?.id === id) setSelectedUser(null)
  }

  const toggleStatus = (id: string) => {
    setUsers((prev) =>
      prev.map((u) => u.id === id ? { ...u, status: u.status === 'active' ? 'inactive' : 'active' } : u)
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading font-bold text-2xl text-[#0B1F33]">Users & Roles</h1>
          <p className="text-sm text-[#64748B] mt-0.5">{users.length} admin users</p>
        </div>
        <button
          onClick={() => { setShowForm(true); setEditId(null); setForm({ name: '', email: '', role: 'Store Manager', status: 'active' }) }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B1F33] text-white rounded-lg text-xs font-bold hover:bg-[#071521] transition-colors"
        >
          <Plus className="h-4 w-4" />
          Invite User
        </button>
      </div>

      {/* Important note */}
      <div className="flex items-start gap-3 p-4 bg-[#D97706]/5 border border-[#D97706]/20 rounded-xl">
        <Shield className="h-4 w-4 text-[#D97706] shrink-0 mt-0.5" />
        <p className="text-xs text-[#64748B]">
          <span className="font-bold text-[#172333]">Security note:</span> Frontend permissions are UI-only controls. 
          Real authorization must be enforced at the API/backend level. Never rely solely on frontend permission checks.
        </p>
      </div>

      {/* Invite/Edit Form */}
      {showForm && (
        <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 space-y-5">
          <h2 className="font-heading font-bold text-base text-[#0B1F33]">
            {editId ? 'Edit User' : 'Invite New User'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#172333] mb-1.5">Full Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#172333] mb-1.5">Email Address *</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#172333] mb-1.5">Role</label>
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]"
              >
                {ROLES.map((r) => <option key={r}>{r}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#172333] mb-1.5">Status</label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value as AdminUser['status'] })}
                className="w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* Preview permissions */}
          <div className="p-4 bg-[#F7F9FA] rounded-xl border border-[#E2E8F0]">
            <p className="text-xs font-semibold text-[#172333] mb-2">Permissions for {form.role}:</p>
            <div className="flex flex-wrap gap-2">
              {(ROLE_PERMISSIONS[form.role] ?? []).map((p) => (
                <span key={p} className="px-2 py-1 bg-white border border-[#E2E8F0] rounded text-[10px] font-mono text-[#64748B]">{p}</span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2 border-t border-[#E2E8F0]">
            <button onClick={handleSave} className="px-5 py-2 bg-[#0B1F33] text-white rounded-lg text-xs font-bold hover:bg-[#071521]">
              {editId ? 'Save Changes' : 'Send Invitation'}
            </button>
            <button onClick={() => { setShowForm(false); setEditId(null) }} className="px-5 py-2 border border-[#E2E8F0] rounded-lg text-xs font-semibold text-[#64748B] hover:bg-[#F7F9FA]">
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Users table */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[#F7F9FA] border-b border-[#E2E8F0]">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">User</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Role</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Last Login</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Status</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9]">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className={`hover:bg-[#F7F9FA] transition-colors cursor-pointer ${selectedUser?.id === user.id ? 'bg-[#F7F9FA]' : ''}`}
                    onClick={() => setSelectedUser(selectedUser?.id === user.id ? null : user)}
                  >
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-[#0B1F33] text-white flex items-center justify-center font-bold text-xs font-heading shrink-0">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-[#172333] text-xs">{user.name}</p>
                          <p className="text-[11px] text-[#94A3B8]">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="px-2.5 py-1 bg-[#0B1F33]/5 text-[#0B1F33] rounded-full text-[11px] font-bold">{user.role}</span>
                    </td>
                    <td className="px-4 py-3.5 text-xs text-[#64748B]">{formatDate(user.lastLogin)}</td>
                    <td className="px-4 py-3.5">
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleStatus(user.id) }}
                        className="flex items-center gap-1.5"
                      >
                        {user.status === 'active' ? (
                          <><CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A]" /><span className="text-xs text-[#16A34A] font-semibold">Active</span></>
                        ) : (
                          <><XCircle className="h-3.5 w-3.5 text-[#94A3B8]" /><span className="text-xs text-[#94A3B8] font-semibold">Inactive</span></>
                        )}
                      </button>
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => handleEdit(user)} className="p-1.5 rounded hover:bg-[#F1F5F9] text-[#64748B]">
                          <Edit2 className="h-3.5 w-3.5" />
                        </button>
                        {user.role !== 'Super Admin' && (
                          <button onClick={() => handleDelete(user.id)} className="p-1.5 rounded hover:bg-[#DC2626]/10 text-[#94A3B8] hover:text-[#DC2626]">
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Permission viewer */}
        <div>
          <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
            <div className="px-5 py-4 border-b border-[#E2E8F0]">
              <h2 className="font-heading font-bold text-sm text-[#0B1F33]">
                {selectedUser ? `${selectedUser.name}'s Permissions` : 'Permission Reference'}
              </h2>
            </div>
            <div className="p-4 space-y-2">
              {PERMISSION_GROUPS.map((group) => {
                const isExpanded = expandedGroup === group.group
                const hasAll = selectedUser
                  ? group.permissions.every((p) => selectedUser.permissions.includes(p))
                  : false
                const hasSome = selectedUser
                  ? group.permissions.some((p) => selectedUser.permissions.includes(p))
                  : false

                return (
                  <div key={group.group} className="rounded-lg border border-[#E2E8F0] overflow-hidden">
                    <button
                      onClick={() => setExpandedGroup(isExpanded ? null : group.group)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-xs font-semibold text-[#172333] hover:bg-[#F7F9FA] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        {selectedUser && (
                          <div className={`h-2 w-2 rounded-full ${hasAll ? 'bg-[#16A34A]' : hasSome ? 'bg-[#D97706]' : 'bg-[#E2E8F0]'}`} />
                        )}
                        <span>{group.group}</span>
                      </div>
                      {isExpanded ? <ChevronDown className="h-3.5 w-3.5 text-[#94A3B8]" /> : <ChevronRight className="h-3.5 w-3.5 text-[#94A3B8]" />}
                    </button>
                    {isExpanded && (
                      <div className="px-3 pb-3 bg-[#F7F9FA] space-y-1.5">
                        {group.permissions.map((p) => {
                          const hasPermission = selectedUser ? selectedUser.permissions.includes(p) : true
                          return (
                            <div key={p} className="flex items-center gap-2">
                              {selectedUser ? (
                                hasPermission
                                  ? <CheckCircle2 className="h-3 w-3 text-[#16A34A] shrink-0" />
                                  : <XCircle className="h-3 w-3 text-[#E2E8F0] shrink-0" />
                              ) : <div className="h-3 w-3" />}
                              <span className={`font-mono text-[10px] ${hasPermission && selectedUser ? 'text-[#172333]' : 'text-[#94A3B8]'}`}>{p}</span>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminUsersPage
