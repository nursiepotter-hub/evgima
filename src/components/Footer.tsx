import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer id="contact" className="bg-burgundy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center">
                <span className="font-display font-bold text-xl text-burgundy-dark">E</span>
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-wide text-white">EVGIMA</span>
                <span className="block text-[10px] tracking-[0.2em] text-white/40 uppercase">Cosmétiques Français</span>
              </div>
            </div>
            <p className="text-white/50 leading-relaxed mb-6 text-sm italic">
              « L'élégance française, pour vous. »
            </p>
            <div className="space-y-3">
              {[
                { initial: 'E', name: 'Eva & Gigi', loc: 'Paris, France', role: 'Sélection & approvisionnement' },
                { initial: 'M', name: 'Martine', loc: 'Dakar, Sénégal', role: 'Réception & livraison' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                  <div className="text-sm text-white/60 leading-snug">
                    <strong className="text-white font-medium">{s.name}</strong> — {s.loc}<br />
                    {s.role}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-white text-lg mb-6">Boutique</h4>
            <ul className="space-y-3">
              {[
                { to: '/produits', label: 'Tous les produits' },
                { to: '/', label: 'Soin du corps' },
                { to: '/', label: 'Soin du visage' },
                { to: '/', label: 'Coffrets cadeaux' },
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
            <h4 className="font-display text-white text-lg mb-6">Informations</h4>
            <ul className="space-y-3">
              {['Livraison & délais', 'Politique de retour', 'Authenticité', 'Mentions légales'].map((l) => (
                <li key={l} className="text-white/50 text-sm cursor-pointer hover:text-gold transition-colors">
                  {l}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-white text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>WhatsApp : +221 XX XXX XX XX</span>
              </li>
              <li>
                <a href="mailto:contact@evgima.sn" className="flex items-center gap-3 text-white/50 hover:text-gold transition-colors text-sm">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <span>contact@evgima.sn</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>Dakar, Sénégal</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/30">
            <span>© {currentYear} EVGIMA. Tous droits réservés.</span>
            <span className="flex items-center gap-2">
              <span>🇫🇷 Produits français</span>
              <span>·</span>
              <span>🇸🇳 Livraison Sénégal</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
