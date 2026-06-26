import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Lock } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Checkout() {
  const { items, total, clearCart } = useCart()
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({
    nom: '', prenom: '', telephone: '', ville: '', quartier: '', email: '',
  })
  const [payment, setPayment] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1500))
    setSubmitting(false)
    setSuccess(true)
    clearCart()
  }

  if (items.length === 0 && !success) {
    navigate('/panier')
    return null
  }

  if (success) {
    return (
      <div className="min-h-screen pt-28 pb-20 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="font-display text-3xl text-charcoal mb-3">Commande confirmée !</h2>
          <p className="text-sage mb-8">
            Merci pour votre commande ! Vous allez recevoir un SMS de confirmation.
            Nous vous contacterons pour organiser la livraison.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-burgundy hover:bg-burgundy-light text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-burgundy/20"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/panier')} className="flex items-center gap-2 text-sage hover:text-burgundy transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          Retour au panier
        </button>

        <div className="grid lg:grid-cols-5 gap-10">
          <form onSubmit={handleSubmit} className="lg:col-span-3">
            <span className="text-gold font-medium tracking-widest text-sm uppercase">Finaliser</span>
            <h1 className="font-display text-3xl text-charcoal mt-2 mb-8">Livraison & paiement</h1>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal/70 mb-2">Nom *</label>
                  <input name="nom" value={form.nom} onChange={handleChange} required
                    className="w-full px-4 py-3.5 rounded-xl border border-charcoal/10 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none bg-ivory/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal/70 mb-2">Prénom *</label>
                  <input name="prenom" value={form.prenom} onChange={handleChange} required
                    className="w-full px-4 py-3.5 rounded-xl border border-charcoal/10 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none bg-ivory/50" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-2">Téléphone *</label>
                <input name="telephone" value={form.telephone} onChange={handleChange} required placeholder="77 XXX XX XX"
                  className="w-full px-4 py-3.5 rounded-xl border border-charcoal/10 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none bg-ivory/50" />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-2">Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-charcoal/10 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none bg-ivory/50" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal/70 mb-2">Ville *</label>
                  <input name="ville" value={form.ville} onChange={handleChange} required
                    className="w-full px-4 py-3.5 rounded-xl border border-charcoal/10 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none bg-ivory/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal/70 mb-2">Quartier *</label>
                  <input name="quartier" value={form.quartier} onChange={handleChange} required
                    className="w-full px-4 py-3.5 rounded-xl border border-charcoal/10 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none bg-ivory/50" />
                </div>
              </div>

              {/* Paiement */}
              <div>
                <label className="block text-sm font-medium text-charcoal/70 mb-3">Mode de paiement *</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'orange', label: 'Orange Money', icon: '📱' },
                    { value: 'wave', label: 'Wave', icon: '🌊' },
                    { value: 'free', label: 'FreeMoney', icon: '💳' },
                  ].map((m) => (
                    <button
                      key={m.value}
                      type="button"
                      onClick={() => setPayment(m.value)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                        payment === m.value
                          ? 'border-gold bg-gold/5'
                          : 'border-charcoal/10 hover:border-gold/50'
                      }`}
                    >
                      <span className="text-2xl">{m.icon}</span>
                      <span className="text-xs font-medium text-charcoal/70">{m.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting || !payment}
              className="w-full bg-burgundy hover:bg-burgundy-light disabled:opacity-50 text-white py-4 rounded-full font-medium text-lg transition-all mt-6 shadow-lg shadow-burgundy/20 flex items-center justify-center gap-2"
            >
              <Lock className="w-5 h-5" />
              {submitting ? 'Traitement...' : `Payer ${total.toLocaleString()} FCFA`}
            </button>

            <p className="text-xs text-sage/60 text-center mt-4">
              Paiement sécurisé via Orange Money, Wave ou FreeMoney
            </p>
          </form>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm sticky top-28">
              <h3 className="font-display text-xl text-charcoal mb-6">Votre commande</h3>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-lg" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-charcoal text-sm truncate">{item.name}</p>
                      <p className="text-xs text-sage">x{item.quantity}</p>
                    </div>
                    <span className="text-sm font-semibold text-charcoal whitespace-nowrap">{(item.price * item.quantity).toLocaleString()} F</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-charcoal/10 pt-4 space-y-2">
                <div className="flex justify-between text-sage text-sm">
                  <span>Sous-total</span>
                  <span>{total.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between text-sage text-sm">
                  <span>Livraison</span>
                  <span className="text-burgundy">À confirmer</span>
                </div>
                <div className="flex justify-between font-bold text-charcoal text-lg border-t border-charcoal/10 pt-3 mt-3">
                  <span>Total</span>
                  <span className="text-burgundy">{total.toLocaleString()} FCFA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
