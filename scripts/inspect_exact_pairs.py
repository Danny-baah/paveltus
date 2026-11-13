import re
from PIL import Image

with open('scripts/galerie.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's inspect the 4 sections
# Look for Vorher und Nachher and the image tags around it
sections = html.split('Vorher und Nachher')
print(f'Sections split: {len(sections)}')

pairs = []
for i in range(1, len(sections)):
    # Look before the divider for the first image, and after the divider for the second image
    # Or in the snippet around this
    prev_chunk = sections[i-1][-1500:]
    next_chunk = sections[i][:1500]
    
    img_before = re.findall(r'IMG-20250730-WA\d+', prev_chunk)
    img_after = re.findall(r'IMG-20250730-WA\d+', next_chunk)
    print(f'\n--- Pair {i} ---')
    print('Before candidate in prev_chunk:', img_before)
    print('After candidate in next_chunk:', img_after)
    
    # Check labels or heading
    print('Context text:', re.sub(r'<[^>]+>', ' ', next_chunk)[:250])

