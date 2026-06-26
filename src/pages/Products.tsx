import { useState } from 'react'
import { Search, ShoppingBag, X, Check } from 'lucide-react'
import { products, type Product } from '@/data/products'
import { useCart } from '@/context/CartContext'

const categories = ['Tous', 'Gels Douche', 'Soins Corps', 'Eaux Thermales', 'Soins Visage', 'Accessoires', 'Coffrets']

export default function Products() {
  const [active, setActive] = useState('Tous')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Product | null>(null)
  const { addItem } = useCart()

  const filtered = products.filter(p => {
    const matchCat = active === 'Tous' || p.category === active
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <span className="text-gold font-medium tracking-widest text-sm uppercase">Notre sélection</span>
          <h1 className="font-display text-4xl lg:text-5xl text-charcoal mt-3 mb-3">
            Tous nos <span className="text-burgundy">produits</span>
          </h1>
          <p className="text-sage">{products.length} produits — Livraison partout au Sénégal</p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sage" />
          <input
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-full border border-charcoal/10 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none bg-white"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? 'bg-burgundy text-white shadow-md shadow-burgundy/20'
                  : 'bg-white text-charcoal/60 hover:text-burgundy border border-charcoal/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-sage text-lg">Aucun produit trouvé</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onClick={() => setSelected(p)} onAdd={() => addItem(p)} />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-ivory rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors z-10"
            >
              <X className="w-5 h-5 text-charcoal/60" />
            </button>
            <div className="grid md:grid-cols-2">
              <div className="aspect-square bg-rose/20 flex items-center justify-center p-8">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-gold font-semibold uppercase tracking-widest">
                    {selected.category}
                  </span>
                  <h2 className="font-display text-2xl text-charcoal mt-2 mb-3 leading-snug">
                    {selected.name}
                  </h2>
                  <p className="text-sage text-sm leading-relaxed mb-6">
                    {selected.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs text-sage">
                      <Check className="w-3.5 h-3.5 text-gold" />
                      Produit 100% authentique, importé de France
                    </div>
                    <div className="flex items-center gap-2 text-xs text-sage">
                      <Check className="w-3.5 h-3.5 text-gold" />
                      Livraison Dakar & régions du Sénégal
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-ivory pt-5">
                  {selected.price > 0 ? (
                    <>
                      <span className="font-display text-2xl font-bold text-burgundy">
                        {selected.price.toLocaleString()} <span className="text-sm font-normal text-sage">FCFA</span>
                      </span>
                      <button
                        onClick={() => { addItem(selected); setSelected(null) }}
                        className="bg-burgundy hover:bg-burgundy-light text-white px-6 py-3 rounded-full text-sm font-medium transition-all shadow-lg shadow-burgundy/20 flex items-center gap-2"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Ajouter
                      </button>
                    </>
                  ) : (
                    <span className="text-sage italic text-sm">Prix à venir</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ProductCard({ product, onClick, onAdd }: { product: Product; onClick: () => void; onAdd: () => void }) {
  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden bg-rose/20">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <button
          onClick={(e) => { e.stopPropagation(); onAdd() }}
          disabled={product.price === 0}
          className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-full text-sm font-medium text-charcoal opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-lg hover:bg-burgundy hover:text-white flex items-center gap-2"
        >
          <ShoppingBag className="w-4 h-4" />
          {product.price > 0 ? 'Ajouter' : 'Bientôt'}
        </button>
      </div>
      <div className="p-4">
        <span className="text-xs text-gold font-medium uppercase tracking-wider">{product.category}</span>
        <h3 className="font-display text-base text-charcoal mt-1 mb-2 line-clamp-2 leading-snug">{product.name}</h3>
        {product.price > 0 ? (
          <span className="text-burgundy font-semibold text-lg">{product.price.toLocaleString()} FCFA</span>
        ) : (
          <span className="text-xs text-sage italic">Prix bientôt disponible</span>
        )}
      </div>
    </div>
  )
}
