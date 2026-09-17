import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <a href="#" className="logo">
          <img src="/logo.png" alt="PASI - Plataforma de Atendimento de Sistemas Integrados" />
        </a>
        <nav className="navigation">
          <a href="#" className="active">Início</a>
          <a href="#como-funciona">Como Funciona</a>
          <a href="#para-quem">Para quem é</a>
          <a href="#projeto">Projeto</a>
          <a href="#contato">Fale Conosco</a>
        </nav>
        <a href="#" className="download-button">Baixar App</a>
      </div>
    </header>
  );
}

export default Header;