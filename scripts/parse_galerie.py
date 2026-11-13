import re

with open('scripts/galerie.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Search for any mention of vorher, nachher, compare, elementor widgets
print('Found "vorher":', len(re.findall(r'vorher', html, re.I)))
print('Found "nachher":', len(re.findall(r'nachher', html, re.I)))
print('Found "gallery":', len(re.findall(r'gallery', html, re.I)))

# Print lines or snippets containing vorher / nachher or comparison
for line in html.split('\n'):
    if any(k in line.lower() for k in ['vorher', 'nachher', 'twentytwenty', 'comparison', 'before', 'after']):
        print(line[:200])

# Also let's inspect all Elementor widgets in the page:
widgets = re.findall(r'class="elementor-widget[^"]*"', html)
print('Widgets count:', len(widgets))
for w in set(widgets):
    print(w)

