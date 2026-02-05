// This is a minimal service worker to make the app installable.
self.addEventListener('fetch', (event) => {
  // A simple pass-through fetch handler is enough to meet the PWA criteria.
  event.respondWith(fetch(event.request));
});
