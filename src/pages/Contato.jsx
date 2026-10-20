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
    <main>
      <h1>Entre em contato</h1>

      <form onSubmit={enviarFormulario}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          required
        />

        <label htmlFor="email">Gmail</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="seuemail@gmail.com"
          required
        />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          value={mensagem}
          onChange={(event) => setMensagem(event.target.value)}
          required
        />

        <button type="submit">Enviar mensagem</button>
      </form>

      {enviado && (
        <p>Obrigado, {nome}! Sua mensagem foi registrada.</p>
      )}
    </main>
  )
}

export default Contato