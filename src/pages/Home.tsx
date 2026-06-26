import { Link } from 'react-router-dom'
import { ArrowRight, Star, Truck, Shield, Heart, RefreshCw, Smartphone, MessageCircle } from 'lucide-react'
import { products } from '@/data/products'

const featured = products.filter(p => p.price > 0).slice(0, 4)
const categories = [
  { name: 'Soins Corps', image: products[6].image, count: 4 },
  { name: 'Gels Douche', image: products[1].image, count: 3 },
  { name: 'Eaux Thermales', image: products[7].image, count: 2 },
  { name: 'Coffrets & Accessoires', image: products[0].image, count: 2 },
]

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-ivory via-rose to-sand/30">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0L120 60L60 120L0 60Z' fill='%237a1a2e' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-burgundy/10 text-burgundy px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Heart className="w-4 h-4" />
                Cosmétiques français — Livrés au Sénégal
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-charcoal leading-tight mb-6">
                L'élégance française,{' '}
                <span className="text-burgundy">pour vous</span>
              </h1>
              <p className="text-lg text-sage leading-relaxed mb-8 max-w-lg">
                EVGIMA vous apporte le meilleur de la cosmétique française,
                sélectionné avec amour par nos sœurs en France et livré
                partout au Sénégal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/produits"
                  className="group inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-light text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg shadow-burgundy/20"
                >
                  Nos produits
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#histoire"
                  className="inline-flex items-center justify-center gap-2 border-2 border-charcoal/20 text-charcoal hover:border-burgundy hover:text-burgundy px-8 py-4 rounded-full font-medium transition-all"
                >
                  Notre histoire
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-charcoal/10">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <span className="text-sm text-charcoal/60">Produits 100% authentiques</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-gold" />
                  <span className="text-sm text-charcoal/60">Livraison Sénégal</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600"
                  alt="Cosmétiques de luxe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-rose flex items-center justify-center">
                    <Shield className="w-6 h-6 text-burgundy" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-charcoal">100% authentique</p>
                    <p className="text-xs text-sage">Directement de France</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BANDE DORÉE ===== */}
      <div className="bg-gold py-4 px-6 flex items-center justify-center gap-6 sm:gap-12 overflow-hidden flex-wrap">
        {['🇫🇷 Sélection France', '✦', '🚚 Livraison Sénégal', '✦', '🔒 Paiement sécurisé', '✦', '⭐ 100% authentique'].map((item, i) => (
          <span key={i} className="text-burgundy-dark font-semibold text-xs tracking-widest uppercase whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>

      {/* ===== NOTRE HISTOIRE ===== */}
      <section id="histoire" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-medium tracking-widest text-sm uppercase">Notre histoire</span>
              <h2 className="font-display text-4xl lg:text-5xl text-charcoal mt-4 mb-6">
                Trois sœurs,{' '}
                <span className="text-burgundy">une passion</span>
              </h2>
              <p className="text-sage leading-relaxed mb-4">
                EVGIMA est née d'un constat simple : les cosmétiques français de qualité
                sont difficiles à trouver au Sénégal — ou vendus à des prix prohibitifs.
                Trois sœurs ont décidé de changer cela.
              </p>
              <p className="text-sage leading-relaxed mb-4">
                Basées entre Paris et Dakar, elles ont construit un pont entre deux mondes :
                la rigueur et l'excellence de la cosmétique française d'un côté,
                la chaleur et le dynamisme sénégalais de l'autre.
              </p>
              <p className="text-sage leading-relaxed">
                Chaque produit est sélectionné avec soin, vérifié, et acheminé directement
                depuis la France — <strong>sans intermédiaires</strong>.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { initial: 'E', name: 'Eva', role: 'Paris · Sélection', desc: 'Passionnée de dermatologie, elle choisit chaque produit avec une exigence médicale.' },
                { initial: 'G', name: 'Gigi', role: 'Paris · Achats', desc: 'Coordinatrice des approvisionnements, elle négocie directement avec les fournisseurs.' },
                { initial: 'M', name: 'Martine', role: 'Dakar · Livraison', desc: 'Au Sénégal, elle reçoit, contrôle et livre chaque commande avec le sourire.' },
              ].map((s, i) => (
                <div key={i} className="bg-ivory/80 border border-ivory rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-burgundy to-burgundy-light flex items-center justify-center">
                    <span className="font-display text-xl font-bold text-white">{s.initial}</span>
                  </div>
                  <h3 className="font-display text-lg text-charcoal mb-1">{s.name}</h3>
                  <p className="text-xs text-gold font-semibold tracking-wider uppercase mb-3">{s.role}</p>
                  <p className="text-sm text-sage leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATÉGORIES ===== */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-medium tracking-widest text-sm uppercase">Nos gammes</span>
            <h2 className="font-display text-4xl lg:text-5xl text-charcoal mt-4 mb-6">
              Découvrez nos{' '}
              <span className="text-burgundy">catégories</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to="/produits"
                className="group relative h-72 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl text-white mb-1">{cat.name}</h3>
                  <p className="text-white/70 text-sm">{cat.count} produits</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUITS PHARES ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
            <div>
              <span className="text-gold font-medium tracking-widest text-sm uppercase">Nos best-sellers</span>
              <h2 className="font-display text-4xl lg:text-5xl text-charcoal mt-4">
                Les plus <span className="text-burgundy">populaires</span>
              </h2>
            </div>
            <Link
              to="/produits"
              className="group inline-flex items-center gap-2 text-burgundy hover:text-burgundy-light font-medium transition-colors"
            >
              Voir tout
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== AVANTAGES ===== */}
      <section className="py-20 bg-gradient-to-br from-burgundy to-burgundy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold font-medium tracking-widest text-sm uppercase">Pourquoi EVGIMA</span>
            <h2 className="font-display text-3xl lg:text-4xl text-white mt-4">
              Nos <span className="text-gold">engagements</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Truck, title: 'Livraison Sénégal', desc: 'Dakar, Thiès, Saint-Louis et toutes les régions. Votre commande arrive chez vous, emballée avec soin.' },
              { icon: Shield, title: '100% Authentique', desc: 'Tous nos produits viennent de pharmacies et revendeurs agréés en France. Zéro contrefaçon.' },
              { icon: RefreshCw, title: 'Satisfait ou Remboursé', desc: 'Un problème ? Nous vous remboursons sans condition. Votre confiance est notre priorité.' },
              { icon: Smartphone, title: 'Paiement Mobile Money', desc: 'Orange Money, Wave, FreeMoney. Payez avec votre téléphone, sans carte bancaire.' },
              { icon: Heart, title: 'Sélection Experte', desc: 'Chaque produit est testé par nos sœurs — des femmes qui utilisent ce qu\'elles vendent.' },
              { icon: MessageCircle, title: 'Service Personnalisé', desc: 'Besoin d\'un conseil ? Notre équipe est disponible sur WhatsApp pour vous guider.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all">
                <div className="w-12 h-12 shrink-0 rounded-full bg-gold/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-white text-lg mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="py-24 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-gold font-medium tracking-widest text-sm uppercase">Restez connectée</span>
          <h2 className="font-display text-4xl text-charcoal mt-4 mb-6">
            Recevez nos{' '}
            <span className="text-burgundy">offres exclusives</span>
          </h2>
          <p className="text-sage mb-8">
            Soyez la première informée des nouveaux arrivages et des promotions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-6 py-4 rounded-full border border-charcoal/10 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none bg-white"
            />
            <button className="px-8 py-4 bg-burgundy hover:bg-burgundy-light text-white rounded-full font-medium transition-all shadow-lg shadow-burgundy/20 whitespace-nowrap">
              S'inscrire
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors" />
        <Link
          to="/produits"
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium text-charcoal opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-lg"
        >
          Voir
        </Link>
      </div>
      <div className="p-5">
        <span className="text-xs text-gold font-medium uppercase tracking-wider">{product.category}</span>
        <h3 className="font-display text-lg text-charcoal mt-1 mb-2">{product.name}</h3>
        <span className="text-burgundy font-semibold">{product.price.toLocaleString()} FCFA</span>
      </div>
    </div>
  )
}
