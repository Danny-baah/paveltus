const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(process.env.TEMP, 'chrome_crop_whybg_' + Date.now());

const imgPath = 'C:/Users/DELL/.gemini/antigravity/brain/532f9ae9-a49f-4205-9bd1-a35b3aadc8a6/.user_uploaded/media_1794541063138_a75a41c3.jpg';
const imgBase64 = fs.readFileSync(imgPath).toString('base64');
const dataUri = `data:image/jpeg;base64,${imgBase64}`;

async function run() {
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9241',
    `--user-data-dir=${userDataDir}`,
    'about:blank'
  ]);

  let pageTab = null;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 300));
    try {
      const res = await fetch('http://127.0.0.1:9241/json');
      const tabs = await res.json();
      pageTab = tabs.find(t => t.type === 'page');
      if (pageTab) break;
    } catch (e) {}
  }

  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
  let id = 1;
  const send = (method, params = {}) => new Promise((res, rej) => {
    const curId = id++;
    const handler = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id === curId) {
        ws.removeEventListener('message', handler);
        if (msg.error) rej(msg.error);
        else res(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  await new Promise(r => ws.addEventListener('open', r));
  await send('Page.enable');
  await send('Runtime.enable');

  const html = `<!DOCTYPE html><html><body><canvas id="c"></canvas></body></html>`;
  await send('Page.navigate', { url: 'data:text/html,' + encodeURIComponent(html) });
  await new Promise(r => setTimeout(r, 400));

  const result = await send('Runtime.evaluate', {
    expression: `(async () => {
      const img = new Image();
      img.src = "${dataUri}";
      await new Promise(r => { if (img.complete) r(); else img.onload = r; });
      const canvas = document.getElementById('c');
      const ctx = canvas.getContext('2d');

      // Crop the left background polygon from 0 to 450, 0 to 576
      canvas.width = 460 * 2;
      canvas.height = 576 * 2;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, 460, 576, 0, 0, canvas.width, canvas.height);

      // Now create a version where we keep the right side clean photo and blend dark navy on the left
      // This gives us the exact authentic photo of the room and ladder!
      return canvas.toDataURL('image/jpeg', 0.95);
    })()`,
    awaitPromise: true,
    returnByValue: true
  });

  const base64 = result.result.value.replace(/^data:image\/jpeg;base64,/, '');
  fs.writeFileSync('public/why_left_bg_exact.jpg', Buffer.from(base64, 'base64'));
  console.log('Saved why_left_bg_exact.jpg');

  chrome.kill();
}
run();

