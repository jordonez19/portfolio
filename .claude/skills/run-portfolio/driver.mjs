// REPL driver for the portfolio site. Drives a headless Chromium
// (Playwright) against the Vite dev server. Run under: node driver.mjs
// Wrap in tmux for interactive/agent use — see SKILL.md.
import { chromium } from 'playwright';
import * as readline from 'node:readline';
import * as fs from 'node:fs';
import * as path from 'node:path';

const SHOT_DIR = process.env.SCREENSHOT_DIR || '/tmp/shots';
fs.mkdirSync(SHOT_DIR, { recursive: true });

let browser = null;
let page = null;

const COMMANDS = {
  async nav(url) {
    if (!browser) {
      browser = await chromium.launch({ args: ['--no-sandbox'] });
      page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
    }
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30_000 });
    console.log('loaded:', url);
  },

  async ss(name) {
    if (!page) return console.log('ERROR: nav first');
    const f = path.join(SHOT_DIR, (name || `ss-${Date.now()}`) + '.png');
    await page.screenshot({ path: f, fullPage: true });
    console.log('screenshot:', f);
  },

  async click(sel) {
    if (!page) return console.log('ERROR: nav first');
    try { await page.click(sel, { timeout: 10_000 }); console.log('click', sel, '-> OK'); }
    catch (e) { console.log('click', sel, '-> ERROR:', e.message.split('\n')[0]); }
  },

  async 'click-text'(text) {
    if (!page) return console.log('ERROR: nav first');
    try {
      await page.getByText(text, { exact: false }).first().click({ timeout: 10_000 });
      console.log('click-text', JSON.stringify(text), '-> OK');
    } catch (e) { console.log('click-text -> ERROR:', e.message.split('\n')[0]); }
  },

  async fill(args) {
    if (!page) return console.log('ERROR: nav first');
    const sp = args.indexOf(' ');
    const sel = args.slice(0, sp);
    const value = args.slice(sp + 1);
    try { await page.fill(sel, value, { timeout: 10_000 }); console.log('fill', sel, '-> OK'); }
    catch (e) { console.log('fill -> ERROR:', e.message.split('\n')[0]); }
  },

  async wait(sel) {
    if (!page) return console.log('ERROR: nav first');
    try { await page.waitForSelector(sel, { timeout: 10_000 }); console.log('found:', sel); }
    catch { console.log('TIMEOUT:', sel); }
  },

  async scroll(y) {
    if (!page) return console.log('ERROR: nav first');
    await page.evaluate(px => window.scrollBy(0, px), Number(y) || 800);
    console.log('scrolled', y);
  },

  async eval(expr) {
    if (!page) return console.log('ERROR: nav first');
    try { console.log(JSON.stringify(await page.evaluate(expr))); }
    catch (e) { console.log('ERROR:', e.message); }
  },

  async text(sel) {
    if (!page) return console.log('ERROR: nav first');
    console.log(await page.evaluate(
      s => (s ? document.querySelector(s) : document.body)?.innerText ?? '(null)',
      sel || null));
  },

  async console_errors() {
    console.log('(errors captured live — see driver stdout for [console] lines)');
  },

  async quit() { if (browser) await browser.close().catch(() => {}); browser = null; page = null; },
  help() { console.log('commands:', Object.keys(COMMANDS).join(', ')); },
};

const stdin = fs.createReadStream(null, { fd: fs.openSync('/dev/stdin', 'r') });
const rl = readline.createInterface({ input: stdin, output: process.stdout, prompt: 'driver> ' });

// readline emits 'line' as data streams in — it does NOT wait for an async
// handler to finish before firing the next one. Piping several commands via
// heredoc/tmux send-keys would otherwise race (e.g. "ss" running before
// "nav" has launched the browser). Serialize with a queue instead.
let chain = Promise.resolve();
let closed = false; // stdin ended (heredoc/pipe) — stop calling rl.prompt()

rl.on('line', line => {
  const trimmed = line.trim();
  if (!trimmed) return;
  const cmdKey = trimmed.startsWith('click-text') ? 'click-text' : trimmed.split(' ')[0];
  const rest = trimmed.startsWith(cmdKey) ? trimmed.slice(cmdKey.length + 1) : '';
  const fn = COMMANDS[cmdKey];
  chain = chain.then(async () => {
    if (!fn) { console.log('unknown:', cmdKey, '- try: help'); }
    else {
      try { await fn(rest); } catch (e) { console.log('ERROR:', e.message); }
    }
    if (!closed) rl.prompt();
  });
});
// Fires once stdin ends (heredoc/pipe EOF) — happens immediately, well before
// the queued commands finish running, since the whole heredoc is read in one
// synchronous burst. Wait for the chain to drain before tearing down.
rl.on('close', () => { closed = true; chain.then(() => COMMANDS.quit()).then(() => process.exit(0)); });

console.log('portfolio driver - "help" for commands, "nav <url>" to start');
rl.prompt();
