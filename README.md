# TW · Design system Sfumato e página de pitch

Referência completa para construir a página de pitch da **TW** no Webflow: o design system **Sfumato**, o plano de implementação, os tickets F0–F5, a identidade visual e o mapa de imagens. Tudo foi gerado a partir do planejamento feito no Traycer.

## Como o agente do Claude Desktop lê este repositório

- **Texto:** todos os documentos estão em Markdown, em [`docs/`](docs/).
- **Imagens:** toda imagem é um arquivo real (PNG, SVG, JPG ou WebP) em [`imagens/`](imagens/), e cada uma tem uma **descrição escrita logo abaixo**. Assim o agente entende a imagem mesmo quando só lê o texto.
- **Wireframes:** no Traycer eles eram HTML vivo; aqui viraram capturas PNG, com o código HTML ao lado, em `imagens/wireframes/`.
- **Diagramas:** os blocos `mermaid` continuam como texto, e o GitHub os desenha sozinho.

No prompt de execução do Claude Desktop, troque o caminho local dos artefatos pelos arquivos de `docs/` deste repositório.

## Comece por aqui

| Documento | O que tem |
| --- | --- |
| [Plano de implementação](docs/plano-webflow-tw.md) | **A fonte da verdade:** conteúdo, Variables, classes, Interactions, o código do baralho e a ordem de construção |
| [Tickets F0–F5](docs/tickets/) | Escopo, dependências e critérios de pronto de cada fase |
| [Design system Sfumato](docs/design-system.md) | Leis, cor, tipografia, movimento, componentes e riscos |
| [Identidade visual](docs/identidade-tw.md) | O busto, os óculos, o itálico, o favicon e as regras de uso |
| [Mapa de imagens](docs/mapa-de-imagens.md) | Onde cada imagem entra, com qual tratamento e qual direito |
| [Composições do hero](docs/hero-tw-composicoes.md) | As três direções estudadas para o primeiro viewport |
| [Medição da paleta](docs/medicao-da-paleta.md) | A evidência por trás de cada cor |

Atenção: nos tickets F0 e F2, a lista de tarefas ficou num parágrafo só, com os itens emendados (efeito da sincronização do Traycer). Cada frase é um item.

## Galeria

### Paleta do Sfumato

![Paleta do Sfumato](imagens/wireframes/design-system-1.png)

*Descrição para o agente: Eixo frio em 11 degraus, de frio-950 #0e0910 a frio-50 #f4f5f9, com o matiz girando de 318° (malva) a 274° (azul-névoa); os degraus com ● são âncoras medidas nas obras de referência. Abaixo, o eixo quente e a água: ouro-600 #be781d, ouro-500 #bd9952, linho #cdbda6, mármore #dcd8cf e teal-abismo #2f4f58.*

De: [docs/design-system.md](docs/design-system.md) · código: [design-system-1.html](imagens/wireframes/design-system-1.html)

### Mapa de altitudes da página

![Mapa de altitudes da página](imagens/wireframes/design-system-2.png)

*Descrição para o agente: De cima para baixo: A0 Abismo (frio-950), A1 Correnteza (frio-900 com brilho teal), A2 Mármore (frio-800, onde entra o ouro), A3 Superfície (frio-700), o Véu de névoa (a sala do pitch; texto só sobre os cartões), A4 Névoa (frio-300, texto escuro, blocos-rocha) e A5 Cume (frio-200 a frio-50, com o único CTA dourado). A luminosidade só sobe.*

De: [docs/design-system.md](docs/design-system.md) · código: [design-system-2.html](imagens/wireframes/design-system-2.html)

### As quatro famílias de movimento

![As quatro famílias de movimento](imagens/wireframes/design-system-3.png)

*Descrição para o agente: Névoa (manchas desfocadas em loops de 23, 29 e 37 s), Pincelada (título revelado por uma máscara de borda irregular), Luz rasante (reflexo branco atravessando uma placa de mármore) e Correnteza (raios de luz vindos de cima e partículas subindo). Captura congelada em 2,3 s.*

De: [docs/design-system.md](docs/design-system.md) · código: [design-system-3.html](imagens/wireframes/design-system-3.html)

### Hero e componentes núcleo

![Hero e componentes núcleo](imagens/wireframes/design-system-4.png)

*Descrição para o agente: Hero da TW sobre o Abismo: nav (TW · Pitch · Ofício · Contato), título "Dinheiro no bolso da sua empresa.", lead e dois botões (Luz, dourado; Névoa, translúcido). Abaixo: moldura de galeria do demo, placa de hipótese H1, retrato marmorizado e divisor pincelado.*

De: [docs/design-system.md](docs/design-system.md) · código: [design-system-4.html](imagens/wireframes/design-system-4.html)

### Protótipo do baralho do pitch

![Protótipo do baralho do pitch](imagens/wireframes/plano-webflow-tw-1.png)

*Descrição para o agente: Sala do véu (frio-600) com o cartão 1 na frente ("Estou sem dinheiro.", fundo frio-950) e os próximos atrás, menores e com névoa crescente; os óculos dourados no canto do cartão; a dica de navegação embaixo. No site, o clique avança e a tecla ← volta.*

De: [docs/plano-webflow-tw.md](docs/plano-webflow-tw.md) · código: [plano-webflow-tw-1.html](imagens/wireframes/plano-webflow-tw-1.html)

### Composição A · O Andarilho

![Composição A · O Andarilho](imagens/wireframes/hero-tw-composicoes-1.png)

*Descrição para o agente: Figura de costas num rochedo à direita, cumes distantes e mar de névoa; metade esquerda escura com o título "Dinheiro no bolso da sua empresa.". Captura no fim da animação da pincelada.*

De: [docs/hero-tw-composicoes.md](docs/hero-tw-composicoes.md) · código: [hero-tw-composicoes-1.html](imagens/wireframes/hero-tw-composicoes-1.html)

### Composição B · A Queda (recomendada para o hero)

![Composição B · A Queda (recomendada para o hero)](imagens/wireframes/hero-tw-composicoes-2.png)

*Descrição para o agente: Figura caindo de cabeça para baixo, de camisa clara, com raios de luz teal vindos de cima e partículas subindo; título à esquerda, sobre o escuro.*

De: [docs/hero-tw-composicoes.md](docs/hero-tw-composicoes.md) · código: [hero-tw-composicoes-2.html](imagens/wireframes/hero-tw-composicoes-2.html)

### Composição C · O Busto

![Composição C · O Busto](imagens/wireframes/hero-tw-composicoes-3.png)

*Descrição para o agente: Busto de mármore em luz baixa, com óculos dourados e louro, à direita; título à esquerda, sobre o escuro.*

De: [docs/hero-tw-composicoes.md](docs/hero-tw-composicoes.md) · código: [hero-tw-composicoes-3.html](imagens/wireframes/hero-tw-composicoes-3.html)

### Prancha da marca

![Prancha da marca](imagens/wireframes/identidade-tw-1.png)

*Descrição para o agente: O busto (símbolo v3: óculos aviador com barra, pedestal e ramos de louro) com o estudo de proporção tracejado; a assinatura horizontal (óculos + TW em Bodoni Moda itálico) no escuro, com aro dourado, e no claro, com aro frio-900; a assinatura vertical (busto sobre TW).*

De: [docs/identidade-tw.md](docs/identidade-tw.md) · código: [identidade-tw-1.html](imagens/wireframes/identidade-tw-1.html)

### Favicon e ícones

![Favicon e ícones](imagens/wireframes/identidade-tw-2.png)

*Descrição para o agente: Ícones em tamanho real: óculos a 16, 32 (favicon) e 64 px; cabeça a 64 e 160 px (webclip); abas de navegador clara e escura com o favicon de 16 px.*

De: [docs/identidade-tw.md](docs/identidade-tw.md) · código: [identidade-tw-2.html](imagens/wireframes/identidade-tw-2.html)

### A marca nos cartões

![A marca nos cartões](imagens/wireframes/identidade-tw-3.png)

*Descrição para o agente: Cartão 1 (Abismo) e cartão 3 (Mármore, com o busto à direita) com os óculos de aro dourado no canto; cartão 7 (Cume, claro) com os óculos de aro frio-900 e o botão "Falar com a TW".*

De: [docs/identidade-tw.md](docs/identidade-tw.md) · código: [identidade-tw-3.html](imagens/wireframes/identidade-tw-3.html)

### Montagens medidas

![Montagens medidas](imagens/wireframes/mapa-de-imagens-1.png)

*Descrição para o agente: O hero com A Queda dissolvendo no escuro pela esquerda (branco 0,17% da área); o Cume com Friedrich dissolvendo na névoa, com a cor de junção #b9c2d4 (emenda Δ11,7); o cartão 3 com a foto do busto em luz baixa (branco 0,09%).*

De: [docs/mapa-de-imagens.md](docs/mapa-de-imagens.md) · código: [mapa-de-imagens-1.html](imagens/wireframes/mapa-de-imagens-1.html)

### A marca: arquivos

| Símbolo (o busto) | Favicon (os óculos) | Webclip (a cabeça) |
| --- | --- | --- |
| ![Símbolo da TW](imagens/marca/tw-simbolo.png) | ![Favicon da TW](imagens/marca/tw-oculos.png) | ![Webclip da TW](imagens/marca/tw-cabeca.png) |

*Descrição para o agente: o símbolo é um busto frontal de mármore em luz baixa (luz vinda da esquerda), com óculos aviador dourados de lentes âmbar e barra superior, dois ramos de louro dourado e pedestal. O favicon são só os óculos, aros dourados sobre quadrado frio-950. O webclip é a cabeça com os óculos, sobre o mesmo quadrado.*

Os SVGs originais estão em [`imagens/marca/`](imagens/marca/): `tw-simbolo.svg`, `tw-oculos.svg`, `tw-cabeca.svg`, além de `favicon-32.png` e `webclip-256.png`, prontos para o Webflow.

### As imagens liberadas

| A Queda (hero) | O busto em luz baixa (cartão 3) |
| --- | --- |
| ![A Queda](imagens/fotos/a-queda.jpg) | ![Busto em luz baixa](imagens/fotos/busto-tw-luz-baixa.png) |

*Descrição para o agente: A Queda é um óleo de uma figura caindo de cabeça para baixo na água teal, de camisa branca pincelada, com luz vinda de cima (736×917 px; pedir ao artista a versão em alta). O busto é a foto de um busto clássico de mármore com óculos aviador dourados e louro dourado, tratada em luz baixa (o mármore escurece da esquerda para a direita, o ouro preservado), com fundo transparente.*

### Montagens medidas

| Hero com A Queda | Cume com Friedrich | Cartão 3 com o busto |
| --- | --- | --- |
| ![Hero](imagens/montagens/hero.jpg) | ![Cume](imagens/montagens/cume.jpg) | ![Cartão 3](imagens/montagens/cartao3.jpg) |

*Descrição para o agente: montagens em 1280×720 (cartão 3 em 760×470) feitas para medir o orçamento de branco e a emenda de cor: hero 0,17% de branco, Cume com emenda Δ11,7 usando a cor de junção #b9c2d4, cartão 3 com 0,09% de branco.*

## Direitos das imagens

- **Friedrich**, *Andarilho sobre o mar de névoa*: domínio público.
- **A Queda** e o **busto (PNG novo)**: uso verificado pelo Andrey em 2026-10-06.
- A foto do **David** não está neste repositório, porque tem dono. Fica só a receita do tratamento "marmorizar", no mapa de imagens.

## Como regenerar

```sh
node gerar.mjs
```

O script lê os artefatos do Traycer (`../artifacts`), refaz `docs/`, `imagens/wireframes/`, `imagens/marca/`, `imagens/fotos/` e este README. Requer Node 18+, `playwright-core` e o Chromium headless do Playwright; os caminhos ficam no topo do script ou nas variáveis `PLAYWRIGHT_CORE` e `CHROME`.
