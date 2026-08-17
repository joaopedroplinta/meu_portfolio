import { useTypewriter, useGitCommits } from "../hooks";

const ROLES = ["Full Stack Dev", "React Dev", "TypeScript Dev", "Node.js Dev", "PHP Dev", "Tech Enthusiast"];

const COMMITS_REPO = "joaopedroplinta/hackathon-ifpr";

// Fallback exibido enquanto a API do GitHub responde, ou se falhar/ratelimitar.
const FALLBACK_LOG_LINES = [
  { hash: "af4e0aa", msg: "docs: corrige status do check-in por QR" },
  { hash: "d1d3d8a", msg: "feat: leitor de QR na câmera do check-in" },
  { hash: "b8dc969", msg: "docs: minuta do DPO e roteiro do ensaio geral" },
  { hash: "93a9389", msg: "fix: bugs de dado realista + limpeza de scaffold" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="max-w-[1160px] mx-auto px-5 sm:px-12 min-h-screen flex items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[64px] items-center w-full pt-24 md:pt-0">
        <HeroContent />
        <TerminalCard />
      </div>
    </section>
  );
}

function HeroContent() {
  const role = useTypewriter(ROLES, 50, 50, 2000);

  return (
    <div>
      <div className="
        inline-flex items-center gap-2 mb-6
        bg-accent3/10 border border-accent3/30 text-accent3
        px-[12px] py-[5px] rounded font-mono text-[0.65rem] tracking-tight
      ">
        <span className="w-1.5 h-1.5 bg-accent3 rounded-full animate-blink" />
        v∞.0.0 · sempre no ar
      </div>

      <div className="flex items-center gap-3 mb-5 text-accent font-mono text-[0.67rem] tracking-[0.1em]">
        <span className="text-muted">$</span>
        <span>
          whoami --role
          <span className="text-hi ml-2">{role}</span>
          <span className="inline-block w-[2px] h-[0.9em] bg-accent ml-[2px] align-middle animate-blink" />
        </span>
      </div>

      <h1 className="font-display font-extrabold text-hi leading-[0.98] tracking-[-0.02em] mb-5"
        style={{ fontSize: "clamp(2.4rem, 5vw, 4.4rem)" }}>
        João Pedro
        <span className="block text-accent">Plinta.</span>
      </h1>

      <p className="font-serif italic text-[1.25rem] text-muted mb-6">
        Building things for the web.
      </p>

      <p className="font-prose text-muted text-[0.87rem] leading-[1.85] max-w-[420px] mb-7">
        Desenvolvedor apaixonado por criar experiências digitais elegantes e
        funcionais. Especializado em <strong className="text-hi font-medium">React, TypeScript, Node.js e Laravel</strong> —
        transformando ideias em código de qualidade, do commit ao deploy.
      </p>

      {/* diff-stat line */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-9 font-mono text-[0.72rem]">
        <span className="text-accent3">+2 anos exp</span>
        <span className="text-accent3">+10 projetos</span>
        <span className="text-accent2">~∞ energia</span>
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <a
          href="#projects"
          className="
            inline-flex items-center gap-2
            bg-accent text-bg font-mono font-semibold text-[0.76rem]
            px-6 py-[13px] rounded no-underline
            transition-[transform,box-shadow] duration-200
            hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(227,165,63,0.35)]
          "
        >
          ver releases →
        </a>

        <a
          href="/JoaoPedroPlinta_curriculo.pdf"
          download="JoaoPedroPlinta_curriculo.pdf"
          className="
            inline-flex items-center gap-2
            border border-border text-muted font-mono font-medium text-[0.76rem]
            px-6 py-[13px] rounded no-underline
            transition-[border-color,color,transform] duration-200
            hover:border-accent hover:text-accent hover:-translate-y-0.5
          "
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          cv.pdf
        </a>

        <a
          href="https://github.com/joaopedroplinta"
          target="_blank"
          rel="noreferrer"
          className="
            text-muted no-underline font-mono text-[0.76rem]
            transition-colors duration-200 hover:text-hi
          "
        >
          github →
        </a>
      </div>
    </div>
  );
}

function TerminalCard() {
  const { commits, error } = useGitCommits(COMMITS_REPO, 4);
  const lines = commits ?? FALLBACK_LOG_LINES;
  const isLive = commits !== null && !error;

  return (
    <div className="order-first md:order-last">
      <div className="rounded-xl border border-border bg-card overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
        {/* Chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
          <span className="w-[10px] h-[10px] rounded-full bg-accent2/70" />
          <span className="w-[10px] h-[10px] rounded-full bg-accent/70" />
          <span className="w-[10px] h-[10px] rounded-full bg-accent3/70" />
          <span className="ml-3 font-mono text-[0.65rem] text-muted truncate">
            ~/joao-pedro-plinta — zsh
          </span>
          {isLive && (
            <span className="ml-auto flex items-center gap-1.5 font-mono text-[0.6rem] text-accent3 shrink-0">
              <span className="w-1.5 h-1.5 bg-accent3 rounded-full animate-blink" />
              live
            </span>
          )}
        </div>

        {/* Body */}
        <div className="p-5 font-mono text-[0.72rem] leading-[1.9]">
          <p className="text-muted mb-3">
            <span className="text-accent3">➜</span> git log --oneline -4
            {isLive && <span className="text-muted/60"> · {COMMITS_REPO}</span>}
          </p>
          {lines.map((l) => (
            <p key={l.hash} className="truncate">
              <span className="text-accent">{l.hash}</span>{" "}
              <span className="text-hi">{l.msg}</span>
            </p>
          ))}
          <p className="mt-3 text-muted">
            <span className="text-accent3">➜</span>{" "}
            <span className="inline-block w-[7px] h-[1.1em] bg-accent3 align-middle animate-blink" />
          </p>
        </div>
      </div>
    </div>
  );
}
