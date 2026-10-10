// Conteúdo da vitrine da home. Fatos conferidos nos repositórios de cada projeto
// (ver os estudos de caso em src/data/caseStudies.ts).
export interface Fact {
  label: string;
  value: string;
}

export interface Featured {
  id: string;
  slug: string;
  name: string;
  kind: string;
  summary: string;
  facts: Fact[];
  panel: string;
  panelInk: string;
  image?: { src: string; alt: string };
  product?: string;
  code?: string;
}

export const FEATURED: Featured[] = [
  {
    id: "plana",
    slug: "plana",
    name: "Plana",
    kind: "SaaS de agendamentos, em produção",
    summary:
      "Agenda online, profissionais, pacotes de sessões, planos e pagamentos para negócios de serviço. Projetei, construí e coloquei no ar sozinho.",
    facts: [
      { label: "Autoria", value: "Projeto individual, 68 commits" },
      { label: "Arquitetura", value: "Multi-tenant, com isolamento por global scope" },
      { label: "Pagamentos", value: "PIX, cartão e webhook processado em fila" },
      { label: "Entrega", value: "Render + Neon, CI com testes E2E" },
    ],
    panel: "#c9ddd3",
    panelInk: "#0f2a20",
    image: {
      src: "/plana/dashboard.webp",
      alt: "Painel do Plana com receita diária, agendamentos por status e serviços mais procurados",
    },
    product: "https://planaapp.com.br/",
  },
  {
    id: "hackathon",
    slug: "hackathon-ifpr",
    name: "Hackathon IFPR",
    kind: "Plataforma de evento, ponta a ponta",
    summary:
      "Inscrições, equipes, submissões, jurados, resultado e certificados do 1º Hackathon do IFPR Campus Pinhais, em um único sistema.",
    facts: [
      { label: "Autoria", value: "Autor único do código, 205 commits" },
      { label: "Avaliação", value: "Nota ponderada e desempate em três critérios" },
      { label: "Jurados", value: "Carga balanceada, conflito de interesse bloqueia" },
      { label: "Contingência", value: "Plano B em cinco degraus para o dia do evento" },
    ],
    panel: "#d8dcec",
    panelInk: "#1c2240",
    image: {
      src: "/hackathon/jurados.webp",
      alt: "Tela de distribuição de jurados do Hackathon IFPR, com a carga de cada jurado",
    },
  },
  {
    id: "ebpf-scitec",
    slug: "ebpf-scitec",
    name: "Minicurso eBPF",
    kind: "Pesquisa e ensino em Linux",
    summary:
      "Observabilidade direto do kernel, apresentada no SciTec do IFPR: a teoria do eBPF e um coletor que conta o tráfego TCP de um container sem ler o /proc.",
    facts: [
      { label: "Formato", value: "Extensão universitária, apresentada em trio" },
      { label: "Prática", value: "Seis exemplos em C e Python, lado a lado" },
      { label: "Pesquisa", value: "Base no benchmark do meu TCC" },
    ],
    panel: "#1d1b33",
    panelInk: "#e7e4ff",
    code: `SEC("kprobe/tcp_sendmsg")
int BPF_KPROBE(trace_tcp_sendmsg, struct sock *sk,
               struct msghdr *msg, size_t size)
{
    __u16 porta = BPF_CORE_READ(sk, __sk_common.skc_num);

    acumular(&bytes_enviados, porta, size);
    return 0;
}`,
  },
  {
    id: "tcc-monitoramento",
    slug: "tcc-monitoramento",
    name: "TCC",
    kind: "Pesquisa sobre monitoramento de redes virtualizadas",
    summary:
      "Quanto custa observar um sistema? Medimos o overhead de eBPF, Sysstat, Prometheus e Docker monitorando um WAF, em 480 execuções reprodutíveis. A defesa final ainda está por vir.",
    facts: [
      { label: "Experimento", value: "4 ferramentas, 4 volumes, 30 repetições" },
      { label: "Resultado", value: "eBPF com menor tempo de resposta, de 13% a 15%" },
      { label: "Estatística", value: "Média com intervalo de confiança de 95%" },
      { label: "Status", value: "Passou pela pré-banca, defesa final pendente" },
    ],
    panel: "#ece6d9",
    panelInk: "#2b2012",
    image: {
      src: "/tcc/tempo-resposta.webp",
      alt: "Gráfico do tempo de resposta médio do observador por volume de mensagens, comparando eBPF, sysstat, Prometheus e Docker",
    },
    product: "https://vnf-lab.up.railway.app/",
  },
];
