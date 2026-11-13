import re
import urllib.request
import os

with open('scripts/galerie.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's inspect the sections around the 4 before/after pairs
# Look at the containers
containers = re.findall(r'<div[^>]*class="[^"]*e-con e-parent[^"]*"[^>]*>.*?</div>\s*</div>\s*</div>', html, re.DOTALL)
print('Parent containers:', len(containers))

# Search for all IMG-20250730-WA00XX occurrences in html
wa_imgs = re.findall(r'(https://paveltus\.de/wp-content/uploads/[^"\']+\.(?:jpg|png|webp))', html)
print('Unique WA images:', len(set(wa_imgs)))
for u in sorted(set(wa_imgs)):
    print(u)

