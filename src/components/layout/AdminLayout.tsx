import React, { useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../stores/authStore'
import { useUIStore } from '../../stores/uiStore'
import { brandAssets } from '../../assets'
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Layers,
  Archive,
  Users,
  Tag,
  MessageSquare,
  Image,
  BarChart2,
  FolderKanban,
  Settings,
  Shield,
  LogOut,
  Menu,
  X,
  Search,
  Bell,
  ExternalLink,
  ChevronRight,
} from 'lucide-react'
import { ToastContainer } from '../ui/ToastContainer'

export const AdminLayout: React.FC = () => {
  const { user, logout } = useAuthStore()
  const { adminSidebarCollapsed, toggleAdminSidebar } = useUIStore()
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const navSections = [
    {
      title: 'OVERVIEW',
      items: [
        { path: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
        { path: '/admin/analytics', label: 'Analytics & BI', icon: BarChart2 },
      ]
    },
    {
      title: 'STORE MANAGEMENT',
      items: [
        { path: '/admin/orders', label: 'Orders', icon: ShoppingBag },
        { path: '/admin/products', label: 'Products', icon: Package },
        { path: '/admin/categories', label: 'Categories', icon: Layers },
        { path: '/admin/inventory', label: 'Inventory', icon: Archive },
        { path: '/admin/customers', label: 'Customers', icon: Users },
        { path: '/admin/discounts', label: 'Discounts', icon: Tag },
      ]
    },
    {
      title: 'CONTENT & SHOWCASE',
      items: [
        { path: '/admin/projects', label: 'Projects Showcase', icon: FolderKanban },
        { path: '/admin/media', label: 'Media Library', icon: Image },
        { path: '/admin/reviews', label: 'Reviews', icon: MessageSquare },
      ]
    },
    {
      title: 'SYSTEM & SETTINGS',
      items: [
        { path: '/admin/users', label: 'Users & Roles', icon: Shield },
        { path: '/admin/settings', label: 'Store Settings', icon: Settings },
      ]
    }
  ]

  const isLinkActive = (path: string, exact?: boolean) => {
    if (exact) return location.pathname === path
    return location.pathname.startsWith(path)
  }

  return (
    <div className="min-h-screen bg-[#000000] text-[#faf9f6] flex flex-col font-sans antialiased text-left">
      {/* Top Admin Header Bar */}
      <header className="sticky top-0 z-30 h-16 bg-[#121212] border-b border-[#333333] px-4 sm:px-6 flex items-center justify-between shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="lg:hidden p-2 rounded-[6px] text-[#868684] hover:bg-[#1e1e1d]"
            aria-label="Toggle navigation drawer"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link to="/admin" className="flex items-center gap-2.5">
            <img src={brandAssets.logo} alt="Centrifuge" className="h-7 w-auto object-contain" />
            <span className="font-heading font-bold text-base text-[#faf9f6]">
              Centrifuge <span className="text-[#f0b66d] font-mono text-xs">Admin</span>
            </span>
          </Link>
        </div>

        {/* Global Admin Search & Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/shop"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-[6px] text-[#868684] hover:text-[#faf9f6] hover:bg-[#1e1e1d] border border-[#333333] transition-colors"
          >
            <span>Live Store</span>
            <ExternalLink className="h-3 w-3" />
          </Link>

          <button
            className="relative p-2 rounded-[6px] text-[#868684] hover:text-[#faf9f6] hover:bg-[#1e1e1d]"
            title="System notifications"
          >
            <Bell className="h-4.5 w-4.5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#f0b66d]" />
          </button>

          <div className="h-6 w-px bg-[#333333]" />

          {/* Admin User Profile */}
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-full bg-[#000000] text-white flex items-center justify-center font-bold text-xs font-heading">
              {user?.name ? user.name.charAt(0) : 'A'}
            </div>
            <div className="hidden md:block text-left">
              <span className="text-xs font-bold text-[#faf9f6] block leading-tight">
                {user?.name || 'Kelechi Nwosu'}
              </span>
              <span className="text-[10px] text-[#16A34A] font-semibold">
                Super Admin
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 bg-[#000000] text-white border-r border-[#1e1e1d] shrink-0 overflow-y-auto">
          <div className="p-4 space-y-6 flex-1">
            {navSections.map((sec) => (
              <div key={sec.title} className="space-y-1">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#868684] uppercase px-3 block">
                  {sec.title}
                </span>
                <div className="space-y-0.5 mt-1.5">
                  {sec.items.map((item) => {
                    const Icon = item.icon
                    const active = isLinkActive(item.path, item.exact)
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-3 px-3 py-2 rounded-[8px] text-xs font-medium transition-all ${
                          active
                            ? 'bg-[#a55d0c] text-white font-bold shadow-xs'
                            : 'text-[#CBD5E1] hover:text-white hover:bg-[#121212]/5'
                        }`}
                      >
                        <Icon className={`h-4 w-4 shrink-0 ${active ? 'text-[#faf9f6]' : 'text-[#868684]'}`} />
                        <span>{item.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Sidebar Footer */}
          <div className="p-4 border-t border-[#1e1e1d] space-y-2">
            <Link
              to="/"
              className="flex items-center justify-between text-xs text-[#868684] hover:text-white px-2 py-1.5 transition-colors"
            >
              <span>Back to Corporate Site</span>
              <ExternalLink className="h-3 w-3" />
            </Link>
            <button
              onClick={() => {
                logout()
                navigate('/admin/login')
              }}
              className="w-full flex items-center gap-2 text-xs font-semibold text-[#DC2626] hover:bg-red-500/10 px-2 py-1.5 rounded-[6px] transition-colors"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </aside>

        {/* Mobile Slide-Out Sidebar */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex" role="dialog" aria-modal="true">
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <div className="relative w-64 bg-[#000000] text-white flex flex-col h-full z-10 p-4 overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-[#1e1e1d] mb-4">
                <span className="font-heading font-bold text-sm text-white">Centrifuge Admin</span>
                <button
                  onClick={() => setMobileSidebarOpen(false)}
                  className="p-1 rounded text-[#868684] hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-6 flex-1">
                {navSections.map((sec) => (
                  <div key={sec.title} className="space-y-1">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#868684] uppercase px-3 block">
                      {sec.title}
                    </span>
                    <div className="space-y-0.5 mt-1">
                      {sec.items.map((item) => {
                        const Icon = item.icon
                        const active = isLinkActive(item.path, item.exact)
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setMobileSidebarOpen(false)}
                            className={`flex items-center gap-3 px-3 py-2 rounded-[8px] text-xs font-medium transition-all ${
                              active
                                ? 'bg-[#a55d0c] text-white font-bold'
                                : 'text-[#CBD5E1] hover:text-white hover:bg-[#121212]/5'
                            }`}
                          >
                            <Icon className="h-4 w-4 shrink-0" />
                            <span>{item.label}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Admin Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>

      <ToastContainer />
    </div>
  )
}
export default AdminLayout
