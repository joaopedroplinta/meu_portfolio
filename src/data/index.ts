export const NAV_LINKS = [
  { href: "#about",    label: "Sobre"    },
  { href: "#skills",   label: "Skills"   },
  { href: "#projects", label: "Projetos" },
];

export interface SkillItem     { name: string; pct: number; }
export interface SkillCategory { category: string; color: string; items: SkillItem[]; }

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend", color: "#7c6af7",
    items: [
      { name: "React.js", pct: 90 },
      { name: "JavaScript", pct: 85 },
      { name: "TypeScript",      pct: 85 },
      { name: "Tailwind CSS",    pct: 92 },
    ],
  },
  {
    category: "Backend", color: "#e84393",
    items: [
      { name: "Node.js / Express", pct: 80 },
      { name: "REST APIs",         pct: 88 },
      { name: "PHP",               pct: 75 },
      { name: "Java",              pct: 70 },
      { name: "Python",            pct: 85 },
      { name: "C++",               pct: 70 },
    ],
  },
  {
    category: "Data Base", color: "#f39c12",
    items: [
      { name: "PostgreSQL", pct: 75 },
      { name: "MongoDB",    pct: 65 },
      { name: "MySQL",      pct: 70 },
    ],
  },
  {
    category: "Ferramentas", color: "#3ecfcf",
    items: [
      { name: "Git / GitHub",    pct: 88 },
      { name: "Docker",          pct: 65 },
      { name: "Figma",           pct: 70 },
      { name: "Vercel / Deploy", pct: 85 },
    ],
  },
];

export interface Project {
  featured: boolean;
  emoji: string;
  title: string;
  description: string;
  tags: string[];
  gradientFrom: string;
  gradientTo: string;
  demo: string;
  github: string;
}

export const PROJECTS: Project[] = [
  {
    featured: true,
    emoji: "🚀",
    title: "FinanTrack",
    description: "O projeto consiste em uma aplicação web completa, utilizando tecnologias modernas para o front-end e back-end. O objetivo é demonstrar as habilidades adquiridas ao longo do curso.",
    tags: ["React", "Node.js", "MySQL", "TypeScript"],
    gradientFrom: "#0d1b2a", gradientTo: "#16213e",
    demo: "#", github: "https://github.com/joaopedroplinta/projeto-final-web",
  },
  {
    featured: false,
    emoji: "⚡",
    title: "NumVision",
    description: "Aplicação fullstack que permite desenhar dígitos em um canvas e classificá-los usando um modelo CNN treinado no MNIST.",
    tags: ["React", "Python", "FastAPI", "Flask", "TensorFlow"],
    gradientFrom: "#1a0a2e", gradientTo: "#2d1b69",
    demo: "#", github: "https://github.com/joaopedroplinta/NumVision",
  },
  {
    featured: false,
    emoji: "🎯",
    title: "Caixeiro Viajante",
    description: "Solução para o Problema do Caixeiro Viajante (TSP - Traveling Salesman Problem), um dos problemas clássicos de otimização computacional.",
    tags: ["Python", "Algoritmos", "Otimização"],
    gradientFrom: "#0a1f1f", gradientTo: "#0d3333",
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