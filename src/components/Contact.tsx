import { useRef, useState } from "react";
import { PROFILE } from "../data";
import { Icon } from "./UI";

export function Contact() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const copying = useRef(false);
  async function copyEmail() {
    if (copying.current) return;
    copying.current = true;
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    } finally {
      copying.current = false;
    }
  }
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <div>
          <p className="section-label">Contato</p>
          <h2 id="contact-title">
            Vamos conversar.
          </h2>
          <p className="contact-description">
            Para falar sobre um projeto, uma oportunidade ou trocar uma ideia
            sobre desenvolvimento, me encontre por aqui.
          </p>
          <div className="contact-options">
            <a href={`mailto:${PROFILE.email}?subject=Vamos%20conversar%20sobre%20um%20projeto`}><span>Tenho um projeto</span><p>Conversar sobre uma aplicação ou produto.</p><Icon name="arrow-up-right" /></a>
            <a href={`mailto:${PROFILE.email}?subject=Oportunidade%20profissional`}><span>Tenho uma oportunidade</span><p>Conversar sobre uma vaga ou colaboração.</p><Icon name="arrow-up-right" /></a>
          </div>
        </div>
        <div className="contact-details">
          <span className="contact-detail-label">Fale comigo por e-mail</span>
          <a className="email-link" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
          </a>
          <button className="copy-email" onClick={copyEmail}>
            <Icon name={copyState === "copied" ? "check" : "mail"} />
            {copyState === "copied"
              ? "Copiado! Copiar novamente"
              : "Copiar e-mail"}
          </button>
          <p className="copy-feedback" role="status">
            {copyState === "error"
              ? "Não foi possível copiar. Selecione o endereço acima ou use o link para enviar um e-mail."
              : copyState === "copied"
                ? "E-mail copiado para a área de transferência."
                : ""}
          </p>
          <div className="contact-socials">
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <Icon name="arrow-up-right" />
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer">
              GitHub <Icon name="arrow-up-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
