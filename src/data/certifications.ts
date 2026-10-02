// Seleção a partir da seção de licenças e certificados do LinkedIn.
// Inventário e origem: docs/certificados-linkedin.md.
export interface Certificate {
  title: string;
  issuer: string;
  area: string;
  date: string;
  dateLabel: string;
  url: string;
  image?: string;
}

export const CERTIFICATIONS: Certificate[] = [
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    area: "Segurança",
    date: "2026-09",
    dateLabel: "set. 2026",
    url: "https://www.coursera.org/account/accomplishments/records/3IAPOZLZXKOV",
    image: "/certificados/google-cybersecurity.webp",
  },
  {
    title: "Claude Academy: Claude Code 101",
    issuer: "Anthropic",
    area: "IA no desenvolvimento",
    date: "2026-09",
    dateLabel: "set. 2026",
    url: "https://academy.claude.com/verify/353ef932cdfcd3c6581b8a1229a334c9",
  },
  {
    title: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco",
    area: "Segurança",
    date: "2025-04",
    dateLabel: "abr. 2025",
    url: "https://www.credly.com/badges/06d9818c-eba3-494b-98a9-3482a37fdde3/linked_in_profile",
    image: "/certificados/cisco-cybersecurity.webp",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco",
    area: "Redes",
    date: "2025-04",
    dateLabel: "abr. 2025",
    url: "https://www.credly.com/badges/b0729a85-7ee2-4256-94ad-1981c2b71c13/linked_in_profile",
    image: "/certificados/cisco-networking.webp",
  },
  {
    title: "Conceitos básicos: dados, dados em todos os lugares",
    issuer: "Google",
    area: "Análise de dados",
    date: "2025-02",
    dateLabel: "fev. 2025",
    url: "https://www.coursera.org/account/accomplishments/records/BTPJ0EG6FXWP",
    image: "/certificados/google-dados.webp",
  },
  {
    title: "NLW Pocket: Javascript — Full-stack Intermediário",
    issuer: "Rocketseat",
    area: "Desenvolvimento web",
    date: "2024-09",
    dateLabel: "set. 2024",
    url: "https://app.rocketseat.com.br/certificates/13266cae-571c-4469-8bd9-c22a76934b3c",
  },
  {
    title: "NLW Journey — Java",
    issuer: "Rocketseat",
    area: "Back-end",
    date: "2024-07",
    dateLabel: "jul. 2024",
    url: "https://app.rocketseat.com.br/certificates/cd9f8387-122b-44dd-be5a-0280f67ccd48",
  },
  {
    title: "Trilha Digital | Coders 24 | Engenharia de dados",
    issuer: "Ada",
    area: "Engenharia de dados",
    date: "2024-06",
    dateLabel: "jun. 2024",
    url: "http://ada.tech/certificado?code=94c907a6-445e-a527-dd8a-51b7b66c3207",
  },
  {
    title: "NLW Expert — Trilha de Node.js",
    issuer: "Rocketseat",
    area: "Back-end",
    date: "2024-02",
    dateLabel: "fev. 2024",
    url: "https://app.rocketseat.com.br/certificates/0db7b3d5-0d30-43c4-a5c9-da68f7e51f52",
  },
  {
    title: "NLW Expert — Trilha de React",
    issuer: "Rocketseat",
    area: "Interfaces",
    date: "2024-02",
    dateLabel: "fev. 2024",
    url: "https://app.rocketseat.com.br/certificates/24488b8f-449e-4f85-8e3b-439295cb7d4a",
  },
  {
    title: "Desenvolvimento Web Completo — 20 cursos + 20 projetos",
    issuer: "Udemy",
    area: "Desenvolvimento web",
    date: "2024-02",
    dateLabel: "fev. 2024",
    url: "https://www.ude.my/UC-82b3defa-921d-4444-8bc2-5b1f4b436ede",
  },
] as const;

export const EVENT_CERTIFICATES: Certificate[] = [
  {
    title: "LINUXtips na Codecon Summit 2026",
    issuer: "LINUXtips",
    area: "Participação em evento",
    date: "2026-09",
    dateLabel: "set. 2026",
    url: "https://credentials.linuxtips.io/b/5209ab9c-1f04-4ce0-b23c-9dc6f9f47091",
  },
  {
    title: "Codecon",
    issuer: "Codecon",
    area: "Certificado de participação",
    date: "2026-08",
    dateLabel: "ago. 2026",
    url: "https://eventos.codecon.dev/certificados/329690709590240229",
  },
] as const;
