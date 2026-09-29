import type { Order, OrderStatus, PaymentStatus } from '../types'
import { mockOrders } from '../data/mockData'

const STORAGE_KEY = 'centrifuge_orders_data'

function getInitialOrders(): Order[] {
  if (typeof window === 'undefined') return mockOrders
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (err) {
    console.error('Error reading orders from storage:', err)
  }
  return mockOrders
}

function saveOrders(orders: Order[]) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders))
  } catch (err) {
    console.error('Error saving orders to storage:', err)
  }
}

export const orderService = {
  async getOrders(filter?: {
    status?: OrderStatus
    paymentStatus?: PaymentStatus
    search?: string
  }): Promise<Order[]> {
    await new Promise((resolve) => setTimeout(resolve, 150))
    let orders = getInitialOrders()

    if (filter?.status) {
      orders = orders.filter((o) => o.orderStatus === filter.status)
    }
    if (filter?.paymentStatus) {
      orders = orders.filter((o) => o.paymentStatus === filter.paymentStatus)
    }
    if (filter?.search) {
      const q = filter.search.toLowerCase()
      orders = orders.filter(
        (o) =>
          o.orderNumber.toLowerCase().includes(q) ||
          o.customerName.toLowerCase().includes(q) ||
          o.customerEmail.toLowerCase().includes(q)
      )
    }
    return orders
  },

  async getOrderById(id: string): Promise<Order | null> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    const orders = getInitialOrders()
    return orders.find((o) => o.id === id || o.orderNumber === id) || null
  },

  async createOrder(orderData: Omit<Order, 'id' | 'orderNumber' | 'createdAt' | 'updatedAt'>): Promise<Order> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    const orders = getInitialOrders()
    const now = new Date().toISOString()
    const orderNumber = `CFG-${new Date().getFullYear()}-${1000 + orders.length + 1}`
    const newOrder: Order = {
      ...orderData,
      id: `ord-${Date.now()}`,
      orderNumber,
      createdAt: now,
      updatedAt: now,
    }
    const updated = [newOrder, ...orders]
    saveOrders(updated)
    return newOrder
  },

  async updateOrderStatus(id: string, orderStatus: OrderStatus): Promise<Order> {
    await new Promise((resolve) => setTimeout(resolve, 200))
    const orders = getInitialOrders()
    const index = orders.findIndex((o) => o.id === id)
    if (index === -1) {
      throw new Error(`Order with ID ${id} not found`)
    }
    const updated = {
      ...orders[index],
      orderStatus,
      updatedAt: new Date().toISOString(),
    }
    orders[index] = updated
    saveOrders(orders)
    return updated
  },

  async updatePaymentStatus(id: string, paymentStatus: PaymentStatus): Promise<Order> {
    await new Promise((resolve) => setTimeout(resolve, 200))
    const orders = getInitialOrders()
    const index = orders.findIndex((o) => o.id === id)
    if (index === -1) {
      throw new Error(`Order with ID ${id} not found`)
    }
    const updated = {
      ...orders[index],
      paymentStatus,
      updatedAt: new Date().toISOString(),
    }
    orders[index] = updated
    saveOrders(orders)
    return updated
  }
}
