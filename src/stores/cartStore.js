import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export const useCartStore = create()(persist((set, get) => ({
    items: [],
    isOpen: false,
    addItem: (product, quantity = 1, variantId) => {
        set((state) => {
            const existingIndex = state.items.findIndex((item) => item.product.id === product.id && item.selectedVariantId === variantId);
            if (existingIndex > -1) {
                const updated = [...state.items];
                updated[existingIndex].quantity += quantity;
                return { items: updated, isOpen: true };
            }
            return {
                items: [...state.items, { product, quantity, selectedVariantId: variantId }],
                isOpen: true
            };
        });
    },
    removeItem: (productId) => {
        set((state) => ({
            items: state.items.filter((item) => item.product.id !== productId)
        }));
    },
    updateQuantity: (productId, quantity) => {
        set((state) => {
            if (quantity <= 0) {
                return {
                    items: state.items.filter((item) => item.product.id !== productId)
                };
            }
            return {
                items: state.items.map((item) => item.product.id === productId ? { ...item, quantity } : item)
            };
        });
    },
    clearCart: () => set({ items: [] }),
    getTotalCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
    },
    getSubtotal: () => {
        return get().items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    },
    setIsOpen: (isOpen) => set({ isOpen }),
    toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
}), {
    name: 'centrifuge-cart-storage',
}));
