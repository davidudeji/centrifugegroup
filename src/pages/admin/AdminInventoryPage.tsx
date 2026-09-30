import React, { useState, useEffect } from 'react'
import { SEO } from '../../components/ui/SEO'
import { productService } from '../../services/productService'
import { mockInventoryMovements } from '../../data/mockData'
import type { Product, InventoryMovement, InventoryMovementType } from '../../types'
import { Plus, Minus, History, RefreshCw, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { Badge } from '../../components/ui/Badge'
import { Modal } from '../../components/ui/Modal'
import { useUIStore } from '../../stores/uiStore'

export const AdminInventoryPage: React.FC = () => {
  const { addToast } = useUIStore()
  const [products, setProducts] = useState<Product[]>([])
  const [movements, setMovements] = useState<InventoryMovement[]>(mockInventoryMovements)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [activeTab, setActiveTab] = useState<'inventory' | 'history'>('inventory')

  // Stock adjustment modal state
  const [isAdjustModalOpen, setIsAdjustModalOpen] = useState(false)
  const [adjustType, setAdjustType] = useState<InventoryMovementType>('increase')
  const [adjustQuantity, setAdjustQuantity] = useState<number>(5)
  const [adjustReason, setAdjustReason] = useState<string>('Warehouse restock shipment')

  const loadProducts = () => {
    productService.getProducts().then(setProducts)
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const handleOpenAdjust = (prod: Product) => {
    setSelectedProduct(prod)
    setAdjustType('increase')
    setAdjustQuantity(5)
    setAdjustReason('Warehouse restock shipment')
    setIsAdjustModalOpen(true)
  }

  const handleSaveAdjustment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedProduct) return

    let newStock = selectedProduct.stockQuantity
    if (adjustType === 'increase') newStock += adjustQuantity
    if (adjustType === 'decrease') newStock = Math.max(0, newStock - adjustQuantity)
    if (adjustType === 'correction') newStock = adjustQuantity

    await productService.adjustStock(selectedProduct.id, newStock)

    // Record movement
    const movement: InventoryMovement = {
      id: `mov-${Date.now()}`,
      productId: selectedProduct.id,
      productName: selectedProduct.name,
      sku: selectedProduct.sku,
      type: adjustType,
      quantity: adjustQuantity,
      previousStock: selectedProduct.stockQuantity,
      newStock,
      reason: adjustReason,
      userId: 'usr-admin-1',
      userName: 'Kelechi Nwosu (Store Admin)',
      createdAt: new Date().toISOString(),
    }

    setMovements([movement, ...movements])
    loadProducts()
    setIsAdjustModalOpen(false)
    addToast({
      title: 'Inventory Adjusted',
      description: `Stock for ${selectedProduct.name} updated to ${newStock} units.`,
      type: 'success',
    })
  }

  return (
    <div className="space-y-6 text-left">
      <SEO title="Inventory & Stock Management | Centrifuge Admin" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#333333]">
        <div>
          <h1 className="text-2xl font-bold text-[#faf9f6] font-heading">
            Hardware Inventory & Stock Levels
          </h1>
          <p className="text-xs text-[#868684] mt-0.5">
            Monitor real-time warehouse availability, audit movements, and adjust physical counts.
          </p>
        </div>

        <div className="flex rounded-[6px] border border-[#333333] bg-[#121212] p-0.5 text-xs">
          <button
            onClick={() => setActiveTab('inventory')}
            className={`px-3 py-1.5 rounded-[4px] font-semibold transition-colors ${
              activeTab === 'inventory' ? 'bg-[#000000] text-white' : 'text-[#868684]'
            }`}
          >
            Live Stock Table
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-3 py-1.5 rounded-[4px] font-semibold transition-colors ${
              activeTab === 'history' ? 'bg-[#000000] text-white' : 'text-[#868684]'
            }`}
          >
            Movement Audit Log ({movements.length})
          </button>
        </div>
      </div>

      {activeTab === 'inventory' ? (
        <div className="bg-[#121212] rounded-[16px] border border-[#333333] shadow-xs overflow-hidden">
          <table className="w-full text-left text-xs divide-y divide-[#333333]">
            <thead className="bg-[#000000] text-[#b4b4b2] font-bold">
              <tr>
                <th className="px-6 py-3.5">Product & SKU</th>
                <th className="px-6 py-3.5">Category</th>
                <th className="px-6 py-3.5">Available Stock</th>
                <th className="px-6 py-3.5">Threshold</th>
                <th className="px-6 py-3.5">Health Status</th>
                <th className="px-6 py-3.5 text-right">Adjustment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#333333]">
              {products.map((p) => (
                <tr key={p.id} className="hover:bg-[#000000]">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-[#faf9f6] block line-clamp-1">
                      {p.name}
                    </span>
                    <span className="font-mono text-[10px] text-[#868684]">SKU: {p.sku}</span>
                  </td>
                  <td className="px-6 py-4 text-[#868684]">
                    {p.categoryName || 'Hardware'}
                  </td>
                  <td className="px-6 py-4 font-bold text-sm text-[#faf9f6]">
                    {p.stockQuantity} units
                  </td>
                  <td className="px-6 py-4 text-[#868684]">
                    {p.lowStockThreshold} units
                  </td>
                  <td className="px-6 py-4">
                    {p.stockQuantity === 0 ? (
                      <Badge variant="error" size="sm" dot>Out of Stock</Badge>
                    ) : p.stockQuantity <= p.lowStockThreshold ? (
                      <Badge variant="warning" size="sm" dot>Low Stock</Badge>
                    ) : (
                      <Badge variant="success" size="sm" dot>In Stock</Badge>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleOpenAdjust(p)}
                    >
                      Adjust Stock
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* Movement Audit Log */
        <div className="bg-[#121212] rounded-[16px] border border-[#333333] shadow-xs overflow-hidden">
          <table className="w-full text-left text-xs divide-y divide-[#333333]">
            <thead className="bg-[#000000] text-[#b4b4b2] font-bold">
              <tr>
                <th className="px-6 py-3.5">Timestamp</th>
                <th className="px-6 py-3.5">Product & SKU</th>
                <th className="px-6 py-3.5">Type</th>
                <th className="px-6 py-3.5">Qty Shift</th>
                <th className="px-6 py-3.5">Resulting Stock</th>
                <th className="px-6 py-3.5">Reason & Auditor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#333333]">
              {movements.map((m) => (
                <tr key={m.id} className="hover:bg-[#000000]">
                  <td className="px-6 py-4 text-[#868684] whitespace-nowrap">
                    {new Date(m.createdAt).toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-[#faf9f6] block line-clamp-1">{m.productName}</span>
                    <span className="font-mono text-[10px] text-[#868684]">{m.sku}</span>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={m.type === 'increase' ? 'success' : m.type === 'decrease' ? 'error' : 'neutral'} size="sm">
                      {m.type.toUpperCase()}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 font-mono font-bold text-[#faf9f6]">
                    {m.type === 'increase' ? `+${m.quantity}` : m.type === 'decrease' ? `-${m.quantity}` : `=${m.quantity}`}
                  </td>
                  <td className="px-6 py-4 font-semibold text-[#faf9f6]">
                    {m.newStock} units
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[#faf9f6] block">{m.reason}</span>
                    <span className="text-[10px] text-[#868684]">{m.userName}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Stock Adjustment Modal */}
      <Modal
        isOpen={isAdjustModalOpen}
        onClose={() => setIsAdjustModalOpen(false)}
        title={`Adjust Stock: ${selectedProduct?.name}`}
        description={`Current on-hand inventory: ${selectedProduct?.stockQuantity} units`}
      >
        <form onSubmit={handleSaveAdjustment} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#faf9f6] mb-1.5">
              Adjustment Type
            </label>
            <select
              value={adjustType}
              onChange={(e) => setAdjustType(e.target.value as InventoryMovementType)}
              className="w-full bg-[#121212] text-xs border border-[#333333] rounded-[8px] py-2 px-3 focus:outline-none"
            >
              <option value="increase">Increase (+ Receipt from Supplier / Restock)</option>
              <option value="decrease">Decrease (- Order Dispatch / Damaged Unit)</option>
              <option value="correction">Physical Count Correction (Set Exact Value)</option>
            </select>
          </div>

          <Input
            label={adjustType === 'correction' ? 'Exact Count After Audit' : 'Quantity to Adjust'}
            type="number"
            required
            value={adjustQuantity}
            onChange={(e) => setAdjustQuantity(Number(e.target.value))}
          />

          <Input
            label="Operational Reason *"
            required
            placeholder="e.g. PO-8821 container receipt, damaged in transit..."
            value={adjustReason}
            onChange={(e) => setAdjustReason(e.target.value)}
          />

          <div className="pt-2 flex justify-end gap-2 border-t border-[#333333]">
            <Button type="button" variant="outline" size="sm" onClick={() => setIsAdjustModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm">
              Commit Stock Adjustment
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
export default AdminInventoryPage
