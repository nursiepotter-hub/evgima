import { Link } from 'react-router-dom'
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Cart() {
  const { items, removeItem, updateQuantity, total, itemCount, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-20 h-20 text-accent/20 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-accent mb-3">Votre panier est vide</h2>
          <p className="text-accent/60 mb-8">Découvrez nos produits et ajoutez-les à votre panier.</p>
          <Link
            to="/produits"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Voir les produits
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-accent">Mon panier ({itemCount} articles)</h1>
          <button onClick={clearCart} className="text-sm text-red-500 hover:text-red-600 transition-colors">
            Vider le panier
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white rounded-2xl p-4 shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-primary/60 font-medium">{item.category}</span>
                  <h3 className="font-semibold text-accent truncate">{item.name}</h3>
                  <span className="text-primary font-bold">{item.price.toLocaleString()} FCFA</span>

                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center border border-accent/10 rounded-xl">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:text-primary transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 font-medium min-w-[40px] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:text-primary transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-accent/40 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-accent">{(item.price * item.quantity).toLocaleString()} FCFA</span>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
            <h3 className="font-bold text-accent text-lg mb-4">Récapitulatif</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-accent/70">
                <span>Sous-total</span>
                <span>{total.toLocaleString()} FCFA</span>
              </div>
              <div className="flex justify-between text-accent/70">
                <span>Livraison</span>
                <span>Calculée à la validation</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-accent text-lg">
                <span>Total</span>
                <span>{total.toLocaleString()} FCFA</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="block w-full bg-primary hover:bg-primary-dark text-white text-center py-4 rounded-xl font-semibold transition-all shadow-lg shadow-primary/25"
            >
              Commander
            </Link>
            <Link
              to="/produits"
              className="block w-full text-center py-3 mt-2 text-accent/60 hover:text-primary transition-colors text-sm"
            >
              Continuer mes achats
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
