import Header from "./components/Header"
import Hero from "./components/Hero"
import ChannelSection from "./components/ChannelSection"
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


function App() {
  return (
    <>
      <Header />

      <main>

        {/* HERO */}

        <Hero />


        {/* CANAIS */}

        <ChannelSection />


        {/* FILMES */}

        <CategorySection
          id="filmes"
          titulo="Filmes em destaque"
          descricao="Alguns dos títulos disponíveis"
          itens={filmes}
          tipo="Filme"
        />


        {/* SÉRIES */}

        <CategorySection
          id="series"
          titulo="Séries em destaque"
          descricao="Histórias para maratonar"
          itens={series}
          tipo="Série"
        />


        {/* COMO FUNCIONA */}

        <HowItWorks />


        {/* CONTATO */}

        <Contact />

      </main>
    </>
  )
}

export default App