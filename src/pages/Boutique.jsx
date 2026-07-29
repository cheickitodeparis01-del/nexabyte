import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { products, categories } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

export default function Boutique() {
  const [category, setCategory] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = category === 'all' || p.category === category
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <h1 className="font-display text-3xl font-700 text-ink">Boutique</h1>
      <p className="mt-2 text-slate-muted">
        Ordinateurs, accessoires et composants disponibles à Abidjan.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategory('all')}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              category === 'all' ? 'bg-ink text-paper' : 'bg-ink/5 text-ink/70 hover:bg-ink/10'
            }`}
          >
            Tout
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                category === c.id ? 'bg-ink text-paper' : 'bg-ink/5 text-ink/70 hover:bg-ink/10'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un produit…"
            className="w-full rounded-md border border-ink/10 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-signal"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-slate-muted">
          Aucun produit ne correspond à ta recherche.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}
