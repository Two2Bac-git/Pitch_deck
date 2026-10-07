"""Gera as páginas do site (site/index.html em português e site/en/index.html em inglês)
a partir de um único modelo (pagina.html) e dos textos de cada idioma (textos.json).

Uso, na raiz do repositório:  python3 fonte-do-site/gerar.py
Depois de mudar um texto ou o layout, rode de novo e faça commit da pasta site/.
"""
import json
import pathlib
import re

AQUI = pathlib.Path(__file__).resolve().parent
SITE = AQUI.parent / 'site'

# Endereço público do site. Troque aqui se o domínio mudar (ex.: um domínio próprio).
URL_BASE = 'https://two2bac-git.github.io/Pitch_deck/'

PAGINAS = {
    'pt': {'saida': SITE / 'index.html', 'raiz': '', 'url': URL_BASE,
           'link_pt': './', 'link_en': 'en/'},
    'en': {'saida': SITE / 'en' / 'index.html', 'raiz': '../', 'url': URL_BASE + 'en/',
           'link_pt': '../', 'link_en': './'},
}


def main():
    modelo = (AQUI / 'pagina.html').read_text(encoding='utf-8')
    textos = json.loads((AQUI / 'textos.json').read_text(encoding='utf-8'))
    chaves_modelo = set(re.findall(r'{{(\w+)}}', modelo))

    for idioma, cfg in PAGINAS.items():
        valores = dict(textos[idioma])
        valores.update({
            'raiz': cfg['raiz'],
            'link_pt': cfg['link_pt'],
            'link_en': cfg['link_en'],
            'url_desta': cfg['url'],
            'url_pt': PAGINAS['pt']['url'],
            'url_en': PAGINAS['en']['url'],
            'atual_pt': ' aria-current="page"' if idioma == 'pt' else '',
            'atual_en': ' aria-current="page"' if idioma == 'en' else '',
        })
        faltando = chaves_modelo - set(valores)
        if faltando:
            raise SystemExit(f'[{idioma}] textos faltando: {sorted(faltando)}')
        html = re.sub(r'{{(\w+)}}', lambda m: valores[m.group(1)], modelo)
        cfg['saida'].parent.mkdir(parents=True, exist_ok=True)
        cfg['saida'].write_text(html, encoding='utf-8')
        print('gerado', cfg['saida'].relative_to(AQUI.parent))


if __name__ == '__main__':
    main()
