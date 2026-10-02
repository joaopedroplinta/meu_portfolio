import type { Project } from "../data";

export function ProjectCover({ project }: { project: Project }) {
  const plana = project.id === "plana";
  if (project.id === "ebpf-scitec") return (
    <div className="work-cover work-cover-research">
      <div className="work-cover-caption"><span>Pesquisa / SciTec IFPR</span><span>C + Python + Linux</span></div>
      <div className="research-cover-content"><span className="research-cover-name">eBPF</span><p>O que acontece<br />dentro do sistema?</p></div>
      <div className="research-cover-flow" aria-label="Fluxo conceitual do experimento"><span>Container</span><span>Tráfego TCP</span><span>Coletor eBPF</span></div>
      <div className="work-cover-bottom"><span>Observabilidade e prática guiada</span><span>Linux</span></div>
    </div>
  );
  return (
    <div className={`work-cover ${plana ? "work-cover-plana" : "work-cover-event"}`}>
      <div className="work-cover-caption">
        <span>{project.category}</span>
        <span>{plana ? "Produto em produção" : "Da inscrição ao resultado"}</span>
      </div>
      <div className="work-cover-composition">
        <div className="work-cover-title" aria-hidden="true">
          <span>{plana ? "plana" : "Hackathon"}</span>
          <p>{plana ? "Um lugar para organizar\nos próximos horários." : "Um evento inteiro.\nMuitos caminhos conectados."}</p>
        </div>
        <div className="work-cover-screen">
          <div className="work-screen-bar" aria-hidden="true">
            <span /><span /><span />
            <p>{plana ? "planaapp.com.br" : "Hackathon IFPR"}</p>
          </div>
          <img src={project.image} alt={`Tela inicial do ${project.title}`} width={plana ? 1179 : 1034} height={plana ? 454 : 855} loading="lazy" decoding="async" />
        </div>
      </div>
      <div className="work-cover-bottom" aria-hidden="true">
        <span>{plana ? "Agendamentos / Profissionais / Pagamentos" : "Participantes / Equipes / Jurados"}</span>
        <span>{plana ? "P" : "H"}</span>
      </div>
    </div>
  );
}
