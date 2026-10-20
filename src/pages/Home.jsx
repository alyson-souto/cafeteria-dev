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
    <main>
      <section>
        <img
          src="/images/banner-cafeteria.jpg"
          alt="Apresentação da cafeteria"
        />
      </section>

      <section>
        <h1>Seu próximo café favorito</h1>
        <p>Sabores especiais e momentos para desacelerar.</p>

        <h2>Destaques do cardápio</h2>

        <div>
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