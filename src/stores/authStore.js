import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export const DEMO_ADMIN_USER = {
    id: 'usr-admin-1',
    name: 'Kelechi Nwosu',
    email: 'admin@centrifugegroup.co',
    role: 'super_admin',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    permissions: [
        'products.read',
        'products.create',
        'products.update',
        'products.delete',
        'orders.read',
        'orders.update',
        'inventory.read',
        'inventory.update',
        'customers.read',
        'analytics.read',
        'settings.update',
        'projects.manage'
    ],
    createdAt: '2023-01-01T00:00:00Z'
};
export const DEMO_CUSTOMER_USER = {
    id: 'usr-cust-1',
    name: 'Amina Bello',
    email: 'amina.bello@apexlogistics.ng',
    role: 'customer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    permissions: ['account.orders', 'account.profile'],
    createdAt: '2023-11-10T08:00:00Z'
};
export const useAuthStore = create()(persist((set, get) => ({
    user: DEMO_ADMIN_USER, // Default to demo admin for seamless evaluation
    isAuthenticated: true,
    isLoading: false,
    login: async (email, _password, role = 'super_admin') => {
        set({ isLoading: true });
        // Simulate network latency
        await new Promise((resolve) => setTimeout(resolve, 400));
        if (role === 'customer' || email.includes('customer') || email.includes('bello')) {
            set({ user: DEMO_CUSTOMER_USER, isAuthenticated: true, isLoading: false });
            return true;
        }
        const adminUser = {
            ...DEMO_ADMIN_USER,
            email,
            role,
        };
        set({ user: adminUser, isAuthenticated: true, isLoading: false });
        return true;
    },
    logout: () => {
        set({ user: null, isAuthenticated: false });
    },
    hasPermission: (permission) => {
        const currentUser = get().user;
        if (!currentUser)
            return false;
        if (currentUser.role === 'super_admin')
            return true;
        return currentUser.permissions.includes(permission);
    }
}), {
    name: 'centrifuge-auth-storage'
}));
