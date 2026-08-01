const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const http = require('http');
const handler = require('serve-handler');

const routes = ['/', '/about', '/projects', '/resume', '/stream', '/contact'];
const buildDir = path.join(__dirname, 'build');
const port = 45678;

function waitForServer(url, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    (function check() {
      http.get(url, res => resolve()).on('error', () => {
        if (Date.now() - start > timeout) return reject(new Error('server did not start'));
        setTimeout(check, 200);
      });
    })();
  });
}

(async () => {
  const server = http.createServer((req, res) =>
    handler(req, res, { public: buildDir, rewrites: [{ source: '**', destination: '/index.html' }] })
  );
  await new Promise(resolve => server.listen(port, resolve));
  await waitForServer(`http://localhost:${port}/`);

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

  for (const route of routes) {
    const page = await browser.newPage();
    await page.goto(`http://localhost:${port}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
    // let particles/i18n/async content settle
    await new Promise(r => setTimeout(r, 800));
    const html = await page.content();

    const outPath = route === '/'
      ? path.join(buildDir, 'index.html')
      : path.join(buildDir, route.slice(1), 'index.html');

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html);
    console.log(`✓ prerendered ${route}`);
    await page.close();
  }

  await browser.close();
  server.close();
})();