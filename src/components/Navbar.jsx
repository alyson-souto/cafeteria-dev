import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/">Café Dev</Link>

        <div>
          <Link to="/">Início</Link>
          <Link to="/produtos">Cardápio</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar