import "./Desafio.css";

const desafios = [
  ["fa-file-lines", "Muitos documentos", "Informações dispersas e repetitivas dificultam o atendimento eficiente."],
  ["fa-clock", "Filas longas", "Tempo de espera que poderia ser evitado com processos digitais."],
  ["fa-code-branch", "Falta de integração", "Serviços que não se comunicam entre si, gerando retrabalho constante."],
  ["fa-lock", "Pouca privacidade", "Atendimentos expostos e pouco seguros para dados sensíveis."],
  ["fa-clipboard", "Muita papelada", "Formulários físicos e processos manuais para poucos avanços reais."],
  ["fa-circle-question", "Informações confusas", "Dificuldade para entender o que é necessário em cada etapa."],
  ["fa-location-dot", "Dificuldade de acesso", "Barreiras para quem mais precisa chegar até os serviços disponíveis."],
  ["fa-users", "Sobrecarga das equipes", "Profissionais sobrecarregados com tarefas administrativas repetitivas."],
];

function Desafio() {
  return (
    <section className="desafio">
      <div className="desafio-top"><div className="desafio-line"></div><div className="desafio-label">o desafio atual</div></div>
      <div className='colorwhite'>
        <div className="desafio-intro">
        <h2>por que a triagem da assistencia social <span>precisa evoluir?</span></h2>
        <p>As filas, a papelada e a falta de integração ainda dificultam o acesso a<br />quem mais precisa. Conheça alguns dos principais desafios.</p>
      </div>
      <div className="desafios-grid">
        {desafios.map(([icon, title, description]) => (
          <article className="desafio-card" key={title}>
            <div className="desafio-icon"><i className={`fa-solid ${icon}`}></i></div>
            <h3>{title}</h3><p>{description}</p>
          </article>
        ))}
      </div>
      <div className="desafio-cta"><div className="cta-content">
        <h2><span className="cta-icon"><i className="fa-solid fa-bolt"></i></span>Com o PASI, isso pode mudar.</h2>
        <p>Tecnologia a favor das pessoas — simplificando a triagem, integrando os<br />serviços e colocando o atendimento humano no centro.</p>
        <a href="#projeto" className="cta-button">Conhecer o PASI <i className="fa-solid fa-arrow-right"></i></a>
      </div></div>
      </div>
      
    </section>
  );
}

export default Desafio;