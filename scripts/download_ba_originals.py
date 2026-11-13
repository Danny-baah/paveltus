import urllib.request
import os

images = [
    'IMG-20250730-WA0011',
    'IMG-20250730-WA0013',
    'IMG-20250730-WA0015',
    'IMG-20250730-WA0016',
    'IMG-20250730-WA0017',
    'IMG-20250730-WA0020',
    'IMG-20250730-WA0024',
    'IMG-20250730-WA0038',
]

os.makedirs('public/orig_ba', exist_ok=True)

for name in images:
    url = f'https://paveltus.de/wp-content/uploads/2025/07/{name}.jpg'
    local_path = f'public/orig_ba/{name}.jpg'
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as resp, open(local_path, 'wb') as out:
            out.write(resp.read())
        print(f'Downloaded {name}.jpg, size: {os.path.getsize(local_path)} bytes')
    except Exception as e:
        print(f'Failed {name}: {e}')

