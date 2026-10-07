# F4 · Movimento nativo

**Objetivo.** Dar à página o movimento do Sfumato com as Interactions nativas do Webflow. O movimento só **embeleza** o que já funciona parado.

**Governado por:** [Plano da TW, §6 (tabela I1–I5)](../../design-system-sfumato/plano-webflow-tw) · [Design system, §6 Movimento (famílias, tokens, coreografia e proibições)](../../design-system-sfumato) · [Hero da TW: 3 composições](../../design-system-sfumato/hero-tw-composicoes) (a abertura animada de referência)

**Depende de:** [F1](../f1-hero-estatico), [F2](../f2-sala-e-baralho) e [F3](../f3-oficio-cume-faixas). **Desbloqueia:** [F5](../f5-acabamento-medicao).

## Dentro do escopo

- [ ] **I1 · Frase → promessa** (Page load): a camada cobre a frase-fantasma, a frase some e a camada descobre o H1 por SplitText de palavras. 2,4 s no total
- [ ] **Borda de cerdas da pincelada:** filtro SVG `#cerdas` num Embed (exige o plano pago). Sem embed, use uma máscara de pincel em PNG ou SVG na borda da camada
- [ ] **I2 · Títulos pincelados** (Scroll, entrada na viewport, uma vez): `.display-2` por palavra, 0,9 s, `expo.out`, stagger de 0,06 s
- [ ] **I3 · Luz rasante** (Hover): `.reflexo` de −120% a 120%, 0,48 s
- [ ] **I4 · Névoa** (Page load): 3 manchas com Repetition infinita e yoyo, em 23, 29 e 37 s
- [ ] **I5 · Correnteza** (Page load): 3 raios com x ±14px e skewX ±6°, em 11, 13 e 17 s
- [ ] Se a pintura do hero chegar em camadas, cada camada da correnteza anima em velocidade própria

## Fora do escopo

O baralho, que já se move pelo script do F2.

## Pronto quando

- [ ] Lead e botões do hero estão visíveis desde o primeiro instante; só o título faz a transição
- [ ] Cada título revela **uma vez**; a luz rasante roda uma vez por hover
- [ ] Nada quica, gira ou dá zoom-pop; uma camada ambiente por viewport
- [ ] Com movimento reduzido: só o H1 aparece, ambiente parado e página completa
- [ ] As manchas de névoa usam `radial-gradient`, não `filter: blur()` em elementos grandes