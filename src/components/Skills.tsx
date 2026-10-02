import { Link } from "react-router-dom";
import { SKILL_GROUPS } from "../data";
import { Icon, SectionHeader } from "./UI";

const EXAMPLES = {
  code: { href: "/projetos/plana", label: "Na interface do Plana" },
  layers: { href: "/projetos/hackathon-ifpr", label: "Nas regras do Hackathon" },
  database: { href: "/projetos/plana", label: "Na infraestrutura do Plana" },
};

export function Skills() {
  return (
    <section
      id="skills"
      className="section skills-section"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <div id="skills-title">
          <SectionHeader
            title="Ferramentas, em contexto."
            description="As tecnologias fazem mais sentido quando você vê onde elas entram."
          />
        </div>
        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <article className="skill-group" key={group.title}>
              <span className="skill-icon">
                <Icon name={group.icon} />
              </span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="skill-example" to={EXAMPLES[group.icon].href}>
                {EXAMPLES[group.icon].label} <Icon name="arrow-up-right" />
              </Link>
            </article>
          ))}
        </div>
        <p className="additional-skills">
          <span>Também no repertório</span> Python, Java, C++, MongoDB e Figma.
        </p>
      </div>
    </section>
  );
}
