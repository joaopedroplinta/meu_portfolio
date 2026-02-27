import { NAV_LINKS } from "../data";
import { useScrolled, useScrollProgress } from "../hooks";

export function Navbar() {
  const scrolled   = useScrolled();
  const progress   = useScrollProgress();

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-0.5 z-[300] pointer-events-none transition-[width] duration-100"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #7c6af7, #e84393)",
        }}
      />

      <nav
        className={`
          fixed top-0 w-full z-[100] px-12 py-5
          flex justify-between items-center
          transition-all duration-300
          ${scrolled
            ? "backdrop-blur-xl bg-bg/88 border-b border-border"
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
