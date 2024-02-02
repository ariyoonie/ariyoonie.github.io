const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/script.js',
  '/icono.png',  // Asegúrate de tener un ícono para la caché
  // Agrega aquí otros recursos que deseas cachear, como scripts, estilos, imágenes, etc.
];

self.addEventListener('install', event => {
  // Realiza la instalación del Service Worker
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  // Intercepta las solicitudes de red y responde con los recursos almacenados en caché si están disponibles
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  // Elimina cualquier caché antigua cuando se activa un nuevo Service Worker
  event.waitUntil(
    caches.keys()
      .then(cacheNames => Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      ))
  );
});
