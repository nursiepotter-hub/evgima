import { ShoppingCart, Search, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function Header() {
  const { itemCount } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-primary">EV</span>
              <span className="text-accent">GIMA</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-accent/80 hover:text-primary transition-colors font-medium">Accueil</Link>
            <Link to="/produits" className="text-accent/80 hover:text-primary transition-colors font-medium">Produits</Link>
            <Link to="/#contact" className="text-accent/80 hover:text-primary transition-colors font-medium">Contact</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/panier" className="relative p-2 text-accent/80 hover:text-primary transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-accent/80"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <nav className="flex flex-col p-4 gap-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-accent/80 hover:text-primary font-medium py-2">Accueil</Link>
            <Link to="/produits" onClick={() => setIsMenuOpen(false)} className="text-accent/80 hover:text-primary font-medium py-2">Produits</Link>
            <Link to="/#contact" onClick={() => setIsMenuOpen(false)} className="text-accent/80 hover:text-primary font-medium py-2">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
