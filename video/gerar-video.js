#!/usr/bin/env node
/* Gera o MP4 (1080×1920, 9:16) a partir de video/modelo.html + video/imoveis.js.
   Uso:  node video/gerar-video.js [saida.mp4]
   Requer: Node 18+, Playwright (npm i playwright && npx playwright install chromium) e ffmpeg. */

const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');
const { chromium } = require('playwright');

const DIR = __dirname;
const OUT = path.resolve(process.argv[2] || path.join(DIR, 'oikos-imoveis.mp4'));

(async () => {
  const browser = await chromium.launch(
    fs.existsSync('/opt/pw-browsers/chromium') ? { executablePath: '/opt/pw-browsers/chromium' } : {}
  ).catch(() => chromium.launch());
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  page.on('console', m => m.type() === 'warning' && console.warn('[página]', m.text()));
  await page.goto('file://' + path.join(DIR, 'modelo.html') + '?render');
  await page.evaluate(() => window.VIDEO.ready);
  const { duration, fps, musica } = await page.evaluate(() => ({
    duration: window.VIDEO.duration, fps: window.VIDEO.fps, musica: window.VIDEO.musica,
  }));
  const frames = Math.round(duration * fps);
  const music = musica ? path.resolve(DIR, musica) : '';
  const hasMusic = music && fs.existsSync(music);
  if (musica && !hasMusic) console.warn(`Música não encontrada (${music}), gerando sem áudio.`);

  const args = ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', '-'];
  if (hasMusic) args.push('-i', music, '-af', `afade=t=out:st=${Math.max(0, duration - 2).toFixed(2)}:d=2`, '-c:a', 'aac', '-b:a', '192k', '-shortest');
  args.push('-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', OUT);
  const ff = spawn('ffmpeg', args, { stdio: ['pipe', 'inherit', 'inherit'] });
  const done = new Promise((res, rej) => ff.on('close', c => (c === 0 ? res() : rej(new Error('ffmpeg saiu com código ' + c)))));

  console.log(`Gerando ${frames} quadros (${duration.toFixed(1)} s a ${fps} fps)…`);
  for (let f = 0; f < frames; f++) {
    await page.evaluate(t => window.VIDEO.renderAt(t), f / fps);
    const buf = await page.screenshot({ type: 'jpeg', quality: 92 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (f % fps === 0) process.stdout.write(`\r  ${Math.round((f / frames) * 100)}%`);
  }
  ff.stdin.end();
  await done;
  await browser.close();
  console.log(`\r  100%\nPronto: ${OUT}`);
})().catch(e => { console.error(e); process.exit(1); });
