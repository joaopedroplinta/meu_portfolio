import { PROJECTS, Project } from "../data";
import { Icon, SectionHeader } from "./UI";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          aria-label={`Acessar ${project.title}`}
        >
          Acessar projeto <Icon name="arrow-up-right" />
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`Ver código de ${project.title}`}
        >
          Ver código <Icon name="code" />
        </a>
      )}
    </div>
  );
}
function ProjectDetails({ project }: { project: Project }) {
  if (!project.highlights) return null;
  return (
    <details className="project-details">
      <summary>
        Decisões e funcionalidades <Icon name="plus" />
      </summary>
      <ul>
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </details>
  );
}
function ProjectCard({
  project,
  latest,
}: {
  project: Project;
  latest: boolean;
}) {
  return (
    <article
      className={`project-card project-${project.id}`}
      id={`project-${project.id}`}
    >
      <div className="project-media">
        <div className="project-media-label">
          <span>{project.category}</span>
          {latest && <span>Mais recente</span>}
        </div>
        <div className="project-image-frame">
          <img
            src={project.image}
            alt={`Captura da interface de ${project.title}`}
            width={project.id === "plana" ? 1179 : 1034}
            height={project.id === "plana" ? 454 : 855}
            loading="lazy"
          />
        </div>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="tags" aria-label="Tecnologias">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <ProjectDetails project={project} />
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
export function Projects() {
  return (
    <section
      id="projects"
      className="section projects-section"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div id="projects-title">
          <SectionHeader
            title="Projetos em foco"
            description="Produtos e aplicações que mostram como penso e construo software."
          />
        </div>
        <div className="featured-projects">
          {PROJECTS.filter((project) => project.featured).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              latest={project.id === PROJECTS[0].id}
            />
          ))}
        </div>
        <div className="other-projects">
          <h3>Outras construções e experimentos</h3>
          {PROJECTS.filter((project) => !project.featured).map((project) => (
            <article className="project-row" key={project.id}>
              <div className="project-row-icon">
                <Icon name={project.id === "finantrack" ? "layers" : "code"} />
              </div>
              <div className="project-row-copy">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <ul className="inline-tags" aria-label="Tecnologias">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <ProjectDetails project={project} />
              </div>
              <ProjectLinks project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
