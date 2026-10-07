# F2 · Sala do pitch e baralho de 7 cartões

**Objetivo.** Pôr o pitch inteiro no ar: 7 cartões sobrepostos que passam com clique e voltam com ←, cada um na sua altitude. **É o ticket mais importante da página.**

**Governado por:** [Plano da TW, §1 (a sala mora no véu), §2.2, §2.3, §3 (protótipo), §7 (código) e §9 (sem plano pago)](../../design-system-sfumato/plano-webflow-tw) · [Design system, §4 Ascensão](../../design-system-sfumato)

**Depende de:** [F0](../f0-fundacao-webflow), que entrega os modes e o nome CSS de `frio-200`. **Desbloqueia:** [F4](../f4-movimento-nativo).

**Conteúdo pendente (entra como placeholder marcado):**

- tamanho do mercado com fonte (cartão 6);
- o pedido à banca e o time (cartão 7);
- confirmação da redação das hipóteses H1–H3 (cartão 5).

## Dentro do escopo

- [ ] Seção `.zona.is-veu` `#pitch` (fundo `frio-600`, 100vh)
- [ ] Div com `data-baralho`, `role="region"`, `aria-roledescription="baralho"` e `aria-label="Pitch da TW em 7 cartões"`
- [ ] 7 cartões `.cartao.is-…` **nesta ordem**: abismo, correnteza, mármore, superfície, névoa, alto e cume, com o conteúdo do §2.2
- [ ] Cartão 2 com a linha de fonte da Flexera; cartão 5 com as 3 placas de hipótese; cartão 7 com o botão "Falar com a TW"
- [ ] **Marca nos cartões** ([identidade da TW](../../design-system-sfumato/identidade-tw), §3): os óculos no canto de todo cartão, com aro `ouro-500` nos escuros e `frio-900` nos claros; o **busto** à direita do cartão 3, a única vez em que ele aparece no baralho, escondido abaixo de 560px
- [ ] Dica abaixo do baralho: "Clique no cartão para avançar · ← → no teclado", com `<span data-baralho-aviso aria-live="polite">`
- [ ] O CSS e o script do §7 colados em *Page settings → Custom code → Before `</body>`*, com o nome real de `frio-200`
- [ ] Camada de névoa ambiente da sala posicionada (a animação é do F4)

## Fora do escopo

Hero, Ofício, Cume e as Interactions nativas.

## Pronto quando

- [ ] 7 cliques voltam ao cartão 1
- [ ] ← volta um cartão; no cartão 1, vai para o 7
- [ ] Enter, espaço e → avançam
- [ ] O leitor de tela anuncia "Cartão n de 7" a cada troca
- [ ] Clicar no botão do cartão 7 **não** avança
- [ ] Clique rápido repetido não quebra a pilha (trava `ocupado`)
- [ ] Com movimento reduzido, a troca vira um fade de 0,2 s
- [ ] O contraste de cada cartão bate com a matriz do §4.2 do plano
- [ ] O teste abaixo passa contra o plano

&lt;details&gt;
&lt;summary&gt;Teste automatizado do script (protótipo §3 e produção §7)&lt;/summary&gt;

Rode com `node teste_baralho.mjs`. Ele lê os dois `<script>` do plano e os executa num DOM mínimo. Se alguém mexer no script e quebrar a trava, a névoa `::after` ou o ←, o teste reprova. Foi checado contra cópias sabotadas do script.

```js
// Roda os dois scripts do baralho (protótipo §3 e produção §7) do plano num DOM mínimo e confere o comportamento.
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const PLANO = process.env.PLANO ?? '/home/andreybacelar/.traycer/epics/ec0ec1f7-756f-4cb2-9787-c52c63dc9a9e/artifacts/design-system-sfumato/plano-webflow-tw/index.md';
const scripts = [...readFileSync(PLANO, 'utf8').matchAll(/<script>\n([\s\S]*?)<\/script>/g)].map((m) => m[1]);
assert.equal(scripts.length, 2, 'esperava 2 scripts no plano (protótipo e produção)');

class El {
  constructor(nome, pai = null) { this.nome = nome; this.parentElement = pai; this.kids = []; this.attrs = {}; this.cls = new Set(); this.ls = {}; this.tabIndex = 0; this.style = {}; }
  get children() { return this.kids; }
  get firstElementChild() { return this.kids[0]; }
  get lastElementChild() { return this.kids.at(-1); }
  append(c) { c.parentElement?.kids.splice(c.parentElement.kids.indexOf(c), 1); c.parentElement = this; this.kids.push(c); }
  prepend(c) { c.parentElement?.kids.splice(c.parentElement.kids.indexOf(c), 1); c.parentElement = this; this.kids.unshift(c); }
  setAttribute(k, v) { this.attrs[k] = v; }
  get classList() { const s = this.cls; return { add: (c) => s.add(c), remove: (c) => s.delete(c), contains: (c) => s.has(c) }; }
  addEventListener(t, f) { (this.ls[t] ??= []).push(f); }
  removeEventListener(t, f) { this.ls[t] = (this.ls[t] ?? []).filter((g) => g !== f); }
  emit(t, e) { [...(this.ls[t] ?? [])].forEach((f) => f({ preventDefault() {}, ...e })); }
  contains(x) { for (let n = x; n; n = n.parentElement) if (n === this) return true; return false; }
  closest(sel) { for (let n = this; n; n = n.parentElement) if (sel === 'a, button' && n.nome === 'button') return n; return null; }
  focus() { globalThis.__foco = this; }
}

for (const [i, codigo] of scripts.entries()) {
  const sala = new El('section'), baralho = new El('div', sala), aviso = new El('span', sala);
  sala.querySelector = (s) => (s === '[data-baralho-aviso]' ? aviso : null);
  const cartoes = Array.from({ length: 7 }, (_, n) => { const c = new El('cartao' + (n + 1)); baralho.append(c); return c; });
  const botao = new El('button', cartoes[6]);
  globalThis.document = { querySelectorAll: () => [baralho] };
  new Function(codigo)();

  const frente = () => baralho.firstElementChild;
  const sair = () => frente().emit('transitionend', { target: frente(), propertyName: 'opacity', pseudoElement: '' });
  assert.equal(aviso.textContent, 'Cartão 1 de 7');
  assert.equal(cartoes[0].tabIndex, 0); assert.equal(cartoes[1].attrs['aria-hidden'], 'true');

  baralho.emit('click', { target: cartoes[0] });
  assert.ok(cartoes[0].cls.has('sai'), 'clique na frente marca a saída');
  baralho.emit('click', { target: cartoes[0] });
  cartoes[0].emit('transitionend', { target: cartoes[0], propertyName: 'transform', pseudoElement: '' });
  cartoes[0].emit('transitionend', { target: cartoes[0], propertyName: 'opacity', pseudoElement: '::after' });
  assert.equal(frente(), cartoes[0], 'transform e a névoa ::after não encerram a saída');
  sair();
  assert.equal(frente(), cartoes[1]); assert.equal(baralho.lastElementChild, cartoes[0]);
  assert.ok(!cartoes[0].cls.has('sai')); assert.equal(aviso.textContent, 'Cartão 2 de 7');
  assert.equal(globalThis.__foco, cartoes[1], 'foco vai para o novo cartão da frente');

  baralho.emit('click', { target: cartoes[5] });
  assert.ok(!cartoes[5].cls.has('sai'));
  for (let k = 0; k < 4; k++) { baralho.emit('keydown', { target: frente(), key: 'ArrowRight' }); sair(); }
  assert.equal(frente(), cartoes[5]); assert.equal(aviso.textContent, 'Cartão 6 de 7');
  baralho.emit('keydown', { target: frente(), key: ' ' }); sair();
  assert.equal(frente(), cartoes[6]);
  baralho.emit('click', { target: botao });
  assert.ok(!cartoes[6].cls.has('sai'));
  baralho.emit('keydown', { target: frente(), key: 'Enter' }); sair();
  assert.equal(aviso.textContent, 'Cartão 1 de 7', '7 avanços dão a volta');

  baralho.emit('keydown', { target: frente(), key: 'ArrowLeft' });
  assert.equal(frente(), cartoes[6], '← traz o último cartão para a frente');
  assert.ok(!cartoes[6].cls.has('sai'), 'a pose de saída é retirada para animar a entrada');
  assert.equal(cartoes[6].style.transition, '', 'a transição volta a valer depois do salto');
  baralho.emit('keydown', { target: frente(), key: 'ArrowRight' });
  assert.ok(!cartoes[6].cls.has('sai'), 'avançar durante a volta é ignorado (trava ocupado)');
  cartoes[6].emit('transitionend', { target: cartoes[6], propertyName: 'opacity', pseudoElement: '::after' });
  assert.equal(aviso.textContent, 'Cartão 1 de 7', 'a névoa ::after não encerra a volta');
  sair();
  assert.equal(aviso.textContent, 'Cartão 7 de 7'); assert.equal(globalThis.__foco, cartoes[6]);
  baralho.emit('keydown', { target: frente(), key: 'ArrowLeft' }); sair();
  assert.equal(frente(), cartoes[5]); assert.equal(aviso.textContent, 'Cartão 6 de 7');
  assert.equal(cartoes[5].tabIndex, 0); assert.equal(cartoes[6].attrs['aria-hidden'], 'true');
  console.log(`script ${i + 1}/2 (${i ? 'produção §7' : 'protótipo §3'}): ok`);
}
```

&lt;/details&gt;