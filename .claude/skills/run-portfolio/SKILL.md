---
name: run-portfolio
description: Build, run, and drive Javier Ordoñez's portfolio site (React + Vite). Use when asked to start the dev server, build it, take a screenshot of the UI, or interact with the running page.
---

This is a single-page React 18 + TypeScript + Vite portfolio (no backend,
no test suite). For agent/automated use, start the Vite dev server, then
drive a headless Chromium against it via the Playwright REPL at
`.claude/skills/run-portfolio/driver.mjs` — there is no `chromium-cli`
binary in this environment, so the driver wraps `playwright` directly.

All paths below are relative to the repo root.

## Prerequisites

Node.js + npm (already available). The driver needs its own Chromium
browser binary and the `playwright` package — these are **not** part of
the app's own dependencies, they're isolated inside the skill directory:

```bash
cd .claude/skills/run-portfolio
npm install                      # installs playwright (declared in this dir's package.json)
npx playwright install chromium  # downloads the browser binary (~300MB, one-time, cached in ~/.cache/ms-playwright)
```

## Build

```bash
npm install       # repo root — app dependencies
npm run build      # tsc && vite build -> dist/
```

## Run (agent path)

Start the dev server in the background, wait for it to actually serve,
then drive it with the Playwright REPL.

```bash
npm run dev > /tmp/vite-dev.log 2>&1 &
timeout 30 bash -c 'until grep -qo "http://localhost:[0-9]*/" /tmp/vite-dev.log; do sleep 0.5; done'
URL=$(grep -o "http://localhost:[0-9]*/" /tmp/vite-dev.log | head -1)
echo "$URL"
```

Vite falls back to the next free port if 3000 is taken (this machine
often has other dev servers running) — always read the actual port out
of the log, don't assume 3000.

Drive it — pipe commands to the driver directly for one-shot use:

```bash
node .claude/skills/run-portfolio/driver.mjs <<EOF
nav $URL
wait #root
ss 01-landing
click-text Servicios
ss 02-services
quit
EOF
```

Or wrap it in tmux for interactive/iterative use. **Give tmux the
command directly** (`tmux new-session -d -s NAME -x W -y H "<cmd>"`) —
spawning a plain login shell in this environment triggers an unrelated
interactive shell first-run wizard that eats your `send-keys` input
(see Gotchas):

```bash
tmux new-session -d -s portfolio-drv -x 200 -y 50 \
  "bash --noprofile --norc -c 'node .claude/skills/run-portfolio/driver.mjs'"
timeout 15 bash -c 'until tmux capture-pane -t portfolio-drv -p | grep -q "driver>"; do sleep 0.3; done'
tmux send-keys -t portfolio-drv "nav $URL" Enter
timeout 20 bash -c 'until tmux capture-pane -t portfolio-drv -p | grep -q "loaded:"; do sleep 0.3; done'
tmux send-keys -t portfolio-drv 'ss landing' Enter
timeout 10 bash -c 'until tmux capture-pane -t portfolio-drv -p | grep -q "screenshot:"; do sleep 0.3; done'
tmux capture-pane -t portfolio-drv -p
tmux send-keys -t portfolio-drv 'quit' Enter
tmux kill-session -t portfolio-drv
```

Screenshots land in `/tmp/shots/` (override with `SCREENSHOT_DIR`).
**Actually open the PNG** — a "loaded" log line proves the request
succeeded, not that the page rendered correctly.

Stop the dev server: `lsof -ti:<port> -sTCP:LISTEN | xargs -r kill`
(the `$!` from `npm run dev &` is only the npm wrapper, npm doesn't
forward SIGTERM to the vite child it spawns).

### Driver commands

| command | what it does |
|---|---|
| `nav <url>` | launch Chromium (first call only) and navigate |
| `ss [name]` | full-page screenshot → `/tmp/shots/<name>.png` |
| `click <css-sel>` | Playwright `.click()` on a CSS selector |
| `click-text <text>` | click first element containing that text |
| `fill <css-sel> <value>` | fill a form input |
| `wait <css-sel>` | wait up to 10s for a selector to appear |
| `scroll <px>` | `window.scrollBy(0, px)` |
| `eval <js>` | evaluate JS in the page, print JSON result |
| `text [css-sel]` | print `innerText` of selector (or whole body) |
| `quit` | close the browser, exit |

## Run (human path)

```bash
npm run dev   # opens on http://localhost:3000 (or next free port) — Ctrl-C to stop
npm run preview   # serve the production build from dist/
```

## Test

No test suite exists in this repo (`package.json` has no `test` script).
Verification is `npm run build` (type-checks via `tsc` then bundles) plus
the driver screenshot flow above.

## Gotchas

- **`chromium-cli` is not installed in this environment.** The driver
  uses the `playwright` npm package directly instead, isolated in its
  own `package.json` inside the skill directory so it doesn't touch the
  app's real dependencies.
- **tmux + a plain login shell hits an interactive wizard.** Running
  `tmux new-session -d -s x 'node driver.mjs'` as a *login* shell in
  this environment drops into a shell first-run prompt ("Does this look
  like a lock? (y/n/r/q)") that swallows all subsequent `send-keys`
  input and the driver never starts. Fix: pass the command straight to
  tmux with `bash --noprofile --norc -c '...'` as shown above — it skips
  shell rc/greeting entirely.
- **readline fires `line` events without waiting for async handlers.**
  Piping multiple commands via heredoc (or fast `send-keys`) would
  otherwise run `ss` before `nav` finished launching the browser. The
  driver serializes commands through an internal promise chain — this
  is why `driver.mjs` looks more involved than a naive REPL; don't
  simplify it back to a bare `rl.on('line', async ...)`.
  Symmetrically, `rl`'s `close` event (stdin/heredoc EOF) fires
  immediately, in the same synchronous burst as the last `line` event —
  well before the queued commands finish — so the close handler also
  waits on the same chain before exiting.
- **Vite picks a fallback port.** This machine commonly has other dev
  servers already bound to 3000-3002, so Vite silently moves to 3003+.
  Always parse the real URL out of the dev-server log; don't hardcode
  port 3000.
- **`fullPage` screenshots don't change with `click`-driven navigation**
  to an in-page anchor (the nav links are `#section` scrolls) — the
  full-page capture includes the whole document regardless of scroll
  position, so before/after screenshots around a scroll-link click look
  identical. That's expected; check `click-text ... -> OK` in the log
  (or use `eval` to read `window.scrollY`) to confirm the click landed,
  don't rely on the screenshot alone.

## Troubleshooting

- **`Cannot find module 'playwright'`**: run `npm install` inside
  `.claude/skills/run-portfolio/` (its own `package.json`, separate from
  the app's).
- **Browser launch hangs/fails, no Chromium found**: run
  `npx playwright install chromium` inside the skill directory.
- **`EADDRINUSE` on rerun**: a previous `npm run dev` is still bound.
  `lsof -ti:<port> -sTCP:LISTEN | xargs -r kill` before relaunching.
- **`npm install` prints an `esbuild` "install scripts blocked"
  warning**: harmless here — Vite's dev server still starts fine
  (esbuild's postinstall only fetches a platform binary it already had
  cached in this environment). If `npm run dev` actually fails to start
  afterward, run `npm install-scripts approve esbuild` and reinstall.
