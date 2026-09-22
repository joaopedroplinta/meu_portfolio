# Portfólio profissional

## Direção

Identidade pessoal centrada no nome, com projetos reais logo na abertura. Base clara (#fcfcfd), texto azul profundo (#18253b), ação azul (#2453cf), superfície fria (#f2f5f9), texto secundário (#586579) e divisórias (#dce2eb). Manrope para títulos e DM Sans para leitura. Conteúdo alinhado à esquerda, largura máxima de 1184 px e espaçamento responsivo.

A abertura combina assinatura tipográfica e exploração de dois projetos. Seguem os trabalhos, a trajetória, as competências por área e contato. Evitar métricas sem contexto, porcentagens de domínio, texto de terminal como navegação e slogans intercambiáveis.

## Validação

Build de produção, TypeScript e ESLint aprovados. Revisão visual em desktop, tablet e celular; teste de overflow de 320 a 1440 px. Testadas seleção de projetos por teclado/toque, menu (Escape e mudança de breakpoint), links internos, download do currículo, cópia de e-mail com sucesso e falha, carregamento de imagens e movimento reduzido.

## Referências e implementação

- UI/UX Pro Max: padrão Portfolio Grid, hierarquia de conteúdo, foco visível, toque e movimento reduzido.
- [Project Showcase, de Jatin Yadav, no 21st.dev](https://21st.dev/@jatin-yadav05/components/project-showcase): código consultado pela visualização gratuita autorizada na interface do serviço. Adaptado em `src/components/ui/ProjectShowcase.tsx`, com conteúdo e estilos próprios. A prévia flutuante virou uma região de tamanho reservado e os links de seleção viraram botões acessíveis para teclado e toque. O loop permanente de requestAnimationFrame foi substituído por springs do Motion.
- [Motion for React](https://motion.dev/docs/react-installation), continuação do Framer Motion: pacote `motion`, LazyMotion e componentes `m`. Entrada apenas na abertura; demais animações respondem à navegação e à escolha de projeto. `MotionConfig` e `useReducedMotion` respeitam as preferências do sistema.

Nenhuma informação essencial depende de hover ou animação. Os dados ficam em `src/data/index.ts`. Currículo, destinos de contato e repositórios foram preservados. O site não depende da API do GitHub para renderizar seu conteúdo.
