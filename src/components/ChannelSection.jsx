function ChannelSection() {
  const canais = [
    {
      nome: "Globo",
      logo: "/channels/globo.png",
    },
    {
      nome: "Record",
      logo: "/channels/record.png",
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
      nome: "TNT",
      logo: "/channels/tnt.png",
    },
    {
      nome: "SporTV",
      logo: "/channels/sportv.png",
    },
  ]

  return (
    <section className="channels-section" id="canais">

      <div className="channels-header">

        <span>PROGRAMAÇÃO</span>

        <h2>Alguns dos canais disponíveis</h2>

        <p>
          Uma grande variedade de canais para você aproveitar
          notícias, entretenimento, filmes, esportes e muito mais.
        </p>

      </div>

      <div className="channels-grid">

        {canais.map((canal) => (
          <div className="channel-card" key={canal.nome}>

            <img
              src={canal.logo}
              alt={`Logo ${canal.nome}`}
            />

            <span>{canal.nome}</span>

          </div>
        ))}

      </div>

      <p className="channels-note">
        * A disponibilidade dos canais pode variar conforme o
        catálogo e o dispositivo utilizado.
      </p>

    </section>
  )
}

export default ChannelSection