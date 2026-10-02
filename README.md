# João Pedro Plinta, portfólio

Portfólio pessoal de desenvolvedor full stack, no ar em **[joaoplintaportfolio.dev](https://joaoplintaportfolio.dev/)**.

A abertura é uma capa de revista: o nome "Pinguim" (o apelido, e o pinguim que tenho tatuado) ocupando a largura, com setas apontando para os projetos. Abaixo vêm quatro estudos de caso, o Sobre, as ferramentas, os certificados e o contato.

## O que tem no site

- **Estudos de caso** em `/projetos/:slug`, com decisões, números conferidos nos repositórios e telas reais (com dados de demonstração):
  - **Plana**, SaaS de agendamentos em produção;
  - **Hackathon IFPR**, plataforma para operar um evento de ponta a ponta;
  - **Minicurso eBPF**, extensão apresentada no SciTec do IFPR;
  - **TCC**, benchmark de overhead de eBPF, Sysstat e Prometheus.
- Scroll narrativo na seção de trabalho, prévia da tela que segue o mouse nas chamadas da capa e carrossel de telas no celular.
- Tema claro e escuro, que respeita a preferência do sistema e `prefers-reduced-motion`.
- Open Graph para prévia de compartilhamento, favicon e página 404.

## Stack

- [React 18](https://react.dev/) e [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) para as rotas dos estudos de caso
- [Motion](https://motion.dev/) para as animações de entrada
- CSS próprio, sem framework, em `src/site/site.css`
- Fontes Manrope e JetBrains Mono, pelo Google Fonts
- Deploy na [Vercel](https://vercel.com/)

## Como rodar

Requer Node.js 20 ou superior.

```bash
git clone https://github.com/joaopedroplinta/meu_portfolio.git
cd meu_portfolio
npm install
npm run dev        # http://localhost:5173
```

Outros comandos:

```bash
npm run build      # build de produção em dist/
npm run preview    # serve o build localmente
npm run lint       # ESLint
```

## Estrutura

```
src/
├── site/            # o site atual
│   ├── Home.tsx     # capa, trabalho, sobre, ferramentas, certificados e contato
│   ├── CasePage.tsx # página de estudo de caso
│   ├── Layout.tsx   # cabeçalho e rodapé
│   ├── content.ts   # os projetos em destaque (vitrine e capa)
│   └── site.css     # todos os estilos
├── data/            # conteúdo
│   ├── index.ts         # perfil, projetos, ferramentas e linha do tempo
│   ├── caseStudies.ts   # os estudos de caso
│   └── certifications.ts
├── components/      # site anterior (v1.0.0), sem uso
└── index.css        # estilos do site anterior, sem uso
public/
├── brand/           # pinguim de tinta
├── plana/ hackathon/ tcc/   # telas e gráficos dos estudos de caso
└── og.png           # imagem de compartilhamento
docs/                # planejamento e direção visual
```

## Como editar o conteúdo

| Quero mudar | Arquivo |
| --- | --- |
| Texto de um estudo de caso | `src/data/caseStudies.ts` |
| Resumo e ficha do projeto na vitrine | `src/site/content.ts` |
| Projetos menores, ferramentas, linha do tempo, links de contato | `src/data/index.ts` |
| Cursos e certificados | `src/data/certifications.ts` |
| Cores, fontes e espaçamentos | variáveis no topo de `src/site/site.css` |

O texto dos estudos de caso só afirma o que está no repositório de cada projeto. Ao mudar um número ou uma decisão, confira na fonte.

## Deploy

A Vercel publica a `main` automaticamente e cria um preview para cada pull request. O `vercel.json` manda qualquer rota para o `index.html`, para que um link direto como `/projetos/plana` funcione.

## Versão anterior

A versão do portfólio antes do redesign está guardada na release [v1.0.0](https://github.com/joaopedroplinta/meu_portfolio/releases/tag/v1.0.0). Para voltar a ela: `git checkout v1.0.0`.

## Contato

- E-mail: joaopedrohenriqueplinta@gmail.com
- LinkedIn: [joao-pedro-plinta](https://linkedin.com/in/joao-pedro-plinta)
- GitHub: [@joaopedroplinta](https://github.com/joaopedroplinta)

## Licença

[MIT](LICENSE)
