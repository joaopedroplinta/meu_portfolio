import { useEffect, useState } from "react";

const MODES = {
  pinguim: { label: "Pinguim", caption: "O apelido virou tatuagem. E agora, assinatura." },
  eu: { label: "João Pedro", caption: "Quem está por trás do apelido." },
} as const;
type Mode = keyof typeof MODES;
const ORDER = Object.keys(MODES) as Mode[];
const INTERVAL_MS = 4500;

export function PenguinCharacter() {
  const [mode, setMode] = useState<Mode>("pinguim");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (hovered || reduced) return;
    const id = window.setInterval(() => {
      if (!document.hidden) setMode((m) => ORDER[(ORDER.indexOf(m) + 1) % ORDER.length]);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [hovered, mode]);

  return (
    <figure
      className="penguin-character"
      data-mode={mode}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="penguin-artwork">
        <img
          className="pc-penguin"
          src="/brand/pinguim-ink-v2.webp"
          alt={mode === "pinguim" ? "Ilustração em preto e branco de um pinguim de óculos escuros, com traço de tatuagem" : ""}
          aria-hidden={mode !== "pinguim"}
          width="1214"
          height="1295"
          {...{ fetchpriority: "high" }}
        />
        <img
          className="pc-photo"
          src="/joao-pedro-plinta-640.webp"
          srcSet="/joao-pedro-plinta-640.webp 640w, /joao-pedro-plinta-960.webp 960w"
          sizes="(max-width: 560px) 260px, 440px"
          alt={mode === "eu" ? "João Pedro Plinta, de óculos e camiseta preta, em um retrato de estúdio" : ""}
          aria-hidden={mode !== "eu"}
          width="640"
          height="640"
          decoding="async"
        />
      </div>
      <div className="pc-toggle" role="group" aria-label="Alternar entre o pinguim e a foto">
        {ORDER.map((key) => (
          <button
            key={key}
            type="button"
            aria-pressed={mode === key}
            onClick={() => setMode(key)}
          >
            {MODES[key].label}
          </button>
        ))}
      </div>
      <figcaption>{MODES[mode].caption}</figcaption>
    </figure>
  );
}
