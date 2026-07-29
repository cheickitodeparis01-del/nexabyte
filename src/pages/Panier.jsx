import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { formatFCFA } from '../utils/format.js'

export default function Panier() {
  const { items, updateQty, removeItem, total } = useCart()

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-display text-2xl font-700 text-ink">Ton panier est vide</h1>
        <p className="mt-2 text-slate-muted">Ajoute des produits depuis la boutique.</p>
        <Link
          to="/boutique"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper hover:bg-signal"
        >
          Voir la boutique <ArrowRight size={16} />
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <h1 className="font-display text-3xl font-700 text-ink">Mon panier</h1>

      <div className="mt-8 divide-y divide-ink/10 rounded-lg border border-ink/10 bg-white">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-4">
            <img src={item.image} alt={item.name} className="h-16 w-16 rounded-md object-cover" />
            <div className="flex-1">
              <p className="font-display text-sm font-600 text-ink">{item.name}</p>
              <p className="font-mono text-sm text-slate-muted">{formatFCFA(item.price)}</p>
            </div>
            <div className="flex items-center rounded-md border border-ink/10">
              <button
                onClick={() => updateQty(item.id, item.qty - 1)}
                className="p-2 text-ink/60 hover:text-ink"
                aria-label="Diminuer"
              >
                <Minus size={14} />
              </button>
              <span className="w-6 text-center font-mono text-sm">{item.qty}</span>
              <button
                onClick={() => updateQty(item.id, item.qty + 1)}
                className="p-2 text-ink/60 hover:text-ink"
                aria-label="Augmenter"
              >
                <Plus size={14} />
              </button>
            </div>
            <p className="w-28 text-right font-mono text-sm font-600 text-ink">
              {formatFCFA(item.price * item.qty)}
            </p>
            <button
              onClick={() => removeItem(item.id)}
              className="p-2 text-ink/30 hover:text-red-500"
              aria-label="Retirer du panier"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between rounded-lg bg-ink/5 p-5">
        <span className="font-display text-lg font-600 text-ink">Total</span>
        <span className="font-mono text-xl font-700 text-ink">{formatFCFA(total)}</span>
      </div>

      <Link
        to="/commande"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-signal px-5 py-3.5 text-sm font-medium text-white hover:bg-signal-dark"
      >
        Passer la commande <ArrowRight size={16} />
      </Link>
    </div>
  )
}
