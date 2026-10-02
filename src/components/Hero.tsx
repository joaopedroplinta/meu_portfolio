import { Link } from "react-router-dom";
import { PROFILE } from "../data";
import { Icon } from "./UI";
import { PenguinCharacter } from "./PenguinCharacter";

export function Hero() {
  return (
    <section id="hero" className="intro-section container" aria-labelledby="hero-title">
      <div className="intro-layout">
        <div className="intro-copy">
          <p className="intro-role">João Pedro Plinta / Desenvolvedor Full Stack</p>
          <h1 id="hero-title">
            <span className="intro-greeting">Pode chamar de</span>
            <span className="intro-name">Pinguim.</span>
          </h1>
        </div>
        <PenguinCharacter />
      </div>
      <div className="intro-bottom">
        <div className="intro-context">
          <p className="intro-description">
            Construo aplicações web, da interface às regras de negócio.
            Sou estudante de Ciência da Computação e gosto de entender
            o que acontece dos dois lados da tela.
          </p>
          <div className="intro-actions">
            <a className="button button-primary" href="#projects">
              Conhecer projetos <Icon name="arrow-down" />
            </a>
            <a className="button button-secondary" href={PROFILE.resume} download>
              Currículo <Icon name="download" />
            </a>
          </div>
          <div className="intro-socials">
            <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub <Icon name="arrow-up-right" /></a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn <Icon name="arrow-up-right" /></a>
          </div>
        </div>
        <div className="intro-projects">
          <p>Comece por um projeto</p>
          <div className="intro-project-list">
            <Link to="/projetos/plana" className="intro-project">
              <img src="/plana.png" alt="" width="1179" height="454" decoding="async" />
              <div><span>Produto em produção</span><strong>Plana</strong></div>
              <Icon name="arrow-up-right" />
            </Link>
            <Link to="/projetos/hackathon-ifpr" className="intro-project">
              <img src="/hackathon-ifpr.png" alt="" width="1034" height="855" decoding="async" />
              <div><span>Plataforma de evento</span><strong>Hackathon IFPR</strong></div>
              <Icon name="arrow-up-right" />
            </Link>
          </div>
        </div>
      </div>
      <div className="intro-footer">
        <span>Programando desde 2018. Ainda curioso.</span>
        <a href="#projects">Tem coisa que saiu do papel <Icon name="arrow-down" /></a>
      </div>
    </section>
  );
}
