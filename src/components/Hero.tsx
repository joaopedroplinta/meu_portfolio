export function Hero() {
  return (
    <section
      id="hero"
      className="max-w-[1160px] mx-auto px-12 min-h-screen flex items-center"
    >
      <div className="grid grid-cols-2 gap-[72px] items-center w-full">
        <HeroContent />
        <HeroAvatar />
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <div>
      {/* Available badge */}
      <div className="
        inline-flex items-center gap-2 mb-7
        bg-accent3/10 border border-accent3/30 text-accent3
        px-[14px] py-[6px] rounded-full text-[0.67rem] tracking-[0.12em]
      ">
        <span className="w-1.5 h-1.5 bg-accent3 rounded-full animate-blink" />
        Disponível para oportunidades
      </div>

      {/* Label */}
      <div className="flex items-center gap-3 mb-5 text-accent text-[0.67rem] tracking-[0.2em] uppercase">
        <span className="w-7 h-px bg-accent" />
        Desenvolvedor Full Stack
      </div>

      {/* Name */}
      <h1 className="font-syne font-extrabold text-hi leading-[0.95] tracking-[-0.04em] mb-5"
        style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)" }}>
        João Pedro
        <span className="block text-accent">Plinta.</span>
      </h1>

      {/* Role */}
      <p className="font-serif italic text-[1.3rem] text-muted mb-6">
        Building things for the web.
      </p>

      {/* Description */}
      <p className="text-muted text-[0.87rem] leading-[1.85] max-w-[400px] mb-10">
        Desenvolvedor apaixonado por criar experiências digitais elegantes e
        funcionais. Especializado em <strong className="text-hi font-normal">React, TypeScript e Node.js</strong> —
        transformando ideias em código de qualidade.
      </p>

      {/* CTAs */}
      <div className="flex items-center gap-4">
        <a
          href="#projects"
          className="
            inline-flex items-center gap-2
            bg-accent text-bg font-bold text-[0.76rem] tracking-[0.1em] uppercase
            px-7 py-[13px] rounded no-underline
            transition-[transform,box-shadow] duration-200
            hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(124,106,247,0.4)]
          "
        >
          Ver Projetos →
        </a>
        <a
          href="https://github.com/joaopedroplinta"
          target="_blank"
          rel="noreferrer"
          className="
            text-muted no-underline text-[0.76rem] tracking-[0.1em] uppercase
            transition-colors duration-200 hover:text-hi
          "
        >
          GitHub →
        </a>
      </div>
    </div>
  );
}

function HeroAvatar() {
  const stats = [["2+", "Anos exp."], ["10+", "Projetos"], ["∞", "Energético"]];

  return (
    <div className="flex justify-center items-center relative">
      {/* Gradient ring */}
      <div
        className="w-[280px] h-[280px] rounded-full p-0.5"
        style={{ background: "linear-gradient(135deg, #7c6af7, #e84393, #3ecfcf)" }}
      >
        <div className="w-full h-full rounded-full bg-surface flex items-center justify-center font-syne font-extrabold text-[5rem] text-accent">
          JP
        </div>
      </div>

      {/* Stats card */}
      <div className="absolute -bottom-3.5 -right-3.5 bg-card border border-border rounded-xl px-5 py-3.5 flex gap-5">
        {stats.map(([num, label]) => (
          <div key={label} className="text-center">
            <div className="font-syne font-extrabold text-[1.4rem] text-accent leading-none">
              {num}
            </div>
            <div className="text-[0.6rem] text-muted uppercase tracking-[0.1em] mt-1">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
