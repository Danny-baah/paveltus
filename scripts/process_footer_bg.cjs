const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(process.env.TEMP, 'chrome_footer_crop_' + Date.now());

const imgPath = 'C:/Users/DELL/.gemini/antigravity/brain/532f9ae9-a49f-4205-9bd1-a35b3aadc8a6/.user_uploaded/media_1794544511039_988c5475.jpg';
const imgBase64 = fs.readFileSync(imgPath).toString('base64');

async function run() {
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9258',
    `--user-data-dir=${userDataDir}`,
    'about:blank'
  ]);

  try {
    let pageTab = null;
    for (let i = 0; i < 30; i++) {
      await new Promise(r => setTimeout(r, 200));
      try {
        const res = await fetch('http://127.0.0.1:9258/json');
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
    await new Promise(r => setTimeout(r, 300));

    const result = await send('Runtime.evaluate', {
      expression: `(async () => {
        const img = new Image();
        img.src = 'data:image/jpeg;base64,${imgBase64}';
        await new Promise(r => img.onload = r);

        const canvas = document.getElementById('c');
        canvas.width = 450;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');

        // Draw right side of image (x: 574 to 1024)
        ctx.drawImage(img, 574, 0, 450, img.height, 0, 0, 450, img.height);

        return canvas.toDataURL('image/jpeg', 0.95);
      })()`,
      awaitPromise: true,
      returnByValue: true
    });

    const base64Data = result.result.value.replace(/^data:image\/jpeg;base64,/, '');
    fs.writeFileSync('C:/Users/DELL/OneDrive/Desktop/paveltus/public/footer_right_inspect.jpg', Buffer.from(base64Data, 'base64'));
    console.log('Saved public/footer_right_inspect.jpg');

    ws.close();
  } finally {
    chrome.kill();
    setTimeout(() => {
      try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (e) {}
    }, 1000);
  }
}

run();
