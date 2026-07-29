import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, ShoppingCart, ChevronLeft } from 'lucide-react'
import { products } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import SpecTag from '../components/SpecTag.jsx'
import { formatFCFA } from '../utils/format.js'

export default function ProduitDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-slate-muted">Ce produit n'existe pas ou n'est plus disponible.</p>
        <Link to="/boutique" className="mt-4 inline-block text-signal">
          Retour à la boutique
        </Link>
      </div>
    )
  }

  function handleAdd() {
    addItem(product, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <Link to="/boutique" className="flex items-center gap-1 text-sm text-slate-muted hover:text-ink">
        <ChevronLeft size={16} /> Retour à la boutique
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg border border-ink/10">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>

        <div>
          <h1 className="font-display text-3xl font-700 text-ink">{product.name}</h1>
          <p className="mt-3 font-mono text-2xl font-600 text-signal">
            {formatFCFA(product.price)}
          </p>
          <p className="mt-4 leading-relaxed text-slate-muted">{product.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {product.specs.map((s) => (
              <div key={s.label} className="rounded-md border border-ink/10 p-3">
                <SpecTag label={s.label} value={s.value} />
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm text-slate-muted">
            {product.stock > 0
              ? `${product.stock} unité(s) disponible(s)`
              : 'Rupture de stock — contacte-nous pour la prochaine arrivée'}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center rounded-md border border-ink/10">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="p-2.5 text-ink/60 hover:text-ink"
                aria-label="Diminuer la quantité"
              >
                <Minus size={16} />
              </button>
              <span className="w-8 text-center font-mono">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="p-2.5 text-ink/60 hover:text-ink"
                aria-label="Augmenter la quantité"
              >
                <Plus size={16} />
              </button>
            </div>

            <button
              onClick={handleAdd}
              disabled={product.stock === 0}
              className="flex flex-1 items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-signal disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ShoppingCart size={16} />
              {added ? 'Ajouté !' : 'Ajouter au panier'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
