from PIL import Image
import os

images = [
    ('Pair 1', 'IMG-20250730-WA0017', 'IMG-20250730-WA0024'),
    ('Pair 2', 'IMG-20250730-WA0016', 'IMG-20250730-WA0038'),
    ('Pair 3', 'IMG-20250730-WA0020', 'IMG-20250730-WA0011'),
    ('Pair 4', 'IMG-20250730-WA0015', 'IMG-20250730-WA0013'),
]

for pair_name, f1, f2 in images:
    p1 = os.path.join('public/orig_ba', f'{f1}.jpg')
    p2 = os.path.join('public/orig_ba', f'{f2}.jpg')
    im1 = Image.open(p1)
    im2 = Image.open(p2)
    print(f'{pair_name}:')
    print(f'  {f1}: {im1.size} {im1.mode}')
    print(f'  {f2}: {im2.size} {im2.mode}')

