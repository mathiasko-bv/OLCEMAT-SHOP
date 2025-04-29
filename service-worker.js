const CACHE_NAME = "olcemat-cache-v1";
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css', // si tu as un fichier CSS séparé
  '/script.js', // si ton JavaScript est dans un fichier séparé
  'https://imgur.com/ShAyWRB' // icône
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
