// Basic offline-first Service Worker for a static site
const CACHE_NAME = "ldfit-asaf-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k === CACHE_NAME ? null : caches.delete(k))))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  // Network-first for GitHub API calls (Gist), cache-first for same-origin
  const url = new URL(req.url);
  if (url.origin.includes("api.github.com")) {
    event.respondWith(
      fetch(req).catch(() => caches.match(req))
    );
    return;
  }
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((res) => {
      // cache new asset
      const copy = res.clone();
      caches.open(CACHE_NAME).then((cache)=>cache.put(req, copy));
      return res;
    }).catch(() => cached))
  );
});
