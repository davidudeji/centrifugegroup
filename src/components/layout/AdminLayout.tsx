import React, { useState, useEffect } from 'react'
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
  ChevronLeft,
  Cpu,
  Workflow,
  Network,
  Database,
  Radio,
  Sliders,
} from 'lucide-react'
import { ToastContainer } from '../ui/ToastContainer'

export const AdminLayout: React.FC = () => {
  const { user, logout } = useAuthStore();
  const {
    adminSidebarCollapsed,
    toggleAdminSidebar,
    setAdminSidebarCollapsed,
  } = useUIStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [unreadNotifications, setUnreadNotifications] = useState(3);

  // Auto-collapse on laptop/tablet (1024px - 1439px) per UI/UX Spec Â§2.1
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024 && width < 1440) {
        setAdminSidebarCollapsed(true);
      } else if (width >= 1440) {
        setAdminSidebarCollapsed(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setAdminSidebarCollapsed]);

  // Navigation sections with Project Development & Management Studio & Store Modules
  const navSections = [
    {
      title: "PROJECT DELIVERY",
      items: [
        {
          path: "/admin",
          label: "Delivery Studio",
          icon: LayoutDashboard,
          exact: true,
        },
        {
          path: "/solutions/project-development-management",
          label: "Project Governance",
          icon: Workflow,
        },
        {
          path: "/admin/analytics",
          label: "Delivery Insights",
          icon: BarChart2,
        },
      ],
    },
    {
      title: "STORE & HARDWARE",
      items: [
        { path: "/admin/orders", label: "Orders", icon: ShoppingBag },
        { path: "/admin/products", label: "Products", icon: Package },
        { path: "/admin/categories", label: "Categories", icon: Layers },
        { path: "/admin/inventory", label: "Inventory", icon: Archive },
        { path: "/admin/customers", label: "Enterprise Clients", icon: Users },
        { path: "/admin/discounts", label: "Discounts", icon: Tag },
      ],
    },
    {
      title: "CONTENT & SHOWCASE",
      items: [
        {
          path: "/admin/projects",
          label: "Showcase Projects",
          icon: FolderKanban,
        },
        { path: "/admin/media", label: "Media Library", icon: Image },
      ],
    },
    {
      title: "SYSTEM & SECURITY",
      items: [
        { path: "/admin/users", label: "Users & Roles", icon: Shield },
        { path: "/admin/settings", label: "System Settings", icon: Settings },
      ],
    },
  ];

  const isLinkActive = (path: string, exact?: boolean) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  // Generate dynamic breadcrumb trail based on current path (UI/UX Spec Â§3.1)
  const getBreadcrumbs = () => {
    const p = location.pathname;
    if (p === "/admin")
      return ["Home", "Solutions", "Project Development & Management"];
    if (p === "/admin/analytics")
      return [
        "Home",
        "Project Development & Management",
        "API Load & Telemetry",
      ];
    if (p.startsWith("/admin/orders"))
      return ["Portal", "Store Management", "Orders"];
    if (p.startsWith("/admin/products"))
      return ["Portal", "Catalog", "Products"];
    if (p.startsWith("/admin/inventory"))
      return ["Portal", "Operations", "Inventory"];
    if (p.startsWith("/admin/customers"))
      return ["Portal", "Accounts", "Enterprise Clients"];
    if (p.startsWith("/admin/categories"))
      return ["Portal", "Catalog", "Categories"];
    if (p.startsWith("/admin/settings"))
      return ["System", "Configuration", "Settings"];
    if (p.startsWith("/admin/users"))
      return ["System", "Security", "Roles & Permissions"];
    return ["Home", "Solutions", "Project Delivery"];
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#1A1A1A] flex flex-col font-sans antialiased text-left selection:bg-[#008DDA]/20 selection:text-[#0F2C59]">
      <header className="sticky top-0 z-30 h-[72px] bg-[#FFFFFF] border-b border-[#E2E8F0] px-4 sm:px-8 flex items-center justify-between shadow-xs">
        {/* Left: Mobile Toggle + Breadcrumb Trail */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="lg:hidden p-2 rounded-[4px] text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F2C59]"
            aria-label="Toggle navigation drawer"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Breadcrumb Trail: Text indicators mapping current system node */}
          <nav
            aria-label="Breadcrumb"
            className="hidden sm:flex items-center gap-1.5 text-xs"
          >
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={crumb}>
                {idx > 0 && (
                  <ChevronRight className="h-3.5 w-3.5 text-[#94A3B8]" />
                )}
                <span
                  className={
                    idx === breadcrumbs.length - 1
                      ? "font-semibold text-[#0F2C59]"
                      : "text-[#64748B] hover:text-[#0F2C59] cursor-pointer"
                  }
                >
                  {crumb}
                </span>
              </React.Fragment>
            ))}
          </nav>
        </div>

        {/* Center: Global Search Input (Omni-search block, width 400px) */}
        <div className="hidden md:flex items-center justify-center flex-1 max-w-[400px] mx-4">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#94A3B8]">
              <Search className="h-4 w-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search accounts, components, or documentation..."
              className="w-full h-10 pl-9 pr-4 bg-[#F8FAFC] text-[13px] text-[#1A1A1A] placeholder:text-[#94A3B8] border border-[#E2E8F0] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#008DDA]/20 focus:border-[#008DDA] transition-colors"
            />
          </div>
        </div>

        {/* Right: Actions, Notification Hub & User Profile Trigger */}
        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            to="/shop"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-[4px] text-[#0F2C59] hover:text-[#008DDA] hover:bg-[#F1F5F9] border border-[#E2E8F0] transition-colors"
          >
            <span>Live Store</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>

          {/* Notification Hub: Icon indicator with active green/red state badges */}
          <div className="relative flex items-center">
            <button
              onClick={() => setUnreadNotifications(0)}
              className="relative p-2 rounded-[4px] text-[#64748B] hover:text-[#0F2C59] hover:bg-[#F1F5F9] transition-colors"
              title="System notifications"
              aria-label="System notifications"
            >
              <Bell className="h-5 w-5" />
              {unreadNotifications > 0 && (
                <span className="absolute top-1 right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF4444] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#EF4444]"></span>
                </span>
              )}
            </button>
            {/* Active System Health indicator badge */}
            <span
              className="hidden sm:inline-block ml-1 h-2 w-2 rounded-full bg-[#10B981]"
              title="System Node Status: 100% Operational"
            />
          </div>

          <div className="h-7 w-px bg-[#E2E8F0]" />

          {/* User Profile Trigger: Rounded avatar (36px) alongside user name and role */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="h-9 w-9 rounded-full bg-[#0F2C59] text-white flex items-center justify-center font-bold text-sm shadow-xs border border-[#1E3A8A] shrink-0">
              {user?.name ? user.name.charAt(0) : "K"}
            </div>
            <div className="hidden lg:block text-left">
              <span className="text-[13px] font-bold text-[#1A1A1A] block leading-tight group-hover:text-[#008DDA] transition-colors">
                {user?.name || "Admin User"}
              </span>
              <span className="text-[11px] text-[#64748B] font-medium flex items-center gap-1">
                <span>Enterprise Admin</span>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#10B981]" />
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <aside
          className={`hidden lg:flex flex-col transition-all duration-250 ease-in-out bg-[#0F2C59] text-[#A0AEC0] border-r border-[#1E3A8A] shrink-0 overflow-y-auto ${
            adminSidebarCollapsed ? "w-[72px]" : "w-[260px]"
          }`}
        >
          {/* Sidebar Brand Header */}
          <div className="p-4 border-b border-[#1E3A8A] flex items-center justify-between">
            {!adminSidebarCollapsed ? (
              <Link to="/admin" className="flex items-center gap-2.5">
                <img
                  src={brandAssets.logo}
                  alt="Centrifuge"
                  className="h-7 w-auto object-contain brightness-125"
                />
              </Link>
            ) : (
              <Link
                to="/admin"
                className="mx-auto"
                title="Centrifuge Enterprise"
              >
                <div className="h-8 w-8 rounded-[4px] bg-[#008DDA] text-white flex items-center justify-center font-bold text-sm">
                  C
                </div>
              </Link>
            )}
          </div>

          {/* Navigation Sections */}
          <div className="p-3 space-y-6 flex-1">
            {navSections.map((sec) => (
              <div key={sec.title} className="space-y-1">
                {!adminSidebarCollapsed && (
                  <span className="text-[10px] font-bold tracking-wider text-[#A0AEC0]/70 uppercase px-3 block">
                    {sec.title}
                  </span>
                )}
                <div className="space-y-1 mt-1">
                  {sec.items.map((item) => {
                    const Icon = item.icon;
                    const active = isLinkActive(item.path, item.exact);
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        title={adminSidebarCollapsed ? item.label : undefined}
                        className={`flex items-center gap-3 px-3 py-2.5 text-xs font-medium transition-all duration-200 ${
                          active
                            ? "bg-[#008DDA] text-[#FFFFFF] font-semibold border-l-4 border-white"
                            : "text-[#A0AEC0] hover:text-[#FFFFFF] hover:bg-[#1E3A8A]"
                        } ${adminSidebarCollapsed ? "justify-center px-0" : "rounded-[4px]"}`}
                      >
                        <Icon
                          className={`h-4.5 w-4.5 shrink-0 ${active ? "text-white" : "text-[#A0AEC0]"}`}
                        />
                        {!adminSidebarCollapsed && (
                          <span className="truncate">{item.label}</span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Sidebar Collapse & Sign Out Controls */}
          <div className="p-3 border-t border-[#1E3A8A] space-y-1.5 bg-[#0F2C59]">
            {/* Collapse toggle button */}
            <button
              onClick={toggleAdminSidebar}
              className={`w-full flex items-center gap-2 text-xs text-[#A0AEC0] hover:text-white hover:bg-[#1E3A8A] p-2 rounded-[4px] transition-colors ${
                adminSidebarCollapsed ? "justify-center" : "justify-between"
              }`}
              title={
                adminSidebarCollapsed
                  ? "Expand sidebar (260px)"
                  : "Collapse sidebar (72px)"
              }
            >
              {!adminSidebarCollapsed && <span>Collapse Sidebar</span>}
              {adminSidebarCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </button>

            {!adminSidebarCollapsed && (
              <Link
                to="/"
                className="flex items-center justify-between text-xs text-[#A0AEC0] hover:text-white p-2 rounded-[4px] hover:bg-[#1E3A8A] transition-colors"
              >
                <span>Corporate Site</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            )}

            <button
              onClick={() => {
                logout();
                navigate("/admin/login");
              }}
              className={`w-full flex items-center gap-2 text-xs font-semibold text-[#EF4444] hover:bg-[#EF4444]/15 p-2 rounded-[4px] transition-colors ${
                adminSidebarCollapsed ? "justify-center" : ""
              }`}
              title="Sign Out"
            >
              <LogOut className="h-4 w-4 shrink-0" />
              {!adminSidebarCollapsed && <span>Sign Out</span>}
            </button>
          </div>
        </aside>

        {/* â”€â”€â”€ Mobile Slide-Out Drawer (under 1023px per Spec Â§2.1) â”€â”€â”€ */}
        {mobileSidebarOpen && (
          <div
            className="fixed inset-0 z-50 lg:hidden flex"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="fixed inset-0 bg-[#0F2C59]/50 backdrop-blur-xs"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <div className="relative w-72 bg-[#0F2C59] text-white flex flex-col h-full z-10 p-4 overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-[#1E3A8A] mb-4">
                <span className="font-heading font-bold text-sm text-white">
                  Centrifuge Enterprise
                </span>
                <button
                  onClick={() => setMobileSidebarOpen(false)}
                  className="p-1 rounded-[4px] text-[#A0AEC0] hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-6 flex-1">
                {navSections.map((sec) => (
                  <div key={sec.title} className="space-y-1">
                    <span className="text-[10px] font-bold tracking-wider text-[#A0AEC0]/70 uppercase px-3 block">
                      {sec.title}
                    </span>
                    <div className="space-y-1 mt-1">
                      {sec.items.map((item) => {
                        const Icon = item.icon;
                        const active = isLinkActive(item.path, item.exact);
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setMobileSidebarOpen(false)}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-[4px] text-xs font-medium transition-all ${
                              active
                                ? "bg-[#008DDA] text-white font-bold border-l-4 border-white"
                                : "text-[#A0AEC0] hover:text-white hover:bg-[#1E3A8A]"
                            }`}
                          >
                            <Icon className="h-4 w-4 shrink-0" />
                            <span>{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* â”€â”€â”€ Fluid Right-Side Workspace Canvas (UI/UX Spec Â§2.1) â”€â”€â”€
            Gutter Width: 24px fixed. Outer Page Margins: 32px fixed.
        â”€â”€â”€ */}
        <main className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#F5F7FA]">
          <div className="max-w-[1440px] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      <ToastContainer />
    </div>
  );
};
export default AdminLayout

