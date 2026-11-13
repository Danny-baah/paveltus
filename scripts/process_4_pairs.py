import cv2
import numpy as np

# Standard slider dimensions: 800 x 500 (16:10 aspect ratio)
W, H = 800, 500

def prepare_slider_pair(before_path, after_path, out_before, out_after):
    b = cv2.imread(before_path)
    a = cv2.imread(after_path)
    
    # Resize preserving center crop
    def center_crop_resize(img, target_w, target_h):
        ih, iw = img.shape[:2]
        scale = max(target_w / iw, target_h / ih)
        nw, nh = int(iw * scale), int(ih * scale)
        resized = cv2.resize(img, (nw, nh), interpolation=cv2.INTER_LANCZOS4)
        # crop center
        x = (nw - target_w) // 2
        y = (nh - target_h) // 2
        return resized[y:y+target_h, x:x+target_w]
        
    b_res = center_crop_resize(b, W, H)
    a_res = center_crop_resize(a, W, H)
    
    cv2.imwrite(out_before, b_res)
    cv2.imwrite(out_after, a_res)
    print(f'Processed {out_before} and {out_after}')

# Pair 1: Wanddurchbruch & Großzügiger Wohnraum (WA0020 & WA0011)
prepare_slider_pair(
    'public/orig_ba/IMG-20250730-WA0020.jpg',
    'public/orig_ba/IMG-20250730-WA0011.jpg',
    'public/ba_site_p1_before.jpg',
    'public/ba_site_p1_after.jpg'
)

# Pair 2: Badsanierung & Sanitärinstallation (WA0015 & WA0013)
prepare_slider_pair(
    'public/orig_ba/IMG-20250730-WA0015.jpg',
    'public/orig_ba/IMG-20250730-WA0013.jpg',
    'public/ba_site_p2_before.jpg',
    'public/ba_site_p2_after.jpg'
)

# Pair 3: Wandgestaltung & Beleuchtungskonzept (WA0017 & WA0024)
prepare_slider_pair(
    'public/orig_ba/IMG-20250730-WA0017.jpg',
    'public/orig_ba/IMG-20250730-WA0024.jpg',
    'public/ba_site_p3_before.jpg',
    'public/ba_site_p3_after.jpg'
)

# Pair 4: Komplettumbau & Oberflächenstruktur (WA0016 & WA0038)
prepare_slider_pair(
    'public/orig_ba/IMG-20250730-WA0016.jpg',
    'public/orig_ba/IMG-20250730-WA0038.jpg',
    'public/ba_site_p4_before.jpg',
    'public/ba_site_p4_after.jpg'
)

print('All 4 pairs from paveltus.de/galerie/ ready!')

