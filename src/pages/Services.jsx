import { MessageCircle } from 'lucide-react'
import { services } from '../data/services.js'
import ServiceCard from '../components/ServiceCard.jsx'

const WHATSAPP_NUMBER = '2250700000000' // ⚠️ remplace par ton vrai numéro (format international, sans le +)

export default function Services() {
  const message = encodeURIComponent(
    "Bonjour NexaByte, je souhaite un devis pour un service informatique."
  )

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <h1 className="font-display text-3xl font-700 text-ink">Services informatiques</h1>
      <p className="mt-2 max-w-2xl text-slate-muted">
        Nos techniciens interviennent sur tout type de panne, installation ou
        configuration — au magasin, à domicile ou en entreprise.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center gap-4 rounded-lg bg-ink px-6 py-10 text-center">
        <h2 className="font-display text-xl font-600 text-paper">
          Une panne ou un besoin particulier ?
        </h2>
        <p className="max-w-md text-sm text-paper/60">
          Décris-nous ton problème sur WhatsApp, un technicien te répond
          rapidement avec une estimation de prix.
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-md bg-volt px-5 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
        >
          <MessageCircle size={16} /> Discuter sur WhatsApp
        </a>
      </div>
    </div>
  )
}
