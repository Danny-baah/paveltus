import re

with open('scripts/galerie.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find all occurrences of "Vorher und Nachher" and print 1000 characters before and after
matches = [m.start() for m in re.finditer(r'Vorher und Nachher', html, re.I)]
print(f'Matches count: {len(matches)}')

for i, pos in enumerate(matches):
    start = max(0, pos - 1500)
    end = min(len(html), pos + 1500)
    snippet = html[start:end]
    print(f'\n================== MATCH {i+1} ==================')
    # find images in snippet
    imgs = re.findall(r'src=["\']([^"\']+\.(?:jpg|png|webp|jpeg)[^"\']*)["\']', snippet, re.I)
    print('Images:', imgs)
    # text
    clean_text = re.sub(r'<[^>]+>', ' ', snippet)
    clean_text = re.sub(r'\s+', ' ', clean_text).strip()
    print('Text:', clean_text[:400])

