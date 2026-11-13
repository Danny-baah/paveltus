const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(process.env.TEMP, 'chrome_test_prof_' + Date.now());

async function run() {
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--autoplay-policy=no-user-gesture-required',
    `--user-data-dir=${userDataDir}`,
    'http://127.0.0.1:5173/'
  ]);

  chrome.on('error', (err) => console.error('Chrome spawn error:', err));

  // Wait for port 9222 to be ready
  let connected = false;
  let pageTab = null;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 400));
    try {
      const res = await fetch('http://127.0.0.1:9222/json');
      const tabs = await res.json();
      pageTab = tabs.find(t => t.url.includes('5173'));
      if (pageTab) {
        connected = true;
        break;
      }
    } catch (e) {
      // retry
    }
  }

  if (!connected || !pageTab) {
    console.error('Failed to connect to Chrome on port 9222');
    chrome.kill();
    return;
  }

  console.log('Connected to tab:', pageTab.title, pageTab.webSocketDebuggerUrl);

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
  console.log('WebSocket connected');

  // Enable Page, Runtime, DOM, Log, Console
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Log.enable');

  const consoleLogs = [];
  ws.addEventListener('message', (e) => {
    const msg = JSON.parse(e.data);
    if (msg.method === 'Log.entryAdded') {
      consoleLogs.push(msg.params.entry);
    }
  });

  // Set desktop viewport 1440x900
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });

  // Wait 2 seconds for video playback and animations
  await new Promise(r => setTimeout(r, 2000));

  // Check video state
  const evalRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const v = document.querySelector('video');
      return {
        videoFound: !!v,
        readyState: v ? v.readyState : 0,
        paused: v ? v.paused : true,
        currentTime: v ? v.currentTime : 0,
        duration: v ? v.duration : 0,
        videoWidth: v ? v.videoWidth : 0,
        videoHeight: v ? v.videoHeight : 0,
      };
    })()`,
    returnByValue: true
  });
  console.log('Video state:', evalRes.result.value);

  // Capture desktop screenshot
  const screenshotDesktop = await send('Page.captureScreenshot', { format: 'png' });
  const outDesktop = 'C:/Users/DELL/.gemini/antigravity/brain/532f9ae9-a49f-4205-9bd1-a35b3aadc8a6/cdp_desktop.png';
  fs.writeFileSync(outDesktop, Buffer.from(screenshotDesktop.data, 'base64'));
  console.log('Saved:', outDesktop);

  // Set tablet viewport 768x1024
  await send('Emulation.setDeviceMetricsOverride', {
    width: 768,
    height: 1024,
    deviceScaleFactor: 2,
    mobile: false
  });
  await new Promise(r => setTimeout(r, 600));
  const screenshotTablet = await send('Page.captureScreenshot', { format: 'png' });
  const outTablet = 'C:/Users/DELL/.gemini/antigravity/brain/532f9ae9-a49f-4205-9bd1-a35b3aadc8a6/cdp_tablet.png';
  fs.writeFileSync(outTablet, Buffer.from(screenshotTablet.data, 'base64'));
  console.log('Saved:', outTablet);

  // Set mobile viewport 390x844
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await new Promise(r => setTimeout(r, 800));
  const screenshotMobile = await send('Page.captureScreenshot', { format: 'png' });
  const outMobile = 'C:/Users/DELL/.gemini/antigravity/brain/532f9ae9-a49f-4205-9bd1-a35b3aadc8a6/cdp_mobile.png';
  fs.writeFileSync(outMobile, Buffer.from(screenshotMobile.data, 'base64'));
  console.log('Saved:', outMobile);

  // Open mobile menu
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('button[aria-label*="Menü"]');
      if (btn) btn.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 500));
  const screenshotMobileMenu = await send('Page.captureScreenshot', { format: 'png' });
  const outMobileMenu = 'C:/Users/DELL/.gemini/antigravity/brain/532f9ae9-a49f-4205-9bd1-a35b3aadc8a6/cdp_mobile_menu.png';
  fs.writeFileSync(outMobileMenu, Buffer.from(screenshotMobileMenu.data, 'base64'));
  console.log('Saved:', outMobileMenu);

  console.log('Console logs count:', consoleLogs.length);
  consoleLogs.forEach((l) => console.log('Log entry:', l.level, l.text));

  ws.close();
  chrome.kill();
  console.log('All tests completed successfully!');
}

run().catch(console.error);
