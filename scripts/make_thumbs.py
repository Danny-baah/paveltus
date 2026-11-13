from PIL import Image
import os

images = [
    'IMG-20250730-WA0017', 'IMG-20250730-WA0024',
    'IMG-20250730-WA0016', 'IMG-20250730-WA0038',
    'IMG-20250730-WA0020', 'IMG-20250730-WA0011',
    'IMG-20250730-WA0015', 'IMG-20250730-WA0013',
]

for name in images:
    im = Image.open(f'public/orig_ba/{name}.jpg')
    im.thumbnail((320, 240))
    im.save(f'public/orig_ba/thumb_{name}.jpg')
    print(f'Thumbnail saved: thumb_{name}.jpg')

