function App() {
  return (
    <main className="home">

      {/* HEADER */}
      <header className="header">
        <div className="header-content">

          <a href="#" className="logo">
            <img src="/logo.png" alt="PASI - Plataforma de Atendimento de Sistemas Integrados" />
          </a>

          <nav className="navigation">
            <a href="#" className="active">
              Início
            </a>

            <a href="#como-funciona">
              Como Funciona
            </a>

            <a href="#para-quem">
              Para quem é
            </a>

            <a href="#projeto">
              Projeto
            </a>

            <a href="#contato">
              Fale Conosco
            </a>
          </nav>

          <a href="#" className="download-button">
            Baixar App
          </a>

        </div>
      </header>


      {/* HERO */}
      <section className="hero">

        {/* CÍRCULOS CONCÊNTRICOS */}
        <div className="hero-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>


        {/* CONTEÚDO CENTRAL */}
        <div className="hero-content">

          <h1>
            a assistência social brasileira
            <br />
            de cara nova. sem filas.
            <br />
            <span>sem papel.</span>
          </h1>

          <div className="title-line"></div>

          <p className="hero-description">
            O PASI digitaliza a triagem e integra os atendimentos em um só lugar,
            tornando o acesso aos serviços públicos de assistência mais simples,
            humano e eficiente.
          </p>


          {/* BOTÕES */}
          <div className="hero-buttons">

            <a href="#" className="primary-button">
              <i className="fa-solid fa-download"></i>
              Baixar o aplicativo
            </a>

            <a href="#projeto" className="secondary-button">
              Saiba mais
            </a>

          </div>

        </div>


        {/* BENEFÍCIOS */}
        <div className="benefits">

          {/* CARD 1 */}
          <div className="benefit-card">

            <div className="benefit-icon heart">
              <i className="fa-solid fa-heart"></i>
            </div>

            <p>
              <strong>Mais acesso e inclusão</strong>
              <br />
              com uma gestão mais eficiente.
            </p>

          </div>


          {/* CARD 2 */}
          <div className="benefit-card">

            <div className="benefit-icon people">
              <i className="fa-solid fa-people-group"></i>
            </div>

            <p>
              <strong>Menos burocracia</strong> para o
              <br />
              cidadão em vulnerabilidade.
            </p>

          </div>


          {/* CARD 3 */}
          <div className="benefit-card">

            <div className="benefit-icon care">
              <i className="fa-solid fa-hand-holding-heart"></i>
            </div>

            <p>
              <strong>Mais clareza</strong> para
              <br />
              profissionais focarem no
              <br />
              <strong>atendimento</strong> humano.
            </p>

          </div>

        </div>

      </section>

    </main>
  )
}

export default App