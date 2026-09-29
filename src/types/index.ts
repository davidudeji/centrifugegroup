// Core Type Definitions for Centrifuge Group Platform

export type UserRole = 
  | 'super_admin'
  | 'store_manager'
  | 'inventory_manager'
  | 'order_manager'
  | 'content_manager'
  | 'customer'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
  permissions: string[]
  createdAt: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

// Store & Catalog Types
export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image?: string
  parentId?: string | null
  productCount: number
  createdAt: string
}

export type ProductStatus = 'active' | 'draft' | 'archived'

export interface ProductVariant {
  id: string
  name: string
  sku: string
  price: number
  stock: number
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  sku: string
  price: number
  compareAtPrice?: number
  costPrice?: number
  categoryId: string
  categoryName?: string
  brand: string
  images: string[]
  stockQuantity: number
  lowStockThreshold: number
  weight?: string
  dimensions?: string
  status: ProductStatus
  featured: boolean
  specifications: Record<string, string>
  variants?: ProductVariant[]
  seoTitle?: string
  seoDescription?: string
  createdAt: string
  updatedAt: string
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded'
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded'

export interface OrderItem {
  productId: string
  productName: string
  productImage: string
  sku: string
  price: number
  quantity: number
  total: number
}

export interface ShippingAddress {
  fullName: string
  email: string
  phone: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  country: string
  postalCode?: string
}

export interface Order {
  id: string
  orderNumber: string
  customerId: string
  customerName: string
  customerEmail: string
  items: OrderItem[]
  subtotal: number
  shipping: number
  tax: number
  discount: number
  total: number
  paymentMethod: string
  paymentStatus: PaymentStatus
  orderStatus: OrderStatus
  shippingAddress: ShippingAddress
  notes?: string
  createdAt: string
  updatedAt: string
}

export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  ordersCount: number
  totalSpent: number
  status: 'active' | 'inactive'
  addresses: ShippingAddress[]
  createdAt: string
}

export type InventoryMovementType = 'increase' | 'decrease' | 'correction'

export interface InventoryMovement {
  id: string
  productId: string
  productName: string
  sku: string
  type: InventoryMovementType
  quantity: number
  previousStock: number
  newStock: number
  reason: string
  userId: string
  userName: string
  createdAt: string
}

export interface Discount {
  id: string
  code: string
  type: 'percentage' | 'fixed'
  value: number
  minSpend?: number
  maxDiscount?: number
  usageCount: number
  usageLimit?: number
  startDate: string
  endDate?: string
  isActive: boolean
}

// Project Showcase Types (per project_spec.md)
export interface Project {
  id: string
  slug: string
  name: string
  category: string
  industry: string
  description: string
  image: string
  technologies: string[]
  status: 'live' | 'development' | 'archived'
  liveUrl?: string
  demoUrl?: string
  githubUrl?: string
  documentationUrl?: string
  caseStudySlug?: string
  featured: boolean
  displayOrder?: number
  overview?: string
  challenge?: string
  solution?: string
  capabilities?: string[]
}

// Case Study Types
export interface CaseStudy {
  id: string
  slug: string
  title: string
  client: string
  clientLogo?: string
  industry: string
  challenge: string
  solution: string
  capabilities: string[]
  implementation: string
  technologies: string[]
  results: string[]
  image: string
  relatedServiceSlug?: string
}

// Insights / Articles
export interface Article {
  id: string
  slug: string
  title: string
  category: 'Technology' | 'Healthcare' | 'Logistics' | 'Enterprise' | 'AI' | 'Business' | 'Company News'
  summary: string
  content: string
  author: {
    name: string
    role: string
    avatar?: string
  }
  date: string
  readingTime: string
  image: string
  featured?: boolean
  tags: string[]
}

// Career / Jobs
export interface JobOpening {
  id: string
  slug: string
  title: string
  department: string
  location: string
  type: 'Full-time' | 'Contract' | 'Hybrid' | 'Remote'
  shortDescription: string
  aboutRole: string
  responsibilities: string[]
  requirements: string[]
  niceToHave: string[]
  benefits: string[]
  isActive: boolean
}
