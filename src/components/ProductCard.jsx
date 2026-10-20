
function ProductCard({ nome, descricao, preco, imagem }) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:border-[#B89A55]/60 hover:shadow-[0_0_10px_rgba(184,154,85,0.12) hover:-translate-y-1 hover:shadow-md">
      <img
        src={imagem}
        alt={nome}
        className="h-60 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          {nome}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-gray-600">
          {descricao}
        </p>

        <div className=" flex items-center justify-between gap-20">
          <span className="font-bold text-gray-900">
            {preco}
          </span>

          <button className="mt-4 w-full rounded-lg bg-[#B89A55] px-4 py-3 font-medium text-white shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#9E8141] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B89A55] focus:ring-offset-2 active:translate-y-0">
            Conhecer
          </button>
        </div>
      </div>

    </article>
  )
}

export default ProductCard