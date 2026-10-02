import { Link } from "react-router-dom";
import { PROJECTS, type Project } from "../data";
import { caseHref, CASE_STUDIES } from "../data/caseStudies";
import { Icon, SectionHeader } from "./UI";
import { ProjectCover } from "./ProjectCover";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links">
      {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Acessar ${project.title}`}>Acessar produto <Icon name="arrow-up-right" /></a>}
      {project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Ver código de ${project.title}`}>Ver código <Icon name="code" /></a>}
    </div>
  );
}
function ProjectCard({ project }: { project: Project }) {
  const href = caseHref(project.id)!;
  const study = CASE_STUDIES.find((item) => item.projectId === project.id)!;
  return (
    <article className={`project-card project-${project.id}`} id={`project-${project.id}`}>
      <Link className="project-cover-link" to={href} aria-label={`Conhecer o projeto ${project.title}`}>
        <ProjectCover project={project} />
        <span className="cover-open" aria-hidden="true"><Icon name="arrow-up-right" /></span>
      </Link>
      <div className="project-body">
        <div className="project-summary">
          <h3><Link to={href}>{project.title}</Link></h3>
          <p className="project-question">{study.headline}</p>
          <p className="project-description">{project.description}</p>
        </div>
        <div className="project-info">
          <ul className="tags" aria-label="Tecnologias">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          <Link className="case-link" to={href}>Conhecer o projeto <Icon name="arrow-up-right" /></Link>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}
export function Projects() {
  const selected = ["plana", "hackathon"].map((id) => PROJECTS.find((project) => project.id === id)!);
  const research = PROJECTS.find((project) => project.id === "ebpf-scitec")!;
  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="container">
        <div id="projects-title"><SectionHeader title="Coisas que construí." description="Produtos, eventos e pesquisa. Abra um projeto para conhecer o que acontece por trás da interface." /></div>
        <div className="featured-projects">{selected.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
        <div className="research-feature">
          <div className="research-intro"><p>Além da interface</p><h3>Também gosto de olhar<br />por baixo do capô.</h3><p>Linux, observabilidade e uma pesquisa que virou prática de ensino.</p></div>
          <ProjectCard project={research} />
        </div>
        <div className="other-projects">
          <h3>Outros caminhos que explorei</h3>
          {PROJECTS.filter((project) => !project.featured && project.id !== research.id).map((project) => (
            <article className="project-row" key={project.id}>
              <div className="project-row-icon"><Icon name={project.id === "finantrack" ? "layers" : "code"} /></div>
              <div className="project-row-copy"><h4>{project.title}</h4><p>{project.description}</p><ul className="inline-tags" aria-label="Tecnologias">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
              <ProjectLinks project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
