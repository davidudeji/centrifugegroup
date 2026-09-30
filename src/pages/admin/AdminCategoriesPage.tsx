import React, { useState } from 'react'
import { SEO } from '../../components/ui/SEO'
import { mockCategories } from '../../data/mockData'
import type { Category } from '../../types'
import { Plus, Edit, Trash2, Layers } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { Modal } from '../../components/ui/Modal'
import { useUIStore } from '../../stores/uiStore'

export const AdminCategoriesPage: React.FC = () => {
  const { addToast } = useUIStore()
  const [categories, setCategories] = useState<Category[]>(mockCategories)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleOpenCreate = () => {
    setEditingCategory(null)
    setName('')
    setDescription('')
    setIsModalOpen(true)
  }

  const handleOpenEdit = (c: Category) => {
    setEditingCategory(c)
    setName(c.name)
    setDescription(c.description)
    setIsModalOpen(true)
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return

    if (editingCategory) {
      setCategories((prev) =>
        prev.map((c) =>
          c.id === editingCategory.id ? { ...c, name, description } : c
        )
      )
      addToast({
        title: 'Category Updated',
        description: `${name} has been updated successfully.`,
        type: 'success',
      })
    } else {
      const newCat: Category = {
        id: `cat-${Date.now()}`,
        name,
        slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        description,
        productCount: 0,
        createdAt: new Date().toISOString(),
      }
      setCategories([...categories, newCat])
      addToast({
        title: 'Category Created',
        description: `${name} added to catalog.`,
        type: 'success',
      })
    }
    setIsModalOpen(false)
  }

  const handleDelete = (id: string, catName: string) => {
    setCategories(categories.filter((c) => c.id !== id))
    addToast({
      title: 'Category Deleted',
      description: `${catName} has been removed.`,
      type: 'success',
    })
  }

  return (
    <div className="space-y-6 text-left">
      <SEO title="Category Management | Centrifuge Admin" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#333333]">
        <div>
          <h1 className="text-2xl font-bold text-[#faf9f6] font-heading">
            Hardware Categories
          </h1>
          <p className="text-xs text-[#868684] mt-0.5">
            Organize products into hierarchical categories and store navigation tags.
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          onClick={handleOpenCreate}
          leftIcon={<Plus className="h-4 w-4" />}
        >
          Add Category
        </Button>
      </div>

      <div className="bg-[#121212] rounded-[16px] border border-[#333333] shadow-xs overflow-hidden">
        <table className="w-full text-left text-xs divide-y divide-[#333333]">
          <thead className="bg-[#000000] text-[#b4b4b2] font-bold">
            <tr>
              <th className="px-6 py-3.5">Category Name</th>
              <th className="px-6 py-3.5">Slug</th>
              <th className="px-6 py-3.5">Description</th>
              <th className="px-6 py-3.5">Products</th>
              <th className="px-6 py-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#333333]">
            {categories.map((cat) => (
              <tr key={cat.id} className="hover:bg-[#000000]">
                <td className="px-6 py-4 font-semibold text-[#faf9f6]">
                  {cat.name}
                </td>
                <td className="px-6 py-4 font-mono text-[#868684]">
                  {cat.slug}
                </td>
                <td className="px-6 py-4 text-[#868684] max-w-sm truncate">
                  {cat.description}
                </td>
                <td className="px-6 py-4 font-semibold text-[#faf9f6]">
                  {cat.productCount} items
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button
                    onClick={() => handleOpenEdit(cat)}
                    className="p-1 text-[#868684] hover:text-[#faf9f6]"
                    title="Edit category"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(cat.id, cat.name)}
                    className="p-1 text-[#DC2626] hover:text-[#B91C1C]"
                    title="Delete category"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingCategory ? 'Edit Category' : 'Create New Category'}
      >
        <form onSubmit={handleSave} className="space-y-4">
          <Input
            label="Category Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>
            <label className="block text-xs font-semibold text-[#faf9f6] mb-1.5">
              Description
            </label>
            <textarea
              rows={3}
              className="w-full text-xs p-2.5 border border-[#333333] rounded-[8px]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex justify-end gap-2 pt-2 border-t border-[#333333]">
            <Button type="button" variant="outline" size="sm" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm">
              Save Category
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
export default AdminCategoriesPage
