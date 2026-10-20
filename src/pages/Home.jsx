import ProductCard from "../components/ProductCard"

const produtos = [
  {
    id: 1,
    nome: "Espresso",
    descricao: "Café intenso e encorpado.",
    preco: "R$ 8,00",
    imagem: "/images/cafe-1.jpg"
  },
  {
    id: 2,
    nome: "Cappuccino",
    descricao: "Café com leite vaporizado.",
    preco: "R$ 12,00",
    imagem: "/images/cafe-2.jpg"
  },
  {
    id: 3,
    nome: "Latte",
    descricao: "Espresso com leite cremoso.",
    preco: "R$ 13,00",
    imagem: "/images/cafe-3.jpg"
  },
  {
    id: 4,
    nome: "Mocha",
    descricao: "Café, leite e chocolate.",
    preco: "R$ 15,00",
    imagem: "/images/cafe-4.jpg"
  }
]

function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <section>
        <img
          src="/images/banner-cafeteria.jpg"
          alt="Apresentação da cafeteria"
          className="h-[800px] w-full rounded-xl object-cover shadow-sm sm:h-[480px] lg:h-[600px]"
        />
      </section>

      <section className="py-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#A48742]">
          Feito para sua pausa
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Seu próximo café favorito
        </h1>

        <p className="mt-3 max-w-2xl text-gray-600">
          Sabores especiais e momentos para desacelerar.
        </p>

        <h2 className="mb-6 mt-8 text-2xl font-bold text-gray-900">
          Destaques do cardápio
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {produtos.map((produto) => (
            <ProductCard
              key={produto.id}
              nome={produto.nome}
              descricao={produto.descricao}
              preco={produto.preco}
              imagem={produto.imagem}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home