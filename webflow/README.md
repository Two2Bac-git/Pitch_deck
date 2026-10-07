# Cópia de segurança do site TW2 (Webflow)

Esta pasta é uma cópia de tudo o que o Webflow guarda do site de pitch da TW, tirada pelo conector do Webflow em **7 de outubro de 2026**, logo depois da publicação das **15:06 (UTC)**.

- **Endereço antigo:** <https://tw2-accf04.webflow.io> (projeto **TW2** no Webflow)
- **Página:** Home (a única do site)

É a planta da casa, não a casa: os arquivos descrevem o site por completo, mas **não abrem como página**. O site agora vive em código próprio na pasta [`site/`](../site), gerada a partir de [`fonte-do-site/`](../fonte-do-site), e esta pasta fica como registro de onde ele veio.

## O que tem aqui

| Arquivo | O que guarda |
|---|---|
| [`conteudo.md`](conteudo.md) | **Comece por aqui.** Todos os textos da página na ordem em que aparecem, com os itálicos, os links e a descrição das imagens |
| [`estilos.css`](estilos.css) | Versão legível dos estilos: as cores, fontes e medidas como variáveis CSS, cada classe com suas regras e as regras de tablet (≤ 991px) e celular (≤ 767px) |
| [`elementos.json`](elementos.json) | A árvore completa de elementos: tipo, classes, atributos, textos, links e imagem de cada elemento, com o ID que o Webflow usa |
| [`estilos.json`](estilos.json) | Os 79 estilos (classes e combos) exatamente como o Webflow os guarda, com todos os breakpoints |
| [`variaveis.json`](variaveis.json) | As 3 coleções de Variables: **primitivos** (18), **semantico** (4, com os 8 modes) e **medidas** (8, com os modes Tablet e Mobile) |
| [`interacoes.json`](interacoes.json) | As 24 animações (Interactions do Webflow, GSAP) com gatilho, alvos e linha do tempo completa |
| [`conteudo-da-pagina.json`](conteudo-da-pagina.json) | O conteúdo da página do jeito que o Webflow o exporta para tradução (HTML de cada bloco de texto) |
| [`assets/`](assets) e [`assets.json`](assets.json) | As 6 imagens do site no tamanho original e a lista com os endereços no Webflow |
| [`site.json`](site.json) | Dados do site: data da última publicação e idiomas cadastrados |

## Como ler as cores por altitude (modes)

Cada seção e cada cartão muda de cor trocando o **mode** da coleção `semantico`. No `estilos.css` isso aparece expandido: quem tem um mode recebe as quatro variáveis daquela altitude.

| Mode | ID no Webflow | `fundo` | `texto` | `texto-suave` | `prova` |
|---|---|---|---|---|---|
| Abismo | `mode-061e8e5d…` | frio-950 | frio-50 | frio-400 | ouro-500 |
| Correnteza | `mode-dbd75172…` | frio-900 | frio-100 | frio-400 | ouro-500 |
| Mármore | `mode-72a89295…` | frio-800 | frio-100 | frio-400 | ouro-500 |
| Superfície | `mode-3e93dfd3…` | frio-700 | frio-100 | frio-300 | ouro-500 |
| Véu | `mode-3daf7023…` | frio-600 | frio-50 | frio-100 | frio-50 |
| Névoa | `mode-3394faea…` | frio-300 | frio-900 | frio-700 | frio-900 |
| Alto | `mode-5ab553ad…` | frio-200 | frio-900 | frio-700 | frio-900 |
| Cume | `mode-d988593c…` | frio-50 | frio-900 | frio-700 | frio-900 |

A coleção `medidas` troca de mode sozinha pelo tamanho da tela: **Tablet** (`mode-5862810d…`, ≤ 991px) e **Mobile** (`mode-7684b2fc…`, ≤ 767px).

## As 24 animações

| Grupo | Animações | Gatilho |
|---|---|---|
| Abertura | I1 · Frase → promessa (a pincelada troca "Tá sem grana?" pelo título) | ao carregar |
| Títulos | I2 · Títulos pincelados (palavra por palavra) | ao entrar na tela |
| Luz rasante | I3 · reflexo em 3 botões dourados e nos 4 blocos do Ofício (7 animações) | ao passar o mouse |
| Ambiente | I4 · Névoa, I5 · Correnteza (raios), I6 · Partículas | tocam só com a seção visível |
| Rolagem | I7 · Parallax de A Queda e de Friedrich, ascensão das 2 névoas (4 animações) | acompanham a rolagem |
| Ofício | I8 · Blocos-rocha entram | ao entrar na tela |
| Baralho | pilha inicial, avançar dos cartões 1 a 5, recomeçar (7 animações) | ao carregar e ao clicar |

Todas respeitam "reduzir movimento" do sistema: o ambiente e os textos ficam parados, e o baralho pula direto para o estado final.

## O que esta cópia não carrega

- **O CSS base do Webflow** (`webflow.css` / normalize), que o Webflow injeta em todo site. O `estilos.css` daqui traz só o que foi criado para a TW.
- **O motor das animações.** O `interacoes.json` está no formato interno do Webflow (IX3). Para o site funcionar fora do Webflow, as animações precisam ser reescritas em GSAP, o que seria o caminho 3.
- **As variantes reduzidas das imagens** (`-p-500`, `-p-800`…), que o Webflow gera sozinho a partir dos originais desta pasta.

## Observações sobre o estado atual

- **No celular, a estátua (cartão 03) e o retrato (cartão 06) ficam escondidos:** o estilo `busto` tem `display: none` abaixo de 767px. O combo `is-retrato` (menor e esmaecido no celular) só passa a valer se essa regra for removida.
- **Idiomas:** o principal está como **Portuguese**. O **English (`/en-us`)** continua cadastrado, mas desativado, então não vai para o ar.
