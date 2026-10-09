import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { productService } from '../../services/productService'
import { useCartStore } from '../../stores/cartStore'
import { useUIStore } from '../../stores/uiStore'
import type { Product } from '../../types'
import { mockCategories } from '../../data/mockData'
import { Search, ShoppingBag } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { Badge } from '../../components/ui/Badge'

export const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [sortBy, setSortBy] = useState<string>('featured')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { addItem } = useCartStore()
  const { addToast } = useUIStore()

  useEffect(() => {
    productService.getProducts().then((data) => {
      setProducts(data)
      setIsLoading(false)
    })
  }, [])

  // Filter and sort
  const filteredProducts = products
    .filter((p) => {
      const matchesCategory =
        selectedCategory === 'all' || p.categoryId === selectedCategory
      const matchesSearch =
        searchQuery === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
    })

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 1)
    addToast({
      title: 'Added to Cart',
      description: `${product.name} has been added to your hardware cart.`,
      type: 'success',
    })
  }

  return (
    <div className="w-full text-left">
      <SEO
        title="Centrifuge Hardware Store | Inverters, UPS & Solar Systems"
        description="Industrial pure sine wave inverters, online UPS backup systems, and MPPT solar charge controllers."
      />

      {/* Header Banner */}
      <section className="bg-[#0F2C59] text-white py-14 sm:py-20 border-b border-[#1E3A8A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold text-sky-100">
              Demonstration inventory
            </p>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              Technology for the way you work.
            </h1>
            <p className="text-sm sm:text-base text-[#A0AEC0] leading-relaxed">
              Industrial-grade pure sine wave hybrid inverters, online double-conversion UPS units, MPPT solar controllers, and ruggedized IoT fleet telemetry gateways.
            </p>
          </div>
        </div>
      </section>

      {/* Store Container */}
      <section className="py-12 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls Bar: Search, Category Filter, and Sorting */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E2E8F0]">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`text-xs px-3 py-1.5 rounded-[6px] font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-[#008DDA] text-white font-semibold shadow-xs'
                    : 'bg-[#FFFFFF] text-[#64748B] border border-[#E2E8F0] hover:bg-[#F5F7FA]'
                }`}
              >
                All Products ({products.length})
              </button>
              {mockCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs px-3 py-1.5 rounded-[6px] font-medium transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-[#008DDA] text-white font-semibold shadow-xs'
                      : 'bg-[#FFFFFF] text-[#64748B] border border-[#E2E8F0] hover:bg-[#F5F7FA]'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search and Sort Controls */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <div className="w-full sm:w-64">
                <Input
                  placeholder="Search products & SKUs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  leftIcon={<Search className="h-4 w-4" />}
                />
              </div>

              <div className="shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#FFFFFF] text-xs text-[#1A1A1A] border border-[#E2E8F0] rounded-[8px] py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#008DDA]/30"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {isLoading ? (
            <div className="py-20 text-center text-xs text-[#64748B]">
              Loading commercial catalog...
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-20 text-center bg-[#FFFFFF] rounded-[12px] border border-[#E2E8F0] p-8 space-y-3">
              <p className="text-sm font-semibold text-[#1A1A1A]">No products found</p>
              <p className="text-xs text-[#64748B]">Try clearing your search query or selecting a different category.</p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchQuery('')
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((prod) => (
                <Link
                  key={prod.id}
                  to={`/shop/product/${prod.slug}`}
                  className="bg-[#FFFFFF] rounded-[14px] border border-[#E2E8F0] overflow-hidden flex flex-col justify-between hover:border-[#E2E8F0] hover:shadow-md transition-all group"
                >
                  <div>
                    {/* Image Area */}
                    <div className="h-52 relative overflow-hidden bg-[#F5F7FA] p-4 flex items-center justify-center border-b border-[#E2E8F0]/80">
                      <img
                        src={prod.images[0]}
                        alt={prod.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-104 transition-transform duration-300"
                      />
                      <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
                        {prod.stockQuantity <= prod.lowStockThreshold ? (
                          <Badge variant="warning" size="sm" dot>
                            Low Stock ({prod.stockQuantity})
                          </Badge>
                        ) : (
                          <Badge variant="success" size="sm" dot>
                            In Stock
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center justify-between text-[11px] text-[#64748B] font-mono">
                        <span>{prod.brand}</span>
                        <span>{prod.sku}</span>
                      </div>

                      <h3 className="text-sm font-bold text-[#1A1A1A] font-heading mt-1.5 group-hover:text-[#008DDA] transition-colors line-clamp-2 leading-snug">
                        {prod.name}
                      </h3>

                      <p className="text-[11px] text-[#64748B] mt-1.5 line-clamp-2 leading-relaxed">
                        {prod.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Price & Add to Cart Footer */}
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-[#E2E8F0]/80 flex items-center justify-between">
                      <div>
                        <div className="text-base font-extrabold text-[#1A1A1A] font-heading">
                          ₦{prod.price.toLocaleString()}
                        </div>
                        {prod.compareAtPrice && (
                          <div className="text-[10px] text-[#64748B] line-through font-mono">
                            ₦{prod.compareAtPrice.toLocaleString()}
                          </div>
                        )}
                      </div>

                      <Button
                        variant="primary"
                        size="sm"
                        onClick={(e) => handleAddToCart(prod, e)}
                        leftIcon={<ShoppingBag className="h-3.5 w-3.5" />}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
export default ShopPage
