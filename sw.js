const CACHE_NAME = 'matinder-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/icon-192.png',
  '/images/icon-512.png',
  // dodaj też swoje zdjęcia profilowe, np.:
  '/images/mati1.jpg',
  '/images/mati2.jpg',
  '/images/mati3.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
