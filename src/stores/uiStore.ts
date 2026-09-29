import { create } from 'zustand'

export interface ToastMessage {
  id: string
  title: string
  description?: string
  type: 'success' | 'error' | 'info' | 'warning'
}

interface UIState {
  mobileNavOpen: boolean
  setMobileNavOpen: (open: boolean) => void
  toggleMobileNav: () => void

  searchModalOpen: boolean
  setSearchModalOpen: (open: boolean) => void

  toasts: ToastMessage[]
  addToast: (toast: Omit<ToastMessage, 'id'>) => void
  removeToast: (id: string) => void

  adminSidebarCollapsed: boolean
  toggleAdminSidebar: () => void
  setAdminSidebarCollapsed: (collapsed: boolean) => void
}

export const useUIStore = create<UIState>((set) => ({
  mobileNavOpen: false,
  setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
  toggleMobileNav: () => set((state) => ({ mobileNavOpen: !state.mobileNavOpen })),

  searchModalOpen: false,
  setSearchModalOpen: (open) => set({ searchModalOpen: open }),

  toasts: [],
  addToast: (toast) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast: ToastMessage = { ...toast, id }
    set((state) => ({ toasts: [...state.toasts, newToast] }))

    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      }))
    }, 4500)
  },
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),

  adminSidebarCollapsed: false,
  toggleAdminSidebar: () =>
    set((state) => ({ adminSidebarCollapsed: !state.adminSidebarCollapsed })),
  setAdminSidebarCollapsed: (collapsed) => set({ adminSidebarCollapsed: collapsed }),
}))
