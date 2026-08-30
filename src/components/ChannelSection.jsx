function ChannelSection() {
  const canais = [
    {
      nome: "Globo",
      logo: "/channels/globo.png",
    },
    {
      nome: "Band",
      logo: "/channels/band.png",
    },
    {
      nome: "SBT",
      logo: "/channels/sbt.png",
    },
    {
      nome: "SporTV",
      logo: "/channels/sportv.png",
    },
    {
      nome: "ESPN",
      logo: "/channels/espn.png",
    }
  ];

  const filmesPlataformas = [
    {
      nome: "Netflix",
      logo: "/channels/netflix.png",
    },
    {
      nome: "Prime Video",
      logo: "/channels/primevideo.png",
    },
    {
      nome: "Disney+",
      logo: "/channels/dinseyplus.png",
    },
    {
      nome: "Paramount+",
      logo: "/channels/paramount.png",
    },
    {
      nome: "Roku",
      logo: "/channels/roku.png",
    }
  ];

  return (
    <section className="channels-section" id="canais">

      {/* =========================
          CANAIS DISPONÍVEIS
      ========================= */}

      <div className="channels-block">

        <div className="channels-header">
          <span>PROGRAMAÇÃO</span>

          <h2>Canais disponíveis</h2>

          <p>
            Uma grande variedade de canais para você aproveitar
            notícias, entretenimento, filmes, esportes e muito mais.
          </p>
        </div>

        <div className="channels-grid">

          {canais.map((canal) => (
            <div className="channel-card" key={canal.nome}>

              <div className="channel-logo">
                <img
                  src={canal.logo}
                  alt={`Logo ${canal.nome}`}
                />
              </div>

              <span>{canal.nome}</span>

            </div>
          ))}

        </div>

      </div>


      {/* =========================
          FILMES E PLATAFORMAS
      ========================= */}

      <div className="platforms-block">

        <div className="channels-header">
          <span>FILMES & ENTRETENIMENTO</span>

          <h2>Filmes e plataformas</h2>

          <p>
            Aproveite também conteúdos de filmes, séries e
            entretenimento nas principais plataformas.
          </p>
        </div>

        <div className="channels-grid platforms-grid">

          {filmesPlataformas.map((filme) => (
            <div
              className="channel-card platform-card"
              key={filme.nome}
            >

              <div className="channel-logo">
                <img
                  src={filme.logo}
                  alt={`Logo ${filme.nome}`}
                />
              </div>

              <span>{filme.nome}</span>

            </div>
          ))}

        </div>

      </div>


      {/* =========================
          OBSERVAÇÃO
      ========================= */}

      <p className="channels-note">
        * A disponibilidade dos canais pode variar conforme o
        catálogo e o dispositivo utilizado.
      </p>

    </section>
  );
}

export default ChannelSection;