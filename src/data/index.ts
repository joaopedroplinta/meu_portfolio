export const NAV_LINKS = [
  { href: "#about",    label: "Sobre"        },
  { href: "#skills",   label: "Dependencies" },
  { href: "#projects", label: "Releases"     },
];

export interface SkillItem     { name: string; pct: number; }
export interface DependencyGroup { name: string; comment: string; items: SkillItem[]; }

export const DEPENDENCIES: DependencyGroup[] = [
  {
    name: "dependencies",
    comment: "// stack do dia a dia — o que sustenta produção",
    items: [
      { name: "react",       pct: 90 },
      { name: "typescript",  pct: 85 },
      { name: "node",        pct: 80 },
      { name: "tailwindcss", pct: 92 },
      { name: "postgresql",  pct: 75 },
      { name: "rest-apis",   pct: 88 },
    ],
  },
  {
    name: "devDependencies",
    comment: "// ferramentas e stacks auxiliares",
    items: [
      { name: "php",     pct: 75 },
      { name: "python",  pct: 85 },
      { name: "java",    pct: 70 },
      { name: "cpp",     pct: 70 },
      { name: "mongodb", pct: 65 },
      { name: "mysql",   pct: 70 },
      { name: "docker",  pct: 65 },
      { name: "git",     pct: 88 },
      { name: "figma",   pct: 70 },
      { name: "vercel",  pct: 85 },
    ],
  },
];

export interface Project {
  featured: boolean;
  latest?: boolean;
  version: string;
  emoji?: string;
  image?: string;
  title: string;
  description: string;
  highlights?: string[];
  tags: string[];
  gradientFrom: string;
  gradientTo: string;
  demo: string;
  github?: string;
}

export const PROJECTS: Project[] = [
  {
    featured: true,
    version: "v0.8.0-dev",
    image: "/hackathon-ifpr.png",
    title: "Hackathon IFPR — Sistema de Apoio",
    description: "Sistema web que cobre o ciclo completo do 1º Hackathon do curso: inscrição, equipes, agenda, avaliação e resultados.",
    highlights: [
      "Inscrição, formação de equipes e submissão de projetos com prazo validado no servidor",
      "Avaliação por jurados com rubrica configurável e distribuição automática por conflito de interesse",
      "Check-in por QR code, voto popular, certificados em PDF e plano de contingência pro dia do evento",
    ],
    tags: ["Laravel", "Inertia.js", "React", "TypeScript", "PostgreSQL"],
    gradientFrom: "#121319", gradientTo: "#1f2440",
    demo: "#",
    github: "https://github.com/joaopedroplinta/hackathon-ifpr",
  },
  {
    featured: true,
    latest: true,
    version: "v1.0.0",
    image: "/plana.png",
    title: "Plana",
    description: "SaaS multi-tenant de agendamentos para negócios de serviço, do zero ao ar.",
    highlights: [
      "Agendamento online com isolamento multi-tenant de verdade (policies + scopes em toda query)",
      "Pacotes de sessões e assinatura recorrente, pagamento via PIX/cartão",
      "Deploy real em produção: Docker, CI com build/testes/E2E, Render + Neon",
    ],
    tags: ["Next.js", "Laravel", "PostgreSQL", "TypeScript", "Tailwind", "Docker"],
    gradientFrom: "#121319", gradientTo: "#1f2440",
    demo: "https://planaapp.com.br/",
  },
  {
    featured: true,
    version: "v1.2.0",
    emoji: "🚀",
    title: "FinanTrack",
    description: "Aplicação web completa de controle financeiro, front-end e back-end integrados.",
    highlights: [
      "CRUD completo de transações com autenticação de usuário",
      "Dashboard com resumo de gastos e receitas em tempo real",
    ],
    tags: ["React", "Node.js", "MySQL", "TypeScript"],
    gradientFrom: "#121319", gradientTo: "#1f2440",
    demo: "#", github: "https://github.com/joaopedroplinta/projeto-final-web",
  },
  {
    featured: false,
    version: "v0.9.0",
    emoji: "⚡",
    title: "NumVision",
    description: "Desenha um dígito num canvas e classifica com uma CNN treinada no MNIST.",
    tags: ["React", "Python", "FastAPI", "Flask", "TensorFlow"],
    gradientFrom: "#121319", gradientTo: "#1f2440",
    demo: "#", github: "https://github.com/joaopedroplinta/NumVision",
  },
  {
    featured: false,
    version: "v0.3.0",
    emoji: "🎯",
    title: "Caixeiro Viajante",
    description: "Solução pro Problema do Caixeiro Viajante (TSP), clássico de otimização.",
    tags: ["Python", "Algoritmos", "Otimização"],
    gradientFrom: "#121319", gradientTo: "#1f2440",
    demo: "#", github: "https://github.com/joaopedroplinta/caixeiro-viajante",
  },
];

export interface TimelineItem { year: string; title: string; desc: string; }

export const TIMELINE: TimelineItem[] = [
  { year: "2025 — presente", title: "Estagiário em Dev. Full-Stack", desc: "Atuação como estagiário em desenvolvimento full-stack, trabalhando com a stack PHP, JavaScript e PostgreSQL."},
  { year: "2024 — 2025", title: "Estagiário em Suporte de sistemas e hardware", desc: "Atuação como estagiário em suporte técnico de sistemas e hardware." },
  { year: "2023 — 2026", title: "Graduação em Ciência da Computação", desc: "Fundamentos sólidos e experiências práticas em algoritmos, estruturas de dados, engenharia de software, redes, otimização de performance e arquitetura de sistemas." },
  { year: "2018", title: "Primeiros passos", desc: "Primeiros passos com programação." },
];