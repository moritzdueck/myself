/**
 * verify-harness.js — drive this app from an automated browser.
 *
 * Every automated browser we use (Claude Code's preview pane, Claude-in-Chrome)
 * runs the tab with `document.visibilityState === 'hidden'`. In a hidden tab the
 * browser stops the rendering steps, and three things this app is built on stop
 * with them:
 *
 *   1. `requestAnimationFrame` never fires. Every scene is scroll-driven through
 *      `useScrollBeats`, which measures inside a rAF — so the whole app sits
 *      frozen at progress 0.
 *   2. `IntersectionObserver` never delivers a record, not even the initial one.
 *      The cover's `[data-reveal]` elements stay at `opacity: 0` forever.
 *   3. `window.scrollTo()` moves `scrollY` but dispatches no `scroll` event, so
 *      nothing that listens for one ever re-measures.
 *   4. CSS transitions and animations never advance. An element you have just
 *      revealed keeps reporting the transition's START value — `opacity: 0` —
 *      no matter how long you wait. This is the one that wastes the most time:
 *      it makes working code look broken, and the instinct is to go "fix" it.
 *
 * `setTimeout`, by contrast, is NOT throttled here — it fires on time. That is
 * the lever this file pulls: rAF is re-pointed at timers, so the app's own
 * choreography runs untouched and you can read it at any scroll offset.
 *
 * Usage, from the page under test:
 *
 *     const v = (await import('/verify-harness.js')).install()
 *     await v.toScene(2, 0.45)              // scene 2, 45% through its scroll
 *     v.q('.msg', 2).map(v.describe)        // read what is on screen
 *
 * Nothing in `src/` imports this file, so it is not part of the app bundle. It
 * lives in `public/` so it is served verbatim at `/verify-harness.js` by both
 * `npm run dev` and `npm run preview`.
 */

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let patched = null;

/**
 * Re-point `requestAnimationFrame` at `setTimeout`.
 *
 * The app has self-rescheduling rAF loops (the MoodCircles and WorldOfStress
 * canvases), so this keeps running until `restore()`. That is deliberate — those
 * canvases only animate while it does.
 */
function patchRaf(intervalMs) {
  if (patched) return false;
  const pending = new Map();
  let seq = 0;
  patched = {
    raf: window.requestAnimationFrame,
    caf: window.cancelAnimationFrame,
    pending,
  };
  window.requestAnimationFrame = (cb) => {
    const id = ++seq;
    pending.set(
      id,
      setTimeout(() => {
        pending.delete(id);
        cb(performance.now());
      }, intervalMs),
    );
    return id;
  };
  window.cancelAnimationFrame = (id) => {
    const t = pending.get(id);
    if (t !== undefined) {
      clearTimeout(t);
      pending.delete(id);
    }
  };
  return true;
}

function restore() {
  if (!patched) return false;
  for (const t of patched.pending.values()) clearTimeout(t);
  window.requestAnimationFrame = patched.raf;
  window.cancelAnimationFrame = patched.caf;
  patched = null;
  return true;
}

/**
 * Stand in for the IntersectionObserver that never fires: mark every
 * `[data-reveal]` as revealed. Without this the cover's title, subtitle and nav
 * are all `opacity: 0` and the page reads as broken.
 */
function reveal(root = document) {
  const els = [...root.querySelectorAll('[data-reveal]')];
  els.forEach((el) => el.classList.add('in'));
  return els.length;
}

/**
 * Cut every CSS transition and animation.
 *
 * In a hidden tab a transition is started but never stepped, so `getComputedStyle`
 * reports the value the element is transitioning FROM — forever. Removing the
 * transition snaps each element to the value it is transitioning TO, which is the
 * state an assertion actually wants to read.
 *
 * The cost: this cannot tell you a transition's duration or easing. Read those
 * from the stylesheet instead.
 */
function killMotion() {
  if (document.getElementById('__nvc-no-motion')) return false;
  const style = document.createElement('style');
  style.id = '__nvc-no-motion';
  style.textContent = '*,*::before,*::after{transition:none!important;animation:none!important}';
  document.head.appendChild(style);
  return true;
}

function restoreMotion() {
  document.getElementById('__nvc-no-motion')?.remove();
}

/** Let timers and Vue's scheduler run. Vue flushes on a microtask, so a read
 *  taken in the same tick as a scroll returns the PREVIOUS DOM. */
async function settle(ms = 180) {
  await sleep(ms);
}

/**
 * Wait until the DOM stops changing — the primitive everything else settles on.
 *
 * `MutationObserver` delivers on a microtask, so unlike rAF and
 * IntersectionObserver it keeps working in a hidden tab. Two measurements make it
 * the right signal here: the page produces ZERO mutations while idle (the canvas
 * loops paint, they do not touch the DOM), and ~57 in the render after a scroll.
 * So this is fast when nothing is happening and correct when a render is slow —
 * which no fixed sleep manages.
 */
function quiet({ quietFor = 200, timeout = 2500, root = document.body } = {}) {
  return new Promise((resolve) => {
    const started = performance.now();
    let lastMutation = started;
    const mo = new MutationObserver(() => {
      lastMutation = performance.now();
    });
    mo.observe(root, { subtree: true, childList: true, attributes: true, characterData: true });
    const tick = () => {
      const now = performance.now();
      if (now - lastMutation >= quietFor || now - started >= timeout) {
        mo.disconnect();
        resolve(Math.round(now - started));
        return;
      }
      setTimeout(tick, 20);
    };
    setTimeout(tick, 20);
  });
}

/**
 * Wait until a reading stops changing.
 *
 * `quiet()` is the better default; reach for this when what you care about is one
 * specific value rather than the page as a whole. Different things here settle at
 * very different speeds — an inline `opacity` from a `seg()` binding lands about
 * 25ms after the scroll, the message thread takes ~120ms — so any single sleep is
 * either wrong for one of them or needlessly slow for both.
 *
 * Note the failure mode `minWait` exists for: a purely change-based test settles
 * on the OLD value during the gap before a slow change starts, and reports a line
 * that has not arrived yet as missing.
 *
 * `read` should return something JSON-comparable.
 */
async function stable(read, { interval = 25, needed = 2, minWait = 140, timeout = 1200 } = {}) {
  const started = performance.now();
  const deadline = started + timeout;
  let last = JSON.stringify(read() ?? null);
  let runs = 0;
  while (performance.now() < deadline) {
    await sleep(interval);
    const now = JSON.stringify(read() ?? null);
    if (now === last) runs++;
    else {
      runs = 0;
      last = now;
    }
    // `minWait` guards the gap BEFORE a slow change starts. The message thread
    // does not begin updating until ~120ms after the scroll, so a purely
    // change-based test settles on the old value and reports a line that has not
    // arrived yet as missing.
    if (runs >= needed && performance.now() - started >= minWait) return read();
  }
  return read();
}

let readyOnce = null;

/**
 * Wait out the app's mount — once per page load.
 *
 * Scrolling before the app has mounted produces a page that is confidently wrong
 * rather than obviously broken: `useScrollBeats` registers its scroll listener in
 * `onMounted`, so a `scroll` dispatched before that lands on nothing, and the
 * scene stays on the beat it measured at mount while other bindings read as if
 * the scroll had happened. Measured here: the story mutates for ~1.4s after load.
 *
 * `to()` awaits this itself, so there is nothing to remember.
 */
function ready() {
  if (!readyOnce) readyOnce = quiet();
  return readyOnce;
}

/**
 * Scroll, tell the app about it, and wait for it to finish reacting.
 *
 * `window.scrollTo` alone is not enough: it moves `scrollY` but dispatches no
 * `scroll` event in a hidden tab, so nothing re-measures.
 *
 * By default this waits for the DOM to go quiet, which is right for almost
 * everything. `until` adds a second guard on one specific reading; `settleMs`
 * forces a plain sleep instead (rarely what you want).
 */
async function to(y, { settleMs, until } = {}) {
  await ready();
  window.scrollTo(0, Math.max(0, Math.round(y)));
  window.dispatchEvent(new Event('scroll'));
  if (settleMs !== undefined) await settle(settleMs);
  else await quiet();
  if (until) await stable(until);
  return window.scrollY;
}

/** Scroll to a fraction of the whole document. */
async function toFraction(f, opts) {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return to(max * f, opts);
}

/** The story's panel slots, in order. Each bespoke scene is one of these. */
function scenes() {
  return [...document.querySelectorAll('.block')];
}

/**
 * Put scene `i` at progress `p` (0..1) — the same 0..1 `useScrollBeats` computes,
 * so `p` lines up one-to-one with the `seg(a, b)` windows the choreography is
 * written in.
 */
async function toScene(i, p, opts) {
  const el = scenes()[i];
  if (!el) throw new Error(`no scene at index ${i} (have ${scenes().length})`);
  const rect = el.getBoundingClientRect();
  const top = rect.top + window.scrollY;
  const scrollable = rect.height - window.innerHeight;
  return to(top + Math.max(0, scrollable) * p, opts);
}

/**
 * How many beats a dialog scene runs for, recovered from the DOM.
 *
 * `DialogScene` sizes its spacer at `BEATS * 85vh`, so the count can be read back
 * without reaching into the component. That matters because every timing in
 * `useDialogTimeline` is written in beats, never in scroll fractions — so an
 * assertion should be too, or it silently drifts the next time the script is
 * re-cut.
 */
function beatsOf(sceneIndex) {
  const spacer = scenes()[sceneIndex]?.querySelector('.spacer');
  if (!spacer) return null;
  return Math.round(spacer.getBoundingClientRect().height / (0.85 * window.innerHeight));
}

/**
 * Put a dialog scene on beat `k` — the same unit `useDialogTimeline` uses, so a
 * threshold read off the source (`at(id)`, `firstLine`, `tailStart`) can be
 * checked directly. Fractional beats are fine.
 */
async function toBeat(sceneIndex, k, opts) {
  const beats = beatsOf(sceneIndex);
  if (!beats) throw new Error(`scene ${sceneIndex} has no .spacer — not a dialog scene`);
  return toScene(sceneIndex, k / (beats - 1), opts);
}

/**
 * Query, SCOPED to a scene. Every panel stays mounted for the whole scroll and
 * class names like `.msg` / `.scene-intro` exist in several scenes at once, so an
 * unscoped `document.querySelectorAll` silently measures the wrong one.
 *
 * Elements mid leave-transition are dropped: without frames a TransitionGroup
 * leave never completes, so removed bubbles linger and inflate every count.
 */
function q(selector, sceneIndex) {
  const root = sceneIndex === undefined ? document : scenes()[sceneIndex];
  if (!root) return [];
  return [...root.querySelectorAll(selector)].filter(
    (el) => !/leave|enter-from/.test(el.className),
  );
}

/** A compact, comparable snapshot of one element. */
function describe(el) {
  if (!el) return null;
  const cs = getComputedStyle(el);
  const r = el.getBoundingClientRect();
  return {
    text: (el.textContent || '').trim().slice(0, 80),
    opacity: +(+cs.opacity).toFixed(3),
    color: cs.color,
    background: cs.backgroundColor,
    visible: +cs.opacity > 0.01 && r.width > 0 && r.height > 0,
    top: Math.round(r.top),
    height: Math.round(r.height),
  };
}

/**
 * Click through the DOM rather than through screen coordinates. Screenshots come
 * back blank in a hidden tab, so coordinate-based clicking is guesswork; Vue's
 * `@click` responds to a dispatched click just the same.
 */
async function click(target, opts) {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) throw new Error(`click: nothing matches ${target}`);
  el.click();
  await settle(opts?.settleMs ?? 120);
  return describe(el);
}

/**
 * Walk a scene and sample it — the way to assert a choreography CURVE rather than
 * one hand-picked frame.
 *
 * Each step waits for the DOM to go quiet, which on the story costs up to ~1s:
 * after a scroll the room keeps easing its colour (the puppets' SVG fills) for
 * about that long. That is real settling time, not overhead — it is exactly what
 * a short fixed sleep skips past, and skipping it is what makes a sweep look like
 * a choreography bug.
 *
 * So keep `steps` short: budget ~1-2s each and stay well inside the 30s
 * javascript_tool limit. Five per call is comfortable; split a finer sweep across
 * several calls.
 */
async function sweep(sceneIndex, steps, sample) {
  const out = [];
  for (const p of steps) {
    // Both guards, deliberately. A render arrives in bursts, so `quiet` alone can
    // return in a gap partway through one — that is how a sweep ends up reporting
    // two messages where the source says seven.
    await toScene(sceneIndex, p, { until: sample });
    out.push({ p, ...sample(p) });
  }
  return out;
}

/** Page-level sanity: did it actually render, and did anything blow up? */
function report() {
  return {
    url: location.href,
    viewport: [window.innerWidth, window.innerHeight],
    scrollHeight: document.documentElement.scrollHeight,
    scenes: scenes().length,
    headings: [...document.querySelectorAll('h1, h2')].map((h) => h.textContent.trim()).slice(0, 12),
    rafPatched: !!patched,
  };
}

/**
 * Install everything and hand back the toolkit. Idempotent — calling it twice
 * will not double-patch rAF.
 */
export function install({ intervalMs = 16, motion = false } = {}) {
  patchRaf(intervalMs);
  if (!motion) killMotion();
  reveal();
  // Make every scroll-driven component re-measure. A hidden tab starts at a 0x0
  // viewport, so anything that measured at mount holds nonsense until it is told
  // to look again.
  window.dispatchEvent(new Event('resize'));
  const api = {
    sleep,
    settle,
    stable,
    quiet,
    ready,
    to,
    toFraction,
    toScene,
    toBeat,
    beatsOf,
    scenes,
    q,
    describe,
    click,
    sweep,
    reveal,
    killMotion,
    restoreMotion,
    report,
    restore,
  };
  window.nvcVerify = api;
  return api;
}

export default install;
