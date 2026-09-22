import { m, useReducedMotion } from "motion/react";
import { PROFILE } from "../data";
import { Icon } from "./UI";
import { ProjectShowcase } from "./ui/ProjectShowcase";

export function Hero() {
  const reducedMotion = useReducedMotion();
  return (
    <section id="hero" className="hero container" aria-labelledby="hero-title">
      <div className="hero-intro">
        <p className="role">
          <span aria-hidden="true" />
          Desenvolvedor Full Stack
        </p>
        <span className="hero-location">
          Interfaces, sistemas e o que conecta os dois.
        </span>
      </div>
      <m.h1
        id="hero-title"
        initial={reducedMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        João Pedro Plinta<span className="name-period">.</span>
      </m.h1>
      <div className="hero-grid">
        <div className="hero-content">
          <h2 className="hero-statement">
            Gosto de construir.
            <br />
            Do início ao deploy.
          </h2>
          <p className="hero-description">
            Sou desenvolvedor full stack e estudante de Ciência da Computação.
            Trabalho com React, TypeScript e Laravel para criar aplicações que
            resolvem problemas reais.
          </p>
          <p className="hero-personal-note">
            Por aqui, um pouco do que tenho colocado no mundo.
          </p>
          <div className="hero-actions">
            <m.a
              className="button button-primary"
              href="#projects"
              whileTap={reducedMotion ? undefined : { scale: 0.98 }}
            >
              Explorar projetos <Icon name="arrow-down" />
            </m.a>
            <a
              className="button button-secondary"
              href={PROFILE.resume}
              download
            >
              Currículo <Icon name="download" />
            </a>
          </div>
          <div className="hero-socials">
            <a href={PROFILE.github} target="_blank" rel="noreferrer">
              GitHub <Icon name="arrow-up-right" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <Icon name="arrow-up-right" />
            </a>
          </div>
        </div>
        <m.div
          className="hero-work"
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProjectShowcase />
        </m.div>
      </div>
      <div className="hero-footnote">
        <span>Programando desde 2018. Aprendendo todos os dias.</span>
        <a href="#about">
          Um pouco sobre mim <Icon name="arrow-down" />
        </a>
      </div>
    </section>
  );
}
