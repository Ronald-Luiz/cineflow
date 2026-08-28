function HowItWorks() {
    return (
        <section className="how-it-works" id="como-funciona">

            <div className="section-title">
                <span>COMO FUNCIONA</span>

                <h2>Assista no dispositivo que preferir</h2>

                <p>
                    Após contratar o serviço, você recebe as informações
                    necessárias para acessar sua conta através do aplicativo
                    compatível com o seu dispositivo.
                </p>
            </div>


            {/* DISPOSITIVOS */}

            <div className="devices">

                {/* SMART TV / IPHONE */}

                <div className="device-card">

                    <div className="device-icon">
                        📺
                    </div>

                    <h3>Smart TVs e iPhone</h3>

                    <p>
                        Em dispositivos como Samsung, LG, Roku e iPhone,
                        você pode utilizar aplicativos compatíveis para
                        acessar o serviço.
                    </p>

                    <div className="players">

                        <span>Bob Player</span>

                        <span>IBO Player Pro</span>

                        <span>IBO Player</span>

                        <span>Vu Player Pro</span>

                    </div>

                    <small>
                        A disponibilidade pode variar de acordo com o
                        dispositivo e sistema utilizado.
                    </small>

                </div>


                {/* ANDROID */}

                <div className="device-card">

                    <div className="device-icon">
                        📱
                    </div>

                    <h3>Android</h3>

                    <p>
                        No Android, o acesso é simples. Você recebe o link
                        para baixar o aplicativo e, após a instalação,
                        recebe seu login e senha para acessar o serviço.
                    </p>

                    <div className="android-steps">

                        <div>
                            <strong>1</strong>
                            <span>Receba o link</span>
                        </div>

                        <div>
                            <strong>2</strong>
                            <span>Baixe o aplicativo</span>
                        </div>

                        <div>
                            <strong>3</strong>
                            <span>Entre com seu acesso</span>
                        </div>

                    </div>

                </div>

            </div>


            {/* COMPATIBILIDADE */}

            <div className="compatibility-box">

                <span className="compatibility-label">
                    📺 VERIFIQUE A COMPATIBILIDADE
                </span>

                <h3>
                    Quer usar o CineFlow na sua TV?
                </h3>

                <p>
                    Envie uma foto do controle remoto da sua TV ou
                    informe qual dispositivo você utiliza.
                </p>

                <p>
                    Nossa equipe verifica a compatibilidade e orienta
                    você sobre a melhor forma de acessar o serviço.
                </p>

                <a
                    href="https://wa.me/553588171523?text=Ol%C3%A1!%20Vim%20conhecer%20o%20CineFlow%20e%20gostaria%20de%20verificar%20a%20compatibilidade%20do%20meu%20dispositivo.%20%F0%9F%93%BA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="compatibility-button"
                >
                    📸 Verificar compatibilidade
                </a>

            </div>

        </section>
    )
}

export default HowItWorks