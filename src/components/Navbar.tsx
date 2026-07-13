import { useState } from "react";
import { NAV_LINKS } from "../data";
import { useScrolled, useScrollProgress } from "../hooks";

export function Navbar() {
  const scrolled = useScrolled();
  const progress = useScrollProgress();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-0.5 z-[300] pointer-events-none transition-[width] duration-100"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, var(--accent), var(--accent3))",
        }}
      />

      <nav
        className={`
          fixed top-0 w-full z-[100] px-5 sm:px-12 py-4
          flex justify-between items-center
          transition-all duration-300
          ${scrolled
            ? "backdrop-blur-xl bg-bg/85 border-b border-border"
            : "bg-transparent border-b border-transparent"
          }
        `}
      >
        <a
          href="#"
          className="flex items-center gap-2 no-underline font-mono text-[0.78rem] tracking-tight min-w-0"
        >
          <span className="text-accent3 shrink-0" aria-hidden="true">●</span>
          <span className="text-hi font-medium truncate">joaopedroplinta</span>
          <span className="text-muted shrink-0">/</span>
          <span className="text-muted truncate hidden sm:inline">CHANGELOG.md</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="
                no-underline text-muted font-mono text-[0.7rem] tracking-[0.04em]
                transition-colors duration-200 hover:text-hi
              "
            >
              {l.label}
            </a>
          ))}

          <a
            href="/JoaoPedroPlinta_curriculo.pdf"
            download="JoaoPedroPlinta_curriculo.pdf"
            className="
              inline-flex items-center gap-2
              border border-accent/60 text-accent font-mono font-medium text-[0.7rem]
              px-[14px] py-[6px] rounded no-underline
              transition-[background,color,box-shadow] duration-200
              hover:bg-accent hover:text-bg hover:shadow-[0_6px_20px_rgba(227,165,63,0.3)]
            "
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            cv.pdf
          </a>

          <a
            href="#contact"
            className="
              bg-accent text-bg font-mono font-semibold text-[0.7rem]
              px-[14px] py-[6px] rounded no-underline
              transition-shadow duration-200
              hover:shadow-[0_6px_20px_rgba(227,165,63,0.4)]
            "
          >
            contato →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-hi transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-hi transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-hi transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        className={`
          fixed top-[57px] left-0 right-0 z-[99]
          backdrop-blur-xl bg-bg/95 border-b border-border
          flex flex-col gap-0
          transition-all duration-300 md:hidden
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="
              no-underline text-muted font-mono text-[0.75rem]
              px-6 py-4 border-b border-border/50
              transition-colors duration-200 hover:text-hi hover:bg-white/[0.02]
            "
          >
            {l.label}
          </a>
        ))}
        <div className="flex gap-3 px-6 py-4">
          <a
            href="/JoaoPedroPlinta_curriculo.pdf"
            download="JoaoPedroPlinta_curriculo.pdf"
            className="
              inline-flex items-center gap-2 justify-center
              border border-accent/60 text-accent font-mono font-medium text-[0.7rem]
              px-4 py-2 rounded no-underline flex-1
            "
          >
            cv.pdf
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="
              bg-accent text-bg font-mono font-semibold text-[0.7rem]
              px-4 py-2 rounded no-underline flex-1 text-center
            "
          >
            contato →
          </a>
        </div>
      </div>
    </>
  );
}
