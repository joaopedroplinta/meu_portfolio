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
      { name: "React / Next.js", pct: 90 },
      { name: "TypeScript",      pct: 85 },
      { name: "Tailwind CSS",    pct: 92 },
      { name: "Framer Motion",   pct: 75 },
    ],
  },
  {
    category: "Backend", color: "#e84393",
    items: [
      { name: "Node.js / Express", pct: 80 },
      { name: "PostgreSQL",        pct: 75 },
      { name: "REST APIs",         pct: 88 },
      { name: "Prisma ORM",        pct: 72 },
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
    title: "Projeto Principal",
    description: "Sua aplicação mais impactante vai aqui. Descreva o problema resolvido, o impacto gerado e as decisões técnicas tomadas. Recrutadores querem entender o raciocínio, não só as tecnologias.",
    tags: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    gradientFrom: "#0d1b2a", gradientTo: "#16213e",
    demo: "#", github: "https://github.com/joaopedroplinta",
  },
  {
    featured: false,
    emoji: "⚡",
    title: "Projeto 2",
    description: "Segundo projeto mais relevante. Destaque o diferencial técnico e o valor entregue.",
    tags: ["React", "TypeScript", "API"],
    gradientFrom: "#1a0a2e", gradientTo: "#2d1b69",
    demo: "#", github: "#",
  },
  {
    featured: false,
    emoji: "🎯",
    title: "Projeto 3",
    description: "Mais um projeto que demonstra versatilidade e resolução de problemas reais.",
    tags: ["Next.js", "Tailwind", "Prisma"],
    gradientFrom: "#0a1f1f", gradientTo: "#0d3333",
    demo: "#", github: "#",
  },
];

export interface TimelineItem { year: string; title: string; desc: string; }

export const TIMELINE: TimelineItem[] = [
  { year: "2024 — presente", title: "Desenvolvedor Full Stack",           desc: "Projetos freelance e colaborações, focado em React + Node.js"                   },
  { year: "2022 — 2024",     title: "Graduação em Ciência da Computação", desc: "Fundamentos sólidos em algoritmos, estruturas de dados e engenharia de software" },
  { year: "2021",            title: "Primeiros passos",                   desc: "HTML, CSS, JavaScript — o início da jornada dev"                                  },
];