// Renders scripts/og.html into public/og-es.png, public/og-en.png and favicons.
// Usage: pnpm dlx playwright@1.59 install chromium (once), then: node scripts/render-assets.mjs
// Requires `playwright` resolvable (e.g. `pnpm dlx -p playwright@1.59 node scripts/render-assets.mjs`).
import { chromium } from 'playwright';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const src = 'file://' + root + 'scripts/og.html';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1300, height: 2000 }, deviceScaleFactor: 1 });

for (const lang of ['es', 'en']) {
  await page.goto(`${src}#${lang}`);
  await page.reload();
  await page.evaluate(() => document.fonts.ready);
  await page.locator('#og').screenshot({ path: `${root}public/og-${lang}.png` });
}

// Favicons: rounded icon with transparent corners for apple/android, square source for .ico
const icon = page.locator('#icon');
await page.goto(src);
await page.evaluate(() => document.fonts.ready);
await icon.screenshot({ path: `${root}public/icon-512.png`, omitBackground: true });

const pngAt = async (size) => {
  const p = await browser.newPage({ viewport: { width: 512, height: 512 }, deviceScaleFactor: size / 512 });
  await p.goto(src);
  await p.evaluate(() => document.fonts.ready);
  const buf = await p.locator('#icon').screenshot({ omitBackground: true });
  await p.close();
  return buf;
};

writeFileSync(`${root}public/apple-touch-icon.png`, await pngAt(180));

// favicon.ico containing 32px and 48px PNG frames
const frames = [await pngAt(32), await pngAt(48)];
const sizes = [32, 48];
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(frames.length, 4);
let offset = 6 + 16 * frames.length;
const dir = frames.map((buf, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(sizes[i], 0);
  e.writeUInt8(sizes[i], 1);
  e.writeUInt16LE(1, 4);
  e.writeUInt16LE(32, 6);
  e.writeUInt32LE(buf.length, 8);
  e.writeUInt32LE(offset, 12);
  offset += buf.length;
  return e;
});
writeFileSync(`${root}public/favicon.ico`, Buffer.concat([header, ...dir, ...frames]));

await browser.close();
console.log('assets rendered');
