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
        flex items-center gap-3.5 no-underline text-[0.8rem]
        px-4 py-[13px] rounded-[10px] bg-card
        border transition-all duration-200
        ${hov ? "border-accent text-accent" : "border-border text-hi"}
      `}
    >
      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 text-base">
        {icon}
      </div>
      {label}
    </a>
  );
}

export function Contact() {
  return (
    <section id="contact" className="max-w-[1160px] mx-auto px-12 py-[100px]">
      <SectionHeader num="04" title="Contato" />

      <FadeUp className="flex flex-col items-center text-center">
        <h3
          className="font-syne font-extrabold text-hi leading-[1.05] tracking-[-0.04em] mb-5"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
        >
          Vamos{" "}
          <span className="font-serif italic text-accent">trabalhar</span>
          {" "}juntos?
        </h3>

        <p className="text-[0.84rem] text-muted leading-[1.85] mb-9 max-w-[460px]">
          Seja para um novo projeto, uma oportunidade de emprego ou só uma
          conversa sobre tech — minha caixa de entrada está aberta.
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