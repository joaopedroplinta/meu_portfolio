import { NAV_LINKS } from "../data";
import { useScrolled, useScrollProgress } from "../hooks";

export function Navbar() {
  const scrolled = useScrolled();
  const progress = useScrollProgress();

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-0.5 z-[300] pointer-events-none transition-[width] duration-100"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, var(--accent), var(--accent2))",
        }}
      />

      <nav
        className={`
          fixed top-0 w-full z-[100] px-12 py-5
          flex justify-between items-center
          transition-all duration-300
          ${scrolled
            ? "backdrop-blur-xl bg-bg/80 border-b border-border"
            : "bg-transparent border-b border-transparent"
          }
        `}
      >
        <a
          href="#"
          className="font-syne font-extrabold text-[1.1rem] text-hi no-underline tracking-tight"
        >
          JP<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="
                no-underline text-muted text-[0.7rem] tracking-[0.12em] uppercase
                transition-colors duration-200 hover:text-hi
              "
            >
              {l.label}
            </a>
          ))}

          {/* Download CV */}
          <a
            href="/curriculo.pdf"
            download="JoaoPedroPlinta_curriculo.pdf"
            className="
              inline-flex items-center gap-2
              border border-accent text-accent font-bold text-[0.7rem] tracking-[0.1em] uppercase
              px-[18px] py-[7px] rounded no-underline
              transition-[background,color,box-shadow] duration-200
              hover:bg-accent hover:text-bg hover:shadow-[0_6px_20px_rgba(124,106,247,0.35)]
            "
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            CV
          </a>

          <a
            href="#contact"
            className="
              bg-accent text-bg font-bold text-[0.7rem] tracking-[0.1em] uppercase
              px-[18px] py-[7px] rounded no-underline
              transition-shadow duration-200
              hover:shadow-[0_6px_20px_rgba(124,106,247,0.45)]
            "
          >
            Contato
          </a>
        </div>
      </nav>
    </>
  );
}