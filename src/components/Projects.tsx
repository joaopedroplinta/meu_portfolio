import { useState } from "react";
import { PROJECTS, Project } from "../data";
import { useInView, useLatestVersion } from "../hooks";
import { SectionHeader } from "./UI";

function repoSlug(githubUrl?: string) {
  const match = githubUrl?.match(/github\.com\/([^/]+\/[^/]+?)\/?$/);
  return match?.[1];
}

function ProjectLinks({ demo, github }: { demo: string; github?: string }) {
  const links = [
    { href: demo, label: "demo", show: demo && demo !== "#" },
    { href: github, label: "source", show: github && github !== "#" },
  ].filter(l => l.show);

  return (
    <div className="flex gap-4 font-mono">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="
            text-[0.72rem] text-accent no-underline
            transition-colors duration-200 hover:text-hi
          "
        >
          [{l.label} →]
        </a>
      ))}
    </div>
  );
}

function TagRow({ tags }: { tags: string[] }) {
  return (
    <p className="font-mono text-[0.66rem] text-muted mb-4 leading-[1.7]">
      <span className="text-muted/70">tags: </span>
      {tags.join(" · ")}
    </p>
  );
}

function MediaPanel({ p, compact }: { p: Project; compact?: boolean }) {
  return (
    <div
      className={`
        relative flex items-center justify-center overflow-hidden shrink-0
        ${compact ? "h-[150px] sm:h-[160px]" : "min-h-[200px] sm:min-h-full"}
      `}
      style={{ background: `linear-gradient(150deg, ${p.gradientFrom}, ${p.gradientTo})` }}
    >
      {p.image ? (
        <img src={p.image} alt={`Captura de tela de ${p.title}`} className="absolute inset-0 w-full h-full object-cover object-top" />
      ) : (
        <span className={compact ? "text-[3rem]" : "text-[4rem]"} aria-hidden="true">{p.emoji}</span>
      )}
    </div>
  );
}

function FeaturedCard({ p }: { p: Project }) {
  const [ref, inView] = useInView(0.1);
  const [hov, setHov] = useState(false);
  const version = useLatestVersion(repoSlug(p.github)) ?? p.version;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`
        col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-[0.9fr_1.1fr]
        bg-card rounded-xl overflow-hidden
        border transition-[opacity,transform,border-color] duration-[0.7s,0.7s,0.2s]
        ${hov ? "border-accent/50" : "border-border"}
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}
      `}
    >
      <MediaPanel p={p} />

      <div className="p-6 sm:p-7 flex flex-col">
        <div className="flex items-center gap-2.5 mb-3 flex-wrap">
          {p.latest && (
            <span className="bg-accent3/15 text-accent3 border border-accent3/30 px-2 py-[2px] rounded font-mono text-[0.6rem]">
              latest
            </span>
          )}
          <span className="font-mono text-[0.68rem] text-muted">{version}</span>
        </div>

        <h3 className="font-display font-extrabold text-[1.15rem] sm:text-[1.25rem] text-hi tracking-tight mb-2">
          <span className="text-muted">## [</span>{p.title}<span className="text-muted">]</span>
        </h3>

        <p className="font-prose text-[0.82rem] text-muted leading-[1.7] mb-3">
          {p.description}
        </p>

        {p.highlights && (
          <div className="mb-4">
            <p className="font-mono text-[0.64rem] text-accent tracking-wide mb-1.5">### Added</p>
            <ul className="space-y-1.5">
              {p.highlights.map((h) => (
                <li key={h} className="font-prose text-[0.78rem] text-muted leading-[1.6] pl-4 relative">
                  <span className="absolute left-0 text-accent3 font-mono">+</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto">
          <TagRow tags={p.tags} />
          <ProjectLinks demo={p.demo} github={p.github} />
        </div>
      </div>
    </div>
  );
}

function SmallCard({ p }: { p: Project }) {
  const [ref, inView] = useInView(0.1);
  const [hov, setHov] = useState(false);
  const version = useLatestVersion(repoSlug(p.github)) ?? p.version;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`
        bg-card rounded-xl overflow-hidden border flex flex-col
        transition-[opacity,transform,border-color]
        ${hov ? "border-accent/50 -translate-y-1" : "border-border translate-y-0"}
        ${inView ? "opacity-100" : "opacity-0 translate-y-7"}
      `}
      style={{ transitionDuration: "0.3s, 0.3s, 0.2s" }}
    >
      <MediaPanel p={p} compact />

      <div className="p-5 flex flex-col flex-1">
        <p className="font-mono text-[0.65rem] text-muted mb-2">{version}</p>
        <h3 className="font-display font-bold text-[1rem] text-hi tracking-tight mb-2">
          <span className="text-muted">## [</span>{p.title}<span className="text-muted">]</span>
        </h3>
        <p className="font-prose text-[0.78rem] text-muted leading-[1.65] mb-4">
          {p.description}
        </p>
        <div className="mt-auto">
          <TagRow tags={p.tags} />
          <ProjectLinks demo={p.demo} github={p.github} />
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="max-w-[1160px] mx-auto px-5 sm:px-12 py-[80px] sm:py-[100px]">
      <SectionHeader title="Releases" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
        {PROJECTS.map((p, i) =>
          p.featured
            ? <FeaturedCard key={i} p={p} />
            : <SmallCard    key={i} p={p} />
        )}
      </div>
    </section>
  );
}
