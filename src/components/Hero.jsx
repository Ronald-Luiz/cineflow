function Hero() {
    return (
        <section className="hero">

            {/* =========================
          BACKGROUND
      ========================= */}

            <div className="hero-background"></div>
            <div className="hero-overlay"></div>

            {/* =========================
          CONTEÚDO
      ========================= */}

            <div className="hero-content">

                {/* MARCA */}

                <div className="hero-top">
                    <span className="hero-label">
                        AMIGO<span>.FLIX</span>
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
                    em um só lugar. Conheça o Amigo Flix e descubra tudo
                    o que preparamos para você.
                </p>

                {/* BOTÕES */}

                <div className="hero-buttons">

                    <a
                        href="https://wa.me/553588171523?text=Ol%C3%A1!%20Vim%20conhecer%20o%20Amigo%20Flix%20e%20quero%20experimentar%20as%206%20horas%20gr%C3%A1tis"
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

                {/* TEXTO DO TESTE */}

                <span className="hero-test">
                    Tenha acesso por 6 horas e conheça o serviço
                    antes de decidir.
                </span>

            </div>

            {/* =========================
          SCROLL
      ========================= */}

            <div className="hero-scroll">
                <span>Explore o Amigo Flix</span>
                <span className="scroll-arrow">↓</span>
            </div>

        </section>
    );
}

export default Hero;