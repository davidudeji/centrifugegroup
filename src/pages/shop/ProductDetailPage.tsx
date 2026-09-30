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
      <div className="py-32 text-center text-xs text-[#868684]">
        Loading product specifications...
      </div>
    )
  }

  if (!product) {
    return (
      <div className="py-32 text-center space-y-4">
        <h2 className="text-xl font-bold text-[#faf9f6]">Product Not Found</h2>
        <p className="text-xs text-[#868684]">The requested hardware product does not exist.</p>
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
      <section className="bg-[#121212] border-b border-[#333333] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#868684]">
            <Link to="/shop" className="hover:text-[#faf9f6] flex items-center gap-1">
              <ArrowLeft className="h-3 w-3" />
              <span>Hardware Store</span>
            </Link>
            <span>/</span>
            <span>{product.categoryName || 'Hardware'}</span>
            <span>/</span>
            <span className="text-[#faf9f6] font-semibold truncate max-w-xs">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Main Product Layout */}
      <section className="py-12 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[#121212] p-6 sm:p-10 rounded-[18px] border border-[#333333] shadow-xs">
            {/* Gallery Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="h-80 sm:h-[420px] rounded-[12px] bg-[#000000] border border-[#333333] p-6 flex items-center justify-center overflow-hidden">
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
                      className={`h-20 w-20 rounded-[8px] bg-[#000000] p-2 border transition-all ${
                        selectedImage === img
                          ? 'border-[#f0b66d] ring-2 ring-[#f0b66d]/20'
                          : 'border-[#333333] hover:border-[#333333]'
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
                  <span className="text-xs font-mono font-bold text-[#868684] uppercase">
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

                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#faf9f6] font-heading mt-2">
                  {product.name}
                </h1>

                <p className="text-sm text-[#868684] mt-2 leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Price display */}
              <div className="pt-2 pb-4 border-y border-[#333333]">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-[#faf9f6] font-heading">
                    ₦{product.price.toLocaleString()}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-sm text-[#868684] line-through font-mono">
                      ₦{product.compareAtPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-[#868684] mt-1">
                  Includes 7.5% statutory VAT. Free freight delivery on orders over ₦2,000,000.
                </p>
              </div>

              {/* Quantity Selector & Purchase Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-[#faf9f6]">Quantity:</span>
                  <div className="flex items-center border border-[#333333] rounded-[8px] bg-[#121212]">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-[#1e1e1d] text-[#868684] transition-colors rounded-l-[7px]"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="px-4 text-xs font-bold text-[#faf9f6]">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                      className="p-2 hover:bg-[#1e1e1d] text-[#868684] transition-colors rounded-r-[7px]"
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
                        : 'border-[#333333] text-[#868684] hover:text-[#faf9f6] hover:bg-[#000000]'
                    }`}
                    aria-label="Wishlist toggle"
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Trust & Guarantee Badges */}
              <div className="pt-6 border-t border-[#333333] grid grid-cols-2 gap-4 text-xs text-[#b4b4b2]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#16A34A] shrink-0" />
                  <span>24-Month Manufacturer Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-[#f0b66d] shrink-0" />
                  <span>Nationwide Insured Freight Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Technical Specifications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-[#121212] p-8 rounded-[16px] border border-[#333333] space-y-4">
              <h3 className="text-lg font-bold text-[#faf9f6] font-heading">
                Detailed Product Overview
              </h3>
              <p className="text-sm text-[#b4b4b2] leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#121212] p-8 rounded-[16px] border border-[#333333] space-y-4">
              <h3 className="text-lg font-bold text-[#faf9f6] font-heading">
                Technical Specifications
              </h3>
              <div className="divide-y divide-[#333333] text-xs">
                {Object.entries(product.specifications || {}).map(([key, value]) => (
                  <div key={key} className="py-2.5 flex justify-between">
                    <span className="font-medium text-[#868684]">{key}</span>
                    <span className="font-semibold text-[#faf9f6] text-right font-mono">{value}</span>
                  </div>
                ))}
                {product.weight && (
                  <div className="py-2.5 flex justify-between">
                    <span className="font-medium text-[#868684]">Weight</span>
                    <span className="font-semibold text-[#faf9f6] font-mono">{product.weight}</span>
                  </div>
                )}
                {product.dimensions && (
                  <div className="py-2.5 flex justify-between">
                    <span className="font-medium text-[#868684]">Dimensions</span>
                    <span className="font-semibold text-[#faf9f6] font-mono">{product.dimensions}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#faf9f6] font-heading">
                Related Commercial Systems
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/shop/product/${rel.slug}`}
                    className="bg-[#121212] p-5 rounded-[12px] border border-[#333333] hover:border-[#333333] transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-40 flex items-center justify-center p-2 mb-3 bg-[#000000] rounded-[8px]">
                        <img src={rel.images[0]} alt={rel.name} className="max-h-full max-w-full object-contain" />
                      </div>
                      <h4 className="text-xs font-bold text-[#faf9f6] group-hover:text-[#f0b66d] transition-colors line-clamp-2">
                        {rel.name}
                      </h4>
                    </div>
                    <div className="mt-4 pt-2 border-t border-[#333333] flex items-center justify-between text-xs">
                      <span className="font-bold text-[#faf9f6]">₦{rel.price.toLocaleString()}</span>
                      <span className="text-[#f0b66d] font-semibold">View →</span>
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
