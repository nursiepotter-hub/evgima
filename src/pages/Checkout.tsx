import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreditCard, ArrowLeft, CheckCircle } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Checkout() {
  const { items, total, clearCart } = useCart()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [form, setForm] = useState({
    nom: '', prenom: '', telephone: '', adresse: '', ville: '', email: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Intégration paiement à venir (CinetPay / PayDunya)
    await new Promise(r => setTimeout(r, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    clearCart()
  }

  if (items.length === 0 && !isSuccess) {
    navigate('/panier')
    return null
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-accent mb-3">Commande confirmée !</h2>
          <p className="text-accent/60 mb-8">
            Merci pour votre commande ! Vous allez recevoir un message de confirmation par SMS ou email.
            Nous vous contacterons pour confirmer la livraison.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/panier')} className="flex items-center gap-2 text-accent/60 hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          Retour au panier
        </button>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3">
            <h1 className="text-3xl font-bold text-accent mb-8">Finaliser la commande</h1>

            <div className="bg-white rounded-2xl p-6 shadow-sm space-y-6">
              <h3 className="font-semibold text-accent">Informations de livraison</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-accent/70 mb-2">Nom *</label>
                  <input name="nom" value={form.nom} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-xl border border-accent/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-accent/70 mb-2">Prénom *</label>
                  <input name="prenom" value={form.prenom} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-xl border border-accent/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-accent/70 mb-2">Téléphone * (Orange Money, Wave ou FreeMoney)</label>
                <input name="telephone" value={form.telephone} onChange={handleChange} required placeholder="77 XXX XX XX"
                  className="w-full px-4 py-3 rounded-xl border border-accent/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-accent/70 mb-2">Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-accent/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-accent/70 mb-2">Adresse de livraison *</label>
                <input name="adresse" value={form.adresse} onChange={handleChange} required placeholder="Ville, quartier, point de repère"
                  className="w-full px-4 py-3 rounded-xl border border-accent/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-accent/70 mb-2">Ville *</label>
                <input name="ville" value={form.ville} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-xl border border-accent/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 text-white py-4 rounded-xl font-semibold text-lg transition-all mt-6 shadow-lg shadow-primary/25"
            >
              {isSubmitting ? 'Traitement en cours...' : `Payer ${total.toLocaleString()} FCFA`}
            </button>

            <p className="text-xs text-accent/40 text-center mt-4">
              Paiement sécurisé via Orange Money, Wave ou FreeMoney.
              Vous serez redirigé après confirmation.
            </p>
          </form>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h3 className="font-bold text-accent text-lg mb-4">Votre commande</h3>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-lg" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-accent truncate">{item.name}</p>
                      <p className="text-xs text-accent/50">x{item.quantity}</p>
                    </div>
                    <span className="text-sm font-semibold text-accent">{(item.price * item.quantity).toLocaleString()} F</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-accent/70 text-sm">
                  <span>Sous-total</span>
                  <span>{total.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between text-accent/70 text-sm">
                  <span>Livraison</span>
                  <span className="text-primary">À confirmer</span>
                </div>
                <div className="flex justify-between font-bold text-accent text-lg border-t pt-2 mt-2">
                  <span>Total</span>
                  <span>{total.toLocaleString()} FCFA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
