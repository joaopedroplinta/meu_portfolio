import { DEPENDENCIES, DependencyGroup } from "../data";
import { useInView } from "../hooks";
import { FadeUp, SectionHeader } from "./UI";

interface SkillRowProps {
  name: string;
  pct: number;
  animate: boolean;
}

function SkillRow({ name, pct, animate }: SkillRowProps) {
  return (
    <div className="flex items-center gap-3 py-[5px]">
      <span className="text-hi text-[0.78rem] w-[104px] shrink-0 truncate">"{name}"</span>
      <span className="text-muted text-[0.72rem]">:</span>
      <div className="flex-1 h-[3px] bg-border rounded-sm overflow-hidden">
        <div
          className="h-full rounded-sm bg-accent3 transition-[width] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: animate ? `${pct}%` : "0%" }}
        />
      </div>
      <span className="text-accent3 text-[0.68rem] w-9 text-right shrink-0">{pct}</span>
    </div>
  );
}

function DependencyBlock({ name, comment, items }: DependencyGroup) {
  const [ref, inView] = useInView(0.25);
  return (
    <div ref={ref} className="bg-card border border-border rounded-xl p-6 sm:p-7">
      <p className="font-mono text-[0.62rem] text-muted mb-1">{comment}</p>
      <p className="font-mono text-[0.85rem] mb-4">
        <span className="text-accent">"{name}"</span>
        <span className="text-muted">: {"{"}</span>
      </p>
      <div className="pl-3">
        {items.map((item) => (
          <SkillRow key={item.name} {...item} animate={inView} />
        ))}
      </div>
      <p className="font-mono text-muted text-[0.85rem] mt-3">{"}"}</p>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="max-w-[1160px] mx-auto px-5 sm:px-12 py-[80px] sm:py-[100px]">
      <SectionHeader title="package.json" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px]">
        {DEPENDENCIES.map((group, i) => (
          <FadeUp key={group.name} delay={i * 0.1}>
            <DependencyBlock {...group} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
