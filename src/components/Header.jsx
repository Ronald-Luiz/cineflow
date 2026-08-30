import { useState } from "react"

function Header() {
    const [menuAberto, setMenuAberto] = useState(false)

    const fecharMenu = () => {
        setMenuAberto(false)
    }

    const whatsappLink =
        "https://wa.me/553588171523?text=Ol%C3%A1!%20Vim%20conhecer%20o%20Amigo%20Flix%20e%20fiquei%20interessado%20no%20servi%C3%A7o."

    return (
        <header className="header">

            {/* LOGO */}

            <a
                href="#"
                className="logo"
                onClick={fecharMenu}
            >
                <img
                    src="/logo.png"
                    alt="Amigo Flix"
                />
            </a>


            {/* MENU DESKTOP */}

            <nav className="nav">
                <a href="#filmes">Filmes</a>
                <a href="#series">Séries</a>
                <a href="#canais">Canais</a>
                <a href="#como-funciona">Como funciona</a>
            </nav>


            {/* CTA */}

            <div className="header-actions">
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="login-button"
                >
                    Quero conhecer
                </a>
            </div>


            {/* HAMBÚRGUER */}

            <button
                className={`menu-button ${menuAberto ? "active" : ""}`}
                onClick={() => setMenuAberto(!menuAberto)}
                aria-label={
                    menuAberto
                        ? "Fechar menu"
                        : "Abrir menu"
                }
                aria-expanded={menuAberto}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>


            {/* MENU MOBILE */}

            {menuAberto && (
                <nav className="mobile-menu">

                    <a
                        href="#filmes"
                        onClick={fecharMenu}
                    >
                        Filmes
                    </a>

                    <a
                        href="#series"
                        onClick={fecharMenu}
                    >
                        Séries
                    </a>

                    <a
                        href="#canais"
                        onClick={fecharMenu}
                    >
                        Canais
                    </a>

                    <a
                        href="#como-funciona"
                        onClick={fecharMenu}
                    >
                        Como funciona
                    </a>

                    <a
                        href={whatsappLink}
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