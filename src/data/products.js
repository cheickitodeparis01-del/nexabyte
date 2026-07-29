// Remplace ces données par tes vrais produits, ou branche-les plus tard
// sur une base de données / un CMS (voir README.md).

export const categories = [
  { id: 'laptops', label: 'Ordinateurs portables' },
  { id: 'desktops', label: 'Ordinateurs de bureau' },
  { id: 'accessoires', label: 'Accessoires' },
  { id: 'composants', label: 'Composants' },
]

export const products = [
  {
    id: 'p1',
    name: 'ProBook 14 Ultra',
    category: 'laptops',
    price: 385000,
    stock: 6,
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
    specs: [
      { label: 'CPU', value: 'Intel i5-1240P' },
      { label: 'RAM', value: '16 Go' },
      { label: 'SSD', value: '512 Go' },
      { label: 'Écran', value: '14" FHD' },
    ],
    description:
      'Ordinateur portable polyvalent pour le bureau et les études, léger et endurant en autonomie.',
  },
  {
    id: 'p2',
    name: 'CoreTower R5',
    category: 'desktops',
    price: 420000,
    stock: 4,
    image:
      'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&q=80',
    specs: [
      { label: 'CPU', value: 'AMD Ryzen 5 5600' },
      { label: 'RAM', value: '16 Go' },
      { label: 'SSD', value: '1 To' },
      { label: 'GPU', value: 'GTX 1660' },
    ],
    description:
      'Tour bureautique et gaming léger, idéale pour le travail graphique et la maison.',
  },
  {
    id: 'p3',
    name: 'Clavier mécanique WaveType',
    category: 'accessoires',
    price: 22000,
    stock: 15,
    image:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    specs: [
      { label: 'Switch', value: 'Blue' },
      { label: 'Connexion', value: 'USB-C' },
      { label: 'Rétro.', value: 'RGB' },
    ],
    description: 'Clavier mécanique rétroéclairé, frappe précise et confortable.',
  },
  {
    id: 'p4',
    name: 'Souris ErgoGlide',
    category: 'accessoires',
    price: 9500,
    stock: 20,
    image:
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80',
    specs: [
      { label: 'DPI', value: '1600' },
      { label: 'Connexion', value: 'Sans fil' },
    ],
    description: 'Souris ergonomique sans fil, autonomie longue durée.',
  },
  {
    id: 'p5',
    name: 'SSD NVMe SpeedCore 1To',
    category: 'composants',
    price: 42000,
    stock: 10,
    image:
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&q=80',
    specs: [
      { label: 'Capacité', value: '1 To' },
      { label: 'Interface', value: 'NVMe M.2' },
      { label: 'Vitesse', value: '3500 Mo/s' },
    ],
    description: "Disque SSD rapide pour accélérer n'importe quel ordinateur.",
  },
  {
    id: 'p6',
    name: 'Barrette RAM 16 Go DDR4',
    category: 'composants',
    price: 26000,
    stock: 12,
    image:
      'https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&q=80',
    specs: [
      { label: 'Capacité', value: '16 Go' },
      { label: 'Type', value: 'DDR4 3200MHz' },
    ],
    description: 'Mémoire vive pour fluidifier le multitâche et les jeux.',
  },
]
