import urllib.request
import re
import os

url = 'https://paveltus.de/galerie/'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
req = urllib.request.Request(url, headers=headers)

try:
    with urllib.request.urlopen(req, timeout=15) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        print(f'Successfully fetched {len(html)} bytes.')
        with open('scripts/galerie.html', 'w', encoding='utf-8') as f:
            f.write(html)
            
        imgs = re.findall(r'src=["\']([^"\']+\.(?:jpg|png|webp|jpeg)[^"\']*)["\']', html, re.I)
        # Also find background-image urls
        bg_imgs = re.findall(r'url\(["\']?([^)"\']+\.(?:jpg|png|webp|jpeg)[^)"\']*)["\']?\)', html, re.I)
        all_imgs = list(set(imgs + bg_imgs))
        print(f'Total image urls: {len(all_imgs)}')
        for im in sorted(all_imgs):
            print(im)
            
        # Search for headings
        headings = re.findall(r'<(h[1-5])[^>]*>(.*?)</\1>', html, re.DOTALL | re.I)
        print('\n--- HEADINGS ---')
        for tag, h in headings:
            clean = re.sub(r'<[^>]+>', '', h).strip()
            if clean:
                print(f'{tag}: {clean}')
except Exception as e:
    print('Error:', e)

