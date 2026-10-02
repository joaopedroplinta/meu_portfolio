import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { PROFILE } from "../data";
import { useActiveSection } from "../hooks";
import { ThemeToggle } from "../components/ThemeToggle";

const NAV = [
  { id: "trabalho", label: "Trabalho" },
  { id: "sobre", label: "Sobre" },
  { id: "ferramentas", label: "Ferramentas" },
  { id: "contato", label: "Contato" },
];

export function Header() {
  const active = useActiveSection();
  const nav = useRef<HTMLElement>(null);

  // O traço sob o item ativo desliza de um link para o outro em vez de aparecer e sumir.
  useLayoutEffect(() => {
    const el = nav.current;
    if (!el) return;
    const place = () => {
      const link = el.querySelector<HTMLElement>("a[aria-current]");
      el.style.setProperty("--ind-opacity", link ? "1" : "0");
      if (link) {
        el.style.setProperty("--ind-x", `${link.offsetLeft}px`);
        el.style.setProperty("--ind-w", `${link.offsetWidth}px`);
      }
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  return (
    <header className="s-header">
      <div className="s-wrap s-header-row">
        <Link to="/" className="s-brand" aria-label="João Pedro Plinta, início">
          <span>João Pedro Plinta</span>
        </Link>
        <nav ref={nav} className="s-nav" aria-label="Navegação principal">
          {NAV.map((item) => (
            <Link
              key={item.id}
              to={`/#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <span className="s-nav-indicator" aria-hidden="true" />
        </nav>
        <div className="s-header-actions">
          <ThemeToggle />
          <Link to="/#contato" className="s-pill">
            Conversar
          </Link>
          <details className="s-menu">
            <summary aria-label="Abrir menu">Menu</summary>
            <nav aria-label="Navegação mobile">
              {NAV.map((item) => (
                <Link key={item.id} to={`/#${item.id}`}>
                  {item.label}
                </Link>
              ))}
              <a href={PROFILE.resume} download>
                Baixar currículo
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="s-footer">
      <div className="s-wrap s-footer-row">
        <span>© {new Date().getFullYear()} João Pedro Plinta</span>
        <span>Feito à mão, com React e TypeScript.</span>
        <Link to="/#topo">Voltar ao topo</Link>
      </div>
    </footer>
  );
}
