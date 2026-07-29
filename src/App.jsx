import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Boutique from './pages/Boutique.jsx'
import ProduitDetail from './pages/ProduitDetail.jsx'
import Services from './pages/Services.jsx'
import Panier from './pages/Panier.jsx'
import Commande from './pages/Commande.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/produit/:id" element={<ProduitDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/commande" element={<Commande />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
