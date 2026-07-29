import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Truck, Wrench } from 'lucide-react'
import { products } from '../data/products.js'
import { services } from '../data/services.js'
import ProductCard from '../components/ProductCard.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import SpecTag from '../components/SpecTag.jsx'

export default function Home() {
  const featured = products.slice(0, 3)

  return (
    <div>
      {/* HERO — façon fiche technique annotée */}
      <section className="relative overflow-hidden border-b border-ink/10 bg-ink bg-grid-faint bg-grid">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-signal">
              Abidjan · Vente & services informatiques
            </span>
            <h1 className="mt-4 font-display text-4xl font-700 leading-tight text-paper md:text-5xl">
              Le matériel qu'il faut,
              <br /> l'assistance qui suit.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-paper/60">
              Ordinateurs, accessoires et composants neufs, garantis — et une équipe
              de techniciens pour l'installation, la réparation et la maintenance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/boutique"
                className="flex items-center gap-2 rounded-md bg-signal px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-signal-dark"
              >
                Voir la boutique <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="flex items-center gap-2 rounded-md border border-paper/20 px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-paper/10"
              >
                Nos services
              </Link>
            </div>
          </div>

          {/* Illustration annotée type "fiche technique" */}
          <div className="relative mx-auto w-full max-w-md">
            <svg viewBox="0 0 400 280" className="w-full">
              <rect x="60" y="30" width="280" height="170" rx="6" fill="#1B2029" stroke="#4B5FFF" strokeWidth="1.5" />
              <rect x="75" y="45" width="250" height="140" rx="2" fill="#12151C" />
              <rect x="140" y="205" width="120" height="10" rx="2" fill="#1B2029" />
              <rect x="110" y="215" width="180" height="8" rx="4" fill="#1B2029" />
              <line x1="200" y1="30" x2="200" y2="5" stroke="#4B5FFF" strokeWidth="1" className="leader-line" />
              <line x1="340" y1="70" x2="375" y2="70" stroke="#2FD98A" strokeWidth="1" className="leader-line" />
              <line x1="60" y1="140" x2="25" y2="140" stroke="#FFB020" strokeWidth="1" className="leader-line" />
            </svg>
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full">
              <SpecTag label="ÉCRAN" value="FHD" className="text-paper/60 [&>span:last-child]:text-paper" />
            </div>
            <div className="absolute right-0 top-[22%] translate-x-full pl-2">
              <SpecTag label="SSD" value="512 Go" className="text-paper/60 [&>span:last-child]:text-paper" />
            </div>
            <div className="absolute left-0 top-1/2 -translate-x-full pr-2 text-right">
              <SpecTag label="GARANTIE" value="12 mois" className="text-paper/60 [&>span:last-child]:text-paper" />
            </div>
          </div>
        </div>
      </section>

      {/* Réassurance */}
      <section className="border-b border-ink/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, label: 'Matériel garanti', desc: 'Jusqu\'à 12 mois selon produit' },
            { icon: Truck, label: 'Livraison à Abidjan', desc: 'Remise en main propre ou livraison' },
            { icon: Wrench, label: 'SAV réactif', desc: 'Techniciens disponibles 6j/7' },
          ].map((f) => (
            <div key={f.label} className="flex items-center gap-3">
              <f.icon size={22} className="shrink-0 text-signal" />
              <div>
                <p className="font-display text-sm font-600 text-ink">{f.label}</p>
                <p className="text-xs text-slate-muted">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Produits en vedette */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl font-700 text-ink">Sélection du moment</h2>
          <Link to="/boutique" className="flex items-center gap-1 text-sm font-medium text-signal">
            Tout voir <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl font-700 text-ink">Services informatiques</h2>
            <Link to="/services" className="flex items-center gap-1 text-sm font-medium text-signal">
              Tout voir <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
