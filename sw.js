self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('myapp').then(
            (cache) => cache.addAll([
                '',
                'index.html',
                'list.js',
                'script.js',
                'fox-icon.png',
            ])
        ),
    );
});
  
self.addEventListener('fetch', (e) => {
    console.log(e.request.url);

    e.respondWith(
        caches.match(e.request).then(
            (response) => response || fetch(e.request)
        )
    );
});