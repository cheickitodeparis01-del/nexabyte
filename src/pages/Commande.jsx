import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MessageCircle, Smartphone } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { formatFCFA } from '../utils/format.js'

// ⚠️ À remplacer par tes vraies coordonnées avant la mise en ligne
const WHATSAPP_NUMBER = '2250700000000' // format international, sans le +
const MOBILE_MONEY = {
  wave: { label: 'Wave', number: '07 00 00 00 00' },
  orange: { label: 'Orange Money', number: '07 00 00 00 00' },
  mtn: { label: 'MTN Money', number: '05 00 00 00 00' },
}

export default function Commande() {
  const { items, total, clearCart } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState({ nom: '', telephone: '', adresse: '' })
  const [payment, setPayment] = useState('wave')

  if (items.length === 0 && !sessionStorage.getItem('last-order-sent')) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="text-slate-muted">Ton panier est vide.</p>
        <Link to="/boutique" className="mt-4 inline-block text-signal">
          Retour à la boutique
        </Link>
      </div>
    )
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const lignes = items
      .map((i) => `• ${i.name} x${i.qty} — ${formatFCFA(i.price * i.qty)}`)
      .join('\n')

    const texte = `Bonjour NexaByte, je souhaite passer la commande suivante :\n\n${lignes}\n\nTotal : ${formatFCFA(
      total
    )}\n\nNom : ${form.nom}\nTéléphone : ${form.telephone}\nAdresse : ${form.adresse}\nMode de paiement : ${MOBILE_MONEY[payment].label}`

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texte)}`
    window.open(url, '_blank')

    sessionStorage.setItem('last-order-sent', '1')
    clearCart()
    navigate('/')
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      <h1 className="font-display text-3xl font-700 text-ink">Finaliser la commande</h1>
      <p className="mt-2 text-slate-muted">
        Renseigne tes coordonnées, choisis ton moyen de paiement, puis confirme
        sur WhatsApp. Un technicien te recontacte pour la livraison.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Nom complet</label>
          <input
            required
            name="nom"
            value={form.nom}
            onChange={handleChange}
            className="w-full rounded-md border border-ink/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-signal"
            placeholder="Ex : Awa Koffi"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Téléphone</label>
          <input
            required
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
            className="w-full rounded-md border border-ink/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-signal"
            placeholder="Ex : 07 00 00 00 00"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            Adresse de livraison
          </label>
          <textarea
            required
            name="adresse"
            value={form.adresse}
            onChange={handleChange}
            rows={2}
            className="w-full rounded-md border border-ink/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-signal"
            placeholder="Quartier, commune, repère..."
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-ink">
            Moyen de paiement Mobile Money
          </label>
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(MOBILE_MONEY).map(([key, m]) => (
              <button
                type="button"
                key={key}
                onClick={() => setPayment(key)}
                className={`rounded-md border px-3 py-2.5 text-sm font-medium transition-colors ${
                  payment === key
                    ? 'border-signal bg-signal/10 text-signal'
                    : 'border-ink/10 text-ink/70 hover:border-ink/20'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <div className="mt-3 flex items-start gap-3 rounded-md bg-amber/10 p-4 text-sm text-ink">
            <Smartphone size={18} className="mt-0.5 shrink-0 text-amber" />
            <p>
              Envoie <strong>{formatFCFA(total)}</strong> au numéro{' '}
              <strong>{MOBILE_MONEY[payment].number}</strong> ({MOBILE_MONEY[payment].label}),
              puis confirme avec la capture d'écran sur WhatsApp à l'étape suivante.
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-volt px-5 py-3.5 text-sm font-medium text-ink hover:opacity-90"
        >
          <MessageCircle size={16} /> Confirmer sur WhatsApp
        </button>
      </form>
    </div>
  )
}
