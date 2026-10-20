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
  },
  {
    id: 5,
    nome: "Macchiato",
    descricao: "Espresso intenso com um toque de espuma de leite.",
    preco: "R$ 10,00",
    imagem: "/images/cafe-5.jpg"
  },
  {
    id: 6,
    nome: "Café Gelado",
    descricao: "Café especial servido com gelo, refrescante e aromático.",
    preco: "R$ 12,00",
    imagem: "/images/cafe-6.jpg"
  },
  {
    id: 7,
    nome: "Affogato",
    descricao: "Sorvete de creme finalizado com uma dose de espresso quente.",
    preco: "R$ 16,00",
    imagem: "/images/cafe-7.jpg"
  },
  {
    id: 8,
    nome: "Café com Doce de Leite",
    descricao: "Café cremoso com leite vaporizado e doce de leite.",
    preco: "R$ 15,00",
    imagem: "/images/cafe-8.jpg"
  }
];

function Produtos() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-[#A48742]">
        Nosso cardápio
      </p>

      <h1 className="mb-8 mt-2 text-3xl font-bold text-gray-900">
        Cafés e especiais
      </h1>

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
    </main>
  )
}

export default Produtos