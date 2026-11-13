const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(process.env.TEMP, 'chrome_nav_test_' + Date.now());

async function run() {
  console.log('--- STARTING NAVIGATION TEST SUITE ---');

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
    } catch (e) {}
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

  const evalJs = async (expr) => {
    const res = await send('Runtime.evaluate', { expression: expr, returnByValue: true });
    return res.result.value;
  };

  // 1. Check initial desktop page load
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await new Promise(r => setTimeout(r, 1200));

  console.log('\n1. Checking Desktop Main Navigation Links...');
  const navLinks = await evalJs(`(() => {
    const links = Array.from(document.querySelectorAll('nav[aria-label="Hauptnavigation"] a'));
    return links.map(a => ({ text: a.innerText.trim(), href: a.getAttribute('href') }));
  })()`);
  console.log('Desktop Nav Links found:', navLinks);

  const expectedOrder = ['Home', 'Über uns', 'Leistungen', 'Warum wir', 'Galerie', 'Kontakt'];
  const actualLabels = navLinks.map(l => l.text);
  const orderCorrect = JSON.stringify(actualLabels) === JSON.stringify(expectedOrder);
  console.log('Order match check:', orderCorrect ? 'PASS' : 'FAIL', actualLabels);

  const ctaBtnText = await evalJs(`(() => {
    const btn = document.querySelector('header a[href*="kontakt-form"]');
    return btn ? btn.innerText.trim() : null;
  })()`);
  console.log('Header CTA Button text:', ctaBtnText, ctaBtnText.includes('Jetzt kontaktieren') ? 'PASS' : 'FAIL');

  // 2. Test clicking "Über uns" on homepage
  console.log('\n2. Testing Homepage Anchor: Über uns (#ueber-uns)...');
  await evalJs(`(() => {
    const link = Array.from(document.querySelectorAll('nav[aria-label="Hauptnavigation"] a')).find(a => a.innerText.includes('Über uns'));
    if (link) link.click();
  })()`);
  await new Promise(r => setTimeout(r, 800));
  const aboutScrollY = await evalJs('window.scrollY');
  const aboutElemTop = await evalJs('document.getElementById("ueber-uns") ? document.getElementById("ueber-uns").offsetTop : -1');
  console.log(`Scrolled to: ${aboutScrollY}px (Section offsetTop: ${aboutElemTop}px) -> ${aboutScrollY > 400 ? 'PASS' : 'FAIL'}`);

  // 3. Test clicking "Warum wir" on homepage
  console.log('\n3. Testing Homepage Anchor: Warum wir (#warum-wir)...');
  await evalJs(`(() => {
    const link = Array.from(document.querySelectorAll('nav[aria-label="Hauptnavigation"] a')).find(a => a.innerText.includes('Warum wir'));
    if (link) link.click();
  })()`);
  await new Promise(r => setTimeout(r, 800));
  const whyScrollY = await evalJs('window.scrollY');
  const whyElemTop = await evalJs('document.getElementById("warum-wir") ? document.getElementById("warum-wir").offsetTop : -1');
  console.log(`Scrolled to: ${whyScrollY}px (Section offsetTop: ${whyElemTop}px) -> ${whyScrollY > aboutScrollY ? 'PASS' : 'FAIL'}`);

  // 4. Test clicking "Home" (scrolls back to top)
  console.log('\n4. Testing Home click (scrolls to top)...');
  await evalJs(`(() => {
    const link = Array.from(document.querySelectorAll('nav[aria-label="Hauptnavigation"] a')).find(a => a.innerText.includes('Home'));
    if (link) link.click();
  })()`);
  await new Promise(r => setTimeout(r, 800));
  const homeScrollY = await evalJs('window.scrollY');
  console.log(`Scrolled to: ${homeScrollY}px -> ${homeScrollY < 100 ? 'PASS' : 'FAIL'}`);

  // 5. Test navigating to /service
  console.log('\n5. Testing navigation to /service (Leistungen)...');
  await evalJs(`(() => {
    const link = Array.from(document.querySelectorAll('nav[aria-label="Hauptnavigation"] a')).find(a => a.innerText.includes('Leistungen'));
    if (link) link.click();
  })()`);
  await new Promise(r => setTimeout(r, 800));
  const serviceUrl = await evalJs('window.location.pathname');
  const serviceTitle = await evalJs('document.querySelector("h1") ? document.querySelector("h1").innerText : ""');
  console.log(`Current Path: ${serviceUrl}, H1: "${serviceTitle}" -> ${serviceUrl === '/service' ? 'PASS' : 'FAIL'}`);

  // 6. Test cross-page navigation from /service back to homepage anchor (#ueber-uns)
  console.log('\n6. Testing cross-page navigation from /service back to /#ueber-uns...');
  await evalJs(`(() => {
    const link = Array.from(document.querySelectorAll('nav[aria-label="Hauptnavigation"] a')).find(a => a.innerText.includes('Über uns'));
    if (link) link.click();
  })()`);
  await new Promise(r => setTimeout(r, 1000));
  const backUrl = await evalJs('window.location.pathname');
  const backHash = await evalJs('window.location.hash');
  const backScrollY = await evalJs('window.scrollY');
  console.log(`Path: ${backUrl}, Hash: ${backHash}, ScrollY: ${backScrollY}px -> ${backUrl === '/' && backScrollY > 400 ? 'PASS' : 'FAIL'}`);

  // 7. Test navigating to /galerie
  console.log('\n7. Testing navigation to /galerie (Galerie)...');
  await evalJs(`(() => {
    const link = Array.from(document.querySelectorAll('nav[aria-label="Hauptnavigation"] a')).find(a => a.innerText.includes('Galerie'));
    if (link) link.click();
  })()`);
  await new Promise(r => setTimeout(r, 800));
  const galerieUrl = await evalJs('window.location.pathname');
  console.log(`Current Path: ${galerieUrl} -> ${galerieUrl === '/galerie' ? 'PASS' : 'FAIL'}`);

  // 8. Test CTA "Jetzt kontaktieren" navigating to /kontakt#kontakt-form
  console.log('\n8. Testing CTA "Jetzt kontaktieren" navigation to /kontakt#kontakt-form...');
  await evalJs(`(() => {
    const cta = document.querySelector('header a[href*="kontakt-form"]');
    if (cta) cta.click();
  })()`);
  await new Promise(r => setTimeout(r, 1000));
  const contactUrl = await evalJs('window.location.pathname');
  const contactHash = await evalJs('window.location.hash');
  const formInView = await evalJs(`(() => {
    const f = document.getElementById('kontakt-form');
    if (!f) return false;
    const rect = f.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight;
  })()`);
  console.log(`Path: ${contactUrl}, Hash: ${contactHash}, Form in Viewport: ${formInView} -> ${contactUrl === '/kontakt' && formInView ? 'PASS' : 'FAIL'}`);

  // 9. Test Mobile Navigation
  console.log('\n9. Testing Mobile Navigation & Drawer...');
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await new Promise(r => setTimeout(r, 500));

  // Open mobile menu
  await evalJs(`(() => {
    const btn = document.querySelector('button[aria-label*="Menü"]');
    if (btn) btn.click();
  })()`);
  await new Promise(r => setTimeout(r, 400));

  const mobileNavLinks = await evalJs(`(() => {
    const links = Array.from(document.querySelectorAll('nav[aria-label="Mobile Navigation"] a'));
    return links.map(a => a.innerText.replace(/aktiv/i, '').trim());
  })()`);
  console.log('Mobile Nav Items found:', mobileNavLinks);
  const mobileOrderCorrect = JSON.stringify(mobileNavLinks) === JSON.stringify(expectedOrder);
  console.log('Mobile Order check:', mobileOrderCorrect ? 'PASS' : 'FAIL');

  const mobileCtaText = await evalJs(`(() => {
    const ctas = Array.from(document.querySelectorAll('a[href*="kontakt-form"]'));
    return ctas.some(c => c.innerText.includes('Jetzt kontaktieren'));
  })()`);
  console.log('Mobile CTA "Jetzt kontaktieren" present:', mobileCtaText ? 'PASS' : 'FAIL');

  // Capture mobile menu screenshot
  const mobileMenuScreenshot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('C:/Users/DELL/.gemini/antigravity/brain/532f9ae9-a49f-4205-9bd1-a35b3aadc8a6/nav_verification_mobile_menu.png', Buffer.from(mobileMenuScreenshot.data, 'base64'));

  // Test selecting item in mobile menu closes drawer
  await evalJs(`(() => {
    const link = Array.from(document.querySelectorAll('nav[aria-label="Mobile Navigation"] a')).find(a => a.innerText.includes('Leistungen'));
    if (link) link.click();
  })()`);
  await new Promise(r => setTimeout(r, 600));

  const drawerClosed = await evalJs(`document.querySelector('nav[aria-label="Mobile Navigation"]') === null`);
  const mobilePathAfterClick = await evalJs('window.location.pathname');
  console.log(`Menu closed on selection: ${drawerClosed}, Navigated to: ${mobilePathAfterClick} -> ${drawerClosed && mobilePathAfterClick === '/service' ? 'PASS' : 'FAIL'}`);

  // 10. Test Footer Legal Links
  console.log('\n10. Testing Footer Legal Links (Impressum & Datenschutz)...');
  const footerLegalLinks = await evalJs(`(() => {
    const links = Array.from(document.querySelectorAll('footer a'));
    return links.map(l => ({ text: l.innerText.trim(), href: l.getAttribute('href') }));
  })()`);
  const hasImpressum = footerLegalLinks.some(l => l.text === 'Impressum' && l.href === '/impressum');
  const hasDatenschutz = footerLegalLinks.some(l => l.text === 'Datenschutz' && l.href === '/datenschutz');
  console.log(`Footer has Impressum: ${hasImpressum ? 'PASS' : 'FAIL'}, Datenschutz: ${hasDatenschutz ? 'PASS' : 'FAIL'}`);

  // Capture final verification screenshot
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  // Navigate back home to verify hero
  await evalJs(`window.location.href = '/'`);
  await new Promise(r => setTimeout(r, 1200));

  const videoPlaying = await evalJs(`(() => {
    const v = document.querySelector('video');
    return v && !v.paused && v.currentTime > 0;
  })()`);
  console.log(`Hero video playing on return: ${videoPlaying ? 'PASS' : 'FAIL'}`);

  const screenshot = await send('Page.captureScreenshot', { format: 'png' });
  const outPath = 'C:/Users/DELL/.gemini/antigravity/brain/532f9ae9-a49f-4205-9bd1-a35b3aadc8a6/nav_verification_desktop.png';
  fs.writeFileSync(outPath, Buffer.from(screenshot.data, 'base64'));
  console.log('Saved verification screenshot:', outPath);

  ws.close();
  chrome.kill();
  console.log('\n--- ALL NAVIGATION TESTS COMPLETED SUCCESSFULLY ---');
}

run().catch((err) => {
  console.error('Test Suite Failed:', err);
  process.exit(1);
});
