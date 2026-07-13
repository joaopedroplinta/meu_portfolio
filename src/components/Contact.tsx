import { useState } from "react";
import { FadeUp, SectionHeader } from "./UI";

interface ContactLinkProps { icon: string; label: string; href: string; }

function ContactLink({ icon, label, href }: ContactLinkProps) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`
        flex items-center gap-3.5 no-underline font-mono text-[0.8rem]
        px-4 py-[13px] rounded-lg bg-card
        border transition-all duration-200
        ${hov ? "border-accent text-accent" : "border-border text-hi"}
      `}
    >
      <div className="w-8 h-8 bg-accent/10 rounded-md flex items-center justify-center shrink-0 text-base">
        {icon}
      </div>
      <span className="truncate">{label}</span>
    </a>
  );
}

export function Contact() {
  return (
    <section id="contact" className="max-w-[1160px] mx-auto px-5 sm:px-12 py-[80px] sm:py-[100px]">
      <SectionHeader title="Contribuindo" />

      <FadeUp className="flex flex-col items-center text-center">
        <p className="font-mono text-[0.65rem] text-accent tracking-wide mb-4">maintainer:</p>

        <h3
          className="font-display font-extrabold text-hi leading-[1.1] tracking-[-0.02em] mb-5"
          style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }}
        >
          Vamos{" "}
          <span className="font-serif italic text-accent">trabalhar</span>
          {" "}juntos?
        </h3>

        <p className="font-prose text-[0.84rem] text-muted leading-[1.85] mb-9 max-w-[460px]">
          Seja para um novo projeto, uma oportunidade de emprego ou só uma
          conversa sobre tech — minha caixa de entrada está aberta. Sem burocracia,
          sem template de issue.
        </p>

        <div className="flex flex-col gap-2.5 w-full max-w-[480px]">
          <ContactLink icon="✉️" label="joaopedrohenriqueplinta@gmail.com" href="mailto:joaopedrohenriqueplinta@gmail.com" />
          <ContactLink icon="💼" label="linkedin.com/in/joao-pedro-plinta"  href="https://linkedin.com/in/joao-pedro-plinta" />
          <ContactLink icon="🐙" label="github.com/joaopedroplinta"         href="https://github.com/joaopedroplinta" />
        </div>
      </FadeUp>
    </section>
  );
}
