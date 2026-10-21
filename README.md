# Café Dev — Cafeteria

Projeto acadêmico desenvolvido para a CP5 da disciplina de Web Development, com o objetivo de criar uma interface web para uma cafeteria utilizando React, Vite e Tailwind CSS.

Página Incial
<p align="center">

<img src="./public/images/pagina-inicial.jpg" width="90%">

</p>

Catálogo de Produtos
<p align="center">

<img src="./public/images/pagina-produtos.jpg" width="90%">

</p>

## Sobre o projeto

O Café Dev apresenta uma interface para divulgação de uma cafeteria e de seus produtos. O design utiliza fundos claros, tons de cinza, elementos escuros e detalhes discretos em dourado.

A aplicação possui uma página inicial com banner de destaque, apresentação de produtos, catálogo e páginas institucionais.

# 🛰️ Funcionalidades

- [☑️] Página inicial com banner de destaque.
- [☑️] Apresentação de produtos em destaque.
- [☑️] Catálogo de produtos organizado em cartões.
- [☑️] Página institucional sobre a cafeteria.
- [☑️] Página de contato com formulário demonstrativo.
- [☑️] Navegação entre páginas com React Router DOM.
- [☑️] Componentes reutilizáveis para cabeçalho, rodapé e produtos.
- [☑️] Identidade visual com detalhes discretos em dourado.
- [☑️] Layout adaptável a diferentes tamanhos de tela.

> **Nota:** o formulário de contato é demonstrativo. A confirmação visual do envio não representa o envio real de um e-mail.

---

# 📂 Estrutura do projeto

```text
cafeteria-dev/
│
├── public/
│   └── images/
│       ├── banner-cafeteria.jpg
│       ├── cafe-1.jpg
│       ├── cafe-2.jpg
│       ├── ...
│       ├── pagina-inicial.jpg
│       └── pagina-produtos.jpg
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProductCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Produtos.jsx
│   │   ├── Sobre.jsx
│   │   └── Contato.jsx
│   │
│   ├── css/
│   │   └── estilo.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
├── integrantes.txt
└── README.md
```


# 🚀 Tecnologias utilizadas

<p align="center">
  <img
    src="https://skillicons.dev/icons?i=react,vite,tailwind,js,html,css,git,github,vscode"
    alt="Tecnologias utilizadas no projeto"
  />
</p>

| Tecnologia | Aplicação no projeto |
|---|---|
| React | Construção da interface e dos componentes. |
| Vite | Ambiente de desenvolvimento e geração do build. |
| Tailwind CSS | Estilização e organização do layout responsivo. |
| JavaScript | Lógica e interatividade da aplicação. |
| JSX | Composição das interfaces React. |
| React Router DOM | Navegação entre as páginas. |
| Git e GitHub | Versionamento e colaboração no projeto. |

---

## Bibliotecas e imports

As bibliotecas externas utilizadas correnpondem às dependências instaladas no projeto.

Imports utilizados:

```jsx
import { useState } from "react"
```

Utilizado no formulário de contato para armazenar os valores digitados e controlar a exibição da confirmação.

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
```

Utilizado para configurar a navegação entre as páginas da aplicação, se essa for a implementação adotada.

Exemplo de import de componente local:

```jsx
import ProductCard from "../components/ProductCard"
```

Permite reutilizar o cartão de produto em diferentes páginas.

## Estrutura de pastas

- `public/images/`: imagens utilizadas na interface.
- `src/components/`: componentes reutilizáveis, como Navbar, Footer e ProductCard.
- `src/pages/`: páginas da aplicação.
- `src/App.jsx`: composição geral e configuração das rotas.
- `src/main.jsx`: inicialização da aplicação React.
- `src/index.css`: estilos globais e configuração de CSS do projeto.
- `integrantes.txt`: identificação dos integrantes e link do repositório.

---

## Como executar o projeto

### Pré-requisitos

- Node.js e npm instalados.
- Git instalado, caso o repositório seja clonado.

### Instalação

Clone o repositório:

```bash
git clone https://github.com/alyson-souto/cafeteria-dev.git
```

Acesse a pasta:

```bash
cd cafeteria-dev
```

Instale as dependências:

```bash
npm install
```

```bash
npm install tailwindcss @tailwindcss/vite
```

```bash
npm install react-router-dom
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O terminal apresentará o endereço local para acessar a aplicação no navegador.

---

## Identidade visual

A interface utiliza uma composição visual clara, com fundo em tons suaves, textos escuros, cartões brancos e detalhes dourados discretos.

O objetivo é apresentar os produtos de forma organizada, mantendo uma experiência visual consistente entre as páginas.

---

# 🔀 Versionamento e colaboração

O projeto utiliza Git e GitHub para organizar o desenvolvimento e acompanhar as alterações realizadas.

O fluxo de trabalho contempla:

1. Organização das tarefas e funcionalidades.
2. Desenvolvimento em branches específicas.
3. Registro das alterações por meio de commits.
4. Revisão e integração das alterações via Pull Requests.
5. Preparação da versão final para publicação.

Essa organização ajuda a manter o histórico do projeto e facilita o desenvolvimento colaborativo.



# 👨‍💻 Autor

<div align="center">

### Alyson Souto

Estudante de Engenharia de Software — FIAP

[![GitHub](https://img.shields.io/badge/GitHub-alyson--souto-181717?style=for-the-badge&logo=github)](https://github.com/alyson-souto)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Alyson_Souto-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/alyson-souto-739039314/)

</div>

# 🌐 Acesse o projeto

<p align="center">

<a href="https://cafeteria-dev-pi.vercel.app/">
  <img
    src="https://img.shields.io/badge/CAFÉ_DEV-Visitar_site-C9A66B?style=for-the-badge&logo=googlechrome&logoColor=white"
    alt="Visitar o Café Dev"
  />
</a>

</p>

<div align="center">

### Acesso ao projeto: https://cafeteria-dev-pi.vercel.app/

---
### ⭐ Obrigado pela visita!

</div>
