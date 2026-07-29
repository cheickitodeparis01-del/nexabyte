import { Link } from 'react-router-dom'
import { Zap, MessageCircle, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-ink text-paper/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-700 text-paper">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-signal text-white">
              <Zap size={18} strokeWidth={2.5} />
            </span>
            NexaByte
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/60">
            Vente d'ordinateurs, d'accessoires et services informatiques à Abidjan.
            Matériel neuf, garanti, et intervention rapide.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-600 uppercase tracking-wide text-paper/50">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/boutique" className="hover:text-signal">Boutique</Link></li>
            <li><Link to="/services" className="hover:text-signal">Services</Link></li>
            <li><Link to="/panier" className="hover:text-signal">Panier</Link></li>
            <li><Link to="/contact" className="hover:text-signal">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-600 uppercase tracking-wide text-paper/50">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MessageCircle size={16} className="text-signal" /> +225 07 00 00 00 00 (WhatsApp)
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-signal" /> contact@nexabyte.ci
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-signal" /> Abidjan, Côte d'Ivoire
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 px-6 py-5 text-center font-mono text-xs text-paper/40">
        © {new Date().getFullYear()} NexaByte — Tous droits réservés
      </div>
    </footer>
  )
}
