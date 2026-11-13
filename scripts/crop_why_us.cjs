const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(process.env.TEMP, 'chrome_crop_why_' + Date.now());

const imgPath = 'C:/Users/DELL/.gemini/antigravity/brain/532f9ae9-a49f-4205-9bd1-a35b3aadc8a6/.user_uploaded/media_1794541063138_a75a41c3.jpg';
const imgBase64 = fs.readFileSync(imgPath).toString('base64');
const dataUri = `data:image/jpeg;base64,${imgBase64}`;

async function run() {
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9240',
    `--user-data-dir=${userDataDir}`,
    'about:blank'
  ]);

  let pageTab = null;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 300));
    try {
      const res = await fetch('http://127.0.0.1:9240/json');
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

      const crops = [
        { name: 'why_left_bg', x: 0, y: 0, w: 450, h: 576 },
        { name: 'why_card1', x: 420, y: 110, w: 290, h: 105 },
        { name: 'why_card2', x: 720, y: 110, w: 290, h: 105 },
        { name: 'why_card3', x: 420, y: 230, w: 290, h: 105 },
        { name: 'why_card4', x: 720, y: 230, w: 290, h: 105 },
        { name: 'why_card5', x: 420, y: 350, w: 290, h: 105 },
        { name: 'why_card6', x: 720, y: 350, w: 290, h: 105 }
      ];

      const out = {};
      for (const crop of crops) {
        canvas.width = crop.w * 2;
        canvas.height = crop.h * 2;
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, crop.x, crop.y, crop.w, crop.h, 0, 0, canvas.width, canvas.height);
        out[crop.name] = canvas.toDataURL('image/png');
      }
      return out;
    })()`,
    awaitPromise: true,
    returnByValue: true
  });

  const crops = result.result.value;
  for (const [name, dataUrl] of Object.entries(crops)) {
    const base64 = dataUrl.replace(/^data:image\/png;base64,/, '');
    fs.writeFileSync(`public/${name}.png`, Buffer.from(base64, 'base64'));
  }
  console.log('Saved why us crops');

  chrome.kill();
}
run();

