# Como editar o site da TW

O site publicado fica em [`site/`](../site): `index.html` é o português e `en/index.html` é o inglês. As duas páginas saem do mesmo modelo, então **não edite os HTML de `site/` à mão**: edite aqui e gere de novo.

| Quero mudar… | Onde |
|---|---|
| Um texto (em qualquer idioma) | [`textos.json`](textos.json), no bloco `"pt"` ou `"en"`. `<em>` marca o itálico |
| A estrutura da página (ordem, blocos, imagens) | [`pagina.html`](pagina.html) |
| Cores, fontes, tamanhos, celular | [`../site/assets/css/tw.css`](../site/assets/css/tw.css) |
| Animações e o baralho | [`../site/assets/js/tw.js`](../site/assets/js/tw.js) |
| O endereço do site (domínio) | `URL_BASE` em [`gerar.py`](gerar.py) |

Depois de editar o modelo ou os textos, na raiz do repositório:

```bash
python3 fonte-do-site/gerar.py
```

Faça commit da pasta `site/` junto. Quando a mudança chega ao `main`, o GitHub publica o site sozinho ([`.github/workflows/pages.yml`](../.github/workflows/pages.yml)).

## O baralho

Segue o script do plano (§7): a ordem dos cartões no HTML é o estado, e o primeiro é o da frente.

- **Clique**, **Enter**, **espaço** ou **→**: avança.
- **←**: volta.
- **Recomeçar**: volta ao cartão 1.

A cada troca, o leitor de tela anuncia "Cartão n de 6" ("Card n of 6" em inglês). O botão de contato do último cartão não faz o baralho avançar.

## Movimento

As animações reproduzem as Interactions do Webflow (I1 a I8, registradas em [`../webflow/interacoes.json`](../webflow/interacoes.json)) com GSAP 3.15, que fica dentro do repositório em `site/assets/vendor/gsap/` (licença gratuita da GSAP). Com "reduzir movimento" ativo no sistema, nada se mexe e o baralho troca de cartão sem deslizar.
