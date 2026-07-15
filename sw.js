// public/sw.js or root sw.js
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (e) => {
    // Safe pass-through rules allowing live real-time QuickNode RPC queries
    e.respondWith(fetch(e.request));
});

