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

# 3. Clean the text area x: 280..472, y: 155..385
x1, x2 = 280, 472
y1, y2 = 155, 385

clean_col = clean[y1:y2, x2:x2+4].mean(axis=1) # shape (y2-y1, 3)
clean_top = clean[y1-5:y1, x1:x2].mean(axis=0) # shape (x2-x1, 3)
clean_bot = clean[y2:y2+5, x1:x2].mean(axis=0) # shape (x2-x1, 3)

for y in range(y1, y2):
    ty = (y - y1) / float(y2 - y1)
    row_val = (1 - ty) * clean_top + ty * clean_bot
    for x in range(x1, x2):
        tx = (x - x1) / float(x2 - x1)
        val = (1 - tx) * row_val[x - x1] + tx * clean_col[y - y1]
        clean[y, x] = val.astype(np.uint8)

# Now apply smooth navy gradient on the left side:
navy_bgr = np.array([97, 24, 2], dtype=np.float32)
for y in range(clean.shape[0]):
    for x in range(460):
        if x <= 220:
            alpha = 0.85
        else:
            t = (460 - x) / 240.0
            alpha = 0.85 * (t ** 1.8)
        orig = clean[y, x].astype(np.float32)
        clean[y, x] = np.clip((1 - alpha) * orig + alpha * navy_bgr, 0, 255).astype(np.uint8)

cv2.imwrite('public/gallery_hero_bg.jpg', clean)
print('Successfully eliminated ghost text in public/gallery_hero_bg.jpg')
