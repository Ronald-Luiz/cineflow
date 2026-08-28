import { useState } from "react"

function Header() {
    const [menuAberto, setMenuAberto] = useState(false)

    function fecharMenu() {
        setMenuAberto(false)
    }

    return (
        <header className="header">
            <a href="#inicio" className="logo" onClick={fecharMenu}>
                Cine<span>Flow</span>
            </a>

            {/* MENU DESKTOP */}
            <nav className="nav">
                <a href="#filmes">Filmes</a>
                <a href="#series">Séries</a>
                <a href="#canais">Canais</a>
                <a href="#como-funciona">Como funciona</a>
            </nav>

            {/* BOTÃO DESKTOP */}
            <div className="header-actions">
                <a href="#contato" className="login-button">
                    Entrar em contato
                </a>
            </div>

            {/* BOTÃO MOBILE */}
            <button
                type="button"
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
            <nav className={`mobile-menu ${menuAberto ? "active" : ""}`}>
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

                <a
                    href="#contato"
                    className="mobile-contact"
                    onClick={fecharMenu}
                >
                    Entrar em contato
                </a>
            </nav>
        </header>
    )
}

export default Header