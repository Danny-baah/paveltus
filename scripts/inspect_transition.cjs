const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(process.env.TEMP, 'chrome_transition_' + Date.now());

async function run() {
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9224',
    '--autoplay-policy=no-user-gesture-required',
    `--user-data-dir=${userDataDir}`,
    'http://127.0.0.1:5173/'
  ]);

  let pageTab = null;
  for (let i = 0; i < 25; i++) {
    await new Promise(r => setTimeout(r, 400));
    try {
      const res = await fetch('http://127.0.0.1:9224/json');
      const tabs = await res.json();
      pageTab = tabs.find(t => t.url.includes('5173'));
      if (pageTab) break;
    } catch (e) {}
  }

  if (!pageTab) {
    chrome.kill();
    return;
  }

  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
  let id = 1;
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const curId = id++;
    const handler = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id === curId) {
        ws.removeEventListener('message', handler);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  await new Promise(r => ws.addEventListener('open', r));
  await send('Page.enable');
  await send('Runtime.enable');

  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await new Promise(r => setTimeout(r, 1500));

  // Scroll down so trust indicators and top of AboutSection are both visible
  await send('Runtime.evaluate', {
    expression: 'window.scrollTo(0, 700)'
  });
  await new Promise(r => setTimeout(r, 800));

  const shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('C:/Users/DELL/.gemini/antigravity/brain/532f9ae9-a49f-4205-9bd1-a35b3aadc8a6/transition_desktop.png', Buffer.from(shot.data, 'base64'));

  const scrollHeightRes = await send('Runtime.evaluate', {
    expression: 'document.documentElement.scrollHeight'
  });
  console.log('Document scrollHeight:', scrollHeightRes.result.value);

  // Set Emulation height to document scrollHeight
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: scrollHeightRes.result.value,
    deviceScaleFactor: 1,
    mobile: false
  });
  await new Promise(r => setTimeout(r, 600));
  const fullShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('C:/Users/DELL/.gemini/antigravity/brain/532f9ae9-a49f-4205-9bd1-a35b3aadc8a6/full_page.png', Buffer.from(fullShot.data, 'base64'));

  // Mobile full page screenshot
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await new Promise(r => setTimeout(r, 600));
  const mobileScrollRes = await send('Runtime.evaluate', {
    expression: 'document.documentElement.scrollHeight'
  });
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: mobileScrollRes.result.value,
    deviceScaleFactor: 2,
    mobile: true
  });
  await new Promise(r => setTimeout(r, 600));
  const mobileShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('C:/Users/DELL/.gemini/antigravity/brain/532f9ae9-a49f-4205-9bd1-a35b3aadc8a6/mobile_full_page.png', Buffer.from(mobileShot.data, 'base64'));

  chrome.kill();
  console.log('Screenshots saved successfully');
}
run();
