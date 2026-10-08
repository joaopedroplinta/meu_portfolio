export const PROFILE = {
  email: "joaopedrohenriqueplinta@gmail.com",
  github: "https://github.com/joaopedroplinta",
  linkedin: "https://linkedin.com/in/joao-pedro-plinta",
  resume: "/JoaoPedroPlinta_curriculo.pdf",
};

export const NAV_LINKS = [
  { href: "#projects", label: "Projetos" },
  { href: "#about", label: "Sobre" },
  { href: "#certifications", label: "Certificados" },
  { href: "#skills", label: "Tecnologias" },
];

interface SkillGroup {
  title: string;
  description: string;
  icon: "code" | "layers" | "database";
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Interfaces",
    description:
      "Aplicações responsivas, componentes reutilizáveis e atenção à experiência de uso.",
    icon: "code",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Aplicações e APIs",
    description:
      "Regras de negócio, autenticação e integrações que conectam o produto.",
    icon: "layers",
    items: ["PHP", "Laravel", "Node.js", "Inertia.js", "APIs REST"],
  },
  {
    title: "Dados e infraestrutura",
    description:
      "Da modelagem dos dados à entrega e manutenção da aplicação em produção.",
    icon: "database",
    items: ["PostgreSQL", "MySQL", "Redis", "Docker", "Kubernetes"],
  },
  {
    title: "Entrega e observabilidade",
    description:
      "Pipelines que testam e publicam, e métricas que mostram o que o sistema faz em produção.",
    icon: "layers",
    items: ["GitHub Actions", "Jenkins", "Prometheus", "Linux", "eBPF", "Vercel", "Render", "Railway"],
  },
];

export interface Project {
  id: string;
  featured: boolean;
  category: string;
  title: string;
  description: string;
  highlights?: string[];
  tags: string[];
  demo?: string;
  github?: string;
}

// O primeiro projeto recebe o selo "Mais recente" automaticamente.
export const PROJECTS: Project[] = [
  {
    featured: true,
    id: "hackathon",
    category: "Plataforma de eventos",
    title: "Hackathon IFPR",
    description:
      "Uma plataforma para todo o ciclo de um hackathon: das inscrições e formação de equipes à avaliação e aos resultados.",
    highlights: [
      "Inscrição, formação de equipes e submissão de projetos com prazo validado no servidor",
      "Avaliação por jurados com rubrica configurável e distribuição automática por conflito de interesse",
      "Check-in por QR code, voto popular, certificados em PDF e plano de contingência para o dia do evento",
    ],
    tags: ["Laravel", "Inertia.js", "React", "TypeScript", "PostgreSQL"],
    github: "https://github.com/joaopedroplinta/hackathon-ifpr",
  },
  {
    featured: true,
    id: "plana",
    category: "SaaS de agendamentos",
    title: "Plana",
    description:
      "Uma plataforma de agendamentos para negócios de serviço, com gestão de profissionais, assinaturas e pagamentos. Em produção.",
    highlights: [
      "Agendamento online com isolamento de dados entre empresas, usando policies e scopes",
      "Pacotes de sessões, planos mensais e pagamento via PIX/cartão com webhook em fila",
      "Entrega em produção com Docker, CI, testes E2E, Render e Neon",
    ],
    tags: [
      "Next.js",
      "Laravel",
      "PostgreSQL",
      "TypeScript",
      "Tailwind",
      "Docker",
    ],
    demo: "https://planaapp.com.br/",
  },
  {
    featured: false,
    id: "ebpf-scitec",
    category: "Extensão universitária — sistemas",
    title: "Minicurso eBPF",
    description:
      "Minicurso introdutório de eBPF apresentado no SciTec (IFPR), com fundamentos teóricos e prática guiada que replica um experimento do meu TCC: um coletor eBPF observando tráfego TCP de um container, sem passar pelo /proc.",
    highlights: [
      "Seis exemplos progressivos (tracepoint, kprobe, histograma, monitor de TCP, XDP) implementados em C+libbpf/CO-RE e Python+BCC lado a lado",
      "Ambiente reprodutível via Docker, com alternativa em VM libvirt/QEMU-KVM para máquinas sem permissão de root (ex: labs da faculdade)",
      "CI no GitHub Actions validando a compilação dos exemplos em C",
    ],
    tags: ["eBPF", "C", "libbpf", "Python", "BCC", "Docker", "Linux"],
    github: "https://github.com/joaopedroplinta/ebpf-scitec",
  },
  {
    featured: false,
    id: "tcc-monitoramento",
    category: "Pesquisa — TCC",
    title: "TCC: monitoramento de VNF",
    description:
      "Benchmark que compara o overhead de eBPF, Sysstat, Prometheus e Docker ao monitorar um WAF virtualizado, com 480 execuções reprodutíveis.",
    tags: ["eBPF", "Sysstat", "Prometheus", "Python", "Docker", "Linux"],
    demo: "https://vnf-lab.up.railway.app/",
    github: "https://github.com/joaopedroplinta/vnf-monitoring-benchmark",
  },
  {
    featured: false,
    id: "finantrack",
    category: "Aplicação web",
    title: "FinanTrack",
    description:
      "Aplicação web completa de controle financeiro, front-end e back-end integrados.",
    highlights: [
      "CRUD completo de transações com autenticação de usuário",
      "Dashboard com resumo de gastos e receitas em tempo real",
    ],
    tags: ["React", "Node.js", "MySQL", "TypeScript"],
    github: "https://github.com/joaopedroplinta/projeto-final-web",
  },
  {
    featured: false,
    id: "numvision",
    category: "Inteligência artificial",
    title: "NumVision",
    description:
      "Reconhecimento de dígitos desenhados em um canvas, com uma rede neural treinada no conjunto MNIST.",
    tags: ["React", "Python", "FastAPI", "Flask", "TensorFlow"],
    github: "https://github.com/joaopedroplinta/NumVision",
  },
  {
    featured: false,
    id: "caixeiro-viajante",
    category: "Algoritmos",
    title: "Caixeiro Viajante",
    description:
      "Exploração de algoritmos para o Problema do Caixeiro Viajante, um clássico de otimização de rotas.",
    tags: ["Python", "Algoritmos", "Otimização"],
    github: "https://github.com/joaopedroplinta/caixeiro-viajante",
  },
];

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

export const TIMELINE: TimelineItem[] = [
  {
    year: "2025 — presente",
    title: "Estágio em desenvolvimento Full Stack",
    desc: "Atuação como estagiário em desenvolvimento full-stack, trabalhando com a stack PHP, JavaScript e PostgreSQL. Desde a concepção de novas funcionalidades até a entrega em produção, passando por testes e integração contínua. Reuniões com clientes, prototipagem, planejamento e documentação também fazem parte do dia a dia.",
  },
  {
    year: "2024 — 2025",
    title: "Estágio em suporte técnico",
    desc: "Atuação como estagiário em suporte técnico de sistemas e hardware. Atendimento a usuários, resolução de problemas e manutenção de equipamentos.",
  },
  {
    year: "2023 — 2026",
    title: "Graduação em Ciência da Computação",
    desc: "Fundamentos sólidos e experiências práticas em algoritmos, estruturas de dados, engenharia de software, redes, otimização de performance e arquitetura de sistemas.",
  },
  {
    year: "2018",
    title: "Primeiros passos",
    desc: "Primeiros passos com programação. Comecei a aprender estudando e fazendo parte de uma equipe de robótica, onde consegui aprender conceitos de programação, lógica e trabalho em equipe.",
  },
];
