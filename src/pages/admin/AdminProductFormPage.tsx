import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { productService } from '../../services/productService'
import { useUIStore } from '../../stores/uiStore'
import { mockCategories } from '../../data/mockData'
import type { Product, ProductStatus } from '../../types'
import { ArrowLeft, Save, UploadCloud } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'

export const AdminProductFormPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addToast } = useUIStore()

  const isEditing = Boolean(id && id !== 'new')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(isEditing)

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    sku: '',
    brand: 'Centrifuge Power',
    categoryId: 'cat-1',
    price: 0,
    compareAtPrice: 0,
    costPrice: 0,
    stockQuantity: 10,
    lowStockThreshold: 3,
    status: 'active' as ProductStatus,
    featured: false,
    shortDescription: '',
    description: '',
    imageUrl: 'https://images.unsplash.com/photo-1558441719-8b4bee5e998a?auto=format&fit=crop&w=800&q=80',
    weight: '15.0 kg',
    dimensions: '400 x 300 x 150 mm',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (isEditing && id) {
      productService.getProductById(id).then((prod) => {
        if (prod) {
          setFormData({
            name: prod.name,
            slug: prod.slug,
            sku: prod.sku,
            brand: prod.brand,
            categoryId: prod.categoryId,
            price: prod.price,
            compareAtPrice: prod.compareAtPrice || 0,
            costPrice: prod.costPrice || 0,
            stockQuantity: prod.stockQuantity,
            lowStockThreshold: prod.lowStockThreshold,
            status: prod.status,
            featured: prod.featured,
            shortDescription: prod.shortDescription,
            description: prod.description,
            imageUrl: prod.images[0] || '',
            weight: prod.weight || '',
            dimensions: prod.dimensions || '',
          })
        }
        setIsLoading(false)
      })
    }
  }, [id, isEditing])

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!formData.name.trim()) errs.name = 'Product name is required'
    if (!formData.sku.trim()) errs.sku = 'SKU is required'
    if (formData.price <= 0) errs.price = 'Price must be greater than zero'
    if (formData.stockQuantity < 0) errs.stockQuantity = 'Stock cannot be negative'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    const selectedCat = mockCategories.find((c) => c.id === formData.categoryId)

    try {
      if (isEditing && id) {
        await productService.updateProduct(id, {
          name: formData.name,
          slug: formData.slug || formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          sku: formData.sku,
          brand: formData.brand,
          categoryId: formData.categoryId,
          categoryName: selectedCat?.name || 'Hardware',
          price: Number(formData.price),
          compareAtPrice: Number(formData.compareAtPrice) || undefined,
          costPrice: Number(formData.costPrice) || undefined,
          stockQuantity: Number(formData.stockQuantity),
          lowStockThreshold: Number(formData.lowStockThreshold),
          status: formData.status,
          featured: formData.featured,
          shortDescription: formData.shortDescription,
          description: formData.description,
          images: [formData.imageUrl],
          weight: formData.weight,
          dimensions: formData.dimensions,
        })
        addToast({
          title: 'Product Updated',
          description: `${formData.name} updated successfully.`,
          type: 'success',
        })
      } else {
        await productService.createProduct({
          name: formData.name,
          slug: formData.slug || formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          sku: formData.sku,
          brand: formData.brand,
          categoryId: formData.categoryId,
          categoryName: selectedCat?.name || 'Hardware',
          price: Number(formData.price),
          compareAtPrice: Number(formData.compareAtPrice) || undefined,
          costPrice: Number(formData.costPrice) || undefined,
          stockQuantity: Number(formData.stockQuantity),
          lowStockThreshold: Number(formData.lowStockThreshold),
          status: formData.status,
          featured: formData.featured,
          shortDescription: formData.shortDescription,
          description: formData.description,
          images: [formData.imageUrl],
          weight: formData.weight,
          dimensions: formData.dimensions,
          specifications: { 'Warranty': '24 Months', 'Input Voltage': '230V AC' },
        })
        addToast({
          title: 'Product Created',
          description: `${formData.name} added to catalog successfully.`,
          type: 'success',
        })
      }
      setIsSubmitting(false)
      navigate('/admin/products')
    } catch (err) {
      setIsSubmitting(false)
      addToast({
        title: 'Error',
        description: 'Failed to save product details.',
        type: 'error',
      })
    }
  }

  if (isLoading) {
    return <div className="py-20 text-center text-xs text-[#64748B]">Loading product details...</div>
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <SEO title={isEditing ? 'Edit Product | Admin' : 'New Product | Admin'} />

      {/* Top Action Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-3">
          <Link
            to="/admin/products"
            className="p-1.5 rounded-[6px] text-[#64748B] hover:text-[#1A1A1A] hover:bg-[#F5F7FA]"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-[#1A1A1A] font-heading">
              {isEditing ? `Edit: ${formData.name}` : 'Create New Hardware Product'}
            </h1>
            <p className="text-xs text-[#64748B]">
              Configure hardware specs, pricing, and stock visibility.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/admin/products">
            <Button type="button" variant="outline" size="sm">
              Cancel
            </Button>
          </Link>
          <Button
            type="submit"
            variant="primary"
            size="sm"
            isLoading={isSubmitting}
            leftIcon={<Save className="h-4 w-4" />}
          >
            {isEditing ? 'Save Changes' : 'Publish Product'}
          </Button>
        </div>
      </div>

      {/* Two Column Layout (Left: Details/Description, Right: Pricing/Inventory/Category per spec Section 28) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (Span 8) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-[#FFFFFF] p-6 rounded-[16px] border border-[#E2E8F0] shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-[#1A1A1A] font-heading">
              Product Information
            </h3>

            <Input
              label="Product Title"
              required
              error={errors.name}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="SKU Code"
                required
                error={errors.sku}
                value={formData.sku}
                onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
              />
              <Input
                label="Brand"
                required
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                Short Description (Listing Summary)
              </label>
              <textarea
                rows={2}
                required
                className="w-full text-xs p-3 border border-[#E2E8F0] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#008DDA]/30"
                value={formData.shortDescription}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                Full Technical Specifications & Overview
              </label>
              <textarea
                rows={4}
                required
                className="w-full text-xs p-3 border border-[#E2E8F0] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#008DDA]/30"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
          </div>

          {/* Media / Image URL */}
          <div className="bg-[#FFFFFF] p-6 rounded-[16px] border border-[#E2E8F0] shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-[#1A1A1A] font-heading">
              Product Image
            </h3>
            <Input
              label="Image Direct URL"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
            />
            {formData.imageUrl && (
              <div className="h-36 w-36 rounded-[8px] border border-[#E2E8F0] p-2 bg-[#F5F7FA]">
                <img src={formData.imageUrl} alt="Preview" className="h-full w-full object-contain" />
              </div>
            )}
          </div>
        </div>

        {/* Right Column (Span 4) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Status & Category */}
          <div className="bg-[#FFFFFF] p-6 rounded-[16px] border border-[#E2E8F0] shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-[#1A1A1A] font-heading">
              Organization
            </h3>

            <div>
              <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                Catalog Category *
              </label>
              <select
                value={formData.categoryId}
                onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                className="w-full bg-[#FFFFFF] text-xs border border-[#E2E8F0] rounded-[8px] py-2 px-3 focus:outline-none"
              >
                {mockCategories.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                Publishing Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as ProductStatus })}
                className="w-full bg-[#FFFFFF] text-xs border border-[#E2E8F0] rounded-[8px] py-2 px-3 focus:outline-none"
              >
                <option value="active">Active (Visible in Store)</option>
                <option value="draft">Draft (Hidden)</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="rounded text-[#008DDA] focus:ring-[#008DDA]"
              />
              <label htmlFor="featured" className="text-xs font-medium text-[#1A1A1A]">
                Feature on Homepage
              </label>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-[#FFFFFF] p-6 rounded-[16px] border border-[#E2E8F0] shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-[#1A1A1A] font-heading">
              Pricing & Margins (NGN)
            </h3>

            <Input
              label="Selling Price (₦)"
              type="number"
              required
              error={errors.price}
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
            />

            <Input
              label="Compare-at Price (₦) [Optional]"
              type="number"
              value={formData.compareAtPrice}
              onChange={(e) => setFormData({ ...formData, compareAtPrice: Number(e.target.value) })}
            />

            <Input
              label="Cost Price (₦)"
              type="number"
              value={formData.costPrice}
              onChange={(e) => setFormData({ ...formData, costPrice: Number(e.target.value) })}
            />
          </div>

          {/* Inventory */}
          <div className="bg-[#FFFFFF] p-6 rounded-[16px] border border-[#E2E8F0] shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-[#1A1A1A] font-heading">
              Inventory Controls
            </h3>

            <Input
              label="Quantity in Stock"
              type="number"
              required
              error={errors.stockQuantity}
              value={formData.stockQuantity}
              onChange={(e) => setFormData({ ...formData, stockQuantity: Number(e.target.value) })}
            />

            <Input
              label="Low-Stock Alert Threshold"
              type="number"
              value={formData.lowStockThreshold}
              onChange={(e) => setFormData({ ...formData, lowStockThreshold: Number(e.target.value) })}
            />
          </div>
        </div>
      </div>
    </form>
  )
}
export default AdminProductFormPage
