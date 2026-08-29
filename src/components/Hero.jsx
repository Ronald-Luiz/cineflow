function Hero() {
    return (
        <section className="hero">

            <div className="hero-background"></div>
            <div className="hero-overlay"></div>

            <div className="hero-content">

                {/* BADGE */}
                <span className="hero-badge">
                    🎁 6 HORAS GRÁTIS
                </span>

                {/* LABEL */}
                <div className="hero-top">
                    <span className="hero-label">
                        CINEFLOW
                    </span>
                </div>

                {/* TÍTULO */}
                <h1>
                    Entretenimento
                    <span> sem limites.</span>
                </h1>

                {/* DESCRIÇÃO */}
                <p className="hero-description">
                    Filmes, séries, canais ao vivo, esportes e muito mais
                    em um só lugar. Conheça o CineFlow e descubra tudo o
                    que preparamos para você.
                </p>

                {/* OFERTA */}
                <div className="hero-offer">
                    <strong>🎁 Experimente grátis</strong>
                    <span>
                        Tenha acesso por 6 horas e conheça o serviço
                        antes de decidir.
                    </span>
                </div>

                {/* BOTÕES */}
                <div className="hero-buttons">

                    <a
                        href="https://wa.me/553588171523?text=Ol%C3%A1!%20Vim%20conhecer%20o%20CineFlow%20e%20quero%20experimentar%20as%206%20horas%20gr%C3%A1tis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-primary-button"
                    >
                        🎁 Quero testar grátis
                    </a>

                    <a
                        href="#como-funciona"
                        className="hero-secondary-button"
                    >
                        Saiba como funciona
                    </a>

                </div>

                {/* CATEGORIAS */}
                <div className="hero-info">

                    <div className="hero-info-item">
                        <strong>🎬</strong>
                        <span>Filmes</span>
                    </div>

                    <div className="hero-info-item">
                        <strong>📺</strong>
                        <span>Canais ao vivo</span>
                    </div>

                    <div className="hero-info-item">
                        <strong>🍿</strong>
                        <span>Séries</span>
                    </div>

                    <div className="hero-info-item">
                        <strong>⚽</strong>
                        <span>Esportes</span>
                    </div>

                </div>

                {/* COMPATIBILIDADE */}
                <span className="hero-note">
                    📱 Assista onde preferir — compatível com TV, Smart TV,
                    computador, notebook, tablet, Android e iPhone.
                </span>

            </div>

            <div className="hero-scroll">
                <span>Explore o CineFlow</span>
                <span className="scroll-arrow">↓</span>
            </div>

        </section>
    )
}

export default Hero