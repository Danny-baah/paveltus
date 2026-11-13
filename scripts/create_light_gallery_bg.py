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

# 3. Clean the text on the left (headline, eyebrow, description)
# Instead of a heavy solid navy block, let's inpaint the text cleanly
# so the natural lighting and room wall show through!
mask_txt = np.zeros(img.shape[:2], dtype=np.uint8)
# Logo area: x: 45..200, y: 30..80
cv2.rectangle(mask_txt, (45, 30), (210, 80), 255, -1)
# Eyebrow area: x: 45..220, y: 135..160
cv2.rectangle(mask_txt, (45, 135), (220, 160), 255, -1)
# Headline area: x: 45..470, y: 170..300
cv2.rectangle(mask_txt, (45, 170), (470, 300), 255, -1)
# Description area: x: 45..420, y: 310..370
cv2.rectangle(mask_txt, (45, 310), (420, 370), 255, -1)

# Inpaint text regions
clean = cv2.inpaint(clean, mask_txt, 15, cv2.INPAINT_TELEA)

# Now, smooth the left side (x: 0..420) with a light, elegant gradient that doesn't overwhelm the room!
# We blend with navy_bgr [97, 24, 2] very gently:
navy_bgr = np.array([97, 24, 2], dtype=np.float32)
for y in range(clean.shape[0]):
    for x in range(450):
        if x <= 180:
            alpha = 0.70
        else:
            t = (450 - x) / 270.0
            alpha = 0.70 * t * t
        orig = clean[y, x].astype(np.float32)
        clean[y, x] = np.clip((1 - alpha) * orig + alpha * navy_bgr, 0, 255).astype(np.uint8)

cv2.imwrite('public/gallery_hero_bg.jpg', clean)
print('Generated lighter, cleaner public/gallery_hero_bg.jpg')

