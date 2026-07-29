export function formatFCFA(amount) {
  return new Intl.NumberFormat('fr-FR').format(amount) + ' FCFA'
}
