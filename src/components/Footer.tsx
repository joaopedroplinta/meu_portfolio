const FOOTER_LINKS = [
  { href: "https://github.com/joaopedroplinta",      label: "GitHub"   },
  { href: "https://linkedin.com/in/joao-pedro-plinta", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-12 py-[26px] flex justify-between items-center">
      <span className="text-[0.73rem] text-muted">
        © 2025 João Pedro Plinta — Desenvolvido com ♥ e muito café
      </span>

      <div className="flex gap-[22px]">
        {FOOTER_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="
              text-[0.68rem] text-muted no-underline
              tracking-[0.1em] uppercase
              transition-colors duration-200 hover:text-accent
            "
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
