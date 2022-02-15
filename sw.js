const cacheArr = ['/'];
const CACHE_NAME = 'cache-v10';
self.addEventListener('install', (event) => {
    console.log('worker is installed');
    // event.waitUntil(
    //     caches.open(CACHE_NAME).then((cache) => {
    //       console.log("Opened cache");
    //       cache.addAll(cacheArr).then(() => self.skipWaiting());
    //     })
    // );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (CACHE_NAME !== cacheName) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });


self.addEventListener("fetch", (fetchEvent) => {
    fetchEvent.respondWith(
        fetch(fetchEvent.request).then(res => {
            const cacheRes = res.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(fetchEvent.request, cacheRes));
            return res;
        }).catch(() => caches.match(fetchEvent.request).then(res => res))
    );
  });


