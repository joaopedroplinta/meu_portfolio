import { TIMELINE } from "../data";
import { FadeUp, SectionHeader } from "./UI";

export function About() {
  return (
    <section id="about" className="max-w-[1160px] mx-auto px-12 py-[100px]">
      <SectionHeader num="01" title="Sobre mim" />

      <div className="grid grid-cols-2 gap-[72px] items-start">
        {/* Bio */}
        <FadeUp>
          <div className="text-muted text-[0.88rem] leading-[1.9] space-y-[18px]">
            <p>
              Olá! Sou o{" "}
              <strong className="text-hi font-normal">João Pedro Plinta</strong>
              , desenvolvedor Full Stack. Tenho paixão por
              construir aplicações web modernas que unem performance técnica com
              experiências excepcionais.
            </p>
            <p>
              Comecei movido pela curiosidade de entender como as coisas
              funcionam por baixo. Hoje trabalho com o ecossistema{" "}
              <strong className="text-hi font-normal">JavaScript/TypeScript</strong>
              {" "}— do front ao back, passando por banco de dados e infra.
            </p>
            <p>
              Mas também trabalho com {" "} <strong className="text-hi font-normal">PHP</strong>, especialmente em projetos legados e integrações. Acredito
              que a versatilidade é essencial para um desenvolvedor moderno, e estou sempre aberto a aprender novas tecnologias e linguagens.
            </p>
            <p>
              Quando não estou codando, estou aprendendo algo novo.
            </p>
          </div>
        </FadeUp>

        {/* Timeline */}
        <FadeUp delay={0.15}>
          <div className="relative pl-7">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />

            {TIMELINE.map((item, i) => (
              <div key={i} className="relative mb-7">
                {/* Dot */}
                <div
                  className="absolute -left-[34px] top-[7px] w-2 h-2 rounded-full bg-accent border-2 border-bg"
                  style={{ boxShadow: "0 0 12px #7c6af7" }}
                />
                <p className="text-[0.63rem] text-accent tracking-[0.15em] uppercase mb-1">
                  {item.year}
                </p>
                <p className="font-syne font-bold text-hi text-[0.95rem] mb-1">
                  {item.title}
                </p>
                <p className="text-[0.8rem] text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
