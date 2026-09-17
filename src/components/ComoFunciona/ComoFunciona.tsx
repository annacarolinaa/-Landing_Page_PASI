import { useEffect, useRef } from "react";
import "./ComoFunciona.css";

const etapas = [
  {
    numero: "01",
    numeroFundo: "1",
    icon: "fa-user",
    titulo: "Acesse o PASI",
    texto:
      "Baixe o aplicativo e crie sua conta de forma simples, segura e acessível.",
    detalhe: "Comece por aqui.",
  },
  {
    numero: "02",
    numeroFundo: "2",
    icon: "fa-file-lines",
    titulo: "Preencha suas informações",
    texto:
      "Informe os dados solicitados e envie os documentos necessários, sem sair de casa.",
    detalhe: "É rápido e fácil.",
  },
  {
    numero: "03",
    numeroFundo: "3",
    icon: "fa-paper-plane",
    titulo: "Acompanhe sua solicitação",
    texto:
      "Veja o andamento da sua solicitação e acompanhe cada etapa pelo aplicativo.",
    detalhe: "Tudo no seu celular.",
  },
  {
    numero: "04",
    numeroFundo: "4",
    icon: "fa-circle-check",
    titulo: "Receba o atendimento",
    texto:
      "Sua solicitação é direcionada para o serviço adequado e você acompanha tudo pelo PASI.",
    detalhe: "Mais agilidade para você.",
  },
];

function ComoFunciona() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("como-funciona-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="como-funciona"
      id="como-funciona"
    >

      {/* INTRODUÇÃO */}
      <div className="como-funciona-header">

        <span className="section-tag">
          COMO FUNCIONA
        </span>

        <h2>
          Na prática, <span>é simples.</span>
        </h2>

        <p>
          Do primeiro acesso ao atendimento final, o PASI guia cada etapa
          <br />
          de forma clara, segura e acessível.
        </p>

      </div>


      {/* ÁREA DAS ETAPAS */}
      <div className="etapas-container">

        {/* LINHA ANIMADA */}
        <div className="etapas-line">
          <div className="etapas-line-progress"></div>
        </div>


        {etapas.map((etapa, index) => (
          <article
            className={`etapa etapa-${index + 1}`}
            key={etapa.numero}
          >

            {/* NÚMERO GIGANTE AO FUNDO */}
            <span className="numero-fundo">
              {etapa.numeroFundo}
            </span>


            {/* ÍCONE */}
            <div className="etapa-icon">
              <i className={`fa-solid ${etapa.icon}`}></i>
            </div>


            {/* CONTEÚDO */}
            <div className="etapa-content">

              <span className="etapa-numero">
                {etapa.numero}
              </span>

              <h3>
                {etapa.titulo}
              </h3>

              <p>
                {etapa.texto}
              </p>

              <span className="etapa-detalhe">
                {etapa.detalhe}
              </span>

            </div>

          </article>
        ))}

      </div>


      {/* CARACTERÍSTICAS */}
      <div className="como-funciona-features">

        <div className="feature">
          <div className="feature-icon">
            <i className="fa-solid fa-shield-halved"></i>
          </div>

          <div>
            <strong>Seguro</strong>
            <span>Seus dados protegidos.</span>
          </div>
        </div>


        <div className="feature">
          <div className="feature-icon">
            <i className="fa-solid fa-users"></i>
          </div>

          <div>
            <strong>Acessível</strong>
            <span>Para quem mais precisa.</span>
          </div>
        </div>


        <div className="feature">
          <div className="feature-icon">
            <i className="fa-solid fa-clock"></i>
          </div>

          <div>
            <strong>Transparente</strong>
            <span>Você acompanha tudo.</span>
          </div>
        </div>


        <div className="feature">
          <div className="feature-icon">
            <i className="fa-solid fa-heart"></i>
          </div>

          <div>
            <strong>Mais humano</strong>
            <span>Foco nas pessoas.</span>
          </div>
        </div>

      </div>


      {/* CTA FINAL */}
      <div className="como-funciona-cta">

        <div className="cta-text">

          <span>
            PRONTO PARA FACILITAR O SEU ATENDIMENTO?
          </span>

          <h3>
            Baixe o PASI agora e
            <br />
            dê o primeiro passo.
          </h3>

          <p>
            Com o PASI, o acesso aos serviços sociais
            <br />
            é mais simples, rápido e humano.
          </p>

          <div className="cta-buttons">

            <a href="#" className="store-button">
              <i className="fa-brands fa-google-play"></i>
              Google Play
            </a>

            <a href="#" className="store-button">
              <i className="fa-brands fa-apple"></i>
              App Store
            </a>

          </div>

        </div>


        {/* ELEMENTO VISUAL */}
        <div className="cta-visual">

          <div className="phone-decoration">

            <div className="phone-top"></div>

            <div className="phone-logo">
              PASI
            </div>

            <div className="phone-title">
              Serviços mais
              <br />
              perto de você
            </div>

            <div className="phone-button">
              Entrar
            </div>

          </div>

        </div>


        {/* FRASE */}
        <div className="cta-note">

          <i className="fa-solid fa-arrow-turn-down"></i>

          <span>
            Mais inclusão
            <br />
            para um futuro
            <br />
            com mais
            <br />
            oportunidades.
          </span>

        </div>

      </div>

    </section>
  );
}

export default ComoFunciona;