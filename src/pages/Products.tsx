import { useState } from 'react'
import { ShoppingCart, Search } from 'lucide-react'
import { products, type Product } from '@/data/products'
import { useCart } from '@/context/CartContext'

const categories = ['Tous', 'Gels Douche', 'Soins Corps', 'Eaux Thermales', 'Soins Visage', 'Accessoires', 'Coffrets']

export default function Products() {
  const [activeCat, setActiveCat] = useState('Tous')
  const [search, setSearch] = useState('')
  const { addItem } = useCart()

  const filtered = products.filter(p => {
    const matchCat = activeCat === 'Tous' || p.category === activeCat
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-accent mb-2">Nos produits</h1>
          <p className="text-accent/60">{products.length} produits disponibles</p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent/40" />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-accent/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-white"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCat === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-accent/70 hover:bg-primary/10 border border-accent/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-accent/50">
            <p className="text-lg">Aucun produit trouvé</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={addItem} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function ProductCard({ product, onAdd }: { product: Product; onAdd: (p: Product) => void }) {
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        {!imgLoaded && (
          <div className="absolute inset-0 bg-secondary/30 animate-pulse" />
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        <button
          onClick={() => onAdd(product)}
          className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
      <div className="p-4">
        <span className="text-xs text-primary/60 font-medium uppercase tracking-wide">{product.category}</span>
        <h3 className="font-semibold text-accent mt-1 mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          {product.price > 0 ? (
            <span className="text-lg font-bold text-primary">{product.price.toLocaleString()} FCFA</span>
          ) : (
            <span className="text-sm text-accent/50 italic">Prix bientôt disponible</span>
          )}
        </div>
      </div>
    </div>
  )
}
