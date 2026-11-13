const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(process.env.TEMP, 'chrome_services_' + Date.now());

async function run() {
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9236',
    `--user-data-dir=${userDataDir}`,
    'http://127.0.0.1:5173/'
  ]);

  let pageTab = null;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 300));
    try {
      const res = await fetch('http://127.0.0.1:9236/json');
      const tabs = await res.json();
      pageTab = tabs.find(t => t.url.includes('5173'));
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

  // Desktop View 1440x900 scrolled to #leistungen
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await new Promise(r => setTimeout(r, 1200));

  await send('Runtime.evaluate', {
    expression: 'document.getElementById("leistungen").scrollIntoView({ behavior: "instant" })'
  });
  await new Promise(r => setTimeout(r, 800));

  const desktopShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('C:/Users/DELL/.gemini/antigravity/brain/532f9ae9-a49f-4205-9bd1-a35b3aadc8a6/services_desktop_new.png', Buffer.from(desktopShot.data, 'base64'));

  // Mobile View 390x844 scrolled to #leistungen
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await new Promise(r => setTimeout(r, 800));

  await send('Runtime.evaluate', {
    expression: 'document.getElementById("leistungen").scrollIntoView({ behavior: "instant" })'
  });
  await new Promise(r => setTimeout(r, 800));

  const mobileShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('C:/Users/DELL/.gemini/antigravity/brain/532f9ae9-a49f-4205-9bd1-a35b3aadc8a6/services_mobile_new.png', Buffer.from(mobileShot.data, 'base64'));

  chrome.kill();
  console.log('Services screenshots saved successfully');
}
run();

