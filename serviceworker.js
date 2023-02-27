importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"
);

workbox.routing.registerRoute(
  new RegExp(/.*\.(?:js|css)/g),
  workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
  new RegExp(/.*\.(?:png|jpg|jpeg|svg|gif|webp|mp3|mp4)/g),
  workbox.strategies.cacheFirst()
);
