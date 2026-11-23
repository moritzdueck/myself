// The bowl composer's service worker: lets the installed app open without a network.
// The page is one file with its data inside, so keeping a copy of it is enough.
//   This folder (the page, manifest, icons): network first, so an update shows on the next open
//   while online; the last copy when offline.
//   Google Fonts: cache first; the files at a font URL never change.
// Copied to the portfolio next to index.html, like the rest of explore/bowl (see template.html).

const CACHE = "bowl-v1";
const FONTS = "bowl-fonts-v1";
const PRECACHE = ["./", "manifest.webmanifest", "icon-192.png", "icon-512.png",
                  "icon-maskable-512.png", "apple-touch-icon.png"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== FONTS).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", event => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    event.respondWith(cacheFirst(request));
  } else if (url.origin === location.origin && url.pathname.startsWith(new URL("./", location).pathname)) {
    event.respondWith(networkFirst(request));
  }
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE);
  // The page by any of its addresses (/bowl/, /bowl/index.html, with a ?query) is the one copy at "./".
  const key = request.mode === "navigate" ? new URL("./", location).href : request;
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(key, response.clone());
    return response;
  } catch (err) {
    const cached = await cache.match(key, { ignoreSearch: true });
    if (cached) return cached;
    throw err;
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(FONTS);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok || response.type === "opaque") cache.put(request, response.clone());
  return response;
}
