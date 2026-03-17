import { useState } from "react";
import { PROJECTS, Project } from "../data";
import { useInView } from "../hooks";
import { SectionHeader } from "./UI";

function ProjectLinks({ demo, github }: { demo: string; github: string }) {
  return (
    <div className="flex gap-[18px]">
      {[{ href: demo, label: "Demo →" }, { href: github, label: "GitHub →" }].map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="
            text-[0.72rem] text-muted no-underline tracking-[0.08em] uppercase
            transition-colors duration-200 hover:text-accent
          "
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

function TagList({ tags, featured }: { tags: string[]; featured?: boolean }) {
  return (
    <div className="flex flex-wrap gap-1.5 mb-3.5">
      {featured && (
        <span className="
          bg-accent/20 text-accent border border-accent/30
          px-2.5 py-[3px] rounded text-[0.6rem] tracking-[0.1em] uppercase
        ">
          ★ Featured
        </span>
      )}
      {tags.map((t) => (
        <span
          key={t}
          className="
            bg-white/[0.04] text-muted border border-border
            px-2.5 py-[3px] rounded text-[0.6rem] tracking-[0.08em] uppercase
          "
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function FeaturedCard({ p }: { p: Project }) {
  const [ref, inView] = useInView(0.1);
  const [hov, setHov] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`
        col-span-2 grid grid-cols-2
        bg-card rounded-2xl overflow-hidden
        border transition-[opacity,transform,border-color] duration-[0.7s,0.7s,0.2s]
        ${hov ? "border-accent" : "border-border"}
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}
      `}
    >
      {/* Image */}
      <div
        className="relative min-h-[260px] flex items-center justify-center text-[4rem]"
        style={{ background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-accent2/10" />
        <span className="relative z-10">{p.emoji}</span>
      </div>

      {/* Body */}
      <div className="p-7">
        <TagList tags={p.tags} featured />
        <h3 className="font-syne font-extrabold text-[1.3rem] text-hi tracking-tight mb-2.5">
          {p.title}
        </h3>
        <p className="text-[0.82rem] text-muted leading-[1.75] mb-6">
          {p.description}
        </p>
        <ProjectLinks demo={p.demo} github={p.github} />
      </div>
    </div>
  );
}

function SmallCard({ p }: { p: Project }) {
  const [ref, inView] = useInView(0.1);
  const [hov, setHov] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`
        bg-card rounded-2xl overflow-hidden border
        transition-[opacity,transform,border-color]
        ${hov ? "border-accent -translate-y-1" : "border-border translate-y-0"}
        ${inView ? "opacity-100" : "opacity-0 translate-y-7"}
      `}
      style={{ transitionDuration: "0.3s, 0.3s, 0.2s" }}
    >
      {/* Image */}
      <div
        className="relative h-[170px] flex items-center justify-center text-[3rem]"
        style={{ background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent3/[0.08]" />
        <span className="relative z-10">{p.emoji}</span>
      </div>

      {/* Body */}
      <div className="p-[22px]">
        <TagList tags={p.tags} />
        <h3 className="font-syne font-bold text-[1.1rem] text-hi tracking-tight mb-2">
          {p.title}
        </h3>
        <p className="text-[0.8rem] text-muted leading-[1.7] mb-[18px]">
          {p.description}
        </p>
        <ProjectLinks demo={p.demo} github={p.github} />
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="max-w-[1160px] mx-auto px-12 py-[100px]">
      <SectionHeader num="03" title="Projetos" />
      <div className="grid grid-cols-2 gap-[18px]">
        {PROJECTS.map((p, i) =>
          p.featured
            ? <FeaturedCard key={i} p={p} />
            : <SmallCard    key={i} p={p} />
        )}
      </div>
    </section>
  );
}
