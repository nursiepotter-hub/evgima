import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Truck, CreditCard } from 'lucide-react'
const categories = [
  { name: 'Gels Douche', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400' },
  { name: 'Soins Corps', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400' },
  { name: 'Eaux Thermales', image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400' },
  { name: 'Coffrets', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center bg-gradient-to-br from-rose-pale via-white to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Nouvelle boutique en ligne
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent mb-6 leading-tight">
              Votre bien-être{' '}
              <span className="text-primary">au Sénégal</span>
            </h1>
            <p className="text-lg text-accent/70 mb-8 leading-relaxed">
              Découvrez notre sélection de cosmétiques et soins pour la peau.
              Livraison rapide partout au Sénégal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/produits"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-primary/25"
              >
                Voir tous les produits
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent mb-4">Nos catégories</h2>
            <p className="text-accent/60">Explorez notre gamme de produits cosmétiques</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to="/produits"
                className="group relative h-48 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-semibold text-lg">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-rose-pale/50">
              <Truck className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-accent mb-2">Livraison au Sénégal</h3>
              <p className="text-accent/60 text-sm">Partout au Sénégal, rapide et fiable</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-rose-pale/50">
              <CreditCard className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-accent mb-2">Paiement sécurisé</h3>
              <p className="text-accent/60 text-sm">Orange Money, Wave, FreeMoney</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-rose-pale/50">
              <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-accent mb-2">Produits authentiques</h3>
              <p className="text-accent/60 text-sm">100% originaux, sélectionnés avec soin</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
