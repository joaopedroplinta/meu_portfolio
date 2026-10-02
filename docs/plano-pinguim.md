# Plano do portfólio Pinguim

Data: 30/09/2026. Estado: implementação em andamento; home e primeira versão dos três cases disponíveis no ambiente local.

Este documento orienta a próxima versão. `docs/arquivo-redesign-v2.md` registra a versão anterior. As escolhas abaixo são a direção inicial de trabalho e serão ajustadas pela revisão de telas reais.

## 1. Objetivo e público

Criar um portfólio reconhecível como João Pedro Plinta, o Pinguim, que desperte curiosidade e explique a qualidade do trabalho por meio dos projetos. A personalidade abre a conversa; as evidências dos projetos sustentam a apresentação profissional.

Público confirmado pelo João: vagas e clientes com o mesmo peso. A abertura apresenta nome, atuação e capacidade de construir produtos. O contato oferece caminhos claros para conversar sobre uma oportunidade profissional ou um projeto, sem duplicar todo o conteúdo. Currículo e LinkedIn atendem à avaliação profissional; cases e links de produtos ajudam ambos os públicos.

O visitante deve conseguir:

- Identificar nome e atuação na primeira tela.
- Encontrar os projetos sem depender de animação ou interação escondida.
- Entender o propósito de um projeto antes de abrir seu case.
- Conhecer a participação do João, decisões técnicas e evidências visuais.
- Acessar currículo, código, produto e contato onde existirem.

## 2. Direção criativa

### Conceito: o espaço de trabalho do Pinguim

Um site pessoal com tipografia forte, ilustração autoral e apresentações de produtos. O pinguim de óculos da tatuagem é a assinatura; o restante da interface mantém leitura confortável e dá espaço ao trabalho.

Referências consideradas:

- Makyneta: presença visual das capas, catálogo com acesso a detalhes e consistência de linguagem. Referência principal para a apresentação dos projetos.
- Samara: cases que explicitam papel, contexto e decisões técnicas, especialmente VOGE Brasil.
- Maria: escala tipográfica e espaço para as imagens.
- Lojhan: identificação profissional e contato claros.

A referência da tatuagem orienta silhueta arredondada, postura e óculos. Criar uma versão vetorial própria e simplificada, com uma versão completa e outra legível em favicon. O elemento de fumar é uma decisão editorial em aberto; a proposta inicial usa os óculos como traço central. O número 1950 não entra na marca sem conhecer seu significado. Não publicar a foto do braço como asset do site.

### Paleta inicial

| Papel | Cor | Uso |
| --- | --- | --- |
| Preto | `#080808` | Base escura e contorno do personagem |
| Branco | `#FFFFFF` | Leitura principal e barriga do personagem |
| Grafite | `#242424` | Superfícies secundárias |
| Cinza | `#B8B8B8` | Texto secundário no tema escuro |
| Amarelo | `#F2BD42` | Detalhe do personagem e ações pontuais |
| Azul | `#2864C5` | Uso opcional nas composições dos projetos |

Tema escuro como direção de apresentação; manter um tema claro com a mesma identidade. Amarelo em fundo preto ou com texto preto, verificando contraste nas combinações reais. A cor de cada produto aparece dentro de sua capa, sem mudar a navegação global.

### Tipografia e composição

- Testar Barlow Condensed nos títulos grandes; manter DM Sans na leitura por já estar no projeto.
- Monoespaçada somente para informação técnica que se beneficie dela.
- Títulos alinhados à esquerda; textos de case com largura confortável, aproximadamente 60–75 caracteres por linha.
- Capas amplas e diferentes entre produtos, com consistência na posição dos links e informações.
- O destaque da home será o personagem junto da apresentação. Nas páginas de case, será o produto.

A consulta local da skill UI/UX Pro Max sugeriu narrativa de problema/jornada/solução e alto contraste para portfólio. A organização narrativa é pertinente; a combinação Caveat/Quicksand e efeitos de scroll recomendados não foram adotados porque não correspondem à tatuagem e à leitura técnica pretendida.

## 3. Estrutura do site

### Home `/`

1. Cabeçalho: símbolo, nome, Projetos, Sobre, contato e controle de tema.
2. Abertura: nome, apelido, atuação, texto curto e personagem. Ações: Conhecer projetos e Currículo.
3. Projetos selecionados: Plana e Hackathon, cada um com capa grande, propósito e link para o case.
4. Pesquisa e experimentos: eBPF em destaque próprio; FinanTrack, NumVision e Caixeiro Viajante em apresentação mais compacta.
5. Sobre: retrato existente, origem do apelido, interesses confirmados, trajetória e forma de trabalhar.
6. Competências: tecnologias associadas a experiências concretas dos projetos.
7. Contato: convite adequado ao público, e-mail, GitHub, LinkedIn e currículo.

Wireframe inicial, desktop:

```text
 símbolo + João Pedro       Projetos   Sobre   Contato   Tema

 João Pedro, mas pode             pinguim de óculos
 chamar de Pinguim.               com presença visual
 atuação + apresentação curta
 Conhecer projetos   Currículo

 Projetos
 [ capa Plana ampla             ] propósito + Conhecer
 propósito + Conhecer [ capa Hackathon ampla           ]

 Pesquisa e experimentos
 [ eBPF ]       demais projetos em lista compacta

 [ retrato ]    história pessoal + trajetória
 competências relacionadas ao trabalho
 contato
```

No celular, manter a mesma ordem de leitura, uma coluna e links sempre visíveis. O personagem não deve empurrar os projetos muito para baixo.

### Cases

Rotas propostas: `/projetos/plana`, `/projetos/hackathon-ifpr` e `/projetos/ebpf-scitec`.

Modelo compartilhado, adaptado ao conteúdo:

1. Nome, propósito e capa.
2. Contexto: status verificado, período, papel individual e colaboração quando houver.
3. Problema e público atendido.
4. Fluxos e telas comentadas.
5. Duas ou três decisões técnicas explicadas: restrição, escolha e consequência.
6. Evidências da entrega: execução, testes, funcionamento ou documentação, conforme disponível.
7. Aprendizados e limites relevantes.
8. Links disponíveis e próximo projeto.

As páginas precisam ser acessíveis diretamente por URL, funcionar com voltar/avançar e permitir retorno à seção de projetos. Não usar um modal como único acesso ao conteúdo.

## 4. Conteúdo por projeto

| Projeto | História inicial | Evidência disponível | A aprofundar |
| --- | --- | --- | --- |
| Plana | Um agendamento conectando disponibilidade, profissionais e pagamento | Captura e link público cadastrados | Papel, fluxos principais, isolamento entre empresas, estados de pagamento, situação atual |
| Hackathon IFPR | A operação de um evento da inscrição à avaliação | Captura, repositório e funcionalidades cadastrados | Papel, status de uso, fluxo de jurados, validação de prazos, contingência e telas internas |
| eBPF SciTec | Da pesquisa ao experimento e à prática de ensino | Repositório e descrição cadastrados | Relação com TCC, demonstração legível, exemplos e resultados documentados |

Os dados existentes são a base editorial, não uma comprovação independente. Antes de publicar, conferir status, autoria, números e afirmações de resultado. Não inventar usuários, receita, impacto, depoimentos ou dificuldades pessoais. Quando não houver métrica, explicar o comportamento implementado e mostrar evidência.

Para cada case, reunir:

- O que motivou o projeto e quem precisava dele.
- O que o João fez e o que foi feito por outras pessoas.
- Duas ou três decisões que merecem ser explicadas.
- Telas ou diagramas que demonstrem essas decisões.
- Um aprendizado específico.
- Status e links atuais.

Capturas novas devem usar dados de demonstração. Diagramas de fluxo são apropriados quando uma decisão de backend não aparece numa tela. Preferir capturas reais a imagens geradas de aplicações inexistentes.

## 5. Personagem e interação

Primeira entrega: personagem estático, bem desenhado e integrado à composição. Depois, testar uma única interação curta: um cumprimento ou mudança de expressão acionada por botão. A reação precisa funcionar por clique, toque e teclado. O conteúdo essencial permanece fora dela.

Movimento serve como acabamento: feedback de ação, troca de imagem e entrada breve da abertura. Respeitar movimento reduzido. Evitar introdução obrigatória, cursor substituído, scroll bloqueado, terminal exigido para navegar e loop constante de animação.

A curiosidade vem também de conteúdo: capa com contexto, chamada específica para cada case e uma descoberta pessoal no Sobre. Cada detalhe deve explicar algo ou reforçar a assinatura.

## 6. Implementação

Base atual: React 18, TypeScript, Vite, CSS/Tailwind e Motion. Reaproveitar dados, retratos, currículo, menu e recursos de acessibilidade existentes onde fizer sentido.

Estrutura proposta:

```text
src/
  components/
    PenguinMark.tsx
    PenguinCharacter.tsx
    ProjectCover.tsx
    CaseStudyLayout.tsx
    CaseSection.tsx
  pages/
    Home.tsx
    ProjectCase.tsx
    NotFound.tsx
  data/
    index.ts
    caseStudies.ts
public/
  brand/
  projects/plana/
  projects/hackathon-ifpr/
  projects/ebpf-scitec/
```

Adicionar roteamento apropriado às páginas e confirmar que a hospedagem entrega a aplicação nas rotas internas. Definir títulos e descrições por página; preparar imagem de compartilhamento e favicon com a assinatura. Avaliar pré-renderização dos cases se a hospedagem e a indexação exigirem, sem migrar o projeto inteiro por padrão.

Manter assets otimizados, dimensões reservadas e carregamento tardio das imagens fora da abertura. Usar SVG para a marca. Usar WebP/AVIF nas capturas quando a legibilidade de texto permitir.

## 7. Etapas e critérios de conclusão

### Etapa 1 — Identidade e composição

- [ ] Criar símbolo simples e personagem completo a partir da tatuagem.
- [ ] Definir tokens de cor, tipo e espaçamento nos dois temas.
- [ ] Montar abertura e uma capa do Plana com dados existentes.
- [ ] Revisar juntos uma tela real em desktop e celular.

Concluída quando a apresentação tem identificação profissional clara, o personagem é legível e a capa conduz ao trabalho. Essa revisão orienta ajustes; não é autorização para cada alteração reversível.

### Etapa 2 — Home completa

- [ ] Implementar catálogo com Plana, Hackathon e eBPF.
- [ ] Reorganizar Sobre, trajetória, competências e contato.
- [ ] Ajustar cabeçalho, temas e navegação mobile.
- [ ] Preparar marca em favicon.

Concluída quando todos os projetos e caminhos de contato podem ser encontrados sem efeitos ou hover.

### Etapa 3 — Primeiro case, Plana

- [ ] Estruturar dados e layout de case.
- [ ] Aprofundar conteúdo com fontes do projeto e informações confirmadas pelo João.
- [ ] Preparar capa, capturas e fluxos.
- [ ] Implementar rota, metadados e retorno ao catálogo.

Concluída quando o leitor consegue explicar o problema, a participação do João e pelo menos duas decisões técnicas.

### Etapa 4 — Hackathon e eBPF

- [ ] Adaptar o layout ao fluxo do evento e às decisões de operação.
- [ ] Adaptar o layout à pesquisa e às demonstrações eBPF.
- [ ] Conferir consistência sem repetir seções vazias ou forçar histórias iguais.

Concluída quando cada projeto tem conteúdo específico e evidências próprias.

### Etapa 5 — Acabamento e entrega

- [ ] Adicionar a interação do personagem se ela melhorar a experiência.
- [ ] Verificar TypeScript, build e lint.
- [ ] Verificar páginas em 320, 375, 768 e 1440 px, temas e imagens carregadas.
- [ ] Verificar teclado, foco, menu, contraste e movimento reduzido.
- [ ] Verificar acesso direto às rotas, recarga, voltar/avançar e página inexistente.
- [ ] Verificar currículo, contato e links dos projetos.
- [ ] Revisar títulos, descrição e prévia de compartilhamento.
- [ ] Conferir desempenho no build de produção e corrigir problemas relevantes.

Concluída com revisão visual e funcional do resultado. Publicação acontece após o trabalho local estar concreto e revisão final do João; este plano não representa uma publicação realizada.

## 8. Próximo passo

Começar pela Etapa 1: personagem vetorial, tokens e uma abertura com capa do Plana. Evitar construir todas as páginas antes de conferir se a direção visual transmite a personalidade pretendida.

Ao preparar os cases, aprofundar a participação e os aprendizados específicos do João. Não é necessário resolver todas as perguntas de conteúdo antes de começar a composição. O público já foi definido: vagas e clientes com o mesmo peso.

## 9. Registro de progresso

### Revisão do personagem

O João rejeitou a primeira ilustração vetorial e o ícone por aparência infantil e proporções estranhas. A direção foi ajustada para preto e branco, traço de tatuagem, textura de tinta, corpo compacto e óculos angulares. A nova ilustração está em `public/brand/pinguim-ink-v2.png`, gerada usando a foto da tatuagem como referência, com fundo transparente. A abertura usa uma superfície neutra de papel para dar contraste ao desenho. O ícone anterior foi retirado do cabeçalho e do favicon; uma marca pequena será desenvolvida depois de acertar o personagem. Build, TypeScript e lint passaram nesta revisão; a composição foi conferida em desktop. Revisão mobile continua pendente.

- [x] Analisar quatro referências e o código atual.
- [x] Definir o pinguim de óculos como origem da identidade.
- [x] Inventariar assets e estrutura atual.
- [x] Documentar plano, fases, conteúdo e critérios de revisão.
- [ ] Iniciar implementação da Etapa 1.


### Home e cases implementados

- Pinguim com transparência integrado diretamente ao fundo, sem superfície branca.
- Capas de Plana, Hackathon e eBPF abrem páginas próprias.
- Rotas `/projetos/plana`, `/projetos/hackathon-ifpr` e `/projetos/ebpf-scitec`, com títulos e descrições por página.
- Cases com introdução, escopo técnico, tecnologias, fluxo conceitual, quatro seções e próximo projeto.
- Destaque de pesquisa na home, apresentação pessoal do apelido e tecnologias ligadas aos projetos.
- Contato com caminhos equivalentes para projetos e oportunidades.
- Primeira versão editorial baseada nos dados já cadastrados. Autoria detalhada, relatos de decisões, aprendizados e novas capturas internas ainda precisam ser aprofundados com o João e as fontes dos projetos.
- Navegação usa links nativos e renderização conforme pathname; recarga e acesso direto foram conferidos no Vite. Na publicação, a hospedagem precisa entregar o HTML da aplicação para as rotas internas.
- Build, TypeScript e lint passaram. Revisão visual desktop realizada; validação visual mobile permanece pendente porque o controle de viewport disponível não alterou a dimensão do navegador.
