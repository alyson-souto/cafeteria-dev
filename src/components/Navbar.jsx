import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="bg-[#242424] text-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="text-xl font-bold tracking-wide">
          <span className="text-[#B89A55]">Café</span> Dev
        </Link>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-100">
          <Link to="/" className="transition hover:text-[#D5B96D]">
            Início
          </Link>

          <Link to="/produtos" className="transition hover:text-[#D5B96D]">
            Cardápio
          </Link>

          <Link to="/sobre" className="transition hover:text-[#D5B96D]">
            Sobre
          </Link>

          <Link to="/contato" className="transition hover:text-[#D5B96D]">
            Contato
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar