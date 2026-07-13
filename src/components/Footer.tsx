const FOOTER_LINKS = [
  { href: "https://github.com/joaopedroplinta",      label: "GitHub"   },
  { href: "https://linkedin.com/in/joao-pedro-plinta", label: "LinkedIn" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-5 sm:px-12 py-[22px] flex flex-col sm:flex-row justify-between items-center gap-3 font-mono">
      <span className="text-[0.7rem] text-muted text-center sm:text-left">
        MIT License · © {year} João Pedro Plinta
      </span>

      <div className="flex gap-[20px]">
        {FOOTER_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="
              text-[0.68rem] text-muted no-underline
              transition-colors duration-200 hover:text-accent
            "
          >
            {l.label.toLowerCase()}
          </a>
        ))}
      </div>
    </footer>
  );
}