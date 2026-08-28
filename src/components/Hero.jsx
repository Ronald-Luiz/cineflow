function Hero() {
    return (
        <section className="hero" id="inicio">
            <div className="hero-content">

                <span className="hero-category">
                    30 DIAS GRÁTIS
                </span>

                <h1>
                    Seu entretenimento em um só lugar
                </h1>

                <p>
                    Experimente o CineFlow gratuitamente e tenha acesso
                    a filmes, séries e canais através do Bob Player.
                </p>

                <div className="hero-buttons">

                    <a
                        href="https://wa.me/553588171523?text=Ol%C3%A1!%20Vim%20conhecer%20o%20CineFlow%20e%20fiquei%20interessado%20no%20servi%C3%A7o.%20Gostaria%20de%20saber%20mais%20sobre%20como%20funciona%20e%20como%20posso%20come%C3%A7ar%20meu%20teste%20de%2030%20dias%20gr%C3%A1tis.%20%F0%9F%98%8A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="watch-button"
                    >
                        Quero experimentar
                    </a>

                    <a
                        href="#filmes"
                        className="info-button"
                    >
                        Ver catálogo
                    </a>

                </div>

                <small className="hero-note">
                    Consulte as condições da oferta pelo WhatsApp.
                </small>

            </div>
        </section>
    )
}

export default Hero