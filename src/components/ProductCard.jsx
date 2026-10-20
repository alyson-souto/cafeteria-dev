
function ProductCard({ nome, descricao, preco, imagem }) {
  return (
    <article>
      <img src={imagem} alt={nome} />

      <div>
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <p>{preco}</p>

        <button type="button">
          Conhecer
        </button>
      </div>
    </article>
  )
}

export default ProductCard