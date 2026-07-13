import { ReactNode } from "react";
import { useInView } from "../hooks";

// ── FadeUp ───────────────────────────────────────────────────────────────────
interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeUp({ children, delay = 0, className = "" }: FadeUpProps) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ── SectionHeader ────────────────────────────────────────────────────────────
interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <FadeUp className="flex items-center gap-4 mb-14">
      <h2 className="font-display font-extrabold text-[1.6rem] sm:text-[1.9rem] tracking-tight leading-none whitespace-nowrap">
        <span className="text-muted">## </span>
        <span className="text-accent">[</span>
        <span className="text-hi">{title}</span>
        <span className="text-accent">]</span>
      </h2>
      <div className="flex-1 h-px bg-border" />
    </FadeUp>
  );
}
