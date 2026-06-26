import { Link } from 'react-router-dom'
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Cart() {
  const { items, removeItem, updateQuantity, total, itemCount, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-28 pb-20 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-rose/50 flex items-center justify-center">
            <ShoppingBag className="w-12 h-12 text-sage" />
          </div>
          <h2 className="font-display text-3xl text-charcoal mb-3">Votre panier est vide</h2>
          <p className="text-sage mb-8">Ajoutez vos produits préférés et revenez ici pour finaliser.</p>
          <Link
            to="/produits"
            className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-light text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-burgundy/20"
          >
            <ArrowLeft className="w-5 h-5" />
            Découvrir nos produits
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-gold font-medium tracking-widest text-sm uppercase">Mon panier</span>
            <h1 className="font-display text-3xl text-charcoal mt-2">
              {itemCount} article{itemCount > 1 ? 's' : ''}
            </h1>
          </div>
          <button onClick={clearCart} className="text-sm text-sage hover:text-red-500 transition-colors">
            Vider le panier
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-5 bg-white rounded-2xl p-5 shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-gold font-medium uppercase tracking-wider">{item.category}</span>
                  <h3 className="font-display text-lg text-charcoal mt-0.5 mb-1">{item.name}</h3>
                  <span className="text-burgundy font-semibold">{item.price.toLocaleString()} FCFA</span>

                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center border border-charcoal/10 rounded-full">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:text-burgundy transition-colors pl-3"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 font-medium min-w-[32px] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:text-burgundy transition-colors pr-3"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-sage/50 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-lg text-charcoal">{(item.price * item.quantity).toLocaleString()} F</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
            <h3 className="font-display text-xl text-charcoal mb-6">Récapitulatif</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sage">
                <span>Sous-total</span>
                <span className="text-charcoal">{total.toLocaleString()} FCFA</span>
              </div>
              <div className="flex justify-between text-sage">
                <span>Livraison</span>
                <span className="text-charcoal">À confirmer</span>
              </div>
              <div className="border-t border-charcoal/10 pt-4 flex justify-between font-bold text-xl text-charcoal">
                <span>Total</span>
                <span className="text-burgundy">{total.toLocaleString()} FCFA</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="block w-full bg-burgundy hover:bg-burgundy-light text-white text-center py-4 rounded-full font-medium transition-all shadow-lg shadow-burgundy/20"
            >
              Commander
            </Link>
            <Link
              to="/produits"
              className="block w-full text-center py-3 mt-2 text-sage hover:text-burgundy transition-colors text-sm"
            >
              Continuer mes achats
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
