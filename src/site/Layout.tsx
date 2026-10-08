import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { PROFILE } from "../data";
import { useActiveSection } from "../hooks";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { id: "trabalho", label: "Trabalhos" },
  { id: "sobre", label: "Sobre" },
  { id: "ferramentas", label: "Ferramentas" },
  { id: "certificados", label: "Certificados" },
  { id: "contato", label: "Contato" },
];

function SideMenu({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
      if (event.key === "Tab" && panel.current) {
        // Mantém o foco dentro da barra enquanto ela está aberta.
        const items = [...panel.current.querySelectorAll<HTMLElement>("a, button")];
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 801px)").matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);
  return (
    <div className="s-menu" data-open={open}>
      <button
        ref={button}
        type="button"
        className="s-burger"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="side-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      {createPortal(
        <>
          <div className="s-scrim" data-open={open} onClick={close} aria-hidden="true" />
          <nav
            ref={panel}
            id="side-menu"
            className="s-drawer"
            data-open={open}
            aria-label="Navegação mobile"
            {...(open ? {} : { inert: "" })}
          >
            {NAV.map((item) => (
              <Link
                key={item.id}
                to={`/#${item.id}`}
                aria-current={active === item.id ? "location" : undefined}
                onClick={close}
              >
                {item.label}
              </Link>
            ))}
            <a href={PROFILE.resume} download onClick={close} className="s-drawer-secondary">
              Baixar currículo
            </a>
          </nav>
        </>,
        document.body,
      )}
    </div>
  );
}

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
          <SideMenu active={active} />
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
