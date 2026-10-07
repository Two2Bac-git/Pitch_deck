# Identidade visual da TW

**A tese em uma imagem:** um busto clássico de mármore usando óculos de hoje. São *os ideais da Renascença na época de hoje*, a filosofia da TW nas palavras do Andrey. O clássico é o mármore; o presente são os óculos.

A marca tem três peças, como uma oficina renascentista:


| Peça                  | O que é                                                                                                               | Papel                                                                                                                                                                                                                                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **O busto** (símbolo) | Busto frontal de mármore em luz baixa, com óculos dourados e guirlanda de louro, construído só com círculos e elipses | **A obra.** Aparece grande e raramente: no cartão 3 e onde a marca precisa se apresentar inteira                                                                                                                                                                                                                    |
| **Os óculos** (sinal) | Só os dois aros com as lentes âmbar e um brilho branco                                                                | **A assinatura.** É a peça que se repete: canto dos cartões, nav, favicon                                                                                                                                                                                                                                           |
| **TW** (logotipo)     | Bodoni Moda **itálico** 500                                                                                           | **A caligrafia.** O primeiro itálico foi cortado por Francesco Griffo para Aldo Manúcio em 1500, inspirado na letra cursiva dos humanistas, e o primeiro livro inteiro nele saiu em 1501, em Veneza: os mesmos anos do David. O logotipo em itálico é a mão de uma pessoa, coerente com "a pessoa antes do sistema" |


### O busto, versão 3: o que veio da referência

O símbolo foi redesenhado olhando o busto de referência. Desde 2026-10-06 existe uma **versão liberada** dessa imagem (PNG com transparência, uso verificado pelo Andrey), que entra no site como **foto** no cartão 3 ([mapa de imagens](../mapa-de-imagens), T4). Os papéis não se confundem: **a foto é a obra; o vetor é a assinatura**. Cada traço do vetor foi testado lado a lado com a referência e no tamanho mínimo de 64px:


| Traço da referência                                      | Decisão         | Por quê                                                                                            |
| -------------------------------------------------------- | --------------- | -------------------------------------------------------------------------------------------------- |
| Óculos **aviador**, de aro fino e com **barra superior** | **Entrou**      | É o que faz os óculos lerem como os da referência                                                  |
| **Pedestal**                                             | **Entrou**      | Dá a leitura de "busto de museu", a gramática de galeria do sistema                                |
| Rosa no cabelo                                           | Ficou de fora   | Em tamanho de marca vira um "@" ilegível                                                           |
| Louro como colar no peito                                | Ficou de fora   | Lê como corrente de ouro e cai no clichê "luxo cripto". Ficaram os dois ramos, que leem como louro |
| Manchas de folha de ouro no mármore                      | Para a execução | Em vetor geométrico parecem erro; cabem num acabamento à mão (ver abaixo)                          |


**Regra responsiva:** abaixo de 64px, os óculos perdem a barra superior. O favicon e o sinal dos cartões usam aros simples, a única versão que se lê a 16px.

**Deixado para a execução:** o acabamento à mão do símbolo, feito por um ilustrador (contorno com pincelada, manchas de folha de ouro), e o logotipo "TW" em curvas para impressão. A geometria atual é a base que o ilustrador deve seguir.

## 1. Prancha da marca

```wireframe
<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..700;1,6..96,400..700&family=Bricolage+Grotesque:opsz,wght@12..96,300..700&display=swap">
<style>
*{box-sizing:border-box}
body{margin:0;padding:20px;background:#0e0910;color:#e5e7ef;font:13px/1.45 'Bricolage Grotesque',system-ui,sans-serif}
.grade{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:16px}
.painel{background:#211a22;border-radius:2px;padding:18px}
.claro{background:#f4f5f9;color:#171119}
.leg{font-size:12px;color:#91919d;margin:0 0 12px}
.claro .leg{color:#312b34}
.busto{display:block;width:100%;max-width:300px;height:auto;margin:0 auto}
.logo{font:italic 500 44px/1 'Bodoni Moda','Didot','Bodoni 72',Georgia,serif;letter-spacing:-.01em}
.h{display:flex;align-items:center;gap:12px}
.sinal{width:48px;height:auto}
.v{display:flex;flex-direction:column;align-items:center;gap:6px}
.pilha{display:grid;gap:16px}
@media (max-width:640px){.grade{grid-template-columns:minmax(0,1fr)}}
</style></head><body>
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
<defs><linearGradient id="marm" gradientUnits="userSpaceOnUse" x1="30" y1="40" x2="175" y2="120"><stop offset="0" stop-color="#e5e7ef"/><stop offset=".22" stop-color="#afb0bd"/><stop offset=".55" stop-color="#4f4b55"/><stop offset=".92" stop-color="#211a22"/></linearGradient></defs>
<symbol id="busto" viewBox="0 0 200 260"><g fill="url(#marm)"><path d="M62 260 L68 246 L132 246 L138 260Z"/><rect x="74" y="232" width="52" height="16" rx="3"/><path d="M24 232 Q28 186 62 170 Q80 162 100 162 Q120 162 138 170 Q172 186 176 232Z"/><path d="M86 168 L88 122 L112 122 L114 168Z"/><ellipse cx="100" cy="90" rx="34" ry="44"/><circle cx="70" cy="64" r="11"/><circle cx="82" cy="50" r="12"/><circle cx="100" cy="45" r="13"/><circle cx="118" cy="50" r="12"/><circle cx="130" cy="64" r="11"/><circle cx="135" cy="82" r="8"/><circle cx="65" cy="82" r="8"/></g><g stroke="#bd9952" stroke-width="1.8"><circle cx="86" cy="95" r="12" fill="#be781d" fill-opacity=".55"/><circle cx="114" cy="95" r="12" fill="#be781d" fill-opacity=".55"/><path d="M97.6 92.5 Q100 89.5 102.4 92.5" fill="none"/><path d="M77 85.5 Q100 79 123 85.5" fill="none"/></g><path d="M78 89 Q80.5 85 85 84" stroke="#f4f5f9" stroke-width="1.6" stroke-linecap="round" fill="none"/><g stroke="#bd9952" stroke-width="1.4" fill="none"><path d="M42 206 Q56 182 94 168"/><path d="M158 206 Q144 182 106 168"/></g><g fill="#bd9952"><ellipse cx="48" cy="191" rx="8" ry="3" transform="rotate(-70 48 191)"/><ellipse cx="56" cy="194" rx="8" ry="3" transform="rotate(5 56 194)"/><ellipse cx="60" cy="180" rx="8" ry="3" transform="rotate(-65 60 180)"/><ellipse cx="68" cy="184" rx="8" ry="3" transform="rotate(0 68 184)"/><ellipse cx="74" cy="172" rx="8" ry="3" transform="rotate(-60 74 172)"/><ellipse cx="82" cy="177" rx="8" ry="3" transform="rotate(-5 82 177)"/><ellipse cx="152" cy="191" rx="8" ry="3" transform="rotate(70 152 191)"/><ellipse cx="144" cy="194" rx="8" ry="3" transform="rotate(-5 144 194)"/><ellipse cx="140" cy="180" rx="8" ry="3" transform="rotate(65 140 180)"/><ellipse cx="132" cy="184" rx="8" ry="3" transform="rotate(0 132 184)"/><ellipse cx="126" cy="172" rx="8" ry="3" transform="rotate(60 126 172)"/><ellipse cx="118" cy="177" rx="8" ry="3" transform="rotate(5 118 177)"/></g></symbol>
<symbol id="sinal" viewBox="0 0 32 20"><g stroke="currentColor" stroke-width="2.4"><circle cx="9.6" cy="10" r="5.8" fill="#be781d" fill-opacity=".38"/><circle cx="22.4" cy="10" r="5.8" fill="#be781d" fill-opacity=".38"/><path d="M14.4 8.9 Q16 7.1 17.6 8.9" fill="none"/></g><path d="M6.6 8.3 Q7.6 6.6 9.6 6.3" stroke="#f4f5f9" stroke-width="1.2" stroke-linecap="round" fill="none"/></symbol>
</svg>
<div class="grade">
<div class="painel"><p class="leg">Símbolo · o busto, com o estudo de proporção (linhas tracejadas: eixo, topo, olhos, queixo, ombro)</p>
<svg class="busto" viewBox="0 0 200 260" role="img" aria-label="Símbolo da TW: busto de mármore com óculos dourados"><use href="#busto"/><g stroke="#72707b" stroke-width=".6" fill="none" stroke-dasharray="3 3"><line x1="100" y1="20" x2="100" y2="240"/><line x1="40" y1="32" x2="160" y2="32"/><line x1="40" y1="94" x2="160" y2="94"/><line x1="40" y1="134" x2="160" y2="134"/><line x1="20" y1="162" x2="180" y2="162"/><circle cx="100" cy="90" r="44"/></g></svg>
</div>
<div class="pilha">
<div class="painel"><p class="leg">Assinatura horizontal · zona escura (aro ouro-500)</p><div class="h" style="color:#bd9952"><svg class="sinal" viewBox="0 0 32 20" aria-hidden="true"><use href="#sinal"/></svg><span class="logo" style="color:#f4f5f9">TW</span></div></div>
<div class="painel claro"><p class="leg">Assinatura horizontal · zona clara (aro frio-900)</p><div class="h" style="color:#171119"><svg class="sinal" viewBox="0 0 32 20" aria-hidden="true"><use href="#sinal"/></svg><span class="logo">TW</span></div></div>
<div class="painel"><p class="leg">Assinatura vertical</p><div class="v"><svg viewBox="0 0 200 260" width="100" height="130" aria-hidden="true"><use href="#busto"/></svg><span class="logo" style="font-size:36px;color:#f4f5f9">TW</span></div></div>
</div>
</div>
</body></html>
```

## 2. Favicon e ícones

```wireframe
<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
*{box-sizing:border-box}
body{margin:0;padding:20px;background:#211a22;color:#e5e7ef;font:13px/1.45 system-ui,sans-serif}
.linha{display:flex;flex-wrap:wrap;align-items:flex-end;gap:22px;margin-bottom:22px}
.item{display:flex;flex-direction:column;align-items:center;gap:6px;font-size:12px;color:#afb0bd}
.aba{display:flex;align-items:center;gap:8px;padding:7px 12px;border-radius:8px 8px 0 0;font-size:13px;width:220px}
.aba.clara{background:#dfe1e8;color:#312b34}
.aba.escura{background:#0e0910;color:#e5e7ef}
.abas{display:flex;gap:14px;flex-wrap:wrap}
</style></head><body>
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
<defs><linearGradient id="cab" gradientUnits="userSpaceOnUse" x1="14" y1="10" x2="54" y2="30"><stop offset="0" stop-color="#e5e7ef"/><stop offset=".35" stop-color="#afb0bd"/><stop offset=".85" stop-color="#4f4b55"/></linearGradient></defs>
<symbol id="icone" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#0e0910"/><g stroke="#bd9952" stroke-width="2.4"><circle cx="9.6" cy="16.5" r="5.8" fill="#be781d" fill-opacity=".38"/><circle cx="22.4" cy="16.5" r="5.8" fill="#be781d" fill-opacity=".38"/><path d="M14.4 15.4 Q16 13.6 17.6 15.4" fill="none"/></g><path d="M6.6 14.8 Q7.6 13.1 9.6 12.8" stroke="#f4f5f9" stroke-width="1.2" stroke-linecap="round" fill="none"/></symbol>
<symbol id="cabeca" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0e0910"/><g fill="url(#cab)"><path d="M10 64 Q13 50 24 47 L40 47 Q51 50 54 64Z"/><path d="M27 49 L28 40 L36 40 L37 49Z"/><ellipse cx="32" cy="29" rx="12" ry="15"/><circle cx="22" cy="19" r="4.6"/><circle cx="26.5" cy="14" r="5"/><circle cx="32" cy="12.2" r="5.2"/><circle cx="37.5" cy="14" r="5"/><circle cx="42" cy="19" r="4.6"/></g><g stroke="#bd9952" stroke-width="1.6"><circle cx="27.3" cy="30" r="4.3" fill="#be781d" fill-opacity=".75"/><circle cx="36.7" cy="30" r="4.3" fill="#be781d" fill-opacity=".75"/><path d="M30.9 29.4 Q32 28.4 33.1 29.4" fill="none"/></g></symbol>
</svg>
<div class="linha">
<div class="item"><svg width="16" height="16"><use href="#icone"/></svg>óculos · 16</div>
<div class="item"><svg width="32" height="32"><use href="#icone"/></svg>óculos · 32 (favicon)</div>
<div class="item"><svg width="64" height="64"><use href="#icone"/></svg>óculos · 64</div>
<div class="item"><svg width="64" height="64"><use href="#cabeca"/></svg>cabeça · 64</div>
<div class="item"><svg width="160" height="160"><use href="#cabeca"/></svg>cabeça · webclip (256 na entrega)</div>
</div>
<div class="abas">
<div class="aba clara"><svg width="16" height="16"><use href="#icone"/></svg>TW · Pitch</div>
<div class="aba escura"><svg width="16" height="16"><use href="#icone"/></svg>TW · Pitch</div>
</div>
</body></html>
```

**Por que dois ícones.** Os dois foram renderizados de verdade e inspecionados pixel a pixel. A **cabeça** a 16px vira uma mancha cinza, e o navegador encolhe o favicon de 32 para 16 nas abas. Por isso o **favicon são os óculos**, legíveis a 16 e a 32. A cabeça vai para o **ícone de atalho** (webclip, tela inicial do celular), em que há espaço para o busto aparecer.

## 3. Uso nos cartões

```wireframe
<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..700;1,6..96,400..700&family=Bricolage+Grotesque:opsz,wght@12..96,300..700&display=swap">
<style>
*{box-sizing:border-box}
body{margin:0;padding:18px;background:#4f4b55;font:13px/1.45 'Bricolage Grotesque',system-ui,sans-serif}
.tres{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.cartao{position:relative;min-height:230px;padding:16px;border-radius:2px;background:var(--fundo);color:var(--texto);display:flex;flex-direction:column;justify-content:space-between;gap:10px;overflow:hidden;box-shadow:0 24px 64px -24px rgb(14 9 16 / .6)}
.topo{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--suave);position:relative;z-index:1}
.topo .sinal{width:26px;height:auto;color:var(--sinal)}
h3{margin:0;font:400 22px/1.08 'Bodoni Moda','Didot','Bodoni 72',Georgia,serif;position:relative;z-index:1}
.ouro{color:#bd9952}
.busto{position:absolute;right:4%;bottom:0;height:78%;width:auto}
.is-marmore h3{max-width:58%}
.cta{align-self:flex-start;background:#bd9952;color:#171119;border-radius:999px;padding:7px 14px;font-weight:600;font-size:12px}
.is-abismo{--fundo:#0e0910;--texto:#f4f5f9;--suave:#91919d;--sinal:#bd9952}
.is-marmore{--fundo:#211a22;--texto:#e5e7ef;--suave:#91919d;--sinal:#bd9952}
.is-cume{--fundo:#f4f5f9;--texto:#171119;--suave:#312b34;--sinal:#171119}
@media (max-width:640px){.tres{grid-template-columns:minmax(0,1fr)}}
</style></head><body>
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
<defs><linearGradient id="marm" gradientUnits="userSpaceOnUse" x1="30" y1="40" x2="175" y2="120"><stop offset="0" stop-color="#e5e7ef"/><stop offset=".22" stop-color="#afb0bd"/><stop offset=".55" stop-color="#4f4b55"/><stop offset=".92" stop-color="#211a22"/></linearGradient></defs>
<symbol id="busto" viewBox="0 0 200 260"><g fill="url(#marm)"><path d="M62 260 L68 246 L132 246 L138 260Z"/><rect x="74" y="232" width="52" height="16" rx="3"/><path d="M24 232 Q28 186 62 170 Q80 162 100 162 Q120 162 138 170 Q172 186 176 232Z"/><path d="M86 168 L88 122 L112 122 L114 168Z"/><ellipse cx="100" cy="90" rx="34" ry="44"/><circle cx="70" cy="64" r="11"/><circle cx="82" cy="50" r="12"/><circle cx="100" cy="45" r="13"/><circle cx="118" cy="50" r="12"/><circle cx="130" cy="64" r="11"/><circle cx="135" cy="82" r="8"/><circle cx="65" cy="82" r="8"/></g><g stroke="#bd9952" stroke-width="1.8"><circle cx="86" cy="95" r="12" fill="#be781d" fill-opacity=".55"/><circle cx="114" cy="95" r="12" fill="#be781d" fill-opacity=".55"/><path d="M97.6 92.5 Q100 89.5 102.4 92.5" fill="none"/><path d="M77 85.5 Q100 79 123 85.5" fill="none"/></g><path d="M78 89 Q80.5 85 85 84" stroke="#f4f5f9" stroke-width="1.6" stroke-linecap="round" fill="none"/><g stroke="#bd9952" stroke-width="1.4" fill="none"><path d="M42 206 Q56 182 94 168"/><path d="M158 206 Q144 182 106 168"/></g><g fill="#bd9952"><ellipse cx="48" cy="191" rx="8" ry="3" transform="rotate(-70 48 191)"/><ellipse cx="56" cy="194" rx="8" ry="3" transform="rotate(5 56 194)"/><ellipse cx="60" cy="180" rx="8" ry="3" transform="rotate(-65 60 180)"/><ellipse cx="68" cy="184" rx="8" ry="3" transform="rotate(0 68 184)"/><ellipse cx="74" cy="172" rx="8" ry="3" transform="rotate(-60 74 172)"/><ellipse cx="82" cy="177" rx="8" ry="3" transform="rotate(-5 82 177)"/><ellipse cx="152" cy="191" rx="8" ry="3" transform="rotate(70 152 191)"/><ellipse cx="144" cy="194" rx="8" ry="3" transform="rotate(-5 144 194)"/><ellipse cx="140" cy="180" rx="8" ry="3" transform="rotate(65 140 180)"/><ellipse cx="132" cy="184" rx="8" ry="3" transform="rotate(0 132 184)"/><ellipse cx="126" cy="172" rx="8" ry="3" transform="rotate(60 126 172)"/><ellipse cx="118" cy="177" rx="8" ry="3" transform="rotate(5 118 177)"/></g></symbol>
<symbol id="sinal" viewBox="0 0 32 20"><g stroke="currentColor" stroke-width="2.4"><circle cx="9.6" cy="10" r="5.8" fill="#be781d" fill-opacity=".38"/><circle cx="22.4" cy="10" r="5.8" fill="#be781d" fill-opacity=".38"/><path d="M14.4 8.9 Q16 7.1 17.6 8.9" fill="none"/></g><path d="M6.6 8.3 Q7.6 6.6 9.6 6.3" stroke="#f4f5f9" stroke-width="1.2" stroke-linecap="round" fill="none"/></symbol>
</svg>
<div class="tres">
<article class="cartao is-abismo"><div class="topo"><span>01 · A frase</span><svg class="sinal" viewBox="0 0 32 20" aria-hidden="true"><use href="#sinal"/></svg></div><h3><em>“Estou sem dinheiro.”</em></h3><span></span></article>
<article class="cartao is-marmore"><div class="topo"><span>03 · A TW</span><svg class="sinal" viewBox="0 0 32 20" aria-hidden="true"><use href="#sinal"/></svg></div><h3><span class="ouro">TW</span>: dinheiro no bolso <em>da sua empresa.</em></h3><svg class="busto" viewBox="0 0 200 260" aria-hidden="true"><use href="#busto"/></svg><span></span></article>
<article class="cartao is-cume"><div class="topo"><span>07 · O pedido</span><svg class="sinal" viewBox="0 0 32 20" aria-hidden="true"><use href="#sinal"/></svg></div><h3>Nunca mais <em>“estou sem dinheiro”.</em></h3><span class="cta">Falar com a TW</span></article>
</div>
</body></html>
```


| Lugar                    | Peça                                                                                   | Cor                                                                               | Tamanho                                                                             |
| ------------------------ | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Canto de todo cartão** | Os óculos                                                                              | Aro `ouro-500` nos cartões escuros; aro `frio-900` nos claros; lente sempre âmbar | 24–26px de largura                                                                  |
| **Cartão 3 · A TW**      | A **foto** do busto em luz baixa, à direita (o vetor faz as vezes dela nos protótipos) | Mármore em luz baixa, ouro preservado: 0,09% de branco                            | 78% da altura do cartão; título até 58% da largura; some abaixo de 560px de largura |
| **Nav**                  | Assinatura horizontal (óculos + TW)                                                    | Aro dourado (o hero é escuro)                                                     | 28px de altura                                                                      |
| **Cume da página**       | Assinatura vertical (busto + TW)                                                       | Mármore; TW em `frio-900`                                                         | Busto ≥ 96px                                                                        |
| **Favicon**              | Ícone dos óculos                                                                       | Fundo `frio-950` próprio                                                          | 32px; o Webflow gera os outros tamanhos                                             |
| **Webclip**              | Ícone da cabeça                                                                        | Fundo `frio-950` próprio                                                          | 256px                                                                               |


**O busto aparece uma vez no baralho** (cartão 3). Os óculos se repetem, e é a repetição deles que vira reconhecimento.

## 4. Regras

### Cor do aro, medida


| Aro sobre… | Escuras (950 / 900 / 800 / 700) | Sala (600)     | Claras (300 / 200 / 50)          |
| ---------- | ------------------------------- | -------------- | -------------------------------- |
| `ouro-500` | 7,36 · 6,94 · 6,35 · 5,14       | 3,17           | **1,25 · 1,74 · 2,46 (reprova)** |
| `frio-900` | —                               | 2,18 (reprova) | 8,64 · 12,08 · 17,05             |


O WCAG pede **3:1** para elementos gráficos. Daí a regra: **aro dourado só no escuro e aro `frio-900` só no claro**. Na sala (`frio-600`), o dourado passa por pouco (3,17).

### Orçamento de branco, medido

Com o busto num cartão 3 em tamanho real (760×470, fundo `frio-800`), os pixels com luma acima de 80% somam **0,01%**, medidos por Python e por ImageMagick, que concordaram. O limite das zonas escuras é 1%. O que acende é o brilho da lente, o único branco da marca, como o Sfumato pede.

### Proteção e tamanhos mínimos

- **Área de proteção:** o diâmetro de uma lente, livre em volta de qualquer peça.
- **Mínimos:** busto ≥ 64px de altura; cabeça ≥ 32px; óculos ≥ 12px de largura.

### Não fazer


| Não                                                     | Por quê                                                                                        |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Girar, inclinar ou animar o busto                       | Lei 4 do Sfumato: o mármore fica; quem se move é a luz (a luz rasante pode passar *sobre* ele) |
| Halo ou brilho dourado em volta                         | Lei 4 e detector do impeccable: halo parado é clichê                                           |
| Aro dourado sobre fundo claro                           | Reprova no contraste (1,25 a 2,46:1)                                                           |
| Busto sobre `frio-500`                                  | Nenhuma cor da marca tem contraste confortável no meio da rampa                                |
| Recolorir o mármore fora do eixo frio                   | O mármore é o eixo frio medido; mudar a cor quebra o "mesmo pigmento"                          |
| Trocar o itálico do logotipo por romano                 | O itálico é a origem renascentista e a mão humana                                              |
| Esticar, achatar ou separar os óculos do rosto no busto | O símbolo é construído por proporção                                                           |


## 5. Arquivos

Ficaram em `identidade-tw/arquivos/`, ao lado deste documento.


| Arquivo           | Uso                                                                          |
| ----------------- | ---------------------------------------------------------------------------- |
| `tw-simbolo.svg`  | O busto (símbolo, v3: aviador com barra e pedestal), fundo transparente      |
| `tw-oculos.svg`   | Ícone dos óculos com fundo `frio-950` (fonte do favicon)                     |
| `tw-cabeca.svg`   | Ícone da cabeça com fundo `frio-950` e a barra do aviador (fonte do webclip) |
| `favicon-32.png`  | Favicon pronto, 32×32                                                        |
| `webclip-256.png` | Webclip pronto, 256×256                                                      |


**No Webflow:** *Site settings → General → Icons*. Ele aceita PNG e SVG e gera sozinho os tamanhos 32, 48, 180, 192 e 256 ([Webflow Help](https://help.webflow.com/hc/en-us/articles/33961256955539-Favicons-and-webclips)).

- Se houver campos separados, use o favicon dos óculos e o webclip da cabeça.
- Se o painel pedir uma imagem só, use os **óculos**, porque a legibilidade a 16px vence.
- Não é preciso um favicon separado para o modo escuro, porque o ícone tem fundo próprio.

**Ainda não existe:** o logotipo "TW" em curvas, para impressão. No site ele é texto vivo em Bodoni Moda, então não faz falta agora.