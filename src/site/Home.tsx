import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PROFILE, PROJECTS, SKILL_GROUPS, TIMELINE } from "../data";
import { CERTIFICATIONS, EVENT_CERTIFICATES } from "../data/certifications";
import { CASE_STUDIES } from "../data/caseStudies";
import { Icon } from "../components/UI";
import { FEATURED, type Featured } from "./content";

function CoverFigure() {
  return (
    <figure className="cover-figure">
      <div className="cover-figure-art">
        <img
          src="/brand/pinguim-ink-v2.webp"
          alt="Pinguim de óculos escuros desenhado com traço de tatuagem"
          width="1214"
          height="1295"
          {...{ fetchpriority: "high" }}
        />
      </div>
      <figcaption className="cover-caption">O apelido virou tatuagem.</figcaption>
    </figure>
  );
}

function CursorPreview({ project }: { project: Featured | null }) {
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let started = false;
    let frame = 0;
    const tick = () => {
      // Interpolação simples: a prévia acompanha o cursor com um leve atraso.
      const k = reduced ? 1 : 0.18;
      current.x += (target.x - current.x) * k;
      current.y += (target.y - current.y) * k;
      if (box.current) box.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      frame = requestAnimationFrame(tick);
    };
    const move = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!started) {
        current.x = target.x;
        current.y = target.y;
        started = true;
      }
    };
    window.addEventListener("pointermove", move, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <div ref={box} className="cursor-preview" data-side={project && ["hackathon", "ebpf-scitec"].includes(project.id) ? "left" : "right"} aria-hidden="true">
      {FEATURED.map((item) => (
        <div
          key={item.id}
          className="cursor-preview-card"
          data-active={project?.id === item.id}
          style={{ background: item.panel, color: item.panelInk }}
        >
          {item.image ? (
            <img src={item.image.src} alt="" width="1568" height="716" />
          ) : (
            <pre>
              <code>{item.code}</code>
            </pre>
          )}
        </div>
      ))}
    </div>
  );
}

function Cover() {
  const [hovered, setHovered] = useState<Featured | null>(null);
  return (
    <section id="topo" className="cover" aria-labelledby="cover-title">
      <div className="s-wrap cover-grid">
        <p className="cover-kicker">João Pedro Plinta, desenvolvedor full stack</p>
        <h1 id="cover-title" className="masthead" aria-label="Pinguim">
          {"Pinguim".split("").map((letter, i) => (
            <span key={i} style={{ animationDelay: `${120 + i * 55}ms` }} aria-hidden="true">
              {letter}
            </span>
          ))}
        </h1>
        <CoverFigure />
        <ul className="cover-lines">
          {FEATURED.map((project, i) => (
            <li key={project.id}>
              <Link
                to={`/projetos/${project.slug}`}
                onMouseEnter={() => setHovered(project)}
                onMouseLeave={() => setHovered(null)}
              >
                <strong>{project.name}</strong>
                <span>{coverLine[project.id]}</span>
              </Link>
              <svg className="cover-arrow" viewBox="0 0 140 70" aria-hidden="true" style={{ animationDelay: `${1300 + i * 220}ms` }}>
                <path d={ARROWS[i]} pathLength={1} />
                <path d="M10 22 21 15M10 22l5 12" pathLength={1} />
              </svg>
            </li>
          ))}
        </ul>
        <CursorPreview project={hovered} />
      </div>
      <div className="s-wrap cover-intro">
        <p>
          Gosto de entender como as coisas funcionam, e de construí-las inteiras.
          Do banco de dados ao kernel.
        </p>
        <div className="cover-actions">
          <Link to="/#trabalho" className="s-button">
            Ver o trabalho
          </Link>
          <a href={PROFILE.resume} download className="s-link">
            Baixar currículo
          </a>
        </div>
      </div>
    </section>
  );
}

// Traços levemente irregulares, como desenhados à mão; a ponta fica sempre em (10, 22).
const ARROWS = [
  "M134 52c-18 6-40 9-61 1C51 45 30 33 10 22",
  "M134 30c-20-8-44-12-66-6-21 5-40 4-58-2",
  "M134 8c-12 18-34 34-60 36-24 2-46-8-64-22",
  "M134 14c-16 10-38 26-62 26-26 0-48-8-62-20",
];

const coverLine: Record<string, string> = {
  plana: "Um SaaS do banco de dados ao deploy",
  hackathon: "O sistema de um evento inteiro",
  "ebpf-scitec": "Olhando por dentro do kernel",
  "tcc-monitoramento": "Quanto custa monitorar uma rede",
};

function StoryFrames({ project }: { project: Featured }) {
  const study = CASE_STUDIES.find((item) => item.projectId === project.id);
  const frames = study?.screens ?? [];
  return (
    <div className="story-frames">
      {frames.length > 0 ? (
        frames.map((frame) => (
          <figure key={frame.src} className="story-frame" style={{ background: project.panel, color: project.panelInk }}>
            <img src={frame.src} alt={frame.alt} width="1568" height="716" loading="lazy" decoding="async" />
            <figcaption>{frame.caption}</figcaption>
          </figure>
        ))
      ) : (
        <>
          <figure className="story-frame" style={{ background: project.panel, color: project.panelInk }}>
            <div className="work-code">
              <pre>
                <code>{project.code}</code>
              </pre>
            </div>
            <figcaption>O coletor do minicurso: uma kprobe soma os bytes enviados por porta, direto no kernel.</figcaption>
          </figure>
          {study && (
            <figure className="story-frame story-flow" style={{ background: project.panel, color: project.panelInk }}>
              <ol>
                {study.flow.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <figcaption>{study.flowTitle}: o tráfego sai do container e é contado sem passar pelo /proc.</figcaption>
            </figure>
          )}
        </>
      )}
    </div>
  );
}

function Work() {
  return (
    <section id="trabalho" className="work" aria-labelledby="work-title">
      <div className="s-wrap">
        <div className="s-heading">
          <h2 id="work-title">Trabalho selecionado</h2>
          <p>Quatro projetos contados em detalhe: o problema, as decisões e o que ficou pronto.</p>
        </div>
        {FEATURED.map((project) => (
          <article key={project.id} className="work-item" aria-labelledby={`work-${project.id}`}>
            <div className="work-text">
              <p className="work-kind">{project.kind}</p>
              <h3 id={`work-${project.id}`}>
                <Link to={`/projetos/${project.slug}`}>{project.name}</Link>
              </h3>
              <p className="work-summary">{project.summary}</p>
              <dl className="work-facts">
                {project.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="work-links">
                <Link to={`/projetos/${project.slug}`} className="s-button">
                  Ler o estudo de caso
                </Link>
                {project.product && (
                  <a href={project.product} target="_blank" rel="noreferrer" className="s-link">
                    Abrir o produto <Icon name="arrow-up-right" />
                  </a>
                )}
              </div>
            </div>
            <StoryFrames project={project} />
          </article>
        ))}
        <div className="others">
          <h3>Outros projetos</h3>
          <ul>
            {PROJECTS.filter((p) => !FEATURED.some((f) => f.id === p.id)).map((project) => (
              <li key={project.id}>
                <span className="others-name">{project.title}</span>
                <span className="others-desc">{project.description}</span>
                <span className="others-tags">{project.tags.join(", ")}</span>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="s-link" aria-label={`Código de ${project.title} no GitHub`}>
                    Código <Icon name="arrow-up-right" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="about" aria-labelledby="about-title">
      <div className="s-wrap about-grid">
        <div className="about-portrait">
          <img
            src="/joao-pedro-plinta-960.webp"
            alt="João Pedro Plinta, de óculos e camiseta preta, em um retrato de estúdio"
            width="960"
            height="960"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="about-text">
          <h2 id="about-title">
            João Pedro no nome.
            <br />
            Pinguim no apelido.
          </h2>
          <p>
            Comecei a programar em 2018, pela curiosidade de entender como as coisas
            funcionam. Hoje trabalho com JavaScript, TypeScript e PHP, passando pela
            interface, pelas APIs e pelo banco de dados.
          </p>
          <p>
            Gosto de acompanhar o caminho completo de uma aplicação e de entender as
            decisões por trás de cada parte. O estágio em suporte técnico me ensinou que o
            software precisa funcionar para quem está do outro lado da tela.
          </p>
          <p>O pinguim tatuado veio antes do site. O apelido também.</p>
          <ol className="about-timeline" aria-label="Experiência e formação">
            {TIMELINE.map((item) => (
              <li key={item.year}>
                <span>{item.year}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <a href={PROFILE.resume} download className="s-link">
            Baixar currículo completo <Icon name="download" />
          </a>
        </div>
      </div>
    </section>
  );
}

const SKILL_LINKS: Record<string, { to: string; label: string }> = {
  Interfaces: { to: "/projetos/plana", label: "Na interface do Plana" },
  "Aplicações e APIs": { to: "/projetos/hackathon-ifpr", label: "Nas regras do Hackathon" },
  "Dados e infraestrutura": { to: "/projetos/plana", label: "Na infraestrutura do Plana" },
  "Entrega e observabilidade": { to: "/projetos/tcc-monitoramento", label: "No benchmark do TCC" },
};

function Craft() {
  return (
    <section id="ferramentas" className="craft" aria-labelledby="craft-title">
      <div className="s-wrap">
        <div className="s-heading s-heading-minor">
          <h2 id="craft-title">Ferramentas</h2>
          <p>O que uso no dia a dia, e onde dá para ver cada coisa funcionando.</p>
        </div>
        <div className="craft-grid">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className="craft-group">
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to={SKILL_LINKS[group.title].to} className="s-link">
                {SKILL_LINKS[group.title].label}
              </Link>
            </div>
          ))}
        </div>
        <p className="craft-more">Também uso Python, Java, C++, MongoDB e Figma.</p>
      </div>
    </section>
  );
}

const CRED_PREVIEW = 6;

function Credentials() {
  const [all, setAll] = useState(false);
  const groups = [
    { title: "Cursos e trilhas", items: CERTIFICATIONS },
    { title: "Eventos", items: EVENT_CERTIFICATES },
  ];
  return (
    <section id="certificados" className="credentials" aria-labelledby="cred-title">
      <div className="s-wrap">
        <div className="s-heading s-heading-minor">
          <h2 id="cred-title">Cursos e certificados</h2>
          <p>Da construção de aplicações à segurança e às redes.</p>
        </div>
        {groups.map((group) => (
          <div key={group.title} className="cred-group">
            <h3>{group.title}</h3>
            <ul>
              {(all ? group.items : group.items.slice(0, CRED_PREVIEW)).map((item) => (
                <li key={item.url}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`${item.title}, ${item.issuer}. Ver credencial em nova aba`}>
                    <time dateTime={item.date}>{item.dateLabel}</time>
                    <span className="cred-title">{item.title}</span>
                    <span className="cred-issuer">{item.issuer}</span>
                    <Icon name="arrow-up-right" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {groups.some((group) => group.items.length > CRED_PREVIEW) && (
          <button type="button" className="s-link cred-more" aria-expanded={all} onClick={() => setAll((v) => !v)}>
            {all ? "Mostrar menos" : `Ver todos os ${groups.reduce((n, g) => n + g.items.length, 0)} certificados`}
          </button>
        )}
      </div>
    </section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState<"idle" | "ok" | "error">("idle");
  const busy = useRef(false);
  async function copy() {
    if (busy.current) return;
    busy.current = true;
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied("ok");
    } catch {
      setCopied("error");
    } finally {
      busy.current = false;
    }
  }
  return (
    <section id="contato" className="contact" aria-labelledby="contact-title">
      <div className="s-wrap">
        <h2 id="contact-title">Vamos conversar.</h2>
        <p className="contact-lead">
          Sobre um produto, uma vaga ou uma ideia que ainda não saiu do papel.
          O caminho mais rápido é o e-mail.
        </p>
        <a className="contact-email" href={`mailto:${PROFILE.email}`}>
          {PROFILE.email}
        </a>
        <div className="contact-row">
          <button type="button" className="s-pill s-pill-inverse" onClick={copy}>
            {copied === "ok" ? "E-mail copiado" : "Copiar e-mail"}
          </button>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <Icon name="arrow-up-right" />
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer">
            GitHub <Icon name="arrow-up-right" />
          </a>
          <a href={PROFILE.resume} download>
            Currículo <Icon name="download" />
          </a>
        </div>
        <p className="contact-status" role="status">
          {copied === "error" ? "Não foi possível copiar. Selecione o endereço acima." : ""}
        </p>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      <Cover />
      <Work />
      <About />
      <Craft />
      <Credentials />
      <Contact />
    </>
  );
}
