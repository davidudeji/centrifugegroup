import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { productService } from '../../services/productService'
import { useUIStore } from '../../stores/uiStore'
import type { Product } from '../../types'
import { mockCategories } from '../../data/mockData'
import { Plus, Search, Edit, Trash2, ExternalLink, Filter } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { Badge } from '../../components/ui/Badge'
import { Modal } from '../../components/ui/Modal'

export const AdminProductsPage: React.FC = () => {
  const { addToast } = useUIStore()
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [deleteModalProduct, setDeleteModalProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const loadProducts = () => {
    setIsLoading(true)
    productService.getProducts().then((data) => {
      setProducts(data)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const handleDelete = async () => {
    if (!deleteModalProduct) return
    await productService.deleteProduct(deleteModalProduct.id)
    setDeleteModalProduct(null)
    loadProducts()
    addToast({
      title: 'Product Deleted',
      description: `${deleteModalProduct.name} has been removed.`,
      type: 'success',
    })
  }

  const filtered = products.filter((p) => {
    const matchesCat = categoryFilter === 'all' || p.categoryId === categoryFilter
    const matchesStatus = statusFilter === 'all' || p.status === statusFilter
    const matchesSearch =
      search === '' ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase())
    return matchesCat && matchesStatus && matchesSearch
  })

  return (
    <div className="space-y-6 text-left">
      <SEO title="Product Catalog Management | Centrifuge Admin" />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
        <div>
          <h1 className="text-2xl font-bold text-[#1A1A1A] font-heading">
            Commercial Hardware Products
          </h1>
          <p className="text-xs text-[#64748B] mt-0.5">
            Manage your hardware inventory, pricing, specifications, and live store availability.
          </p>
        </div>

        <Link to="/admin/products/new">
          <Button variant="primary" size="md" leftIcon={<Plus className="h-4 w-4" />}>
            Add New Product
          </Button>
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#FFFFFF] p-4 rounded-[12px] border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="w-full md:w-80">
          <Input
            placeholder="Search by product name or SKU..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            leftIcon={<Search className="h-4 w-4" />}
          />
        </div>

        <div className="flex items-center gap-3">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-[#FFFFFF] text-xs border border-[#E2E8F0] rounded-[8px] py-2 px-3 focus:outline-none"
          >
            <option value="all">All Categories</option>
            {mockCategories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[#FFFFFF] text-xs border border-[#E2E8F0] rounded-[8px] py-2 px-3 focus:outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="draft">Draft</option>
            <option value="archived">Archived</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#FFFFFF] rounded-[16px] border border-[#E2E8F0] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs divide-y divide-[#E2E8F0]">
            <thead className="bg-[#F5F7FA] text-[#64748B] font-bold">
              <tr>
                <th className="px-6 py-3.5">Product</th>
                <th className="px-6 py-3.5">SKU</th>
                <th className="px-6 py-3.5">Category</th>
                <th className="px-6 py-3.5">Price</th>
                <th className="px-6 py-3.5">Stock</th>
                <th className="px-6 py-3.5">Status</th>
                <th className="px-6 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-[#64748B]">
                    Loading products...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-[#64748B]">
                    No products found matching filters.
                  </td>
                </tr>
              ) : (
                filtered.map((prod) => (
                  <tr key={prod.id} className="hover:bg-[#F5F7FA]">
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <img
                          src={prod.images[0]}
                          alt=""
                          className="h-10 w-10 object-contain rounded border p-0.5 bg-[#F5F7FA] shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-[#1A1A1A] block line-clamp-1">
                            {prod.name}
                          </span>
                          <span className="text-[10px] text-[#64748B]">{prod.brand}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3.5 font-mono text-[#1A1A1A]">
                      {prod.sku}
                    </td>
                    <td className="px-6 py-3.5 text-[#64748B]">
                      {prod.categoryName || 'Hardware'}
                    </td>
                    <td className="px-6 py-3.5 font-bold text-[#1A1A1A]">
                      ₦{prod.price.toLocaleString()}
                    </td>
                    <td className="px-6 py-3.5">
                      <Badge
                        variant={prod.stockQuantity <= prod.lowStockThreshold ? 'warning' : 'success'}
                        size="sm"
                        dot
                      >
                        {prod.stockQuantity} units
                      </Badge>
                    </td>
                    <td className="px-6 py-3.5">
                      <Badge
                        variant={prod.status === 'active' ? 'success' : 'neutral'}
                        size="sm"
                      >
                        {prod.status.toUpperCase()}
                      </Badge>
                    </td>
                    <td className="px-6 py-3.5 text-right space-x-2">
                      <Link
                        to={`/admin/products/edit/${prod.id}`}
                        className="inline-flex p-1 text-[#64748B] hover:text-[#1A1A1A]"
                        title="Edit product"
                      >
                        <Edit className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => setDeleteModalProduct(prod)}
                        className="inline-flex p-1 text-[#EF4444] hover:text-[#B91C1C]"
                        title="Delete product"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Confirmation Modal for Destructive Delete (per spec Section 42) */}
      <Modal
        isOpen={!!deleteModalProduct}
        onClose={() => setDeleteModalProduct(null)}
        title="Delete Product?"
        description="This action cannot be undone. The product will be permanently removed from catalog."
        maxWidth="sm"
      >
        <div className="space-y-4">
          <p className="text-xs text-[#64748B]">
            Are you sure you want to delete <strong className="text-[#1A1A1A]">{deleteModalProduct?.name}</strong> (SKU: {deleteModalProduct?.sku})?
          </p>
          <div className="flex justify-end gap-3 pt-2">
            <Button variant="outline" size="sm" onClick={() => setDeleteModalProduct(null)}>
              Cancel
            </Button>
            <Button variant="danger" size="sm" onClick={handleDelete}>
              Delete Product
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
export default AdminProductsPage
