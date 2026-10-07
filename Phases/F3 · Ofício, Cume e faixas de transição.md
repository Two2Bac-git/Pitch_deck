# F3 · Ofício, Cume e faixas de transição

**Objetivo.** Completar a subida da página: as faixas entre as telas, a seção que mostra o ofício ("Como esta página foi pintada") e o fecho no Cume.

**Governado por:** [Plano da TW, §1, §2.4 e §2.5](../../design-system-sfumato/plano-webflow-tw) · [Design system, §3.3 (orçamento de branco e composição das zonas claras) e §7 (bloco-rocha)](../../design-system-sfumato)

**Depende de:** [F0](../f0-fundacao-webflow). **Desbloqueia:** [F4](../f4-movimento-nativo).

**Conteúdo pendente (entra como placeholder marcado):** o contato (e-mail ou agenda) e a frase de convite do Cume.

## Dentro do escopo

- [ ] Faixa de transição 1→2: degradê `frio-950` → `frio-600`, com 30–40vh e sem texto
- [ ] Faixa de transição 2→3: degradê `frio-600` → `frio-300`, com 30–40vh e sem texto
- [ ] Ofício (`.zona.is-nevoa`, `#oficio`): título "Como esta página *foi pintada.*" e os 4 blocos-rocha do §2.4
- [ ] Cume (`.zona.is-cume`, `#contato`): degradê `frio-200` → `frio-50`, título "Vamos *conversar.*", lead \[convite\], Botão Luz "Falar com a TW" → \[contato\] e rodapé "TW · 2026"
- [ ] Camadas de névoa ambiente posicionadas, ainda paradas
- [ ] Espaço reservado para a imagem do Cume, se a composição A · O Andarilho for usada lá ([composições](../../design-system-sfumato/hero-tw-composicoes))

## Fora do escopo

Hero, baralho e animações.

## Pronto quando

- [ ] A luminosidade só sobe de tela em tela: L .15 → .42 → .76 → .86–.97
- [ ] Texto escuro nas zonas claras: `frio-900` sobre `frio-300` (8,64:1) e sobre `frio-200` (12,08:1)
- [ ] O ouro aparece só como preenchimento (botão), nunca como texto sobre fundo claro
- [ ] O Cume não é uma página branca: cerca de um quarto da área é rocha (blocos ou imagem escura)
- [ ] Sem rolagem horizontal a 390px