# F0 · Fundação no Webflow

**Objetivo.** Deixar o projeto pronto para que qualquer seção ou cartão troque de altitude **só mudando uma classe combo**, sem tocar em estilo.

**Governado por:** [Plano da TW, §4 Variables, §5 Classes e §7 (aviso do plano pago)](../../design-system-sfumato/plano-webflow-tw) · [Design system Sfumato, §3 Cor e §5 Tipografia](../../design-system-sfumato)

**Depende de:** nada. **Desbloqueia:** [F1](../f1-hero-estatico), [F2](../f2-sala-e-baralho) e [F3](../f3-oficio-cume-faixas).

## Dentro do escopo

- [ ] **Plano pago confirmado** (plano de site ou workspace Core/Growth/Agency/Freelancer). Sem ele, o F2 segue a alternativa sem código do §9 do plano
- [ ] **Fontes** via *Site settings → Fonts → Google Fonts*: Bodoni Moda (400, 500 e itálicos) e Bricolage Grotesque (400, 500, 600)
- [ ] Coleção **`Primitivos`**: 11 frios, 4 quentes, 1 água e 2 fontes, com os hex exatos do §4.1
- [ ] Coleção **`Semântico`**: `fundo`, `texto`, `texto-suave` e `prova`, com **8 modes manuais** (Abismo, Correnteza, Mármore, Superfície, Véu, Névoa, Alto, Cume), conforme a matriz do §4.2
- [ ] Coleção **`Medidas`**: 8 tamanhos com modes automáticos por breakpoint (§4.3)
- [ ] Classes base: `zona` e `cartao`, com os combos `is-…` aplicando os modes; tipografia (`display-1` a `rotulo`); camada fixa `grao`
- [ ] Anotar o **nome CSS real** de `frio-200` (botão *Copy CSS*) para colar no script do F2

## Fora do escopo

Conteúdo das seções, Interactions e o script do baralho.

## Pronto quando

- [ ] Uma página de teste com um bloco `.zona` passa do Abismo ao Cume **só trocando o combo `is-…`**
- [ ] Os 8 modes batem com a matriz do §4.2 (fundo, texto, texto suave e prova), incluindo a exceção da Superfície: texto suave em `frio-300`
- [ ] A escala de tipo muda sozinha entre desktop, tablet e mobile

