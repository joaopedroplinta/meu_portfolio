import { TIMELINE, PROFILE } from "../data";
import { Icon } from "./UI";

export function About() {
  return (
    <section
      id="about"
      className="section about-section container"
      aria-labelledby="about-title"
    >
      <div className="about-intro">
        <div className="about-portrait">
          <img
            src="/joao-pedro-plinta-640.webp"
            srcSet="/joao-pedro-plinta-640.webp 640w, /joao-pedro-plinta-960.webp 960w"
            sizes="(max-width: 560px) 90vw, (max-width: 799px) 400px, 480px"
            alt="João Pedro Plinta, de óculos e camiseta preta, em um retrato de estúdio"
            width="640"
            height="640"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="about-copy">
          <p className="section-label">Sobre mim</p>
          <h2 id="about-title">
            Comecei pela curiosidade.
            <br />
            Continuei pela prática.
          </h2>
          <p>
            Sou João Pedro, desenvolvedor Full Stack e estudante de Ciência da
            Computação. Comecei a programar em 2018, pela curiosidade de
            entender como as coisas funcionam.
          </p>
          <p>
            Hoje, trabalho com JavaScript, TypeScript e PHP, passando pela
            interface, pelas APIs e pelo banco de dados. Gosto de acompanhar o
            caminho completo de uma aplicação e entender as decisões por trás de
            cada parte.
          </p>
          <p>
            Minha experiência com suporte também faz parte dessa visão: o
            software precisa funcionar para quem está do outro lado da tela.
          </p>
          <a className="text-link" href={PROFILE.resume} download>
            Baixar currículo completo <Icon name="download" />
          </a>
        </div>
      </div>
      <div className="experience">
        <h3>Experiência e formação</h3>
        <ol className="timeline">
          {TIMELINE.slice().reverse().map((item) => (
            <li key={item.year} className={item === TIMELINE[0] ? "is-current" : ""}>
              <span className="timeline-dot" aria-hidden="true" />
              <p className="timeline-year">{item.year}</p>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
