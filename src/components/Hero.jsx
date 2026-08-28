function Hero() {
    return (
        <section className="hero" id="inicio">
            <div className="hero-content">
                <span className="hero-category">
                    CINEFLOW
                </span>

                <h1>
                    Seu entretenimento em um só lugar
                </h1>

                <p>
                    Filmes, séries e canais para você aproveitar
                    seu entretenimento através do Bob Player.
                </p>

                <div className="hero-buttons">
                    <a
                        href="https://wa.me/SEUNUMERO"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="watch-button"
                    >
                        Assinar agora
                    </a>

                    <a
                        href="#filmes"
                        className="info-button"
                    >
                        Ver catálogo
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero