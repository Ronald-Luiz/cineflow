import { useState } from "react"

function Header() {
    const [menuAberto, setMenuAberto] = useState(false)

    const fecharMenu = () => {
        setMenuAberto(false)
    }

    return (
        <header className="header">

            {/* LOGO */}

            <a href="#" className="logo">
                Cine<span>Flow</span>
            </a>


            {/* MENU DESKTOP */}

            <nav className="nav">
                <a href="#filmes">Filmes</a>

                <a href="#series">Séries</a>

                <a href="#canais">Canais</a>

                <a href="#como-funciona">Como funciona</a>

                <a href="#contato">Entre em contato</a>
            </nav>


            {/* AÇÃO DESKTOP */}

            <div className="header-actions">

                <a
                    href="https://wa.me/553588171523?text=Ol%C3%A1!%20Vim%20conhecer%20o%20CineFlow%20e%20fiquei%20interessado%20no%20servi%C3%A7o."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="login-button"
                >
                    Quero conhecer
                </a>

            </div>


            {/* BOTÃO HAMBÚRGUER */}

            <button
                className="menu-button"
                onClick={() => setMenuAberto(!menuAberto)}
                aria-label="Abrir menu"
                aria-expanded={menuAberto}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>


            {/* MENU MOBILE */}

            {menuAberto && (
                <nav className="mobile-menu">

                    <a href="#filmes" onClick={fecharMenu}>
                        Filmes
                    </a>

                    <a href="#series" onClick={fecharMenu}>
                        Séries
                    </a>

                    <a href="#canais" onClick={fecharMenu}>
                        Canais
                    </a>

                    <a href="#como-funciona" onClick={fecharMenu}>
                        Como funciona
                    </a>

                    <a href="#contato" onClick={fecharMenu}>
                        Entre em contato
                    </a>

                    <a
                        href="https://wa.me/553588171523?text=Ol%C3%A1!%20Vim%20conhecer%20o%20CineFlow%20e%20fiquei%20interessado%20no%20servi%C3%A7o."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobile-contact"
                        onClick={fecharMenu}
                    >
                        Quero conhecer
                    </a>

                </nav>
            )}

        </header>
    )
}

export default Header