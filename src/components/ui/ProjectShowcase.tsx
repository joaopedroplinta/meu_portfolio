import { useState, type PointerEvent } from "react";
import {
  AnimatePresence,
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { PROJECTS } from "../../data";
import { Icon } from "../UI";

/**
 * Adapted from Project Showcase by Jatin Yadav on 21st.dev.
 * https://21st.dev/@jatin-yadav05/components/project-showcase
 * Uses Motion springs instead of a perpetual React/RAF loop. The preview stays
 * in its reserved space; buttons make the original hover interaction usable
 * with keyboard and touch. All project data and visual styling are local.
 */
export function ProjectShowcase() {
  const projects = PROJECTS.filter((project) => project.featured)
    .slice()
    .reverse();
  const [selected, setSelected] = useState(projects[0].id);
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 24 });
  const springY = useSpring(y, { stiffness: 180, damping: 24 });
  const project = projects.find((item) => item.id === selected) ?? projects[0];

  function movePreview(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 10);
    y.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 8);
  }

  return (
    <div
      className="project-explorer"
      onPointerMove={movePreview}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div className="explorer-heading">
        <span>Projetos selecionados</span>
        <span>
          Explore o trabalho <Icon name="arrow-down" />
        </span>
      </div>
      <div className={`explorer-stage explorer-stage-${project.id}`}>
        <m.div
          className="explorer-preview"
          style={{
            x: reducedMotion ? 0 : springX,
            y: reducedMotion ? 0 : springY,
          }}
        >
          <AnimatePresence initial={false} mode="wait">
            <m.a
              key={project.id}
              className="explorer-image-link"
              href={`#project-${project.id}`}
              aria-label={`Conhecer o projeto ${project.title}`}
              initial={{
                opacity: reducedMotion ? 1 : 0,
                y: reducedMotion ? 0 : 8,
              }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: reducedMotion ? 1 : 0,
                y: reducedMotion ? 0 : -8,
              }}
              transition={{ duration: reducedMotion ? 0 : 0.18 }}
            >
              <div className="browser-toolbar" aria-hidden="true">
                <span className="browser-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span>
                  {project.id === "plana"
                    ? "planaapp.com.br"
                    : "Hackathon IFPR"}
                </span>
                <Icon name="arrow-up-right" />
              </div>
              <div className="explorer-image">
                <img
                  src={project.image}
                  alt={`Interface do ${project.title}`}
                  width={project.id === "plana" ? 1179 : 1034}
                  height={project.id === "plana" ? 454 : 855}
                  fetchPriority={project.id === "plana" ? "high" : "auto"}
                />
              </div>
            </m.a>
          </AnimatePresence>
        </m.div>
        <span className="explorer-caption" aria-live="polite">
          {project.category}
        </span>
      </div>
      <div
        className="explorer-list"
        role="group"
        aria-label="Escolher prévia de projeto"
      >
        {projects.map((item) => (
          <button
            key={item.id}
            className="explorer-item"
            aria-pressed={selected === item.id}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") setSelected(item.id);
            }}
            onFocus={() => setSelected(item.id)}
            onClick={() => setSelected(item.id)}
          >
            {selected === item.id && (
              <m.span
                className="explorer-selection"
                layoutId="selected-project"
                transition={{ type: "spring", stiffness: 380, damping: 34 }}
              />
            )}
            <span className="explorer-item-name">
              {item.title}
              <span>
                {item.id === "plana" ? "SaaS em produção" : "Gestão de eventos"}
              </span>
            </span>
            <Icon name="arrow-up-right" />
          </button>
        ))}
      </div>
    </div>
  );
}
