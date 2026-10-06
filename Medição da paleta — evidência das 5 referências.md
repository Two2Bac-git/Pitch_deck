# Medição da paleta

Esta é a evidência por trás de cada token de cor do [Sfumato](../). A regra seguida foi: **duas medições por caminhos independentes ou nenhum número**. Quando as duas discordam, a discordância é registrada como achado, sem escolher um lado.

## Janela


| Item                    | Recorte medido                                                                                                                                                                     |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fonte                   | As **reproduções enviadas na conversa** (JPEG/PNG), não as obras originais                                                                                                         |
| 1 · Crypto World's Fair | `1.png` 310×2000, captura de página inteira já reduzida                                                                                                                            |
| 2 · Friedrich           | `2.jpg` 736×942                                                                                                                                                                    |
| 3 · A queda             | `3.jpg` 736×917                                                                                                                                                                    |
| 4 · Busto               | `4.jpg` 1100×1100. O fundo xadrez é falso (está gravado nos pixels), então foram medidos só dois recortes conferidos visualmente: rosto `160×340+500+260` e louro `480×85+330+720` |
| 5 · David               | `5.jpg` 360×360, fundo branco. Recorte do rosto `140×220+100+90`                                                                                                                   |
| Paleta e acentos        | Reamostragem por área para ≈ 14,4 mil px por imagem (`-resize 14400@`)                                                                                                             |
| Fração de branco        | Resolução cheia (620 mil a 693 mil px)                                                                                                                                             |


## Métodos


| Medida             | Caminho A                                                                                       | Caminho B                                                                  |
| ------------------ | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Paleta (k = 6)     | Octree do ImageMagick (`-colors 6`)                                                             | k-means em Python puro com init determinística por quantis de luminância   |
| Destaque e sombra  | Média dos 3% mais claros e dos 3% mais escuros (Python)                                         | Cor mais clara e mais escura do octree k = 12 (magick)                     |
| Acento por família | Filtra por janela de matiz e tira a média dos 10% mais cromáticos                               | Octree k = 4 da família: o cluster mais cromático entre os que pesam ≥ 10% |
| Fração de branco   | Python: luma Rec.709 &gt; 204                                                                   | ImageMagick: `-grayscale Rec709Luma -threshold 80%`, média                 |
| Hex → OKLCH        | Conversão de Ottosson. Controle: `#ff0000` → L .628 C .258 h 29,2° e ida-e-volta exata em 4 hex | — (conversão determinística, não é medida)                                 |
| Contraste          | Fórmula WCAG 2.x. Controle: preto/branco = 21:1, `#767676`/branco = 4,54:1                      | — (conversão determinística)                                               |


## Resultados que viraram token

### Paleta: concordâncias (Δ RGB &lt; 15)


| Referência            | Octree    | k-means   | Δ   | Peso      |
| --------------------- | --------- | --------- | --- | --------- |
| Crypto Fair, fundo    | `#1e1b1f` | `#1f1c20` | 1,3 | 56% / 67% |
| Crypto Fair, malva    | `#2f2930` | `#302a31` | 1,4 | 16% / 15% |
| Friedrich, rocha      | `#19171c` | `#18161c` | 1,0 | 27% / 27% |
| Friedrich, névoa      | `#c9cddb` | `#ccd0e0` | 6,4 | 27% / 20% |
| Friedrich, azul médio | `#75818c` | `#77818b` | 2,0 | 9% / 9%   |
| A queda, médio-claro  | `#858577` | `#838679` | 3,0 | 9% / 14%  |
| David, branco         | `#f4f4f8` | `#f7f6fa` | 3,7 | 27% / 24% |
| David, meio-tom       | `#9e9ba6` | `#9d9aa5` | 1,9 | 23% / 18% |


### Destaque e sombra


| Referência    | Top 3%      | Octree-12 máx. | Δ    | Bottom 3% | Octree-12 mín. | Δ    |
| ------------- | ----------- | -------------- | ---- | --------- | -------------- | ---- |
| Friedrich     | `#d3d7e7`   | `#cdd3e5`      | 7,4  | `#0d0a10` | `#141117`      | 12,3 |
| A queda       | `#cabca6`   | `#d0bda6`      | 6,0  | `#1b1517` | `#1e1e22`      | 14,4 |
| Busto (louro) | `#e0ddd0`   | `#d7d3ce`      | 13,8 | `#372a1a` | `#332d22`      | 9,5  |
| David         | `#ffffff` ⚠ | `#f4f4f8`      | 17,1 | `#3e373c` | `#352f33`      | 14,8 |


⚠ No recorte do David, 9,8% dos pixels têm os três canais ≥ 250. Pode ser estouro de luz da foto ou resto de fundo branco, e o instrumento não separa os dois. O token usa o octree (`#f4f4f8`), que concorda com o k-means.

### Acento por família de matiz


| Referência    | Família | n (% da imagem) | A         | B         | Δ                |
| ------------- | ------- | --------------- | --------- | --------- | ---------------- |
| Crypto Fair   | violeta | 11 620 (81,1%)  | `#352b37` | `#29232a` | 19,6             |
| Friedrich     | violeta | 1 737 (12,0%)   | `#151219` | `#161319` | **1,2**          |
| A queda       | teal    | 4 081 (28,2%)   | `#2c525f` | `#314b52` | 15,7             |
| Busto (louro) | ouro    | 6 516 (45,7%)   | `#be9445` | `#bd9d5e` | 26,6 (no limite) |
| David         | violeta | 1 717 (11,9%)   | `#85808e` | `#96919d` | 28,5 (no limite) |


O âmbar da lente vem da passada de acento global (5% mais cromáticos × octree-24 mais cromático): `#b67923` × `#c67717`, Δ 19,9.

### Fração de branco (luma &gt; 80%)


| Referência  | n px    | Python | ImageMagick |
| ----------- | ------- | ------ | ----------- |
| Crypto Fair | 620 000 | 0,81%  | 0,81%       |
| Friedrich   | 693 312 | 14,95% | 14,95%      |
| A queda     | 674 912 | 0,63%  | 0,63%       |


### Matiz OKLCH das âncoras


| Âncora               | A                        | B                        |
| -------------------- | ------------------------ | ------------------------ |
| Sombra de Friedrich  | L .189 C .015 **h 304°** | L .193 C .013 **h 308°** |
| Fundo do Crypto Fair | L .227 C .009 **h 318°** | L .232 C .009 **h 318°** |
| Malva do Crypto Fair | L .305 C .025 **h 321°** | L .266 C .015 **h 321°** |
| Sombra do David      | L .346 C .013 **h 336°** | L .313 C .011 **h 338°** |
| Meio-tom do David    | L .609 C .022 **h 302°** | L .665 C .018 **h 305°** |
| Névoa de Friedrich   | L .849 C .020 **h 273°** | L .859 C .023 **h 275°** |
| Destaque da névoa    | L .881 C .022 **h 275°** | L .868 C .026 **h 271°** |
| Branco do David      | L .968 C .005 **h 286°** | L .975 C .005 **h 298°** |
| Mármore do busto     | L .896 C .018 **h 96°**  | L .869 C .008 **h 74°**  |
| Camisa do abismo     | L .801 C .034 **h 79°**  | L .808 C .038 **h 73°**  |
| Folha de ouro        | L .691 C .109 **h 81°**  | L .711 C .090 **h 83°**  |
| Âmbar da lente       | L .625 C .122 **h 70°**  | L .641 C .139 **h 64°**  |
| Teal do abismo       | L .416 C .048 **h 222°** | L .395 C .034 **h 216°** |


## Discordâncias registradas (não resolvidas por escolha)


| Onde                                                          | Δ      | Leitura                                                                                                                                                                                       |
| ------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Destaque do Crypto Fair (top 3% `#9b9a99` × octree `#cecece`) | 90,2   | Na imagem reduzida, o branco é raro demais para formar média estável: os 3% mais claros ainda são cinza. Isso é coerente com a fração de branco de 0,81% medida em resolução cheia            |
| Ouro do rosto do busto (`#c4821e` × `#be9754`)                | 58,4   | Há **dois ouros** na mesma imagem: o âmbar da lente e a folha nas manchas. Por isso o sistema tem `ouro-600` **e** `ouro-500`                                                                 |
| Paleta do busto (k-means × octree)                            | 25–43  | O k-means engole o ouro, que é minoria de matiz, dentro do mármore; o octree separa. Foi daí que veio a passada por família                                                                   |
| Teal na passada global (`#5b6c6d` × `#305763`)                | 48,7   | Os 5% mais cromáticos misturavam o teal da água com o laranja do rosto e davam cinza. Resolvido filtrando por família: Δ 15,7                                                                 |
| Acentos, 1ª versão do caminho B                               | 37–124 | **Erro do instrumento, não da cor.** O B media "o cluster mais pesado da família", uma grandeza diferente do A. Corrigido para "o cluster mais cromático com ≥ 10% de peso" antes de comparar |


## Ressalva

A literatura descreve o casaco do andarilho como **verde-escuro**. Nesta reprodução, os 3% de pixels mais escuros são violeta-pretos (h 304°–308°). A medida descreve a imagem que o Andrey enviou, e é ela que define o sistema, não a tela original em Hamburgo.

Os scripts (`paleta.py`, `acentos.py`, `oklch.py`, `tokens.py`) ficaram no scratchpad desta sessão, que é efêmero. Os métodos estão descritos acima para quem precisar refazer.