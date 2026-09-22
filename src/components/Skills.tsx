import { SKILL_GROUPS } from "../data";
import { Icon, SectionHeader } from "./UI";

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
            title="O que uso para construir"
            description="Minha base de trabalho, da interface ao ambiente de produção."
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
