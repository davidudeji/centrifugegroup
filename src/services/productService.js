import { mockProducts } from '../data/mockData';
const STORAGE_KEY = 'centrifuge_products_data';
function getInitialProducts() {
    if (typeof window === 'undefined')
        return mockProducts;
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
    }
    catch (err) {
        console.error('Error reading products from storage:', err);
    }
    return mockProducts;
}
function saveProducts(products) {
    if (typeof window === 'undefined')
        return;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    }
    catch (err) {
        console.error('Error saving products to storage:', err);
    }
}
export const productService = {
    async getProducts(filter) {
        await new Promise((resolve) => setTimeout(resolve, 150));
        let products = getInitialProducts();
        if (filter?.categoryId) {
            products = products.filter((p) => p.categoryId === filter.categoryId);
        }
        if (filter?.status) {
            products = products.filter((p) => p.status === filter.status);
        }
        if (filter?.featured !== undefined) {
            products = products.filter((p) => p.featured === filter.featured);
        }
        if (filter?.search) {
            const q = filter.search.toLowerCase();
            products = products.filter((p) => p.name.toLowerCase().includes(q) ||
                p.sku.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q));
        }
        return products;
    },
    async getProductById(id) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        const products = getInitialProducts();
        return products.find((p) => p.id === id) || null;
    },
    async getProductBySlug(slug) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        const products = getInitialProducts();
        return products.find((p) => p.slug === slug) || null;
    },
    async createProduct(data) {
        await new Promise((resolve) => setTimeout(resolve, 250));
        const products = getInitialProducts();
        const now = new Date().toISOString();
        const newProduct = {
            ...data,
            id: `prod-${Date.now()}`,
            createdAt: now,
            updatedAt: now,
        };
        const updated = [newProduct, ...products];
        saveProducts(updated);
        return newProduct;
    },
    async updateProduct(id, data) {
        await new Promise((resolve) => setTimeout(resolve, 250));
        const products = getInitialProducts();
        const index = products.findIndex((p) => p.id === id);
        if (index === -1) {
            throw new Error(`Product with ID ${id} not found`);
        }
        const updatedProduct = {
            ...products[index],
            ...data,
            updatedAt: new Date().toISOString(),
        };
        products[index] = updatedProduct;
        saveProducts(products);
        return updatedProduct;
    },
    async deleteProduct(id) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        const products = getInitialProducts();
        const filtered = products.filter((p) => p.id !== id);
        saveProducts(filtered);
        return true;
    },
    async adjustStock(id, newStock) {
        return this.updateProduct(id, { stockQuantity: newStock });
    }
};
