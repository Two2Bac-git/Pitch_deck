# F1 · Hero estático

**Objetivo.** Montar o primeiro viewport completo, com o texto final e **sem movimento**, de forma que ele funcione sozinho antes de qualquer animação.

**Governado por:** [Plano da TW, §1 e §2.1](../../design-system-sfumato/plano-webflow-tw) · [Hero da TW: 3 composições](../../design-system-sfumato/hero-tw-composicoes) · [Design system, §5 Tipografia e §7.2 Componentes](../../design-system-sfumato)

**Depende de:** [F0](../f0-fundacao-webflow). **Desbloqueia:** [F4](../f4-movimento-nativo).

**Conteúdo pendente (entra como placeholder marcado):** nome da aceleradora no kicker e a pintura do hero. A composição ainda está por escolher; a recomendada é a B · A Queda.

## Dentro do escopo

- [ ] Seção `.zona.is-abismo`, com 100vh
- [ ] Nav estática: ***TW*** · Pitch (`#pitch`) · Ofício (`#oficio`) · Contato (`#contato`)
- [ ] Kicker: "Demo Day · \[aceleradora\]"
- [ ] Título em grid de célula única: frase-fantasma *"Estou sem dinheiro."* (`aria-hidden`, Bodoni itálico, `frio-400`) e, na mesma célula, o **H1** "Dinheiro no bolso *da sua empresa.*"
- [ ] Camada `pincel-veu` posicionada sobre o título, ainda parada
- [ ] Lead do §2.1 e os botões: Botão Luz "Abrir o pitch" → `#pitch`; Botão Névoa "Ver como foi feito" → `#oficio`
- [ ] Área da cena à direita, com placeholder da pintura; **metade esquerda em `frio-950` liso**, porque a pincelada pinta com essa cor

## Fora do escopo

Animações (são do F4) e a pintura em si, que é uma encomenda.

## Pronto quando

- [ ] Contraste conferido: H1 `frio-50` sobre `frio-950` (18,10:1); lead `frio-400` sobre `frio-950` (6,33:1)
- [ ] Legível num projetor ou TV: título, lead e botões
- [ ] O leitor de tela lê o H1 e **não** lê a frase-fantasma
- [ ] Os dois botões levam às âncoras certas
- [ ] Sem rolagem horizontal a 390px de largura
- [ ] Todo placeholder está marcado com `[ ]`

