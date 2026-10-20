
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

  function fecharModal() {
    setEnviado(false)
    setNome("")
    setEmail("")
    setMensagem("")
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
          Dúvidas, sugestões ou vontade de conversar?
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
            className="w-full rounded-lg bg-[#B89A55] px-6 py-3 font-medium text-white transition hover:bg-[#9E8141] focus:outline-none focus:ring-2 focus:ring-[#B89A55] focus:ring-offset-2"
          >
            Enviar mensagem
          </button>
        </form>
      </section>

      {enviado && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="presentation"
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal"
            className="w-full max-w-md rounded-xl bg-white p-6 text-center shadow-xl sm:p-8"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#B89A55]/15 text-3xl text-[#9E8141]">
              ✓
            </div>

            <h2
              id="titulo-modal"
              className="mt-4 text-2xl font-bold text-gray-900"
            >
              Obrigado, {nome}!
            </h2>

            <p className="mt-3 leading-6 text-gray-600">
              Sua mensagem foi registrada nesta demonstração.
            </p>

            <button
              type="button"
              onClick={fecharModal}
              className="mt-6 w-full rounded-lg bg-[#B89A55] px-6 py-3 font-medium text-white transition hover:bg-[#9E8141] focus:outline-none focus:ring-2 focus:ring-[#B89A55] focus:ring-offset-2"
            >
              Entendi
            </button>
          </section>
        </div>
      )}
    </main>
  )
}

export default Contato
