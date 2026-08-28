import Header from "./components/Header"
import Hero from "./components/Hero"
import CategorySection from "./components/CategorySection"
import HowItWorks from "./components/HowItWorks"
import Contact from "./components/Contact"

import { filmes } from "./data/movies"

const series = [
  {
    id: 1,
    titulo: "The Last of Us",
    ano: 2023,
    categoria: "Drama",
    imagem: "",
  },
  {
    id: 2,
    titulo: "Stranger Things",
    ano: 2016,
    categoria: "Ficção",
    imagem: "",
  },
  {
    id: 3,
    titulo: "Breaking Bad",
    ano: 2008,
    categoria: "Drama",
    imagem: "",
  },
  {
    id: 4,
    titulo: "The Boys",
    ano: 2019,
    categoria: "Ação",
    imagem: "",
  },
  {
    id: 5,
    titulo: "House of the Dragon",
    ano: 2022,
    categoria: "Fantasia",
    imagem: "",
  },
]

const canais = [
  {
    id: 1,
    titulo: "Canal de Notícias",
    categoria: "Notícias",
  },
  {
    id: 2,
    titulo: "Canal Esportivo",
    categoria: "Esportes",
  },
  {
    id: 3,
    titulo: "Canal de Filmes",
    categoria: "Filmes",
  },
  {
    id: 4,
    titulo: "Canal Infantil",
    categoria: "Infantil",
  },
  {
    id: 5,
    titulo: "Canal de Entretenimento",
    categoria: "Entretenimento",
  },
]

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <CategorySection
          id="filmes"
          titulo="Filmes em destaque"
          descricao="Alguns dos títulos disponíveis"
          itens={filmes}
          tipo="Filme"
        />

        <CategorySection
          id="series"
          titulo="Séries em destaque"
          descricao="Histórias para maratonar"
          itens={series}
          tipo="Série"
        />

        <CategorySection
          id="canais"
          titulo="Canais disponíveis"
          descricao="Entretenimento ao vivo"
          itens={canais}
          tipo="Canal"
        />

        <HowItWorks />

        <Contact />
      </main>
    </>
  )
}

export default App