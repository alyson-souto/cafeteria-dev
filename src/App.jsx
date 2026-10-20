import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Produtos from "./pages/Produtos"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App