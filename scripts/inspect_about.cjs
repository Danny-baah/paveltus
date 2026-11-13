const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(process.env.TEMP, 'chrome_about_test_' + Date.now());

async function run() {
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--autoplay-policy=no-user-gesture-required',
    `--user-data-dir=${userDataDir}`,
    'http://127.0.0.1:5173/'
  ]);

  let pageTab = null;
  for (let i = 0; i < 25; i++) {
    await new Promise(r => setTimeout(r, 400));
    try {
      const res = await fetch('http://127.0.0.1:9222/json');
      const tabs = await res.json();
      pageTab = tabs.find(t => t.url.includes('5173'));
      if (pageTab) break;
    } catch (e) { }
  }

  if (!pageTab) {
    console.error('Failed to connect to page tab');
    chrome.kill();
    process.exit(1);
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

  // Set desktop viewport 1440x900
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await new Promise(r => setTimeout(r, 1200));

  // Scroll directly to the About section
  await send('Runtime.evaluate', {
    expression: 'document.getElementById("ueber-uns").scrollIntoView({ behavior: "instant" })'
  });
  await new Promise(r => setTimeout(r, 800));

  const screenshotAboutDesktop = await send('Page.captureScreenshot', { format: 'png' });
  const outAboutDesktop = 'C:/Users/DELL/.gemini/antigravity/brain/532f9ae9-a49f-4205-9bd1-a35b3aadc8a6/about_desktop.png';
  fs.writeFileSync(outAboutDesktop, Buffer.from(screenshotAboutDesktop.data, 'base64'));
  console.log('Saved:', outAboutDesktop);

  // Set mobile viewport 390x844
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await new Promise(r => setTimeout(r, 600));

  // Scroll to about section on mobile
  await send('Runtime.evaluate', {
    expression: 'document.getElementById("ueber-uns").scrollIntoView({ behavior: "instant" })'
  });
  await new Promise(r => setTimeout(r, 800));

  const screenshotAboutMobile = await send('Page.captureScreenshot', { format: 'png' });
  const outAboutMobile = 'C:/Users/DELL/.gemini/antigravity/brain/532f9ae9-a49f-4205-9bd1-a35b3aadc8a6/about_mobile.png';
  fs.writeFileSync(outAboutMobile, Buffer.from(screenshotAboutMobile.data, 'base64'));
  console.log('Saved:', outAboutMobile);

  // Scroll down to text content on mobile
  await send('Runtime.evaluate', {
    expression: 'window.scrollTo(0, document.getElementById("ueber-uns").offsetTop + 420)'
  });
  await new Promise(r => setTimeout(r, 600));
  const screenshotAboutMobileText = await send('Page.captureScreenshot', { format: 'png' });
  const outAboutMobileText = 'C:/Users/DELL/.gemini/antigravity/brain/532f9ae9-a49f-4205-9bd1-a35b3aadc8a6/about_mobile_text.png';
  fs.writeFileSync(outAboutMobileText, Buffer.from(screenshotAboutMobileText.data, 'base64'));
  console.log('Saved:', outAboutMobileText);

  ws.close();
  chrome.kill();
  console.log('Screenshots captured successfully!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
