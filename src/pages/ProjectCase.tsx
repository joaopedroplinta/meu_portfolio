import { Link } from "react-router-dom";
import { useEffect } from "react";
import { PROJECTS } from "../data";
import { CASE_STUDIES, type CaseStudy } from "../data/caseStudies";
import { ProjectCover } from "../components/ProjectCover";
import { Icon } from "../components/UI";

export function ProjectCase({ study }: { study: CaseStudy }) {
  const project = PROJECTS.find((item) => item.id === study.projectId)!;
  const next = CASE_STUDIES[(CASE_STUDIES.indexOf(study) + 1) % CASE_STUDIES.length];
  const nextProject = PROJECTS.find((item) => item.id === next.projectId)!;
  useEffect(() => {
    const description = document.querySelector('meta[name="description"]');
    const previous = { title: document.title, description: description?.getAttribute("content") ?? "" };
    document.title = `${project.title} | João Pedro Plinta — Pinguim`;
    description?.setAttribute("content", study.introduction);
    return () => {
      document.title = previous.title;
      description?.setAttribute("content", previous.description);
    };
  }, [project.title, study.introduction]);
  return (
    <article className={`case-page case-${project.id} container`}>
      <header className="case-intro">
        <Link className="case-back" to="/#projects"><Icon name="arrow-down" /> Todos os projetos</Link>
        <p className="case-category">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="case-headline">{study.headline}</p>
        <p className="case-introduction">{study.introduction}</p>
        <div className="case-meta">
          <div><span>Escopo</span><p>{study.scope}</p></div>
          <div><span>Tecnologias</span><p>{project.tags.join(", ")}</p></div>
          <div className="case-external-links">
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Acessar produto <Icon name="arrow-up-right" /></a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer">Explorar código <Icon name="code" /></a>}
          </div>
        </div>
      </header>
      {project.image && <ProjectCover project={project} />}
      <section className="case-flow" aria-labelledby="flow-title">
        <h2 id="flow-title">{study.flowTitle}</h2>
        <ol>{study.flow.map((step) => <li key={step}>{step}<Icon name="arrow-right" /></li>)}</ol>
      </section>
      {study.screens && (
        <section className="case-screens" aria-labelledby="screens-title">
          <h2 id="screens-title">Telas do produto</h2>
          <p>Capturas do ambiente local, com dados de demonstração.</p>
          <div>
            {study.screens.map((screen) => (
              <figure key={screen.src}>
                <img src={screen.src} alt={screen.alt} width="1568" height="716" loading="lazy" decoding="async" />
                <figcaption>{screen.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
      <div className="case-layout">
        <nav className="case-contents" aria-label="Neste projeto">
          <p>Neste projeto</p>
          {study.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
        </nav>
        <div className="case-sections">
          {study.sections.map((section) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.code && (
                <figure className="case-code">
                  <figcaption>{section.code.title}</figcaption>
                  <pre tabIndex={0}><code>{section.code.content}</code></pre>
                </figure>
              )}
              {section.points && <ul>{section.points.map((point) => <li key={point}><Icon name="check" />{point}</li>)}</ul>}
            </section>
          ))}
        </div>
      </div>
      <Link className="case-next" to={`/projetos/${next.slug}`}>
        <div><span>Continue explorando</span><h2>{nextProject.title}</h2><p>{next.headline}</p></div>
        <Icon name="arrow-up-right" />
      </Link>
    </article>
  );
}
