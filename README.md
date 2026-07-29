# NexaByte — Boutique e-commerce + services informatiques

Site vitrine + boutique en ligne (React + Vite + Tailwind CSS + Lucide) pour
la vente d'ordinateurs, d'accessoires et de services informatiques.

Le paiement se fait pour l'instant **en Mobile Money manuel** (Wave, Orange
Money, MTN Money) : le client choisit ses produits, remplit ses coordonnées,
puis est redirigé vers WhatsApp avec un récapitulatif de commande pré-rempli.
C'est la méthode la plus simple pour démarrer sans compte marchand ni serveur
backend. Un vrai paiement automatique (voir section "Aller plus loin") pourra
être ajouté plus tard.

---

## 1. Installer le projet sur ton ordinateur (VS Code)

**Prérequis** : installe [Node.js](https://nodejs.org/) (version 18 ou plus)
si ce n'est pas déjà fait — c'est ce qui fournit la commande `npm`.

1. Décompresse le dossier `nexabyte` reçu, ouvre-le dans VS Code
   (`Fichier > Ouvrir le dossier`).
2. Ouvre un terminal dans VS Code (`Terminal > Nouveau terminal`) et lance :

   ```bash
   npm install
   ```

   Cela télécharge React, Tailwind, Lucide et toutes les dépendances listées
   dans `package.json`.

3. Démarre le serveur de développement :

   ```bash
   npm run dev
   ```

4. Ouvre l'adresse affichée dans le terminal (en général
   `http://localhost:5173`) dans ton navigateur. Le site se recharge
   automatiquement à chaque modification de fichier.

---

## 2. Personnaliser le contenu

Tout le contenu métier est isolé dans des fichiers simples, pas besoin de
toucher au design pour changer les infos :

| Fichier | Contenu à modifier |
|---|---|
| `src/data/products.js` | Liste des ordinateurs/accessoires (nom, prix, stock, image, specs) |
| `src/data/services.js` | Liste des services informatiques proposés |
| `src/pages/Services.jsx` et `src/pages/Commande.jsx` | Numéro WhatsApp (`WHATSAPP_NUMBER`) |
| `src/pages/Commande.jsx` | Numéros Mobile Money (`MOBILE_MONEY`) |
| `src/components/Footer.jsx` | Coordonnées affichées en pied de page |
| `index.html` | Titre et description du site (SEO) |

Les images produits utilisent des URL externes (Unsplash) à titre d'exemple —
remplace-les par tes vraies photos (tu peux les mettre dans un dossier
`public/images/` et référencer `/images/mon-produit.jpg`).

---

## 3. Mettre le projet sur GitHub

Dans le terminal VS Code, à la racine du projet :

```bash
git init
git add .
git commit -m "Premier commit : site NexaByte"
```

Puis sur [github.com](https://github.com) :
1. Clique sur **New repository**, donne-lui un nom (ex : `nexabyte`), ne coche
   ni README ni licence (ils existent déjà localement), clique **Create**.
2. GitHub affiche des commandes à copier-coller, du type :

```bash
git remote add origin https://github.com/TON-PSEUDO/nexabyte.git
git branch -M main
git push -u origin main
```

Exécute-les dans le terminal. Ton code est maintenant sur GitHub.

---

## 4. Héberger le site gratuitement (Vercel)

[Vercel](https://vercel.com) détecte automatiquement les projets Vite/React
et te donne une adresse gratuite en `.vercel.app`.

1. Crée un compte sur [vercel.com](https://vercel.com) avec ton compte GitHub.
2. Clique **Add New… > Project**, choisis ton dépôt `nexabyte`.
3. Vercel détecte automatiquement les réglages (`npm run build`, dossier
   `dist`) — laisse tout par défaut et clique **Deploy**.
4. Après 1-2 minutes, ton site est en ligne sur une adresse du type
   `nexabyte.vercel.app`. Chaque `git push` vers `main` redéploie
   automatiquement le site.

*Alternative équivalente : [Netlify](https://netlify.com), même principe.*

---

## 5. Ajouter un nom de domaine personnalisé (plus tard)

Quand tu es prêt à investir dans un nom de domaine (ex : `nexabyte.ci` ou
`nexabyte.com`) :

1. Achète le domaine chez un registrar (ex : Afriregister/DomExa pour le
   `.ci`, ou Namecheap/OVH pour le `.com`).
2. Dans Vercel : `Project > Settings > Domains`, ajoute ton nom de domaine.
3. Vercel te donne des enregistrements DNS (souvent un `CNAME` ou des `A
   records`) à renseigner chez ton registrar.
4. La propagation DNS prend entre quelques minutes et 24h. Vercel fournit
   automatiquement le certificat HTTPS (cadenas sécurisé).

---

## 6. Aller plus loin (roadmap suggérée)

- **Paiement automatique** : intégrer l'API CinetPay ou PayDunya (agrégateurs
  qui gèrent Wave/Orange/MTN Money + carte bancaire en un seul intégration,
  très utilisés en Côte d'Ivoire) pour un encaissement automatique sans passer
  par WhatsApp.
- **Gestion des commandes/stock** : ajouter un petit backend (Node/Express +
  base de données, ou un service comme Supabase) pour stocker commandes et
  stock au lieu des données statiques de `src/data/`.
- **Espace administrateur** : page protégée par mot de passe pour ajouter/
  modifier des produits sans toucher au code.
- **Tes vraies photos produits** et une charte graphique (logo) définitive.

---

## Structure du projet

```
nexabyte/
├── src/
│   ├── components/     # Navbar, Footer, cartes produit/service, etc.
│   ├── context/         # Gestion globale du panier (CartContext)
│   ├── data/            # Produits et services (à personnaliser)
│   ├── pages/            # Accueil, Boutique, Détail produit, Services,
│   │                      # Panier, Commande, Contact
│   └── utils/            # Fonctions utilitaires (formatage prix)
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```
