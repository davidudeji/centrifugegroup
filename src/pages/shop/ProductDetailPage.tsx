import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { SEO } from '../../components/ui/SEO'
import { productService } from '../../services/productService'
import { useCartStore } from '../../stores/cartStore'
import { useUIStore } from '../../stores/uiStore'
import type { Product } from '../../types'
import {
  ArrowLeft,
  ShoppingBag,
  Heart,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Minus,
  Plus,
  Zap,
} from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const { addItem } = useCartStore()
  const { addToast } = useUIStore()

  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [selectedImage, setSelectedImage] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false)

  useEffect(() => {
    if (!slug) return
    setIsLoading(true)
    productService.getProductBySlug(slug).then((prod) => {
      setProduct(prod)
      if (prod) {
        setSelectedImage(prod.images[0])
        productService.getProducts({ categoryId: prod.categoryId }).then((all) => {
          setRelatedProducts(all.filter((p) => p.id !== prod.id).slice(0, 3))
        })
      }
      setIsLoading(false)
    })
  }, [slug])

  if (isLoading) {
    return (
      <div className="py-32 text-center text-xs text-[#64748B]">
        Loading product specifications...
      </div>
    )
  }

  if (!product) {
    return (
      <div className="py-32 text-center space-y-4">
        <h2 className="text-xl font-bold text-[#111827]">Product Not Found</h2>
        <p className="text-xs text-[#64748B]">The requested hardware product does not exist.</p>
        <Link to="/shop">
          <Button variant="dark" size="sm">Back to Store</Button>
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
    addToast({
      title: 'Added to Cart',
      description: `${quantity}x ${product.name} added to your cart.`,
      type: 'success',
    })
  }

  const handleBuyNow = () => {
    addItem(product, quantity)
    navigate('/checkout')
  }

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    addToast({
      title: isWishlisted ? 'Removed from Wishlist' : 'Saved to Wishlist',
      description: `${product.name} has been updated.`,
      type: 'info',
    })
  }

  return (
    <div className="w-full text-left">
      <SEO
        title={`${product.name} | Centrifuge Store`}
        description={product.shortDescription}
      />

      {/* Breadcrumb Bar */}
      <section className="bg-white border-b border-[#E2E8F0] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#64748B]">
            <Link to="/shop" className="hover:text-[#0B1F33] flex items-center gap-1">
              <ArrowLeft className="h-3 w-3" />
              <span>Hardware Store</span>
            </Link>
            <span>/</span>
            <span>{product.categoryName || 'Hardware'}</span>
            <span>/</span>
            <span className="text-[#111827] font-semibold truncate max-w-xs">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Main Product Layout */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white p-6 sm:p-10 rounded-[18px] border border-[#E2E8F0] shadow-xs">
            {/* Gallery Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="h-80 sm:h-[420px] rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] p-6 flex items-center justify-center overflow-hidden">
                <img
                  src={selectedImage || product.images[0]}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(img)}
                      className={`h-20 w-20 rounded-[8px] bg-[#F8FAFC] p-2 border transition-all ${
                        selectedImage === img
                          ? 'border-[#16C7D9] ring-2 ring-[#16C7D9]/20'
                          : 'border-[#E2E8F0] hover:border-[#CBD5E1]'
                      }`}
                    >
                      <img src={img} alt="" className="h-full w-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Meta & Actions Column */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#64748B] uppercase">
                    {product.brand} · SKU: {product.sku}
                  </span>
                  {product.stockQuantity <= product.lowStockThreshold ? (
                    <Badge variant="warning" size="sm" dot>
                      Low Stock ({product.stockQuantity} remaining)
                    </Badge>
                  ) : (
                    <Badge variant="success" size="sm" dot>
                      In Stock ({product.stockQuantity} units)
                    </Badge>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] font-heading mt-2">
                  {product.name}
                </h1>

                <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Price display */}
              <div className="pt-2 pb-4 border-y border-[#E2E8F0]">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-[#0B1F33] font-heading">
                    ₦{product.price.toLocaleString()}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-sm text-[#94A3B8] line-through font-mono">
                      ₦{product.compareAtPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Includes 7.5% statutory VAT. Free freight delivery on orders over ₦2,000,000.
                </p>
              </div>

              {/* Quantity Selector & Purchase Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-[#111827]">Quantity:</span>
                  <div className="flex items-center border border-[#CBD5E1] rounded-[8px] bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-[#F1F5F9] text-[#64748B] transition-colors rounded-l-[7px]"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="px-4 text-xs font-bold text-[#111827]">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                      className="p-2 hover:bg-[#F1F5F9] text-[#64748B] transition-colors rounded-r-[7px]"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleAddToCart}
                    leftIcon={<ShoppingBag className="h-4 w-4" />}
                  >
                    Add to Cart
                  </Button>

                  <Button
                    variant="dark"
                    size="lg"
                    onClick={handleBuyNow}
                    leftIcon={<Zap className="h-4 w-4" />}
                  >
                    Buy Now
                  </Button>

                  <button
                    onClick={toggleWishlist}
                    className={`p-2.5 rounded-[8px] border transition-colors ${
                      isWishlisted
                        ? 'border-[#DC2626] bg-[#FEE2E2] text-[#DC2626]'
                        : 'border-[#CBD5E1] text-[#64748B] hover:text-[#0B1F33] hover:bg-[#F8FAFC]'
                    }`}
                    aria-label="Wishlist toggle"
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Trust & Guarantee Badges */}
              <div className="pt-6 border-t border-[#E2E8F0] grid grid-cols-2 gap-4 text-xs text-[#475569]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#16A34A] shrink-0" />
                  <span>24-Month Manufacturer Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-[#16C7D9] shrink-0" />
                  <span>Nationwide Insured Freight Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Technical Specifications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-white p-8 rounded-[16px] border border-[#E2E8F0] space-y-4">
              <h3 className="text-lg font-bold text-[#0B1F33] font-heading">
                Detailed Product Overview
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="lg:col-span-5 bg-white p-8 rounded-[16px] border border-[#E2E8F0] space-y-4">
              <h3 className="text-lg font-bold text-[#0B1F33] font-heading">
                Technical Specifications
              </h3>
              <div className="divide-y divide-[#E2E8F0] text-xs">
                {Object.entries(product.specifications || {}).map(([key, value]) => (
                  <div key={key} className="py-2.5 flex justify-between">
                    <span className="font-medium text-[#64748B]">{key}</span>
                    <span className="font-semibold text-[#111827] text-right font-mono">{value}</span>
                  </div>
                ))}
                {product.weight && (
                  <div className="py-2.5 flex justify-between">
                    <span className="font-medium text-[#64748B]">Weight</span>
                    <span className="font-semibold text-[#111827] font-mono">{product.weight}</span>
                  </div>
                )}
                {product.dimensions && (
                  <div className="py-2.5 flex justify-between">
                    <span className="font-medium text-[#64748B]">Dimensions</span>
                    <span className="font-semibold text-[#111827] font-mono">{product.dimensions}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#0B1F33] font-heading">
                Related Commercial Systems
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/shop/product/${rel.slug}`}
                    className="bg-white p-5 rounded-[12px] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-40 flex items-center justify-center p-2 mb-3 bg-[#F8FAFC] rounded-[8px]">
                        <img src={rel.images[0]} alt={rel.name} className="max-h-full max-w-full object-contain" />
                      </div>
                      <h4 className="text-xs font-bold text-[#111827] group-hover:text-[#16C7D9] transition-colors line-clamp-2">
                        {rel.name}
                      </h4>
                    </div>
                    <div className="mt-4 pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                      <span className="font-bold text-[#0B1F33]">₦{rel.price.toLocaleString()}</span>
                      <span className="text-[#16C7D9] font-semibold">View →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
export default ProductDetailPage
