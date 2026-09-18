import { useState } from "react";
import "./Desafio.css";

const desafios = [
  ["fa-file-lines", "Muitos documentos", "Informações dispersas e repetitivas dificultam o atendimento eficiente.", "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=700&q=85"],
  ["fa-clock", "Filas longas", "Tempo de espera que poderia ser evitado com processos digitais.", "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85"],
  ["fa-code-branch", "Falta de integração", "Serviços que não se comunicam entre si, gerando retrabalho constante.", "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=85"],
  ["fa-lock", "Pouca privacidade", "Atendimentos expostos e pouco seguros para dados sensíveis.", "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=700&q=85"],
  ["fa-clipboard", "Muita papelada", "Formulários físicos e processos manuais para poucos avanços reais.", "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=700&q=85"],
  ["fa-circle-question", "Informações confusas", "Dificuldade para entender o que é necessário em cada etapa.", "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=85"],
  ["fa-location-dot", "Dificuldade de acesso", "Barreiras para quem mais precisa chegar até os serviços disponíveis.", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=85"],
  ["fa-users", "Sobrecarga das equipes", "Profissionais sobrecarregados com tarefas administrativas repetitivas.", "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=85"],
];

function Desafio() {
  const [activeIndex, setActiveIndex] = useState(Math.floor(desafios.length / 2));

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + desafios.length) % desafios.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % desafios.length);
  };

  return (
    <section className="desafio">
      <div className="desafio-top">
        <div className="desafio-label">o desafio atual</div>
      </div>
      <div className='colorwhite'>
        <div className="desafio-intro">
        <h2>por que a triagem da assistencia social <span>precisa evoluir?</span></h2>
        <p>As filas, a papelada e a falta de integração ainda dificultam o acesso a<br />quem mais precisa. Conheça alguns dos principais desafios.</p>
      </div>
      <div className="desafios-carousel" aria-label="Principais desafios da triagem">
        <button
          className="carousel-control carousel-control-prev"
          type="button"
          onClick={showPrevious}
          aria-label="Ver desafio anterior"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        <div className="desafios-viewport">
          <div
            className="desafios-track"
            style={{ "--active-index": activeIndex } as React.CSSProperties}
          >
            {desafios.map(([icon, title, description, image], index) => (
              <article
                className={`desafio-card ${index === activeIndex ? "is-active" : ""}`}
                key={title}
                role="button"
                tabIndex={0}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveIndex(index);
                  }
                }}
                aria-current={index === activeIndex ? "true" : undefined}
              >
                <img className="desafio-card-image" src={image} alt="" loading="lazy" />
                <div className="desafio-card-shade" />
                <div className="desafio-card-content">
                <span className="desafio-card-number">0{index + 1}</span>
                <div className="desafio-icon"><i className={`fa-solid ${icon}`}></i></div>
                <h3>{title}</h3>
                <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          className="carousel-control carousel-control-next"
          type="button"
          onClick={showNext}
          aria-label="Ver próximo desafio"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>

        <div className="carousel-dots" aria-label="Selecionar desafio">
          {desafios.map(([, title], index) => (
            <button
              className={`carousel-dot ${index === activeIndex ? "is-active" : ""}`}
              type="button"
              key={title}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ir para o desafio ${index + 1}: ${title}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
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