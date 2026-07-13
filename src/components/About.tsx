import { TIMELINE } from "../data";
import { FadeUp, SectionHeader } from "./UI";

export function About() {
  return (
    <section id="about" className="max-w-[1160px] mx-auto px-5 sm:px-12 py-[80px] sm:py-[100px]">
      <SectionHeader title="Sobre" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[72px] items-start">
        {/* Bio */}
        <FadeUp>
          <div className="font-prose text-muted text-[0.88rem] leading-[1.9] space-y-[18px]">
            <p>
              Olá! Sou o{" "}
              <strong className="text-hi font-medium">João Pedro Plinta</strong>
              , desenvolvedor Full Stack. Tenho paixão por
              construir aplicações web modernas que unem performance técnica com
              experiências excepcionais.
            </p>
            <p>
              Comecei movido pela curiosidade de entender como as coisas
              funcionam por baixo. Hoje trabalho com o ecossistema{" "}
              <strong className="text-hi font-medium">JavaScript/TypeScript</strong>
              {" "}— do front ao back, passando por banco de dados e infra.
            </p>
            <p>
              Mas também trabalho com <strong className="text-hi font-medium">PHP</strong>, especialmente em projetos legados e integrações. Acredito
              que a versatilidade é essencial para um desenvolvedor moderno, e estou sempre aberto a aprender novas tecnologias e linguagens.
            </p>
            <p>
              Quando não estou codando, estou aprendendo algo novo.
            </p>
          </div>
        </FadeUp>

        {/* Timeline as changelog entries */}
        <FadeUp delay={0.15}>
          <div className="relative pl-6">
            <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />

            {TIMELINE.map((item, i) => (
              <div key={i} className="relative mb-7 last:mb-0">
                <span
                  className="absolute -left-[29px] top-[3px] w-[9px] h-[9px] rounded-sm bg-accent border-2 border-bg"
                  aria-hidden="true"
                />
                <p className="font-mono text-[0.65rem] text-accent tracking-tight mb-1.5">
                  ## [{item.year}]
                </p>
                <p className="font-display font-bold text-hi text-[0.95rem] mb-1.5">
                  {item.title}
                </p>
                <p className="font-prose text-[0.8rem] text-muted leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
