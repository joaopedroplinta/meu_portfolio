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

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="bg-accent3/[0.08] border border-accent3/30 rounded-xl p-10 text-center">
        <div className="text-[2.5rem] mb-3.5">✅</div>
        <p className="font-syne font-bold text-accent3 text-[1.05rem]">
          Mensagem enviada!
        </p>
        <p className="text-muted text-[0.82rem] mt-2">Retorno em breve.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="flex flex-col gap-3.5"
    >
      {(["name", "email"] as const).map((key) => (
        <div key={key}>
          <label className="block text-[0.66rem] text-muted tracking-[0.12em] uppercase mb-1.5">
            {key === "name" ? "Nome" : "Email"}
          </label>
          <input
            type={key === "email" ? "email" : "text"}
            placeholder={key === "name" ? "Seu nome" : "seu@email.com"}
            value={form[key]}
            onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
            required
            className="
              w-full bg-card border border-border text-hi
              px-3.5 py-3 rounded-lg font-mono text-[0.83rem]
              outline-none transition-colors duration-200
              focus:border-accent
            "
          />
        </div>
      ))}

      <div>
        <label className="block text-[0.66rem] text-muted tracking-[0.12em] uppercase mb-1.5">
          Mensagem
        </label>
        <textarea
          placeholder="Oi João, quero conversar sobre..."
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          required
          className="
            w-full min-h-[110px] bg-card border border-border text-hi
            px-3.5 py-3 rounded-lg font-mono text-[0.83rem]
            outline-none resize-y transition-colors duration-200
            focus:border-accent
          "
        />
      </div>

      <button
        type="submit"
        className="
          w-full bg-accent text-bg font-syne font-bold
          text-[0.82rem] tracking-[0.1em] uppercase
          py-3 rounded-lg border-none cursor-pointer
          transition-[transform,box-shadow] duration-200
          hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(124,106,247,0.4)]
        "
      >
        Enviar mensagem →
      </button>
    </form>
  );
}

export function Contact() {
  return (
    <section id="contact" className="max-w-[1160px] mx-auto px-12 py-[100px]">
      <SectionHeader num="04" title="Contato" />

      <div className="grid grid-cols-2 gap-[72px] items-start">
        {/* Left */}
        <FadeUp>
          <h3
            className="font-syne font-extrabold text-hi leading-[1.05] tracking-[-0.04em] mb-5"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Vamos{" "}
            <span className="font-serif italic text-accent">trabalhar</span>
            {" "}juntos?
          </h3>
          <p className="text-[0.84rem] text-muted max-w-[360px] leading-[1.85] mb-9">
            Seja para um novo projeto, uma oportunidade de emprego ou só uma
            conversa sobre tech — minha caixa de entrada está aberta.
          </p>
          <div className="flex flex-col gap-2.5">
            <ContactLink icon="✉️" label="joaopedrohenriqueplinta@gmail.com" href="mailto:joaopedrohenriqueplinta@gmail.com" />
            <ContactLink icon="💼" label="linkedin.com/in/joao-pedro-plinta"  href="https://linkedin.com/in/joao-pedro-plinta" />
            <ContactLink icon="🐙" label="github.com/joaopedroplinta"         href="https://github.com/joaopedroplinta" />
          </div>
        </FadeUp>

        {/* Right */}
        <FadeUp delay={0.15}>
          <ContactForm />
        </FadeUp>
      </div>
    </section>
  );
}
