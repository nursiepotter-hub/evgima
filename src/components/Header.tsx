import { useState, useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { href: '/', label: 'Accueil', anchor: false },
  { href: '/produits', label: 'Produits', anchor: false },
  { href: 'histoire', label: 'Notre histoire', anchor: true },
  { href: 'contact', label: 'Contact', anchor: true },
]

export default function Header() {
  const { itemCount } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleAnchor = useCallback((id: string) => {
    setIsOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.pathname, navigate])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-burgundy flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">E</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-charcoal tracking-wide leading-tight">EVGIMA</span>
              <span className="text-[10px] tracking-[0.2em] text-sage uppercase">Cosmétiques</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.anchor ? (
                <button
                  key={link.href}
                  onClick={() => handleAnchor(link.href)}
                  className="text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-burgundy after:transition-all after:duration-300 text-charcoal/70 hover:text-burgundy after:w-0 hover:after:w-full"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-burgundy after:transition-all after:duration-300 ${
                    location.pathname === link.href
                      ? 'text-burgundy after:w-full'
                      : 'text-charcoal/70 hover:text-burgundy after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/panier"
              className="relative p-2 text-charcoal/70 hover:text-burgundy transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-burgundy text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-charcoal/70 hover:text-burgundy"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-charcoal/5 animate-fade-in">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) =>
              link.anchor ? (
                <button
                  key={link.href}
                  onClick={() => handleAnchor(link.href)}
                  className="text-lg font-medium text-charcoal/70 hover:text-burgundy transition-colors py-2 text-left"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-charcoal/70 hover:text-burgundy transition-colors py-2"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
