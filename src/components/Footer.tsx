import { Mail, MapPin, Phone, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-burgundy flex items-center justify-center">
                <span className="font-display font-bold text-xl">E</span>
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-wide">EVGIMA</span>
                <span className="block text-[10px] tracking-[0.2em] text-white/40 uppercase">Cosmétiques</span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md mb-8">
              EVGIMA vous apporte le meilleur de la cosmétique française,
              sélectionné avec amour par nos sœurs en France et livré
              partout au Sénégal.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <Heart className="w-4 h-4 text-gold" />
              <span>Trois sœurs, un rêve commun</span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6">Liens</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Accueil' },
                { to: '/produits', label: 'Produits' },
                { to: '/#histoire', label: 'Notre histoire' },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-white/50 hover:text-gold transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>Sénégal — France</span>
              </li>
              <li>
                <a href="tel:+221XXXXXXXXX" className="flex items-center gap-3 text-white/50 hover:text-gold transition-colors text-sm">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <span>Sénégal : +221 XX XXX XX XX</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@evgima.com" className="flex items-center gap-3 text-white/50 hover:text-gold transition-colors text-sm">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <span>contact@evgima.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/30">
            <span>© {currentYear} EVGIMA. Tous droits réservés.</span>
            <span>Cosmétiques français — Livrés au Sénégal avec ❤️</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
