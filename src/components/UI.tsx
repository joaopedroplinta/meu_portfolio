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
  num: string;
  title: string;
}

export function SectionHeader({ num, title }: SectionHeaderProps) {
  return (
    <FadeUp className="flex items-center gap-4 mb-14">
      <span className="font-mono text-[0.68rem] text-accent tracking-[0.2em]">
        {num}
      </span>
      <h2 className="font-syne font-extrabold text-[2rem] text-hi tracking-tight leading-none">
        {title}
      </h2>
      <div className="flex-1 h-px bg-border" />
    </FadeUp>
  );
}
