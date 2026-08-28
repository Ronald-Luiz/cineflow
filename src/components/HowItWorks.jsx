function HowItWorks() {
  return (
    <section className="how-it-works" id="como-funciona">
      <div className="section-title">
        <span>COMO FUNCIONA</span>

        <h2>Assista onde quiser</h2>

        <p>
          Após a assinatura, você recebe as orientações necessárias
          para acessar o serviço através do aplicativo compatível.
        </p>
      </div>

      <div className="devices">
        <div className="device-card">
          <div className="device-icon">
            📺
          </div>

          <h3>Na sua TV</h3>

          <p>
            Utilize o Bob Player em sua Smart TV compatível.
            Siga as instruções recebidas após a contratação
            para configurar o acesso.
          </p>
        </div>

        <div className="device-card">
          <div className="device-icon">
            📱
          </div>

          <h3>No Android</h3>

          <p>
            Também é possível utilizar o serviço em dispositivos
            Android compatíveis, seguindo as instruções de acesso.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks