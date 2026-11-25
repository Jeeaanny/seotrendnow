"""Render a 1080x1080 SEOTrendNow Google Business Profile post graphic.

Usage (run from the repo root after `npm ci`):
  python3 tools/gbp-post.py --slug gbp-2026-11-25-strategy-call \
    --eyebrow "Free 30-minute call" \
    --headline "Want more calls<br>from Google?" \
    --body "Book a free SEO strategy call..." \
    --cta "Book a Free Strategy Call" \
    [--stat "+75%" --stat-label "more organic calls in 9 months"]

Writes public/gbp/<slug>.jpg, served at https://seotrendnow.online/gbp/<slug>.jpg
Needs: playwright (pip), Pillow, a Chrome/Chromium binary.
"""
import argparse, html, os, shutil
from pathlib import Path
from playwright.sync_api import sync_playwright
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
F = ROOT / 'node_modules' / '@fontsource'
CSS = f"""
@font-face{{font-family:Archivo;font-weight:800;src:url(file://{F}/archivo/files/archivo-latin-800-normal.woff2)}}
@font-face{{font-family:Inter;font-weight:400;src:url(file://{F}/inter/files/inter-latin-400-normal.woff2)}}
@font-face{{font-family:Inter;font-weight:600;src:url(file://{F}/inter/files/inter-latin-600-normal.woff2)}}
@font-face{{font-family:Inter;font-weight:700;src:url(file://{F}/inter/files/inter-latin-700-normal.woff2)}}
@font-face{{font-family:Kalam;font-weight:700;src:url(file://{F}/kalam/files/kalam-latin-700-normal.woff2)}}
*{{box-sizing:border-box}} body{{margin:0;font-family:Inter,sans-serif;-webkit-font-smoothing:antialiased}}
.stage{{position:relative;overflow:hidden;display:flex;width:1080px;height:1080px;background:#0B2A6F}}
.h{{font-family:Archivo,sans-serif;font-weight:800;letter-spacing:-.02em}}
.chip{{display:inline-flex;align-items:center;border-radius:100px;font-weight:700}}
"""
ARROW = '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="15 7 21 7 21 13"/></svg>'
LOGO = ('<div style="display:flex;align-items:center;gap:15px"><span style="width:52px;height:52px;border-radius:14px;background:#3354FF;'
        f'display:inline-flex;align-items:center;justify-content:center">{ARROW}</span><span class="h" style="font-size:30px;color:#fff">'
        'SEOTrend<span style="color:#FFCA00">Now</span></span></div>')
DOTS = 'background-image:radial-gradient(rgba(255,255,255,.09) 1.6px,transparent 1.8px);background-size:22px 22px'


def build(a):
    e = html.escape
    head = a.headline  # may contain <br>
    hsize = 84 if len(head.replace('<br>', '')) <= 34 else 70
    stat = ''
    if a.stat:
        stat = (f'<div style="display:flex;align-items:baseline;gap:20px"><span class="h" style="font-size:120px;color:#FFCA00;line-height:1">{e(a.stat)}</span>'
                f'<span style="color:#fff;font-size:28px;font-weight:600;max-width:420px;line-height:1.3">{e(a.stat_label or "")}</span></div>')
    return f'''
<div style="position:absolute;inset:0;{DOTS}"></div>
<div style="position:absolute;right:-330px;bottom:-330px;width:640px;height:640px;border-radius:50%;border:2px solid rgba(255,255,255,.08)"></div>
<div style="position:absolute;right:-300px;bottom:-300px;width:580px;height:580px;border-radius:50%;border:9px solid transparent;border-top-color:#FFCA00;border-left-color:#FFCA00;transform:rotate(10deg)"></div>
<div style="position:relative;display:flex;flex-direction:column;justify-content:space-between;width:100%;padding:84px 80px">
 {LOGO}
 <div style="display:flex;flex-direction:column;gap:26px">
  <span style="font-family:Kalam,cursive;font-weight:700;font-size:40px;color:#FFCA00">{e(a.eyebrow)}</span>
  <div class="h" style="color:#fff;font-size:{hsize}px;line-height:1.04">{head}</div>
  {stat}
  <div style="color:#CBD1D9;font-size:30px;line-height:1.45;max-width:800px">{e(a.body)}</div>
 </div>
 <div style="display:flex;align-items:center;gap:22px">
  <span class="chip" style="background:#FFCA00;color:#0B2A6F;font-size:28px;padding:18px 34px">{e(a.cta)}</span>
  <span style="color:#fff;font-size:26px;font-weight:600">seotrendnow.online</span>
 </div>
</div>'''


def chrome():
    for c in ['/usr/bin/google-chrome', shutil.which('chromium') or '', shutil.which('chromium-browser') or '']:
        if c and os.path.exists(c):
            return c
    return None


def main():
    p = argparse.ArgumentParser()
    for k in ['slug', 'eyebrow', 'headline', 'body', 'cta']:
        p.add_argument('--' + k, required=True)
    p.add_argument('--stat'); p.add_argument('--stat-label')
    a = p.parse_args()
    out = ROOT / 'public' / 'gbp'; out.mkdir(parents=True, exist_ok=True)
    tmp = Path('/tmp/gbp-post.html')
    tmp.write_text(f'<html><head><style>{CSS}</style></head><body><div class="stage">{build(a)}</div></body></html>')
    with sync_playwright() as pw:
        exe = chrome()
        b = pw.chromium.launch(executable_path=exe, args=['--allow-file-access-from-files']) if exe else pw.chromium.launch(args=['--allow-file-access-from-files'])
        pg = b.new_page(viewport={'width': 1080, 'height': 1080})
        pg.goto(tmp.as_uri()); pg.evaluate('document.fonts.ready'); pg.wait_for_timeout(300)
        png = Path('/tmp/gbp-post.png'); pg.screenshot(path=str(png))
        b.close()
    dest = out / f'{a.slug}.jpg'
    Image.open(png).convert('RGB').save(dest, quality=90)
    print(dest)


if __name__ == '__main__':
    main()
