// Élément signature du site : une étiquette façon "fiche technique"
// avec une petite ligne de renvoi, comme sur un schéma annoté de matériel.
export default function SpecTag({ label, value, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-slate-muted ${className}`}
    >
      <span className="h-px w-3 bg-slate-muted/50" />
      {label}
      <span className="text-ink font-medium">{value}</span>
    </span>
  )
}
