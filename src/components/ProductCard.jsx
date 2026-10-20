
function ProductCard({ nome, descricao, preco, imagem }) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <img
        src={imagem}
        alt={nome}
        className="h-52 w-full bg-gray-50 object-contain p-4"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {nome}
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          {descricao}
        </p>

        <p className="mt-4 font-bold text-gray-900">
          {preco}
        </p>

        <button
          type="button"
          className="mt-4 w-full rounded-lg bg-[#B89A55] px-4 py-2 font-medium text-white transition hover:bg-[#9E8141] focus:outline-none focus:ring-2 focus:ring-[#B89A55] focus:ring-offset-2"
        >
          Conhecer
        </button>
      </div>
    </article>
  )
}

export default ProductCard