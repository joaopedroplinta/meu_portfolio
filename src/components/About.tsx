import { TIMELINE, PROFILE } from "../data";
import { Icon } from "./UI";

export function About() {
  return (
    <section
      id="about"
      className="section about-section container"
      aria-labelledby="about-title"
    >
      <div className="about-copy">
        <p className="section-label">Sobre mim</p>
        <h2 id="about-title">
          Comecei pela curiosidade.
          <br />
          Continuei pela prática.
        </h2>
        <p>
          Sou João Pedro, desenvolvedor Full Stack e estudante de Ciência da
          Computação. Comecei a programar em 2018, pela curiosidade de entender
          como as coisas funcionam.
        </p>
        <p>
          Hoje, trabalho com JavaScript, TypeScript e PHP, passando pela
          interface, pelas APIs e pelo banco de dados. Gosto de acompanhar o
          caminho completo de uma aplicação e entender as decisões por trás de
          cada parte.
        </p>
        <p>
          Minha experiência com suporte também faz parte dessa visão: o software
          precisa funcionar para quem está do outro lado da tela.
        </p>
        <a className="text-link" href={PROFILE.resume} download>
          Baixar currículo completo <Icon name="download" />
        </a>
      </div>
      <div className="experience">
        <h3>Experiência e formação</h3>
        <ol className="timeline">
          {TIMELINE.map((item, index) => (
            <li key={item.year} className={index === 0 ? "is-current" : ""}>
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
