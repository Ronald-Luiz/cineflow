import { useEffect, useState } from "react"

import Header from "./components/Header"
import Hero from "./components/Hero"
import ChannelSection from "./components/ChannelSection"
import CategorySection from "./components/CategorySection"
import HowItWorks from "./components/HowItWorks"
import Contact from "./components/Contact"

import {
  buscarFilmes,
  buscarSeries,
} from "./services/tmdb"


function App() {

  const [filmes, setFilmes] = useState([])
  const [series, setSeries] = useState([])

  useEffect(() => {

    async function carregarCatalogo() {

      const filmesAPI = await buscarFilmes()
      const seriesAPI = await buscarSeries()

      setFilmes(filmesAPI.slice(0, 5))
      setSeries(seriesAPI.slice(0, 5))
    }

    carregarCatalogo()

  }, [])


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