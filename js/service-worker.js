// service-worker.js

const CACHE_NAME = 'mi-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/css/estiloIndex.css',
  '/css/estiloMenu.css',
  '/paginas/inicio.html',
  '/paginas/ejemplo1.html',
  '/paginas/listavideos.html',
  '/paginas/perfil.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
