/* TW · movimento da página e baralho.
   As animações reproduzem as Interactions do Webflow (webflow/interacoes.json, I1–I8).
   O baralho segue o script do plano §7: a ordem no DOM é o estado. */
(function () {
  'use strict';

  var raiz = document.documentElement;
  var semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function pronto() { raiz.classList.add('pronto'); }

  /* ---------- Baralho (funciona com ou sem GSAP) ---------- */
  document.querySelectorAll('[data-baralho]').forEach(function (baralho) {
    var cartoes = Array.prototype.slice.call(baralho.children);
    var aviso = document.querySelector('[data-baralho-aviso]');
    var modelo = baralho.getAttribute('data-aviso') || 'Cartão {n} de {total}';
    var ocupado = false;

    function atualizar(anunciar) {
      Array.prototype.forEach.call(baralho.children, function (c, i) {
        c.tabIndex = i === 0 ? 0 : -1;
        c.setAttribute('aria-hidden', String(i !== 0));
        if (i !== 0) c.setAttribute('inert', ''); else c.removeAttribute('inert');
      });
      if (aviso && anunciar) {
        aviso.textContent = modelo.replace('{n}', cartoes.indexOf(baralho.firstElementChild) + 1).replace('{total}', cartoes.length);
      }
    }

    function focarFrente() { baralho.firstElementChild.focus({ preventScroll: true }); }

    function avancar() {
      if (ocupado) return;
      ocupado = true;
      var frente = baralho.firstElementChild;
      var terminou = false;
      function fim(e) {
        if (e && (e.target !== frente || e.propertyName !== 'opacity')) return;
        if (terminou) return;
        terminou = true;
        frente.removeEventListener('transitionend', fim);
        frente.classList.remove('sai');
        baralho.appendChild(frente); // vai para o fundo da pilha; o :nth-child reempilha os outros
        ocupado = false;
        atualizar(true);
        focarFrente();
      }
      frente.addEventListener('transitionend', fim);
      setTimeout(fim, 1200); // garantia caso a transição não dispare
      frente.classList.add('sai');
    }

    function voltar() {
      if (ocupado) return;
      baralho.insertBefore(baralho.lastElementChild, baralho.firstElementChild);
      atualizar(true);
      focarFrente();
    }

    function recomecar() {
      cartoes.forEach(function (c) { baralho.appendChild(c); });
      atualizar(true);
      focarFrente();
    }

    baralho.addEventListener('click', function (e) {
      if (e.target.closest('[data-recomecar]')) { e.preventDefault(); recomecar(); return; }
      if (e.target.closest('a, button')) return; // o contato do último cartão não pode virar "próximo"
      if (baralho.firstElementChild.contains(e.target)) avancar();
    });
    baralho.addEventListener('keydown', function (e) {
      if (e.target.closest('a, button')) return;
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') { e.preventDefault(); avancar(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); voltar(); }
    });
    atualizar(false);
  });

  /* ---------- Movimento (GSAP) ---------- */
  var gsap = window.gsap;
  if (!gsap || semMovimento) { pronto(); return; }
  gsap.registerPlugin(window.ScrollTrigger, window.SplitText);

  function quandoFontes(fn) {
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fn); else fn();
  }

  quandoFontes(function () {
    /* I1 · Frase → promessa: a pincelada cobre a frase-fantasma e descobre o H1 por palavras */
    var fantasma = document.querySelector('.frase-fantasma');
    var pincel = document.querySelector('.pincel-veu');
    var h1 = document.querySelector('.display-1.is-hero');
    if (fantasma && pincel && h1) {
      var palavrasH1 = new SplitText(h1, { type: 'words' });
      gsap.set(palavrasH1.words, { opacity: 0 });
      pronto();
      gsap.timeline()
        .set(fantasma, { opacity: 1 }, 0)
        .set(pincel, { opacity: 1, xPercent: -115 }, 0)
        .to(pincel, { xPercent: 0, duration: 0.6, ease: 'power3.inOut' }, 0.6)
        .set(fantasma, { opacity: 0 }, 1.2)
        .to(pincel, { xPercent: 115, duration: 0.6, ease: 'power3.inOut' }, 1.2)
        .set(pincel, { opacity: 0 }, 1.8)
        .to(palavrasH1.words, { opacity: 1, duration: 0.9, ease: 'expo.out', stagger: 0.06 }, 1.2);
    } else {
      pronto();
    }

    /* I2 · Títulos pincelados: palavra por palavra ao entrar na tela */
    document.querySelectorAll('.display-2').forEach(function (titulo) {
      var partes = new SplitText(titulo, { type: 'words' });
      gsap.fromTo(partes.words, { opacity: 0, y: 24 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'expo.out', stagger: 0.06,
        scrollTrigger: { trigger: titulo, start: 'top 85%', toggleActions: 'play none none none' }
      });
    });

    /* I3 · Luz rasante: o reflexo atravessa o botão ou o bloco ao passar o mouse */
    document.querySelectorAll('.botao-luz, .rocha.is-bloco').forEach(function (alvo) {
      var reflexo = alvo.querySelector('.reflexo');
      if (!reflexo) return;
      var tl = gsap.timeline({ paused: true })
        .set(reflexo, { opacity: 1 }, 0)
        .fromTo(reflexo, { xPercent: -120 }, { xPercent: 120, duration: 0.48, ease: 'expo.out' }, 0)
        .set(reflexo, { opacity: 0 }, 0.48);
      alvo.addEventListener('mouseenter', function () { tl.restart(); });
    });

    /* Ambiente: toca só com a seção visível */
    function soVisivel(animacao, gatilho) {
      animacao.pause();
      ScrollTrigger.create({ trigger: gatilho, start: 'top bottom', end: 'bottom top',
        onToggle: function (self) { if (self.isActive) animacao.play(); else animacao.pause(); } });
    }

    /* I4 · Névoa: as manchas derivam devagar */
    document.querySelectorAll('.nevoa-mancha').forEach(function (m) {
      var um = m.classList.contains('is-1');
      soVisivel(gsap.to(m, { xPercent: um ? 18 : -22, yPercent: um ? 10 : -8, duration: um ? 23 : 29,
        ease: 'sine.inOut', repeat: -1, yoyo: true }), m.parentElement);
    });

    var hero = document.querySelector('.zona.is-abismo');
    if (hero) {
      /* I5 · Correnteza: os raios oscilam */
      [['.raio.is-r1', 11], ['.raio.is-r2', 13], ['.raio.is-r3', 17]].forEach(function (r) {
        var el = hero.querySelector(r[0]);
        if (el) soVisivel(gsap.fromTo(el, { skewX: -6, x: -14 }, { skewX: 6, x: 14, duration: r[1],
          ease: 'power2.inOut', repeat: -1, yoyo: true }), hero);
      });

      /* I6 · Partículas sobem em ciclos defasados */
      var bolhas = gsap.timeline();
      [['.is-b1', 0], ['.is-b2', 2], ['.is-b3', 4.5], ['.is-b4', 6], ['.is-b5', 7.5]].forEach(function (b) {
        var el = hero.querySelector('.bolha' + b[0]);
        if (el) bolhas.fromTo(el, { y: 0 }, { y: -230, duration: 9, ease: 'none', repeat: -1 }, b[1]);
      });
      soVisivel(bolhas, hero);

      /* I7 · Parallax de A Queda */
      var queda = hero.querySelector('.pintura');
      if (queda) gsap.fromTo(queda, { yPercent: 0 }, { yPercent: 8, ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1 } });
    }

    /* I7 · Parallax de Friedrich */
    var cume = document.querySelector('.zona.is-cume');
    var friedrich = cume && cume.querySelector('.pintura');
    if (friedrich) gsap.fromTo(friedrich, { yPercent: -8 }, { yPercent: 0, ease: 'none',
      scrollTrigger: { trigger: cume, start: 'top bottom', end: 'bottom bottom', scrub: 1 } });

    /* I7 · Ascensão: as névoas acompanham a rolagem em velocidades diferentes */
    document.querySelectorAll('.nevoa-mancha').forEach(function (m) {
      var d = m.classList.contains('is-1') ? 60 : 30;
      gsap.fromTo(m, { y: d }, { y: -d, ease: 'none',
        scrollTrigger: { trigger: m, start: 'top bottom', end: 'bottom top', scrub: 1 } });
    });

    /* I8 · Blocos-rocha entram com ease-névoa */
    document.querySelectorAll('.rocha').forEach(function (bloco) {
      gsap.fromTo(bloco, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1.4, ease: 'expo.out',
        scrollTrigger: { trigger: bloco, start: 'top 85%', toggleActions: 'play none none none' } });
    });
  });
})();
