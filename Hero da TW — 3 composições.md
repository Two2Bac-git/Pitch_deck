# Hero da TW: 3 composições

**O que é isto.** São três estudos do primeiro viewport, e cada um roda a abertura real: *"Estou sem dinheiro."* é apagada pela pincelada e trocada por *Dinheiro no bolso da sua empresa.*

**Não são as pinturas.** Esta máquina não tem gerador de imagem, então são **esboços de composição em código**. Eles definem o que encomendar ao pintor: onde fica a figura, de onde vem a luz e quanto branco cabe.

**Regras comuns às três:**

- **Metade esquerda livre e escura (`frio-950`) para o texto.** A pincelada pinta com `frio-950`, então o fundo atrás do título tem que ser exatamente essa cor.
- **Figura à direita.**
- **Branco ≤ 1% da área**, porque o hero mora no Abismo ([orçamento medido](../medicao-da-paleta)).

## A · O Andarilho

**Tese:** o fundador olha o futuro, e a banca olha junto, por trás dele (*Rückenfigur*).

```wireframe
<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..700;1,6..96,400..700&family=Bricolage+Grotesque:opsz,wght@12..96,300..700&display=swap">
<style>
*{box-sizing:border-box}
:root{--serif:'Bodoni Moda','Didot','Bodoni 72',Georgia,serif;--sans:'Bricolage Grotesque',system-ui,sans-serif}
body{margin:0;background:#0e0910;color:#e5e7ef;font:15px/1.55 var(--sans)}
.hero{position:relative;min-height:540px;overflow:hidden;padding:20px 28px 44px;display:flex;flex-direction:column;isolation:isolate}
.cena{position:absolute;inset:0;width:100%;height:100%;z-index:-2}
.hero::after{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(90deg,#0e0910 48%,rgba(14,9,16,.55) 62%,transparent 80%)}
nav{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:#91919d}
nav b{font:italic 500 20px var(--serif);color:#f4f5f9}
nav span{margin-left:18px}
.copy{margin-top:auto;max-width:min(520px,48%)}
.kicker{font-size:13px;color:#91919d}
.titulo{position:relative;display:grid;margin:10px 0 16px;overflow:hidden;padding:4px 0}
.titulo>*{grid-area:1/1;margin:0;font:400 clamp(30px,4.6vw,54px)/1.05 var(--serif);color:#f4f5f9}
.titulo>.fantasma{font-style:italic;color:#91919d;animation:fantasma 7s infinite}
.titulo>h1{animation:promessa 7s infinite}
.titulo>h1 em{color:#cdd0dd}
.titulo>.pincel{position:absolute;inset:-24px -60px;background:#0e0910;filter:url(#cerdas);animation:pincel 7s infinite}
@keyframes pincel{0%,16%{transform:translateX(-115%);animation-timing-function:cubic-bezier(.7,0,.2,1)}38%{transform:translateX(0);animation-timing-function:cubic-bezier(.7,0,.2,1)}60%,100%{transform:translateX(115%)}}
@keyframes fantasma{0%,37.9%{opacity:1}38%,90%{opacity:0}97%,100%{opacity:1}}
@keyframes promessa{0%,37.9%{opacity:0}38%,90%{opacity:1}97%,100%{opacity:0}}
.lead{margin:0;color:#91919d;max-width:46ch}
.btns{margin-top:22px;display:flex;gap:10px;flex-wrap:wrap}
.luz{background:#bd9952;color:#171119;border-radius:999px;padding:11px 22px;font-weight:600;font-size:14px}
.nev{background:rgba(244,245,249,.08);color:#e5e7ef;border-radius:999px;padding:11px 22px;font-size:14px}
.selo{position:absolute;right:16px;bottom:12px;font-size:12px;color:#91919d}
.mar{animation:mar 23s ease-in-out infinite alternate}
@keyframes mar{to{transform:translate(-36px,5px)}}
@media (max-width:640px){.copy{max-width:100%}.hero::after{background:linear-gradient(0deg,#0e0910 52%,rgba(14,9,16,.5) 72%,transparent)}}
@media (prefers-reduced-motion:reduce){.titulo>.fantasma,.titulo>.pincel{display:none}.titulo>h1{animation:none;opacity:1}.cena *{animation:none!important}}
</style></head><body>
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><filter id="cerdas" x="-20%" y="-30%" width="140%" height="160%"><feTurbulence type="fractalNoise" baseFrequency="0.02 0.3" numOctaves="3" seed="4"/><feDisplacementMap in="SourceGraphic" scale="34" xChannelSelector="R" yChannelSelector="G"/></filter></svg>
<header class="hero">
<svg class="cena" viewBox="0 0 1200 600" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
<defs>
<radialGradient id="ceu" cx="74%" cy="40%" r="60%"><stop offset="0" stop-color="#312b34"/><stop offset="1" stop-color="#0e0910"/></radialGradient>
<radialGradient id="nev" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#afb0bd" stop-opacity=".5"/><stop offset="1" stop-color="#afb0bd" stop-opacity="0"/></radialGradient>
</defs>
<rect width="1200" height="600" fill="url(#ceu)"/>
<path d="M560 420 L640 360 L700 395 L780 330 L860 385 L940 350 L1040 400 L1200 360 L1200 600 L560 600Z" fill="#4f4b55" opacity=".5"/>
<path d="M600 470 L690 420 L760 450 L850 405 L930 445 L1010 415 L1120 455 L1200 430 L1200 600 L600 600Z" fill="#312b34" opacity=".8"/>
<g class="mar"><ellipse cx="760" cy="440" rx="260" ry="46" fill="url(#nev)"/><ellipse cx="1050" cy="452" rx="240" ry="40" fill="url(#nev)"/><ellipse cx="900" cy="492" rx="320" ry="50" fill="url(#nev)" opacity=".8"/></g>
<path d="M720 600 L790 520 L840 505 L880 470 L915 468 L960 490 L1010 488 L1060 530 L1130 560 L1200 600Z" fill="#0e0910"/>
<g fill="#08060a"><rect x="906" y="420" width="9" height="50" rx="3"/><rect x="920" y="420" width="9" height="50" rx="3"/><path d="M898 352 Q917 338 937 352 L944 428 L890 428Z"/><circle cx="917" cy="338" r="11"/><line x1="944" y1="400" x2="962" y2="470" stroke="#08060a" stroke-width="3"/></g>
<path d="M906 331 Q917 320 929 331 Q921 327 913 329Z" fill="#72707b"/>
</svg>
<nav><b>TW</b><div><span>Pitch</span><span>Ofício</span><span>Contato</span></div></nav>
<div class="copy">
<div class="kicker">Demo Day · [aceleradora]</div>
<div class="titulo"><p class="fantasma" aria-hidden="true">“Estou sem dinheiro.”</p><h1>Dinheiro no bolso <em>da sua empresa.</em></h1><span class="pincel" aria-hidden="true"></span></div>
<p class="lead">A TW tira os dados e sistemas da sua empresa do servidor cobrado por uso e os distribui numa rede descentralizada, protegida por blockchain.</p>
<div class="btns"><span class="luz">Abrir o pitch</span><span class="nev">Ver como foi feito</span></div>
</div>
<span class="selo">A · O Andarilho · esboço de composição</span>
</header>
</body></html>
```

## B · A Queda

**Tese:** *"Estou sem dinheiro"* é a queda, e a página inteira é a subida. A imagem diz o mesmo que a frase que está sendo apagada.

```wireframe
<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..700;1,6..96,400..700&family=Bricolage+Grotesque:opsz,wght@12..96,300..700&display=swap">
<style>
*{box-sizing:border-box}
:root{--serif:'Bodoni Moda','Didot','Bodoni 72',Georgia,serif;--sans:'Bricolage Grotesque',system-ui,sans-serif}
body{margin:0;background:#0e0910;color:#e5e7ef;font:15px/1.55 var(--sans)}
.hero{position:relative;min-height:540px;overflow:hidden;padding:20px 28px 44px;display:flex;flex-direction:column;isolation:isolate}
.cena{position:absolute;inset:0;width:100%;height:100%;z-index:-2}
.hero::after{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(90deg,#0e0910 48%,rgba(14,9,16,.55) 62%,transparent 80%)}
nav{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:#91919d}
nav b{font:italic 500 20px var(--serif);color:#f4f5f9}
nav span{margin-left:18px}
.copy{margin-top:auto;max-width:min(520px,48%)}
.kicker{font-size:13px;color:#91919d}
.titulo{position:relative;display:grid;margin:10px 0 16px;overflow:hidden;padding:4px 0}
.titulo>*{grid-area:1/1;margin:0;font:400 clamp(30px,4.6vw,54px)/1.05 var(--serif);color:#f4f5f9}
.titulo>.fantasma{font-style:italic;color:#91919d;animation:fantasma 7s infinite}
.titulo>h1{animation:promessa 7s infinite}
.titulo>h1 em{color:#cdd0dd}
.titulo>.pincel{position:absolute;inset:-24px -60px;background:#0e0910;filter:url(#cerdas);animation:pincel 7s infinite}
@keyframes pincel{0%,16%{transform:translateX(-115%);animation-timing-function:cubic-bezier(.7,0,.2,1)}38%{transform:translateX(0);animation-timing-function:cubic-bezier(.7,0,.2,1)}60%,100%{transform:translateX(115%)}}
@keyframes fantasma{0%,37.9%{opacity:1}38%,90%{opacity:0}97%,100%{opacity:1}}
@keyframes promessa{0%,37.9%{opacity:0}38%,90%{opacity:1}97%,100%{opacity:0}}
.lead{margin:0;color:#91919d;max-width:46ch}
.btns{margin-top:22px;display:flex;gap:10px;flex-wrap:wrap}
.luz{background:#bd9952;color:#171119;border-radius:999px;padding:11px 22px;font-weight:600;font-size:14px}
.nev{background:rgba(244,245,249,.08);color:#e5e7ef;border-radius:999px;padding:11px 22px;font-size:14px}
.selo{position:absolute;right:16px;bottom:12px;font-size:12px;color:#91919d}
.queda{animation:queda 9s ease-in-out infinite alternate}
@keyframes queda{to{transform:translate(-6px,14px)}}
.bolhas circle{opacity:0;animation:sobe 9s linear infinite}
.bolhas circle:nth-child(2){animation-delay:2s}.bolhas circle:nth-child(3){animation-delay:4.5s}.bolhas circle:nth-child(4){animation-delay:6s}.bolhas circle:nth-child(5){animation-delay:7.5s}
@keyframes sobe{0%{transform:translateY(0);opacity:0}20%{opacity:.5}100%{transform:translateY(-320px);opacity:0}}
@media (max-width:640px){.copy{max-width:100%}.hero::after{background:linear-gradient(0deg,#0e0910 52%,rgba(14,9,16,.5) 72%,transparent)}}
@media (prefers-reduced-motion:reduce){.titulo>.fantasma,.titulo>.pincel{display:none}.titulo>h1{animation:none;opacity:1}.cena *{animation:none!important}}
</style></head><body>
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><filter id="cerdas" x="-20%" y="-30%" width="140%" height="160%"><feTurbulence type="fractalNoise" baseFrequency="0.02 0.3" numOctaves="3" seed="4"/><feDisplacementMap in="SourceGraphic" scale="34" xChannelSelector="R" yChannelSelector="G"/></filter></svg>
<header class="hero">
<svg class="cena" viewBox="0 0 1200 600" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
<defs>
<radialGradient id="sup" cx="70%" cy="-10%" r="75%"><stop offset="0" stop-color="#2f4f58"/><stop offset=".55" stop-color="#171119"/><stop offset="1" stop-color="#0e0910"/></radialGradient>
<linearGradient id="raio" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cdd0dd" stop-opacity=".22"/><stop offset="1" stop-color="#cdd0dd" stop-opacity="0"/></linearGradient>
<filter id="difuso"><feGaussianBlur stdDeviation="14"/></filter>
</defs>
<rect width="1200" height="600" fill="url(#sup)"/>
<g filter="url(#difuso)"><polygon points="760,-20 820,-20 900,600 700,600" fill="url(#raio)"/><polygon points="900,-20 930,-20 1010,600 900,600" fill="url(#raio)" opacity=".7"/><polygon points="640,-20 670,-20 650,600 560,600" fill="url(#raio)" opacity=".5"/></g>
<g class="bolhas" fill="#e5e7ef"><circle cx="720" cy="600" r="2"/><circle cx="800" cy="610" r="1.6"/><circle cx="930" cy="605" r="2.2"/><circle cx="1010" cy="612" r="1.4"/><circle cx="860" cy="615" r="1.8"/></g>
<g transform="translate(860 290) rotate(155)"><g class="queda">
<path d="M-10 20 L-16 62 L-4 92" stroke="#08060a" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 20 L22 56 L36 70" stroke="#08060a" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<ellipse cx="-2" cy="96" rx="9" ry="5" fill="#08060a"/><ellipse cx="40" cy="72" rx="9" ry="5" fill="#08060a"/>
<path d="M-15 -40 Q0 -48 15 -40 L18 22 L-18 22Z" fill="#cdbda6"/>
<path d="M-7 -32 L-5 14 M5 -34 L8 10" stroke="#f4f5f9" stroke-width="3" opacity=".6"/>
<path d="M-14 -36 L-30 -78" stroke="#cdbda6" stroke-width="8" stroke-linecap="round"/>
<path d="M14 -36 L26 -82" stroke="#cdbda6" stroke-width="8" stroke-linecap="round"/>
<circle cx="0" cy="-54" r="12" fill="#1b1517"/><circle cx="-3" cy="-57" r="7" fill="#be781d" opacity=".55"/>
</g></g>
</svg>
<nav><b>TW</b><div><span>Pitch</span><span>Ofício</span><span>Contato</span></div></nav>
<div class="copy">
<div class="kicker">Demo Day · [aceleradora]</div>
<div class="titulo"><p class="fantasma" aria-hidden="true">“Estou sem dinheiro.”</p><h1>Dinheiro no bolso <em>da sua empresa.</em></h1><span class="pincel" aria-hidden="true"></span></div>
<p class="lead">A TW tira os dados e sistemas da sua empresa do servidor cobrado por uso e os distribui numa rede descentralizada, protegida por blockchain.</p>
<div class="btns"><span class="luz">Abrir o pitch</span><span class="nev">Ver como foi feito</span></div>
</div>
<span class="selo">B · A Queda · esboço de composição</span>
</header>
</body></html>
```

## C · O Busto

**Tese:** o dinheiro clássico (mármore, louro, ouro) com irreverência (os óculos). É o que uma startup faz com um problema antigo.

```wireframe
<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..700;1,6..96,400..700&family=Bricolage+Grotesque:opsz,wght@12..96,300..700&display=swap">
<style>
*{box-sizing:border-box}
:root{--serif:'Bodoni Moda','Didot','Bodoni 72',Georgia,serif;--sans:'Bricolage Grotesque',system-ui,sans-serif}
body{margin:0;background:#0e0910;color:#e5e7ef;font:15px/1.55 var(--sans)}
.hero{position:relative;min-height:540px;overflow:hidden;padding:20px 28px 44px;display:flex;flex-direction:column;isolation:isolate}
.cena{position:absolute;inset:0;width:100%;height:100%;z-index:-2}
.hero::after{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(90deg,#0e0910 48%,rgba(14,9,16,.55) 62%,transparent 80%)}
nav{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:#91919d}
nav b{font:italic 500 20px var(--serif);color:#f4f5f9}
nav span{margin-left:18px}
.copy{margin-top:auto;max-width:min(520px,48%)}
.kicker{font-size:13px;color:#91919d}
.titulo{position:relative;display:grid;margin:10px 0 16px;overflow:hidden;padding:4px 0}
.titulo>*{grid-area:1/1;margin:0;font:400 clamp(30px,4.6vw,54px)/1.05 var(--serif);color:#f4f5f9}
.titulo>.fantasma{font-style:italic;color:#91919d;animation:fantasma 7s infinite}
.titulo>h1{animation:promessa 7s infinite}
.titulo>h1 em{color:#cdd0dd}
.titulo>.pincel{position:absolute;inset:-24px -60px;background:#0e0910;filter:url(#cerdas);animation:pincel 7s infinite}
@keyframes pincel{0%,16%{transform:translateX(-115%);animation-timing-function:cubic-bezier(.7,0,.2,1)}38%{transform:translateX(0);animation-timing-function:cubic-bezier(.7,0,.2,1)}60%,100%{transform:translateX(115%)}}
@keyframes fantasma{0%,37.9%{opacity:1}38%,90%{opacity:0}97%,100%{opacity:1}}
@keyframes promessa{0%,37.9%{opacity:0}38%,90%{opacity:1}97%,100%{opacity:0}}
.lead{margin:0;color:#91919d;max-width:46ch}
.btns{margin-top:22px;display:flex;gap:10px;flex-wrap:wrap}
.luz{background:#bd9952;color:#171119;border-radius:999px;padding:11px 22px;font-weight:600;font-size:14px}
.nev{background:rgba(244,245,249,.08);color:#e5e7ef;border-radius:999px;padding:11px 22px;font-size:14px}
.selo{position:absolute;right:16px;bottom:12px;font-size:12px;color:#91919d}
.reflexo{animation:rasante 6s infinite}
@keyframes rasante{0%,45%{transform:translateX(0);animation-timing-function:cubic-bezier(.16,1,.3,1)}75%,100%{transform:translateX(380px)}}
@media (max-width:640px){.copy{max-width:100%}.hero::after{background:linear-gradient(0deg,#0e0910 52%,rgba(14,9,16,.5) 72%,transparent)}}
@media (prefers-reduced-motion:reduce){.titulo>.fantasma,.titulo>.pincel{display:none}.titulo>h1{animation:none;opacity:1}.cena *{animation:none!important}}
</style></head><body>
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><filter id="cerdas" x="-20%" y="-30%" width="140%" height="160%"><feTurbulence type="fractalNoise" baseFrequency="0.02 0.3" numOctaves="3" seed="4"/><feDisplacementMap in="SourceGraphic" scale="34" xChannelSelector="R" yChannelSelector="G"/></filter></svg>
<header class="hero">
<svg class="cena" viewBox="0 0 1200 600" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
<defs>
<radialGradient id="foco" cx="76%" cy="44%" r="46%"><stop offset="0" stop-color="#312b34"/><stop offset="1" stop-color="#0e0910"/></radialGradient>
<linearGradient id="marmore" x1="0" y1="0" x2="1" y2=".25"><stop offset="0" stop-color="#e5e7ef"/><stop offset=".16" stop-color="#afb0bd"/><stop offset=".42" stop-color="#4f4b55"/><stop offset=".8" stop-color="#211a22"/></linearGradient>
<linearGradient id="brilho" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f4f5f9" stop-opacity="0"/><stop offset=".5" stop-color="#f4f5f9" stop-opacity=".55"/><stop offset="1" stop-color="#f4f5f9" stop-opacity="0"/></linearGradient>
<g id="forma"><path d="M770 560 Q780 478 862 458 L998 458 Q1080 478 1090 560Z"/><path d="M904 462 L908 398 L952 398 L956 462Z"/><ellipse cx="930" cy="340" rx="50" ry="64"/><circle cx="882" cy="300" r="16"/><circle cx="902" cy="282" r="17"/><circle cx="930" cy="274" r="18"/><circle cx="958" cy="282" r="17"/><circle cx="978" cy="300" r="16"/><circle cx="986" cy="326" r="12"/><circle cx="874" cy="326" r="12"/></g>
<clipPath id="silhueta"><use href="#forma"/></clipPath>
</defs>
<rect width="1200" height="600" fill="url(#foco)"/>
<path d="M840 600 L850 562 L1010 562 L1020 600Z" fill="#171119"/><rect x="860" y="548" width="140" height="18" rx="4" fill="#211a22"/>
<use href="#forma" fill="url(#marmore)"/>
<g clip-path="url(#silhueta)"><rect class="reflexo" x="700" y="250" width="70" height="330" fill="url(#brilho)"/></g>
<g stroke="#bd9952" stroke-width="1.4" fill="none" opacity=".6"><path d="M985 470 Q1000 492 994 520"/><path d="M880 298 q10 14 2 26"/><path d="M1030 505 l18 22"/></g>
<g fill="rgba(190,120,29,.6)" stroke="#bd9952" stroke-width="2.5"><circle cx="910" cy="345" r="17"/><circle cx="952" cy="345" r="17"/></g>
<path d="M927 343 Q931 338 935 343" stroke="#bd9952" stroke-width="2.5" fill="none"/>
<g fill="#bd9952"><ellipse cx="840" cy="496" rx="12" ry="4.5" transform="rotate(-25 840 496)"/><ellipse cx="858" cy="489" rx="12" ry="4.5" transform="rotate(-15 858 489)"/><ellipse cx="876" cy="483" rx="12" ry="4.5" transform="rotate(-20 876 483)"/><ellipse cx="894" cy="477" rx="12" ry="4.5" transform="rotate(-10 894 477)"/><ellipse cx="912" cy="472" rx="12" ry="4.5" transform="rotate(-15 912 472)"/><ellipse cx="1020" cy="496" rx="12" ry="4.5" transform="rotate(25 1020 496)"/><ellipse cx="1002" cy="489" rx="12" ry="4.5" transform="rotate(15 1002 489)"/><ellipse cx="984" cy="483" rx="12" ry="4.5" transform="rotate(20 984 483)"/><ellipse cx="966" cy="477" rx="12" ry="4.5" transform="rotate(10 966 477)"/><ellipse cx="948" cy="472" rx="12" ry="4.5" transform="rotate(15 948 472)"/></g>
</svg>
<nav><b>TW</b><div><span>Pitch</span><span>Ofício</span><span>Contato</span></div></nav>
<div class="copy">
<div class="kicker">Demo Day · [aceleradora]</div>
<div class="titulo"><p class="fantasma" aria-hidden="true">“Estou sem dinheiro.”</p><h1>Dinheiro no bolso <em>da sua empresa.</em></h1><span class="pincel" aria-hidden="true"></span></div>
<p class="lead">A TW tira os dados e sistemas da sua empresa do servidor cobrado por uso e os distribui numa rede descentralizada, protegida por blockchain.</p>
<div class="btns"><span class="luz">Abrir o pitch</span><span class="nev">Ver como foi feito</span></div>
</div>
<span class="selo">C · O Busto · esboço de composição</span>
</header>
</body></html>
```

## Comparação


|                                | A · O Andarilho                                                                 | B · A Queda                                                                                  | C · O Busto                                                                             |
| ------------------------------ | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Casa com a frase apagada?**  | Médio: a frase é queda e a imagem é cume                                        | **Forte**: imagem e frase dizem a mesma coisa                                                | Médio                                                                                   |
| **Lugar natural na ascensão**  | O fim (é o Cume)                                                                | **O começo** (é o Abismo)                                                                    | O meio (é o Mármore, cartão 3)                                                          |
| **Orçamento de branco (≤ 1%)** | A névoa precisa ficar baixa (`frio-400`)                                        | Cabe: só a camisa é clara                                                                    | Exige luz baixa; mármore bem iluminado estoura o orçamento                              |
| **Referência e direitos**      | Friedrich é domínio público, mas a pintura será nova: o fundador como andarilho | A obra de referência tem dono: encomendar uma pintura nova no espírito dela, nunca uma cópia | O busto de referência é de banco de imagens: render 3D ou escultura fotografada própria |
| **Risco**                      | Clichê do "visionário no topo"                                                  | A figura caindo pode ler como fracasso se a subida não vier logo depois                      | Óculos dourados viram meme e podem ler como "luxo cripto"                               |


## Recomendação: B no hero, e as outras duas ganham lugar na página

- **B · A Queda abre o hero.** É a única em que imagem e frase dizem a mesma coisa. A pincelada apaga "estou sem dinheiro" enquanto a figura cai. A promessa que surge ("Dinheiro no bolso da sua empresa") é o primeiro passo da subida que a página inteira faz.
- **A · O Andarilho fecha no Cume.** A página fica em anel: começa com alguém caindo e termina com alguém de pé no topo, olhando adiante.
- **C · O Busto vira a marca do cartão 3 (Mármore).** É o cartão em que a TW aparece em ouro, e por isso é o lugar natural do ouro e do mármore.

São três imagens em três altitudes. Nenhuma composição é desperdiçada. **A escolha final é do Andrey.**

## Brief para o pintor (para a composição escolhida)


| Item           | Pedido                                                                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Formato**    | 16:9 para desktop, mais um recorte 4:5 para mobile, com a figura dentro dos dois recortes                                                         |
| **Zona livre** | Metade esquerda em `frio-950` liso (`#0e0910`), sem textura forte. É onde o título e a pincelada vivem                                            |
| **Paleta**     | Eixo frio do Sfumato (`frio-950` → `frio-300`), `teal-abismo` na luz de cima; quente só em `linho` (camisa) e `ouro-600` (brilho no rosto)        |
| **Luz**        | Vem de cima (a superfície), fria; o único quente é o reflexo no rosto                                                                             |
| **Branco**     | No máximo 1% da área, porque a camisa é a figura e não o fundo                                                                                    |
| **Textura**    | Pincelada visível e grão de tela, coerentes com o reveal pincelado                                                                                |
| **Entrega**    | **Em camadas separadas** (fundo, raios de luz, figura, partículas), para que a correnteza anime cada camada em velocidade própria no Webflow (F4) |


