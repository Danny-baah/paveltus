import cv2
import numpy as np

# Load original uploaded media_1794550043981_2bfaa861.jpg
img = cv2.imread(r'C:\Users\DELL\.gemini\antigravity\brain\532f9ae9-a49f-4205-9bd1-a35b3aadc8a6\.user_uploaded\media_1794550043981_2bfaa861.jpg')
clean = img.copy()

# 1. Clean phone button
mask_btn = np.zeros(img.shape[:2], dtype=np.uint8)
cv2.rectangle(mask_btn, (835, 23), (970, 64), 255, -1)
cv2.circle(mask_btn, (840, 43), 20, 255, -1)
cv2.circle(mask_btn, (965, 43), 20, 255, -1)
mask_btn = cv2.dilate(mask_btn, np.ones((5,5), np.uint8), iterations=1)
clean = cv2.inpaint(clean, mask_btn, 12, cv2.INPAINT_TELEA)

# 2. Clean navbar text
mask_nav = np.zeros(img.shape[:2], dtype=np.uint8)
cv2.rectangle(mask_nav, (280, 35), (720, 70), 255, -1)
clean = cv2.inpaint(clean, mask_nav, 10, cv2.INPAINT_TELEA)

# 3. Clean left side:
# The letters of "Unsere Arbeit. Ihre Inspiration." extend up to x=460.
# If we apply solid navy #021861 (BGR [97, 24, 2]) up to x=300,
# and from x=300 to x=470 smoothly fade into the natural room wall:
navy_bgr = np.array([97, 24, 2], dtype=np.float32)
for y in range(clean.shape[0]):
    for x in range(480):
        if x <= 300:
            alpha = 1.0
        else:
            t = (480 - x) / 180.0
            alpha = t * t * (3 - 2 * t) # smoothstep
        orig = clean[y, x].astype(np.float32)
        clean[y, x] = np.clip((1 - alpha) * orig + alpha * navy_bgr, 0, 255).astype(np.uint8)

cv2.imwrite('public/gallery_hero_bg.jpg', clean)
print('Generated clean, flawless public/gallery_hero_bg.jpg')

