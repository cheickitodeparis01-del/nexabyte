import * as Icons from 'lucide-react'

export default function ServiceCard({ service }) {
  const Icon = Icons[service.icon] || Icons.Wrench

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-ink/10 bg-white p-6 transition-shadow hover:shadow-lg">
      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-signal/10 text-signal">
        <Icon size={22} />
      </span>
      <div>
        <h3 className="font-display text-base font-600 text-ink">{service.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-muted">
          {service.description}
        </p>
      </div>
      <span className="mt-auto font-mono text-sm font-500 text-signal">
        {service.price}
      </span>
    </div>
  )
}
