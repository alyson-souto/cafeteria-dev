import { useState } from "react"

function Contato() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [enviado, setEnviado] = useState(false)

  function enviarFormulario(event) {
    event.preventDefault()
    setEnviado(true)
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#A48742]">
          Fale com a gente
        </p>

        <h1 className="mt-3 text-3xl font-bold text-gray-900">
          Entre em contato
        </h1>

        <p className="mt-3 leading-7 text-gray-600">
          Dúvidas, sugestões ou apenas vontade de conversar?
          Envie uma mensagem para nossa cafeteria.
        </p>

        <form
          onSubmit={enviarFormulario}
          className="mt-6 space-y-5"
        >
          <div>
            <label
              htmlFor="nome"
              className="mb-1 block text-sm font-medium text-gray-800"
            >
              Nome
            </label>

            <input
              id="nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              placeholder="Digite seu nome"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-3 outline-none focus:border-[#B89A55] focus:ring-2 focus:ring-[#B89A55]/30"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-800"
            >
              Gmail
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="seuemail@gmail.com"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-3 outline-none focus:border-[#B89A55] focus:ring-2 focus:ring-[#B89A55]/30"
            />
          </div>

          <div>
            <label
              htmlFor="mensagem"
              className="mb-1 block text-sm font-medium text-gray-800"
            >
              Mensagem
            </label>

            <textarea
              id="mensagem"
              value={mensagem}
              onChange={(event) => setMensagem(event.target.value)}
              placeholder="Escreva sua mensagem..."
              rows={5}
              required
              className="w-full resize-y rounded-lg border border-gray-300 px-3 py-3 outline-none focus:border-[#B89A55] focus:ring-2 focus:ring-[#B89A55]/30"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#B89A55] px-6 py-3 font-medium text-white transition hover:bg-[#9E8141]"
          >
            Enviar mensagem
          </button>
        </form>

        {enviado && (
          <p className="mt-5 rounded-lg bg-gray-100 p-4 text-gray-800">
            Obrigado, {nome}! Sua mensagem foi registrada.
          </p>
        )}
      </section>
    </main>
  )
}

export default Contato