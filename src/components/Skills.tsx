import { SKILLS, SkillCategory } from "../data";
import { useInView } from "../hooks";
import { FadeUp, SectionHeader } from "./UI";

interface SkillBarProps {
  name: string;
  pct: number;
  color: string;
  animate: boolean;
}

function SkillBar({ name, pct, color, animate }: SkillBarProps) {
  return (
    <div className="mb-3.5">
      <div className="flex justify-between mb-[5px]">
        <span className="text-[0.78rem] text-hi">{name}</span>
        <span className="text-[0.7rem] text-muted font-mono">{pct}%</span>
      </div>
      <div className="h-[3px] bg-border rounded-sm overflow-hidden">
        <div
          className="h-full rounded-sm transition-[width] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            width: animate ? `${pct}%` : "0%",
            background: `linear-gradient(90deg, ${color}, #3ecfcf)`,
          }}
        />
      </div>
    </div>
  );
}

function SkillCard({ category, color, items }: SkillCategory) {
  const [ref, inView] = useInView(0.3);
  return (
    <div ref={ref} className="bg-card border border-border rounded-xl p-6">
      <p
        className="font-bold text-[0.68rem] tracking-[0.14em] uppercase mb-5"
        style={{ color }}
      >
        {category}
      </p>
      {items.map((item, i) => (
        <SkillBar key={i} {...item} color={color} animate={inView} />
      ))}
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="max-w-[1160px] mx-auto px-12 py-[100px]">
      <SectionHeader num="02" title="Habilidades" />
      <div className="grid grid-cols-3 gap-[18px]">
        {SKILLS.map((cat, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <SkillCard {...cat} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
