import { create } from 'zustand';
export const useUIStore = create((set) => ({
    mobileNavOpen: false,
    setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
    toggleMobileNav: () => set((state) => ({ mobileNavOpen: !state.mobileNavOpen })),
    searchModalOpen: false,
    setSearchModalOpen: (open) => set({ searchModalOpen: open }),
    toasts: [],
    addToast: (toast) => {
        const id = Math.random().toString(36).substring(2, 9);
        const newToast = { ...toast, id };
        set((state) => ({ toasts: [...state.toasts, newToast] }));
        setTimeout(() => {
            set((state) => ({
                toasts: state.toasts.filter((t) => t.id !== id),
            }));
        }, 4500);
    },
    removeToast: (id) => set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
    })),
    adminSidebarCollapsed: false,
    toggleAdminSidebar: () => set((state) => ({ adminSidebarCollapsed: !state.adminSidebarCollapsed })),
    setAdminSidebarCollapsed: (collapsed) => set({ adminSidebarCollapsed: collapsed }),
}));
