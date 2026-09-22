import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, PROFILE } from "../data";
import { useActiveSection } from "../hooks";
import { Icon } from "./UI";
import { ThemeToggle } from "./ThemeToggle";
import { AnimatePresence, m, useReducedMotion } from "motion/react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const active = useActiveSection();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 800px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  return (
    <header
      className="site-header"
      ref={header}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setMenuOpen(false);
      }}
    >
      <div className="container header-inner">
        <a
          className="wordmark"
          href="#hero"
          aria-label="João Pedro Plinta, início"
          onClick={closeMenu}
        >
          <span className="monogram" aria-hidden="true">
            jp<span>.</span>
          </span>
          <span>João Pedro Plinta</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={
                active === link.href.slice(1) ? "location" : undefined
              }
            >
              {active === link.href.slice(1) && (
                <m.span
                  className="nav-active-marker"
                  layoutId="active-section"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a href="#contact" className="header-contact">
            Vamos conversar <Icon name="arrow-up-right" />
          </a>
          <button
            ref={menuButton}
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={menuOpen ? "menu-lines is-open" : "menu-lines"}
              aria-hidden="true"
            >
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <m.nav
            initial={{ opacity: 0, y: reducedMotion ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : -8 }}
            transition={{ duration: reducedMotion ? 0 : 0.16 }}
            id="mobile-menu"
            className="mobile-nav"
            aria-label="Navegação mobile"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                aria-current={
                  active === link.href.slice(1) ? "location" : undefined
                }
              >
                {link.label}
                <Icon name="arrow-right" />
              </a>
            ))}
            <a href={PROFILE.resume} download onClick={closeMenu}>
              Baixar currículo <Icon name="download" />
            </a>
            <a href="#contact" onClick={closeMenu}>
              Vamos conversar <Icon name="arrow-up-right" />
            </a>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
