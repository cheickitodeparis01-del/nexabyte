import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const message = encodeURIComponent('Bonjour NexaByte, j\'ai une question.')

  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <h1 className="font-display text-3xl font-700 text-ink">Contact</h1>
      <p className="mt-2 text-slate-muted">
        Une question sur un produit ou un service ? Écris-nous, on répond vite.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <a
          href={`https://wa.me/2250700000000?text=${message}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-start gap-4 rounded-lg border border-ink/10 bg-white p-6 hover:shadow-md"
        >
          <MessageCircle className="text-volt" size={24} />
          <div>
            <p className="font-display font-600 text-ink">WhatsApp</p>
            <p className="text-sm text-slate-muted">+225 07 00 00 00 00</p>
          </div>
        </a>

        <div className="flex items-start gap-4 rounded-lg border border-ink/10 bg-white p-6">
          <Mail className="text-signal" size={24} />
          <div>
            <p className="font-display font-600 text-ink">Email</p>
            <p className="text-sm text-slate-muted">contact@nexabyte.ci</p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-lg border border-ink/10 bg-white p-6">
          <MapPin className="text-amber" size={24} />
          <div>
            <p className="font-display font-600 text-ink">Adresse</p>
            <p className="text-sm text-slate-muted">Abidjan, Côte d'Ivoire</p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-lg border border-ink/10 bg-white p-6">
          <Clock className="text-ink" size={24} />
          <div>
            <p className="font-display font-600 text-ink">Horaires</p>
            <p className="text-sm text-slate-muted">Lun–Sam · 8h–19h</p>
          </div>
        </div>
      </div>
    </div>
  )
}
