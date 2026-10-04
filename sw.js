/* Service worker for Thyroid Field Notes.
   Purpose: after the first visit the app opens with no signal at all.
   It caches the app shell only. It never touches her log — that lives in
   localStorage on the device and is never sent anywhere. */
var VERSION = 'fn-2026-10-04b';
var SHELL = ['./', './index.html', './manifest.webmanifest',
             './apple-touch-icon.png', './icon-192.png', './icon-512.png', './icon.svg'];

self.addEventListener('install', function (e) {
  // Cache the shell, but never fail the install over one missing extra.
  e.waitUntil(caches.open(VERSION).then(function (c) {
    return Promise.all(SHELL.map(function (u) {
      return c.add(new Request(u, { cache: 'reload' }))['catch'](function () {});
    }));
  }));
  // Do NOT skipWaiting: a new version must not swap under her mid-entry.
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (k) { return k === VERSION ? null : caches['delete'](k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;
  // Cache first, so it opens instantly and works offline; refresh in the
  // background so the next launch has any update.
  e.respondWith(caches.match(req).then(function (hit) {
    var net = fetch(req).then(function (res) {
      if (res && res.ok) {
        var copy = res.clone();
        caches.open(VERSION).then(function (c) { c.put(req, copy); });
      }
      return res;
    })['catch'](function () { return hit; });
    return hit || net;
  }));
});
