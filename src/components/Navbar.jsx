import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Menu, X, Zap } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/boutique', label: 'Boutique' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-700 text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink text-signal">
            <Zap size={18} strokeWidth={2.5} />
          </span>
          NexaByte
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-signal' : 'text-ink/70 hover:text-ink'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/panier"
            className="relative flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
          >
            <ShoppingCart size={16} />
            <span className="hidden sm:inline">Panier</span>
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-signal px-1 font-mono text-[11px] text-white">
                {count}
              </span>
            )}
          </Link>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Ouvrir le menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 px-6 py-4 md:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium ${
                  isActive ? 'bg-signal/10 text-signal' : 'text-ink/70'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
