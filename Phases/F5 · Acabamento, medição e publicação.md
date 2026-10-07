# F5 · Acabamento, medição e publicação

**Objetivo.** Provar que a página entrega o que diz, medindo com o mesmo instrumento das referências, e publicá-la.

**Governado por:** [Plano da TW, §8 (F5) e §10 Riscos](../../design-system-sfumato/plano-webflow-tw) · [Medição da paleta (o instrumento)](../../design-system-sfumato/medicao-da-paleta) · [Design system, §9 Riscos](../../design-system-sfumato)

**Depende de:** [F4](../f4-movimento-nativo).

## Dentro do escopo

- [ ] Teste num projetor ou TV: a subida das zonas escuras (Abismo → Correnteza → Mármore) continua visível
- [ ] Passada com leitor de tela: H1, títulos partidos pelo SplitText e anúncio do baralho
- [ ] Desempenho: ambiente pausado fora da tela, sem `filter: blur()` em elementos grandes
- [ ] Publicação no domínio

## Fora do escopo

Conteúdo novo. O que ainda for placeholder fica na lista de substituição do plano (§2.6).

## Pronto quando

- [ ] O branco do hero medido é **≤ 1%**, e os dois caminhos concordam. Se passar de 1%, a frase "Aqui também" do bloco "Branco com orçamento" **sai** do Ofício
- [ ] O projetor mostra a progressão escura
- [ ] O leitor de tela lê o título como frase e anuncia "Cartão n de 7"
- [ ] Sem rolagem horizontal a 390px; nenhum erro no console
- [ ] O endereço publicado abre a página completa