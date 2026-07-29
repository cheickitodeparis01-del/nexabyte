import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import SpecTag from './SpecTag.jsx'
import { formatFCFA } from '../utils/format.js'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-ink/10 bg-white transition-shadow hover:shadow-lg">
      <Link to={`/produit/${product.id}`} className="relative block aspect-[4/3] overflow-hidden bg-ink/5">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.stock <= 3 && product.stock > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-amber px-2 py-0.5 font-mono text-[11px] font-medium text-ink">
            Stock limité
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <Link to={`/produit/${product.id}`}>
          <h3 className="font-display text-base font-600 text-ink hover:text-signal">
            {product.name}
          </h3>
        </Link>

        <div className="flex flex-wrap gap-x-3 gap-y-1.5">
          {product.specs.slice(0, 2).map((s) => (
            <SpecTag key={s.label} label={s.label} value={s.value} />
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-mono text-lg font-600 text-ink">
            {formatFCFA(product.price)}
          </span>
          <button
            onClick={() => addItem(product)}
            className="flex items-center gap-1 rounded-md bg-ink px-3 py-2 text-sm font-medium text-paper transition-colors hover:bg-signal"
            aria-label={`Ajouter ${product.name} au panier`}
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
