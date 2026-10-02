import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "../data";
import { CASE_STUDIES } from "../data/caseStudies";
import { Icon } from "../components/UI";
import { FEATURED } from "./content";
import { Contact } from "./Home";

export function CasePage() {
  const { slug } = useParams();
  const study = CASE_STUDIES.find((item) => item.slug === slug);
  const project = study && PROJECTS.find((item) => item.id === study.projectId);
  const look = study && FEATURED.find((item) => item.id === study.projectId);

  useEffect(() => {
    if (!study || !project) return;
    const description = document.querySelector('meta[name="description"]');
    const previous = { title: document.title, description: description?.getAttribute("content") ?? "" };
    document.title = `${project.title} | João Pedro Plinta`;
    description?.setAttribute("content", study.introduction);
    return () => {
      document.title = previous.title;
      description?.setAttribute("content", previous.description);
    };
  }, [study, project]);

  if (!study || !project || !look) return <NotFound />;
  const next = CASE_STUDIES[(CASE_STUDIES.indexOf(study) + 1) % CASE_STUDIES.length];
  const nextTitle = PROJECTS.find((item) => item.id === next.projectId)?.title;

  return (
    <>
      <article className="case">
        <header className="s-wrap case-head">
          <Link to="/#trabalho" className="s-link case-back">
            Todo o trabalho
          </Link>
          <p className="work-kind">{look.kind}</p>
          <h1>{project.title}</h1>
          <p className="case-headline">{study.headline}</p>
          <p className="case-intro">{study.introduction}</p>
          <dl className="case-meta">
            <div>
              <dt>Escopo</dt>
              <dd>{study.scope}</dd>
            </div>
            <div>
              <dt>Tecnologias</dt>
              <dd>{project.tags.join(", ")}</dd>
            </div>
            {(project.demo || project.github) && (
              <div>
                <dt>Links</dt>
                <dd className="case-links">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Abrir o produto <Icon name="arrow-up-right" />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      Ver o código <Icon name="arrow-up-right" />
                    </a>
                  )}
                </dd>
              </div>
            )}
          </dl>
        </header>

        <div className="s-wrap">
          <div className="work-media case-cover" style={{ background: look.panel, color: look.panelInk }}>
            {look.image ? (
              <img src={look.image.src} alt={look.image.alt} width="1568" height="716" decoding="async" />
            ) : (
              <figure className="work-code">
                <figcaption>monitor.bpf.c</figcaption>
                <pre>
                  <code>{look.code}</code>
                </pre>
              </figure>
            )}
          </div>

          <section className="case-flow" aria-labelledby="flow-title">
            <h2 id="flow-title">{study.flowTitle}</h2>
            <ol>
              {study.flow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <div className="case-body">
            <nav className="case-index" aria-label="Neste estudo">
              <p>Neste estudo</p>
              <ol>
                {study.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="case-sections">
              {study.sections.map((section) => (
                <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
                  <h2 id={`${section.id}-title`}>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.code && (
                    <figure className="case-code">
                      <figcaption>{section.code.title}</figcaption>
                      <pre tabIndex={0}>
                        <code>{section.code.content}</code>
                      </pre>
                    </figure>
                  )}
                  {section.points && (
                    <ul>
                      {section.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>

          {study.screens && (
            <section className="case-screens" aria-labelledby="screens-title">
              <h2 id="screens-title">Telas do produto</h2>
              <p>Capturas do ambiente local, com dados de demonstração.</p>
              {study.screens.filter((screen) => screen.src !== look.image?.src).map((screen) => (
                <figure key={screen.src}>
                  <img src={screen.src} alt={screen.alt} width="1568" height="716" loading="lazy" decoding="async" />
                  <figcaption>{screen.caption}</figcaption>
                </figure>
              ))}
            </section>
          )}

          <Link to={`/projetos/${next.slug}`} className="case-next">
            <span>Próximo estudo</span>
            <strong>{nextTitle}</strong>
            <em>{next.headline}</em>
          </Link>
        </div>
      </article>
      <Contact />
    </>
  );
}

export function NotFound() {
  return (
    <section className="s-wrap not-found-page">
      <h1>Por aqui, só gelo.</h1>
      <p>Esta página não existe. O trabalho está na página inicial.</p>
      <Link to="/" className="s-button">
        Voltar ao início
      </Link>
    </section>
  );
}
