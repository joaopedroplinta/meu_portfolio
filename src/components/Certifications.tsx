import { CERTIFICATIONS, EVENT_CERTIFICATES } from "../data/certifications";
import { Icon } from "./UI";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="section certifications-section container"
      aria-labelledby="certifications-title"
    >
      <div className="certifications-heading">
        <div>
          <p className="section-label">Aprendizado contínuo</p>
          <h2 id="certifications-title">Cursos, certificados e eventos.</h2>
        </div>
        <p>
          Da construção de aplicações à segurança e às redes. Uma seleção dos
          estudos e encontros que complementam minha experiência com código.
        </p>
      </div>
      {[
        { title: "Cursos e trilhas", items: CERTIFICATIONS },
        { title: "Participação em eventos", items: EVENT_CERTIFICATES },
      ].map((group) => (
        <div className="certification-group" key={group.title}>
          <h3 className="certification-group-title">{group.title}</h3>
          <ul className="certification-list">
          {group.items.map((certificate) => (
            <li key={certificate.url}>
              <a
                className="certification-link"
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${certificate.title}, ${certificate.issuer}. Ver credencial em nova aba`}
              >
                <span className="certification-issuer">{certificate.issuer}</span>
                <div className="certification-detail">
                  <span className="certification-area">{certificate.area}</span>
                  <h4>{certificate.title}</h4>
                </div>
                <time dateTime={certificate.date} aria-label={`Certificado emitido em ${certificate.dateLabel}`}>
                  {certificate.dateLabel}
                </time>
                <span className="certification-action">
                  Ver credencial <Icon name="arrow-up-right" />
                </span>
              </a>
            </li>
          ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
